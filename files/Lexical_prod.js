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
      Y = $("COMPOSITION_START_COMMAND"),
      J = $("COMPOSITION_END_COMMAND"),
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
        Hr(t) && !Array.isArray(n.children) && e(59, o.name),
        n
      );
    }
    function ne() {
      return tc()._blockCursorElement;
    }
    function oe(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var re = x || g || _;
    function ie() {
      var t = Pl().createElement("img");
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
          r = Pl().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          e.insertBefore(r, o),
          t)
        ) {
          var _t1 = Pl().createElement("img");
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
      return Vl(t) && t.hasAttribute("data-lexical-managed-linebreak");
    }
    function pe(t, e, n) {
      var o = El(_l(n)),
        r = o && Ll(o, n._rootElement);
      var i = null,
        s = null;
      null !== r &&
        r.anchorNode === t &&
        ((i = r.anchorOffset), (s = r.focusOffset));
      var l = t.nodeValue;
      null !== l && Js(e, l, i, s, !1);
    }
    function _e(t, e, n) {
      if (af(t)) {
        var _e11 = t.anchor.getNode();
        if (_e11.is(n) && t.format !== _e11.getFormat()) return !1;
      }
      return ms(e) && n.isAttached();
    }
    function ye(t, e, n) {
      for (var _o6 = t; _o6 && !mc(_o6); _o6 = cl(_o6)) {
        var _t13 = Ds(_o6, e);
        if (void 0 !== _t13) {
          var _e12 = Ms(_t13, n);
          if (_e12) return Gr(_e12) || !Vl(_o6) ? void 0 : [_o6, _e12];
        }
      }
    }
    function me(t, e, n, o) {
      fe = !0;
      var r =
          null === t._inputState.unprocessedBeforeInputData &&
          performance.now() - de > 100,
        i = t._pendingEditorState,
        s =
          !t._updating &&
          null !== i &&
          ((l = i), wa.has(l)) &&
          !(
            r &&
            !o &&
            e.some(function (e) {
              return (
                "characterData" === e.type &&
                ms(e.target) &&
                (function (t, e) {
                  var n = e._editorState._nodeMap;
                  for (var _o7 = t; _o7 && !mc(_o7); _o7 = cl(_o7)) {
                    var _t14 = Ds(_o7, e),
                      _r4 = void 0 === _t14 ? void 0 : n.get(_t14);
                    if (void 0 !== _r4) return ki(_r4) && Vl(_o7);
                  }
                  return !1;
                })(e.target, t)
              );
            })
          );
      var l;
      try {
        eu(
          t,
          function () {
            var i =
                $f() ||
                (function (t) {
                  return t.read("latest", function () {
                    var t = $f();
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
                _h2 = ye(_d2, t, l);
              if (!_h2) continue;
              var _g = _h2[0],
                _p = _h2[1];
              if ("characterData" === _e13)
                o
                  ? ki(_p) && _p.isAttached() && _p.markDirty()
                  : r && ki(_p) && ms(_d2) && _e(i, _d2, _p) && pe(_d2, _p, t);
              else {
                a = !0;
                for (var _e14 of _n10.addedNodes) {
                  var _n11 = Ds(_e14, t);
                  if (
                    _e14 !== c &&
                    _e14.parentNode === _d2 &&
                    (_n11
                      ? t.getElementByKey(_n11) !== _e14
                      : !(
                          (t._slotsUsed &&
                            Vl(_e14) &&
                            _e14.hasAttribute("data-lexical-slot")) ||
                          mc(_e14)
                        ))
                  ) {
                    if (u) {
                      var _t15 =
                        (Vl(_e14) ? _e14.innerText : null) || _e14.nodeValue;
                      _t15 && (f += _t15);
                    }
                    _d2.removeChild(_e14);
                  }
                }
                for (var _t16 of _n10.removedNodes) {
                  var _e15 = c === _t16;
                  if (_e15 || se(_t16) || ge(_t16)) {
                    var _e16 = _n10.nextSibling,
                      _o8 = _n10.previousSibling;
                    _d2.insertBefore(
                      _t16,
                      _e16 && _e16.parentNode !== _d2
                        ? _o8
                          ? _o8.parentNode === _d2
                            ? _o8.nextSibling
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
                  Ds(_n13, t) ||
                  ge(_n13) ||
                  _n13.remove();
            (n.takeRecords(),
              null !== i && (a && Bs(i), u && il(t) && i.insertRawText(f)));
          },
          s ? { skipTransforms: s } : void 0,
        );
      } finally {
        fe = !1;
      }
    }
    function xe(t, e, n) {
      var o = t._observer;
      if (null !== o) {
        var _r5 = o.takeRecords();
        (!n || _r5.length > 0) && me(t, _r5, o, e);
      }
    }
    function Se(t) {
      (!(function (t) {
        _l(t).addEventListener("textInput", he, !0);
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
      for (var _t17 = 0; ; )
        if ("aliased" === r.kind) {
          if (_t17 === o) return Oe(r.aliases);
          (_t17++, (r = r.inner.meta));
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
            var _t18 = 1;
            for (var _o9 = 0; _o9 < n.length; _o9++)
              if (void 0 !== n[_o9]) {
                var _r6 = $e(e.item, n[_o9]);
                _r6 > _t18 && (_t18 = _r6);
              }
            return _t18 >= 3 ? 3 : _t18;
          }
          case "object": {
            var _t19 = e.fields;
            if (!Ue(n)) return 4;
            if (null == _t19) return 1;
            if (!o && He(n, _t19)) return 4;
            var _r7 = 1;
            for (var _e20 of Object.keys(n))
              if (je(_t19, _e20)) {
                var _o0 = $e(_t19[_e20], n[_e20]);
                _o0 > _r7 && (_r7 = _o0);
              }
            return _r7 >= 3 ? 3 : _r7;
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
    var Ye = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function Je(t, e) {
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
          return "string" == typeof t && Ye.test(t) ? Number(t) : t;
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
      if ((Pa(), "function" == typeof n)) {
        var _r8 = t.getLatest(),
          _i5 = ln(_r8, e);
        if (((o = an(e, n(_i5))), e.isEqual(_i5, o))) return _r8;
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
      for (var _ref12 of qc("function" == typeof t ? t : t.replace)) {
        var _o1 = _ref12.ownNodeConfig;
        if (_o1 && _o1.stateConfigs)
          for (var _t20 of _o1.stateConfigs) {
            var _o10 = void 0;
            ("stateConfig" in _t20
              ? ((_o10 = _t20.stateConfig), _t20.flat && n.add(_o10.key))
              : (_o10 = _t20),
              e.set(_o10.key, _o10));
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
                    for (var _r9 in e) {
                      var _e22 = t.get(_r9);
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
                var _r0 = _ref16[0];
                var _i6 = _ref16[1];
                {
                  if (fn.has(_r0)) continue;
                  var _n19 = t.get(_r0);
                  _n19
                    ? e.has(_n19) || e.set(_n19, _n19.parse(_i6))
                    : ((o = o || {}), (o[_r0] = _i6));
                }
              }
            return o;
          })(e.sharedConfigMap, o, n),
          o,
          this.size,
        );
      };
      _proto6.resetOnCopyNode = function resetOnCopyNode() {
        for (var _t21 of this.knownState.keys())
          _t21.resetOnCopyNode && this.knownState.set(_t21, _t21.defaultValue);
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
        for (var _t22 of e.keys()) e.set(_t22, _t22.defaultValue);
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
                  : ss(tc(), t.getType()).sharedNodeState;
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
        var _o11 = _ref20[0];
        var _r1 = _ref20[1];
        {
          if (t.has(_o11.key)) continue;
          t.add(_o11.key);
          var _e27 = n ? n.getValue(_o11) : _o11.defaultValue;
          if (_e27 !== _r1 && !_o11.isEqual(_e27, _r1)) return !0;
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
          var _t23 = _ref24[0];
          r.add(_t23.key);
        }
        if (void 0 !== o.unknownState)
          for (var _t24 of Object.keys(o.unknownState)) r.add(_t24);
      }
      var i = hn(e);
      for (var _ref26 of n.knownState) {
        var _t25 = _ref26[0];
        var _e29 = _ref26[1];
        {
          if (r.has(_t25.key)) continue;
          if ((r.add(_t25.key), _t25.isEqual(_e29, _t25.defaultValue)))
            continue;
          var _n22 = i.sharedNodeState.sharedConfigMap.get(_t25.key);
          void 0 === _n22 || _n22 === _t25
            ? i.updateFromKnown(_t25, _e29)
            : i.updateFromUnknown(_t25.key, _t25.unparse(_e29));
        }
      }
      var s = n.unknownState;
      if (void 0 !== s)
        for (var _ref28 of Object.entries(s)) {
          var _t26 = _ref28[0];
          var _e30 = _ref28[1];
          r.has(_t26) || i.updateFromUnknown(_t26, _e30);
        }
    }
    function Sn(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function Cn(t) {
      return !Qr(t) && t.getTextContent !== _Ur4.prototype.getTextContent;
    }
    var vn = Symbol["for"]("@lexical/CachedTextSize");
    function Tn(t, n) {
      return zn.read(
        function () {
          var o = 0,
            r = t;
          for (var _t27 = 0; _t27 < n && null !== r; _t27++) {
            var _i7 = Bn.get(r);
            if ((void 0 === _i7 && e(345, r), Hr(_i7))) {
              var _s4 = $n.get(r);
              if (void 0 !== _s4 && Hr(_s4) && _s4.__parent !== _i7.__parent)
                o += _i7.getTextContentSize();
              else {
                var _t28 = Wn.get(r),
                  _n23 = _t28 && _t28.__lexicalTextContent;
                ("string" != typeof _n23 && e(346, _i7.getType()),
                  (o += _n23.length));
              }
              _t27 < n - 1 && !_i7.isInline() && (o += 2);
            } else if (io(_i7).size > 0) o += _i7.getTextContentSize();
            else {
              var _t29 = _i7[vn];
              (void 0 === _t29 && e(347, _i7.getType(), r), (o += _t29));
            }
            r = _i7.__next;
          }
          return o;
        },
        { editor: En },
      );
    }
    function Nn(t) {
      Hr(t) ||
        io(t).size > 0 ||
        (void 0 === t[vn] &&
          (t[vn] = ki(t) ? t.__text.length : t.getTextContentSize()));
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
      ki(o) && ((wn = o.getFormat()), (An = o.getStyle()), (Dn = n));
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
      Vn,
      Yn = !1,
      Jn = !1;
    function Gn(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = Bn.get(t),
        r = $n.has(t);
      if (null !== e) {
        var _n24 = Co(t);
        _n24.parentNode === e && e.removeChild(_n24);
      }
      if (!r) {
        if ((En._keyToDOMMap["delete"](t), Hr(o))) {
          var _t30 = Zc(o, Bn);
          qn(_t30, 0, _t30.length - 1, null, n);
        }
        if (void 0 !== o) {
          for (var _t31 of io(o).values()) {
            var _e31 = n ? null : lo(_t31);
            (Gn(_t31, null, n), null !== _e31 && _e31.remove());
          }
          nl(Hn, On, Rn, o, "destroyed");
        }
      }
    }
    function qn(t, e, n, o, r) {
      if (r === void 0) {
        r = !1;
      }
      for (var _i8 = e; _i8 <= n; ++_i8) {
        var _e32 = t[_i8];
        void 0 !== _e32 && Gn(_e32, o, r);
      }
    }
    function Xn(t, e) {
      t.setProperty("text-align", e);
    }
    var Qn = "40px";
    function Zn(t, e) {
      var n = bn.theme.indent;
      if ("string" == typeof n) {
        var _o12 = t.classList.contains(n);
        e > 0 && !_o12
          ? t.classList.add(n)
          : e < 1 && _o12 && t.classList.remove(n);
      }
      (t.style.setProperty(
        "padding-inline-start",
        0 === e
          ? ""
          : "calc(" + e + " * var(--lexical-indent-base-value, " + Qn + "))",
      ),
        tl(t, "class"),
        tl(t, "style"));
    }
    function to(t, e) {
      var n = t.style;
      (0 === e
        ? Xn(n, "")
        : 1 === e
          ? Xn(n, "left")
          : 2 === e
            ? Xn(n, "center")
            : 3 === e
              ? Xn(n, "right")
              : 4 === e
                ? Xn(n, "justify")
                : 5 === e
                  ? Xn(n, "start")
                  : 6 === e && Xn(n, "end"),
        tl(t, "style"));
    }
    function eo(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (Qr(t)) return null;
        var n = t.getParent();
        return null === n || (Sl(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function no(t) {
      var e = Pl().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function oo(t, e, n) {
      e || "false" === t.contentEditable
        ? xc(n, En)
        : n.removeAttribute("contenteditable");
    }
    function ro(t, e, n) {
      var o = Mn,
        r = In();
      Mn = "";
      var i = "";
      var s = Gr(t);
      for (var _ref30 of n) {
        var _o13 = _ref30[0];
        var _r10 = _ref30[1];
        {
          var _n25 = no(_o13);
          (oo(e, s, _n25), e.appendChild(_n25), (Mn = ""));
          var _l3 = In();
          (ao(_r10, nc(t, _n25, En)), Pn(_l3), so(t, _o13, e, _n25), (i += Mn));
        }
      }
      return (Pn(r), (Mn = o), i);
    }
    function io(t) {
      return hd(t) && null !== t.__slots ? t.__slots : dd;
    }
    function so(t, e, n, o) {
      var r = Vn.$getSlotTargetElement(t, e, n, En);
      null !== r &&
        (o.parentElement !== r && r.appendChild(o), (o.style.display = ""));
    }
    function lo(t) {
      var e = Un.get(t);
      if (void 0 !== e) return e;
      var n = Wn.get(t);
      return void 0 !== n ? n.parentElement : null;
    }
    function co(t, e, n) {
      var o = io(t),
        r = io(e);
      for (var _ref32 of o) {
        var _t32 = _ref32[0];
        var _e33 = _ref32[1];
        if (!r.has(_t32)) {
          var _t33 = lo(_e33);
          (Gn(_e33, null), null !== _t33 && _t33.remove());
        }
      }
      var i = Mn,
        s = In();
      var l = "",
        c = null;
      var a = Gr(e);
      for (var _ref34 of r) {
        var _t34 = _ref34[0];
        var _i9 = _ref34[1];
        {
          var _r11 = o.get(_t34);
          var _s5 = void 0 !== _r11 ? lo(_r11) : null;
          Mn = "";
          var _u2 = In();
          if (null === _s5) {
            _s5 = no(_t34);
            var _o14 = null;
            for (var _t35 of n.children)
              if (!_t35.hasAttribute("data-lexical-slot")) {
                _o14 = _t35;
                break;
              }
            (n.insertBefore(_s5, _o14), ao(_i9, nc(e, _s5, En)));
          } else
            _r11 === _i9
              ? _o(_i9, _s5)
              : (void 0 !== _r11 && Gn(_r11, _s5), ao(_i9, nc(e, _s5, En)));
          if (
            (Pn(_u2),
            oo(n, a, _s5),
            so(e, _t34, n, _s5),
            (l += Mn),
            _s5.parentElement === n)
          ) {
            var _t36 = null === c ? n.firstChild : c.nextSibling;
            (_t36 !== _s5 && n.insertBefore(_s5, _t36), (c = _s5));
          }
        }
      }
      return (Pn(s), (Mn = i), l);
    }
    function ao(t, n) {
      var o = $n.get(t);
      if ((void 0 === o && e(60), null !== n)) {
        var _e34 = Bn.get(t);
        if (void 0 !== _e34) {
          var _r12 = Wn.get(t);
          if (void 0 !== _r12) {
            var _i0 = gd(_e34) ? _e34.__slotHost : null,
              _s6 = gd(o) ? o.__slotHost : null,
              _l4 = _e34.__parent !== o.__parent || _i0 !== _s6,
              _c3 = null !== _s6 && _r12.parentElement !== n.element;
            if (_l4 || _c3) {
              if (null !== _i0 && !Un.has(t)) {
                var _e35 = _r12.parentElement;
                null !== _e35 && Un.set(t, _e35);
              }
              return (n.insertChild(_r12), _o(t, n.element));
            }
          }
        }
      }
      var r = Vn.$createDOM(o, En);
      (!(function (t, e, n) {
        var o = n._keyToDOMMap;
        (As(e, n, t), o.set(t, e));
      })(t, r, En),
        ki(o)
          ? r.setAttribute("data-lexical-text", "true")
          : Gr(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            yc(r, { captureSelection: !0 })));
      var i = null !== n ? n.before : null,
        s = null !== i ? i.previousSibling : null;
      if (Hr(o)) {
        var _t37 = Mn,
          _e36 = o.__indent,
          _n26 = o.__size;
        (eo(r, o), 0 !== _e36 && Zn(r, _e36));
        var _i1 = io(o),
          _s7 = _i1.size > 0 ? ro(o, r, _i1) : "";
        if (0 === _n26)
          ((r.__lexicalTextContent = _s7),
            (r.__lexicalFirstTextKey = null),
            (Mn += _s7),
            _i1.size > 0 && (r.__lexicalSlotTextLength = _s7.length));
        else {
          var _e37 = _n26 - 1;
          if ((uo(Zc(o, $n), o, 0, _e37, nc(o, r, En)), "" !== _s7)) {
            var _e38 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s7 + _e38), (Mn = _t37 + _s7 + _e38));
          }
          _i1.size > 0 && (r.__lexicalSlotTextLength = _s7.length);
        }
        if (Cn(o)) {
          var _e39 = o.getTextContent();
          ((r.__lexicalTextContent = _e39), (Mn = _t37 + _e39));
        }
        var _l5 = o.__format;
        (0 !== _l5 && to(r, _l5), o.isInline() || (go(0, o, r), ho(o, r)));
      } else {
        var _e40 = o.getTextContent();
        if (Gr(o)) {
          var _e41 = o.decorate(En, bn);
          (null !== _e41 && yo(t, _e41), (r.contentEditable = "false"));
          var _n27 = io(o);
          _n27.size > 0 && ro(o, r, _n27);
        }
        Mn += _e40;
      }
      var l = Bn.get(t);
      if (void 0 !== l) {
        if (Hr(l)) {
          var _t38 = Zc(l, Bn);
          qn(_t38, 0, _t38.length - 1, null, !0);
        }
        for (var _t39 of io(l).values()) Gn(_t39, null, !0);
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
        Vn.$decorateDOM(o, null, r, En),
        Nn(o),
        nl(Hn, On, Rn, o, "created"),
        r
      );
    }
    function uo(t, n, o, r, i) {
      var s = Mn,
        l = In();
      ((Mn = ""), (wn = null), (An = null), (Dn = null));
      var c = o;
      for (; c <= r; ++c) {
        var _e42 = In();
        ao(t[c], i);
        var _n28 = $n.get(t[c]);
        (null !== _n28 && ki(_n28)
          ? null === wn &&
            ((wn = _n28.getFormat()), (An = _n28.getStyle()), (Dn = _n28.__key))
          : Hr(_n28) && c < r && !_n28.isInline() && (Mn += T),
          Pn(_e42));
      }
      var a = En._keyToDOMMap.get(n.__key);
      (void 0 === a && e(349, n.__key),
        (a.__lexicalTextContent = Mn),
        (a.__lexicalFirstTextKey = Dn),
        (Mn = s + Mn),
        Pn(l));
    }
    function fo(t) {
      return Gr(t) && !t.isInline();
    }
    function ho(t, e, n) {
      if (n === void 0) {
        n = nc(t, e, En);
      }
      (n.setDecoratorBoundaryAnchor("leading", fo(t.getFirstChild())),
        n.setDecoratorBoundaryAnchor("trailing", fo(t.getLastChild())));
    }
    function go(t, e, n) {
      var o = nc(e, n, En),
        r = (function (t, e) {
          if (t) {
            var _n29 = t.__last;
            if (_n29) {
              var _t40 = e.get(_n29);
              if (_t40)
                return aa(_t40)
                  ? "line-break"
                  : Gr(_t40) && _t40.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, $n);
      o.setManagedLineBreak(r);
    }
    function po(t, e, n) {
      var o = e.__lexicalFirstTextKey;
      if (null != o) {
        var _e43 = t.__key;
        var _r13 = o;
        for (; null !== _r13; ) {
          var _t41 = $n.get(_r13);
          if (void 0 === _t41) {
            _r13 = null;
            break;
          }
          if (_t41.__parent === _e43) break;
          _r13 = _t41.__parent;
        }
        if (null !== _r13 && !n.has(_r13)) {
          var _t42 = $n.get(o);
          if (ki(_t42))
            return ((wn = _t42.getFormat()), void (An = _t42.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Dn;
    }
    function _o(t, n) {
      var o = Bn.get(t);
      var r = $n.get(t);
      (void 0 !== o && void 0 !== r) || e(61);
      var i = Yn || Kn.has(t) || Ln.has(t),
        s = ll(En, t);
      if (o === r && !i) {
        var _t43;
        if (Hr(o)) {
          var _n30 = s.__lexicalTextContent;
          ("string" != typeof _n30 && e(355, o.getType()),
            (_t43 = _n30),
            Fn(s));
        } else _t43 = o.getTextContent();
        return ((Mn += _t43), s);
      }
      if (
        (o !== r && i && nl(Hn, On, Rn, r, "updated"),
        Vn.$updateDOM(r, o, s, En))
      ) {
        var _o15 = ao(t, null);
        return (
          null === n && e(62),
          n.replaceChild(_o15, s),
          Gn(t, null),
          _o15
        );
      }
      if (Hr(o)) {
        Hr(r) || e(334, t);
        var _n31 = r.__indent;
        (Yn || _n31 !== o.__indent) && Zn(s, _n31);
        var _l6 = r.__format;
        (Yn || _l6 !== o.__format) && to(s, _l6);
        var _c4 = i && (io(r).size > 0 || io(o).size > 0) ? co(o, r, s) : "";
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
                    !Yn &&
                    Math.abs(a) <= 1 &&
                    i >= kn &&
                    t.__first === n.__first &&
                    (0 !== a || !En._cloneNotNeeded.has(t.__key))
                  ) {
                    var _i10 = c.__lexicalTextContent,
                      _u3 = jn.get(t.__key);
                    if (
                      !Yn &&
                      !Cn(n) &&
                      "string" == typeof _i10 &&
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
                          var _t44 = $n.get(o);
                          if (void 0 === _t44) return null;
                          ((o = _t44.__prev), i++);
                        }
                        return i !== n || (null !== o && e.has(o)) ? null : r;
                      })(n, _u3);
                      if (null !== _s8) {
                        var _f2 = _u3.size;
                        if (0 === a) {
                          var _t45 = Tn(_s8, _f2);
                          var _o16 = _s8,
                            _a2 = 0;
                          for (; null !== _o16 && _a2 < _f2; ) {
                            var _t46 = $n.get(_o16);
                            if (void 0 === _t46) break;
                            var _e44 = In();
                            (_o(_o16, l),
                              ki(_t46) &&
                                null === wn &&
                                ((wn = _t46.getFormat()),
                                (An = _t46.getStyle()),
                                (Dn = _t46.__key)),
                              Pn(_e44),
                              (_o16 = _t46.__next),
                              _a2++);
                          }
                          var _d3 = "";
                          for (
                            _o16 = _s8, _a2 = 0;
                            null !== _o16 && _a2 < _f2;
                          ) {
                            var _t47 = $n.get(_o16);
                            if (void 0 === _t47) break;
                            var _n33 = void 0;
                            if (Hr(_t47)) {
                              var _r14 = En._keyToDOMMap.get(_o16),
                                _i11 = _r14 && _r14.__lexicalTextContent;
                              ("string" != typeof _i11 &&
                                e(352, _t47.getType()),
                                (_n33 = _i11));
                            } else _n33 = _t47.getTextContent();
                            ((_d3 += _n33),
                              _a2 < _f2 - 1 &&
                                Hr(_t47) &&
                                !_t47.isInline() &&
                                (_d3 += T),
                              (_o16 = _t47.__next),
                              _a2++);
                          }
                          var _h3 = c.__lexicalSlotTextLength || 0,
                            _g2 = _h3 > 0 ? _i10.slice(_h3) : _i10,
                            _p2 = _g2.slice(0, _g2.length - _t45) + _d3;
                          return (
                            (c.__lexicalTextContent = _p2),
                            (Mn = r + _p2),
                            void po(n, c, _u3)
                          );
                        }
                        if (
                          (function (t, n, o, r, i, s, l, c) {
                            if (1 !== c && -1 !== c) return !1;
                            if (l !== (1 === c ? 2 : 1)) return !1;
                            var a = l - c;
                            var u = t.__last;
                            for (var _t48 = 0; _t48 < a - 1; _t48++) {
                              if (null === u) return !1;
                              var _t49 = Bn.get(u);
                              if (void 0 === _t49) return !1;
                              u = _t49.__prev;
                            }
                            if (null === u) return !1;
                            var f = $n.get(s),
                              d = Bn.get(u);
                            if (void 0 === f || void 0 === d) return !1;
                            if (f.__prev !== d.__prev) return !1;
                            var h = [];
                            var g = s;
                            for (var _t50 = 0; _t50 < l; _t50++) {
                              if (null === g) return !1;
                              h.push(g);
                              var _t51 = $n.get(g);
                              g = _t51 ? _t51.__next : null;
                            }
                            var p = [];
                            g = u;
                            for (var _t52 = 0; _t52 < a; _t52++) {
                              if (null === g) return !1;
                              p.push(g);
                              var _t53 = Bn.get(g);
                              g = _t53 ? _t53.__next : null;
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
                            for (var _t54 of m) {
                              var _e45 = In();
                              if ("reconcile" === _t54.kind)
                                _o(_t54.key, o.element);
                              else if ("destroy" === _t54.kind)
                                Gn(_t54.key, o.element);
                              else {
                                var _e46 = null;
                                for (
                                  var _n34 = _t54.nextIndex + 1;
                                  _n34 < l;
                                  _n34++
                                ) {
                                  var _t55 = En._keyToDOMMap.get(h[_n34]);
                                  if (void 0 !== _t55) {
                                    _e46 = _t55;
                                    break;
                                  }
                                }
                                ao(
                                  _t54.key,
                                  o.withBefore(_e46 != null ? _e46 : o.before),
                                );
                              }
                              if ("destroy" !== _t54.kind) {
                                var _e47 = $n.get(_t54.key);
                                _e47 &&
                                  ki(_e47) &&
                                  null === wn &&
                                  ((wn = _e47.getFormat()),
                                  (An = _e47.getStyle()),
                                  (Dn = _e47.__key));
                              }
                              Pn(_e45);
                            }
                            var v = "";
                            for (var _t56 = 0; _t56 < l; _t56++) {
                              var _n35 = $n.get(h[_t56]);
                              if (void 0 === _n35) return !1;
                              var _o17 = void 0;
                              if (Hr(_n35)) {
                                var _r15 = En._keyToDOMMap.get(h[_t56]),
                                  _i12 = _r15 && _r15.__lexicalTextContent;
                                ("string" != typeof _i12 &&
                                  e(350, _n35.getType()),
                                  (_o17 = _i12));
                              } else _o17 = _n35.getTextContent();
                              ((v += _o17),
                                _t56 < l - 1 &&
                                  Hr(_n35) &&
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
                          })(t, 0, o, c, _i10, _s8, _f2, a)
                        ) {
                          var _t57 = c.__lexicalTextContent;
                          return (
                            "string" != typeof _t57 && e(353),
                            (Mn = r + _t57),
                            void po(n, c, _u3)
                          );
                        }
                      }
                    }
                    if (0 === a) {
                      var _n36 = t.__first,
                        _o18 = 0;
                      for (; null !== _n36; ) {
                        var _t58 = $n.get(_n36);
                        if (void 0 === _t58) break;
                        var _r16 = Yn || Kn.has(_n36) || Ln.has(_n36),
                          _i13 = In();
                        if (_r16) _o(_n36, l);
                        else {
                          var _o19 = void 0,
                            _r17 = void 0;
                          if (Hr(_t58)) {
                            _r17 = Wn.get(_n36);
                            var _i14 = _r17 && _r17.__lexicalTextContent;
                            ("string" != typeof _i14 && e(354, _t58.getType()),
                              (_o19 = _i14));
                          } else _o19 = _t58.getTextContent();
                          ((Mn += _o19), void 0 !== _r17 && Fn(_r17));
                        }
                        (ki(_t58)
                          ? null === wn &&
                            ((wn = _t58.getFormat()),
                            (An = _t58.getStyle()),
                            (Dn = _t58.__key))
                          : Hr(_t58) &&
                            _o18 < s - 1 &&
                            !_t58.isInline() &&
                            (Mn += T),
                          Pn(_i13),
                          (_n36 = _t58.__next),
                          _o18++);
                      }
                      return (
                        (c.__lexicalTextContent = Mn),
                        (c.__lexicalFirstTextKey = Dn),
                        void (Mn = r + Mn)
                      );
                    }
                  }
                  if (1 === i && 1 === s) {
                    var _e48 = t.__first,
                      _r18 = n.__first;
                    if (_e48 === _r18) _o(_e48, l);
                    else {
                      var _t59 = Co(_e48),
                        _n37 = ao(_r18, null);
                      try {
                        _t59.parentNode === l
                          ? l.replaceChild(_n37, _t59)
                          : o.insertChild(_n37);
                      } catch (o) {
                        if ("object" == typeof o && null != o) {
                          var _i15 =
                            o.toString() +
                            " Parent: " +
                            l.tagName +
                            ", new child: {tag: " +
                            _n37.tagName +
                            " key: " +
                            _r18 +
                            "}, old child: {tag: " +
                            _t59.tagName +
                            ", key: " +
                            _e48 +
                            "}.";
                          throw new Error(_i15);
                        }
                        throw o;
                      }
                      Gn(_e48, null);
                    }
                    var _i16 = $n.get(_r18);
                    ki(_i16) &&
                      null === wn &&
                      ((wn = _i16.getFormat()),
                      (An = _i16.getStyle()),
                      (Dn = _i16.__key));
                  } else {
                    var _r19 = Zc(t, Bn),
                      _c5 = Zc(n, $n);
                    if (
                      (_r19.length !== i && e(227),
                      _c5.length !== s && e(228),
                      0 === i)
                    )
                      0 !== s && uo(_c5, n, 0, s - 1, o);
                    else if (0 === s) {
                      if (0 !== i) {
                        var _t60 =
                          null == o.after &&
                          null == o.before &&
                          0 === io(n).size &&
                          null == o.element.__lexicalLineBreak;
                        (qn(_r19, 0, i - 1, _t60 ? null : l),
                          _t60 && (l.textContent = ""));
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
                          var _t61 = e[f],
                            _o20 = n[d],
                            _r20 = In();
                          if (_t61 === _o20)
                            ((u = mo(_o(_o20, i.element))), f++, d++);
                          else {
                            if ((void 0 === a && (a = xo(n, d)), void 0 === c))
                              c = xo(e, f);
                            else if (!c.has(_t61)) {
                              (f++, Pn(_r20));
                              continue;
                            }
                            if (!a.has(_t61)) {
                              var _e49 = Co(_t61);
                              (_e49.parentNode === i.element && (u = mo(_e49)),
                                Gn(_t61, i.element),
                                f++,
                                c["delete"](_t61),
                                Pn(_r20));
                              continue;
                            }
                            if (c.has(_o20)) {
                              var _t62 = ll(En, _o20);
                              (_t62 !== u &&
                                i
                                  .withBefore(u != null ? u : i.before)
                                  .insertChild(_t62),
                                (u = mo(_o(_o20, i.element))),
                                f++,
                                d++);
                            } else {
                              var _t63 = ao(
                                _o20,
                                i.withBefore(u != null ? u : i.before),
                              );
                              (null !== u &&
                                u.parentNode !== i.element &&
                                (u = mo(_t63)),
                                d++);
                            }
                          }
                          var _s9 = $n.get(_o20);
                          (null !== _s9 && ki(_s9)
                            ? null === wn &&
                              ((wn = _s9.getFormat()),
                              (An = _s9.getStyle()),
                              (Dn = _s9.__key))
                            : Hr(_s9) && d <= l && !_s9.isInline() && (Mn += T),
                            Pn(_r20));
                        }
                        var h = f > s,
                          g = d > l;
                        if (h && !g) {
                          var _e50 = n[l + 1],
                            _o21 =
                              void 0 === _e50 ? null : En.getElementByKey(_e50);
                          uo(
                            n,
                            t,
                            d,
                            l,
                            i.withBefore(_o21 != null ? _o21 : i.before),
                          );
                        } else g && !h && qn(e, f, s, i.element);
                      })(n, _r19, _c5, i, s, o);
                  }
                  ((c.__lexicalTextContent = Mn),
                    (c.__lexicalFirstTextKey = Dn),
                    (Mn = r + Mn));
                })(t, n, nc(n, o, En)),
                Sl(n) ||
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
            r.isInline() || (Qr(r) || go(0, r, s), ho(r, s)),
            "" !== _c4)
          ) {
            var _t64 = s.__lexicalTextContent || "";
            ((s.__lexicalTextContent = _c4 + _t64),
              (Mn = _n32 + _c4 + _t64),
              (s.__lexicalSlotTextLength = _c4.length));
          } else
            (io(r).size > 0 || io(o).size > 0) &&
              (s.__lexicalSlotTextLength = 0);
          if (Cn(r)) {
            var _t65 = r.getTextContent();
            ((s.__lexicalTextContent = _t65), (Mn = _n32 + _t65));
          }
        } else {
          var _t66 = s.__lexicalTextContent;
          ("string" != typeof _t66 && e(356, o.getType()), (Mn += _t66), Fn(s));
        }
        if (
          (Yn || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (eo(s, r), Qr(r) && !Yn)
        )
          for (var _t67 of r.getChildren())
            Hr(_t67) && eo(ll(En, _t67.getKey()), _t67);
      } else {
        var _e51 = r.getTextContent();
        if (Gr(r)) {
          var _e52 = r.decorate(En, bn);
          (null !== _e52 && yo(t, _e52),
            i && (io(r).size > 0 || io(o).size > 0) && co(o, r, s));
        }
        Mn += _e51;
      }
      if (!Jn && Qr(r)) {
        var _t68 = r.getLatest();
        if (_t68.__cachedText !== Mn) {
          var _e53 = _t68.getWritable();
          ((_e53.__cachedText = Mn), (r = _e53));
        }
      }
      return (Vn.$decorateDOM(r, o, s, En), Nn(r), s);
    }
    function yo(t, e) {
      var n = En._pendingDecorators;
      var o = En._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = Ps(En);
      }
      n[t] = e;
    }
    function mo(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === En._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function xo(t, e) {
      var n = new Set();
      for (var _o22 = e; _o22 < t.length; _o22++) n.add(t[_o22]);
      return n;
    }
    function So(t, e, n, o, r, i) {
      ((Mn = ""),
        (wn = null),
        (An = null),
        (Dn = null),
        (Yn = 2 === o),
        (En = n),
        (bn = n._config),
        (Vn = n._config.dom || _a),
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
            e = function e(_e55) {
              for (var _n38 of _e55) {
                var _e54 = $n.get(_n38);
                if (void 0 === _e54) continue;
                var _o23 = _e54.__parent;
                if (null === _o23) continue;
                var _r21 = t.get(_o23);
                (void 0 === _r21 && ((_r21 = new Set()), t.set(_o23, _r21)),
                  _r21.add(_n38));
              }
            };
          return (e(Ln.keys()), e(Kn), t);
        })()),
        (Un = new Map()));
      var s = new Map();
      return (
        (Hn = s),
        _o("root", null),
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
        (Hn = void 0),
        (Vn = _a),
        s
      );
    }
    function Co(t) {
      var n = Wn.get(t);
      return (void 0 === n && e(75, t), n);
    }
    function vo(t, n, o) {
      Pa();
      var r = t.__key,
        i = t.getParent();
      if (null === i) return void (null !== pd(t) && e(367, r, String(pd(t))));
      var s = (function (t) {
        var e = $f();
        if (!af(e) || !Hr(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          i = o.getNode();
        return (
          gl(r, t) && n.set(t.__key, 0, "element"),
          gl(i, t) && o.set(t.__key, 0, "element"),
          e
        );
      })(t);
      var l = !1;
      if (af(s) && n) {
        var _e56 = s.anchor,
          _n39 = s.focus;
        (_e56.key === r &&
          (Hf(_e56, t, i, t.getPreviousSibling(), t.getNextSibling()),
          (l = !0)),
          _n39.key === r &&
            (Hf(_n39, t, i, t.getPreviousSibling(), t.getNextSibling()),
            (l = !0)));
      } else ff(s) && n && t.isSelected() && t.selectPrevious();
      (cd(t.getWritable(), n && !l && af(s) ? s : null),
        o || Sl(i) || i.canBeEmpty() || !i.isEmpty() || vo(i, n),
        n && s && Qr(i) && i.isEmpty() && i.selectEnd());
    }
    var To = Symbol["for"]("ephemeral");
    function No(t) {
      return t[To] || !1;
    }
    var ko = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _bo5 = (function () {
      function bo(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", ko),
          Object.defineProperty(this, vn, ko),
          vs(this, t));
      }
      bo.getType = function getType() {
        var _Wc = Wc(this),
          t = _Wc.ownNodeType;
        return (void 0 === t && e(64, this.name), t);
      };
      bo.clone = function clone(t) {
        e(65, this.name);
      };
      var _proto7 = bo.prototype;
      _proto7.$config = function $config() {
        return {};
      };
      _proto7.config = function config(t, e) {
        var _ref35;
        var n = e["extends"] || ta(this.constructor);
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
          var _e57 = Ms(t);
          if (null === _e57) break;
          t = null !== _e57.__parent ? _e57.__parent : pd(_e57);
        }
        return !1;
      };
      _proto7.isSelected = function isSelected(t) {
        var e = t || $f();
        if (null == e) return !1;
        var n = (function (t, e) {
          var n = t.getNodes();
          if (n === t.getCachedNodes()) {
            var _t69 = ic.get(n);
            if (
              (null === _t69
                ? ((_t69 = new Set(
                    n.map(function (t) {
                      return t.__key;
                    }),
                  )),
                  ic.set(n, _t69))
                : void 0 === _t69 && ic.set(n, null),
              _t69)
            )
              return _t69.has(e);
          }
          return n.some(function (t) {
            return t.__key === e;
          });
        })(e, this.__key);
        if (!n || ki(this)) return n;
        if (
          af(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t70 = this.getParent();
          if (Gr(this) && this.isInline() && _t70) {
            var _n40 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t70.is(_n40.getNode()) &&
              _n40.offset === _t70.getChildrenSize() &&
              this.is(_t70.getLastChild())
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
        return null === t ? null : Ms(t);
      };
      _proto7.getParentOrThrow = function getParentOrThrow() {
        var t = this.getParent();
        return (null === t && e(66, this.__key), t);
      };
      _proto7.getTopLevelElement = function getTopLevelElement() {
        var t = this;
        for (; null !== t; ) {
          var _n41 = t.getParent();
          if (Sl(_n41) || null !== pd(t))
            return (Hr(t) || (t === this && Gr(t)) || e(194), t);
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
        return null === t ? null : Ms(t);
      };
      _proto7.getPreviousSiblings = function getPreviousSiblings() {
        return fd(this.getPreviousSibling(), "previous").reverse();
      };
      _proto7.getNextSibling = function getNextSibling() {
        var t = this.getLatest().__next;
        return null === t ? null : Ms(t);
      };
      _proto7.getNextSiblings = function getNextSiblings() {
        return fd(this.getNextSibling(), "next");
      };
      _proto7.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto7.isBefore = function isBefore(t) {
        var n = gh(this, t);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === fh(n)
              : ("same" !== n.type && "ancestor" !== n.type && e(279), !1)))
        );
      };
      _proto7.isParentOf = function isParentOf(t) {
        return gl(t, this);
      };
      _proto7.getNodesBetween = function getNodesBetween(t) {
        var e = this.isBefore(t),
          n = [];
        var o = this,
          r = !0,
          i = 0;
        for (; null !== o && ((r || 0 === i) && n.push(o), !o.is(t)); ) {
          !r && i > 0 && i--;
          var _t71 =
            r && Hr(o) ? (e ? o.getFirstChild() : o.getLastChild()) : null;
          null !== _t71 && i++;
          var _n42 = _t71 || (e ? o.getNextSibling() : o.getPreviousSibling());
          ((r = null !== _n42), (o = _n42 || o.getParent()));
        }
        return e ? n : n.reverse();
      };
      _proto7.isDirty = function isDirty() {
        var t = La()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto7.getLatest = function getLatest() {
        if (No(this)) return this;
        var t = Ms(this.__key);
        return (null === t && e(442, this.__key, this.__type), t);
      };
      _proto7.getWritable = function getWritable() {
        if (No(this)) return this;
        (Pa(), (lc = null));
        var t = Ra(),
          n = La(),
          o = this.__key,
          r = n._cloneNotNeeded,
          i = r.get(o),
          s = t._selection;
        if ((null !== s && s.setCachedNodes(null), void 0 !== i))
          return (ks(i), i);
        var l = t._nodeMap,
          c = l.get(o);
        void 0 === c && e(442, o, this.__type);
        var a = hc(c);
        return (r.set(o, a), l.set(o, a), ks(a), a);
      };
      _proto7.getTextContent = function getTextContent() {
        return Md(this);
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
        return { element: ec(t).$createDOM(this, t) };
      };
      _proto7.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = (function (t, e) {
            var n = Nc(Tc(t.constructor)),
              o = n.generated,
              r = n.isCompactDefault,
              i = null === o ? void 0 : e ? o.exportCompactJSON : o.exportJSON;
            return void 0 === i
              ? (function (t, e, n) {
                  var o = n ? { type: t.__type } : {};
                  return (
                    Hr(t) && (o.children = []),
                    (function (t, e, n, o) {
                      for (var _r22 = 0; _r22 < e.length; _r22++) {
                        var _i17 = e[_r22];
                        if (o && _i17.derived) continue;
                        var _s0 = void 0;
                        if ("ownField" === _i17.kind) {
                          var _e58 = Lc(t)[_i17.field];
                          _s0 =
                            void 0 === _i17.getterTable
                              ? _e58
                              : je(_i17.getterTable, _e58)
                                ? _i17.getterTable[_e58]
                                : void 0;
                        } else _s0 = _i17.getter.call(t);
                        ("ownField" === _i17.kind &&
                          void 0 !== _i17.when &&
                          ((!Kc(_i17, _s0) && _i17.when.call(t)) ||
                            (_s0 = void 0)),
                          (o && Kc(_i17, _s0)) || (n[_i17.key] = _s0));
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
      bo.importJSON = function importJSON(t) {
        e(18, this.name);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return $c(gn(this, t), t);
      };
      bo.transform = function transform() {
        return null;
      };
      _proto7.remove = function remove(t) {
        vo(this, !0, t);
      };
      _proto7.replace = function replace(t, n) {
        Pa();
        var o = $f();
        (null !== o && (o = o.clone()), Tl(this, t));
        var r = this.getLatest(),
          i = this.__key,
          s = _d(r);
        null !== s && e(400, i, r.getType(), s.getKey(), s.getType());
        var l = t.__key,
          c = t.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent();
        cd(c, af(o) ? o : null);
        var d = r.getPreviousSibling(),
          h = r.getNextSibling();
        (vo(r, !1, !0),
          sd(a, c, d && d.getWritable(), h && h.getWritable()),
          (a.__size = null !== f && f.is(a) ? u - 1 : u));
        var g = 0;
        if (
          (n &&
            ((Hr(this) && Hr(c)) || e(139),
            (g = c.getChildrenSize()),
            c.splice(g, 0, this.getChildren())),
          af(o))
        ) {
          Bs(o);
          for (var _t72 of [o.anchor, o.focus])
            _t72.key === i &&
              (n && "element" === _t72.type
                ? _t72.set(c.__key, g + _t72.offset, "element")
                : nf(_t72, c));
        }
        return (Es() === i && bs(l), c);
      };
      _proto7.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        return ad(this, "next", t, e);
      };
      _proto7.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        return ad(this, "previous", t, e);
      };
      _proto7.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto7.createParentElementNode = function createParentElementNode() {
        return qi();
      };
      _proto7.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto7.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto7.selectPrevious = function selectPrevious(t, e) {
        return ud(Yd(this, "previous"), t, e);
      };
      _proto7.selectNext = function selectNext(t, e) {
        return ud(Yd(this, "next"), t, e);
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
      return bo;
    })();
    function Eo(t) {
      return t instanceof _bo5;
    }
    var Oo = "history-merge",
      Mo = "collaboration",
      wo = "defer-composition-merge",
      Ao = "skip-scroll-into-view",
      Do = "skip-dom-selection",
      Io = "skip-selection-focus",
      Po = "composition-start",
      Fo = "composition-end";
    function Ro(t, e) {
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
    function Lo(t, e) {
      var n = t.mergeWithSibling(e),
        o = La()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function Ko(t) {
      var e = t;
      if (Os(e)) return;
      if ("" === e.__text && e.isSimpleText() && !e.isUnmergeable())
        return void e.remove();
      var n = La(),
        o = n._compositionKey,
        r =
          null !== o &&
          (n._compositionMergeHeld === o || n._updateTags.has(wo)),
        i = function i(t, e) {
          return !(
            !r ||
            (t.__key !== o && e.__key !== o) ||
            !Ro(t, e) ||
            ((n._compositionMergeHeld = o), 0)
          );
        };
      var s, l;
      for (
        ;
        null !== (s = e.getPreviousSibling()) &&
        ki(s) &&
        s.isSimpleText() &&
        !s.isUnmergeable() &&
        !Os(s);
      ) {
        if ("" !== s.__text) {
          if (i(s, e)) break;
          if (Ro(s, e)) {
            e = Lo(s, e);
            break;
          }
          break;
        }
        s.remove();
      }
      for (
        ;
        null !== (l = e.getNextSibling()) &&
        ki(l) &&
        l.isSimpleText() &&
        !l.isUnmergeable() &&
        !Os(l);
      ) {
        if ("" !== l.__text) {
          if (i(e, l)) break;
          if (Ro(e, l)) {
            e = Lo(e, l);
            break;
          }
          break;
        }
        l.remove();
      }
    }
    function Bo(t) {
      return (zo(t.anchor), zo(t.focus), t);
    }
    function zo(t) {
      for (; "element" === t.type; ) {
        var _e59 = t.getNode(),
          _n43 = t.offset;
        var _o24 = void 0,
          _r23 = void 0;
        if (
          (_n43 === _e59.getChildrenSize()
            ? ((_o24 = _e59.getChildAtIndex(_n43 - 1)), (_r23 = !0))
            : ((_o24 = _e59.getChildAtIndex(_n43)), (_r23 = !1)),
          ki(_o24))
        ) {
          t.set(_o24.__key, _r23 ? _o24.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Hr(_o24)) break;
        t.set(_o24.__key, _r23 ? _o24.getChildrenSize() : 0, "element", !0);
      }
    }
    var $o = new WeakMap();
    function Wo(t, e) {
      for (
        var _n44 = t;
        null !== _n44 && _n44 !== e;
        _n44 = Object.getPrototypeOf(_n44)
      ) {
        var _e60 = _n44.prototype;
        if (
          void 0 !== _e60 &&
          Object.prototype.hasOwnProperty.call(_e60, "isInline") &&
          "function" == typeof _e60.isInline &&
          !Hc(_e60.isInline)
        )
          try {
            var _e61 = t.prototype.isInline.call(Object.create(t.prototype));
            return "boolean" == typeof _e61 ? _e61 : null;
          } catch (t) {
            return null;
          }
      }
    }
    function jo(t) {
      for (var _ref37 of qc(t)) {
        var _e62 = _ref37.ownNodeConfig;
        if (_e62 && void 0 !== _e62.children) return _e62.children;
      }
    }
    function Uo(t) {
      var e = $o.get(t);
      if (void 0 === e) {
        var _n45 = {},
          _o25 = {};
        var _r24 = !1;
        for (var _ref39 of qc(t)) {
          var _e63 = _ref39.klass;
          var _i18 = _ref39.ownNodeConfig;
          _i18 &&
            (void 0 === _o25.inline &&
              void 0 !== _i18.inline &&
              ((_n45.inline = _i18.inline), (_o25.inline = _e63)),
            void 0 === _o25.children &&
              void 0 !== _i18.children &&
              ((_n45.children = _i18.children), (_o25.children = _e63)),
            _r24 ||
              void 0 === _i18.mergeAdjacent ||
              ((_r24 = !0),
              !1 !== _i18.mergeAdjacent &&
                ((_n45.mergeAdjacent = _i18.mergeAdjacent),
                (_o25.mergeAdjacent = _e63))));
        }
        var _i19 = (function (t) {
          var e = new Set(),
            n = Ic(t);
          for (var _t73 of Object.keys(n))
            !0 === n[_t73].derived && e.add(_t73);
          for (var _ref41 of qc(t)) {
            var _n46 = _ref41.ownNodeConfig;
            {
              var _t74 = _n46 && _n46.stateConfigs;
              if (_t74)
                for (var _n47 of _t74) {
                  var _t75 = _n47 instanceof sn ? _n47 : _n47.stateConfig;
                  _t75.derived && e.add(_t75.key);
                }
            }
          }
          return e;
        })(t);
        (void 0 !== _o25.inline &&
          _o25.inline !== t &&
          void 0 !== Wo(t, _o25.inline) &&
          Wo(t, _o25.inline) !== _n45.inline &&
          (delete _n45.inline, delete _o25.inline),
          void 0 === _o25.mergeAdjacent ||
            _o25.mergeAdjacent === t ||
            (null ===
              (function (t, e, n) {
                var o = Ic(t);
                for (var _t76 of e.by)
                  if ("string" == typeof _t76) {
                    if (!(_t76 in o)) return { entry: _t76, reason: "unknown" };
                    if (n.has(_t76)) return { entry: _t76, reason: "derived" };
                  } else if (_t76.derived)
                    return { entry: String(_t76.key), reason: "derived-state" };
                return null;
              })(t, _n45.mergeAdjacent, _i19) &&
              null ===
                (function (t, e) {
                  if (!Array.isArray(e) || e.includes("inline")) return null;
                  for (var _n48 of e) {
                    if ("inline" === _n48) continue;
                    var _e64 = jo(_n48);
                    if (
                      !(
                        "inline" === _e64 ||
                        (Array.isArray(_e64) &&
                          _e64.includes("inline") &&
                          _e64.every(function (e) {
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
            (delete _n45.mergeAdjacent, delete _o25.mergeAdjacent),
          (e = Object.freeze(
            babelHelpers["extends"]({}, _n45, {
              declaredBy: Object.freeze(_o25),
              derived: _i19,
              derivedNames: _i19,
            }),
          )),
          $o.set(t, e));
      }
      return e;
    }
    var Ho = new WeakMap();
    function Vo(t) {
      return (function (t) {
        var e = Ho.get(t);
        if (void 0 === e) {
          e = !1;
          for (var _ref43 of qc(t)) {
            var _n49 = _ref43.ownNodeConfig;
            var _o26 = _ref43.ownNodeType;
            if (
              void 0 !== _n49 &&
              "overflow" === _o26 &&
              _n49["extends"] === _Ur4
            ) {
              e = !0;
              break;
            }
          }
          Ho.set(t, e);
        }
        return e;
      })(t.constructor);
    }
    function Yo(t) {
      if (ki(t) || aa(t) || Vo(t)) return !0;
      try {
        return t.isInline();
      } catch (t) {
        return !0;
      }
    }
    function Jo(t) {
      return ki(t) || aa(t) || (Gr(t) && Yo(t));
    }
    function Go(t, e) {
      if (Vo(e)) return !0;
      if ("inline" === t) return Yo(e);
      if ("block" === t) return !Yo(e);
      if (Yo(e)) return t.includes("inline");
      for (var _n50 of t) if ("inline" !== _n50 && e instanceof _n50) return !0;
      return !1;
    }
    function qo(t) {
      return Sl(t) ? "block" : Uo(t.constructor).children;
    }
    function Xo(t, e) {
      return (
        Xi(e) &&
        !e.isShadowRoot() &&
        e.getChildren().every(function (e) {
          return Go(t, e);
        })
      );
    }
    function Qo(t, e) {
      var n = [];
      for (
        var _o27 = t;
        null !== _o27;
        _o27 = Hr(_o27)
          ? e
            ? _o27.getLastChild()
            : _o27.getFirstChild()
          : null
      )
        n.push(_o27.getKey());
      return n;
    }
    function Zo(t) {
      if ("text" === t.type) return { offset: t.offset, text: t.key };
      var e = t.getNode();
      if (!Hr(e)) return null;
      var n = Math.min(t.offset, e.getChildrenSize()),
        o = n > 0 ? e.getChildAtIndex(n - 1) : null,
        r = e.getChildAtIndex(n);
      if (null !== o && Jo(o)) return { after: !0, keys: [o.getKey()] };
      if (null !== r && Jo(r)) return { after: !1, keys: [r.getKey()] };
      var i = o,
        s = r;
      var l = qo(e);
      if ("inline" === l || (Array.isArray(l) && l.includes("inline"))) {
        for (; null !== i && tr(i); ) i = i.getPreviousSibling();
        for (; null !== s && tr(s); ) s = s.getNextSibling();
        null === i && null === s && ((i = o), (s = r));
      }
      return null !== i && Jo(i)
        ? { after: !0, keys: [i.getKey()] }
        : null !== s && Jo(s)
          ? { after: !1, keys: [s.getKey()] }
          : null !== s
            ? { after: !1, keys: Qo(s, !1) }
            : null !== i
              ? { after: !0, keys: Qo(i, !0) }
              : { inside: e.getKey() };
    }
    function tr(t) {
      if (!Hr(t) || Xi(t) || Yo(t)) return !1;
      var _e65 = function e(t) {
        return t.getChildren().some(function (t) {
          return !Hr(t) || _e65(t);
        });
      };
      return !_e65(t);
    }
    var _er = (function () {
      function er() {
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
      var _proto8 = er.prototype;
      _proto8.addPath = function addPath(t) {
        var e = t.getKey();
        this.path.add(e);
        var n = t.getLatest().__parent;
        if (null !== n) {
          var _t77 = this.pathByParent.get(n);
          (void 0 === _t77 &&
            ((_t77 = new Set()), this.pathByParent.set(n, _t77)),
            _t77.add(e));
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
        for (var _t78 of n) {
          var _n51 = Ms(_t78);
          null !== _n51 && _n51.getLatest().__parent === e && r.push(_n51);
        }
        return (this.childrenCache.set(e, { nodes: r, size: n.size }), r);
      };
      _proto8.addPathChain = function addPathChain(t) {
        for (var _e66 = t; null !== _e66; _e66 = _e66.getParent()) {
          var _t79 = _e66.getLatest().__parent,
            _n52 = null === _t79 ? void 0 : this.pathByParent.get(_t79);
          if (void 0 !== _n52 && _n52.has(_e66.getKey())) return;
          this.addPath(_e66);
        }
      };
      _proto8.repath = function repath() {
        for (var _ref45 of Array.from(this.pathByParent)) {
          var _t80 = _ref45[0];
          var _e67 = _ref45[1];
          {
            var _n53 = Ms(_t80);
            if (null === _n53 || !_n53.isAttached()) {
              this.pathByParent["delete"](_t80);
              for (var _t81 of _e67) {
                var _e68 = Ms(_t81);
                null !== _e68 && _e68.isAttached() && this.addPathChain(_e68);
              }
            }
          }
        }
      };
      _proto8.movePath = function movePath(t, e) {
        var n = this.pathByParent.get(t);
        if (void 0 !== n) {
          this.pathByParent["delete"](t);
          for (var _t82 of n) {
            var _e69 = Ms(_t82);
            null !== _e69 && this.addPath(_e69);
          }
        }
        this.addPath(e);
      };
      _proto8.$resolve = function $resolve(t, e) {
        if (e === void 0) {
          e = 0;
        }
        if ("text" in t) {
          var _e70 = Ms(t.text);
          return null !== _e70 && _e70.isAttached()
            ? [t.text, t.offset, "text"]
            : null;
        }
        if ("inside" in t) {
          var _n54 = Ms(t.inside);
          if (null !== _n54 && _n54.isAttached())
            return [t.inside, 0, "element"];
          var _o28 = this.substitutes.get(t.inside);
          return void 0 !== _o28 && e < 16 ? this.$resolve(_o28, e + 1) : null;
        }
        var n = t.keys,
          o = t.after;
        for (var _t83 = n.length - 1; _t83 >= 0; _t83--) {
          var _r25 = Ms(n[_t83]);
          if (
            null === _r25 ||
            !_r25.isAttached() ||
            null === _r25.getParent()
          ) {
            var _o29 = this.substitutes.get(n[_t83]);
            if (void 0 !== _o29 && e < 16) return this.$resolve(_o29, e + 1);
            continue;
          }
          var _i20 = _r25;
          for (var _e71 = 0; _e71 < _t83; _e71++) {
            var _t84 = _i20.getParent();
            if (
              null === _t84 ||
              Sl(_t84) ||
              null !== (o ? _i20.getNextSibling() : _i20.getPreviousSibling())
            )
              break;
            _i20 = _t84;
          }
          return ki(_i20)
            ? [_i20.getKey(), o ? _i20.getTextContentSize() : 0, "text"]
            : [
                _i20.getParentOrThrow().getKey(),
                _i20.getIndexWithinParent() + (o ? 1 : 0),
                "element",
              ];
        }
        return null;
      };
      return er;
    })();
    function nr(t, e) {
      e.length > 0 && _Ur4.prototype.splice.call(t, t.getChildrenSize(), 0, e);
    }
    function or(t) {
      vo(t, !1, !0);
    }
    function rr(t, e) {
      if (t.constructor !== e.constructor || !Hr(t) || !Hr(e)) return !1;
      var n = t.constructor,
        o = Uo(n),
        r = o.mergeAdjacent;
      if (void 0 === r || o.declaredBy.mergeAdjacent !== n) return !1;
      var i, s;
      for (var _n55 of r.by)
        if ("string" == typeof _n55) {
          ((i = i || t.exportJSON()), (s = s || e.exportJSON()));
          var _o30 = i[_n55],
            _r26 = s[_n55];
          if (_o30 !== _r26 && JSON.stringify(_o30) !== JSON.stringify(_r26))
            return !1;
        } else if (!_n55.isEqual(ln(t, _n55), ln(e, _n55))) return !1;
      return !0;
    }
    function ir(t, e, n) {
      var o = t.getLastChild(),
        r = e.getFirstChild();
      if (
        (n.substitutes.set(
          e.getKey(),
          null !== o ? { after: !0, keys: Qo(o, !0) } : { inside: t.getKey() },
        ),
        nr(t, e.getChildren()),
        or(e),
        n.movePath(e.getKey(), t),
        (n.changed = !0),
        n.written.add(t.getKey()),
        null === o || null === r)
      )
        return;
      if (Hr(o) && rr(o, r)) return void ir(o, r, n);
      var i = t.INTERNAL_$afterStructureMerge;
      "function" == typeof i && (i.call(t, o, r), n.full || n.repath());
    }
    function sr(t, e) {
      var n = t;
      for (
        var _t85 = n.getPreviousSibling();
        null !== _t85 && rr(_t85, n);
        _t85 = n.getPreviousSibling()
      )
        n = _t85;
      for (
        var _t86 = n.getNextSibling();
        null !== _t86 && rr(n, _t86);
        _t86 = n.getNextSibling()
      )
        ir(n, _t86, e);
      return n;
    }
    function lr(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      if (n || e.full)
        for (var _n56 = t.getFirstChild(); null !== _n56; )
          _n56 = sr(_n56, e).getNextSibling();
      else
        for (var _n57 of e.$children(t)) {
          var _o31 = _n57.constructor;
          Uo(_o31).declaredBy.mergeAdjacent === _o31 &&
            _n57.getLatest().__parent === t.getKey() &&
            sr(_n57, e);
        }
    }
    function cr(t, e, n) {
      n.changed = !0;
      for (var _e72 of t.getChildren()) or(_e72);
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
        var _e73 = void 0;
        if (s) {
          _e73 = Cl(t);
          var _n59 = _e73.INTERNAL_$afterStructureSplit;
          "function" == typeof _n59 && _n59.call(_e73, t, i);
        } else ((s = !0), (_e73 = t));
        (nr(_e73, _n58.content), (_n58.holder = _e73));
        for (var _t87 of _n58.content) i.push(_t87);
        (o.push(_e73), r.push(_e73));
      }
      var l = t.getParentOrThrow();
      n.written.add(l.getKey());
      var c = o.indexOf(t);
      var a = t;
      for (var _t88 = c - 1; _t88 >= 0; _t88--)
        (ad(a, "previous", o[_t88], !1), (a = o[_t88]));
      a = t;
      for (var _t89 = c + 1; _t89 < o.length; _t89++)
        (ad(a, "next", o[_t89], !1), (a = o[_t89]));
      for (var _t90 of o) (n.addPath(_t90), n.touched.add(_t90.getKey()));
      return (
        -1 === c &&
          (o.length > 0 &&
            n.substitutes.set(t.getKey(), { after: !1, keys: Qo(o[0], !1) }),
          or(t)),
        r
      );
    }
    function ar(t) {
      var e = t.INTERNAL_$liftsFromStructure;
      return "function" == typeof e ? e : null;
    }
    function ur(t, e, n, o) {
      var r = t.isInline(),
        i = ar(t);
      return n.map(function (n) {
        return Go(e, n)
          ? null !== i && i.call(t, n, o)
            ? "lift"
            : "keep"
          : !r && Xo(e, n)
            ? "join"
            : Yo(n)
              ? "keep"
              : "lift";
      });
    }
    function fr(t, e) {
      var n = t[0],
        o = void 0 === n ? void 0 : jo(n);
      return e.map(function (e) {
        return Go(t, e)
          ? "keep"
          : void 0 === n || (void 0 !== o && !Go(o, e))
            ? void 0 !== n && void 0 !== o && Xo(o, e)
              ? "flatten"
              : Yo(e)
                ? "keep"
                : "lift"
            : "wrap";
      });
    }
    function dr(t, e, n) {
      var o = [];
      var r = [];
      var i = function i() {
        if (r.length > 0) {
          var _t91 = Cl(e);
          (ad(r[0], "previous", _t91, !1), nr(_t91, r), o.push(_t91), (r = []));
        }
      };
      for (var _o32 of t.getChildren())
        !Yo(_o32) || Vo(_o32)
          ? (i(), Hr(_o32) && dr(_o32, e, n))
          : r.push(_o32);
      if ((i(), 0 === o.length)) return;
      ((n.changed = !0), n.written.add(t.getKey()));
      var s = qo(t);
      void 0 !== s &&
        o.some(function (t) {
          return !Go(s, t);
        }) &&
        yr(t, s, !0, n);
    }
    function hr(t, e) {
      var n = function n(t) {
        return null !== t && !Go("block", t);
      };
      if (!n(t)) return;
      var o = t;
      for (
        var _t92 = o.getPreviousSibling();
        n(_t92);
        _t92 = o.getPreviousSibling()
      )
        o = _t92;
      var r = [o];
      for (var _t93 = o.getNextSibling(); n(_t93); _t93 = _t93.getNextSibling())
        r.push(_t93);
      var i = o.createParentElementNode();
      (ad(o, "previous", i, !1),
        nr(i, r),
        (e.changed = !0),
        e.written.add(i.getKey()),
        e.addPath(i),
        e.touched.add(i.getKey()));
    }
    var gr = new WeakMap();
    function pr(t) {
      var e = _r.get(t);
      if (void 0 === e) {
        var _n60 = t.prototype;
        ((e =
          _n60.isShadowRoot !== _Ur4.prototype.isShadowRoot ||
          (_n60.isInline !== _Ur4.prototype.isInline && !Hc(_n60.isInline))),
          _r.set(t, e));
      }
      return e;
    }
    var _r = new WeakMap();
    function yr(t, e, n, o) {
      if ("block" === e && n && !Nr(t)) return null;
      var r = t.getKey(),
        i = n
          ? t.getChildren()
          : o.$children(t).filter(function (t) {
              return t.getLatest().__parent === r;
            });
      if ("block" === e) {
        for (var _t94 of i) _t94.getLatest().__parent === r && hr(_t94, o);
        return null;
      }
      return "inline" === e || e.includes("inline")
        ? ur(t, e, i, o.explicit).every(function (t) {
            return "keep" === t;
          })
          ? null
          : (function (t, e, n) {
              var o = t.isInline(),
                r = t.getChildren(),
                i = ur(t, e, r, n.explicit);
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
              for (var _e74 = 0; _e74 < r.length; _e74++) {
                var _u4 = r[_e74],
                  _f3 = i[_e74];
                if ("lift" === _f3) {
                  (o && Hr(_u4) && dr(_u4, t, n),
                    s.push(c, { lifted: _u4 }),
                    (c = { content: [], hadChildren: !1, holder: null }),
                    (a = "none"));
                  continue;
                }
                if (((c.hadChildren = !0), "join" === _f3)) {
                  ("inline" !== a && "line" !== a) || c.content.push(ca());
                  var _t95 = _u4.getChildren();
                  0 === _t95.length &&
                    l.push({
                      at: c.content.length,
                      paragraph: _u4,
                      segment: c,
                    });
                  for (var _e75 of _t95) c.content.push(_e75);
                  a = "line";
                  continue;
                }
                var _d4 = Yo(_u4) ? "inline" : "block";
                ("inline" === _d4 && "line" === a && c.content.push(ca()),
                  c.content.push(_u4),
                  (a = _d4));
              }
              s.push(c);
              var u = cr(t, s, n);
              for (var _ref47 of l) {
                var _e76 = _ref47.paragraph;
                var _o33 = _ref47.segment;
                var _r27 = _ref47.at;
                {
                  var _i21 = _r27 > 0 ? _o33.content[_r27 - 1] : void 0,
                    _s1 = _o33.content[_r27];
                  n.substitutes.set(
                    _e76.getKey(),
                    void 0 !== _i21
                      ? { after: !0, keys: Qo(_i21, !0) }
                      : void 0 !== _s1
                        ? { after: !1, keys: Qo(_s1, !1) }
                        : { inside: (_o33.holder || t).getKey() },
                  );
                }
              }
              return u;
            })(t, e, o)
        : fr(e, i).every(function (t) {
              return "keep" === t;
            })
          ? null
          : (function (t, e, n) {
              var o = e[0],
                r = t.getChildren(),
                i = fr(e, r);
              if (
                i.every(function (t) {
                  return "keep" === t;
                })
              )
                return [t];
              var s = [];
              var l = { content: [], hadChildren: !1, holder: null };
              for (var _t96 = 0; _t96 < r.length; _t96++) {
                var _e77 = r[_t96],
                  _c6 = i[_t96];
                if ("lift" !== _c6) {
                  if (((l.hadChildren = !0), "keep" === _c6))
                    l.content.push(_e77);
                  else if ("flatten" === _c6) {
                    var _t97 = Xc(o);
                    (nr(_t97, _e77.getChildren()),
                      n.substitutes.set(_e77.getKey(), {
                        inside: _t97.getKey(),
                      }),
                      l.content.push(_t97));
                  } else {
                    var _n61 = [_e77];
                    for (
                      ;
                      Yo(_e77) &&
                      _t96 + 1 < r.length &&
                      "wrap" === i[_t96 + 1] &&
                      Yo(r[_t96 + 1]);
                    )
                      _n61.push(r[++_t96]);
                    var _s10 = Xc(o);
                    (nr(_s10, _n61), l.content.push(_s10));
                  }
                } else
                  (s.push(l, { lifted: _e77 }),
                    (l = { content: [], hadChildren: !1, holder: null }));
              }
              return (s.push(l), cr(t, s, n));
            })(t, e, o);
    }
    function mr(t, e) {
      var n = qo(t),
        o =
          void 0 !== n &&
          ((function (t, e) {
            if (null !== ar(t)) return !0;
            if (Qr(t) || !pr(t.constructor)) return e.full;
            var n = t.getLatest(),
              o = (Sl(t) ? 1 : 0) + (Yo(t) ? 2 : 0);
            var r = gr.get(n);
            if (void 0 === r) {
              var _e78 = tc().getEditorState()._nodeMap.get(t.getKey());
              r = void 0 === _e78 ? void 0 : gr.get(_e78);
            }
            return (gr.set(n, o), e.full || r !== o);
          })(t, e) ||
            ("block" === n && e.wrapsAll.has(t.getKey())));
      if (!e.full && !e.pathByParent.has(t.getKey())) {
        if (t.isEmpty() && !Sl(t) && xr(t)) return (Sr(t, e), !0);
        if (!o) return !1;
      }
      lr(t, e);
      var r = !1;
      for (var _n62 of e.$children(t))
        Hr(_n62) &&
          _n62.getLatest().__parent === t.getKey() &&
          mr(_n62, e) &&
          (r = !0);
      if (t.isEmpty() && !Sl(t) && (xr(t) || (r && !t.canBeEmpty())))
        return (Sr(t, e), !0);
      var i = void 0 === n ? null : yr(t, n, o, e);
      if (null === i) lr(t, e);
      else for (var _t98 of i) lr(_t98, e, !0);
      return !1;
    }
    function xr(t) {
      return Vo(t) || (Yo(t) && !t.canBeEmpty());
    }
    function Sr(t, e) {
      var n = t.getPreviousSibling(),
        o = t.getNextSibling(),
        r = t.getParentOrThrow();
      (e.substitutes.set(
        t.getKey(),
        null !== n
          ? { after: !0, keys: Qo(n, !0) }
          : null !== o
            ? { after: !1, keys: Qo(o, !1) }
            : { inside: r.getKey() },
      ),
        or(t));
      for (var _t99 of [n, o])
        null !== _t99 && (e.addPath(_t99), e.touched.add(_t99.getKey()));
      ((e.changed = !0), e.written.add(r.getKey()));
    }
    var Cr = new WeakMap();
    function vr(t, e) {
      if (void 0 === e || !Hr(t)) return !1;
      var n = t.constructor;
      if (
        e.constructor !== n ||
        !(function (t) {
          var e = Cr.get(t);
          return (
            void 0 === e &&
              ((e = !pr(t) && Uo(t).declaredBy.mergeAdjacent !== t),
              Cr.set(t, e)),
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
    function Tr(t) {
      if (!Hr(t)) return !1;
      try {
        return !t.isInline();
      } catch (t) {
        return !1;
      }
    }
    function Nr(t) {
      for (
        var _e79 = t.getFirstChild();
        null !== _e79;
        _e79 = _e79.getNextSibling()
      )
        if (!Tr(_e79) && !Go("block", _e79)) return !0;
      return !1;
    }
    function kr(t, e) {
      var n = $f(),
        o = af(n)
          ? [n.anchor, n.focus].map(function (t) {
              return { anchor: Zo(t), point: t };
            })
          : [];
      e(t);
      for (var _e80 of t.written) {
        var _t100 = Ms(_e80);
        if (null !== _t100 && _t100.isAttached())
          for (
            var _e81 = _t100;
            null !== _e81 && !Qr(_e81);
            _e81 = _e81.getParent()
          )
            _e81.markDirty();
      }
      if (t.changed)
        for (var _ref49 of o) {
          var _e82 = _ref49.point;
          var _n63 = _ref49.anchor;
          {
            var _o34 = _n63 && t.$resolve(_n63);
            _o34 && _e82.set(_o34[0], _o34[1], _o34[2]);
          }
        }
    }
    var br;
    function Er(t) {
      return void 0 !== br && br.has(t);
    }
    function Or(t) {
      return (
        !!Hr(t) &&
        (Sl(t) ||
          ("block" === Uo(t.constructor).children &&
            !t.isInline() &&
            (function () {
              var t = za();
              return null !== t && Er(t);
            })()))
      );
    }
    var Mr = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function wr(t, e) {
      if ("number" == typeof t) return Number.isFinite(t) ? t : e;
      if ("string" != typeof t || !Mr.test(t)) return e;
      var n = Number(t);
      return Number.isFinite(n) ? n : e;
    }
    function Ar(t, e, n, o, r) {
      var i = wr(t, e);
      return i >= n && i <= o && Number.isInteger(i) ? i : e;
    }
    var Dr = function Dr(t) {
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
            (t.__indent = Ar(e.indent, 0, 0, Infinity)),
            (t.__textFormat = wr(e.textFormat, 0)));
          var s = e.textStyle;
          return ((t.__textStyle = "string" == typeof s ? s : ""), t);
        },
      };
    };
    function Ir(t, e) {
      ((t.__detail = e.__detail),
        (t.__format = e.__format),
        (t.__mode = e.__mode),
        (t.__style = e.__style),
        (t.__text = e.__text));
    }
    var Pr = function Pr(t) {
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
            t.__detail = "string" == typeof s && s in n ? n[s] : wr(s, 0);
            var l = e.format;
            t.__format = "string" == typeof l && l in o ? o[l] : wr(l, 0);
            var c = e.mode;
            t.__mode = "string" == typeof c && c in r ? r[c] : i;
            var a = e.style;
            t.__style = "string" == typeof a ? a : "";
            var u = e.text;
            return ((t.__text = "string" == typeof u ? u : ""), t);
          },
          afterCloneFrom: Ir,
        };
      },
      Fr = function Fr(t) {
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
              (t.__indent = Ar(e.indent, 0, 0, Infinity)),
              (t.__textFormat = wr(e.textFormat, 0)));
            var s = e.textStyle;
            return ((t.__textStyle = "string" == typeof s ? s : ""), t);
          },
        };
      },
      Rr = function Rr() {
        return {
          exportJSON: function exportJSON(t) {
            return { type: t.__type, version: 1 };
          },
          exportCompactJSON: function exportCompactJSON(t) {
            return { type: t.__type };
          },
        };
      },
      Lr = function Lr(t) {
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
            t.__format = "string" == typeof o && o in n ? n[o] : wr(o, 0);
            var r = e.style;
            return ((t.__style = "string" == typeof r ? r : ""), t);
          },
        };
      };
    function Kr() {
      return babelHelpers["extends"]({}, P, { 0: "" });
    }
    function Br() {
      return babelHelpers["extends"]({}, D, { "": 0 });
    }
    var zr = Kr(),
      $r = Br(),
      Wr = Xe()({
        direction: tn(Ge([null, "ltr", "rtl"]), { field: "__dir" }),
        format: tn(
          Ge(["", "left", "start", "center", "right", "end", "justify"]),
          {
            field: "__format",
            getter: "getFormatType",
            getterTable: zr,
            setter: "setFormat",
            setterTable: $r,
          },
        ),
        indent: tn(Je(0, { integer: !0, min: 0 }), { field: "__indent" }),
        textFormat: en(Je(), {
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
    function jr(t) {
      if (Sl(t) && !Er(La())) {
        var _e83 = t.getChildren();
        if (
          !_e83.some(function (t) {
            return t.isInline();
          })
        )
          return;
        var _n64 = $f(),
          _o35 = af(_n64)
            ? [_n64.anchor, _n64.focus].filter(function (e) {
                return "element" === e.type && e.key === t.__key;
              })
            : [],
          _r28 = _o35.map(function (t) {
            return t.offset < _e83.length
              ? [_e83[t.offset], 0]
              : [_e83[_e83.length - 1], 1];
          });
        var _i22 = null;
        for (var _t101 of _e83)
          _t101.isInline()
            ? (null === _i22 &&
                ((_i22 = _t101.createParentElementNode()),
                _t101.insertBefore(_i22)),
              _i22.append(_t101))
            : (_i22 = null);
        _o35.forEach(function (t, e) {
          var _r28$e = _r28[e],
            n = _r28$e[0],
            o = _r28$e[1];
          t.set(
            n.getParentOrThrow().getKey(),
            n.getIndexWithinParent() + o,
            "element",
          );
        });
      }
    }
    var _Ur4 = (function (_bo) {
      function Ur(t) {
        var _this;
        ((_this = _bo.call(this, t) || this),
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
      babelHelpers.inheritsLoose(Ur, _bo);
      var _proto9 = Ur.prototype;
      _proto9.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: jr,
          extends: _bo5,
          generated: Dr,
          json: Wr,
        });
      };
      _proto9.afterCloneFrom = function afterCloneFrom(t) {
        (_bo.prototype.afterCloneFrom.call(this, t),
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
        return fd(this.getFirstChild(), "next");
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
        return 0 === this.getChildrenSize() && 0 === Cd(this).length;
      };
      _proto9.isDirty = function isDirty() {
        var t = La()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto9.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto9.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e84 of Cd(this)) {
          var _n65 = vd(this, _e84);
          if (Hr(_n65)) for (var _e85 of _n65.getAllTextNodes()) t.push(_e85);
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((ki(e) && t.push(e), Hr(e)))
            for (var _n66 of e.getAllTextNodes()) t.push(_n66);
          e = e.getNextSibling();
        }
        return t;
      };
      _proto9.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Hr(t); ) {
          var _e86 = t.getFirstChild();
          if (null === _e86) break;
          t = _e86;
        }
        return t;
      };
      _proto9.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Hr(t); ) {
          var _e87 = t.getLastChild();
          if (null === _e87) break;
          t = _e87;
        }
        return t;
      };
      _proto9.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = t >= this.getChildrenSize(),
          n = e ? this.getLastChild() : this.getChildAtIndex(t);
        return (
          (Hr(n) && (e ? n.getLastDescendant() : n.getFirstDescendant())) || n
        );
      };
      _proto9.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : Ms(t);
      };
      _proto9.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var t = this.getFirstChild();
        return (null === t && e(45, this.__key), t);
      };
      _proto9.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : Ms(t);
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
        var t = Md(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o36 = 0; _o36 < n; _o36++) {
          var _r29 = e[_o36];
          ((t += _r29.getTextContent()),
            Hr(_r29) && _o36 !== n - 1 && !_r29.isInline() && (t += T));
        }
        return t;
      };
      _proto9.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n67 of Sd(t).values()) {
            var _t102 = Ms(_n67);
            null !== _t102 && (e += _t102.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o37 = 0; _o37 < n; _o37++) {
          var _r30 = e[_o37];
          ((t += _r30.getTextContentSize()),
            Hr(_r30) && _o37 !== n - 1 && !_r30.isInline() && (t += 2));
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
          var _e88 = D[t];
          return 0 !== (this.getFormat() & _e88);
        }
        return !1;
      };
      _proto9.hasTextFormat = function hasTextFormat(t) {
        var e = w[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto9.getFormatFlags = function getFormatFlags(t, e) {
        return Cs(this.getLatest().__textFormat, t, e);
      };
      _proto9.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto9.select = function select(t, e) {
        Pa();
        var n = $f();
        var o = t,
          r = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t103 = this.getFirstChild();
            if (ki(_t103) || Hr(_t103)) return _t103.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t104 = this.getLastChild();
            if (ki(_t104) || Hr(_t104)) return _t104.select();
          }
        (void 0 === o && (o = i), void 0 === r && (r = i));
        var s = this.__key;
        return af(n)
          ? (n.anchor.set(s, o, "element"),
            n.focus.set(s, r, "element"),
            (n.dirty = !0),
            n)
          : Pf(s, o, s, r, "element", "element");
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
        No(this) && e(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          i = this.getWritable();
        t + n <= r || e(226, String(t), String(n), String(r));
        for (var _t105 of o);
        var s = i.__key,
          l = [];
        var c = [],
          a = this.getChildAtIndex(t + n),
          u = null,
          f = r - n + o.length;
        if (0 !== t)
          if (t === r) u = this.getLastChild();
          else {
            var _e89 = this.getChildAtIndex(t);
            null !== _e89 && (u = _e89.getPreviousSibling());
          }
        n > 0 &&
          (c = (function (t, n, o, r) {
            var i = [];
            var s = n;
            for (var _t106 = 0; _t106 < o; _t106++) {
              null === s && e(100);
              var _t107 = s.getNextSibling();
              (i.push(s.getWritable()), (s = _t107));
            }
            var l = r && r.getWritable(),
              c = s && s.getWritable();
            return (
              rd(t, l, c),
              (t.__size -= i.length),
              i.map(function (e) {
                return (
                  id(e, t),
                  (e.__prev = null),
                  (e.__next = null),
                  (e.__parent = null),
                  e.__key
                );
              })
            );
          })(i, null === u ? this.getFirstChild() : u.getNextSibling(), n, u));
        var d = o.length > 0 && null !== u ? u.getWritable() : null;
        for (var _t108 of o) {
          (null !== d &&
            _t108.is(d) &&
            ((u = d.getPreviousSibling()), (d = u && u.getWritable())),
            null !== a && _t108.is(a) && (a = a.getNextSibling()));
          var _n68 = _t108.getWritable();
          (_n68.__parent === s && f--, ld(_n68));
          var _o38 = _t108.__key;
          (sd(i, _n68, d, a && a.getWritable()),
            _t108.__key === s && e(76),
            l.push(_o38),
            (d = _n68));
        }
        if (((i.__size = f), c.length)) {
          var _t109 = $f();
          if (af(_t109)) {
            var _e90 = new Set(c),
              _n69 = new Set(l);
            for (var _o39 of [_t109.anchor, _t109.focus])
              Yr(_o39, _e90, _n69) && Hf(_o39, _o39.getNode(), this, u, a);
            0 !== f || this.canBeEmpty() || Sl(this) || this.remove();
          }
        }
        return i;
      };
      _proto9.getDOMSlot = function getDOMSlot(t) {
        return new _ae(t);
      };
      _proto9.exportDOM = function exportDOM(t) {
        var _bo$prototype$exportD = _bo.prototype.exportDOM.call(this, t),
          e = _bo$prototype$exportD.element;
        if (Vl(e)) {
          var _t110 = this.getIndent();
          _t110 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t110 + "px"),
            e.setAttribute("data-lexical-indent", String(_t110)));
          var _n70 = this.getDirection();
          _n70 && (e.dir = _n70);
        }
        return { element: e };
      };
      _proto9.shouldSerializeTextStyles = function shouldSerializeTextStyles() {
        return (
          !Sl(this) &&
          !(function (t, e) {
            if (e)
              return Vr(
                t,
                (function () {
                  var t = Ra();
                  if (!t._readOnly) {
                    var _e91 = za();
                    if (
                      null === _e91 ||
                      _e91._pendingEditorState !== t ||
                      0 !== _e91._dirtyType ||
                      !_e91._editorState._readOnly
                    )
                      return null !== lc && lc.editorState === t
                        ? lc.holds
                        : null;
                    t = _e91._editorState;
                  }
                  var e = sc.get(t);
                  return (void 0 === e && ((e = new Map()), sc.set(t, e)), e);
                })(),
              );
            for (
              var _e92 = t.getFirstChild();
              null !== _e92;
              _e92 = _e92.getNextSibling()
            )
              if (ki(_e92)) return !0;
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
          var n = nc(_this14, t, e);
          var o = n.element;
          (n.after && n.after.parentNode !== o && (n = n.withAfter(null)),
            n.before && n.before.parentNode !== o && (n = n.withBefore(null)));
          var r = n.getManagedLineBreak();
          r && n.insertManagedLineBreak("IMG" === r.nodeName);
          var i = n.getFirstChild();
          for (var _t111 of _this14.getChildrenKeys()) {
            var _r31 = e.getElementByKey(_t111);
            if (!_r31) continue;
            var _s11 = void 0,
              _l7 = i;
            for (; _l7 && !(_s11 = Ds(_l7, e)) && mc(_l7); )
              _l7 = _l7.nextSibling;
            (_l7 !== _r31 &&
              o.insertBefore(_r31, _s11 ? _l7 : i || n.getInsertionAnchor()),
              (i = _r31.nextSibling));
          }
          ho(_this14, t, n);
        });
      };
      return Ur;
    })(_bo5);
    function Hr(t) {
      return t instanceof _Ur4;
    }
    function Vr(t, e) {
      var n = t.getKey(),
        o = null !== e ? e.get(n) : void 0;
      if (void 0 !== o) return o;
      var r = !1;
      for (
        var _n71 = t.getFirstChild();
        null !== _n71 && !r;
        _n71 = _n71.getNextSibling()
      )
        r = ki(_n71) || (Hr(_n71) && Vr(_n71, e));
      return (null !== e && e.set(n, r), r);
    }
    function Yr(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t112 = o.__key;
        if (e.has(_t112) && !n.has(_t112)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _Jr = (function (_bo2) {
      function Jr(t) {
        var _this2;
        ((_this2 = _bo2.call(this, t) || this),
          (_this2.__slotHost = null),
          (_this2.__slots = null));
        return _this2;
      }
      babelHelpers.inheritsLoose(Jr, _bo2);
      var _proto0 = Jr.prototype;
      _proto0.afterCloneFrom = function afterCloneFrom(t) {
        (_bo2.prototype.afterCloneFrom.call(this, t),
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
    })(_bo5);
    function Gr(t) {
      return t instanceof _Jr;
    }
    function qr(t) {
      var e = t.getLatest().__cachedText;
      return null === e || (!Ia() && 0 !== La()._dirtyType) ? null : e;
    }
    var _Xr = (function (_Ur) {
      function Xr() {
        var _this3;
        ((_this3 = _Ur.call(this, "root") || this),
          (_this3.__cachedText = null));
        return _this3;
      }
      babelHelpers.inheritsLoose(Xr, _Ur);
      var _proto1 = Xr.prototype;
      _proto1.$config = function $config() {
        return this.config("root", { extends: _Ur4 });
      };
      _proto1.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        e(51);
      };
      _proto1.getTextContent = function getTextContent() {
        var t = qr(this);
        return null !== t ? t : _Ur.prototype.getTextContent.call(this);
      };
      _proto1.getTextContentSize = function getTextContentSize() {
        var t = qr(this);
        return null !== t
          ? t.length
          : _Ur.prototype.getTextContentSize.call(this);
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
        for (var _t113 of o) Hr(_t113) || Gr(_t113) || e(282);
        return _Ur.prototype.splice.call(this, t, n, o);
      };
      Xr.importJSON = function importJSON(t) {
        return Ls().updateFromJSON(t);
      };
      _proto1.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return Xr;
    })(_Ur4);
    function Qr(t) {
      return t instanceof _Xr;
    }
    function Zr(t) {
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
                      var _r32 = n.trim(),
                        _i23 = o.trim();
                      ("" !== _r32 && "" !== _i23 && (e[_r32] = _i23),
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
    function ti(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && "!important" === o.slice(r).toLowerCase()
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function ei(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = Zr(n),
        r = Zr(e);
      for (var _e93 in r) (delete o[_e93], ti(t, _e93, r[_e93]));
      for (var _e94 in o) t.removeProperty(_e94);
    }
    var ni = Xe()({
      detail: tn(Qe(Je(), A), { field: "__detail" }),
      format: tn(Qe(Je(), w), { field: "__format" }),
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
    function oi(t, e) {
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
    function ri(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function ii(t, e, n, o, r) {
      var i = o.classList;
      var s = el(r, "base");
      (void 0 !== s && i.add.apply(i, Array.from(s)),
        (s = el(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, Array.from(s)))
          : c && i.remove.apply(i, Array.from(s)));
      for (var _t114 in w) {
        var _o40 = w[_t114];
        if (((s = el(r, _t114)), void 0 !== s))
          if (n & _o40) {
            if (l && ("underline" === _t114 || "strikethrough" === _t114)) {
              e & _o40 && i.remove.apply(i, Array.from(s));
              continue;
            }
            (0 === (e & _o40) ||
              (c && "underline" === _t114) ||
              "strikethrough" === _t114) &&
              i.add.apply(i, Array.from(s));
          } else e & _o40 && i.remove.apply(i, Array.from(s));
      }
      tl(o, "class");
    }
    function si(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? v : ""),
        i = tc(),
        s = ec(i).$getDOMSlot(n, e, i),
        l = s.getFirstChild();
      if (null === l || l.nodeType !== Node.TEXT_NODE)
        return void s.insertChild(Pl().createTextNode(r));
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
            _t115 = _ref50[0],
            _e95 = _ref50[1],
            _n72 = _ref50[2];
          c.replaceData(_t115, _e95, _n72);
        } else c.nodeValue = r;
    }
    function li(t, e, n, o, r, i) {
      si(r, t, e);
      var s = i.theme.text;
      void 0 !== s && ii(0, 0, o, t, s);
    }
    function ci(t, e) {
      var n = Pl().createElement(e);
      return (n.appendChild(t), n);
    }
    function ai(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    function ui(t) {
      var e = t._editorState._nodeMap,
        n = Ra(),
        o = n._textEdits || (n._textEdits = new WeakMap());
      var r = o.get(e);
      return (void 0 === r && ((r = []), o.set(e, r)), r);
    }
    var fi = null,
      di = null;
    function hi(t) {
      var e = La();
      e._recordTextEdits && ui(e).push(["splice", t.__key, 0, 0, t.__text, ""]);
    }
    function gi(t) {
      var e = La();
      e._recordTextEdits && ui(e).push(["delete", t.__key]);
    }
    var _pi2 = (function (_bo3) {
      function pi(t, e) {
        var _this4;
        if (t === void 0) {
          t = "";
        }
        ((_this4 = _bo3.call(this, e) || this),
          (_this4.__text = t),
          (_this4.__format = 0),
          (_this4.__style = ""),
          (_this4.__mode = 0),
          (_this4.__detail = 0));
        return _this4;
      }
      babelHelpers.inheritsLoose(pi, _bo3);
      var _proto10 = pi.prototype;
      _proto10.$config = function $config() {
        return this.config("text", {
          extends: _bo5,
          generated: Pr,
          importDOM: {
            "#text": function text() {
              return { conversion: Si, priority: 0 };
            },
            b: function b() {
              return { conversion: yi, priority: 0 };
            },
            code: function code() {
              return { conversion: Ti, priority: 0 };
            },
            em: function em() {
              return { conversion: Ti, priority: 0 };
            },
            i: function i() {
              return { conversion: Ti, priority: 0 };
            },
            mark: function mark() {
              return { conversion: Ti, priority: 0 };
            },
            s: function s() {
              return { conversion: Ti, priority: 0 };
            },
            span: function span() {
              return { conversion: _i, priority: 0 };
            },
            strong: function strong() {
              return { conversion: Ti, priority: 0 };
            },
            sub: function sub() {
              return { conversion: Ti, priority: 0 };
            },
            sup: function sup() {
              return { conversion: Ti, priority: 0 };
            },
            u: function u() {
              return { conversion: Ti, priority: 0 };
            },
          },
          json: ni,
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
        return this.__key === Es();
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
        return Cs(this.getLatest().__format, t, e);
      };
      _proto10.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto10.isInline = function isInline() {
        return !0;
      };
      _proto10.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = oi(0, n),
          r = ri(0, n),
          i = null === o ? r : o,
          s = Pl().createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== o && ((l = Pl().createElement(r)), s.appendChild(l)),
          li(l, this, 0, n, this.__text, t));
        var c = this.__style;
        return ("" !== c && ei(s.style, c), s);
      };
      _proto10.updateDOM = function updateDOM(t, n, o) {
        var r = this.__text,
          i = t.__format,
          s = this.__format,
          l = oi(0, i),
          c = oi(0, s),
          a = ri(0, i),
          u = ri(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _t116 = n.firstChild;
          null == _t116 && e(48);
          var _i24 = Pl().createElement(u);
          return (li(_i24, this, 0, s, r, o), n.replaceChild(_i24, _t116), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && e(49)),
          si(r, f, this));
        var d = o.theme.text;
        void 0 !== d && i !== s && ii(0, i, s, f, d);
        var h = t.__style,
          g = this.__style;
        return (h !== g && (ei(n.style, g, h), tl(n, "style")), !1);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _bo3$prototype$export = _bo3.prototype.exportDOM.call(this, t),
          n = _bo3$prototype$export.element;
        return (
          Vl(n) || e(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = ci(n, "b")),
          this.hasFormat("italic") && (n = ci(n, "i")),
          this.hasFormat("strikethrough") && (n = ci(n, "s")),
          this.hasFormat("underline") && (n = ci(n, "u")),
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
        var e = Cs(this.getFormat(), t, null);
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
            var n = La(),
              o = t.__key;
            if (!n._recordTextEdits || fi === o) return;
            var r = t.__text,
              i = di;
            null !== i &&
            i[0] === o &&
            r.slice(0, i[1]) + i[3] + r.slice(i[1] + i[2]) === e
              ? ui(n).push(["splice", o, i[1], i[2], i[3], r])
              : ui(n).push(["set", o, r, e]);
          })(e, t),
          (e.__text = t),
          e
        );
      };
      _proto10.select = function select(t, e) {
        Pa();
        var n = t,
          o = e;
        var r = $f(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t117 = i.length;
          (void 0 === n && (n = _t117), void 0 === o && (o = _t117));
        } else ((n = 0), (o = 0));
        if (!af(r)) return Pf(s, n, s, o, "text", "text");
        {
          var _t118 = Es();
          ((_t118 !== r.anchor.key && _t118 !== r.focus.key) || bs(s),
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
        var c = $f();
        if (o && af(c)) {
          var _e96 = t + s;
          c.setTextNodeRange(r, _e96, r, _e96);
        }
        var a = i.slice(0, l) + n + i.slice(l + e),
          u = La();
        return (
          u._recordTextEdits &&
            ui(u).push(
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
        Pa();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = Es(),
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
        for (var _e97 = 0, _o41 = 0; _e97 < i && _o41 <= l; _o41++) {
          var _r33 = t[_o41];
          _r33 > _e97 && (s.push(n.slice(_e97, _r33)), (_e97 = _r33));
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
        var m = $f();
        if (af(m)) {
          var _ref51 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t119 = _ref51[0],
            _e98 = _ref51[1];
          ("text" === _t119.type && _t119.key === o && (_ = _t119),
            "text" === _e98.type && _e98.key === o && (y = _e98));
        }
        if (e.isSegmented())
          ((f = Ni(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = Sn(e, f)),
            (p = !0));
        else {
          var _t120 = fi;
          fi = o;
          try {
            f = e.setTextContent(a);
          } finally {
            fi = _t120;
          }
        }
        var x = [f];
        for (var _t121 = 1; _t121 < c; _t121++) {
          var _n73 = Ni(s[_t121]);
          ((_n73.__format = d),
            (_n73.__style = h),
            (_n73.__detail = g),
            (_n73.__state = Sn(e, _n73)));
          var _i25 = _n73.__key;
          (r === o && bs(_i25), x.push(_n73));
        }
        !(function (t, e, n) {
          var o = La();
          if (!o._recordTextEdits) return;
          var r = o._editorState._nodeMap,
            i = Ra(),
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
          ui(o).push([
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
        for (var _t122 of x) {
          if (!_ && !y) break;
          var _e99 = v + _t122.getTextContentSize();
          if (
            (null !== _ &&
              null !== S &&
              S <= _e99 &&
              S >= v &&
              (_.set(_t122.getKey(), S - v, "text"), S < _e99 && (_ = null)),
            null !== y && null !== C && C <= _e99 && C >= v)
          ) {
            y.set(_t122.getKey(), C - v, "text");
            break;
          }
          v = _e99;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            (null !== e && ks(e), null !== n && ks(n));
          })(this);
          var _t123 = u.getWritable(),
            _e100 = this.getIndexWithinParent();
          (p
            ? (_t123.splice(_e100, 0, x), this.remove())
            : _t123.splice(_e100, 1, x),
            af(m) && Uf(m, u, _e100, c - 1));
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
        Es() === r && bs(o);
        var l = $f();
        if (af(l)) {
          var _e101 = l.anchor,
            _i26 = l.focus;
          (null !== _e101 && _e101.key === r && Vf(_e101, n, o, t, s),
            null !== _i26 && _i26.key === r && Vf(_i26, n, o, t, s));
        }
        var c = t.__text,
          a = n ? c + i : i + c,
          u = fi;
        fi = o;
        try {
          this.setTextContent(a);
        } finally {
          fi = u;
        }
        var f = La();
        f._recordTextEdits && ui(f).push(["merge", o, r, n, i, c]);
        var d = this.getWritable();
        return (t.remove(), d);
      };
      _proto10.isTextEntity = function isTextEntity() {
        return !1;
      };
      return babelHelpers.createClass(pi, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_bo5);
    function _i(t) {
      return { forChild: bi(t.style), node: null };
    }
    function yi(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: bi(e.style, n ? void 0 : "bold"), node: null };
    }
    var mi = new WeakMap();
    function xi(t) {
      if (!Vl(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Si(t) {
      var n = t;
      null === t.parentElement && e(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = mi.get(n)) && !xi(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t124 = 0; _t124 < o.length; _t124++) mi.set(o[_t124], r);
          return r;
        })(n)
      )
        return { node: Xf(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t125 = n,
          _e102 = !0;
        for (; null !== _t125 && null !== (_t125 = Ci(_t125, !1)); ) {
          var _n75 = _t125.textContent || "";
          if (_n75.length > 0) {
            (/[ \t\n]$/.test(_n75) && (o = o.slice(1)), (_e102 = !1));
            break;
          }
        }
        _e102 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t126 = n,
          _e103 = !0;
        for (; null !== _t126 && null !== (_t126 = Ci(_t126, !0)); )
          if (
            (_t126.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e103 = !1;
            break;
          }
        _e103 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: Ni(o) };
    }
    function Ci(t, e) {
      var n = t;
      for (;;) {
        var _t127 = void 0;
        for (; null === (_t127 = e ? n.nextSibling : n.previousSibling); ) {
          var _t128 = n.parentElement;
          if (null === _t128) return null;
          n = _t128;
        }
        if (((n = _t127), Vl(n))) {
          var _t129 = n.style.display;
          if (
            ("" === _t129 && !ql(n)) ||
            ("" !== _t129 && !_t129.startsWith("inline"))
          )
            return null;
        }
        var _o42 = n;
        for (; null !== (_o42 = e ? n.firstChild : n.lastChild); ) n = _o42;
        if (ms(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var vi = {
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
    function Ti(t) {
      var e = vi[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: bi(t.style, e), node: null };
    }
    function Ni(t) {
      if (t === void 0) {
        t = "";
      }
      return vl(new _pi2(t));
    }
    function ki(t) {
      return t instanceof _pi2;
    }
    function bi(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        i = o.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign,
        a = t.textTransform;
      return function (t) {
        return ki(t) || ai(t)
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
    function Ei(t, n) {
      var o = t.type,
        r = t.key,
        i = t.offset,
        s = Nl(t.key);
      return "text" === o
        ? (ki(s) || e(266, s.getType(), r), Jd(s, n, i))
        : (Hr(s) || e(267, s.getType(), r), zi(s, t.offset, n));
    }
    function Oi(t, n) {
      var o = n.origin,
        r = n.direction,
        i = "next" === r;
      $d(n)
        ? t.set(o.getKey(), n.offset, "text")
        : Wd(n)
          ? ki(o)
            ? t.set(o.getKey(), Gd(o, r), "text")
            : t.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((jd(n) && Hr(o)) || e(268),
            t.set(o.getKey(), i ? 0 : o.getChildrenSize(), "element"));
    }
    function Mi(t) {
      var e = $f(),
        n = af(e) ? e : Ff();
      return (wi(n, t), Bs(n), n);
    }
    function wi(t, e) {
      (Oi(t.anchor, e.anchor), Oi(t.focus, e.focus));
    }
    function Ai(t) {
      var e = t.anchor,
        n = t.focus,
        o = Ei(e, "next"),
        r = Ei(n, "next"),
        i = ch(o, r) <= 0 ? "next" : "previous";
      return sh(oh(o, i), oh(r, i));
    }
    function Di(t) {
      var e = t.direction,
        n = t.origin,
        o = Yd(n, Ld(e)).getNodeAtCaret();
      return o ? Yd(o, e) : Xd(n.getParentOrThrow(), e);
    }
    function Ii(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o43 = jd(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o43;
        _o43 = _o43.getParentCaret(e)
      )
        n.push(Di(_o43));
      return n;
    }
    function Pi(t) {
      return !!t && t.origin.isAttached();
    }
    function Fi(t, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (t.isCollapsed()) return t;
      var o = "root",
        r = "next";
      var i = n;
      var s = Bi(t, r);
      var l = s.anchor.origin;
      for (; null !== l && !Sl(l); ) l = l.getParent();
      var c = Hr(l) ? l.getFirstChild() : null,
        a = Ii(s.anchor, o),
        u = Ii(s.focus.getFlipped(), o),
        f = new Set(),
        d = [];
      for (var _t130 of s.iterNodeCarets(o))
        if (jd(_t130)) f.add(_t130.origin.getKey());
        else if (Wd(_t130)) {
          var _e104 = _t130.origin;
          (Hr(_e104) && !f.has(_e104.getKey())) || d.push(_e104);
        }
      var h = new Set();
      for (var _t131 of d) {
        var _e105 = _t131.getParent();
        (null === _e105 || f.has(_e105.getKey()) || h.add(_e105),
          gi(_t131),
          Ts(_t131));
      }
      for (var _t132 of h)
        !_t132.canBeEmpty() &&
          !Sl(_t132) &&
          _t132.isEmpty() &&
          _t132.isAttached() &&
          _t132.remove();
      for (var _t133 of s.getTextSlices()) {
        if (!_t133) continue;
        var _e106 = _t133.caret.origin,
          _n76 = _e106.getTextContentSize(),
          _o44 = Di(Yd(_e106, r)),
          _s12 = _e106.getMode();
        if (
          (Math.abs(_t133.distance) === _n76 && "removeEmptySlices" === i) ||
          ("token" === _s12 && 0 !== _t133.distance)
        )
          (gi(_e106), _o44.remove());
        else if (0 !== _t133.distance) {
          i = "removeEmptySlices";
          var _e107 = _t133.removeTextSlice();
          var _n77 = _t133.caret.origin;
          if ("segmented" === _s12) {
            var _t134 = _e107.origin,
              _n78 = Ni(_t134.getTextContent())
                .setStyle(_t134.getStyle())
                .setFormat(_t134.getFormat())
                .setDetail(_t134.getDetail());
            (xn(_t134, _n78),
              _o44.replaceOrInsert(_n78),
              (_e107 = Jd(_n78, r, _e107.offset)));
          }
          (_n77.is(a[0].origin) && (a[0] = _e107),
            _n77.is(u[0].origin) && (u[0] = _e107.getFlipped()));
        }
      }
      var g = Ri(a),
        p = Ri(u),
        _ = (function (t, e, n) {
          var o = t && t.getParentAtCaret(),
            r = e && e.getParentAtCaret(),
            i = o && r && gh(o, r);
          if (!i || "branch" !== i.type) return null;
          var s = function s(t, e) {
              var o;
              for (
                var _r34 = t;
                _r34 && !_r34.is(i.commonAncestor);
                _r34 = _r34.getParent()
              ) {
                if (Sl(_r34)) return;
                (e && !n.has(_r34.__key)) || !Zl(_r34) || (o = _r34);
              }
              return o;
            },
            l = s(o, !1),
            c = l && s(r, !0);
          return l && c && 0 === Cd(c).length ? [l, c] : null;
        })(g, p, f);
      if (_) {
        var _t135 = _[0],
          _e108 = _[1];
        Xd(_t135, "previous").splice(0, _e108.getChildren());
        var _n79 = _e108.getParent();
        for (_e108.remove(!0); _n79 && _n79.isEmpty(); ) {
          var _t136 = _n79;
          ((_n79 = _n79.getParent()), _t136.remove(!0));
        }
      } else if (p) {
        var _t137 = (function (t) {
            if (jd(t)) {
              var _e110 = t.origin;
              if (Zl(_e110)) return _e110;
            } else {
              var _e111 = t.getParentAtCaret();
              if (_e111 && Zl(_e111)) return _e111;
            }
            return null;
          })(p),
          _e109 = _t137 && _t137.getParent(),
          _n80 = _t137 && _t137.getParents().findLast(xl);
        if (
          _t137 &&
          _e109 &&
          !Qr(_e109) &&
          _t137.isEmpty() &&
          f.has(_t137.getKey()) &&
          0 === Cd(_t137).length &&
          (!_n80 || f.has(_n80.getKey()))
        ) {
          _t137.remove(!0);
          var _n81 = _e109;
          for (; _n81 && !Qr(_n81) && _n81.isEmpty(); ) {
            var _t138 = _n81.getParent();
            if (
              _t138 &&
              Qr(_t138) &&
              _t138.getChildrenSize() <= 1 &&
              _n81.canBeEmpty()
            )
              break;
            var _e112 = _n81;
            ((_n81 = _t138), _e112.remove(!0));
          }
        }
      }
      null !== Ks(l, c) || null === l || l.isAttached() || Ks(Ls(), null);
      var y = Ri([g, p].concat(Array.from(a), Array.from(u)));
      if (y) return ih(oh(y, t.direction));
      e(
        269,
        JSON.stringify(
          a.map(function (t) {
            return t.origin.__key;
          }),
        ),
      );
    }
    function Ri(t) {
      var e = t.find(Pi);
      return e && Li(e);
    }
    function Li(t) {
      var e = (function (t) {
          var e = t;
          for (; jd(e); ) {
            var _t139 = Zd(e);
            if (!jd(_t139)) break;
            e = _t139;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (ki(e.origin)) return $d(e) ? e : Jd(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return Wd(o) && ki(o.origin) ? Jd(o.origin, n, Ld(n)) : e;
    }
    function Ki(t) {
      return $d(t) && t.offset !== Gd(t.origin, t.direction);
    }
    function Bi(t, e) {
      return t.direction === e ? t : sh(oh(t.focus, e), oh(t.anchor, e));
    }
    function zi(t, e, n) {
      var o = t.getChildrenSize(),
        r = (e > 0 ? Math.min(Math.ceil(e), o) : 0) - ("next" === n ? 1 : 0),
        i = r < 0 || r >= o ? null : t.getChildAtIndex(r);
      return null === i ? Xd(t, n) : Yd(i, n);
    }
    function $i(t) {
      var n = t.origin,
        o = t.offset,
        r = t.direction;
      if (o === Gd(n, r)) return t.getSiblingCaret();
      if (o === Gd(n, Ld(r))) return Di(t.getSiblingCaret());
      var _n$splitText = n.splitText(o),
        i = _n$splitText[0];
      return (ki(i) || e(281), oh(Yd(i, "next"), r));
    }
    function Wi(t, e) {
      for (var _n82 of t)
        if (null !== _n82 && _n82.caret.origin.is(e)) return _n82;
    }
    function ji(t, e) {
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
        s = e && i && jf(e, i) ? n.getIndexWithinParent() : -1,
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
      i && e && e !== $f() && Uf(e, i, s, c.length - 1);
      for (var _ref53 of l) {
        var _t140 = _ref53[0];
        var _e113 = _ref53[1];
        null !== _e113 && _t140.set(a.__key, _e113, "text");
      }
      return a;
    }
    function Ui(t, e) {
      return !0;
    }
    function Hi(t, _temp) {
      var _ref54 = _temp === void 0 ? {} : _temp,
        _ref54$$copyElementNo = _ref54.$copyElementNode,
        e = _ref54$$copyElementNo === void 0 ? Cl : _ref54$$copyElementNo,
        _ref54$$splitTextPoin = _ref54.$splitTextPointCaretNext,
        n = _ref54$$splitTextPoin === void 0 ? $i : _ref54$$splitTextPoin,
        _ref54$rootMode = _ref54.rootMode,
        o = _ref54$rootMode === void 0 ? "shadowRoot" : _ref54$rootMode,
        _ref54$$shouldSplit = _ref54.$shouldSplit,
        r = _ref54$$shouldSplit === void 0 ? Ui : _ref54$$shouldSplit,
        _ref54$removeEmptyDes = _ref54.removeEmptyDestination,
        i = _ref54$removeEmptyDes === void 0 ? !1 : _ref54$removeEmptyDes;
      if ($d(t)) return n(t);
      var s = t.getParentCaret(o);
      if (s) {
        var _n83 = s.origin;
        if (jd(t)) {
          var _t141 = Di(s);
          if (i && _n83.isEmpty()) return (_n83.remove(), _t141);
          if (!_n83.canBeEmpty() || !r(_n83, "first")) return _t141;
        }
        var _o45 = fd((l = t).getNodeAtCaret(), l.direction);
        (_o45.length > 0 || (!i && _n83.canBeEmpty() && r(_n83, "last"))) &&
          s.insert(e(_n83).splice(0, 0, _o45));
      }
      var l;
      return s;
    }
    function Vi(t, n, o) {
      var r = oh(n, "next");
      ($d(r) &&
        (0 === r.offset
          ? (r = Yd(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = Yd(r.origin, "next"))),
        r.origin.is(t) &&
          (Wd(r) || e(342, t.getKey(), t.getType()), (r = Di(r))),
        (t.is(r.getNodeAtCaret()) || t.is(r.getFlipped().getNodeAtCaret())) &&
          t.remove(!0));
      var i =
        void 0 === o || void 0 === o.rootMode || "shadowRoot" === o.rootMode;
      for (
        var _t142 = r;
        _t142 &&
        ((r = _t142),
        !i || $d(r) || !Or(jd(r) ? r.origin : r.origin.getParent()));
        _t142 = Hi(_t142, o)
      );
      return (
        $d(r) && e(283),
        r.insert(t.isInline() ? qi().append(t) : t),
        oh(Yd(t.getLatest(), "next"), n.direction)
      );
    }
    function Yi(t, e) {
      var n = Bi(af(e) ? Ai(e) : e, "next"),
        o = md(n.anchor.origin),
        r = md(t.getLatest());
      if (null === o ? null !== r : !o.is(r)) return !1;
      var i = Li(Xd(t, "next")),
        s = oh(Li(Xd(t, "previous")), "next");
      return ch(n.anchor, i) <= 0 && ch(n.focus, s) >= 0;
    }
    var _Ji = (function (_Ur2) {
      function Ji() {
        return _Ur2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Ji, _Ur2);
      var _proto11 = Ji.prototype;
      _proto11.$config = function $config() {
        return this.config("paragraph", {
          children: "inline",
          extends: _Ur4,
          generated: Fr,
          importDOM: {
            p: function p() {
              return { conversion: Gi, priority: 0 };
            },
          },
        });
      };
      _proto11.createDOM = function createDOM(t) {
        var _e$classList;
        var e = Pl().createElement("p"),
          n = el(t.theme, "paragraph");
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
        var _Ur2$prototype$export = _Ur2.prototype.exportDOM.call(this, t),
          e = _Ur2$prototype$export.element;
        if (Vl(e)) {
          this.isEmpty() && e.append(Pl().createElement("br"));
          var _t143 = this.getFormatType();
          _t143 && (e.style.textAlign = _t143);
        }
        return { element: e };
      };
      _proto11.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = _Ur2.prototype.exportJSON.call(this, t);
        if (void 0 === e.textFormat || void 0 === e.textStyle) {
          var _n84 = this.getChildren().find(ki),
            _o46 = _n84 ? _n84.getFormat() : this.getTextFormat(),
            _r35 = _n84 ? _n84.getStyle() : this.getTextStyle();
          ((t && 0 === _o46) || (e.textFormat = _o46),
            (t && "" === _r35) || (e.textStyle = _r35));
        }
        return e;
      };
      _proto11.extractWithChild = function extractWithChild(t, e, n) {
        if (!af(e)) return !1;
        if (
          "" === this.getFormatType() &&
          0 === this.getIndent() &&
          "" === this.getStyle()
        )
          return !1;
        if (Yi(this, e)) {
          var _t144 = this.getTextContent();
          return "" !== _t144 && e.getTextContent() === _t144;
        }
        return !1;
      };
      _proto11.insertNewAfter = function insertNewAfter(t, e) {
        var n = qi();
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
            return ki(t) && !/\S/.test(t.getTextContent());
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
    })(_Ur4);
    function Gi(t) {
      var e = qi();
      if ((_c(e, t), gc(t, e), "" === e.getFormatType())) {
        var _n85 = t.getAttribute("align");
        _n85 && _n85 && _n85 in D && e.setFormat(_n85);
      }
      return (pc(e, t), { node: e });
    }
    function qi() {
      return vl(new _Ji());
    }
    function Xi(t) {
      return t instanceof _Ji;
    }
    var Qi = Xe()({
      detail: en(Je(2), { getter: { field: "__detail" }, setter: null }),
      mode: en(Ge(["normal"]), {
        getter: { field: "__mode", getterTable: { 0: "normal" } },
        setter: null,
      }),
      text: en(Ve("\t"), {
        getter: { field: "__text", method: "getTextContent" },
        setter: null,
      }),
    });
    var _Zi = (function (_pi) {
      function Zi(t) {
        var _this5;
        if (t === void 0) {
          t = void 0;
        }
        ((_this5 = _pi.call(this, "\t", t) || this), (_this5.__detail = 2));
        return _this5;
      }
      babelHelpers.inheritsLoose(Zi, _pi);
      var _proto12 = Zi.prototype;
      _proto12.$config = function $config() {
        return this.config("tab", { extends: _pi2, generated: Lr, json: Qi });
      };
      _proto12.createDOM = function createDOM(t) {
        var _e$classList2;
        var e = _pi.prototype.createDOM.call(this, t),
          n = el(t.theme, "tab");
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
        return _pi.prototype.setTextContent.call(this, "\t");
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
      return Zi;
    })(_pi2);
    function ts() {
      return vl(new _Zi());
    }
    function es(t) {
      return t instanceof _Zi;
    }
    var ns = null;
    function os(t) {
      ns = t;
    }
    var rs = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var is = 1;
    function ss(t, n) {
      var o = ls(t, n);
      return (void 0 === o && e(30, n), o);
    }
    function ls(t, e) {
      return t._nodes.get(e);
    }
    var cs =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function as(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return xs(e) || Ml(e) ? Wl(e) : null;
            })();
      if (!Vl(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = Is(n),
        r = n.nodeName;
      return (
        Eo(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == ps(n)))
      );
    }
    function us(t) {
      var e = null === t ? null : jl(t);
      return Yl(e) && as(e);
    }
    var fs = as;
    function ds(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        gs(e) === t &&
        t.read("latest", function () {
          return !as(e);
        })
      );
    }
    function hs(t) {
      return t instanceof _xa;
    }
    function gs(t) {
      var e = t;
      for (; null != e; ) {
        var _t145 = ps(e);
        if (hs(_t145)) return _t145;
        e = cl(e);
      }
      return null;
    }
    function ps(t) {
      return t ? t.__lexicalEditor : null;
    }
    function _s(t) {
      return es(t) || t.isToken();
    }
    function ys(t) {
      return _s(t) || t.isSegmented();
    }
    function ms(t) {
      return Yl(t) && 3 === t.nodeType;
    }
    function xs(t) {
      return Yl(t) && 9 === t.nodeType;
    }
    function Ss(t) {
      var e = t;
      for (; null != e; ) {
        if (ms(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function Cs(t, e, n) {
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
    function vs(t, e) {
      var n = (function () {
        var t = ns;
        return ((ns = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (Pa(), Fa());
      var o = La(),
        r = Ra(),
        i = "" + is++;
      (r._nodeMap.set(i, t),
        Hr(t) ? o._dirtyElements.set(i, !0) : o._dirtyLeaves.add(i),
        o._cloneNotNeeded.set(i, t),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = i));
    }
    function Ts(t) {
      ld(null === t.getParent() ? t : t.getWritable());
    }
    var Ns = Ts;
    function ks(t) {
      (Fa(), No(t) && e(323, t.__key, t.__type));
      var n = null !== t.__parent ? t.__parent : gd(t) ? t.__slotHost : null,
        o = Ra(),
        r = La(),
        i = o._nodeMap,
        s = r._dirtyElements;
      null !== n &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t146 = e.get(o);
            if (void 0 === _t146) break;
            (n.set(o, !1),
              (o =
                null !== _t146.__parent
                  ? _t146.__parent
                  : gd(_t146)
                    ? _t146.__slotHost
                    : null));
          }
        })(n, i, s);
      var l = t.__key;
      (0 === r._dirtyType && (r._dirtyType = 1),
        Hr(t) ? s.set(l, !0) : r._dirtyLeaves.add(l));
    }
    function bs(t) {
      Pa();
      var e = La(),
        n = e._compositionKey;
      if (t !== n) {
        if (
          ((e._compositionKey = t),
          (e._compositionMergeHeld = null),
          null !== n)
        ) {
          var _t147 = Ms(n);
          null !== _t147 && _t147.getWritable();
        }
        if (null !== t) {
          var _e114 = Ms(t);
          null !== _e114 && _e114.getWritable();
        }
      }
    }
    function Es() {
      return Ia() ? null : La()._compositionKey;
    }
    function Os(t) {
      return (
        !g && (_ || x) && "" === t.__text && t.__key === La()._compositionKey
      );
    }
    function Ms(t, e) {
      var n = (e || Ra())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function ws(t, e) {
      var n = Ds(t, La());
      return void 0 !== n ? Ms(n, e) : null;
    }
    function As(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function Ds(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function Is(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t148 = ws(n, e);
        if (null !== _t148) return _t148;
        n = cl(n);
      }
      return null;
    }
    function Ps(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Fs(t) {
      return t.read(function () {
        return Ls().getTextContent();
      });
    }
    function Rs(t, e) {
      var n = dc(t.getEditorState()),
        o = [];
      for (var _t149 of e) {
        var _e115 = n.get(_t149);
        _e115 && o.push(_e115);
      }
      0 !== o.length &&
        t.update(
          function () {
            for (var _t150 of o)
              for (var _e116 of _t150.keys()) {
                var _t151 = Ms(_e116);
                _t151 && _t151.markDirty();
              }
          },
          null === t._pendingEditorState ? { tag: Oo } : void 0,
        );
    }
    function Ls() {
      return Ra()._nodeMap.get("root");
    }
    function Ks(t, e) {
      if (
        !(
          Sl(t) &&
          t.isAttached() &&
          (Qr(t) ? 0 === t.getChildrenSize() : t.isEmpty()) &&
          (Qr(t) || (null !== e && Zl(e)))
        )
      )
        return null;
      var n = qi();
      return (t.append(n), n);
    }
    function Bs(t) {
      Pa();
      var e = Ra();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        af(t) && La()._slotsUsed && wf(t)),
        (e._selection = t));
    }
    function zs(t) {
      (Pa(), xe(La(), t));
    }
    function $s(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t152 = Ds(n, e);
          if (void 0 !== _t152) return _t152;
          n = cl(n);
        }
        return null;
      })(t, La());
      return null === e ? null : Ms(e);
    }
    function Ws(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function js(t) {
      var e = [];
      for (var _n86 = t; null !== _n86; _n86 = _n86._parentEditor) e.push(_n86);
      return e;
    }
    var Us = 0;
    function Hs() {
      return r
        ? Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substring(0, 5)
        : "s" + (++Us).toString(36);
    }
    function Vs(t) {
      return ms(t) ? t.nodeValue : null;
    }
    function Ys(t, e, n) {
      var o = El(_l(e));
      if (null === o) return;
      var r = Ll(o, e._rootElement),
        i = r.anchorNode;
      var s = r.anchorOffset,
        l = r.focusOffset;
      if (null !== i) {
        var _e117 = Vs(i);
        var _o47 = Is(i);
        if (null !== _e117 && ki(_o47)) {
          if ((_e117 === v || _e117 === N) && n) {
            var _t153 = n.length;
            ((_e117 = n), (s = _t153), (l = _t153));
          }
          null !== _e117 && Js(_o47, _e117, s, l, t);
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
          var _t154 = N;
          var _e118;
          for (; -1 !== (_e118 = _c7.indexOf(_t154)); )
            ((_c7 = _c7.slice(0, _e118) + _c7.slice(_e118 + _t154.length)),
              null !== n &&
                n > _e118 &&
                (n = Math.max(_e118, n - _t154.length)),
              null !== o &&
                o > _e118 &&
                (o = Math.max(_e118, o - _t154.length)));
        }
        var _a4 = i.getTextContent();
        if (r || _c7 !== _a4) {
          var _e119 = $f();
          if ("" === _c7) {
            if (_s13 && !r && _l8) return void Gs(i, "", _e119);
            if ((bs(null), _ || g || x)) i.remove();
            else {
              var _t155 = La();
              (Gs(i, "", _e119),
                setTimeout(function () {
                  _t155.update(function () {
                    i.isAttached() && "" === i.getTextContent() && i.remove();
                  });
                }, 20));
            }
            return;
          }
          var _a5 = i.getParent(),
            _u5 = Wf(),
            _f5 = i.getTextContentSize(),
            _d5 = Es(),
            _h4 = i.getKey();
          if (
            (i.isToken() && !_s13) ||
            (null !== _d5 && _h4 === _d5 && !_s13) ||
            (af(_u5) &&
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
          if (!af(_e119) || null === n || null === o)
            return void Gs(i, _c7, _e119);
          if ((_e119.setTextNodeRange(i, n, i, o), i.isSegmented())) {
            var _t156 = Ni(i.getTextContent());
            (i.replace(_t156), (i = _t156));
          }
          Gs(i, _c7, _e119);
        }
      }
    }
    function Gs(t, e, n) {
      if ((t.setTextContent(e), af(n))) {
        var _e120 = t.getKey();
        var _o48 = !1;
        for (var _r36 of ["anchor", "focus"]) {
          var _i27 = n[_r36];
          "text" === _i27.type &&
            _i27.key === _e120 &&
            ((_i27.offset = Gd(t, _i27.offset, "clamp")), (_o48 = !0));
        }
        _o48 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function qs(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function Xs(t, e) {
      return (
        qs(t, e, "altKey") &&
        qs(t, e, "ctrlKey") &&
        qs(t, e, "shiftKey") &&
        qs(t, e, "metaKey")
      );
    }
    function Qs(t) {
      var e = t;
      for (; null !== e; ) {
        var _t157 = e.getParent();
        if (null === _t157) return null;
        if (Qr(_t157)) return e;
        e = _t157;
      }
      return null;
    }
    function Zs(t, e) {
      var n = t.anchor,
        o = t.focus,
        r = n.key,
        i = n.offset,
        s = n.type,
        l = o.key,
        c = o.offset,
        a = o.type;
      if ((Bo(t), !Qr(e))) return t;
      var u = Qs(n.getNode());
      return (
        Hr(u) &&
          u.isShadowRoot() &&
          u.is(Qs(o.getNode())) &&
          (n.set(r, i, s), o.set(l, c, a)),
        t
      );
    }
    function tl(t, e) {
      "" === t.getAttribute(e) && t.removeAttribute(e);
    }
    function el(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t158 = _h(r);
        return ((n[e] = _t158), _t158);
      }
      return r;
    }
    function nl(t, n, o, r, i) {
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
    function ol(t, e, n) {
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
    function rl(t, e) {
      var n = t.offset;
      if ("element" === t.type) return ol(t.getNode(), e, n);
      {
        var _o49 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o49.getTextContentSize())) {
          var _t159 = e ? _o49.getPreviousSibling() : _o49.getNextSibling();
          return null === _t159
            ? ol(
                _o49.getParentOrThrow(),
                e,
                _o49.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t159;
        }
      }
      return null;
    }
    function il(t) {
      var e = _l(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function sl(t, e) {
      return Ga(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
    }
    function ll(t, n) {
      var o = t._keyToDOMMap.get(n);
      return (void 0 === o && e(75, n), o);
    }
    function cl(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return Ml(n) ? n.host : null;
    }
    function al(t) {
      return xs(t) ? t : Vl(t) ? t.ownerDocument : null;
    }
    function ul(t, e) {
      var n = parseFloat(t);
      return isFinite(n) ? (t.endsWith("%") ? (n * e) / 100 : n) : 0;
    }
    function fl(t, e, n, o) {
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
        d = f + ul(s.scrollPaddingLeft, r) * a,
        h = f + (r - ul(s.scrollPaddingRight, r)) * a;
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
    function dl(t) {
      (Pa(), La()._updateTags.add(t));
    }
    function hl(t) {
      (Pa(), La()._deferred.push(t));
    }
    function gl(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function pl(t) {
      var e = al(t);
      return e ? e.defaultView : null;
    }
    function _l(t) {
      var n = t._window;
      return (null === n && e(78), n);
    }
    function yl(t) {
      return (Hr(t) && t.isInline()) || (Gr(t) && t.isInline());
    }
    function ml(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== pd(e) && Hr(e)) return e;
        var _t160 = e.getParentOrThrow();
        if (Sl(_t160)) return _t160;
        e = _t160;
      }
      return e;
    }
    function xl(t) {
      return Hr(t) && t.isShadowRoot();
    }
    function Sl(t) {
      return Qr(t) || xl(t);
    }
    function Cl(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t, rs);
      return (
        vs(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function vl(t) {
      var n = La(),
        o = t.getType(),
        r = ls(n, o);
      void 0 === r && e(200, t.constructor.name, o);
      var i = r.replace,
        s = r.replaceWithKlass;
      if (null !== i) {
        var _n87 = i(t),
          _r37 = _n87.constructor;
        return (
          null !== s
            ? _n87 instanceof s ||
              e(
                201,
                s.name,
                s.getType(),
                _r37.name,
                _r37.getType(),
                t.constructor.name,
                o,
              )
            : (_n87 instanceof t.constructor && _r37 !== t.constructor) ||
              e(202, _r37.name, _r37.getType(), t.constructor.name, o),
          _n87.__key === t.__key &&
            e(203, t.constructor.name, o, _r37.name, _r37.getType()),
          _n87
        );
      }
      return t;
    }
    function Tl(t, n) {
      !Qr(t.getParent()) || Hr(n) || Gr(n) || e(99);
    }
    function Nl(t) {
      var n = Ms(t);
      return (null === n && e(63, t), n);
    }
    function kl(t) {
      if (!t || t.isInline()) return !1;
      if (Gr(t)) return !0;
      if (Hr(t)) {
        if (t.isShadowRoot()) {
          var _e121 = t.getParent();
          return !(Hr(_e121) && _e121.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function bl(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function El(t) {
      return r ? (t || window).getSelection() : null;
    }
    function Ol(t) {
      var e = pl(t);
      return e ? e.getSelection() : null;
    }
    function Ml(t) {
      return Jl(t) && "host" in t;
    }
    var wl = [];
    function Al(t) {
      var e = t.getRootNode();
      if (e === t || !Ml(e)) return wl;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t161 = o.getRootNode();
        if (_t161 === o || !Ml(_t161)) break;
        (n.push(_t161), (o = _t161.host));
      }
      return n;
    }
    function* Dl(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t162 = (xs(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o50 = void 0;
        for (; (_o50 = _t162.nextNode()); )
          _o50.shadowRoot && e.push(_o50.shadowRoot);
      }
    }
    function Il(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function Pl() {
      var t = za();
      return Il(null !== t ? t._rootElement : null);
    }
    function Fl(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = Al(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e122 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e122) return _e122;
      } catch (t) {}
      try {
        var _e123 = o.apply(t, n)[0];
        if (void 0 !== _e123) return _e123;
      } catch (t) {}
      return null;
    }
    function Rl(t, e) {
      var n = Fl(t, e);
      if (null !== n) {
        var _t163 = Kl(n);
        if (null !== _t163) return _t163;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function Ll(t, e) {
      var n = Fl(t, e);
      return null === n ? t : Bl(n, zl(t));
    }
    function Kl(t) {
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
    function Bl(t, e) {
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
    function zl(t) {
      return t.direction;
    }
    function $l(t) {
      var e = t.getRootNode();
      return xs(e) || Ml(e) ? e.activeElement : null;
    }
    function Wl(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t164 = e.shadowRoot.activeElement;
        if (null === _t164) break;
        e = _t164;
      }
      return e;
    }
    function jl(t) {
      var e = t.target;
      if (
        null !== e &&
        Vl(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e124 = t.composedPath();
        if (_e124.length > 0) return _e124[0];
      }
      return e;
    }
    var Ul = 8192;
    function Hl(t, e) {
      if (e.length <= Ul) t.append.apply(t, Array.from(e));
      else
        for (var _n88 = 0; _n88 < e.length; _n88 += Ul)
          t.append.apply(t, Array.from(e.slice(_n88, _n88 + Ul)));
    }
    function Vl(t) {
      return Yl(t) && 1 === t.nodeType;
    }
    function Yl(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function Jl(t) {
      return Yl(t) && 11 === t.nodeType;
    }
    var Gl =
      /^(a|abbr|acronym|b|bdi|bdo|big|cite|code|data|del|dfn|em|font|i|ins|kbd|label|mark|nobr|output|q|ruby|s|samp|small|span|strike|strong|sub|sup|time|u|tt|var|#text)$/i;
    function ql(t) {
      return (
        !(!Vl(t) || !t.style.display.startsWith("inline")) ||
        Gl.test(t.nodeName)
      );
    }
    var Xl =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Ql(t) {
      return (
        (!Vl(t) || !t.style.display.startsWith("inline")) && Xl.test(t.nodeName)
      );
    }
    function Zl(t) {
      if (Gr(t) && !t.isInline()) return !0;
      if (!Hr(t) || Sl(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || aa(e) || ki(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function tc() {
      return La();
    }
    function ec(t) {
      if (t === void 0) {
        t = tc();
      }
      return t._config.dom || _a;
    }
    function nc(t, n, o) {
      if (o === void 0) {
        o = tc();
      }
      var r = ec(o).$getDOMSlot(t, n, o);
      return (Hr(t) && (oc(r) || e(344, t.getKey(), t.getType())), r);
    }
    function oc(t) {
      return t instanceof _ae;
    }
    function rc(t, e, n) {
      if (n === void 0) {
        n = tc();
      }
      return Ss(nc(t, e, n).element);
    }
    var ic = new WeakMap(),
      sc = new WeakMap();
    var lc = null,
      cc = !1;
    function ac(t) {
      if (cc) return t();
      var e = Ca;
      ((cc = !0),
        (lc =
          null === e || e._readOnly
            ? null
            : { editorState: e, holds: new Map() }));
      try {
        return t();
      } finally {
        ((cc = !1), (lc = null));
      }
    }
    var uc = new WeakMap(),
      fc = new Map();
    function dc(t) {
      if (!t._readOnly && t.isEmpty()) return fc;
      t._readOnly || e(192);
      var n = uc.get(t);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref56 of t._nodeMap) {
              var _n89 = _ref56[0];
              var _o51 = _ref56[1];
              {
                var _t165 = _o51.__type;
                var _r38 = e.get(_t165);
                (_r38 || ((_r38 = new Map()), e.set(_t165, _r38)),
                  _r38.set(_n89, _o51));
              }
            }
            return e;
          })(t)),
          uc.set(t, n)),
        n
      );
    }
    function hc(t) {
      var e = t.constructor.clone(t, rs);
      return (e.afterCloneFrom(t), e);
    }
    function gc(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t166 = parseInt(n, 10);
        if (Number.isFinite(_t166) && _t166 >= 0)
          return void e.setIndent(_t166);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function pc(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function _c(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function yc(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function mc(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function xc(t, e) {
      if (e === void 0) {
        e = tc();
      }
      var n = e.isEditable(),
        o = n ? "true" : "false";
      (t.getAttribute("contenteditable") !== o && (t.contentEditable = o),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function Sc(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (Vl(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== Ds(n, e)) return !1;
        n = cl(n);
      }
      return !1;
    }
    function Cc(t, e) {
      return je(t, e) && t[e] !== _bo5[e];
    }
    var vc = new WeakMap();
    function Tc(t) {
      var n = vc.get(t);
      return void 0 !== n
        ? n
        : (function (t) {
            var n =
                null != t.prototype && B in t.prototype
                  ? t.prototype[B]()
                  : void 0,
              o = (function (t) {
                if (!(t === _bo5 || t.prototype instanceof _bo5)) {
                  var _n90 = "<unknown>",
                    _o52 = "<unknown>";
                  try {
                    _n90 = t.getType();
                  } catch (t) {}
                  try {
                    _xa.version && (_o52 = JSON.parse(_xa.version));
                  } catch (t) {}
                  e(290, t.name, _n90, _o52);
                }
                return t === _Jr || t === _Ur4 || t === _bo5;
              })(t),
              r = !o && Cc(t, "getType") ? t.getType : void 0,
              i = r && !(kc in r) ? r.call(t) : void 0;
            var s,
              l = i;
            if (n)
              if (i) s = n[i];
              else {
                for (var _ref58 of Object.entries(n)) {
                  var _t167 = _ref58[0];
                  var _e125 = _ref58[1];
                  ((l = _t167), (s = _e125));
                }
                if (!s)
                  for (var _t168 of Object.getOwnPropertySymbols(n)) {
                    var _e126 = n[_t168];
                    if (_e126) {
                      s = _e126;
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
            vc.set(t, c);
            try {
              var _n91 = (function (t) {
                  var n = t.prototype,
                    o = new Map(),
                    _Dc = Dc(t),
                    r = _Dc.fieldsBaseFirst;
                  for (var _ref60 of r) {
                    var _i29 = _ref60[0];
                    var _s14 = _ref60[1];
                    {
                      var _r40 = Rc(t, _i29, _s14);
                      if (null === _r40) continue;
                      if (Te(_r40)) {
                        var _n92 = _r40.field;
                        if (
                          ("__proto__" === _n92 && e(430, t.name, _i29),
                          void 0 !== _r40.setterTable)
                        ) {
                          var _n93 = _r40.setterTable,
                            _o53 = _s14.meta;
                          for (var _r41 of "enum" === _o53.kind
                            ? _o53.values
                            : [_s14.defaultValue])
                            je(_n93, String(_r41)) ||
                              e(431, t.name, _i29, JSON.stringify(_r41));
                        }
                        o.set(_i29, {
                          field: _n92,
                          key: _i29,
                          kind: "ownField",
                          schema: _s14,
                          setterTable: _r40.setterTable,
                        });
                        continue;
                      }
                      var _l9 = n[_r40];
                      ("function" != typeof _l9 && e(432, t.name, _i29, _r40),
                        o.set(_i29, {
                          key: _i29,
                          kind: "field",
                          schema: _s14,
                          setter: _l9,
                        }));
                    }
                  }
                  return 0 === o.size ? bc : [].concat(Array.from(o.values()));
                })(t),
                _r39 = (function (t) {
                  var n = t.prototype,
                    o = new Map();
                  for (var _ref62 of Dc(t).fieldsDerivedFirst) {
                    var _r42 = _ref62[0];
                    var _i30 = _ref62[1];
                    {
                      var _s15 = Fc(t, _r42, _i30);
                      if (null === _s15) continue;
                      if (Te(_s15)) {
                        var _l0 = _s15.field;
                        "__proto__" === _l0 && e(426, t.name, _r42);
                        var _c8 = _s15.when;
                        var _a7 = void 0;
                        if (void 0 !== _c8) {
                          var _o54 = n[_c8];
                          ("function" != typeof _o54 &&
                            e(427, t.name, _r42, _c8),
                            (_a7 = _o54));
                        }
                        o.set(_r42, {
                          defaultValue: _i30.defaultValue,
                          derived: null === _i30.setter,
                          field: _l0,
                          getterTable: _s15.getterTable,
                          isEqual: _i30.isEqual,
                          key: _r42,
                          kind: "ownField",
                          schema: _i30,
                          when: _a7,
                        });
                        continue;
                      }
                      var _l1 = n[_s15];
                      ("function" != typeof _l1 && e(428, t.name, _r42, _s15),
                        o.set(_r42, {
                          defaultValue: _i30.defaultValue,
                          derived: null === _i30.setter,
                          getter: _l1,
                          isEqual: _i30.isEqual,
                          key: _r42,
                          kind: "method",
                          schema: _i30,
                        }));
                    }
                  }
                  return 0 === o.size ? Pc : [].concat(Array.from(o.values()));
                })(t),
                _i28 = Dc(t),
                _a6 = (function (t, e, n) {
                  var o,
                    r = t;
                  for (var _ref64 of qc(t)) {
                    var _e127 = _ref64.klass;
                    var _n94 = _ref64.ownNodeConfig;
                    _n94 &&
                      void 0 !== _n94.generated &&
                      (void 0 === o
                        ? ((o = _n94.generated), (r = _e127))
                        : _n94.generated === o && (r = _e127));
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
                          for (var _n95 = 0; _n95 < t.getters.length; _n95++) {
                            var _o55 = t.getters[_n95],
                              _r43 = e.getters[_n95];
                            if (
                              _o55.kind !== _r43.kind ||
                              _o55.key !== _r43.key ||
                              _o55.schema !== _r43.schema ||
                              _o55.derived !== _r43.derived ||
                              _o55.isEqual !== _r43.isEqual ||
                              !Object.is(
                                _o55.defaultValue,
                                _r43.defaultValue,
                              ) ||
                              ("ownField" === _o55.kind &&
                                "ownField" === _r43.kind &&
                                (_o55.field !== _r43.field ||
                                  (void 0 === _o55.getterTable) !=
                                    (void 0 === _r43.getterTable)))
                            )
                              return !1;
                          }
                          for (var _n96 = 0; _n96 < t.setters.length; _n96++) {
                            var _o56 = t.setters[_n96],
                              _r44 = e.setters[_n96];
                            if (
                              _o56.kind !== _r44.kind ||
                              _o56.key !== _r44.key ||
                              _o56.schema !== _r44.schema ||
                              ("ownField" === _o56.kind &&
                                "ownField" === _r44.kind &&
                                (_o56.field !== _r44.field ||
                                  (void 0 === _o56.setterTable) !=
                                    (void 0 === _r44.setterTable)))
                            )
                              return !1;
                          }
                          return !0;
                        })(n, Nc(Tc(r)))
                      ? o
                      : null;
                })(t, 0, { getters: _r39, setters: _n91 });
              ((c.compiled = {
                flatStates: _i28.flatStates,
                generated: null === _a6 ? null : _a6(_i28.fields),
                getters: _r39,
                isCompactDefault: Bc(_r39),
                setters: _n91,
              }),
                (function (t, e, n, o) {
                  if (!e && n) {
                    if (!Cc(t, "getType")) {
                      var _e128 = t,
                        _o57 = function _o57() {
                          return this !== _e128 ? _bo5.getType.call(this) : n;
                        };
                      ((_o57[kc] = !0), (t.getType = _o57));
                    }
                    if (
                      (Cc(t, "clone") ||
                        (t.clone = function (e, n) {
                          os(e);
                          var o = new t();
                          return (n !== rs && o.afterCloneFrom(e), o);
                        }),
                      Cc(t, "importJSON") ||
                        (t.importJSON =
                          (o && o.$importJSON) ||
                          (function (t) {
                            return function (e) {
                              var n = Xc(t);
                              return n.updateFromJSON ===
                                _bo5.prototype.updateFromJSON
                                ? (function (t, e) {
                                    return $c(
                                      t.__state || void 0 !== e[L]
                                        ? gn(t, e)
                                        : t,
                                      e,
                                    );
                                  })(n, e)
                                : n.updateFromJSON(e);
                            };
                          })(t)),
                      !Cc(t, "importDOM") && o)
                    ) {
                      var _e129 = o.importDOM;
                      _e129 &&
                        (t.importDOM = function () {
                          return _e129;
                        });
                    }
                    var _e130 = t.prototype;
                    je(_e130, "getTextContent") &&
                      !je(_e130, "getTextContentSize") &&
                      (t.prototype.getTextContentSize =
                        _bo5.prototype.getTextContentSize);
                  }
                })(t, o, l, s),
                (function (t) {
                  var _loop2 = function _loop2() {
                      var e = _ref66.klass;
                      var n = _ref66.ownNodeConfig;
                      {
                        var _t169 = e.prototype;
                        if (je(_t169, "afterCloneFrom")) return 0;
                        var _o58 = Gc(e);
                        if (0 === _o58.length) return 0;
                        var _r45 = Object.getPrototypeOf(_t169),
                          _i31 =
                            n && void 0 !== n.generated
                              ? Nc(Tc(e)).generated
                              : null,
                          _s16 =
                            (null !== _i31 && _i31.afterCloneFrom) ||
                            function (t, e) {
                              var n = t,
                                r = e;
                              for (
                                var _t170 = 0;
                                _t170 < _o58.length;
                                _t170++
                              ) {
                                var _e131 = _o58[_t170];
                                n[_e131] = r[_e131];
                              }
                            };
                        ((_t169.afterCloneFrom = function (t) {
                          (_r45.afterCloneFrom.call(this, t), _s16(this, t));
                        }),
                          (_t169.afterCloneFrom[Yc] = !0));
                      }
                    },
                    _ret;
                  for (var _ref66 of qc(t)) {
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
                      value: e.inline ? jc : Uc,
                      writable: !0,
                    });
                })(t, s));
            } catch (e) {
              throw (vc["delete"](t), e);
            }
            return c;
          })(t);
    }
    function Nc(t) {
      var n = t.compiled;
      return (void 0 === n && e(422, t.config.klass.name), n);
    }
    var kc = Symbol("lexical.synthesizedGetType"),
      bc = [];
    function Ec(t, e, n, o) {
      var r = void 0 === n.method ? o : n.method,
        i = Dc(t).declaredBy.get(e);
      if (void 0 === i) return n;
      var s = t.prototype,
        l = i.prototype;
      return Oc(s, l, r) && Oc(s, l, o) ? n : r;
    }
    function Oc(t, e, n) {
      return t[n] === e[n];
    }
    function Mc(t) {
      return "set" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    function wc(t) {
      return "get" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    var Ac = {
      declaredBy: new Map(),
      fields: new Map(),
      fieldsBaseFirst: [],
      fieldsDerivedFirst: [],
      flatStates: [],
    };
    function Dc(t) {
      var e = Tc(t);
      return (
        void 0 === e.composed &&
          (e.composed = (function (t) {
            var e = [],
              n = [],
              o = [];
            for (var _ref68 of qc(t)) {
              var _r46 = _ref68.klass;
              var _i32 = _ref68.ownNodeConfig;
              {
                var _t171 = _i32 && _i32.json;
                (n.push(_r46),
                  e.push(
                    _t171 && "node" === _t171.meta.kind
                      ? Object.entries(_t171.meta.fields)
                      : [],
                  ));
                var _s17 = [];
                if (_i32 && _i32.stateConfigs)
                  for (var _t172 of _i32.stateConfigs)
                    "stateConfig" in _t172 &&
                      _t172.flat &&
                      _s17.push(_t172.stateConfig);
                o.push(_s17);
              }
            }
            var r = new Map();
            for (var _t173 = 0; _t173 < e.length; _t173++)
              for (var _ref70 of e[_t173]) {
                var _n97 = _ref70[0];
                var _o59 = _ref70[1];
                r.has(_n97) || r.set(_n97, _o59);
              }
            var i = new Map(),
              s = new Map(),
              l = new Map();
            for (var _t174 = e.length - 1; _t174 >= 0; _t174--) {
              for (var _ref72 of e[_t174]) {
                var _o60 = _ref72[0];
                var _l10 = _ref72[1];
                {
                  var _e132 = r.get(_o60);
                  (void 0 === _e132 || i.has(_o60) || i.set(_o60, _e132),
                    void 0 === _e132 ||
                      _l10 !== _e132 ||
                      s.has(_o60) ||
                      s.set(_o60, n[_t174]));
                }
              }
              for (var _e133 of o[_t174])
                l.has(_e133.key) || l.set(_e133.key, _e133);
            }
            return 0 === r.size && 0 === l.size
              ? Ac
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
    function Ic(t) {
      var _Dc2 = Dc(t),
        e = _Dc2.fieldsDerivedFirst,
        n = _Dc2.flatStates,
        o = {};
      for (var _t175 of n) _t175.schema && (o[_t175.key] = _t175.schema);
      for (var _ref74 of e) {
        var _t176 = _ref74[0];
        var _n98 = _ref74[1];
        o[_t176] = _n98;
      }
      return o;
    }
    var Pc = [];
    function Fc(t, e, n) {
      var o = n.getter;
      if (null === o) return null;
      var r = void 0 === o ? wc(e) : o;
      return Te(r) ? Ec(t, e, r, wc(e)) : r;
    }
    function Rc(t, e, n) {
      var o = n.setter;
      if (null === o) return null;
      var r = void 0 === o ? Mc(e) : o;
      return Te(r) ? Ec(t, e, r, Mc(e)) : r;
    }
    function Lc(t) {
      return t;
    }
    function Kc(t, e) {
      var n = t.defaultValue,
        o = t.isEqual;
      return void 0 === e || e === n || (void 0 !== o && o(e, n));
    }
    function Bc(t) {
      var e;
      return function (n, o) {
        void 0 === e &&
          (e = new Map(
            t.map(function (t) {
              return [t.key, t];
            }),
          ));
        var r = e.get(n);
        return void 0 !== r && Kc(r, o);
      };
    }
    function zc(t) {
      var e = t.setterTable,
        n = t.schema,
        o = n.defaultValue;
      return void 0 === e ? o : e[String(o)];
    }
    function $c(t, e) {
      var n = Tc(t.constructor),
        _Nc = Nc(n),
        o = _Nc.flatStates,
        r = _Nc.generated,
        i = _Nc.setters,
        s = (function (t, e, n) {
          var o = t;
          var _loop3 = function _loop3() {
            var r = n[_t177],
              i = e[r.key];
            if (void 0 !== i) {
              var _t178 = r.parse(i);
              o = cn(o, r, function () {
                return _t178;
              });
            }
          };
          for (var _t177 = 0; _t177 < n.length; _t177++) {
            _loop3();
          }
          return o;
        })(t, e, o);
      return null !== r && void 0 !== r.updateFromJSON
        ? r.updateFromJSON(s, e)
        : (function (t, e, n) {
            for (var _o61 = 0; _o61 < n.length; _o61++) {
              var _r47 = n[_o61],
                _i33 = _r47.schema(e[_r47.key]);
              "ownField" === _r47.kind
                ? (Lc(t)[_r47.field] =
                    void 0 === _r47.setterTable
                      ? _i33
                      : je(_r47.setterTable, _i33)
                        ? _r47.setterTable[_i33]
                        : zc(_r47))
                : _r47.setter.call(t, _i33);
            }
            return t;
          })(s, e, i);
    }
    function Wc(t) {
      return Tc(t).config;
    }
    function jc() {
      return !0;
    }
    function Uc() {
      return !1;
    }
    function Hc(t) {
      return t === jc || t === Uc;
    }
    function Vc(t) {
      var e = [];
      for (var _n99 of [t.getter, t.setter])
        Te(_n99) &&
          "__proto__" !== _n99.field &&
          !e.includes(_n99.field) &&
          e.push(_n99.field);
      return e;
    }
    var Yc = "__lexicalSynthesizedAfterCloneFrom";
    function Jc(t) {
      var _Dc3 = Dc(t),
        e = _Dc3.declaredBy,
        n = _Dc3.fieldsBaseFirst,
        o = [];
      for (var _ref76 of n) {
        var _r48 = _ref76[0];
        var _i34 = _ref76[1];
        if (e.get(_r48) === t)
          for (var _t179 of Vc(_i34)) o.includes(_t179) || o.push(_t179);
      }
      return o;
    }
    function Gc(t) {
      var e = Jc(t);
      if (0 === e.length) return e;
      var n = new Set();
      for (var _ref78 of qc(t)) {
        var _e134 = _ref78.klass;
        if (_e134 !== t) for (var _t180 of Jc(_e134)) n.add(_t180);
      }
      return 0 === n.size
        ? e
        : e.filter(function (t) {
            return !n.has(t);
          });
    }
    function* qc(t) {
      for (var _e135 = t; _e135 && (_e135 === _bo5 || Eo(_e135.prototype)); ) {
        var _t181 = Wc(_e135),
          _n100 = _t181.declaresOwnConfig;
        (yield _n100
          ? _t181
          : babelHelpers["extends"]({}, _t181, { ownNodeConfig: void 0 }),
          (_e135 =
            (_n100 && _t181.ownNodeConfig && _t181.ownNodeConfig["extends"]) ||
            ta(_e135)));
      }
    }
    function Xc(t) {
      var e = tc();
      Pa();
      var n = e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t)),
        o = new n.klass();
      return null === n.replace ? o : vl(o);
    }
    var Qc = function Qc(t, e) {
      var n = t;
      for (; null != n && !Qr(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Zc(t, n) {
      var o = [];
      var r = t.__first;
      for (; null !== r; ) {
        var _t182 = null === n ? Ms(r) : n.get(r);
        (null == _t182 && e(174), o.push(r), (r = _t182.__next));
      }
      return o;
    }
    function ta(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    function ea(t) {
      return new _ra(qt(t._nodeMap), null, t._slotsUsed);
    }
    function na() {
      return new _ra(new Map([["root", new _Xr()]]), null, !1);
    }
    function oa(t) {
      var n = t.constructor,
        o = ee(t);
      if (Hr(t)) {
        var _e136 = o.children,
          _n101 = t.getChildren();
        for (var _t183 = 0; _t183 < _n101.length; _t183++)
          _e136.push(oa(_n101[_t183]));
      }
      var r = Cd(t);
      if (r.length > 0) {
        var _i35 = {};
        for (var _o62 of r) {
          var _r49 = vd(t, _o62);
          (null === _r49 && e(366, n.name, _o62), (_i35[_o62] = oa(_r49)));
        }
        o.$slots = _i35;
      }
      return o;
    }
    var _ra = (function () {
      function ra(t, e, n) {
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
      var _proto13 = ra.prototype;
      _proto13.isEmpty = function isEmpty() {
        return this._nodeMap.size <= 1 && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return Ha((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new ra(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), (e._parsed = this._parsed), e);
      };
      _proto13.toJSON = function toJSON(t) {
        var _this15 = this;
        return Zt("boolean" == typeof t && t, function () {
          return Ha(null, _this15, function () {
            return ac(function () {
              return { root: oa(Ls()) };
            });
          });
        });
      };
      return ra;
    })();
    var _ia = (function (_Ur3) {
      function ia() {
        return _Ur3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(ia, _Ur3);
      var _proto14 = ia.prototype;
      _proto14.$config = function $config() {
        return this.config("artificial", { extends: _Ur4 });
      };
      _proto14.createDOM = function createDOM(t) {
        return Pl().createElement("div");
      };
      return ia;
    })(_Ur4);
    var _sa = (function (_bo4) {
      function sa() {
        return _bo4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(sa, _bo4);
      var _proto15 = sa.prototype;
      _proto15.$config = function $config() {
        return this.config("linebreak", {
          extends: _bo5,
          generated: Rr,
          importDOM: {
            br: function br(t) {
              return ua(t) || fa(t) ? null : { conversion: la, priority: 0 };
            },
          },
        });
      };
      _proto15.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto15.createDOM = function createDOM() {
        return Pl().createElement("br");
      };
      _proto15.updateDOM = function updateDOM() {
        return !1;
      };
      _proto15.isInline = function isInline() {
        return !0;
      };
      return sa;
    })(_bo5);
    function la(t) {
      return { node: ca() };
    }
    function ca() {
      return vl(new _sa());
    }
    function aa(t) {
      return t instanceof _sa;
    }
    function ua(t) {
      var e = t.parentElement;
      if (null !== e && Ql(e)) {
        var _n102 = e.firstChild;
        if (_n102 === t || (_n102.nextSibling === t && da(_n102))) {
          var _n103 = e.lastChild;
          if (_n103 === t || (_n103.previousSibling === t && da(_n103)))
            return !0;
        }
      }
      return !1;
    }
    function fa(t) {
      var e = t.parentElement;
      if (null !== e && Ql(e)) {
        var _n104 = e.firstChild;
        if (_n104 === t || (_n104.nextSibling === t && da(_n104))) return !1;
        var _o63 = e.lastChild;
        if (_o63 === t || (_o63.previousSibling === t && da(_o63))) return !0;
      }
      return !1;
    }
    function da(t) {
      return ms(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function ha(t) {
      console.warn(t);
    }
    function ga(t, e, n, o, r) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = na()),
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
        null !== e && xu(t, e),
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
          ((n.textContent = ""), i.set("root", n), As(n, t, "root")));
    }
    function pa(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref80 of qc(t)) {
        var _o64 = _ref80.klass;
        var _r50 = _ref80.ownNodeConfig;
        {
          var _t184 = _o64.transform;
          if (!n.has(_t184)) {
            n.add(_t184);
            var _r51 = _o64.transform();
            _r51 && e.add(_r51);
          }
          if (_r50) {
            var _t185 = _r50.$transform;
            _t185 && e.add(_t185);
          }
        }
      }
      return e;
    }
    var _a = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = ls(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return Hr(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Hr(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function ya(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function ma(t, e, n) {
      return (t.set(e, n), ya.bind(null, t, e));
    }
    var _xa = (function () {
      function xa(t, e, n, o, r, i, s, l, c) {
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
          (this._key = Hs()),
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
      var _proto16 = xa.prototype;
      _proto16.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto16.registerUpdateListener = function registerUpdateListener(t) {
        return ma(this._listeners.update, t);
      };
      _proto16.registerEditableListener = function registerEditableListener(t) {
        return ma(this._listeners.editable, t);
      };
      _proto16.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return ma(this._listeners.decorator, t);
      };
      _proto16.registerTextContentListener =
        function registerTextContentListener(t) {
          return ma(this._listeners.textcontent, t);
        };
      _proto16.registerRootListener = function registerRootListener(t) {
        var _this16 = this;
        var e = this._listeners.root;
        return nu(ma(e, t, t(this._rootElement, null) || void 0), function () {
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
          o = dc(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t186 of o.keys()) r.set(_t186, "created");
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
          var _t187 = this.registerNodeTransformToKlass(r, e);
          o.push(_t187);
        }
        return (
          Rs(
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
        return sl.apply(void 0, [this, t].concat(Array.from(e)));
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
          var _o65 = el(this._config.theme, "root"),
            _r52 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            ga(this, n, t, _r52, { preserveUpdateQueue: !0 }),
            null !== n &&
              (this._config.disableEvents ||
                (function (t) {
                  var n = iu.get(t);
                  if (void 0 === n) return void Qu();
                  var o = su.get(n);
                  if (void 0 === o) return void Qu();
                  iu["delete"](t);
                  var r = ps(t);
                  hs(r)
                    ? ((function (t) {
                        if (null !== t._parentEditor) {
                          var _e137 = js(t),
                            _n105 = _e137[_e137.length - 1]._key;
                          Ju.get(_n105) === t && Ju["delete"](_n105);
                        } else Ju["delete"](t._key);
                      })(r),
                      o.editors["delete"](r),
                      (o.hasShadowEditor = void 0),
                      (t.__lexicalEditor = null))
                    : r && e(198);
                  var i = Vu(t);
                  for (var _t188 = 0; _t188 < i.length; _t188++) i[_t188]();
                  t.__lexicalEventHandles = [];
                })(n),
              null != _o65 &&
                (_n$classList = n.classList).remove.apply(
                  _n$classList,
                  Array.from(_o65),
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e138 = pl(t),
              _n106 = t.style;
            ((_n106.userSelect = "text"),
              (_n106.whiteSpace = "pre-wrap"),
              (_n106.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e138),
              (this._dirtyType = 2),
              Se(this),
              this._updateTags.add(Oo),
              Va(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  iu.set(t, n);
                  var o = su.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    su.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = Vu(t);
                  r.push(lu.register(n));
                  var i = babelHelpers["extends"](
                    {
                      blur: Rt,
                      click: gu,
                      compositionend: Lu,
                      compositionstart: Du,
                      copy: Ot,
                      cut: Mt,
                      dragend: Et,
                      dragover: bt,
                      dragstart: kt,
                      drop: Tt,
                      focus: Ft,
                      input: wu,
                      keydown: Ku,
                      paste: Z,
                      pointerdown: Su,
                    },
                    d && { beforeinput: Ou },
                    g && { keyup: Bu, mousedown: yu },
                  );
                  var _loop4 = function _loop4() {
                    var n = _ref82[0];
                    var o = _ref82[1];
                    {
                      var _i36 = function _i36(r) {
                        Xu(r) ||
                          (qu(r),
                          "blur" === n &&
                            (xu(e, t),
                            (e._inputState.isShiftKeyDown = !1),
                            (e._inputState.isInsertLineBreak = !1)),
                          (e.isEditable() || "click" === n || "copy" === n) &&
                            ("function" == typeof o ? o(r, e) : sl(e, o, r)));
                      };
                      r.push(ou(t, n, _i36));
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
                        eu(e, function () {
                          var s = El(_l(e));
                          if ("mousedown" !== i.type) {
                            var _o66 =
                              c &&
                              s &&
                              af($f()) &&
                              Bf(Wf(), s, e, new Event("selectionchange"));
                            return (
                              _o66 && Bs(_o66),
                              vu(e, n, c && s ? Ll(s, t).focusNode : null)
                            );
                          }
                          var a = Lf(s, e);
                          if (
                            i.defaultPrevented ||
                            (!i.shiftKey && a && !a.isCollapsed())
                          )
                            l();
                          else if (s && r.isSelectionChangeFromMouseDown) {
                            (Yu(e, s, new Event("selectionchange"), o),
                              vu(e, i, Ll(s, t).focusNode));
                            var _n107 = $f();
                            af(_n107) &&
                              _n107.isCollapsed() &&
                              !_n107.is(Wf()) &&
                              hu(e, _n107);
                          }
                        }));
                    };
                  (r.push(
                    ru(
                      n,
                      { pointercancel: c, pointermove: c, pointerup: c },
                      !0,
                    ),
                    ou(_l(e), "blur", l),
                    e.registerEditableListener(l),
                    ru(t, {
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
                          Sc(jl(t), e)
                            ? null
                            : t;
                      },
                    }),
                    ou(
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
                          return nu(
                            ou(
                              t,
                              "touchstart",
                              function (t) {
                                var e =
                                  1 === t.touches.length ? t.touches[0] : null;
                                n = e ? { x: e.clientX, y: e.clientY } : null;
                              },
                              o,
                            ),
                            ou(
                              t,
                              "touchend",
                              function (t) {
                                var o = t.changedTouches[0];
                                (null !== n &&
                                  o &&
                                  0 === t.touches.length &&
                                  Math.abs(o.clientX - n.x) <= pu &&
                                  Math.abs(o.clientY - n.y) <= pu &&
                                  e(t),
                                  (n = null));
                              },
                              o,
                            ),
                          );
                        })(t, function (n) {
                          return (function (t, e, n) {
                            void 0 !== e._inputState.savedInputMode &&
                              (mu(t, e, n) ||
                                (Wl(n.ownerDocument) === n && n.blur(),
                                xu(e, n)));
                          })(n, e, t);
                        }),
                      ));
                })(t, this),
              null != _o65 &&
                (_t$classList = t.classList).add.apply(
                  _t$classList,
                  Array.from(_o65),
                ));
          } else ((this._window = null), this._updateTags.add(Oo), Va(this));
          Ya("root", this, !1, t, n);
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
          ((r = ea(t)),
          (r._selection = t._selection ? t._selection.clone() : null)),
          xe(this));
        var i = this._pendingEditorState,
          s = void 0 !== e ? e.tag : null;
        (null === i ||
          i.isEmpty() ||
          (null != s && this._updateTags.add(s), Va(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || t._slotsUsed),
          eu(
            this,
            function () {
              if (
                (s && _this17._updateTags.add(s),
                o && (n(38), Ls().append(qi())),
                t._parsed)
              )
                for (var _ref84 of r._nodeMap.entries()) {
                  var _t189 = _ref84[0];
                  var _e139 = _ref84[1];
                  Hr(_e139)
                    ? _this17._dirtyElements.set(_t189, !0)
                    : _this17._dirtyLeaves.add(_t189);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto16.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = na(),
            r = Ca,
            i = Ta,
            s = va,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Map()),
            (e._dirtyType = 0),
            (Ca = o),
            (Ta = !1),
            (va = e),
            os(null));
          try {
            var _r53 = e._nodes;
            (Ua(t.root, _r53), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (Ca = r),
              (Ta = i),
              (va = s));
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
          "force-commit" === e && (Da(this) || Va(this)),
          ("pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
          ).read(n, { editor: this })
        );
      };
      _proto16.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : tu(t, e, n);
        })(this, t, e);
      };
      _proto16.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          eu(this, function () {
            var o = $f(),
              r = Ls();
            (null !== o
              ? o.dirty || Bs(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              dl("focus"),
              hl(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto16.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = El(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto16.isEditable = function isEditable() {
        return this._editable;
      };
      _proto16.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          Ya("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return Ka();
            }));
      };
      _proto16.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON(te()) };
      };
      return xa;
    })();
    _xa.version = (function () {
      return Yt;
    })();
    function Sa(t, e, n, o, r, i) {
      if (Hr(t)) {
        var _s18 = t.__first;
        for (; null !== _s18; ) {
          var _t190 = o.get(_s18);
          if (void 0 === _t190) break;
          var _l11 = Hr(_t190);
          (_t190.__parent !== e ||
            (_l11 && i.has(_s18)) ||
            ((_l11 || (hd(_t190) && null !== _t190.__slots)) &&
              Sa(_t190, _s18, n, o, r, i),
            n.has(_s18) || i["delete"](_s18),
            r.push(_s18)),
            (_s18 = _t190.__next));
        }
      }
      for (var _s19 of hd(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t191 = o.get(_s19);
        void 0 !== _t191 &&
          gd(_t191) &&
          _t191.__slotHost === e &&
          ((Hr(_t191) || (hd(_t191) && null !== _t191.__slots)) &&
            Sa(_t191, _s19, n, o, r, i),
          n.has(_s19) || i["delete"](_s19),
          r.push(_s19));
      }
    }
    var Ca = null,
      va = null,
      Ta = !1,
      Na = !1,
      ka = !1;
    var ba = new Set(),
      Ea = new Set(),
      Oa = new Set();
    var Ma = 0;
    var wa = new WeakSet(),
      Aa = { characterData: !0, childList: !0, subtree: !0 };
    function Da(t) {
      return Oa.has(t);
    }
    function Ia() {
      return Ta || (null !== Ca && Ca._readOnly);
    }
    function Pa() {
      Ta && e(13);
    }
    function Fa() {
      Ma > 99 && e(14);
    }
    function Ra() {
      return (null === Ca && e(195, Ba()), Ca);
    }
    function La() {
      return (null === va && e(337, Ba()), va);
    }
    function Ka() {
      La()._dirtyType = 2;
    }
    function Ba() {
      var t = 0;
      var e = new Set(),
        n = _xa.version;
      if ("undefined" != typeof window)
        for (var _o67 of Dl(document)) {
          var _r54 = ps(_o67);
          if (hs(_r54)) t++;
          else if (_r54) {
            var _t192 = String(_r54.constructor.version || "<0.17.1");
            (_t192 === n &&
              (_t192 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t192));
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
    function za() {
      return va;
    }
    function $a(t, e, n) {
      var o = e.__type,
        r = ss(t, o);
      var i = n.get(o);
      void 0 === i && ((i = Array.from(r.transforms)), n.set(o, i));
      var s = i.length;
      for (var _t193 = 0; _t193 < s && (i[_t193](e), e.isAttached()); _t193++);
    }
    function Wa(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function ja(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t194 of o) n.add(_t194);
    }
    function Ua(t, n) {
      var o = t.type,
        r = n.get(o);
      void 0 === r && e(17, o);
      var i = r.klass;
      t.type !== i.getType() && e(18, i.name);
      var s = i.importJSON(t),
        l = t.children;
      if (Hr(s) && Array.isArray(l))
        for (var _t195 = 0; _t195 < l.length; _t195++) {
          var _e140 = Ua(l[_t195], n);
          s.append(_e140);
        }
      var c = t.$slots;
      if (c) {
        hd(s) || e(379, i.name);
        for (var _t196 in c) Ad(s, _t196, Ua(c[_t196], n));
      }
      return s;
    }
    function Ha(t, e, n) {
      var o = Ca,
        r = Ta,
        i = va;
      ((Ca = e), (Ta = !0), (va = t));
      try {
        return n();
      } finally {
        ((Ca = o), (Ta = r), (va = i));
      }
    }
    function Va(e, n) {
      null !== e._pendingEditorState && va !== e && xe(e, !1, !0);
      var o = ka;
      ka = !0;
      try {
        var _o68 = (function (t) {
          if (Ea.has(t)) return !1;
          Ea.add(t);
          try {
            for (var _e141 = 0; null !== t._pendingEditorState; _e141++) {
              var _n108 = t._pendingEditorState._selection,
                _o69 = t._rootElement;
              if (!Ja(t, _n108)) return !1;
              var _r55 =
                (null === _n108 || af(_n108)) &&
                (t._headless || null === _o69 || !_o69.isConnected);
              if (_r55 || 100 === _e141)
                return (
                  (t._lastNotifiedSelection =
                    null === _n108 ? null : _n108.clone()),
                  !_r55
                );
              tu(
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
            Ea["delete"](t);
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
              Xa(t, t._deferred)
            );
          var i = t._editorState,
            s = i._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = Ca,
            u = Ta,
            f = va,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !r && c && null !== h)
          ) {
            ((va = t), (Ca = n), (Ta = !1), (t._updating = !0));
            try {
              var _e142 = t._dirtyType,
                _o70 = t._dirtyElements,
                _r56 = t._dirtyLeaves;
              (h.disconnect(), (g = So(i, n, t, _e142, _o70, _r56)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), Na)) throw e;
              return (
                ga(t, null, o, n),
                Se(t),
                (t._dirtyType = 2),
                (Na = !0),
                Va(t, i),
                void (Na = !1)
              );
            } finally {
              (h.observe(o, Aa),
                (t._updating = d),
                (Ca = a),
                (Ta = u),
                (va = f));
            }
          }
          n._readOnly || ((n._readOnly = !0), wa["delete"](n));
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
              for (i in o) r.has(i) || (o === n && (o = Ps(t)), delete o[i]);
            })(t, n));
          var S = r ? null : El(_l(t));
          if (
            t._editable &&
            null !== S &&
            (c || null === l || l.dirty || !l.is(s)) &&
            null !== o &&
            !m.has(Do)
          ) {
            ((va = t), (Ca = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e143 = t._blockCursorElement;
                (null !== _e143 && bl(_e143, t, o), Gf(s, l, t, S, m, o));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  af(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains($l(e))
                ) {
                  var _r57 = n.anchor,
                    _i37 = _r57.getNode(),
                    _s20 = _r57.offset;
                  var _l12 = !1,
                    _c9 = null;
                  if (_s20 === _i37.getChildrenSize())
                    kl(_i37.getChildAtIndex(_s20 - 1)) && (_l12 = !0);
                  else {
                    var _e144 = _i37.getChildAtIndex(_s20);
                    null !== _e144 &&
                      kl(_e144) &&
                      ((_l12 = !0), (_c9 = t.getElementByKey(_e144.__key)));
                  }
                  if (_l12) {
                    var _n109 = nc(_i37, t.getElementByKey(_i37.__key), t),
                      _r58 = _n109.element;
                    if (
                      (null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = Pl().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList2;
                              if ("string" == typeof o) {
                                var _t197 = _h(o);
                                o = e.blockCursor = _t197;
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
                      var _t198 =
                        null !== _n109.before &&
                        _n109.before.parentNode === _r58
                          ? _n109.before
                          : null;
                      _r58.insertBefore(o, _t198);
                    } else _r58.insertBefore(o, _c9);
                    return;
                  }
                }
                null !== o && bl(o, t, e);
              })(t, o, l);
            } finally {
              (null !== h && h.observe(o, Aa), (va = f), (Ca = a));
            }
          }
          var C = Oa.has(t);
          Oa.add(t);
          try {
            null !== g &&
              (function (t, e, n, o, r) {
                var i = Array.from(t._listeners.mutation),
                  s = i.length;
                for (var _t199 = 0; _t199 < s; _t199++) {
                  var _i$_t = i[_t199],
                    _s21 = _i$_t[0],
                    _l13 = _i$_t[1];
                  for (var _t200 of _l13) {
                    var _i38 = e.get(_t200);
                    void 0 !== _i38 &&
                      _s21(_i38, {
                        dirtyLeaves: o,
                        prevEditorState: r,
                        updateTags: n,
                      });
                  }
                }
              })(t, g, m, p, i);
            var _o71 = t._pendingDecorators;
            (null !== _o71 &&
              ((t._decorators = _o71),
              (t._pendingDecorators = null),
              Ya("decorator", t, !0, _o71)),
              (function (t, e, n) {
                if (0 === t._listeners.textcontent.size) return;
                var o = Fs(e),
                  r = Fs(n);
                o !== r && Ya("textcontent", t, !0, r);
              })(t, e || i, n),
              Ya("update", t, !0, {
                dirtyElements: _,
                dirtyLeaves: p,
                editorState: n,
                mutatedNodes: g,
                normalizedNodes: y,
                prevEditorState: e || i,
                tags: m,
              }));
          } finally {
            C || Oa["delete"](t);
          }
          (d || Xa(t, x), qa(t));
        })(e, n),
          _o68 && e._onWarn(t(436)));
      } finally {
        ka = o;
      }
    }
    function Ya(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n110 = e._listeners[t],
          _r59 = Array.from(_n110);
        for (
          var _len8 = arguments.length,
            o = new Array(_len8 > 3 ? _len8 - 3 : 0),
            _key8 = 3;
          _key8 < _len8;
          _key8++
        ) {
          o[_key8 - 3] = arguments[_key8];
        }
        for (var _ref87 of _r59) {
          var _t201 = _ref87[0];
          var _e145 = _ref87[1];
          {
            _e145 && _e145();
            var _r60 = _t201.apply(void 0, Array.from(o)),
              _i39 = "function" == typeof _r60 ? _r60 : void 0;
            _n110.has(_t201) ? _n110.set(_t201, _i39) : _i39 && _i39();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function Ja(t, e) {
      var n = t._lastNotifiedSelection;
      return null === e ? null !== n : !e.is(n);
    }
    function Ga(t, e, n, o) {
      var r = js(t);
      var i;
      if (!ka)
        for (var _t202 = 0; _t202 < r.length; _t202++)
          r[_t202]._updating || (r[_t202]._cascadeCount = 0);
      if (e === W) {
        if (va !== t || Ta) {
          var _r61 = !1;
          return (
            eu(t, function () {
              _r61 = Ga(t, e, n, o);
            }),
            _r61
          );
        }
        var _r62 = Ra()._selection;
        t._lastNotifiedSelection = null === _r62 ? null : _r62.clone();
      }
      for (var _t203 = 4; _t203 >= 0; _t203--) {
        var _loop5 = function _loop5() {
            var l = r[_s22];
            if (_s22 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e146 = c[_t203];
              if (_e146.size > 0) {
                var _t204 = !1;
                if (
                  (eu(l, function () {
                    for (var _r63 of _e146)
                      if (_r63(n, o)) return void (_t204 = !0);
                  }),
                  _t204)
                )
                  return { v: _t204 };
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
            Ga(i, e, n, o);
          }),
        !1
      );
    }
    function qa(e) {
      var n = e._updates;
      if (0 === n.length) return void (e._cascadeCount = 0);
      if (
        ((function (t) {
          ba.has(t) ||
            (ba.add(t),
            setTimeout(function () {
              (ba["delete"](t), (t._cascadeCount = 0));
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
        var _t205 = o[0],
          _n111 = o[1];
        tu(e, _t205, _n111);
      }
    }
    function Xa(t, e) {
      if ((t._deferred === e && (t._deferred = []), 0 !== e.length)) {
        var _n112 = t._updating;
        t._updating = !0;
        try {
          for (var _t206 = 0; _t206 < e.length; _t206++) e[_t206]();
        } finally {
          t._updating = _n112;
        }
      }
    }
    function Qa(t, n) {
      var o = t._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n113 = o.shift();
        if (_n113) {
          var _o72 = _n113[0],
            _i40 = _n113[1],
            _s23 = t._pendingEditorState;
          var _l14 = void 0;
          (void 0 !== _i40 &&
            ((_l14 = _i40.onUpdate),
            _i40.skipTransforms && (r = !0),
            _i40.discrete && (null === _s23 && e(191), (_s23._flushSync = !0)),
            _l14 && t._deferred.push(_l14),
            ja(t, _i40.tag)),
            null == _s23 ? tu(t, _o72, _i40) : _o72());
        }
      }
      return r;
    }
    function Za(t, e) {
      var n = e.get(t.anchor.key),
        o = e.get(t.focus.key);
      for (var _ref89 of [
        [t.anchor, n],
        [t.focus, o],
      ]) {
        var _e147 = _ref89[0];
        var _r64 = _ref89[1];
        if (void 0 !== _r64 && "text" === _e147.type && ki(_r64)) {
          var _t207 = _r64.getTextContentSize();
          _e147.offset > _t207
            ? _e147.set(_e147.key, _t207, "text")
            : _e147.offset < 0 && _e147.set(_e147.key, 0, "text");
        }
      }
    }
    function tu(t, n, o, r) {
      if (r === void 0) {
        r = !1;
      }
      var i = t._updateTags;
      var s,
        l = !1,
        c = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        ja(t, o.tag),
        (l = o.skipTransforms || !1),
        (c = o.discrete || !1)),
        s && t._deferred.push(s));
      var a = t._editorState;
      var u = t._pendingEditorState,
        f = !1;
      ((null === u || u._readOnly) &&
        ((u = t._pendingEditorState = ea(u || a)), (f = !0)),
        (u._flushSync = c));
      var d = 0 === t._updates.length ? null : new Set(t._updates),
        h = Ca,
        g = Ta,
        p = va,
        _ = t._updating,
        y = t._lastNotifiedSelection;
      ((Ca = u), (Ta = !1), (t._updating = !0), (va = t));
      var m = t._headless || null === t.getRootElement();
      os(null);
      try {
        f &&
          (m
            ? null !== a._selection && (u._selection = a._selection.clone())
            : (u._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = El(_l(t));
                return af(n) || null == n ? Bf(n, o, t, e) : n.clone();
              })(t, (o && o.event) || null)));
        var _r65 = t._compositionKey;
        (n(),
          (l = Qa(t, l)),
          l && wa.add(u),
          af(u._selection) && Za(u._selection, u._nodeMap),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (af(o)) {
              var _t208 = o.anchor,
                _e148 = o.focus;
              var _r66;
              if (
                ("text" === _t208.type &&
                  ((_r66 = _t208.getNode()), _r66.selectionTransform(n, o)),
                "text" === _e148.type)
              ) {
                var _t209 = _e148.getNode();
                _r66 !== _t209 && _t209.selectionTransform(n, o);
              }
            }
          })(u, t),
          0 !== t._dirtyType &&
            (l
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t210 of n) {
                    var _e149 = o.get(_t210);
                    ki(_e149) &&
                      _e149.isAttached() &&
                      _e149.isSimpleText() &&
                      !_e149.isUnmergeable() &&
                      Ko(_e149);
                  }
                })(u, t)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    i = Es(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t211 of l) {
                        var _o73 = r.get(_t211);
                        (ki(_o73) &&
                          _o73.isAttached() &&
                          _o73.isSimpleText() &&
                          !_o73.isUnmergeable() &&
                          Ko(_o73),
                          void 0 !== _o73 && Wa(_o73, i) && $a(e, _o73, s),
                          n.add(_t211));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        Ma++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t212 of a) {
                      var _n114 = _t212[0],
                        _l15 = _t212[1];
                      if ((o.set(_n114, _l15), !_l15)) continue;
                      var _c0 = r.get(_n114);
                      void 0 !== _c0 && Wa(_c0, i) && $a(e, _c0, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      Ma++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(u, t),
            Qa(t),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref91 of o) {
                var _t213 = _ref91[0];
                {
                  var _e150 = i.get(_t213);
                  void 0 !== _e150 &&
                    (_e150.isAttached() ||
                      (Hr(_e150) && Sa(_e150, _t213, r, i, s, o),
                      r.has(_t213) || o["delete"](_t213),
                      s.push(_t213)));
                }
              }
              for (var _t214 of n) {
                var _e151 = i.get(_t214);
                void 0 === _e151 ||
                  _e151.isAttached() ||
                  (hd(_e151) &&
                    null !== _e151.__slots &&
                    Sa(_e151, _t214, r, i, s, n),
                  r.has(_t214) || n["delete"](_t214),
                  s.push(_t214));
              }
              var l = La(),
                c = l._cloneNotNeeded;
              for (var _t215 of s) (i["delete"](_t215), c["delete"](_t215));
              var a = l._compositionKey;
              null === a || i.has(a) || (l._compositionKey = null);
            })(a, u, t._dirtyLeaves, t._dirtyElements)),
          _r65 !== t._compositionKey && (u._flushSync = !0));
        var _i41 = u._selection;
        if (af(_i41)) {
          t._slotsUsed && wf(_i41);
          var _n115 = u._nodeMap,
            _o74 = _i41.anchor.key,
            _r67 = _i41.focus.key,
            _s24 = _n115.get(_o74),
            _l16 = _n115.get(_r67);
          ((void 0 !== _s24 && void 0 !== _l16) || e(19), Za(_i41, _n115));
        } else ff(_i41) && 0 === _i41._nodes.size && (u._selection = null);
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
          for (var _t216 of r) null !== e && e.has(_t216) && (r[i++] = _t216);
          r.length = i;
        })(t, d);
        var _n116 = null;
        try {
          e instanceof Error && t._onError(e);
        } catch (t) {
          _n116 = { error: t };
        }
        try {
          Va(t);
        } catch (e) {
          if (
            (cs(function () {
              return qa(t);
            }),
            null === _n116)
          )
            throw e;
          if (e instanceof Error)
            try {
              t._onError(e);
            } catch (t) {}
        }
        if (null !== _n116) throw _n116.error;
        return;
      } finally {
        ((Ca = h), (Ta = g), (va = p), (t._updating = _), (Ma = 0));
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
          ? ((u._flushSync = !1), Va(t))
          : f &&
            cs(function () {
              Va(t);
            })
        : ((u._flushSync = !1),
          f &&
            (i.clear(),
            (t._deferred = []),
            (t._pendingEditorState = null),
            (t._lastNotifiedSelection = y)));
    }
    function eu(t, e, n) {
      va === t && void 0 === n ? (Ia() ? tu(t, e, n) : e()) : tu(t, e, n);
    }
    function nu() {
      for (
        var _len9 = arguments.length, t = new Array(_len9), _key9 = 0;
        _key9 < _len9;
        _key9++
      ) {
        t[_key9] = arguments[_key9];
      }
      return function () {
        for (var _e152 = t.length - 1; _e152 >= 0; _e152--) t[_e152]();
        t.length = 0;
      };
    }
    function ou(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    function ru(t, e, n) {
      return nu.apply(
        void 0,
        Array.from(
          Object.entries(e).map(function (_ref92) {
            var e = _ref92[0],
              o = _ref92[1];
            return ou(t, e, o, n);
          }),
        ),
      );
    }
    var iu = new WeakMap(),
      su = new WeakMap(),
      lu = Ht(function (t) {
        return (
          t.addEventListener("selectionchange", Gu),
          function () {
            return t.removeEventListener("selectionchange", Gu);
          }
        );
      });
    function cu(t, e, n, o, r, i) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = La();
      var u;
      if (void 0 !== i) u = i;
      else {
        var _t217 = El(_l(a));
        u = null !== _t217 ? Ll(_t217, a._rootElement) : null;
      }
      var f = null !== u ? u.anchorNode : null,
        h = s.key,
        g = a.getElementByKey(h),
        p = n.length;
      return (
        h !== l.key ||
        !ki(c) ||
        (((!r &&
          (!d || a._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (c.isDirty() && p < 2) ||
          Ws(n)) &&
          s.offset !== l.offset &&
          !c.isComposing()) ||
        ys(c) ||
        (c.isDirty() && p > 1) ||
        ((r || !d) && null !== g && !c.isComposing() && f !== rc(c, g, a)) ||
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
            r = _s(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (ki(e) || (Hr(e) && e.isInline())) &&
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
    function au(t, e) {
      return (
        ms(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function uu(t, e, n) {
      var _Ll = Ll(t, e._rootElement),
        o = _Ll.anchorNode,
        r = _Ll.anchorOffset,
        i = _Ll.focusNode,
        s = _Ll.focusOffset,
        l = e._inputState;
      if (l.isSelectionChangeFromDOMUpdate) {
        l.isSelectionChangeFromDOMUpdate = !1;
        var _t218 = l.selectionChangeFromDOMUpdatePoints;
        if (
          ((l.selectionChangeFromDOMUpdatePoints = null),
          au(o, r) &&
            au(i, s) &&
            !l.postDeleteSelectionToRestore &&
            (null === _t218 ||
              (_t218.anchorNode === o &&
                _t218.anchorOffset === r &&
                _t218.focusNode === i &&
                _t218.focusOffset === s)))
        )
          return;
      }
      eu(e, function () {
        if (!n) return void Bs(null);
        if (!ds(e, o, i)) return;
        var c = l.mouseDrag;
        !c || ("mousedown" === c.type && c.defaultPrevented) || vu(e, c, i);
        var a = Cu.has(c);
        var u = $f();
        if (l.postDeleteSelectionToRestore && af(u) && u.isCollapsed()) {
          var _t219 = u.anchor,
            _e153 = l.postDeleteSelectionToRestore.anchor;
          ((_t219.key === _e153.key && _t219.offset === _e153.offset + 1) ||
            (1 === _t219.offset &&
              _e153.getNode().is(_t219.getNode().getPreviousSibling()))) &&
            ((u = l.postDeleteSelectionToRestore.clone()), Bs(u));
        }
        if (((l.postDeleteSelectionToRestore = null), af(u))) {
          var _n117 = u.anchor;
          if (u.isCollapsed())
            ("Range" === t.type && o === i && (u.dirty = !0), hu(e, u));
          else {
            var _t220 = _n117.key,
              _e154 = u.focus,
              _o75 = _e154.key,
              _i42 = u.getNodes(),
              _l17 = _i42.length,
              _c1 = u.isBackward(),
              _ref93 = a ? [_n117.offset, _e154.offset] : [r, s],
              _f6 = _ref93[0],
              _d6 = _ref93[1],
              _h5 = _c1 ? _d6 : _f6,
              _g3 = _c1 ? _f6 : _d6,
              _p3 = _c1 ? _o75 : _t220,
              _2 = _c1 ? _t220 : _o75;
            var _y = C,
              _m = !1;
            for (var _t221 = 0; _t221 < _l17; _t221++) {
              var _e155 = _i42[_t221],
                _n118 = _e155.getTextContentSize();
              if (
                ki(_e155) &&
                0 !== _n118 &&
                !(
                  (0 === _t221 && _e155.__key === _p3 && _h5 === _n118) ||
                  (_t221 === _l17 - 1 && _e155.__key === _2 && 0 === _g3)
                ) &&
                ((_m = !0), (_y &= _e155.getFormat()), 0 === _y)
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
          (n || Ja(t, e)) && t.dispatchCommand(W);
        })(e, u, null !== u && ((u.dirty && !a) || !af(u)));
      });
    }
    function fu(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function du(t, e) {
      fu(t, e.getFormat(), e.getStyle());
    }
    function hu(t, n) {
      var o = n.anchor,
        r = o.getNode(),
        i = _l(t).event,
        s = i ? i.timeStamp : performance.now(),
        _t$_inputState$collap = t._inputState.collapsedSelectionFormat,
        l = _t$_inputState$collap.format,
        c = _t$_inputState$collap.style,
        a = _t$_inputState$collap.offset,
        u = _t$_inputState$collap.key,
        f = _t$_inputState$collap.timeStamp;
      s < f + 200 && o.offset === a && o.key === u
        ? fu(n, l, c)
        : "text" === o.type
          ? (ki(r) || e(141), du(n, r))
          : (t.isComposing() || "" !== Ls().getTextContent()) &&
            (Hr(r) || e(259), r.isEmpty() ? zf(n, "") : fu(n, n.format, ""));
    }
    function gu(t, e) {
      eu(e, function () {
        var n = $f(),
          o = El(_l(e)),
          r = Wf();
        if (o)
          if (af(n)) {
            var _t222 = n.anchor,
              _e156 = _t222.getNode();
            "element" === _t222.type &&
              0 === _t222.offset &&
              n.isCollapsed() &&
              !Qr(_e156) &&
              1 === Ls().getChildrenSize() &&
              _e156.getTopLevelElementOrThrow().isEmpty() &&
              null !== r &&
              n.is(r) &&
              (o.removeAllRanges(), (n.dirty = !0));
          } else if (
            "touch" === t.pointerType ||
            "pen" === t.pointerType ||
            (g && "mouse" !== e._inputState.lastPointerType)
          ) {
            var _n119 = Ll(o, e._rootElement).anchorNode;
            (Vl(_n119) || ms(_n119)) && Bs(Bf(r, o, e, t));
          }
        if (u && null !== o && 0 === o.rangeCount) {
          var _n120 = e._rootElement;
          if (null !== _n120 && t.target === _n120) {
            var _i43 = t.clientY;
            var _s25 = _n120.childNodes.length;
            for (var _t223 = 0; _t223 < _n120.childNodes.length; _t223++) {
              var _e157 = _n120.childNodes[_t223];
              if (Vl(_e157)) {
                var _n121 = _e157.getBoundingClientRect();
                if (_i43 <= (_n121.top + _n121.bottom) / 2) {
                  _s25 = _t223;
                  break;
                }
              }
            }
            o.setBaseAndExtent(_n120, _s25, _n120, _s25);
            var _l18 = Bf(r, o, e, t);
            null !== _l18 ? Bs(_l18) : o.removeAllRanges();
          }
        }
        sl(e, U, t);
      });
    }
    var pu = 10,
      _u =
        'input:not(:disabled),textarea:not(:disabled),select:not(:disabled),button:not(:disabled),a[href],area[href],label,summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable]:not([contenteditable="false"])';
    function yu(t, e) {
      var n = e.getRootElement();
      null !== n &&
        (mu(t, e, n)
          ? (t.preventDefault(),
            Wl(n.ownerDocument) !== n &&
              (void 0 === e._inputState.savedInputMode &&
                (e._inputState.savedInputMode = n.getAttribute("inputmode")),
              n.setAttribute("inputmode", "none"),
              n.focus({ preventScroll: !0 })))
          : xu(e, n));
    }
    function mu(t, e, n) {
      if ("mouse" === e._inputState.lastPointerType) return !1;
      var o = jl(t);
      if (!Yl(o)) return !1;
      var r = !1;
      for (var _t224 = o; null !== _t224; _t224 = cl(_t224)) {
        if (_t224 === n) return r;
        if (1 === _t224.nodeType) {
          var _e158 = _t224;
          if (_e158.matches(_u)) return !1;
          "true" === _e158.getAttribute("data-lexical-decorator") && (r = !0);
        }
      }
      return !1;
    }
    function xu(t, e) {
      var n = t._inputState.savedInputMode;
      void 0 !== n &&
        ((t._inputState.savedInputMode = void 0),
        null === n
          ? e.removeAttribute("inputmode")
          : e.setAttribute("inputmode", n));
    }
    function Su(t, e) {
      var n = jl(t),
        o = t.pointerType;
      Yl(n) &&
        "touch" !== o &&
        "pen" !== o &&
        0 === t.button &&
        eu(e, function () {
          Sc(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
        });
    }
    var Cu = new WeakSet();
    function vu(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = $f(),
        r = o && o.clone();
      !(function (t, e, n) {
        var o = Wf(),
          r = "mousedown" === e.type,
          i = r && !e.shiftKey,
          s = n && Is(n);
        Gr(s) &&
          (r
            ? i && s.isInline() && s.selectPrevious()
            : af(o) && Bs(o.clone()));
        var l = $f(),
          c = l || (i ? Ff() : af(o) ? o.clone() : null),
          a = t.getRootElement(),
          u = a && a.getRootNode();
        if (!af(c) || (i && !c.isCollapsed()) || (!xs(u) && !Ml(u))) return;
        var f = c.anchor,
          d = c.focus;
        if (!r && af(o)) {
          var _o$anchor = o.anchor,
            _t225 = _o$anchor.key,
            _e159 = _o$anchor.offset,
            _n122 = _o$anchor.type;
          f.set(_t225, _e159, _n122, !0);
        }
        var h = e.clientX,
          g = e.clientY,
          p = u.elementFromPoint && u.elementFromPoint(h, g),
          _ = p && Is(p),
          y = function y(t, e) {
            return Hr(t)
              ? "next" === e
                ? t.getLastDescendant()
                : t.getFirstDescendant()
              : t;
          },
          m = [null],
          x = Hr(_) && !_.isInline() && (Qr(_) ? Qc(d.getNode(), If) : _);
        for (var _t226 of x ? Xd(x, "next") : [])
          m.push(Yd(_t226.origin, "previous"), _t226);
        var S = _l(t),
          C = S.document.createRange();
        var v = null;
        for (var _e160 of m) {
          var _n123 = _e160 ? y(_e160.origin, _e160.direction) : _;
          if (!Gr(_n123) || !_n123.isInline() || _n123 === v) continue;
          var _o76 = t.getElementByKey(_n123.getKey());
          if (!_o76) continue;
          C.selectNodeContents(_o76);
          var _r68 = C.getBoundingClientRect(),
            _s26 = _o76.getBoundingClientRect(),
            _ref94 = _r68.height > _s26.height ? _r68 : _s26,
            _a8 = _ref94.bottom,
            _u6 = _ref94.left,
            _p4 = _ref94.right,
            _m2 = _ref94.top;
          if (_e160 && (g < _m2 || g > _a8)) {
            v = _n123;
            continue;
          }
          var _x = "rtl" === S.getComputedStyle(cl(_o76) || _o76).direction,
            _T = 2 * h > _u6 + _p4 !== _x,
            _N = _T ? "next" : "previous",
            _k = _e160 && _e160.getNodeAtCaret(),
            _b = _k && t.getElementByKey(_k.getKey()),
            _E = _b ? _b.getClientRects() : [],
            _O = _E[_T ? 0 : _E.length - 1];
          if (
            !_e160 ||
            (_e160.direction === _N &&
              "none" === S.getComputedStyle(_o76).cssFloat &&
              (!_k ||
                aa(_k) ||
                (_O &&
                  (_T === _x
                    ? 2 * _O.right > _u6 + _p4
                    : 2 * _O.left < _u6 + _p4))))
          ) {
            if (!_n123.is(y(rl(d, _T), _N))) {
              var _t227 = Yd(_n123, _N);
              (Oi(d, _t227), i && Oi(f, _t227));
            }
            return void (l || Bs(c));
          }
        }
        if (Gr(s) && !r) {
          var _e161 = S.document,
            _n124 =
              _e161.caretPositionFromPoint &&
              _e161.caretPositionFromPoint(h, g, {
                shadowRoots: Ml(u) ? [u] : [],
              }),
            _o77 = _n124 && kf(_n124.offsetNode, _n124.offset, null, t);
          if (_o77) {
            var _o77$ = _o77[0],
              _t228 = _o77$.key,
              _e162 = _o77$.offset,
              _n125 = _o77$.type;
            d.set(_t228, _e162, _n125);
          }
        }
      })(t, e, n);
      var i = $f(),
        s = t._inputState.mouseDrag;
      (s && i && !i.is(r) && Cu.add(s),
        "mousedown" === e.type && af(i) && zf(i, af(r) ? r.anchor.key : ""));
    }
    function Tu(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function Nu(t) {
      var e = La()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = $f();
      if (!af(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!ki(r)) return;
      var i = o.anchor.offset;
      if (r.getTextContentSize() === i) {
        var _t229 = r.getNextSibling();
        if ("\n" === n) {
          if (g) return;
          if (aa(_t229)) _t229.selectEnd();
          else if (!_t229) {
            var _t230 = Qc(r, If),
              _e163 = _t230 && _t230.getNextSibling();
            Hr(_e163) && _e163.selectStart();
          }
        } else
          "\t" === n
            ? es(_t229) && _t229.selectEnd()
            : ki(_t229) &&
              _t229.getTextContent()[0] === n &&
              _t229.select(1, 1);
      } else r.getTextContent()[i] === n && r.select(i + 1, i + 1);
    }
    function ku(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function bu(t) {
      a &&
        !g &&
        y &&
        (ku(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return ku(t);
        }, 0)));
    }
    function Eu(t, e) {
      var n = jl(t);
      if (Vl(n) && Sc(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = Wl(o.ownerDocument);
      return null !== r && o.contains(r) && (Sc(r, e) || as(o, r));
    }
    function Ou(t, e) {
      var n = t.inputType;
      "deleteCompositionText" === n ||
        (u && il(e)) ||
        ("insertCompositionText" !== n &&
          eu(
            e,
            function () {
              Eu(t, e) || sl(e, H, t);
            },
            { event: t },
          ));
    }
    function Mu(t) {
      var _ref95;
      var n = t.inputType,
        o = Tu(t),
        r = La(),
        i = r._inputState,
        s = $f();
      if (
        "insertText" === n &&
        t.data &&
        i.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((ku(i), t.preventDefault(), af(s) && !s.isCollapsed())) {
          var _t231 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t231.key, _t231.offset, _t231.type),
            s.focus.set(_t231.key, _t231.offset, _t231.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t232 = Wf();
          if (!af(_t232)) return !0;
          Bs(_t232.clone());
        }
        if (af(s)) {
          var _n126 = s.anchor.key === s.focus.key;
          if (
            (function (t, e) {
              return (
                "MediaLast" === t.lastKeyCode && e < t.lastKeyDownTimeStamp + 30
              );
            })(i, t.timeStamp) &&
            r.isComposing() &&
            _n126
          ) {
            if (
              (bs(null),
              (i.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                eu(r, function () {
                  bs(null);
                });
              }, 30),
              af(s))
            ) {
              var _t233 = s.anchor.getNode();
              (_t233.markDirty(), ki(_t233) || e(142), du(s, _t233));
            }
          } else {
            if (
              (bs(null),
              g &&
                null !== o &&
                !o.collapsed &&
                (s.applyDOMRange(o), !s.isCollapsed()))
            )
              return (t.preventDefault(), s.removeText(), !0);
            t.preventDefault();
            var _e164 = s.anchor.getNode(),
              _l19 = _e164.getTextContent(),
              _c10 = _e164.canInsertTextAfter(),
              _a9 = 0 === s.anchor.offset && s.focus.offset === _l19.length;
            var _u7 = m && _n126 && !_a9 && _c10;
            if (
              (_u7 && s.isCollapsed() && (_u7 = !Gr(rl(s.anchor, !0))), !_u7)
            ) {
              sl(r, G, !0);
              var _t234 = $f();
              m &&
                af(_t234) &&
                _t234.isCollapsed() &&
                ((i.postDeleteSelectionToRestore = _t234),
                setTimeout(function () {
                  return (i.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!af(s))
        return (
          ("historyUndo" !== n && "historyRedo" !== n) ||
            (t.preventDefault(), sl(r, "historyUndo" === n ? it : st)),
          !0
        );
      var l = t.data;
      null !== i.unprocessedBeforeInputData &&
        Ys(!1, r, i.unprocessedBeforeInputData);
      var c = !1;
      if (
        (!s.dirty || null !== i.unprocessedBeforeInputData) &&
        s.isCollapsed() &&
        !Qr(s.anchor.getNode()) &&
        null !== o
      ) {
        var _s$anchor = s.anchor,
          _t235 = _s$anchor.key,
          _e165 = _s$anchor.offset,
          _i44 = _s$anchor.type,
          _l20 = r._slotsUsed && Ef(s.anchor);
        s.applyDOMRange(o);
        var _a0 = n.endsWith("Forward");
        if (!1 !== _l20 && (_a0 || n.endsWith("Backward"))) {
          var _o78 = tf(_t235, _e165, _i44),
            _r69 = s.anchor,
            _u8 = s.focus,
            _f7 = !Mf(Ef(_r69), _l20) || !Mf(Ef(_u8), _l20),
            _d7 =
              !_f7 &&
              null !== _l20 &&
              (_a0
                ? _r69.isBefore(_o78) || _u8.isBefore(_o78)
                : _o78.isBefore(_r69) || _o78.isBefore(_u8));
          (_f7 || _d7) &&
            (_r69.set(_t235, _e165, _i44),
            _u8.set(_t235, _e165, _i44),
            (c = _d7 && "deleteContentForward" === n));
        }
      }
      i.unprocessedBeforeInputData = null;
      var a = s.anchor,
        u = s.focus,
        f = a.getNode(),
        d = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === l) (t.preventDefault(), sl(r, q, !1));
        else if (l === T) (t.preventDefault(), sl(r, X));
        else if (null == l && t.dataTransfer) {
          var _e166 = t.dataTransfer.getData("text/plain");
          (t.preventDefault(), s.insertRawText(_e166));
        } else
          null != l && cu(s, o, l, t.timeStamp, !0)
            ? (t.preventDefault(), sl(r, Q, l), Nu(l))
            : (i.unprocessedBeforeInputData = l);
        return ((i.lastBeforeInputInsertTextTimeStamp = t.timeStamp), !0);
      }
      switch ((t.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          (sl(r, Q, t),
            Nu(
              (_ref95 = t.dataTransfer
                ? t.dataTransfer.getData("text/plain")
                : null) != null
                ? _ref95
                : t.data,
            ));
          break;
        case "insertFromComposition": {
          i.compositionPhase = "idle";
          var _e167 = i.hadOrphanedCompositionEvents;
          i.hadOrphanedCompositionEvents = !1;
          var _n127 = r._compositionKey;
          (bs(null), _e167 || sl(r, Q, t), Fu(_n127));
          break;
        }
        case "insertLineBreak":
          (bs(null), (i.isInsertLineBreak = !1), sl(r, q, !1));
          break;
        case "insertParagraph":
          (bs(null),
            i.isInsertLineBreak
              ? ((i.isInsertLineBreak = !1), sl(r, q, !1))
              : sl(r, X));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          sl(r, Z, t);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Hr(t) || Hr(e) || !_s(t) || !_s(e);
          })(f, d) && sl(r, tt, t);
          break;
        case "deleteByDrag":
          (dl(Io), sl(r, tt, t));
          break;
        case "deleteByCut":
          sl(r, tt, t);
          break;
        case "deleteContent":
          sl(r, G, !1);
          break;
        case "deleteWordBackward":
          sl(r, et, !0);
          break;
        case "deleteWordForward":
          sl(r, et, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          sl(r, nt, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          sl(r, c ? G : nt, !1);
          break;
        case "formatStrikeThrough":
          sl(r, ot, "strikethrough");
          break;
        case "formatBold":
          sl(r, ot, "bold");
          break;
        case "formatItalic":
          sl(r, ot, "italic");
          break;
        case "formatUnderline":
          sl(r, ot, "underline");
          break;
        case "historyUndo":
          sl(r, it);
          break;
        case "historyRedo":
          sl(r, st);
      }
      return !0;
    }
    function wu(t, e) {
      t.stopPropagation();
      var n = e._inputState;
      (ku(n),
        eu(
          e,
          function () {
            Eu(t, e) || e.dispatchCommand(V, t);
          },
          { event: t },
        ),
        (n.unprocessedBeforeInputData = null));
    }
    function Au(t) {
      var e = La(),
        n = e._inputState,
        o = $f(),
        r = t.data,
        i = Tu(t);
      "deleteCompositionText" === t.inputType &&
        (n.hadOrphanedCompositionEvents = !1);
      var s = !1,
        l = !1;
      if (null != r && af(o)) {
        var _c11 = El(_l(e)),
          _a1 = null !== _c11 ? Ll(_c11, e._rootElement) : null,
          _f8 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            !e.isComposing();
        _f8 && (n.hadOrphanedCompositionEvents = !0);
        var _h6 = o.anchor.getNode(),
          _g4 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            e.isComposing() &&
            ki(_h6) &&
            ys(_h6);
        if (!_f8 && !_g4 && cu(o, i, r, t.timeStamp, !1, _a1)) {
          if (((s = !0), "ending-firefox" === n.compositionPhase)) {
            var _t236 = Ru(e, r);
            if (((n.compositionPhase = "idle"), _t236))
              return (dl(Fo), zs(), !0);
          }
          var _i45 = o.anchor.getNode();
          if (null === _c11 || null === _a1) return !0;
          var _f9 = o.isBackward(),
            _h7 = _f9 ? o.anchor.offset : o.focus.offset,
            _g5 = _f9 ? o.focus.offset : o.anchor.offset;
          (d &&
            !o.isCollapsed() &&
            ki(_i45) &&
            null !== _a1.anchorNode &&
            _i45.getTextContent().slice(0, _h7) +
              r +
              _i45.getTextContent().slice(_h7 + _g5) ===
              Vs(_a1.anchorNode)) ||
            (sl(e, Q, r), (l = "insertText" === t.inputType));
          var _p5 = r.length;
          (u &&
            _p5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _p5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            m && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), bs(null)));
        }
      }
      return (
        s ||
          (Ys(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (Ru(e, r || void 0), dl(Fo), (n.compositionPhase = "idle"))),
        zs(l),
        !0
      );
    }
    function Du(t, e) {
      sl(e, Y, t);
    }
    function Iu(t) {
      var e = La(),
        n = e._inputState,
        o = $f();
      if (af(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r70 = o.anchor,
          _i46 = o.anchor.getNode();
        if (
          (bs(_r70.key),
          dl(Po),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r70.type ||
            !o.isCollapsed() ||
            (!m &&
              (_i46.getFormat() !== o.format ||
                (ki(_i46) && _i46.getStyle() !== o.style))) ||
            (ki(_i46) &&
              (ys(_i46) ||
                (0 === _r70.offset && !_i46.canInsertTextBefore()) ||
                (_r70.offset === _i46.getTextContentSize() &&
                  !_i46.canInsertTextAfter()))))
        ) {
          g || (!_ && !x)
            ? sl(e, Q, N)
            : (function (t) {
                rf(t, "", !0);
              })(o);
          var _t237 = $f();
          af(_t237) && bs(_t237.anchor.key);
        }
      }
      return !0;
    }
    function Pu(t) {
      var e = La();
      return (
        (e._inputState.compositionPhase = "idle"),
        Ru(e, t.data),
        dl(Fo),
        !0
      );
    }
    function Fu(t) {
      var e = La()._inputState,
        n = e.composedSegmentedKey;
      if (((e.composedSegmentedKey = null), null === t || t !== n)) return;
      var o = Ms(t);
      if (!ki(o) || "text" === o.getType() || ys(o) || !o.isAttached()) return;
      var r = $f(),
        i = af(r) && r.anchor.key === t ? r.anchor.offset : null,
        s = Ni(o.getTextContent());
      if (
        (s.setFormat(o.getFormat()),
        s.setStyle(o.getStyle()),
        o.replace(s),
        null !== i)
      ) {
        var _t238 = Math.min(i, s.getTextContentSize());
        s.select(_t238, _t238);
      }
    }
    function Ru(t, e) {
      var n = t._compositionKey;
      if ((bs(null), null !== n && null != e)) {
        if ("" === e) {
          var _e168 = Ms(n),
            _o79 = t.getElementByKey(n),
            _r71 = null !== _o79 && ki(_e168) ? rc(_e168, _o79, t) : null;
          if (null !== _r71 && null !== _r71.nodeValue && ki(_e168)) {
            var _n128 = El(_l(t)),
              _o80 = _n128 && Ll(_n128, t._rootElement);
            var _i47 = null,
              _s27 = null;
            (null !== _o80 &&
              _o80.anchorNode === _r71 &&
              ((_i47 = _o80.anchorOffset), (_s27 = _o80.focusOffset)),
              Js(_e168, _r71.nodeValue, _i47, _s27, !0));
          }
          return (Fu(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e169 = $f();
          if (af(_e169) || ff(_e169)) {
            if (af(_e169)) {
              var _t239 = _e169.focus;
              _e169.anchor.set(_t239.key, _t239.offset, _t239.type);
            }
            return (sl(t, gt, null), Fu(n), !1);
          }
        }
        var _o81 = Ms(n);
        if (null !== _o81 && ki(_o81) && ys(_o81)) {
          _o81.markDirty();
          var _t240 = $f(),
            _r72 = _o81.getTextContentSize(),
            _i48 =
              af(_t240) && _t240.anchor.key === n ? _t240.anchor.offset : _r72;
          return (_o81.select(_i48, _i48).insertText(e), !0);
        }
      }
      return (Ys(!0, t, e), Fu(n), !1);
    }
    function Lu(t, e) {
      var n = e._inputState;
      u
        ? (n.compositionPhase = "ending-firefox")
        : ("" === t.data || g || (!_ && !x)) && sl(e, J, t);
    }
    function Ku(t, e) {
      var n = e._inputState;
      (g &&
        (n.isShiftKeyDown =
          "Shift" === t.key ||
          (n.isShiftKeyDown && t.shiftKey && "Enter" === t.key)),
        (n.lastKeyDownTimeStamp = t.timeStamp),
        (n.lastKeyCode = t.key),
        "Backspace" !== t.key && ku(n),
        e.isComposing() ||
          (!g && (_ || x) && 229 === t.keyCode) ||
          sl(e, lt, t));
    }
    function Bu(t, e) {
      (t.shiftKey && "CapsLock" !== t.key) ||
        (e._inputState.isShiftKeyDown = !1);
    }
    var zu = { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: "any" },
      $u = { ctrlKey: !0 },
      Wu = { metaKey: !0 },
      ju = { shiftKey: "any" },
      Uu = { altKey: "any", shiftKey: "any" };
    function Hu(t) {
      var e = La();
      if (null == t.key) return !0;
      var n = e._keyDownShortcuts;
      null === n &&
        ((n = Ut(
          (function () {
            var t = function t(_t241, e, n) {
                return {
                  key: _t241,
                  modifiers: e,
                  onMatch: function onMatch(t, e) {
                    sl(e, n, t);
                  },
                };
              },
              e = function e(t, _e170, n, o) {
                return {
                  key: t,
                  modifiers: _e170,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), sl(e, n, o));
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
                      sl(n, gt, t),
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
                      af(o) ||
                      us(t) ||
                      (t.preventDefault(), sl(n, e, t));
                  },
                };
              };
            return [
              t("ArrowRight", ju, ct),
              t("ArrowLeft", ju, ut),
              t("ArrowUp", Uu, dt),
              t("ArrowDown", Uu, ht),
              n(babelHelpers["extends"]({}, zu, { shiftKey: !0 }), !0),
              n(babelHelpers["extends"]({}, zu, { shiftKey: !1 }), !1),
              t(" ", zu, pt),
              {
                key: "Backspace",
                modifiers: ju,
                onMatch: function onMatch(t, e) {
                  sl(e, _t, t) && bu(e._inputState);
                },
              },
              t("Escape", zu, yt),
              t("Delete", {}, mt),
              e("Backspace", zt, et, !0),
              e("Delete", zt, et, !1),
              e("b", Bt, ot, "bold"),
              e("u", Bt, ot, "underline"),
              e("i", Bt, ot, "italic"),
              t("Tab", ju, xt),
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
                        modifiers: $u,
                        onMatch: function onMatch(t, e) {
                          (t.preventDefault(), sl(e, q, !0));
                        },
                      },
                      t(
                        "ArrowLeft",
                        babelHelpers["extends"]({ metaKey: !0 }, ju),
                        ft,
                      ),
                      t(
                        "ArrowRight",
                        babelHelpers["extends"]({ metaKey: !0 }, ju),
                        at,
                      ),
                      e("h", $u, G, !0),
                      e("d", $u, G, !1),
                      e("Backspace", Wu, nt, !0),
                      e("Delete", Wu, nt, !1),
                      e("k", $u, nt, !1),
                    ]
                  : [
                      t("Home", ju, ft),
                      t("End", ju, at),
                      e("y", $u, st, void 0),
                    ],
              ),
              [
                {
                  key: "a",
                  modifiers: Bt,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), sl(e, wt, t) && bu(e._inputState));
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
    function Vu(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    function Yu(t, e, n, o) {
      if (void 0 !== o)
        for (var _t242 of o.editors)
          _t242._inputState.isSelectionChangeFromMouseDown = !1;
      var r = Ll(e, t._rootElement).anchorNode;
      (Vl(r) || ms(r)) && Bs(Bf(Wf(), e, t, n));
    }
    var Ju = new Map();
    function Gu(t) {
      var e = t.target;
      if (Vl(e) && ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName))
        return;
      var n = Ol(e);
      if (null === n) return;
      var o = al(e);
      var r = null;
      var i = null !== o ? su.get(o) : void 0;
      if (null !== o) {
        if (void 0 !== i) {
          var _t243 = i.editors;
          var _e171 = i.hasShadowEditor;
          if (void 0 === _e171) {
            _e171 = !1;
            for (var _n129 of _t243)
              if (
                null !== _n129._rootElement &&
                Ml(_n129._rootElement.getRootNode())
              ) {
                _e171 = !0;
                break;
              }
            i.hasShadowEditor = _e171;
          }
          if (_e171) {
            var _e172 = null;
            for (var _o82 of _t243) {
              var _t244 = _o82._rootElement;
              if (null === _t244) continue;
              var _i49 = Ll(n, _t244).anchorNode;
              if (null !== _i49 && gs(_i49) === _o82) {
                if (Ml(_t244.getRootNode())) {
                  r = _o82;
                  break;
                }
                null === _e172 && (_e172 = _o82);
              }
            }
            null === r && null !== _e172 && (r = _e172);
          } else {
            var _t245 = n.anchorNode;
            null === _t245 ||
              (Vl(_t245) && null !== _t245.shadowRoot) ||
              (r = gs(_t245));
          }
        }
        if (null === r) {
          var _t246 = Wl(o);
          r = null !== _t246 ? gs(_t246) : null;
        }
      }
      if (null === r) return;
      r._inputState.isSelectionChangeFromMouseDown &&
        eu(r, function () {
          return Yu(r, n, t, i);
        });
      var s = js(r),
        l = s[s.length - 1],
        c = l._key,
        a = Ju.get(c),
        u = a || l;
      (u !== r && uu(n, u, !1),
        uu(n, r, !0),
        r !== l ? Ju.set(c, r) : a && Ju["delete"](c));
    }
    function qu(t) {
      t._lexicalHandled = !0;
    }
    function Xu(t) {
      return !0 === t._lexicalHandled;
    }
    var Qu = z();
    var _Zu = (function () {
      function Zu(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto17 = Zu.prototype;
      _proto17.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto17.isBefore = function isBefore(t) {
        return this.key === t.key
          ? this.offset < t.offset
          : ch(Li(Ei(this, "next")), Li(Ei(t, "next"))) < 0;
      };
      _proto17.getNode = function getNode() {
        var t = Ms(this.key);
        return (null === t && e(20), t);
      };
      _proto17.set = function set(t, e, n, o) {
        var r = this._selection,
          i = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          Ia() ||
            (Es() === i && bs(t),
            null !== r &&
              (r.setCachedNodes(null),
              af(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return Zu;
    })();
    function tf(t, e, n) {
      return new _Zu(t, e, n);
    }
    function ef(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (ki(e)) {
        r = "text";
        var _t247 = e.getTextContentSize();
        o > _t247 && (o = _t247);
      } else if (!Hr(e)) {
        var _t248 = e.getNextSibling();
        if (ki(_t248)) ((n = _t248.__key), (o = 0), (r = "text"));
        else {
          var _t249 = e.getParent();
          _t249 && ((n = _t249.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function nf(t, e) {
      if (Hr(e)) {
        var _n130 = e.getLastDescendant();
        Hr(_n130) || ki(_n130) ? ef(t, _n130) : ef(t, e);
      } else ef(t, e);
    }
    function of(t, e, n, o) {
      var r = t.getNode(),
        i = r.getChildAtIndex(t.offset),
        s = Ni();
      if ((s.setFormat(n), s.setStyle(o), Xi(i))) i.splice(0, 0, [s]);
      else if (null !== i) {
        var _t250 = Sl(r) ? qi().append(s) : s;
        i.insertBefore(_t250);
      } else if (Sl(r)) {
        var _t251 = r.getLastChild();
        Hr(_t251) && !_t251.isInline() && _t251.isEmpty()
          ? _t251.append(s)
          : r.append(qi().append(s));
      } else r.append(s);
      (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
    }
    function rf(t, n, o) {
      var r = t.format,
        i = t.style;
      if (!t.isCollapsed()) {
        var _e173 = (t.focus.isBefore(t.anchor) ? t.focus : t.anchor).getNode();
        if (
          (ki(_e173) && ((r = _e173.getFormat()), (i = _e173.getStyle())),
          t.removeText(),
          (t.format = r),
          (t.style = i),
          "" === n && !o)
        )
          return;
        if (null === Es())
          return (
            "element" === t.anchor.type && of(t.anchor, t.focus, r, i),
            void sf(t, n, r, i)
          );
      }
      "element" === t.anchor.type && of(t.anchor, t.focus, r, i);
      var s = t.anchor.getNode();
      ki(s) || e(398);
      var l = t.anchor.offset,
        c = s.getParentOrThrow(),
        a = s.getTextContentSize();
      if (
        ys(s) ||
        (0 === l &&
          (!s.canInsertTextBefore() ||
            (!c.canInsertTextBefore() && !s.__prev))) ||
        (l === a &&
          (!s.canInsertTextAfter() || (!c.canInsertTextAfter() && !s.__next)))
      ) {
        if (s.isSegmented() && 0 !== l && l !== a) {
          if (null !== Es())
            (s.setMode("normal").setFormat(r).setStyle(i),
              (La()._inputState.composedSegmentedKey = s.getKey()));
          else {
            var _e174 = Ni(s.getTextContent());
            (_e174.setFormat(r),
              _e174.setStyle(i),
              _e174.setDetail(s.getDetail()),
              xn(s, _e174));
            var _n131 = $f() === t;
            (s.replace(_e174),
              t.setTextNodeRange(_e174, l, _e174, l),
              _n131 && $f() !== t && Bs(t));
          }
          return void (("" !== n || o) && rf(t, n, o));
        }
        if ("" === n && !o) return;
        if (0 === l || l === a) {
          var _e175 = 0 === l,
            _a10 = _e175 ? "previous" : "next",
            _u9 = Yd(s, _a10).getNodeAtCaret();
          var _f0;
          ki(_u9) &&
          (_e175 ? _u9.canInsertTextAfter() : _u9.canInsertTextBefore()) &&
          !ys(_u9)
            ? (_f0 = _u9)
            : ((_f0 = Ni().setFormat(r).setStyle(i)),
              Yd(
                (_e175 ? c.canInsertTextBefore() : c.canInsertTextAfter())
                  ? s
                  : c,
                _a10,
              ).insert(_f0));
          var _d8 = _e175 ? void 0 : 0;
          return (_f0.select(_d8, _d8), void rf(t, n, o));
        }
        var _e176 = Ni(n);
        return (
          _e176.setFormat(r),
          _e176.setStyle(i),
          gi(s),
          hi(_e176),
          s.replace(_e176),
          void _e176.select()
        );
      }
      if ("" !== n || o) {
        if (s.getFormat() !== r || s.getStyle() !== i) {
          if ("" !== s.getTextContent()) return void sf(t, n, r, i);
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
    }
    function sf(t, n, o, r) {
      var i = t.anchor.getNode();
      ki(i) || e(398);
      var s = t.anchor.offset,
        l = Ni(n).setFormat(o).setStyle(r);
      hi(l);
      var c = i.getParentOrThrow(),
        a = 0 === s,
        u = a || s === i.getTextContentSize();
      if (
        u &&
        c.isInline() &&
        !(a ? i.__prev : i.__next) &&
        !(a ? c.canInsertTextBefore() : c.canInsertTextAfter())
      )
        Yd(c, a ? "previous" : "next").insert(l);
      else {
        var _t252 = u ? i : i.splitText(s)[0];
        a ? _t252.insertBefore(l, !1) : _t252.insertAfter(l, !1);
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
    var _lf = (function () {
      function lf(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto18 = lf.prototype;
      _proto18.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto18.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto18.is = function is(t) {
        if (!ff(t)) return !1;
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
        return new lf(new Set(this._nodes));
      };
      _proto18.extract = function extract() {
        return this.getNodes();
      };
      _proto18.insertRawText = function insertRawText(t) {};
      _proto18.insertText = function insertText() {};
      _proto18.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === pd(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (ki(o)) r = o.select();
        else {
          var _t253 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t253, _t253);
        }
        r.insertNodes(t);
        for (var _t254 = 0; _t254 < n; _t254++) e[_t254].remove();
      };
      _proto18.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t255 of e) {
          var _e177 = Ms(_t255);
          null !== _e177 && n.push(_e177);
        }
        return (Ia() || (this._cachedNodes = n), n);
      };
      _proto18.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n132 = 0; _n132 < t.length; _n132++)
          e += t[_n132].getTextContent();
        return e;
      };
      _proto18.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === pd(t);
        });
        if (($f() || Wf()) === this && t[0]) {
          var _e178 = Yd(t[0], "next");
          Mi(sh(_e178, _e178));
        }
        for (var _e179 of t) _e179.remove();
        cf();
      };
      return lf;
    })();
    function cf() {
      var t = Ls();
      if (0 === t.getChildrenSize() && null === xd($f())) {
        var _e180 = qi();
        (t.append(_e180), _e180.select());
      }
    }
    function af(t) {
      return t instanceof _uf;
    }
    var _uf = (function () {
      function uf(t, e, n, o) {
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
      var _proto19 = uf.prototype;
      _proto19.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto19.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto19.is = function is(t) {
        return (
          !!af(t) &&
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
          for (var _n133 of t)
            if (jd(_n133)) {
              var _t256 = _n133.origin;
              0 === e.length ? r.add(_t256) : (i++, e.push(_t256));
            } else {
              var _t257 = _n133.origin;
              Hr(_t257) && 0 !== i ? i-- : e.push(_t257);
            }
          if (
            (o && e.push(o.caret.origin),
            Wd(t.focus) &&
              Hr(t.focus.origin) &&
              null === t.focus.getNodeAtCaret())
          )
            for (
              var _n134 = Xd(t.focus.origin, "previous");
              jd(_n134) &&
              r.has(_n134.origin) &&
              !_n134.origin.isEmpty() &&
              _n134.origin.is(e[e.length - 1]);
              _n134 = Zd(_n134)
            )
              (r["delete"](_n134.origin), e.pop());
          for (; e.length > 1; ) {
            var _t258 = e[e.length - 1];
            if (!Hr(_t258) || i > 0 || _t258.isEmpty() || r.has(_t258)) break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n135 = Li(t.anchor),
              _o83 = Li(t.anchor.getFlipped()),
              _r73 = function _r73(t) {
                return $d(t) ? t.origin : t.getNodeAtCaret();
              },
              _i50 =
                _r73(_n135) ||
                _r73(_o83) ||
                (t.anchor.getNodeAtCaret() ? _n135.origin : _o83.origin);
            e.push(_i50);
          }
          return e;
        })(Bi(Ai(this), "next"));
        return (Ia() || (this._cachedNodes = e), e);
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
          e = Ai(this).getTextSlices();
        var n = "",
          o = !0;
        for (var _r74 = 0; _r74 < t.length; _r74++) {
          var _i51 = t[_r74];
          if (Hr(_i51) && !_i51.isInline()) {
            o || (n += "\n");
            var _t259 = "";
            for (var _e181 of Cd(_i51)) {
              var _n136 = vd(_i51, _e181);
              null !== _n136 && (_t259 += _n136.getTextContent());
            }
            "" !== _t259 ? ((n += _t259), (o = !1)) : (o = !_i51.isEmpty());
          } else if (((o = !1), ki(_i51))) {
            var _t260 = Wi(e, _i51);
            n += _t260 ? _t260.getTextContent() : _i51.getTextContent();
          } else (Gr(_i51) || aa(_i51)) && (n += _i51.getTextContent());
        }
        return n;
      };
      _proto19.applyDOMRange = function applyDOMRange(t) {
        var e = La(),
          n = e.getEditorState()._selection,
          o = Df(
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
          Bo(this));
      };
      _proto19.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new uf(
          tf(t.key, t.offset, t.type),
          tf(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto19.toggleFormat = function toggleFormat(t) {
        ((this.format = Cs(this.format, t, null)), (this.dirty = !0));
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
        this.insertNodes(Xf(t));
      };
      _proto19.insertText = function insertText(t) {
        rf(this, t, !1);
      };
      _proto19.removeText = function removeText() {
        var t = $f() === this,
          e = this.anchor.key;
        (wi(this, Fi(Ai(this))),
          this.isCollapsed() && zf(this, e),
          t && $f() !== this && Bs(this));
      };
      _proto19.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        gf(this, t, e);
      };
      _proto19.insertNodes = function insertNodes(t) {
        if (0 === t.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if (
          "element" === this.anchor.type &&
          Hr(n) &&
          n.isShadowRoot() &&
          null !== pd(n)
        ) {
          var _n$getFirstChild;
          var _o84 =
            (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(qi()).getFirstChild();
          if (null !== _o84 && !Hr(_o84)) {
            var _t261 = qi();
            (_o84.insertBefore(_t261), (_o84 = _t261));
          }
          if (null !== _o84) {
            _o84.selectStart();
            var _n137 = $f();
            return (af(_n137) || e(369), _n137.insertNodes(t));
          }
        }
        if ("element" === this.anchor.type && Or(n)) {
          var _e182 = nd(t),
            _o85 = _e182.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _e182.getChildren()),
            void (null !== _o85 && _o85.selectEnd())
          );
        }
        var o = this.isBackward() ? this.focus : this.anchor;
        var r = o.getNode(),
          i = Qc(r, Zl);
        var s = t[t.length - 1];
        if (Hr(i) && "__language" in i) {
          if ("__language" in t[0]) this.insertText(t[0].getTextContent());
          else {
            var _Zf = Zf(this),
              _e183 = _Zf[1];
            (i.splice(_e183, 0, t), s.selectEnd());
          }
          return;
        }
        if (
          !t.some(function (t) {
            return (Hr(t) || Gr(t)) && !t.isInline();
          })
        ) {
          Hr(i) || e(211, r.constructor.name, r.getType());
          var _Zf2 = Zf(this, !0),
            _n138 = _Zf2[0],
            _o86 = _Zf2[1];
          return (
            (Hr(_n138) ? _n138 : i).splice(_o86, 0, t),
            void s.selectEnd()
          );
        }
        if (null === i) {
          var _e184 = nd(t),
            _n139 = _e184.getLastDescendant();
          var _o87 = Ei(this.anchor, "next");
          for (var _t262 of _e184.getChildren()) _o87 = Vi(_t262, _o87);
          return void (null !== _n139 && _n139.selectEnd());
        }
        if (
          Hr(i) &&
          (null !== pd(i) ||
            (!i.isParentRequired() && !Or(i.getParentOrThrow())))
        ) {
          var _Zf3 = Zf(this),
            _e185 = _Zf3[1],
            _n140 = Qf(t);
          i.splice(_e185, 0, _n140);
          var _o88 = _n140[_n140.length - 1];
          return void (void 0 !== _o88
            ? _o88.selectEnd()
            : i.select(_e185, _e185));
        }
        var l = nd(t),
          c = l.getLastDescendant(),
          a = l.getChildren(),
          u = (function (t) {
            var e = (function (t) {
              var e = t.getNode();
              if (t.offset > 0)
                return "element" === t.type && Hr(e)
                  ? e.getChildAtIndex(t.offset - 1)
                  : null;
              for (
                var _t263 = e;
                null !== _t263 && !Zl(_t263) && !Sl(_t263);
                _t263 = _t263.getParent()
              ) {
                var _e186 = _t263.getPreviousSibling();
                if (null !== _e186) return _e186;
              }
              return null;
            })(t);
            return aa(e) && aa(e.getPreviousSibling());
          })(o),
          f = Hr(i) && i.isEmpty() ? null : this.insertParagraph();
        f && !i.isAttached() && ((r = this.anchor.getNode()), (i = Qc(r, Zl)));
        var d = a[a.length - 1];
        var h = a[0];
        var g;
        ((g = h),
          u ||
            !Hr(g) ||
            !Zl(g) ||
            g.isEmpty() ||
            !Hr(i) ||
            (i.isEmpty() && !i.canMergeWhenEmpty()) ||
            (Hr(i) || e(211, r.constructor.name, r.getType()),
            Hl(i, h.getChildren()),
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
              for (var _t264 of i) s = s.insertAfter(_t264);
            })(i, h)));
        var p = Qc(c, Zl),
          _ = c.selectEnd();
        (f &&
          (Hr(p) && (f.canMergeWhenEmpty() || Zl(d))
            ? (Hl(p, f.getChildren()), f.remove())
            : f.isEmpty() && f.remove()),
          Hr(i) && i.isEmpty() && i.remove());
        var y = Hr(i) ? i.getLastChild() : null;
        aa(y) && p !== i && y.remove();
        var m = Li(Ei(_.anchor, "next"));
        (Oi(_.anchor, m), Oi(_.focus, m));
      };
      _proto19.insertParagraph = function insertParagraph() {
        this.isCollapsed() || this.removeText();
        var t = this.anchor.getNode();
        if ("element" === this.anchor.type && Or(t)) {
          var _e187 = qi();
          return (
            t.splice(this.anchor.offset, 0, [_e187]),
            _e187.select(),
            _e187
          );
        }
        var _Zf4 = Zf(this),
          n = _Zf4[1],
          o = Qc(this.anchor.getNode(), Zl);
        if (null !== o && null !== pd(o)) return null;
        Hr(o) || e(213);
        var r = o.getChildAtIndex(n),
          i = r ? [r].concat(Array.from(r.getNextSiblings())) : [],
          s = o.insertNewAfter(this, !1);
        return s ? (Hl(s, i), s.selectStart(), s) : null;
      };
      _proto19.insertLineBreak = function insertLineBreak(t) {
        var e = ca();
        if ((this.insertNodes([e]), t)) {
          var _t265 = e.getParentOrThrow(),
            _n141 = e.getIndexWithinParent();
          _t265.select(_n141, _n141);
        }
      };
      _proto19.extract = function extract() {
        var t = this.getNodes();
        if (this.isCollapsed()) return [].concat(Array.from(t));
        var e = this.isBackward(),
          n = Ai(this).getTextSlices(),
          o = [];
        for (var _e188 of t) {
          var _t266 = Wi(n, _e188),
            _r75 = _t266 ? ji(_t266, this) : _e188;
          null !== _r75 && o.push(_r75);
        }
        if (1 === t.length && 1 === o.length && ki(o[0])) {
          var _t267 = o[0],
            _ref96 = e ? [this.focus, this.anchor] : [this.anchor, this.focus],
            _n142 = _ref96[0],
            _r76 = _ref96[1];
          (_n142.set(_t267.getKey(), 0, "text"),
            _r76.set(_t267.getKey(), _t267.getTextContentSize(), "text"));
        }
        return o;
      };
      _proto19.modify = function modify(t, e, n) {
        if (od(this, t, e, n)) return;
        var o = "move" === t,
          r = La(),
          i = El(_l(r));
        if (!i) return;
        var s = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === s ||
          !Hr(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          bl(s, r, l);
        var a = ll(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = ki(c) ? rc(c, a, r) : null),
          this.dirty)
        ) {
          var _t268 = ll(r, this.anchor.key);
          var _e189 = _t268;
          if ("text" === this.anchor.type) {
            var _n143 = this.anchor.getNode();
            _e189 = ki(_n143) ? rc(_n143, _t268, r) : null;
          }
          _e189 && u && Yf(i, _e189, this.anchor.offset, u, this.focus.offset);
        }
        if (
          "character" === n &&
          ki(c) &&
          c.isUnmergeable() &&
          (e
            ? 0 === this.focus.offset
            : this.focus.offset === c.getTextContentSize())
        ) {
          var _t269 = Yd(c, e ? "previous" : "next").getNodeAtCaret();
          if (ki(_t269)) {
            if (!o) {
              var _n144 = _t269.getTextContentSize();
              return (
                e
                  ? this.focus.set(_t269.__key, _n144 - 1, "text")
                  : this.focus.set(_t269.__key, 1, "text"),
                void (this.dirty = !0)
              );
            }
            {
              var _n145 = r.getElementByKey(_t269.getKey()),
                _o89 = _n145 ? rc(_t269, _n145, r) : null;
              if (_o89) {
                var _t270 = e ? _o89.length : 0;
                Yf(i, _o89, _t270, _o89, _t270);
              }
            }
          }
        }
        if ((mf(i, t, e ? "backward" : "forward", n, l), i.rangeCount > 0)) {
          var _t271 = Fl(i, r._rootElement),
            _n146 = _t271 || i.getRangeAt(0),
            _s28 = this.anchor.getNode(),
            _l21 = Qr(_s28) ? _s28 : ml(_s28);
          (this.applyDOMRange(_n146),
            (this.dirty = !0),
            o ||
              (xf(this, e, _l21),
              (_t271
                ? "backward" !== i.direction
                : i.anchorNode === _n146.startContainer &&
                  i.anchorOffset === _n146.startOffset) || yf(this)));
        }
        "lineboundary" === n && od(this, t, e, n, "decorators");
      };
      _proto19.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Hr(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t272 = e.getParent(),
            _n147 =
              e.getNextSibling() ||
              (null === _t272 ? null : _t272.getNextSibling());
          if (Hr(_n147) && _n147.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto19.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e190 = this.anchor;
          var _n148 = _e190.getNode();
          if (this.forwardDeletion(_e190, _n148, t)) {
            var _t273 = Hr(_n148) ? _n148.getNextSibling() : null;
            if (
              !(
                Hr(_n148) &&
                _n148.isEmpty() &&
                Hr(_t273) &&
                _t273.isShadowRoot()
              )
            )
              return;
          }
          var _o90 = Ei(_e190, t ? "previous" : "next"),
            _r77 = rh(_o90);
          if (
            _r77.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            if ("element" === _e190.type) {
              var _t274 = _o90.getNodeAtCaret();
              if (Hr(_t274) && kl(_t274)) {
                var _e191 = _t274.getParent();
                _t274.remove();
                var _n149 = Ks(_e191, _t274);
                return void (null !== _n149 && _n149.selectStart());
              }
            }
            var _t275 = { type: "initial" };
            for (var _e192 of _r77.iterNodeCarets("shadowRoot"))
              if (jd(_e192)) {
                if (_e192.origin.isInline());
                else {
                  if (_e192.origin.isShadowRoot()) {
                    if ("merge-block" === _t275.type) break;
                    if (
                      Hr(_r77.anchor.origin) &&
                      _r77.anchor.origin.isEmpty()
                    ) {
                      var _t276 = Li(_e192);
                      (wi(this, sh(_t276, _t276)), _r77.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t275.type &&
                    "merge-block" !== _t275.type) ||
                    (_t275 = {
                      block: _t275.block,
                      caret: _e192,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t275.type) break;
                if (Wd(_e192)) {
                  if (Hr(_e192.origin)) {
                    if (_e192.origin.isInline()) {
                      if (!_e192.origin.isParentOf(_r77.anchor.origin)) break;
                    } else
                      _t275 = { block: _e192.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Gr(_e192.origin)) {
                    if (_e192.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t275.type &&
                      (_e192.origin.isKeyboardSelectable() ||
                        !_e192.origin.isInline()) &&
                      Hr(_r77.anchor.origin) &&
                      _r77.anchor.origin.isEmpty()
                    ) {
                      _r77.anchor.origin.remove();
                      var _t277 = Rf();
                      (_t277.add(_e192.origin.getKey()), Bs(_t277));
                    } else {
                      var _t278 = _e192.origin,
                        _n150 = _t278.getParent();
                      _t278.remove();
                      var _o91 = Ks(_n150, _t278);
                      null !== _o91 && _o91.selectStart();
                    }
                    return;
                  }
                  if (aa(_e192.origin)) return void _e192.origin.remove();
                  break;
                }
              }
            if ("merge-block" === _t275.type) {
              var _t279 = _t275,
                _e193 = _t279.caret,
                _n151 = _t279.block;
              if (Cd(_n151).length > 0) return;
              return _e193.origin.isEmpty() &&
                !_n151.isEmpty() &&
                _e193.origin.getParent() === _n151.getParent()
                ? void _e193.origin.remove(!0)
                : (wi(
                    this,
                    sh(
                      !_e193.origin.isEmpty() && _n151.isEmpty()
                        ? Di(Yd(_n151, _e193.direction))
                        : _r77.anchor,
                      _e193,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t280 = _e190.getNode(); null !== _t280; ) {
              if (null !== pd(_t280)) return;
              if (Hr(_t280) && _t280.isShadowRoot()) break;
              _t280 = _t280.getParent();
            }
          }
          var _i52 = this.focus;
          if ((Sf(this, t, "character"), this.isCollapsed())) {
            if (
              t &&
              0 === _e190.offset &&
              (function (t, e) {
                for (var _n152 = e; _n152; _n152 = _n152.getParent()) {
                  if (Hr(_n152)) {
                    if (_n152.collapseAtStart(t)) return !0;
                    if (Sl(_n152)) break;
                  }
                  if (_n152.getPreviousSibling()) break;
                }
                return !1;
              })(this, _e190.getNode())
            )
              return;
          } else {
            var _o92 = "text" === _i52.type ? _i52.getNode() : null;
            if (
              ((_n148 = "text" === _e190.type ? _e190.getNode() : null),
              null !== _o92 && _o92.isSegmented())
            ) {
              var _e194 = _i52.offset,
                _r78 = _o92.getTextContentSize();
              if (
                _o92.is(_n148) ||
                (t && _e194 !== _r78) ||
                (!t && 0 !== _e194)
              )
                return void Nf(_o92, t, _e194);
            } else if (null !== _n148 && _n148.isSegmented()) {
              var _r79 = _e190.offset,
                _i53 = _n148.getTextContentSize();
              if (_n148.is(_o92) || (t && 0 !== _r79) || (!t && _r79 !== _i53))
                return void Nf(_n148, t, _r79);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode();
              if (r === o.getNode() && "text" === n.type && "text" === o.type) {
                var _t281 = n.offset,
                  _s29 = o.offset,
                  _l22 = _t281 < _s29,
                  _c12 = _l22 ? _t281 : _s29,
                  _a11 = _l22 ? _s29 : _t281,
                  _u0 = _a11 - 1;
                _c12 !== _u0 &&
                  !Ws((i = r.getTextContent().slice(_c12, _a11))) &&
                  !Tf(i) &&
                  (e ? o.set(o.key, _u0, o.type) : n.set(n.key, _u0, n.type));
              }
              var i;
            })(this, t);
          }
        }
        (e || _f(this),
          this.removeText(),
          t &&
            !e &&
            this.isCollapsed() &&
            "element" === this.anchor.type &&
            0 === this.anchor.offset &&
            cf());
      };
      _proto19.deleteLine = function deleteLine(t) {
        df(this, t, "lineboundary");
      };
      _proto19.deleteWord = function deleteWord(t) {
        df(this, t, "word");
      };
      _proto19.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (Ia() || (this._cachedIsBackward = e), e);
      };
      _proto19.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return uf;
    })();
    function ff(t) {
      return t instanceof _lf;
    }
    function df(t, e, n) {
      var o = t.isCollapsed(),
        r = t.anchor,
        i = t.focus;
      var s = !1;
      if (o) {
        if ("word" === n && t.forwardDeletion(r, r.getNode(), e)) return;
        ((s = Sf(t, e, n)),
          "lineboundary" === n &&
            (function (t) {
              for (var _e195 of Ai(t).iterNodeCarets("shadowRoot"))
                if (Wd(_e195) && aa(_e195.origin))
                  return void Oi(t.focus, Di(_e195));
            })(t));
      }
      ("lineboundary" !== n ||
        t.isCollapsed() ||
        Qc(r.getNode(), Zl) === Qc(i.getNode(), Zl) ||
        i.set(r.key, r.offset, r.type),
        t.isCollapsed()
          ? s || t.deleteCharacter(e)
          : (o || _f(t), t.removeText()));
    }
    function hf(t, e) {
      if (ff(t)) {
        for (var _n153 of t.getNodes())
          ai(_n153) && _n153.setFormat(e(_n153.getFormat()));
        return;
      }
      var n = t.isCollapsed() ? [] : t.getNodes(),
        o = n.length ? Ai(t).getTextSlices() : [];
      var r,
        i,
        s,
        l = !1,
        c = 0;
      for (var _a12 of n)
        if (ki(_a12)) {
          r && i && (r.set(i.__key, 0, "text"), (r = void 0));
          var _n154 = Wi(o, _a12);
          if (!l && _n154 && 0 === _n154.distance) {
            var _e196 = t.isBackward() ? t.focus : t.anchor;
            "text" === _e196.type && _e196.key === _a12.__key && (r = _e196);
          }
          if (((l = !0), _n154 && 0 === _n154.distance)) continue;
          var _u1 = e(_a12.getFormat()),
            _f1 = r ? _a12.getTextContentSize() : 0,
            _d9 = _n154 && !ys(_a12) ? ji(_n154, t) : _a12;
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
          Hr(_a12)
            ? _a12.setTextFormat(e(_a12.getTextFormat()))
            : ai(_a12) && _a12.setFormat(e(_a12.getFormat()));
      l
        ? void 0 !== s && (t.format = s | c)
        : (t.setFormat(e(t.format)), bs(null));
    }
    function gf(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && af(t) ? Cs(t.format, e, null) : n;
      hf(t, function (t) {
        return Cs(t, e, o);
      });
    }
    function pf(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function _f(t) {
      var e = Ls();
      !e.isEmpty() &&
        Yi(e, t) &&
        (t.anchor.set(e.getKey(), 0, "element"),
        t.focus.set(e.getKey(), e.getChildrenSize(), "element"));
    }
    function yf(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        i = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, i, !0));
    }
    function mf(t, e, n, o, r) {
      var i = "character" === o ? Ll(t, r) : null,
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
      var c = Ll(t, r);
      c.focusNode === s && c.focusOffset === l && t.modify(e, n, o);
    }
    function xf(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return gl(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var i = e ? r[0] : r[r.length - 1],
        s = Hr(i) ? i : i.getParentOrThrow();
      return (e ? s.selectStart() : s.selectEnd(), !0);
    }
    function Sf(t, e, n) {
      if (od(t, "extend", e, n)) return !1;
      var o = La(),
        r = El(_l(o));
      if (!r || "function" != typeof r.modify) return !1;
      var i = o._blockCursorElement,
        s = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === s ||
        null === i ||
        !Hr(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        bl(i, o, s);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && ki(e) ? rc(e, n, o) : n;
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
        (Yf(r, p, _, p, _),
        mf(r, "move", e ? "backward" : "forward", n, s),
        0 === r.rangeCount)
      )
        return !1;
      var y = Fl(r, s) || r.getRangeAt(0);
      var m = y.startContainer,
        x = y.startOffset;
      if ("lineboundary" === n && ms(m) && gs(m) === o) {
        var _t282 = $s(m);
        if (Gr(_t282) && _t282.isInline() && !_t282.isIsolated()) {
          var _n155 = o.getElementByKey(_t282.getKey());
          null !== _n155 &&
            _n155.contains(m) &&
            ((m = _n155), (x = e ? 0 : _n155.childNodes.length));
        }
      }
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        ki(u) &&
        u.isUnmergeable() &&
        d === (e ? 0 : u.getTextContentSize())
      ) {
        var _n156 = Yd(u, e ? "previous" : "next").getNodeAtCaret();
        if (ki(_n156)) {
          var _o93 = e ? _n156.getTextContentSize() - 1 : 1;
          return (t.focus.set(_n156.__key, _o93, "text"), (t.dirty = !0), !1);
        }
      }
      if (h && "character" === n && "text" === l.type) {
        var _n157 = e ? 0 : u.getTextContentSize(),
          _o94 = m === f ? x : d !== _n157 ? _n157 : -1;
        if (_o94 >= 0)
          return (
            _o94 !== d && (t.focus.set(l.key, _o94, "text"), (t.dirty = !0)),
            !1
          );
      }
      var S = o._slotsUsed && Is(m),
        C = S ? md(u) : null,
        v = S ? md(S) : null;
      if (
        S &&
        !Mf(v, C) &&
        Cf(t.focus, u, C, v, "deletion", function () {
          return !e;
        })
      )
        return !0;
      var _ref97 = e ? [m, x, f, d] : [f, d, m, x],
        T = _ref97[0],
        N = _ref97[1],
        k = _ref97[2],
        b = _ref97[3],
        E = Qr(u) ? u : ml(u);
      return (
        t.applyDOMRange({
          collapsed: !1,
          endContainer: k,
          endOffset: b,
          startContainer: T,
          startOffset: N,
        }),
        (t.dirty = !0),
        !xf(t, e, E) && e && yf(t),
        !1
      );
    }
    function Cf(t, e, n, o, r, i) {
      var s =
        o &&
        (function (t, e) {
          for (var _n158 = _d(t); null !== _n158; ) {
            var _t283 = md(_n158);
            if (Mf(_t283, e))
              return null !== _t283 || _n158.isAttached() ? _n158 : null;
            _n158 = _t283 && _d(_t283);
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
        var _e197 = s || n;
        if (!Hr(_e197))
          return (
            null !== _e197 &&
              (function (t, e, n) {
                Hr(e)
                  ? t.set(e.getKey(), n ? e.getChildrenSize() : 0, "element")
                  : t.set(e.getKey(), n ? e.getTextContentSize() : 0, "text");
              })(t, _e197, l),
            !0
          );
        ((a = _e197), (u = l ? _e197.getChildrenSize() : 0));
      } else
        ((a = c),
          (u = s.getIndexWithinParent() + (l === ("selection" === r) ? 1 : 0)));
      return (
        "deletion" === r
          ? (function (t, e, n, o) {
              for (;;) {
                var _r80 = e.getChildAtIndex(o ? n : n - 1);
                if (ki(_r80))
                  return void t.set(
                    _r80.getKey(),
                    o ? 0 : _r80.getTextContentSize(),
                    "text",
                  );
                if (!Hr(_r80) || Sl(_r80)) break;
                ((e = _r80), (n = o ? 0 : _r80.getChildrenSize()));
              }
              t.set(e.getKey(), n, "element");
            })(t, a, u, !l)
          : t.set(a.getKey(), u, "element"),
        !0
      );
    }
    function vf() {
      try {
        var _t284 = new RegExp("\\p{Emoji}", "u"),
          _e198 = _t284.test.bind(_t284);
        if (
          _e198("\u2764\ufe0f") &&
          _e198("#\ufe0f\u20e3") &&
          _e198("\u{1f44d}")
        )
          return _e198;
      } catch (t) {}
      return function () {
        return !1;
      };
    }
    var Tf = vf();
    function Nf(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        i = r.length;
      var s = 0,
        l = 0;
      for (var _t285 = 0; _t285 < i; _t285++) {
        var _o95 = _t285 === i - 1;
        if (
          ((l = s), (s += r[_t285].length), (e && s === n) || s > n || _o95)
        ) {
          (r.splice(_t285, 1), _o95 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function kf(t, n, o, r) {
      var i,
        s = n,
        l = !1;
      if (Vl(t)) {
        var _c13 = !1;
        var _a13 = t.childNodes,
          _u10 = _a13.length,
          _f10 = r._blockCursorElement;
        (s === _u10 && _u10 > 0 && ((_c13 = !0), (s = _u10 - 1)),
          void 0 !== Ds(t, r) || Sc(t, r) || (l = !0));
        var _d0 = _a13[s],
          _h8 = !1;
        if (_d0 === _f10) ((_d0 = _a13[s + 1]), (_h8 = !0));
        else if (null !== _f10) {
          var _e199 = _f10.parentNode;
          t === _e199 &&
            n > Array.prototype.indexOf.call(_e199.children, _f10) &&
            s--;
        }
        if (((i = $s(_d0)), ki(i))) s = Gd(i, _c13 ? "next" : "previous");
        else {
          var _a14 = $s(t);
          if (null === _a14) return null;
          if (Hr(_a14)) {
            var _u11$resolveChildInde;
            var _l23 = r.getElementByKey(_a14.getKey());
            null === _l23 && e(214);
            var _u11 = nc(_a14, _l23, r);
            ((_u11$resolveChildInde = _u11.resolveChildIndex(_a14, _l23, t, n)),
              (_a14 = _u11$resolveChildInde[0]),
              (s = _u11$resolveChildInde[1]),
              Hr(_a14) || e(215),
              _c13 &&
                s >= _a14.getChildrenSize() &&
                (s = Math.max(0, _a14.getChildrenSize() - 1)));
            var _f11 = _a14.getChildAtIndex(s);
            if (
              Hr(_f11) &&
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
              var _t286 = _c13
                ? _f11.getLastDescendant()
                : _f11.getFirstDescendant();
              (null === _t286
                ? (_a14 = _f11)
                : ((_f11 = _t286),
                  (_a14 = Hr(_f11) ? _f11 : _f11.getParentOrThrow())),
                (s = 0));
            }
            ki(_f11)
              ? ((i = _f11),
                (_a14 = null),
                (s = Gd(_f11, _c13 ? "next" : "previous")))
              : _f11 !== _a14 &&
                _c13 &&
                !_h8 &&
                (Hr(_a14) || e(216),
                (s = Math.min(_a14.getChildrenSize(), s + 1)));
          } else {
            var _e200 = _d(_a14),
              _o96 = null !== _e200 ? _e200 : _a14,
              _i54 = _o96.getIndexWithinParent(),
              _l24 = r.getElementByKey(_a14.getKey());
            var _c14 = "after";
            if (null !== _l24 && $s(t) === _a14) {
              var _e201 = nc(_a14, _l24, r);
              _e201.element !== _l24
                ? (_c14 = _e201.resolveLeafPosition(_l24, t, n))
                : 0 === n && Gr(_a14) && (_c14 = "before");
            }
            ((s = "before" === _c14 ? _i54 : _i54 + 1),
              (_a14 = _o96.getParentOrThrow()));
          }
          if (Hr(_a14)) return [tf(_a14.__key, s, "element"), l];
        }
      } else i = $s(t);
      return ki(i) ? [tf(i.__key, Gd(i, s, "clamp"), "text"), l] : null;
    }
    function bf(t, e, n) {
      var o = t.getNode();
      if (Os(o)) return;
      var r = 0 === t.offset;
      if (!r && t.offset !== o.getTextContent().length) return;
      var i = r ? "previous" : "next",
        s = Yd(o, i).getNodeAtCaret();
      if (r === e || !Hr(s) || !s.isInline() || (r && n)) {
        if (r && !e)
          ki(s) &&
            !o.isUnmergeable() &&
            t.set(s.__key, s.getTextContent().length, "text");
        else if (null === s && (n || (!r && e))) {
          var _e202 = o.getParent();
          if (
            Hr(_e202) &&
            _e202.isInline() &&
            (r ||
              (!_e202.canInsertTextAfter() && _e202.getTextContentSize() > 1))
          ) {
            var _n159 = Yd(_e202, i).getNodeAtCaret();
            ki(_n159) &&
              t.set(_n159.__key, r ? _n159.getTextContent().length : 0, "text");
          }
        }
      } else t.set(s.__key, r ? s.getChildrenSize() : 0, "element");
    }
    function Ef(t) {
      var e = Ms(t.key);
      return null === e ? null : md(e);
    }
    function Of(t, e, n) {
      var o = Ef(t),
        r = Ef(e);
      return !Mf(o, r) && Cf(e, Ms(t.key), o, r, "selection", n);
    }
    function Mf(t, e) {
      return null === t ? null === e : t.is(e);
    }
    function wf(t) {
      var e = Of(t.anchor, t.focus, function () {
        return (
          1 !==
          (function (t, e) {
            var n = (function (t, e) {
              var n = new Map();
              for (
                var _e203 = null, _o97 = t;
                null !== _o97;
                _e203 = _o97, _o97 = ah(_o97)
              )
                n.set(_o97.getKey(), _e203);
              for (
                var _t287 = null, _o98 = e;
                null !== _o98;
                _t287 = _o98, _o98 = ah(_o98)
              ) {
                var _e204 = n.get(_o98.getKey());
                if (void 0 === _e204) continue;
                var _r81 = _o98.getLatest();
                return null === _e204
                  ? null === _t287
                    ? { commonAncestor: _r81, type: "same" }
                    : { b: _t287, commonAncestor: _r81, type: "ancestor" }
                  : null === _t287
                    ? { a: _e204, commonAncestor: _r81, type: "descendant" }
                    : {
                        a: _e204,
                        b: _t287,
                        commonAncestor: _r81,
                        type: "branch",
                      };
              }
              return null;
            })(t.origin, e.origin);
            if (null === n) return null;
            switch (n.type) {
              case "same":
                return uh(t, e);
              case "ancestor":
                return "child" === t.type && null === pd(n.b) ? -1 : 1;
              case "descendant":
                return "child" === e.type && null === pd(n.a) ? 1 : -1;
              case "branch": {
                var _t288 = pd(n.a) && n.a.getKey(),
                  _e205 = pd(n.b) && n.b.getKey();
                if (_t288 && _e205)
                  for (var _o99 of Sd(n.commonAncestor).values())
                    if (_o99 === _t288 || _o99 === _e205)
                      return _o99 === _t288 ? -1 : 1;
                return _t288 ? -1 : _e205 ? 1 : n.a.isBefore(n.b) ? -1 : 1;
              }
            }
          })(Ei(t.anchor, "next"), Ei(t.focus, "next"))
        );
      });
      return (e && (t.dirty = !0), e);
    }
    function Af(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      var o = 0;
      for (
        var _t289 = n && n.previousSibling;
        _t289;
        _t289 = _t289.previousSibling
      )
        o++;
      return o;
    }
    function Df(t, e, n, o, r, i) {
      if (null === t || null === n || !ds(r, t, n)) return null;
      var s = kf(t, e, af(i) ? i.anchor : null, r);
      if (null === s) return null;
      var l = kf(n, o, af(i) ? i.focus : null, r);
      if (null === l) return null;
      var c = s[0],
        a = s[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e206 = $s(t),
          _o100 = $s(n);
        if (Gr(_e206) && Gr(_o100)) return null;
      }
      var d =
        r._slotsUsed &&
        Of(c, u, function () {
          return (function (t, e, n, o) {
            if (t === n) return o >= e;
            var r = t.compareDocumentPosition(n);
            return r & Node.DOCUMENT_POSITION_CONTAINED_BY
              ? Af(t, n) >= e
              : r & Node.DOCUMENT_POSITION_CONTAINS
                ? o > Af(n, t)
                : 0 !== (r & Node.DOCUMENT_POSITION_FOLLOWING);
          })(t, e, n, o);
        });
      return (
        (function (t, e) {
          if ("text" === t.type && "text" === e.type) {
            var _n160 = t.isBefore(e),
              _o101 = t.is(e);
            (bf(t, _n160, _o101),
              bf(e, !_n160, _o101),
              _o101 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function If(t) {
      return Hr(t) && !t.isInline();
    }
    function Pf(t, e, n, o, r, i) {
      var s = Ra(),
        l = new _uf(tf(t, e, r), tf(n, o, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function Ff() {
      var t = tf("root", 0, "element"),
        e = tf("root", 0, "element");
      return new _uf(t, e, 0, "");
    }
    function Rf() {
      return new _lf(new Set());
    }
    function Lf(t, e) {
      return Bf(null, t, e, null);
    }
    var Kf = new Set([
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
    function Bf(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var i = o || r.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c = "keydown" === s && i,
        a = c && jl(c),
        u =
          c &&
          (c.ctrlKey || c.metaKey || Kf.has(c.key)) &&
          Yl(a) &&
          gs(a) === n,
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
      if (af(t) && !f) return t.clone();
      {
        if (null === e) return null;
        var _o102 = Ll(e, n._rootElement);
        if (
          ((d = _o102.anchorNode),
          (h = _o102.focusNode),
          (g = _o102.anchorOffset),
          (p = _o102.focusOffset),
          (l || u || void 0 === s) && af(t) && !ds(n, d, h))
        )
          return t.clone();
      }
      var _ = Df(d, g, h, p, n, t);
      if (null === _) return null;
      var y = _[0],
        m = _[1],
        x = _[2],
        S = af(t) ? t : null,
        C = new _uf(y, m, S ? S.format : 0, S ? S.style : "");
      return (S && zf(C, S.anchor.key), (C.dirty = x), C);
    }
    function zf(t, e) {
      var n = t.anchor;
      if (n.key === e) return;
      var o = n.getNode();
      var r = 0,
        i = "";
      (ki(o)
        ? ((r = o.getFormat()), (i = o.getStyle()))
        : Hr(o) && ((r = o.getTextFormat()), (i = o.getTextStyle())),
        (t.format === r && t.style === i) ||
          ((t.format = r), (t.style = i), (t.dirty = !0)));
    }
    function $f() {
      return Ra()._selection;
    }
    function Wf() {
      return La()._editorState._selection;
    }
    function jf(t, e) {
      var n = e.__key;
      return t.anchor.key === n || t.focus.key === n;
    }
    function Uf(t, e, n, o) {
      if (o === void 0) {
        o = 1;
      }
      if (jf(t, e))
        for (var _r82 of [t.anchor, t.focus]) {
          _r82.key === e.__key &&
            ((n <= _r82.offset && o > 0) || (n < _r82.offset && o < 0)) &&
            _r82.set(e.__key, Math.max(0, _r82.offset + o), "element");
          var _t290 = _r82.getNode();
          if (Hr(_t290)) {
            var _e207 = _t290.getChildrenSize(),
              _n161 = _r82.offset >= _e207,
              _o103 = _t290.getChildAtIndex(_n161 ? _e207 - 1 : _r82.offset);
            ki(_o103) &&
              _r82.set(
                _o103.__key,
                _n161 ? _o103.getTextContentSize() : 0,
                "text",
              );
          }
        }
    }
    function Hf(t, e, n, o, r) {
      var i = o || r;
      if (ki(i) || Hr(i)) {
        var _e208 = ki(i);
        t.set(
          i.__key,
          null === o ? 0 : _e208 ? i.getTextContentSize() : i.getChildrenSize(),
          _e208 ? "text" : "element",
        );
      } else {
        var _o104 = e.getIndexWithinParent();
        t.set(n.__key, -1 === _o104 ? n.getChildrenSize() : _o104, "element");
      }
    }
    function Vf(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Yf(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function Jf(t, e, n) {
      var o = ll(t, e.getKey());
      if (Hr(e)) {
        var _r83 = nc(e, o, t);
        return [_r83.element, n + _r83.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Gf(t, e, n, o, r, i) {
      var s = i.getRootNode(),
        l = xs(s) || Ml(s) ? Wl(s) : null;
      if ((r.has(Mo) && l !== i) || (null !== l && as(l, l))) return;
      var c = Ll(o, i);
      var a;
      if (!af(e))
        return void (
          null !== t &&
          ds(n, c.anchorNode, c.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _Jf = Jf(n, h, f.offset),
        p = _Jf[0],
        _ = _Jf[1],
        _Jf2 = Jf(n, g, d.offset),
        y = _Jf2[0],
        m = _Jf2[1],
        x = e.format,
        S = e.style,
        C = e.isCollapsed();
      var T = p,
        N = y,
        k = !1;
      if (
        ("text" === f.type
          ? ((T = ki(h) ? rc(h, p, n) : null),
            (k = h.getFormat() !== x || h.getStyle() !== S))
          : af(t) && "text" === t.anchor.type && (k = !0),
        "text" === d.type && (N = ki(g) ? rc(g, y, n) : null),
        null === T || null === N)
      )
        return;
      var b = C && ki(g) && Os(g) && ms(N) && N.nodeValue === v ? v.length : m;
      if (
        (C &&
          (null === t || k || (af(t) && (t.format !== x || t.style !== S))) &&
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
          var _t291 = null !== l ? gs(l) : null;
          (null !== _t291 && _t291 !== n) ||
            r.has(Io) ||
            i.focus({ preventScroll: !0 });
        }
        if ("element" !== f.type) return;
      }
      if (
        (Yf(o, T, _, N, b), u && e.isCollapsed() && null !== i && !r.has(Io))
      ) {
        var _t292 = $l(i);
        if (null === _t292 || !i.contains(_t292)) {
          var _t293 = Wl(i.ownerDocument),
            _e209 = null !== _t293 ? gs(_t293) : null;
          (null !== _e209 && _e209 !== n) || i.focus({ preventScroll: !0 });
        }
      }
      if (!r.has(Ao) && e.isCollapsed() && null !== i && i === $l(i)) {
        var _t294 =
          af(e) && "element" === e.anchor.type
            ? (function (t, e, n) {
                var o = e.childNodes[n];
                if (!Vl(o)) return o || null;
                var r = Ds(o, t),
                  i = void 0 !== r ? Ms(r) : null;
                return null === i || Hr(i) ? o : nc(i, o, t).element;
              })(n, T, _)
            : (void 0 === a && (a = Rl(o, i)), a);
        if (null !== _t294) {
          var _e210;
          if (ms(_t294)) {
            var _n162 = _t294.ownerDocument.createRange();
            (_n162.selectNode(_t294), (_e210 = _n162.getBoundingClientRect()));
          } else
            _e210 = Vl(_t294)
              ? _t294.getBoundingClientRect()
              : (function (t) {
                  var e = t.getBoundingClientRect(),
                    n = t.startContainer,
                    o = t.startOffset;
                  if (
                    !t.collapsed ||
                    0 !== e.width ||
                    0 !== e.height ||
                    !ms(n) ||
                    0 === n.length
                  )
                    return e;
                  var r = t.cloneRange();
                  return (
                    o > 0 ? r.setStart(n, o - 1) : r.setEnd(n, 1),
                    r.getBoundingClientRect()
                  );
                })(_t294);
          !(function (t, e, n, o) {
            if (o === void 0) {
              o = null;
            }
            var r = al(n),
              i = pl(r);
            if (null === r || null === i) return;
            var s = n.getBoundingClientRect();
            if (e.bottom < s.top) return;
            if (null !== o && e.height > 0) {
              var _t295 = e.left,
                _r84 = e.right,
                _s30 = Vl(o) ? o : cl(o);
              for (; null !== _s30 && n.contains(_s30); ) {
                var _e211 = fl(i, _s30, _t295, _r84);
                ((_t295 -= _e211),
                  (_r84 -= _e211),
                  (_s30 = _s30 === n ? null : cl(_s30)));
              }
            }
            var l = e.top,
              c = e.bottom,
              a = 0,
              u = 0,
              f = n;
            for (; null !== f; ) {
              var _e212 = f === r.body;
              if (_e212) {
                var _e213 = i.visualViewport;
                if (_e213) {
                  var _t296 = _e213.offsetTop;
                  ((a = _t296), (u = _t296 + _e213.height));
                } else ((a = 0), (u = _l(t).innerHeight));
                var _n163 = i.getComputedStyle(r.documentElement),
                  _o105 = parseFloat(_n163.scrollPaddingTop),
                  _s31 = parseFloat(_n163.scrollPaddingBottom);
                (isFinite(_o105) && (a += _o105),
                  isFinite(_s31) && (u -= _s31));
              } else {
                var _t297 = f === n ? s : f.getBoundingClientRect();
                ((a = _t297.top), (u = _t297.bottom));
                var _e214 = f.clientHeight;
                if (f.scrollHeight > _e214) {
                  var _t298 = i.getComputedStyle(f);
                  ("auto" !== _t298.overflowY &&
                    "scroll" !== _t298.overflowY) ||
                    ((a += ul(_t298.scrollPaddingTop, _e214)),
                    (u -= ul(_t298.scrollPaddingBottom, _e214)));
                }
              }
              var _o106 = 0;
              if (
                (l < a ? (_o106 = -(a - l)) : c > u && (_o106 = c - u),
                0 !== _o106)
              )
                if (_e212) i.scrollBy(0, _o106);
                else {
                  var _t299 = f.scrollTop;
                  f.scrollTop += _o106;
                  var _e215 = f.scrollTop - _t299;
                  ((l -= _e215), (c -= _e215));
                }
              if (_e212) break;
              f = cl(f);
            }
          })(n, _e210, i, T);
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
    function qf(t, e) {
      for (var _n164 of t.split(/(\r?\n|\t)/))
        "\n" === _n164 || "\r\n" === _n164
          ? e.linebreak()
          : "\t" === _n164
            ? e.tab()
            : "" !== _n164 && e.text(_n164);
    }
    function Xf(t) {
      var e = [];
      return (
        qf(t, {
          linebreak: function linebreak() {
            return e.push(ca());
          },
          tab: function tab() {
            return e.push(ts());
          },
          text: function text(t) {
            return e.push(Ni(t));
          },
        }),
        e
      );
    }
    function Qf(t) {
      var e = [];
      for (var _n165 of t)
        if (!aa(_n165))
          if ((!Hr(_n165) && !Gr(_n165)) || _n165.isInline()) e.push(_n165);
          else if (Hr(_n165))
            for (var _t300 of Qf(_n165.getChildren())) e.push(_t300);
      return e;
    }
    function Zf(t, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t;
      t.isCollapsed() || o.removeText();
      var r = $f();
      (af(r) && (o = r), af(o) || e(161));
      var i = o.anchor;
      var s = i.getNode(),
        l = i.offset;
      for (; !Zl(s) && null === pd(s); ) {
        var _td;
        var _t301 = s;
        if (((_td = td(s, l, n)), (s = _td[0]), (l = _td[1]), _t301.is(s)))
          break;
      }
      return [s, l];
    }
    function td(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t.getParent();
      if (!o) {
        var _t302 = qi();
        return (Ls().append(_t302), _t302.select(), [Ls(), 0]);
      }
      if (ki(t)) {
        var _n166 = t.splitText(e);
        if (0 === _n166.length) return [o, t.getIndexWithinParent()];
        var _r85 = 0 === e ? 0 : 1;
        return [o, _n166[0].getIndexWithinParent() + _r85];
      }
      if (!Hr(t) || 0 === e) return [o, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _o107 = new _uf(
            tf(t.__key, e, "element"),
            tf(t.__key, e, "element"),
            0,
            "",
          ),
          _i55 = t.insertNewAfter(_o107);
        if (_i55) Hl(_i55, [r].concat(Array.from(r.getNextSiblings())));
        else if (n) return [t, e];
      }
      return [o, t.getIndexWithinParent() + 1];
    }
    function ed(t) {
      return aa(t) || yl(t) || ki(t) || t.isParentRequired();
    }
    function nd(t) {
      var e = qi();
      var n = null;
      for (var _o108 = 0; _o108 < t.length; _o108++) {
        var _r86 = t[_o108];
        if (ed(_r86)) {
          if (null === n) {
            ((n = _r86.createParentElementNode()), e.append(n));
            var _i56 = t[_o108 + 1];
            if (aa(_r86) && (void 0 === _i56 || !ed(_i56))) continue;
          }
          n.append(_r86);
        } else (e.append(_r86), (n = null));
      }
      return e;
    }
    function od(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref98 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e216 = _ref98[0],
          _o109 = _ref98[1];
        return (_o109.set(_e216.key, _e216.offset, _e216.type), !0);
      }
      var i = Ei(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === o,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === r,
        u = !1;
      if (!Ki(c)) {
        for (var _t303 of c) {
          a = !1;
          var _e217 = _t303.origin;
          if (Gr(_e217)) {
            if (_e217.isIsolated()) {
              u = !0;
              break;
            }
            if (((c = _t303), s && _e217.isInline())) continue;
          }
          break;
        }
        if (u) return !0;
        if (a)
          for (var _t304 of rh(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (jd(_t304)) _t304.origin.isInline() || (c = _t304);
            else {
              if (Hr(_t304.origin)) continue;
              Gr(_t304.origin) && !_t304.origin.isInline() && (c = _t304);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && Gr(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t305 = Rf();
        return (_t305.add(c.origin.getKey()), Bs(_t305), !0);
      }
      return ((c = Li(c)), l && Oi(t.anchor, c), Oi(t.focus, c), a || !s);
    }
    function rd(t, e, n) {
      var o = null === e ? null : e.__key,
        r = null === n ? null : n.__key;
      (null === e ? (t.__first = r) : (e.__next = r),
        null === n ? (t.__last = o) : (n.__prev = o));
    }
    function id(t, e) {
      var n = La();
      if (
        (n._recordTextEdits && ui(n).push(["detach", t.__key, e.__key]),
        !n._recordNodeMoves)
      )
        return;
      var o = n._editorState._nodeMap;
      if (o.has(t.__key)) {
        var _e218 = Ra(),
          _n167 = _e218._movedNodes || (_e218._movedNodes = new WeakMap());
        var _r87 = _n167.get(o);
        (void 0 === _r87 && ((_r87 = new Set()), _n167.set(o, _r87)),
          _r87.add(t.__key));
      }
    }
    function sd(t, e, n, o) {
      var r = e.__key;
      (null === n ? (t.__first = r) : (n.__next = r),
        null === o ? (t.__last = r) : (o.__prev = r),
        (e.__prev = null === n ? null : n.__key),
        (e.__next = null === o ? null : o.__key),
        (e.__parent = t.__key));
      var i = La();
      i._recordTextEdits &&
        ui(i).push([
          "attach",
          r,
          t.__key,
          e.__prev,
          e.__next,
          ki(e) ? e.__text : null,
        ]);
    }
    function ld(t) {
      null !== pd(t) && e(380, t.__key, String(pd(t)));
      var n = t.getParent();
      if (null !== n) {
        var _e219 = n.getWritable();
        id(t, _e219);
        var _o110 = t.getPreviousSibling(),
          _r88 = t.getNextSibling();
        (rd(_e219, _o110 && _o110.getWritable(), _r88 && _r88.getWritable()),
          (t.__prev = null),
          (t.__next = null),
          (t.__parent = null),
          _e219.__size--);
      }
    }
    function cd(t, e) {
      var n = e && t.getParent(),
        o = e && n && jf(e, n) ? t.getIndexWithinParent() : -1,
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
        ld(t),
        e && n && -1 !== o && Uf(e, n, o, -1),
        e && (e._cachedIsBackward = null),
        r
      );
    }
    function ad(t, e, n, o) {
      Pa();
      var r = "next" === e;
      Tl(t, n);
      var i = t.getWritable(),
        s = n.getWritable();
      t.getParentOrThrow();
      var l = $f(),
        c = o && af(l) ? l : null,
        a = cd(s, c),
        u = t.getParentOrThrow().getWritable(),
        f =
          c && ((r && null !== a && a.length > 0) || jf(c, u))
            ? t.getIndexWithinParent() + (r ? 1 : 0)
            : -1,
        d = r ? t.getNextSibling() : t.getPreviousSibling(),
        h = d && d.getWritable();
      if (
        (sd(u, s, r ? i : h, r ? h : i),
        u.__size++,
        c && -1 !== f && (Uf(c, u, f), r && null !== a))
      )
        for (var _t306 of a) _t306.set(u.__key, f + 1, "element");
      return n;
    }
    function ud(t, e, n) {
      Pa();
      var o = t.origin,
        r = t.direction,
        i = "next" === r,
        s = _d(o);
      if (null !== s) return i ? s.selectNext(e, n) : s.selectPrevious(e, n);
      var l = t.getNodeAtCaret(),
        c = o.getParentOrThrow();
      if (null === l) return i ? c.select() : c.select(0, 0);
      if (Hr(l)) return i ? l.select(0, 0) : l.select();
      if (ki(l)) return l.select(e, n);
      var a = l.getIndexWithinParent() + (i ? 0 : 1);
      return c.select(a, a);
    }
    function fd(t, e) {
      var n = [];
      for (
        var _o111 = t;
        null !== _o111;
        _o111 =
          "next" === e ? _o111.getNextSibling() : _o111.getPreviousSibling()
      )
        n.push(_o111);
      return n;
    }
    var dd = new Map();
    function hd(t) {
      return Hr(t) || Gr(t);
    }
    function gd(t) {
      return Hr(t) || Gr(t);
    }
    function pd(t) {
      var e = t.getLatest();
      return gd(e) ? e.__slotHost : null;
    }
    function _d(t) {
      var n = pd(t);
      if (null === n) return null;
      var o = Ms(n);
      return (Hr(o) || Gr(o) || e(370), o);
    }
    function yd(t) {
      var e = _d(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref100 of Sd(e)) {
        var _t307 = _ref100[0];
        var _o112 = _ref100[1];
        if (_o112 === n) return _t307;
      }
      return null;
    }
    function md(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== pd(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function xd(t) {
      var _t$getNodes$;
      if (null === t) return null;
      var e = af(t)
        ? t.anchor.getNode()
        : (_t$getNodes$ = t.getNodes()[0]) != null
          ? _t$getNodes$
          : null;
      return null === e ? null : md(e);
    }
    function Sd(t) {
      var e = t.getLatest();
      return hd(e) && null !== e.__slots ? e.__slots : dd;
    }
    function Cd(t) {
      return Array.from(Sd(t).keys());
    }
    function vd(t, e) {
      var n = Sd(t).get(e);
      return void 0 === n ? null : Ms(n);
    }
    var Td = ["__proto__", "constructor", "prototype"],
      Nd = Symbol("slotMapOwner");
    function kd(t) {
      var e = t.__slots;
      return (
        (null !== e && e[Nd] === t) ||
          ((e = new Map(e)), (e[Nd] = t), (t.__slots = e)),
        e
      );
    }
    var bd = new WeakMap(),
      Ed = [];
    function Od(t) {
      for (var _ref102 of qc(t)) {
        var _e220 = _ref102.ownNodeConfig;
        {
          var _t308 = _e220 && _e220.slots;
          if (_t308) return _t308;
        }
      }
      return Ed;
    }
    function Md(t) {
      var e = "";
      for (var _n168 of Sd(t).values()) {
        var _t309 = Ms(_n168);
        null !== _t309 && (e += _t309.getTextContent());
      }
      return e;
    }
    function wd(t, e, n) {
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
    function Ad(t, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        e(373, n);
      var r = t.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!Hr(o) && !Gr(o)) || o.isInline()) && e(374, o.__key);
      var i = t.getWritable(),
        s = kd(i),
        l = s.get(n);
      void 0 !== l && Dd(l);
      var c = o.getWritable(),
        a = _d(c);
      if (null !== a) {
        var _t310 = yd(c);
        (null !== _t310 && kd(a.getWritable())["delete"](_t310),
          (c.__slotHost = null));
      }
      return (
        ld(c),
        (c.__slotHost = i.__key),
        s.set(n, c.__key),
        (function (t) {
          var n = t.__slots;
          if (null === n || n.size < 2) return;
          var o = (function (t) {
            var n = bd.get(t);
            if (void 0 === n) {
              var _o113 = Od(t),
                _r89 = new Map();
              for (var _n169 of _o113)
                (Td.includes(_n169) && e(371, t.name, _n169),
                  _r89.has(_n169) && e(372, t.name, _n169),
                  _r89.set(_n169, _r89.size));
              ((n = _r89), bd.set(t, n));
            }
            return n;
          })(t.constructor);
          var r = null,
            i = !0;
          for (var _t311 of n.keys()) {
            if (null !== r && wd(r, _t311, o) > 0) {
              i = !1;
              break;
            }
            r = _t311;
          }
          if (i) return;
          var s = Array.from(n).sort(function (_ref103, _ref104) {
            var t = _ref103[0];
            var e = _ref104[0];
            return wd(t, e, o);
          });
          n.clear();
          for (var _ref106 of s) {
            var _t312 = _ref106[0];
            var _e221 = _ref106[1];
            n.set(_t312, _e221);
          }
        })(i),
        (La()._slotsUsed = !0),
        (Ra()._slotsUsed = !0),
        i
      );
    }
    function Dd(t) {
      var n = Ms(t);
      if (null === n) return;
      var o = n.getWritable();
      (gd(o) || e(377, t), (o.__slotHost = null), o.remove());
    }
    var Id = { next: "previous", previous: "next" };
    var _Pd4 = (function () {
      function Pd(t) {
        this.origin = t;
      }
      var _proto20 = Pd.prototype;
      _proto20[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return lh({
            hasNext: Wd,
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
        return Yd(this.getNodeAtCaret(), this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return Yd(this.origin, this.direction);
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
          var _e222 = i.getAdjacentCaret();
          null !== _e222 && l.size < t;
          _e222 = _e222.getAdjacentCaret()
        ) {
          var _t313 = _e222.origin.getWritable();
          l.set(_t313.getKey(), _t313);
        }
        for (var _t314 of r) {
          if (l.size > 0) {
            var _n170 = i.getNodeAtCaret();
            if (_n170) {
              if (
                (l["delete"](_n170.getKey()),
                l["delete"](_t314.getKey()),
                _n170.is(_t314) || i.origin.is(_t314))
              );
              else {
                var _e223 = _t314.getParent();
                (_e223 && _e223.is(s) && _t314.remove(), _n170.replace(_t314));
              }
            } else null === _n170 && e(263, Array.from(l).join(" "));
          } else i.insert(_t314);
          i = Yd(_t314, this.direction);
        }
        for (var _t315 of l.values()) _t315.remove();
        return this;
      };
      return Pd;
    })();
    var _Fd3 = (function (_Pd) {
      function Fd() {
        var _this6;
        for (
          var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
          _key0 < _len0;
          _key0++
        ) {
          args[_key0] = arguments[_key0];
        }
        return (
          ((_this6 = _Pd.call.apply(_Pd, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Fd, _Pd);
      var _proto21 = Fd.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Xd(t, this.direction);
      };
      _proto21.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Yd(Kd(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        var t = Ld(this.direction);
        return Yd(this.getNodeAtCaret(), t) || Xd(this.origin, t);
      };
      _proto21.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto21.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Fd &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Fd;
    })(_Pd4);
    var Rd = { root: Qr, shadowRoot: Sl };
    function Ld(t) {
      return Id[t];
    }
    function Kd(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || Rd[e](t) ? null : null === pd(t) ? t : null;
    }
    var _Bd3 = (function (_Pd2) {
      function Bd() {
        var _this7;
        for (
          var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
          _key1 < _len1;
          _key1++
        ) {
          args[_key1] = arguments[_key1];
        }
        return (
          ((_this7 = _Pd2.call.apply(_Pd2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Bd, _Pd2);
      var _proto22 = Bd.prototype;
      _proto22.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Yd(t, this.direction);
      };
      _proto22.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto22.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto22.getChildCaret = function getChildCaret() {
        return Hr(this.origin) ? Xd(this.origin, this.direction) : null;
      };
      _proto22.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Yd(Kd(this.getParentAtCaret(), t), this.direction);
      };
      _proto22.getFlipped = function getFlipped() {
        var t = Ld(this.direction);
        return (
          Yd(this.getNodeAtCaret(), t) || Xd(this.origin.getParentOrThrow(), t)
        );
      };
      _proto22.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Bd &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto22.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Bd || t instanceof _zd3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Bd;
    })(_Pd4);
    var _zd3 = (function (_Pd3) {
      function zd(t, e) {
        var _this8;
        ((_this8 = _Pd3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(zd, _Pd3);
      var _proto23 = zd.prototype;
      _proto23.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Jd(t, this.direction, this.offset);
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
        return Yd(Kd(this.getParentAtCaret(), t), this.direction);
      };
      _proto23.getFlipped = function getFlipped() {
        return Jd(this.origin, Ld(this.direction), this.offset);
      };
      _proto23.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof zd &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto23.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Bd3 || t instanceof zd) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto23.getSiblingCaret = function getSiblingCaret() {
        return Yd(this.origin, this.direction);
      };
      return zd;
    })(_Pd4);
    function $d(t) {
      return t instanceof _zd3;
    }
    function Wd(t) {
      return t instanceof _Bd3;
    }
    function jd(t) {
      return t instanceof _Fd3;
    }
    var Ud = {
        next: (function (_zd) {
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
              ((_this9 = _zd.call.apply(_zd, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _zd);
          var _proto24 = _class.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_zd3),
        previous: (function (_zd2) {
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
              ((_this0 = _zd2.call.apply(_zd2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _zd2);
          var _proto25 = _class3.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_zd3),
      },
      Hd = {
        next: (function (_Bd) {
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
              ((_this1 = _Bd.call.apply(_Bd, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Bd);
          var _proto26 = _class5.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Bd3),
        previous: (function (_Bd2) {
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
              ((_this10 = _Bd2.call.apply(_Bd2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Bd2);
          var _proto27 = _class7.prototype;
          _proto27.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto27.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Bd3),
      },
      Vd = {
        next: (function (_Fd) {
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
              ((_this11 = _Fd.call.apply(_Fd, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Fd);
          var _proto28 = _class9.prototype;
          _proto28.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto28.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Fd3),
        previous: (function (_Fd2) {
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
              ((_this12 = _Fd2.call.apply(_Fd2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Fd2);
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
        })(_Fd3),
      };
    function Yd(t, e) {
      return t ? new Hd[e](t) : null;
    }
    function Jd(t, e, n) {
      return t ? new Ud[e](t, Gd(t, n)) : null;
    }
    function Gd(t, e, o) {
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
    function qd(t, e) {
      return new _eh(t, e);
    }
    function Xd(t, e) {
      return Hr(t) ? new Vd[e](t) : null;
    }
    function Qd(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Zd(t) {
      return t && Qd(t.getAdjacentCaret());
    }
    var _th = (function () {
      function th(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto30 = th.prototype;
      _proto30.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new th(t, e, this.direction);
      };
      _proto30.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto30.getTextSlices = function getTextSlices() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return $d(t) && $d(e) && t.isSameNodeCaret(e)
          ? [qd(t, e.offset - t.offset), null]
          : [$d(t) ? nh(t, "anchor") : null, $d(e) ? nh(e, "focus") : null];
      };
      _proto30.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = $d(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = $d(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : Zd(e) || e.getParentCaret(t);
          };
        return lh({
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
      return th;
    })();
    var _eh = (function () {
      function eh(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto31 = eh.prototype;
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
        return Jd(
          (function (t, e, n) {
            var o = t.getTextContent(),
              r = o.slice(0, e) + "" + o.slice(e + n);
            if (
              !La()._recordTextEdits ||
              !Number.isInteger(e) ||
              !Number.isInteger(n) ||
              e < 0 ||
              e > o.length ||
              n < 0
            )
              return t.setTextContent(r);
            var i = di;
            di = [t.__key, e, Math.min(n, o.length - e), ""];
            try {
              return t.setTextContent(r);
            } finally {
              di = i;
            }
          })(t, n, o - n),
          e,
          n,
        );
      };
      return eh;
    })();
    function nh(t, e) {
      var n = t.direction,
        o = t.origin;
      return qd(t, Gd(o, "focus" === e ? Ld(n) : n) - t.offset);
    }
    function oh(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function rh(t) {
      return sh(t, oh(Xd(Ls(), Ld(t.direction)), t.direction));
    }
    function ih(t) {
      return sh(t, t);
    }
    function sh(t, n) {
      return (
        t.direction !== n.direction && e(265),
        new _th(t, n, t.direction)
      );
    }
    function lh(t) {
      var _ref107;
      var e = t.initial,
        n = t.hasNext,
        o = t.step,
        r = t.map;
      var i = e;
      return (
        (_ref107 = {}),
        (_ref107[
          typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
        ] = function () {
          return this;
        }),
        (_ref107.next = function next() {
          if (!n(i)) return { done: !0, value: void 0 };
          var t = { done: !1, value: r(i) };
          return ((i = o(i)), t);
        }),
        _ref107
      );
    }
    function ch(t, n) {
      var o = gh(t.origin, n.origin);
      switch (
        (null === o && e(275, t.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same":
          return uh(t, n);
        case "ancestor":
          return "child" === t.type ? -1 : 1;
        case "descendant":
          return "child" === n.type ? 1 : -1;
        case "branch":
          return fh(o);
      }
    }
    function ah(t) {
      return t.getParent() || _d(t);
    }
    function uh(t, e) {
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
    function fh(t) {
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
    function dh(t, e) {
      return e.is(t);
    }
    function hh(t) {
      return Hr(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function gh(t, n) {
      if (t.is(n)) return { commonAncestor: t, type: "same" };
      var o = new Map();
      for (
        var _hh = hh(t), _e224 = _hh[0], _n171 = _hh[1];
        _e224;
        _n171 = _e224, _e224 = _e224.getParent()
      )
        o.set(_e224, _n171);
      for (
        var _hh2 = hh(n), _r90 = _hh2[0], _i57 = _hh2[1];
        _r90;
        _i57 = _r90, _r90 = _r90.getParent()
      ) {
        var _s32 = o.get(_r90);
        if (void 0 !== _s32)
          return null === _s32
            ? (dh(t, _r90) || e(276),
              { commonAncestor: _r90, type: "ancestor" })
            : null === _i57
              ? (dh(n, _r90) || e(277),
                { commonAncestor: _r90, type: "descendant" })
              : (((Hr(_s32) || dh(t, _s32)) &&
                  (Hr(_i57) || dh(n, _i57)) &&
                  _r90.is(_s32.getParent()) &&
                  _r90.is(_i57.getParent())) ||
                  e(278),
                { a: _s32, b: _i57, commonAncestor: _r90, type: "branch" });
      }
      return null;
    }
    var _ph = (function (_Error) {
      function ph(t, e, n) {
        var _this13;
        ((_this13 = _Error.call(this, e) || this),
          (_this13.name = "LexicalWarning"),
          (_this13.code = t),
          (_this13.data = n));
        return _this13;
      }
      babelHelpers.inheritsLoose(ph, _Error);
      return ph;
    })(babelHelpers.wrapNativeSuper(Error));
    function _h() {
      var e = [];
      for (
        var _len16 = arguments.length, t = new Array(_len16), _key16 = 0;
        _key16 < _len16;
        _key16++
      ) {
        t[_key16] = arguments[_key16];
      }
      for (var _n172 of t)
        if (_n172 && "string" == typeof _n172)
          for (var _ref109 of _n172.matchAll(/\S+/g)) {
            var _t316 = _ref109[0];
            e.push(_t316);
          }
      return e;
    }
    ((exports.$addUpdateTag = dl),
      (exports.$applyNodeReplacement = vl),
      (exports.$assumeActiveEditor = function (t) {
        (null !== Ra() && null === va && (va = t), va !== t && n(378));
      }),
      (exports.$caretFromPoint = Ei),
      (exports.$caretRangeFromSelection = Ai),
      (exports.$cloneWithProperties = hc),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = hc(t))[To] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = ch),
      (exports.$copyNode = Cl),
      (exports.$create = Xc),
      (exports.$createChildrenArray = Zc),
      (exports.$createLineBreakNode = ca),
      (exports.$createNodeSelection = Rf),
      (exports.$createParagraphNode = qi),
      (exports.$createPoint = tf),
      (exports.$createRangeSelection = Ff),
      (exports.$createRangeSelectionFromDom = Lf),
      (exports.$createTabNode = ts),
      (exports.$createTextNode = Ni),
      (exports.$exportNodeJSON = ee),
      (exports.$extendCaretToRange = rh),
      (exports.$findMatchingParent = Qc),
      (exports.$flushSyncAfterUpdate = function () {
        var t = Ra();
        (Pa(), (t._flushSync = !0));
      }),
      (exports.$formatText = gf),
      (exports.$fullReconcile = Ka),
      (exports.$generateNodesFromRawText = Xf),
      (exports.$getAdjacentChildCaret = Zd),
      (exports.$getAdjacentNode = rl),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = Zd(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = Zd(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = oh),
      (exports.$getCaretRange = sh),
      (exports.$getCaretRangeInDirection = Bi),
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
          : [pf(n), pf(o)];
      }),
      (exports.$getChildCaret = Xd),
      (exports.$getChildCaretAtIndex = zi),
      (exports.$getChildCaretOrSelf = Qd),
      (exports.$getCollapsedCaretRange = ih),
      (exports.$getCommonAncestor = gh),
      (exports.$getCommonAncestorResultBranchOrder = fh),
      (exports.$getDOMSlot = nc),
      (exports.$getDOMTextNode = rc),
      (exports.$getDocument = Pl),
      (exports.$getEditor = tc),
      (exports.$getEditorDOMRenderConfig = ec),
      (exports.$getElementAndOffsetForPoint = Jf),
      (exports.$getNearestNodeFromDOMNode = Is),
      (exports.$getNearestRootOrShadowRoot = ml),
      (exports.$getNodeByKey = Ms),
      (exports.$getNodeByKeyOrThrow = Nl),
      (exports.$getNodeFromDOMNode = ws),
      (exports.$getPreviousSelection = Wf),
      (exports.$getRoot = Ls),
      (exports.$getSelection = $f),
      (exports.$getSelectionSlotFrame = xd),
      (exports.$getSiblingCaret = Yd),
      (exports.$getSlot = vd),
      (exports.$getSlotFrame = md),
      (exports.$getSlotHost = _d),
      (exports.$getSlotNameWithinHost = yd),
      (exports.$getSlotNames = Cd),
      (exports.$getState = ln),
      (exports.$getStateChange = function (t, e, n) {
        var o = ln(t, n, on),
          r = ln(e, n, on);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = $f();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Gd),
      (exports.$getTextPointCaret = Jd),
      (exports.$getTextPointCaretSlice = qd),
      (exports.$getTextPointCaretSliceForNode = Wi),
      (exports.$getWritableNodeState = hn),
      (exports.$hasAncestor = gl),
      (exports.$hasUpdateTag = function (t) {
        return La()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = Vi),
      (exports.$insertNodes = function (t) {
        var e = $f() || Wf();
        (null === e && (e = Ls().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockContainer = Or),
      (exports.$isBlockElementNode = If),
      (exports.$isBlockFullySelected = Yi),
      (exports.$isChildCaret = jd),
      (exports.$isCompactExport = te),
      (exports.$isDecoratorNode = Gr),
      (exports.$isEditorState = function (t) {
        return t instanceof _ra;
      }),
      (exports.$isElementDOMSlot = oc),
      (exports.$isElementNode = Hr),
      (exports.$isEventFromEmbeddedInput = us),
      (exports.$isExtendableTextPointCaret = Ki),
      (exports.$isInlineElementOrDecoratorNode = yl),
      (exports.$isInlineFormattable = ai),
      (exports.$isLeafNode = function (t) {
        return ki(t) || aa(t) || Gr(t);
      }),
      (exports.$isLexicalNode = Eo),
      (exports.$isLineBreakNode = aa),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Pd4;
      }),
      (exports.$isNodeSelection = ff),
      (exports.$isParagraphNode = Xi),
      (exports.$isRangeSelection = af),
      (exports.$isRootNode = Qr),
      (exports.$isRootOrShadowRoot = Sl),
      (exports.$isSelectionCapturedInDecoratorInput = as),
      (exports.$isShadowRootNode = xl),
      (exports.$isSiblingCaret = Wd),
      (exports.$isSlotChild = gd),
      (exports.$isSlotHost = hd),
      (exports.$isTabNode = es),
      (exports.$isTextNode = ki),
      (exports.$isTextPointCaret = $d),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _eh;
      }),
      (exports.$isTokenOrSegmented = ys),
      (exports.$isTokenOrTab = _s),
      (exports.$markSlotEditable = xc),
      (exports.$needsBlockCursorBeside = kl),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Ra();
        if (n._readOnly) {
          var _t317 = dc(n).get(e);
          return _t317 ? Array.from(_t317.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref111 of o) {
          var _n173 = _ref111[1];
          _n173 instanceof t &&
            _n173.__type === e &&
            _n173.isAttached() &&
            r.push(_n173);
        }
        return r;
      }),
      (exports.$normalizeCaret = Li),
      (exports.$normalizeSelection__EXPERIMENTAL = Bo),
      (exports.$onUpdate = hl),
      (exports.$parseSerializedNode = function (t) {
        return Ua(t, La()._nodes);
      }),
      (exports.$removeFromParent = Ts),
      (exports.$removeSlot = function (t, e) {
        var n = t.getWritable();
        if (null === n.__slots) return n;
        var o = n.__slots.get(e);
        return (void 0 !== o && (Dd(o), kd(n)["delete"](e)), n);
      }),
      (exports.$removeTextFromCaretRange = Fi),
      (exports.$rewindSiblingCaret = Di),
      (exports.$selectAll = function (t) {
        var e = Ls();
        if (af(t)) {
          var _e225 = t.anchor,
            _n174 = t.focus,
            _o114 = _e225.getNode();
          if (Qr(_o114))
            return (
              _e225.set(_o114.getKey(), 0, "element"),
              _n174.set(_o114.getKey(), _o114.getChildrenSize(), "element"),
              Zs(t, _o114),
              t
            );
          var _r91 = _o114.getTopLevelElementOrThrow(),
            _i58 = _r91.getParent();
          return null === _i58
            ? (Hr(_r91) &&
                (_e225.set(_r91.getKey(), 0, "element"),
                _n174.set(_r91.getKey(), _r91.getChildrenSize(), "element"),
                Zs(t, _r91)),
              t)
            : (_e225.set(_i58.getKey(), 0, "element"),
              _n174.set(_i58.getKey(), _i58.getChildrenSize(), "element"),
              Zs(t, _i58),
              t);
        }
        {
          var _t318 = e.select(0, e.getChildrenSize());
          return (Bs(Zs(_t318, e)), _t318);
        }
      }),
      (exports.$setCompositionKey = bs),
      (exports.$setDirectionFromDOM = pc),
      (exports.$setFormatFromDOM = _c),
      (exports.$setPointFromCaret = Oi),
      (exports.$setSelection = Bs),
      (exports.$setSelectionFromCaretRange = Mi),
      (exports.$setSlot = Ad),
      (exports.$setState = cn),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref113 of Object.entries(e)) {
          var _t319 = _ref113[0];
          var _o115 = _ref113[1];
          "boolean" == typeof _o115 && n.push([_t319, _o115]);
        }
        0 !== n.length &&
          hf(t, function (t) {
            for (var _ref115 of n) {
              var _e226 = _ref115[0];
              var _o116 = _ref115[1];
              t = Cs(t, _e226, _o116 ? w[_e226] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = Hi),
      (exports.$splitNode = function (t, n) {
        var o = t.getChildAtIndex(n);
        (null == o && (o = t), Sl(t) && e(102));
        var _r94 = function r(t) {
            var n = t.getParentOrThrow(),
              i = Sl(n),
              s = t !== o || i ? Cl(t) : t;
            if (i)
              return ((Hr(t) && Hr(s)) || e(133), t.insertAfter(s), [t, s, s]);
            {
              var _r93 = _r94(n),
                _e227 = _r93[0],
                _o117 = _r93[1],
                _i59 = _r93[2];
              return (
                Hl(_i59, [s].concat(Array.from(t.getNextSiblings()))),
                [_e227, _o117, s]
              );
            }
          },
          _r92 = _r94(o),
          i = _r92[0],
          s = _r92[1];
        return [i, s];
      }),
      (exports.$splitTextPointCaretSlice = ji),
      (exports.$updateDOMSelection = Gf),
      (exports.$updateRangeSelectionFromCaretRange = wi),
      (exports.$withCompactExport = Zt),
      (exports.ArtificialNode__DO_NOT_USE = _ia),
      (exports.BEFORE_INPUT_COMMAND = H),
      (exports.BLUR_COMMAND = Rt),
      (exports.CAN_REDO_COMMAND = It),
      (exports.CAN_UNDO_COMMAND = Pt),
      (exports.CAN_USE_BEFORE_INPUT = d),
      (exports.CAN_USE_DOM = r),
      (exports.CLEAR_EDITOR_COMMAND = At),
      (exports.CLEAR_HISTORY_COMMAND = Dt),
      (exports.CLICK_COMMAND = U),
      (exports.COLLABORATION_TAG = Mo),
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
      (exports.COMPOSITION_END_TAG = Fo),
      (exports.COMPOSITION_START_COMMAND = Y),
      (exports.COMPOSITION_START_TAG = Po),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Q),
      (exports.CONTROL_OR_ALT = zt),
      (exports.CONTROL_OR_META = Bt),
      (exports.CONTROL_OR_OTHER_KEY = K),
      (exports.COPY_COMMAND = Ot),
      (exports.CUT_COMMAND = Mt),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = _a),
      (exports.DEFER_COMPOSITION_MERGE_TAG = wo),
      (exports.DELETE_CHARACTER_COMMAND = G),
      (exports.DELETE_LINE_COMMAND = nt),
      (exports.DELETE_WORD_COMMAND = et),
      (exports.DRAGEND_COMMAND = Et),
      (exports.DRAGOVER_COMMAND = bt),
      (exports.DRAGSTART_COMMAND = kt),
      (exports.DROP_COMMAND = Tt),
      (exports.DecoratorNode = _Jr),
      (exports.ElementNode = _Ur4),
      (exports.FOCUS_COMMAND = Ft),
      (exports.FORMAT_ELEMENT_COMMAND = Nt),
      (exports.FORMAT_TEXT_COMMAND = ot),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = Oo),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Ct),
      (exports.INPUT_COMMAND = V),
      (exports.INSERT_LINE_BREAK_COMMAND = q),
      (exports.INSERT_PARAGRAPH_COMMAND = X),
      (exports.INSERT_TAB_COMMAND = St),
      (exports.INTERNAL_$expandSelectionToWholeDocument = _f),
      (exports.INTERNAL_$isBlock = Zl),
      (exports.INTERNAL_$normalizeNodeStructure = function (t) {
        if (!Hr(t) || !t.isAttached()) return;
        var e = new _er();
        ((e.full = !0), (e.explicit = !0));
        var n = t.getParent();
        kr(e, function () {
          if (null === n || Sl(t)) return void mr(t, e);
          var o = n.getKey();
          (e.touched.add(t.getKey()), mr(t, e));
          for (var _t320 of Array.from(e.touched)) {
            var _n175 = Ms(_t320);
            null !== _n175 && _n175.getLatest().__parent === o && sr(_n175, e);
          }
        });
      }),
      (exports.INTERNAL_$recordTextMove = function (t, e, n, o) {
        var r = La();
        if (!r._recordTextEdits) return void o();
        var i = t.__key,
          s = e.__key,
          l = e.getLatest().__next === i,
          c = ui(r),
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
        var n = La();
        if (!n._recordTextEdits) return;
        var o = t.getLatest(),
          r = e.getLatest(),
          i = ui(n),
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
      (exports.INTERNAL_$withExportMemo = ac),
      (exports.INTERNAL_getActiveEditorState = function () {
        return Ca;
      }),
      (exports.INTERNAL_isInlineContent = function (t) {
        return Yo(t);
      }),
      (exports.INTERNAL_isNodeStructureEnforced = Er),
      (exports.INTERNAL_registerNodeStructure = function (t) {
        var e = br || (br = new WeakMap());
        var n = e.get(t);
        if (void 0 === n) {
          var _o118 = [],
            _r95 = new Set(),
            _i60 = function _i60(t) {
              var e = t.__key;
              (_o118.push(e), _r95.add(e));
            },
            _s33 = new WeakSet([t.getEditorState()]);
          var _l25 = !0;
          var _c15 = function _c15() {
              var t = _l25;
              ((_l25 = !1),
                (function (t, e, n) {
                  var o = Ls();
                  if (0 === t.length && !e && !Nr(o)) return;
                  var r = new _er();
                  r.full = e;
                  var i = o.getKey();
                  (r.wrapsAll.add(i), r.path.add(i));
                  var s = n ? tc().getEditorState()._nodeMap : null,
                    l = [];
                  for (var _n176 of e ? [] : t) {
                    l.length = 0;
                    var _t321 = !1;
                    var _e228 = Ms(_n176);
                    if (
                      (Hr(_e228) &&
                        _e228.isShadowRoot() &&
                        r.wrapsAll.add(_n176),
                      null === s || null === _e228 || !vr(_e228, s.get(_n176)))
                    ) {
                      for (
                        var _n177 = _e228;
                        null !== _n177;
                        _n177 = _n177.getParent()
                      ) {
                        if (r.path.has(_n177.getKey())) {
                          _t321 = !0;
                          break;
                        }
                        l.push(_n177);
                      }
                      if (_t321) for (var _t322 of l) r.addPath(_t322);
                    }
                  }
                  ((t.length = 0),
                    (r.path.size > 1 || e || Nr(o)) &&
                      kr(r, function () {
                        mr(o, r);
                      }));
                })(_o118, t, !_s33.has(tc().getEditorState())));
            },
            _a15 = t.registerUpdateListener(function (_ref116) {
              var t = _ref116.editorState,
                e = _ref116.dirtyElements,
                n = _ref116.dirtyLeaves;
              var o = t._nodeMap,
                i = function i(t) {
                  return !_r95.has(t) && o.has(t);
                };
              var l = !0;
              for (var _ref118 of e) {
                var _t323 = _ref118[0];
                var _n178 = _ref118[1];
                if (_n178 && "root" !== _t323 && i(_t323)) {
                  l = !1;
                  break;
                }
              }
              if (l)
                for (var _t324 of n)
                  if (i(_t324)) {
                    l = !1;
                    break;
                  }
              (_r95.clear(), l || _s33.add(t));
            }),
            _u12 = [],
            _f12 = [];
          for (var _ref120 of t._nodes) {
            var _e229 = _ref120[0];
            var _ref119$ = _ref120[1];
            var _n179 = _ref119$.klass;
            var _o119 = _ref119$.transforms;
            {
              var _t325 = "root" === _e229 ? _c15 : _i60;
              (_o119.add(_t325),
                _u12.push([_o119, _t325]),
                (_n179.prototype instanceof _Ur4 ||
                  _n179.prototype instanceof _Jr) &&
                  _f12.push(_e229));
            }
          }
          ((n = {
            dispose: function dispose() {
              _a15();
              for (var _ref122 of _u12) {
                var _t326 = _ref122[0];
                var _e230 = _ref122[1];
                _t326["delete"](_e230);
              }
            },
            refs: 0,
          }),
            e.set(t, n),
            Rs(t, _f12));
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
      (exports.LexicalWarning = _ph),
      (exports.LineBreakNode = _sa),
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
      (exports.RootNode = _Xr),
      (exports.SELECTION_CHANGE_COMMAND = W),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = j),
      (exports.SELECT_ALL_COMMAND = wt),
      (exports.SET_TEXT_FORMAT_COMMAND = rt),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = Do),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = Ao),
      (exports.SKIP_SELECTION_FOCUS_TAG = Io),
      (exports.TEXT_TYPE_TO_FORMAT = w),
      (exports.TabNode = _Zi),
      (exports.TextNode = _pi2),
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
        var n = _h.apply(void 0, Array.from(e));
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
                for (var _n180 = 0; _n180 < e.length; _n180++) {
                  var _o120 = e[_n180];
                  if (
                    "string" != typeof _o120 ||
                    (_n180 > 0 && !(e[_n180 - 1] < _o120)) ||
                    !Ke(t, _o120) ||
                    t(_o120) !== _o120
                  )
                    return !1;
                }
                return !0;
              })(t, e)
            )
              return e;
            var n = [];
            for (var _o121 = 0; _o121 < e.length; _o121++) {
              var _r96 = e[_o121];
              void 0 !== _r96 && Ke(t, _r96) && n.push(t(_r96));
            }
            n.sort();
            var o = [];
            for (var _t327 = 0; _t327 < n.length; _t327++)
              (0 !== _t327 && n[_t327] === n[_t327 - 1]) || o.push(n[_t327]);
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
            for (var _o122 = 0; _o122 < e.length; _o122++)
              n[_o122] = t(e[_o122]);
            return n;
          },
          { item: t, kind: "array" },
          void 0,
          function (e, n) {
            if (!Array.isArray(e) || !Array.isArray(n) || e.length !== n.length)
              return !1;
            for (var _o123 = 0; _o123 < e.length; _o123++)
              if (!Ce(t, e[_o123], n[_o123])) return !1;
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
          o = za(),
          r = n.theme || {},
          i = void 0 === t ? o : n.parentEditor || null,
          s = n.disableEvents || !1,
          l = na(),
          c = n.namespace || (null !== i ? i._config.namespace : Hs()),
          a = n.editorState,
          u = [_Xr, _pi2, _sa, _Zi, _Ji, _ia].concat(Array.from(n.nodes || [])),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var p;
        if (void 0 === t && null !== o) p = o._nodes;
        else {
          p = new Map();
          for (var _t328 = 0; _t328 < u.length; _t328++) {
            var _o124 = u[_t328],
              _r97 = null,
              _i61 = null;
            if (_o124 && "object" == typeof _o124) {
              var _t329 = _o124;
              ((_o124 = _t329.replace),
                (_r97 = _t329["with"]),
                (_i61 = _t329.withKlass || null));
            }
            if (
              "function" != typeof _o124 ||
              !_o124.prototype ||
              !(_o124 === _bo5 || _o124.prototype instanceof _bo5)
            ) {
              var _r98 = "<unknown>";
              try {
                _r98 = JSON.parse(Yt);
              } catch (_unused2) {}
              e(
                365,
                String(_t328 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o124
                  ? "" +
                      _o124.name +
                      ("function" == typeof _o124.getType
                        ? " (type " + String(_o124.getType()) + ")"
                        : "")
                  : String(_o124),
                String(_r98),
              );
            }
            Wc(_o124);
            var _s34 = _o124.getType(),
              _l26 = pa(_o124);
            p.set(_s34, {
              exportDOM: h && h["export"] ? h["export"].get(_o124) : void 0,
              klass: _o124,
              replace: _r97,
              replaceWithKlass: _i61,
              sharedNodeState: un(u[_t328]),
              transforms: _l26,
            });
          }
        }
        var _ = new _xa(
          l,
          i,
          p,
          {
            disableEvents: s,
            dom: babelHelpers["extends"]({}, _a, t && t.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || ha,
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
            (t.registerCommand(H, Mu, 0),
              t.registerCommand(V, Au, 0),
              t.registerCommand(Y, Iu, 0),
              t.registerCommand(J, Pu, 0),
              t.registerCommand(lt, Hu, 0));
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
      (exports.findAllLexicalElementsDeep = Dl),
      (exports.flipDirection = Ld),
      (exports.getActiveElement = $l),
      (exports.getActiveElementDeep = Wl),
      (exports.getComposedEventTarget = jl),
      (exports.getComposedSchemaFields = Ic),
      (exports.getComposedStaticRange = Fl),
      (exports.getDOMOwnerDocument = al),
      (exports.getDOMSelection = El),
      (exports.getDOMSelectionFromTarget = Ol),
      (exports.getDOMSelectionPoints = Ll),
      (exports.getDOMSelectionRange = Rl),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _Kl;
        var n = Fl(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_Kl = Kl(n)) != null
            ? _Kl
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: Bl(n, zl(t)), range: o };
      }),
      (exports.getDOMShadowRoots = Al),
      (exports.getDOMTextNode = Ss),
      (exports.getDeclaredNodeStructure = function (t) {
        var _Uo = Uo(t),
          e = _Uo.derivedNames,
          n = babelHelpers.objectWithoutPropertiesLoose(_Uo, _excluded);
        return Object.freeze(
          babelHelpers["extends"]({}, n, { derived: new Set(e) }),
        );
      }),
      (exports.getDeclaredSlots = Od),
      (exports.getEditorPropertyFromDOMNode = ps),
      (exports.getNearestEditorFromDOMNode = gs),
      (exports.getParentElement = cl),
      (exports.getRegisteredNode = ls),
      (exports.getRegisteredNodeOrThrow = ss),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o125 of t) {
          var _Wc2 = Wc(_o125),
            _t330 = _Wc2.ownNodeType;
          _t330 && (n.set(_t330, _o125), e.set(_t330, new Set()));
        }
        for (var _ref124 of n) {
          var _t331 = _ref124[0];
          var _o126 = _ref124[1];
          for (var _ref126 of qc(_o126)) {
            var _n181 = _ref126.ownNodeType;
            {
              var _o127 = _n181 && e.get(_n181);
              _o127 && _o127.add(_t331);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = Il),
      (exports.getStaticNodeConfig = Wc),
      (exports.getStyleObjectFromCSS = Zr),
      (exports.getTextDirection = function (t) {
        return O.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = pa),
      (exports.getterTableOf = Ne),
      (exports.isBlockDomNode = Ql),
      (exports.isCurrentlyReadOnlyMode = Ia),
      (exports.isDOMCapturingSelection = Sc),
      (exports.isDOMDocumentNode = xs),
      (exports.isDOMNode = Yl),
      (exports.isDOMShadowRoot = Ml),
      (exports.isDOMTextNode = ms),
      (exports.isDOMUnmanaged = mc),
      (exports.isDispatchingCommitListeners = Da),
      (exports.isDocumentFragment = Jl),
      (exports.isExactShortcutMatch = function (t, e, n) {
        if (!Xs(t, n)) return !1;
        if (t.key.toLowerCase() === e.toLowerCase()) return !0;
        if (e.length > 1) return !1;
        if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
        if (t.code.startsWith("Digit") && /^\d$/.test(e))
          return t.code === "Digit" + e;
        var o = "Key" + e.toUpperCase();
        return t.code === o;
      }),
      (exports.isHTMLAnchorElement = function (t) {
        return Vl(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = Vl),
      (exports.isHTMLTableCellElement = function (t) {
        return Vl(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return Vl(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = ql),
      (exports.isLastChildInBlockNode = fa),
      (exports.isLexicalEditor = hs),
      (exports.isModifierMatch = Xs),
      (exports.isOnlyChildInBlockNode = ua),
      (exports.isSchemaField = Te),
      (exports.isSelectionCapturedInDecoratorInput = fs),
      (exports.isSelectionWithinEditor = ds),
      (exports.iterStaticNodeConfigChain = qc),
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
      (exports.makeStepwiseIterator = lh),
      (exports.mergeRegister = nu),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = Ms(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = tc();
                }
                var o = vd(t, e);
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
      (exports.normalizeClassNames = _h),
      (exports.nullable = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e231 = e,
          n = _e231.defaultAsNull;
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
      (exports.numberValue = Je),
      (exports.objectValue = function (t) {
        return (function (t, e) {
          var n = Object.entries(e);
          return we(
            function (t) {
              var e = null !== t && "object" == typeof t ? t : {},
                o = {};
              for (var _t332 = 0; _t332 < n.length; _t332++) {
                var _n$_t = n[_t332],
                  _r99 = _n$_t[0],
                  _i62 = _n$_t[1];
                o[_r99] = _i62(e[_r99]);
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
                n.every(function (_ref127) {
                  var e = _ref127[0],
                    n = _ref127[1];
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
        var _e232 = e,
          n = _e232.omitDefault;
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
      (exports.registerEventListener = ou),
      (exports.registerEventListeners = ru),
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
        var n = _h.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(
            _t$classList3,
            Array.from(n),
          );
      }),
      (exports.removeFromParent = Ns),
      (exports.resetRandomKey = function () {
        is = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = ei),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n182 in e) {
          var _o128 = e[_n182];
          null == _o128 ? t.removeProperty(_n182) : ti(t, _n182, _o128);
        }
      }),
      (exports.setDOMUnmanaged = yc),
      (exports.setNodeIndentFromDOM = gc),
      (exports.setterDefaultOf = Ee),
      (exports.setterTableOf = ke),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n183 in e)
          if (t[_n183] !== e[_n183]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = qu),
      (exports.stringValue = Ve),
      (exports.toggleTextFormatType = Cs),
      (exports.tokenizeRawText = qf),
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
