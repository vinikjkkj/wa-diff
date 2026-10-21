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
      p = c(/Android/),
      _ = c(/Version\/[\d.]+.*Safari/) && !p,
      m = c(/^(?=.*Chrome).*/i),
      y = r && p && m,
      x = c(/AppleWebKit\/[\d.]+/) && a && !m;
    function S() {
      return 2047;
    }
    var C = S(),
      T = _ || g || x ? "\xa0" : "\u200b",
      v = "\n\n",
      N = u ? "\xa0" : T,
      b = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      k =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
    function E(t, e) {
      return new RegExp("^[^" + t + "]*[" + e + "]");
    }
    var O = E(k, b),
      M = E(b, k),
      w = {
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
      D = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 };
    function I(t) {
      var e = {};
      for (var _n2 of Object.keys(t)) e[t[_n2]] = _n2;
      return e;
    }
    var F = I(D),
      P = { normal: 0, segmented: 2, token: 1 },
      R = I(P),
      L = "$",
      K = Symbol["for"]("@lexical/ctrlOrOtherKey"),
      B = "$config";

    function $(t) {
      return function () {};
    }
    function z(t) {
      return { type: t };
    }
    var W = z("SELECTION_CHANGE_COMMAND"),
      U = z("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      j = z("CLICK_COMMAND"),
      H = z("BEFORE_INPUT_COMMAND"),
      V = z("INPUT_COMMAND"),
      Y = z("COMPOSITION_START_COMMAND"),
      J = z("COMPOSITION_END_COMMAND"),
      G = z("DELETE_CHARACTER_COMMAND"),
      q = z("INSERT_LINE_BREAK_COMMAND"),
      X = z("INSERT_PARAGRAPH_COMMAND"),
      Q = z("CONTROLLED_TEXT_INSERTION_COMMAND"),
      Z = z("PASTE_COMMAND"),
      tt = z("REMOVE_TEXT_COMMAND"),
      et = z("DELETE_WORD_COMMAND"),
      nt = z("DELETE_LINE_COMMAND"),
      ot = z("FORMAT_TEXT_COMMAND"),
      rt = z("SET_TEXT_FORMAT_COMMAND"),
      it = z("UNDO_COMMAND"),
      st = z("REDO_COMMAND"),
      lt = z("KEYDOWN_COMMAND"),
      ct = z("KEY_ARROW_RIGHT_COMMAND"),
      at = z("MOVE_TO_END"),
      ut = z("KEY_ARROW_LEFT_COMMAND"),
      ft = z("MOVE_TO_START"),
      dt = z("KEY_ARROW_UP_COMMAND"),
      ht = z("KEY_ARROW_DOWN_COMMAND"),
      gt = z("KEY_ENTER_COMMAND"),
      pt = z("KEY_SPACE_COMMAND"),
      _t = z("KEY_BACKSPACE_COMMAND"),
      mt = z("KEY_ESCAPE_COMMAND"),
      yt = z("KEY_DELETE_COMMAND"),
      xt = z("KEY_TAB_COMMAND"),
      St = z("INSERT_TAB_COMMAND"),
      Ct = z("INDENT_CONTENT_COMMAND"),
      Tt = z("OUTDENT_CONTENT_COMMAND"),
      vt = z("DROP_COMMAND"),
      Nt = z("FORMAT_ELEMENT_COMMAND"),
      bt = z("DRAGSTART_COMMAND"),
      kt = z("DRAGOVER_COMMAND"),
      Et = z("DRAGEND_COMMAND"),
      Ot = z("COPY_COMMAND"),
      Mt = z("CUT_COMMAND"),
      wt = z("SELECT_ALL_COMMAND"),
      At = z("CLEAR_EDITOR_COMMAND"),
      Dt = z("CLEAR_HISTORY_COMMAND"),
      It = z("CAN_REDO_COMMAND"),
      Ft = z("CAN_UNDO_COMMAND"),
      Pt = z("FOCUS_COMMAND"),
      Rt = z("BLUR_COMMAND"),
      Lt = z("KEY_MODIFIER_COMMAND");
    function Kt(t, e) {
      var _babelHelpers$extends;
      return babelHelpers["extends"](
        {},
        e,
        ((_babelHelpers$extends = {}),
        (_babelHelpers$extends[K] = t),
        _babelHelpers$extends),
      );
    }
    var Bt = Kt("metaKey", { ctrlKey: !a, metaKey: a }),
      $t = Kt("altKey", { altKey: a, ctrlKey: !a }),
      zt = [
        ["altKey", 1],
        ["ctrlKey", 2],
        ["metaKey", 4],
        ["shiftKey", 8],
      ];
    function Wt(t, e, n) {
      var o = t.get(e);
      o ? o.push(n) : t.set(e, [n]);
    }
    var _Ut = (function () {
      function Ut() {
        this.byKey = (function () {
          return new Map();
        })();
        this.byCode = (function () {
          return new Map();
        })();
      }
      var _proto = Ut.prototype;
      _proto.add = function add(t) {
        var n = t.key,
          _t$modifiers = t.modifiers,
          o = _t$modifiers === void 0 ? {} : _t$modifiers;
        n.length > 0 || e(399);
        var r = n.toLowerCase();
        for (var _e2 of (function (t) {
          var e = [0];
          var _loop = function _loop() {
            var n = _ref2[0];
            var o = _ref2[1];
            {
              var _r2 = t[n] || !1;
              "any" === _r2
                ? (e = e.concat(
                    e.map(function (t) {
                      return t | o;
                    }),
                  ))
                : _r2 &&
                  (e = e.map(function (t) {
                    return t | o;
                  }));
            }
          };
          for (var _ref2 of zt) {
            _loop();
          }
          return e;
        })(o))
          (Wt(this.byKey, _e2 + ":" + r, t),
            1 === n.length &&
              (/[0-9]/.test(n)
                ? Wt(this.byCode, _e2 + ":Digit" + n, t)
                : /[a-z]/.test(r) &&
                  Wt(this.byCode, _e2 + ":Key" + r.toUpperCase(), t)));
        return this;
      };
      _proto.matches = function matches(t) {
        var e = t.key;
        if (!e) return [];
        var n = (function (t) {
            var e = 0;
            for (var _ref4 of zt) {
              var _n3 = _ref4[0];
              var _o2 = _ref4[1];
              t[_n3] && (e |= _o2);
            }
            return e;
          })(t),
          o = this.byKey.get(n + ":" + e.toLowerCase()),
          r = o ? o.slice() : [];
        if (
          this.byCode.size > 0 &&
          !(1 === e.length && e.charCodeAt(0) <= 127)
        ) {
          var _e3 = this.byCode.get(n + ":" + t.code);
          _e3 && r.push.apply(r, Array.from(_e3));
        }
        return r;
      };
      _proto.match = function match(t) {
        return this.matches(t)[0];
      };
      return Ut;
    })();
    function jt(t) {
      var e = new _Ut();
      for (var _n4 of t) e.add(_n4);
      return e;
    }
    function Ht(t) {
      var e = new Map();
      return {
        dispose: function dispose() {
          for (var _t4 of e.values()) _t4.dispose();
          e.clear();
        },
        register: function register(n, o) {
          var r = e.get(n);
          void 0 === r &&
            ((r = { dispose: t(n, o), holders: new Set() }), e.set(n, r));
          var _i2 = function i() {
            var t = e.get(n);
            t &&
              t.holders["delete"](_i2) &&
              0 === t.holders.size &&
              (e["delete"](n), t.dispose());
          };
          return (r.holders.add(_i2), _i2);
        },
      };
    }
    function Vt() {
      var t;
      try {
        t = "0.52.0+prod.cjs";
      } catch (_unused) {}
      return t != null ? t : '"<unknown>+source"';
    }
    var Yt = Vt();
    var _Jt = (function () {
      function Jt() {
        this._front = (function () {
          return new Set();
        })();
        this._back = (function () {
          return new Set();
        })();
      }
      var _proto2 = Jt.prototype;
      _proto2.addBack = function addBack(t) {
        return (
          delete this._cache,
          this._front.has(t) || this._back.add(t),
          this
        );
      };
      _proto2.addFront = function addFront(t) {
        return (
          delete this._cache,
          this._back.has(t) || this._front.add(t),
          this
        );
      };
      _proto2["delete"] = function _delete(t) {
        return (
          delete this._cache,
          this._front["delete"](t) || this._back["delete"](t)
        );
      };
      _proto2.toArray = function toArray() {
        var t = Array.from(this._front).reverse();
        for (var _e4 of this._back) t.push(_e4);
        return t;
      };
      _proto2.toReadonlyArray = function toReadonlyArray() {
        return ((this._cache = this._cache || this.toArray()), this._cache);
      };
      _proto2[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.toReadonlyArray()[
            typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
          ]();
        };
      return babelHelpers.createClass(Jt, [
        {
          key: "size",
          get: function get() {
            return this._front.size + this._back.size;
          },
        },
      ]);
    })();
    var Gt = null;
    function qt(t, e) {
      if (e === void 0) {
        e = 1e3;
      }
      return t instanceof _Xt
        ? t.clone()
        : t.size < e
          ? new Map(t)
          : new _Xt().init(new Map(t), void 0, t.size);
    }
    var _Xt = (function () {
      function Xt() {
        this._mutable = !1;
        this._old = void 0;
        this._nursery = void 0;
        this._size = 0;
      }
      var _proto3 = Xt.prototype;
      _proto3.clone = function clone() {
        return (
          (this._mutable = !1),
          new Xt().init(this._old, this._nursery, this._size)
        );
      };
      _proto3.init = function init(t, e, n) {
        return ((this._old = t), (this._nursery = e), (this._size = n), this);
      };
      _proto3.has = function has(t) {
        return void 0 !== this.get(t);
      };
      _proto3.getWithTombstone = function getWithTombstone(t) {
        var e = this._nursery && this._nursery.get(t);
        return void 0 !== e ? e : this._old && this._old.get(t);
      };
      _proto3.get = function get(t) {
        var e = this.getWithTombstone(t);
        return e === Gt ? void 0 : e;
      };
      _proto3.shouldCompact = function shouldCompact() {
        return void 0 !== this._nursery && 2 * this._nursery.size > this._size;
      };
      _proto3.getNursery = function getNursery() {
        return (
          (this._mutable && this._nursery) ||
            (this.compact(),
            (this._nursery = new Map(this._nursery)),
            (this._mutable = !0)),
          this._nursery
        );
      };
      _proto3.compact = function compact(t) {
        if (t === void 0) {
          t = !1;
        }
        if (
          this._nursery &&
          this._nursery.size > 0 &&
          (t || this.shouldCompact())
        ) {
          var _t5 = new Map(this._old);
          for (var _ref6 of this._nursery) {
            var _e5 = _ref6[0];
            var _n5 = _ref6[1];
            _n5 !== Gt ? _t5.set(_e5, _n5) : _t5["delete"](_e5);
          }
          ((this._old = _t5), (this._nursery = void 0));
        }
        return ((this._mutable = !1), this);
      };
      _proto3.set = function set(t, e) {
        var n = this.getWithTombstone(t);
        if (n === e) return this;
        var o = this.getNursery();
        return (
          (n !== Gt && void 0 !== n) ||
            (this._size++, n === Gt && o["delete"](t)),
          o.set(t, e),
          this
        );
      };
      _proto3["delete"] = function _delete(t) {
        var e = this.has(t);
        return (e && (this.getNursery().set(t, Gt), this._size--), e);
      };
      _proto3.getOrInsert = function getOrInsert(t, e) {
        var n = this.get(t);
        return void 0 !== n ? n : (this.set(t, e), e);
      };
      _proto3.getOrInsertComputed = function getOrInsertComputed(t, e) {
        var n = this.get(t);
        if (void 0 !== n) return n;
        var o = e(t);
        return (this.set(t, o), o);
      };
      _proto3.clear = function clear() {
        ((this._mutable = !1),
          (this._old = void 0),
          (this._nursery = void 0),
          (this._size = 0));
      };
      _proto3.keys = function* keys() {
        for (var _t6 of this.entries()) yield _t6[0];
      };
      _proto3.values = function* values() {
        for (var _t7 of this.entries()) yield _t7[1];
      };
      _proto3.entries = function* entries() {
        var t = this._nursery,
          e = this._old;
        if (t) {
          if (e)
            for (var _n6 of e) {
              var _e6 = _n6[0],
                _o3 = t.get(_e6);
              _o3 !== Gt && (void 0 !== _o3 && (_n6[1] = _o3), yield _n6);
            }
          for (var _n7 of t)
            _n7[1] === Gt || (e && e.has(_n7[0])) || (yield _n7);
        } else e && (yield* e);
      };
      _proto3.forEach = function forEach(t, e) {
        void 0 !== e && (t = t.bind(e));
        for (var _ref8 of this.entries()) {
          var _e7 = _ref8[0];
          var _n8 = _ref8[1];
          t(_n8, _e7, this);
        }
      };
      _proto3[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.entries();
        };
      return babelHelpers.createClass(Xt, [
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
    var Qt = !1;
    function Zt(t, n) {
      var r = Qt;
      var i;
      try {
        ((Qt = t), (i = n()));
      } finally {
        Qt = r;
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
    function te() {
      return Qt;
    }
    function ee(t) {
      var n = t.exportJSON(Qt),
        o = t.constructor;
      return (
        n.type !== o.getType() && e(130, o.name),
        Vo(t) && !Array.isArray(n.children) && e(59, o.name),
        n
      );
    }
    function ne() {
      return Hs()._blockCursorElement;
    }
    function oe(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var re = x || g || _;
    function ie() {
      var t = Es().createElement("img");
      (t.setAttribute("data-lexical-decorator-boundary", "true"), (t.alt = ""));
      for (var _ref0 of [
        ["position", "absolute"],
        ["width", "0px"],
        ["height", "0px"],
        ["border", "0px"],
        ["margin", "0px"],
        ["padding", "0px"],
      ]) {
        var _e8 = _ref0[0];
        var _n9 = _ref0[1];
        t.style.setProperty(_e8, _n9, "important");
      }
      return t;
    }
    function se(t) {
      return (
        null !== t &&
        1 === t.nodeType &&
        t.hasAttribute("data-lexical-decorator-boundary")
      );
    }
    var _le2 = (function () {
      function le(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto4 = le.prototype;
      _proto4.withBefore = function withBefore(t) {
        return new le(this.element, t, this.after);
      };
      _proto4.withAfter = function withAfter(t) {
        return new le(this.element, this.before, t);
      };
      _proto4.withElement = function withElement(t) {
        return this.element === t ? this : new le(t, this.before, this.after);
      };
      _proto4.insertChild = function insertChild(t) {
        var n = this.getInsertionAnchor();
        return (
          null !== n && n.parentElement !== this.element && e(357),
          this.element.insertBefore(t, n),
          this
        );
      };
      _proto4.removeChild = function removeChild(t) {
        return (
          t.parentElement !== this.element && e(358),
          this.element.removeChild(t),
          this
        );
      };
      _proto4.replaceChild = function replaceChild(t, n) {
        return (
          n.parentElement !== this.element && e(359),
          this.element.replaceChild(t, n),
          this
        );
      };
      _proto4.getFirstChild = function getFirstChild() {
        var t = this.getFirstChildAnchor(),
          e = t ? t.nextSibling : this.element.firstChild;
        return e === this.getInsertionAnchor() ? null : e;
      };
      _proto4.getFirstChildAnchor = function getFirstChildAnchor() {
        return this.after;
      };
      _proto4.resolveLeafPosition = function resolveLeafPosition(t, e, n) {
        if (this.element === t) return e === t && 0 === n ? "before" : "after";
        var o = ce(t, this.element);
        if (null === o) return "after";
        var r = Array.prototype.indexOf.call(t.childNodes, o);
        if (r < 0) return "after";
        if (e === t) return n <= r ? "before" : "after";
        var i = ce(t, e);
        if (null === i) return "after";
        var s = Array.prototype.indexOf.call(t.childNodes, i);
        return s >= 0 && s <= r ? "before" : "after";
      };
      _proto4.getInsertionAnchor = function getInsertionAnchor() {
        return this.before;
      };
      return le;
    })();
    function ce(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _ae = (function (_le) {
      function ae() {
        return _le.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(ae, _le);
      var _proto5 = ae.prototype;
      _proto5.withBefore = function withBefore(t) {
        return new ae(this.element, t, this.after);
      };
      _proto5.withAfter = function withAfter(t) {
        return new ae(this.element, this.before, t);
      };
      _proto5.withElement = function withElement(t) {
        return this.element === t ? this : new ae(t, this.before, this.after);
      };
      _proto5.getInsertionAnchor = function getInsertionAnchor() {
        return (
          _le.prototype.getInsertionAnchor.call(this) ||
          this.getManagedLineBreak() ||
          this.getDecoratorBoundaryAnchor("trailing")
        );
      };
      _proto5.getFirstChildAnchor = function getFirstChildAnchor() {
        var t = _le.prototype.getFirstChildAnchor.call(this),
          e = t ? t.nextSibling : this.element.firstChild;
        for (; oe(e); ) ((t = e), (e = e.nextSibling));
        se(e) && ((t = e), (e = e.nextSibling));
        var n = t ? t.nextSibling : this.element.firstChild;
        return null !== n && n === ne() ? n : t;
      };
      _proto5.getDecoratorBoundaryAnchor = function getDecoratorBoundaryAnchor(
        t,
      ) {
        var e;
        if ("leading" === t) {
          var _t8 = _le.prototype.getFirstChildAnchor.call(this);
          for (e = _t8 ? _t8.nextSibling : this.element.firstChild; oe(e); )
            e = e.nextSibling;
        } else
          ((e = this.before
            ? this.before.previousSibling
            : this.element.lastChild),
            null !== e && e === ne() && (e = e.previousSibling));
        return se(e) ? e : null;
      };
      _proto5.setDecoratorBoundaryAnchor = function setDecoratorBoundaryAnchor(
        t,
        e,
      ) {
        var n = this.getDecoratorBoundaryAnchor(t);
        if (e !== (null !== n))
          if (null !== n) this.element.removeChild(n);
          else if ("leading" === t) {
            var _t9 = this.getFirstChildAnchor();
            this.element.insertBefore(
              ie(),
              _t9 ? _t9.nextSibling : this.element.firstChild,
            );
          } else this.element.insertBefore(ie(), this.before);
      };
      _proto5.getManagedLineBreak = function getManagedLineBreak() {
        return this.element.__lexicalLineBreak || null;
      };
      _proto5.setManagedLineBreak = function setManagedLineBreak(t) {
        var e = this.element,
          n = null === this.after ? e.firstChild : this.after.nextSibling,
          o = "empty" === t && oe(n) ? null : t;
        if (e.__lexicalLastChildKind !== o)
          if (((e.__lexicalLastChildKind = o), null === o))
            this.removeManagedLineBreak();
          else {
            var _t0 = "decorator" === o && re;
            this.insertManagedLineBreak(_t0);
          }
      };
      _proto5.removeManagedLineBreak = function removeManagedLineBreak() {
        var t = this.element,
          e = this.getManagedLineBreak();
        if (e) {
          e.remove();
          for (var _e9 of t.querySelectorAll(
            ":scope > [data-lexical-managed-linebreak]",
          ))
            _e9.remove();
          t.__lexicalLineBreak = void 0;
        }
      };
      _proto5.insertManagedLineBreak = function insertManagedLineBreak(t) {
        var e = this.element,
          n = this.getManagedLineBreak();
        if (n) {
          var _o4 = t ? n.nextSibling : n;
          if (
            _o4 &&
            _o4 ===
              e.querySelector(":scope > br[data-lexical-managed-linebreak]")
          )
            return;
          this.removeManagedLineBreak();
        }
        var o = this.before || this.getDecoratorBoundaryAnchor("trailing"),
          r = Es().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          e.insertBefore(r, o),
          t)
        ) {
          var _t1 = Es().createElement("img");
          (_t1.setAttribute("data-lexical-managed-linebreak", "true"),
            _t1.style.setProperty("display", "inline", "important"),
            _t1.style.setProperty("border", "0px", "important"),
            _t1.style.setProperty("margin", "0px", "important"),
            (_t1.alt = ""),
            e.insertBefore(_t1, r),
            (e.__lexicalLineBreak = _t1));
        } else e.__lexicalLineBreak = r;
      };
      _proto5.getFirstChildOffset = function getFirstChildOffset() {
        var t = this.getFirstChild(),
          e = this.getInsertionAnchor();
        var n = 0;
        for (
          var _o5 = this.element.firstChild;
          null !== _o5 && _o5 !== t && _o5 !== e;
          _o5 = _o5.nextSibling
        )
          n++;
        return n;
      };
      _proto5.resolveChildIndex = function resolveChildIndex(t, e, n, o) {
        if (n === this.element) {
          var _e0 = this.getFirstChildOffset(),
            _n0 = ne(),
            _r3 = this.element.childNodes,
            _i3 = Math.min(o, _r3.length);
          var _s2 = 0;
          for (var _t10 = _e0; _t10 < _i3; _t10++) _r3[_t10] !== _n0 && _s2++;
          return [t, Math.min(_s2, t.getChildrenSize())];
        }
        var r = ue(e, n);
        r.push(o);
        var i = ue(e, this.element);
        var s = t.getIndexWithinParent();
        for (var _t11 = 0; _t11 < i.length; _t11++) {
          var _e1 = r[_t11],
            _n1 = i[_t11];
          if (void 0 === _e1 || _e1 < _n1) break;
          if (_e1 > _n1) {
            s += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), s];
      };
      return ae;
    })(_le2);
    function ue(t, n) {
      var o = [];
      var r = n;
      for (; r !== t && null !== r; r = r.parentNode) {
        var _t12 = 0;
        for (
          var _e10 = r.previousSibling;
          null !== _e10;
          _e10 = _e10.previousSibling
        )
          _t12++;
        o.push(_t12);
      }
      return (r !== t && e(225), o.reverse());
    }
    var fe = !1,
      de = 0;
    function he() {
      de = performance.now();
    }
    function ge(t) {
      return Ls(t) && t.hasAttribute("data-lexical-managed-linebreak");
    }
    function pe(t, e, n) {
      var o = Ss(as(n)),
        r = o && ws(o, n._rootElement);
      var i = null,
        s = null;
      null !== r &&
        r.anchorNode === t &&
        ((i = r.anchorOffset), (s = r.focusOffset));
      var l = t.nodeValue;
      null !== l && zi(e, l, i, s, !1);
    }
    function _e(t, e, n) {
      if (Ya(t)) {
        var _e11 = t.anchor.getNode();
        if (_e11.is(n) && t.format !== _e11.getFormat()) return !1;
      }
      return di(e) && n.isAttached();
    }
    function me(t, e, n) {
      for (var _o6 = t; _o6 && !rl(_o6); _o6 = es(_o6)) {
        var _t13 = ki(_o6, e);
        if (void 0 !== _t13) {
          var _e12 = vi(_t13, n);
          if (_e12) return Go(_e12) || !Ls(_o6) ? void 0 : [_o6, _e12];
        }
      }
    }
    function ye(t, e, n, o) {
      fe = !0;
      var r =
        null === t._inputState.unprocessedBeforeInputData &&
        performance.now() - de > 100;
      try {
        $c(t, function () {
          var i =
              bu() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = bu();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            s = new Map(),
            l = t._editorState,
            c = t._blockCursorElement;
          var a = !1,
            f = "";
          for (var _n10 of e) {
            var _e13 = _n10.type,
              _d = _n10.target,
              _h = me(_d, t, l);
            if (!_h) continue;
            var _g = _h[0],
              _p = _h[1];
            if ("characterData" === _e13)
              o
                ? Sr(_p) && _p.isAttached() && _p.markDirty()
                : r && Sr(_p) && di(_d) && _e(i, _d, _p) && pe(_d, _p, t);
            else {
              a = !0;
              for (var _e14 of _n10.addedNodes) {
                var _n11 = ki(_e14, t);
                if (
                  _e14 !== c &&
                  _e14.parentNode === _d &&
                  (_n11
                    ? t.getElementByKey(_n11) !== _e14
                    : !(
                        (t._slotsUsed &&
                          Ls(_e14) &&
                          _e14.hasAttribute("data-lexical-slot")) ||
                        rl(_e14)
                      ))
                ) {
                  if (u) {
                    var _t14 =
                      (Ls(_e14) ? _e14.innerText : null) || _e14.nodeValue;
                    _t14 && (f += _t14);
                  }
                  _d.removeChild(_e14);
                }
              }
              for (var _t15 of _n10.removedNodes) {
                var _e15 = c === _t15;
                if (_e15 || se(_t15) || ge(_t15)) {
                  var _e16 = _n10.nextSibling,
                    _o7 = _n10.previousSibling;
                  _d.insertBefore(
                    _t15,
                    _e16 && _e16.parentNode !== _d
                      ? _o7
                        ? _o7.parentNode === _d
                          ? _o7.nextSibling
                          : null
                        : _d.firstChild
                      : _e16,
                  );
                }
                _e15 || s.set(_g, _p);
              }
            }
          }
          for (var _ref10 of s) {
            var _e17 = _ref10[0];
            var _n12 = _ref10[1];
            _n12.reconcileObservedMutation(_e17, t);
          }
          var d = n.takeRecords();
          for (var _e18 of d)
            for (var _n13 of _e18.addedNodes)
              "BR" !== _n13.nodeName ||
                ki(_n13, t) ||
                ge(_n13) ||
                _n13.remove();
          (n.takeRecords(),
            null !== i && (a && Di(i), u && Qi(t) && i.insertRawText(f)));
        });
      } finally {
        fe = !1;
      }
    }
    function xe(t, e, n) {
      var o = t._observer;
      if (null !== o) {
        var _r4 = o.takeRecords();
        (!n || _r4.length > 0) && ye(t, _r4, o, e);
      }
    }
    function Se(t) {
      (!(function (t) {
        as(t).addEventListener("textInput", he, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          ye(t, e, n);
        })));
    }
    function Ce(t) {
      throw new Error(t);
    }
    function Te(t, e, n) {
      var o = t.isEqual;
      return e === n || (void 0 !== o && o(e, n));
    }
    function ve(t, e) {
      return Te(t, e, t.defaultValue);
    }
    function Ne(t) {
      return "object" == typeof t && null !== t;
    }
    function be(t, n) {
      var o = we(t, n).getter;
      return (
        (Ne(o) && void 0 !== o.getterTable) || e(405, n),
        Me(o.getterTable)
      );
    }
    function ke(t, n) {
      var o = we(t, n).setter;
      return (
        (Ne(o) && void 0 !== o.setterTable) || e(406, n),
        Me(o.setterTable)
      );
    }
    function Ee(t, n, o) {
      var _we = we(t, n),
        r = _we.meta;
      for (var _t16 = 0; ; )
        if ("aliased" === r.kind) {
          if (_t16 === o) return Me(r.aliases);
          (_t16++, (r = r.inner.meta));
        } else
          "nullable" === r.kind || "optional" === r.kind
            ? (r = r.inner.meta)
            : "array" === r.kind
              ? (r = r.item.meta)
              : e(407, n, String(o));
    }
    function Oe(t, n) {
      var o = we(t, n),
        r = o.setter;
      (Ne(r) && void 0 !== r.setterTable) || e(408, n);
      var i = String(o.defaultValue);
      return (je(r.setterTable, i) || e(409, n, i), r.setterTable[i]);
    }
    function Me(t) {
      return Object.assign(Object.create(null), t);
    }
    function we(t, n) {
      var o = t.get(n);
      return (void 0 === o && e(410, n), o);
    }
    function Ae(t, e, n, o, r) {
      void 0 !== r && De.add(r);
      var i = void 0 === n,
        s = i ? t(void 0) : n;
      return (
        i && Re(s),
        Object.assign(t, { accepts: r, defaultValue: s, isEqual: o, meta: e })
      );
    }
    var De = new WeakSet();
    function Ie(t) {
      var e = t.accepts;
      return void 0 === e || De.has(e) ? void 0 : e;
    }
    var Fe = new WeakSet();
    function Pe(t) {
      return (null !== t && "object" == typeof t && Fe.add(t), t);
    }
    function Re(t) {
      if (
        null !== t &&
        "object" == typeof t &&
        !Object.isFrozen(t) &&
        !Fe.has(t)
      ) {
        Object.freeze(t);
        for (var _e19 of Object.values(t)) Re(_e19);
      }
    }
    function Le(t) {
      var e = t.isEqual;
      return void 0 === e
        ? void 0
        : function (t, n) {
            return null == t || null == n ? t === n : e(t, n);
          };
    }
    function Ke(t, e) {
      return function (n) {
        return e(n) || Be(t, n);
      };
    }
    function Be(t, e) {
      var n = t.accepts;
      return void 0 !== n
        ? n.call(t, e)
        : void 0 !==
            (function (t, e) {
              var n = t.accepts;
              if (void 0 !== n) return Be(t, e) ? { parsed: t(e) } : void 0;
              var o = t(e);
              return ve(t, o) && e !== t.defaultValue ? void 0 : { parsed: o };
            })(t, e);
    }
    var $e = new WeakMap();
    function ze(t) {
      var e = $e.get(t);
      if (void 0 !== e) return e;
      var n = (function (t) {
        var e = t.meta;
        if (null == e) return !1;
        if (void 0 !== Ie(t)) return !1;
        switch (e.kind) {
          case "raw":
            return !0;
          case "union":
            return (
              null != e.members &&
              e.members.length > 0 &&
              e.members.every(function (t) {
                return ze(t);
              })
            );
          case "nullable":
          case "optional":
          case "transform":
          case "aliased":
            return null != e.inner && ze(e.inner);
          default:
            return !1;
        }
      })(t);
      return ($e.set(t, n), n);
    }
    function We(t, e) {
      var n = t.meta;
      if (null == n) return Be(t, e) ? 1 : 4;
      var o = Ie(t),
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
            for (var _o8 = 0; _o8 < n.length; _o8++)
              if (void 0 !== n[_o8]) {
                var _r5 = We(e.item, n[_o8]);
                _r5 > _t17 && (_t17 = _r5);
              }
            return _t17 >= 3 ? 3 : _t17;
          }
          case "object": {
            var _t18 = e.fields;
            if (!He(n)) return 4;
            if (null == _t18) return 1;
            if (!o && Ve(n, _t18)) return 4;
            var _r6 = 1;
            for (var _e20 of Object.keys(n))
              if (je(_t18, _e20)) {
                var _o9 = We(_t18[_e20], n[_e20]);
                _o9 > _r6 && (_r6 = _o9);
              }
            return _r6 >= 3 ? 3 : _r6;
          }
          case "union":
            return null == e.members ? 1 : Ue(e.members, n).fit;
          case "aliased":
          case "nullable":
          case "optional":
          case "transform":
            return ("aliased" === e.kind
              ? "string" == typeof n && null != e.aliases && je(e.aliases, n)
              : "nullable" === e.kind
                ? null == n
                : "optional" === e.kind && void 0 === n) || null == e.inner
              ? 1
              : We(e.inner, n);
          default:
            return o || Be(t, n) ? 1 : 4;
        }
      })(t, n, e, r);
      return r && 4 === i ? 3 : i;
    }
    function Ue(t, e) {
      var n,
        o = 4,
        r = 4;
      for (var _i4 = 0; _i4 < t.length; _i4++) {
        var _s3 = t[_i4],
          _l2 = We(_s3, e),
          _c2 = _l2 < 3 && ze(_s3) ? 3 : _l2;
        if (_c2 < o && ((n = _s3), (o = _c2), (r = _l2), 1 === _c2)) break;
      }
      return { fit: r, member: n };
    }
    function je(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    function He(t) {
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
    function Ve(t, e) {
      for (var _n14 of Object.keys(t)) if (!je(e, _n14)) return !0;
      return !1;
    }
    function Ye(t) {
      if (t === void 0) {
        t = "";
      }
      return Ae(
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
    var Je = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function Ge(t, e) {
      if (t === void 0) {
        t = 0;
      }
      if (e === void 0) {
        e = {};
      }
      var _e21 = e,
        n = _e21.integer,
        o = _e21.clamp,
        r = n && void 0 !== e.min ? Math.ceil(e.min) : e.min,
        i = n && void 0 !== e.max ? Math.floor(e.max) : e.max,
        s = function s(t) {
          return "string" == typeof t && Je.test(t) ? Number(t) : t;
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
      return Ae(
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
    function qe(t) {
      var n = Pe(
          0 !== (arguments.length <= 1 ? 0 : arguments.length - 1)
            ? arguments.length <= 1
              ? undefined
              : arguments[1]
            : t[0],
        ),
        o = new Set(t);
      return Ae(
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
    function Xe(t, e) {
      if (t === e) return !0;
      if (Array.isArray(t) || Array.isArray(e)) {
        if (!Array.isArray(t) || !Array.isArray(e) || t.length !== e.length)
          return !1;
        for (var _n15 = 0; _n15 < t.length; _n15++)
          if (!Xe(t[_n15], e[_n15])) return !1;
        return !0;
      }
      if (!He(t) || !He(e)) return !1;
      var n = Object.keys(t);
      return (
        n.length === Object.keys(e).length &&
        n.every(function (n) {
          return je(e, n) && Xe(t[n], e[n]);
        })
      );
    }
    function Qe() {
      return function (t) {
        return (function (t) {
          return { meta: { fields: t, kind: "node" } };
        })(t);
      };
    }
    function Ze(t, e) {
      var n = function n(t) {
        return "string" == typeof t && je(e, t);
      };
      return Ae(
        function (o) {
          return n(o) ? e[o] : t(o);
        },
        { aliases: e, inner: t, kind: "aliased" },
        t.defaultValue,
        t.isEqual,
        function (e) {
          return n(e) || Be(t, e);
        },
      );
    }
    function tn(t, e) {
      return nn(0, t, {
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
    function en(t, e) {
      return nn(0, t, e);
    }
    function nn(t, e, n) {
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
    var on = "direct",
      rn = "latest";
    var sn = function sn(t, e) {
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
        (this.unparse = (e.unparse || pn).bind(e)),
        (this.isEqual = e.isEqual
          ? e.isEqual.bind(e)
          : void 0 !== n && void 0 !== n.isEqual
            ? function (t, e) {
                return Te(n, t, e);
              }
            : Object.is),
        (this.defaultValue =
          void 0 !== n ? n.defaultValue : this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function ln(t, e, n) {
      if (n === void 0) {
        n = rn;
      }
      var o = (n === rn ? t.getLatest() : t).__state;
      return o ? o.getValue(e) : e.defaultValue;
    }
    function cn(t, e, n) {
      var o;
      if ((Cc(), "function" == typeof n)) {
        var _r7 = t.getLatest(),
          _i5 = ln(_r7, e);
        if (((o = n(_i5)), e.isEqual(_i5, o))) return _r7;
      } else o = n;
      var r = t.getWritable();
      return (dn(r).updateFromKnown(e, o), r);
    }
    function an(t) {
      var e = new Map(),
        n = new Set();
      for (var _ref12 of Dl("function" == typeof t ? t : t.replace)) {
        var _o0 = _ref12.ownNodeConfig;
        if (_o0 && _o0.stateConfigs)
          for (var _t19 of _o0.stateConfigs) {
            var _o1 = void 0;
            ("stateConfig" in _t19
              ? ((_o1 = _t19.stateConfig), _t19.flat && n.add(_o1.key))
              : (_o1 = _t19),
              e.set(_o1.key, _o1));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var un = new Set(["__proto__", "constructor", "prototype"]);
    var _fn = (function () {
      function fn(t, e, n, o, r) {
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
                    for (var _r8 in e) {
                      var _e22 = t.get(_r8);
                      (_e22 && n.has(_e22)) || o++;
                    }
                  return o;
                })(i, n, o);
        this.size = s;
      }
      var _proto6 = fn.prototype;
      _proto6.getValue = function getValue(t) {
        var e = this.knownState.get(t);
        if (void 0 !== e) return e;
        this.sharedNodeState.sharedConfigMap.set(t.key, t);
        var n = t.defaultValue;
        if (this.unknownState && t.key in this.unknownState) {
          var _e23 = this.unknownState[t.key];
          (void 0 !== _e23 && (n = t.parse(_e23)), this.updateFromKnown(t, n));
        }
        return n;
      };
      _proto6.getInternalState = function getInternalState() {
        return [this.unknownState, this.knownState];
      };
      _proto6.toJSON = function toJSON() {
        var t = babelHelpers["extends"]({}, this.unknownState),
          e = {};
        for (var _ref14 of this.knownState) {
          var _e24 = _ref14[0];
          var _n16 = _ref14[1];
          _e24.isEqual(_n16, _e24.defaultValue)
            ? delete t[_e24.key]
            : (t[_e24.key] = _e24.unparse(_n16));
        }
        for (var _n17 of this.sharedNodeState.flatKeys)
          _n17 in t && ((e[_n17] = t[_n17]), delete t[_n17]);
        return (gn(t) && (e[L] = t), e);
      };
      _proto6.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          o = new Map(this.knownState);
        return new fn(
          t,
          e,
          (function (t, e, n) {
            var o;
            if (n)
              for (var _ref16 of Object.entries(n)) {
                var _r9 = _ref16[0];
                var _i6 = _ref16[1];
                {
                  if (un.has(_r9)) continue;
                  var _n18 = t.get(_r9);
                  _n18
                    ? e.has(_n18) || e.set(_n18, _n18.parse(_i6))
                    : ((o = o || {}), (o[_r9] = _i6));
                }
              }
            return o;
          })(e.sharedConfigMap, o, n),
          o,
          this.size,
        );
      };
      _proto6.resetOnCopyNode = function resetOnCopyNode() {
        for (var _t20 of this.knownState.keys())
          _t20.resetOnCopyNode && this.knownState.set(_t20, _t20.defaultValue);
        return this;
      };
      _proto6.updateFromKnown = function updateFromKnown(t, e) {
        var n = t.key;
        this.sharedNodeState.sharedConfigMap.set(n, t);
        var o = this.knownState,
          r = this.unknownState;
        (o.has(t) ||
          (r && n in r) ||
          (r && (delete r[n], (this.unknownState = gn(r))), this.size++),
          o.set(t, e));
      };
      _proto6.updateFromUnknown = function updateFromUnknown(t, e) {
        if (un.has(t)) return;
        var n = this.sharedNodeState.sharedConfigMap.get(t);
        n
          ? this.updateFromKnown(n, n.parse(e))
          : ((this.unknownState = this.unknownState || {}),
            t in this.unknownState || this.size++,
            (this.unknownState[t] = e));
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        var e = this.knownState;
        for (var _t21 of e.keys()) e.set(_t21, _t21.defaultValue);
        if (((this.size = e.size), (this.unknownState = void 0), t))
          for (var _ref18 of Object.entries(t)) {
            var _e25 = _ref18[0];
            var _n19 = _ref18[1];
            this.updateFromUnknown(_e25, _n19);
          }
      };
      return fn;
    })();
    function dn(t) {
      var e = t.getWritable(),
        n = e.__state
          ? e.__state.getWritable(e)
          : new _fn(
              e,
              (function (t) {
                return t.__state
                  ? t.__state.sharedNodeState
                  : ei(Hs(), t.getType()).sharedNodeState;
              })(e),
            );
      return ((e.__state = n), n);
    }
    function hn(t, e) {
      var n = t.getWritable(),
        o = e[L];
      return ((n.__state || o) && dn(t).updateFromJSON(o), n);
    }
    function gn(t) {
      if (t) for (var _e26 in t) return t;
    }
    function pn(t) {
      return t;
    }
    function _n(t, e, n) {
      for (var _ref20 of e.knownState) {
        var _o10 = _ref20[0];
        var _r0 = _ref20[1];
        {
          if (t.has(_o10.key)) continue;
          t.add(_o10.key);
          var _e27 = n ? n.getValue(_o10) : _o10.defaultValue;
          if (_e27 !== _r0 && !_o10.isEqual(_e27, _r0)) return !0;
        }
      }
      return !1;
    }
    function mn(t, e, n) {
      var o = e.unknownState,
        r = n ? n.unknownState : void 0;
      if (o)
        for (var _ref22 of Object.entries(o)) {
          var _e28 = _ref22[0];
          var _n20 = _ref22[1];
          if (!t.has(_e28) && (t.add(_e28), _n20 !== (r ? r[_e28] : void 0)))
            return !0;
        }
      return !1;
    }
    function yn(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function xn(t) {
      return !Qo(t) && t.getTextContent !== _Ho4.prototype.getTextContent;
    }
    var Sn = Symbol["for"]("@lexical/CachedTextSize");
    function Cn(t, n) {
      return Kn.read(
        function () {
          var o = 0,
            r = t;
          for (var _t22 = 0; _t22 < n && null !== r; _t22++) {
            var _i7 = Ln.get(r);
            if ((void 0 === _i7 && e(345, r), Vo(_i7))) {
              var _s4 = Bn.get(r);
              if (void 0 !== _s4 && Vo(_s4) && _s4.__parent !== _i7.__parent)
                o += _i7.getTextContentSize();
              else {
                var _t23 = $n.get(r),
                  _n21 = _t23 && _t23.__lexicalTextContent;
                ("string" != typeof _n21 && e(346, _i7.getType()),
                  (o += _n21.length));
              }
              _t22 < n - 1 && !_i7.isInline() && (o += 2);
            } else if (no(_i7).size > 0) o += _i7.getTextContentSize();
            else {
              var _t24 = _i7[Sn];
              (void 0 === _t24 && e(347, _i7.getType(), r), (o += _t24));
            }
            r = _i7.__next;
          }
          return o;
        },
        { editor: bn },
      );
    }
    function Tn(t) {
      Vo(t) ||
        no(t).size > 0 ||
        (void 0 === t[Sn] &&
          (t[Sn] = Sr(t) ? t.__text.length : t.getTextContentSize()));
    }
    var vn = 4;
    var Nn,
      bn,
      kn,
      En = "",
      On = null,
      Mn = null,
      wn = null;
    function An() {
      return { firstTextKey: wn, format: On, style: Mn };
    }
    function Dn(t) {
      null !== t.firstTextKey &&
        ((On = t.format), (Mn = t.style), (wn = t.firstTextKey));
    }
    function In(t) {
      if (null !== wn) return;
      var n = t.__lexicalFirstTextKey;
      if ((void 0 === n && e(348), null === n)) return;
      var o = Bn.get(n);
      Sr(o) && ((On = o.getFormat()), (Mn = o.getStyle()), (wn = n));
    }
    var Fn,
      Pn,
      Rn,
      Ln,
      Kn,
      Bn,
      $n,
      zn,
      Wn,
      Un,
      jn = !1,
      Hn = !1;
    function Vn(t, e) {
      var n = Ln.get(t),
        o = Bn.has(t);
      if (null !== e) {
        var _n22 = yo(t);
        _n22.parentNode === e && e.removeChild(_n22);
      }
      if (!o) {
        if ((bn._keyToDOMMap["delete"](t), Vo(n))) {
          var _t25 = Pl(n, Ln);
          Yn(_t25, 0, _t25.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t26 of no(n).values()) {
            var _e29 = ro(_t26);
            (Vn(_t26, null), null !== _e29 && _e29.remove());
          }
          Gi(Wn, kn, Fn, n, "destroyed");
        }
      }
    }
    function Yn(t, e, n, o) {
      for (var _r1 = e; _r1 <= n; ++_r1) {
        var _e30 = t[_r1];
        void 0 !== _e30 && Vn(_e30, o);
      }
    }
    function Jn(t, e) {
      t.setProperty("text-align", e);
    }
    var Gn = "40px";
    function qn(t, e) {
      var n = Nn.theme.indent;
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
          : "calc(" + e + " * var(--lexical-indent-base-value, " + Gn + "))",
      ),
        Yi(t, "class"),
        Yi(t, "style"));
    }
    function Xn(t, e) {
      var n = t.style;
      (0 === e
        ? Jn(n, "")
        : 1 === e
          ? Jn(n, "left")
          : 2 === e
            ? Jn(n, "center")
            : 3 === e
              ? Jn(n, "right")
              : 4 === e
                ? Jn(n, "justify")
                : 5 === e
                  ? Jn(n, "start")
                  : 6 === e && Jn(n, "end"),
        Yi(t, "style"));
    }
    function Qn(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (Qo(t)) return null;
        var n = t.getParent();
        return null === n || (hs(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function Zn(t) {
      var e = Es().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function to(t, e, n) {
      e || "false" === t.contentEditable
        ? il(n, bn)
        : n.removeAttribute("contenteditable");
    }
    function eo(t, e, n) {
      var o = En,
        r = An();
      En = "";
      var i = "";
      var s = Go(t);
      for (var _ref24 of n) {
        var _o12 = _ref24[0];
        var _r10 = _ref24[1];
        {
          var _n23 = Zn(_o12);
          (to(e, s, _n23), e.appendChild(_n23), (En = ""));
          var _l3 = An();
          (so(_r10, Ys(t, _n23, bn)), Dn(_l3), oo(t, _o12, e, _n23), (i += En));
        }
      }
      return (Dn(r), (En = o), i);
    }
    function no(t) {
      return Xu(t) && null !== t.__slots ? t.__slots : qu;
    }
    function oo(t, e, n, o) {
      var r = Un.$getSlotTargetElement(t, e, n, bn);
      null !== r &&
        (o.parentElement !== r && r.appendChild(o), (o.style.display = ""));
    }
    function ro(t) {
      var e = $n.get(t);
      return void 0 !== e ? e.parentElement : null;
    }
    function io(t, e, n) {
      var o = no(t),
        r = no(e);
      for (var _ref26 of o) {
        var _t27 = _ref26[0];
        var _e31 = _ref26[1];
        if (!r.has(_t27)) {
          var _t28 = ro(_e31);
          (Vn(_e31, null), null !== _t28 && _t28.remove());
        }
      }
      var i = En,
        s = An();
      var l = "",
        c = null;
      var a = Go(e);
      for (var _ref28 of r) {
        var _t29 = _ref28[0];
        var _i8 = _ref28[1];
        {
          var _r11 = o.get(_t29);
          var _s5 = void 0 !== _r11 ? ro(_r11) : null;
          En = "";
          var _u2 = An();
          if (null === _s5) {
            _s5 = Zn(_t29);
            var _o13 = null;
            for (var _t30 of n.children)
              if (!_t30.hasAttribute("data-lexical-slot")) {
                _o13 = _t30;
                break;
              }
            (n.insertBefore(_s5, _o13), so(_i8, Ys(e, _s5, bn)));
          } else
            _r11 === _i8
              ? ho(_i8, _s5)
              : (void 0 !== _r11 && Vn(_r11, _s5), so(_i8, Ys(e, _s5, bn)));
          if (
            (Dn(_u2),
            to(n, a, _s5),
            oo(e, _t29, n, _s5),
            (l += En),
            _s5.parentElement === n)
          ) {
            var _t31 = null === c ? n.firstChild : c.nextSibling;
            (_t31 !== _s5 && n.insertBefore(_s5, _t31), (c = _s5));
          }
        }
      }
      return (Dn(s), (En = i), l);
    }
    function so(t, n) {
      var o = Bn.get(t);
      if ((void 0 === o && e(60), null !== n)) {
        var _e32 = Ln.get(t);
        if (void 0 !== _e32) {
          var _r12 = $n.get(t);
          if (void 0 !== _r12) {
            var _i9 = Qu(_e32) ? _e32.__slotHost : null,
              _s6 = Qu(o) ? o.__slotHost : null,
              _l4 = _e32.__parent !== o.__parent || _i9 !== _s6,
              _c3 = null !== _s6 && _r12.parentElement !== n.element;
            if (_l4 || _c3) return (n.insertChild(_r12), ho(t, n.element));
          }
        }
      }
      var r = Un.$createDOM(o, bn);
      if (
        ((function (t, e, n) {
          var o = n._keyToDOMMap;
          (bi(e, n, t), o.set(t, e));
        })(t, r, bn),
        Sr(o)
          ? r.setAttribute("data-lexical-text", "true")
          : Go(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            ol(r, { captureSelection: !0 })),
        Vo(o))
      ) {
        var _t32 = En,
          _e33 = o.__indent,
          _n24 = o.__size;
        (Qn(r, o), 0 !== _e33 && qn(r, _e33));
        var _i0 = no(o),
          _s7 = _i0.size > 0 ? eo(o, r, _i0) : "";
        if (0 === _n24)
          ((r.__lexicalTextContent = _s7),
            (r.__lexicalFirstTextKey = null),
            (En += _s7),
            _i0.size > 0 && (r.__lexicalSlotTextLength = _s7.length));
        else {
          var _e34 = _n24 - 1;
          if ((lo(Pl(o, Bn), o, 0, _e34, Ys(o, r, bn)), "" !== _s7)) {
            var _e35 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s7 + _e35), (En = _t32 + _s7 + _e35));
          }
          _i0.size > 0 && (r.__lexicalSlotTextLength = _s7.length);
        }
        if (xn(o)) {
          var _e36 = o.getTextContent();
          ((r.__lexicalTextContent = _e36), (En = _t32 + _e36));
        }
        var _l5 = o.__format;
        (0 !== _l5 && Xn(r, _l5), o.isInline() || (uo(0, o, r), ao(o, r)));
      } else {
        var _e37 = o.getTextContent();
        if (Go(o)) {
          var _e38 = o.decorate(bn, Nn);
          (null !== _e38 && go(t, _e38), (r.contentEditable = "false"));
          var _n25 = no(o);
          _n25.size > 0 && eo(o, r, _n25);
        }
        En += _e37;
      }
      return (
        null !== n && n.insertChild(r),
        Un.$decorateDOM(o, null, r, bn),
        Tn(o),
        Gi(Wn, kn, Fn, o, "created"),
        r
      );
    }
    function lo(t, n, o, r, i) {
      var s = En,
        l = An();
      ((En = ""), (On = null), (Mn = null), (wn = null));
      var c = o;
      for (; c <= r; ++c) {
        var _e39 = An();
        so(t[c], i);
        var _n26 = Bn.get(t[c]);
        (null !== _n26 && Sr(_n26)
          ? null === On &&
            ((On = _n26.getFormat()), (Mn = _n26.getStyle()), (wn = _n26.__key))
          : Vo(_n26) && c < r && !_n26.isInline() && (En += v),
          Dn(_e39));
      }
      var a = bn._keyToDOMMap.get(n.__key);
      (void 0 === a && e(349, n.__key),
        (a.__lexicalTextContent = En),
        (a.__lexicalFirstTextKey = wn),
        (En = s + En),
        Dn(l));
    }
    function co(t) {
      return Go(t) && !t.isInline();
    }
    function ao(t, e, n) {
      if (n === void 0) {
        n = Ys(t, e, bn);
      }
      (n.setDecoratorBoundaryAnchor("leading", co(t.getFirstChild())),
        n.setDecoratorBoundaryAnchor("trailing", co(t.getLastChild())));
    }
    function uo(t, e, n) {
      var o = Ys(e, n, bn),
        r = (function (t, e) {
          if (t) {
            var _n27 = t.__last;
            if (_n27) {
              var _t33 = e.get(_n27);
              if (_t33)
                return Ql(_t33)
                  ? "line-break"
                  : Go(_t33) && _t33.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, Bn);
      o.setManagedLineBreak(r);
    }
    function fo(t, e, n) {
      var o = e.__lexicalFirstTextKey;
      if (null != o) {
        var _e40 = t.__key;
        var _r13 = o;
        for (; null !== _r13; ) {
          var _t34 = Bn.get(_r13);
          if (void 0 === _t34) {
            _r13 = null;
            break;
          }
          if (_t34.__parent === _e40) break;
          _r13 = _t34.__parent;
        }
        if (null !== _r13 && !n.has(_r13)) {
          var _t35 = Bn.get(o);
          if (Sr(_t35))
            return ((On = _t35.getFormat()), void (Mn = _t35.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = wn;
    }
    function ho(t, n) {
      var o = Ln.get(t);
      var r = Bn.get(t);
      (void 0 !== o && void 0 !== r) || e(61);
      var i = jn || Rn.has(t) || Pn.has(t),
        s = ts(bn, t);
      if (o === r && !i) {
        var _t36;
        if (Vo(o)) {
          var _n28 = s.__lexicalTextContent;
          ("string" != typeof _n28 && e(355, o.getType()),
            (_t36 = _n28),
            In(s));
        } else _t36 = o.getTextContent();
        return ((En += _t36), s);
      }
      if (
        (o !== r && i && Gi(Wn, kn, Fn, r, "updated"),
        Un.$updateDOM(r, o, s, bn))
      ) {
        var _o14 = so(t, null);
        return (
          null === n && e(62),
          n.replaceChild(_o14, s),
          Vn(t, null),
          _o14
        );
      }
      if (Vo(o)) {
        Vo(r) || e(334, t);
        var _n29 = r.__indent;
        (jn || _n29 !== o.__indent) && qn(s, _n29);
        var _l6 = r.__format;
        (jn || _l6 !== o.__format) && Xn(s, _l6);
        var _c4 = i && (no(r).size > 0 || no(o).size > 0) ? io(o, r, s) : "";
        if (i) {
          var _t37 = En;
          if (
            ((function (t, n, o) {
              var r;
              ((On = null),
                (Mn = null),
                (wn = null),
                (function (t, n, o) {
                  var r = En,
                    i = t.__size,
                    s = n.__size;
                  En = "";
                  var l = o.element,
                    c = bn._keyToDOMMap.get(n.__key);
                  void 0 === c && e(351, n.__key);
                  var a = s - i;
                  if (
                    !jn &&
                    Math.abs(a) <= 1 &&
                    i >= vn &&
                    t.__first === n.__first &&
                    (0 !== a || !bn._cloneNotNeeded.has(t.__key))
                  ) {
                    var _i1 = c.__lexicalTextContent,
                      _u3 = zn.get(t.__key);
                    if (
                      !jn &&
                      !xn(n) &&
                      "string" == typeof _i1 &&
                      void 0 !== _u3
                    ) {
                      var _s8 = (function (t, e) {
                        var n = e.size;
                        if (0 === n || n >= t.__size) return null;
                        var o = t.__last,
                          r = null,
                          i = 0;
                        for (; null !== o && i < n; ) {
                          if (!e.has(o)) return null;
                          r = o;
                          var _t38 = Bn.get(o);
                          if (void 0 === _t38) return null;
                          ((o = _t38.__prev), i++);
                        }
                        return i !== n || (null !== o && e.has(o)) ? null : r;
                      })(n, _u3);
                      if (null !== _s8) {
                        var _f2 = _u3.size;
                        if (0 === a) {
                          var _t39 = Cn(_s8, _f2);
                          var _o15 = _s8,
                            _a2 = 0;
                          for (; null !== _o15 && _a2 < _f2; ) {
                            var _t40 = Bn.get(_o15);
                            if (void 0 === _t40) break;
                            var _e41 = An();
                            (ho(_o15, l),
                              Sr(_t40) &&
                                null === On &&
                                ((On = _t40.getFormat()),
                                (Mn = _t40.getStyle()),
                                (wn = _t40.__key)),
                              Dn(_e41),
                              (_o15 = _t40.__next),
                              _a2++);
                          }
                          var _d2 = "";
                          for (
                            _o15 = _s8, _a2 = 0;
                            null !== _o15 && _a2 < _f2;
                          ) {
                            var _t41 = Bn.get(_o15);
                            if (void 0 === _t41) break;
                            var _n30 = void 0;
                            if (Vo(_t41)) {
                              var _r14 = bn._keyToDOMMap.get(_o15),
                                _i10 = _r14 && _r14.__lexicalTextContent;
                              ("string" != typeof _i10 &&
                                e(352, _t41.getType()),
                                (_n30 = _i10));
                            } else _n30 = _t41.getTextContent();
                            ((_d2 += _n30),
                              _a2 < _f2 - 1 &&
                                Vo(_t41) &&
                                !_t41.isInline() &&
                                (_d2 += v),
                              (_o15 = _t41.__next),
                              _a2++);
                          }
                          var _h2 = c.__lexicalSlotTextLength || 0,
                            _g2 = _h2 > 0 ? _i1.slice(_h2) : _i1,
                            _p2 = _g2.slice(0, _g2.length - _t39) + _d2;
                          return (
                            (c.__lexicalTextContent = _p2),
                            (En = r + _p2),
                            void fo(n, c, _u3)
                          );
                        }
                        if (
                          (function (t, n, o, r, i, s, l, c) {
                            if (1 !== c && -1 !== c) return !1;
                            if (l !== (1 === c ? 2 : 1)) return !1;
                            var a = l - c;
                            var u = t.__last;
                            for (var _t42 = 0; _t42 < a - 1; _t42++) {
                              if (null === u) return !1;
                              var _t43 = Ln.get(u);
                              if (void 0 === _t43) return !1;
                              u = _t43.__prev;
                            }
                            if (null === u) return !1;
                            var f = Bn.get(s),
                              d = Ln.get(u);
                            if (void 0 === f || void 0 === d) return !1;
                            if (f.__prev !== d.__prev) return !1;
                            var h = [];
                            var g = s;
                            for (var _t44 = 0; _t44 < l; _t44++) {
                              if (null === g) return !1;
                              h.push(g);
                              var _t45 = Bn.get(g);
                              g = _t45 ? _t45.__next : null;
                            }
                            var p = [];
                            g = u;
                            for (var _t46 = 0; _t46 < a; _t46++) {
                              if (null === g) return !1;
                              p.push(g);
                              var _t47 = Ln.get(g);
                              g = _t47 ? _t47.__next : null;
                            }
                            var _ = new Set(p),
                              m = new Set(h),
                              y = [];
                            var x = 0,
                              S = 0;
                            for (; x < a && S < l; )
                              if (h[S] === p[x])
                                (y.push({ key: h[S], kind: "reconcile" }),
                                  x++,
                                  S++);
                              else if (m.has(p[x])) {
                                if (_.has(h[S])) return !1;
                                (y.push({
                                  key: h[S],
                                  kind: "create",
                                  nextIndex: S,
                                }),
                                  S++);
                              } else
                                (y.push({ key: p[x], kind: "destroy" }), x++);
                            for (; x < a; )
                              y.push({ key: p[x++], kind: "destroy" });
                            for (; S < l; )
                              (y.push({
                                key: h[S],
                                kind: "create",
                                nextIndex: S,
                              }),
                                S++);
                            var C = Cn(u, a);
                            for (var _t48 of y) {
                              var _e42 = An();
                              if ("reconcile" === _t48.kind)
                                ho(_t48.key, o.element);
                              else if ("destroy" === _t48.kind)
                                Vn(_t48.key, o.element);
                              else {
                                var _e43 = null;
                                for (
                                  var _n31 = _t48.nextIndex + 1;
                                  _n31 < l;
                                  _n31++
                                ) {
                                  var _t49 = bn._keyToDOMMap.get(h[_n31]);
                                  if (void 0 !== _t49) {
                                    _e43 = _t49;
                                    break;
                                  }
                                }
                                so(
                                  _t48.key,
                                  o.withBefore(_e43 != null ? _e43 : o.before),
                                );
                              }
                              if ("destroy" !== _t48.kind) {
                                var _e44 = Bn.get(_t48.key);
                                _e44 &&
                                  Sr(_e44) &&
                                  null === On &&
                                  ((On = _e44.getFormat()),
                                  (Mn = _e44.getStyle()),
                                  (wn = _e44.__key));
                              }
                              Dn(_e42);
                            }
                            var T = "";
                            for (var _t50 = 0; _t50 < l; _t50++) {
                              var _n32 = Bn.get(h[_t50]);
                              if (void 0 === _n32) return !1;
                              var _o16 = void 0;
                              if (Vo(_n32)) {
                                var _r15 = bn._keyToDOMMap.get(h[_t50]),
                                  _i11 = _r15 && _r15.__lexicalTextContent;
                                ("string" != typeof _i11 &&
                                  e(350, _n32.getType()),
                                  (_o16 = _i11));
                              } else _o16 = _n32.getTextContent();
                              ((T += _o16),
                                _t50 < l - 1 &&
                                  Vo(_n32) &&
                                  !_n32.isInline() &&
                                  (T += v));
                            }
                            var N = r.__lexicalSlotTextLength || 0,
                              b = N > 0 ? i.slice(N) : i;
                            return (
                              (r.__lexicalTextContent =
                                b.slice(0, b.length - C) + T),
                              !0
                            );
                          })(t, 0, o, c, _i1, _s8, _f2, a)
                        ) {
                          var _t51 = c.__lexicalTextContent;
                          return (
                            "string" != typeof _t51 && e(353),
                            (En = r + _t51),
                            void fo(n, c, _u3)
                          );
                        }
                      }
                    }
                    if (0 === a) {
                      var _n33 = t.__first,
                        _o17 = 0;
                      for (; null !== _n33; ) {
                        var _t52 = Bn.get(_n33);
                        if (void 0 === _t52) break;
                        var _r16 = jn || Rn.has(_n33) || Pn.has(_n33),
                          _i12 = An();
                        if (_r16) ho(_n33, l);
                        else {
                          var _o18 = void 0,
                            _r17 = void 0;
                          if (Vo(_t52)) {
                            _r17 = $n.get(_n33);
                            var _i13 = _r17 && _r17.__lexicalTextContent;
                            ("string" != typeof _i13 && e(354, _t52.getType()),
                              (_o18 = _i13));
                          } else _o18 = _t52.getTextContent();
                          ((En += _o18), void 0 !== _r17 && In(_r17));
                        }
                        (Sr(_t52)
                          ? null === On &&
                            ((On = _t52.getFormat()),
                            (Mn = _t52.getStyle()),
                            (wn = _t52.__key))
                          : Vo(_t52) &&
                            _o17 < s - 1 &&
                            !_t52.isInline() &&
                            (En += v),
                          Dn(_i12),
                          (_n33 = _t52.__next),
                          _o17++);
                      }
                      return (
                        (c.__lexicalTextContent = En),
                        (c.__lexicalFirstTextKey = wn),
                        void (En = r + En)
                      );
                    }
                  }
                  if (1 === i && 1 === s) {
                    var _e45 = t.__first,
                      _r18 = n.__first;
                    if (_e45 === _r18) ho(_e45, l);
                    else {
                      var _t53 = yo(_e45),
                        _n34 = so(_r18, null);
                      try {
                        _t53.parentNode === l
                          ? l.replaceChild(_n34, _t53)
                          : o.insertChild(_n34);
                      } catch (o) {
                        if ("object" == typeof o && null != o) {
                          var _i14 =
                            o.toString() +
                            " Parent: " +
                            l.tagName +
                            ", new child: {tag: " +
                            _n34.tagName +
                            " key: " +
                            _r18 +
                            "}, old child: {tag: " +
                            _t53.tagName +
                            ", key: " +
                            _e45 +
                            "}.";
                          throw new Error(_i14);
                        }
                        throw o;
                      }
                      Vn(_e45, null);
                    }
                    var _i15 = Bn.get(_r18);
                    Sr(_i15) &&
                      null === On &&
                      ((On = _i15.getFormat()),
                      (Mn = _i15.getStyle()),
                      (wn = _i15.__key));
                  } else {
                    var _r19 = Pl(t, Ln),
                      _c5 = Pl(n, Bn);
                    if (
                      (_r19.length !== i && e(227),
                      _c5.length !== s && e(228),
                      0 === i)
                    )
                      0 !== s && lo(_c5, n, 0, s - 1, o);
                    else if (0 === s) {
                      if (0 !== i) {
                        var _t54 =
                          null == o.after &&
                          null == o.before &&
                          0 === no(n).size &&
                          null == o.element.__lexicalLineBreak;
                        (Yn(_r19, 0, i - 1, _t54 ? null : l),
                          _t54 && (l.textContent = ""));
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
                          var _t55 = e[f],
                            _o19 = n[d],
                            _r20 = An();
                          if (_t55 === _o19)
                            ((u = po(ho(_o19, i.element))), f++, d++);
                          else {
                            if ((void 0 === a && (a = _o(n, d)), void 0 === c))
                              c = _o(e, f);
                            else if (!c.has(_t55)) {
                              (f++, Dn(_r20));
                              continue;
                            }
                            if (!a.has(_t55)) {
                              var _e46 = yo(_t55);
                              (_e46.parentNode === i.element && (u = po(_e46)),
                                Vn(_t55, i.element),
                                f++,
                                c["delete"](_t55),
                                Dn(_r20));
                              continue;
                            }
                            if (c.has(_o19)) {
                              var _t56 = ts(bn, _o19);
                              (_t56 !== u &&
                                i
                                  .withBefore(u != null ? u : i.before)
                                  .insertChild(_t56),
                                (u = po(ho(_o19, i.element))),
                                f++,
                                d++);
                            } else
                              (so(_o19, i.withBefore(u != null ? u : i.before)),
                                d++);
                          }
                          var _s9 = Bn.get(_o19);
                          (null !== _s9 && Sr(_s9)
                            ? null === On &&
                              ((On = _s9.getFormat()),
                              (Mn = _s9.getStyle()),
                              (wn = _s9.__key))
                            : Vo(_s9) && d <= l && !_s9.isInline() && (En += v),
                            Dn(_r20));
                        }
                        var h = f > s,
                          g = d > l;
                        if (h && !g) {
                          var _e47 = n[l + 1],
                            _o20 =
                              void 0 === _e47 ? null : bn.getElementByKey(_e47);
                          lo(
                            n,
                            t,
                            d,
                            l,
                            i.withBefore(_o20 != null ? _o20 : i.before),
                          );
                        } else g && !h && Yn(e, f, s, i.element);
                      })(n, _r19, _c5, i, s, o);
                  }
                  ((c.__lexicalTextContent = En),
                    (c.__lexicalFirstTextKey = wn),
                    (En = r + En));
                })(t, n, Ys(n, o, bn)),
                hs(n) ||
                  ((r = n),
                  null == On ||
                    On === r.__textFormat ||
                    Hn ||
                    r.setTextFormat(On),
                  (function (t) {
                    null == Mn ||
                      Mn === t.__textStyle ||
                      Hn ||
                      t.setTextStyle(Mn);
                  })(n)));
            })(o, r, s),
            r.isInline() || (Qo(r) || uo(0, r, s), ao(r, s)),
            "" !== _c4)
          ) {
            var _e48 = s.__lexicalTextContent || "";
            ((s.__lexicalTextContent = _c4 + _e48),
              (En = _t37 + _c4 + _e48),
              (s.__lexicalSlotTextLength = _c4.length));
          } else
            (no(r).size > 0 || no(o).size > 0) &&
              (s.__lexicalSlotTextLength = 0);
          if (xn(r)) {
            var _e49 = r.getTextContent();
            ((s.__lexicalTextContent = _e49), (En = _t37 + _e49));
          }
        } else {
          var _t57 = s.__lexicalTextContent;
          ("string" != typeof _t57 && e(356, o.getType()), (En += _t57), In(s));
        }
        if (
          (jn || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (Qn(s, r), Qo(r) && !jn)
        )
          for (var _t58 of r.getChildren())
            Vo(_t58) && Qn(ts(bn, _t58.getKey()), _t58);
      } else {
        var _e50 = r.getTextContent();
        if (Go(r)) {
          var _e51 = r.decorate(bn, Nn);
          (null !== _e51 && go(t, _e51),
            i && (no(r).size > 0 || no(o).size > 0) && io(o, r, s));
        }
        En += _e50;
      }
      if (!Hn && Qo(r)) {
        var _t59 = r.getLatest();
        if (_t59.__cachedText !== En) {
          var _e52 = _t59.getWritable();
          ((_e52.__cachedText = En), (r = _e52));
        }
      }
      return (Un.$decorateDOM(r, o, s, bn), Tn(r), s);
    }
    function go(t, e) {
      var n = bn._pendingDecorators;
      var o = bn._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = Oi(bn);
      }
      n[t] = e;
    }
    function po(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === bn._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function _o(t, e) {
      var n = new Set();
      for (var _o21 = e; _o21 < t.length; _o21++) n.add(t[_o21]);
      return n;
    }
    function mo(t, e, n, o, r, i) {
      ((En = ""),
        (On = null),
        (Mn = null),
        (wn = null),
        (jn = 2 === o),
        (bn = n),
        (Nn = n._config),
        (Un = n._config.dom || ic),
        (kn = n._nodes),
        (Fn = bn._listeners.mutation),
        (Pn = r),
        (Rn = i),
        (Ln = t._nodeMap),
        (Kn = t),
        (Bn = e._nodeMap),
        (Hn = e._readOnly),
        ($n = qt(n._keyToDOMMap)),
        (zn = (function () {
          var t = new Map(),
            e = function e(_e54) {
              for (var _n35 of _e54) {
                var _e53 = Bn.get(_n35);
                if (void 0 === _e53) continue;
                var _o22 = _e53.__parent;
                if (null === _o22) continue;
                var _r21 = t.get(_o22);
                (void 0 === _r21 && ((_r21 = new Set()), t.set(_o22, _r21)),
                  _r21.add(_n35));
              }
            };
          return (e(Pn.keys()), e(Rn), t);
        })()));
      var s = new Map();
      return (
        (Wn = s),
        ho("root", null),
        (bn = void 0),
        (kn = void 0),
        (Pn = void 0),
        (Rn = void 0),
        (Ln = void 0),
        (Kn = void 0),
        (Bn = void 0),
        (Nn = void 0),
        ($n = void 0),
        (zn = void 0),
        (Wn = void 0),
        (Un = ic),
        s
      );
    }
    function yo(t) {
      var n = $n.get(t);
      return (void 0 === n && e(75, t), n);
    }
    function xo(t, n, o) {
      Cc();
      var r = t.__key,
        i = t.getParent();
      if (null === i) return void (null !== Zu(t) && e(367, r, String(Zu(t))));
      var s = (function (t) {
        var e = bu();
        if (!Ya(e) || !Vo(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          i = o.getNode();
        return (
          ls(r, t) && n.set(t.__key, 0, "element"),
          ls(i, t) && o.set(t.__key, 0, "element"),
          e
        );
      })(t);
      var l = !1;
      if (Ya(s) && n) {
        var _e55 = s.anchor,
          _n36 = s.focus;
        (_e55.key === r &&
          (Mu(_e55, t, i, t.getPreviousSibling(), t.getNextSibling()),
          (l = !0)),
          _n36.key === r &&
            (Mu(_n36, t, i, t.getPreviousSibling(), t.getNextSibling()),
            (l = !0)));
      } else Ga(s) && n && t.isSelected() && t.selectPrevious();
      (Vu(t.getWritable(), n && !l && Ya(s) ? s : null),
        o || hs(i) || i.canBeEmpty() || !i.isEmpty() || xo(i, n),
        n && s && Qo(i) && i.isEmpty() && i.selectEnd());
    }
    var So = Symbol["for"]("ephemeral");
    function Co(t) {
      return t[So] || !1;
    }
    var To = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _vo5 = (function () {
      function vo(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", To),
          Object.defineProperty(this, Sn, To),
          _i(this, t));
      }
      vo.getType = function getType() {
        var _El = El(this),
          t = _El.ownNodeType;
        return (void 0 === t && e(64, this.name), t);
      };
      vo.clone = function clone(t) {
        e(65, this.name);
      };
      var _proto7 = vo.prototype;
      _proto7.$config = function $config() {
        return {};
      };
      _proto7.config = function config(t, e) {
        var _ref29;
        var n = e["extends"] || Rl(this.constructor);
        return (
          Object.assign(e, { extends: n }),
          "string" == typeof t && Object.assign(e, { type: t }),
          (_ref29 = {}),
          (_ref29[t] = e),
          _ref29
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
          var _e56 = vi(t);
          if (null === _e56) break;
          t = null !== _e56.__parent ? _e56.__parent : Zu(_e56);
        }
        return !1;
      };
      _proto7.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || bu();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (Sr(this)) return n;
        if (
          Ya(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t60 = this.getParent();
          if (Go(this) && this.isInline() && _t60) {
            var _n37 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t60.is(_n37.getNode()) &&
              _n37.offset === _t60.getChildrenSize() &&
              this.is(_t60.getLastChild())
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
        return null === t ? null : vi(t);
      };
      _proto7.getParentOrThrow = function getParentOrThrow() {
        var t = this.getParent();
        return (null === t && e(66, this.__key), t);
      };
      _proto7.getTopLevelElement = function getTopLevelElement() {
        var t = this;
        for (; null !== t; ) {
          var _n38 = t.getParent();
          if (hs(_n38) || null !== Zu(t))
            return (Vo(t) || (t === this && Go(t)) || e(194), t);
          t = _n38;
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
        return null === t ? null : vi(t);
      };
      _proto7.getPreviousSiblings = function getPreviousSiblings() {
        return Gu(this.getPreviousSibling(), "previous").reverse();
      };
      _proto7.getNextSibling = function getNextSibling() {
        var t = this.getLatest().__next;
        return null === t ? null : vi(t);
      };
      _proto7.getNextSiblings = function getNextSiblings() {
        return Gu(this.getNextSibling(), "next");
      };
      _proto7.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto7.isBefore = function isBefore(t) {
        var n = Zf(this, t);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === qf(n)
              : ("same" !== n.type && "ancestor" !== n.type && e(279), !1)))
        );
      };
      _proto7.isParentOf = function isParentOf(t) {
        return ls(t, this);
      };
      _proto7.getNodesBetween = function getNodesBetween(t) {
        var e = this.isBefore(t),
          n = [];
        var o = this,
          r = !0,
          i = 0;
        for (; null !== o && ((r || 0 === i) && n.push(o), !o.is(t)); ) {
          !r && i > 0 && i--;
          var _t61 =
            r && Vo(o) ? (e ? o.getFirstChild() : o.getLastChild()) : null;
          null !== _t61 && i++;
          var _n39 = _t61 || (e ? o.getNextSibling() : o.getPreviousSibling());
          ((r = null !== _n39), (o = _n39 || o.getParent()));
        }
        return e ? n : n.reverse();
      };
      _proto7.isDirty = function isDirty() {
        var t = Nc()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto7.getLatest = function getLatest() {
        if (Co(this)) return this;
        var t = vi(this.__key);
        return (
          null === t &&
            Ce(
              "Lexical node does not exist in active editor state (key " +
                this.__key +
                ", type " +
                this.__type +
                "). The reference was probably kept from another read or update, for example in a closure, event handler or component state, and the node has since been removed or is not part of this editor state. Before using a node reference that may be stale, check node.isAttached() or look the node up again with $getNodeByKey(node.getKey()), inside the read or update where it is used.",
            ),
          t
        );
      };
      _proto7.getWritable = function getWritable() {
        if (Co(this)) return this;
        Cc();
        var t = vc(),
          e = Nc(),
          n = this.__key,
          o = e._cloneNotNeeded,
          r = o.get(n),
          i = t._selection;
        if ((null !== i && i.setCachedNodes(null), void 0 !== r))
          return (xi(r), r);
        var s = t._nodeMap,
          l = s.get(n);
        void 0 === l &&
          Ce(
            "Lexical node does not exist in active editor state (key " +
              n +
              ", type " +
              this.__type +
              "). The reference was probably kept from another read or update, for example in a closure, event handler or component state, and the node has since been removed or is not part of this editor state. Before using a node reference that may be stale, check node.isAttached() or look the node up again with $getNodeByKey(node.getKey()), inside the read or update where it is used.",
          );
        var c = Zs(l);
        return (o.set(n, c), s.set(n, c), xi(c), c);
      };
      _proto7.getTextContent = function getTextContent() {
        return gf(this);
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
        return new _le2(t);
      };
      _proto7.exportDOM = function exportDOM(t) {
        return { element: Vs(t).$createDOM(this, t) };
      };
      _proto7.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = (function (t, e) {
            var n = ul(al(t.constructor)),
              o = n.generated,
              r = n.isCompactDefault,
              i = null === o ? void 0 : e ? o.exportCompactJSON : o.exportJSON;
            return void 0 === i
              ? (function (t, e, n) {
                  var o = n ? { type: t.__type } : {};
                  return (
                    Vo(t) && (o.children = []),
                    (function (t, e, n, o) {
                      for (var _r22 = 0; _r22 < e.length; _r22++) {
                        var _i16 = e[_r22];
                        if (o && _i16.derived) continue;
                        var _s0 = void 0;
                        if ("ownField" === _i16.kind) {
                          var _e57 = Tl(t)[_i16.field];
                          _s0 =
                            void 0 === _i16.getterTable
                              ? _e57
                              : je(_i16.getterTable, _e57)
                                ? _i16.getterTable[_e57]
                                : void 0;
                        } else _s0 = _i16.getter.call(t);
                        ("ownField" === _i16.kind &&
                          void 0 !== _i16.when &&
                          ((!vl(_i16, _s0) && _i16.when.call(t)) ||
                            (_s0 = void 0)),
                          (o && vl(_i16, _s0)) || (n[_i16.key] = _s0));
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
      vo.importJSON = function importJSON(t) {
        e(18, this.name);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return kl(hn(this, t), t);
      };
      vo.transform = function transform() {
        return null;
      };
      _proto7.remove = function remove(t) {
        xo(this, !0, t);
      };
      _proto7.replace = function replace(t, n) {
        Cc();
        var o = bu();
        (null !== o && (o = o.clone()), _s(this, t));
        var r = this.getLatest(),
          i = this.__key,
          s = tf(r);
        null !== s && e(400, i, r.getType(), s.getKey(), s.getType());
        var l = t.__key,
          c = t.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent();
        Vu(c, Ya(o) ? o : null);
        var d = r.getPreviousSibling(),
          h = r.getNextSibling();
        (xo(r, !1, !0),
          ju(a, c, d && d.getWritable(), h && h.getWritable()),
          (a.__size = null !== f && f.is(a) ? u - 1 : u));
        var g = 0;
        if (
          (n &&
            ((Vo(this) && Vo(c)) || e(139),
            (g = c.getChildrenSize()),
            c.splice(g, 0, this.getChildren())),
          Ya(o))
        ) {
          Di(o);
          for (var _t62 of [o.anchor, o.focus])
            _t62.key === i &&
              (n && "element" === _t62.type
                ? _t62.set(c.__key, g + _t62.offset, "element")
                : za(_t62, c));
        }
        return (Ci() === i && Si(l), c);
      };
      _proto7.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        return Yu(this, "next", t, e);
      };
      _proto7.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        return Yu(this, "previous", t, e);
      };
      _proto7.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto7.createParentElementNode = function createParentElementNode() {
        return Hr();
      };
      _proto7.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto7.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto7.selectPrevious = function selectPrevious(t, e) {
        return Ju(Df(this, "previous"), t, e);
      };
      _proto7.selectNext = function selectNext(t, e) {
        return Ju(Df(this, "next"), t, e);
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
      return vo;
    })();
    function No(t) {
      return t instanceof _vo5;
    }
    function bo(t, e) {
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
              (t && _n(n, t, e)) ||
              (e && _n(n, e, t)) ||
              (t && mn(n, t, e)) ||
              (e && mn(n, e, t))
            );
          })(c, a))
      );
    }
    function ko(t, e) {
      var n = t.mergeWithSibling(e),
        o = Nc()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function Eo(t) {
      var e,
        n,
        o = t;
      if (!Ti(o))
        if ("" !== o.__text || !o.isSimpleText() || o.isUnmergeable()) {
          for (
            ;
            null !== (e = o.getPreviousSibling()) &&
            Sr(e) &&
            e.isSimpleText() &&
            !e.isUnmergeable() &&
            !Ti(e);
          ) {
            if ("" !== e.__text) {
              if (bo(e, o)) {
                o = ko(e, o);
                break;
              }
              break;
            }
            e.remove();
          }
          for (
            ;
            null !== (n = o.getNextSibling()) &&
            Sr(n) &&
            n.isSimpleText() &&
            !n.isUnmergeable() &&
            !Ti(n);
          ) {
            if ("" !== n.__text) {
              if (bo(o, n)) {
                o = ko(o, n);
                break;
              }
              break;
            }
            n.remove();
          }
        } else o.remove();
    }
    function Oo(t) {
      return (Mo(t.anchor), Mo(t.focus), t);
    }
    function Mo(t) {
      for (; "element" === t.type; ) {
        var _e58 = t.getNode(),
          _n40 = t.offset;
        var _o23 = void 0,
          _r23 = void 0;
        if (
          (_n40 === _e58.getChildrenSize()
            ? ((_o23 = _e58.getChildAtIndex(_n40 - 1)), (_r23 = !0))
            : ((_o23 = _e58.getChildAtIndex(_n40)), (_r23 = !1)),
          Sr(_o23))
        ) {
          t.set(_o23.__key, _r23 ? _o23.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Vo(_o23)) break;
        t.set(_o23.__key, _r23 ? _o23.getChildrenSize() : 0, "element", !0);
      }
    }
    var wo = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function Ao(t, e) {
      if ("number" == typeof t) return Number.isFinite(t) ? t : e;
      if ("string" != typeof t || !wo.test(t)) return e;
      var n = Number(t);
      return Number.isFinite(n) ? n : e;
    }
    function Do(t, e, n, o, r) {
      var i = Ao(t, e);
      return i >= n && i <= o && Number.isInteger(i) ? i : e;
    }
    var Io = function Io(t) {
      var e = be(t, "format"),
        n = ke(t, "format"),
        o = Oe(t, "format");
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
            (t.__indent = Do(e.indent, 0, 0, Infinity)),
            (t.__textFormat = Ao(e.textFormat, 0)));
          var s = e.textStyle;
          return ((t.__textStyle = "string" == typeof s ? s : ""), t);
        },
      };
    };
    function Fo(t, e) {
      ((t.__detail = e.__detail),
        (t.__format = e.__format),
        (t.__mode = e.__mode),
        (t.__style = e.__style),
        (t.__text = e.__text));
    }
    var Po = function Po(t) {
        var e = be(t, "mode"),
          n = Ee(t, "detail", 0),
          o = Ee(t, "format", 0),
          r = ke(t, "mode"),
          i = Oe(t, "mode");
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
            t.__detail = "string" == typeof s && s in n ? n[s] : Ao(s, 0);
            var l = e.format;
            t.__format = "string" == typeof l && l in o ? o[l] : Ao(l, 0);
            var c = e.mode;
            t.__mode = "string" == typeof c && c in r ? r[c] : i;
            var a = e.style;
            t.__style = "string" == typeof a ? a : "";
            var u = e.text;
            return ((t.__text = "string" == typeof u ? u : ""), t);
          },
          afterCloneFrom: Fo,
        };
      },
      Ro = function Ro(t) {
        var e = be(t, "format"),
          n = ke(t, "format"),
          o = Oe(t, "format");
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
              (t.__indent = Do(e.indent, 0, 0, Infinity)),
              (t.__textFormat = Ao(e.textFormat, 0)));
            var s = e.textStyle;
            return ((t.__textStyle = "string" == typeof s ? s : ""), t);
          },
        };
      },
      Lo = function Lo() {
        return {
          exportJSON: function exportJSON(t) {
            return { type: t.__type, version: 1 };
          },
          exportCompactJSON: function exportCompactJSON(t) {
            return { type: t.__type };
          },
        };
      },
      Ko = function Ko(t) {
        var e = be(t, "mode"),
          n = Ee(t, "format", 0);
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
            t.__format = "string" == typeof o && o in n ? n[o] : Ao(o, 0);
            var r = e.style;
            return ((t.__style = "string" == typeof r ? r : ""), t);
          },
        };
      };
    function Bo() {
      return babelHelpers["extends"]({}, F, { 0: "" });
    }
    function $o() {
      return babelHelpers["extends"]({}, D, { "": 0 });
    }
    var zo = Bo(),
      Wo = $o(),
      Uo = Qe()({
        direction: tn(qe([null, "ltr", "rtl"]), { field: "__dir" }),
        format: tn(
          qe(["", "left", "start", "center", "right", "end", "justify"]),
          {
            field: "__format",
            getter: "getFormatType",
            getterTable: zo,
            setter: "setFormat",
            setterTable: Wo,
          },
        ),
        indent: tn(Ge(0, { integer: !0, min: 0 }), { field: "__indent" }),
        textFormat: en(Ge(), {
          getter: {
            field: "__textFormat",
            method: "getSerializedTextFormat",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textFormat" },
        }),
        textStyle: en(Ye(), {
          getter: {
            field: "__textStyle",
            method: "getSerializedTextStyle",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textStyle" },
        }),
      });
    function jo(t) {
      if (hs(t)) {
        var _e59 = null;
        for (var _n41 of t.getChildren())
          _e59 = _n41.isInline()
            ? (_e59 || _n41.replace(_n41.createParentElementNode())).append(
                _n41,
              )
            : null;
      }
    }
    var _Ho4 = (function (_vo) {
      function Ho(t) {
        var _this;
        ((_this = _vo.call(this, t) || this),
          (_this.__first = null),
          (_this.__last = null),
          (_this.__size = 0),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__indent = 0),
          (_this.__dir = null),
          (_this.__textFormat = 0),
          (_this.__textStyle = ""),
          (_this.__slotHost = null),
          (_this.__slots = null));
        return _this;
      }
      babelHelpers.inheritsLoose(Ho, _vo);
      var _proto8 = Ho.prototype;
      _proto8.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: jo,
          extends: _vo5,
          generated: Io,
          json: Uo,
        });
      };
      _proto8.afterCloneFrom = function afterCloneFrom(t) {
        (_vo.prototype.afterCloneFrom.call(this, t),
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
      _proto8.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto8.getFormatType = function getFormatType() {
        var t = this.getFormat();
        return F[t] || "";
      };
      _proto8.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto8.getIndent = function getIndent() {
        return this.getLatest().__indent;
      };
      _proto8.getChildren = function getChildren() {
        return Gu(this.getFirstChild(), "next");
      };
      _proto8.getChildrenKeys = function getChildrenKeys() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) (t.push(e.__key), (e = e.getNextSibling()));
        return t;
      };
      _proto8.getChildrenSize = function getChildrenSize() {
        return this.getLatest().__size;
      };
      _proto8.isEmpty = function isEmpty() {
        return 0 === this.getChildrenSize() && 0 === sf(this).length;
      };
      _proto8.isDirty = function isDirty() {
        var t = Nc()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto8.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto8.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e60 of sf(this)) {
          var _n42 = lf(this, _e60);
          if (Vo(_n42)) for (var _e61 of _n42.getAllTextNodes()) t.push(_e61);
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((Sr(e) && t.push(e), Vo(e)))
            for (var _n43 of e.getAllTextNodes()) t.push(_n43);
          e = e.getNextSibling();
        }
        return t;
      };
      _proto8.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Vo(t); ) {
          var _e62 = t.getFirstChild();
          if (null === _e62) break;
          t = _e62;
        }
        return t;
      };
      _proto8.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Vo(t); ) {
          var _e63 = t.getLastChild();
          if (null === _e63) break;
          t = _e63;
        }
        return t;
      };
      _proto8.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = t >= this.getChildrenSize(),
          n = e ? this.getLastChild() : this.getChildAtIndex(t);
        return (
          (Vo(n) && (e ? n.getLastDescendant() : n.getFirstDescendant())) || n
        );
      };
      _proto8.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : vi(t);
      };
      _proto8.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var t = this.getFirstChild();
        return (null === t && e(45, this.__key), t);
      };
      _proto8.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : vi(t);
      };
      _proto8.getLastChildOrThrow = function getLastChildOrThrow() {
        var t = this.getLastChild();
        return (null === t && e(96, this.__key), t);
      };
      _proto8.getChildAtIndex = function getChildAtIndex(t) {
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
      _proto8.getTextContent = function getTextContent() {
        var t = gf(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o24 = 0; _o24 < n; _o24++) {
          var _r24 = e[_o24];
          ((t += _r24.getTextContent()),
            Vo(_r24) && _o24 !== n - 1 && !_r24.isInline() && (t += v));
        }
        return t;
      };
      _proto8.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n44 of rf(t).values()) {
            var _t63 = vi(_n44);
            null !== _t63 && (e += _t63.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o25 = 0; _o25 < n; _o25++) {
          var _r25 = e[_o25];
          ((t += _r25.getTextContentSize()),
            Vo(_r25) && _o25 !== n - 1 && !_r25.isInline() && (t += 2));
        }
        return t;
      };
      _proto8.getDirection = function getDirection() {
        return this.getLatest().__dir;
      };
      _proto8.getTextFormat = function getTextFormat() {
        return this.getLatest().__textFormat;
      };
      _proto8.hasFormat = function hasFormat(t) {
        if ("" !== t) {
          var _e64 = D[t];
          return 0 !== (this.getFormat() & _e64);
        }
        return !1;
      };
      _proto8.hasTextFormat = function hasTextFormat(t) {
        var e = w[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto8.getFormatFlags = function getFormatFlags(t, e) {
        return pi(this.getLatest().__textFormat, t, e);
      };
      _proto8.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto8.select = function select(t, e) {
        Cc();
        var n = bu();
        var o = t,
          r = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t64 = this.getFirstChild();
            if (Sr(_t64) || Vo(_t64)) return _t64.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t65 = this.getLastChild();
            if (Sr(_t65) || Vo(_t65)) return _t65.select();
          }
        (void 0 === o && (o = i), void 0 === r && (r = i));
        var s = this.__key;
        return Ya(n)
          ? (n.anchor.set(s, o, "element"),
            n.focus.set(s, r, "element"),
            (n.dirty = !0),
            n)
          : yu(s, o, s, r, "element", "element");
      };
      _proto8.selectStart = function selectStart() {
        var t = this.getFirstDescendant();
        return t ? t.selectStart() : this.select();
      };
      _proto8.selectEnd = function selectEnd() {
        var t = this.getLastDescendant();
        return t ? t.selectEnd() : this.select();
      };
      _proto8.clear = function clear() {
        var t = this.getWritable();
        return (
          this.getChildren().forEach(function (t) {
            return t.remove();
          }),
          t
        );
      };
      _proto8.append = function append() {
        for (
          var _len4 = arguments.length, t = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          t[_key4] = arguments[_key4];
        }
        return this.splice(this.getChildrenSize(), 0, t);
      };
      _proto8.setDirection = function setDirection(t) {
        var e = this.getWritable();
        return ((e.__dir = t), e);
      };
      _proto8.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = ("" !== t && D[t]) || 0), e);
      };
      _proto8.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t || ""), e);
      };
      _proto8.setTextFormat = function setTextFormat(t) {
        var e = this.getWritable();
        return ((e.__textFormat = t), e);
      };
      _proto8.setTextStyle = function setTextStyle(t) {
        var e = this.getWritable();
        return ((e.__textStyle = t), e);
      };
      _proto8.setIndent = function setIndent(t) {
        var e = this.getWritable();
        return ((e.__indent = t), e);
      };
      _proto8.splice = function splice(t, n, o) {
        Co(this) && e(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          i = this.getWritable();
        t + n <= r || e(226, String(t), String(n), String(r));
        for (var _t66 of o);
        var s = i.__key,
          l = [];
        var c = [],
          a = this.getChildAtIndex(t + n),
          u = null,
          f = r - n + o.length;
        if (0 !== t)
          if (t === r) u = this.getLastChild();
          else {
            var _e65 = this.getChildAtIndex(t);
            null !== _e65 && (u = _e65.getPreviousSibling());
          }
        n > 0 &&
          (c = (function (t, n, o, r) {
            var i = [];
            var s = n;
            for (var _t67 = 0; _t67 < o; _t67++) {
              null === s && e(100);
              var _t68 = s.getNextSibling();
              (i.push(s.getWritable()), (s = _t68));
            }
            return (
              Wu(t, r && r.getWritable(), s && s.getWritable()),
              (t.__size -= i.length),
              i.map(function (t) {
                return (
                  Uu(t),
                  (t.__prev = null),
                  (t.__next = null),
                  (t.__parent = null),
                  t.__key
                );
              })
            );
          })(i, null === u ? this.getFirstChild() : u.getNextSibling(), n, u));
        var d = o.length > 0 && null !== u ? u.getWritable() : null;
        for (var _t69 of o) {
          (null !== d &&
            _t69.is(d) &&
            ((u = d.getPreviousSibling()), (d = u && u.getWritable())),
            null !== a && _t69.is(a) && (a = a.getNextSibling()));
          var _n45 = _t69.getWritable();
          (_n45.__parent === s && f--, Hu(_n45));
          var _o26 = _t69.__key;
          (ju(i, _n45, d, a && a.getWritable()),
            _t69.__key === s && e(76),
            l.push(_o26),
            (d = _n45));
        }
        if (((i.__size = f), c.length)) {
          var _t70 = bu();
          if (Ya(_t70)) {
            var _e66 = new Set(c),
              _n46 = new Set(l);
            for (var _o27 of [_t70.anchor, _t70.focus])
              Yo(_o27, _e66, _n46) && Mu(_o27, _o27.getNode(), this, u, a);
            0 !== f || this.canBeEmpty() || hs(this) || this.remove();
          }
        }
        return i;
      };
      _proto8.getDOMSlot = function getDOMSlot(t) {
        return new _ae(t);
      };
      _proto8.exportDOM = function exportDOM(t) {
        var _vo$prototype$exportD = _vo.prototype.exportDOM.call(this, t),
          e = _vo$prototype$exportD.element;
        if (Ls(e)) {
          var _t71 = this.getIndent();
          _t71 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t71 + "px"),
            e.setAttribute("data-lexical-indent", String(_t71)));
          var _n47 = this.getDirection();
          _n47 && (e.dir = _n47);
        }
        return { element: e };
      };
      _proto8.shouldSerializeTextStyles = function shouldSerializeTextStyles() {
        if (hs(this)) return !1;
        for (
          var _t72 = this.getFirstChild();
          null !== _t72;
          _t72 = _t72.getNextSibling()
        )
          if (Sr(_t72)) return !1;
        return !0;
      };
      _proto8.getSerializedTextFormat = function getSerializedTextFormat() {
        var t = this.getTextFormat();
        return 0 !== t && this.shouldSerializeTextStyles() ? t : void 0;
      };
      _proto8.getSerializedTextStyle = function getSerializedTextStyle() {
        var t = this.getTextStyle();
        return "" !== t && this.shouldSerializeTextStyles() ? t : void 0;
      };
      _proto8.insertNewAfter = function insertNewAfter(t, e) {
        return null;
      };
      _proto8.canIndent = function canIndent() {
        return !0;
      };
      _proto8.collapseAtStart = function collapseAtStart(t) {
        return !1;
      };
      _proto8.excludeFromCopy = function excludeFromCopy(t) {
        return !1;
      };
      _proto8.canReplaceWith = function canReplaceWith(t) {
        return !0;
      };
      _proto8.canInsertAfter = function canInsertAfter(t) {
        return !0;
      };
      _proto8.canBeEmpty = function canBeEmpty() {
        return !0;
      };
      _proto8.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto8.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto8.isInline = function isInline() {
        return !1;
      };
      _proto8.isShadowRoot = function isShadowRoot() {
        return !1;
      };
      _proto8.canMergeWith = function canMergeWith(t) {
        return !1;
      };
      _proto8.extractWithChild = function extractWithChild(t, e, n) {
        return !1;
      };
      _proto8.canMergeWhenEmpty = function canMergeWhenEmpty() {
        return !1;
      };
      _proto8.reconcileObservedMutation = function reconcileObservedMutation(
        t,
        e,
      ) {
        var _this14 = this;
        e.read("latest", function () {
          var n = Ys(_this14, t, e);
          var o = n.element;
          (n.after && n.after.parentNode !== o && (n = n.withAfter(null)),
            n.before && n.before.parentNode !== o && (n = n.withBefore(null)));
          var r = n.getManagedLineBreak();
          r && n.insertManagedLineBreak("IMG" === r.nodeName);
          var i = n.getFirstChild();
          for (var _t73 of _this14.getChildrenKeys()) {
            var _r26 = e.getElementByKey(_t73);
            if (!_r26) continue;
            var _s1 = void 0,
              _l7 = i;
            for (; _l7 && !(_s1 = ki(_l7, e)) && rl(_l7); )
              _l7 = _l7.nextSibling;
            (_l7 !== _r26 &&
              o.insertBefore(_r26, _s1 ? _l7 : i || n.getInsertionAnchor()),
              (i = _r26.nextSibling));
          }
          ao(_this14, t, n);
        });
      };
      return Ho;
    })(_vo5);
    function Vo(t) {
      return t instanceof _Ho4;
    }
    function Yo(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t74 = o.__key;
        if (e.has(_t74) && !n.has(_t74)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _Jo = (function (_vo2) {
      function Jo(t) {
        var _this2;
        ((_this2 = _vo2.call(this, t) || this),
          (_this2.__slotHost = null),
          (_this2.__slots = null));
        return _this2;
      }
      babelHelpers.inheritsLoose(Jo, _vo2);
      var _proto9 = Jo.prototype;
      _proto9.afterCloneFrom = function afterCloneFrom(t) {
        (_vo2.prototype.afterCloneFrom.call(this, t),
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
      _proto9.decorate = function decorate(t, e) {
        return null;
      };
      _proto9.isIsolated = function isIsolated() {
        return !1;
      };
      _proto9.isInline = function isInline() {
        return !0;
      };
      _proto9.isKeyboardSelectable = function isKeyboardSelectable() {
        return !0;
      };
      return Jo;
    })(_vo5);
    function Go(t) {
      return t instanceof _Jo;
    }
    function qo(t) {
      var e = t.getLatest().__cachedText;
      return null === e || (!Sc() && 0 !== Nc()._dirtyType) ? null : e;
    }
    var _Xo = (function (_Ho) {
      function Xo() {
        var _this3;
        ((_this3 = _Ho.call(this, "root") || this),
          (_this3.__cachedText = null));
        return _this3;
      }
      babelHelpers.inheritsLoose(Xo, _Ho);
      var _proto0 = Xo.prototype;
      _proto0.$config = function $config() {
        return this.config("root", { extends: _Ho4 });
      };
      _proto0.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        e(51);
      };
      _proto0.getTextContent = function getTextContent() {
        var t = qo(this);
        return null !== t ? t : _Ho.prototype.getTextContent.call(this);
      };
      _proto0.getTextContentSize = function getTextContentSize() {
        var t = qo(this);
        return null !== t
          ? t.length
          : _Ho.prototype.getTextContentSize.call(this);
      };
      _proto0.remove = function remove() {
        e(52);
      };
      _proto0.replace = function replace(t) {
        e(53);
      };
      _proto0.insertBefore = function insertBefore(t) {
        e(54);
      };
      _proto0.insertAfter = function insertAfter(t) {
        e(55);
      };
      _proto0.updateDOM = function updateDOM(t, e) {
        return !1;
      };
      _proto0.splice = function splice(t, n, o) {
        for (var _t75 of o) Vo(_t75) || Go(_t75) || e(282);
        return _Ho.prototype.splice.call(this, t, n, o);
      };
      Xo.importJSON = function importJSON(t) {
        return wi().updateFromJSON(t);
      };
      _proto0.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return Xo;
    })(_Ho4);
    function Qo(t) {
      return t instanceof _Xo;
    }
    function Zo(t) {
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
      for (var _f3 = 0; _f3 < a; _f3++) {
        var _a3 = t[_f3];
        if (i) "*" === _a3 && "/" === t[_f3 + 1] && ((i = !1), _f3++);
        else if (s) (-1 === u && (u = _f3), (s = !1));
        else if (null === r) {
          if ("/" !== _a3 || "*" !== t[_f3 + 1]) {
            if ('"' !== _a3 && "'" !== _a3) {
              if ("(" !== _a3) {
                if (")" !== _a3) {
                  if (l || ":" !== _a3 || 0 !== c) {
                    if (";" === _a3 && 0 === c) {
                      -1 !== u &&
                        (l ? (o += t.slice(u, _f3)) : (n += t.slice(u, _f3)),
                        (u = -1));
                      var _r27 = n.trim(),
                        _i17 = o.trim();
                      ("" !== _r27 && "" !== _i17 && (e[_r27] = _i17),
                        (n = ""),
                        (o = ""),
                        (l = !1));
                      continue;
                    }
                    -1 === u && (u = _f3);
                  } else
                    (-1 !== u && ((n += t.slice(u, _f3)), (u = -1)), (l = !0));
                } else (-1 === u && (u = _f3), (c = Math.max(0, c - 1)));
              } else (-1 === u && (u = _f3), c++);
            } else (-1 === u && (u = _f3), (r = _a3));
          } else
            (-1 !== u &&
              (l ? (o += t.slice(u, _f3)) : (n += t.slice(u, _f3)), (u = -1)),
              (i = !0),
              _f3++);
        } else
          (-1 === u && (u = _f3),
            "\\" === _a3 ? (s = !0) : _a3 === r && (r = null));
      }
      -1 !== u && (l ? (o += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = o.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function tr(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && "!important" === o.slice(r).toLowerCase()
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function er(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = Zo(n),
        r = Zo(e);
      for (var _e67 in r) (delete o[_e67], tr(t, _e67, r[_e67]));
      for (var _e68 in o) t.removeProperty(_e68);
    }
    var nr = Qe()({
      detail: tn(Ze(Ge(), A), { field: "__detail" }),
      format: tn(Ze(Ge(), w), { field: "__format" }),
      mode: tn(qe(["normal", "token", "segmented"]), {
        field: "__mode",
        getterTable: R,
        setterTable: P,
      }),
      style: tn(Ye(), { field: "__style" }),
      text: tn(Ye(), {
        field: "__text",
        getter: "getTextContent",
        setter: "setTextContent",
      }),
    });
    function or(t, e) {
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
    function rr(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function ir(t, e, n, o, r) {
      var i = o.classList;
      var s = Ji(r, "base");
      (void 0 !== s && i.add.apply(i, Array.from(s)),
        (s = Ji(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, Array.from(s)))
          : c && i.remove.apply(i, Array.from(s)));
      for (var _t76 in w) {
        var _o28 = w[_t76];
        if (((s = Ji(r, _t76)), void 0 !== s))
          if (n & _o28) {
            if (l && ("underline" === _t76 || "strikethrough" === _t76)) {
              e & _o28 && i.remove.apply(i, Array.from(s));
              continue;
            }
            (0 === (e & _o28) ||
              (c && "underline" === _t76) ||
              "strikethrough" === _t76) &&
              i.add.apply(i, Array.from(s));
          } else e & _o28 && i.remove.apply(i, Array.from(s));
      }
      Yi(o, "class");
    }
    function sr(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? T : ""),
        i = Hs(),
        s = Vs(i).$getDOMSlot(n, e, i),
        l = s.getFirstChild();
      if (null === l || l.nodeType !== Node.TEXT_NODE)
        return void s.insertChild(Es().createTextNode(r));
      var c = l,
        a = c.nodeValue;
      if (a !== r)
        if (o || u || m) {
          var _ref30 = (function (t, e) {
              var n = t.length,
                o = e.length;
              var r = 0,
                i = 0;
              for (; r < n && r < o && t[r] === e[r]; ) r++;
              for (; i + r < n && i + r < o && t[n - i - 1] === e[o - i - 1]; )
                i++;
              return [r, n - r - i, e.slice(r, o - i)];
            })(a, r),
            _t77 = _ref30[0],
            _e69 = _ref30[1],
            _n48 = _ref30[2];
          c.replaceData(_t77, _e69, _n48);
        } else c.nodeValue = r;
    }
    function lr(t, e, n, o, r, i) {
      sr(r, t, e);
      var s = i.theme.text;
      void 0 !== s && ir(0, 0, o, t, s);
    }
    function cr(t, e) {
      var n = Es().createElement(e);
      return (n.appendChild(t), n);
    }
    function ar(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _ur2 = (function (_vo3) {
      function ur(t, e) {
        var _this4;
        if (t === void 0) {
          t = "";
        }
        ((_this4 = _vo3.call(this, e) || this),
          (_this4.__text = t),
          (_this4.__format = 0),
          (_this4.__style = ""),
          (_this4.__mode = 0),
          (_this4.__detail = 0));
        return _this4;
      }
      babelHelpers.inheritsLoose(ur, _vo3);
      var _proto1 = ur.prototype;
      _proto1.$config = function $config() {
        return this.config("text", {
          extends: _vo5,
          generated: Po,
          importDOM: {
            "#text": function text() {
              return { conversion: pr, priority: 0 };
            },
            b: function b() {
              return { conversion: dr, priority: 0 };
            },
            code: function code() {
              return { conversion: yr, priority: 0 };
            },
            em: function em() {
              return { conversion: yr, priority: 0 };
            },
            i: function i() {
              return { conversion: yr, priority: 0 };
            },
            mark: function mark() {
              return { conversion: yr, priority: 0 };
            },
            s: function s() {
              return { conversion: yr, priority: 0 };
            },
            span: function span() {
              return { conversion: fr, priority: 0 };
            },
            strong: function strong() {
              return { conversion: yr, priority: 0 };
            },
            sub: function sub() {
              return { conversion: yr, priority: 0 };
            },
            sup: function sup() {
              return { conversion: yr, priority: 0 };
            },
            u: function u() {
              return { conversion: yr, priority: 0 };
            },
          },
          json: nr,
        });
      };
      _proto1.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto1.getDetail = function getDetail() {
        return this.getLatest().__detail;
      };
      _proto1.getMode = function getMode() {
        var t = this.getLatest();
        return R[t.__mode];
      };
      _proto1.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto1.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto1.isComposing = function isComposing() {
        return this.__key === Ci();
      };
      _proto1.isSegmented = function isSegmented() {
        return 2 === this.getLatest().__mode;
      };
      _proto1.isDirectionless = function isDirectionless() {
        return !!(1 & this.getLatest().__detail);
      };
      _proto1.isUnmergeable = function isUnmergeable() {
        return !!(2 & this.getLatest().__detail);
      };
      _proto1.hasFormat = function hasFormat(t) {
        var e = w[t];
        return 0 !== (this.getFormat() & e);
      };
      _proto1.isSimpleText = function isSimpleText() {
        var t = this.getLatest();
        return "text" === t.__type && 0 === t.__mode;
      };
      _proto1.getTextContent = function getTextContent() {
        return this.getLatest().__text;
      };
      _proto1.getFormatFlags = function getFormatFlags(t, e) {
        return pi(this.getLatest().__format, t, e);
      };
      _proto1.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto1.isInline = function isInline() {
        return !0;
      };
      _proto1.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = or(0, n),
          r = rr(0, n),
          i = null === o ? r : o,
          s = Es().createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== o && ((l = Es().createElement(r)), s.appendChild(l)),
          lr(l, this, 0, n, this.__text, t));
        var c = this.__style;
        return ("" !== c && er(s.style, c), s);
      };
      _proto1.updateDOM = function updateDOM(t, n, o) {
        var r = this.__text,
          i = t.__format,
          s = this.__format,
          l = or(0, i),
          c = or(0, s),
          a = rr(0, i),
          u = rr(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _t78 = n.firstChild;
          null == _t78 && e(48);
          var _i18 = Es().createElement(u);
          return (lr(_i18, this, 0, s, r, o), n.replaceChild(_i18, _t78), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && e(49)),
          sr(r, f, this));
        var d = o.theme.text;
        void 0 !== d && i !== s && ir(0, i, s, f, d);
        var h = t.__style,
          g = this.__style;
        return (h !== g && (er(n.style, g, h), Yi(n, "style")), !1);
      };
      _proto1.exportDOM = function exportDOM(t) {
        var _vo3$prototype$export = _vo3.prototype.exportDOM.call(this, t),
          n = _vo3$prototype$export.element;
        return (
          Ls(n) || e(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = cr(n, "b")),
          this.hasFormat("italic") && (n = cr(n, "i")),
          this.hasFormat("strikethrough") && (n = cr(n, "s")),
          this.hasFormat("underline") && (n = cr(n, "u")),
          { element: n }
        );
      };
      _proto1.selectionTransform = function selectionTransform(t, e) {};
      _proto1.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? w[t] : t), e);
      };
      _proto1.setDetail = function setDetail(t) {
        var e = this.getWritable();
        return ((e.__detail = "string" == typeof t ? A[t] : t), e);
      };
      _proto1.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t), e);
      };
      _proto1.toggleFormat = function toggleFormat(t) {
        var e = pi(this.getFormat(), t, null);
        return this.setFormat(e);
      };
      _proto1.toggleDirectionless = function toggleDirectionless() {
        var t = this.getWritable();
        return ((t.__detail ^= 1), t);
      };
      _proto1.toggleUnmergeable = function toggleUnmergeable() {
        var t = this.getWritable();
        return ((t.__detail ^= 2), t);
      };
      _proto1.setMode = function setMode(t) {
        var e = P[t];
        if (this.getLatest().__mode === e) return this;
        var n = this.getWritable();
        return ((n.__mode = e), n);
      };
      _proto1.setTextContent = function setTextContent(t) {
        if (this.getLatest().__text === t) return this;
        var e = this.getWritable();
        return ((e.__text = t), e);
      };
      _proto1.select = function select(t, e) {
        Cc();
        var n = t,
          o = e;
        var r = bu(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t79 = i.length;
          (void 0 === n && (n = _t79), void 0 === o && (o = _t79));
        } else ((n = 0), (o = 0));
        if (!Ya(r)) return yu(s, n, s, o, "text", "text");
        {
          var _t80 = Ci();
          ((_t80 !== r.anchor.key && _t80 !== r.focus.key) || Si(s),
            r.setTextNodeRange(this, n, this, o));
        }
        return r;
      };
      _proto1.selectStart = function selectStart() {
        return this.select(0, 0);
      };
      _proto1.selectEnd = function selectEnd() {
        var t = this.getTextContentSize();
        return this.select(t, t);
      };
      _proto1.spliceText = function spliceText(t, e, n, o) {
        var r = this.getWritable(),
          i = r.__text,
          s = n.length;
        var l = t;
        l < 0 && ((l = s + l), l < 0 && (l = 0));
        var c = bu();
        if (o && Ya(c)) {
          var _e70 = t + s;
          c.setTextNodeRange(r, _e70, r, _e70);
        }
        var a = i.slice(0, l) + n + i.slice(l + e);
        return ((r.__text = a), r);
      };
      _proto1.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto1.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto1.splitText = function splitText() {
        Cc();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = Ci(),
          i = n.length;
        for (
          var _len5 = arguments.length, t = new Array(_len5), _key5 = 0;
          _key5 < _len5;
          _key5++
        ) {
          t[_key5] = arguments[_key5];
        }
        (t.sort(function (t, e) {
          return t - e;
        }),
          t.push(i));
        var s = [],
          l = t.length;
        for (var _e71 = 0, _o29 = 0; _e71 < i && _o29 <= l; _o29++) {
          var _r28 = t[_o29];
          _r28 > _e71 && (s.push(n.slice(_e71, _r28)), (_e71 = _r28));
        }
        var c = s.length;
        if (1 === c) return [e];
        var a = s[0],
          u = e.getParent();
        var f;
        var d = e.getFormat(),
          h = e.getStyle(),
          g = e.__detail;
        var p = !1,
          _ = null,
          m = null;
        var y = bu();
        if (Ya(y)) {
          var _ref31 = y.isBackward()
              ? [y.focus, y.anchor]
              : [y.anchor, y.focus],
            _t81 = _ref31[0],
            _e72 = _ref31[1];
          ("text" === _t81.type && _t81.key === o && (_ = _t81),
            "text" === _e72.type && _e72.key === o && (m = _e72));
        }
        e.isSegmented()
          ? ((f = xr(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = yn(e, f)),
            (p = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t82 = 1; _t82 < c; _t82++) {
          var _n49 = xr(s[_t82]);
          ((_n49.__format = d),
            (_n49.__style = h),
            (_n49.__detail = g),
            (_n49.__state = yn(e, _n49)));
          var _i19 = _n49.__key;
          (r === o && Si(_i19), x.push(_n49));
        }
        var S = _ ? _.offset : null,
          C = m ? m.offset : null;
        var T = 0;
        for (var _t83 of x) {
          if (!_ && !m) break;
          var _e73 = T + _t83.getTextContentSize();
          if (
            (null !== _ &&
              null !== S &&
              S <= _e73 &&
              S >= T &&
              (_.set(_t83.getKey(), S - T, "text"), S < _e73 && (_ = null)),
            null !== m && null !== C && C <= _e73 && C >= T)
          ) {
            m.set(_t83.getKey(), C - T, "text");
            break;
          }
          T = _e73;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            (null !== e && xi(e), null !== n && xi(n));
          })(this);
          var _t84 = u.getWritable(),
            _e74 = this.getIndexWithinParent();
          (p
            ? (_t84.splice(_e74, 0, x), this.remove())
            : _t84.splice(_e74, 1, x),
            Ya(y) && Ou(y, u, _e74, c - 1));
        }
        return x;
      };
      _proto1.mergeWithSibling = function mergeWithSibling(t) {
        var n = t === this.getPreviousSibling();
        n || t === this.getNextSibling() || e(50);
        var o = this.__key,
          r = t.__key,
          i = this.__text,
          s = i.length;
        Ci() === r && Si(o);
        var l = bu();
        if (Ya(l)) {
          var _e75 = l.anchor,
            _i20 = l.focus;
          (null !== _e75 && _e75.key === r && wu(_e75, n, o, t, s),
            null !== _i20 && _i20.key === r && wu(_i20, n, o, t, s));
        }
        var c = t.__text,
          a = n ? c + i : i + c;
        this.setTextContent(a);
        var u = this.getWritable();
        return (t.remove(), u);
      };
      _proto1.isTextEntity = function isTextEntity() {
        return !1;
      };
      return babelHelpers.createClass(ur, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_vo5);
    function fr(t) {
      return { forChild: Cr(t.style), node: null };
    }
    function dr(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Cr(e.style, n ? void 0 : "bold"), node: null };
    }
    var hr = new WeakMap();
    function gr(t) {
      if (!Ls(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function pr(t) {
      var n = t;
      null === t.parentElement && e(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = hr.get(n)) && !gr(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t85 = 0; _t85 < o.length; _t85++) hr.set(o[_t85], r);
          return r;
        })(n)
      )
        return { node: Pu(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t86 = n,
          _e76 = !0;
        for (; null !== _t86 && null !== (_t86 = _r(_t86, !1)); ) {
          var _n50 = _t86.textContent || "";
          if (_n50.length > 0) {
            (/[ \t\n]$/.test(_n50) && (o = o.slice(1)), (_e76 = !1));
            break;
          }
        }
        _e76 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t87 = n,
          _e77 = !0;
        for (; null !== _t87 && null !== (_t87 = _r(_t87, !0)); )
          if (
            (_t87.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e77 = !1;
            break;
          }
        _e77 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: xr(o) };
    }
    function _r(t, e) {
      var n = t;
      for (;;) {
        var _t88 = void 0;
        for (; null === (_t88 = e ? n.nextSibling : n.previousSibling); ) {
          var _t89 = n.parentElement;
          if (null === _t89) return null;
          n = _t89;
        }
        if (((n = _t88), Ls(n))) {
          var _t90 = n.style.display;
          if (
            ("" === _t90 && !zs(n)) ||
            ("" !== _t90 && !_t90.startsWith("inline"))
          )
            return null;
        }
        var _o30 = n;
        for (; null !== (_o30 = e ? n.firstChild : n.lastChild); ) n = _o30;
        if (di(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var mr = {
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
    function yr(t) {
      var e = mr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Cr(t.style, e), node: null };
    }
    function xr(t) {
      if (t === void 0) {
        t = "";
      }
      return ps(new _ur2(t));
    }
    function Sr(t) {
      return t instanceof _ur2;
    }
    function Cr(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        i = o.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign,
        a = t.textTransform;
      return function (t) {
        return Sr(t) || ar(t)
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
    function Tr(t, n) {
      var o = t.type,
        r = t.key,
        i = t.offset,
        s = ms(t.key);
      return "text" === o
        ? (Sr(s) || e(266, s.getType(), r), If(s, n, i))
        : (Vo(s) || e(267, s.getType(), r), Pr(s, t.offset, n));
    }
    function vr(t, n) {
      var o = n.origin,
        r = n.direction,
        i = "next" === r;
      kf(n)
        ? t.set(o.getKey(), n.offset, "text")
        : Ef(n)
          ? Sr(o)
            ? t.set(o.getKey(), Ff(o, r), "text")
            : t.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((Of(n) && Vo(o)) || e(268),
            t.set(o.getKey(), i ? 0 : o.getChildrenSize(), "element"));
    }
    function Nr(t) {
      var e = bu(),
        n = Ya(e) ? e : xu();
      return (br(n, t), Di(n), n);
    }
    function br(t, e) {
      (vr(t.anchor, e.anchor), vr(t.focus, e.focus));
    }
    function kr(t) {
      var e = t.anchor,
        n = t.focus,
        o = Tr(e, "next"),
        r = Tr(n, "next"),
        i = Yf(o, r) <= 0 ? "next" : "previous";
      return Hf(Wf(o, i), Wf(r, i));
    }
    function Er(t) {
      var e = t.direction,
        n = t.origin,
        o = Df(n, Tf(e)).getNodeAtCaret();
      return o ? Df(o, e) : Rf(n.getParentOrThrow(), e);
    }
    function Or(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o31 = Of(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o31;
        _o31 = _o31.getParentCaret(e)
      )
        n.push(Er(_o31));
      return n;
    }
    function Mr(t) {
      return !!t && t.origin.isAttached();
    }
    function wr(t, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (t.isCollapsed()) return t;
      var o = "root",
        r = "next";
      var i = n;
      var s = Fr(t, r);
      var l = s.anchor.origin;
      for (; null !== l && !hs(l); ) l = l.getParent();
      var c = Vo(l) ? l.getFirstChild() : null,
        a = Or(s.anchor, o),
        u = Or(s.focus.getFlipped(), o),
        f = new Set(),
        d = [];
      for (var _t91 of s.iterNodeCarets(o))
        if (Of(_t91)) f.add(_t91.origin.getKey());
        else if (Ef(_t91)) {
          var _e78 = _t91.origin;
          (Vo(_e78) && !f.has(_e78.getKey())) || d.push(_e78);
        }
      var h = new Set();
      for (var _t92 of d) {
        var _e79 = _t92.getParent();
        (null === _e79 || f.has(_e79.getKey()) || h.add(_e79), mi(_t92));
      }
      for (var _t93 of h)
        !_t93.canBeEmpty() &&
          !hs(_t93) &&
          _t93.isEmpty() &&
          _t93.isAttached() &&
          _t93.remove();
      for (var _t94 of s.getTextSlices()) {
        if (!_t94) continue;
        var _e80 = _t94.caret.origin,
          _n51 = _e80.getTextContentSize(),
          _o32 = Er(Df(_e80, r)),
          _s10 = _e80.getMode();
        if (
          (Math.abs(_t94.distance) === _n51 && "removeEmptySlices" === i) ||
          ("token" === _s10 && 0 !== _t94.distance)
        )
          _o32.remove();
        else if (0 !== _t94.distance) {
          i = "removeEmptySlices";
          var _e81 = _t94.removeTextSlice();
          var _n52 = _t94.caret.origin;
          if ("segmented" === _s10) {
            var _t95 = _e81.origin,
              _n53 = xr(_t95.getTextContent())
                .setStyle(_t95.getStyle())
                .setFormat(_t95.getFormat());
            (_o32.replaceOrInsert(_n53), (_e81 = If(_n53, r, _e81.offset)));
          }
          (_n52.is(a[0].origin) && (a[0] = _e81),
            _n52.is(u[0].origin) && (u[0] = _e81.getFlipped()));
        }
      }
      var g = Ar(a),
        p = Ar(u),
        _ = (function (t, e, n) {
          var o = t && t.getParentAtCaret(),
            r = e && e.getParentAtCaret(),
            i = o && r && Zf(o, r);
          if (!i || "branch" !== i.type) return null;
          var s = function s(t, e) {
              var o;
              for (
                var _r29 = t;
                _r29 && !_r29.is(i.commonAncestor);
                _r29 = _r29.getParent()
              ) {
                if (hs(_r29)) return;
                (e && !n.has(_r29.__key)) || !js(_r29) || (o = _r29);
              }
              return o;
            },
            l = s(o, !1),
            c = l && s(r, !0);
          return l && c && 0 === sf(c).length ? [l, c] : null;
        })(g, p, f);
      if (_) {
        var _t96 = _[0],
          _e82 = _[1];
        Rf(_t96, "previous").splice(0, _e82.getChildren());
        var _n54 = _e82.getParent();
        for (_e82.remove(!0); _n54 && _n54.isEmpty(); ) {
          var _t97 = _n54;
          ((_n54 = _n54.getParent()), _t97.remove(!0));
        }
      } else if (p) {
        var _t98 = (function (t) {
            if (Of(t)) {
              var _e84 = t.origin;
              if (js(_e84)) return _e84;
            } else {
              var _e85 = t.getParentAtCaret();
              if (_e85 && js(_e85)) return _e85;
            }
            return null;
          })(p),
          _e83 = _t98 && _t98.getParent(),
          _n55 = _t98 && _t98.getParents().findLast(ds);
        if (
          _t98 &&
          _e83 &&
          !Qo(_e83) &&
          _t98.isEmpty() &&
          f.has(_t98.getKey()) &&
          0 === sf(_t98).length &&
          (!_n55 || f.has(_n55.getKey()))
        ) {
          _t98.remove(!0);
          var _n56 = _e83;
          for (; _n56 && !Qo(_n56) && _n56.isEmpty(); ) {
            var _t99 = _n56.getParent();
            if (
              _t99 &&
              Qo(_t99) &&
              _t99.getChildrenSize() <= 1 &&
              _n56.canBeEmpty()
            )
              break;
            var _e86 = _n56;
            ((_n56 = _t99), _e86.remove(!0));
          }
        }
      }
      null !== Ai(l, c) || null === l || l.isAttached() || Ai(wi(), null);
      var m = Ar([g, p].concat(Array.from(a), Array.from(u)));
      if (m) return jf(Wf(m, t.direction));
      e(
        269,
        JSON.stringify(
          a.map(function (t) {
            return t.origin.__key;
          }),
        ),
      );
    }
    function Ar(t) {
      var e = t.find(Mr);
      return e && Dr(e);
    }
    function Dr(t) {
      var e = (function (t) {
          var e = t;
          for (; Of(e); ) {
            var _t100 = Kf(e);
            if (!Of(_t100)) break;
            e = _t100;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (Sr(e.origin)) return kf(e) ? e : If(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return Ef(o) && Sr(o.origin) ? If(o.origin, n, Tf(n)) : e;
    }
    function Ir(t) {
      return kf(t) && t.offset !== Ff(t.origin, t.direction);
    }
    function Fr(t, e) {
      return t.direction === e ? t : Hf(Wf(t.focus, e), Wf(t.anchor, e));
    }
    function Pr(t, e, n) {
      var o = t.getChildrenSize(),
        r = (e > 0 ? Math.min(Math.ceil(e), o) : 0) - ("next" === n ? 1 : 0),
        i = r < 0 || r >= o ? null : t.getChildAtIndex(r);
      return null === i ? Rf(t, n) : Df(i, n);
    }
    function Rr(t) {
      var n = t.origin,
        o = t.offset,
        r = t.direction;
      if (o === Ff(n, r)) return t.getSiblingCaret();
      if (o === Ff(n, Tf(r))) return Er(t.getSiblingCaret());
      var _n$splitText = n.splitText(o),
        i = _n$splitText[0];
      return (Sr(i) || e(281), Wf(Df(i, "next"), r));
    }
    function Lr(t, e) {
      for (var _n57 of t)
        if (null !== _n57 && _n57.caret.origin.is(e)) return _n57;
    }
    function Kr(t, e) {
      if (e === void 0) {
        e = null;
      }
      var n = t.caret.origin,
        _t$getSliceIndices = t.getSliceIndices(),
        o = _t$getSliceIndices[0],
        r = _t$getSliceIndices[1];
      if (o === r) return null;
      if (0 === o && r === n.getTextContentSize()) return n;
      var i = n.getParent(),
        s = e && i && Eu(e, i) ? n.getIndexWithinParent() : -1,
        l = e
          ? [e.anchor, e.focus].map(function (t) {
              return [
                t,
                t.key === n.__key && "text" === t.type
                  ? t.offset - o
                  : null !== i && t.key === i.__key && t.offset === s
                    ? 0
                    : null,
              ];
            })
          : [],
        c = n.splitText(o, r),
        a = c[0 === o ? 0 : 1];
      i && e && e !== bu() && Ou(e, i, s, c.length - 1);
      for (var _ref33 of l) {
        var _t101 = _ref33[0];
        var _e87 = _ref33[1];
        null !== _e87 && _t101.set(a.__key, _e87, "text");
      }
      return a;
    }
    function Br(t, e) {
      return !0;
    }
    function $r(t, _temp) {
      var _ref34 = _temp === void 0 ? {} : _temp,
        _ref34$$copyElementNo = _ref34.$copyElementNode,
        e = _ref34$$copyElementNo === void 0 ? gs : _ref34$$copyElementNo,
        _ref34$$splitTextPoin = _ref34.$splitTextPointCaretNext,
        n = _ref34$$splitTextPoin === void 0 ? Rr : _ref34$$splitTextPoin,
        _ref34$rootMode = _ref34.rootMode,
        o = _ref34$rootMode === void 0 ? "shadowRoot" : _ref34$rootMode,
        _ref34$$shouldSplit = _ref34.$shouldSplit,
        r = _ref34$$shouldSplit === void 0 ? Br : _ref34$$shouldSplit,
        _ref34$removeEmptyDes = _ref34.removeEmptyDestination,
        i = _ref34$removeEmptyDes === void 0 ? !1 : _ref34$removeEmptyDes;
      if (kf(t)) return n(t);
      var s = t.getParentCaret(o);
      if (s) {
        var _n58 = s.origin;
        if (Of(t)) {
          var _t102 = Er(s);
          if (i && _n58.isEmpty()) return (_n58.remove(), _t102);
          if (!_n58.canBeEmpty() || !r(_n58, "first")) return _t102;
        }
        var _o33 = Gu((l = t).getNodeAtCaret(), l.direction);
        (_o33.length > 0 || (!i && _n58.canBeEmpty() && r(_n58, "last"))) &&
          s.insert(e(_n58).splice(0, 0, _o33));
      }
      var l;
      return s;
    }
    function zr(t, n, o) {
      var r = Wf(n, "next");
      (kf(r) &&
        (0 === r.offset
          ? (r = Df(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = Df(r.origin, "next"))),
        r.origin.is(t) &&
          (Ef(r) || e(342, t.getKey(), t.getType()), (r = Er(r))),
        (t.is(r.getNodeAtCaret()) || t.is(r.getFlipped().getNodeAtCaret())) &&
          t.remove(!0));
      for (var _t103 = r; _t103; _t103 = $r(_t103, o)) r = _t103;
      return (
        kf(r) && e(283),
        r.insert(t.isInline() ? Hr().append(t) : t),
        Wf(Df(t.getLatest(), "next"), n.direction)
      );
    }
    function Wr(t, e) {
      var n = Fr(Ya(e) ? kr(e) : e, "next"),
        o = nf(n.anchor.origin),
        r = nf(t.getLatest());
      if (null === o ? null !== r : !o.is(r)) return !1;
      var i = Dr(Rf(t, "next")),
        s = Wf(Dr(Rf(t, "previous")), "next");
      return Yf(n.anchor, i) <= 0 && Yf(n.focus, s) >= 0;
    }
    var _Ur = (function (_Ho2) {
      function Ur() {
        return _Ho2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Ur, _Ho2);
      var _proto10 = Ur.prototype;
      _proto10.$config = function $config() {
        return this.config("paragraph", {
          extends: _Ho4,
          generated: Ro,
          importDOM: {
            p: function p() {
              return { conversion: jr, priority: 0 };
            },
          },
        });
      };
      _proto10.createDOM = function createDOM(t) {
        var _e$classList;
        var e = Es().createElement("p"),
          n = Ji(t.theme, "paragraph");
        return (
          void 0 !== n &&
            (_e$classList = e.classList).add.apply(_e$classList, Array.from(n)),
          e
        );
      };
      _proto10.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _Ho2$prototype$export = _Ho2.prototype.exportDOM.call(this, t),
          e = _Ho2$prototype$export.element;
        if (Ls(e)) {
          this.isEmpty() && e.append(Es().createElement("br"));
          var _t104 = this.getFormatType();
          _t104 && (e.style.textAlign = _t104);
        }
        return { element: e };
      };
      _proto10.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = _Ho2.prototype.exportJSON.call(this, t);
        if (void 0 === e.textFormat || void 0 === e.textStyle) {
          var _n59 = this.getChildren().find(Sr),
            _o34 = _n59 ? _n59.getFormat() : this.getTextFormat(),
            _r30 = _n59 ? _n59.getStyle() : this.getTextStyle();
          ((t && 0 === _o34) || (e.textFormat = _o34),
            (t && "" === _r30) || (e.textStyle = _r30));
        }
        return e;
      };
      _proto10.extractWithChild = function extractWithChild(t, e, n) {
        if (!Ya(e)) return !1;
        if (
          "" === this.getFormatType() &&
          0 === this.getIndent() &&
          "" === this.getStyle()
        )
          return !1;
        if (Wr(this, e)) {
          var _t105 = this.getTextContent();
          return "" !== _t105 && e.getTextContent() === _t105;
        }
        return !1;
      };
      _proto10.insertNewAfter = function insertNewAfter(t, e) {
        var n = Hr();
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
      _proto10.collapseAtStart = function collapseAtStart() {
        if (
          this.getChildren().every(function (t) {
            return Sr(t) && !/\S/.test(t.getTextContent());
          })
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Ur;
    })(_Ho4);
    function jr(t) {
      var e = Hr();
      if ((nl(e, t), tl(t, e), "" === e.getFormatType())) {
        var _n60 = t.getAttribute("align");
        _n60 && _n60 && _n60 in D && e.setFormat(_n60);
      }
      return (el(e, t), { node: e });
    }
    function Hr() {
      return ps(new _Ur());
    }
    function Vr(t) {
      return t instanceof _Ur;
    }
    var Yr = Qe()({
      detail: en(Ge(2), { getter: { field: "__detail" }, setter: null }),
      mode: en(qe(["normal"]), {
        getter: { field: "__mode", getterTable: { 0: "normal" } },
        setter: null,
      }),
      text: en(Ye("\t"), {
        getter: { field: "__text", method: "getTextContent" },
        setter: null,
      }),
    });
    var _Jr = (function (_ur) {
      function Jr(t) {
        var _this5;
        if (t === void 0) {
          t = void 0;
        }
        ((_this5 = _ur.call(this, "\t", t) || this), (_this5.__detail = 2));
        return _this5;
      }
      babelHelpers.inheritsLoose(Jr, _ur);
      var _proto11 = Jr.prototype;
      _proto11.$config = function $config() {
        return this.config("tab", { extends: _ur2, generated: Ko, json: Yr });
      };
      _proto11.createDOM = function createDOM(t) {
        var _e$classList2;
        var e = _ur.prototype.createDOM.call(this, t),
          n = Ji(t.theme, "tab");
        return (
          void 0 !== n &&
            (_e$classList2 = e.classList).add.apply(
              _e$classList2,
              Array.from(n),
            ),
          e
        );
      };
      _proto11.setTextContent = function setTextContent(t) {
        return _ur.prototype.setTextContent.call(this, "\t");
      };
      _proto11.spliceText = function spliceText(t, n, o, r) {
        return (
          ("" === o && 0 === n) || ("\t" === o && 1 === n) || e(286),
          this
        );
      };
      _proto11.setDetail = function setDetail(t) {
        return (2 !== t && e(127), this);
      };
      _proto11.setMode = function setMode(t) {
        return ("normal" !== t && e(128), this);
      };
      _proto11.canInsertTextBefore = function canInsertTextBefore() {
        return !1;
      };
      _proto11.canInsertTextAfter = function canInsertTextAfter() {
        return !1;
      };
      return Jr;
    })(_ur2);
    function Gr() {
      return ps(new _Jr());
    }
    function qr(t) {
      return t instanceof _Jr;
    }
    var Xr = null;
    function Qr(t) {
      Xr = t;
    }
    var Zr = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var ti = 1;
    function ei(t, n) {
      var o = ni(t, n);
      return (void 0 === o && e(30, n), o);
    }
    function ni(t, e) {
      return t._nodes.get(e);
    }
    var oi =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function ri(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return hi(e) || Ts(e) ? Ps(e) : null;
            })();
      if (!Ls(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = Ei(n),
        r = n.nodeName;
      return (
        No(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == ai(n)))
      );
    }
    var ii = ri;
    function si(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        ci(e) === t &&
        t.read("latest", function () {
          return !ri(e);
        })
      );
    }
    function li(t) {
      return t instanceof _cc;
    }
    function ci(t) {
      var e = t;
      for (; null != e; ) {
        var _t106 = ai(e);
        if (li(_t106)) return _t106;
        e = es(e);
      }
      return null;
    }
    function ai(t) {
      return t ? t.__lexicalEditor : null;
    }
    function ui(t) {
      return qr(t) || t.isToken();
    }
    function fi(t) {
      return ui(t) || t.isSegmented();
    }
    function di(t) {
      return Ks(t) && 3 === t.nodeType;
    }
    function hi(t) {
      return Ks(t) && 9 === t.nodeType;
    }
    function gi(t) {
      var e = t;
      for (; null != e; ) {
        if (di(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function pi(t, e, n) {
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
    function _i(t, e) {
      var n = (function () {
        var t = Xr;
        return ((Xr = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (Cc(), Tc());
      var o = Nc(),
        r = vc(),
        i = "" + ti++;
      (r._nodeMap.set(i, t),
        Vo(t) ? o._dirtyElements.set(i, !0) : o._dirtyLeaves.add(i),
        o._cloneNotNeeded.set(i, t),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = i));
    }
    function mi(t) {
      Hu(null === t.getParent() ? t : t.getWritable());
    }
    var yi = mi;
    function xi(t) {
      (Tc(), Co(t) && e(323, t.__key, t.__type));
      var n = null !== t.__parent ? t.__parent : Qu(t) ? t.__slotHost : null,
        o = vc(),
        r = Nc(),
        i = o._nodeMap,
        s = r._dirtyElements;
      null !== n &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t107 = e.get(o);
            if (void 0 === _t107) break;
            (n.set(o, !1),
              (o =
                null !== _t107.__parent
                  ? _t107.__parent
                  : Qu(_t107)
                    ? _t107.__slotHost
                    : null));
          }
        })(n, i, s);
      var l = t.__key;
      (0 === r._dirtyType && (r._dirtyType = 1),
        Vo(t) ? s.set(l, !0) : r._dirtyLeaves.add(l));
    }
    function Si(t) {
      Cc();
      var e = Nc(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t108 = vi(n);
          null !== _t108 && _t108.getWritable();
        }
        if (null !== t) {
          var _e88 = vi(t);
          null !== _e88 && _e88.getWritable();
        }
      }
    }
    function Ci() {
      return Sc() ? null : Nc()._compositionKey;
    }
    function Ti(t) {
      return (
        !g && (_ || x) && "" === t.__text && t.__key === Nc()._compositionKey
      );
    }
    function vi(t, e) {
      var n = (e || vc())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function Ni(t, e) {
      var n = ki(t, Nc());
      return void 0 !== n ? vi(n, e) : null;
    }
    function bi(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function ki(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function Ei(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t109 = Ni(n, e);
        if (null !== _t109) return _t109;
        n = es(n);
      }
      return null;
    }
    function Oi(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Mi(t) {
      return t.read(function () {
        return wi().getTextContent();
      });
    }
    function wi() {
      return vc()._nodeMap.get("root");
    }
    function Ai(t, e) {
      if (
        !(
          hs(t) &&
          t.isAttached() &&
          (Qo(t) ? 0 === t.getChildrenSize() : t.isEmpty()) &&
          (Qo(t) || (null !== e && js(e)))
        )
      )
        return null;
      var n = Hr();
      return (t.append(n), n);
    }
    function Di(t) {
      Cc();
      var e = vc();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        Ya(t) && Nc()._slotsUsed && gu(t)),
        (e._selection = t));
    }
    function Ii(t) {
      (Cc(), xe(Nc(), t));
    }
    function Fi(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t110 = ki(n, e);
          if (void 0 !== _t110) return _t110;
          n = es(n);
        }
        return null;
      })(t, Nc());
      return null === e ? null : vi(e);
    }
    function Pi(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Ri(t) {
      var e = [];
      for (var _n61 = t; null !== _n61; _n61 = _n61._parentEditor) e.push(_n61);
      return e;
    }
    var Li = 0;
    function Ki() {
      return r
        ? Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substring(0, 5)
        : "s" + (++Li).toString(36);
    }
    function Bi(t) {
      return di(t) ? t.nodeValue : null;
    }
    function $i(t, e, n) {
      var o = Ss(as(e));
      if (null === o) return;
      var r = ws(o, e._rootElement),
        i = r.anchorNode;
      var s = r.anchorOffset,
        l = r.focusOffset;
      if (null !== i) {
        var _e89 = Bi(i);
        var _o35 = Ei(i);
        if (null !== _e89 && Sr(_o35)) {
          if ((_e89 === T || _e89 === N) && n) {
            var _t111 = n.length;
            ((_e89 = n), (s = _t111), (l = _t111));
          }
          null !== _e89 && zi(_o35, _e89, s, l, t);
        }
      }
    }
    function zi(t, e, n, o, r) {
      var i = t;
      if (i.isAttached() && (r || !i.isDirty())) {
        var _s11 = i.isComposing(),
          _l8 = !g && (_ || x);
        if (i.isToken() && _s11) return;
        var _c6 = e;
        if (
          (_s11 || r) &&
          (!e.endsWith(T) ||
            (_l8 && e === i.getTextContent()) ||
            (_c6 = e.slice(0, -T.length)),
          r && !_l8)
        ) {
          var _t112 = N;
          var _e90;
          for (; -1 !== (_e90 = _c6.indexOf(_t112)); )
            ((_c6 = _c6.slice(0, _e90) + _c6.slice(_e90 + _t112.length)),
              null !== n && n > _e90 && (n = Math.max(_e90, n - _t112.length)),
              null !== o && o > _e90 && (o = Math.max(_e90, o - _t112.length)));
        }
        var _a4 = i.getTextContent();
        if (r || _c6 !== _a4) {
          var _e91 = bu();
          if ("" === _c6) {
            if (_s11 && !r && _l8) return void Wi(i, "", _e91);
            if ((Si(null), _ || g || x)) i.remove();
            else {
              var _t113 = Nc();
              (Wi(i, "", _e91),
                setTimeout(function () {
                  _t113.update(function () {
                    i.isAttached() && "" === i.getTextContent() && i.remove();
                  });
                }, 20));
            }
            return;
          }
          var _a5 = i.getParent(),
            _u4 = ku(),
            _f4 = i.getTextContentSize(),
            _d3 = Ci(),
            _h3 = i.getKey();
          if (
            (i.isToken() && !_s11) ||
            (null !== _d3 && _h3 === _d3 && !_s11) ||
            (Ya(_u4) &&
              ((null !== _a5 &&
                !_a5.canInsertTextBefore() &&
                0 === _u4.anchor.offset) ||
                (_u4.anchor.key === t.__key &&
                  0 === _u4.anchor.offset &&
                  !i.canInsertTextBefore() &&
                  !_s11) ||
                (_u4.focus.key === t.__key &&
                  _u4.focus.offset === _f4 &&
                  !i.canInsertTextAfter() &&
                  !_s11)))
          )
            return void i.markDirty();
          if (!Ya(_e91) || null === n || null === o)
            return void Wi(i, _c6, _e91);
          if ((_e91.setTextNodeRange(i, n, i, o), i.isSegmented())) {
            var _t114 = xr(i.getTextContent());
            (i.replace(_t114), (i = _t114));
          }
          Wi(i, _c6, _e91);
        }
      }
    }
    function Wi(t, e, n) {
      if ((t.setTextContent(e), Ya(n))) {
        var _e92 = t.getKey();
        var _o36 = !1;
        for (var _r31 of ["anchor", "focus"]) {
          var _i21 = n[_r31];
          "text" === _i21.type &&
            _i21.key === _e92 &&
            ((_i21.offset = Ff(t, _i21.offset, "clamp")), (_o36 = !0));
        }
        _o36 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Ui(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function ji(t, e) {
      return (
        Ui(t, e, "altKey") &&
        Ui(t, e, "ctrlKey") &&
        Ui(t, e, "shiftKey") &&
        Ui(t, e, "metaKey")
      );
    }
    function Hi(t) {
      var e = t;
      for (; null !== e; ) {
        var _t115 = e.getParent();
        if (null === _t115) return null;
        if (Qo(_t115)) return e;
        e = _t115;
      }
      return null;
    }
    function Vi(t, e) {
      var n = t.anchor,
        o = t.focus,
        r = n.key,
        i = n.offset,
        s = n.type,
        l = o.key,
        c = o.offset,
        a = o.type;
      if ((Oo(t), !Qo(e))) return t;
      var u = Hi(n.getNode());
      return (
        Vo(u) &&
          u.isShadowRoot() &&
          u.is(Hi(o.getNode())) &&
          (n.set(r, i, s), o.set(l, c, a)),
        t
      );
    }
    function Yi(t, e) {
      "" === t.getAttribute(e) && t.removeAttribute(e);
    }
    function Ji(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t116 = td(r);
        return ((n[e] = _t116), _t116);
      }
      return r;
    }
    function Gi(t, n, o, r, i) {
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
    function qi(t, e, n) {
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
    function Xi(t, e) {
      var n = t.offset;
      if ("element" === t.type) return qi(t.getNode(), e, n);
      {
        var _o37 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o37.getTextContentSize())) {
          var _t117 = e ? _o37.getPreviousSibling() : _o37.getNextSibling();
          return null === _t117
            ? qi(
                _o37.getParentOrThrow(),
                e,
                _o37.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t117;
        }
      }
      return null;
    }
    function Qi(t) {
      var e = as(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Zi(t, e) {
      return Rc(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
    }
    function ts(t, n) {
      var o = t._keyToDOMMap.get(n);
      return (void 0 === o && e(75, n), o);
    }
    function es(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return Ts(n) ? n.host : null;
    }
    function ns(t) {
      return hi(t) ? t : Ls(t) ? t.ownerDocument : null;
    }
    function os(t, e) {
      var n = parseFloat(t);
      return isFinite(n) ? (t.endsWith("%") ? (n * e) / 100 : n) : 0;
    }
    function rs(t, e, n, o) {
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
        d = f + os(s.scrollPaddingLeft, r) * a,
        h = f + (r - os(s.scrollPaddingRight, r)) * a;
      var g = n,
        p = Math.max(o, n + 1);
      p - g > h - d && (u ? (g = p - 1) : (p = g + 1));
      var _ = 0;
      if ((g < d ? (_ = g - d) : p > h && (_ = p - h), 0 === _)) return 0;
      var m = e.scrollLeft,
        y = m + _ / a,
        x = _ > 0 ? Math.ceil(y) : Math.floor(y);
      var S = u ? Math.min(0, Math.max(-i, x)) : Math.max(0, Math.min(i, x));
      var C = m * a;
      return (
        Math.abs(S) < Math.abs(m) && g + C >= d && p + C <= h && (S = 0),
        S === m ? 0 : ((e.scrollLeft = S), (e.scrollLeft - m) * a)
      );
    }
    function is(t) {
      (Cc(), Nc()._updateTags.add(t));
    }
    function ss(t) {
      (Cc(), Nc()._deferred.push(t));
    }
    function ls(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function cs(t) {
      var e = ns(t);
      return e ? e.defaultView : null;
    }
    function as(t) {
      var n = t._window;
      return (null === n && e(78), n);
    }
    function us(t) {
      return (Vo(t) && t.isInline()) || (Go(t) && t.isInline());
    }
    function fs(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== Zu(e) && Vo(e)) return e;
        var _t118 = e.getParentOrThrow();
        if (hs(_t118)) return _t118;
        e = _t118;
      }
      return e;
    }
    function ds(t) {
      return Vo(t) && t.isShadowRoot();
    }
    function hs(t) {
      return Qo(t) || ds(t);
    }
    function gs(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t, Zr);
      return (
        _i(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function ps(t) {
      var n = Nc(),
        o = t.getType(),
        r = ni(n, o);
      void 0 === r && e(200, t.constructor.name, o);
      var i = r.replace,
        s = r.replaceWithKlass;
      if (null !== i) {
        var _n62 = i(t),
          _r32 = _n62.constructor;
        return (
          null !== s
            ? _n62 instanceof s ||
              e(
                201,
                s.name,
                s.getType(),
                _r32.name,
                _r32.getType(),
                t.constructor.name,
                o,
              )
            : (_n62 instanceof t.constructor && _r32 !== t.constructor) ||
              e(202, _r32.name, _r32.getType(), t.constructor.name, o),
          _n62.__key === t.__key &&
            e(203, t.constructor.name, o, _r32.name, _r32.getType()),
          _n62
        );
      }
      return t;
    }
    function _s(t, n) {
      !Qo(t.getParent()) || Vo(n) || Go(n) || e(99);
    }
    function ms(t) {
      var n = vi(t);
      return (null === n && e(63, t), n);
    }
    function ys(t) {
      if (!t || t.isInline()) return !1;
      if (Go(t)) return !0;
      if (Vo(t)) {
        if (t.isShadowRoot()) {
          var _e93 = t.getParent();
          return !(Vo(_e93) && _e93.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function xs(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function Ss(t) {
      return r ? (t || window).getSelection() : null;
    }
    function Cs(t) {
      var e = cs(t);
      return e ? e.getSelection() : null;
    }
    function Ts(t) {
      return Bs(t) && "host" in t;
    }
    var vs = [];
    function Ns(t) {
      var e = t.getRootNode();
      if (e === t || !Ts(e)) return vs;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t119 = o.getRootNode();
        if (_t119 === o || !Ts(_t119)) break;
        (n.push(_t119), (o = _t119.host));
      }
      return n;
    }
    function* bs(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t120 = (hi(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o38 = void 0;
        for (; (_o38 = _t120.nextNode()); )
          _o38.shadowRoot && e.push(_o38.shadowRoot);
      }
    }
    function ks(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function Es() {
      var t = Ec();
      return ks(null !== t ? t._rootElement : null);
    }
    function Os(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = Ns(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e94 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e94) return _e94;
      } catch (t) {}
      try {
        var _e95 = o.apply(t, n)[0];
        if (void 0 !== _e95) return _e95;
      } catch (t) {}
      return null;
    }
    function Ms(t, e) {
      var n = Os(t, e);
      if (null !== n) {
        var _t121 = As(n);
        if (null !== _t121) return _t121;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function ws(t, e) {
      var n = Os(t, e);
      return null === n ? t : Ds(n, Is(t));
    }
    function As(t) {
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
    function Ds(t, e) {
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
    function Is(t) {
      return t.direction;
    }
    function Fs(t) {
      var e = t.getRootNode();
      return hi(e) || Ts(e) ? e.activeElement : null;
    }
    function Ps(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t122 = e.shadowRoot.activeElement;
        if (null === _t122) break;
        e = _t122;
      }
      return e;
    }
    function Rs(t) {
      var e = t.target;
      if (
        null !== e &&
        Ls(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e96 = t.composedPath();
        if (_e96.length > 0) return _e96[0];
      }
      return e;
    }
    function Ls(t) {
      return Ks(t) && 1 === t.nodeType;
    }
    function Ks(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function Bs(t) {
      return Ks(t) && 11 === t.nodeType;
    }
    var $s =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function zs(t) {
      return (
        !(!Ls(t) || !t.style.display.startsWith("inline")) ||
        $s.test(t.nodeName)
      );
    }
    var Ws =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Us(t) {
      return (
        (!Ls(t) || !t.style.display.startsWith("inline")) && Ws.test(t.nodeName)
      );
    }
    function js(t) {
      if (Go(t) && !t.isInline()) return !0;
      if (!Vo(t) || hs(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || Ql(e) || Sr(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Hs() {
      return Nc();
    }
    function Vs(t) {
      if (t === void 0) {
        t = Hs();
      }
      return t._config.dom || ic;
    }
    function Ys(t, n, o) {
      if (o === void 0) {
        o = Hs();
      }
      var r = Vs(o).$getDOMSlot(t, n, o);
      return (Vo(t) && (Js(r) || e(344, t.getKey(), t.getType())), r);
    }
    function Js(t) {
      return t instanceof _ae;
    }
    function Gs(t, e, n) {
      if (n === void 0) {
        n = Hs();
      }
      return gi(Ys(t, e, n).element);
    }
    var qs = new WeakMap(),
      Xs = new Map();
    function Qs(t) {
      if (!t._readOnly && t.isEmpty()) return Xs;
      t._readOnly || e(192);
      var n = qs.get(t);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref36 of t._nodeMap) {
              var _n63 = _ref36[0];
              var _o39 = _ref36[1];
              {
                var _t123 = _o39.__type;
                var _r33 = e.get(_t123);
                (_r33 || ((_r33 = new Map()), e.set(_t123, _r33)),
                  _r33.set(_n63, _o39));
              }
            }
            return e;
          })(t)),
          qs.set(t, n)),
        n
      );
    }
    function Zs(t) {
      var e = t.constructor.clone(t, Zr);
      return (e.afterCloneFrom(t), e);
    }
    function tl(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t124 = parseInt(n, 10);
        if (Number.isFinite(_t124) && _t124 >= 0)
          return void e.setIndent(_t124);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function el(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function nl(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function ol(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function rl(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function il(t, e) {
      if (e === void 0) {
        e = Hs();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function sl(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (Ls(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== ki(n, e)) return !1;
        n = es(n);
      }
      return !1;
    }
    function ll(t, e) {
      return je(t, e) && t[e] !== _vo5[e];
    }
    var cl = new WeakMap();
    function al(t) {
      var n = cl.get(t);
      return void 0 !== n
        ? n
        : (function (t) {
            var n =
                null != t.prototype && B in t.prototype
                  ? t.prototype[B]()
                  : void 0,
              o = (function (t) {
                if (!(t === _vo5 || t.prototype instanceof _vo5)) {
                  var _n64 = "<unknown>",
                    _o40 = "<unknown>";
                  try {
                    _n64 = t.getType();
                  } catch (t) {}
                  try {
                    _cc.version && (_o40 = JSON.parse(_cc.version));
                  } catch (t) {}
                  e(290, t.name, _n64, _o40);
                }
                return t === _Jo || t === _Ho4 || t === _vo5;
              })(t),
              r = !o && ll(t, "getType") ? t.getType : void 0,
              i = r && !(fl in r) ? r.call(t) : void 0;
            var s,
              l = i;
            if (n)
              if (i) s = n[i];
              else {
                for (var _ref38 of Object.entries(n)) {
                  var _t125 = _ref38[0];
                  var _e97 = _ref38[1];
                  ((l = _t125), (s = _e97));
                }
                if (!s)
                  for (var _t126 of Object.getOwnPropertySymbols(n)) {
                    var _e98 = n[_t126];
                    if (_e98) {
                      s = _e98;
                      break;
                    }
                  }
              }
            var c = {
              compiled: void 0,
              composed: void 0,
              config: {
                declaresOwnConfig: je(t.prototype, B),
                klass: t,
                ownNodeConfig: s,
                ownNodeType: l,
              },
              ownFieldsValidated: !1,
            };
            cl.set(t, c);
            try {
              var _n65 = (function (t) {
                  var n = t.prototype,
                    o = new Map(),
                    _yl = yl(t),
                    r = _yl.fieldsBaseFirst;
                  for (var _ref40 of r) {
                    var _i23 = _ref40[0];
                    var _s12 = _ref40[1];
                    {
                      var _r35 = Cl(t, _i23, _s12);
                      if (null === _r35) continue;
                      if (Ne(_r35)) {
                        var _n66 = _r35.field;
                        if (
                          ("__proto__" === _n66 && e(430, t.name, _i23),
                          void 0 !== _r35.setterTable)
                        ) {
                          var _n67 = _r35.setterTable,
                            _o41 = _s12.meta;
                          for (var _r36 of "enum" === _o41.kind
                            ? _o41.values
                            : [_s12.defaultValue])
                            je(_n67, String(_r36)) ||
                              e(431, t.name, _i23, JSON.stringify(_r36));
                        }
                        o.set(_i23, {
                          field: _n66,
                          key: _i23,
                          kind: "ownField",
                          schema: _s12,
                          setterTable: _r35.setterTable,
                        });
                        continue;
                      }
                      var _l9 = n[_r35];
                      ("function" != typeof _l9 && e(432, t.name, _i23, _r35),
                        o.set(_i23, {
                          key: _i23,
                          kind: "field",
                          schema: _s12,
                          setter: _l9,
                        }));
                    }
                  }
                  return 0 === o.size ? dl : [].concat(Array.from(o.values()));
                })(t),
                _r34 = (function (t) {
                  var n = t.prototype,
                    o = new Map();
                  for (var _ref42 of yl(t).fieldsDerivedFirst) {
                    var _r37 = _ref42[0];
                    var _i24 = _ref42[1];
                    {
                      var _s13 = Sl(t, _r37, _i24);
                      if (null === _s13) continue;
                      if (Ne(_s13)) {
                        var _l0 = _s13.field;
                        "__proto__" === _l0 && e(426, t.name, _r37);
                        var _c7 = _s13.when;
                        var _a7 = void 0;
                        if (void 0 !== _c7) {
                          var _o42 = n[_c7];
                          ("function" != typeof _o42 &&
                            e(427, t.name, _r37, _c7),
                            (_a7 = _o42));
                        }
                        o.set(_r37, {
                          defaultValue: _i24.defaultValue,
                          derived: null === _i24.setter,
                          field: _l0,
                          getterTable: _s13.getterTable,
                          isEqual: _i24.isEqual,
                          key: _r37,
                          kind: "ownField",
                          schema: _i24,
                          when: _a7,
                        });
                        continue;
                      }
                      var _l1 = n[_s13];
                      ("function" != typeof _l1 && e(428, t.name, _r37, _s13),
                        o.set(_r37, {
                          defaultValue: _i24.defaultValue,
                          derived: null === _i24.setter,
                          getter: _l1,
                          isEqual: _i24.isEqual,
                          key: _r37,
                          kind: "method",
                          schema: _i24,
                        }));
                    }
                  }
                  return 0 === o.size ? xl : [].concat(Array.from(o.values()));
                })(t),
                _i22 = yl(t),
                _a6 = (function (t, e, n) {
                  var o,
                    r = t;
                  for (var _ref44 of Dl(t)) {
                    var _e99 = _ref44.klass;
                    var _n68 = _ref44.ownNodeConfig;
                    _n68 &&
                      void 0 !== _n68.generated &&
                      (void 0 === o
                        ? ((o = _n68.generated), (r = _e99))
                        : _n68.generated === o && (r = _e99));
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
                          for (var _n69 = 0; _n69 < t.getters.length; _n69++) {
                            var _o43 = t.getters[_n69],
                              _r38 = e.getters[_n69];
                            if (
                              _o43.kind !== _r38.kind ||
                              _o43.key !== _r38.key ||
                              _o43.schema !== _r38.schema ||
                              _o43.derived !== _r38.derived ||
                              _o43.isEqual !== _r38.isEqual ||
                              !Object.is(
                                _o43.defaultValue,
                                _r38.defaultValue,
                              ) ||
                              ("ownField" === _o43.kind &&
                                "ownField" === _r38.kind &&
                                (_o43.field !== _r38.field ||
                                  (void 0 === _o43.getterTable) !=
                                    (void 0 === _r38.getterTable)))
                            )
                              return !1;
                          }
                          for (var _n70 = 0; _n70 < t.setters.length; _n70++) {
                            var _o44 = t.setters[_n70],
                              _r39 = e.setters[_n70];
                            if (
                              _o44.kind !== _r39.kind ||
                              _o44.key !== _r39.key ||
                              _o44.schema !== _r39.schema ||
                              ("ownField" === _o44.kind &&
                                "ownField" === _r39.kind &&
                                (_o44.field !== _r39.field ||
                                  (void 0 === _o44.setterTable) !=
                                    (void 0 === _r39.setterTable)))
                            )
                              return !1;
                          }
                          return !0;
                        })(n, ul(al(r)))
                      ? o
                      : null;
                })(t, 0, { getters: _r34, setters: _n65 });
              ((c.compiled = {
                flatStates: _i22.flatStates,
                generated: null === _a6 ? null : _a6(_i22.fields),
                getters: _r34,
                isCompactDefault: Nl(_r34),
                setters: _n65,
              }),
                (function (t, e, n, o) {
                  if (!e && n) {
                    if (!ll(t, "getType")) {
                      var _e100 = t,
                        _o45 = function _o45() {
                          return this !== _e100 ? _vo5.getType.call(this) : n;
                        };
                      ((_o45[fl] = !0), (t.getType = _o45));
                    }
                    if (
                      (ll(t, "clone") ||
                        (t.clone = function (e, n) {
                          Qr(e);
                          var o = new t();
                          return (n !== Zr && o.afterCloneFrom(e), o);
                        }),
                      ll(t, "importJSON") ||
                        (t.importJSON =
                          (o && o.$importJSON) ||
                          (function (t) {
                            return function (e) {
                              var n = Il(t);
                              return n.updateFromJSON ===
                                _vo5.prototype.updateFromJSON
                                ? (function (t, e) {
                                    return kl(
                                      t.__state || void 0 !== e[L]
                                        ? hn(t, e)
                                        : t,
                                      e,
                                    );
                                  })(n, e)
                                : n.updateFromJSON(e);
                            };
                          })(t)),
                      !ll(t, "importDOM") && o)
                    ) {
                      var _e101 = o.importDOM;
                      _e101 &&
                        (t.importDOM = function () {
                          return _e101;
                        });
                    }
                    var _e102 = t.prototype;
                    je(_e102, "getTextContent") &&
                      !je(_e102, "getTextContentSize") &&
                      (t.prototype.getTextContentSize =
                        _vo5.prototype.getTextContentSize);
                  }
                })(t, o, l, s),
                (function (t) {
                  var _loop2 = function _loop2() {
                      var e = _ref46.klass;
                      var n = _ref46.ownNodeConfig;
                      {
                        var _t127 = e.prototype;
                        if (je(_t127, "afterCloneFrom")) return 0;
                        var _o46 = Al(e);
                        if (0 === _o46.length) return 0;
                        var _r40 = Object.getPrototypeOf(_t127),
                          _i25 =
                            n && void 0 !== n.generated
                              ? ul(al(e)).generated
                              : null,
                          _s14 =
                            (null !== _i25 && _i25.afterCloneFrom) ||
                            function (t, e) {
                              var n = t,
                                r = e;
                              for (
                                var _t128 = 0;
                                _t128 < _o46.length;
                                _t128++
                              ) {
                                var _e103 = _o46[_t128];
                                n[_e103] = r[_e103];
                              }
                            };
                        ((_t127.afterCloneFrom = function (t) {
                          (_r40.afterCloneFrom.call(this, t), _s14(this, t));
                        }),
                          (_t127.afterCloneFrom[Ml] = !0));
                      }
                    },
                    _ret;
                  for (var _ref46 of Dl(t)) {
                    _ret = _loop2();
                    if (_ret === 0) continue;
                  }
                })(t));
            } catch (e) {
              throw (cl["delete"](t), e);
            }
            return c;
          })(t);
    }
    function ul(t) {
      var n = t.compiled;
      return (void 0 === n && e(422, t.config.klass.name), n);
    }
    var fl = Symbol("lexical.synthesizedGetType"),
      dl = [];
    function hl(t, e, n, o) {
      var r = void 0 === n.method ? o : n.method,
        i = yl(t).declaredBy.get(e);
      if (void 0 === i) return n;
      var s = t.prototype,
        l = i.prototype;
      return gl(s, l, r) && gl(s, l, o) ? n : r;
    }
    function gl(t, e, n) {
      return t[n] === e[n];
    }
    function pl(t) {
      return "set" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    function _l(t) {
      return "get" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    var ml = {
      declaredBy: new Map(),
      fields: new Map(),
      fieldsBaseFirst: [],
      fieldsDerivedFirst: [],
      flatStates: [],
    };
    function yl(t) {
      var e = al(t);
      return (
        void 0 === e.composed &&
          (e.composed = (function (t) {
            var e = [],
              n = [],
              o = [];
            for (var _ref48 of Dl(t)) {
              var _r41 = _ref48.klass;
              var _i26 = _ref48.ownNodeConfig;
              {
                var _t129 = _i26 && _i26.json;
                (n.push(_r41),
                  e.push(
                    _t129 && "node" === _t129.meta.kind
                      ? Object.entries(_t129.meta.fields)
                      : [],
                  ));
                var _s15 = [];
                if (_i26 && _i26.stateConfigs)
                  for (var _t130 of _i26.stateConfigs)
                    "stateConfig" in _t130 &&
                      _t130.flat &&
                      _s15.push(_t130.stateConfig);
                o.push(_s15);
              }
            }
            var r = new Map();
            for (var _t131 = 0; _t131 < e.length; _t131++)
              for (var _ref50 of e[_t131]) {
                var _n71 = _ref50[0];
                var _o47 = _ref50[1];
                r.has(_n71) || r.set(_n71, _o47);
              }
            var i = new Map(),
              s = new Map(),
              l = new Map();
            for (var _t132 = e.length - 1; _t132 >= 0; _t132--) {
              for (var _ref52 of e[_t132]) {
                var _o48 = _ref52[0];
                var _l10 = _ref52[1];
                {
                  var _e104 = r.get(_o48);
                  (void 0 === _e104 || i.has(_o48) || i.set(_o48, _e104),
                    void 0 === _e104 ||
                      _l10 !== _e104 ||
                      s.has(_o48) ||
                      s.set(_o48, n[_t132]));
                }
              }
              for (var _e105 of o[_t132])
                l.has(_e105.key) || l.set(_e105.key, _e105);
            }
            return 0 === r.size && 0 === l.size
              ? ml
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
    var xl = [];
    function Sl(t, e, n) {
      var o = n.getter;
      if (null === o) return null;
      var r = void 0 === o ? _l(e) : o;
      return Ne(r) ? hl(t, e, r, _l(e)) : r;
    }
    function Cl(t, e, n) {
      var o = n.setter;
      if (null === o) return null;
      var r = void 0 === o ? pl(e) : o;
      return Ne(r) ? hl(t, e, r, pl(e)) : r;
    }
    function Tl(t) {
      return t;
    }
    function vl(t, e) {
      var n = t.defaultValue,
        o = t.isEqual;
      return void 0 === e || e === n || (void 0 !== o && o(e, n));
    }
    function Nl(t) {
      var e;
      return function (n, o) {
        void 0 === e &&
          (e = new Map(
            t.map(function (t) {
              return [t.key, t];
            }),
          ));
        var r = e.get(n);
        return void 0 !== r && vl(r, o);
      };
    }
    function bl(t) {
      var e = t.setterTable,
        n = t.schema,
        o = n.defaultValue;
      return void 0 === e ? o : e[String(o)];
    }
    function kl(t, e) {
      var n = al(t.constructor),
        _ul = ul(n),
        o = _ul.flatStates,
        r = _ul.generated,
        i = _ul.setters,
        s = (function (t, e, n) {
          var o = t;
          var _loop3 = function _loop3() {
            var r = n[_t133],
              i = e[r.key];
            if (void 0 !== i) {
              var _t134 = r.parse(i);
              o = cn(o, r, function () {
                return _t134;
              });
            }
          };
          for (var _t133 = 0; _t133 < n.length; _t133++) {
            _loop3();
          }
          return o;
        })(t, e, o);
      return null !== r && void 0 !== r.updateFromJSON
        ? r.updateFromJSON(s, e)
        : (function (t, e, n) {
            for (var _o49 = 0; _o49 < n.length; _o49++) {
              var _r42 = n[_o49],
                _i27 = _r42.schema(e[_r42.key]);
              "ownField" === _r42.kind
                ? (Tl(t)[_r42.field] =
                    void 0 === _r42.setterTable
                      ? _i27
                      : je(_r42.setterTable, _i27)
                        ? _r42.setterTable[_i27]
                        : bl(_r42))
                : _r42.setter.call(t, _i27);
            }
            return t;
          })(s, e, i);
    }
    function El(t) {
      return al(t).config;
    }
    function Ol(t) {
      var e = [];
      for (var _n72 of [t.getter, t.setter])
        Ne(_n72) &&
          "__proto__" !== _n72.field &&
          !e.includes(_n72.field) &&
          e.push(_n72.field);
      return e;
    }
    var Ml = "__lexicalSynthesizedAfterCloneFrom";
    function wl(t) {
      var _yl2 = yl(t),
        e = _yl2.declaredBy,
        n = _yl2.fieldsBaseFirst,
        o = [];
      for (var _ref54 of n) {
        var _r43 = _ref54[0];
        var _i28 = _ref54[1];
        if (e.get(_r43) === t)
          for (var _t135 of Ol(_i28)) o.includes(_t135) || o.push(_t135);
      }
      return o;
    }
    function Al(t) {
      var e = wl(t);
      if (0 === e.length) return e;
      var n = new Set();
      for (var _ref56 of Dl(t)) {
        var _e106 = _ref56.klass;
        if (_e106 !== t) for (var _t136 of wl(_e106)) n.add(_t136);
      }
      return 0 === n.size
        ? e
        : e.filter(function (t) {
            return !n.has(t);
          });
    }
    function* Dl(t) {
      for (var _e107 = t; _e107 && (_e107 === _vo5 || No(_e107.prototype)); ) {
        var _t137 = El(_e107),
          _n73 = _t137.declaresOwnConfig;
        (yield _n73
          ? _t137
          : babelHelpers["extends"]({}, _t137, { ownNodeConfig: void 0 }),
          (_e107 =
            (_n73 && _t137.ownNodeConfig && _t137.ownNodeConfig["extends"]) ||
            Rl(_e107)));
      }
    }
    function Il(t) {
      var e = Hs();
      Cc();
      var n = e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t)),
        o = new n.klass();
      return null === n.replace ? o : ps(o);
    }
    var Fl = function Fl(t, e) {
      var n = t;
      for (; null != n && !Qo(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Pl(t, n) {
      var o = [];
      var r = t.__first;
      for (; null !== r; ) {
        var _t138 = null === n ? vi(r) : n.get(r);
        (null == _t138 && e(174), o.push(r), (r = _t138.__next));
      }
      return o;
    }
    function Rl(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    function Ll(t) {
      return new _$l(qt(t._nodeMap), null, t._slotsUsed);
    }
    function Kl() {
      return new _$l(new Map([["root", new _Xo()]]), null, !1);
    }
    function Bl(t) {
      var n = t.constructor,
        o = ee(t);
      if (Vo(t)) {
        var _e108 = o.children,
          _n74 = t.getChildren();
        for (var _t139 = 0; _t139 < _n74.length; _t139++)
          _e108.push(Bl(_n74[_t139]));
      }
      var r = sf(t);
      if (r.length > 0) {
        var _i29 = {};
        for (var _o50 of r) {
          var _r44 = lf(t, _o50);
          (null === _r44 && e(366, n.name, _o50), (_i29[_o50] = Bl(_r44)));
        }
        o.$slots = _i29;
      }
      return o;
    }
    var _$l = (function () {
      function $l(t, e, n) {
        if (e === void 0) {
          e = null;
        }
        if (n === void 0) {
          n = !1;
        }
        ((this._nodeMap = t),
          (this._movedNodes = null),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1),
          (this._parsed = !1),
          (this._slotsUsed = n));
      }
      var _proto12 = $l.prototype;
      _proto12.isEmpty = function isEmpty() {
        return this._nodeMap.size <= 1 && null === this._selection;
      };
      _proto12.read = function read(t, e) {
        return Dc((e && e.editor) || null, this, t);
      };
      _proto12.clone = function clone(t) {
        var e = new $l(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), (e._parsed = this._parsed), e);
      };
      _proto12.toJSON = function toJSON(t) {
        var _this15 = this;
        return Zt("boolean" == typeof t && t, function () {
          return Dc(null, _this15, function () {
            return { root: Bl(wi()) };
          });
        });
      };
      return $l;
    })();
    var zl = "history-merge",
      Wl = "collaboration",
      Ul = "skip-scroll-into-view",
      jl = "skip-dom-selection",
      Hl = "skip-selection-focus",
      Vl = "composition-start",
      Yl = "composition-end";
    var _Jl = (function (_Ho3) {
      function Jl() {
        return _Ho3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Jl, _Ho3);
      var _proto13 = Jl.prototype;
      _proto13.$config = function $config() {
        return this.config("artificial", { extends: _Ho4 });
      };
      _proto13.createDOM = function createDOM(t) {
        return Es().createElement("div");
      };
      return Jl;
    })(_Ho4);
    var _Gl = (function (_vo4) {
      function Gl() {
        return _vo4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Gl, _vo4);
      var _proto14 = Gl.prototype;
      _proto14.$config = function $config() {
        return this.config("linebreak", {
          extends: _vo5,
          generated: Lo,
          importDOM: {
            br: function br(t) {
              return Zl(t) || tc(t) ? null : { conversion: ql, priority: 0 };
            },
          },
        });
      };
      _proto14.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto14.createDOM = function createDOM() {
        return Es().createElement("br");
      };
      _proto14.updateDOM = function updateDOM() {
        return !1;
      };
      _proto14.isInline = function isInline() {
        return !0;
      };
      return Gl;
    })(_vo5);
    function ql(t) {
      return { node: Xl() };
    }
    function Xl() {
      return ps(new _Gl());
    }
    function Ql(t) {
      return t instanceof _Gl;
    }
    function Zl(t) {
      var e = t.parentElement;
      if (null !== e && Us(e)) {
        var _n75 = e.firstChild;
        if (_n75 === t || (_n75.nextSibling === t && ec(_n75))) {
          var _n76 = e.lastChild;
          if (_n76 === t || (_n76.previousSibling === t && ec(_n76))) return !0;
        }
      }
      return !1;
    }
    function tc(t) {
      var e = t.parentElement;
      if (null !== e && Us(e)) {
        var _n77 = e.firstChild;
        if (_n77 === t || (_n77.nextSibling === t && ec(_n77))) return !1;
        var _o51 = e.lastChild;
        if (_o51 === t || (_o51.previousSibling === t && ec(_o51))) return !0;
      }
      return !1;
    }
    function ec(t) {
      return di(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function nc(t) {
      console.warn(t);
    }
    function oc(t, e, n, o, r) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = Kl()),
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
        null !== e && ra(t, e),
        (t._inputState = {
          collapsedSelectionFormat: {
            format: 0,
            key: "root",
            offset: 0,
            style: "",
            timeStamp: 0,
          },
          composedSegmentedKey: null,
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
          lastPointerType: "",
          mouseDrag: null,
          postDeleteSelectionToRestore: null,
          savedInputMode: void 0,
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
          ((n.textContent = ""), i.set("root", n), bi(n, t, "root")));
    }
    function rc(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref58 of Dl(t)) {
        var _o52 = _ref58.klass;
        var _r45 = _ref58.ownNodeConfig;
        {
          var _t140 = _o52.transform;
          if (!n.has(_t140)) {
            n.add(_t140);
            var _r46 = _o52.transform();
            _r46 && e.add(_r46);
          }
          if (_r45) {
            var _t141 = _r45.$transform;
            _t141 && e.add(_t141);
          }
        }
      }
      return e;
    }
    var ic = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = ni(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return Vo(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Vo(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function sc(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function lc(t, e, n) {
      return (t.set(e, n), sc.bind(null, t, e));
    }
    var _cc = (function () {
      function cc(t, e, n, o, r, i, s, l, c) {
        ((this._createEditorArgs = c),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new _Xt()),
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
          (this._key = Ki()),
          (this._onError = r),
          (this._onWarn = i),
          (this._htmlConversions = s),
          (this._editable = l),
          (this._headless = null !== e && e._headless),
          (this._recordNodeMoves = !1),
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
            composedSegmentedKey: null,
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
            lastPointerType: "",
            mouseDrag: null,
            postDeleteSelectionToRestore: null,
            savedInputMode: void 0,
            selectionChangeFromDOMUpdatePoints: null,
            unprocessedBeforeInputData: null,
          }),
          (this._lastNotifiedSelection = null));
      }
      var _proto15 = cc.prototype;
      _proto15.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto15.registerUpdateListener = function registerUpdateListener(t) {
        return lc(this._listeners.update, t);
      };
      _proto15.registerEditableListener = function registerEditableListener(t) {
        return lc(this._listeners.editable, t);
      };
      _proto15.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return lc(this._listeners.decorator, t);
      };
      _proto15.registerTextContentListener =
        function registerTextContentListener(t) {
          return lc(this._listeners.textcontent, t);
        };
      _proto15.registerRootListener = function registerRootListener(t) {
        var _this16 = this;
        var e = this._listeners.root;
        return zc(lc(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var o = t.get(e);
            (o && o(), t.set(e, e.apply(void 0, Array.from(n)) || void 0));
          })(e, t, [null, _this16._rootElement]);
        });
      };
      _proto15.registerCommand = function registerCommand(t, n, o) {
        void 0 === o && e(35);
        var r = this._commands;
        r.has(t) ||
          r.set(t, [new _Jt(), new _Jt(), new _Jt(), new _Jt(), new _Jt()]);
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
      _proto15.registerMutationListener = function registerMutationListener(
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
      _proto15.getRegisteredNode = function getRegisteredNode(t) {
        var n = this._nodes.get(t.getType());
        return (void 0 === n && e(37, t.name), n);
      };
      _proto15.resolveRegisteredNodeAfterReplacements =
        function resolveRegisteredNodeAfterReplacements(t) {
          for (; t.replaceWithKlass; )
            t = this.getRegisteredNode(t.replaceWithKlass);
          return t;
        };
      _proto15.initializeMutationListener = function initializeMutationListener(
        t,
        e,
      ) {
        var n = this._editorState,
          o = Qs(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t142 of o.keys()) r.set(_t142, "created");
        r.size > 0 &&
          t(r, {
            dirtyLeaves: new Set(),
            prevEditorState: n,
            updateTags: new Set(["registerMutationListener"]),
          });
      };
      _proto15.registerNodeTransformToKlass =
        function registerNodeTransformToKlass(t, e) {
          var n = this.getRegisteredNode(t);
          return (n.transforms.add(e), n);
        };
      _proto15.registerNodeTransform = function registerNodeTransform(t, e) {
        var n = this.registerNodeTransformToKlass(t, e),
          o = [n],
          r = n.replaceWithKlass;
        if (null != r) {
          var _t143 = this.registerNodeTransformToKlass(r, e);
          o.push(_t143);
        }
        return (
          (function (t, e) {
            var n = Qs(t.getEditorState()),
              o = [];
            for (var _t144 of e) {
              var _e109 = n.get(_t144);
              _e109 && o.push(_e109);
            }
            0 !== o.length &&
              t.update(
                function () {
                  for (var _t145 of o)
                    for (var _e110 of _t145.keys()) {
                      var _t146 = vi(_e110);
                      _t146 && _t146.markDirty();
                    }
                },
                null === t._pendingEditorState ? { tag: zl } : void 0,
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
      _proto15.hasNode = function hasNode(t) {
        return this._nodes.has(t.getType());
      };
      _proto15.hasNodes = function hasNodes(t) {
        return t.every(this.hasNode.bind(this));
      };
      _proto15.dispatchCommand = function dispatchCommand(t) {
        for (
          var _len6 = arguments.length,
            e = new Array(_len6 > 1 ? _len6 - 1 : 0),
            _key6 = 1;
          _key6 < _len6;
          _key6++
        ) {
          e[_key6 - 1] = arguments[_key6];
        }
        return Zi.apply(void 0, [this, t].concat(Array.from(e)));
      };
      _proto15.getDecorators = function getDecorators() {
        return this._decorators;
      };
      _proto15.getRootElement = function getRootElement() {
        return this._rootElement;
      };
      _proto15.getKey = function getKey() {
        return this._key;
      };
      _proto15.setRootElement = function setRootElement(t) {
        var n = this._rootElement;
        if (t !== n) {
          var _n$classList;
          var _o53 = Ji(this._config.theme, "root"),
            _r47 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            oc(this, n, t, _r47, { preserveUpdateQueue: !0 }),
            null !== n &&
              (this._config.disableEvents ||
                (function (t) {
                  var n = jc.get(t);
                  if (void 0 === n) return void La();
                  var o = Hc.get(n);
                  if (void 0 === o) return void La();
                  jc["delete"](t);
                  var r = ai(t);
                  li(r)
                    ? ((function (t) {
                        if (null !== t._parentEditor) {
                          var _e111 = Ri(t),
                            _n78 = _e111[_e111.length - 1]._key;
                          Ia.get(_n78) === t && Ia["delete"](_n78);
                        } else Ia["delete"](t._key);
                      })(r),
                      o.editors["delete"](r),
                      (o.hasShadowEditor = void 0),
                      (t.__lexicalEditor = null))
                    : r && e(198);
                  var i = Aa(t);
                  for (var _t147 = 0; _t147 < i.length; _t147++) i[_t147]();
                  t.__lexicalEventHandles = [];
                })(n),
              null != _o53 &&
                (_n$classList = n.classList).remove.apply(
                  _n$classList,
                  Array.from(_o53),
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e112 = cs(t),
              _n79 = t.style;
            ((_n79.userSelect = "text"),
              (_n79.whiteSpace = "pre-wrap"),
              (_n79.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e112),
              (this._dirtyType = 2),
              Se(this),
              this._updateTags.add(zl),
              Ic(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  jc.set(t, n);
                  var o = Hc.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    Hc.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = Aa(t);
                  r.push(Vc.register(n));
                  var i = babelHelpers["extends"](
                    {
                      blur: Rt,
                      click: Zc,
                      compositionend: Ta,
                      compositionstart: ma,
                      copy: Ot,
                      cut: Mt,
                      dragend: Et,
                      dragover: kt,
                      dragstart: bt,
                      drop: vt,
                      focus: Pt,
                      input: pa,
                      keydown: va,
                      paste: Z,
                      pointerdown: ia,
                    },
                    d && { beforeinput: ha },
                    g && { keyup: Na, mousedown: na },
                  );
                  var _loop4 = function _loop4() {
                    var n = _ref60[0];
                    var o = _ref60[1];
                    {
                      var _i30 = function _i30(r) {
                        Ra(r) ||
                          (Pa(r),
                          "blur" === n &&
                            (ra(e, t),
                            (e._inputState.isShiftKeyDown = !1),
                            (e._inputState.isInsertLineBreak = !1)),
                          (e.isEditable() || "click" === n || "copy" === n) &&
                            ("function" == typeof o ? o(r, e) : Zi(e, o, r)));
                      };
                      r.push(Wc(t, n, _i30));
                    }
                  };
                  for (var _ref60 of Object.entries(i)) {
                    _loop4();
                  }
                  var s;
                  var l = function l() {
                      e._inputState.mouseDrag = null;
                    },
                    c = function c(n) {
                      var r = e._inputState,
                        i = r.mouseDrag;
                      if (
                        (s &&
                          s.defaultPrevented &&
                          !n.buttons &&
                          (r.isSelectionChangeFromMouseDown = !1),
                        !i || "mouse" !== n.pointerType)
                      )
                        return;
                      var c = "pointerup" === n.type;
                      if ("pointercancel" === n.type || (!c && 1 !== n.buttons))
                        return l();
                      ((r.mouseDrag = c ? null : n),
                        $c(e, function () {
                          var s = Ss(as(e));
                          if ("mousedown" !== i.type) {
                            var _o54 =
                              c &&
                              s &&
                              Ya(bu()) &&
                              vu(ku(), s, e, new Event("selectionchange"));
                            return (
                              _o54 && Di(_o54),
                              la(e, n, c && s ? ws(s, t).focusNode : null)
                            );
                          }
                          var a = Cu(s, e);
                          if (
                            i.defaultPrevented ||
                            (!i.shiftKey && a && !a.isCollapsed())
                          )
                            l();
                          else if (s && r.isSelectionChangeFromMouseDown) {
                            (Da(e, s, new Event("selectionchange"), o),
                              la(e, i, ws(s, t).focusNode));
                            var _n80 = bu();
                            Ya(_n80) &&
                              _n80.isCollapsed() &&
                              !_n80.is(ku()) &&
                              Qc(e, _n80);
                          }
                        }));
                    };
                  (r.push(
                    Uc(
                      n,
                      { pointercancel: c, pointermove: c, pointerup: c },
                      !0,
                    ),
                    Wc(as(e), "blur", l),
                    e.registerEditableListener(l),
                    Uc(t, {
                      contextmenu: l,
                      dragstart: l,
                      keydown: function keydown(t) {
                        return (
                          (t.getModifierState && t.getModifierState(t.key)) ||
                          l()
                        );
                      },
                      mousedown: function mousedown(t) {
                        var n = e._inputState;
                        n.mouseDrag =
                          0 !== t.button ||
                          1 !== t.detail ||
                          t.defaultPrevented ||
                          "mouse" !== n.lastPointerType ||
                          !e.isEditable() ||
                          e.isComposing() ||
                          sl(Rs(t), e)
                            ? null
                            : t;
                      },
                    }),
                    Wc(
                      t,
                      "pointerdown",
                      function (t) {
                        ((s = t),
                          (e._inputState.lastPointerType = t.pointerType));
                      },
                      !0,
                    ),
                  ),
                    g &&
                      r.push(
                        (function (t, e) {
                          var n = null;
                          var o = { capture: !0, passive: !0 };
                          return zc(
                            Wc(
                              t,
                              "touchstart",
                              function (t) {
                                var e =
                                  1 === t.touches.length ? t.touches[0] : null;
                                n = e ? { x: e.clientX, y: e.clientY } : null;
                              },
                              o,
                            ),
                            Wc(
                              t,
                              "touchend",
                              function (t) {
                                var o = t.changedTouches[0];
                                (null !== n &&
                                  o &&
                                  0 === t.touches.length &&
                                  Math.abs(o.clientX - n.x) <= ta &&
                                  Math.abs(o.clientY - n.y) <= ta &&
                                  e(t),
                                  (n = null));
                              },
                              o,
                            ),
                          );
                        })(t, function (n) {
                          return (function (t, e, n) {
                            void 0 !== e._inputState.savedInputMode &&
                              (oa(t, e, n) ||
                                (Ps(n.ownerDocument) === n && n.blur(),
                                ra(e, n)));
                          })(n, e, t);
                        }),
                      ));
                })(t, this),
              null != _o53 &&
                (_t$classList = t.classList).add.apply(
                  _t$classList,
                  Array.from(_o53),
                ));
          } else ((this._window = null), this._updateTags.add(zl), Ic(this));
          Fc("root", this, !1, t, n);
        }
      };
      _proto15.getElementByKey = function getElementByKey(t) {
        return this._keyToDOMMap.get(t) || null;
      };
      _proto15.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto15.setEditorState = function setEditorState(t, e) {
        var _this17 = this;
        var o = t.isEmpty();
        var r = t;
        (r._readOnly &&
          ((r = Ll(t)),
          (r._selection = t._selection ? t._selection.clone() : null)),
          xe(this));
        var i = this._pendingEditorState,
          s = void 0 !== e ? e.tag : null;
        (null === i ||
          i.isEmpty() ||
          (null != s && this._updateTags.add(s), Ic(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || t._slotsUsed),
          $c(
            this,
            function () {
              if (
                (s && _this17._updateTags.add(s),
                o && (n(38), wi().append(Hr())),
                t._parsed)
              )
                for (var _ref62 of r._nodeMap.entries()) {
                  var _t148 = _ref62[0];
                  var _e113 = _ref62[1];
                  Vo(_e113)
                    ? _this17._dirtyElements.set(_t148, !0)
                    : _this17._dirtyLeaves.add(_t148);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto15.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = Kl(),
            r = uc,
            i = dc,
            s = fc,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Map()),
            (e._dirtyType = 0),
            (uc = o),
            (dc = !1),
            (fc = e),
            Qr(null));
          try {
            var _r48 = e._nodes;
            (Ac(t.root, _r48), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (uc = r),
              (dc = i),
              (fc = s));
          }
          return o;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto15.read = function read() {
        for (
          var _len7 = arguments.length, t = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          t[_key7] = arguments[_key7];
        }
        var _ref63 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref63[0],
          n = _ref63[1];
        return (
          "force-commit" === e && (mc.has(this) || Ic(this)),
          ("pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
          ).read(n, { editor: this })
        );
      };
      _proto15.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Bc(t, e, n);
        })(this, t, e);
      };
      _proto15.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          $c(this, function () {
            var o = bu(),
              r = wi();
            (null !== o
              ? o.dirty || Di(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              is("focus"),
              ss(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto15.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = Ss(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto15.isEditable = function isEditable() {
        return this._editable;
      };
      _proto15.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          Fc("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return bc();
            }));
      };
      _proto15.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON(te()) };
      };
      return cc;
    })();
    _cc.version = (function () {
      return Yt;
    })();
    function ac(t, e, n, o, r, i) {
      if (Vo(t)) {
        var _s16 = t.__first;
        for (; null !== _s16; ) {
          var _t149 = o.get(_s16);
          if (void 0 === _t149) break;
          var _l11 = Vo(_t149);
          (_t149.__parent !== e ||
            (_l11 && i.has(_s16)) ||
            ((_l11 || (Xu(_t149) && null !== _t149.__slots)) &&
              ac(_t149, _s16, n, o, r, i),
            n.has(_s16) || i["delete"](_s16),
            r.push(_s16)),
            (_s16 = _t149.__next));
        }
      }
      for (var _s17 of Xu(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t150 = o.get(_s17);
        void 0 !== _t150 &&
          Qu(_t150) &&
          _t150.__slotHost === e &&
          ((Vo(_t150) || (Xu(_t150) && null !== _t150.__slots)) &&
            ac(_t150, _s17, n, o, r, i),
          n.has(_s17) || i["delete"](_s17),
          r.push(_s17));
      }
    }
    var uc = null,
      fc = null,
      dc = !1,
      hc = !1,
      gc = !1;
    var pc = new Set(),
      _c = new Set(),
      mc = new Set();
    var yc = 0;
    var xc = { characterData: !0, childList: !0, subtree: !0 };
    function Sc() {
      return dc || (null !== uc && uc._readOnly);
    }
    function Cc() {
      dc && e(13);
    }
    function Tc() {
      yc > 99 && e(14);
    }
    function vc() {
      return (null === uc && e(195, kc()), uc);
    }
    function Nc() {
      return (null === fc && e(337, kc()), fc);
    }
    function bc() {
      Nc()._dirtyType = 2;
    }
    function kc() {
      var t = 0;
      var e = new Set(),
        n = _cc.version;
      if ("undefined" != typeof window)
        for (var _o55 of bs(document)) {
          var _r49 = ai(_o55);
          if (li(_r49)) t++;
          else if (_r49) {
            var _t151 = String(_r49.constructor.version || "<0.17.1");
            (_t151 === n &&
              (_t151 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t151));
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
    function Ec() {
      return fc;
    }
    function Oc(t, e, n) {
      var o = e.__type,
        r = ei(t, o);
      var i = n.get(o);
      void 0 === i && ((i = Array.from(r.transforms)), n.set(o, i));
      var s = i.length;
      for (var _t152 = 0; _t152 < s && (i[_t152](e), e.isAttached()); _t152++);
    }
    function Mc(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function wc(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t153 of o) n.add(_t153);
    }
    function Ac(t, n) {
      var o = t.type,
        r = n.get(o);
      void 0 === r && e(17, o);
      var i = r.klass;
      t.type !== i.getType() && e(18, i.name);
      var s = i.importJSON(t),
        l = t.children;
      if (Vo(s) && Array.isArray(l))
        for (var _t154 = 0; _t154 < l.length; _t154++) {
          var _e114 = Ac(l[_t154], n);
          s.append(_e114);
        }
      var c = t.$slots;
      if (c) {
        Xu(s) || e(379, i.name);
        for (var _t155 in c) _f(s, _t155, Ac(c[_t155], n));
      }
      return s;
    }
    function Dc(t, e, n) {
      var o = uc,
        r = dc,
        i = fc;
      ((uc = e), (dc = !0), (fc = t));
      try {
        return n();
      } finally {
        ((uc = o), (dc = r), (fc = i));
      }
    }
    function Ic(e, n) {
      null !== e._pendingEditorState && fc !== e && xe(e, !1, !0);
      var o = gc;
      gc = !0;
      try {
        var _o56 = (function (t) {
          if (_c.has(t)) return !1;
          _c.add(t);
          try {
            for (var _e115 = 0; null !== t._pendingEditorState; _e115++) {
              var _n81 = t._pendingEditorState._selection,
                _o57 = t._rootElement;
              if (!Pc(t, _n81)) return !1;
              var _r50 =
                (null === _n81 || Ya(_n81)) &&
                (t._headless || null === _o57 || !_o57.isConnected);
              if (_r50 || 100 === _e115)
                return (
                  (t._lastNotifiedSelection =
                    null === _n81 ? null : _n81.clone()),
                  !_r50
                );
              Bc(
                t,
                function () {
                  return t.dispatchCommand(W);
                },
                void 0,
                !0,
              );
            }
            return !1;
          } finally {
            _c["delete"](t);
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
              Lc(e, e._deferred)
            );
          var s = e._editorState,
            l = s._selection,
            c = o._selection,
            a = 0 !== e._dirtyType,
            u = uc,
            f = dc,
            d = fc,
            h = e._updating,
            g = e._observer;
          var p = null;
          if (
            ((e._pendingEditorState = null),
            (e._editorState = o),
            !i && a && null !== g)
          ) {
            ((fc = e), (uc = o), (dc = !1), (e._updating = !0));
            try {
              var _t156 = e._dirtyType,
                _n82 = e._dirtyElements,
                _r51 = e._dirtyLeaves;
              (g.disconnect(), (p = mo(s, o, e, _t156, _n82, _r51)));
            } catch (t) {
              if ((t instanceof Error && e._onError(t), hc)) throw t;
              return (
                oc(e, null, r, o),
                Se(e),
                (e._dirtyType = 2),
                (hc = !0),
                Ic(e, s),
                void (hc = !1)
              );
            } finally {
              (g.observe(r, xc),
                (e._updating = h),
                (uc = u),
                (dc = f),
                (fc = d));
            }
          }
          o._readOnly || (o._readOnly = !0);
          var _ = e._dirtyLeaves,
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
          var S = e._deferred;
          (h || (e._deferred = []),
            (function (t, e) {
              var n = t._decorators;
              var o = t._pendingDecorators || n;
              var r = e._nodeMap;
              var i;
              for (i in o) r.has(i) || (o === n && (o = Oi(t)), delete o[i]);
            })(e, o));
          var C = i ? null : Ss(as(e));
          if (
            e._editable &&
            null !== C &&
            (a || null === c || c.dirty || !c.is(l)) &&
            null !== r &&
            !x.has(jl)
          ) {
            ((fc = e), (uc = o));
            try {
              if ((null !== g && g.disconnect(), a || null === c || c.dirty)) {
                var _t157 = e._blockCursorElement;
                (null !== _t157 && xs(_t157, e, r), Iu(l, c, e, C, x, r));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  Ya(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(Fs(e))
                ) {
                  var _r52 = n.anchor,
                    _i31 = _r52.getNode(),
                    _s18 = _r52.offset;
                  var _l12 = !1,
                    _c8 = null;
                  if (_s18 === _i31.getChildrenSize())
                    ys(_i31.getChildAtIndex(_s18 - 1)) && (_l12 = !0);
                  else {
                    var _e116 = _i31.getChildAtIndex(_s18);
                    null !== _e116 &&
                      ys(_e116) &&
                      ((_l12 = !0), (_c8 = t.getElementByKey(_e116.__key)));
                  }
                  if (_l12) {
                    var _n83 = Ys(
                      _i31,
                      t.getElementByKey(_i31.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = Es().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList2;
                              if ("string" == typeof o) {
                                var _t158 = td(o);
                                o = e.blockCursor = _t158;
                              }
                              void 0 !== o &&
                                (_n$classList2 = n.classList).add.apply(
                                  _n$classList2,
                                  Array.from(o),
                                );
                            }
                            return n;
                          })(t._config)),
                      (e.style.caretColor = "transparent"),
                      void (null === _c8
                        ? _n83.appendChild(o)
                        : _n83.insertBefore(o, _c8))
                    );
                  }
                }
                null !== o && xs(o, t, e);
              })(e, r, c);
            } finally {
              (null !== g && g.observe(r, xc), (fc = d), (uc = u));
            }
          }
          var T = mc.has(e);
          mc.add(e);
          try {
            null !== p &&
              (function (t, e, n, o, r) {
                var i = Array.from(t._listeners.mutation),
                  s = i.length;
                for (var _t159 = 0; _t159 < s; _t159++) {
                  var _i$_t = i[_t159],
                    _s19 = _i$_t[0],
                    _l13 = _i$_t[1];
                  for (var _t160 of _l13) {
                    var _i32 = e.get(_t160);
                    void 0 !== _i32 &&
                      _s19(_i32, {
                        dirtyLeaves: o,
                        prevEditorState: r,
                        updateTags: n,
                      });
                  }
                }
              })(e, p, x, _, s);
            var _t161 = e._pendingDecorators;
            (null !== _t161 &&
              ((e._decorators = _t161),
              (e._pendingDecorators = null),
              Fc("decorator", e, !0, _t161)),
              (function (t, e, n) {
                var o = Mi(e),
                  r = Mi(n);
                o !== r && Fc("textcontent", t, !0, r);
              })(e, n || s, o),
              Fc("update", e, !0, {
                dirtyElements: m,
                dirtyLeaves: _,
                editorState: o,
                mutatedNodes: p,
                normalizedNodes: y,
                prevEditorState: n || s,
                tags: x,
              }));
          } finally {
            T || mc["delete"](e);
          }
          (h || Lc(e, S),
            (function (e) {
              var n = e._updates;
              if (0 === n.length) return void (e._cascadeCount = 0);
              if (
                ((function (t) {
                  pc.has(t) ||
                    (pc.add(t),
                    setTimeout(function () {
                      (pc["delete"](t), (t._cascadeCount = 0));
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
                var _t162 = o[0],
                  _n84 = o[1];
                Bc(e, _t162, _n84);
              }
            })(e));
        })(e, n),
          _o56 && e._onWarn(t(436)));
      } finally {
        gc = o;
      }
    }
    function Fc(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n85 = e._listeners[t],
          _r53 = Array.from(_n85);
        for (
          var _len8 = arguments.length,
            o = new Array(_len8 > 3 ? _len8 - 3 : 0),
            _key8 = 3;
          _key8 < _len8;
          _key8++
        ) {
          o[_key8 - 3] = arguments[_key8];
        }
        for (var _ref65 of _r53) {
          var _t163 = _ref65[0];
          var _e117 = _ref65[1];
          {
            _e117 && _e117();
            var _r54 = _t163.apply(void 0, Array.from(o)),
              _i33 = "function" == typeof _r54 ? _r54 : void 0;
            _n85.has(_t163) ? _n85.set(_t163, _i33) : _i33 && _i33();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function Pc(t, e) {
      var n = t._lastNotifiedSelection;
      return null === e ? null !== n : !e.is(n);
    }
    function Rc(t, e, n, o) {
      var r = Ri(t);
      var i;
      if (!gc)
        for (var _t164 = 0; _t164 < r.length; _t164++)
          r[_t164]._updating || (r[_t164]._cascadeCount = 0);
      if (e === W) {
        if (fc !== t || dc) {
          var _r55 = !1;
          return (
            $c(t, function () {
              _r55 = Rc(t, e, n, o);
            }),
            _r55
          );
        }
        var _r56 = vc()._selection;
        t._lastNotifiedSelection = null === _r56 ? null : _r56.clone();
      }
      for (var _t165 = 4; _t165 >= 0; _t165--) {
        var _loop5 = function _loop5() {
            var l = r[_s20];
            if (_s20 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e118 = c[_t165];
              if (_e118.size > 0) {
                var _t166 = !1;
                if (
                  ($c(l, function () {
                    for (var _r57 of _e118)
                      if (_r57(n, o)) return void (_t166 = !0);
                  }),
                  _t166)
                )
                  return { v: _t166 };
              }
            }
          },
          _ret2;
        for (var _s20 = 0; _s20 < r.length; _s20++) {
          _ret2 = _loop5();
          if (_ret2 === 0) break;
          if (_ret2) return _ret2.v;
        }
      }
      return (
        i &&
          i.update(function () {
            Rc(i, e, n, o);
          }),
        !1
      );
    }
    function Lc(t, e) {
      if ((t._deferred === e && (t._deferred = []), 0 !== e.length)) {
        var _n86 = t._updating;
        t._updating = !0;
        try {
          for (var _t167 = 0; _t167 < e.length; _t167++) e[_t167]();
        } finally {
          t._updating = _n86;
        }
      }
    }
    function Kc(t, n) {
      var o = t._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n87 = o.shift();
        if (_n87) {
          var _o58 = _n87[0],
            _i34 = _n87[1],
            _s21 = t._pendingEditorState;
          var _l14 = void 0;
          (void 0 !== _i34 &&
            ((_l14 = _i34.onUpdate),
            _i34.skipTransforms && (r = !0),
            _i34.discrete && (null === _s21 && e(191), (_s21._flushSync = !0)),
            _l14 && t._deferred.push(_l14),
            wc(t, _i34.tag)),
            null == _s21 ? Bc(t, _o58, _i34) : _o58());
        }
      }
      return r;
    }
    function Bc(t, n, o, r) {
      if (r === void 0) {
        r = !1;
      }
      var i = t._updateTags;
      var s,
        l = !1,
        c = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        wc(t, o.tag),
        (l = o.skipTransforms || !1),
        (c = o.discrete || !1)),
        s && t._deferred.push(s));
      var a = t._editorState;
      var u = t._pendingEditorState,
        f = !1;
      ((null === u || u._readOnly) &&
        ((u = t._pendingEditorState = Ll(u || a)), (f = !0)),
        (u._flushSync = c));
      var d = uc,
        h = dc,
        g = fc,
        p = t._updating,
        _ = t._lastNotifiedSelection;
      ((uc = u), (dc = !1), (t._updating = !0), (fc = t));
      var m = t._headless || null === t.getRootElement();
      Qr(null);
      try {
        f &&
          (m
            ? null !== a._selection && (u._selection = a._selection.clone())
            : (u._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = Ss(as(t));
                return Ya(n) || null == n ? vu(n, o, t, e) : n.clone();
              })(t, (o && o.event) || null)));
        var _r58 = t._compositionKey;
        (n(),
          (l = Kc(t, l)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (Ya(o)) {
              var _t168 = o.anchor,
                _e119 = o.focus;
              var _r59;
              if (
                ("text" === _t168.type &&
                  ((_r59 = _t168.getNode()), _r59.selectionTransform(n, o)),
                "text" === _e119.type)
              ) {
                var _t169 = _e119.getNode();
                _r59 !== _t169 && _t169.selectionTransform(n, o);
              }
            }
          })(u, t),
          0 !== t._dirtyType &&
            (l
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t170 of n) {
                    var _e120 = o.get(_t170);
                    Sr(_e120) &&
                      _e120.isAttached() &&
                      _e120.isSimpleText() &&
                      !_e120.isUnmergeable() &&
                      Eo(_e120);
                  }
                })(u, t)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    i = Ci(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t171 of l) {
                        var _o59 = r.get(_t171);
                        (Sr(_o59) &&
                          _o59.isAttached() &&
                          _o59.isSimpleText() &&
                          !_o59.isUnmergeable() &&
                          Eo(_o59),
                          void 0 !== _o59 && Mc(_o59, i) && Oc(e, _o59, s),
                          n.add(_t171));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        yc++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t172 of a) {
                      var _n88 = _t172[0],
                        _l15 = _t172[1];
                      if ((o.set(_n88, _l15), !_l15)) continue;
                      var _c9 = r.get(_n88);
                      void 0 !== _c9 && Mc(_c9, i) && Oc(e, _c9, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      yc++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(u, t),
            Kc(t),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref67 of o) {
                var _t173 = _ref67[0];
                {
                  var _e121 = i.get(_t173);
                  void 0 !== _e121 &&
                    (_e121.isAttached() ||
                      (Vo(_e121) && ac(_e121, _t173, r, i, s, o),
                      r.has(_t173) || o["delete"](_t173),
                      s.push(_t173)));
                }
              }
              for (var _t174 of n) {
                var _e122 = i.get(_t174);
                void 0 === _e122 ||
                  _e122.isAttached() ||
                  (Xu(_e122) &&
                    null !== _e122.__slots &&
                    ac(_e122, _t174, r, i, s, n),
                  r.has(_t174) || n["delete"](_t174),
                  s.push(_t174));
              }
              var l = Nc(),
                c = l._cloneNotNeeded;
              for (var _t175 of s) (i["delete"](_t175), c["delete"](_t175));
              var a = l._compositionKey;
              null === a || i.has(a) || (l._compositionKey = null);
            })(a, u, t._dirtyLeaves, t._dirtyElements)),
          _r58 !== t._compositionKey && (u._flushSync = !0));
        var _i35 = u._selection;
        if (Ya(_i35)) {
          t._slotsUsed && gu(_i35);
          var _n89 = u._nodeMap,
            _o60 = _i35.anchor.key,
            _r60 = _i35.focus.key;
          (void 0 !== _n89.get(_o60) && void 0 !== _n89.get(_r60)) || e(19);
        } else Ga(_i35) && 0 === _i35._nodes.size && (u._selection = null);
      } catch (e) {
        (e instanceof Error && t._onError(e), (t._pendingEditorState = a));
        var _n90 = a._selection;
        return (
          (t._lastNotifiedSelection = null === _n90 ? null : _n90.clone()),
          (t._dirtyType = 2),
          t._cloneNotNeeded.clear(),
          (t._dirtyLeaves = new Set()),
          t._dirtyElements.clear(),
          void Ic(t)
        );
      } finally {
        ((uc = d), (dc = h), (fc = g), (t._updating = p), (yc = 0));
      }
      if (r) return;
      var y =
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
      y
        ? u._flushSync
          ? ((u._flushSync = !1), Ic(t))
          : f &&
            oi(function () {
              Ic(t);
            })
        : ((u._flushSync = !1),
          f &&
            (i.clear(),
            (t._deferred = []),
            (t._pendingEditorState = null),
            (t._lastNotifiedSelection = _)));
    }
    function $c(t, e, n) {
      fc === t && void 0 === n ? (Sc() ? Bc(t, e, n) : e()) : Bc(t, e, n);
    }
    function zc() {
      for (
        var _len9 = arguments.length, t = new Array(_len9), _key9 = 0;
        _key9 < _len9;
        _key9++
      ) {
        t[_key9] = arguments[_key9];
      }
      return function () {
        for (var _e123 = t.length - 1; _e123 >= 0; _e123--) t[_e123]();
        t.length = 0;
      };
    }
    function Wc(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    function Uc(t, e, n) {
      return zc.apply(
        void 0,
        Array.from(
          Object.entries(e).map(function (_ref68) {
            var e = _ref68[0],
              o = _ref68[1];
            return Wc(t, e, o, n);
          }),
        ),
      );
    }
    var jc = new WeakMap(),
      Hc = new WeakMap(),
      Vc = Ht(function (t) {
        return (
          t.addEventListener("selectionchange", Fa),
          function () {
            return t.removeEventListener("selectionchange", Fa);
          }
        );
      });
    function Yc(t, e, n, o, r, i) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = Nc();
      var u;
      if (void 0 !== i) u = i;
      else {
        var _t176 = Ss(as(a));
        u = null !== _t176 ? ws(_t176, a._rootElement) : null;
      }
      var f = null !== u ? u.anchorNode : null,
        h = s.key,
        g = a.getElementByKey(h),
        p = n.length;
      return (
        h !== l.key ||
        !Sr(c) ||
        (((!r &&
          (!d || a._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (c.isDirty() && p < 2) ||
          Pi(n)) &&
          s.offset !== l.offset &&
          !c.isComposing()) ||
        fi(c) ||
        (c.isDirty() && p > 1) ||
        ((r || !d) && null !== g && !c.isComposing() && f !== Gs(c, g, a)) ||
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
            r = ui(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (Sr(e) || (Vo(e) && e.isInline())) &&
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
    function Jc(t, e) {
      return (
        di(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Gc(t, e, n) {
      var _ws = ws(t, e._rootElement),
        o = _ws.anchorNode,
        r = _ws.anchorOffset,
        i = _ws.focusNode,
        s = _ws.focusOffset,
        l = e._inputState;
      if (l.isSelectionChangeFromDOMUpdate) {
        l.isSelectionChangeFromDOMUpdate = !1;
        var _t177 = l.selectionChangeFromDOMUpdatePoints;
        if (
          ((l.selectionChangeFromDOMUpdatePoints = null),
          Jc(o, r) &&
            Jc(i, s) &&
            !l.postDeleteSelectionToRestore &&
            (null === _t177 ||
              (_t177.anchorNode === o &&
                _t177.anchorOffset === r &&
                _t177.focusNode === i &&
                _t177.focusOffset === s)))
        )
          return;
      }
      $c(e, function () {
        if (!n) return void Di(null);
        if (!si(e, o, i)) return;
        var c = l.mouseDrag;
        !c || ("mousedown" === c.type && c.defaultPrevented) || la(e, c, i);
        var a = sa.has(c);
        var u = bu();
        if (l.postDeleteSelectionToRestore && Ya(u) && u.isCollapsed()) {
          var _t178 = u.anchor,
            _e124 = l.postDeleteSelectionToRestore.anchor;
          ((_t178.key === _e124.key && _t178.offset === _e124.offset + 1) ||
            (1 === _t178.offset &&
              _e124.getNode().is(_t178.getNode().getPreviousSibling()))) &&
            ((u = l.postDeleteSelectionToRestore.clone()), Di(u));
        }
        if (((l.postDeleteSelectionToRestore = null), Ya(u))) {
          var _n91 = u.anchor;
          if (u.isCollapsed())
            ("Range" === t.type && o === i && (u.dirty = !0), Qc(e, u));
          else {
            var _t179 = _n91.key,
              _e125 = u.focus,
              _o61 = _e125.key,
              _i36 = u.getNodes(),
              _l16 = _i36.length,
              _c0 = u.isBackward(),
              _ref69 = a ? [_n91.offset, _e125.offset] : [r, s],
              _f5 = _ref69[0],
              _d4 = _ref69[1],
              _h4 = _c0 ? _d4 : _f5,
              _g3 = _c0 ? _f5 : _d4,
              _p3 = _c0 ? _o61 : _t179,
              _2 = _c0 ? _t179 : _o61;
            var _m = C,
              _y = !1;
            for (var _t180 = 0; _t180 < _l16; _t180++) {
              var _e126 = _i36[_t180],
                _n92 = _e126.getTextContentSize();
              if (
                Sr(_e126) &&
                0 !== _n92 &&
                !(
                  (0 === _t180 && _e126.__key === _p3 && _h4 === _n92) ||
                  (_t180 === _l16 - 1 && _e126.__key === _2 && 0 === _g3)
                ) &&
                ((_y = !0), (_m &= _e126.getFormat()), 0 === _m)
              )
                break;
            }
            u.format = _y ? _m : 0;
          }
        }
        !(function (t, e, n) {
          if (n === void 0) {
            n = !1;
          }
          (n || Pc(t, e)) && t.dispatchCommand(W);
        })(e, u, null !== u && ((u.dirty && !a) || !Ya(u)));
      });
    }
    function qc(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function Xc(t, e) {
      qc(t, e.getFormat(), e.getStyle());
    }
    function Qc(t, n) {
      var o = n.anchor,
        r = o.getNode(),
        i = as(t).event,
        s = i ? i.timeStamp : performance.now(),
        _t$_inputState$collap = t._inputState.collapsedSelectionFormat,
        l = _t$_inputState$collap.format,
        c = _t$_inputState$collap.style,
        a = _t$_inputState$collap.offset,
        u = _t$_inputState$collap.key,
        f = _t$_inputState$collap.timeStamp;
      s < f + 200 && o.offset === a && o.key === u
        ? qc(n, l, c)
        : "text" === o.type
          ? (Sr(r) || e(141), Xc(n, r))
          : (t.isComposing() || "" !== wi().getTextContent()) &&
            (Vo(r) || e(259), r.isEmpty() ? Nu(n, "") : qc(n, n.format, ""));
    }
    function Zc(t, e) {
      $c(e, function () {
        var n = bu(),
          o = Ss(as(e)),
          r = ku();
        if (o)
          if (Ya(n)) {
            var _t181 = n.anchor,
              _e127 = _t181.getNode();
            "element" === _t181.type &&
              0 === _t181.offset &&
              n.isCollapsed() &&
              !Qo(_e127) &&
              1 === wi().getChildrenSize() &&
              _e127.getTopLevelElementOrThrow().isEmpty() &&
              null !== r &&
              n.is(r) &&
              (o.removeAllRanges(), (n.dirty = !0));
          } else if (
            "touch" === t.pointerType ||
            "pen" === t.pointerType ||
            (g && "mouse" !== e._inputState.lastPointerType)
          ) {
            var _n93 = ws(o, e._rootElement).anchorNode;
            (Ls(_n93) || di(_n93)) && Di(vu(r, o, e, t));
          }
        if (u && null !== o && 0 === o.rangeCount) {
          var _n94 = e._rootElement;
          if (null !== _n94 && t.target === _n94) {
            var _i37 = t.clientY;
            var _s22 = _n94.childNodes.length;
            for (var _t182 = 0; _t182 < _n94.childNodes.length; _t182++) {
              var _e128 = _n94.childNodes[_t182];
              if (Ls(_e128)) {
                var _n95 = _e128.getBoundingClientRect();
                if (_i37 <= (_n95.top + _n95.bottom) / 2) {
                  _s22 = _t182;
                  break;
                }
              }
            }
            o.setBaseAndExtent(_n94, _s22, _n94, _s22);
            var _l17 = vu(r, o, e, t);
            null !== _l17 ? Di(_l17) : o.removeAllRanges();
          }
        }
        Zi(e, j, t);
      });
    }
    var ta = 10,
      ea =
        'input:not(:disabled),textarea:not(:disabled),select:not(:disabled),button:not(:disabled),a[href],area[href],label,summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable]:not([contenteditable="false"])';
    function na(t, e) {
      var n = e.getRootElement();
      null !== n &&
        (oa(t, e, n)
          ? (t.preventDefault(),
            Ps(n.ownerDocument) !== n &&
              (void 0 === e._inputState.savedInputMode &&
                (e._inputState.savedInputMode = n.getAttribute("inputmode")),
              n.setAttribute("inputmode", "none"),
              n.focus({ preventScroll: !0 })))
          : ra(e, n));
    }
    function oa(t, e, n) {
      if ("mouse" === e._inputState.lastPointerType) return !1;
      var o = Rs(t);
      if (!Ks(o)) return !1;
      var r = !1;
      for (var _t183 = o; null !== _t183; _t183 = es(_t183)) {
        if (_t183 === n) return r;
        if (1 === _t183.nodeType) {
          var _e129 = _t183;
          if (_e129.matches(ea)) return !1;
          "true" === _e129.getAttribute("data-lexical-decorator") && (r = !0);
        }
      }
      return !1;
    }
    function ra(t, e) {
      var n = t._inputState.savedInputMode;
      void 0 !== n &&
        ((t._inputState.savedInputMode = void 0),
        null === n
          ? e.removeAttribute("inputmode")
          : e.setAttribute("inputmode", n));
    }
    function ia(t, e) {
      var n = Rs(t),
        o = t.pointerType;
      Ks(n) &&
        "touch" !== o &&
        "pen" !== o &&
        0 === t.button &&
        $c(e, function () {
          sl(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
        });
    }
    var sa = new WeakSet();
    function la(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = bu(),
        r = o && o.clone();
      !(function (t, e, n) {
        var o = ku(),
          r = "mousedown" === e.type,
          i = r && !e.shiftKey,
          s = n && Ei(n);
        Go(s) &&
          (r
            ? i && s.isInline() && s.selectPrevious()
            : Ya(o) && Di(o.clone()));
        var l = bu(),
          c = l || (i ? xu() : Ya(o) ? o.clone() : null),
          a = t.getRootElement(),
          u = a && a.getRootNode();
        if (!Ya(c) || (i && !c.isCollapsed()) || (!hi(u) && !Ts(u))) return;
        var f = c.anchor,
          d = c.focus;
        if (!r && Ya(o)) {
          var _o$anchor = o.anchor,
            _t184 = _o$anchor.key,
            _e130 = _o$anchor.offset,
            _n96 = _o$anchor.type;
          f.set(_t184, _e130, _n96, !0);
        }
        var h = e.clientX,
          g = e.clientY,
          p = u.elementFromPoint && u.elementFromPoint(h, g),
          _ = p && Ei(p),
          m = function m(t, e) {
            return Vo(t)
              ? "next" === e
                ? t.getLastDescendant()
                : t.getFirstDescendant()
              : t;
          },
          y = [null],
          x = Vo(_) && !_.isInline() && (Qo(_) ? Fl(d.getNode(), mu) : _);
        for (var _t185 of x ? Rf(x, "next") : [])
          y.push(Df(_t185.origin, "previous"), _t185);
        var S = as(t),
          C = S.document.createRange();
        var T = null;
        for (var _e131 of y) {
          var _n97 = _e131 ? m(_e131.origin, _e131.direction) : _;
          if (!Go(_n97) || !_n97.isInline() || _n97 === T) continue;
          var _o62 = t.getElementByKey(_n97.getKey());
          if (!_o62) continue;
          C.selectNodeContents(_o62);
          var _r61 = C.getBoundingClientRect(),
            _s23 = _o62.getBoundingClientRect(),
            _ref70 = _r61.height > _s23.height ? _r61 : _s23,
            _a8 = _ref70.bottom,
            _u5 = _ref70.left,
            _p4 = _ref70.right,
            _y2 = _ref70.top;
          if (_e131 && (g < _y2 || g > _a8)) {
            T = _n97;
            continue;
          }
          var _x = "rtl" === S.getComputedStyle(es(_o62) || _o62).direction,
            _v = 2 * h > _u5 + _p4 !== _x,
            _N = _v ? "next" : "previous",
            _b = _e131 && _e131.getNodeAtCaret(),
            _k = _b && t.getElementByKey(_b.getKey()),
            _E = _k ? _k.getClientRects() : [],
            _O = _E[_v ? 0 : _E.length - 1];
          if (
            !_e131 ||
            (_e131.direction === _N &&
              "none" === S.getComputedStyle(_o62).cssFloat &&
              (!_b ||
                Ql(_b) ||
                (_O &&
                  (_v === _x
                    ? 2 * _O.right > _u5 + _p4
                    : 2 * _O.left < _u5 + _p4))))
          ) {
            if (!_n97.is(m(Xi(d, _v), _N))) {
              var _t186 = Df(_n97, _N);
              (vr(d, _t186), i && vr(f, _t186));
            }
            return void (l || Di(c));
          }
        }
        if (Go(s) && !r) {
          var _e132 = S.document,
            _n98 =
              _e132.caretPositionFromPoint &&
              _e132.caretPositionFromPoint(h, g, {
                shadowRoots: Ts(u) ? [u] : [],
              }),
            _o63 = _n98 && au(_n98.offsetNode, _n98.offset, null, t);
          if (_o63) {
            var _o63$ = _o63[0],
              _t187 = _o63$.key,
              _e133 = _o63$.offset,
              _n99 = _o63$.type;
            d.set(_t187, _e133, _n99);
          }
        }
      })(t, e, n);
      var i = bu(),
        s = t._inputState.mouseDrag;
      (s && i && !i.is(r) && sa.add(s),
        "mousedown" === e.type && Ya(i) && Nu(i, Ya(r) ? r.anchor.key : ""));
    }
    function ca(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function aa(t) {
      var e = Nc()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = bu();
      if (!Ya(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!Sr(r)) return;
      var i = o.anchor.offset;
      if (r.getTextContentSize() === i) {
        var _t188 = r.getNextSibling();
        if ("\n" === n) {
          if (g) return;
          if (Ql(_t188)) _t188.selectEnd();
          else if (!_t188) {
            var _t189 = Fl(r, mu),
              _e134 = _t189 && _t189.getNextSibling();
            Vo(_e134) && _e134.selectStart();
          }
        } else
          "\t" === n
            ? qr(_t188) && _t188.selectEnd()
            : Sr(_t188) &&
              _t188.getTextContent()[0] === n &&
              _t188.select(1, 1);
      } else r.getTextContent()[i] === n && r.select(i + 1, i + 1);
    }
    function ua(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function fa(t) {
      a &&
        !g &&
        m &&
        (ua(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return ua(t);
        }, 0)));
    }
    function da(t, e) {
      var n = Rs(t);
      if (Ls(n) && sl(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = Ps(o.ownerDocument);
      return null !== r && o.contains(r) && sl(r, e);
    }
    function ha(t, e) {
      var n = t.inputType;
      "deleteCompositionText" === n ||
        (u && Qi(e)) ||
        ("insertCompositionText" !== n &&
          $c(
            e,
            function () {
              da(t, e) || Zi(e, H, t);
            },
            { event: t },
          ));
    }
    function ga(t) {
      var _ref71;
      var n = t.inputType,
        o = ca(t),
        r = Nc(),
        i = r._inputState,
        s = bu();
      if (
        "insertText" === n &&
        t.data &&
        i.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((ua(i), t.preventDefault(), Ya(s) && !s.isCollapsed())) {
          var _t190 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t190.key, _t190.offset, _t190.type),
            s.focus.set(_t190.key, _t190.offset, _t190.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t191 = ku();
          if (!Ya(_t191)) return !0;
          Di(_t191.clone());
        }
        if (Ya(s)) {
          var _n100 = s.anchor.key === s.focus.key;
          if (
            (function (t, e) {
              return (
                "MediaLast" === t.lastKeyCode && e < t.lastKeyDownTimeStamp + 30
              );
            })(i, t.timeStamp) &&
            r.isComposing() &&
            _n100
          ) {
            if (
              (Si(null),
              (i.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                $c(r, function () {
                  Si(null);
                });
              }, 30),
              Ya(s))
            ) {
              var _t192 = s.anchor.getNode();
              (_t192.markDirty(), Sr(_t192) || e(142), Xc(s, _t192));
            }
          } else {
            if (
              (Si(null),
              g &&
                null !== o &&
                !o.collapsed &&
                (s.applyDOMRange(o), !s.isCollapsed()))
            )
              return (t.preventDefault(), s.removeText(), !0);
            t.preventDefault();
            var _e135 = s.anchor.getNode(),
              _l18 = _e135.getTextContent(),
              _c1 = _e135.canInsertTextAfter(),
              _a9 = 0 === s.anchor.offset && s.focus.offset === _l18.length;
            var _u6 = y && _n100 && !_a9 && _c1;
            if (
              (_u6 && s.isCollapsed() && (_u6 = !Go(Xi(s.anchor, !0))), !_u6)
            ) {
              Zi(r, G, !0);
              var _t193 = bu();
              y &&
                Ya(_t193) &&
                _t193.isCollapsed() &&
                ((i.postDeleteSelectionToRestore = _t193),
                setTimeout(function () {
                  return (i.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!Ya(s))
        return (
          ("historyUndo" !== n && "historyRedo" !== n) ||
            (t.preventDefault(), Zi(r, "historyUndo" === n ? it : st)),
          !0
        );
      var l = t.data;
      null !== i.unprocessedBeforeInputData &&
        $i(!1, r, i.unprocessedBeforeInputData);
      var c = !1;
      if (
        (!s.dirty || null !== i.unprocessedBeforeInputData) &&
        s.isCollapsed() &&
        !Qo(s.anchor.getNode()) &&
        null !== o
      ) {
        var _s$anchor = s.anchor,
          _t194 = _s$anchor.key,
          _e136 = _s$anchor.offset,
          _i38 = _s$anchor.type,
          _l19 = r._slotsUsed && fu(s.anchor);
        s.applyDOMRange(o);
        var _a0 = n.endsWith("Forward");
        if (!1 !== _l19 && (_a0 || n.endsWith("Backward"))) {
          var _o64 = Ba(_t194, _e136, _i38),
            _r62 = s.anchor,
            _u7 = s.focus,
            _f6 = !hu(fu(_r62), _l19) || !hu(fu(_u7), _l19),
            _d5 =
              !_f6 &&
              null !== _l19 &&
              (_a0
                ? _r62.isBefore(_o64) || _u7.isBefore(_o64)
                : _o64.isBefore(_r62) || _o64.isBefore(_u7));
          (_f6 || _d5) &&
            (_r62.set(_t194, _e136, _i38),
            _u7.set(_t194, _e136, _i38),
            (c = _d5 && "deleteContentForward" === n));
        }
      }
      i.unprocessedBeforeInputData = null;
      var a = s.anchor,
        u = s.focus,
        f = a.getNode(),
        d = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === l) (t.preventDefault(), Zi(r, q, !1));
        else if (l === v) (t.preventDefault(), Zi(r, X));
        else if (null == l && t.dataTransfer) {
          var _e137 = t.dataTransfer.getData("text/plain");
          (t.preventDefault(), s.insertRawText(_e137));
        } else
          null != l && Yc(s, o, l, t.timeStamp, !0)
            ? (t.preventDefault(), Zi(r, Q, l), aa(l))
            : (i.unprocessedBeforeInputData = l);
        return ((i.lastBeforeInputInsertTextTimeStamp = t.timeStamp), !0);
      }
      switch ((t.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          (Zi(r, Q, t),
            aa(
              (_ref71 = t.dataTransfer
                ? t.dataTransfer.getData("text/plain")
                : null) != null
                ? _ref71
                : t.data,
            ));
          break;
        case "insertFromComposition": {
          i.compositionPhase = "idle";
          var _e138 = i.hadOrphanedCompositionEvents;
          i.hadOrphanedCompositionEvents = !1;
          var _n101 = r._compositionKey;
          (Si(null), _e138 || Zi(r, Q, t), Sa(_n101));
          break;
        }
        case "insertLineBreak":
          (Si(null), (i.isInsertLineBreak = !1), Zi(r, q, !1));
          break;
        case "insertParagraph":
          (Si(null),
            i.isInsertLineBreak
              ? ((i.isInsertLineBreak = !1), Zi(r, q, !1))
              : Zi(r, X));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Zi(r, Z, t);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Vo(t) || Vo(e) || !ui(t) || !ui(e);
          })(f, d) && Zi(r, tt, t);
          break;
        case "deleteByDrag":
          (is(Hl), Zi(r, tt, t));
          break;
        case "deleteByCut":
          Zi(r, tt, t);
          break;
        case "deleteContent":
          Zi(r, G, !1);
          break;
        case "deleteWordBackward":
          Zi(r, et, !0);
          break;
        case "deleteWordForward":
          Zi(r, et, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Zi(r, nt, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Zi(r, c ? G : nt, !1);
          break;
        case "formatStrikeThrough":
          Zi(r, ot, "strikethrough");
          break;
        case "formatBold":
          Zi(r, ot, "bold");
          break;
        case "formatItalic":
          Zi(r, ot, "italic");
          break;
        case "formatUnderline":
          Zi(r, ot, "underline");
          break;
        case "historyUndo":
          Zi(r, it);
          break;
        case "historyRedo":
          Zi(r, st);
      }
      return !0;
    }
    function pa(t, e) {
      t.stopPropagation();
      var n = e._inputState;
      (ua(n),
        $c(
          e,
          function () {
            da(t, e) || e.dispatchCommand(V, t);
          },
          { event: t },
        ),
        (n.unprocessedBeforeInputData = null));
    }
    function _a(t) {
      var e = Nc(),
        n = e._inputState,
        o = bu(),
        r = t.data,
        i = ca(t);
      var s = !1,
        l = !1;
      if (null != r && Ya(o)) {
        var _c10 = Ss(as(e)),
          _a1 = null !== _c10 ? ws(_c10, e._rootElement) : null,
          _f7 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            !e.isComposing();
        _f7 && (n.hadOrphanedCompositionEvents = !0);
        var _h5 = o.anchor.getNode(),
          _g4 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            e.isComposing() &&
            Sr(_h5) &&
            fi(_h5);
        if (!_f7 && !_g4 && Yc(o, i, r, t.timeStamp, !1, _a1)) {
          if (((s = !0), "ending-firefox" === n.compositionPhase)) {
            var _t195 = Ca(e, r);
            if (((n.compositionPhase = "idle"), _t195))
              return (is(Yl), Ii(), !0);
          }
          var _i39 = o.anchor.getNode();
          if (null === _c10 || null === _a1) return !0;
          var _f8 = o.isBackward(),
            _h6 = _f8 ? o.anchor.offset : o.focus.offset,
            _g5 = _f8 ? o.focus.offset : o.anchor.offset;
          (d &&
            !o.isCollapsed() &&
            Sr(_i39) &&
            null !== _a1.anchorNode &&
            _i39.getTextContent().slice(0, _h6) +
              r +
              _i39.getTextContent().slice(_h6 + _g5) ===
              Bi(_a1.anchorNode)) ||
            (Zi(e, Q, r), (l = "insertText" === t.inputType));
          var _p5 = r.length;
          (u &&
            _p5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _p5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            y && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), Si(null)));
        }
      }
      return (
        s ||
          ($i(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (Ca(e, r || void 0), is(Yl), (n.compositionPhase = "idle"))),
        Ii(l),
        !0
      );
    }
    function ma(t, e) {
      Zi(e, Y, t);
    }
    function ya(t) {
      var e = Nc(),
        n = e._inputState,
        o = bu();
      if (Ya(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r63 = o.anchor,
          _i40 = o.anchor.getNode();
        if (
          (Si(_r63.key),
          is(Vl),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r63.type ||
            !o.isCollapsed() ||
            (!y &&
              (_i40.getFormat() !== o.format ||
                (Sr(_i40) && _i40.getStyle() !== o.style))) ||
            (Sr(_i40) &&
              (fi(_i40) ||
                (0 === _r63.offset && !_i40.canInsertTextBefore()) ||
                (_r63.offset === _i40.getTextContentSize() &&
                  !_i40.canInsertTextAfter()))))
        ) {
          g || (!_ && !x)
            ? Zi(e, Q, N)
            : (function (t) {
                Ua(t, "", !0);
              })(o);
          var _t196 = bu();
          Ya(_t196) && Si(_t196.anchor.key);
        }
      }
      return !0;
    }
    function xa(t) {
      var e = Nc();
      return (
        (e._inputState.compositionPhase = "idle"),
        Ca(e, t.data),
        is(Yl),
        !0
      );
    }
    function Sa(t) {
      var e = Nc()._inputState,
        n = e.composedSegmentedKey;
      if (((e.composedSegmentedKey = null), null === t || t !== n)) return;
      var o = vi(t);
      if (!Sr(o) || "text" === o.getType() || fi(o) || !o.isAttached()) return;
      var r = bu(),
        i = Ya(r) && r.anchor.key === t ? r.anchor.offset : null,
        s = xr(o.getTextContent());
      if (
        (s.setFormat(o.getFormat()),
        s.setStyle(o.getStyle()),
        o.replace(s),
        null !== i)
      ) {
        var _t197 = Math.min(i, s.getTextContentSize());
        s.select(_t197, _t197);
      }
    }
    function Ca(t, e) {
      var n = t._compositionKey;
      if ((Si(null), null !== n && null != e)) {
        if ("" === e) {
          var _e139 = vi(n),
            _o65 = t.getElementByKey(n),
            _r64 = null !== _o65 && Sr(_e139) ? Gs(_e139, _o65, t) : null;
          if (null !== _r64 && null !== _r64.nodeValue && Sr(_e139)) {
            var _n102 = Ss(as(t)),
              _o66 = _n102 && ws(_n102, t._rootElement);
            var _i41 = null,
              _s24 = null;
            (null !== _o66 &&
              _o66.anchorNode === _r64 &&
              ((_i41 = _o66.anchorOffset), (_s24 = _o66.focusOffset)),
              zi(_e139, _r64.nodeValue, _i41, _s24, !0));
          }
          return (Sa(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e140 = bu();
          if (Ya(_e140) || Ga(_e140)) {
            if (Ya(_e140)) {
              var _t198 = _e140.focus;
              _e140.anchor.set(_t198.key, _t198.offset, _t198.type);
            }
            return (Zi(t, gt, null), Sa(n), !1);
          }
        }
        var _o67 = vi(n);
        if (null !== _o67 && Sr(_o67) && fi(_o67)) {
          _o67.markDirty();
          var _t199 = bu(),
            _r65 = _o67.getTextContentSize(),
            _i42 =
              Ya(_t199) && _t199.anchor.key === n ? _t199.anchor.offset : _r65;
          return (_o67.select(_i42, _i42).insertText(e), !0);
        }
      }
      return ($i(!0, t, e), Sa(n), !1);
    }
    function Ta(t, e) {
      var n = e._inputState;
      u
        ? (n.compositionPhase = "ending-firefox")
        : ("" === t.data || g || (!_ && !x)) && Zi(e, J, t);
    }
    function va(t, e) {
      var n = e._inputState;
      (g &&
        (n.isShiftKeyDown =
          "Shift" === t.key ||
          (n.isShiftKeyDown && t.shiftKey && "CapsLock" !== t.key)),
        (n.lastKeyDownTimeStamp = t.timeStamp),
        (n.lastKeyCode = t.key),
        "Backspace" !== t.key && ua(n),
        e.isComposing() ||
          (!g && (_ || x) && 229 === t.keyCode) ||
          Zi(e, lt, t));
    }
    function Na(t, e) {
      (t.shiftKey && "CapsLock" !== t.key) ||
        (e._inputState.isShiftKeyDown = !1);
    }
    var ba = { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: "any" },
      ka = { ctrlKey: !0 },
      Ea = { metaKey: !0 },
      Oa = { shiftKey: "any" },
      Ma = { altKey: "any", shiftKey: "any" };
    function wa(t) {
      var e = Nc();
      if (null == t.key) return !0;
      var n = e._keyDownShortcuts;
      null === n &&
        ((n = jt(
          (function () {
            var t = function t(_t200, e, n) {
                return {
                  key: _t200,
                  modifiers: e,
                  onMatch: function onMatch(t, e) {
                    Zi(e, n, t);
                  },
                };
              },
              e = function e(t, _e141, n, o) {
                return {
                  key: t,
                  modifiers: _e141,
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
                    var o = n._inputState;
                    ((o.isInsertLineBreak = e && (!g || o.isShiftKeyDown)),
                      Zi(n, gt, t),
                      t.defaultPrevented && (o.isInsertLineBreak = !1));
                  },
                };
              },
              o = function o(t, e) {
                return {
                  key: t,
                  modifiers: Bt,
                  onMatch: function onMatch(t, n) {
                    var o = n._editorState._selection;
                    null === o || Ya(o) || (t.preventDefault(), Zi(n, e, t));
                  },
                };
              };
            return [
              t("ArrowRight", Oa, ct),
              t("ArrowLeft", Oa, ut),
              t("ArrowUp", Ma, dt),
              t("ArrowDown", Ma, ht),
              n(babelHelpers["extends"]({}, ba, { shiftKey: !0 }), !0),
              n(babelHelpers["extends"]({}, ba, { shiftKey: !1 }), !1),
              t(" ", ba, pt),
              {
                key: "Backspace",
                modifiers: Oa,
                onMatch: function onMatch(t, e) {
                  Zi(e, _t, t) && fa(e._inputState);
                },
              },
              t("Escape", ba, mt),
              t("Delete", {}, yt),
              e("Backspace", $t, et, !0),
              e("Delete", $t, et, !1),
              e("b", Bt, ot, "bold"),
              e("u", Bt, ot, "underline"),
              e("i", Bt, ot, "italic"),
              t("Tab", Oa, xt),
              e("z", Bt, it, void 0),
              e(
                "z",
                babelHelpers["extends"]({}, Bt, { shiftKey: !0 }),
                st,
                void 0,
              ),
            ].concat(
              Array.from(
                a
                  ? [
                      {
                        key: "o",
                        modifiers: ka,
                        onMatch: function onMatch(t, e) {
                          (t.preventDefault(), Zi(e, q, !0));
                        },
                      },
                      t(
                        "ArrowLeft",
                        babelHelpers["extends"]({ metaKey: !0 }, Oa),
                        ft,
                      ),
                      t(
                        "ArrowRight",
                        babelHelpers["extends"]({ metaKey: !0 }, Oa),
                        at,
                      ),
                      e("h", ka, G, !0),
                      e("d", ka, G, !1),
                      e("Backspace", Ea, nt, !0),
                      e("Delete", Ea, nt, !1),
                      e("k", ka, nt, !1),
                    ]
                  : [
                      t("Home", Oa, ft),
                      t("End", Oa, at),
                      e("y", ka, st, void 0),
                    ],
              ),
              [
                {
                  key: "a",
                  modifiers: Bt,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Zi(e, wt, t) && fa(e._inputState));
                  },
                },
                o("c", Ot),
                o("x", Mt),
              ],
            );
          })(),
        )),
        (e._keyDownShortcuts = n));
      var o = n.match(t);
      return (
        o && o.onMatch(t, e),
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(Lt, t),
        !0
      );
    }
    function Aa(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    function Da(t, e, n, o) {
      if (void 0 !== o)
        for (var _t201 of o.editors)
          _t201._inputState.isSelectionChangeFromMouseDown = !1;
      var r = ws(e, t._rootElement).anchorNode;
      (Ls(r) || di(r)) && Di(vu(ku(), e, t, n));
    }
    var Ia = new Map();
    function Fa(t) {
      var e = Cs(t.target);
      if (null === e) return;
      var n = ns(t.target);
      var o = null;
      var r = null !== n ? Hc.get(n) : void 0;
      if (null !== n) {
        if (void 0 !== r) {
          var _t202 = r.editors;
          var _n103 = r.hasShadowEditor;
          if (void 0 === _n103) {
            _n103 = !1;
            for (var _e142 of _t202)
              if (
                null !== _e142._rootElement &&
                Ts(_e142._rootElement.getRootNode())
              ) {
                _n103 = !0;
                break;
              }
            r.hasShadowEditor = _n103;
          }
          if (_n103) {
            var _n104 = null;
            for (var _r66 of _t202) {
              var _t203 = _r66._rootElement;
              if (null === _t203) continue;
              var _i43 = ws(e, _t203).anchorNode;
              if (null !== _i43 && ci(_i43) === _r66) {
                if (Ts(_t203.getRootNode())) {
                  o = _r66;
                  break;
                }
                null === _n104 && (_n104 = _r66);
              }
            }
            null === o && null !== _n104 && (o = _n104);
          } else {
            var _t204 = e.anchorNode;
            null === _t204 ||
              (Ls(_t204) && null !== _t204.shadowRoot) ||
              (o = ci(_t204));
          }
        }
        if (null === o) {
          var _t205 = Ps(n);
          o = null !== _t205 ? ci(_t205) : null;
        }
      }
      if (null === o) return;
      o._inputState.isSelectionChangeFromMouseDown &&
        $c(o, function () {
          return Da(o, e, t, r);
        });
      var i = Ri(o),
        s = i[i.length - 1],
        l = s._key,
        c = Ia.get(l),
        a = c || s;
      (a !== o && Gc(e, a, !1),
        Gc(e, o, !0),
        o !== s ? Ia.set(l, o) : c && Ia["delete"](l));
    }
    function Pa(t) {
      t._lexicalHandled = !0;
    }
    function Ra(t) {
      return !0 === t._lexicalHandled;
    }
    var La = $();
    var _Ka = (function () {
      function Ka(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto16 = Ka.prototype;
      _proto16.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto16.isBefore = function isBefore(t) {
        return this.key === t.key
          ? this.offset < t.offset
          : Yf(Dr(Tr(this, "next")), Dr(Tr(t, "next"))) < 0;
      };
      _proto16.getNode = function getNode() {
        var t = vi(this.key);
        return (null === t && e(20), t);
      };
      _proto16.set = function set(t, e, n, o) {
        var r = this._selection,
          i = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          Sc() ||
            (Ci() === i && Si(t),
            null !== r &&
              (r.setCachedNodes(null),
              Ya(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return Ka;
    })();
    function Ba(t, e, n) {
      return new _Ka(t, e, n);
    }
    function $a(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (Sr(e)) {
        r = "text";
        var _t206 = e.getTextContentSize();
        o > _t206 && (o = _t206);
      } else if (!Vo(e)) {
        var _t207 = e.getNextSibling();
        if (Sr(_t207)) ((n = _t207.__key), (o = 0), (r = "text"));
        else {
          var _t208 = e.getParent();
          _t208 && ((n = _t208.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function za(t, e) {
      if (Vo(e)) {
        var _n105 = e.getLastDescendant();
        Vo(_n105) || Sr(_n105) ? $a(t, _n105) : $a(t, e);
      } else $a(t, e);
    }
    function Wa(t, e, n, o) {
      var r = t.getNode(),
        i = r.getChildAtIndex(t.offset),
        s = xr();
      if ((s.setFormat(n), s.setStyle(o), Vr(i))) i.splice(0, 0, [s]);
      else if (null !== i) {
        var _t209 = hs(r) ? Hr().append(s) : s;
        i.insertBefore(_t209);
      } else if (hs(r)) {
        var _t210 = r.getLastChild();
        Vo(_t210) && !_t210.isInline() && _t210.isEmpty()
          ? _t210.append(s)
          : r.append(Hr().append(s));
      } else r.append(s);
      (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
    }
    function Ua(t, n, o) {
      var r = t.format,
        i = t.style;
      if (!t.isCollapsed()) {
        var _e143 = (t.focus.isBefore(t.anchor) ? t.focus : t.anchor).getNode();
        if (
          (Sr(_e143) && ((r = _e143.getFormat()), (i = _e143.getStyle())),
          t.removeText(),
          (t.format = r),
          (t.style = i),
          "" === n && !o)
        )
          return;
        if (null === Ci())
          return (
            "element" === t.anchor.type && Wa(t.anchor, t.focus, r, i),
            void ja(t, n, r, i)
          );
      }
      "element" === t.anchor.type && Wa(t.anchor, t.focus, r, i);
      var s = t.anchor.getNode();
      Sr(s) || e(398);
      var l = t.anchor.offset,
        c = s.getParentOrThrow(),
        a = s.getTextContentSize();
      if (
        fi(s) ||
        (0 === l &&
          (!s.canInsertTextBefore() ||
            (!c.canInsertTextBefore() && !s.__prev))) ||
        (l === a &&
          (!s.canInsertTextAfter() || (!c.canInsertTextAfter() && !s.__next)))
      ) {
        if (s.isSegmented() && 0 !== l && l !== a) {
          if (null !== Ci())
            (s.setMode("normal").setFormat(r).setStyle(i),
              (Nc()._inputState.composedSegmentedKey = s.getKey()));
          else {
            var _e144 = xr(s.getTextContent());
            (_e144.setFormat(r), _e144.setStyle(i));
            var _n106 = bu() === t;
            (s.replace(_e144),
              t.setTextNodeRange(_e144, l, _e144, l),
              _n106 && bu() !== t && Di(t));
          }
          return void (("" !== n || o) && Ua(t, n, o));
        }
        if ("" === n && !o) return;
        if (0 === l || l === a) {
          var _e145 = 0 === l,
            _a10 = _e145 ? "previous" : "next",
            _u8 = Df(s, _a10).getNodeAtCaret();
          var _f9;
          Sr(_u8) &&
          (_e145 ? _u8.canInsertTextAfter() : _u8.canInsertTextBefore()) &&
          !fi(_u8)
            ? (_f9 = _u8)
            : ((_f9 = xr().setFormat(r).setStyle(i)),
              Df(
                (_e145 ? c.canInsertTextBefore() : c.canInsertTextAfter())
                  ? s
                  : c,
                _a10,
              ).insert(_f9));
          var _d6 = _e145 ? void 0 : 0;
          return (_f9.select(_d6, _d6), void Ua(t, n, o));
        }
        var _e146 = xr(n);
        return (
          _e146.setFormat(r),
          _e146.setStyle(i),
          s.replace(_e146),
          void _e146.select()
        );
      }
      if ("" === n && !o) return;
      var u = c.isInline() && 0 === l && !s.__prev,
        f = c.isInline() && l === a && !s.__next,
        d = s.getFormat() !== r || s.getStyle() !== i;
      if (u || f || d) {
        if ("" !== s.getTextContent() || u || f) return void ja(t, n, r, i);
        (s.setFormat(r), s.setStyle(i));
      }
      (s.spliceText(l, 0, n, !0),
        s.isComposing() &&
          "text" === t.anchor.type &&
          t.anchor.set(
            t.anchor.key,
            t.anchor.offset - n.length,
            t.anchor.type,
          ));
    }
    function ja(t, n, o, r) {
      var i = t.anchor.getNode();
      Sr(i) || e(398);
      var s = t.anchor.offset,
        l = xr(n).setFormat(o).setStyle(r),
        c = i.getParentOrThrow(),
        a = 0 === s,
        u = a || s === i.getTextContentSize();
      if (u && c.isInline() && !(a ? i.__prev : i.__next))
        Df(c, a ? "previous" : "next").insert(l);
      else {
        var _t211 = u ? i : i.splitText(s)[0];
        a ? _t211.insertBefore(l, !1) : _t211.insertAfter(l, !1);
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
    var _Ha = (function () {
      function Ha(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto17 = Ha.prototype;
      _proto17.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto17.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto17.is = function is(t) {
        if (!Ga(t)) return !1;
        var e = this._nodes,
          n = t._nodes;
        return (
          e.size === n.size &&
          Array.from(e).every(function (t) {
            return n.has(t);
          })
        );
      };
      _proto17.isCollapsed = function isCollapsed() {
        return !1;
      };
      _proto17.isBackward = function isBackward() {
        return !1;
      };
      _proto17.getStartEndPoints = function getStartEndPoints() {
        return null;
      };
      _proto17.add = function add(t) {
        ((this.dirty = !0), this._nodes.add(t), (this._cachedNodes = null));
      };
      _proto17["delete"] = function _delete(t) {
        ((this.dirty = !0),
          this._nodes["delete"](t),
          (this._cachedNodes = null));
      };
      _proto17.clear = function clear() {
        ((this.dirty = !0), this._nodes.clear(), (this._cachedNodes = null));
      };
      _proto17.has = function has(t) {
        return this._nodes.has(t);
      };
      _proto17.clone = function clone() {
        return new Ha(new Set(this._nodes));
      };
      _proto17.extract = function extract() {
        return this.getNodes();
      };
      _proto17.insertRawText = function insertRawText(t) {};
      _proto17.insertText = function insertText() {};
      _proto17.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === Zu(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (Sr(o)) r = o.select();
        else {
          var _t212 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t212, _t212);
        }
        r.insertNodes(t);
        for (var _t213 = 0; _t213 < n; _t213++) e[_t213].remove();
      };
      _proto17.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t214 of e) {
          var _e147 = vi(_t214);
          null !== _e147 && n.push(_e147);
        }
        return (Sc() || (this._cachedNodes = n), n);
      };
      _proto17.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n107 = 0; _n107 < t.length; _n107++)
          e += t[_n107].getTextContent();
        return e;
      };
      _proto17.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === Zu(t);
        });
        if ((bu() || ku()) === this && t[0]) {
          var _e148 = Df(t[0], "next");
          Nr(Hf(_e148, _e148));
        }
        for (var _e149 of t) _e149.remove();
        Va();
      };
      return Ha;
    })();
    function Va() {
      var t = wi();
      if (0 === t.getChildrenSize() && null === of(bu())) {
        var _e150 = Hr();
        (t.append(_e150), _e150.select());
      }
    }
    function Ya(t) {
      return t instanceof _Ja;
    }
    var _Ja = (function () {
      function Ja(t, e, n, o) {
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
      var _proto18 = Ja.prototype;
      _proto18.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto18.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto18.is = function is(t) {
        return (
          !!Ya(t) &&
          this.anchor.is(t.anchor) &&
          this.focus.is(t.focus) &&
          this.format === t.format &&
          this.style === t.style
        );
      };
      _proto18.isCollapsed = function isCollapsed() {
        return this.anchor.is(this.focus);
      };
      _proto18.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = (function (t) {
          var e = [],
            _t$getTextSlices = t.getTextSlices(),
            n = _t$getTextSlices[0],
            o = _t$getTextSlices[1];
          n && e.push(n.caret.origin);
          var r = new Set();
          var i = 0;
          for (var _n108 of t)
            if (Of(_n108)) {
              var _t215 = _n108.origin;
              0 === e.length ? r.add(_t215) : (i++, e.push(_t215));
            } else {
              var _t216 = _n108.origin;
              Vo(_t216) && 0 !== i ? i-- : e.push(_t216);
            }
          if (
            (o && e.push(o.caret.origin),
            Ef(t.focus) &&
              Vo(t.focus.origin) &&
              null === t.focus.getNodeAtCaret())
          )
            for (
              var _n109 = Rf(t.focus.origin, "previous");
              Of(_n109) &&
              r.has(_n109.origin) &&
              !_n109.origin.isEmpty() &&
              _n109.origin.is(e[e.length - 1]);
              _n109 = Kf(_n109)
            )
              (r["delete"](_n109.origin), e.pop());
          for (; e.length > 1; ) {
            var _t217 = e[e.length - 1];
            if (!Vo(_t217) || i > 0 || _t217.isEmpty() || r.has(_t217)) break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n110 = Dr(t.anchor),
              _o68 = Dr(t.anchor.getFlipped()),
              _r67 = function _r67(t) {
                return kf(t) ? t.origin : t.getNodeAtCaret();
              },
              _i44 =
                _r67(_n110) ||
                _r67(_o68) ||
                (t.anchor.getNodeAtCaret() ? _n110.origin : _o68.origin);
            e.push(_i44);
          }
          return e;
        })(Fr(kr(this), "next"));
        return (Sc() || (this._cachedNodes = e), e);
      };
      _proto18.setTextNodeRange = function setTextNodeRange(t, e, n, o) {
        return (
          this.anchor.set(t.__key, e, "text"),
          this.focus.set(n.__key, o, "text"),
          this
        );
      };
      _proto18.getTextContent = function getTextContent() {
        if (this.isCollapsed()) return "";
        var t = this.getNodes(),
          e = kr(this).getTextSlices();
        var n = "",
          o = !0;
        for (var _r68 = 0; _r68 < t.length; _r68++) {
          var _i45 = t[_r68];
          if (Vo(_i45) && !_i45.isInline()) {
            o || (n += "\n");
            var _t218 = "";
            for (var _e151 of sf(_i45)) {
              var _n111 = lf(_i45, _e151);
              null !== _n111 && (_t218 += _n111.getTextContent());
            }
            "" !== _t218 ? ((n += _t218), (o = !1)) : (o = !_i45.isEmpty());
          } else if (((o = !1), Sr(_i45))) {
            var _t219 = Lr(e, _i45);
            n += _t219 ? _t219.getTextContent() : _i45.getTextContent();
          } else (Go(_i45) || Ql(_i45)) && (n += _i45.getTextContent());
        }
        return n;
      };
      _proto18.applyDOMRange = function applyDOMRange(t) {
        var e = Nc(),
          n = e.getEditorState()._selection,
          o = _u(
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
          Oo(this));
      };
      _proto18.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new Ja(
          Ba(t.key, t.offset, t.type),
          Ba(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto18.toggleFormat = function toggleFormat(t) {
        ((this.format = pi(this.format, t, null)), (this.dirty = !0));
      };
      _proto18.setFormat = function setFormat(t) {
        ((this.format = t), (this.dirty = !0));
      };
      _proto18.setStyle = function setStyle(t) {
        ((this.style = t), (this.dirty = !0));
      };
      _proto18.hasFormat = function hasFormat(t) {
        var e = w[t];
        return 0 !== (this.format & e);
      };
      _proto18.insertRawText = function insertRawText(t) {
        this.insertNodes(Pu(t));
      };
      _proto18.insertText = function insertText(t) {
        Ua(this, t, !1);
      };
      _proto18.removeText = function removeText() {
        var t = bu() === this,
          e = this.anchor.key;
        (br(this, wr(kr(this))),
          this.isCollapsed() && Nu(this, e),
          t && bu() !== this && Di(this));
      };
      _proto18.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        Qa(this, t, e);
      };
      _proto18.insertNodes = function insertNodes(t) {
        var _i46;
        if (0 === t.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if (
          "element" === this.anchor.type &&
          Vo(n) &&
          n.isShadowRoot() &&
          null !== Zu(n)
        ) {
          var _n$getFirstChild;
          var _o69 =
            (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(Hr()).getFirstChild();
          if (null !== _o69 && !Vo(_o69)) {
            var _t220 = Hr();
            (_o69.insertBefore(_t220), (_o69 = _t220));
          }
          if (null !== _o69) {
            _o69.selectStart();
            var _n112 = bu();
            return (Ya(_n112) || e(369), _n112.insertNodes(t));
          }
        }
        if ("element" === this.anchor.type && hs(n)) {
          var _e152 = $u(t),
            _o70 = _e152.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _e152.getChildren()),
            void (null !== _o70 && _o70.selectEnd())
          );
        }
        var o = this.isBackward() ? this.focus : this.anchor;
        var r = o.getNode(),
          i = Fl(r, js);
        var s = t[t.length - 1];
        if (Vo(i) && "__language" in i) {
          if ("__language" in t[0]) this.insertText(t[0].getTextContent());
          else {
            var _Lu = Lu(this),
              _e153 = _Lu[1];
            (i.splice(_e153, 0, t), s.selectEnd());
          }
          return;
        }
        if (
          !t.some(function (t) {
            return (Vo(t) || Go(t)) && !t.isInline();
          })
        ) {
          Vo(i) || e(211, r.constructor.name, r.getType());
          var _Lu2 = Lu(this, !0),
            _n113 = _Lu2[0],
            _o71 = _Lu2[1];
          return (
            (Vo(_n113) ? _n113 : i).splice(_o71, 0, t),
            void s.selectEnd()
          );
        }
        if (null === i) {
          var _e154 = $u(t),
            _n114 = _e154.getLastDescendant();
          var _o72 = Tr(this.anchor, "next");
          for (var _t221 of _e154.getChildren()) _o72 = zr(_t221, _o72);
          return void (null !== _n114 && _n114.selectEnd());
        }
        if (
          Vo(i) &&
          (null !== Zu(i) ||
            (!i.isParentRequired() && !hs(i.getParentOrThrow())))
        ) {
          var _Lu3 = Lu(this),
            _e155 = _Lu3[1],
            _n115 = Ru(t);
          i.splice(_e155, 0, _n115);
          var _o73 = _n115[_n115.length - 1];
          return void (void 0 !== _o73
            ? _o73.selectEnd()
            : i.select(_e155, _e155));
        }
        var l = $u(t),
          c = l.getLastDescendant(),
          a = l.getChildren(),
          u = (function (t) {
            var e = (function (t) {
              var e = t.getNode();
              if (t.offset > 0)
                return "element" === t.type && Vo(e)
                  ? e.getChildAtIndex(t.offset - 1)
                  : null;
              for (
                var _t222 = e;
                null !== _t222 && !js(_t222) && !hs(_t222);
                _t222 = _t222.getParent()
              ) {
                var _e156 = _t222.getPreviousSibling();
                if (null !== _e156) return _e156;
              }
              return null;
            })(t);
            return Ql(e) && Ql(e.getPreviousSibling());
          })(o),
          f = Vo(i) && i.isEmpty() ? null : this.insertParagraph();
        f && !i.isAttached() && ((r = this.anchor.getNode()), (i = Fl(r, js)));
        var d = a[a.length - 1];
        var h = a[0];
        var g;
        ((g = h),
          u ||
            !Vo(g) ||
            !js(g) ||
            g.isEmpty() ||
            !Vo(i) ||
            (i.isEmpty() && !i.canMergeWhenEmpty()) ||
            (Vo(i) || e(211, r.constructor.name, r.getType()),
            (_i46 = i).append.apply(_i46, Array.from(h.getChildren())),
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
              for (var _t223 of i) s = s.insertAfter(_t223);
            })(i, h)));
        var p = Fl(c, js),
          _ = c.selectEnd();
        (f &&
          (Vo(p) && (f.canMergeWhenEmpty() || js(d))
            ? (p.append.apply(p, Array.from(f.getChildren())), f.remove())
            : f.isEmpty() && f.remove()),
          Vo(i) && i.isEmpty() && i.remove());
        var m = Vo(i) ? i.getLastChild() : null;
        Ql(m) && p !== i && m.remove();
        var y = Dr(Tr(_.anchor, "next"));
        (vr(_.anchor, y), vr(_.focus, y));
      };
      _proto18.insertParagraph = function insertParagraph() {
        this.isCollapsed() || this.removeText();
        var t = this.anchor.getNode();
        if ("element" === this.anchor.type && hs(t)) {
          var _e157 = Hr();
          return (
            t.splice(this.anchor.offset, 0, [_e157]),
            _e157.select(),
            _e157
          );
        }
        var _Lu4 = Lu(this),
          n = _Lu4[1],
          o = Fl(this.anchor.getNode(), js);
        if (null !== o && null !== Zu(o)) return null;
        Vo(o) || e(213);
        var r = o.getChildAtIndex(n),
          i = r ? [r].concat(Array.from(r.getNextSiblings())) : [],
          s = o.insertNewAfter(this, !1);
        return s
          ? (s.append.apply(s, Array.from(i)), s.selectStart(), s)
          : null;
      };
      _proto18.insertLineBreak = function insertLineBreak(t) {
        var e = Xl();
        if ((this.insertNodes([e]), t)) {
          var _t224 = e.getParentOrThrow(),
            _n116 = e.getIndexWithinParent();
          _t224.select(_n116, _n116);
        }
      };
      _proto18.extract = function extract() {
        var t = this.getNodes();
        if (this.isCollapsed()) return [].concat(Array.from(t));
        var e = this.isBackward(),
          n = kr(this).getTextSlices(),
          o = [];
        for (var _e158 of t) {
          var _t225 = Lr(n, _e158),
            _r69 = _t225 ? Kr(_t225, this) : _e158;
          null !== _r69 && o.push(_r69);
        }
        if (1 === t.length && 1 === o.length && Sr(o[0])) {
          var _t226 = o[0],
            _ref72 = e ? [this.focus, this.anchor] : [this.anchor, this.focus],
            _n117 = _ref72[0],
            _r70 = _ref72[1];
          (_n117.set(_t226.getKey(), 0, "text"),
            _r70.set(_t226.getKey(), _t226.getTextContentSize(), "text"));
        }
        return o;
      };
      _proto18.modify = function modify(t, e, n) {
        if (zu(this, t, e, n)) return;
        var o = "move" === t,
          r = Nc(),
          i = Ss(as(r));
        if (!i) return;
        var s = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === s ||
          !Vo(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          xs(s, r, l);
        var a = ts(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = Sr(c) ? Gs(c, a, r) : null),
          this.dirty)
        ) {
          var _t227 = ts(r, this.anchor.key);
          var _e159 = _t227;
          if ("text" === this.anchor.type) {
            var _n118 = this.anchor.getNode();
            _e159 = Sr(_n118) ? Gs(_n118, _t227, r) : null;
          }
          _e159 && u && Au(i, _e159, this.anchor.offset, u, this.focus.offset);
        }
        if (
          "character" === n &&
          Sr(c) &&
          c.isUnmergeable() &&
          (e
            ? 0 === this.focus.offset
            : this.focus.offset === c.getTextContentSize())
        ) {
          var _t228 = Df(c, e ? "previous" : "next").getNodeAtCaret();
          if (Sr(_t228)) {
            if (!o) {
              var _n119 = _t228.getTextContentSize();
              return (
                e
                  ? this.focus.set(_t228.__key, _n119 - 1, "text")
                  : this.focus.set(_t228.__key, 1, "text"),
                void (this.dirty = !0)
              );
            }
            {
              var _n120 = r.getElementByKey(_t228.getKey()),
                _o74 = _n120 ? Gs(_t228, _n120, r) : null;
              if (_o74) {
                var _t229 = e ? _o74.length : 0;
                Au(i, _o74, _t229, _o74, _t229);
              }
            }
          }
        }
        if ((nu(i, t, e ? "backward" : "forward", n, l), i.rangeCount > 0)) {
          var _t230 = Os(i, r._rootElement),
            _n121 = _t230 || i.getRangeAt(0),
            _s25 = this.anchor.getNode(),
            _l20 = Qo(_s25) ? _s25 : fs(_s25);
          (this.applyDOMRange(_n121),
            (this.dirty = !0),
            o ||
              (ou(this, e, _l20),
              (_t230
                ? "backward" !== i.direction
                : i.anchorNode === _n121.startContainer &&
                  i.anchorOffset === _n121.startOffset) || eu(this)));
        }
        "lineboundary" === n && zu(this, t, e, n, "decorators");
      };
      _proto18.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Vo(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t231 = e.getParent(),
            _n122 =
              e.getNextSibling() ||
              (null === _t231 ? null : _t231.getNextSibling());
          if (Vo(_n122) && _n122.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto18.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e160 = this.anchor;
          var _n123 = _e160.getNode();
          if (this.forwardDeletion(_e160, _n123, t)) {
            var _t232 = Vo(_n123) ? _n123.getNextSibling() : null;
            if (
              !(
                Vo(_n123) &&
                _n123.isEmpty() &&
                Vo(_t232) &&
                _t232.isShadowRoot()
              )
            )
              return;
          }
          var _o75 = Tr(_e160, t ? "previous" : "next"),
            _r71 = Uf(_o75);
          if (
            _r71.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            if ("element" === _e160.type) {
              var _t233 = _o75.getNodeAtCaret();
              if (Vo(_t233) && ys(_t233)) {
                var _e161 = _t233.getParent();
                _t233.remove();
                var _n124 = Ai(_e161, _t233);
                return void (null !== _n124 && _n124.selectStart());
              }
            }
            var _t234 = { type: "initial" };
            for (var _e162 of _r71.iterNodeCarets("shadowRoot"))
              if (Of(_e162)) {
                if (_e162.origin.isInline());
                else {
                  if (_e162.origin.isShadowRoot()) {
                    if ("merge-block" === _t234.type) break;
                    if (
                      Vo(_r71.anchor.origin) &&
                      _r71.anchor.origin.isEmpty()
                    ) {
                      var _t235 = Dr(_e162);
                      (br(this, Hf(_t235, _t235)), _r71.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t234.type &&
                    "merge-block" !== _t234.type) ||
                    (_t234 = {
                      block: _t234.block,
                      caret: _e162,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t234.type) break;
                if (Ef(_e162)) {
                  if (Vo(_e162.origin)) {
                    if (_e162.origin.isInline()) {
                      if (!_e162.origin.isParentOf(_r71.anchor.origin)) break;
                    } else
                      _t234 = { block: _e162.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Go(_e162.origin)) {
                    if (_e162.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t234.type &&
                      (_e162.origin.isKeyboardSelectable() ||
                        !_e162.origin.isInline()) &&
                      Vo(_r71.anchor.origin) &&
                      _r71.anchor.origin.isEmpty()
                    ) {
                      _r71.anchor.origin.remove();
                      var _t236 = Su();
                      (_t236.add(_e162.origin.getKey()), Di(_t236));
                    } else {
                      var _t237 = _e162.origin,
                        _n125 = _t237.getParent();
                      _t237.remove();
                      var _o76 = Ai(_n125, _t237);
                      null !== _o76 && _o76.selectStart();
                    }
                    return;
                  }
                  if (Ql(_e162.origin)) return void _e162.origin.remove();
                  break;
                }
              }
            if ("merge-block" === _t234.type) {
              var _t238 = _t234,
                _e163 = _t238.caret,
                _n126 = _t238.block;
              if (sf(_n126).length > 0) return;
              return _e163.origin.isEmpty() &&
                !_n126.isEmpty() &&
                _e163.origin.getParent() === _n126.getParent()
                ? void _e163.origin.remove(!0)
                : (br(
                    this,
                    Hf(
                      !_e163.origin.isEmpty() && _n126.isEmpty()
                        ? Er(Df(_n126, _e163.direction))
                        : _r71.anchor,
                      _e163,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t239 = _e160.getNode(); null !== _t239; ) {
              if (null !== Zu(_t239)) return;
              if (Vo(_t239) && _t239.isShadowRoot()) break;
              _t239 = _t239.getParent();
            }
          }
          var _i47 = this.focus;
          if ((ru(this, t, "character"), this.isCollapsed())) {
            if (
              t &&
              0 === _e160.offset &&
              (function (t, e) {
                for (var _n127 = e; _n127; _n127 = _n127.getParent()) {
                  if (Vo(_n127)) {
                    if (_n127.collapseAtStart(t)) return !0;
                    if (hs(_n127)) break;
                  }
                  if (_n127.getPreviousSibling()) break;
                }
                return !1;
              })(this, _e160.getNode())
            )
              return;
          } else {
            var _o77 = "text" === _i47.type ? _i47.getNode() : null;
            if (
              ((_n123 = "text" === _e160.type ? _e160.getNode() : null),
              null !== _o77 && _o77.isSegmented())
            ) {
              var _e164 = _i47.offset,
                _r72 = _o77.getTextContentSize();
              if (
                _o77.is(_n123) ||
                (t && _e164 !== _r72) ||
                (!t && 0 !== _e164)
              )
                return void cu(_o77, t, _e164);
            } else if (null !== _n123 && _n123.isSegmented()) {
              var _r73 = _e160.offset,
                _i48 = _n123.getTextContentSize();
              if (_n123.is(_o77) || (t && 0 !== _r73) || (!t && _r73 !== _i48))
                return void cu(_n123, t, _r73);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode();
              if (r === o.getNode() && "text" === n.type && "text" === o.type) {
                var _t240 = n.offset,
                  _s26 = o.offset,
                  _l21 = _t240 < _s26,
                  _c11 = _l21 ? _t240 : _s26,
                  _a11 = _l21 ? _s26 : _t240,
                  _u9 = _a11 - 1;
                _c11 !== _u9 &&
                  !Pi((i = r.getTextContent().slice(_c11, _a11))) &&
                  !lu(i) &&
                  (e ? o.set(o.key, _u9, o.type) : n.set(n.key, _u9, n.type));
              }
              var i;
            })(this, t);
          }
        }
        (e || tu(this),
          this.removeText(),
          t &&
            !e &&
            this.isCollapsed() &&
            "element" === this.anchor.type &&
            0 === this.anchor.offset &&
            Va());
      };
      _proto18.deleteLine = function deleteLine(t) {
        qa(this, t, "lineboundary");
      };
      _proto18.deleteWord = function deleteWord(t) {
        qa(this, t, "word");
      };
      _proto18.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (Sc() || (this._cachedIsBackward = e), e);
      };
      _proto18.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return Ja;
    })();
    function Ga(t) {
      return t instanceof _Ha;
    }
    function qa(t, e, n) {
      var o = t.isCollapsed(),
        r = t.anchor,
        i = t.focus;
      var s = !1;
      if (o) {
        if ("word" === n && t.forwardDeletion(r, r.getNode(), e)) return;
        ((s = ru(t, e, n)),
          "lineboundary" === n &&
            (function (t) {
              for (var _e165 of kr(t).iterNodeCarets("shadowRoot"))
                if (Ef(_e165) && Ql(_e165.origin))
                  return void vr(t.focus, Er(_e165));
            })(t));
      }
      ("lineboundary" !== n ||
        t.isCollapsed() ||
        Fl(r.getNode(), js) === Fl(i.getNode(), js) ||
        i.set(r.key, r.offset, r.type),
        t.isCollapsed()
          ? s || t.deleteCharacter(e)
          : (o || tu(t), t.removeText()));
    }
    function Xa(t, e) {
      if (Ga(t)) {
        for (var _n128 of t.getNodes())
          ar(_n128) && _n128.setFormat(e(_n128.getFormat()));
        return;
      }
      var n = t.isCollapsed() ? [] : t.getNodes(),
        o = n.length ? kr(t).getTextSlices() : [];
      var r,
        i,
        s,
        l = !1,
        c = 0;
      for (var _a12 of n)
        if (Sr(_a12)) {
          r && i && (r.set(i.__key, 0, "text"), (r = void 0));
          var _n129 = Lr(o, _a12);
          if (!l && _n129 && 0 === _n129.distance) {
            var _e166 = t.isBackward() ? t.focus : t.anchor;
            "text" === _e166.type && _e166.key === _a12.__key && (r = _e166);
          }
          if (((l = !0), _n129 && 0 === _n129.distance)) continue;
          var _u0 = e(_a12.getFormat()),
            _f0 = r ? _a12.getTextContentSize() : 0,
            _d7 = _n129 && !fi(_a12) ? Kr(_n129, t) : _a12;
          null !== _d7 &&
            (_d7.setFormat(_u0),
            void 0 === s &&
              ((s = _u0),
              (i = _d7),
              r &&
                _d7.getTextContentSize() !== _f0 &&
                (r.set(_d7.__key, 0, "text"), (r = void 0))),
            (c = _u0));
        } else
          Vo(_a12)
            ? _a12.setTextFormat(e(_a12.getTextFormat()))
            : ar(_a12) && _a12.setFormat(e(_a12.getFormat()));
      l
        ? void 0 !== s && (t.format = s | c)
        : (t.setFormat(e(t.format)), Si(null));
    }
    function Qa(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && Ya(t) ? pi(t.format, e, null) : n;
      Xa(t, function (t) {
        return pi(t, e, o);
      });
    }
    function Za(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function tu(t) {
      var e = wi();
      !e.isEmpty() &&
        Wr(e, t) &&
        (t.anchor.set(e.getKey(), 0, "element"),
        t.focus.set(e.getKey(), e.getChildrenSize(), "element"));
    }
    function eu(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        i = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, i, !0));
    }
    function nu(t, e, n, o, r) {
      var i = "character" === o ? ws(t, r) : null,
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
      var c = ws(t, r);
      c.focusNode === s && c.focusOffset === l && t.modify(e, n, o);
    }
    function ou(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return ls(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var i = e ? r[0] : r[r.length - 1],
        s = Vo(i) ? i : i.getParentOrThrow();
      return (e ? s.selectStart() : s.selectEnd(), !0);
    }
    function ru(t, e, n) {
      if (zu(t, "extend", e, n)) return !1;
      var o = Nc(),
        r = Ss(as(o));
      if (!r || "function" != typeof r.modify) return !1;
      var i = o._blockCursorElement,
        s = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === s ||
        null === i ||
        !Vo(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        xs(i, o, s);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && Sr(e) ? Gs(e, n, o) : n;
        },
        u = l.getNode(),
        f = a(l);
      if (null === f) return !1;
      var d = l.offset,
        h = t.isCollapsed(),
        g = t.focus,
        p = h ? f : a(g);
      if (null === p) return !1;
      var _ = g.offset;
      if (
        (Au(r, p, _, p, _),
        nu(r, "move", e ? "backward" : "forward", n, s),
        0 === r.rangeCount)
      )
        return !1;
      var m = Os(r, s) || r.getRangeAt(0);
      var y = m.startContainer,
        x = m.startOffset;
      if ("lineboundary" === n && di(y) && ci(y) === o) {
        var _t241 = Fi(y);
        if (Go(_t241) && _t241.isInline() && !_t241.isIsolated()) {
          var _n130 = o.getElementByKey(_t241.getKey());
          null !== _n130 &&
            _n130.contains(y) &&
            ((y = _n130), (x = e ? 0 : _n130.childNodes.length));
        }
      }
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        Sr(u) &&
        u.isUnmergeable() &&
        d === (e ? 0 : u.getTextContentSize())
      ) {
        var _n131 = Df(u, e ? "previous" : "next").getNodeAtCaret();
        if (Sr(_n131)) {
          var _o78 = e ? _n131.getTextContentSize() - 1 : 1;
          return (t.focus.set(_n131.__key, _o78, "text"), (t.dirty = !0), !1);
        }
      }
      if (h && "character" === n && "text" === l.type) {
        var _n132 = e ? 0 : u.getTextContentSize(),
          _o79 = y === f ? x : d !== _n132 ? _n132 : -1;
        if (_o79 >= 0)
          return (
            _o79 !== d && (t.focus.set(l.key, _o79, "text"), (t.dirty = !0)),
            !1
          );
      }
      var S = o._slotsUsed && Ei(y),
        C = S ? nf(u) : null,
        T = S ? nf(S) : null;
      if (
        S &&
        !hu(T, C) &&
        iu(t.focus, u, C, T, "deletion", function () {
          return !e;
        })
      )
        return !0;
      var _ref73 = e ? [y, x, f, d] : [f, d, y, x],
        v = _ref73[0],
        N = _ref73[1],
        b = _ref73[2],
        k = _ref73[3],
        E = Qo(u) ? u : fs(u);
      return (
        t.applyDOMRange({
          collapsed: !1,
          endContainer: b,
          endOffset: k,
          startContainer: v,
          startOffset: N,
        }),
        (t.dirty = !0),
        !ou(t, e, E) && e && eu(t),
        !1
      );
    }
    function iu(t, e, n, o, r, i) {
      var s =
        o &&
        (function (t, e) {
          for (var _n133 = tf(t); null !== _n133; ) {
            var _t242 = nf(_n133);
            if (hu(_t242, e))
              return null !== _t242 || _n133.isAttached() ? _n133 : null;
            _n133 = _t242 && tf(_t242);
          }
          return null;
        })(o, n);
      if (null === s && null === n) return !1;
      var l = i(),
        c = s && s.getParent();
      var a, u;
      if (
        null === s ||
        null === c ||
        (null !== e && (s.is(e) || s.isParentOf(e)))
      ) {
        var _e167 = s || n;
        if (!Vo(_e167))
          return (
            null !== _e167 &&
              (function (t, e, n) {
                Vo(e)
                  ? t.set(e.getKey(), n ? e.getChildrenSize() : 0, "element")
                  : t.set(e.getKey(), n ? e.getTextContentSize() : 0, "text");
              })(t, _e167, l),
            !0
          );
        ((a = _e167), (u = l ? _e167.getChildrenSize() : 0));
      } else
        ((a = c),
          (u = s.getIndexWithinParent() + (l === ("selection" === r) ? 1 : 0)));
      return (
        "deletion" === r
          ? (function (t, e, n, o) {
              for (;;) {
                var _r74 = e.getChildAtIndex(o ? n : n - 1);
                if (Sr(_r74))
                  return void t.set(
                    _r74.getKey(),
                    o ? 0 : _r74.getTextContentSize(),
                    "text",
                  );
                if (!Vo(_r74) || hs(_r74)) break;
                ((e = _r74), (n = o ? 0 : _r74.getChildrenSize()));
              }
              t.set(e.getKey(), n, "element");
            })(t, a, u, !l)
          : t.set(a.getKey(), u, "element"),
        !0
      );
    }
    function su() {
      try {
        var _t243 = new RegExp("\\p{Emoji}", "u"),
          _e168 = _t243.test.bind(_t243);
        if (
          _e168("\u2764\ufe0f") &&
          _e168("#\ufe0f\u20e3") &&
          _e168("\u{1f44d}")
        )
          return _e168;
      } catch (t) {}
      return function () {
        return !1;
      };
    }
    var lu = su();
    function cu(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        i = r.length;
      var s = 0,
        l = 0;
      for (var _t244 = 0; _t244 < i; _t244++) {
        var _o80 = _t244 === i - 1;
        if (
          ((l = s), (s += r[_t244].length), (e && s === n) || s > n || _o80)
        ) {
          (r.splice(_t244, 1), _o80 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function au(t, n, o, r) {
      var i,
        s = n,
        l = !1;
      if (Ls(t)) {
        var _c12 = !1;
        var _a13 = t.childNodes,
          _u1 = _a13.length,
          _f1 = r._blockCursorElement;
        (s === _u1 && _u1 > 0 && ((_c12 = !0), (s = _u1 - 1)),
          void 0 !== ki(t, r) || sl(t, r) || (l = !0));
        var _d8 = _a13[s],
          _h7 = !1;
        if (_d8 === _f1) ((_d8 = _a13[s + 1]), (_h7 = !0));
        else if (null !== _f1) {
          var _e169 = _f1.parentNode;
          t === _e169 &&
            n > Array.prototype.indexOf.call(_e169.children, _f1) &&
            s--;
        }
        if (((i = Fi(_d8)), Sr(i))) s = Ff(i, _c12 ? "next" : "previous");
        else {
          var _a14 = Fi(t);
          if (null === _a14) return null;
          if (Vo(_a14)) {
            var _u10$resolveChildInde;
            var _l22 = r.getElementByKey(_a14.getKey());
            null === _l22 && e(214);
            var _u10 = Ys(_a14, _l22, r);
            ((_u10$resolveChildInde = _u10.resolveChildIndex(_a14, _l22, t, n)),
              (_a14 = _u10$resolveChildInde[0]),
              (s = _u10$resolveChildInde[1]),
              Vo(_a14) || e(215),
              _c12 &&
                s >= _a14.getChildrenSize() &&
                (s = Math.max(0, _a14.getChildrenSize() - 1)));
            var _f10 = _a14.getChildAtIndex(s);
            if (
              Vo(_f10) &&
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
              var _t245 = _c12
                ? _f10.getLastDescendant()
                : _f10.getFirstDescendant();
              (null === _t245
                ? (_a14 = _f10)
                : ((_f10 = _t245),
                  (_a14 = Vo(_f10) ? _f10 : _f10.getParentOrThrow())),
                (s = 0));
            }
            Sr(_f10)
              ? ((i = _f10),
                (_a14 = null),
                (s = Ff(_f10, _c12 ? "next" : "previous")))
              : _f10 !== _a14 &&
                _c12 &&
                !_h7 &&
                (Vo(_a14) || e(216),
                (s = Math.min(_a14.getChildrenSize(), s + 1)));
          } else {
            var _e170 = tf(_a14),
              _o81 = null !== _e170 ? _e170 : _a14,
              _i49 = _o81.getIndexWithinParent(),
              _l23 = r.getElementByKey(_a14.getKey());
            var _c13 = "after";
            if (null !== _l23 && Fi(t) === _a14) {
              var _e171 = Ys(_a14, _l23, r);
              _e171.element !== _l23
                ? (_c13 = _e171.resolveLeafPosition(_l23, t, n))
                : 0 === n && Go(_a14) && (_c13 = "before");
            }
            ((s = "before" === _c13 ? _i49 : _i49 + 1),
              (_a14 = _o81.getParentOrThrow()));
          }
          if (Vo(_a14)) return [Ba(_a14.__key, s, "element"), l];
        }
      } else i = Fi(t);
      return Sr(i) ? [Ba(i.__key, Ff(i, s, "clamp"), "text"), l] : null;
    }
    function uu(t, e, n) {
      var o = t.getNode();
      if (Ti(o)) return;
      var r = 0 === t.offset;
      if (!r && t.offset !== o.getTextContent().length) return;
      var i = r ? "previous" : "next",
        s = Df(o, i).getNodeAtCaret();
      if (r === e || !Vo(s) || !s.isInline() || (r && n)) {
        if (r && !e)
          Sr(s) &&
            !o.isUnmergeable() &&
            t.set(s.__key, s.getTextContent().length, "text");
        else if (null === s && (n || (!r && e))) {
          var _e172 = o.getParent();
          if (
            Vo(_e172) &&
            _e172.isInline() &&
            (r ||
              (!_e172.canInsertTextAfter() && _e172.getTextContentSize() > 1))
          ) {
            var _n134 = Df(_e172, i).getNodeAtCaret();
            Sr(_n134) &&
              t.set(_n134.__key, r ? _n134.getTextContent().length : 0, "text");
          }
        }
      } else t.set(s.__key, r ? s.getChildrenSize() : 0, "element");
    }
    function fu(t) {
      var e = vi(t.key);
      return null === e ? null : nf(e);
    }
    function du(t, e, n) {
      var o = fu(t),
        r = fu(e);
      return !hu(o, r) && iu(e, vi(t.key), o, r, "selection", n);
    }
    function hu(t, e) {
      return null === t ? null === e : t.is(e);
    }
    function gu(t) {
      var e = du(t.anchor, t.focus, function () {
        return (
          1 !==
          (function (t, e) {
            var n = (function (t, e) {
              var n = new Map();
              for (
                var _e173 = null, _o82 = t;
                null !== _o82;
                _e173 = _o82, _o82 = Jf(_o82)
              )
                n.set(_o82.getKey(), _e173);
              for (
                var _t246 = null, _o83 = e;
                null !== _o83;
                _t246 = _o83, _o83 = Jf(_o83)
              ) {
                var _e174 = n.get(_o83.getKey());
                if (void 0 === _e174) continue;
                var _r75 = _o83.getLatest();
                return null === _e174
                  ? null === _t246
                    ? { commonAncestor: _r75, type: "same" }
                    : { b: _t246, commonAncestor: _r75, type: "ancestor" }
                  : null === _t246
                    ? { a: _e174, commonAncestor: _r75, type: "descendant" }
                    : {
                        a: _e174,
                        b: _t246,
                        commonAncestor: _r75,
                        type: "branch",
                      };
              }
              return null;
            })(t.origin, e.origin);
            if (null === n) return null;
            switch (n.type) {
              case "same":
                return Gf(t, e);
              case "ancestor":
                return "child" === t.type && null === Zu(n.b) ? -1 : 1;
              case "descendant":
                return "child" === e.type && null === Zu(n.a) ? 1 : -1;
              case "branch": {
                var _t247 = Zu(n.a) && n.a.getKey(),
                  _e175 = Zu(n.b) && n.b.getKey();
                if (_t247 && _e175)
                  for (var _o84 of rf(n.commonAncestor).values())
                    if (_o84 === _t247 || _o84 === _e175)
                      return _o84 === _t247 ? -1 : 1;
                return _t247 ? -1 : _e175 ? 1 : n.a.isBefore(n.b) ? -1 : 1;
              }
            }
          })(Tr(t.anchor, "next"), Tr(t.focus, "next"))
        );
      });
      return (e && (t.dirty = !0), e);
    }
    function pu(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      var o = 0;
      for (
        var _t248 = n && n.previousSibling;
        _t248;
        _t248 = _t248.previousSibling
      )
        o++;
      return o;
    }
    function _u(t, e, n, o, r, i) {
      if (null === t || null === n || !si(r, t, n)) return null;
      var s = au(t, e, Ya(i) ? i.anchor : null, r);
      if (null === s) return null;
      var l = au(n, o, Ya(i) ? i.focus : null, r);
      if (null === l) return null;
      var c = s[0],
        a = s[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e176 = Fi(t),
          _o85 = Fi(n);
        if (Go(_e176) && Go(_o85)) return null;
      }
      var d =
        r._slotsUsed &&
        du(c, u, function () {
          return (function (t, e, n, o) {
            if (t === n) return o >= e;
            var r = t.compareDocumentPosition(n);
            return r & Node.DOCUMENT_POSITION_CONTAINED_BY
              ? pu(t, n) >= e
              : r & Node.DOCUMENT_POSITION_CONTAINS
                ? o > pu(n, t)
                : 0 !== (r & Node.DOCUMENT_POSITION_FOLLOWING);
          })(t, e, n, o);
        });
      return (
        (function (t, e) {
          if ("text" === t.type && "text" === e.type) {
            var _n135 = t.isBefore(e),
              _o86 = t.is(e);
            (uu(t, _n135, _o86),
              uu(e, !_n135, _o86),
              _o86 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function mu(t) {
      return Vo(t) && !t.isInline();
    }
    function yu(t, e, n, o, r, i) {
      var s = vc(),
        l = new _Ja(Ba(t, e, r), Ba(n, o, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function xu() {
      var t = Ba("root", 0, "element"),
        e = Ba("root", 0, "element");
      return new _Ja(t, e, 0, "");
    }
    function Su() {
      return new _Ha(new Set());
    }
    function Cu(t, e) {
      return vu(null, t, e, null);
    }
    var Tu = new Set([
      " ",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "Backspace",
      "Delete",
      "End",
      "Enter",
      "Home",
      "Tab",
    ]);
    function vu(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var i = o || r.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c = "keydown" === s && i,
        a = c && Rs(c),
        u =
          c &&
          (c.ctrlKey || c.metaKey || Tu.has(c.key)) &&
          Ks(a) &&
          ci(a) === n,
        f =
          !fe &&
          (l ||
            u ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && i && 3 === i.detail) ||
            "drop" === s ||
            void 0 === s);
      var d, h, g, p;
      if (Ya(t) && !f) return t.clone();
      {
        if (null === e) return null;
        var _o87 = ws(e, n._rootElement);
        if (
          ((d = _o87.anchorNode),
          (h = _o87.focusNode),
          (g = _o87.anchorOffset),
          (p = _o87.focusOffset),
          (l || u || void 0 === s) && Ya(t) && !si(n, d, h))
        )
          return t.clone();
      }
      var _ = _u(d, g, h, p, n, t);
      if (null === _) return null;
      var m = _[0],
        y = _[1],
        x = _[2],
        S = Ya(t) ? t : null,
        C = new _Ja(m, y, S ? S.format : 0, S ? S.style : "");
      return (S && Nu(C, S.anchor.key), (C.dirty = x), C);
    }
    function Nu(t, e) {
      var n = t.anchor;
      if (n.key === e) return;
      var o = n.getNode();
      var r = 0,
        i = "";
      (Sr(o)
        ? ((r = o.getFormat()), (i = o.getStyle()))
        : Vo(o) && ((r = o.getTextFormat()), (i = o.getTextStyle())),
        (t.format === r && t.style === i) ||
          ((t.format = r), (t.style = i), (t.dirty = !0)));
    }
    function bu() {
      return vc()._selection;
    }
    function ku() {
      return Nc()._editorState._selection;
    }
    function Eu(t, e) {
      var n = e.__key;
      return t.anchor.key === n || t.focus.key === n;
    }
    function Ou(t, e, n, o) {
      if (o === void 0) {
        o = 1;
      }
      if (Eu(t, e))
        for (var _r76 of [t.anchor, t.focus]) {
          _r76.key === e.__key &&
            ((n <= _r76.offset && o > 0) || (n < _r76.offset && o < 0)) &&
            _r76.set(e.__key, Math.max(0, _r76.offset + o), "element");
          var _t249 = _r76.getNode();
          if (Vo(_t249)) {
            var _e177 = _t249.getChildrenSize(),
              _n136 = _r76.offset >= _e177,
              _o88 = _t249.getChildAtIndex(_n136 ? _e177 - 1 : _r76.offset);
            Sr(_o88) &&
              _r76.set(
                _o88.__key,
                _n136 ? _o88.getTextContentSize() : 0,
                "text",
              );
          }
        }
    }
    function Mu(t, e, n, o, r) {
      var i = o || r;
      if (Sr(i) || Vo(i)) {
        var _e178 = Sr(i);
        t.set(
          i.__key,
          null === o ? 0 : _e178 ? i.getTextContentSize() : i.getChildrenSize(),
          _e178 ? "text" : "element",
        );
      } else {
        var _o89 = e.getIndexWithinParent();
        t.set(n.__key, -1 === _o89 ? n.getChildrenSize() : _o89, "element");
      }
    }
    function wu(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Au(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function Du(t, e, n) {
      var o = ts(t, e.getKey());
      if (Vo(e)) {
        var _r77 = Ys(e, o, t);
        return [_r77.element, n + _r77.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Iu(t, e, n, o, r, i) {
      var s = i.getRootNode(),
        l = hi(s) || Ts(s) ? Ps(s) : null;
      if ((r.has(Wl) && l !== i) || (null !== l && ri(l, l))) return;
      var c = ws(o, i);
      var a;
      if (!Ya(e))
        return void (
          null !== t &&
          si(n, c.anchorNode, c.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _Du = Du(n, h, f.offset),
        p = _Du[0],
        _ = _Du[1],
        _Du2 = Du(n, g, d.offset),
        m = _Du2[0],
        y = _Du2[1],
        x = e.format,
        S = e.style,
        C = e.isCollapsed();
      var v = p,
        N = m,
        b = !1;
      if (
        ("text" === f.type
          ? ((v = Sr(h) ? Gs(h, p, n) : null),
            (b = h.getFormat() !== x || h.getStyle() !== S))
          : Ya(t) && "text" === t.anchor.type && (b = !0),
        "text" === d.type && (N = Sr(g) ? Gs(g, m, n) : null),
        null === v || null === N)
      )
        return;
      var k = C && Sr(g) && Ti(g) && di(N) && N.nodeValue === T ? T.length : y;
      if (
        (C &&
          (null === t || b || (Ya(t) && (t.format !== x || t.style !== S))) &&
          (function (t, e, n, o, r, i) {
            t._inputState.collapsedSelectionFormat = {
              format: e,
              key: r,
              offset: o,
              style: n,
              timeStamp: i,
            };
          })(n, x, S, f.offset, f.key, performance.now()),
        ("Range" !== o.type || !C) &&
          c.anchorOffset === _ &&
          c.focusOffset === k &&
          c.anchorNode === v &&
          c.focusNode === N)
      ) {
        if (null === l || !i.contains(l)) {
          var _t250 = null !== l ? ci(l) : null;
          (null !== _t250 && _t250 !== n) ||
            r.has(Hl) ||
            i.focus({ preventScroll: !0 });
        }
        if ("element" !== f.type) return;
      }
      if (
        (Au(o, v, _, N, k), u && e.isCollapsed() && null !== i && !r.has(Hl))
      ) {
        var _t251 = Fs(i);
        if (null === _t251 || !i.contains(_t251)) {
          var _t252 = Ps(i.ownerDocument),
            _e179 = null !== _t252 ? ci(_t252) : null;
          (null !== _e179 && _e179 !== n) || i.focus({ preventScroll: !0 });
        }
      }
      if (!r.has(Ul) && e.isCollapsed() && null !== i && i === Fs(i)) {
        var _t253 =
          Ya(e) && "element" === e.anchor.type
            ? (function (t, e, n) {
                var o = e.childNodes[n];
                if (!Ls(o)) return o || null;
                var r = ki(o, t),
                  i = void 0 !== r ? vi(r) : null;
                return null === i || Vo(i) ? o : Ys(i, o, t).element;
              })(n, v, _)
            : (void 0 === a && (a = Ms(o, i)), a);
        if (null !== _t253) {
          var _e180;
          if (di(_t253)) {
            var _n137 = _t253.ownerDocument.createRange();
            (_n137.selectNode(_t253), (_e180 = _n137.getBoundingClientRect()));
          } else
            _e180 = Ls(_t253)
              ? _t253.getBoundingClientRect()
              : (function (t) {
                  var e = t.getBoundingClientRect(),
                    n = t.startContainer,
                    o = t.startOffset;
                  if (
                    !t.collapsed ||
                    0 !== e.width ||
                    0 !== e.height ||
                    !di(n) ||
                    0 === n.length
                  )
                    return e;
                  var r = t.cloneRange();
                  return (
                    o > 0 ? r.setStart(n, o - 1) : r.setEnd(n, 1),
                    r.getBoundingClientRect()
                  );
                })(_t253);
          !(function (t, e, n, o) {
            if (o === void 0) {
              o = null;
            }
            var r = ns(n),
              i = cs(r);
            if (null === r || null === i) return;
            var s = n.getBoundingClientRect();
            if (e.bottom < s.top) return;
            if (null !== o && e.height > 0) {
              var _t254 = e.left,
                _r78 = e.right,
                _s27 = Ls(o) ? o : es(o);
              for (; null !== _s27 && n.contains(_s27); ) {
                var _e181 = rs(i, _s27, _t254, _r78);
                ((_t254 -= _e181),
                  (_r78 -= _e181),
                  (_s27 = _s27 === n ? null : es(_s27)));
              }
            }
            var l = e.top,
              c = e.bottom,
              a = 0,
              u = 0,
              f = n;
            for (; null !== f; ) {
              var _e182 = f === r.body;
              if (_e182) {
                var _e183 = i.visualViewport;
                if (_e183) {
                  var _t255 = _e183.offsetTop;
                  ((a = _t255), (u = _t255 + _e183.height));
                } else ((a = 0), (u = as(t).innerHeight));
                var _n138 = i.getComputedStyle(r.documentElement),
                  _o90 = parseFloat(_n138.scrollPaddingTop),
                  _s28 = parseFloat(_n138.scrollPaddingBottom);
                (isFinite(_o90) && (a += _o90), isFinite(_s28) && (u -= _s28));
              } else {
                var _t256 = f === n ? s : f.getBoundingClientRect();
                ((a = _t256.top), (u = _t256.bottom));
              }
              var _o91 = 0;
              if (
                (l < a ? (_o91 = -(a - l)) : c > u && (_o91 = c - u),
                0 !== _o91)
              )
                if (_e182) i.scrollBy(0, _o91);
                else {
                  var _t257 = f.scrollTop;
                  f.scrollTop += _o91;
                  var _e184 = f.scrollTop - _t257;
                  ((l -= _e184), (c -= _e184));
                }
              if (_e182) break;
              f = es(f);
            }
          })(n, _e180, i, v);
        }
      }
      !(function (t, e, n, o, r) {
        var i = t._inputState;
        ((i.isSelectionChangeFromDOMUpdate = !0),
          (i.selectionChangeFromDOMUpdatePoints =
            void 0 !== e && void 0 !== n && void 0 !== o && void 0 !== r
              ? { anchorNode: e, anchorOffset: n, focusNode: o, focusOffset: r }
              : null));
      })(n, v, _, N, k);
    }
    function Fu(t, e) {
      for (var _n139 of t.split(/(\r?\n|\t)/))
        "\n" === _n139 || "\r\n" === _n139
          ? e.linebreak()
          : "\t" === _n139
            ? e.tab()
            : "" !== _n139 && e.text(_n139);
    }
    function Pu(t) {
      var e = [];
      return (
        Fu(t, {
          linebreak: function linebreak() {
            return e.push(Xl());
          },
          tab: function tab() {
            return e.push(Gr());
          },
          text: function text(t) {
            return e.push(xr(t));
          },
        }),
        e
      );
    }
    function Ru(t) {
      var e = [];
      for (var _n140 of t)
        Ql(_n140) ||
          ((!Vo(_n140) && !Go(_n140)) || _n140.isInline()
            ? e.push(_n140)
            : Vo(_n140) &&
              e.push.apply(e, Array.from(Ru(_n140.getChildren()))));
      return e;
    }
    function Lu(t, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t;
      t.isCollapsed() || o.removeText();
      var r = bu();
      (Ya(r) && (o = r), Ya(o) || e(161));
      var i = o.anchor;
      var s = i.getNode(),
        l = i.offset;
      for (; !js(s) && null === Zu(s); ) {
        var _Ku;
        var _t258 = s;
        if (((_Ku = Ku(s, l, n)), (s = _Ku[0]), (l = _Ku[1]), _t258.is(s)))
          break;
      }
      return [s, l];
    }
    function Ku(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t.getParent();
      if (!o) {
        var _t259 = Hr();
        return (wi().append(_t259), _t259.select(), [wi(), 0]);
      }
      if (Sr(t)) {
        var _n141 = t.splitText(e);
        if (0 === _n141.length) return [o, t.getIndexWithinParent()];
        var _r79 = 0 === e ? 0 : 1;
        return [o, _n141[0].getIndexWithinParent() + _r79];
      }
      if (!Vo(t) || 0 === e) return [o, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _o92 = new _Ja(
            Ba(t.__key, e, "element"),
            Ba(t.__key, e, "element"),
            0,
            "",
          ),
          _i50 = t.insertNewAfter(_o92);
        if (_i50)
          _i50.append.apply(_i50, [r].concat(Array.from(r.getNextSiblings())));
        else if (n) return [t, e];
      }
      return [o, t.getIndexWithinParent() + 1];
    }
    function Bu(t) {
      return Ql(t) || us(t) || Sr(t) || t.isParentRequired();
    }
    function $u(t) {
      var e = Hr();
      var n = null;
      for (var _o93 = 0; _o93 < t.length; _o93++) {
        var _r80 = t[_o93];
        if (Bu(_r80)) {
          if (null === n) {
            ((n = _r80.createParentElementNode()), e.append(n));
            var _i51 = t[_o93 + 1];
            if (Ql(_r80) && (void 0 === _i51 || !Bu(_i51))) continue;
          }
          n.append(_r80);
        } else (e.append(_r80), (n = null));
      }
      return e;
    }
    function zu(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref74 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e185 = _ref74[0],
          _o94 = _ref74[1];
        return (_o94.set(_e185.key, _e185.offset, _e185.type), !0);
      }
      var i = Tr(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === o,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === r,
        u = !1;
      if (!Ir(c)) {
        for (var _t260 of c) {
          a = !1;
          var _e186 = _t260.origin;
          if (Go(_e186)) {
            if (_e186.isIsolated()) {
              u = !0;
              break;
            }
            if (((c = _t260), s && _e186.isInline())) continue;
          }
          break;
        }
        if (u) return !0;
        if (a)
          for (var _t261 of Uf(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Of(_t261)) _t261.origin.isInline() || (c = _t261);
            else {
              if (Vo(_t261.origin)) continue;
              Go(_t261.origin) && !_t261.origin.isInline() && (c = _t261);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && Go(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t262 = Su();
        return (_t262.add(c.origin.getKey()), Di(_t262), !0);
      }
      return ((c = Dr(c)), l && vr(t.anchor, c), vr(t.focus, c), a || !s);
    }
    function Wu(t, e, n) {
      var o = null === e ? null : e.__key,
        r = null === n ? null : n.__key;
      (null === e ? (t.__first = r) : (e.__next = r),
        null === n ? (t.__last = o) : (n.__prev = o));
    }
    function Uu(t) {
      var e = Nc();
      if (!e._recordNodeMoves) return;
      var n = e._editorState._nodeMap;
      if (n.has(t.__key)) {
        var _e187 = vc(),
          _o95 = _e187._movedNodes || (_e187._movedNodes = new WeakMap());
        var _r81 = _o95.get(n);
        (void 0 === _r81 && ((_r81 = new Set()), _o95.set(n, _r81)),
          _r81.add(t.__key));
      }
    }
    function ju(t, e, n, o) {
      var r = e.__key;
      (null === n ? (t.__first = r) : (n.__next = r),
        null === o ? (t.__last = r) : (o.__prev = r),
        (e.__prev = null === n ? null : n.__key),
        (e.__next = null === o ? null : o.__key),
        (e.__parent = t.__key));
    }
    function Hu(t) {
      null !== Zu(t) && e(380, t.__key, String(Zu(t)));
      var n = t.getParent();
      if (null !== n) {
        var _e188 = n.getWritable();
        Uu(t);
        var _o96 = t.getPreviousSibling(),
          _r82 = t.getNextSibling();
        (Wu(_e188, _o96 && _o96.getWritable(), _r82 && _r82.getWritable()),
          (t.__prev = null),
          (t.__next = null),
          (t.__parent = null),
          _e188.__size--);
      }
    }
    function Vu(t, e) {
      var n = e && t.getParent(),
        o = e && n && Eu(e, n) ? t.getIndexWithinParent() : -1,
        r =
          e && n && -1 !== o
            ? [e.anchor, e.focus].filter(function (t) {
                return (
                  "element" === t.type &&
                  t.key === n.__key &&
                  t.offset === o + 1
                );
              })
            : null;
      return (
        e && n && -1 !== o && e.isBackward(),
        Hu(t),
        e && n && -1 !== o && Ou(e, n, o, -1),
        e && (e._cachedIsBackward = null),
        r
      );
    }
    function Yu(t, e, n, o) {
      Cc();
      var r = "next" === e;
      _s(t, n);
      var i = t.getWritable(),
        s = n.getWritable();
      t.getParentOrThrow();
      var l = bu(),
        c = o && Ya(l) ? l : null,
        a = Vu(s, c),
        u = t.getParentOrThrow().getWritable(),
        f =
          c && ((r && null !== a && a.length > 0) || Eu(c, u))
            ? t.getIndexWithinParent() + (r ? 1 : 0)
            : -1,
        d = r ? t.getNextSibling() : t.getPreviousSibling(),
        h = d && d.getWritable();
      if (
        (ju(u, s, r ? i : h, r ? h : i),
        u.__size++,
        c && -1 !== f && (Ou(c, u, f), r && null !== a))
      )
        for (var _t263 of a) _t263.set(u.__key, f + 1, "element");
      return n;
    }
    function Ju(t, e, n) {
      Cc();
      var o = t.origin,
        r = t.direction,
        i = "next" === r,
        s = tf(o);
      if (null !== s) return i ? s.selectNext(e, n) : s.selectPrevious(e, n);
      var l = t.getNodeAtCaret(),
        c = o.getParentOrThrow();
      if (null === l) return i ? c.select() : c.select(0, 0);
      if (Vo(l)) return i ? l.select(0, 0) : l.select();
      if (Sr(l)) return l.select(e, n);
      var a = l.getIndexWithinParent() + (i ? 0 : 1);
      return c.select(a, a);
    }
    function Gu(t, e) {
      var n = [];
      for (
        var _o97 = t;
        null !== _o97;
        _o97 = "next" === e ? _o97.getNextSibling() : _o97.getPreviousSibling()
      )
        n.push(_o97);
      return n;
    }
    var qu = new Map();
    function Xu(t) {
      return Vo(t) || Go(t);
    }
    function Qu(t) {
      return Vo(t) || Go(t);
    }
    function Zu(t) {
      var e = t.getLatest();
      return Qu(e) ? e.__slotHost : null;
    }
    function tf(t) {
      var n = Zu(t);
      if (null === n) return null;
      var o = vi(n);
      return (Vo(o) || Go(o) || e(370), o);
    }
    function ef(t) {
      var e = tf(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref76 of rf(e)) {
        var _t264 = _ref76[0];
        var _o98 = _ref76[1];
        if (_o98 === n) return _t264;
      }
      return null;
    }
    function nf(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== Zu(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function of(t) {
      var _t$getNodes$;
      if (null === t) return null;
      var e = Ya(t)
        ? t.anchor.getNode()
        : (_t$getNodes$ = t.getNodes()[0]) != null
          ? _t$getNodes$
          : null;
      return null === e ? null : nf(e);
    }
    function rf(t) {
      var e = t.getLatest();
      return Xu(e) && null !== e.__slots ? e.__slots : qu;
    }
    function sf(t) {
      return Array.from(rf(t).keys());
    }
    function lf(t, e) {
      var n = rf(t).get(e);
      return void 0 === n ? null : vi(n);
    }
    var cf = ["__proto__", "constructor", "prototype"],
      af = Symbol("slotMapOwner");
    function uf(t) {
      var e = t.__slots;
      return (
        (null !== e && e[af] === t) ||
          ((e = new Map(e)), (e[af] = t), (t.__slots = e)),
        e
      );
    }
    var ff = new WeakMap(),
      df = [];
    function hf(t) {
      for (var _ref78 of Dl(t)) {
        var _e189 = _ref78.ownNodeConfig;
        {
          var _t265 = _e189 && _e189.slots;
          if (_t265) return _t265;
        }
      }
      return df;
    }
    function gf(t) {
      var e = "";
      for (var _n142 of rf(t).values()) {
        var _t266 = vi(_n142);
        null !== _t266 && (e += _t266.getTextContent());
      }
      return e;
    }
    function pf(t, e, n) {
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
    function _f(t, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        e(373, n);
      var r = t.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!Vo(o) && !Go(o)) || o.isInline()) && e(374, o.__key);
      var i = t.getWritable(),
        s = uf(i),
        l = s.get(n);
      void 0 !== l && mf(l);
      var c = o.getWritable(),
        a = tf(c);
      if (null !== a) {
        var _t267 = ef(c);
        (null !== _t267 && uf(a.getWritable())["delete"](_t267),
          (c.__slotHost = null));
      }
      return (
        Hu(c),
        (c.__slotHost = i.__key),
        s.set(n, c.__key),
        (function (t) {
          var n = t.__slots;
          if (null === n || n.size < 2) return;
          var o = (function (t) {
            var n = ff.get(t);
            if (void 0 === n) {
              var _o99 = hf(t),
                _r83 = new Map();
              for (var _n143 of _o99)
                (cf.includes(_n143) && e(371, t.name, _n143),
                  _r83.has(_n143) && e(372, t.name, _n143),
                  _r83.set(_n143, _r83.size));
              ((n = _r83), ff.set(t, n));
            }
            return n;
          })(t.constructor);
          var r = null,
            i = !0;
          for (var _t268 of n.keys()) {
            if (null !== r && pf(r, _t268, o) > 0) {
              i = !1;
              break;
            }
            r = _t268;
          }
          if (i) return;
          var s = Array.from(n).sort(function (_ref79, _ref80) {
            var t = _ref79[0];
            var e = _ref80[0];
            return pf(t, e, o);
          });
          n.clear();
          for (var _ref82 of s) {
            var _t269 = _ref82[0];
            var _e190 = _ref82[1];
            n.set(_t269, _e190);
          }
        })(i),
        (Nc()._slotsUsed = !0),
        (vc()._slotsUsed = !0),
        i
      );
    }
    function mf(t) {
      var n = vi(t);
      if (null === n) return;
      var o = n.getWritable();
      (Qu(o) || e(377, t), (o.__slotHost = null), o.remove());
    }
    var yf = { next: "previous", previous: "next" };
    var _xf4 = (function () {
      function xf(t) {
        this.origin = t;
      }
      var _proto19 = xf.prototype;
      _proto19[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return Vf({
            hasNext: Ef,
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
        return Df(this.getNodeAtCaret(), this.direction);
      };
      _proto19.getSiblingCaret = function getSiblingCaret() {
        return Df(this.origin, this.direction);
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
          var _e191 = i.getAdjacentCaret();
          null !== _e191 && l.size < t;
          _e191 = _e191.getAdjacentCaret()
        ) {
          var _t270 = _e191.origin.getWritable();
          l.set(_t270.getKey(), _t270);
        }
        for (var _t271 of r) {
          if (l.size > 0) {
            var _n144 = i.getNodeAtCaret();
            if (_n144) {
              if (
                (l["delete"](_n144.getKey()),
                l["delete"](_t271.getKey()),
                _n144.is(_t271) || i.origin.is(_t271))
              );
              else {
                var _e192 = _t271.getParent();
                (_e192 && _e192.is(s) && _t271.remove(), _n144.replace(_t271));
              }
            } else null === _n144 && e(263, Array.from(l).join(" "));
          } else i.insert(_t271);
          i = Df(_t271, this.direction);
        }
        for (var _t272 of l.values()) _t272.remove();
        return this;
      };
      return xf;
    })();
    var _Sf3 = (function (_xf) {
      function Sf() {
        var _this6;
        for (
          var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
          _key0 < _len0;
          _key0++
        ) {
          args[_key0] = arguments[_key0];
        }
        return (
          ((_this6 = _xf.call.apply(_xf, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Sf, _xf);
      var _proto20 = Sf.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Rf(t, this.direction);
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Df(vf(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = Tf(this.direction);
        return Df(this.getNodeAtCaret(), t) || Rf(this.origin, t);
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto20.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Sf &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Sf;
    })(_xf4);
    var Cf = { root: Qo, shadowRoot: hs };
    function Tf(t) {
      return yf[t];
    }
    function vf(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || Cf[e](t) ? null : null === Zu(t) ? t : null;
    }
    var _Nf3 = (function (_xf2) {
      function Nf() {
        var _this7;
        for (
          var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
          _key1 < _len1;
          _key1++
        ) {
          args[_key1] = arguments[_key1];
        }
        return (
          ((_this7 = _xf2.call.apply(_xf2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Nf, _xf2);
      var _proto21 = Nf.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Df(t, this.direction);
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto21.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto21.getChildCaret = function getChildCaret() {
        return Vo(this.origin) ? Rf(this.origin, this.direction) : null;
      };
      _proto21.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Df(vf(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        var t = Tf(this.direction);
        return (
          Df(this.getNodeAtCaret(), t) || Rf(this.origin.getParentOrThrow(), t)
        );
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Nf &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Nf || t instanceof _bf3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Nf;
    })(_xf4);
    var _bf3 = (function (_xf3) {
      function bf(t, e) {
        var _this8;
        ((_this8 = _xf3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(bf, _xf3);
      var _proto22 = bf.prototype;
      _proto22.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : If(t, this.direction, this.offset);
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
        return Df(vf(this.getParentAtCaret(), t), this.direction);
      };
      _proto22.getFlipped = function getFlipped() {
        return If(this.origin, Tf(this.direction), this.offset);
      };
      _proto22.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof bf &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto22.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Nf3 || t instanceof bf) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto22.getSiblingCaret = function getSiblingCaret() {
        return Df(this.origin, this.direction);
      };
      return bf;
    })(_xf4);
    function kf(t) {
      return t instanceof _bf3;
    }
    function Ef(t) {
      return t instanceof _Nf3;
    }
    function Of(t) {
      return t instanceof _Sf3;
    }
    var Mf = {
        next: (function (_bf) {
          function _class() {
            var _this9;
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
              ((_this9 = _bf.call.apply(_bf, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _bf);
          var _proto23 = _class.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_bf3),
        previous: (function (_bf2) {
          function _class3() {
            var _this0;
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
              ((_this0 = _bf2.call.apply(_bf2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _bf2);
          var _proto24 = _class3.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_bf3),
      },
      wf = {
        next: (function (_Nf) {
          function _class5() {
            var _this1;
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
              ((_this1 = _Nf.call.apply(_Nf, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Nf);
          var _proto25 = _class5.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Nf3),
        previous: (function (_Nf2) {
          function _class7() {
            var _this10;
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
              ((_this10 = _Nf2.call.apply(_Nf2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Nf2);
          var _proto26 = _class7.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Nf3),
      },
      Af = {
        next: (function (_Sf) {
          function _class9() {
            var _this11;
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
              ((_this11 = _Sf.call.apply(_Sf, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Sf);
          var _proto27 = _class9.prototype;
          _proto27.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto27.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Sf3),
        previous: (function (_Sf2) {
          function _class1() {
            var _this12;
            for (
              var _len15 = arguments.length,
                args = new Array(_len15),
                _key15 = 0;
              _key15 < _len15;
              _key15++
            ) {
              args[_key15] = arguments[_key15];
            }
            return (
              ((_this12 = _Sf2.call.apply(_Sf2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Sf2);
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
        })(_Sf3),
      };
    function Df(t, e) {
      return t ? new wf[e](t) : null;
    }
    function If(t, e, n) {
      return t ? new Mf[e](t, Ff(t, n)) : null;
    }
    function Ff(t, e, o) {
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
    function Pf(t, e) {
      return new _$f(t, e);
    }
    function Rf(t, e) {
      return Vo(t) ? new Af[e](t) : null;
    }
    function Lf(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Kf(t) {
      return t && Lf(t.getAdjacentCaret());
    }
    var _Bf = (function () {
      function Bf(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto29 = Bf.prototype;
      _proto29.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Bf(t, e, this.direction);
      };
      _proto29.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto29.getTextSlices = function getTextSlices() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return kf(t) && kf(e) && t.isSameNodeCaret(e)
          ? [Pf(t, e.offset - t.offset), null]
          : [kf(t) ? zf(t, "anchor") : null, kf(e) ? zf(e, "focus") : null];
      };
      _proto29.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = kf(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = kf(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : Kf(e) || e.getParentCaret(t);
          };
        return Vf({
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
      return Bf;
    })();
    var _$f = (function () {
      function $f(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto30 = $f.prototype;
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
        return If(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return $f;
    })();
    function zf(t, e) {
      var n = t.direction,
        o = t.origin;
      return Pf(t, Ff(o, "focus" === e ? Tf(n) : n) - t.offset);
    }
    function Wf(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function Uf(t) {
      return Hf(t, Wf(Rf(wi(), Tf(t.direction)), t.direction));
    }
    function jf(t) {
      return Hf(t, t);
    }
    function Hf(t, n) {
      return (
        t.direction !== n.direction && e(265),
        new _Bf(t, n, t.direction)
      );
    }
    function Vf(t) {
      var _ref83;
      var e = t.initial,
        n = t.hasNext,
        o = t.step,
        r = t.map;
      var i = e;
      return (
        (_ref83 = {}),
        (_ref83[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref83.next = function next() {
          if (!n(i)) return { done: !0, value: void 0 };
          var t = { done: !1, value: r(i) };
          return ((i = o(i)), t);
        }),
        _ref83
      );
    }
    function Yf(t, n) {
      var o = Zf(t.origin, n.origin);
      switch (
        (null === o && e(275, t.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same":
          return Gf(t, n);
        case "ancestor":
          return "child" === t.type ? -1 : 1;
        case "descendant":
          return "child" === n.type ? 1 : -1;
        case "branch":
          return qf(o);
      }
    }
    function Jf(t) {
      return t.getParent() || tf(t);
    }
    function Gf(t, e) {
      var n = "text" === t.type,
        o = "text" === e.type;
      return n && o
        ? (function (t, e) {
            return Math.sign(t - e);
          })(t.offset, e.offset)
        : t.type === e.type
          ? 0
          : n
            ? -1
            : o
              ? 1
              : "child" === t.type
                ? -1
                : 1;
    }
    function qf(t) {
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
    function Xf(t, e) {
      return e.is(t);
    }
    function Qf(t) {
      return Vo(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Zf(t, n) {
      if (t.is(n)) return { commonAncestor: t, type: "same" };
      var o = new Map();
      for (
        var _Qf = Qf(t), _e193 = _Qf[0], _n145 = _Qf[1];
        _e193;
        _n145 = _e193, _e193 = _e193.getParent()
      )
        o.set(_e193, _n145);
      for (
        var _Qf2 = Qf(n), _r84 = _Qf2[0], _i52 = _Qf2[1];
        _r84;
        _i52 = _r84, _r84 = _r84.getParent()
      ) {
        var _s29 = o.get(_r84);
        if (void 0 !== _s29)
          return null === _s29
            ? (Xf(t, _r84) || e(276),
              { commonAncestor: _r84, type: "ancestor" })
            : null === _i52
              ? (Xf(n, _r84) || e(277),
                { commonAncestor: _r84, type: "descendant" })
              : (((Vo(_s29) || Xf(t, _s29)) &&
                  (Vo(_i52) || Xf(n, _i52)) &&
                  _r84.is(_s29.getParent()) &&
                  _r84.is(_i52.getParent())) ||
                  e(278),
                { a: _s29, b: _i52, commonAncestor: _r84, type: "branch" });
      }
      return null;
    }
    function td() {
      var e = [];
      for (
        var _len16 = arguments.length, t = new Array(_len16), _key16 = 0;
        _key16 < _len16;
        _key16++
      ) {
        t[_key16] = arguments[_key16];
      }
      for (var _n146 of t)
        if (_n146 && "string" == typeof _n146)
          for (var _ref85 of _n146.matchAll(/\S+/g)) {
            var _t273 = _ref85[0];
            e.push(_t273);
          }
      return e;
    }
    ((exports.$addUpdateTag = is),
      (exports.$applyNodeReplacement = ps),
      (exports.$assumeActiveEditor = function (t) {
        (null !== vc() && null === fc && (fc = t), fc !== t && n(378));
      }),
      (exports.$caretFromPoint = Tr),
      (exports.$caretRangeFromSelection = kr),
      (exports.$cloneWithProperties = Zs),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Zs(t))[So] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = Yf),
      (exports.$copyNode = gs),
      (exports.$create = Il),
      (exports.$createChildrenArray = Pl),
      (exports.$createLineBreakNode = Xl),
      (exports.$createNodeSelection = Su),
      (exports.$createParagraphNode = Hr),
      (exports.$createPoint = Ba),
      (exports.$createRangeSelection = xu),
      (exports.$createRangeSelectionFromDom = Cu),
      (exports.$createTabNode = Gr),
      (exports.$createTextNode = xr),
      (exports.$exportNodeJSON = ee),
      (exports.$extendCaretToRange = Uf),
      (exports.$findMatchingParent = Fl),
      (exports.$flushSyncAfterUpdate = function () {
        var t = vc();
        (Cc(), (t._flushSync = !0));
      }),
      (exports.$formatText = Qa),
      (exports.$fullReconcile = bc),
      (exports.$generateNodesFromRawText = Pu),
      (exports.$getAdjacentChildCaret = Kf),
      (exports.$getAdjacentNode = Xi),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = Kf(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = Kf(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = Wf),
      (exports.$getCaretRange = Hf),
      (exports.$getCaretRangeInDirection = Fr),
      (exports.$getCharacterOffsets = function (t) {
        var e = t.getStartEndPoints();
        if (null === e) return [0, 0];
        var n = e[0],
          o = e[1];
        return "element" === n.type &&
          "element" === o.type &&
          n.key === o.key &&
          n.offset === o.offset
          ? [0, 0]
          : [Za(n), Za(o)];
      }),
      (exports.$getChildCaret = Rf),
      (exports.$getChildCaretAtIndex = Pr),
      (exports.$getChildCaretOrSelf = Lf),
      (exports.$getCollapsedCaretRange = jf),
      (exports.$getCommonAncestor = Zf),
      (exports.$getCommonAncestorResultBranchOrder = qf),
      (exports.$getDOMSlot = Ys),
      (exports.$getDOMTextNode = Gs),
      (exports.$getDocument = Es),
      (exports.$getEditor = Hs),
      (exports.$getEditorDOMRenderConfig = Vs),
      (exports.$getElementAndOffsetForPoint = Du),
      (exports.$getNearestNodeFromDOMNode = Ei),
      (exports.$getNearestRootOrShadowRoot = fs),
      (exports.$getNodeByKey = vi),
      (exports.$getNodeByKeyOrThrow = ms),
      (exports.$getNodeFromDOMNode = Ni),
      (exports.$getPreviousSelection = ku),
      (exports.$getRoot = wi),
      (exports.$getSelection = bu),
      (exports.$getSelectionSlotFrame = of),
      (exports.$getSiblingCaret = Df),
      (exports.$getSlot = lf),
      (exports.$getSlotFrame = nf),
      (exports.$getSlotHost = tf),
      (exports.$getSlotNameWithinHost = ef),
      (exports.$getSlotNames = sf),
      (exports.$getState = ln),
      (exports.$getStateChange = function (t, e, n) {
        var o = ln(t, n, on),
          r = ln(e, n, on);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = bu();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Ff),
      (exports.$getTextPointCaret = If),
      (exports.$getTextPointCaretSlice = Pf),
      (exports.$getTextPointCaretSliceForNode = Lr),
      (exports.$getWritableNodeState = dn),
      (exports.$hasAncestor = ls),
      (exports.$hasUpdateTag = function (t) {
        return Nc()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = zr),
      (exports.$insertNodes = function (t) {
        var e = bu() || ku();
        (null === e && (e = wi().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = mu),
      (exports.$isBlockFullySelected = Wr),
      (exports.$isChildCaret = Of),
      (exports.$isCompactExport = te),
      (exports.$isDecoratorNode = Go),
      (exports.$isEditorState = function (t) {
        return t instanceof _$l;
      }),
      (exports.$isElementDOMSlot = Js),
      (exports.$isElementNode = Vo),
      (exports.$isExtendableTextPointCaret = Ir),
      (exports.$isInlineElementOrDecoratorNode = us),
      (exports.$isInlineFormattable = ar),
      (exports.$isLeafNode = function (t) {
        return Sr(t) || Ql(t) || Go(t);
      }),
      (exports.$isLexicalNode = No),
      (exports.$isLineBreakNode = Ql),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _xf4;
      }),
      (exports.$isNodeSelection = Ga),
      (exports.$isParagraphNode = Vr),
      (exports.$isRangeSelection = Ya),
      (exports.$isRootNode = Qo),
      (exports.$isRootOrShadowRoot = hs),
      (exports.$isSelectionCapturedInDecoratorInput = ri),
      (exports.$isShadowRootNode = ds),
      (exports.$isSiblingCaret = Ef),
      (exports.$isSlotChild = Qu),
      (exports.$isSlotHost = Xu),
      (exports.$isTabNode = qr),
      (exports.$isTextNode = Sr),
      (exports.$isTextPointCaret = kf),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _$f;
      }),
      (exports.$isTokenOrSegmented = fi),
      (exports.$isTokenOrTab = ui),
      (exports.$markSlotEditable = il),
      (exports.$needsBlockCursorBeside = ys),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = vc();
        if (n._readOnly) {
          var _t274 = Qs(n).get(e);
          return _t274 ? Array.from(_t274.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref87 of o) {
          var _n147 = _ref87[1];
          _n147 instanceof t &&
            _n147.__type === e &&
            _n147.isAttached() &&
            r.push(_n147);
        }
        return r;
      }),
      (exports.$normalizeCaret = Dr),
      (exports.$normalizeSelection__EXPERIMENTAL = Oo),
      (exports.$onUpdate = ss),
      (exports.$parseSerializedNode = function (t) {
        return Ac(t, Nc()._nodes);
      }),
      (exports.$removeFromParent = mi),
      (exports.$removeSlot = function (t, e) {
        var n = t.getWritable();
        if (null === n.__slots) return n;
        var o = n.__slots.get(e);
        return (void 0 !== o && (mf(o), uf(n)["delete"](e)), n);
      }),
      (exports.$removeTextFromCaretRange = wr),
      (exports.$rewindSiblingCaret = Er),
      (exports.$selectAll = function (t) {
        var e = wi();
        if (Ya(t)) {
          var _e194 = t.anchor,
            _n148 = t.focus,
            _o100 = _e194.getNode();
          if (Qo(_o100))
            return (
              _e194.set(_o100.getKey(), 0, "element"),
              _n148.set(_o100.getKey(), _o100.getChildrenSize(), "element"),
              Vi(t, _o100),
              t
            );
          var _r85 = _o100.getTopLevelElementOrThrow(),
            _i53 = _r85.getParent();
          return null === _i53
            ? (Vo(_r85) &&
                (_e194.set(_r85.getKey(), 0, "element"),
                _n148.set(_r85.getKey(), _r85.getChildrenSize(), "element"),
                Vi(t, _r85)),
              t)
            : (_e194.set(_i53.getKey(), 0, "element"),
              _n148.set(_i53.getKey(), _i53.getChildrenSize(), "element"),
              Vi(t, _i53),
              t);
        }
        {
          var _t275 = e.select(0, e.getChildrenSize());
          return (Di(Vi(_t275, e)), _t275);
        }
      }),
      (exports.$setCompositionKey = Si),
      (exports.$setDirectionFromDOM = el),
      (exports.$setFormatFromDOM = nl),
      (exports.$setPointFromCaret = vr),
      (exports.$setSelection = Di),
      (exports.$setSelectionFromCaretRange = Nr),
      (exports.$setSlot = _f),
      (exports.$setState = cn),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref89 of Object.entries(e)) {
          var _t276 = _ref89[0];
          var _o101 = _ref89[1];
          "boolean" == typeof _o101 && n.push([_t276, _o101]);
        }
        0 !== n.length &&
          Xa(t, function (t) {
            for (var _ref91 of n) {
              var _e195 = _ref91[0];
              var _o102 = _ref91[1];
              t = pi(t, _e195, _o102 ? w[_e195] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = $r),
      (exports.$splitNode = function (t, n) {
        var o = t.getChildAtIndex(n);
        (null == o && (o = t), hs(t) && e(102));
        var _r88 = function r(t) {
            var n = t.getParentOrThrow(),
              i = hs(n),
              s = t !== o || i ? gs(t) : t;
            if (i)
              return ((Vo(t) && Vo(s)) || e(133), t.insertAfter(s), [t, s, s]);
            {
              var _r87 = _r88(n),
                _e196 = _r87[0],
                _o103 = _r87[1],
                _i54 = _r87[2],
                _l24 = t.getNextSiblings();
              return (
                _i54.append.apply(_i54, [s].concat(Array.from(_l24))),
                [_e196, _o103, s]
              );
            }
          },
          _r86 = _r88(o),
          i = _r86[0],
          s = _r86[1];
        return [i, s];
      }),
      (exports.$splitTextPointCaretSlice = Kr),
      (exports.$updateDOMSelection = Iu),
      (exports.$updateRangeSelectionFromCaretRange = br),
      (exports.$withCompactExport = Zt),
      (exports.ArtificialNode__DO_NOT_USE = _Jl),
      (exports.BEFORE_INPUT_COMMAND = H),
      (exports.BLUR_COMMAND = Rt),
      (exports.CAN_REDO_COMMAND = It),
      (exports.CAN_UNDO_COMMAND = Ft),
      (exports.CAN_USE_BEFORE_INPUT = d),
      (exports.CAN_USE_DOM = r),
      (exports.CLEAR_EDITOR_COMMAND = At),
      (exports.CLEAR_HISTORY_COMMAND = Dt),
      (exports.CLICK_COMMAND = j),
      (exports.COLLABORATION_TAG = Wl),
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
      (exports.COMPOSITION_END_COMMAND = J),
      (exports.COMPOSITION_END_TAG = Yl),
      (exports.COMPOSITION_START_COMMAND = Y),
      (exports.COMPOSITION_START_TAG = Vl),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Q),
      (exports.CONTROL_OR_ALT = $t),
      (exports.CONTROL_OR_META = Bt),
      (exports.CONTROL_OR_OTHER_KEY = K),
      (exports.COPY_COMMAND = Ot),
      (exports.CUT_COMMAND = Mt),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = ic),
      (exports.DELETE_CHARACTER_COMMAND = G),
      (exports.DELETE_LINE_COMMAND = nt),
      (exports.DELETE_WORD_COMMAND = et),
      (exports.DRAGEND_COMMAND = Et),
      (exports.DRAGOVER_COMMAND = kt),
      (exports.DRAGSTART_COMMAND = bt),
      (exports.DROP_COMMAND = vt),
      (exports.DecoratorNode = _Jo),
      (exports.ElementNode = _Ho4),
      (exports.FOCUS_COMMAND = Pt),
      (exports.FORMAT_ELEMENT_COMMAND = Nt),
      (exports.FORMAT_TEXT_COMMAND = ot),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = zl),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Ct),
      (exports.INPUT_COMMAND = V),
      (exports.INSERT_LINE_BREAK_COMMAND = q),
      (exports.INSERT_PARAGRAPH_COMMAND = X),
      (exports.INSERT_TAB_COMMAND = St),
      (exports.INTERNAL_$expandSelectionToWholeDocument = tu),
      (exports.INTERNAL_$isBlock = js),
      (exports.IS_ALL_FORMATTING = C),
      (exports.IS_ANDROID = p),
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
      (exports.IS_SAFARI = _),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = ht),
      (exports.KEY_ARROW_LEFT_COMMAND = ut),
      (exports.KEY_ARROW_RIGHT_COMMAND = ct),
      (exports.KEY_ARROW_UP_COMMAND = dt),
      (exports.KEY_BACKSPACE_COMMAND = _t),
      (exports.KEY_DELETE_COMMAND = yt),
      (exports.KEY_DOWN_COMMAND = lt),
      (exports.KEY_ENTER_COMMAND = gt),
      (exports.KEY_ESCAPE_COMMAND = mt),
      (exports.KEY_MODIFIER_COMMAND = Lt),
      (exports.KEY_SPACE_COMMAND = pt),
      (exports.KEY_TAB_COMMAND = xt),
      (exports.LineBreakNode = _Gl),
      (exports.MOVE_TO_END = at),
      (exports.MOVE_TO_START = ft),
      (exports.NODE_STATE_DIRECT = on),
      (exports.NODE_STATE_KEY = L),
      (exports.NODE_STATE_LATEST = rn),
      (exports.OUTDENT_CONTENT_COMMAND = Tt),
      (exports.PASTE_COMMAND = Z),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Ur),
      (exports.REDO_COMMAND = st),
      (exports.REMOVE_TEXT_COMMAND = tt),
      (exports.RootNode = _Xo),
      (exports.SELECTION_CHANGE_COMMAND = W),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = U),
      (exports.SELECT_ALL_COMMAND = wt),
      (exports.SET_TEXT_FORMAT_COMMAND = rt),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = jl),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = Ul),
      (exports.SKIP_SELECTION_FOCUS_TAG = Hl),
      (exports.TEXT_TYPE_TO_FORMAT = w),
      (exports.TabNode = _Jr),
      (exports.TextNode = _ur2),
      (exports.UNDO_COMMAND = it),
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
        var n = td.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, Array.from(n));
      }),
      (exports.aliasTableOf = Ee),
      (exports.aliasedValue = Ze),
      (exports.arrayValue = function (t) {
        return Ae(
          function (e) {
            if (!Array.isArray(e)) return [];
            var n = new Array(e.length);
            for (var _o104 = 0; _o104 < e.length; _o104++)
              n[_o104] = t(e[_o104]);
            return n;
          },
          { item: t, kind: "array" },
          void 0,
          function (e, n) {
            if (!Array.isArray(e) || !Array.isArray(n) || e.length !== n.length)
              return !1;
            for (var _o105 = 0; _o105 < e.length; _o105++)
              if (!Te(t, e[_o105], n[_o105])) return !1;
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
        return Ae(
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
      (exports.compileKeyboardShortcuts = jt),
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
      (exports.createCommand = z),
      (exports.createEditor = function (t) {
        var n = t || {},
          o = Ec(),
          r = n.theme || {},
          i = void 0 === t ? o : n.parentEditor || null,
          s = n.disableEvents || !1,
          l = Kl(),
          c = n.namespace || (null !== i ? i._config.namespace : Ki()),
          a = n.editorState,
          u = [_Xo, _ur2, _Gl, _Jr, _Ur, _Jl].concat(Array.from(n.nodes || [])),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var p;
        if (void 0 === t && null !== o) p = o._nodes;
        else {
          p = new Map();
          for (var _t277 = 0; _t277 < u.length; _t277++) {
            var _o106 = u[_t277],
              _r89 = null,
              _i55 = null;
            if (_o106 && "object" == typeof _o106) {
              var _t278 = _o106;
              ((_o106 = _t278.replace),
                (_r89 = _t278["with"]),
                (_i55 = _t278.withKlass || null));
            }
            if (
              "function" != typeof _o106 ||
              !_o106.prototype ||
              !(_o106 === _vo5 || _o106.prototype instanceof _vo5)
            ) {
              var _r90 = "<unknown>";
              try {
                _r90 = JSON.parse(Yt);
              } catch (_unused2) {}
              e(
                365,
                String(_t277 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o106
                  ? "" +
                      _o106.name +
                      ("function" == typeof _o106.getType
                        ? " (type " + String(_o106.getType()) + ")"
                        : "")
                  : String(_o106),
                String(_r90),
              );
            }
            El(_o106);
            var _s30 = _o106.getType(),
              _l25 = rc(_o106);
            p.set(_s30, {
              exportDOM: h && h["export"] ? h["export"].get(_o106) : void 0,
              klass: _o106,
              replace: _r89,
              replaceWithKlass: _i55,
              sharedNodeState: an(u[_t277]),
              transforms: _l25,
            });
          }
        }
        var _ = new _cc(
          l,
          i,
          p,
          {
            disableEvents: s,
            dom: babelHelpers["extends"]({}, ic, t && t.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || nc,
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
          })(p, h ? h["import"] : void 0),
          g,
          t,
        );
        return (
          void 0 !== a && ((_._pendingEditorState = a), (_._dirtyType = 2)),
          (function (t) {
            (t.registerCommand(H, ga, 0),
              t.registerCommand(V, _a, 0),
              t.registerCommand(Y, ya, 0),
              t.registerCommand(J, xa, 0),
              t.registerCommand(lt, wa, 0));
          })(_),
          _
        );
      }),
      (exports.createRefCountedRegistry = Ht),
      (exports.createSharedNodeState = an),
      (exports.createState = function (t, e) {
        return new sn(t, e);
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
      (exports.declaredAccepts = Ie),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.enumValue = qe),
      (exports.findAllLexicalElementsDeep = bs),
      (exports.flipDirection = Tf),
      (exports.getActiveElement = Fs),
      (exports.getActiveElementDeep = Ps),
      (exports.getComposedEventTarget = Rs),
      (exports.getComposedSchemaFields = function (t) {
        var _yl3 = yl(t),
          e = _yl3.fieldsDerivedFirst,
          n = _yl3.flatStates,
          o = {};
        for (var _t279 of n) _t279.schema && (o[_t279.key] = _t279.schema);
        for (var _ref93 of e) {
          var _t280 = _ref93[0];
          var _n149 = _ref93[1];
          o[_t280] = _n149;
        }
        return o;
      }),
      (exports.getComposedStaticRange = Os),
      (exports.getDOMOwnerDocument = ns),
      (exports.getDOMSelection = Ss),
      (exports.getDOMSelectionFromTarget = Cs),
      (exports.getDOMSelectionPoints = ws),
      (exports.getDOMSelectionRange = Ms),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _As;
        var n = Os(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_As = As(n)) != null
            ? _As
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: Ds(n, Is(t)), range: o };
      }),
      (exports.getDOMShadowRoots = Ns),
      (exports.getDOMTextNode = gi),
      (exports.getDeclaredSlots = hf),
      (exports.getEditorPropertyFromDOMNode = ai),
      (exports.getNearestEditorFromDOMNode = ci),
      (exports.getParentElement = es),
      (exports.getRegisteredNode = ni),
      (exports.getRegisteredNodeOrThrow = ei),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o107 of t) {
          var _El2 = El(_o107),
            _t281 = _El2.ownNodeType;
          _t281 && (n.set(_t281, _o107), e.set(_t281, new Set()));
        }
        for (var _ref95 of n) {
          var _t282 = _ref95[0];
          var _o108 = _ref95[1];
          for (var _ref97 of Dl(_o108)) {
            var _n150 = _ref97.ownNodeType;
            {
              var _o109 = _n150 && e.get(_n150);
              _o109 && _o109.add(_t282);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = ks),
      (exports.getStaticNodeConfig = El),
      (exports.getStyleObjectFromCSS = Zo),
      (exports.getTextDirection = function (t) {
        return O.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = rc),
      (exports.getterTableOf = be),
      (exports.isBlockDomNode = Us),
      (exports.isCurrentlyReadOnlyMode = Sc),
      (exports.isDOMCapturingSelection = sl),
      (exports.isDOMDocumentNode = hi),
      (exports.isDOMNode = Ks),
      (exports.isDOMShadowRoot = Ts),
      (exports.isDOMTextNode = di),
      (exports.isDOMUnmanaged = rl),
      (exports.isDocumentFragment = Bs),
      (exports.isExactShortcutMatch = function (t, e, n) {
        if (!ji(t, n)) return !1;
        if (t.key.toLowerCase() === e.toLowerCase()) return !0;
        if (e.length > 1) return !1;
        if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
        if (t.code.startsWith("Digit") && /^\d$/.test(e))
          return t.code === "Digit" + e;
        var o = "Key" + e.toUpperCase();
        return t.code === o;
      }),
      (exports.isHTMLAnchorElement = function (t) {
        return Ls(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = Ls),
      (exports.isHTMLTableCellElement = function (t) {
        return Ls(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return Ls(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = zs),
      (exports.isLastChildInBlockNode = tc),
      (exports.isLexicalEditor = li),
      (exports.isModifierMatch = ji),
      (exports.isOnlyChildInBlockNode = Zl),
      (exports.isSchemaField = Ne),
      (exports.isSelectionCapturedInDecoratorInput = ii),
      (exports.isSelectionWithinEditor = si),
      (exports.iterStaticNodeConfigChain = Dl),
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
      (exports.makeStepwiseIterator = Vf),
      (exports.mergeRegister = zc),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = vi(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Hs();
                }
                var o = lf(t, e);
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
      (exports.nodeSchema = Qe),
      (exports.normalizeClassNames = td),
      (exports.nullable = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e197 = e,
          n = _e197.defaultAsNull;
        return Ae(
          function (e) {
            if (null == e) return null;
            var o = t(e);
            return n && ve(t, o) ? null : o;
          },
          { defaultAsNull: n, inner: t, kind: "nullable" },
          void 0,
          Le(t),
          Ke(t, function (t) {
            return null == t;
          }),
        );
      }),
      (exports.numberValue = Ge),
      (exports.objectValue = function (t) {
        return (function (t, e) {
          var n = Object.entries(e);
          return Ae(
            function (t) {
              var e = null !== t && "object" == typeof t ? t : {},
                o = {};
              for (var _t283 = 0; _t283 < n.length; _t283++) {
                var _n$_t = n[_t283],
                  _r91 = _n$_t[0],
                  _i56 = _n$_t[1];
                o[_r91] = _i56(e[_r91]);
              }
              return o;
            },
            { fields: e, kind: "object" },
            void 0,
            function (t, o) {
              return (
                He(t) &&
                He(o) &&
                !Ve(t, e) &&
                !Ve(o, e) &&
                n.every(function (_ref98) {
                  var e = _ref98[0],
                    n = _ref98[1];
                  return Te(n, t[e], o[e]);
                })
              );
            },
            function (t) {
              return He(t) && !Ve(t, e);
            },
          );
        })(0, t);
      }),
      (exports.optional = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e198 = e,
          n = _e198.omitDefault;
        return Ae(
          function (e) {
            if (void 0 === e) return;
            var o = t(e);
            return n && ve(t, o) ? void 0 : o;
          },
          { inner: t, kind: "optional", omitDefault: n },
          void 0,
          Le(t),
          Ke(t, function (t) {
            return void 0 === t;
          }),
        );
      }),
      (exports.rawValue = function () {
        return Ae(
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
      (exports.registerEventListener = Wc),
      (exports.registerEventListeners = Uc),
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
        var n = td.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(
            _t$classList3,
            Array.from(n),
          );
      }),
      (exports.removeFromParent = yi),
      (exports.resetRandomKey = function () {
        ti = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = er),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n151 in e) {
          var _o110 = e[_n151];
          null == _o110 ? t.removeProperty(_n151) : tr(t, _n151, _o110);
        }
      }),
      (exports.setDOMUnmanaged = ol),
      (exports.setNodeIndentFromDOM = tl),
      (exports.setterDefaultOf = Oe),
      (exports.setterTableOf = ke),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n152 in e)
          if (t[_n152] !== e[_n152]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = Pa),
      (exports.stringValue = Ye),
      (exports.toggleTextFormatType = pi),
      (exports.tokenizeRawText = Fu),
      (exports.transformValue = function (t, e, n) {
        if (n === void 0) {
          n = {};
        }
        return Ae(
          function (n) {
            return e(t(n));
          },
          { inner: t, kind: "transform" },
          Pe(e(t.defaultValue)),
          n.isEqual,
          function (e) {
            return Be(t, e);
          },
        );
      }),
      (exports.unionValue = function (t) {
        var n =
          0 !== (arguments.length <= 1 ? 0 : arguments.length - 1)
            ? Pe(arguments.length <= 1 ? undefined : arguments[1])
            : t[0].defaultValue;
        return Ae(
          function (e) {
            if (void 0 === e) return n;
            var o = (function (e) {
              var n = (function (t, e) {
                return Ue(t, e).member;
              })(t, e);
              return void 0 === n ? void 0 : { member: n, parsed: n(e) };
            })(e);
            return void 0 === o ? n : o.parsed;
          },
          { kind: "union", members: t },
          n,
          Xe,
          function (e) {
            return (
              (void 0 !== e || void 0 === n) &&
              t.some(function (t) {
                return Be(t, e);
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
      (exports.withAccessors = en),
      (exports.withField = tn));
  },
  null,
);
