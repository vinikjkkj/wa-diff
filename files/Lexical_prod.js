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
    var _excluded = ["derivedNames"];
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
      y = c(/^(?=.*Chrome).*/i),
      m = r && p && y,
      x = c(/AppleWebKit\/[\d.]+/) && a && !y;
    function S() {
      return 2047;
    }
    var C = S(),
      v = _ || g || x ? "\xa0" : "\u200b",
      T = "\n\n",
      N = u ? "\xa0" : v,
      k = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      b =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
    function E(t, e) {
      return new RegExp("^[^" + t + "]*[" + e + "]");
    }
    var O = E(b, k),
      M = E(k, b),
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
    var P = I(D),
      F = { normal: 0, segmented: 2, token: 1 },
      R = I(F),
      L = "$",
      K = Symbol["for"]("@lexical/ctrlOrOtherKey"),
      B = "$config";

    function z(t) {
      return function () {};
    }
    function $(t) {
      return { type: t };
    }
    var W = $("SELECTION_CHANGE_COMMAND"),
      j = $("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      U = $("CLICK_COMMAND"),
      H = $("BEFORE_INPUT_COMMAND"),
      V = $("INPUT_COMMAND"),
      J = $("COMPOSITION_START_COMMAND"),
      Y = $("COMPOSITION_END_COMMAND"),
      G = $("DELETE_CHARACTER_COMMAND"),
      q = $("INSERT_LINE_BREAK_COMMAND"),
      X = $("INSERT_PARAGRAPH_COMMAND"),
      Q = $("CONTROLLED_TEXT_INSERTION_COMMAND"),
      Z = $("PASTE_COMMAND"),
      tt = $("REMOVE_TEXT_COMMAND"),
      et = $("DELETE_WORD_COMMAND"),
      nt = $("DELETE_LINE_COMMAND"),
      ot = $("FORMAT_TEXT_COMMAND"),
      rt = $("SET_TEXT_FORMAT_COMMAND"),
      it = $("UNDO_COMMAND"),
      st = $("REDO_COMMAND"),
      lt = $("KEYDOWN_COMMAND"),
      ct = $("KEY_ARROW_RIGHT_COMMAND"),
      at = $("MOVE_TO_END"),
      ut = $("KEY_ARROW_LEFT_COMMAND"),
      ft = $("MOVE_TO_START"),
      dt = $("KEY_ARROW_UP_COMMAND"),
      ht = $("KEY_ARROW_DOWN_COMMAND"),
      gt = $("KEY_ENTER_COMMAND"),
      pt = $("KEY_SPACE_COMMAND"),
      _t = $("KEY_BACKSPACE_COMMAND"),
      yt = $("KEY_ESCAPE_COMMAND"),
      mt = $("KEY_DELETE_COMMAND"),
      xt = $("KEY_TAB_COMMAND"),
      St = $("INSERT_TAB_COMMAND"),
      Ct = $("INDENT_CONTENT_COMMAND"),
      vt = $("OUTDENT_CONTENT_COMMAND"),
      Tt = $("DROP_COMMAND"),
      Nt = $("FORMAT_ELEMENT_COMMAND"),
      kt = $("DRAGSTART_COMMAND"),
      bt = $("DRAGOVER_COMMAND"),
      Et = $("DRAGEND_COMMAND"),
      Ot = $("COPY_COMMAND"),
      Mt = $("CUT_COMMAND"),
      wt = $("SELECT_ALL_COMMAND"),
      At = $("CLEAR_EDITOR_COMMAND"),
      Dt = $("CLEAR_HISTORY_COMMAND"),
      It = $("CAN_REDO_COMMAND"),
      Pt = $("CAN_UNDO_COMMAND"),
      Ft = $("FOCUS_COMMAND"),
      Rt = $("BLUR_COMMAND"),
      Lt = $("KEY_MODIFIER_COMMAND");
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
      zt = Kt("altKey", { altKey: a, ctrlKey: !a }),
      $t = [
        ["altKey", 1],
        ["ctrlKey", 2],
        ["metaKey", 4],
        ["shiftKey", 8],
      ];
    function Wt(t, e, n) {
      var o = t.get(e);
      o ? o.push(n) : t.set(e, [n]);
    }
    var _jt = (function () {
      function jt() {
        this.byKey = (function () {
          return new Map();
        })();
        this.byCode = (function () {
          return new Map();
        })();
      }
      var _proto = jt.prototype;
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
          for (var _ref2 of $t) {
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
            for (var _ref4 of $t) {
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
      return jt;
    })();
    function Ut(t) {
      var e = new _jt();
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
        t = "0.53.0+prod.cjs";
      } catch (_unused) {}
      return t != null ? t : '"<unknown>+source"';
    }
    var Jt = Vt();
    var _Yt = (function () {
      function Yt() {
        this._front = (function () {
          return new Set();
        })();
        this._back = (function () {
          return new Set();
        })();
      }
      var _proto2 = Yt.prototype;
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
      return babelHelpers.createClass(Yt, [
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
        Ur(t) && !Array.isArray(n.children) && e(59, o.name),
        n
      );
    }
    function ne() {
      return Xl()._blockCursorElement;
    }
    function oe(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var re = x || g || _;
    function ie() {
      var t = Il().createElement("img");
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
          r = Il().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          e.insertBefore(r, o),
          t)
        ) {
          var _t1 = Il().createElement("img");
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
      return jl(t) && t.hasAttribute("data-lexical-managed-linebreak");
    }
    function pe(t, e, n) {
      var o = bl(pl(n)),
        r = o && Rl(o, n._rootElement);
      var i = null,
        s = null;
      null !== r &&
        r.anchorNode === t &&
        ((i = r.anchorOffset), (s = r.focusOffset));
      var l = t.nodeValue;
      null !== l && Js(e, l, i, s, !1);
    }
    function _e(t, e, n) {
      if (nf(t)) {
        var _e11 = t.anchor.getNode();
        if (_e11.is(n) && t.format !== _e11.getFormat()) return !1;
      }
      return ys(e) && n.isAttached();
    }
    function ye(t, e, n) {
      for (var _o6 = t; _o6 && !pc(_o6); _o6 = ll(_o6)) {
        var _t13 = As(_o6, e);
        if (void 0 !== _t13) {
          var _e12 = Os(_t13, n);
          if (_e12) return Yr(_e12) || !jl(_o6) ? void 0 : [_o6, _e12];
        }
      }
    }
    function me(t, e, n, o) {
      fe = !0;
      var r =
        null === t._inputState.unprocessedBeforeInputData &&
        performance.now() - de > 100;
      try {
        Ga(t, function () {
          var i =
              Ff() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = Ff();
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
              _d2 = _n10.target,
              _h = ye(_d2, t, l);
            if (!_h) continue;
            var _g = _h[0],
              _p = _h[1];
            if ("characterData" === _e13)
              o
                ? Ni(_p) && _p.isAttached() && _p.markDirty()
                : r && Ni(_p) && ys(_d2) && _e(i, _d2, _p) && pe(_d2, _p, t);
            else {
              a = !0;
              for (var _e14 of _n10.addedNodes) {
                var _n11 = As(_e14, t);
                if (
                  _e14 !== c &&
                  _e14.parentNode === _d2 &&
                  (_n11
                    ? t.getElementByKey(_n11) !== _e14
                    : !(
                        (t._slotsUsed &&
                          jl(_e14) &&
                          _e14.hasAttribute("data-lexical-slot")) ||
                        pc(_e14)
                      ))
                ) {
                  if (u) {
                    var _t14 =
                      (jl(_e14) ? _e14.innerText : null) || _e14.nodeValue;
                    _t14 && (f += _t14);
                  }
                  _d2.removeChild(_e14);
                }
              }
              for (var _t15 of _n10.removedNodes) {
                var _e15 = c === _t15;
                if (_e15 || se(_t15) || ge(_t15)) {
                  var _e16 = _n10.nextSibling,
                    _o7 = _n10.previousSibling;
                  _d2.insertBefore(
                    _t15,
                    _e16 && _e16.parentNode !== _d2
                      ? _o7
                        ? _o7.parentNode === _d2
                          ? _o7.nextSibling
                          : null
                        : _d2.firstChild
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
                As(_n13, t) ||
                ge(_n13) ||
                _n13.remove();
          (n.takeRecords(),
            null !== i && (a && Ks(i), u && rl(t) && i.insertRawText(f)));
        });
      } finally {
        fe = !1;
      }
    }
    function xe(t, e, n) {
      var o = t._observer;
      if (null !== o) {
        var _r4 = o.takeRecords();
        (!n || _r4.length > 0) && me(t, _r4, o, e);
      }
    }
    function Se(t) {
      (!(function (t) {
        pl(t).addEventListener("textInput", he, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          me(t, e, n);
        })));
    }
    function Ce(t, e, n) {
      var o = t.isEqual;
      return e === n || (void 0 !== o && o(e, n));
    }
    function ve(t, e) {
      return Ce(t, e, t.defaultValue);
    }
    function Te(t) {
      return "object" == typeof t && null !== t;
    }
    function Ne(t, n) {
      var o = Me(t, n).getter;
      return (
        (Te(o) && void 0 !== o.getterTable) || e(405, n),
        Oe(o.getterTable)
      );
    }
    function ke(t, n) {
      var o = Me(t, n).setter;
      return (
        (Te(o) && void 0 !== o.setterTable) || e(406, n),
        Oe(o.setterTable)
      );
    }
    function be(t, n, o) {
      var _Me = Me(t, n),
        r = _Me.meta;
      for (var _t16 = 0; ; )
        if ("aliased" === r.kind) {
          if (_t16 === o) return Oe(r.aliases);
          (_t16++, (r = r.inner.meta));
        } else
          "nullable" === r.kind || "optional" === r.kind
            ? (r = r.inner.meta)
            : "array" === r.kind
              ? (r = r.item.meta)
              : e(407, n, String(o));
    }
    function Ee(t, n) {
      var o = Me(t, n),
        r = o.setter;
      (Te(r) && void 0 !== r.setterTable) || e(408, n);
      var i = String(o.defaultValue);
      return (je(r.setterTable, i) || e(409, n, i), r.setterTable[i]);
    }
    function Oe(t) {
      return Object.assign(Object.create(null), t);
    }
    function Me(t, n) {
      var o = t.get(n);
      return (void 0 === o && e(410, n), o);
    }
    function we(t, e, n, o, r) {
      void 0 !== r && Ae.add(r);
      var i = void 0 === n,
        s = i ? t(void 0) : n;
      return (
        i && Fe(s),
        Object.assign(t, { accepts: r, defaultValue: s, isEqual: o, meta: e })
      );
    }
    var Ae = new WeakSet();
    function De(t) {
      var e = t.accepts;
      return void 0 === e || Ae.has(e) ? void 0 : e;
    }
    var Ie = new WeakSet();
    function Pe(t) {
      return (null !== t && "object" == typeof t && Ie.add(t), t);
    }
    function Fe(t) {
      if (
        null !== t &&
        "object" == typeof t &&
        !Object.isFrozen(t) &&
        !Ie.has(t)
      ) {
        Object.freeze(t);
        for (var _e19 of Object.values(t)) Fe(_e19);
      }
    }
    function Re(t) {
      var e = t.isEqual;
      return void 0 === e
        ? void 0
        : function (t, n) {
            return null == t || null == n ? t === n : e(t, n);
          };
    }
    function Le(t, e) {
      return function (n) {
        return e(n) || Ke(t, n);
      };
    }
    function Ke(t, e) {
      var n = t.accepts;
      return void 0 !== n
        ? n.call(t, e)
        : void 0 !==
            (function (t, e) {
              var n = t.accepts;
              if (void 0 !== n) return Ke(t, e) ? { parsed: t(e) } : void 0;
              var o = t(e);
              return ve(t, o) && e !== t.defaultValue ? void 0 : { parsed: o };
            })(t, e);
    }
    var Be = new WeakMap();
    function ze(t) {
      var e = Be.get(t);
      if (void 0 !== e) return e;
      var n = (function (t) {
        var e = t.meta;
        if (null == e) return !1;
        if (void 0 !== De(t)) return !1;
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
      return (Be.set(t, n), n);
    }
    function $e(t, e) {
      var n = t.meta;
      if (null == n) return Ke(t, e) ? 1 : 4;
      var o = De(t),
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
                var _r5 = $e(e.item, n[_o8]);
                _r5 > _t17 && (_t17 = _r5);
              }
            return _t17 >= 3 ? 3 : _t17;
          }
          case "object": {
            var _t18 = e.fields;
            if (!Ue(n)) return 4;
            if (null == _t18) return 1;
            if (!o && He(n, _t18)) return 4;
            var _r6 = 1;
            for (var _e20 of Object.keys(n))
              if (je(_t18, _e20)) {
                var _o9 = $e(_t18[_e20], n[_e20]);
                _o9 > _r6 && (_r6 = _o9);
              }
            return _r6 >= 3 ? 3 : _r6;
          }
          case "union":
            return null == e.members ? 1 : We(e.members, n).fit;
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
              : $e(e.inner, n);
          default:
            return o || Ke(t, n) ? 1 : 4;
        }
      })(t, n, e, r);
      return r && 4 === i ? 3 : i;
    }
    function We(t, e) {
      var n,
        o = 4,
        r = 4;
      for (var _i4 = 0; _i4 < t.length; _i4++) {
        var _s3 = t[_i4],
          _l2 = $e(_s3, e),
          _c2 = _l2 < 3 && ze(_s3) ? 3 : _l2;
        if (_c2 < o && ((n = _s3), (o = _c2), (r = _l2), 1 === _c2)) break;
      }
      return { fit: r, member: n };
    }
    function je(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    function Ue(t) {
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
    function He(t, e) {
      for (var _n14 of Object.keys(t)) if (!je(e, _n14)) return !0;
      return !1;
    }
    function Ve(t) {
      if (t === void 0) {
        t = "";
      }
      return we(
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
    function Ye(t, e) {
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
      return we(
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
    function Ge(t) {
      var n = Pe(
          0 !== (arguments.length <= 1 ? 0 : arguments.length - 1)
            ? arguments.length <= 1
              ? undefined
              : arguments[1]
            : t[0],
        ),
        o = new Set(t);
      return we(
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
    function qe(t, e) {
      if (t === e) return !0;
      if (Array.isArray(t) || Array.isArray(e)) {
        if (!Array.isArray(t) || !Array.isArray(e) || t.length !== e.length)
          return !1;
        for (var _n15 = 0; _n15 < t.length; _n15++)
          if (!qe(t[_n15], e[_n15])) return !1;
        return !0;
      }
      if (!Ue(t) || !Ue(e)) return !1;
      var n = Object.keys(t);
      return (
        n.length === Object.keys(e).length &&
        n.every(function (n) {
          return je(e, n) && qe(t[n], e[n]);
        })
      );
    }
    function Xe() {
      return function (t) {
        return (function (t) {
          return { meta: { fields: t, kind: "node" } };
        })(t);
      };
    }
    function Qe(t, e) {
      var n = function n(t) {
        return "string" == typeof t && je(e, t);
      };
      return we(
        function (o) {
          return n(o) ? e[o] : t(o);
        },
        { aliases: e, inner: t, kind: "aliased" },
        t.defaultValue,
        t.isEqual,
        function (e) {
          return n(e) || Ke(t, e);
        },
      );
    }
    function Ze(t, e) {
      if (t === e) return !0;
      if (!Array.isArray(t) || !Array.isArray(e) || t.length !== e.length)
        return !1;
      for (var _n16 = 0; _n16 < t.length; _n16++)
        if (t[_n16] !== e[_n16]) return !1;
      return !0;
    }
    function tn(t, e) {
      return nn(
        0,
        t,
        {
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
        },
        !0 === e.derived,
      );
    }
    function en(t, e) {
      return nn(0, t, { getter: e.getter, setter: e.setter }, !0 === e.derived);
    }
    function nn(t, e, n, o) {
      if (o === void 0) {
        o = !1;
      }
      return Object.assign(
        function (t) {
          return e(t);
        },
        babelHelpers["extends"](
          { accepts: e.accepts, defaultValue: e.defaultValue },
          o ? { derived: !0 } : {},
          {
            getter: n.getter,
            isEqual: e.isEqual,
            meta: e.meta,
            setter: n.setter,
          },
        ),
      );
    }
    var on = "direct",
      rn = "latest";
    var sn = function sn(t, e) {
      ((this.key = t), (this.derived = !0 === e.derived));
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
        (this.unparse = (e.unparse || _n).bind(e)),
        (this.isEqual = e.isEqual
          ? e.isEqual.bind(e)
          : void 0 !== n && void 0 !== n.isEqual
            ? function (t, e) {
                return Ce(n, t, e);
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
      if ((Ma(), "function" == typeof n)) {
        var _r7 = t.getLatest(),
          _i5 = ln(_r7, e);
        if (((o = an(e, n(_i5))), e.isEqual(_i5, o))) return _r7;
      } else o = an(e, n);
      var r = t.getWritable();
      return (hn(r).updateFromKnown(e, o), r);
    }
    function an(t, e) {
      var n = t.schema;
      return void 0 !== n && "set" === n.meta.kind ? t.parse(e) : e;
    }
    function un(t) {
      var e = new Map(),
        n = new Set();
      for (var _ref12 of Jc("function" == typeof t ? t : t.replace)) {
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
    var fn = new Set(["__proto__", "constructor", "prototype"]);
    var _dn = (function () {
      function dn(t, e, n, o, r) {
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
      var _proto6 = dn.prototype;
      _proto6.getValue = function getValue(t) {
        var e = this.knownState.get(t);
        if (void 0 !== e) return e;
        this.sharedNodeState.sharedConfigMap.set(t.key, t);
        var n = t.defaultValue;
        if (this.unknownState && t.key in this.unknownState) {
          var _e23 = this.unknownState[t.key];
          (void 0 !== _e23 && (n = t.parse(_e23)), this.knownState.set(t, n));
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
          var _n17 = _ref14[1];
          _e24.isEqual(_n17, _e24.defaultValue)
            ? delete t[_e24.key]
            : (t[_e24.key] = _e24.unparse(_n17));
        }
        for (var _n18 of this.sharedNodeState.flatKeys)
          _n18 in t && ((e[_n18] = t[_n18]), delete t[_n18]);
        return (pn(t) && (e[L] = t), e);
      };
      _proto6.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          o = new Map(this.knownState);
        return new dn(
          t,
          e,
          (function (t, e, n) {
            var o;
            if (n)
              for (var _ref16 of Object.entries(n)) {
                var _r9 = _ref16[0];
                var _i6 = _ref16[1];
                {
                  if (fn.has(_r9)) continue;
                  var _n19 = t.get(_r9);
                  _n19
                    ? e.has(_n19) || e.set(_n19, _n19.parse(_i6))
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
        (r && n in r
          ? (delete r[n], (this.unknownState = pn(r)))
          : o.has(t) || this.size++,
          o.set(t, e));
      };
      _proto6.updateFromUnknown = function updateFromUnknown(t, e) {
        if (fn.has(t)) return;
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
            var _n20 = _ref18[1];
            this.updateFromUnknown(_e25, _n20);
          }
      };
      return dn;
    })();
    function hn(t) {
      var e = t.getWritable(),
        n = e.__state
          ? e.__state.getWritable(e)
          : new _dn(
              e,
              (function (t) {
                return t.__state
                  ? t.__state.sharedNodeState
                  : is(Xl(), t.getType()).sharedNodeState;
              })(e),
            );
      return ((e.__state = n), n);
    }
    function gn(t, e) {
      var n = t.getWritable(),
        o = e[L];
      return ((n.__state || o) && hn(t).updateFromJSON(o), n);
    }
    function pn(t) {
      if (t) for (var _e26 in t) return t;
    }
    function _n(t) {
      return t;
    }
    function yn(t, e, n) {
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
          var _n21 = _ref22[1];
          if (!t.has(_e28) && (t.add(_e28), _n21 !== (r ? r[_e28] : void 0)))
            return !0;
        }
      return !1;
    }
    function xn(t, e) {
      var n = t.getLatest().__state;
      if (void 0 === n || 0 === n.size) return;
      var o = e.getLatest().__state,
        r = new Set();
      if (void 0 !== o) {
        for (var _ref24 of o.knownState) {
          var _t22 = _ref24[0];
          r.add(_t22.key);
        }
        if (void 0 !== o.unknownState)
          for (var _t23 of Object.keys(o.unknownState)) r.add(_t23);
      }
      var i = hn(e);
      for (var _ref26 of n.knownState) {
        var _t24 = _ref26[0];
        var _e29 = _ref26[1];
        {
          if (r.has(_t24.key)) continue;
          if ((r.add(_t24.key), _t24.isEqual(_e29, _t24.defaultValue)))
            continue;
          var _n22 = i.sharedNodeState.sharedConfigMap.get(_t24.key);
          void 0 === _n22 || _n22 === _t24
            ? i.updateFromKnown(_t24, _e29)
            : i.updateFromUnknown(_t24.key, _t24.unparse(_e29));
        }
      }
      var s = n.unknownState;
      if (void 0 !== s)
        for (var _ref28 of Object.entries(s)) {
          var _t25 = _ref28[0];
          var _e30 = _ref28[1];
          r.has(_t25) || i.updateFromUnknown(_t25, _e30);
        }
    }
    function Sn(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function Cn(t) {
      return !Xr(t) && t.getTextContent !== _jr4.prototype.getTextContent;
    }
    var vn = Symbol["for"]("@lexical/CachedTextSize");
    function Tn(t, n) {
      return zn.read(
        function () {
          var o = 0,
            r = t;
          for (var _t26 = 0; _t26 < n && null !== r; _t26++) {
            var _i7 = Bn.get(r);
            if ((void 0 === _i7 && e(345, r), Ur(_i7))) {
              var _s4 = $n.get(r);
              if (void 0 !== _s4 && Ur(_s4) && _s4.__parent !== _i7.__parent)
                o += _i7.getTextContentSize();
              else {
                var _t27 = Wn.get(r),
                  _n23 = _t27 && _t27.__lexicalTextContent;
                ("string" != typeof _n23 && e(346, _i7.getType()),
                  (o += _n23.length));
              }
              _t26 < n - 1 && !_i7.isInline() && (o += 2);
            } else if (ro(_i7).size > 0) o += _i7.getTextContentSize();
            else {
              var _t28 = _i7[vn];
              (void 0 === _t28 && e(347, _i7.getType(), r), (o += _t28));
            }
            r = _i7.__next;
          }
          return o;
        },
        { editor: En },
      );
    }
    function Nn(t) {
      Ur(t) ||
        ro(t).size > 0 ||
        (void 0 === t[vn] &&
          (t[vn] = Ni(t) ? t.__text.length : t.getTextContentSize()));
    }
    var kn = 4;
    var bn,
      En,
      On,
      Mn = "",
      wn = null,
      An = null,
      Dn = null;
    function In() {
      return { firstTextKey: Dn, format: wn, style: An };
    }
    function Pn(t) {
      null !== t.firstTextKey &&
        ((wn = t.format), (An = t.style), (Dn = t.firstTextKey));
    }
    function Fn(t) {
      if (null !== Dn) return;
      var n = t.__lexicalFirstTextKey;
      if ((void 0 === n && e(348), null === n)) return;
      var o = $n.get(n);
      Ni(o) && ((wn = o.getFormat()), (An = o.getStyle()), (Dn = n));
    }
    var Rn,
      Ln,
      Kn,
      Bn,
      zn,
      $n,
      Wn,
      jn,
      Un,
      Hn,
      Vn = !1,
      Jn = !1;
    function Yn(t, e) {
      var n = Bn.get(t),
        o = $n.has(t);
      if (null !== e) {
        var _n24 = So(t);
        _n24.parentNode === e && e.removeChild(_n24);
      }
      if (!o) {
        if ((En._keyToDOMMap["delete"](t), Ur(n))) {
          var _t29 = qc(n, Bn);
          Gn(_t29, 0, _t29.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t30 of ro(n).values()) {
            var _e31 = so(_t30);
            (Yn(_t30, null), null !== _e31 && _e31.remove());
          }
          el(Un, On, Rn, n, "destroyed");
        }
      }
    }
    function Gn(t, e, n, o) {
      for (var _r1 = e; _r1 <= n; ++_r1) {
        var _e32 = t[_r1];
        void 0 !== _e32 && Yn(_e32, o);
      }
    }
    function qn(t, e) {
      t.setProperty("text-align", e);
    }
    var Xn = "40px";
    function Qn(t, e) {
      var n = bn.theme.indent;
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
          : "calc(" + e + " * var(--lexical-indent-base-value, " + Xn + "))",
      ),
        Zs(t, "class"),
        Zs(t, "style"));
    }
    function Zn(t, e) {
      var n = t.style;
      (0 === e
        ? qn(n, "")
        : 1 === e
          ? qn(n, "left")
          : 2 === e
            ? qn(n, "center")
            : 3 === e
              ? qn(n, "right")
              : 4 === e
                ? qn(n, "justify")
                : 5 === e
                  ? qn(n, "start")
                  : 6 === e && qn(n, "end"),
        Zs(t, "style"));
    }
    function to(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (Xr(t)) return null;
        var n = t.getParent();
        return null === n || (xl(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function eo(t) {
      var e = Il().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function no(t, e, n) {
      e || "false" === t.contentEditable
        ? _c(n, En)
        : n.removeAttribute("contenteditable");
    }
    function oo(t, e, n) {
      var o = Mn,
        r = In();
      Mn = "";
      var i = "";
      var s = Yr(t);
      for (var _ref30 of n) {
        var _o12 = _ref30[0];
        var _r10 = _ref30[1];
        {
          var _n25 = eo(_o12);
          (no(e, s, _n25), e.appendChild(_n25), (Mn = ""));
          var _l3 = In();
          (co(_r10, Zl(t, _n25, En)), Pn(_l3), io(t, _o12, e, _n25), (i += Mn));
        }
      }
      return (Pn(r), (Mn = o), i);
    }
    function ro(t) {
      return ld(t) && null !== t.__slots ? t.__slots : sd;
    }
    function io(t, e, n, o) {
      var r = Hn.$getSlotTargetElement(t, e, n, En);
      null !== r &&
        (o.parentElement !== r && r.appendChild(o), (o.style.display = ""));
    }
    function so(t) {
      var e = Wn.get(t);
      return void 0 !== e ? e.parentElement : null;
    }
    function lo(t, e, n) {
      var o = ro(t),
        r = ro(e);
      for (var _ref32 of o) {
        var _t31 = _ref32[0];
        var _e33 = _ref32[1];
        if (!r.has(_t31)) {
          var _t32 = so(_e33);
          (Yn(_e33, null), null !== _t32 && _t32.remove());
        }
      }
      var i = Mn,
        s = In();
      var l = "",
        c = null;
      var a = Yr(e);
      for (var _ref34 of r) {
        var _t33 = _ref34[0];
        var _i8 = _ref34[1];
        {
          var _r11 = o.get(_t33);
          var _s5 = void 0 !== _r11 ? so(_r11) : null;
          Mn = "";
          var _u2 = In();
          if (null === _s5) {
            _s5 = eo(_t33);
            var _o13 = null;
            for (var _t34 of n.children)
              if (!_t34.hasAttribute("data-lexical-slot")) {
                _o13 = _t34;
                break;
              }
            (n.insertBefore(_s5, _o13), co(_i8, Zl(e, _s5, En)));
          } else
            _r11 === _i8
              ? po(_i8, _s5)
              : (void 0 !== _r11 && Yn(_r11, _s5), co(_i8, Zl(e, _s5, En)));
          if (
            (Pn(_u2),
            no(n, a, _s5),
            io(e, _t33, n, _s5),
            (l += Mn),
            _s5.parentElement === n)
          ) {
            var _t35 = null === c ? n.firstChild : c.nextSibling;
            (_t35 !== _s5 && n.insertBefore(_s5, _t35), (c = _s5));
          }
        }
      }
      return (Pn(s), (Mn = i), l);
    }
    function co(t, n) {
      var o = $n.get(t);
      if ((void 0 === o && e(60), null !== n)) {
        var _e34 = Bn.get(t);
        if (void 0 !== _e34) {
          var _r12 = Wn.get(t);
          if (void 0 !== _r12) {
            var _i9 = cd(_e34) ? _e34.__slotHost : null,
              _s6 = cd(o) ? o.__slotHost : null,
              _l4 = _e34.__parent !== o.__parent || _i9 !== _s6,
              _c3 = null !== _s6 && _r12.parentElement !== n.element;
            if (_l4 || _c3) return (n.insertChild(_r12), po(t, n.element));
          }
        }
      }
      var r = Hn.$createDOM(o, En);
      (!(function (t, e, n) {
        var o = n._keyToDOMMap;
        (ws(e, n, t), o.set(t, e));
      })(t, r, En),
        Ni(o)
          ? r.setAttribute("data-lexical-text", "true")
          : Yr(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            gc(r, { captureSelection: !0 })));
      var i = null !== n ? n.before : null,
        s = null !== i ? i.previousSibling : null;
      if (Ur(o)) {
        var _t36 = Mn,
          _e35 = o.__indent,
          _n26 = o.__size;
        (to(r, o), 0 !== _e35 && Qn(r, _e35));
        var _i0 = ro(o),
          _s7 = _i0.size > 0 ? oo(o, r, _i0) : "";
        if (0 === _n26)
          ((r.__lexicalTextContent = _s7),
            (r.__lexicalFirstTextKey = null),
            (Mn += _s7),
            _i0.size > 0 && (r.__lexicalSlotTextLength = _s7.length));
        else {
          var _e36 = _n26 - 1;
          if ((ao(qc(o, $n), o, 0, _e36, Zl(o, r, En)), "" !== _s7)) {
            var _e37 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s7 + _e37), (Mn = _t36 + _s7 + _e37));
          }
          _i0.size > 0 && (r.__lexicalSlotTextLength = _s7.length);
        }
        if (Cn(o)) {
          var _e38 = o.getTextContent();
          ((r.__lexicalTextContent = _e38), (Mn = _t36 + _e38));
        }
        var _l5 = o.__format;
        (0 !== _l5 && Zn(r, _l5), o.isInline() || (ho(0, o, r), fo(o, r)));
      } else {
        var _e39 = o.getTextContent();
        if (Yr(o)) {
          var _e40 = o.decorate(En, bn);
          (null !== _e40 && _o(t, _e40), (r.contentEditable = "false"));
          var _n27 = ro(o);
          _n27.size > 0 && oo(o, r, _n27);
        }
        Mn += _e39;
      }
      return (
        null !== n &&
          (null === i ||
          i.parentNode === n.element ||
          (null !== s && s.parentNode !== n.element)
            ? n.insertChild(r)
            : n
                .withBefore(null !== s ? s.nextSibling : n.getFirstChild())
                .insertChild(r)),
        Hn.$decorateDOM(o, null, r, En),
        Nn(o),
        el(Un, On, Rn, o, "created"),
        r
      );
    }
    function ao(t, n, o, r, i) {
      var s = Mn,
        l = In();
      ((Mn = ""), (wn = null), (An = null), (Dn = null));
      var c = o;
      for (; c <= r; ++c) {
        var _e41 = In();
        co(t[c], i);
        var _n28 = $n.get(t[c]);
        (null !== _n28 && Ni(_n28)
          ? null === wn &&
            ((wn = _n28.getFormat()), (An = _n28.getStyle()), (Dn = _n28.__key))
          : Ur(_n28) && c < r && !_n28.isInline() && (Mn += T),
          Pn(_e41));
      }
      var a = En._keyToDOMMap.get(n.__key);
      (void 0 === a && e(349, n.__key),
        (a.__lexicalTextContent = Mn),
        (a.__lexicalFirstTextKey = Dn),
        (Mn = s + Mn),
        Pn(l));
    }
    function uo(t) {
      return Yr(t) && !t.isInline();
    }
    function fo(t, e, n) {
      if (n === void 0) {
        n = Zl(t, e, En);
      }
      (n.setDecoratorBoundaryAnchor("leading", uo(t.getFirstChild())),
        n.setDecoratorBoundaryAnchor("trailing", uo(t.getLastChild())));
    }
    function ho(t, e, n) {
      var o = Zl(e, n, En),
        r = (function (t, e) {
          if (t) {
            var _n29 = t.__last;
            if (_n29) {
              var _t37 = e.get(_n29);
              if (_t37)
                return sa(_t37)
                  ? "line-break"
                  : Yr(_t37) && _t37.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, $n);
      o.setManagedLineBreak(r);
    }
    function go(t, e, n) {
      var o = e.__lexicalFirstTextKey;
      if (null != o) {
        var _e42 = t.__key;
        var _r13 = o;
        for (; null !== _r13; ) {
          var _t38 = $n.get(_r13);
          if (void 0 === _t38) {
            _r13 = null;
            break;
          }
          if (_t38.__parent === _e42) break;
          _r13 = _t38.__parent;
        }
        if (null !== _r13 && !n.has(_r13)) {
          var _t39 = $n.get(o);
          if (Ni(_t39))
            return ((wn = _t39.getFormat()), void (An = _t39.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Dn;
    }
    function po(t, n) {
      var o = Bn.get(t);
      var r = $n.get(t);
      (void 0 !== o && void 0 !== r) || e(61);
      var i = Vn || Kn.has(t) || Ln.has(t),
        s = sl(En, t);
      if (o === r && !i) {
        var _t40;
        if (Ur(o)) {
          var _n30 = s.__lexicalTextContent;
          ("string" != typeof _n30 && e(355, o.getType()),
            (_t40 = _n30),
            Fn(s));
        } else _t40 = o.getTextContent();
        return ((Mn += _t40), s);
      }
      if (
        (o !== r && i && el(Un, On, Rn, r, "updated"),
        Hn.$updateDOM(r, o, s, En))
      ) {
        var _o14 = co(t, null);
        return (
          null === n && e(62),
          n.replaceChild(_o14, s),
          Yn(t, null),
          _o14
        );
      }
      if (Ur(o)) {
        Ur(r) || e(334, t);
        var _n31 = r.__indent;
        (Vn || _n31 !== o.__indent) && Qn(s, _n31);
        var _l6 = r.__format;
        (Vn || _l6 !== o.__format) && Zn(s, _l6);
        var _c4 = i && (ro(r).size > 0 || ro(o).size > 0) ? lo(o, r, s) : "";
        if (i) {
          var _n32 = Mn;
          if (
            ((function (t, n, o, r) {
              var i;
              ((wn = null),
                (An = null),
                (Dn = null),
                (function (t, n, o) {
                  var r = Mn,
                    i = t.__size,
                    s = n.__size;
                  Mn = "";
                  var l = o.element,
                    c = En._keyToDOMMap.get(n.__key);
                  void 0 === c && e(351, n.__key);
                  var a = s - i;
                  if (
                    !Vn &&
                    Math.abs(a) <= 1 &&
                    i >= kn &&
                    t.__first === n.__first &&
                    (0 !== a || !En._cloneNotNeeded.has(t.__key))
                  ) {
                    var _i1 = c.__lexicalTextContent,
                      _u3 = jn.get(t.__key);
                    if (
                      !Vn &&
                      !Cn(n) &&
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
                          var _t41 = $n.get(o);
                          if (void 0 === _t41) return null;
                          ((o = _t41.__prev), i++);
                        }
                        return i !== n || (null !== o && e.has(o)) ? null : r;
                      })(n, _u3);
                      if (null !== _s8) {
                        var _f2 = _u3.size;
                        if (0 === a) {
                          var _t42 = Tn(_s8, _f2);
                          var _o15 = _s8,
                            _a2 = 0;
                          for (; null !== _o15 && _a2 < _f2; ) {
                            var _t43 = $n.get(_o15);
                            if (void 0 === _t43) break;
                            var _e43 = In();
                            (po(_o15, l),
                              Ni(_t43) &&
                                null === wn &&
                                ((wn = _t43.getFormat()),
                                (An = _t43.getStyle()),
                                (Dn = _t43.__key)),
                              Pn(_e43),
                              (_o15 = _t43.__next),
                              _a2++);
                          }
                          var _d3 = "";
                          for (
                            _o15 = _s8, _a2 = 0;
                            null !== _o15 && _a2 < _f2;
                          ) {
                            var _t44 = $n.get(_o15);
                            if (void 0 === _t44) break;
                            var _n33 = void 0;
                            if (Ur(_t44)) {
                              var _r14 = En._keyToDOMMap.get(_o15),
                                _i10 = _r14 && _r14.__lexicalTextContent;
                              ("string" != typeof _i10 &&
                                e(352, _t44.getType()),
                                (_n33 = _i10));
                            } else _n33 = _t44.getTextContent();
                            ((_d3 += _n33),
                              _a2 < _f2 - 1 &&
                                Ur(_t44) &&
                                !_t44.isInline() &&
                                (_d3 += T),
                              (_o15 = _t44.__next),
                              _a2++);
                          }
                          var _h2 = c.__lexicalSlotTextLength || 0,
                            _g2 = _h2 > 0 ? _i1.slice(_h2) : _i1,
                            _p2 = _g2.slice(0, _g2.length - _t42) + _d3;
                          return (
                            (c.__lexicalTextContent = _p2),
                            (Mn = r + _p2),
                            void go(n, c, _u3)
                          );
                        }
                        if (
                          (function (t, n, o, r, i, s, l, c) {
                            if (1 !== c && -1 !== c) return !1;
                            if (l !== (1 === c ? 2 : 1)) return !1;
                            var a = l - c;
                            var u = t.__last;
                            for (var _t45 = 0; _t45 < a - 1; _t45++) {
                              if (null === u) return !1;
                              var _t46 = Bn.get(u);
                              if (void 0 === _t46) return !1;
                              u = _t46.__prev;
                            }
                            if (null === u) return !1;
                            var f = $n.get(s),
                              d = Bn.get(u);
                            if (void 0 === f || void 0 === d) return !1;
                            if (f.__prev !== d.__prev) return !1;
                            var h = [];
                            var g = s;
                            for (var _t47 = 0; _t47 < l; _t47++) {
                              if (null === g) return !1;
                              h.push(g);
                              var _t48 = $n.get(g);
                              g = _t48 ? _t48.__next : null;
                            }
                            var p = [];
                            g = u;
                            for (var _t49 = 0; _t49 < a; _t49++) {
                              if (null === g) return !1;
                              p.push(g);
                              var _t50 = Bn.get(g);
                              g = _t50 ? _t50.__next : null;
                            }
                            var _ = new Set(p),
                              y = new Set(h),
                              m = [];
                            var x = 0,
                              S = 0;
                            for (; x < a && S < l; )
                              if (h[S] === p[x])
                                (m.push({ key: h[S], kind: "reconcile" }),
                                  x++,
                                  S++);
                              else if (y.has(p[x])) {
                                if (_.has(h[S])) return !1;
                                (m.push({
                                  key: h[S],
                                  kind: "create",
                                  nextIndex: S,
                                }),
                                  S++);
                              } else
                                (m.push({ key: p[x], kind: "destroy" }), x++);
                            for (; x < a; )
                              m.push({ key: p[x++], kind: "destroy" });
                            for (; S < l; )
                              (m.push({
                                key: h[S],
                                kind: "create",
                                nextIndex: S,
                              }),
                                S++);
                            var C = Tn(u, a);
                            for (var _t51 of m) {
                              var _e44 = In();
                              if ("reconcile" === _t51.kind)
                                po(_t51.key, o.element);
                              else if ("destroy" === _t51.kind)
                                Yn(_t51.key, o.element);
                              else {
                                var _e45 = null;
                                for (
                                  var _n34 = _t51.nextIndex + 1;
                                  _n34 < l;
                                  _n34++
                                ) {
                                  var _t52 = En._keyToDOMMap.get(h[_n34]);
                                  if (void 0 !== _t52) {
                                    _e45 = _t52;
                                    break;
                                  }
                                }
                                co(
                                  _t51.key,
                                  o.withBefore(_e45 != null ? _e45 : o.before),
                                );
                              }
                              if ("destroy" !== _t51.kind) {
                                var _e46 = $n.get(_t51.key);
                                _e46 &&
                                  Ni(_e46) &&
                                  null === wn &&
                                  ((wn = _e46.getFormat()),
                                  (An = _e46.getStyle()),
                                  (Dn = _e46.__key));
                              }
                              Pn(_e44);
                            }
                            var v = "";
                            for (var _t53 = 0; _t53 < l; _t53++) {
                              var _n35 = $n.get(h[_t53]);
                              if (void 0 === _n35) return !1;
                              var _o16 = void 0;
                              if (Ur(_n35)) {
                                var _r15 = En._keyToDOMMap.get(h[_t53]),
                                  _i11 = _r15 && _r15.__lexicalTextContent;
                                ("string" != typeof _i11 &&
                                  e(350, _n35.getType()),
                                  (_o16 = _i11));
                              } else _o16 = _n35.getTextContent();
                              ((v += _o16),
                                _t53 < l - 1 &&
                                  Ur(_n35) &&
                                  !_n35.isInline() &&
                                  (v += T));
                            }
                            var N = r.__lexicalSlotTextLength || 0,
                              k = N > 0 ? i.slice(N) : i;
                            return (
                              (r.__lexicalTextContent =
                                k.slice(0, k.length - C) + v),
                              !0
                            );
                          })(t, 0, o, c, _i1, _s8, _f2, a)
                        ) {
                          var _t54 = c.__lexicalTextContent;
                          return (
                            "string" != typeof _t54 && e(353),
                            (Mn = r + _t54),
                            void go(n, c, _u3)
                          );
                        }
                      }
                    }
                    if (0 === a) {
                      var _n36 = t.__first,
                        _o17 = 0;
                      for (; null !== _n36; ) {
                        var _t55 = $n.get(_n36);
                        if (void 0 === _t55) break;
                        var _r16 = Vn || Kn.has(_n36) || Ln.has(_n36),
                          _i12 = In();
                        if (_r16) po(_n36, l);
                        else {
                          var _o18 = void 0,
                            _r17 = void 0;
                          if (Ur(_t55)) {
                            _r17 = Wn.get(_n36);
                            var _i13 = _r17 && _r17.__lexicalTextContent;
                            ("string" != typeof _i13 && e(354, _t55.getType()),
                              (_o18 = _i13));
                          } else _o18 = _t55.getTextContent();
                          ((Mn += _o18), void 0 !== _r17 && Fn(_r17));
                        }
                        (Ni(_t55)
                          ? null === wn &&
                            ((wn = _t55.getFormat()),
                            (An = _t55.getStyle()),
                            (Dn = _t55.__key))
                          : Ur(_t55) &&
                            _o17 < s - 1 &&
                            !_t55.isInline() &&
                            (Mn += T),
                          Pn(_i12),
                          (_n36 = _t55.__next),
                          _o17++);
                      }
                      return (
                        (c.__lexicalTextContent = Mn),
                        (c.__lexicalFirstTextKey = Dn),
                        void (Mn = r + Mn)
                      );
                    }
                  }
                  if (1 === i && 1 === s) {
                    var _e47 = t.__first,
                      _r18 = n.__first;
                    if (_e47 === _r18) po(_e47, l);
                    else {
                      var _t56 = So(_e47),
                        _n37 = co(_r18, null);
                      try {
                        _t56.parentNode === l
                          ? l.replaceChild(_n37, _t56)
                          : o.insertChild(_n37);
                      } catch (o) {
                        if ("object" == typeof o && null != o) {
                          var _i14 =
                            o.toString() +
                            " Parent: " +
                            l.tagName +
                            ", new child: {tag: " +
                            _n37.tagName +
                            " key: " +
                            _r18 +
                            "}, old child: {tag: " +
                            _t56.tagName +
                            ", key: " +
                            _e47 +
                            "}.";
                          throw new Error(_i14);
                        }
                        throw o;
                      }
                      Yn(_e47, null);
                    }
                    var _i15 = $n.get(_r18);
                    Ni(_i15) &&
                      null === wn &&
                      ((wn = _i15.getFormat()),
                      (An = _i15.getStyle()),
                      (Dn = _i15.__key));
                  } else {
                    var _r19 = qc(t, Bn),
                      _c5 = qc(n, $n);
                    if (
                      (_r19.length !== i && e(227),
                      _c5.length !== s && e(228),
                      0 === i)
                    )
                      0 !== s && ao(_c5, n, 0, s - 1, o);
                    else if (0 === s) {
                      if (0 !== i) {
                        var _t57 =
                          null == o.after &&
                          null == o.before &&
                          0 === ro(n).size &&
                          null == o.element.__lexicalLineBreak;
                        (Gn(_r19, 0, i - 1, _t57 ? null : l),
                          _t57 && (l.textContent = ""));
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
                          var _t58 = e[f],
                            _o19 = n[d],
                            _r20 = In();
                          if (_t58 === _o19)
                            ((u = yo(po(_o19, i.element))), f++, d++);
                          else {
                            if ((void 0 === a && (a = mo(n, d)), void 0 === c))
                              c = mo(e, f);
                            else if (!c.has(_t58)) {
                              (f++, Pn(_r20));
                              continue;
                            }
                            if (!a.has(_t58)) {
                              var _e48 = So(_t58);
                              (_e48.parentNode === i.element && (u = yo(_e48)),
                                Yn(_t58, i.element),
                                f++,
                                c["delete"](_t58),
                                Pn(_r20));
                              continue;
                            }
                            if (c.has(_o19)) {
                              var _t59 = sl(En, _o19);
                              (_t59 !== u &&
                                i
                                  .withBefore(u != null ? u : i.before)
                                  .insertChild(_t59),
                                (u = yo(po(_o19, i.element))),
                                f++,
                                d++);
                            } else {
                              var _t60 = co(
                                _o19,
                                i.withBefore(u != null ? u : i.before),
                              );
                              (null !== u &&
                                u.parentNode !== i.element &&
                                (u = yo(_t60)),
                                d++);
                            }
                          }
                          var _s9 = $n.get(_o19);
                          (null !== _s9 && Ni(_s9)
                            ? null === wn &&
                              ((wn = _s9.getFormat()),
                              (An = _s9.getStyle()),
                              (Dn = _s9.__key))
                            : Ur(_s9) && d <= l && !_s9.isInline() && (Mn += T),
                            Pn(_r20));
                        }
                        var h = f > s,
                          g = d > l;
                        if (h && !g) {
                          var _e49 = n[l + 1],
                            _o20 =
                              void 0 === _e49 ? null : En.getElementByKey(_e49);
                          ao(
                            n,
                            t,
                            d,
                            l,
                            i.withBefore(_o20 != null ? _o20 : i.before),
                          );
                        } else g && !h && Gn(e, f, s, i.element);
                      })(n, _r19, _c5, i, s, o);
                  }
                  ((c.__lexicalTextContent = Mn),
                    (c.__lexicalFirstTextKey = Dn),
                    (Mn = r + Mn));
                })(t, n, Zl(n, o, En)),
                xl(n) ||
                  (r &&
                    ((i = n),
                    null == wn ||
                      wn === i.__textFormat ||
                      Jn ||
                      i.setTextFormat(wn),
                    (function (t) {
                      null == An ||
                        An === t.__textStyle ||
                        Jn ||
                        t.setTextStyle(An);
                    })(n))));
            })(o, r, s, o !== r || Ln.has(t)),
            r.isInline() || (Xr(r) || ho(0, r, s), fo(r, s)),
            "" !== _c4)
          ) {
            var _t61 = s.__lexicalTextContent || "";
            ((s.__lexicalTextContent = _c4 + _t61),
              (Mn = _n32 + _c4 + _t61),
              (s.__lexicalSlotTextLength = _c4.length));
          } else
            (ro(r).size > 0 || ro(o).size > 0) &&
              (s.__lexicalSlotTextLength = 0);
          if (Cn(r)) {
            var _t62 = r.getTextContent();
            ((s.__lexicalTextContent = _t62), (Mn = _n32 + _t62));
          }
        } else {
          var _t63 = s.__lexicalTextContent;
          ("string" != typeof _t63 && e(356, o.getType()), (Mn += _t63), Fn(s));
        }
        if (
          (Vn || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (to(s, r), Xr(r) && !Vn)
        )
          for (var _t64 of r.getChildren())
            Ur(_t64) && to(sl(En, _t64.getKey()), _t64);
      } else {
        var _e50 = r.getTextContent();
        if (Yr(r)) {
          var _e51 = r.decorate(En, bn);
          (null !== _e51 && _o(t, _e51),
            i && (ro(r).size > 0 || ro(o).size > 0) && lo(o, r, s));
        }
        Mn += _e50;
      }
      if (!Jn && Xr(r)) {
        var _t65 = r.getLatest();
        if (_t65.__cachedText !== Mn) {
          var _e52 = _t65.getWritable();
          ((_e52.__cachedText = Mn), (r = _e52));
        }
      }
      return (Hn.$decorateDOM(r, o, s, En), Nn(r), s);
    }
    function _o(t, e) {
      var n = En._pendingDecorators;
      var o = En._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = Is(En);
      }
      n[t] = e;
    }
    function yo(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === En._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function mo(t, e) {
      var n = new Set();
      for (var _o21 = e; _o21 < t.length; _o21++) n.add(t[_o21]);
      return n;
    }
    function xo(t, e, n, o, r, i) {
      ((Mn = ""),
        (wn = null),
        (An = null),
        (Dn = null),
        (Vn = 2 === o),
        (En = n),
        (bn = n._config),
        (Hn = n._config.dom || ha),
        (On = n._nodes),
        (Rn = En._listeners.mutation),
        (Ln = r),
        (Kn = i),
        (Bn = t._nodeMap),
        (zn = t),
        ($n = e._nodeMap),
        (Jn = e._readOnly),
        (Wn = qt(n._keyToDOMMap)),
        (jn = (function () {
          var t = new Map(),
            e = function e(_e54) {
              for (var _n38 of _e54) {
                var _e53 = $n.get(_n38);
                if (void 0 === _e53) continue;
                var _o22 = _e53.__parent;
                if (null === _o22) continue;
                var _r21 = t.get(_o22);
                (void 0 === _r21 && ((_r21 = new Set()), t.set(_o22, _r21)),
                  _r21.add(_n38));
              }
            };
          return (e(Ln.keys()), e(Kn), t);
        })()));
      var s = new Map();
      return (
        (Un = s),
        po("root", null),
        (En = void 0),
        (On = void 0),
        (Ln = void 0),
        (Kn = void 0),
        (Bn = void 0),
        (zn = void 0),
        ($n = void 0),
        (bn = void 0),
        (Wn = void 0),
        (jn = void 0),
        (Un = void 0),
        (Hn = ha),
        s
      );
    }
    function So(t) {
      var n = Wn.get(t);
      return (void 0 === n && e(75, t), n);
    }
    function Co(t, n, o) {
      Ma();
      var r = t.__key,
        i = t.getParent();
      if (null === i) return void (null !== ad(t) && e(367, r, String(ad(t))));
      var s = (function (t) {
        var e = Ff();
        if (!nf(e) || !Ur(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          i = o.getNode();
        return (
          hl(r, t) && n.set(t.__key, 0, "element"),
          hl(i, t) && o.set(t.__key, 0, "element"),
          e
        );
      })(t);
      var l = !1;
      if (nf(s) && n) {
        var _e55 = s.anchor,
          _n39 = s.focus;
        (_e55.key === r &&
          (Bf(_e55, t, i, t.getPreviousSibling(), t.getNextSibling()),
          (l = !0)),
          _n39.key === r &&
            (Bf(_n39, t, i, t.getPreviousSibling(), t.getNextSibling()),
            (l = !0)));
      } else rf(s) && n && t.isSelected() && t.selectPrevious();
      (nd(t.getWritable(), n && !l && nf(s) ? s : null),
        o || xl(i) || i.canBeEmpty() || !i.isEmpty() || Co(i, n),
        n && s && Xr(i) && i.isEmpty() && i.selectEnd());
    }
    var vo = Symbol["for"]("ephemeral");
    function To(t) {
      return t[vo] || !1;
    }
    var No = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _ko5 = (function () {
      function ko(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", No),
          Object.defineProperty(this, vn, No),
          Cs(this, t));
      }
      ko.getType = function getType() {
        var _Bc = Bc(this),
          t = _Bc.ownNodeType;
        return (void 0 === t && e(64, this.name), t);
      };
      ko.clone = function clone(t) {
        e(65, this.name);
      };
      var _proto7 = ko.prototype;
      _proto7.$config = function $config() {
        return {};
      };
      _proto7.config = function config(t, e) {
        var _ref35;
        var n = e["extends"] || Xc(this.constructor);
        return (
          Object.assign(e, { extends: n }),
          "string" == typeof t && Object.assign(e, { type: t }),
          (_ref35 = {}),
          (_ref35[t] = e),
          _ref35
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
          var _e56 = Os(t);
          if (null === _e56) break;
          t = null !== _e56.__parent ? _e56.__parent : ad(_e56);
        }
        return !1;
      };
      _proto7.isSelected = function isSelected(t) {
        var e = t || Ff();
        if (null == e) return !1;
        var n = (function (t, e) {
          var n = t.getNodes();
          if (n === t.getCachedNodes()) {
            var _t66 = nc.get(n);
            if (
              (null === _t66
                ? ((_t66 = new Set(
                    n.map(function (t) {
                      return t.__key;
                    }),
                  )),
                  nc.set(n, _t66))
                : void 0 === _t66 && nc.set(n, null),
              _t66)
            )
              return _t66.has(e);
          }
          return n.some(function (t) {
            return t.__key === e;
          });
        })(e, this.__key);
        if (!n || Ni(this)) return n;
        if (
          nf(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t67 = this.getParent();
          if (Yr(this) && this.isInline() && _t67) {
            var _n40 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t67.is(_n40.getNode()) &&
              _n40.offset === _t67.getChildrenSize() &&
              this.is(_t67.getLastChild())
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
        return null === t ? null : Os(t);
      };
      _proto7.getParentOrThrow = function getParentOrThrow() {
        var t = this.getParent();
        return (null === t && e(66, this.__key), t);
      };
      _proto7.getTopLevelElement = function getTopLevelElement() {
        var t = this;
        for (; null !== t; ) {
          var _n41 = t.getParent();
          if (xl(_n41) || null !== ad(t))
            return (Ur(t) || (t === this && Yr(t)) || e(194), t);
          t = _n41;
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
        return null === t ? null : Os(t);
      };
      _proto7.getPreviousSiblings = function getPreviousSiblings() {
        return id(this.getPreviousSibling(), "previous").reverse();
      };
      _proto7.getNextSibling = function getNextSibling() {
        var t = this.getLatest().__next;
        return null === t ? null : Os(t);
      };
      _proto7.getNextSiblings = function getNextSiblings() {
        return id(this.getNextSibling(), "next");
      };
      _proto7.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto7.isBefore = function isBefore(t) {
        var n = ch(this, t);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === ih(n)
              : ("same" !== n.type && "ancestor" !== n.type && e(279), !1)))
        );
      };
      _proto7.isParentOf = function isParentOf(t) {
        return hl(t, this);
      };
      _proto7.getNodesBetween = function getNodesBetween(t) {
        var e = this.isBefore(t),
          n = [];
        var o = this,
          r = !0,
          i = 0;
        for (; null !== o && ((r || 0 === i) && n.push(o), !o.is(t)); ) {
          !r && i > 0 && i--;
          var _t68 =
            r && Ur(o) ? (e ? o.getFirstChild() : o.getLastChild()) : null;
          null !== _t68 && i++;
          var _n42 = _t68 || (e ? o.getNextSibling() : o.getPreviousSibling());
          ((r = null !== _n42), (o = _n42 || o.getParent()));
        }
        return e ? n : n.reverse();
      };
      _proto7.isDirty = function isDirty() {
        var t = Da()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto7.getLatest = function getLatest() {
        if (To(this)) return this;
        var t = Os(this.__key);
        return (null === t && e(442, this.__key, this.__type), t);
      };
      _proto7.getWritable = function getWritable() {
        if (To(this)) return this;
        (Ma(), (rc = null));
        var t = Aa(),
          n = Da(),
          o = this.__key,
          r = n._cloneNotNeeded,
          i = r.get(o),
          s = t._selection;
        if ((null !== s && s.setCachedNodes(null), void 0 !== i))
          return (Ns(i), i);
        var l = t._nodeMap,
          c = l.get(o);
        void 0 === c && e(442, o, this.__type);
        var a = uc(c);
        return (r.set(o, a), l.set(o, a), Ns(a), a);
      };
      _proto7.getTextContent = function getTextContent() {
        return Td(this);
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
        return { element: Ql(t).$createDOM(this, t) };
      };
      _proto7.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = (function (t, e) {
            var n = Cc(Sc(t.constructor)),
              o = n.generated,
              r = n.isCompactDefault,
              i = null === o ? void 0 : e ? o.exportCompactJSON : o.exportJSON;
            return void 0 === i
              ? (function (t, e, n) {
                  var o = n ? { type: t.__type } : {};
                  return (
                    Ur(t) && (o.children = []),
                    (function (t, e, n, o) {
                      for (var _r22 = 0; _r22 < e.length; _r22++) {
                        var _i16 = e[_r22];
                        if (o && _i16.derived) continue;
                        var _s0 = void 0;
                        if ("ownField" === _i16.kind) {
                          var _e57 = Pc(t)[_i16.field];
                          _s0 =
                            void 0 === _i16.getterTable
                              ? _e57
                              : je(_i16.getterTable, _e57)
                                ? _i16.getterTable[_e57]
                                : void 0;
                        } else _s0 = _i16.getter.call(t);
                        ("ownField" === _i16.kind &&
                          void 0 !== _i16.when &&
                          ((!Fc(_i16, _s0) && _i16.when.call(t)) ||
                            (_s0 = void 0)),
                          (o && Fc(_i16, _s0)) || (n[_i16.key] = _s0));
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
      ko.importJSON = function importJSON(t) {
        e(18, this.name);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return Kc(gn(this, t), t);
      };
      ko.transform = function transform() {
        return null;
      };
      _proto7.remove = function remove(t) {
        Co(this, !0, t);
      };
      _proto7.replace = function replace(t, n) {
        Ma();
        var o = Ff();
        (null !== o && (o = o.clone()), vl(this, t));
        var r = this.getLatest(),
          i = this.__key,
          s = ud(r);
        null !== s && e(400, i, r.getType(), s.getKey(), s.getType());
        var l = t.__key,
          c = t.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent();
        nd(c, nf(o) ? o : null);
        var d = r.getPreviousSibling(),
          h = r.getNextSibling();
        (Co(r, !1, !0),
          td(a, c, d && d.getWritable(), h && h.getWritable()),
          (a.__size = null !== f && f.is(a) ? u - 1 : u));
        var g = 0;
        if (
          (n &&
            ((Ur(this) && Ur(c)) || e(139),
            (g = c.getChildrenSize()),
            c.splice(g, 0, this.getChildren())),
          nf(o))
        ) {
          Ks(o);
          for (var _t69 of [o.anchor, o.focus])
            _t69.key === i &&
              (n && "element" === _t69.type
                ? _t69.set(c.__key, g + _t69.offset, "element")
                : qu(_t69, c));
        }
        return (bs() === i && ks(l), c);
      };
      _proto7.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        return od(this, "next", t, e);
      };
      _proto7.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        return od(this, "previous", t, e);
      };
      _proto7.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto7.createParentElementNode = function createParentElementNode() {
        return Gi();
      };
      _proto7.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto7.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto7.selectPrevious = function selectPrevious(t, e) {
        return rd($d(this, "previous"), t, e);
      };
      _proto7.selectNext = function selectNext(t, e) {
        return rd($d(this, "next"), t, e);
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
      return ko;
    })();
    function bo(t) {
      return t instanceof _ko5;
    }
    var Eo = "history-merge",
      Oo = "collaboration",
      Mo = "defer-composition-merge",
      wo = "skip-scroll-into-view",
      Ao = "skip-dom-selection",
      Do = "skip-selection-focus",
      Io = "composition-start",
      Po = "composition-end";
    function Fo(t, e) {
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
              (t && yn(n, t, e)) ||
              (e && yn(n, e, t)) ||
              (t && mn(n, t, e)) ||
              (e && mn(n, e, t))
            );
          })(c, a))
      );
    }
    function Ro(t, e) {
      var n = t.mergeWithSibling(e),
        o = Da()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function Lo(t) {
      var e = t;
      if (Es(e)) return;
      if ("" === e.__text && e.isSimpleText() && !e.isUnmergeable())
        return void e.remove();
      var n = Da(),
        o = n._compositionKey,
        r =
          null !== o &&
          (n._compositionMergeHeld === o || n._updateTags.has(Mo)),
        i = function i(t, e) {
          return !(
            !r ||
            (t.__key !== o && e.__key !== o) ||
            !Fo(t, e) ||
            ((n._compositionMergeHeld = o), 0)
          );
        };
      var s, l;
      for (
        ;
        null !== (s = e.getPreviousSibling()) &&
        Ni(s) &&
        s.isSimpleText() &&
        !s.isUnmergeable() &&
        !Es(s);
      ) {
        if ("" !== s.__text) {
          if (i(s, e)) break;
          if (Fo(s, e)) {
            e = Ro(s, e);
            break;
          }
          break;
        }
        s.remove();
      }
      for (
        ;
        null !== (l = e.getNextSibling()) &&
        Ni(l) &&
        l.isSimpleText() &&
        !l.isUnmergeable() &&
        !Es(l);
      ) {
        if ("" !== l.__text) {
          if (i(e, l)) break;
          if (Fo(e, l)) {
            e = Ro(e, l);
            break;
          }
          break;
        }
        l.remove();
      }
    }
    function Ko(t) {
      return (Bo(t.anchor), Bo(t.focus), t);
    }
    function Bo(t) {
      for (; "element" === t.type; ) {
        var _e58 = t.getNode(),
          _n43 = t.offset;
        var _o23 = void 0,
          _r23 = void 0;
        if (
          (_n43 === _e58.getChildrenSize()
            ? ((_o23 = _e58.getChildAtIndex(_n43 - 1)), (_r23 = !0))
            : ((_o23 = _e58.getChildAtIndex(_n43)), (_r23 = !1)),
          Ni(_o23))
        ) {
          t.set(_o23.__key, _r23 ? _o23.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Ur(_o23)) break;
        t.set(_o23.__key, _r23 ? _o23.getChildrenSize() : 0, "element", !0);
      }
    }
    var zo = new WeakMap();
    function $o(t, e) {
      for (
        var _n44 = t;
        null !== _n44 && _n44 !== e;
        _n44 = Object.getPrototypeOf(_n44)
      ) {
        var _e59 = _n44.prototype;
        if (
          void 0 !== _e59 &&
          Object.prototype.hasOwnProperty.call(_e59, "isInline") &&
          "function" == typeof _e59.isInline &&
          !Wc(_e59.isInline)
        )
          try {
            var _e60 = t.prototype.isInline.call(Object.create(t.prototype));
            return "boolean" == typeof _e60 ? _e60 : null;
          } catch (t) {
            return null;
          }
      }
    }
    function Wo(t) {
      for (var _ref37 of Jc(t)) {
        var _e61 = _ref37.ownNodeConfig;
        if (_e61 && void 0 !== _e61.children) return _e61.children;
      }
    }
    function jo(t) {
      var e = zo.get(t);
      if (void 0 === e) {
        var _n45 = {},
          _o24 = {};
        var _r24 = !1;
        for (var _ref39 of Jc(t)) {
          var _e62 = _ref39.klass;
          var _i17 = _ref39.ownNodeConfig;
          _i17 &&
            (void 0 === _o24.inline &&
              void 0 !== _i17.inline &&
              ((_n45.inline = _i17.inline), (_o24.inline = _e62)),
            void 0 === _o24.children &&
              void 0 !== _i17.children &&
              ((_n45.children = _i17.children), (_o24.children = _e62)),
            _r24 ||
              void 0 === _i17.mergeAdjacent ||
              ((_r24 = !0),
              !1 !== _i17.mergeAdjacent &&
                ((_n45.mergeAdjacent = _i17.mergeAdjacent),
                (_o24.mergeAdjacent = _e62))));
        }
        var _i18 = (function (t) {
          var e = new Set(),
            n = wc(t);
          for (var _t70 of Object.keys(n))
            !0 === n[_t70].derived && e.add(_t70);
          for (var _ref41 of Jc(t)) {
            var _n46 = _ref41.ownNodeConfig;
            {
              var _t71 = _n46 && _n46.stateConfigs;
              if (_t71)
                for (var _n47 of _t71) {
                  var _t72 = _n47 instanceof sn ? _n47 : _n47.stateConfig;
                  _t72.derived && e.add(_t72.key);
                }
            }
          }
          return e;
        })(t);
        (void 0 !== _o24.inline &&
          _o24.inline !== t &&
          void 0 !== $o(t, _o24.inline) &&
          $o(t, _o24.inline) !== _n45.inline &&
          (delete _n45.inline, delete _o24.inline),
          void 0 === _o24.mergeAdjacent ||
            _o24.mergeAdjacent === t ||
            (null ===
              (function (t, e, n) {
                var o = wc(t);
                for (var _t73 of e.by)
                  if ("string" == typeof _t73) {
                    if (!(_t73 in o)) return { entry: _t73, reason: "unknown" };
                    if (n.has(_t73)) return { entry: _t73, reason: "derived" };
                  } else if (_t73.derived)
                    return { entry: String(_t73.key), reason: "derived-state" };
                return null;
              })(t, _n45.mergeAdjacent, _i18) &&
              null ===
                (function (t, e) {
                  if (!Array.isArray(e) || e.includes("inline")) return null;
                  for (var _n48 of e) {
                    if ("inline" === _n48) continue;
                    var _e63 = Wo(_n48);
                    if (
                      !(
                        "inline" === _e63 ||
                        (Array.isArray(_e63) &&
                          _e63.includes("inline") &&
                          _e63.every(function (e) {
                            return (
                              "inline" === e ||
                              e === t ||
                              t.prototype instanceof e
                            );
                          }))
                      )
                    )
                      return _n48;
                  }
                  return null;
                })(t, _n45.children)) ||
            (delete _n45.mergeAdjacent, delete _o24.mergeAdjacent),
          (e = Object.freeze(
            babelHelpers["extends"]({}, _n45, {
              declaredBy: Object.freeze(_o24),
              derived: _i18,
              derivedNames: _i18,
            }),
          )),
          zo.set(t, e));
      }
      return e;
    }
    var Uo = new WeakMap();
    function Ho(t) {
      return (function (t) {
        var e = Uo.get(t);
        if (void 0 === e) {
          e = !1;
          for (var _ref43 of Jc(t)) {
            var _n49 = _ref43.ownNodeConfig;
            var _o25 = _ref43.ownNodeType;
            if (
              void 0 !== _n49 &&
              "overflow" === _o25 &&
              _n49["extends"] === _jr4
            ) {
              e = !0;
              break;
            }
          }
          Uo.set(t, e);
        }
        return e;
      })(t.constructor);
    }
    function Vo(t) {
      if (Ni(t) || sa(t) || Ho(t)) return !0;
      try {
        return t.isInline();
      } catch (t) {
        return !0;
      }
    }
    function Jo(t) {
      return Ni(t) || sa(t) || (Yr(t) && Vo(t));
    }
    function Yo(t, e) {
      if (Ho(e)) return !0;
      if ("inline" === t) return Vo(e);
      if ("block" === t) return !Vo(e);
      if (Vo(e)) return t.includes("inline");
      for (var _n50 of t) if ("inline" !== _n50 && e instanceof _n50) return !0;
      return !1;
    }
    function Go(t) {
      return xl(t) ? "block" : jo(t.constructor).children;
    }
    function qo(t, e) {
      return (
        qi(e) &&
        !e.isShadowRoot() &&
        e.getChildren().every(function (e) {
          return Yo(t, e);
        })
      );
    }
    function Xo(t, e) {
      var n = [];
      for (
        var _o26 = t;
        null !== _o26;
        _o26 = Ur(_o26)
          ? e
            ? _o26.getLastChild()
            : _o26.getFirstChild()
          : null
      )
        n.push(_o26.getKey());
      return n;
    }
    function Qo(t) {
      if ("text" === t.type) return { offset: t.offset, text: t.key };
      var e = t.getNode();
      if (!Ur(e)) return null;
      var n = Math.min(t.offset, e.getChildrenSize()),
        o = n > 0 ? e.getChildAtIndex(n - 1) : null,
        r = e.getChildAtIndex(n);
      if (null !== o && Jo(o)) return { after: !0, keys: [o.getKey()] };
      if (null !== r && Jo(r)) return { after: !1, keys: [r.getKey()] };
      var i = o,
        s = r;
      var l = Go(e);
      if ("inline" === l || (Array.isArray(l) && l.includes("inline"))) {
        for (; null !== i && Zo(i); ) i = i.getPreviousSibling();
        for (; null !== s && Zo(s); ) s = s.getNextSibling();
        null === i && null === s && ((i = o), (s = r));
      }
      return null !== i && Jo(i)
        ? { after: !0, keys: [i.getKey()] }
        : null !== s && Jo(s)
          ? { after: !1, keys: [s.getKey()] }
          : null !== s
            ? { after: !1, keys: Xo(s, !1) }
            : null !== i
              ? { after: !0, keys: Xo(i, !0) }
              : { inside: e.getKey() };
    }
    function Zo(t) {
      if (!Ur(t) || qi(t) || Vo(t)) return !1;
      var _e64 = function e(t) {
        return t.getChildren().some(function (t) {
          return !Ur(t) || _e64(t);
        });
      };
      return !_e64(t);
    }
    var _tr = (function () {
      function tr() {
        this.path = (function () {
          return new Set();
        })();
        this.pathByParent = (function () {
          return new Map();
        })();
        this.touched = (function () {
          return new Set();
        })();
        this.substitutes = (function () {
          return new Map();
        })();
        this.written = (function () {
          return new Set();
        })();
        this.changed = !1;
        this.full = !1;
        this.explicit = !1;
        this.wrapsAll = (function () {
          return new Set();
        })();
        this.childrenCache = (function () {
          return new Map();
        })();
      }
      var _proto8 = tr.prototype;
      _proto8.addPath = function addPath(t) {
        var e = t.getKey();
        this.path.add(e);
        var n = t.getLatest().__parent;
        if (null !== n) {
          var _t74 = this.pathByParent.get(n);
          (void 0 === _t74 &&
            ((_t74 = new Set()), this.pathByParent.set(n, _t74)),
            _t74.add(e));
        }
      };
      _proto8.$children = function $children(t) {
        if (this.full) return t.getChildren();
        var e = t.getKey(),
          n = this.pathByParent.get(e);
        if (void 0 === n) return [];
        var o = this.childrenCache.get(e);
        if (void 0 !== o && o.size === n.size) return o.nodes;
        var r = [];
        for (var _t75 of n) {
          var _n51 = Os(_t75);
          null !== _n51 && _n51.getLatest().__parent === e && r.push(_n51);
        }
        return (this.childrenCache.set(e, { nodes: r, size: n.size }), r);
      };
      _proto8.addPathChain = function addPathChain(t) {
        for (var _e65 = t; null !== _e65; _e65 = _e65.getParent()) {
          var _t76 = _e65.getLatest().__parent,
            _n52 = null === _t76 ? void 0 : this.pathByParent.get(_t76);
          if (void 0 !== _n52 && _n52.has(_e65.getKey())) return;
          this.addPath(_e65);
        }
      };
      _proto8.repath = function repath() {
        for (var _ref45 of Array.from(this.pathByParent)) {
          var _t77 = _ref45[0];
          var _e66 = _ref45[1];
          {
            var _n53 = Os(_t77);
            if (null === _n53 || !_n53.isAttached()) {
              this.pathByParent["delete"](_t77);
              for (var _t78 of _e66) {
                var _e67 = Os(_t78);
                null !== _e67 && _e67.isAttached() && this.addPathChain(_e67);
              }
            }
          }
        }
      };
      _proto8.movePath = function movePath(t, e) {
        var n = this.pathByParent.get(t);
        if (void 0 !== n) {
          this.pathByParent["delete"](t);
          for (var _t79 of n) {
            var _e68 = Os(_t79);
            null !== _e68 && this.addPath(_e68);
          }
        }
        this.addPath(e);
      };
      _proto8.$resolve = function $resolve(t, e) {
        if (e === void 0) {
          e = 0;
        }
        if ("text" in t) {
          var _e69 = Os(t.text);
          return null !== _e69 && _e69.isAttached()
            ? [t.text, t.offset, "text"]
            : null;
        }
        if ("inside" in t) {
          var _n54 = Os(t.inside);
          if (null !== _n54 && _n54.isAttached())
            return [t.inside, 0, "element"];
          var _o27 = this.substitutes.get(t.inside);
          return void 0 !== _o27 && e < 16 ? this.$resolve(_o27, e + 1) : null;
        }
        var n = t.keys,
          o = t.after;
        for (var _t80 = n.length - 1; _t80 >= 0; _t80--) {
          var _r25 = Os(n[_t80]);
          if (
            null === _r25 ||
            !_r25.isAttached() ||
            null === _r25.getParent()
          ) {
            var _o28 = this.substitutes.get(n[_t80]);
            if (void 0 !== _o28 && e < 16) return this.$resolve(_o28, e + 1);
            continue;
          }
          var _i19 = _r25;
          for (var _e70 = 0; _e70 < _t80; _e70++) {
            var _t81 = _i19.getParent();
            if (
              null === _t81 ||
              xl(_t81) ||
              null !== (o ? _i19.getNextSibling() : _i19.getPreviousSibling())
            )
              break;
            _i19 = _t81;
          }
          return Ni(_i19)
            ? [_i19.getKey(), o ? _i19.getTextContentSize() : 0, "text"]
            : [
                _i19.getParentOrThrow().getKey(),
                _i19.getIndexWithinParent() + (o ? 1 : 0),
                "element",
              ];
        }
        return null;
      };
      return tr;
    })();
    function er(t, e) {
      e.length > 0 && _jr4.prototype.splice.call(t, t.getChildrenSize(), 0, e);
    }
    function nr(t) {
      Co(t, !1, !0);
    }
    function or(t, e) {
      if (t.constructor !== e.constructor || !Ur(t) || !Ur(e)) return !1;
      var n = t.constructor,
        o = jo(n),
        r = o.mergeAdjacent;
      if (void 0 === r || o.declaredBy.mergeAdjacent !== n) return !1;
      var i, s;
      for (var _n55 of r.by)
        if ("string" == typeof _n55) {
          ((i = i || t.exportJSON()), (s = s || e.exportJSON()));
          var _o29 = i[_n55],
            _r26 = s[_n55];
          if (_o29 !== _r26 && JSON.stringify(_o29) !== JSON.stringify(_r26))
            return !1;
        } else if (!_n55.isEqual(ln(t, _n55), ln(e, _n55))) return !1;
      return !0;
    }
    function rr(t, e, n) {
      var o = t.getLastChild(),
        r = e.getFirstChild();
      if (
        (n.substitutes.set(
          e.getKey(),
          null !== o ? { after: !0, keys: Xo(o, !0) } : { inside: t.getKey() },
        ),
        er(t, e.getChildren()),
        nr(e),
        n.movePath(e.getKey(), t),
        (n.changed = !0),
        n.written.add(t.getKey()),
        null === o || null === r)
      )
        return;
      if (Ur(o) && or(o, r)) return void rr(o, r, n);
      var i = t.INTERNAL_$afterStructureMerge;
      "function" == typeof i && (i.call(t, o, r), n.full || n.repath());
    }
    function ir(t, e) {
      var n = t;
      for (
        var _t82 = n.getPreviousSibling();
        null !== _t82 && or(_t82, n);
        _t82 = n.getPreviousSibling()
      )
        n = _t82;
      for (
        var _t83 = n.getNextSibling();
        null !== _t83 && or(n, _t83);
        _t83 = n.getNextSibling()
      )
        rr(n, _t83, e);
      return n;
    }
    function sr(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      if (n || e.full)
        for (var _n56 = t.getFirstChild(); null !== _n56; )
          _n56 = ir(_n56, e).getNextSibling();
      else
        for (var _n57 of e.$children(t)) {
          var _o30 = _n57.constructor;
          jo(_o30).declaredBy.mergeAdjacent === _o30 &&
            _n57.getLatest().__parent === t.getKey() &&
            ir(_n57, e);
        }
    }
    function lr(t, e, n) {
      n.changed = !0;
      for (var _e71 of t.getChildren()) nr(_e71);
      var o = [],
        r = [],
        i = [];
      var s = !1;
      for (var _n58 of e) {
        if ("lifted" in _n58) {
          o.push(_n58.lifted);
          continue;
        }
        if (!_n58.hadChildren) continue;
        var _e72 = void 0;
        if (s) {
          _e72 = Sl(t);
          var _n59 = _e72.INTERNAL_$afterStructureSplit;
          "function" == typeof _n59 && _n59.call(_e72, t, i);
        } else ((s = !0), (_e72 = t));
        (er(_e72, _n58.content),
          (_n58.holder = _e72),
          i.push.apply(i, Array.from(_n58.content)),
          o.push(_e72),
          r.push(_e72));
      }
      var l = t.getParentOrThrow();
      n.written.add(l.getKey());
      var c = o.indexOf(t);
      var a = t;
      for (var _t84 = c - 1; _t84 >= 0; _t84--)
        (od(a, "previous", o[_t84], !1), (a = o[_t84]));
      a = t;
      for (var _t85 = c + 1; _t85 < o.length; _t85++)
        (od(a, "next", o[_t85], !1), (a = o[_t85]));
      for (var _t86 of o) (n.addPath(_t86), n.touched.add(_t86.getKey()));
      return (
        -1 === c &&
          (o.length > 0 &&
            n.substitutes.set(t.getKey(), { after: !1, keys: Xo(o[0], !1) }),
          nr(t)),
        r
      );
    }
    function cr(t) {
      var e = t.INTERNAL_$liftsFromStructure;
      return "function" == typeof e ? e : null;
    }
    function ar(t, e, n, o) {
      var r = t.isInline(),
        i = cr(t);
      return n.map(function (n) {
        return Yo(e, n)
          ? null !== i && i.call(t, n, o)
            ? "lift"
            : "keep"
          : !r && qo(e, n)
            ? "join"
            : Vo(n)
              ? "keep"
              : "lift";
      });
    }
    function ur(t, e) {
      var n = t[0],
        o = void 0 === n ? void 0 : Wo(n);
      return e.map(function (e) {
        return Yo(t, e)
          ? "keep"
          : void 0 === n || (void 0 !== o && !Yo(o, e))
            ? void 0 !== n && void 0 !== o && qo(o, e)
              ? "flatten"
              : Vo(e)
                ? "keep"
                : "lift"
            : "wrap";
      });
    }
    function fr(t, e, n) {
      var o = [];
      var r = [];
      var i = function i() {
        if (r.length > 0) {
          var _t87 = Sl(e);
          (od(r[0], "previous", _t87, !1), er(_t87, r), o.push(_t87), (r = []));
        }
      };
      for (var _o31 of t.getChildren())
        !Vo(_o31) || Ho(_o31)
          ? (i(), Ur(_o31) && fr(_o31, e, n))
          : r.push(_o31);
      if ((i(), 0 === o.length)) return;
      ((n.changed = !0), n.written.add(t.getKey()));
      var s = Go(t);
      void 0 !== s &&
        o.some(function (t) {
          return !Yo(s, t);
        }) &&
        _r(t, s, !0, n);
    }
    function dr(t, e) {
      var n = function n(t) {
        return null !== t && !Yo("block", t);
      };
      if (!n(t)) return;
      var o = t;
      for (
        var _t88 = o.getPreviousSibling();
        n(_t88);
        _t88 = o.getPreviousSibling()
      )
        o = _t88;
      var r = [o];
      for (var _t89 = o.getNextSibling(); n(_t89); _t89 = _t89.getNextSibling())
        r.push(_t89);
      var i = o.createParentElementNode();
      (od(o, "previous", i, !1),
        er(i, r),
        (e.changed = !0),
        e.written.add(i.getKey()),
        e.addPath(i),
        e.touched.add(i.getKey()));
    }
    var hr = new WeakMap();
    function gr(t) {
      var e = pr.get(t);
      if (void 0 === e) {
        var _n60 = t.prototype;
        ((e =
          _n60.isShadowRoot !== _jr4.prototype.isShadowRoot ||
          (_n60.isInline !== _jr4.prototype.isInline && !Wc(_n60.isInline))),
          pr.set(t, e));
      }
      return e;
    }
    var pr = new WeakMap();
    function _r(t, e, n, o) {
      if ("block" === e && n && !Tr(t)) return null;
      var r = t.getKey(),
        i = n
          ? t.getChildren()
          : o.$children(t).filter(function (t) {
              return t.getLatest().__parent === r;
            });
      if ("block" === e) {
        for (var _t90 of i) _t90.getLatest().__parent === r && dr(_t90, o);
        return null;
      }
      return "inline" === e || e.includes("inline")
        ? ar(t, e, i, o.explicit).every(function (t) {
            return "keep" === t;
          })
          ? null
          : (function (t, e, n) {
              var o = t.isInline(),
                r = t.getChildren(),
                i = ar(t, e, r, n.explicit);
              if (
                i.every(function (t) {
                  return "keep" === t;
                })
              )
                return [t];
              var s = [],
                l = [];
              var c = { content: [], hadChildren: !1, holder: null },
                a = "none";
              for (var _e73 = 0; _e73 < r.length; _e73++) {
                var _u4 = r[_e73],
                  _f3 = i[_e73];
                if ("lift" === _f3) {
                  (o && Ur(_u4) && fr(_u4, t, n),
                    s.push(c, { lifted: _u4 }),
                    (c = { content: [], hadChildren: !1, holder: null }),
                    (a = "none"));
                  continue;
                }
                if (((c.hadChildren = !0), "join" === _f3)) {
                  var _c$content;
                  ("inline" !== a && "line" !== a) || c.content.push(ia());
                  var _t91 = _u4.getChildren();
                  (0 === _t91.length &&
                    l.push({
                      at: c.content.length,
                      paragraph: _u4,
                      segment: c,
                    }),
                    (_c$content = c.content).push.apply(
                      _c$content,
                      Array.from(_t91),
                    ),
                    (a = "line"));
                  continue;
                }
                var _d4 = Vo(_u4) ? "inline" : "block";
                ("inline" === _d4 && "line" === a && c.content.push(ia()),
                  c.content.push(_u4),
                  (a = _d4));
              }
              s.push(c);
              var u = lr(t, s, n);
              for (var _ref47 of l) {
                var _e74 = _ref47.paragraph;
                var _o32 = _ref47.segment;
                var _r27 = _ref47.at;
                {
                  var _i20 = _r27 > 0 ? _o32.content[_r27 - 1] : void 0,
                    _s1 = _o32.content[_r27];
                  n.substitutes.set(
                    _e74.getKey(),
                    void 0 !== _i20
                      ? { after: !0, keys: Xo(_i20, !0) }
                      : void 0 !== _s1
                        ? { after: !1, keys: Xo(_s1, !1) }
                        : { inside: (_o32.holder || t).getKey() },
                  );
                }
              }
              return u;
            })(t, e, o)
        : ur(e, i).every(function (t) {
              return "keep" === t;
            })
          ? null
          : (function (t, e, n) {
              var o = e[0],
                r = t.getChildren(),
                i = ur(e, r);
              if (
                i.every(function (t) {
                  return "keep" === t;
                })
              )
                return [t];
              var s = [];
              var l = { content: [], hadChildren: !1, holder: null };
              for (var _t92 = 0; _t92 < r.length; _t92++) {
                var _e75 = r[_t92],
                  _c6 = i[_t92];
                if ("lift" !== _c6) {
                  if (((l.hadChildren = !0), "keep" === _c6))
                    l.content.push(_e75);
                  else if ("flatten" === _c6) {
                    var _t93 = Yc(o);
                    (er(_t93, _e75.getChildren()),
                      n.substitutes.set(_e75.getKey(), {
                        inside: _t93.getKey(),
                      }),
                      l.content.push(_t93));
                  } else {
                    var _n61 = [_e75];
                    for (
                      ;
                      Vo(_e75) &&
                      _t92 + 1 < r.length &&
                      "wrap" === i[_t92 + 1] &&
                      Vo(r[_t92 + 1]);
                    )
                      _n61.push(r[++_t92]);
                    var _s10 = Yc(o);
                    (er(_s10, _n61), l.content.push(_s10));
                  }
                } else
                  (s.push(l, { lifted: _e75 }),
                    (l = { content: [], hadChildren: !1, holder: null }));
              }
              return (s.push(l), lr(t, s, n));
            })(t, e, o);
    }
    function yr(t, e) {
      var n = Go(t),
        o =
          void 0 !== n &&
          ((function (t, e) {
            if (null !== cr(t)) return !0;
            if (Xr(t) || !gr(t.constructor)) return e.full;
            var n = t.getLatest(),
              o = (xl(t) ? 1 : 0) + (Vo(t) ? 2 : 0);
            var r = hr.get(n);
            if (void 0 === r) {
              var _e76 = Xl().getEditorState()._nodeMap.get(t.getKey());
              r = void 0 === _e76 ? void 0 : hr.get(_e76);
            }
            return (hr.set(n, o), e.full || r !== o);
          })(t, e) ||
            ("block" === n && e.wrapsAll.has(t.getKey())));
      if (!e.full && !e.pathByParent.has(t.getKey())) {
        if (t.isEmpty() && !xl(t) && mr(t)) return (xr(t, e), !0);
        if (!o) return !1;
      }
      sr(t, e);
      var r = !1;
      for (var _n62 of e.$children(t))
        Ur(_n62) &&
          _n62.getLatest().__parent === t.getKey() &&
          yr(_n62, e) &&
          (r = !0);
      if (t.isEmpty() && !xl(t) && (mr(t) || (r && !t.canBeEmpty())))
        return (xr(t, e), !0);
      var i = void 0 === n ? null : _r(t, n, o, e);
      if (null === i) sr(t, e);
      else for (var _t94 of i) sr(_t94, e, !0);
      return !1;
    }
    function mr(t) {
      return Ho(t) || (Vo(t) && !t.canBeEmpty());
    }
    function xr(t, e) {
      var n = t.getPreviousSibling(),
        o = t.getNextSibling(),
        r = t.getParentOrThrow();
      (e.substitutes.set(
        t.getKey(),
        null !== n
          ? { after: !0, keys: Xo(n, !0) }
          : null !== o
            ? { after: !1, keys: Xo(o, !1) }
            : { inside: r.getKey() },
      ),
        nr(t));
      for (var _t95 of [n, o])
        null !== _t95 && (e.addPath(_t95), e.touched.add(_t95.getKey()));
      ((e.changed = !0), e.written.add(r.getKey()));
    }
    var Sr = new WeakMap();
    function Cr(t, e) {
      if (void 0 === e || !Ur(t)) return !1;
      var n = t.constructor;
      if (
        e.constructor !== n ||
        !(function (t) {
          var e = Sr.get(t);
          return (
            void 0 === e &&
              ((e = !gr(t) && jo(t).declaredBy.mergeAdjacent !== t),
              Sr.set(t, e)),
            e
          );
        })(n)
      )
        return !1;
      var o = t,
        r = e;
      return (
        r.__parent === o.__parent &&
        r.__prev === o.__prev &&
        r.__next === o.__next &&
        r.__first === o.__first &&
        r.__last === o.__last &&
        r.__size === o.__size
      );
    }
    function vr(t) {
      if (!Ur(t)) return !1;
      try {
        return !t.isInline();
      } catch (t) {
        return !1;
      }
    }
    function Tr(t) {
      for (
        var _e77 = t.getFirstChild();
        null !== _e77;
        _e77 = _e77.getNextSibling()
      )
        if (!vr(_e77) && !Yo("block", _e77)) return !0;
      return !1;
    }
    function Nr(t, e) {
      var n = Ff(),
        o = nf(n)
          ? [n.anchor, n.focus].map(function (t) {
              return { anchor: Qo(t), point: t };
            })
          : [];
      e(t);
      for (var _e78 of t.written) {
        var _t96 = Os(_e78);
        if (null !== _t96 && _t96.isAttached())
          for (
            var _e79 = _t96;
            null !== _e79 && !Xr(_e79);
            _e79 = _e79.getParent()
          )
            _e79.markDirty();
      }
      if (t.changed)
        for (var _ref49 of o) {
          var _e80 = _ref49.point;
          var _n63 = _ref49.anchor;
          {
            var _o33 = _n63 && t.$resolve(_n63);
            _o33 && _e80.set(_o33[0], _o33[1], _o33[2]);
          }
        }
    }
    var kr;
    function br(t) {
      return void 0 !== kr && kr.has(t);
    }
    function Er(t) {
      return (
        !!Ur(t) &&
        (xl(t) ||
          ("block" === jo(t.constructor).children &&
            !t.isInline() &&
            (function () {
              var t = Fa();
              return null !== t && br(t);
            })()))
      );
    }
    var Or = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function Mr(t, e) {
      if ("number" == typeof t) return Number.isFinite(t) ? t : e;
      if ("string" != typeof t || !Or.test(t)) return e;
      var n = Number(t);
      return Number.isFinite(n) ? n : e;
    }
    function wr(t, e, n, o, r) {
      var i = Mr(t, e);
      return i >= n && i <= o && Number.isInteger(i) ? i : e;
    }
    var Ar = function Ar(t) {
      var e = Ne(t, "format"),
        n = ke(t, "format"),
        o = Ee(t, "format");
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
            (t.__indent = wr(e.indent, 0, 0, Infinity)),
            (t.__textFormat = Mr(e.textFormat, 0)));
          var s = e.textStyle;
          return ((t.__textStyle = "string" == typeof s ? s : ""), t);
        },
      };
    };
    function Dr(t, e) {
      ((t.__detail = e.__detail),
        (t.__format = e.__format),
        (t.__mode = e.__mode),
        (t.__style = e.__style),
        (t.__text = e.__text));
    }
    var Ir = function Ir(t) {
        var e = Ne(t, "mode"),
          n = be(t, "detail", 0),
          o = be(t, "format", 0),
          r = ke(t, "mode"),
          i = Ee(t, "mode");
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
            t.__detail = "string" == typeof s && s in n ? n[s] : Mr(s, 0);
            var l = e.format;
            t.__format = "string" == typeof l && l in o ? o[l] : Mr(l, 0);
            var c = e.mode;
            t.__mode = "string" == typeof c && c in r ? r[c] : i;
            var a = e.style;
            t.__style = "string" == typeof a ? a : "";
            var u = e.text;
            return ((t.__text = "string" == typeof u ? u : ""), t);
          },
          afterCloneFrom: Dr,
        };
      },
      Pr = function Pr(t) {
        var e = Ne(t, "format"),
          n = ke(t, "format"),
          o = Ee(t, "format");
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
              (t.__indent = wr(e.indent, 0, 0, Infinity)),
              (t.__textFormat = Mr(e.textFormat, 0)));
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
      Rr = function Rr(t) {
        var e = Ne(t, "mode"),
          n = be(t, "format", 0);
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
            t.__format = "string" == typeof o && o in n ? n[o] : Mr(o, 0);
            var r = e.style;
            return ((t.__style = "string" == typeof r ? r : ""), t);
          },
        };
      };
    function Lr() {
      return babelHelpers["extends"]({}, P, { 0: "" });
    }
    function Kr() {
      return babelHelpers["extends"]({}, D, { "": 0 });
    }
    var Br = Lr(),
      zr = Kr(),
      $r = Xe()({
        direction: tn(Ge([null, "ltr", "rtl"]), { field: "__dir" }),
        format: tn(
          Ge(["", "left", "start", "center", "right", "end", "justify"]),
          {
            field: "__format",
            getter: "getFormatType",
            getterTable: Br,
            setter: "setFormat",
            setterTable: zr,
          },
        ),
        indent: tn(Ye(0, { integer: !0, min: 0 }), { field: "__indent" }),
        textFormat: en(Ye(), {
          getter: {
            field: "__textFormat",
            method: "getSerializedTextFormat",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textFormat" },
        }),
        textStyle: en(Ve(), {
          getter: {
            field: "__textStyle",
            method: "getSerializedTextStyle",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textStyle" },
        }),
      });
    function Wr(t) {
      if (xl(t) && !br(Da())) {
        var _e81 = null;
        for (var _n64 of t.getChildren())
          _e81 = _n64.isInline()
            ? (_e81 || _n64.replace(_n64.createParentElementNode())).append(
                _n64,
              )
            : null;
      }
    }
    var _jr4 = (function (_ko) {
      function jr(t) {
        var _this;
        ((_this = _ko.call(this, t) || this),
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
      babelHelpers.inheritsLoose(jr, _ko);
      var _proto9 = jr.prototype;
      _proto9.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: Wr,
          extends: _ko5,
          generated: Ar,
          json: $r,
        });
      };
      _proto9.afterCloneFrom = function afterCloneFrom(t) {
        (_ko.prototype.afterCloneFrom.call(this, t),
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
      _proto9.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto9.getFormatType = function getFormatType() {
        var t = this.getFormat();
        return P[t] || "";
      };
      _proto9.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto9.getIndent = function getIndent() {
        return this.getLatest().__indent;
      };
      _proto9.getChildren = function getChildren() {
        return id(this.getFirstChild(), "next");
      };
      _proto9.getChildrenKeys = function getChildrenKeys() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) (t.push(e.__key), (e = e.getNextSibling()));
        return t;
      };
      _proto9.getChildrenSize = function getChildrenSize() {
        return this.getLatest().__size;
      };
      _proto9.isEmpty = function isEmpty() {
        return 0 === this.getChildrenSize() && 0 === pd(this).length;
      };
      _proto9.isDirty = function isDirty() {
        var t = Da()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto9.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto9.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e82 of pd(this)) {
          var _n65 = _d(this, _e82);
          if (Ur(_n65)) for (var _e83 of _n65.getAllTextNodes()) t.push(_e83);
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((Ni(e) && t.push(e), Ur(e)))
            for (var _n66 of e.getAllTextNodes()) t.push(_n66);
          e = e.getNextSibling();
        }
        return t;
      };
      _proto9.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Ur(t); ) {
          var _e84 = t.getFirstChild();
          if (null === _e84) break;
          t = _e84;
        }
        return t;
      };
      _proto9.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Ur(t); ) {
          var _e85 = t.getLastChild();
          if (null === _e85) break;
          t = _e85;
        }
        return t;
      };
      _proto9.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = t >= this.getChildrenSize(),
          n = e ? this.getLastChild() : this.getChildAtIndex(t);
        return (
          (Ur(n) && (e ? n.getLastDescendant() : n.getFirstDescendant())) || n
        );
      };
      _proto9.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : Os(t);
      };
      _proto9.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var t = this.getFirstChild();
        return (null === t && e(45, this.__key), t);
      };
      _proto9.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : Os(t);
      };
      _proto9.getLastChildOrThrow = function getLastChildOrThrow() {
        var t = this.getLastChild();
        return (null === t && e(96, this.__key), t);
      };
      _proto9.getChildAtIndex = function getChildAtIndex(t) {
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
      _proto9.getTextContent = function getTextContent() {
        var t = Td(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o34 = 0; _o34 < n; _o34++) {
          var _r28 = e[_o34];
          ((t += _r28.getTextContent()),
            Ur(_r28) && _o34 !== n - 1 && !_r28.isInline() && (t += T));
        }
        return t;
      };
      _proto9.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n67 of gd(t).values()) {
            var _t97 = Os(_n67);
            null !== _t97 && (e += _t97.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o35 = 0; _o35 < n; _o35++) {
          var _r29 = e[_o35];
          ((t += _r29.getTextContentSize()),
            Ur(_r29) && _o35 !== n - 1 && !_r29.isInline() && (t += 2));
        }
        return t;
      };
      _proto9.getDirection = function getDirection() {
        return this.getLatest().__dir;
      };
      _proto9.getTextFormat = function getTextFormat() {
        return this.getLatest().__textFormat;
      };
      _proto9.hasFormat = function hasFormat(t) {
        if ("" !== t) {
          var _e86 = D[t];
          return 0 !== (this.getFormat() & _e86);
        }
        return !1;
      };
      _proto9.hasTextFormat = function hasTextFormat(t) {
        var e = w[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto9.getFormatFlags = function getFormatFlags(t, e) {
        return Ss(this.getLatest().__textFormat, t, e);
      };
      _proto9.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto9.select = function select(t, e) {
        Ma();
        var n = Ff();
        var o = t,
          r = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t98 = this.getFirstChild();
            if (Ni(_t98) || Ur(_t98)) return _t98.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t99 = this.getLastChild();
            if (Ni(_t99) || Ur(_t99)) return _t99.select();
          }
        (void 0 === o && (o = i), void 0 === r && (r = i));
        var s = this.__key;
        return nf(n)
          ? (n.anchor.set(s, o, "element"),
            n.focus.set(s, r, "element"),
            (n.dirty = !0),
            n)
          : Of(s, o, s, r, "element", "element");
      };
      _proto9.selectStart = function selectStart() {
        var t = this.getFirstDescendant();
        return t ? t.selectStart() : this.select();
      };
      _proto9.selectEnd = function selectEnd() {
        var t = this.getLastDescendant();
        return t ? t.selectEnd() : this.select();
      };
      _proto9.clear = function clear() {
        var t = this.getWritable();
        return (
          this.getChildren().forEach(function (t) {
            return t.remove();
          }),
          t
        );
      };
      _proto9.append = function append() {
        for (
          var _len4 = arguments.length, t = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          t[_key4] = arguments[_key4];
        }
        return this.splice(this.getChildrenSize(), 0, t);
      };
      _proto9.setDirection = function setDirection(t) {
        var e = this.getWritable();
        return ((e.__dir = t), e);
      };
      _proto9.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = ("" !== t && D[t]) || 0), e);
      };
      _proto9.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t || ""), e);
      };
      _proto9.setTextFormat = function setTextFormat(t) {
        var e = this.getWritable();
        return ((e.__textFormat = t), e);
      };
      _proto9.setTextStyle = function setTextStyle(t) {
        var e = this.getWritable();
        return ((e.__textStyle = t), e);
      };
      _proto9.setIndent = function setIndent(t) {
        var e = this.getWritable();
        return ((e.__indent = t), e);
      };
      _proto9.splice = function splice(t, n, o) {
        To(this) && e(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          i = this.getWritable();
        t + n <= r || e(226, String(t), String(n), String(r));
        for (var _t100 of o);
        var s = i.__key,
          l = [];
        var c = [],
          a = this.getChildAtIndex(t + n),
          u = null,
          f = r - n + o.length;
        if (0 !== t)
          if (t === r) u = this.getLastChild();
          else {
            var _e87 = this.getChildAtIndex(t);
            null !== _e87 && (u = _e87.getPreviousSibling());
          }
        n > 0 &&
          (c = (function (t, n, o, r) {
            var i = [];
            var s = n;
            for (var _t101 = 0; _t101 < o; _t101++) {
              null === s && e(100);
              var _t102 = s.getNextSibling();
              (i.push(s.getWritable()), (s = _t102));
            }
            var l = r && r.getWritable(),
              c = s && s.getWritable();
            return (
              Qf(t, l, c),
              (t.__size -= i.length),
              i.map(function (e) {
                return (
                  Zf(e, t),
                  (e.__prev = null),
                  (e.__next = null),
                  (e.__parent = null),
                  e.__key
                );
              })
            );
          })(i, null === u ? this.getFirstChild() : u.getNextSibling(), n, u));
        var d = o.length > 0 && null !== u ? u.getWritable() : null;
        for (var _t103 of o) {
          (null !== d &&
            _t103.is(d) &&
            ((u = d.getPreviousSibling()), (d = u && u.getWritable())),
            null !== a && _t103.is(a) && (a = a.getNextSibling()));
          var _n68 = _t103.getWritable();
          (_n68.__parent === s && f--, ed(_n68));
          var _o36 = _t103.__key;
          (td(i, _n68, d, a && a.getWritable()),
            _t103.__key === s && e(76),
            l.push(_o36),
            (d = _n68));
        }
        if (((i.__size = f), c.length)) {
          var _t104 = Ff();
          if (nf(_t104)) {
            var _e88 = new Set(c),
              _n69 = new Set(l);
            for (var _o37 of [_t104.anchor, _t104.focus])
              Vr(_o37, _e88, _n69) && Bf(_o37, _o37.getNode(), this, u, a);
            0 !== f || this.canBeEmpty() || xl(this) || this.remove();
          }
        }
        return i;
      };
      _proto9.getDOMSlot = function getDOMSlot(t) {
        return new _ae(t);
      };
      _proto9.exportDOM = function exportDOM(t) {
        var _ko$prototype$exportD = _ko.prototype.exportDOM.call(this, t),
          e = _ko$prototype$exportD.element;
        if (jl(e)) {
          var _t105 = this.getIndent();
          _t105 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t105 + "px"),
            e.setAttribute("data-lexical-indent", String(_t105)));
          var _n70 = this.getDirection();
          _n70 && (e.dir = _n70);
        }
        return { element: e };
      };
      _proto9.shouldSerializeTextStyles = function shouldSerializeTextStyles() {
        return (
          !xl(this) &&
          !(function (t, e) {
            if (e)
              return Hr(
                t,
                (function () {
                  var t = Aa();
                  if (!t._readOnly) {
                    var _e89 = Fa();
                    if (
                      null === _e89 ||
                      _e89._pendingEditorState !== t ||
                      0 !== _e89._dirtyType ||
                      !_e89._editorState._readOnly
                    )
                      return null !== rc && rc.editorState === t
                        ? rc.holds
                        : null;
                    t = _e89._editorState;
                  }
                  var e = oc.get(t);
                  return (void 0 === e && ((e = new Map()), oc.set(t, e)), e);
                })(),
              );
            for (
              var _e90 = t.getFirstChild();
              null !== _e90;
              _e90 = _e90.getNextSibling()
            )
              if (Ni(_e90)) return !0;
            return !1;
          })(this, this.isInline())
        );
      };
      _proto9.getSerializedTextFormat = function getSerializedTextFormat() {
        var t = this.getTextFormat();
        return 0 !== t && this.shouldSerializeTextStyles() ? t : void 0;
      };
      _proto9.getSerializedTextStyle = function getSerializedTextStyle() {
        var t = this.getTextStyle();
        return "" !== t && this.shouldSerializeTextStyles() ? t : void 0;
      };
      _proto9.insertNewAfter = function insertNewAfter(t, e) {
        return null;
      };
      _proto9.canIndent = function canIndent() {
        return !0;
      };
      _proto9.collapseAtStart = function collapseAtStart(t) {
        return !1;
      };
      _proto9.excludeFromCopy = function excludeFromCopy(t) {
        return !1;
      };
      _proto9.canReplaceWith = function canReplaceWith(t) {
        return !0;
      };
      _proto9.canInsertAfter = function canInsertAfter(t) {
        return !0;
      };
      _proto9.canBeEmpty = function canBeEmpty() {
        return !0;
      };
      _proto9.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto9.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto9.isInline = function isInline() {
        return !1;
      };
      _proto9.isShadowRoot = function isShadowRoot() {
        return !1;
      };
      _proto9.canMergeWith = function canMergeWith(t) {
        return !1;
      };
      _proto9.extractWithChild = function extractWithChild(t, e, n) {
        return !1;
      };
      _proto9.canMergeWhenEmpty = function canMergeWhenEmpty() {
        return !1;
      };
      _proto9.reconcileObservedMutation = function reconcileObservedMutation(
        t,
        e,
      ) {
        var _this14 = this;
        e.read("latest", function () {
          var n = Zl(_this14, t, e);
          var o = n.element;
          (n.after && n.after.parentNode !== o && (n = n.withAfter(null)),
            n.before && n.before.parentNode !== o && (n = n.withBefore(null)));
          var r = n.getManagedLineBreak();
          r && n.insertManagedLineBreak("IMG" === r.nodeName);
          var i = n.getFirstChild();
          for (var _t106 of _this14.getChildrenKeys()) {
            var _r30 = e.getElementByKey(_t106);
            if (!_r30) continue;
            var _s11 = void 0,
              _l7 = i;
            for (; _l7 && !(_s11 = As(_l7, e)) && pc(_l7); )
              _l7 = _l7.nextSibling;
            (_l7 !== _r30 &&
              o.insertBefore(_r30, _s11 ? _l7 : i || n.getInsertionAnchor()),
              (i = _r30.nextSibling));
          }
          fo(_this14, t, n);
        });
      };
      return jr;
    })(_ko5);
    function Ur(t) {
      return t instanceof _jr4;
    }
    function Hr(t, e) {
      var n = t.getKey(),
        o = null !== e ? e.get(n) : void 0;
      if (void 0 !== o) return o;
      var r = !1;
      for (
        var _n71 = t.getFirstChild();
        null !== _n71 && !r;
        _n71 = _n71.getNextSibling()
      )
        r = Ni(_n71) || (Ur(_n71) && Hr(_n71, e));
      return (null !== e && e.set(n, r), r);
    }
    function Vr(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t107 = o.__key;
        if (e.has(_t107) && !n.has(_t107)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _Jr = (function (_ko2) {
      function Jr(t) {
        var _this2;
        ((_this2 = _ko2.call(this, t) || this),
          (_this2.__slotHost = null),
          (_this2.__slots = null));
        return _this2;
      }
      babelHelpers.inheritsLoose(Jr, _ko2);
      var _proto0 = Jr.prototype;
      _proto0.afterCloneFrom = function afterCloneFrom(t) {
        (_ko2.prototype.afterCloneFrom.call(this, t),
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
      _proto0.decorate = function decorate(t, e) {
        return null;
      };
      _proto0.isIsolated = function isIsolated() {
        return !1;
      };
      _proto0.isInline = function isInline() {
        return !0;
      };
      _proto0.isKeyboardSelectable = function isKeyboardSelectable() {
        return !0;
      };
      return Jr;
    })(_ko5);
    function Yr(t) {
      return t instanceof _Jr;
    }
    function Gr(t) {
      var e = t.getLatest().__cachedText;
      return null === e || (!Oa() && 0 !== Da()._dirtyType) ? null : e;
    }
    var _qr = (function (_jr) {
      function qr() {
        var _this3;
        ((_this3 = _jr.call(this, "root") || this),
          (_this3.__cachedText = null));
        return _this3;
      }
      babelHelpers.inheritsLoose(qr, _jr);
      var _proto1 = qr.prototype;
      _proto1.$config = function $config() {
        return this.config("root", { extends: _jr4 });
      };
      _proto1.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        e(51);
      };
      _proto1.getTextContent = function getTextContent() {
        var t = Gr(this);
        return null !== t ? t : _jr.prototype.getTextContent.call(this);
      };
      _proto1.getTextContentSize = function getTextContentSize() {
        var t = Gr(this);
        return null !== t
          ? t.length
          : _jr.prototype.getTextContentSize.call(this);
      };
      _proto1.remove = function remove() {
        e(52);
      };
      _proto1.replace = function replace(t) {
        e(53);
      };
      _proto1.insertBefore = function insertBefore(t) {
        e(54);
      };
      _proto1.insertAfter = function insertAfter(t) {
        e(55);
      };
      _proto1.updateDOM = function updateDOM(t, e) {
        return !1;
      };
      _proto1.splice = function splice(t, n, o) {
        for (var _t108 of o) Ur(_t108) || Yr(_t108) || e(282);
        return _jr.prototype.splice.call(this, t, n, o);
      };
      qr.importJSON = function importJSON(t) {
        return Rs().updateFromJSON(t);
      };
      _proto1.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return qr;
    })(_jr4);
    function Xr(t) {
      return t instanceof _qr;
    }
    function Qr(t) {
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
      for (var _f4 = 0; _f4 < a; _f4++) {
        var _a3 = t[_f4];
        if (i) "*" === _a3 && "/" === t[_f4 + 1] && ((i = !1), _f4++);
        else if (s) (-1 === u && (u = _f4), (s = !1));
        else if (null === r) {
          if ("/" !== _a3 || "*" !== t[_f4 + 1]) {
            if ('"' !== _a3 && "'" !== _a3) {
              if ("(" !== _a3) {
                if (")" !== _a3) {
                  if (l || ":" !== _a3 || 0 !== c) {
                    if (";" === _a3 && 0 === c) {
                      -1 !== u &&
                        (l ? (o += t.slice(u, _f4)) : (n += t.slice(u, _f4)),
                        (u = -1));
                      var _r31 = n.trim(),
                        _i21 = o.trim();
                      ("" !== _r31 && "" !== _i21 && (e[_r31] = _i21),
                        (n = ""),
                        (o = ""),
                        (l = !1));
                      continue;
                    }
                    -1 === u && (u = _f4);
                  } else
                    (-1 !== u && ((n += t.slice(u, _f4)), (u = -1)), (l = !0));
                } else (-1 === u && (u = _f4), (c = Math.max(0, c - 1)));
              } else (-1 === u && (u = _f4), c++);
            } else (-1 === u && (u = _f4), (r = _a3));
          } else
            (-1 !== u &&
              (l ? (o += t.slice(u, _f4)) : (n += t.slice(u, _f4)), (u = -1)),
              (i = !0),
              _f4++);
        } else
          (-1 === u && (u = _f4),
            "\\" === _a3 ? (s = !0) : _a3 === r && (r = null));
      }
      -1 !== u && (l ? (o += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = o.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function Zr(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && "!important" === o.slice(r).toLowerCase()
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function ti(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = Qr(n),
        r = Qr(e);
      for (var _e91 in r) (delete o[_e91], Zr(t, _e91, r[_e91]));
      for (var _e92 in o) t.removeProperty(_e92);
    }
    var ei = Xe()({
      detail: tn(Qe(Ye(), A), { field: "__detail" }),
      format: tn(Qe(Ye(), w), { field: "__format" }),
      mode: tn(Ge(["normal", "token", "segmented"]), {
        field: "__mode",
        getterTable: R,
        setterTable: F,
      }),
      style: tn(Ve(), { field: "__style" }),
      text: tn(Ve(), {
        field: "__text",
        getter: "getTextContent",
        setter: "setTextContent",
      }),
    });
    function ni(t, e) {
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
    function oi(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function ri(t, e, n, o, r) {
      var i = o.classList;
      var s = tl(r, "base");
      (void 0 !== s && i.add.apply(i, Array.from(s)),
        (s = tl(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, Array.from(s)))
          : c && i.remove.apply(i, Array.from(s)));
      for (var _t109 in w) {
        var _o38 = w[_t109];
        if (((s = tl(r, _t109)), void 0 !== s))
          if (n & _o38) {
            if (l && ("underline" === _t109 || "strikethrough" === _t109)) {
              e & _o38 && i.remove.apply(i, Array.from(s));
              continue;
            }
            (0 === (e & _o38) ||
              (c && "underline" === _t109) ||
              "strikethrough" === _t109) &&
              i.add.apply(i, Array.from(s));
          } else e & _o38 && i.remove.apply(i, Array.from(s));
      }
      Zs(o, "class");
    }
    function ii(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? v : ""),
        i = Xl(),
        s = Ql(i).$getDOMSlot(n, e, i),
        l = s.getFirstChild();
      if (null === l || l.nodeType !== Node.TEXT_NODE)
        return void s.insertChild(Il().createTextNode(r));
      var c = l,
        a = c.nodeValue;
      if (a !== r)
        if (o || u || y) {
          var _ref50 = (function (t, e) {
              var n = t.length,
                o = e.length;
              var r = 0,
                i = 0;
              for (; r < n && r < o && t[r] === e[r]; ) r++;
              for (; i + r < n && i + r < o && t[n - i - 1] === e[o - i - 1]; )
                i++;
              return [r, n - r - i, e.slice(r, o - i)];
            })(a, r),
            _t110 = _ref50[0],
            _e93 = _ref50[1],
            _n72 = _ref50[2];
          c.replaceData(_t110, _e93, _n72);
        } else c.nodeValue = r;
    }
    function si(t, e, n, o, r, i) {
      ii(r, t, e);
      var s = i.theme.text;
      void 0 !== s && ri(0, 0, o, t, s);
    }
    function li(t, e) {
      var n = Il().createElement(e);
      return (n.appendChild(t), n);
    }
    function ci(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    function ai(t) {
      var e = t._editorState._nodeMap,
        n = Aa(),
        o = n._textEdits || (n._textEdits = new WeakMap());
      var r = o.get(e);
      return (void 0 === r && ((r = []), o.set(e, r)), r);
    }
    var ui = null,
      fi = null;
    function di(t) {
      var e = Da();
      e._recordTextEdits && ai(e).push(["splice", t.__key, 0, 0, t.__text, ""]);
    }
    function hi(t) {
      var e = Da();
      e._recordTextEdits && ai(e).push(["delete", t.__key]);
    }
    var _gi2 = (function (_ko3) {
      function gi(t, e) {
        var _this4;
        if (t === void 0) {
          t = "";
        }
        ((_this4 = _ko3.call(this, e) || this),
          (_this4.__text = t),
          (_this4.__format = 0),
          (_this4.__style = ""),
          (_this4.__mode = 0),
          (_this4.__detail = 0));
        return _this4;
      }
      babelHelpers.inheritsLoose(gi, _ko3);
      var _proto10 = gi.prototype;
      _proto10.$config = function $config() {
        return this.config("text", {
          extends: _ko5,
          generated: Ir,
          importDOM: {
            "#text": function text() {
              return { conversion: xi, priority: 0 };
            },
            b: function b() {
              return { conversion: _i, priority: 0 };
            },
            code: function code() {
              return { conversion: vi, priority: 0 };
            },
            em: function em() {
              return { conversion: vi, priority: 0 };
            },
            i: function i() {
              return { conversion: vi, priority: 0 };
            },
            mark: function mark() {
              return { conversion: vi, priority: 0 };
            },
            s: function s() {
              return { conversion: vi, priority: 0 };
            },
            span: function span() {
              return { conversion: pi, priority: 0 };
            },
            strong: function strong() {
              return { conversion: vi, priority: 0 };
            },
            sub: function sub() {
              return { conversion: vi, priority: 0 };
            },
            sup: function sup() {
              return { conversion: vi, priority: 0 };
            },
            u: function u() {
              return { conversion: vi, priority: 0 };
            },
          },
          json: ei,
        });
      };
      _proto10.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto10.getDetail = function getDetail() {
        return this.getLatest().__detail;
      };
      _proto10.getMode = function getMode() {
        var t = this.getLatest();
        return R[t.__mode];
      };
      _proto10.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto10.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto10.isComposing = function isComposing() {
        return this.__key === bs();
      };
      _proto10.isSegmented = function isSegmented() {
        return 2 === this.getLatest().__mode;
      };
      _proto10.isDirectionless = function isDirectionless() {
        return !!(1 & this.getLatest().__detail);
      };
      _proto10.isUnmergeable = function isUnmergeable() {
        return !!(2 & this.getLatest().__detail);
      };
      _proto10.hasFormat = function hasFormat(t) {
        var e = w[t];
        return 0 !== (this.getFormat() & e);
      };
      _proto10.isSimpleText = function isSimpleText() {
        var t = this.getLatest();
        return "text" === t.__type && 0 === t.__mode;
      };
      _proto10.getTextContent = function getTextContent() {
        return this.getLatest().__text;
      };
      _proto10.getFormatFlags = function getFormatFlags(t, e) {
        return Ss(this.getLatest().__format, t, e);
      };
      _proto10.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto10.isInline = function isInline() {
        return !0;
      };
      _proto10.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = ni(0, n),
          r = oi(0, n),
          i = null === o ? r : o,
          s = Il().createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== o && ((l = Il().createElement(r)), s.appendChild(l)),
          si(l, this, 0, n, this.__text, t));
        var c = this.__style;
        return ("" !== c && ti(s.style, c), s);
      };
      _proto10.updateDOM = function updateDOM(t, n, o) {
        var r = this.__text,
          i = t.__format,
          s = this.__format,
          l = ni(0, i),
          c = ni(0, s),
          a = oi(0, i),
          u = oi(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _t111 = n.firstChild;
          null == _t111 && e(48);
          var _i22 = Il().createElement(u);
          return (si(_i22, this, 0, s, r, o), n.replaceChild(_i22, _t111), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && e(49)),
          ii(r, f, this));
        var d = o.theme.text;
        void 0 !== d && i !== s && ri(0, i, s, f, d);
        var h = t.__style,
          g = this.__style;
        return (h !== g && (ti(n.style, g, h), Zs(n, "style")), !1);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _ko3$prototype$export = _ko3.prototype.exportDOM.call(this, t),
          n = _ko3$prototype$export.element;
        return (
          jl(n) || e(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = li(n, "b")),
          this.hasFormat("italic") && (n = li(n, "i")),
          this.hasFormat("strikethrough") && (n = li(n, "s")),
          this.hasFormat("underline") && (n = li(n, "u")),
          { element: n }
        );
      };
      _proto10.selectionTransform = function selectionTransform(t, e) {};
      _proto10.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? w[t] : t), e);
      };
      _proto10.setDetail = function setDetail(t) {
        var e = this.getWritable();
        return ((e.__detail = "string" == typeof t ? A[t] : t), e);
      };
      _proto10.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t), e);
      };
      _proto10.toggleFormat = function toggleFormat(t) {
        var e = Ss(this.getFormat(), t, null);
        return this.setFormat(e);
      };
      _proto10.toggleDirectionless = function toggleDirectionless() {
        var t = this.getWritable();
        return ((t.__detail ^= 1), t);
      };
      _proto10.toggleUnmergeable = function toggleUnmergeable() {
        var t = this.getWritable();
        return ((t.__detail ^= 2), t);
      };
      _proto10.setMode = function setMode(t) {
        var e = F[t];
        if (this.getLatest().__mode === e) return this;
        var n = this.getWritable();
        return ((n.__mode = e), n);
      };
      _proto10.setTextContent = function setTextContent(t) {
        if (this.getLatest().__text === t) return this;
        var e = this.getWritable();
        return (
          (function (t, e) {
            var n = Da(),
              o = t.__key;
            if (!n._recordTextEdits || ui === o) return;
            var r = t.__text,
              i = fi;
            null !== i &&
            i[0] === o &&
            r.slice(0, i[1]) + i[3] + r.slice(i[1] + i[2]) === e
              ? ai(n).push(["splice", o, i[1], i[2], i[3], r])
              : ai(n).push(["set", o, r, e]);
          })(e, t),
          (e.__text = t),
          e
        );
      };
      _proto10.select = function select(t, e) {
        Ma();
        var n = t,
          o = e;
        var r = Ff(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t112 = i.length;
          (void 0 === n && (n = _t112), void 0 === o && (o = _t112));
        } else ((n = 0), (o = 0));
        if (!nf(r)) return Of(s, n, s, o, "text", "text");
        {
          var _t113 = bs();
          ((_t113 !== r.anchor.key && _t113 !== r.focus.key) || ks(s),
            r.setTextNodeRange(this, n, this, o));
        }
        return r;
      };
      _proto10.selectStart = function selectStart() {
        return this.select(0, 0);
      };
      _proto10.selectEnd = function selectEnd() {
        var t = this.getTextContentSize();
        return this.select(t, t);
      };
      _proto10.spliceText = function spliceText(t, e, n, o) {
        var r = this.getWritable(),
          i = r.__text,
          s = n.length;
        var l = t;
        l < 0 && ((l = s + l), l < 0 && (l = 0));
        var c = Ff();
        if (o && nf(c)) {
          var _e94 = t + s;
          c.setTextNodeRange(r, _e94, r, _e94);
        }
        var a = i.slice(0, l) + n + i.slice(l + e),
          u = Da();
        return (
          u._recordTextEdits &&
            ai(u).push(
              Number.isInteger(l) && Number.isInteger(e) && e >= 0
                ? [
                    "splice",
                    r.__key,
                    Math.min(l, i.length),
                    Math.max(0, Math.min(e, i.length - l)),
                    n,
                    i,
                  ]
                : ["set", r.__key, i, a],
            ),
          (r.__text = a),
          r
        );
      };
      _proto10.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto10.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto10.splitText = function splitText() {
        Ma();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = bs(),
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
        for (var _e95 = 0, _o39 = 0; _e95 < i && _o39 <= l; _o39++) {
          var _r32 = t[_o39];
          _r32 > _e95 && (s.push(n.slice(_e95, _r32)), (_e95 = _r32));
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
          y = null;
        var m = Ff();
        if (nf(m)) {
          var _ref51 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t114 = _ref51[0],
            _e96 = _ref51[1];
          ("text" === _t114.type && _t114.key === o && (_ = _t114),
            "text" === _e96.type && _e96.key === o && (y = _e96));
        }
        if (e.isSegmented())
          ((f = Ti(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = Sn(e, f)),
            (p = !0));
        else {
          var _t115 = ui;
          ui = o;
          try {
            f = e.setTextContent(a);
          } finally {
            ui = _t115;
          }
        }
        var x = [f];
        for (var _t116 = 1; _t116 < c; _t116++) {
          var _n73 = Ti(s[_t116]);
          ((_n73.__format = d),
            (_n73.__style = h),
            (_n73.__detail = g),
            (_n73.__state = Sn(e, _n73)));
          var _i23 = _n73.__key;
          (r === o && ks(_i23), x.push(_n73));
        }
        !(function (t, e, n) {
          var o = Da();
          if (!o._recordTextEdits) return;
          var r = o._editorState._nodeMap,
            i = Aa(),
            s = i._splitNodes || (i._splitNodes = new WeakMap());
          var l = s.get(r);
          void 0 === l && ((l = new Map()), s.set(r, l));
          var c = l.get(t),
            a = [];
          var u = 0;
          for (var _n74 of e)
            (_n74.__key !== t &&
              l.set(_n74.__key, void 0 === c ? [t, u] : [c[0], c[1] + u]),
              a.push(u),
              (u += _n74.__text.length));
          ai(o).push([
            "split",
            t,
            e.map(function (t) {
              return t.__key;
            }),
            a,
            n,
          ]);
        })(o, x, n);
        var S = _ ? _.offset : null,
          C = y ? y.offset : null;
        var v = 0;
        for (var _t117 of x) {
          if (!_ && !y) break;
          var _e97 = v + _t117.getTextContentSize();
          if (
            (null !== _ &&
              null !== S &&
              S <= _e97 &&
              S >= v &&
              (_.set(_t117.getKey(), S - v, "text"), S < _e97 && (_ = null)),
            null !== y && null !== C && C <= _e97 && C >= v)
          ) {
            y.set(_t117.getKey(), C - v, "text");
            break;
          }
          v = _e97;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            (null !== e && Ns(e), null !== n && Ns(n));
          })(this);
          var _t118 = u.getWritable(),
            _e98 = this.getIndexWithinParent();
          (p
            ? (_t118.splice(_e98, 0, x), this.remove())
            : _t118.splice(_e98, 1, x),
            nf(m) && Kf(m, u, _e98, c - 1));
        }
        return x;
      };
      _proto10.mergeWithSibling = function mergeWithSibling(t) {
        var n = t === this.getPreviousSibling();
        n || t === this.getNextSibling() || e(50);
        var o = this.__key,
          r = t.__key,
          i = this.__text,
          s = i.length;
        bs() === r && ks(o);
        var l = Ff();
        if (nf(l)) {
          var _e99 = l.anchor,
            _i24 = l.focus;
          (null !== _e99 && _e99.key === r && zf(_e99, n, o, t, s),
            null !== _i24 && _i24.key === r && zf(_i24, n, o, t, s));
        }
        var c = t.__text,
          a = n ? c + i : i + c,
          u = ui;
        ui = o;
        try {
          this.setTextContent(a);
        } finally {
          ui = u;
        }
        var f = Da();
        f._recordTextEdits && ai(f).push(["merge", o, r, n, i, c]);
        var d = this.getWritable();
        return (t.remove(), d);
      };
      _proto10.isTextEntity = function isTextEntity() {
        return !1;
      };
      return babelHelpers.createClass(gi, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_ko5);
    function pi(t) {
      return { forChild: ki(t.style), node: null };
    }
    function _i(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: ki(e.style, n ? void 0 : "bold"), node: null };
    }
    var yi = new WeakMap();
    function mi(t) {
      if (!jl(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function xi(t) {
      var n = t;
      null === t.parentElement && e(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = yi.get(n)) && !mi(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t119 = 0; _t119 < o.length; _t119++) yi.set(o[_t119], r);
          return r;
        })(n)
      )
        return { node: Hf(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t120 = n,
          _e100 = !0;
        for (; null !== _t120 && null !== (_t120 = Si(_t120, !1)); ) {
          var _n75 = _t120.textContent || "";
          if (_n75.length > 0) {
            (/[ \t\n]$/.test(_n75) && (o = o.slice(1)), (_e100 = !1));
            break;
          }
        }
        _e100 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t121 = n,
          _e101 = !0;
        for (; null !== _t121 && null !== (_t121 = Si(_t121, !0)); )
          if (
            (_t121.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e101 = !1;
            break;
          }
        _e101 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: Ti(o) };
    }
    function Si(t, e) {
      var n = t;
      for (;;) {
        var _t122 = void 0;
        for (; null === (_t122 = e ? n.nextSibling : n.previousSibling); ) {
          var _t123 = n.parentElement;
          if (null === _t123) return null;
          n = _t123;
        }
        if (((n = _t122), jl(n))) {
          var _t124 = n.style.display;
          if (
            ("" === _t124 && !Jl(n)) ||
            ("" !== _t124 && !_t124.startsWith("inline"))
          )
            return null;
        }
        var _o40 = n;
        for (; null !== (_o40 = e ? n.firstChild : n.lastChild); ) n = _o40;
        if (ys(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Ci = {
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
    function vi(t) {
      var e = Ci[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: ki(t.style, e), node: null };
    }
    function Ti(t) {
      if (t === void 0) {
        t = "";
      }
      return Cl(new _gi2(t));
    }
    function Ni(t) {
      return t instanceof _gi2;
    }
    function ki(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        i = o.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign,
        a = t.textTransform;
      return function (t) {
        return Ni(t) || ci(t)
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
    function bi(t, n) {
      var o = t.type,
        r = t.key,
        i = t.offset,
        s = Tl(t.key);
      return "text" === o
        ? (Ni(s) || e(266, s.getType(), r), Wd(s, n, i))
        : (Ur(s) || e(267, s.getType(), r), Bi(s, t.offset, n));
    }
    function Ei(t, n) {
      var o = n.origin,
        r = n.direction,
        i = "next" === r;
      Fd(n)
        ? t.set(o.getKey(), n.offset, "text")
        : Rd(n)
          ? Ni(o)
            ? t.set(o.getKey(), jd(o, r), "text")
            : t.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((Ld(n) && Ur(o)) || e(268),
            t.set(o.getKey(), i ? 0 : o.getChildrenSize(), "element"));
    }
    function Oi(t) {
      var e = Ff(),
        n = nf(e) ? e : Mf();
      return (Mi(n, t), Ks(n), n);
    }
    function Mi(t, e) {
      (Ei(t.anchor, e.anchor), Ei(t.focus, e.focus));
    }
    function wi(t) {
      var e = t.anchor,
        n = t.focus,
        o = bi(e, "next"),
        r = bi(n, "next"),
        i = nh(o, r) <= 0 ? "next" : "previous";
      return th(Xd(o, i), Xd(r, i));
    }
    function Ai(t) {
      var e = t.direction,
        n = t.origin,
        o = $d(n, Ad(e)).getNodeAtCaret();
      return o ? $d(o, e) : Hd(n.getParentOrThrow(), e);
    }
    function Di(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o41 = Ld(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o41;
        _o41 = _o41.getParentCaret(e)
      )
        n.push(Ai(_o41));
      return n;
    }
    function Ii(t) {
      return !!t && t.origin.isAttached();
    }
    function Pi(t, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (t.isCollapsed()) return t;
      var o = "root",
        r = "next";
      var i = n;
      var s = Ki(t, r);
      var l = s.anchor.origin;
      for (; null !== l && !xl(l); ) l = l.getParent();
      var c = Ur(l) ? l.getFirstChild() : null,
        a = Di(s.anchor, o),
        u = Di(s.focus.getFlipped(), o),
        f = new Set(),
        d = [];
      for (var _t125 of s.iterNodeCarets(o))
        if (Ld(_t125)) f.add(_t125.origin.getKey());
        else if (Rd(_t125)) {
          var _e102 = _t125.origin;
          (Ur(_e102) && !f.has(_e102.getKey())) || d.push(_e102);
        }
      var h = new Set();
      for (var _t126 of d) {
        var _e103 = _t126.getParent();
        (null === _e103 || f.has(_e103.getKey()) || h.add(_e103),
          hi(_t126),
          vs(_t126));
      }
      for (var _t127 of h)
        !_t127.canBeEmpty() &&
          !xl(_t127) &&
          _t127.isEmpty() &&
          _t127.isAttached() &&
          _t127.remove();
      for (var _t128 of s.getTextSlices()) {
        if (!_t128) continue;
        var _e104 = _t128.caret.origin,
          _n76 = _e104.getTextContentSize(),
          _o42 = Ai($d(_e104, r)),
          _s12 = _e104.getMode();
        if (
          (Math.abs(_t128.distance) === _n76 && "removeEmptySlices" === i) ||
          ("token" === _s12 && 0 !== _t128.distance)
        )
          (hi(_e104), _o42.remove());
        else if (0 !== _t128.distance) {
          i = "removeEmptySlices";
          var _e105 = _t128.removeTextSlice();
          var _n77 = _t128.caret.origin;
          if ("segmented" === _s12) {
            var _t129 = _e105.origin,
              _n78 = Ti(_t129.getTextContent())
                .setStyle(_t129.getStyle())
                .setFormat(_t129.getFormat())
                .setDetail(_t129.getDetail());
            (xn(_t129, _n78),
              _o42.replaceOrInsert(_n78),
              (_e105 = Wd(_n78, r, _e105.offset)));
          }
          (_n77.is(a[0].origin) && (a[0] = _e105),
            _n77.is(u[0].origin) && (u[0] = _e105.getFlipped()));
        }
      }
      var g = Fi(a),
        p = Fi(u),
        _ = (function (t, e, n) {
          var o = t && t.getParentAtCaret(),
            r = e && e.getParentAtCaret(),
            i = o && r && ch(o, r);
          if (!i || "branch" !== i.type) return null;
          var s = function s(t, e) {
              var o;
              for (
                var _r33 = t;
                _r33 && !_r33.is(i.commonAncestor);
                _r33 = _r33.getParent()
              ) {
                if (xl(_r33)) return;
                (e && !n.has(_r33.__key)) || !ql(_r33) || (o = _r33);
              }
              return o;
            },
            l = s(o, !1),
            c = l && s(r, !0);
          return l && c && 0 === pd(c).length ? [l, c] : null;
        })(g, p, f);
      if (_) {
        var _t130 = _[0],
          _e106 = _[1];
        Hd(_t130, "previous").splice(0, _e106.getChildren());
        var _n79 = _e106.getParent();
        for (_e106.remove(!0); _n79 && _n79.isEmpty(); ) {
          var _t131 = _n79;
          ((_n79 = _n79.getParent()), _t131.remove(!0));
        }
      } else if (p) {
        var _t132 = (function (t) {
            if (Ld(t)) {
              var _e108 = t.origin;
              if (ql(_e108)) return _e108;
            } else {
              var _e109 = t.getParentAtCaret();
              if (_e109 && ql(_e109)) return _e109;
            }
            return null;
          })(p),
          _e107 = _t132 && _t132.getParent(),
          _n80 = _t132 && _t132.getParents().findLast(ml);
        if (
          _t132 &&
          _e107 &&
          !Xr(_e107) &&
          _t132.isEmpty() &&
          f.has(_t132.getKey()) &&
          0 === pd(_t132).length &&
          (!_n80 || f.has(_n80.getKey()))
        ) {
          _t132.remove(!0);
          var _n81 = _e107;
          for (; _n81 && !Xr(_n81) && _n81.isEmpty(); ) {
            var _t133 = _n81.getParent();
            if (
              _t133 &&
              Xr(_t133) &&
              _t133.getChildrenSize() <= 1 &&
              _n81.canBeEmpty()
            )
              break;
            var _e110 = _n81;
            ((_n81 = _t133), _e110.remove(!0));
          }
        }
      }
      null !== Ls(l, c) || null === l || l.isAttached() || Ls(Rs(), null);
      var y = Fi([g, p].concat(Array.from(a), Array.from(u)));
      if (y) return Zd(Xd(y, t.direction));
      e(
        269,
        JSON.stringify(
          a.map(function (t) {
            return t.origin.__key;
          }),
        ),
      );
    }
    function Fi(t) {
      var e = t.find(Ii);
      return e && Ri(e);
    }
    function Ri(t) {
      var e = (function (t) {
          var e = t;
          for (; Ld(e); ) {
            var _t134 = Jd(e);
            if (!Ld(_t134)) break;
            e = _t134;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (Ni(e.origin)) return Fd(e) ? e : Wd(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return Rd(o) && Ni(o.origin) ? Wd(o.origin, n, Ad(n)) : e;
    }
    function Li(t) {
      return Fd(t) && t.offset !== jd(t.origin, t.direction);
    }
    function Ki(t, e) {
      return t.direction === e ? t : th(Xd(t.focus, e), Xd(t.anchor, e));
    }
    function Bi(t, e, n) {
      var o = t.getChildrenSize(),
        r = (e > 0 ? Math.min(Math.ceil(e), o) : 0) - ("next" === n ? 1 : 0),
        i = r < 0 || r >= o ? null : t.getChildAtIndex(r);
      return null === i ? Hd(t, n) : $d(i, n);
    }
    function zi(t) {
      var n = t.origin,
        o = t.offset,
        r = t.direction;
      if (o === jd(n, r)) return t.getSiblingCaret();
      if (o === jd(n, Ad(r))) return Ai(t.getSiblingCaret());
      var _n$splitText = n.splitText(o),
        i = _n$splitText[0];
      return (Ni(i) || e(281), Xd($d(i, "next"), r));
    }
    function $i(t, e) {
      for (var _n82 of t)
        if (null !== _n82 && _n82.caret.origin.is(e)) return _n82;
    }
    function Wi(t, e) {
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
        s = e && i && Lf(e, i) ? n.getIndexWithinParent() : -1,
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
      i && e && e !== Ff() && Kf(e, i, s, c.length - 1);
      for (var _ref53 of l) {
        var _t135 = _ref53[0];
        var _e111 = _ref53[1];
        null !== _e111 && _t135.set(a.__key, _e111, "text");
      }
      return a;
    }
    function ji(t, e) {
      return !0;
    }
    function Ui(t, _temp) {
      var _ref54 = _temp === void 0 ? {} : _temp,
        _ref54$$copyElementNo = _ref54.$copyElementNode,
        e = _ref54$$copyElementNo === void 0 ? Sl : _ref54$$copyElementNo,
        _ref54$$splitTextPoin = _ref54.$splitTextPointCaretNext,
        n = _ref54$$splitTextPoin === void 0 ? zi : _ref54$$splitTextPoin,
        _ref54$rootMode = _ref54.rootMode,
        o = _ref54$rootMode === void 0 ? "shadowRoot" : _ref54$rootMode,
        _ref54$$shouldSplit = _ref54.$shouldSplit,
        r = _ref54$$shouldSplit === void 0 ? ji : _ref54$$shouldSplit,
        _ref54$removeEmptyDes = _ref54.removeEmptyDestination,
        i = _ref54$removeEmptyDes === void 0 ? !1 : _ref54$removeEmptyDes;
      if (Fd(t)) return n(t);
      var s = t.getParentCaret(o);
      if (s) {
        var _n83 = s.origin;
        if (Ld(t)) {
          var _t136 = Ai(s);
          if (i && _n83.isEmpty()) return (_n83.remove(), _t136);
          if (!_n83.canBeEmpty() || !r(_n83, "first")) return _t136;
        }
        var _o43 = id((l = t).getNodeAtCaret(), l.direction);
        (_o43.length > 0 || (!i && _n83.canBeEmpty() && r(_n83, "last"))) &&
          s.insert(e(_n83).splice(0, 0, _o43));
      }
      var l;
      return s;
    }
    function Hi(t, n, o) {
      var r = Xd(n, "next");
      (Fd(r) &&
        (0 === r.offset
          ? (r = $d(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = $d(r.origin, "next"))),
        r.origin.is(t) &&
          (Rd(r) || e(342, t.getKey(), t.getType()), (r = Ai(r))),
        (t.is(r.getNodeAtCaret()) || t.is(r.getFlipped().getNodeAtCaret())) &&
          t.remove(!0));
      var i =
        void 0 === o || void 0 === o.rootMode || "shadowRoot" === o.rootMode;
      for (
        var _t137 = r;
        _t137 &&
        ((r = _t137),
        !i || Fd(r) || !Er(Ld(r) ? r.origin : r.origin.getParent()));
        _t137 = Ui(_t137, o)
      );
      return (
        Fd(r) && e(283),
        r.insert(t.isInline() ? Gi().append(t) : t),
        Xd($d(t.getLatest(), "next"), n.direction)
      );
    }
    function Vi(t, e) {
      var n = Ki(nf(e) ? wi(e) : e, "next"),
        o = dd(n.anchor.origin),
        r = dd(t.getLatest());
      if (null === o ? null !== r : !o.is(r)) return !1;
      var i = Ri(Hd(t, "next")),
        s = Xd(Ri(Hd(t, "previous")), "next");
      return nh(n.anchor, i) <= 0 && nh(n.focus, s) >= 0;
    }
    var _Ji = (function (_jr2) {
      function Ji() {
        return _jr2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Ji, _jr2);
      var _proto11 = Ji.prototype;
      _proto11.$config = function $config() {
        return this.config("paragraph", {
          children: "inline",
          extends: _jr4,
          generated: Pr,
          importDOM: {
            p: function p() {
              return { conversion: Yi, priority: 0 };
            },
          },
        });
      };
      _proto11.createDOM = function createDOM(t) {
        var _e$classList;
        var e = Il().createElement("p"),
          n = tl(t.theme, "paragraph");
        return (
          void 0 !== n &&
            (_e$classList = e.classList).add.apply(_e$classList, Array.from(n)),
          e
        );
      };
      _proto11.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      _proto11.exportDOM = function exportDOM(t) {
        var _jr2$prototype$export = _jr2.prototype.exportDOM.call(this, t),
          e = _jr2$prototype$export.element;
        if (jl(e)) {
          this.isEmpty() && e.append(Il().createElement("br"));
          var _t138 = this.getFormatType();
          _t138 && (e.style.textAlign = _t138);
        }
        return { element: e };
      };
      _proto11.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = _jr2.prototype.exportJSON.call(this, t);
        if (void 0 === e.textFormat || void 0 === e.textStyle) {
          var _n84 = this.getChildren().find(Ni),
            _o44 = _n84 ? _n84.getFormat() : this.getTextFormat(),
            _r34 = _n84 ? _n84.getStyle() : this.getTextStyle();
          ((t && 0 === _o44) || (e.textFormat = _o44),
            (t && "" === _r34) || (e.textStyle = _r34));
        }
        return e;
      };
      _proto11.extractWithChild = function extractWithChild(t, e, n) {
        if (!nf(e)) return !1;
        if (
          "" === this.getFormatType() &&
          0 === this.getIndent() &&
          "" === this.getStyle()
        )
          return !1;
        if (Vi(this, e)) {
          var _t139 = this.getTextContent();
          return "" !== _t139 && e.getTextContent() === _t139;
        }
        return !1;
      };
      _proto11.insertNewAfter = function insertNewAfter(t, e) {
        var n = Gi();
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
      _proto11.collapseAtStart = function collapseAtStart() {
        if (
          this.getChildren().every(function (t) {
            return Ni(t) && !/\S/.test(t.getTextContent());
          })
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Ji;
    })(_jr4);
    function Yi(t) {
      var e = Gi();
      if ((hc(e, t), fc(t, e), "" === e.getFormatType())) {
        var _n85 = t.getAttribute("align");
        _n85 && _n85 && _n85 in D && e.setFormat(_n85);
      }
      return (dc(e, t), { node: e });
    }
    function Gi() {
      return Cl(new _Ji());
    }
    function qi(t) {
      return t instanceof _Ji;
    }
    var Xi = Xe()({
      detail: en(Ye(2), { getter: { field: "__detail" }, setter: null }),
      mode: en(Ge(["normal"]), {
        getter: { field: "__mode", getterTable: { 0: "normal" } },
        setter: null,
      }),
      text: en(Ve("\t"), {
        getter: { field: "__text", method: "getTextContent" },
        setter: null,
      }),
    });
    var _Qi = (function (_gi) {
      function Qi(t) {
        var _this5;
        if (t === void 0) {
          t = void 0;
        }
        ((_this5 = _gi.call(this, "\t", t) || this), (_this5.__detail = 2));
        return _this5;
      }
      babelHelpers.inheritsLoose(Qi, _gi);
      var _proto12 = Qi.prototype;
      _proto12.$config = function $config() {
        return this.config("tab", { extends: _gi2, generated: Rr, json: Xi });
      };
      _proto12.createDOM = function createDOM(t) {
        var _e$classList2;
        var e = _gi.prototype.createDOM.call(this, t),
          n = tl(t.theme, "tab");
        return (
          void 0 !== n &&
            (_e$classList2 = e.classList).add.apply(
              _e$classList2,
              Array.from(n),
            ),
          e
        );
      };
      _proto12.setTextContent = function setTextContent(t) {
        return _gi.prototype.setTextContent.call(this, "\t");
      };
      _proto12.spliceText = function spliceText(t, n, o, r) {
        return (
          ("" === o && 0 === n) || ("\t" === o && 1 === n) || e(286),
          this
        );
      };
      _proto12.setDetail = function setDetail(t) {
        return (2 !== t && e(127), this);
      };
      _proto12.setMode = function setMode(t) {
        return ("normal" !== t && e(128), this);
      };
      _proto12.canInsertTextBefore = function canInsertTextBefore() {
        return !1;
      };
      _proto12.canInsertTextAfter = function canInsertTextAfter() {
        return !1;
      };
      return Qi;
    })(_gi2);
    function Zi() {
      return Cl(new _Qi());
    }
    function ts(t) {
      return t instanceof _Qi;
    }
    var es = null;
    function ns(t) {
      es = t;
    }
    var os = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var rs = 1;
    function is(t, n) {
      var o = ss(t, n);
      return (void 0 === o && e(30, n), o);
    }
    function ss(t, e) {
      return t._nodes.get(e);
    }
    var ls =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function cs(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return ms(e) || Ol(e) ? $l(e) : null;
            })();
      if (!jl(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = Ds(n),
        r = n.nodeName;
      return (
        bo(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == gs(n)))
      );
    }
    function as(t) {
      var e = null === t ? null : Wl(t);
      return Ul(e) && cs(e);
    }
    var us = cs;
    function fs(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        hs(e) === t &&
        t.read("latest", function () {
          return !cs(e);
        })
      );
    }
    function ds(t) {
      return t instanceof _a16;
    }
    function hs(t) {
      var e = t;
      for (; null != e; ) {
        var _t140 = gs(e);
        if (ds(_t140)) return _t140;
        e = ll(e);
      }
      return null;
    }
    function gs(t) {
      return t ? t.__lexicalEditor : null;
    }
    function ps(t) {
      return ts(t) || t.isToken();
    }
    function _s(t) {
      return ps(t) || t.isSegmented();
    }
    function ys(t) {
      return Ul(t) && 3 === t.nodeType;
    }
    function ms(t) {
      return Ul(t) && 9 === t.nodeType;
    }
    function xs(t) {
      var e = t;
      for (; null != e; ) {
        if (ys(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function Ss(t, e, n) {
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
    function Cs(t, e) {
      var n = (function () {
        var t = es;
        return ((es = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (Ma(), wa());
      var o = Da(),
        r = Aa(),
        i = "" + rs++;
      (r._nodeMap.set(i, t),
        Ur(t) ? o._dirtyElements.set(i, !0) : o._dirtyLeaves.add(i),
        o._cloneNotNeeded.set(i, t),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = i));
    }
    function vs(t) {
      ed(null === t.getParent() ? t : t.getWritable());
    }
    var Ts = vs;
    function Ns(t) {
      (wa(), To(t) && e(323, t.__key, t.__type));
      var n = null !== t.__parent ? t.__parent : cd(t) ? t.__slotHost : null,
        o = Aa(),
        r = Da(),
        i = o._nodeMap,
        s = r._dirtyElements;
      null !== n &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t141 = e.get(o);
            if (void 0 === _t141) break;
            (n.set(o, !1),
              (o =
                null !== _t141.__parent
                  ? _t141.__parent
                  : cd(_t141)
                    ? _t141.__slotHost
                    : null));
          }
        })(n, i, s);
      var l = t.__key;
      (0 === r._dirtyType && (r._dirtyType = 1),
        Ur(t) ? s.set(l, !0) : r._dirtyLeaves.add(l));
    }
    function ks(t) {
      Ma();
      var e = Da(),
        n = e._compositionKey;
      if (t !== n) {
        if (
          ((e._compositionKey = t),
          (e._compositionMergeHeld = null),
          null !== n)
        ) {
          var _t142 = Os(n);
          null !== _t142 && _t142.getWritable();
        }
        if (null !== t) {
          var _e112 = Os(t);
          null !== _e112 && _e112.getWritable();
        }
      }
    }
    function bs() {
      return Oa() ? null : Da()._compositionKey;
    }
    function Es(t) {
      return (
        !g && (_ || x) && "" === t.__text && t.__key === Da()._compositionKey
      );
    }
    function Os(t, e) {
      var n = (e || Aa())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function Ms(t, e) {
      var n = As(t, Da());
      return void 0 !== n ? Os(n, e) : null;
    }
    function ws(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function As(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function Ds(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t143 = Ms(n, e);
        if (null !== _t143) return _t143;
        n = ll(n);
      }
      return null;
    }
    function Is(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Ps(t) {
      return t.read(function () {
        return Rs().getTextContent();
      });
    }
    function Fs(t, e) {
      var n = ac(t.getEditorState()),
        o = [];
      for (var _t144 of e) {
        var _e113 = n.get(_t144);
        _e113 && o.push(_e113);
      }
      0 !== o.length &&
        t.update(
          function () {
            for (var _t145 of o)
              for (var _e114 of _t145.keys()) {
                var _t146 = Os(_e114);
                _t146 && _t146.markDirty();
              }
          },
          null === t._pendingEditorState ? { tag: Eo } : void 0,
        );
    }
    function Rs() {
      return Aa()._nodeMap.get("root");
    }
    function Ls(t, e) {
      if (
        !(
          xl(t) &&
          t.isAttached() &&
          (Xr(t) ? 0 === t.getChildrenSize() : t.isEmpty()) &&
          (Xr(t) || (null !== e && ql(e)))
        )
      )
        return null;
      var n = Gi();
      return (t.append(n), n);
    }
    function Ks(t) {
      Ma();
      var e = Aa();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        nf(t) && Da()._slotsUsed && Nf(t)),
        (e._selection = t));
    }
    function Bs(t) {
      (Ma(), xe(Da(), t));
    }
    function zs(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t147 = As(n, e);
          if (void 0 !== _t147) return _t147;
          n = ll(n);
        }
        return null;
      })(t, Da());
      return null === e ? null : Os(e);
    }
    function $s(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Ws(t) {
      var e = [];
      for (var _n86 = t; null !== _n86; _n86 = _n86._parentEditor) e.push(_n86);
      return e;
    }
    var js = 0;
    function Us() {
      return r
        ? Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substring(0, 5)
        : "s" + (++js).toString(36);
    }
    function Hs(t) {
      return ys(t) ? t.nodeValue : null;
    }
    function Vs(t, e, n) {
      var o = bl(pl(e));
      if (null === o) return;
      var r = Rl(o, e._rootElement),
        i = r.anchorNode;
      var s = r.anchorOffset,
        l = r.focusOffset;
      if (null !== i) {
        var _e115 = Hs(i);
        var _o45 = Ds(i);
        if (null !== _e115 && Ni(_o45)) {
          if ((_e115 === v || _e115 === N) && n) {
            var _t148 = n.length;
            ((_e115 = n), (s = _t148), (l = _t148));
          }
          null !== _e115 && Js(_o45, _e115, s, l, t);
        }
      }
    }
    function Js(t, e, n, o, r) {
      var i = t;
      if (i.isAttached() && (r || !i.isDirty())) {
        var _s13 = i.isComposing(),
          _l8 = !g && (_ || x);
        if (i.isToken() && _s13) return;
        var _c7 = e;
        if (
          (_s13 || r) &&
          (!e.endsWith(v) ||
            (_l8 && e === i.getTextContent()) ||
            (_c7 = e.slice(0, -v.length)),
          r && !_l8)
        ) {
          var _t149 = N;
          var _e116;
          for (; -1 !== (_e116 = _c7.indexOf(_t149)); )
            ((_c7 = _c7.slice(0, _e116) + _c7.slice(_e116 + _t149.length)),
              null !== n &&
                n > _e116 &&
                (n = Math.max(_e116, n - _t149.length)),
              null !== o &&
                o > _e116 &&
                (o = Math.max(_e116, o - _t149.length)));
        }
        var _a4 = i.getTextContent();
        if (r || _c7 !== _a4) {
          var _e117 = Ff();
          if ("" === _c7) {
            if (_s13 && !r && _l8) return void Ys(i, "", _e117);
            if ((ks(null), _ || g || x)) i.remove();
            else {
              var _t150 = Da();
              (Ys(i, "", _e117),
                setTimeout(function () {
                  _t150.update(function () {
                    i.isAttached() && "" === i.getTextContent() && i.remove();
                  });
                }, 20));
            }
            return;
          }
          var _a5 = i.getParent(),
            _u5 = Rf(),
            _f5 = i.getTextContentSize(),
            _d5 = bs(),
            _h3 = i.getKey();
          if (
            (i.isToken() && !_s13) ||
            (null !== _d5 && _h3 === _d5 && !_s13) ||
            (nf(_u5) &&
              ((null !== _a5 &&
                !_a5.canInsertTextBefore() &&
                0 === _u5.anchor.offset) ||
                (_u5.anchor.key === t.__key &&
                  0 === _u5.anchor.offset &&
                  !i.canInsertTextBefore() &&
                  !_s13) ||
                (_u5.focus.key === t.__key &&
                  _u5.focus.offset === _f5 &&
                  !i.canInsertTextAfter() &&
                  !_s13)))
          )
            return void i.markDirty();
          if (!nf(_e117) || null === n || null === o)
            return void Ys(i, _c7, _e117);
          if ((_e117.setTextNodeRange(i, n, i, o), i.isSegmented())) {
            var _t151 = Ti(i.getTextContent());
            (i.replace(_t151), (i = _t151));
          }
          Ys(i, _c7, _e117);
        }
      }
    }
    function Ys(t, e, n) {
      if ((t.setTextContent(e), nf(n))) {
        var _e118 = t.getKey();
        var _o46 = !1;
        for (var _r35 of ["anchor", "focus"]) {
          var _i25 = n[_r35];
          "text" === _i25.type &&
            _i25.key === _e118 &&
            ((_i25.offset = jd(t, _i25.offset, "clamp")), (_o46 = !0));
        }
        _o46 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Gs(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function qs(t, e) {
      return (
        Gs(t, e, "altKey") &&
        Gs(t, e, "ctrlKey") &&
        Gs(t, e, "shiftKey") &&
        Gs(t, e, "metaKey")
      );
    }
    function Xs(t) {
      var e = t;
      for (; null !== e; ) {
        var _t152 = e.getParent();
        if (null === _t152) return null;
        if (Xr(_t152)) return e;
        e = _t152;
      }
      return null;
    }
    function Qs(t, e) {
      var n = t.anchor,
        o = t.focus,
        r = n.key,
        i = n.offset,
        s = n.type,
        l = o.key,
        c = o.offset,
        a = o.type;
      if ((Ko(t), !Xr(e))) return t;
      var u = Xs(n.getNode());
      return (
        Ur(u) &&
          u.isShadowRoot() &&
          u.is(Xs(o.getNode())) &&
          (n.set(r, i, s), o.set(l, c, a)),
        t
      );
    }
    function Zs(t, e) {
      "" === t.getAttribute(e) && t.removeAttribute(e);
    }
    function tl(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t153 = uh(r);
        return ((n[e] = _t153), _t153);
      }
      return r;
    }
    function el(t, n, o, r, i) {
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
    function nl(t, e, n) {
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
    function ol(t, e) {
      var n = t.offset;
      if ("element" === t.type) return nl(t.getNode(), e, n);
      {
        var _o47 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o47.getTextContentSize())) {
          var _t154 = e ? _o47.getPreviousSibling() : _o47.getNextSibling();
          return null === _t154
            ? nl(
                _o47.getParentOrThrow(),
                e,
                _o47.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t154;
        }
      }
      return null;
    }
    function rl(t) {
      var e = pl(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function il(t, e) {
      return Ua(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
    }
    function sl(t, n) {
      var o = t._keyToDOMMap.get(n);
      return (void 0 === o && e(75, n), o);
    }
    function ll(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return Ol(n) ? n.host : null;
    }
    function cl(t) {
      return ms(t) ? t : jl(t) ? t.ownerDocument : null;
    }
    function al(t, e) {
      var n = parseFloat(t);
      return isFinite(n) ? (t.endsWith("%") ? (n * e) / 100 : n) : 0;
    }
    function ul(t, e, n, o) {
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
        d = f + al(s.scrollPaddingLeft, r) * a,
        h = f + (r - al(s.scrollPaddingRight, r)) * a;
      var g = n,
        p = Math.max(o, n + 1);
      p - g > h - d && (u ? (g = p - 1) : (p = g + 1));
      var _ = 0;
      if ((g < d ? (_ = g - d) : p > h && (_ = p - h), 0 === _)) return 0;
      var y = e.scrollLeft,
        m = y + _ / a,
        x = _ > 0 ? Math.ceil(m) : Math.floor(m);
      var S = u ? Math.min(0, Math.max(-i, x)) : Math.max(0, Math.min(i, x));
      var C = y * a;
      return (
        Math.abs(S) < Math.abs(y) && g + C >= d && p + C <= h && (S = 0),
        S === y ? 0 : ((e.scrollLeft = S), (e.scrollLeft - y) * a)
      );
    }
    function fl(t) {
      (Ma(), Da()._updateTags.add(t));
    }
    function dl(t) {
      (Ma(), Da()._deferred.push(t));
    }
    function hl(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function gl(t) {
      var e = cl(t);
      return e ? e.defaultView : null;
    }
    function pl(t) {
      var n = t._window;
      return (null === n && e(78), n);
    }
    function _l(t) {
      return (Ur(t) && t.isInline()) || (Yr(t) && t.isInline());
    }
    function yl(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== ad(e) && Ur(e)) return e;
        var _t155 = e.getParentOrThrow();
        if (xl(_t155)) return _t155;
        e = _t155;
      }
      return e;
    }
    function ml(t) {
      return Ur(t) && t.isShadowRoot();
    }
    function xl(t) {
      return Xr(t) || ml(t);
    }
    function Sl(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t, os);
      return (
        Cs(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function Cl(t) {
      var n = Da(),
        o = t.getType(),
        r = ss(n, o);
      void 0 === r && e(200, t.constructor.name, o);
      var i = r.replace,
        s = r.replaceWithKlass;
      if (null !== i) {
        var _n87 = i(t),
          _r36 = _n87.constructor;
        return (
          null !== s
            ? _n87 instanceof s ||
              e(
                201,
                s.name,
                s.getType(),
                _r36.name,
                _r36.getType(),
                t.constructor.name,
                o,
              )
            : (_n87 instanceof t.constructor && _r36 !== t.constructor) ||
              e(202, _r36.name, _r36.getType(), t.constructor.name, o),
          _n87.__key === t.__key &&
            e(203, t.constructor.name, o, _r36.name, _r36.getType()),
          _n87
        );
      }
      return t;
    }
    function vl(t, n) {
      !Xr(t.getParent()) || Ur(n) || Yr(n) || e(99);
    }
    function Tl(t) {
      var n = Os(t);
      return (null === n && e(63, t), n);
    }
    function Nl(t) {
      if (!t || t.isInline()) return !1;
      if (Yr(t)) return !0;
      if (Ur(t)) {
        if (t.isShadowRoot()) {
          var _e119 = t.getParent();
          return !(Ur(_e119) && _e119.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function kl(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function bl(t) {
      return r ? (t || window).getSelection() : null;
    }
    function El(t) {
      var e = gl(t);
      return e ? e.getSelection() : null;
    }
    function Ol(t) {
      return Hl(t) && "host" in t;
    }
    var Ml = [];
    function wl(t) {
      var e = t.getRootNode();
      if (e === t || !Ol(e)) return Ml;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t156 = o.getRootNode();
        if (_t156 === o || !Ol(_t156)) break;
        (n.push(_t156), (o = _t156.host));
      }
      return n;
    }
    function* Al(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t157 = (ms(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o48 = void 0;
        for (; (_o48 = _t157.nextNode()); )
          _o48.shadowRoot && e.push(_o48.shadowRoot);
      }
    }
    function Dl(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function Il() {
      var t = Fa();
      return Dl(null !== t ? t._rootElement : null);
    }
    function Pl(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = wl(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e120 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e120) return _e120;
      } catch (t) {}
      try {
        var _e121 = o.apply(t, n)[0];
        if (void 0 !== _e121) return _e121;
      } catch (t) {}
      return null;
    }
    function Fl(t, e) {
      var n = Pl(t, e);
      if (null !== n) {
        var _t158 = Ll(n);
        if (null !== _t158) return _t158;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function Rl(t, e) {
      var n = Pl(t, e);
      return null === n ? t : Kl(n, Bl(t));
    }
    function Ll(t) {
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
    function Kl(t, e) {
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
    function Bl(t) {
      return t.direction;
    }
    function zl(t) {
      var e = t.getRootNode();
      return ms(e) || Ol(e) ? e.activeElement : null;
    }
    function $l(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t159 = e.shadowRoot.activeElement;
        if (null === _t159) break;
        e = _t159;
      }
      return e;
    }
    function Wl(t) {
      var e = t.target;
      if (
        null !== e &&
        jl(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e122 = t.composedPath();
        if (_e122.length > 0) return _e122[0];
      }
      return e;
    }
    function jl(t) {
      return Ul(t) && 1 === t.nodeType;
    }
    function Ul(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function Hl(t) {
      return Ul(t) && 11 === t.nodeType;
    }
    var Vl =
      /^(a|abbr|acronym|b|bdi|bdo|big|cite|code|data|del|dfn|em|font|i|ins|kbd|label|mark|nobr|output|q|ruby|s|samp|small|span|strike|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Jl(t) {
      return (
        !(!jl(t) || !t.style.display.startsWith("inline")) ||
        Vl.test(t.nodeName)
      );
    }
    var Yl =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Gl(t) {
      return (
        (!jl(t) || !t.style.display.startsWith("inline")) && Yl.test(t.nodeName)
      );
    }
    function ql(t) {
      if (Yr(t) && !t.isInline()) return !0;
      if (!Ur(t) || xl(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || sa(e) || Ni(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Xl() {
      return Da();
    }
    function Ql(t) {
      if (t === void 0) {
        t = Xl();
      }
      return t._config.dom || ha;
    }
    function Zl(t, n, o) {
      if (o === void 0) {
        o = Xl();
      }
      var r = Ql(o).$getDOMSlot(t, n, o);
      return (Ur(t) && (tc(r) || e(344, t.getKey(), t.getType())), r);
    }
    function tc(t) {
      return t instanceof _ae;
    }
    function ec(t, e, n) {
      if (n === void 0) {
        n = Xl();
      }
      return xs(Zl(t, e, n).element);
    }
    var nc = new WeakMap(),
      oc = new WeakMap();
    var rc = null,
      ic = !1;
    function sc(t) {
      if (ic) return t();
      var e = ma;
      ((ic = !0),
        (rc =
          null === e || e._readOnly
            ? null
            : { editorState: e, holds: new Map() }));
      try {
        return t();
      } finally {
        ((ic = !1), (rc = null));
      }
    }
    var lc = new WeakMap(),
      cc = new Map();
    function ac(t) {
      if (!t._readOnly && t.isEmpty()) return cc;
      t._readOnly || e(192);
      var n = lc.get(t);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref56 of t._nodeMap) {
              var _n88 = _ref56[0];
              var _o49 = _ref56[1];
              {
                var _t160 = _o49.__type;
                var _r37 = e.get(_t160);
                (_r37 || ((_r37 = new Map()), e.set(_t160, _r37)),
                  _r37.set(_n88, _o49));
              }
            }
            return e;
          })(t)),
          lc.set(t, n)),
        n
      );
    }
    function uc(t) {
      var e = t.constructor.clone(t, os);
      return (e.afterCloneFrom(t), e);
    }
    function fc(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t161 = parseInt(n, 10);
        if (Number.isFinite(_t161) && _t161 >= 0)
          return void e.setIndent(_t161);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function dc(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function hc(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function gc(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function pc(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function _c(t, e) {
      if (e === void 0) {
        e = Xl();
      }
      var n = e.isEditable(),
        o = n ? "true" : "false";
      (t.getAttribute("contenteditable") !== o && (t.contentEditable = o),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function yc(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (jl(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== As(n, e)) return !1;
        n = ll(n);
      }
      return !1;
    }
    function mc(t, e) {
      return je(t, e) && t[e] !== _ko5[e];
    }
    var xc = new WeakMap();
    function Sc(t) {
      var n = xc.get(t);
      return void 0 !== n
        ? n
        : (function (t) {
            var n =
                null != t.prototype && B in t.prototype
                  ? t.prototype[B]()
                  : void 0,
              o = (function (t) {
                if (!(t === _ko5 || t.prototype instanceof _ko5)) {
                  var _n89 = "<unknown>",
                    _o50 = "<unknown>";
                  try {
                    _n89 = t.getType();
                  } catch (t) {}
                  try {
                    _a16.version && (_o50 = JSON.parse(_a16.version));
                  } catch (t) {}
                  e(290, t.name, _n89, _o50);
                }
                return t === _Jr || t === _jr4 || t === _ko5;
              })(t),
              r = !o && mc(t, "getType") ? t.getType : void 0,
              i = r && !(vc in r) ? r.call(t) : void 0;
            var s,
              l = i;
            if (n)
              if (i) s = n[i];
              else {
                for (var _ref58 of Object.entries(n)) {
                  var _t162 = _ref58[0];
                  var _e123 = _ref58[1];
                  ((l = _t162), (s = _e123));
                }
                if (!s)
                  for (var _t163 of Object.getOwnPropertySymbols(n)) {
                    var _e124 = n[_t163];
                    if (_e124) {
                      s = _e124;
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
            xc.set(t, c);
            try {
              var _n90 = (function (t) {
                  var n = t.prototype,
                    o = new Map(),
                    _Mc = Mc(t),
                    r = _Mc.fieldsBaseFirst;
                  for (var _ref60 of r) {
                    var _i27 = _ref60[0];
                    var _s14 = _ref60[1];
                    {
                      var _r39 = Ic(t, _i27, _s14);
                      if (null === _r39) continue;
                      if (Te(_r39)) {
                        var _n91 = _r39.field;
                        if (
                          ("__proto__" === _n91 && e(430, t.name, _i27),
                          void 0 !== _r39.setterTable)
                        ) {
                          var _n92 = _r39.setterTable,
                            _o51 = _s14.meta;
                          for (var _r40 of "enum" === _o51.kind
                            ? _o51.values
                            : [_s14.defaultValue])
                            je(_n92, String(_r40)) ||
                              e(431, t.name, _i27, JSON.stringify(_r40));
                        }
                        o.set(_i27, {
                          field: _n91,
                          key: _i27,
                          kind: "ownField",
                          schema: _s14,
                          setterTable: _r39.setterTable,
                        });
                        continue;
                      }
                      var _l9 = n[_r39];
                      ("function" != typeof _l9 && e(432, t.name, _i27, _r39),
                        o.set(_i27, {
                          key: _i27,
                          kind: "field",
                          schema: _s14,
                          setter: _l9,
                        }));
                    }
                  }
                  return 0 === o.size ? Tc : [].concat(Array.from(o.values()));
                })(t),
                _r38 = (function (t) {
                  var n = t.prototype,
                    o = new Map();
                  for (var _ref62 of Mc(t).fieldsDerivedFirst) {
                    var _r41 = _ref62[0];
                    var _i28 = _ref62[1];
                    {
                      var _s15 = Dc(t, _r41, _i28);
                      if (null === _s15) continue;
                      if (Te(_s15)) {
                        var _l0 = _s15.field;
                        "__proto__" === _l0 && e(426, t.name, _r41);
                        var _c8 = _s15.when;
                        var _a7 = void 0;
                        if (void 0 !== _c8) {
                          var _o52 = n[_c8];
                          ("function" != typeof _o52 &&
                            e(427, t.name, _r41, _c8),
                            (_a7 = _o52));
                        }
                        o.set(_r41, {
                          defaultValue: _i28.defaultValue,
                          derived: null === _i28.setter,
                          field: _l0,
                          getterTable: _s15.getterTable,
                          isEqual: _i28.isEqual,
                          key: _r41,
                          kind: "ownField",
                          schema: _i28,
                          when: _a7,
                        });
                        continue;
                      }
                      var _l1 = n[_s15];
                      ("function" != typeof _l1 && e(428, t.name, _r41, _s15),
                        o.set(_r41, {
                          defaultValue: _i28.defaultValue,
                          derived: null === _i28.setter,
                          getter: _l1,
                          isEqual: _i28.isEqual,
                          key: _r41,
                          kind: "method",
                          schema: _i28,
                        }));
                    }
                  }
                  return 0 === o.size ? Ac : [].concat(Array.from(o.values()));
                })(t),
                _i26 = Mc(t),
                _a6 = (function (t, e, n) {
                  var o,
                    r = t;
                  for (var _ref64 of Jc(t)) {
                    var _e125 = _ref64.klass;
                    var _n93 = _ref64.ownNodeConfig;
                    _n93 &&
                      void 0 !== _n93.generated &&
                      (void 0 === o
                        ? ((o = _n93.generated), (r = _e125))
                        : _n93.generated === o && (r = _e125));
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
                          for (var _n94 = 0; _n94 < t.getters.length; _n94++) {
                            var _o53 = t.getters[_n94],
                              _r42 = e.getters[_n94];
                            if (
                              _o53.kind !== _r42.kind ||
                              _o53.key !== _r42.key ||
                              _o53.schema !== _r42.schema ||
                              _o53.derived !== _r42.derived ||
                              _o53.isEqual !== _r42.isEqual ||
                              !Object.is(
                                _o53.defaultValue,
                                _r42.defaultValue,
                              ) ||
                              ("ownField" === _o53.kind &&
                                "ownField" === _r42.kind &&
                                (_o53.field !== _r42.field ||
                                  (void 0 === _o53.getterTable) !=
                                    (void 0 === _r42.getterTable)))
                            )
                              return !1;
                          }
                          for (var _n95 = 0; _n95 < t.setters.length; _n95++) {
                            var _o54 = t.setters[_n95],
                              _r43 = e.setters[_n95];
                            if (
                              _o54.kind !== _r43.kind ||
                              _o54.key !== _r43.key ||
                              _o54.schema !== _r43.schema ||
                              ("ownField" === _o54.kind &&
                                "ownField" === _r43.kind &&
                                (_o54.field !== _r43.field ||
                                  (void 0 === _o54.setterTable) !=
                                    (void 0 === _r43.setterTable)))
                            )
                              return !1;
                          }
                          return !0;
                        })(n, Cc(Sc(r)))
                      ? o
                      : null;
                })(t, 0, { getters: _r38, setters: _n90 });
              ((c.compiled = {
                flatStates: _i26.flatStates,
                generated: null === _a6 ? null : _a6(_i26.fields),
                getters: _r38,
                isCompactDefault: Rc(_r38),
                setters: _n90,
              }),
                (function (t, e, n, o) {
                  if (!e && n) {
                    if (!mc(t, "getType")) {
                      var _e126 = t,
                        _o55 = function _o55() {
                          return this !== _e126 ? _ko5.getType.call(this) : n;
                        };
                      ((_o55[vc] = !0), (t.getType = _o55));
                    }
                    if (
                      (mc(t, "clone") ||
                        (t.clone = function (e, n) {
                          ns(e);
                          var o = new t();
                          return (n !== os && o.afterCloneFrom(e), o);
                        }),
                      mc(t, "importJSON") ||
                        (t.importJSON =
                          (o && o.$importJSON) ||
                          (function (t) {
                            return function (e) {
                              var n = Yc(t);
                              return n.updateFromJSON ===
                                _ko5.prototype.updateFromJSON
                                ? (function (t, e) {
                                    return Kc(
                                      t.__state || void 0 !== e[L]
                                        ? gn(t, e)
                                        : t,
                                      e,
                                    );
                                  })(n, e)
                                : n.updateFromJSON(e);
                            };
                          })(t)),
                      !mc(t, "importDOM") && o)
                    ) {
                      var _e127 = o.importDOM;
                      _e127 &&
                        (t.importDOM = function () {
                          return _e127;
                        });
                    }
                    var _e128 = t.prototype;
                    je(_e128, "getTextContent") &&
                      !je(_e128, "getTextContentSize") &&
                      (t.prototype.getTextContentSize =
                        _ko5.prototype.getTextContentSize);
                  }
                })(t, o, l, s),
                (function (t) {
                  var _loop2 = function _loop2() {
                      var e = _ref66.klass;
                      var n = _ref66.ownNodeConfig;
                      {
                        var _t164 = e.prototype;
                        if (je(_t164, "afterCloneFrom")) return 0;
                        var _o56 = Vc(e);
                        if (0 === _o56.length) return 0;
                        var _r44 = Object.getPrototypeOf(_t164),
                          _i29 =
                            n && void 0 !== n.generated
                              ? Cc(Sc(e)).generated
                              : null,
                          _s16 =
                            (null !== _i29 && _i29.afterCloneFrom) ||
                            function (t, e) {
                              var n = t,
                                r = e;
                              for (
                                var _t165 = 0;
                                _t165 < _o56.length;
                                _t165++
                              ) {
                                var _e129 = _o56[_t165];
                                n[_e129] = r[_e129];
                              }
                            };
                        ((_t164.afterCloneFrom = function (t) {
                          (_r44.afterCloneFrom.call(this, t), _s16(this, t));
                        }),
                          (_t164.afterCloneFrom[Uc] = !0));
                      }
                    },
                    _ret;
                  for (var _ref66 of Jc(t)) {
                    _ret = _loop2();
                    if (_ret === 0) continue;
                  }
                })(t),
                (function (t, e) {
                  e &&
                    void 0 !== e.inline &&
                    je(t.prototype, B) &&
                    !Object.prototype.hasOwnProperty.call(
                      t.prototype,
                      "isInline",
                    ) &&
                    Object.defineProperty(t.prototype, "isInline", {
                      configurable: !0,
                      value: e.inline ? zc : $c,
                      writable: !0,
                    });
                })(t, s));
            } catch (e) {
              throw (xc["delete"](t), e);
            }
            return c;
          })(t);
    }
    function Cc(t) {
      var n = t.compiled;
      return (void 0 === n && e(422, t.config.klass.name), n);
    }
    var vc = Symbol("lexical.synthesizedGetType"),
      Tc = [];
    function Nc(t, e, n, o) {
      var r = void 0 === n.method ? o : n.method,
        i = Mc(t).declaredBy.get(e);
      if (void 0 === i) return n;
      var s = t.prototype,
        l = i.prototype;
      return kc(s, l, r) && kc(s, l, o) ? n : r;
    }
    function kc(t, e, n) {
      return t[n] === e[n];
    }
    function bc(t) {
      return "set" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    function Ec(t) {
      return "get" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    var Oc = {
      declaredBy: new Map(),
      fields: new Map(),
      fieldsBaseFirst: [],
      fieldsDerivedFirst: [],
      flatStates: [],
    };
    function Mc(t) {
      var e = Sc(t);
      return (
        void 0 === e.composed &&
          (e.composed = (function (t) {
            var e = [],
              n = [],
              o = [];
            for (var _ref68 of Jc(t)) {
              var _r45 = _ref68.klass;
              var _i30 = _ref68.ownNodeConfig;
              {
                var _t166 = _i30 && _i30.json;
                (n.push(_r45),
                  e.push(
                    _t166 && "node" === _t166.meta.kind
                      ? Object.entries(_t166.meta.fields)
                      : [],
                  ));
                var _s17 = [];
                if (_i30 && _i30.stateConfigs)
                  for (var _t167 of _i30.stateConfigs)
                    "stateConfig" in _t167 &&
                      _t167.flat &&
                      _s17.push(_t167.stateConfig);
                o.push(_s17);
              }
            }
            var r = new Map();
            for (var _t168 = 0; _t168 < e.length; _t168++)
              for (var _ref70 of e[_t168]) {
                var _n96 = _ref70[0];
                var _o57 = _ref70[1];
                r.has(_n96) || r.set(_n96, _o57);
              }
            var i = new Map(),
              s = new Map(),
              l = new Map();
            for (var _t169 = e.length - 1; _t169 >= 0; _t169--) {
              for (var _ref72 of e[_t169]) {
                var _o58 = _ref72[0];
                var _l10 = _ref72[1];
                {
                  var _e130 = r.get(_o58);
                  (void 0 === _e130 || i.has(_o58) || i.set(_o58, _e130),
                    void 0 === _e130 ||
                      _l10 !== _e130 ||
                      s.has(_o58) ||
                      s.set(_o58, n[_t169]));
                }
              }
              for (var _e131 of o[_t169])
                l.has(_e131.key) || l.set(_e131.key, _e131);
            }
            return 0 === r.size && 0 === l.size
              ? Oc
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
    function wc(t) {
      var _Mc2 = Mc(t),
        e = _Mc2.fieldsDerivedFirst,
        n = _Mc2.flatStates,
        o = {};
      for (var _t170 of n) _t170.schema && (o[_t170.key] = _t170.schema);
      for (var _ref74 of e) {
        var _t171 = _ref74[0];
        var _n97 = _ref74[1];
        o[_t171] = _n97;
      }
      return o;
    }
    var Ac = [];
    function Dc(t, e, n) {
      var o = n.getter;
      if (null === o) return null;
      var r = void 0 === o ? Ec(e) : o;
      return Te(r) ? Nc(t, e, r, Ec(e)) : r;
    }
    function Ic(t, e, n) {
      var o = n.setter;
      if (null === o) return null;
      var r = void 0 === o ? bc(e) : o;
      return Te(r) ? Nc(t, e, r, bc(e)) : r;
    }
    function Pc(t) {
      return t;
    }
    function Fc(t, e) {
      var n = t.defaultValue,
        o = t.isEqual;
      return void 0 === e || e === n || (void 0 !== o && o(e, n));
    }
    function Rc(t) {
      var e;
      return function (n, o) {
        void 0 === e &&
          (e = new Map(
            t.map(function (t) {
              return [t.key, t];
            }),
          ));
        var r = e.get(n);
        return void 0 !== r && Fc(r, o);
      };
    }
    function Lc(t) {
      var e = t.setterTable,
        n = t.schema,
        o = n.defaultValue;
      return void 0 === e ? o : e[String(o)];
    }
    function Kc(t, e) {
      var n = Sc(t.constructor),
        _Cc = Cc(n),
        o = _Cc.flatStates,
        r = _Cc.generated,
        i = _Cc.setters,
        s = (function (t, e, n) {
          var o = t;
          var _loop3 = function _loop3() {
            var r = n[_t172],
              i = e[r.key];
            if (void 0 !== i) {
              var _t173 = r.parse(i);
              o = cn(o, r, function () {
                return _t173;
              });
            }
          };
          for (var _t172 = 0; _t172 < n.length; _t172++) {
            _loop3();
          }
          return o;
        })(t, e, o);
      return null !== r && void 0 !== r.updateFromJSON
        ? r.updateFromJSON(s, e)
        : (function (t, e, n) {
            for (var _o59 = 0; _o59 < n.length; _o59++) {
              var _r46 = n[_o59],
                _i31 = _r46.schema(e[_r46.key]);
              "ownField" === _r46.kind
                ? (Pc(t)[_r46.field] =
                    void 0 === _r46.setterTable
                      ? _i31
                      : je(_r46.setterTable, _i31)
                        ? _r46.setterTable[_i31]
                        : Lc(_r46))
                : _r46.setter.call(t, _i31);
            }
            return t;
          })(s, e, i);
    }
    function Bc(t) {
      return Sc(t).config;
    }
    function zc() {
      return !0;
    }
    function $c() {
      return !1;
    }
    function Wc(t) {
      return t === zc || t === $c;
    }
    function jc(t) {
      var e = [];
      for (var _n98 of [t.getter, t.setter])
        Te(_n98) &&
          "__proto__" !== _n98.field &&
          !e.includes(_n98.field) &&
          e.push(_n98.field);
      return e;
    }
    var Uc = "__lexicalSynthesizedAfterCloneFrom";
    function Hc(t) {
      var _Mc3 = Mc(t),
        e = _Mc3.declaredBy,
        n = _Mc3.fieldsBaseFirst,
        o = [];
      for (var _ref76 of n) {
        var _r47 = _ref76[0];
        var _i32 = _ref76[1];
        if (e.get(_r47) === t)
          for (var _t174 of jc(_i32)) o.includes(_t174) || o.push(_t174);
      }
      return o;
    }
    function Vc(t) {
      var e = Hc(t);
      if (0 === e.length) return e;
      var n = new Set();
      for (var _ref78 of Jc(t)) {
        var _e132 = _ref78.klass;
        if (_e132 !== t) for (var _t175 of Hc(_e132)) n.add(_t175);
      }
      return 0 === n.size
        ? e
        : e.filter(function (t) {
            return !n.has(t);
          });
    }
    function* Jc(t) {
      for (var _e133 = t; _e133 && (_e133 === _ko5 || bo(_e133.prototype)); ) {
        var _t176 = Bc(_e133),
          _n99 = _t176.declaresOwnConfig;
        (yield _n99
          ? _t176
          : babelHelpers["extends"]({}, _t176, { ownNodeConfig: void 0 }),
          (_e133 =
            (_n99 && _t176.ownNodeConfig && _t176.ownNodeConfig["extends"]) ||
            Xc(_e133)));
      }
    }
    function Yc(t) {
      var e = Xl();
      Ma();
      var n = e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t)),
        o = new n.klass();
      return null === n.replace ? o : Cl(o);
    }
    var Gc = function Gc(t, e) {
      var n = t;
      for (; null != n && !Xr(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function qc(t, n) {
      var o = [];
      var r = t.__first;
      for (; null !== r; ) {
        var _t177 = null === n ? Os(r) : n.get(r);
        (null == _t177 && e(174), o.push(r), (r = _t177.__next));
      }
      return o;
    }
    function Xc(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    function Qc(t) {
      return new _ea(qt(t._nodeMap), null, t._slotsUsed);
    }
    function Zc() {
      return new _ea(new Map([["root", new _qr()]]), null, !1);
    }
    function ta(t) {
      var n = t.constructor,
        o = ee(t);
      if (Ur(t)) {
        var _e134 = o.children,
          _n100 = t.getChildren();
        for (var _t178 = 0; _t178 < _n100.length; _t178++)
          _e134.push(ta(_n100[_t178]));
      }
      var r = pd(t);
      if (r.length > 0) {
        var _i33 = {};
        for (var _o60 of r) {
          var _r48 = _d(t, _o60);
          (null === _r48 && e(366, n.name, _o60), (_i33[_o60] = ta(_r48)));
        }
        o.$slots = _i33;
      }
      return o;
    }
    var _ea = (function () {
      function ea(t, e, n) {
        if (e === void 0) {
          e = null;
        }
        if (n === void 0) {
          n = !1;
        }
        ((this._nodeMap = t),
          (this._movedNodes = null),
          (this._splitNodes = null),
          (this._textEdits = null),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1),
          (this._parsed = !1),
          (this._slotsUsed = n));
      }
      var _proto13 = ea.prototype;
      _proto13.isEmpty = function isEmpty() {
        return this._nodeMap.size <= 1 && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return za((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new ea(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), (e._parsed = this._parsed), e);
      };
      _proto13.toJSON = function toJSON(t) {
        var _this15 = this;
        return Zt("boolean" == typeof t && t, function () {
          return za(null, _this15, function () {
            return sc(function () {
              return { root: ta(Rs()) };
            });
          });
        });
      };
      return ea;
    })();
    var _na = (function (_jr3) {
      function na() {
        return _jr3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(na, _jr3);
      var _proto14 = na.prototype;
      _proto14.$config = function $config() {
        return this.config("artificial", { extends: _jr4 });
      };
      _proto14.createDOM = function createDOM(t) {
        return Il().createElement("div");
      };
      return na;
    })(_jr4);
    var _oa = (function (_ko4) {
      function oa() {
        return _ko4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(oa, _ko4);
      var _proto15 = oa.prototype;
      _proto15.$config = function $config() {
        return this.config("linebreak", {
          extends: _ko5,
          generated: Fr,
          importDOM: {
            br: function br(t) {
              return la(t) || ca(t) ? null : { conversion: ra, priority: 0 };
            },
          },
        });
      };
      _proto15.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto15.createDOM = function createDOM() {
        return Il().createElement("br");
      };
      _proto15.updateDOM = function updateDOM() {
        return !1;
      };
      _proto15.isInline = function isInline() {
        return !0;
      };
      return oa;
    })(_ko5);
    function ra(t) {
      return { node: ia() };
    }
    function ia() {
      return Cl(new _oa());
    }
    function sa(t) {
      return t instanceof _oa;
    }
    function la(t) {
      var e = t.parentElement;
      if (null !== e && Gl(e)) {
        var _n101 = e.firstChild;
        if (_n101 === t || (_n101.nextSibling === t && aa(_n101))) {
          var _n102 = e.lastChild;
          if (_n102 === t || (_n102.previousSibling === t && aa(_n102)))
            return !0;
        }
      }
      return !1;
    }
    function ca(t) {
      var e = t.parentElement;
      if (null !== e && Gl(e)) {
        var _n103 = e.firstChild;
        if (_n103 === t || (_n103.nextSibling === t && aa(_n103))) return !1;
        var _o61 = e.lastChild;
        if (_o61 === t || (_o61.previousSibling === t && aa(_o61))) return !0;
      }
      return !1;
    }
    function aa(t) {
      return ys(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function ua(t) {
      console.warn(t);
    }
    function fa(t, e, n, o, r) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = Zc()),
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
        null !== e && hu(t, e),
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
          ((n.textContent = ""), i.set("root", n), ws(n, t, "root")));
    }
    function da(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref80 of Jc(t)) {
        var _o62 = _ref80.klass;
        var _r49 = _ref80.ownNodeConfig;
        {
          var _t179 = _o62.transform;
          if (!n.has(_t179)) {
            n.add(_t179);
            var _r50 = _o62.transform();
            _r50 && e.add(_r50);
          }
          if (_r49) {
            var _t180 = _r49.$transform;
            _t180 && e.add(_t180);
          }
        }
      }
      return e;
    }
    var ha = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = ss(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return Ur(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Ur(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function ga(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function pa(t, e, n) {
      return (t.set(e, n), ga.bind(null, t, e));
    }
    var _a16 = (function () {
      function _a(t, e, n, o, r, i, s, l, c) {
        ((this._createEditorArgs = c),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._compositionMergeHeld = null),
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
          (this._key = Us()),
          (this._onError = r),
          (this._onWarn = i),
          (this._htmlConversions = s),
          (this._editable = l),
          (this._headless = null !== e && e._headless),
          (this._recordNodeMoves = !1),
          (this._recordTextEdits = !1),
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
      var _proto16 = _a.prototype;
      _proto16.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto16.registerUpdateListener = function registerUpdateListener(t) {
        return pa(this._listeners.update, t);
      };
      _proto16.registerEditableListener = function registerEditableListener(t) {
        return pa(this._listeners.editable, t);
      };
      _proto16.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return pa(this._listeners.decorator, t);
      };
      _proto16.registerTextContentListener =
        function registerTextContentListener(t) {
          return pa(this._listeners.textcontent, t);
        };
      _proto16.registerRootListener = function registerRootListener(t) {
        var _this16 = this;
        var e = this._listeners.root;
        return qa(pa(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var o = t.get(e);
            (o && o(), t.set(e, e.apply(void 0, Array.from(n)) || void 0));
          })(e, t, [null, _this16._rootElement]);
        });
      };
      _proto16.registerCommand = function registerCommand(t, n, o) {
        void 0 === o && e(35);
        var r = this._commands;
        r.has(t) ||
          r.set(t, [new _Yt(), new _Yt(), new _Yt(), new _Yt(), new _Yt()]);
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
      _proto16.registerMutationListener = function registerMutationListener(
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
      _proto16.getRegisteredNode = function getRegisteredNode(t) {
        var n = this._nodes.get(t.getType());
        return (void 0 === n && e(37, t.name), n);
      };
      _proto16.resolveRegisteredNodeAfterReplacements =
        function resolveRegisteredNodeAfterReplacements(t) {
          for (; t.replaceWithKlass; )
            t = this.getRegisteredNode(t.replaceWithKlass);
          return t;
        };
      _proto16.initializeMutationListener = function initializeMutationListener(
        t,
        e,
      ) {
        var n = this._editorState,
          o = ac(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t181 of o.keys()) r.set(_t181, "created");
        r.size > 0 &&
          t(r, {
            dirtyLeaves: new Set(),
            prevEditorState: n,
            updateTags: new Set(["registerMutationListener"]),
          });
      };
      _proto16.registerNodeTransformToKlass =
        function registerNodeTransformToKlass(t, e) {
          var n = this.getRegisteredNode(t);
          return (n.transforms.add(e), n);
        };
      _proto16.registerNodeTransform = function registerNodeTransform(t, e) {
        var n = this.registerNodeTransformToKlass(t, e),
          o = [n],
          r = n.replaceWithKlass;
        if (null != r) {
          var _t182 = this.registerNodeTransformToKlass(r, e);
          o.push(_t182);
        }
        return (
          Fs(
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
      _proto16.hasNode = function hasNode(t) {
        return this._nodes.has(t.getType());
      };
      _proto16.hasNodes = function hasNodes(t) {
        return t.every(this.hasNode.bind(this));
      };
      _proto16.dispatchCommand = function dispatchCommand(t) {
        for (
          var _len6 = arguments.length,
            e = new Array(_len6 > 1 ? _len6 - 1 : 0),
            _key6 = 1;
          _key6 < _len6;
          _key6++
        ) {
          e[_key6 - 1] = arguments[_key6];
        }
        return il.apply(void 0, [this, t].concat(Array.from(e)));
      };
      _proto16.getDecorators = function getDecorators() {
        return this._decorators;
      };
      _proto16.getRootElement = function getRootElement() {
        return this._rootElement;
      };
      _proto16.getKey = function getKey() {
        return this._key;
      };
      _proto16.setRootElement = function setRootElement(t) {
        var n = this._rootElement;
        if (t !== n) {
          var _n$classList;
          var _o63 = tl(this._config.theme, "root"),
            _r51 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            fa(this, n, t, _r51, { preserveUpdateQueue: !0 }),
            null !== n &&
              (this._config.disableEvents ||
                (function (t) {
                  var n = Za.get(t);
                  if (void 0 === n) return void Vu();
                  var o = tu.get(n);
                  if (void 0 === o) return void Vu();
                  Za["delete"](t);
                  var r = gs(t);
                  ds(r)
                    ? ((function (t) {
                        if (null !== t._parentEditor) {
                          var _e135 = Ws(t),
                            _n104 = _e135[_e135.length - 1]._key;
                          Wu.get(_n104) === t && Wu["delete"](_n104);
                        } else Wu["delete"](t._key);
                      })(r),
                      o.editors["delete"](r),
                      (o.hasShadowEditor = void 0),
                      (t.__lexicalEditor = null))
                    : r && e(198);
                  var i = zu(t);
                  for (var _t183 = 0; _t183 < i.length; _t183++) i[_t183]();
                  t.__lexicalEventHandles = [];
                })(n),
              null != _o63 &&
                (_n$classList = n.classList).remove.apply(
                  _n$classList,
                  Array.from(_o63),
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e136 = gl(t),
              _n105 = t.style;
            ((_n105.userSelect = "text"),
              (_n105.whiteSpace = "pre-wrap"),
              (_n105.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e136),
              (this._dirtyType = 2),
              Se(this),
              this._updateTags.add(Eo),
              $a(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  Za.set(t, n);
                  var o = tu.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    tu.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = zu(t);
                  r.push(eu.register(n));
                  var i = babelHelpers["extends"](
                    {
                      blur: Rt,
                      click: cu,
                      compositionend: Au,
                      compositionstart: bu,
                      copy: Ot,
                      cut: Mt,
                      dragend: Et,
                      dragover: bt,
                      dragstart: kt,
                      drop: Tt,
                      focus: Ft,
                      input: Nu,
                      keydown: Du,
                      paste: Z,
                      pointerdown: gu,
                    },
                    d && { beforeinput: vu },
                    g && { keyup: Iu, mousedown: fu },
                  );
                  var _loop4 = function _loop4() {
                    var n = _ref82[0];
                    var o = _ref82[1];
                    {
                      var _i34 = function _i34(r) {
                        Hu(r) ||
                          (Uu(r),
                          "blur" === n &&
                            (hu(e, t),
                            (e._inputState.isShiftKeyDown = !1),
                            (e._inputState.isInsertLineBreak = !1)),
                          (e.isEditable() || "click" === n || "copy" === n) &&
                            ("function" == typeof o ? o(r, e) : il(e, o, r)));
                      };
                      r.push(Xa(t, n, _i34));
                    }
                  };
                  for (var _ref82 of Object.entries(i)) {
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
                        Ga(e, function () {
                          var s = bl(pl(e));
                          if ("mousedown" !== i.type) {
                            var _o64 =
                              c &&
                              s &&
                              nf(Ff()) &&
                              If(Rf(), s, e, new Event("selectionchange"));
                            return (
                              _o64 && Ks(_o64),
                              _u(e, n, c && s ? Rl(s, t).focusNode : null)
                            );
                          }
                          var a = Af(s, e);
                          if (
                            i.defaultPrevented ||
                            (!i.shiftKey && a && !a.isCollapsed())
                          )
                            l();
                          else if (s && r.isSelectionChangeFromMouseDown) {
                            ($u(e, s, new Event("selectionchange"), o),
                              _u(e, i, Rl(s, t).focusNode));
                            var _n106 = Ff();
                            nf(_n106) &&
                              _n106.isCollapsed() &&
                              !_n106.is(Rf()) &&
                              lu(e, _n106);
                          }
                        }));
                    };
                  (r.push(
                    Qa(
                      n,
                      { pointercancel: c, pointermove: c, pointerup: c },
                      !0,
                    ),
                    Xa(pl(e), "blur", l),
                    e.registerEditableListener(l),
                    Qa(t, {
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
                          yc(Wl(t), e)
                            ? null
                            : t;
                      },
                    }),
                    Xa(
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
                          return qa(
                            Xa(
                              t,
                              "touchstart",
                              function (t) {
                                var e =
                                  1 === t.touches.length ? t.touches[0] : null;
                                n = e ? { x: e.clientX, y: e.clientY } : null;
                              },
                              o,
                            ),
                            Xa(
                              t,
                              "touchend",
                              function (t) {
                                var o = t.changedTouches[0];
                                (null !== n &&
                                  o &&
                                  0 === t.touches.length &&
                                  Math.abs(o.clientX - n.x) <= au &&
                                  Math.abs(o.clientY - n.y) <= au &&
                                  e(t),
                                  (n = null));
                              },
                              o,
                            ),
                          );
                        })(t, function (n) {
                          return (function (t, e, n) {
                            void 0 !== e._inputState.savedInputMode &&
                              (du(t, e, n) ||
                                ($l(n.ownerDocument) === n && n.blur(),
                                hu(e, n)));
                          })(n, e, t);
                        }),
                      ));
                })(t, this),
              null != _o63 &&
                (_t$classList = t.classList).add.apply(
                  _t$classList,
                  Array.from(_o63),
                ));
          } else ((this._window = null), this._updateTags.add(Eo), $a(this));
          Wa("root", this, !1, t, n);
        }
      };
      _proto16.getElementByKey = function getElementByKey(t) {
        return this._keyToDOMMap.get(t) || null;
      };
      _proto16.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto16.setEditorState = function setEditorState(t, e) {
        var _this17 = this;
        var o = t.isEmpty();
        var r = t;
        (r._readOnly &&
          ((r = Qc(t)),
          (r._selection = t._selection ? t._selection.clone() : null)),
          xe(this));
        var i = this._pendingEditorState,
          s = void 0 !== e ? e.tag : null;
        (null === i ||
          i.isEmpty() ||
          (null != s && this._updateTags.add(s), $a(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || t._slotsUsed),
          Ga(
            this,
            function () {
              if (
                (s && _this17._updateTags.add(s),
                o && (n(38), Rs().append(Gi())),
                t._parsed)
              )
                for (var _ref84 of r._nodeMap.entries()) {
                  var _t184 = _ref84[0];
                  var _e137 = _ref84[1];
                  Ur(_e137)
                    ? _this17._dirtyElements.set(_t184, !0)
                    : _this17._dirtyLeaves.add(_t184);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto16.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = Zc(),
            r = ma,
            i = Sa,
            s = xa,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Map()),
            (e._dirtyType = 0),
            (ma = o),
            (Sa = !1),
            (xa = e),
            ns(null));
          try {
            var _r52 = e._nodes;
            (Ba(t.root, _r52), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (ma = r),
              (Sa = i),
              (xa = s));
          }
          return o;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto16.read = function read() {
        for (
          var _len7 = arguments.length, t = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          t[_key7] = arguments[_key7];
        }
        var _ref85 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref85[0],
          n = _ref85[1];
        return (
          "force-commit" === e && (ka.has(this) || $a(this)),
          ("pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
          ).read(n, { editor: this })
        );
      };
      _proto16.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Ya(t, e, n);
        })(this, t, e);
      };
      _proto16.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          Ga(this, function () {
            var o = Ff(),
              r = Rs();
            (null !== o
              ? o.dirty || Ks(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              fl("focus"),
              dl(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto16.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = bl(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto16.isEditable = function isEditable() {
        return this._editable;
      };
      _proto16.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          Wa("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return Ia();
            }));
      };
      _proto16.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON(te()) };
      };
      return _a;
    })();
    _a16.version = (function () {
      return Jt;
    })();
    function ya(t, e, n, o, r, i) {
      if (Ur(t)) {
        var _s18 = t.__first;
        for (; null !== _s18; ) {
          var _t185 = o.get(_s18);
          if (void 0 === _t185) break;
          var _l11 = Ur(_t185);
          (_t185.__parent !== e ||
            (_l11 && i.has(_s18)) ||
            ((_l11 || (ld(_t185) && null !== _t185.__slots)) &&
              ya(_t185, _s18, n, o, r, i),
            n.has(_s18) || i["delete"](_s18),
            r.push(_s18)),
            (_s18 = _t185.__next));
        }
      }
      for (var _s19 of ld(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t186 = o.get(_s19);
        void 0 !== _t186 &&
          cd(_t186) &&
          _t186.__slotHost === e &&
          ((Ur(_t186) || (ld(_t186) && null !== _t186.__slots)) &&
            ya(_t186, _s19, n, o, r, i),
          n.has(_s19) || i["delete"](_s19),
          r.push(_s19));
      }
    }
    var ma = null,
      xa = null,
      Sa = !1,
      Ca = !1,
      va = !1;
    var Ta = new Set(),
      Na = new Set(),
      ka = new Set();
    var ba = 0;
    var Ea = { characterData: !0, childList: !0, subtree: !0 };
    function Oa() {
      return Sa || (null !== ma && ma._readOnly);
    }
    function Ma() {
      Sa && e(13);
    }
    function wa() {
      ba > 99 && e(14);
    }
    function Aa() {
      return (null === ma && e(195, Pa()), ma);
    }
    function Da() {
      return (null === xa && e(337, Pa()), xa);
    }
    function Ia() {
      Da()._dirtyType = 2;
    }
    function Pa() {
      var t = 0;
      var e = new Set(),
        n = _a16.version;
      if ("undefined" != typeof window)
        for (var _o65 of Al(document)) {
          var _r53 = gs(_o65);
          if (ds(_r53)) t++;
          else if (_r53) {
            var _t187 = String(_r53.constructor.version || "<0.17.1");
            (_t187 === n &&
              (_t187 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t187));
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
    function Fa() {
      return xa;
    }
    function Ra(t, e, n) {
      var o = e.__type,
        r = is(t, o);
      var i = n.get(o);
      void 0 === i && ((i = Array.from(r.transforms)), n.set(o, i));
      var s = i.length;
      for (var _t188 = 0; _t188 < s && (i[_t188](e), e.isAttached()); _t188++);
    }
    function La(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Ka(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t189 of o) n.add(_t189);
    }
    function Ba(t, n) {
      var o = t.type,
        r = n.get(o);
      void 0 === r && e(17, o);
      var i = r.klass;
      t.type !== i.getType() && e(18, i.name);
      var s = i.importJSON(t),
        l = t.children;
      if (Ur(s) && Array.isArray(l))
        for (var _t190 = 0; _t190 < l.length; _t190++) {
          var _e138 = Ba(l[_t190], n);
          s.append(_e138);
        }
      var c = t.$slots;
      if (c) {
        ld(s) || e(379, i.name);
        for (var _t191 in c) kd(s, _t191, Ba(c[_t191], n));
      }
      return s;
    }
    function za(t, e, n) {
      var o = ma,
        r = Sa,
        i = xa;
      ((ma = e), (Sa = !0), (xa = t));
      try {
        return n();
      } finally {
        ((ma = o), (Sa = r), (xa = i));
      }
    }
    function $a(e, n) {
      null !== e._pendingEditorState && xa !== e && xe(e, !1, !0);
      var o = va;
      va = !0;
      try {
        var _o66 = (function (t) {
          if (Na.has(t)) return !1;
          Na.add(t);
          try {
            for (var _e139 = 0; null !== t._pendingEditorState; _e139++) {
              var _n107 = t._pendingEditorState._selection,
                _o67 = t._rootElement;
              if (!ja(t, _n107)) return !1;
              var _r54 =
                (null === _n107 || nf(_n107)) &&
                (t._headless || null === _o67 || !_o67.isConnected);
              if (_r54 || 100 === _e139)
                return (
                  (t._lastNotifiedSelection =
                    null === _n107 ? null : _n107.clone()),
                  !_r54
                );
              Ya(
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
            Na["delete"](t);
          }
        })(e);
        (!(function (t, e) {
          var n = t._pendingEditorState,
            o = t._rootElement,
            r = t._headless || null === o;
          if (null === n)
            return void (
              !t._updating &&
              t._deferred.length > 0 &&
              Va(t, t._deferred)
            );
          var i = t._editorState,
            s = i._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = ma,
            u = Sa,
            f = xa,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !r && c && null !== h)
          ) {
            ((xa = t), (ma = n), (Sa = !1), (t._updating = !0));
            try {
              var _e140 = t._dirtyType,
                _o68 = t._dirtyElements,
                _r55 = t._dirtyLeaves;
              (h.disconnect(), (g = xo(i, n, t, _e140, _o68, _r55)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), Ca)) throw e;
              return (
                fa(t, null, o, n),
                Se(t),
                (t._dirtyType = 2),
                (Ca = !0),
                $a(t, i),
                void (Ca = !1)
              );
            } finally {
              (h.observe(o, Ea),
                (t._updating = d),
                (ma = a),
                (Sa = u),
                (xa = f));
            }
          }
          n._readOnly || (n._readOnly = !0);
          var p = t._dirtyLeaves,
            _ = t._dirtyElements,
            y = t._normalizedNodes,
            m = t._updateTags;
          (c &&
            ((t._dirtyType = 0),
            t._cloneNotNeeded.clear(),
            (t._dirtyLeaves = new Set()),
            (t._dirtyElements = new Map()),
            (t._normalizedNodes = new Set())),
            (t._updateTags = new Set()));
          var x = t._deferred;
          (d || (t._deferred = []),
            (function (t, e) {
              var n = t._decorators;
              var o = t._pendingDecorators || n;
              var r = e._nodeMap;
              var i;
              for (i in o) r.has(i) || (o === n && (o = Is(t)), delete o[i]);
            })(t, n));
          var S = r ? null : bl(pl(t));
          if (
            t._editable &&
            null !== S &&
            (c || null === l || l.dirty || !l.is(s)) &&
            null !== o &&
            !m.has(Ao)
          ) {
            ((xa = t), (ma = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e141 = t._blockCursorElement;
                (null !== _e141 && kl(_e141, t, o), jf(s, l, t, S, m, o));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  nf(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(zl(e))
                ) {
                  var _r56 = n.anchor,
                    _i35 = _r56.getNode(),
                    _s20 = _r56.offset;
                  var _l12 = !1,
                    _c9 = null;
                  if (_s20 === _i35.getChildrenSize())
                    Nl(_i35.getChildAtIndex(_s20 - 1)) && (_l12 = !0);
                  else {
                    var _e142 = _i35.getChildAtIndex(_s20);
                    null !== _e142 &&
                      Nl(_e142) &&
                      ((_l12 = !0), (_c9 = t.getElementByKey(_e142.__key)));
                  }
                  if (_l12) {
                    var _n108 = Zl(_i35, t.getElementByKey(_i35.__key), t),
                      _r57 = _n108.element;
                    if (
                      (null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = Il().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList2;
                              if ("string" == typeof o) {
                                var _t192 = uh(o);
                                o = e.blockCursor = _t192;
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
                      null === _c9)
                    ) {
                      var _t193 =
                        null !== _n108.before &&
                        _n108.before.parentNode === _r57
                          ? _n108.before
                          : null;
                      _r57.insertBefore(o, _t193);
                    } else _r57.insertBefore(o, _c9);
                    return;
                  }
                }
                null !== o && kl(o, t, e);
              })(t, o, l);
            } finally {
              (null !== h && h.observe(o, Ea), (xa = f), (ma = a));
            }
          }
          var C = ka.has(t);
          ka.add(t);
          try {
            null !== g &&
              (function (t, e, n, o, r) {
                var i = Array.from(t._listeners.mutation),
                  s = i.length;
                for (var _t194 = 0; _t194 < s; _t194++) {
                  var _i$_t = i[_t194],
                    _s21 = _i$_t[0],
                    _l13 = _i$_t[1];
                  for (var _t195 of _l13) {
                    var _i36 = e.get(_t195);
                    void 0 !== _i36 &&
                      _s21(_i36, {
                        dirtyLeaves: o,
                        prevEditorState: r,
                        updateTags: n,
                      });
                  }
                }
              })(t, g, m, p, i);
            var _o69 = t._pendingDecorators;
            (null !== _o69 &&
              ((t._decorators = _o69),
              (t._pendingDecorators = null),
              Wa("decorator", t, !0, _o69)),
              (function (t, e, n) {
                if (0 === t._listeners.textcontent.size) return;
                var o = Ps(e),
                  r = Ps(n);
                o !== r && Wa("textcontent", t, !0, r);
              })(t, e || i, n),
              Wa("update", t, !0, {
                dirtyElements: _,
                dirtyLeaves: p,
                editorState: n,
                mutatedNodes: g,
                normalizedNodes: y,
                prevEditorState: e || i,
                tags: m,
              }));
          } finally {
            C || ka["delete"](t);
          }
          (d || Va(t, x), Ha(t));
        })(e, n),
          _o66 && e._onWarn(t(436)));
      } finally {
        va = o;
      }
    }
    function Wa(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n109 = e._listeners[t],
          _r58 = Array.from(_n109);
        for (
          var _len8 = arguments.length,
            o = new Array(_len8 > 3 ? _len8 - 3 : 0),
            _key8 = 3;
          _key8 < _len8;
          _key8++
        ) {
          o[_key8 - 3] = arguments[_key8];
        }
        for (var _ref87 of _r58) {
          var _t196 = _ref87[0];
          var _e143 = _ref87[1];
          {
            _e143 && _e143();
            var _r59 = _t196.apply(void 0, Array.from(o)),
              _i37 = "function" == typeof _r59 ? _r59 : void 0;
            _n109.has(_t196) ? _n109.set(_t196, _i37) : _i37 && _i37();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function ja(t, e) {
      var n = t._lastNotifiedSelection;
      return null === e ? null !== n : !e.is(n);
    }
    function Ua(t, e, n, o) {
      var r = Ws(t);
      var i;
      if (!va)
        for (var _t197 = 0; _t197 < r.length; _t197++)
          r[_t197]._updating || (r[_t197]._cascadeCount = 0);
      if (e === W) {
        if (xa !== t || Sa) {
          var _r60 = !1;
          return (
            Ga(t, function () {
              _r60 = Ua(t, e, n, o);
            }),
            _r60
          );
        }
        var _r61 = Aa()._selection;
        t._lastNotifiedSelection = null === _r61 ? null : _r61.clone();
      }
      for (var _t198 = 4; _t198 >= 0; _t198--) {
        var _loop5 = function _loop5() {
            var l = r[_s22];
            if (_s22 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e144 = c[_t198];
              if (_e144.size > 0) {
                var _t199 = !1;
                if (
                  (Ga(l, function () {
                    for (var _r62 of _e144)
                      if (_r62(n, o)) return void (_t199 = !0);
                  }),
                  _t199)
                )
                  return { v: _t199 };
              }
            }
          },
          _ret2;
        for (var _s22 = 0; _s22 < r.length; _s22++) {
          _ret2 = _loop5();
          if (_ret2 === 0) break;
          if (_ret2) return _ret2.v;
        }
      }
      return (
        i &&
          i.update(function () {
            Ua(i, e, n, o);
          }),
        !1
      );
    }
    function Ha(e) {
      var n = e._updates;
      if (0 === n.length) return void (e._cascadeCount = 0);
      if (
        ((function (t) {
          Ta.has(t) ||
            (Ta.add(t),
            setTimeout(function () {
              (Ta["delete"](t), (t._cascadeCount = 0));
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
        var _t200 = o[0],
          _n110 = o[1];
        Ya(e, _t200, _n110);
      }
    }
    function Va(t, e) {
      if ((t._deferred === e && (t._deferred = []), 0 !== e.length)) {
        var _n111 = t._updating;
        t._updating = !0;
        try {
          for (var _t201 = 0; _t201 < e.length; _t201++) e[_t201]();
        } finally {
          t._updating = _n111;
        }
      }
    }
    function Ja(t, n) {
      var o = t._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n112 = o.shift();
        if (_n112) {
          var _o70 = _n112[0],
            _i38 = _n112[1],
            _s23 = t._pendingEditorState;
          var _l14 = void 0;
          (void 0 !== _i38 &&
            ((_l14 = _i38.onUpdate),
            _i38.skipTransforms && (r = !0),
            _i38.discrete && (null === _s23 && e(191), (_s23._flushSync = !0)),
            _l14 && t._deferred.push(_l14),
            Ka(t, _i38.tag)),
            null == _s23 ? Ya(t, _o70, _i38) : _o70());
        }
      }
      return r;
    }
    function Ya(t, n, o, r) {
      if (r === void 0) {
        r = !1;
      }
      var i = t._updateTags;
      var s,
        l = !1,
        c = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        Ka(t, o.tag),
        (l = o.skipTransforms || !1),
        (c = o.discrete || !1)),
        s && t._deferred.push(s));
      var a = t._editorState;
      var u = t._pendingEditorState,
        f = !1;
      ((null === u || u._readOnly) &&
        ((u = t._pendingEditorState = Qc(u || a)), (f = !0)),
        (u._flushSync = c));
      var d = 0 === t._updates.length ? null : new Set(t._updates),
        h = ma,
        g = Sa,
        p = xa,
        _ = t._updating,
        y = t._lastNotifiedSelection;
      ((ma = u), (Sa = !1), (t._updating = !0), (xa = t));
      var m = t._headless || null === t.getRootElement();
      ns(null);
      try {
        f &&
          (m
            ? null !== a._selection && (u._selection = a._selection.clone())
            : (u._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = bl(pl(t));
                return nf(n) || null == n ? If(n, o, t, e) : n.clone();
              })(t, (o && o.event) || null)));
        var _r63 = t._compositionKey;
        (n(),
          (l = Ja(t, l)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (nf(o)) {
              var _t202 = o.anchor,
                _e145 = o.focus;
              var _r64;
              if (
                ("text" === _t202.type &&
                  ((_r64 = _t202.getNode()), _r64.selectionTransform(n, o)),
                "text" === _e145.type)
              ) {
                var _t203 = _e145.getNode();
                _r64 !== _t203 && _t203.selectionTransform(n, o);
              }
            }
          })(u, t),
          0 !== t._dirtyType &&
            (l
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t204 of n) {
                    var _e146 = o.get(_t204);
                    Ni(_e146) &&
                      _e146.isAttached() &&
                      _e146.isSimpleText() &&
                      !_e146.isUnmergeable() &&
                      Lo(_e146);
                  }
                })(u, t)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    i = bs(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t205 of l) {
                        var _o71 = r.get(_t205);
                        (Ni(_o71) &&
                          _o71.isAttached() &&
                          _o71.isSimpleText() &&
                          !_o71.isUnmergeable() &&
                          Lo(_o71),
                          void 0 !== _o71 && La(_o71, i) && Ra(e, _o71, s),
                          n.add(_t205));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        ba++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t206 of a) {
                      var _n113 = _t206[0],
                        _l15 = _t206[1];
                      if ((o.set(_n113, _l15), !_l15)) continue;
                      var _c0 = r.get(_n113);
                      void 0 !== _c0 && La(_c0, i) && Ra(e, _c0, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      ba++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(u, t),
            Ja(t),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref89 of o) {
                var _t207 = _ref89[0];
                {
                  var _e147 = i.get(_t207);
                  void 0 !== _e147 &&
                    (_e147.isAttached() ||
                      (Ur(_e147) && ya(_e147, _t207, r, i, s, o),
                      r.has(_t207) || o["delete"](_t207),
                      s.push(_t207)));
                }
              }
              for (var _t208 of n) {
                var _e148 = i.get(_t208);
                void 0 === _e148 ||
                  _e148.isAttached() ||
                  (ld(_e148) &&
                    null !== _e148.__slots &&
                    ya(_e148, _t208, r, i, s, n),
                  r.has(_t208) || n["delete"](_t208),
                  s.push(_t208));
              }
              var l = Da(),
                c = l._cloneNotNeeded;
              for (var _t209 of s) (i["delete"](_t209), c["delete"](_t209));
              var a = l._compositionKey;
              null === a || i.has(a) || (l._compositionKey = null);
            })(a, u, t._dirtyLeaves, t._dirtyElements)),
          _r63 !== t._compositionKey && (u._flushSync = !0));
        var _i39 = u._selection;
        if (nf(_i39)) {
          t._slotsUsed && Nf(_i39);
          var _n114 = u._nodeMap,
            _o72 = _i39.anchor.key,
            _r65 = _i39.focus.key;
          (void 0 !== _n114.get(_o72) && void 0 !== _n114.get(_r65)) || e(19);
        } else rf(_i39) && 0 === _i39._nodes.size && (u._selection = null);
      } catch (e) {
        if (!f && h === u) throw e;
        !(function (t, e) {
          var n = t._editorState;
          t._pendingEditorState = n;
          var o = n._selection;
          ((t._lastNotifiedSelection = null === o ? null : o.clone()),
            (t._dirtyType = 2),
            t._cloneNotNeeded.clear(),
            (t._dirtyLeaves = new Set()),
            t._dirtyElements.clear());
          var r = t._updates;
          var i = 0;
          for (var _t210 of r) null !== e && e.has(_t210) && (r[i++] = _t210);
          r.length = i;
        })(t, d);
        var _n115 = null;
        try {
          e instanceof Error && t._onError(e);
        } catch (t) {
          _n115 = { error: t };
        }
        try {
          $a(t);
        } catch (e) {
          if (
            (ls(function () {
              return Ha(t);
            }),
            null === _n115)
          )
            throw e;
          if (e instanceof Error)
            try {
              t._onError(e);
            } catch (t) {}
        }
        if (null !== _n115) throw _n115.error;
        return;
      } finally {
        ((ma = h), (Sa = g), (xa = p), (t._updating = _), (ba = 0));
      }
      if (r) return;
      var x =
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
      x
        ? u._flushSync
          ? ((u._flushSync = !1), $a(t))
          : f &&
            ls(function () {
              $a(t);
            })
        : ((u._flushSync = !1),
          f &&
            (i.clear(),
            (t._deferred = []),
            (t._pendingEditorState = null),
            (t._lastNotifiedSelection = y)));
    }
    function Ga(t, e, n) {
      xa === t && void 0 === n ? (Oa() ? Ya(t, e, n) : e()) : Ya(t, e, n);
    }
    function qa() {
      for (
        var _len9 = arguments.length, t = new Array(_len9), _key9 = 0;
        _key9 < _len9;
        _key9++
      ) {
        t[_key9] = arguments[_key9];
      }
      return function () {
        for (var _e149 = t.length - 1; _e149 >= 0; _e149--) t[_e149]();
        t.length = 0;
      };
    }
    function Xa(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    function Qa(t, e, n) {
      return qa.apply(
        void 0,
        Array.from(
          Object.entries(e).map(function (_ref90) {
            var e = _ref90[0],
              o = _ref90[1];
            return Xa(t, e, o, n);
          }),
        ),
      );
    }
    var Za = new WeakMap(),
      tu = new WeakMap(),
      eu = Ht(function (t) {
        return (
          t.addEventListener("selectionchange", ju),
          function () {
            return t.removeEventListener("selectionchange", ju);
          }
        );
      });
    function nu(t, e, n, o, r, i) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = Da();
      var u;
      if (void 0 !== i) u = i;
      else {
        var _t211 = bl(pl(a));
        u = null !== _t211 ? Rl(_t211, a._rootElement) : null;
      }
      var f = null !== u ? u.anchorNode : null,
        h = s.key,
        g = a.getElementByKey(h),
        p = n.length;
      return (
        h !== l.key ||
        !Ni(c) ||
        (((!r &&
          (!d || a._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (c.isDirty() && p < 2) ||
          $s(n)) &&
          s.offset !== l.offset &&
          !c.isComposing()) ||
        _s(c) ||
        (c.isDirty() && p > 1) ||
        ((r || !d) && null !== g && !c.isComposing() && f !== ec(c, g, a)) ||
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
            r = ps(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (Ni(e) || (Ur(e) && e.isInline())) &&
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
    function ou(t, e) {
      return (
        ys(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function ru(t, e, n) {
      var _Rl = Rl(t, e._rootElement),
        o = _Rl.anchorNode,
        r = _Rl.anchorOffset,
        i = _Rl.focusNode,
        s = _Rl.focusOffset,
        l = e._inputState;
      if (l.isSelectionChangeFromDOMUpdate) {
        l.isSelectionChangeFromDOMUpdate = !1;
        var _t212 = l.selectionChangeFromDOMUpdatePoints;
        if (
          ((l.selectionChangeFromDOMUpdatePoints = null),
          ou(o, r) &&
            ou(i, s) &&
            !l.postDeleteSelectionToRestore &&
            (null === _t212 ||
              (_t212.anchorNode === o &&
                _t212.anchorOffset === r &&
                _t212.focusNode === i &&
                _t212.focusOffset === s)))
        )
          return;
      }
      Ga(e, function () {
        if (!n) return void Ks(null);
        if (!fs(e, o, i)) return;
        var c = l.mouseDrag;
        !c || ("mousedown" === c.type && c.defaultPrevented) || _u(e, c, i);
        var a = pu.has(c);
        var u = Ff();
        if (l.postDeleteSelectionToRestore && nf(u) && u.isCollapsed()) {
          var _t213 = u.anchor,
            _e150 = l.postDeleteSelectionToRestore.anchor;
          ((_t213.key === _e150.key && _t213.offset === _e150.offset + 1) ||
            (1 === _t213.offset &&
              _e150.getNode().is(_t213.getNode().getPreviousSibling()))) &&
            ((u = l.postDeleteSelectionToRestore.clone()), Ks(u));
        }
        if (((l.postDeleteSelectionToRestore = null), nf(u))) {
          var _n116 = u.anchor;
          if (u.isCollapsed())
            ("Range" === t.type && o === i && (u.dirty = !0), lu(e, u));
          else {
            var _t214 = _n116.key,
              _e151 = u.focus,
              _o73 = _e151.key,
              _i40 = u.getNodes(),
              _l16 = _i40.length,
              _c1 = u.isBackward(),
              _ref91 = a ? [_n116.offset, _e151.offset] : [r, s],
              _f6 = _ref91[0],
              _d6 = _ref91[1],
              _h4 = _c1 ? _d6 : _f6,
              _g3 = _c1 ? _f6 : _d6,
              _p3 = _c1 ? _o73 : _t214,
              _2 = _c1 ? _t214 : _o73;
            var _y = C,
              _m = !1;
            for (var _t215 = 0; _t215 < _l16; _t215++) {
              var _e152 = _i40[_t215],
                _n117 = _e152.getTextContentSize();
              if (
                Ni(_e152) &&
                0 !== _n117 &&
                !(
                  (0 === _t215 && _e152.__key === _p3 && _h4 === _n117) ||
                  (_t215 === _l16 - 1 && _e152.__key === _2 && 0 === _g3)
                ) &&
                ((_m = !0), (_y &= _e152.getFormat()), 0 === _y)
              )
                break;
            }
            u.format = _m ? _y : 0;
          }
        }
        !(function (t, e, n) {
          if (n === void 0) {
            n = !1;
          }
          (n || ja(t, e)) && t.dispatchCommand(W);
        })(e, u, null !== u && ((u.dirty && !a) || !nf(u)));
      });
    }
    function iu(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function su(t, e) {
      iu(t, e.getFormat(), e.getStyle());
    }
    function lu(t, n) {
      var o = n.anchor,
        r = o.getNode(),
        i = pl(t).event,
        s = i ? i.timeStamp : performance.now(),
        _t$_inputState$collap = t._inputState.collapsedSelectionFormat,
        l = _t$_inputState$collap.format,
        c = _t$_inputState$collap.style,
        a = _t$_inputState$collap.offset,
        u = _t$_inputState$collap.key,
        f = _t$_inputState$collap.timeStamp;
      s < f + 200 && o.offset === a && o.key === u
        ? iu(n, l, c)
        : "text" === o.type
          ? (Ni(r) || e(141), su(n, r))
          : (t.isComposing() || "" !== Rs().getTextContent()) &&
            (Ur(r) || e(259), r.isEmpty() ? Pf(n, "") : iu(n, n.format, ""));
    }
    function cu(t, e) {
      Ga(e, function () {
        var n = Ff(),
          o = bl(pl(e)),
          r = Rf();
        if (o)
          if (nf(n)) {
            var _t216 = n.anchor,
              _e153 = _t216.getNode();
            "element" === _t216.type &&
              0 === _t216.offset &&
              n.isCollapsed() &&
              !Xr(_e153) &&
              1 === Rs().getChildrenSize() &&
              _e153.getTopLevelElementOrThrow().isEmpty() &&
              null !== r &&
              n.is(r) &&
              (o.removeAllRanges(), (n.dirty = !0));
          } else if (
            "touch" === t.pointerType ||
            "pen" === t.pointerType ||
            (g && "mouse" !== e._inputState.lastPointerType)
          ) {
            var _n118 = Rl(o, e._rootElement).anchorNode;
            (jl(_n118) || ys(_n118)) && Ks(If(r, o, e, t));
          }
        if (u && null !== o && 0 === o.rangeCount) {
          var _n119 = e._rootElement;
          if (null !== _n119 && t.target === _n119) {
            var _i41 = t.clientY;
            var _s24 = _n119.childNodes.length;
            for (var _t217 = 0; _t217 < _n119.childNodes.length; _t217++) {
              var _e154 = _n119.childNodes[_t217];
              if (jl(_e154)) {
                var _n120 = _e154.getBoundingClientRect();
                if (_i41 <= (_n120.top + _n120.bottom) / 2) {
                  _s24 = _t217;
                  break;
                }
              }
            }
            o.setBaseAndExtent(_n119, _s24, _n119, _s24);
            var _l17 = If(r, o, e, t);
            null !== _l17 ? Ks(_l17) : o.removeAllRanges();
          }
        }
        il(e, U, t);
      });
    }
    var au = 10,
      uu =
        'input:not(:disabled),textarea:not(:disabled),select:not(:disabled),button:not(:disabled),a[href],area[href],label,summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable]:not([contenteditable="false"])';
    function fu(t, e) {
      var n = e.getRootElement();
      null !== n &&
        (du(t, e, n)
          ? (t.preventDefault(),
            $l(n.ownerDocument) !== n &&
              (void 0 === e._inputState.savedInputMode &&
                (e._inputState.savedInputMode = n.getAttribute("inputmode")),
              n.setAttribute("inputmode", "none"),
              n.focus({ preventScroll: !0 })))
          : hu(e, n));
    }
    function du(t, e, n) {
      if ("mouse" === e._inputState.lastPointerType) return !1;
      var o = Wl(t);
      if (!Ul(o)) return !1;
      var r = !1;
      for (var _t218 = o; null !== _t218; _t218 = ll(_t218)) {
        if (_t218 === n) return r;
        if (1 === _t218.nodeType) {
          var _e155 = _t218;
          if (_e155.matches(uu)) return !1;
          "true" === _e155.getAttribute("data-lexical-decorator") && (r = !0);
        }
      }
      return !1;
    }
    function hu(t, e) {
      var n = t._inputState.savedInputMode;
      void 0 !== n &&
        ((t._inputState.savedInputMode = void 0),
        null === n
          ? e.removeAttribute("inputmode")
          : e.setAttribute("inputmode", n));
    }
    function gu(t, e) {
      var n = Wl(t),
        o = t.pointerType;
      Ul(n) &&
        "touch" !== o &&
        "pen" !== o &&
        0 === t.button &&
        Ga(e, function () {
          yc(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
        });
    }
    var pu = new WeakSet();
    function _u(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = Ff(),
        r = o && o.clone();
      !(function (t, e, n) {
        var o = Rf(),
          r = "mousedown" === e.type,
          i = r && !e.shiftKey,
          s = n && Ds(n);
        Yr(s) &&
          (r
            ? i && s.isInline() && s.selectPrevious()
            : nf(o) && Ks(o.clone()));
        var l = Ff(),
          c = l || (i ? Mf() : nf(o) ? o.clone() : null),
          a = t.getRootElement(),
          u = a && a.getRootNode();
        if (!nf(c) || (i && !c.isCollapsed()) || (!ms(u) && !Ol(u))) return;
        var f = c.anchor,
          d = c.focus;
        if (!r && nf(o)) {
          var _o$anchor = o.anchor,
            _t219 = _o$anchor.key,
            _e156 = _o$anchor.offset,
            _n121 = _o$anchor.type;
          f.set(_t219, _e156, _n121, !0);
        }
        var h = e.clientX,
          g = e.clientY,
          p = u.elementFromPoint && u.elementFromPoint(h, g),
          _ = p && Ds(p),
          y = function y(t, e) {
            return Ur(t)
              ? "next" === e
                ? t.getLastDescendant()
                : t.getFirstDescendant()
              : t;
          },
          m = [null],
          x = Ur(_) && !_.isInline() && (Xr(_) ? Gc(d.getNode(), Ef) : _);
        for (var _t220 of x ? Hd(x, "next") : [])
          m.push($d(_t220.origin, "previous"), _t220);
        var S = pl(t),
          C = S.document.createRange();
        var v = null;
        for (var _e157 of m) {
          var _n122 = _e157 ? y(_e157.origin, _e157.direction) : _;
          if (!Yr(_n122) || !_n122.isInline() || _n122 === v) continue;
          var _o74 = t.getElementByKey(_n122.getKey());
          if (!_o74) continue;
          C.selectNodeContents(_o74);
          var _r66 = C.getBoundingClientRect(),
            _s25 = _o74.getBoundingClientRect(),
            _ref92 = _r66.height > _s25.height ? _r66 : _s25,
            _a8 = _ref92.bottom,
            _u6 = _ref92.left,
            _p4 = _ref92.right,
            _m2 = _ref92.top;
          if (_e157 && (g < _m2 || g > _a8)) {
            v = _n122;
            continue;
          }
          var _x = "rtl" === S.getComputedStyle(ll(_o74) || _o74).direction,
            _T = 2 * h > _u6 + _p4 !== _x,
            _N = _T ? "next" : "previous",
            _k = _e157 && _e157.getNodeAtCaret(),
            _b = _k && t.getElementByKey(_k.getKey()),
            _E = _b ? _b.getClientRects() : [],
            _O = _E[_T ? 0 : _E.length - 1];
          if (
            !_e157 ||
            (_e157.direction === _N &&
              "none" === S.getComputedStyle(_o74).cssFloat &&
              (!_k ||
                sa(_k) ||
                (_O &&
                  (_T === _x
                    ? 2 * _O.right > _u6 + _p4
                    : 2 * _O.left < _u6 + _p4))))
          ) {
            if (!_n122.is(y(ol(d, _T), _N))) {
              var _t221 = $d(_n122, _N);
              (Ei(d, _t221), i && Ei(f, _t221));
            }
            return void (l || Ks(c));
          }
        }
        if (Yr(s) && !r) {
          var _e158 = S.document,
            _n123 =
              _e158.caretPositionFromPoint &&
              _e158.caretPositionFromPoint(h, g, {
                shadowRoots: Ol(u) ? [u] : [],
              }),
            _o75 = _n123 && xf(_n123.offsetNode, _n123.offset, null, t);
          if (_o75) {
            var _o75$ = _o75[0],
              _t222 = _o75$.key,
              _e159 = _o75$.offset,
              _n124 = _o75$.type;
            d.set(_t222, _e159, _n124);
          }
        }
      })(t, e, n);
      var i = Ff(),
        s = t._inputState.mouseDrag;
      (s && i && !i.is(r) && pu.add(s),
        "mousedown" === e.type && nf(i) && Pf(i, nf(r) ? r.anchor.key : ""));
    }
    function yu(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function mu(t) {
      var e = Da()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = Ff();
      if (!nf(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!Ni(r)) return;
      var i = o.anchor.offset;
      if (r.getTextContentSize() === i) {
        var _t223 = r.getNextSibling();
        if ("\n" === n) {
          if (g) return;
          if (sa(_t223)) _t223.selectEnd();
          else if (!_t223) {
            var _t224 = Gc(r, Ef),
              _e160 = _t224 && _t224.getNextSibling();
            Ur(_e160) && _e160.selectStart();
          }
        } else
          "\t" === n
            ? ts(_t223) && _t223.selectEnd()
            : Ni(_t223) &&
              _t223.getTextContent()[0] === n &&
              _t223.select(1, 1);
      } else r.getTextContent()[i] === n && r.select(i + 1, i + 1);
    }
    function xu(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function Su(t) {
      a &&
        !g &&
        y &&
        (xu(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return xu(t);
        }, 0)));
    }
    function Cu(t, e) {
      var n = Wl(t);
      if (jl(n) && yc(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = $l(o.ownerDocument);
      return null !== r && o.contains(r) && (yc(r, e) || cs(o, r));
    }
    function vu(t, e) {
      var n = t.inputType;
      "deleteCompositionText" === n ||
        (u && rl(e)) ||
        ("insertCompositionText" !== n &&
          Ga(
            e,
            function () {
              Cu(t, e) || il(e, H, t);
            },
            { event: t },
          ));
    }
    function Tu(t) {
      var _ref93;
      var n = t.inputType,
        o = yu(t),
        r = Da(),
        i = r._inputState,
        s = Ff();
      if (
        "insertText" === n &&
        t.data &&
        i.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((xu(i), t.preventDefault(), nf(s) && !s.isCollapsed())) {
          var _t225 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t225.key, _t225.offset, _t225.type),
            s.focus.set(_t225.key, _t225.offset, _t225.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t226 = Rf();
          if (!nf(_t226)) return !0;
          Ks(_t226.clone());
        }
        if (nf(s)) {
          var _n125 = s.anchor.key === s.focus.key;
          if (
            (function (t, e) {
              return (
                "MediaLast" === t.lastKeyCode && e < t.lastKeyDownTimeStamp + 30
              );
            })(i, t.timeStamp) &&
            r.isComposing() &&
            _n125
          ) {
            if (
              (ks(null),
              (i.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                Ga(r, function () {
                  ks(null);
                });
              }, 30),
              nf(s))
            ) {
              var _t227 = s.anchor.getNode();
              (_t227.markDirty(), Ni(_t227) || e(142), su(s, _t227));
            }
          } else {
            if (
              (ks(null),
              g &&
                null !== o &&
                !o.collapsed &&
                (s.applyDOMRange(o), !s.isCollapsed()))
            )
              return (t.preventDefault(), s.removeText(), !0);
            t.preventDefault();
            var _e161 = s.anchor.getNode(),
              _l18 = _e161.getTextContent(),
              _c10 = _e161.canInsertTextAfter(),
              _a9 = 0 === s.anchor.offset && s.focus.offset === _l18.length;
            var _u7 = m && _n125 && !_a9 && _c10;
            if (
              (_u7 && s.isCollapsed() && (_u7 = !Yr(ol(s.anchor, !0))), !_u7)
            ) {
              il(r, G, !0);
              var _t228 = Ff();
              m &&
                nf(_t228) &&
                _t228.isCollapsed() &&
                ((i.postDeleteSelectionToRestore = _t228),
                setTimeout(function () {
                  return (i.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!nf(s))
        return (
          ("historyUndo" !== n && "historyRedo" !== n) ||
            (t.preventDefault(), il(r, "historyUndo" === n ? it : st)),
          !0
        );
      var l = t.data;
      null !== i.unprocessedBeforeInputData &&
        Vs(!1, r, i.unprocessedBeforeInputData);
      var c = !1;
      if (
        (!s.dirty || null !== i.unprocessedBeforeInputData) &&
        s.isCollapsed() &&
        !Xr(s.anchor.getNode()) &&
        null !== o
      ) {
        var _s$anchor = s.anchor,
          _t229 = _s$anchor.key,
          _e162 = _s$anchor.offset,
          _i42 = _s$anchor.type,
          _l19 = r._slotsUsed && Cf(s.anchor);
        s.applyDOMRange(o);
        var _a0 = n.endsWith("Forward");
        if (!1 !== _l19 && (_a0 || n.endsWith("Backward"))) {
          var _o76 = Yu(_t229, _e162, _i42),
            _r67 = s.anchor,
            _u8 = s.focus,
            _f7 = !Tf(Cf(_r67), _l19) || !Tf(Cf(_u8), _l19),
            _d7 =
              !_f7 &&
              null !== _l19 &&
              (_a0
                ? _r67.isBefore(_o76) || _u8.isBefore(_o76)
                : _o76.isBefore(_r67) || _o76.isBefore(_u8));
          (_f7 || _d7) &&
            (_r67.set(_t229, _e162, _i42),
            _u8.set(_t229, _e162, _i42),
            (c = _d7 && "deleteContentForward" === n));
        }
      }
      i.unprocessedBeforeInputData = null;
      var a = s.anchor,
        u = s.focus,
        f = a.getNode(),
        d = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === l) (t.preventDefault(), il(r, q, !1));
        else if (l === T) (t.preventDefault(), il(r, X));
        else if (null == l && t.dataTransfer) {
          var _e163 = t.dataTransfer.getData("text/plain");
          (t.preventDefault(), s.insertRawText(_e163));
        } else
          null != l && nu(s, o, l, t.timeStamp, !0)
            ? (t.preventDefault(), il(r, Q, l), mu(l))
            : (i.unprocessedBeforeInputData = l);
        return ((i.lastBeforeInputInsertTextTimeStamp = t.timeStamp), !0);
      }
      switch ((t.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          (il(r, Q, t),
            mu(
              (_ref93 = t.dataTransfer
                ? t.dataTransfer.getData("text/plain")
                : null) != null
                ? _ref93
                : t.data,
            ));
          break;
        case "insertFromComposition": {
          i.compositionPhase = "idle";
          var _e164 = i.hadOrphanedCompositionEvents;
          i.hadOrphanedCompositionEvents = !1;
          var _n126 = r._compositionKey;
          (ks(null), _e164 || il(r, Q, t), Mu(_n126));
          break;
        }
        case "insertLineBreak":
          (ks(null), (i.isInsertLineBreak = !1), il(r, q, !1));
          break;
        case "insertParagraph":
          (ks(null),
            i.isInsertLineBreak
              ? ((i.isInsertLineBreak = !1), il(r, q, !1))
              : il(r, X));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          il(r, Z, t);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Ur(t) || Ur(e) || !ps(t) || !ps(e);
          })(f, d) && il(r, tt, t);
          break;
        case "deleteByDrag":
          (fl(Do), il(r, tt, t));
          break;
        case "deleteByCut":
          il(r, tt, t);
          break;
        case "deleteContent":
          il(r, G, !1);
          break;
        case "deleteWordBackward":
          il(r, et, !0);
          break;
        case "deleteWordForward":
          il(r, et, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          il(r, nt, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          il(r, c ? G : nt, !1);
          break;
        case "formatStrikeThrough":
          il(r, ot, "strikethrough");
          break;
        case "formatBold":
          il(r, ot, "bold");
          break;
        case "formatItalic":
          il(r, ot, "italic");
          break;
        case "formatUnderline":
          il(r, ot, "underline");
          break;
        case "historyUndo":
          il(r, it);
          break;
        case "historyRedo":
          il(r, st);
      }
      return !0;
    }
    function Nu(t, e) {
      t.stopPropagation();
      var n = e._inputState;
      (xu(n),
        Ga(
          e,
          function () {
            Cu(t, e) || e.dispatchCommand(V, t);
          },
          { event: t },
        ),
        (n.unprocessedBeforeInputData = null));
    }
    function ku(t) {
      var e = Da(),
        n = e._inputState,
        o = Ff(),
        r = t.data,
        i = yu(t);
      var s = !1,
        l = !1;
      if (null != r && nf(o)) {
        var _c11 = bl(pl(e)),
          _a1 = null !== _c11 ? Rl(_c11, e._rootElement) : null,
          _f8 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            !e.isComposing();
        _f8 && (n.hadOrphanedCompositionEvents = !0);
        var _h5 = o.anchor.getNode(),
          _g4 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            e.isComposing() &&
            Ni(_h5) &&
            _s(_h5);
        if (!_f8 && !_g4 && nu(o, i, r, t.timeStamp, !1, _a1)) {
          if (((s = !0), "ending-firefox" === n.compositionPhase)) {
            var _t230 = wu(e, r);
            if (((n.compositionPhase = "idle"), _t230))
              return (fl(Po), Bs(), !0);
          }
          var _i43 = o.anchor.getNode();
          if (null === _c11 || null === _a1) return !0;
          var _f9 = o.isBackward(),
            _h6 = _f9 ? o.anchor.offset : o.focus.offset,
            _g5 = _f9 ? o.focus.offset : o.anchor.offset;
          (d &&
            !o.isCollapsed() &&
            Ni(_i43) &&
            null !== _a1.anchorNode &&
            _i43.getTextContent().slice(0, _h6) +
              r +
              _i43.getTextContent().slice(_h6 + _g5) ===
              Hs(_a1.anchorNode)) ||
            (il(e, Q, r), (l = "insertText" === t.inputType));
          var _p5 = r.length;
          (u &&
            _p5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _p5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            m && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), ks(null)));
        }
      }
      return (
        s ||
          (Vs(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (wu(e, r || void 0), fl(Po), (n.compositionPhase = "idle"))),
        Bs(l),
        !0
      );
    }
    function bu(t, e) {
      il(e, J, t);
    }
    function Eu(t) {
      var e = Da(),
        n = e._inputState,
        o = Ff();
      if (nf(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r68 = o.anchor,
          _i44 = o.anchor.getNode();
        if (
          (ks(_r68.key),
          fl(Io),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r68.type ||
            !o.isCollapsed() ||
            (!m &&
              (_i44.getFormat() !== o.format ||
                (Ni(_i44) && _i44.getStyle() !== o.style))) ||
            (Ni(_i44) &&
              (_s(_i44) ||
                (0 === _r68.offset && !_i44.canInsertTextBefore()) ||
                (_r68.offset === _i44.getTextContentSize() &&
                  !_i44.canInsertTextAfter()))))
        ) {
          g || (!_ && !x)
            ? il(e, Q, N)
            : (function (t) {
                Qu(t, "", !0);
              })(o);
          var _t231 = Ff();
          nf(_t231) && ks(_t231.anchor.key);
        }
      }
      return !0;
    }
    function Ou(t) {
      var e = Da();
      return (
        (e._inputState.compositionPhase = "idle"),
        wu(e, t.data),
        fl(Po),
        !0
      );
    }
    function Mu(t) {
      var e = Da()._inputState,
        n = e.composedSegmentedKey;
      if (((e.composedSegmentedKey = null), null === t || t !== n)) return;
      var o = Os(t);
      if (!Ni(o) || "text" === o.getType() || _s(o) || !o.isAttached()) return;
      var r = Ff(),
        i = nf(r) && r.anchor.key === t ? r.anchor.offset : null,
        s = Ti(o.getTextContent());
      if (
        (s.setFormat(o.getFormat()),
        s.setStyle(o.getStyle()),
        o.replace(s),
        null !== i)
      ) {
        var _t232 = Math.min(i, s.getTextContentSize());
        s.select(_t232, _t232);
      }
    }
    function wu(t, e) {
      var n = t._compositionKey;
      if ((ks(null), null !== n && null != e)) {
        if ("" === e) {
          var _e165 = Os(n),
            _o77 = t.getElementByKey(n),
            _r69 = null !== _o77 && Ni(_e165) ? ec(_e165, _o77, t) : null;
          if (null !== _r69 && null !== _r69.nodeValue && Ni(_e165)) {
            var _n127 = bl(pl(t)),
              _o78 = _n127 && Rl(_n127, t._rootElement);
            var _i45 = null,
              _s26 = null;
            (null !== _o78 &&
              _o78.anchorNode === _r69 &&
              ((_i45 = _o78.anchorOffset), (_s26 = _o78.focusOffset)),
              Js(_e165, _r69.nodeValue, _i45, _s26, !0));
          }
          return (Mu(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e166 = Ff();
          if (nf(_e166) || rf(_e166)) {
            if (nf(_e166)) {
              var _t233 = _e166.focus;
              _e166.anchor.set(_t233.key, _t233.offset, _t233.type);
            }
            return (il(t, gt, null), Mu(n), !1);
          }
        }
        var _o79 = Os(n);
        if (null !== _o79 && Ni(_o79) && _s(_o79)) {
          _o79.markDirty();
          var _t234 = Ff(),
            _r70 = _o79.getTextContentSize(),
            _i46 =
              nf(_t234) && _t234.anchor.key === n ? _t234.anchor.offset : _r70;
          return (_o79.select(_i46, _i46).insertText(e), !0);
        }
      }
      return (Vs(!0, t, e), Mu(n), !1);
    }
    function Au(t, e) {
      var n = e._inputState;
      u
        ? (n.compositionPhase = "ending-firefox")
        : ("" === t.data || g || (!_ && !x)) && il(e, Y, t);
    }
    function Du(t, e) {
      var n = e._inputState;
      (g &&
        (n.isShiftKeyDown =
          "Shift" === t.key ||
          (n.isShiftKeyDown && t.shiftKey && "Enter" === t.key)),
        (n.lastKeyDownTimeStamp = t.timeStamp),
        (n.lastKeyCode = t.key),
        "Backspace" !== t.key && xu(n),
        e.isComposing() ||
          (!g && (_ || x) && 229 === t.keyCode) ||
          il(e, lt, t));
    }
    function Iu(t, e) {
      (t.shiftKey && "CapsLock" !== t.key) ||
        (e._inputState.isShiftKeyDown = !1);
    }
    var Pu = { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: "any" },
      Fu = { ctrlKey: !0 },
      Ru = { metaKey: !0 },
      Lu = { shiftKey: "any" },
      Ku = { altKey: "any", shiftKey: "any" };
    function Bu(t) {
      var e = Da();
      if (null == t.key) return !0;
      var n = e._keyDownShortcuts;
      null === n &&
        ((n = Ut(
          (function () {
            var t = function t(_t235, e, n) {
                return {
                  key: _t235,
                  modifiers: e,
                  onMatch: function onMatch(t, e) {
                    il(e, n, t);
                  },
                };
              },
              e = function e(t, _e167, n, o) {
                return {
                  key: t,
                  modifiers: _e167,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), il(e, n, o));
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
                      il(n, gt, t),
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
                    null === o ||
                      nf(o) ||
                      as(t) ||
                      (t.preventDefault(), il(n, e, t));
                  },
                };
              };
            return [
              t("ArrowRight", Lu, ct),
              t("ArrowLeft", Lu, ut),
              t("ArrowUp", Ku, dt),
              t("ArrowDown", Ku, ht),
              n(babelHelpers["extends"]({}, Pu, { shiftKey: !0 }), !0),
              n(babelHelpers["extends"]({}, Pu, { shiftKey: !1 }), !1),
              t(" ", Pu, pt),
              {
                key: "Backspace",
                modifiers: Lu,
                onMatch: function onMatch(t, e) {
                  il(e, _t, t) && Su(e._inputState);
                },
              },
              t("Escape", Pu, yt),
              t("Delete", {}, mt),
              e("Backspace", zt, et, !0),
              e("Delete", zt, et, !1),
              e("b", Bt, ot, "bold"),
              e("u", Bt, ot, "underline"),
              e("i", Bt, ot, "italic"),
              t("Tab", Lu, xt),
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
                        modifiers: Fu,
                        onMatch: function onMatch(t, e) {
                          (t.preventDefault(), il(e, q, !0));
                        },
                      },
                      t(
                        "ArrowLeft",
                        babelHelpers["extends"]({ metaKey: !0 }, Lu),
                        ft,
                      ),
                      t(
                        "ArrowRight",
                        babelHelpers["extends"]({ metaKey: !0 }, Lu),
                        at,
                      ),
                      e("h", Fu, G, !0),
                      e("d", Fu, G, !1),
                      e("Backspace", Ru, nt, !0),
                      e("Delete", Ru, nt, !1),
                      e("k", Fu, nt, !1),
                    ]
                  : [
                      t("Home", Lu, ft),
                      t("End", Lu, at),
                      e("y", Fu, st, void 0),
                    ],
              ),
              [
                {
                  key: "a",
                  modifiers: Bt,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), il(e, wt, t) && Su(e._inputState));
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
    function zu(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    function $u(t, e, n, o) {
      if (void 0 !== o)
        for (var _t236 of o.editors)
          _t236._inputState.isSelectionChangeFromMouseDown = !1;
      var r = Rl(e, t._rootElement).anchorNode;
      (jl(r) || ys(r)) && Ks(If(Rf(), e, t, n));
    }
    var Wu = new Map();
    function ju(t) {
      var e = t.target;
      if (jl(e) && ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName))
        return;
      var n = El(e);
      if (null === n) return;
      var o = cl(e);
      var r = null;
      var i = null !== o ? tu.get(o) : void 0;
      if (null !== o) {
        if (void 0 !== i) {
          var _t237 = i.editors;
          var _e168 = i.hasShadowEditor;
          if (void 0 === _e168) {
            _e168 = !1;
            for (var _n128 of _t237)
              if (
                null !== _n128._rootElement &&
                Ol(_n128._rootElement.getRootNode())
              ) {
                _e168 = !0;
                break;
              }
            i.hasShadowEditor = _e168;
          }
          if (_e168) {
            var _e169 = null;
            for (var _o80 of _t237) {
              var _t238 = _o80._rootElement;
              if (null === _t238) continue;
              var _i47 = Rl(n, _t238).anchorNode;
              if (null !== _i47 && hs(_i47) === _o80) {
                if (Ol(_t238.getRootNode())) {
                  r = _o80;
                  break;
                }
                null === _e169 && (_e169 = _o80);
              }
            }
            null === r && null !== _e169 && (r = _e169);
          } else {
            var _t239 = n.anchorNode;
            null === _t239 ||
              (jl(_t239) && null !== _t239.shadowRoot) ||
              (r = hs(_t239));
          }
        }
        if (null === r) {
          var _t240 = $l(o);
          r = null !== _t240 ? hs(_t240) : null;
        }
      }
      if (null === r) return;
      r._inputState.isSelectionChangeFromMouseDown &&
        Ga(r, function () {
          return $u(r, n, t, i);
        });
      var s = Ws(r),
        l = s[s.length - 1],
        c = l._key,
        a = Wu.get(c),
        u = a || l;
      (u !== r && ru(n, u, !1),
        ru(n, r, !0),
        r !== l ? Wu.set(c, r) : a && Wu["delete"](c));
    }
    function Uu(t) {
      t._lexicalHandled = !0;
    }
    function Hu(t) {
      return !0 === t._lexicalHandled;
    }
    var Vu = z();
    var _Ju = (function () {
      function Ju(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto17 = Ju.prototype;
      _proto17.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto17.isBefore = function isBefore(t) {
        return this.key === t.key
          ? this.offset < t.offset
          : nh(Ri(bi(this, "next")), Ri(bi(t, "next"))) < 0;
      };
      _proto17.getNode = function getNode() {
        var t = Os(this.key);
        return (null === t && e(20), t);
      };
      _proto17.set = function set(t, e, n, o) {
        var r = this._selection,
          i = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          Oa() ||
            (bs() === i && ks(t),
            null !== r &&
              (r.setCachedNodes(null),
              nf(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return Ju;
    })();
    function Yu(t, e, n) {
      return new _Ju(t, e, n);
    }
    function Gu(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (Ni(e)) {
        r = "text";
        var _t241 = e.getTextContentSize();
        o > _t241 && (o = _t241);
      } else if (!Ur(e)) {
        var _t242 = e.getNextSibling();
        if (Ni(_t242)) ((n = _t242.__key), (o = 0), (r = "text"));
        else {
          var _t243 = e.getParent();
          _t243 && ((n = _t243.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function qu(t, e) {
      if (Ur(e)) {
        var _n129 = e.getLastDescendant();
        Ur(_n129) || Ni(_n129) ? Gu(t, _n129) : Gu(t, e);
      } else Gu(t, e);
    }
    function Xu(t, e, n, o) {
      var r = t.getNode(),
        i = r.getChildAtIndex(t.offset),
        s = Ti();
      if ((s.setFormat(n), s.setStyle(o), qi(i))) i.splice(0, 0, [s]);
      else if (null !== i) {
        var _t244 = xl(r) ? Gi().append(s) : s;
        i.insertBefore(_t244);
      } else if (xl(r)) {
        var _t245 = r.getLastChild();
        Ur(_t245) && !_t245.isInline() && _t245.isEmpty()
          ? _t245.append(s)
          : r.append(Gi().append(s));
      } else r.append(s);
      (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
    }
    function Qu(t, n, o) {
      var r = t.format,
        i = t.style;
      if (!t.isCollapsed()) {
        var _e170 = (t.focus.isBefore(t.anchor) ? t.focus : t.anchor).getNode();
        if (
          (Ni(_e170) && ((r = _e170.getFormat()), (i = _e170.getStyle())),
          t.removeText(),
          (t.format = r),
          (t.style = i),
          "" === n && !o)
        )
          return;
        if (null === bs())
          return (
            "element" === t.anchor.type && Xu(t.anchor, t.focus, r, i),
            void Zu(t, n, r, i)
          );
      }
      "element" === t.anchor.type && Xu(t.anchor, t.focus, r, i);
      var s = t.anchor.getNode();
      Ni(s) || e(398);
      var l = t.anchor.offset,
        c = s.getParentOrThrow(),
        a = s.getTextContentSize();
      if (
        _s(s) ||
        (0 === l &&
          (!s.canInsertTextBefore() ||
            (!c.canInsertTextBefore() && !s.__prev))) ||
        (l === a &&
          (!s.canInsertTextAfter() || (!c.canInsertTextAfter() && !s.__next)))
      ) {
        if (s.isSegmented() && 0 !== l && l !== a) {
          if (null !== bs())
            (s.setMode("normal").setFormat(r).setStyle(i),
              (Da()._inputState.composedSegmentedKey = s.getKey()));
          else {
            var _e171 = Ti(s.getTextContent());
            (_e171.setFormat(r),
              _e171.setStyle(i),
              _e171.setDetail(s.getDetail()),
              xn(s, _e171));
            var _n130 = Ff() === t;
            (s.replace(_e171),
              t.setTextNodeRange(_e171, l, _e171, l),
              _n130 && Ff() !== t && Ks(t));
          }
          return void (("" !== n || o) && Qu(t, n, o));
        }
        if ("" === n && !o) return;
        if (0 === l || l === a) {
          var _e172 = 0 === l,
            _a10 = _e172 ? "previous" : "next",
            _u9 = $d(s, _a10).getNodeAtCaret();
          var _f0;
          Ni(_u9) &&
          (_e172 ? _u9.canInsertTextAfter() : _u9.canInsertTextBefore()) &&
          !_s(_u9)
            ? (_f0 = _u9)
            : ((_f0 = Ti().setFormat(r).setStyle(i)),
              $d(
                (_e172 ? c.canInsertTextBefore() : c.canInsertTextAfter())
                  ? s
                  : c,
                _a10,
              ).insert(_f0));
          var _d8 = _e172 ? void 0 : 0;
          return (_f0.select(_d8, _d8), void Qu(t, n, o));
        }
        var _e173 = Ti(n);
        return (
          _e173.setFormat(r),
          _e173.setStyle(i),
          hi(s),
          di(_e173),
          s.replace(_e173),
          void _e173.select()
        );
      }
      if ("" === n && !o) return;
      var u = c.isInline() && 0 === l && !s.__prev,
        f = c.isInline() && l === a && !s.__next,
        d = s.getFormat() !== r || s.getStyle() !== i;
      if (u || f || d) {
        if ("" !== s.getTextContent() || u || f) return void Zu(t, n, r, i);
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
    function Zu(t, n, o, r) {
      var i = t.anchor.getNode();
      Ni(i) || e(398);
      var s = t.anchor.offset,
        l = Ti(n).setFormat(o).setStyle(r);
      di(l);
      var c = i.getParentOrThrow(),
        a = 0 === s,
        u = a || s === i.getTextContentSize();
      if (u && c.isInline() && !(a ? i.__prev : i.__next))
        $d(c, a ? "previous" : "next").insert(l);
      else {
        var _t246 = u ? i : i.splitText(s)[0];
        a ? _t246.insertBefore(l, !1) : _t246.insertAfter(l, !1);
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
    var _tf = (function () {
      function tf(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto18 = tf.prototype;
      _proto18.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto18.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto18.is = function is(t) {
        if (!rf(t)) return !1;
        var e = this._nodes,
          n = t._nodes;
        return (
          e.size === n.size &&
          Array.from(e).every(function (t) {
            return n.has(t);
          })
        );
      };
      _proto18.isCollapsed = function isCollapsed() {
        return !1;
      };
      _proto18.isBackward = function isBackward() {
        return !1;
      };
      _proto18.getStartEndPoints = function getStartEndPoints() {
        return null;
      };
      _proto18.add = function add(t) {
        ((this.dirty = !0), this._nodes.add(t), (this._cachedNodes = null));
      };
      _proto18["delete"] = function _delete(t) {
        ((this.dirty = !0),
          this._nodes["delete"](t),
          (this._cachedNodes = null));
      };
      _proto18.clear = function clear() {
        ((this.dirty = !0), this._nodes.clear(), (this._cachedNodes = null));
      };
      _proto18.has = function has(t) {
        return this._nodes.has(t);
      };
      _proto18.clone = function clone() {
        return new tf(new Set(this._nodes));
      };
      _proto18.extract = function extract() {
        return this.getNodes();
      };
      _proto18.insertRawText = function insertRawText(t) {};
      _proto18.insertText = function insertText() {};
      _proto18.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === ad(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (Ni(o)) r = o.select();
        else {
          var _t247 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t247, _t247);
        }
        r.insertNodes(t);
        for (var _t248 = 0; _t248 < n; _t248++) e[_t248].remove();
      };
      _proto18.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t249 of e) {
          var _e174 = Os(_t249);
          null !== _e174 && n.push(_e174);
        }
        return (Oa() || (this._cachedNodes = n), n);
      };
      _proto18.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n131 = 0; _n131 < t.length; _n131++)
          e += t[_n131].getTextContent();
        return e;
      };
      _proto18.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === ad(t);
        });
        if ((Ff() || Rf()) === this && t[0]) {
          var _e175 = $d(t[0], "next");
          Oi(th(_e175, _e175));
        }
        for (var _e176 of t) _e176.remove();
        ef();
      };
      return tf;
    })();
    function ef() {
      var t = Rs();
      if (0 === t.getChildrenSize() && null === hd(Ff())) {
        var _e177 = Gi();
        (t.append(_e177), _e177.select());
      }
    }
    function nf(t) {
      return t instanceof _of;
    }
    var _of = (function () {
      function of(t, e, n, o) {
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
      var _proto19 = of.prototype;
      _proto19.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto19.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto19.is = function is(t) {
        return (
          !!nf(t) &&
          this.anchor.is(t.anchor) &&
          this.focus.is(t.focus) &&
          this.format === t.format &&
          this.style === t.style
        );
      };
      _proto19.isCollapsed = function isCollapsed() {
        return this.anchor.is(this.focus);
      };
      _proto19.getNodes = function getNodes() {
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
          for (var _n132 of t)
            if (Ld(_n132)) {
              var _t250 = _n132.origin;
              0 === e.length ? r.add(_t250) : (i++, e.push(_t250));
            } else {
              var _t251 = _n132.origin;
              Ur(_t251) && 0 !== i ? i-- : e.push(_t251);
            }
          if (
            (o && e.push(o.caret.origin),
            Rd(t.focus) &&
              Ur(t.focus.origin) &&
              null === t.focus.getNodeAtCaret())
          )
            for (
              var _n133 = Hd(t.focus.origin, "previous");
              Ld(_n133) &&
              r.has(_n133.origin) &&
              !_n133.origin.isEmpty() &&
              _n133.origin.is(e[e.length - 1]);
              _n133 = Jd(_n133)
            )
              (r["delete"](_n133.origin), e.pop());
          for (; e.length > 1; ) {
            var _t252 = e[e.length - 1];
            if (!Ur(_t252) || i > 0 || _t252.isEmpty() || r.has(_t252)) break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n134 = Ri(t.anchor),
              _o81 = Ri(t.anchor.getFlipped()),
              _r71 = function _r71(t) {
                return Fd(t) ? t.origin : t.getNodeAtCaret();
              },
              _i48 =
                _r71(_n134) ||
                _r71(_o81) ||
                (t.anchor.getNodeAtCaret() ? _n134.origin : _o81.origin);
            e.push(_i48);
          }
          return e;
        })(Ki(wi(this), "next"));
        return (Oa() || (this._cachedNodes = e), e);
      };
      _proto19.setTextNodeRange = function setTextNodeRange(t, e, n, o) {
        return (
          this.anchor.set(t.__key, e, "text"),
          this.focus.set(n.__key, o, "text"),
          this
        );
      };
      _proto19.getTextContent = function getTextContent() {
        if (this.isCollapsed()) return "";
        var t = this.getNodes(),
          e = wi(this).getTextSlices();
        var n = "",
          o = !0;
        for (var _r72 = 0; _r72 < t.length; _r72++) {
          var _i49 = t[_r72];
          if (Ur(_i49) && !_i49.isInline()) {
            o || (n += "\n");
            var _t253 = "";
            for (var _e178 of pd(_i49)) {
              var _n135 = _d(_i49, _e178);
              null !== _n135 && (_t253 += _n135.getTextContent());
            }
            "" !== _t253 ? ((n += _t253), (o = !1)) : (o = !_i49.isEmpty());
          } else if (((o = !1), Ni(_i49))) {
            var _t254 = $i(e, _i49);
            n += _t254 ? _t254.getTextContent() : _i49.getTextContent();
          } else (Yr(_i49) || sa(_i49)) && (n += _i49.getTextContent());
        }
        return n;
      };
      _proto19.applyDOMRange = function applyDOMRange(t) {
        var e = Da(),
          n = e.getEditorState()._selection,
          o = bf(
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
          Ko(this));
      };
      _proto19.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new of(
          Yu(t.key, t.offset, t.type),
          Yu(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto19.toggleFormat = function toggleFormat(t) {
        ((this.format = Ss(this.format, t, null)), (this.dirty = !0));
      };
      _proto19.setFormat = function setFormat(t) {
        ((this.format = t), (this.dirty = !0));
      };
      _proto19.setStyle = function setStyle(t) {
        ((this.style = t), (this.dirty = !0));
      };
      _proto19.hasFormat = function hasFormat(t) {
        var e = w[t];
        return 0 !== (this.format & e);
      };
      _proto19.insertRawText = function insertRawText(t) {
        this.insertNodes(Hf(t));
      };
      _proto19.insertText = function insertText(t) {
        Qu(this, t, !1);
      };
      _proto19.removeText = function removeText() {
        var t = Ff() === this,
          e = this.anchor.key;
        (Mi(this, Pi(wi(this))),
          this.isCollapsed() && Pf(this, e),
          t && Ff() !== this && Ks(this));
      };
      _proto19.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        cf(this, t, e);
      };
      _proto19.insertNodes = function insertNodes(t) {
        var _i50;
        if (0 === t.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if (
          "element" === this.anchor.type &&
          Ur(n) &&
          n.isShadowRoot() &&
          null !== ad(n)
        ) {
          var _n$getFirstChild;
          var _o82 =
            (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(Gi()).getFirstChild();
          if (null !== _o82 && !Ur(_o82)) {
            var _t255 = Gi();
            (_o82.insertBefore(_t255), (_o82 = _t255));
          }
          if (null !== _o82) {
            _o82.selectStart();
            var _n136 = Ff();
            return (nf(_n136) || e(369), _n136.insertNodes(t));
          }
        }
        if ("element" === this.anchor.type && Er(n)) {
          var _e179 = qf(t),
            _o83 = _e179.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _e179.getChildren()),
            void (null !== _o83 && _o83.selectEnd())
          );
        }
        var o = this.isBackward() ? this.focus : this.anchor;
        var r = o.getNode(),
          i = Gc(r, ql);
        var s = t[t.length - 1];
        if (Ur(i) && "__language" in i) {
          if ("__language" in t[0]) this.insertText(t[0].getTextContent());
          else {
            var _Jf = Jf(this),
              _e180 = _Jf[1];
            (i.splice(_e180, 0, t), s.selectEnd());
          }
          return;
        }
        if (
          !t.some(function (t) {
            return (Ur(t) || Yr(t)) && !t.isInline();
          })
        ) {
          Ur(i) || e(211, r.constructor.name, r.getType());
          var _Jf2 = Jf(this, !0),
            _n137 = _Jf2[0],
            _o84 = _Jf2[1];
          return (
            (Ur(_n137) ? _n137 : i).splice(_o84, 0, t),
            void s.selectEnd()
          );
        }
        if (null === i) {
          var _e181 = qf(t),
            _n138 = _e181.getLastDescendant();
          var _o85 = bi(this.anchor, "next");
          for (var _t256 of _e181.getChildren()) _o85 = Hi(_t256, _o85);
          return void (null !== _n138 && _n138.selectEnd());
        }
        if (
          Ur(i) &&
          (null !== ad(i) ||
            (!i.isParentRequired() && !Er(i.getParentOrThrow())))
        ) {
          var _Jf3 = Jf(this),
            _e182 = _Jf3[1],
            _n139 = Vf(t);
          i.splice(_e182, 0, _n139);
          var _o86 = _n139[_n139.length - 1];
          return void (void 0 !== _o86
            ? _o86.selectEnd()
            : i.select(_e182, _e182));
        }
        var l = qf(t),
          c = l.getLastDescendant(),
          a = l.getChildren(),
          u = (function (t) {
            var e = (function (t) {
              var e = t.getNode();
              if (t.offset > 0)
                return "element" === t.type && Ur(e)
                  ? e.getChildAtIndex(t.offset - 1)
                  : null;
              for (
                var _t257 = e;
                null !== _t257 && !ql(_t257) && !xl(_t257);
                _t257 = _t257.getParent()
              ) {
                var _e183 = _t257.getPreviousSibling();
                if (null !== _e183) return _e183;
              }
              return null;
            })(t);
            return sa(e) && sa(e.getPreviousSibling());
          })(o),
          f = Ur(i) && i.isEmpty() ? null : this.insertParagraph();
        f && !i.isAttached() && ((r = this.anchor.getNode()), (i = Gc(r, ql)));
        var d = a[a.length - 1];
        var h = a[0];
        var g;
        ((g = h),
          u ||
            !Ur(g) ||
            !ql(g) ||
            g.isEmpty() ||
            !Ur(i) ||
            (i.isEmpty() && !i.canMergeWhenEmpty()) ||
            (Ur(i) || e(211, r.constructor.name, r.getType()),
            (_i50 = i).append.apply(_i50, Array.from(h.getChildren())),
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
              for (var _t258 of i) s = s.insertAfter(_t258);
            })(i, h)));
        var p = Gc(c, ql),
          _ = c.selectEnd();
        (f &&
          (Ur(p) && (f.canMergeWhenEmpty() || ql(d))
            ? (p.append.apply(p, Array.from(f.getChildren())), f.remove())
            : f.isEmpty() && f.remove()),
          Ur(i) && i.isEmpty() && i.remove());
        var y = Ur(i) ? i.getLastChild() : null;
        sa(y) && p !== i && y.remove();
        var m = Ri(bi(_.anchor, "next"));
        (Ei(_.anchor, m), Ei(_.focus, m));
      };
      _proto19.insertParagraph = function insertParagraph() {
        this.isCollapsed() || this.removeText();
        var t = this.anchor.getNode();
        if ("element" === this.anchor.type && Er(t)) {
          var _e184 = Gi();
          return (
            t.splice(this.anchor.offset, 0, [_e184]),
            _e184.select(),
            _e184
          );
        }
        var _Jf4 = Jf(this),
          n = _Jf4[1],
          o = Gc(this.anchor.getNode(), ql);
        if (null !== o && null !== ad(o)) return null;
        Ur(o) || e(213);
        var r = o.getChildAtIndex(n),
          i = r ? [r].concat(Array.from(r.getNextSiblings())) : [],
          s = o.insertNewAfter(this, !1);
        return s
          ? (s.append.apply(s, Array.from(i)), s.selectStart(), s)
          : null;
      };
      _proto19.insertLineBreak = function insertLineBreak(t) {
        var e = ia();
        if ((this.insertNodes([e]), t)) {
          var _t259 = e.getParentOrThrow(),
            _n140 = e.getIndexWithinParent();
          _t259.select(_n140, _n140);
        }
      };
      _proto19.extract = function extract() {
        var t = this.getNodes();
        if (this.isCollapsed()) return [].concat(Array.from(t));
        var e = this.isBackward(),
          n = wi(this).getTextSlices(),
          o = [];
        for (var _e185 of t) {
          var _t260 = $i(n, _e185),
            _r73 = _t260 ? Wi(_t260, this) : _e185;
          null !== _r73 && o.push(_r73);
        }
        if (1 === t.length && 1 === o.length && Ni(o[0])) {
          var _t261 = o[0],
            _ref94 = e ? [this.focus, this.anchor] : [this.anchor, this.focus],
            _n141 = _ref94[0],
            _r74 = _ref94[1];
          (_n141.set(_t261.getKey(), 0, "text"),
            _r74.set(_t261.getKey(), _t261.getTextContentSize(), "text"));
        }
        return o;
      };
      _proto19.modify = function modify(t, e, n) {
        if (Xf(this, t, e, n)) return;
        var o = "move" === t,
          r = Da(),
          i = bl(pl(r));
        if (!i) return;
        var s = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === s ||
          !Ur(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          kl(s, r, l);
        var a = sl(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = Ni(c) ? ec(c, a, r) : null),
          this.dirty)
        ) {
          var _t262 = sl(r, this.anchor.key);
          var _e186 = _t262;
          if ("text" === this.anchor.type) {
            var _n142 = this.anchor.getNode();
            _e186 = Ni(_n142) ? ec(_n142, _t262, r) : null;
          }
          _e186 && u && $f(i, _e186, this.anchor.offset, u, this.focus.offset);
        }
        if (
          "character" === n &&
          Ni(c) &&
          c.isUnmergeable() &&
          (e
            ? 0 === this.focus.offset
            : this.focus.offset === c.getTextContentSize())
        ) {
          var _t263 = $d(c, e ? "previous" : "next").getNodeAtCaret();
          if (Ni(_t263)) {
            if (!o) {
              var _n143 = _t263.getTextContentSize();
              return (
                e
                  ? this.focus.set(_t263.__key, _n143 - 1, "text")
                  : this.focus.set(_t263.__key, 1, "text"),
                void (this.dirty = !0)
              );
            }
            {
              var _n144 = r.getElementByKey(_t263.getKey()),
                _o87 = _n144 ? ec(_t263, _n144, r) : null;
              if (_o87) {
                var _t264 = e ? _o87.length : 0;
                $f(i, _o87, _t264, _o87, _t264);
              }
            }
          }
        }
        if ((df(i, t, e ? "backward" : "forward", n, l), i.rangeCount > 0)) {
          var _t265 = Pl(i, r._rootElement),
            _n145 = _t265 || i.getRangeAt(0),
            _s27 = this.anchor.getNode(),
            _l20 = Xr(_s27) ? _s27 : yl(_s27);
          (this.applyDOMRange(_n145),
            (this.dirty = !0),
            o ||
              (hf(this, e, _l20),
              (_t265
                ? "backward" !== i.direction
                : i.anchorNode === _n145.startContainer &&
                  i.anchorOffset === _n145.startOffset) || ff(this)));
        }
        "lineboundary" === n && Xf(this, t, e, n, "decorators");
      };
      _proto19.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Ur(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t266 = e.getParent(),
            _n146 =
              e.getNextSibling() ||
              (null === _t266 ? null : _t266.getNextSibling());
          if (Ur(_n146) && _n146.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto19.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e187 = this.anchor;
          var _n147 = _e187.getNode();
          if (this.forwardDeletion(_e187, _n147, t)) {
            var _t267 = Ur(_n147) ? _n147.getNextSibling() : null;
            if (
              !(
                Ur(_n147) &&
                _n147.isEmpty() &&
                Ur(_t267) &&
                _t267.isShadowRoot()
              )
            )
              return;
          }
          var _o88 = bi(_e187, t ? "previous" : "next"),
            _r75 = Qd(_o88);
          if (
            _r75.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            if ("element" === _e187.type) {
              var _t268 = _o88.getNodeAtCaret();
              if (Ur(_t268) && Nl(_t268)) {
                var _e188 = _t268.getParent();
                _t268.remove();
                var _n148 = Ls(_e188, _t268);
                return void (null !== _n148 && _n148.selectStart());
              }
            }
            var _t269 = { type: "initial" };
            for (var _e189 of _r75.iterNodeCarets("shadowRoot"))
              if (Ld(_e189)) {
                if (_e189.origin.isInline());
                else {
                  if (_e189.origin.isShadowRoot()) {
                    if ("merge-block" === _t269.type) break;
                    if (
                      Ur(_r75.anchor.origin) &&
                      _r75.anchor.origin.isEmpty()
                    ) {
                      var _t270 = Ri(_e189);
                      (Mi(this, th(_t270, _t270)), _r75.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t269.type &&
                    "merge-block" !== _t269.type) ||
                    (_t269 = {
                      block: _t269.block,
                      caret: _e189,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t269.type) break;
                if (Rd(_e189)) {
                  if (Ur(_e189.origin)) {
                    if (_e189.origin.isInline()) {
                      if (!_e189.origin.isParentOf(_r75.anchor.origin)) break;
                    } else
                      _t269 = { block: _e189.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Yr(_e189.origin)) {
                    if (_e189.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t269.type &&
                      (_e189.origin.isKeyboardSelectable() ||
                        !_e189.origin.isInline()) &&
                      Ur(_r75.anchor.origin) &&
                      _r75.anchor.origin.isEmpty()
                    ) {
                      _r75.anchor.origin.remove();
                      var _t271 = wf();
                      (_t271.add(_e189.origin.getKey()), Ks(_t271));
                    } else {
                      var _t272 = _e189.origin,
                        _n149 = _t272.getParent();
                      _t272.remove();
                      var _o89 = Ls(_n149, _t272);
                      null !== _o89 && _o89.selectStart();
                    }
                    return;
                  }
                  if (sa(_e189.origin)) return void _e189.origin.remove();
                  break;
                }
              }
            if ("merge-block" === _t269.type) {
              var _t273 = _t269,
                _e190 = _t273.caret,
                _n150 = _t273.block;
              if (pd(_n150).length > 0) return;
              return _e190.origin.isEmpty() &&
                !_n150.isEmpty() &&
                _e190.origin.getParent() === _n150.getParent()
                ? void _e190.origin.remove(!0)
                : (Mi(
                    this,
                    th(
                      !_e190.origin.isEmpty() && _n150.isEmpty()
                        ? Ai($d(_n150, _e190.direction))
                        : _r75.anchor,
                      _e190,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t274 = _e187.getNode(); null !== _t274; ) {
              if (null !== ad(_t274)) return;
              if (Ur(_t274) && _t274.isShadowRoot()) break;
              _t274 = _t274.getParent();
            }
          }
          var _i51 = this.focus;
          if ((gf(this, t, "character"), this.isCollapsed())) {
            if (
              t &&
              0 === _e187.offset &&
              (function (t, e) {
                for (var _n151 = e; _n151; _n151 = _n151.getParent()) {
                  if (Ur(_n151)) {
                    if (_n151.collapseAtStart(t)) return !0;
                    if (xl(_n151)) break;
                  }
                  if (_n151.getPreviousSibling()) break;
                }
                return !1;
              })(this, _e187.getNode())
            )
              return;
          } else {
            var _o90 = "text" === _i51.type ? _i51.getNode() : null;
            if (
              ((_n147 = "text" === _e187.type ? _e187.getNode() : null),
              null !== _o90 && _o90.isSegmented())
            ) {
              var _e191 = _i51.offset,
                _r76 = _o90.getTextContentSize();
              if (
                _o90.is(_n147) ||
                (t && _e191 !== _r76) ||
                (!t && 0 !== _e191)
              )
                return void mf(_o90, t, _e191);
            } else if (null !== _n147 && _n147.isSegmented()) {
              var _r77 = _e187.offset,
                _i52 = _n147.getTextContentSize();
              if (_n147.is(_o90) || (t && 0 !== _r77) || (!t && _r77 !== _i52))
                return void mf(_n147, t, _r77);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode();
              if (r === o.getNode() && "text" === n.type && "text" === o.type) {
                var _t275 = n.offset,
                  _s28 = o.offset,
                  _l21 = _t275 < _s28,
                  _c12 = _l21 ? _t275 : _s28,
                  _a11 = _l21 ? _s28 : _t275,
                  _u0 = _a11 - 1;
                _c12 !== _u0 &&
                  !$s((i = r.getTextContent().slice(_c12, _a11))) &&
                  !yf(i) &&
                  (e ? o.set(o.key, _u0, o.type) : n.set(n.key, _u0, n.type));
              }
              var i;
            })(this, t);
          }
        }
        (e || uf(this),
          this.removeText(),
          t &&
            !e &&
            this.isCollapsed() &&
            "element" === this.anchor.type &&
            0 === this.anchor.offset &&
            ef());
      };
      _proto19.deleteLine = function deleteLine(t) {
        sf(this, t, "lineboundary");
      };
      _proto19.deleteWord = function deleteWord(t) {
        sf(this, t, "word");
      };
      _proto19.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (Oa() || (this._cachedIsBackward = e), e);
      };
      _proto19.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return of;
    })();
    function rf(t) {
      return t instanceof _tf;
    }
    function sf(t, e, n) {
      var o = t.isCollapsed(),
        r = t.anchor,
        i = t.focus;
      var s = !1;
      if (o) {
        if ("word" === n && t.forwardDeletion(r, r.getNode(), e)) return;
        ((s = gf(t, e, n)),
          "lineboundary" === n &&
            (function (t) {
              for (var _e192 of wi(t).iterNodeCarets("shadowRoot"))
                if (Rd(_e192) && sa(_e192.origin))
                  return void Ei(t.focus, Ai(_e192));
            })(t));
      }
      ("lineboundary" !== n ||
        t.isCollapsed() ||
        Gc(r.getNode(), ql) === Gc(i.getNode(), ql) ||
        i.set(r.key, r.offset, r.type),
        t.isCollapsed()
          ? s || t.deleteCharacter(e)
          : (o || uf(t), t.removeText()));
    }
    function lf(t, e) {
      if (rf(t)) {
        for (var _n152 of t.getNodes())
          ci(_n152) && _n152.setFormat(e(_n152.getFormat()));
        return;
      }
      var n = t.isCollapsed() ? [] : t.getNodes(),
        o = n.length ? wi(t).getTextSlices() : [];
      var r,
        i,
        s,
        l = !1,
        c = 0;
      for (var _a12 of n)
        if (Ni(_a12)) {
          r && i && (r.set(i.__key, 0, "text"), (r = void 0));
          var _n153 = $i(o, _a12);
          if (!l && _n153 && 0 === _n153.distance) {
            var _e193 = t.isBackward() ? t.focus : t.anchor;
            "text" === _e193.type && _e193.key === _a12.__key && (r = _e193);
          }
          if (((l = !0), _n153 && 0 === _n153.distance)) continue;
          var _u1 = e(_a12.getFormat()),
            _f1 = r ? _a12.getTextContentSize() : 0,
            _d9 = _n153 && !_s(_a12) ? Wi(_n153, t) : _a12;
          null !== _d9 &&
            (_d9.setFormat(_u1),
            void 0 === s &&
              ((s = _u1),
              (i = _d9),
              r &&
                _d9.getTextContentSize() !== _f1 &&
                (r.set(_d9.__key, 0, "text"), (r = void 0))),
            (c = _u1));
        } else
          Ur(_a12)
            ? _a12.setTextFormat(e(_a12.getTextFormat()))
            : ci(_a12) && _a12.setFormat(e(_a12.getFormat()));
      l
        ? void 0 !== s && (t.format = s | c)
        : (t.setFormat(e(t.format)), ks(null));
    }
    function cf(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && nf(t) ? Ss(t.format, e, null) : n;
      lf(t, function (t) {
        return Ss(t, e, o);
      });
    }
    function af(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function uf(t) {
      var e = Rs();
      !e.isEmpty() &&
        Vi(e, t) &&
        (t.anchor.set(e.getKey(), 0, "element"),
        t.focus.set(e.getKey(), e.getChildrenSize(), "element"));
    }
    function ff(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        i = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, i, !0));
    }
    function df(t, e, n, o, r) {
      var i = "character" === o ? Rl(t, r) : null,
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
      var c = Rl(t, r);
      c.focusNode === s && c.focusOffset === l && t.modify(e, n, o);
    }
    function hf(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return hl(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var i = e ? r[0] : r[r.length - 1],
        s = Ur(i) ? i : i.getParentOrThrow();
      return (e ? s.selectStart() : s.selectEnd(), !0);
    }
    function gf(t, e, n) {
      if (Xf(t, "extend", e, n)) return !1;
      var o = Da(),
        r = bl(pl(o));
      if (!r || "function" != typeof r.modify) return !1;
      var i = o._blockCursorElement,
        s = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === s ||
        null === i ||
        !Ur(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        kl(i, o, s);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && Ni(e) ? ec(e, n, o) : n;
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
        ($f(r, p, _, p, _),
        df(r, "move", e ? "backward" : "forward", n, s),
        0 === r.rangeCount)
      )
        return !1;
      var y = Pl(r, s) || r.getRangeAt(0);
      var m = y.startContainer,
        x = y.startOffset;
      if ("lineboundary" === n && ys(m) && hs(m) === o) {
        var _t276 = zs(m);
        if (Yr(_t276) && _t276.isInline() && !_t276.isIsolated()) {
          var _n154 = o.getElementByKey(_t276.getKey());
          null !== _n154 &&
            _n154.contains(m) &&
            ((m = _n154), (x = e ? 0 : _n154.childNodes.length));
        }
      }
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        Ni(u) &&
        u.isUnmergeable() &&
        d === (e ? 0 : u.getTextContentSize())
      ) {
        var _n155 = $d(u, e ? "previous" : "next").getNodeAtCaret();
        if (Ni(_n155)) {
          var _o91 = e ? _n155.getTextContentSize() - 1 : 1;
          return (t.focus.set(_n155.__key, _o91, "text"), (t.dirty = !0), !1);
        }
      }
      if (h && "character" === n && "text" === l.type) {
        var _n156 = e ? 0 : u.getTextContentSize(),
          _o92 = m === f ? x : d !== _n156 ? _n156 : -1;
        if (_o92 >= 0)
          return (
            _o92 !== d && (t.focus.set(l.key, _o92, "text"), (t.dirty = !0)),
            !1
          );
      }
      var S = o._slotsUsed && Ds(m),
        C = S ? dd(u) : null,
        v = S ? dd(S) : null;
      if (
        S &&
        !Tf(v, C) &&
        pf(t.focus, u, C, v, "deletion", function () {
          return !e;
        })
      )
        return !0;
      var _ref95 = e ? [m, x, f, d] : [f, d, m, x],
        T = _ref95[0],
        N = _ref95[1],
        k = _ref95[2],
        b = _ref95[3],
        E = Xr(u) ? u : yl(u);
      return (
        t.applyDOMRange({
          collapsed: !1,
          endContainer: k,
          endOffset: b,
          startContainer: T,
          startOffset: N,
        }),
        (t.dirty = !0),
        !hf(t, e, E) && e && ff(t),
        !1
      );
    }
    function pf(t, e, n, o, r, i) {
      var s =
        o &&
        (function (t, e) {
          for (var _n157 = ud(t); null !== _n157; ) {
            var _t277 = dd(_n157);
            if (Tf(_t277, e))
              return null !== _t277 || _n157.isAttached() ? _n157 : null;
            _n157 = _t277 && ud(_t277);
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
        var _e194 = s || n;
        if (!Ur(_e194))
          return (
            null !== _e194 &&
              (function (t, e, n) {
                Ur(e)
                  ? t.set(e.getKey(), n ? e.getChildrenSize() : 0, "element")
                  : t.set(e.getKey(), n ? e.getTextContentSize() : 0, "text");
              })(t, _e194, l),
            !0
          );
        ((a = _e194), (u = l ? _e194.getChildrenSize() : 0));
      } else
        ((a = c),
          (u = s.getIndexWithinParent() + (l === ("selection" === r) ? 1 : 0)));
      return (
        "deletion" === r
          ? (function (t, e, n, o) {
              for (;;) {
                var _r78 = e.getChildAtIndex(o ? n : n - 1);
                if (Ni(_r78))
                  return void t.set(
                    _r78.getKey(),
                    o ? 0 : _r78.getTextContentSize(),
                    "text",
                  );
                if (!Ur(_r78) || xl(_r78)) break;
                ((e = _r78), (n = o ? 0 : _r78.getChildrenSize()));
              }
              t.set(e.getKey(), n, "element");
            })(t, a, u, !l)
          : t.set(a.getKey(), u, "element"),
        !0
      );
    }
    function _f() {
      try {
        var _t278 = new RegExp("\\p{Emoji}", "u"),
          _e195 = _t278.test.bind(_t278);
        if (
          _e195("\u2764\ufe0f") &&
          _e195("#\ufe0f\u20e3") &&
          _e195("\u{1f44d}")
        )
          return _e195;
      } catch (t) {}
      return function () {
        return !1;
      };
    }
    var yf = _f();
    function mf(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        i = r.length;
      var s = 0,
        l = 0;
      for (var _t279 = 0; _t279 < i; _t279++) {
        var _o93 = _t279 === i - 1;
        if (
          ((l = s), (s += r[_t279].length), (e && s === n) || s > n || _o93)
        ) {
          (r.splice(_t279, 1), _o93 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function xf(t, n, o, r) {
      var i,
        s = n,
        l = !1;
      if (jl(t)) {
        var _c13 = !1;
        var _a13 = t.childNodes,
          _u10 = _a13.length,
          _f10 = r._blockCursorElement;
        (s === _u10 && _u10 > 0 && ((_c13 = !0), (s = _u10 - 1)),
          void 0 !== As(t, r) || yc(t, r) || (l = !0));
        var _d0 = _a13[s],
          _h7 = !1;
        if (_d0 === _f10) ((_d0 = _a13[s + 1]), (_h7 = !0));
        else if (null !== _f10) {
          var _e196 = _f10.parentNode;
          t === _e196 &&
            n > Array.prototype.indexOf.call(_e196.children, _f10) &&
            s--;
        }
        if (((i = zs(_d0)), Ni(i))) s = jd(i, _c13 ? "next" : "previous");
        else {
          var _a14 = zs(t);
          if (null === _a14) return null;
          if (Ur(_a14)) {
            var _u11$resolveChildInde;
            var _l22 = r.getElementByKey(_a14.getKey());
            null === _l22 && e(214);
            var _u11 = Zl(_a14, _l22, r);
            ((_u11$resolveChildInde = _u11.resolveChildIndex(_a14, _l22, t, n)),
              (_a14 = _u11$resolveChildInde[0]),
              (s = _u11$resolveChildInde[1]),
              Ur(_a14) || e(215),
              _c13 &&
                s >= _a14.getChildrenSize() &&
                (s = Math.max(0, _a14.getChildrenSize() - 1)));
            var _f11 = _a14.getChildAtIndex(s);
            if (
              Ur(_f11) &&
              (function (t, e, n) {
                var o = t.getParent();
                return (
                  null === n ||
                  null === o ||
                  !o.canBeEmpty() ||
                  o !== n.getNode()
                );
              })(_f11, 0, o)
            ) {
              var _t280 = _c13
                ? _f11.getLastDescendant()
                : _f11.getFirstDescendant();
              (null === _t280
                ? (_a14 = _f11)
                : ((_f11 = _t280),
                  (_a14 = Ur(_f11) ? _f11 : _f11.getParentOrThrow())),
                (s = 0));
            }
            Ni(_f11)
              ? ((i = _f11),
                (_a14 = null),
                (s = jd(_f11, _c13 ? "next" : "previous")))
              : _f11 !== _a14 &&
                _c13 &&
                !_h7 &&
                (Ur(_a14) || e(216),
                (s = Math.min(_a14.getChildrenSize(), s + 1)));
          } else {
            var _e197 = ud(_a14),
              _o94 = null !== _e197 ? _e197 : _a14,
              _i53 = _o94.getIndexWithinParent(),
              _l23 = r.getElementByKey(_a14.getKey());
            var _c14 = "after";
            if (null !== _l23 && zs(t) === _a14) {
              var _e198 = Zl(_a14, _l23, r);
              _e198.element !== _l23
                ? (_c14 = _e198.resolveLeafPosition(_l23, t, n))
                : 0 === n && Yr(_a14) && (_c14 = "before");
            }
            ((s = "before" === _c14 ? _i53 : _i53 + 1),
              (_a14 = _o94.getParentOrThrow()));
          }
          if (Ur(_a14)) return [Yu(_a14.__key, s, "element"), l];
        }
      } else i = zs(t);
      return Ni(i) ? [Yu(i.__key, jd(i, s, "clamp"), "text"), l] : null;
    }
    function Sf(t, e, n) {
      var o = t.getNode();
      if (Es(o)) return;
      var r = 0 === t.offset;
      if (!r && t.offset !== o.getTextContent().length) return;
      var i = r ? "previous" : "next",
        s = $d(o, i).getNodeAtCaret();
      if (r === e || !Ur(s) || !s.isInline() || (r && n)) {
        if (r && !e)
          Ni(s) &&
            !o.isUnmergeable() &&
            t.set(s.__key, s.getTextContent().length, "text");
        else if (null === s && (n || (!r && e))) {
          var _e199 = o.getParent();
          if (
            Ur(_e199) &&
            _e199.isInline() &&
            (r ||
              (!_e199.canInsertTextAfter() && _e199.getTextContentSize() > 1))
          ) {
            var _n158 = $d(_e199, i).getNodeAtCaret();
            Ni(_n158) &&
              t.set(_n158.__key, r ? _n158.getTextContent().length : 0, "text");
          }
        }
      } else t.set(s.__key, r ? s.getChildrenSize() : 0, "element");
    }
    function Cf(t) {
      var e = Os(t.key);
      return null === e ? null : dd(e);
    }
    function vf(t, e, n) {
      var o = Cf(t),
        r = Cf(e);
      return !Tf(o, r) && pf(e, Os(t.key), o, r, "selection", n);
    }
    function Tf(t, e) {
      return null === t ? null === e : t.is(e);
    }
    function Nf(t) {
      var e = vf(t.anchor, t.focus, function () {
        return (
          1 !==
          (function (t, e) {
            var n = (function (t, e) {
              var n = new Map();
              for (
                var _e200 = null, _o95 = t;
                null !== _o95;
                _e200 = _o95, _o95 = oh(_o95)
              )
                n.set(_o95.getKey(), _e200);
              for (
                var _t281 = null, _o96 = e;
                null !== _o96;
                _t281 = _o96, _o96 = oh(_o96)
              ) {
                var _e201 = n.get(_o96.getKey());
                if (void 0 === _e201) continue;
                var _r79 = _o96.getLatest();
                return null === _e201
                  ? null === _t281
                    ? { commonAncestor: _r79, type: "same" }
                    : { b: _t281, commonAncestor: _r79, type: "ancestor" }
                  : null === _t281
                    ? { a: _e201, commonAncestor: _r79, type: "descendant" }
                    : {
                        a: _e201,
                        b: _t281,
                        commonAncestor: _r79,
                        type: "branch",
                      };
              }
              return null;
            })(t.origin, e.origin);
            if (null === n) return null;
            switch (n.type) {
              case "same":
                return rh(t, e);
              case "ancestor":
                return "child" === t.type && null === ad(n.b) ? -1 : 1;
              case "descendant":
                return "child" === e.type && null === ad(n.a) ? 1 : -1;
              case "branch": {
                var _t282 = ad(n.a) && n.a.getKey(),
                  _e202 = ad(n.b) && n.b.getKey();
                if (_t282 && _e202)
                  for (var _o97 of gd(n.commonAncestor).values())
                    if (_o97 === _t282 || _o97 === _e202)
                      return _o97 === _t282 ? -1 : 1;
                return _t282 ? -1 : _e202 ? 1 : n.a.isBefore(n.b) ? -1 : 1;
              }
            }
          })(bi(t.anchor, "next"), bi(t.focus, "next"))
        );
      });
      return (e && (t.dirty = !0), e);
    }
    function kf(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      var o = 0;
      for (
        var _t283 = n && n.previousSibling;
        _t283;
        _t283 = _t283.previousSibling
      )
        o++;
      return o;
    }
    function bf(t, e, n, o, r, i) {
      if (null === t || null === n || !fs(r, t, n)) return null;
      var s = xf(t, e, nf(i) ? i.anchor : null, r);
      if (null === s) return null;
      var l = xf(n, o, nf(i) ? i.focus : null, r);
      if (null === l) return null;
      var c = s[0],
        a = s[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e203 = zs(t),
          _o98 = zs(n);
        if (Yr(_e203) && Yr(_o98)) return null;
      }
      var d =
        r._slotsUsed &&
        vf(c, u, function () {
          return (function (t, e, n, o) {
            if (t === n) return o >= e;
            var r = t.compareDocumentPosition(n);
            return r & Node.DOCUMENT_POSITION_CONTAINED_BY
              ? kf(t, n) >= e
              : r & Node.DOCUMENT_POSITION_CONTAINS
                ? o > kf(n, t)
                : 0 !== (r & Node.DOCUMENT_POSITION_FOLLOWING);
          })(t, e, n, o);
        });
      return (
        (function (t, e) {
          if ("text" === t.type && "text" === e.type) {
            var _n159 = t.isBefore(e),
              _o99 = t.is(e);
            (Sf(t, _n159, _o99),
              Sf(e, !_n159, _o99),
              _o99 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function Ef(t) {
      return Ur(t) && !t.isInline();
    }
    function Of(t, e, n, o, r, i) {
      var s = Aa(),
        l = new _of(Yu(t, e, r), Yu(n, o, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function Mf() {
      var t = Yu("root", 0, "element"),
        e = Yu("root", 0, "element");
      return new _of(t, e, 0, "");
    }
    function wf() {
      return new _tf(new Set());
    }
    function Af(t, e) {
      return If(null, t, e, null);
    }
    var Df = new Set([
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
    function If(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var i = o || r.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c = "keydown" === s && i,
        a = c && Wl(c),
        u =
          c &&
          (c.ctrlKey || c.metaKey || Df.has(c.key)) &&
          Ul(a) &&
          hs(a) === n,
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
      if (nf(t) && !f) return t.clone();
      {
        if (null === e) return null;
        var _o100 = Rl(e, n._rootElement);
        if (
          ((d = _o100.anchorNode),
          (h = _o100.focusNode),
          (g = _o100.anchorOffset),
          (p = _o100.focusOffset),
          (l || u || void 0 === s) && nf(t) && !fs(n, d, h))
        )
          return t.clone();
      }
      var _ = bf(d, g, h, p, n, t);
      if (null === _) return null;
      var y = _[0],
        m = _[1],
        x = _[2],
        S = nf(t) ? t : null,
        C = new _of(y, m, S ? S.format : 0, S ? S.style : "");
      return (S && Pf(C, S.anchor.key), (C.dirty = x), C);
    }
    function Pf(t, e) {
      var n = t.anchor;
      if (n.key === e) return;
      var o = n.getNode();
      var r = 0,
        i = "";
      (Ni(o)
        ? ((r = o.getFormat()), (i = o.getStyle()))
        : Ur(o) && ((r = o.getTextFormat()), (i = o.getTextStyle())),
        (t.format === r && t.style === i) ||
          ((t.format = r), (t.style = i), (t.dirty = !0)));
    }
    function Ff() {
      return Aa()._selection;
    }
    function Rf() {
      return Da()._editorState._selection;
    }
    function Lf(t, e) {
      var n = e.__key;
      return t.anchor.key === n || t.focus.key === n;
    }
    function Kf(t, e, n, o) {
      if (o === void 0) {
        o = 1;
      }
      if (Lf(t, e))
        for (var _r80 of [t.anchor, t.focus]) {
          _r80.key === e.__key &&
            ((n <= _r80.offset && o > 0) || (n < _r80.offset && o < 0)) &&
            _r80.set(e.__key, Math.max(0, _r80.offset + o), "element");
          var _t284 = _r80.getNode();
          if (Ur(_t284)) {
            var _e204 = _t284.getChildrenSize(),
              _n160 = _r80.offset >= _e204,
              _o101 = _t284.getChildAtIndex(_n160 ? _e204 - 1 : _r80.offset);
            Ni(_o101) &&
              _r80.set(
                _o101.__key,
                _n160 ? _o101.getTextContentSize() : 0,
                "text",
              );
          }
        }
    }
    function Bf(t, e, n, o, r) {
      var i = o || r;
      if (Ni(i) || Ur(i)) {
        var _e205 = Ni(i);
        t.set(
          i.__key,
          null === o ? 0 : _e205 ? i.getTextContentSize() : i.getChildrenSize(),
          _e205 ? "text" : "element",
        );
      } else {
        var _o102 = e.getIndexWithinParent();
        t.set(n.__key, -1 === _o102 ? n.getChildrenSize() : _o102, "element");
      }
    }
    function zf(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function $f(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function Wf(t, e, n) {
      var o = sl(t, e.getKey());
      if (Ur(e)) {
        var _r81 = Zl(e, o, t);
        return [_r81.element, n + _r81.getFirstChildOffset()];
      }
      return [o, n];
    }
    function jf(t, e, n, o, r, i) {
      var s = i.getRootNode(),
        l = ms(s) || Ol(s) ? $l(s) : null;
      if ((r.has(Oo) && l !== i) || (null !== l && cs(l, l))) return;
      var c = Rl(o, i);
      var a;
      if (!nf(e))
        return void (
          null !== t &&
          fs(n, c.anchorNode, c.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _Wf = Wf(n, h, f.offset),
        p = _Wf[0],
        _ = _Wf[1],
        _Wf2 = Wf(n, g, d.offset),
        y = _Wf2[0],
        m = _Wf2[1],
        x = e.format,
        S = e.style,
        C = e.isCollapsed();
      var T = p,
        N = y,
        k = !1;
      if (
        ("text" === f.type
          ? ((T = Ni(h) ? ec(h, p, n) : null),
            (k = h.getFormat() !== x || h.getStyle() !== S))
          : nf(t) && "text" === t.anchor.type && (k = !0),
        "text" === d.type && (N = Ni(g) ? ec(g, y, n) : null),
        null === T || null === N)
      )
        return;
      var b = C && Ni(g) && Es(g) && ys(N) && N.nodeValue === v ? v.length : m;
      if (
        (C &&
          (null === t || k || (nf(t) && (t.format !== x || t.style !== S))) &&
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
          c.focusOffset === b &&
          c.anchorNode === T &&
          c.focusNode === N)
      ) {
        if (null === l || !i.contains(l)) {
          var _t285 = null !== l ? hs(l) : null;
          (null !== _t285 && _t285 !== n) ||
            r.has(Do) ||
            i.focus({ preventScroll: !0 });
        }
        if ("element" !== f.type) return;
      }
      if (
        ($f(o, T, _, N, b), u && e.isCollapsed() && null !== i && !r.has(Do))
      ) {
        var _t286 = zl(i);
        if (null === _t286 || !i.contains(_t286)) {
          var _t287 = $l(i.ownerDocument),
            _e206 = null !== _t287 ? hs(_t287) : null;
          (null !== _e206 && _e206 !== n) || i.focus({ preventScroll: !0 });
        }
      }
      if (!r.has(wo) && e.isCollapsed() && null !== i && i === zl(i)) {
        var _t288 =
          nf(e) && "element" === e.anchor.type
            ? (function (t, e, n) {
                var o = e.childNodes[n];
                if (!jl(o)) return o || null;
                var r = As(o, t),
                  i = void 0 !== r ? Os(r) : null;
                return null === i || Ur(i) ? o : Zl(i, o, t).element;
              })(n, T, _)
            : (void 0 === a && (a = Fl(o, i)), a);
        if (null !== _t288) {
          var _e207;
          if (ys(_t288)) {
            var _n161 = _t288.ownerDocument.createRange();
            (_n161.selectNode(_t288), (_e207 = _n161.getBoundingClientRect()));
          } else
            _e207 = jl(_t288)
              ? _t288.getBoundingClientRect()
              : (function (t) {
                  var e = t.getBoundingClientRect(),
                    n = t.startContainer,
                    o = t.startOffset;
                  if (
                    !t.collapsed ||
                    0 !== e.width ||
                    0 !== e.height ||
                    !ys(n) ||
                    0 === n.length
                  )
                    return e;
                  var r = t.cloneRange();
                  return (
                    o > 0 ? r.setStart(n, o - 1) : r.setEnd(n, 1),
                    r.getBoundingClientRect()
                  );
                })(_t288);
          !(function (t, e, n, o) {
            if (o === void 0) {
              o = null;
            }
            var r = cl(n),
              i = gl(r);
            if (null === r || null === i) return;
            var s = n.getBoundingClientRect();
            if (e.bottom < s.top) return;
            if (null !== o && e.height > 0) {
              var _t289 = e.left,
                _r82 = e.right,
                _s29 = jl(o) ? o : ll(o);
              for (; null !== _s29 && n.contains(_s29); ) {
                var _e208 = ul(i, _s29, _t289, _r82);
                ((_t289 -= _e208),
                  (_r82 -= _e208),
                  (_s29 = _s29 === n ? null : ll(_s29)));
              }
            }
            var l = e.top,
              c = e.bottom,
              a = 0,
              u = 0,
              f = n;
            for (; null !== f; ) {
              var _e209 = f === r.body;
              if (_e209) {
                var _e210 = i.visualViewport;
                if (_e210) {
                  var _t290 = _e210.offsetTop;
                  ((a = _t290), (u = _t290 + _e210.height));
                } else ((a = 0), (u = pl(t).innerHeight));
                var _n162 = i.getComputedStyle(r.documentElement),
                  _o103 = parseFloat(_n162.scrollPaddingTop),
                  _s30 = parseFloat(_n162.scrollPaddingBottom);
                (isFinite(_o103) && (a += _o103),
                  isFinite(_s30) && (u -= _s30));
              } else {
                var _t291 = f === n ? s : f.getBoundingClientRect();
                ((a = _t291.top), (u = _t291.bottom));
              }
              var _o104 = 0;
              if (
                (l < a ? (_o104 = -(a - l)) : c > u && (_o104 = c - u),
                0 !== _o104)
              )
                if (_e209) i.scrollBy(0, _o104);
                else {
                  var _t292 = f.scrollTop;
                  f.scrollTop += _o104;
                  var _e211 = f.scrollTop - _t292;
                  ((l -= _e211), (c -= _e211));
                }
              if (_e209) break;
              f = ll(f);
            }
          })(n, _e207, i, T);
        }
      }
      !(function (t, e, n, o, r) {
        var i = t._inputState;
        ((i.isSelectionChangeFromDOMUpdate = !0),
          (i.selectionChangeFromDOMUpdatePoints =
            void 0 !== e && void 0 !== n && void 0 !== o && void 0 !== r
              ? { anchorNode: e, anchorOffset: n, focusNode: o, focusOffset: r }
              : null));
      })(n, T, _, N, b);
    }
    function Uf(t, e) {
      for (var _n163 of t.split(/(\r?\n|\t)/))
        "\n" === _n163 || "\r\n" === _n163
          ? e.linebreak()
          : "\t" === _n163
            ? e.tab()
            : "" !== _n163 && e.text(_n163);
    }
    function Hf(t) {
      var e = [];
      return (
        Uf(t, {
          linebreak: function linebreak() {
            return e.push(ia());
          },
          tab: function tab() {
            return e.push(Zi());
          },
          text: function text(t) {
            return e.push(Ti(t));
          },
        }),
        e
      );
    }
    function Vf(t) {
      var e = [];
      for (var _n164 of t)
        sa(_n164) ||
          ((!Ur(_n164) && !Yr(_n164)) || _n164.isInline()
            ? e.push(_n164)
            : Ur(_n164) &&
              e.push.apply(e, Array.from(Vf(_n164.getChildren()))));
      return e;
    }
    function Jf(t, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t;
      t.isCollapsed() || o.removeText();
      var r = Ff();
      (nf(r) && (o = r), nf(o) || e(161));
      var i = o.anchor;
      var s = i.getNode(),
        l = i.offset;
      for (; !ql(s) && null === ad(s); ) {
        var _Yf;
        var _t293 = s;
        if (((_Yf = Yf(s, l, n)), (s = _Yf[0]), (l = _Yf[1]), _t293.is(s)))
          break;
      }
      return [s, l];
    }
    function Yf(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t.getParent();
      if (!o) {
        var _t294 = Gi();
        return (Rs().append(_t294), _t294.select(), [Rs(), 0]);
      }
      if (Ni(t)) {
        var _n165 = t.splitText(e);
        if (0 === _n165.length) return [o, t.getIndexWithinParent()];
        var _r83 = 0 === e ? 0 : 1;
        return [o, _n165[0].getIndexWithinParent() + _r83];
      }
      if (!Ur(t) || 0 === e) return [o, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _o105 = new _of(
            Yu(t.__key, e, "element"),
            Yu(t.__key, e, "element"),
            0,
            "",
          ),
          _i54 = t.insertNewAfter(_o105);
        if (_i54)
          _i54.append.apply(_i54, [r].concat(Array.from(r.getNextSiblings())));
        else if (n) return [t, e];
      }
      return [o, t.getIndexWithinParent() + 1];
    }
    function Gf(t) {
      return sa(t) || _l(t) || Ni(t) || t.isParentRequired();
    }
    function qf(t) {
      var e = Gi();
      var n = null;
      for (var _o106 = 0; _o106 < t.length; _o106++) {
        var _r84 = t[_o106];
        if (Gf(_r84)) {
          if (null === n) {
            ((n = _r84.createParentElementNode()), e.append(n));
            var _i55 = t[_o106 + 1];
            if (sa(_r84) && (void 0 === _i55 || !Gf(_i55))) continue;
          }
          n.append(_r84);
        } else (e.append(_r84), (n = null));
      }
      return e;
    }
    function Xf(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref96 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e212 = _ref96[0],
          _o107 = _ref96[1];
        return (_o107.set(_e212.key, _e212.offset, _e212.type), !0);
      }
      var i = bi(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === o,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === r,
        u = !1;
      if (!Li(c)) {
        for (var _t295 of c) {
          a = !1;
          var _e213 = _t295.origin;
          if (Yr(_e213)) {
            if (_e213.isIsolated()) {
              u = !0;
              break;
            }
            if (((c = _t295), s && _e213.isInline())) continue;
          }
          break;
        }
        if (u) return !0;
        if (a)
          for (var _t296 of Qd(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Ld(_t296)) _t296.origin.isInline() || (c = _t296);
            else {
              if (Ur(_t296.origin)) continue;
              Yr(_t296.origin) && !_t296.origin.isInline() && (c = _t296);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && Yr(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t297 = wf();
        return (_t297.add(c.origin.getKey()), Ks(_t297), !0);
      }
      return ((c = Ri(c)), l && Ei(t.anchor, c), Ei(t.focus, c), a || !s);
    }
    function Qf(t, e, n) {
      var o = null === e ? null : e.__key,
        r = null === n ? null : n.__key;
      (null === e ? (t.__first = r) : (e.__next = r),
        null === n ? (t.__last = o) : (n.__prev = o));
    }
    function Zf(t, e) {
      var n = Da();
      if (
        (n._recordTextEdits && ai(n).push(["detach", t.__key, e.__key]),
        !n._recordNodeMoves)
      )
        return;
      var o = n._editorState._nodeMap;
      if (o.has(t.__key)) {
        var _e214 = Aa(),
          _n166 = _e214._movedNodes || (_e214._movedNodes = new WeakMap());
        var _r85 = _n166.get(o);
        (void 0 === _r85 && ((_r85 = new Set()), _n166.set(o, _r85)),
          _r85.add(t.__key));
      }
    }
    function td(t, e, n, o) {
      var r = e.__key;
      (null === n ? (t.__first = r) : (n.__next = r),
        null === o ? (t.__last = r) : (o.__prev = r),
        (e.__prev = null === n ? null : n.__key),
        (e.__next = null === o ? null : o.__key),
        (e.__parent = t.__key));
      var i = Da();
      i._recordTextEdits &&
        ai(i).push([
          "attach",
          r,
          t.__key,
          e.__prev,
          e.__next,
          Ni(e) ? e.__text : null,
        ]);
    }
    function ed(t) {
      null !== ad(t) && e(380, t.__key, String(ad(t)));
      var n = t.getParent();
      if (null !== n) {
        var _e215 = n.getWritable();
        Zf(t, _e215);
        var _o108 = t.getPreviousSibling(),
          _r86 = t.getNextSibling();
        (Qf(_e215, _o108 && _o108.getWritable(), _r86 && _r86.getWritable()),
          (t.__prev = null),
          (t.__next = null),
          (t.__parent = null),
          _e215.__size--);
      }
    }
    function nd(t, e) {
      var n = e && t.getParent(),
        o = e && n && Lf(e, n) ? t.getIndexWithinParent() : -1,
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
        ed(t),
        e && n && -1 !== o && Kf(e, n, o, -1),
        e && (e._cachedIsBackward = null),
        r
      );
    }
    function od(t, e, n, o) {
      Ma();
      var r = "next" === e;
      vl(t, n);
      var i = t.getWritable(),
        s = n.getWritable();
      t.getParentOrThrow();
      var l = Ff(),
        c = o && nf(l) ? l : null,
        a = nd(s, c),
        u = t.getParentOrThrow().getWritable(),
        f =
          c && ((r && null !== a && a.length > 0) || Lf(c, u))
            ? t.getIndexWithinParent() + (r ? 1 : 0)
            : -1,
        d = r ? t.getNextSibling() : t.getPreviousSibling(),
        h = d && d.getWritable();
      if (
        (td(u, s, r ? i : h, r ? h : i),
        u.__size++,
        c && -1 !== f && (Kf(c, u, f), r && null !== a))
      )
        for (var _t298 of a) _t298.set(u.__key, f + 1, "element");
      return n;
    }
    function rd(t, e, n) {
      Ma();
      var o = t.origin,
        r = t.direction,
        i = "next" === r,
        s = ud(o);
      if (null !== s) return i ? s.selectNext(e, n) : s.selectPrevious(e, n);
      var l = t.getNodeAtCaret(),
        c = o.getParentOrThrow();
      if (null === l) return i ? c.select() : c.select(0, 0);
      if (Ur(l)) return i ? l.select(0, 0) : l.select();
      if (Ni(l)) return l.select(e, n);
      var a = l.getIndexWithinParent() + (i ? 0 : 1);
      return c.select(a, a);
    }
    function id(t, e) {
      var n = [];
      for (
        var _o109 = t;
        null !== _o109;
        _o109 =
          "next" === e ? _o109.getNextSibling() : _o109.getPreviousSibling()
      )
        n.push(_o109);
      return n;
    }
    var sd = new Map();
    function ld(t) {
      return Ur(t) || Yr(t);
    }
    function cd(t) {
      return Ur(t) || Yr(t);
    }
    function ad(t) {
      var e = t.getLatest();
      return cd(e) ? e.__slotHost : null;
    }
    function ud(t) {
      var n = ad(t);
      if (null === n) return null;
      var o = Os(n);
      return (Ur(o) || Yr(o) || e(370), o);
    }
    function fd(t) {
      var e = ud(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref98 of gd(e)) {
        var _t299 = _ref98[0];
        var _o110 = _ref98[1];
        if (_o110 === n) return _t299;
      }
      return null;
    }
    function dd(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== ad(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function hd(t) {
      var _t$getNodes$;
      if (null === t) return null;
      var e = nf(t)
        ? t.anchor.getNode()
        : (_t$getNodes$ = t.getNodes()[0]) != null
          ? _t$getNodes$
          : null;
      return null === e ? null : dd(e);
    }
    function gd(t) {
      var e = t.getLatest();
      return ld(e) && null !== e.__slots ? e.__slots : sd;
    }
    function pd(t) {
      return Array.from(gd(t).keys());
    }
    function _d(t, e) {
      var n = gd(t).get(e);
      return void 0 === n ? null : Os(n);
    }
    var yd = ["__proto__", "constructor", "prototype"],
      md = Symbol("slotMapOwner");
    function xd(t) {
      var e = t.__slots;
      return (
        (null !== e && e[md] === t) ||
          ((e = new Map(e)), (e[md] = t), (t.__slots = e)),
        e
      );
    }
    var Sd = new WeakMap(),
      Cd = [];
    function vd(t) {
      for (var _ref100 of Jc(t)) {
        var _e216 = _ref100.ownNodeConfig;
        {
          var _t300 = _e216 && _e216.slots;
          if (_t300) return _t300;
        }
      }
      return Cd;
    }
    function Td(t) {
      var e = "";
      for (var _n167 of gd(t).values()) {
        var _t301 = Os(_n167);
        null !== _t301 && (e += _t301.getTextContent());
      }
      return e;
    }
    function Nd(t, e, n) {
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
    function kd(t, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        e(373, n);
      var r = t.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!Ur(o) && !Yr(o)) || o.isInline()) && e(374, o.__key);
      var i = t.getWritable(),
        s = xd(i),
        l = s.get(n);
      void 0 !== l && bd(l);
      var c = o.getWritable(),
        a = ud(c);
      if (null !== a) {
        var _t302 = fd(c);
        (null !== _t302 && xd(a.getWritable())["delete"](_t302),
          (c.__slotHost = null));
      }
      return (
        ed(c),
        (c.__slotHost = i.__key),
        s.set(n, c.__key),
        (function (t) {
          var n = t.__slots;
          if (null === n || n.size < 2) return;
          var o = (function (t) {
            var n = Sd.get(t);
            if (void 0 === n) {
              var _o111 = vd(t),
                _r87 = new Map();
              for (var _n168 of _o111)
                (yd.includes(_n168) && e(371, t.name, _n168),
                  _r87.has(_n168) && e(372, t.name, _n168),
                  _r87.set(_n168, _r87.size));
              ((n = _r87), Sd.set(t, n));
            }
            return n;
          })(t.constructor);
          var r = null,
            i = !0;
          for (var _t303 of n.keys()) {
            if (null !== r && Nd(r, _t303, o) > 0) {
              i = !1;
              break;
            }
            r = _t303;
          }
          if (i) return;
          var s = Array.from(n).sort(function (_ref101, _ref102) {
            var t = _ref101[0];
            var e = _ref102[0];
            return Nd(t, e, o);
          });
          n.clear();
          for (var _ref104 of s) {
            var _t304 = _ref104[0];
            var _e217 = _ref104[1];
            n.set(_t304, _e217);
          }
        })(i),
        (Da()._slotsUsed = !0),
        (Aa()._slotsUsed = !0),
        i
      );
    }
    function bd(t) {
      var n = Os(t);
      if (null === n) return;
      var o = n.getWritable();
      (cd(o) || e(377, t), (o.__slotHost = null), o.remove());
    }
    var Ed = { next: "previous", previous: "next" };
    var _Od4 = (function () {
      function Od(t) {
        this.origin = t;
      }
      var _proto20 = Od.prototype;
      _proto20[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return eh({
            hasNext: Rd,
            initial: this.getAdjacentCaret(),
            map: function map(t) {
              return t;
            },
            step: function step(t) {
              return t.getAdjacentCaret();
            },
          });
        };
      _proto20.getAdjacentCaret = function getAdjacentCaret() {
        return $d(this.getNodeAtCaret(), this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return $d(this.origin, this.direction);
      };
      _proto20.remove = function remove() {
        var t = this.getNodeAtCaret();
        return (t && t.remove(), this);
      };
      _proto20.replaceOrInsert = function replaceOrInsert(t, e) {
        var n = this.getNodeAtCaret();
        return (
          t.is(this.origin) ||
            t.is(n) ||
            (null === n ? this.insert(t) : n.replace(t, e)),
          this
        );
      };
      _proto20.splice = function splice(t, n, o) {
        if (o === void 0) {
          o = "next";
        }
        var r = o === this.direction ? n : Array.from(n).reverse();
        var i = this;
        var s = this.getParentAtCaret(),
          l = new Map();
        for (
          var _e218 = i.getAdjacentCaret();
          null !== _e218 && l.size < t;
          _e218 = _e218.getAdjacentCaret()
        ) {
          var _t305 = _e218.origin.getWritable();
          l.set(_t305.getKey(), _t305);
        }
        for (var _t306 of r) {
          if (l.size > 0) {
            var _n169 = i.getNodeAtCaret();
            if (_n169) {
              if (
                (l["delete"](_n169.getKey()),
                l["delete"](_t306.getKey()),
                _n169.is(_t306) || i.origin.is(_t306))
              );
              else {
                var _e219 = _t306.getParent();
                (_e219 && _e219.is(s) && _t306.remove(), _n169.replace(_t306));
              }
            } else null === _n169 && e(263, Array.from(l).join(" "));
          } else i.insert(_t306);
          i = $d(_t306, this.direction);
        }
        for (var _t307 of l.values()) _t307.remove();
        return this;
      };
      return Od;
    })();
    var _Md3 = (function (_Od) {
      function Md() {
        var _this6;
        for (
          var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
          _key0 < _len0;
          _key0++
        ) {
          args[_key0] = arguments[_key0];
        }
        return (
          ((_this6 = _Od.call.apply(_Od, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Md, _Od);
      var _proto21 = Md.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Hd(t, this.direction);
      };
      _proto21.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return $d(Dd(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        var t = Ad(this.direction);
        return $d(this.getNodeAtCaret(), t) || Hd(this.origin, t);
      };
      _proto21.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto21.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Md &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Md;
    })(_Od4);
    var wd = { root: Xr, shadowRoot: xl };
    function Ad(t) {
      return Ed[t];
    }
    function Dd(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || wd[e](t) ? null : null === ad(t) ? t : null;
    }
    var _Id3 = (function (_Od2) {
      function Id() {
        var _this7;
        for (
          var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
          _key1 < _len1;
          _key1++
        ) {
          args[_key1] = arguments[_key1];
        }
        return (
          ((_this7 = _Od2.call.apply(_Od2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Id, _Od2);
      var _proto22 = Id.prototype;
      _proto22.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : $d(t, this.direction);
      };
      _proto22.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto22.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto22.getChildCaret = function getChildCaret() {
        return Ur(this.origin) ? Hd(this.origin, this.direction) : null;
      };
      _proto22.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return $d(Dd(this.getParentAtCaret(), t), this.direction);
      };
      _proto22.getFlipped = function getFlipped() {
        var t = Ad(this.direction);
        return (
          $d(this.getNodeAtCaret(), t) || Hd(this.origin.getParentOrThrow(), t)
        );
      };
      _proto22.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Id &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto22.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Id || t instanceof _Pd3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Id;
    })(_Od4);
    var _Pd3 = (function (_Od3) {
      function Pd(t, e) {
        var _this8;
        ((_this8 = _Od3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(Pd, _Od3);
      var _proto23 = Pd.prototype;
      _proto23.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Wd(t, this.direction, this.offset);
      };
      _proto23.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto23.getChildCaret = function getChildCaret() {
        return null;
      };
      _proto23.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return $d(Dd(this.getParentAtCaret(), t), this.direction);
      };
      _proto23.getFlipped = function getFlipped() {
        return Wd(this.origin, Ad(this.direction), this.offset);
      };
      _proto23.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Pd &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto23.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Id3 || t instanceof Pd) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto23.getSiblingCaret = function getSiblingCaret() {
        return $d(this.origin, this.direction);
      };
      return Pd;
    })(_Od4);
    function Fd(t) {
      return t instanceof _Pd3;
    }
    function Rd(t) {
      return t instanceof _Id3;
    }
    function Ld(t) {
      return t instanceof _Md3;
    }
    var Kd = {
        next: (function (_Pd) {
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
              ((_this9 = _Pd.call.apply(_Pd, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _Pd);
          var _proto24 = _class.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_Pd3),
        previous: (function (_Pd2) {
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
              ((_this0 = _Pd2.call.apply(_Pd2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _Pd2);
          var _proto25 = _class3.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_Pd3),
      },
      Bd = {
        next: (function (_Id) {
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
              ((_this1 = _Id.call.apply(_Id, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Id);
          var _proto26 = _class5.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Id3),
        previous: (function (_Id2) {
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
              ((_this10 = _Id2.call.apply(_Id2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Id2);
          var _proto27 = _class7.prototype;
          _proto27.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto27.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Id3),
      },
      zd = {
        next: (function (_Md) {
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
              ((_this11 = _Md.call.apply(_Md, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Md);
          var _proto28 = _class9.prototype;
          _proto28.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto28.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Md3),
        previous: (function (_Md2) {
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
              ((_this12 = _Md2.call.apply(_Md2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Md2);
          var _proto29 = _class1.prototype;
          _proto29.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getLastChild();
          };
          _proto29.insert = function insert(t) {
            return (
              this.origin.splice(this.origin.getChildrenSize(), 0, [t]),
              this
            );
          };
          return _class1;
        })(_Md3),
      };
    function $d(t, e) {
      return t ? new Bd[e](t) : null;
    }
    function Wd(t, e, n) {
      return t ? new Kd[e](t, jd(t, n)) : null;
    }
    function jd(t, e, o) {
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
    function Ud(t, e) {
      return new _Gd(t, e);
    }
    function Hd(t, e) {
      return Ur(t) ? new zd[e](t) : null;
    }
    function Vd(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Jd(t) {
      return t && Vd(t.getAdjacentCaret());
    }
    var _Yd = (function () {
      function Yd(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto30 = Yd.prototype;
      _proto30.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Yd(t, e, this.direction);
      };
      _proto30.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto30.getTextSlices = function getTextSlices() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return Fd(t) && Fd(e) && t.isSameNodeCaret(e)
          ? [Ud(t, e.offset - t.offset), null]
          : [Fd(t) ? qd(t, "anchor") : null, Fd(e) ? qd(e, "focus") : null];
      };
      _proto30.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = Fd(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = Fd(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : Jd(e) || e.getParentCaret(t);
          };
        return eh({
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
      _proto30[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.iterNodeCarets("root");
        };
      return Yd;
    })();
    var _Gd = (function () {
      function Gd(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto31 = Gd.prototype;
      _proto31.getSliceIndices = function getSliceIndices() {
        var t = this.distance,
          e = this.caret.offset,
          n = e + t;
        return n < e ? [n, e] : [e, n];
      };
      _proto31.getTextContent = function getTextContent() {
        var _this$getSliceIndices = this.getSliceIndices(),
          t = _this$getSliceIndices[0],
          e = _this$getSliceIndices[1];
        return this.caret.origin.getTextContent().slice(t, e);
      };
      _proto31.getTextContentSize = function getTextContentSize() {
        return Math.abs(this.distance);
      };
      _proto31.removeTextSlice = function removeTextSlice() {
        var _this$caret = this.caret,
          t = _this$caret.origin,
          e = _this$caret.direction,
          _this$getSliceIndices2 = this.getSliceIndices(),
          n = _this$getSliceIndices2[0],
          o = _this$getSliceIndices2[1];
        return Wd(
          (function (t, e, n) {
            var o = t.getTextContent(),
              r = o.slice(0, e) + "" + o.slice(e + n);
            if (
              !Da()._recordTextEdits ||
              !Number.isInteger(e) ||
              !Number.isInteger(n) ||
              e < 0 ||
              e > o.length ||
              n < 0
            )
              return t.setTextContent(r);
            var i = fi;
            fi = [t.__key, e, Math.min(n, o.length - e), ""];
            try {
              return t.setTextContent(r);
            } finally {
              fi = i;
            }
          })(t, n, o - n),
          e,
          n,
        );
      };
      return Gd;
    })();
    function qd(t, e) {
      var n = t.direction,
        o = t.origin;
      return Ud(t, jd(o, "focus" === e ? Ad(n) : n) - t.offset);
    }
    function Xd(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function Qd(t) {
      return th(t, Xd(Hd(Rs(), Ad(t.direction)), t.direction));
    }
    function Zd(t) {
      return th(t, t);
    }
    function th(t, n) {
      return (
        t.direction !== n.direction && e(265),
        new _Yd(t, n, t.direction)
      );
    }
    function eh(t) {
      var _ref105;
      var e = t.initial,
        n = t.hasNext,
        o = t.step,
        r = t.map;
      var i = e;
      return (
        (_ref105 = {}),
        (_ref105[
          typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
        ] = function () {
          return this;
        }),
        (_ref105.next = function next() {
          if (!n(i)) return { done: !0, value: void 0 };
          var t = { done: !1, value: r(i) };
          return ((i = o(i)), t);
        }),
        _ref105
      );
    }
    function nh(t, n) {
      var o = ch(t.origin, n.origin);
      switch (
        (null === o && e(275, t.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same":
          return rh(t, n);
        case "ancestor":
          return "child" === t.type ? -1 : 1;
        case "descendant":
          return "child" === n.type ? 1 : -1;
        case "branch":
          return ih(o);
      }
    }
    function oh(t) {
      return t.getParent() || ud(t);
    }
    function rh(t, e) {
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
    function ih(t) {
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
    function sh(t, e) {
      return e.is(t);
    }
    function lh(t) {
      return Ur(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function ch(t, n) {
      if (t.is(n)) return { commonAncestor: t, type: "same" };
      var o = new Map();
      for (
        var _lh = lh(t), _e220 = _lh[0], _n170 = _lh[1];
        _e220;
        _n170 = _e220, _e220 = _e220.getParent()
      )
        o.set(_e220, _n170);
      for (
        var _lh2 = lh(n), _r88 = _lh2[0], _i56 = _lh2[1];
        _r88;
        _i56 = _r88, _r88 = _r88.getParent()
      ) {
        var _s31 = o.get(_r88);
        if (void 0 !== _s31)
          return null === _s31
            ? (sh(t, _r88) || e(276),
              { commonAncestor: _r88, type: "ancestor" })
            : null === _i56
              ? (sh(n, _r88) || e(277),
                { commonAncestor: _r88, type: "descendant" })
              : (((Ur(_s31) || sh(t, _s31)) &&
                  (Ur(_i56) || sh(n, _i56)) &&
                  _r88.is(_s31.getParent()) &&
                  _r88.is(_i56.getParent())) ||
                  e(278),
                { a: _s31, b: _i56, commonAncestor: _r88, type: "branch" });
      }
      return null;
    }
    var _ah = (function (_Error) {
      function ah(t, e, n) {
        var _this13;
        ((_this13 = _Error.call(this, e) || this),
          (_this13.name = "LexicalWarning"),
          (_this13.code = t),
          (_this13.data = n));
        return _this13;
      }
      babelHelpers.inheritsLoose(ah, _Error);
      return ah;
    })(babelHelpers.wrapNativeSuper(Error));
    function uh() {
      var e = [];
      for (
        var _len16 = arguments.length, t = new Array(_len16), _key16 = 0;
        _key16 < _len16;
        _key16++
      ) {
        t[_key16] = arguments[_key16];
      }
      for (var _n171 of t)
        if (_n171 && "string" == typeof _n171)
          for (var _ref107 of _n171.matchAll(/\S+/g)) {
            var _t308 = _ref107[0];
            e.push(_t308);
          }
      return e;
    }
    ((exports.$addUpdateTag = fl),
      (exports.$applyNodeReplacement = Cl),
      (exports.$assumeActiveEditor = function (t) {
        (null !== Aa() && null === xa && (xa = t), xa !== t && n(378));
      }),
      (exports.$caretFromPoint = bi),
      (exports.$caretRangeFromSelection = wi),
      (exports.$cloneWithProperties = uc),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = uc(t))[vo] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = nh),
      (exports.$copyNode = Sl),
      (exports.$create = Yc),
      (exports.$createChildrenArray = qc),
      (exports.$createLineBreakNode = ia),
      (exports.$createNodeSelection = wf),
      (exports.$createParagraphNode = Gi),
      (exports.$createPoint = Yu),
      (exports.$createRangeSelection = Mf),
      (exports.$createRangeSelectionFromDom = Af),
      (exports.$createTabNode = Zi),
      (exports.$createTextNode = Ti),
      (exports.$exportNodeJSON = ee),
      (exports.$extendCaretToRange = Qd),
      (exports.$findMatchingParent = Gc),
      (exports.$flushSyncAfterUpdate = function () {
        var t = Aa();
        (Ma(), (t._flushSync = !0));
      }),
      (exports.$formatText = cf),
      (exports.$fullReconcile = Ia),
      (exports.$generateNodesFromRawText = Hf),
      (exports.$getAdjacentChildCaret = Jd),
      (exports.$getAdjacentNode = ol),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = Jd(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = Jd(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = Xd),
      (exports.$getCaretRange = th),
      (exports.$getCaretRangeInDirection = Ki),
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
          : [af(n), af(o)];
      }),
      (exports.$getChildCaret = Hd),
      (exports.$getChildCaretAtIndex = Bi),
      (exports.$getChildCaretOrSelf = Vd),
      (exports.$getCollapsedCaretRange = Zd),
      (exports.$getCommonAncestor = ch),
      (exports.$getCommonAncestorResultBranchOrder = ih),
      (exports.$getDOMSlot = Zl),
      (exports.$getDOMTextNode = ec),
      (exports.$getDocument = Il),
      (exports.$getEditor = Xl),
      (exports.$getEditorDOMRenderConfig = Ql),
      (exports.$getElementAndOffsetForPoint = Wf),
      (exports.$getNearestNodeFromDOMNode = Ds),
      (exports.$getNearestRootOrShadowRoot = yl),
      (exports.$getNodeByKey = Os),
      (exports.$getNodeByKeyOrThrow = Tl),
      (exports.$getNodeFromDOMNode = Ms),
      (exports.$getPreviousSelection = Rf),
      (exports.$getRoot = Rs),
      (exports.$getSelection = Ff),
      (exports.$getSelectionSlotFrame = hd),
      (exports.$getSiblingCaret = $d),
      (exports.$getSlot = _d),
      (exports.$getSlotFrame = dd),
      (exports.$getSlotHost = ud),
      (exports.$getSlotNameWithinHost = fd),
      (exports.$getSlotNames = pd),
      (exports.$getState = ln),
      (exports.$getStateChange = function (t, e, n) {
        var o = ln(t, n, on),
          r = ln(e, n, on);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = Ff();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = jd),
      (exports.$getTextPointCaret = Wd),
      (exports.$getTextPointCaretSlice = Ud),
      (exports.$getTextPointCaretSliceForNode = $i),
      (exports.$getWritableNodeState = hn),
      (exports.$hasAncestor = hl),
      (exports.$hasUpdateTag = function (t) {
        return Da()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = Hi),
      (exports.$insertNodes = function (t) {
        var e = Ff() || Rf();
        (null === e && (e = Rs().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockContainer = Er),
      (exports.$isBlockElementNode = Ef),
      (exports.$isBlockFullySelected = Vi),
      (exports.$isChildCaret = Ld),
      (exports.$isCompactExport = te),
      (exports.$isDecoratorNode = Yr),
      (exports.$isEditorState = function (t) {
        return t instanceof _ea;
      }),
      (exports.$isElementDOMSlot = tc),
      (exports.$isElementNode = Ur),
      (exports.$isEventFromEmbeddedInput = as),
      (exports.$isExtendableTextPointCaret = Li),
      (exports.$isInlineElementOrDecoratorNode = _l),
      (exports.$isInlineFormattable = ci),
      (exports.$isLeafNode = function (t) {
        return Ni(t) || sa(t) || Yr(t);
      }),
      (exports.$isLexicalNode = bo),
      (exports.$isLineBreakNode = sa),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Od4;
      }),
      (exports.$isNodeSelection = rf),
      (exports.$isParagraphNode = qi),
      (exports.$isRangeSelection = nf),
      (exports.$isRootNode = Xr),
      (exports.$isRootOrShadowRoot = xl),
      (exports.$isSelectionCapturedInDecoratorInput = cs),
      (exports.$isShadowRootNode = ml),
      (exports.$isSiblingCaret = Rd),
      (exports.$isSlotChild = cd),
      (exports.$isSlotHost = ld),
      (exports.$isTabNode = ts),
      (exports.$isTextNode = Ni),
      (exports.$isTextPointCaret = Fd),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _Gd;
      }),
      (exports.$isTokenOrSegmented = _s),
      (exports.$isTokenOrTab = ps),
      (exports.$markSlotEditable = _c),
      (exports.$needsBlockCursorBeside = Nl),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Aa();
        if (n._readOnly) {
          var _t309 = ac(n).get(e);
          return _t309 ? Array.from(_t309.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref109 of o) {
          var _n172 = _ref109[1];
          _n172 instanceof t &&
            _n172.__type === e &&
            _n172.isAttached() &&
            r.push(_n172);
        }
        return r;
      }),
      (exports.$normalizeCaret = Ri),
      (exports.$normalizeSelection__EXPERIMENTAL = Ko),
      (exports.$onUpdate = dl),
      (exports.$parseSerializedNode = function (t) {
        return Ba(t, Da()._nodes);
      }),
      (exports.$removeFromParent = vs),
      (exports.$removeSlot = function (t, e) {
        var n = t.getWritable();
        if (null === n.__slots) return n;
        var o = n.__slots.get(e);
        return (void 0 !== o && (bd(o), xd(n)["delete"](e)), n);
      }),
      (exports.$removeTextFromCaretRange = Pi),
      (exports.$rewindSiblingCaret = Ai),
      (exports.$selectAll = function (t) {
        var e = Rs();
        if (nf(t)) {
          var _e221 = t.anchor,
            _n173 = t.focus,
            _o112 = _e221.getNode();
          if (Xr(_o112))
            return (
              _e221.set(_o112.getKey(), 0, "element"),
              _n173.set(_o112.getKey(), _o112.getChildrenSize(), "element"),
              Qs(t, _o112),
              t
            );
          var _r89 = _o112.getTopLevelElementOrThrow(),
            _i57 = _r89.getParent();
          return null === _i57
            ? (Ur(_r89) &&
                (_e221.set(_r89.getKey(), 0, "element"),
                _n173.set(_r89.getKey(), _r89.getChildrenSize(), "element"),
                Qs(t, _r89)),
              t)
            : (_e221.set(_i57.getKey(), 0, "element"),
              _n173.set(_i57.getKey(), _i57.getChildrenSize(), "element"),
              Qs(t, _i57),
              t);
        }
        {
          var _t310 = e.select(0, e.getChildrenSize());
          return (Ks(Qs(_t310, e)), _t310);
        }
      }),
      (exports.$setCompositionKey = ks),
      (exports.$setDirectionFromDOM = dc),
      (exports.$setFormatFromDOM = hc),
      (exports.$setPointFromCaret = Ei),
      (exports.$setSelection = Ks),
      (exports.$setSelectionFromCaretRange = Oi),
      (exports.$setSlot = kd),
      (exports.$setState = cn),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref111 of Object.entries(e)) {
          var _t311 = _ref111[0];
          var _o113 = _ref111[1];
          "boolean" == typeof _o113 && n.push([_t311, _o113]);
        }
        0 !== n.length &&
          lf(t, function (t) {
            for (var _ref113 of n) {
              var _e222 = _ref113[0];
              var _o114 = _ref113[1];
              t = Ss(t, _e222, _o114 ? w[_e222] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = Ui),
      (exports.$splitNode = function (t, n) {
        var o = t.getChildAtIndex(n);
        (null == o && (o = t), xl(t) && e(102));
        var _r92 = function r(t) {
            var n = t.getParentOrThrow(),
              i = xl(n),
              s = t !== o || i ? Sl(t) : t;
            if (i)
              return ((Ur(t) && Ur(s)) || e(133), t.insertAfter(s), [t, s, s]);
            {
              var _r91 = _r92(n),
                _e223 = _r91[0],
                _o115 = _r91[1],
                _i58 = _r91[2],
                _l24 = t.getNextSiblings();
              return (
                _i58.append.apply(_i58, [s].concat(Array.from(_l24))),
                [_e223, _o115, s]
              );
            }
          },
          _r90 = _r92(o),
          i = _r90[0],
          s = _r90[1];
        return [i, s];
      }),
      (exports.$splitTextPointCaretSlice = Wi),
      (exports.$updateDOMSelection = jf),
      (exports.$updateRangeSelectionFromCaretRange = Mi),
      (exports.$withCompactExport = Zt),
      (exports.ArtificialNode__DO_NOT_USE = _na),
      (exports.BEFORE_INPUT_COMMAND = H),
      (exports.BLUR_COMMAND = Rt),
      (exports.CAN_REDO_COMMAND = It),
      (exports.CAN_UNDO_COMMAND = Pt),
      (exports.CAN_USE_BEFORE_INPUT = d),
      (exports.CAN_USE_DOM = r),
      (exports.CLEAR_EDITOR_COMMAND = At),
      (exports.CLEAR_HISTORY_COMMAND = Dt),
      (exports.CLICK_COMMAND = U),
      (exports.COLLABORATION_TAG = Oo),
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
      (exports.COMPOSITION_END_COMMAND = Y),
      (exports.COMPOSITION_END_TAG = Po),
      (exports.COMPOSITION_START_COMMAND = J),
      (exports.COMPOSITION_START_TAG = Io),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Q),
      (exports.CONTROL_OR_ALT = zt),
      (exports.CONTROL_OR_META = Bt),
      (exports.CONTROL_OR_OTHER_KEY = K),
      (exports.COPY_COMMAND = Ot),
      (exports.CUT_COMMAND = Mt),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = ha),
      (exports.DEFER_COMPOSITION_MERGE_TAG = Mo),
      (exports.DELETE_CHARACTER_COMMAND = G),
      (exports.DELETE_LINE_COMMAND = nt),
      (exports.DELETE_WORD_COMMAND = et),
      (exports.DRAGEND_COMMAND = Et),
      (exports.DRAGOVER_COMMAND = bt),
      (exports.DRAGSTART_COMMAND = kt),
      (exports.DROP_COMMAND = Tt),
      (exports.DecoratorNode = _Jr),
      (exports.ElementNode = _jr4),
      (exports.FOCUS_COMMAND = Ft),
      (exports.FORMAT_ELEMENT_COMMAND = Nt),
      (exports.FORMAT_TEXT_COMMAND = ot),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = Eo),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Ct),
      (exports.INPUT_COMMAND = V),
      (exports.INSERT_LINE_BREAK_COMMAND = q),
      (exports.INSERT_PARAGRAPH_COMMAND = X),
      (exports.INSERT_TAB_COMMAND = St),
      (exports.INTERNAL_$expandSelectionToWholeDocument = uf),
      (exports.INTERNAL_$isBlock = ql),
      (exports.INTERNAL_$normalizeNodeStructure = function (t) {
        if (!Ur(t) || !t.isAttached()) return;
        var e = new _tr();
        ((e.full = !0), (e.explicit = !0));
        var n = t.getParent();
        Nr(e, function () {
          if (null === n || xl(t)) return void yr(t, e);
          var o = n.getKey();
          (e.touched.add(t.getKey()), yr(t, e));
          for (var _t312 of Array.from(e.touched)) {
            var _n174 = Os(_t312);
            null !== _n174 && _n174.getLatest().__parent === o && ir(_n174, e);
          }
        });
      }),
      (exports.INTERNAL_$recordTextMove = function (t, e, n, o) {
        var r = Da();
        if (!r._recordTextEdits) return void o();
        var i = t.__key,
          s = e.__key,
          l = e.getLatest().__next === i,
          c = ai(r),
          a = c.length;
        if ((o(), !l || c.length !== a + 2)) return;
        var u = c[a],
          f = c[a + 1];
        if ("set" !== u[0] || u[1] !== s) return;
        var d = u[2],
          h = u[3].slice(d.length);
        h.length === n &&
          0 !== n &&
          d + h === u[3] &&
          ("set" === f[0]
            ? f[1] === i &&
              f[2] === h + f[3] &&
              c.splice(a, 2, ["move", i, s, n, f[2], d])
            : "detach" === f[0] &&
              f[1] === i &&
              t.getLatest().__text === h &&
              c.splice(a, 1, ["move", i, s, n, h, d]));
      }),
      (exports.INTERNAL_$recordTextRetype = function (t, e) {
        var n = Da();
        if (!n._recordTextEdits) return;
        var o = t.getLatest(),
          r = e.getLatest(),
          i = ai(n),
          s = i[i.length - 2],
          l = i[i.length - 1];
        o.__key !== r.__key &&
          o.__text === r.__text &&
          void 0 !== s &&
          "detach" === s[0] &&
          s[1] === o.__key &&
          "attach" === l[0] &&
          l[1] === r.__key &&
          l[2] === s[2] &&
          null === o.__parent &&
          r.__parent === l[2] &&
          i.push(["retype", o.__key, r.__key, r.__text]);
      }),
      (exports.INTERNAL_$withExportMemo = sc),
      (exports.INTERNAL_getActiveEditorState = function () {
        return ma;
      }),
      (exports.INTERNAL_isInlineContent = function (t) {
        return Vo(t);
      }),
      (exports.INTERNAL_isNodeStructureEnforced = br),
      (exports.INTERNAL_registerNodeStructure = function (t) {
        var e = kr || (kr = new WeakMap());
        var n = e.get(t);
        if (void 0 === n) {
          var _o116 = [],
            _r93 = new Set(),
            _i59 = function _i59(t) {
              var e = t.__key;
              (_o116.push(e), _r93.add(e));
            },
            _s32 = new WeakSet([t.getEditorState()]);
          var _l25 = !0;
          var _c15 = function _c15() {
              var t = _l25;
              ((_l25 = !1),
                (function (t, e, n) {
                  var o = Rs();
                  if (0 === t.length && !e && !Tr(o)) return;
                  var r = new _tr();
                  r.full = e;
                  var i = o.getKey();
                  (r.wrapsAll.add(i), r.path.add(i));
                  var s = n ? Xl().getEditorState()._nodeMap : null,
                    l = [];
                  for (var _n175 of e ? [] : t) {
                    l.length = 0;
                    var _t313 = !1;
                    var _e224 = Os(_n175);
                    if (
                      (Ur(_e224) &&
                        _e224.isShadowRoot() &&
                        r.wrapsAll.add(_n175),
                      null === s || null === _e224 || !Cr(_e224, s.get(_n175)))
                    ) {
                      for (
                        var _n176 = _e224;
                        null !== _n176;
                        _n176 = _n176.getParent()
                      ) {
                        if (r.path.has(_n176.getKey())) {
                          _t313 = !0;
                          break;
                        }
                        l.push(_n176);
                      }
                      if (_t313) for (var _t314 of l) r.addPath(_t314);
                    }
                  }
                  ((t.length = 0),
                    (r.path.size > 1 || e || Tr(o)) &&
                      Nr(r, function () {
                        yr(o, r);
                      }));
                })(_o116, t, !_s32.has(Xl().getEditorState())));
            },
            _a15 = t.registerUpdateListener(function (_ref114) {
              var t = _ref114.editorState,
                e = _ref114.dirtyElements,
                n = _ref114.dirtyLeaves;
              var o = t._nodeMap,
                i = function i(t) {
                  return !_r93.has(t) && o.has(t);
                };
              var l = !0;
              for (var _ref116 of e) {
                var _t315 = _ref116[0];
                var _n177 = _ref116[1];
                if (_n177 && "root" !== _t315 && i(_t315)) {
                  l = !1;
                  break;
                }
              }
              if (l)
                for (var _t316 of n)
                  if (i(_t316)) {
                    l = !1;
                    break;
                  }
              (_r93.clear(), l || _s32.add(t));
            }),
            _u12 = [],
            _f12 = [];
          for (var _ref118 of t._nodes) {
            var _e225 = _ref118[0];
            var _ref117$ = _ref118[1];
            var _n178 = _ref117$.klass;
            var _o117 = _ref117$.transforms;
            {
              var _t317 = "root" === _e225 ? _c15 : _i59;
              (_o117.add(_t317),
                _u12.push([_o117, _t317]),
                (_n178.prototype instanceof _jr4 ||
                  _n178.prototype instanceof _Jr) &&
                  _f12.push(_e225));
            }
          }
          ((n = {
            dispose: function dispose() {
              _a15();
              for (var _ref120 of _u12) {
                var _t318 = _ref120[0];
                var _e226 = _ref120[1];
                _t318["delete"](_e226);
              }
            },
            refs: 0,
          }),
            e.set(t, n),
            Fs(t, _f12));
        }
        n.refs++;
        var o = !1;
        var r = n;
        return function () {
          o || ((o = !0), 0 === --r.refs && (r.dispose(), e["delete"](t)));
        };
      }),
      (exports.IS_ALL_FORMATTING = C),
      (exports.IS_ANDROID = p),
      (exports.IS_ANDROID_CHROME = m),
      (exports.IS_APPLE = a),
      (exports.IS_APPLE_WEBKIT = x),
      (exports.IS_BOLD = 1),
      (exports.IS_CHROME = y),
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
      (exports.KEY_DELETE_COMMAND = mt),
      (exports.KEY_DOWN_COMMAND = lt),
      (exports.KEY_ENTER_COMMAND = gt),
      (exports.KEY_ESCAPE_COMMAND = yt),
      (exports.KEY_MODIFIER_COMMAND = Lt),
      (exports.KEY_SPACE_COMMAND = pt),
      (exports.KEY_TAB_COMMAND = xt),
      (exports.LexicalWarning = _ah),
      (exports.LineBreakNode = _oa),
      (exports.MOVE_TO_END = at),
      (exports.MOVE_TO_START = ft),
      (exports.NODE_STATE_DIRECT = on),
      (exports.NODE_STATE_KEY = L),
      (exports.NODE_STATE_LATEST = rn),
      (exports.OUTDENT_CONTENT_COMMAND = vt),
      (exports.PASTE_COMMAND = Z),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Ji),
      (exports.REDO_COMMAND = st),
      (exports.REMOVE_TEXT_COMMAND = tt),
      (exports.RootNode = _qr),
      (exports.SELECTION_CHANGE_COMMAND = W),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = j),
      (exports.SELECT_ALL_COMMAND = wt),
      (exports.SET_TEXT_FORMAT_COMMAND = rt),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = Ao),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = wo),
      (exports.SKIP_SELECTION_FOCUS_TAG = Do),
      (exports.TEXT_TYPE_TO_FORMAT = w),
      (exports.TabNode = _Qi),
      (exports.TextNode = _gi2),
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
        var n = uh.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, Array.from(n));
      }),
      (exports.aliasTableOf = be),
      (exports.aliasedValue = Qe),
      (exports.arraySetValue = function (t) {
        return we(
          function (e) {
            if (!Array.isArray(e)) return Object.freeze([]);
            if (
              Object.isFrozen(e) &&
              (function (t, e) {
                for (var _n179 = 0; _n179 < e.length; _n179++) {
                  var _o118 = e[_n179];
                  if (
                    "string" != typeof _o118 ||
                    (_n179 > 0 && !(e[_n179 - 1] < _o118)) ||
                    !Ke(t, _o118) ||
                    t(_o118) !== _o118
                  )
                    return !1;
                }
                return !0;
              })(t, e)
            )
              return e;
            var n = [];
            for (var _o119 = 0; _o119 < e.length; _o119++) {
              var _r94 = e[_o119];
              void 0 !== _r94 && Ke(t, _r94) && n.push(t(_r94));
            }
            n.sort();
            var o = [];
            for (var _t319 = 0; _t319 < n.length; _t319++)
              (0 !== _t319 && n[_t319] === n[_t319 - 1]) || o.push(n[_t319]);
            return Object.freeze(o);
          },
          { item: t, kind: "set" },
          void 0,
          Ze,
          function (t) {
            return Array.isArray(t);
          },
        );
      }),
      (exports.arrayValue = function (t) {
        return we(
          function (e) {
            if (!Array.isArray(e)) return [];
            var n = new Array(e.length);
            for (var _o120 = 0; _o120 < e.length; _o120++)
              n[_o120] = t(e[_o120]);
            return n;
          },
          { item: t, kind: "array" },
          void 0,
          function (e, n) {
            if (!Array.isArray(e) || !Array.isArray(n) || e.length !== n.length)
              return !1;
            for (var _o121 = 0; _o121 < e.length; _o121++)
              if (!Ce(t, e[_o121], n[_o121])) return !1;
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
        return we(
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
      (exports.compileKeyboardShortcuts = Ut),
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
      (exports.createCommand = $),
      (exports.createEditor = function (t) {
        var n = t || {},
          o = Fa(),
          r = n.theme || {},
          i = void 0 === t ? o : n.parentEditor || null,
          s = n.disableEvents || !1,
          l = Zc(),
          c = n.namespace || (null !== i ? i._config.namespace : Us()),
          a = n.editorState,
          u = [_qr, _gi2, _oa, _Qi, _Ji, _na].concat(Array.from(n.nodes || [])),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var p;
        if (void 0 === t && null !== o) p = o._nodes;
        else {
          p = new Map();
          for (var _t320 = 0; _t320 < u.length; _t320++) {
            var _o122 = u[_t320],
              _r95 = null,
              _i60 = null;
            if (_o122 && "object" == typeof _o122) {
              var _t321 = _o122;
              ((_o122 = _t321.replace),
                (_r95 = _t321["with"]),
                (_i60 = _t321.withKlass || null));
            }
            if (
              "function" != typeof _o122 ||
              !_o122.prototype ||
              !(_o122 === _ko5 || _o122.prototype instanceof _ko5)
            ) {
              var _r96 = "<unknown>";
              try {
                _r96 = JSON.parse(Jt);
              } catch (_unused2) {}
              e(
                365,
                String(_t320 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o122
                  ? "" +
                      _o122.name +
                      ("function" == typeof _o122.getType
                        ? " (type " + String(_o122.getType()) + ")"
                        : "")
                  : String(_o122),
                String(_r96),
              );
            }
            Bc(_o122);
            var _s33 = _o122.getType(),
              _l26 = da(_o122);
            p.set(_s33, {
              exportDOM: h && h["export"] ? h["export"].get(_o122) : void 0,
              klass: _o122,
              replace: _r95,
              replaceWithKlass: _i60,
              sharedNodeState: un(u[_t320]),
              transforms: _l26,
            });
          }
        }
        var _ = new _a16(
          l,
          i,
          p,
          {
            disableEvents: s,
            dom: babelHelpers["extends"]({}, ha, t && t.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || ua,
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
            (t.registerCommand(H, Tu, 0),
              t.registerCommand(V, ku, 0),
              t.registerCommand(J, Eu, 0),
              t.registerCommand(Y, Ou, 0),
              t.registerCommand(lt, Bu, 0));
          })(_),
          _
        );
      }),
      (exports.createRefCountedRegistry = Ht),
      (exports.createSharedNodeState = un),
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
      (exports.declaredAccepts = De),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.enumValue = Ge),
      (exports.findAllLexicalElementsDeep = Al),
      (exports.flipDirection = Ad),
      (exports.getActiveElement = zl),
      (exports.getActiveElementDeep = $l),
      (exports.getComposedEventTarget = Wl),
      (exports.getComposedSchemaFields = wc),
      (exports.getComposedStaticRange = Pl),
      (exports.getDOMOwnerDocument = cl),
      (exports.getDOMSelection = bl),
      (exports.getDOMSelectionFromTarget = El),
      (exports.getDOMSelectionPoints = Rl),
      (exports.getDOMSelectionRange = Fl),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _Ll;
        var n = Pl(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_Ll = Ll(n)) != null
            ? _Ll
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: Kl(n, Bl(t)), range: o };
      }),
      (exports.getDOMShadowRoots = wl),
      (exports.getDOMTextNode = xs),
      (exports.getDeclaredNodeStructure = function (t) {
        var _jo = jo(t),
          e = _jo.derivedNames,
          n = babelHelpers.objectWithoutPropertiesLoose(_jo, _excluded);
        return Object.freeze(
          babelHelpers["extends"]({}, n, { derived: new Set(e) }),
        );
      }),
      (exports.getDeclaredSlots = vd),
      (exports.getEditorPropertyFromDOMNode = gs),
      (exports.getNearestEditorFromDOMNode = hs),
      (exports.getParentElement = ll),
      (exports.getRegisteredNode = ss),
      (exports.getRegisteredNodeOrThrow = is),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o123 of t) {
          var _Bc2 = Bc(_o123),
            _t322 = _Bc2.ownNodeType;
          _t322 && (n.set(_t322, _o123), e.set(_t322, new Set()));
        }
        for (var _ref122 of n) {
          var _t323 = _ref122[0];
          var _o124 = _ref122[1];
          for (var _ref124 of Jc(_o124)) {
            var _n180 = _ref124.ownNodeType;
            {
              var _o125 = _n180 && e.get(_n180);
              _o125 && _o125.add(_t323);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = Dl),
      (exports.getStaticNodeConfig = Bc),
      (exports.getStyleObjectFromCSS = Qr),
      (exports.getTextDirection = function (t) {
        return O.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = da),
      (exports.getterTableOf = Ne),
      (exports.isBlockDomNode = Gl),
      (exports.isCurrentlyReadOnlyMode = Oa),
      (exports.isDOMCapturingSelection = yc),
      (exports.isDOMDocumentNode = ms),
      (exports.isDOMNode = Ul),
      (exports.isDOMShadowRoot = Ol),
      (exports.isDOMTextNode = ys),
      (exports.isDOMUnmanaged = pc),
      (exports.isDocumentFragment = Hl),
      (exports.isExactShortcutMatch = function (t, e, n) {
        if (!qs(t, n)) return !1;
        if (t.key.toLowerCase() === e.toLowerCase()) return !0;
        if (e.length > 1) return !1;
        if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
        if (t.code.startsWith("Digit") && /^\d$/.test(e))
          return t.code === "Digit" + e;
        var o = "Key" + e.toUpperCase();
        return t.code === o;
      }),
      (exports.isHTMLAnchorElement = function (t) {
        return jl(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = jl),
      (exports.isHTMLTableCellElement = function (t) {
        return jl(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return jl(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Jl),
      (exports.isLastChildInBlockNode = ca),
      (exports.isLexicalEditor = ds),
      (exports.isModifierMatch = qs),
      (exports.isOnlyChildInBlockNode = la),
      (exports.isSchemaField = Te),
      (exports.isSelectionCapturedInDecoratorInput = us),
      (exports.isSelectionWithinEditor = fs),
      (exports.iterStaticNodeConfigChain = Jc),
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
      (exports.makeStepwiseIterator = eh),
      (exports.mergeRegister = qa),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = Os(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Xl();
                }
                var o = _d(t, e);
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
      (exports.nodeSchema = Xe),
      (exports.normalizeClassNames = uh),
      (exports.nullable = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e227 = e,
          n = _e227.defaultAsNull;
        return we(
          function (e) {
            if (null == e) return null;
            var o = t(e);
            return n && ve(t, o) ? null : o;
          },
          { defaultAsNull: n, inner: t, kind: "nullable" },
          void 0,
          Re(t),
          Le(t, function (t) {
            return null == t;
          }),
        );
      }),
      (exports.numberValue = Ye),
      (exports.objectValue = function (t) {
        return (function (t, e) {
          var n = Object.entries(e);
          return we(
            function (t) {
              var e = null !== t && "object" == typeof t ? t : {},
                o = {};
              for (var _t324 = 0; _t324 < n.length; _t324++) {
                var _n$_t = n[_t324],
                  _r97 = _n$_t[0],
                  _i61 = _n$_t[1];
                o[_r97] = _i61(e[_r97]);
              }
              return o;
            },
            { fields: e, kind: "object" },
            void 0,
            function (t, o) {
              return (
                Ue(t) &&
                Ue(o) &&
                !He(t, e) &&
                !He(o, e) &&
                n.every(function (_ref125) {
                  var e = _ref125[0],
                    n = _ref125[1];
                  return Ce(n, t[e], o[e]);
                })
              );
            },
            function (t) {
              return Ue(t) && !He(t, e);
            },
          );
        })(0, t);
      }),
      (exports.optional = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e228 = e,
          n = _e228.omitDefault;
        return we(
          function (e) {
            if (void 0 === e) return;
            var o = t(e);
            return n && ve(t, o) ? void 0 : o;
          },
          { inner: t, kind: "optional", omitDefault: n },
          void 0,
          Re(t),
          Le(t, function (t) {
            return void 0 === t;
          }),
        );
      }),
      (exports.rawValue = function () {
        return we(
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
      (exports.registerEventListener = Xa),
      (exports.registerEventListeners = Qa),
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
        var n = uh.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(
            _t$classList3,
            Array.from(n),
          );
      }),
      (exports.removeFromParent = Ts),
      (exports.resetRandomKey = function () {
        rs = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = ti),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n181 in e) {
          var _o126 = e[_n181];
          null == _o126 ? t.removeProperty(_n181) : Zr(t, _n181, _o126);
        }
      }),
      (exports.setDOMUnmanaged = gc),
      (exports.setNodeIndentFromDOM = fc),
      (exports.setterDefaultOf = Ee),
      (exports.setterTableOf = ke),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n182 in e)
          if (t[_n182] !== e[_n182]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = Uu),
      (exports.stringValue = Ve),
      (exports.toggleTextFormatType = Ss),
      (exports.tokenizeRawText = Uf),
      (exports.transformValue = function (t, e, n) {
        if (n === void 0) {
          n = {};
        }
        return we(
          function (n) {
            return e(t(n));
          },
          { inner: t, kind: "transform" },
          Pe(e(t.defaultValue)),
          n.isEqual,
          function (e) {
            return Ke(t, e);
          },
        );
      }),
      (exports.unionValue = function (t) {
        var n =
          0 !== (arguments.length <= 1 ? 0 : arguments.length - 1)
            ? Pe(arguments.length <= 1 ? undefined : arguments[1])
            : t[0].defaultValue;
        return we(
          function (e) {
            if (void 0 === e) return n;
            var o = (function (e) {
              var n = (function (t, e) {
                return We(t, e).member;
              })(t, e);
              return void 0 === n ? void 0 : { member: n, parsed: n(e) };
            })(e);
            return void 0 === o ? n : o.parsed;
          },
          { kind: "union", members: t },
          n,
          qe,
          function (e) {
            return (
              (void 0 !== e || void 0 === n) &&
              t.some(function (t) {
                return Ke(t, e);
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
