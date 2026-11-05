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
        Hr(t) && !Array.isArray(n.children) && e(59, o.name),
        n
      );
    }
    function ne() {
      return Ql()._blockCursorElement;
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
      return Ul(t) && t.hasAttribute("data-lexical-managed-linebreak");
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
      null !== l && Ys(e, l, i, s, !1);
    }
    function _e(t, e, n) {
      if (of(t)) {
        var _e11 = t.anchor.getNode();
        if (_e11.is(n) && t.format !== _e11.getFormat()) return !1;
      }
      return ms(e) && n.isAttached();
    }
    function ye(t, e, n) {
      for (var _o6 = t; _o6 && !_c(_o6); _o6 = cl(_o6)) {
        var _t13 = Ds(_o6, e);
        if (void 0 !== _t13) {
          var _e12 = Ms(_t13, n);
          if (_e12) return Gr(_e12) || !Ul(_o6) ? void 0 : [_o6, _e12];
        }
      }
    }
    function me(t, e, n, o) {
      fe = !0;
      var r =
        null === t._inputState.unprocessedBeforeInputData &&
        performance.now() - de > 100;
      try {
        qa(t, function () {
          var i =
              Rf() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = Rf();
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
                          Ul(_e14) &&
                          _e14.hasAttribute("data-lexical-slot")) ||
                        _c(_e14)
                      ))
                ) {
                  if (u) {
                    var _t14 =
                      (Ul(_e14) ? _e14.innerText : null) || _e14.nodeValue;
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
                Ds(_n13, t) ||
                ge(_n13) ||
                _n13.remove();
          (n.takeRecords(),
            null !== i && (a && Bs(i), u && il(t) && i.insertRawText(f)));
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
      if ((wa(), "function" == typeof n)) {
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
      for (var _ref12 of Yc("function" == typeof t ? t : t.replace)) {
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
                  : ss(Ql(), t.getType()).sharedNodeState;
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
      return !Qr(t) && t.getTextContent !== _Ur4.prototype.getTextContent;
    }
    var vn = Symbol["for"]("@lexical/CachedTextSize");
    function Tn(t, n) {
      return zn.read(
        function () {
          var o = 0,
            r = t;
          for (var _t26 = 0; _t26 < n && null !== r; _t26++) {
            var _i7 = Bn.get(r);
            if ((void 0 === _i7 && e(345, r), Hr(_i7))) {
              var _s4 = $n.get(r);
              if (void 0 !== _s4 && Hr(_s4) && _s4.__parent !== _i7.__parent)
                o += _i7.getTextContentSize();
              else {
                var _t27 = Wn.get(r),
                  _n23 = _t27 && _t27.__lexicalTextContent;
                ("string" != typeof _n23 && e(346, _i7.getType()),
                  (o += _n23.length));
              }
              _t26 < n - 1 && !_i7.isInline() && (o += 2);
            } else if (io(_i7).size > 0) o += _i7.getTextContentSize();
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
      Jn = !1,
      Yn = !1;
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
          var _t29 = Xc(o, Bn);
          qn(_t29, 0, _t29.length - 1, null, n);
        }
        if (void 0 !== o) {
          for (var _t30 of io(o).values()) {
            var _e31 = n ? null : lo(_t30);
            (Gn(_t30, null, n), null !== _e31 && _e31.remove());
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
        var _o11 = t.classList.contains(n);
        e > 0 && !_o11
          ? t.classList.add(n)
          : e < 1 && _o11 && t.classList.remove(n);
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
        ? yc(n, En)
        : n.removeAttribute("contenteditable");
    }
    function ro(t, e, n) {
      var o = Mn,
        r = In();
      Mn = "";
      var i = "";
      var s = Gr(t);
      for (var _ref30 of n) {
        var _o12 = _ref30[0];
        var _r1 = _ref30[1];
        {
          var _n25 = no(_o12);
          (oo(e, s, _n25), e.appendChild(_n25), (Mn = ""));
          var _l3 = In();
          (ao(_r1, tc(t, _n25, En)), Pn(_l3), so(t, _o12, e, _n25), (i += Mn));
        }
      }
      return (Pn(r), (Mn = o), i);
    }
    function io(t) {
      return cd(t) && null !== t.__slots ? t.__slots : ld;
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
        var _t31 = _ref32[0];
        var _e33 = _ref32[1];
        if (!r.has(_t31)) {
          var _t32 = lo(_e33);
          (Gn(_e33, null), null !== _t32 && _t32.remove());
        }
      }
      var i = Mn,
        s = In();
      var l = "",
        c = null;
      var a = Gr(e);
      for (var _ref34 of r) {
        var _t33 = _ref34[0];
        var _i9 = _ref34[1];
        {
          var _r10 = o.get(_t33);
          var _s5 = void 0 !== _r10 ? lo(_r10) : null;
          Mn = "";
          var _u2 = In();
          if (null === _s5) {
            _s5 = no(_t33);
            var _o13 = null;
            for (var _t34 of n.children)
              if (!_t34.hasAttribute("data-lexical-slot")) {
                _o13 = _t34;
                break;
              }
            (n.insertBefore(_s5, _o13), ao(_i9, tc(e, _s5, En)));
          } else
            _r10 === _i9
              ? _o(_i9, _s5)
              : (void 0 !== _r10 && Gn(_r10, _s5), ao(_i9, tc(e, _s5, En)));
          if (
            (Pn(_u2),
            oo(n, a, _s5),
            so(e, _t33, n, _s5),
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
    function ao(t, n) {
      var o = $n.get(t);
      if ((void 0 === o && e(60), null !== n)) {
        var _e34 = Bn.get(t);
        if (void 0 !== _e34) {
          var _r11 = Wn.get(t);
          if (void 0 !== _r11) {
            var _i0 = ad(_e34) ? _e34.__slotHost : null,
              _s6 = ad(o) ? o.__slotHost : null,
              _l4 = _e34.__parent !== o.__parent || _i0 !== _s6,
              _c3 = null !== _s6 && _r11.parentElement !== n.element;
            if (_l4 || _c3) {
              if (null !== _i0 && !Un.has(t)) {
                var _e35 = _r11.parentElement;
                null !== _e35 && Un.set(t, _e35);
              }
              return (n.insertChild(_r11), _o(t, n.element));
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
            pc(r, { captureSelection: !0 })));
      var i = null !== n ? n.before : null,
        s = null !== i ? i.previousSibling : null;
      if (Hr(o)) {
        var _t36 = Mn,
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
          if ((uo(Xc(o, $n), o, 0, _e37, tc(o, r, En)), "" !== _s7)) {
            var _e38 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s7 + _e38), (Mn = _t36 + _s7 + _e38));
          }
          _i1.size > 0 && (r.__lexicalSlotTextLength = _s7.length);
        }
        if (Cn(o)) {
          var _e39 = o.getTextContent();
          ((r.__lexicalTextContent = _e39), (Mn = _t36 + _e39));
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
          var _t37 = Xc(l, Bn);
          qn(_t37, 0, _t37.length - 1, null, !0);
        }
        for (var _t38 of io(l).values()) Gn(_t38, null, !0);
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
        n = tc(t, e, En);
      }
      (n.setDecoratorBoundaryAnchor("leading", fo(t.getFirstChild())),
        n.setDecoratorBoundaryAnchor("trailing", fo(t.getLastChild())));
    }
    function go(t, e, n) {
      var o = tc(e, n, En),
        r = (function (t, e) {
          if (t) {
            var _n29 = t.__last;
            if (_n29) {
              var _t39 = e.get(_n29);
              if (_t39)
                return la(_t39)
                  ? "line-break"
                  : Gr(_t39) && _t39.isInline()
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
        var _r12 = o;
        for (; null !== _r12; ) {
          var _t40 = $n.get(_r12);
          if (void 0 === _t40) {
            _r12 = null;
            break;
          }
          if (_t40.__parent === _e43) break;
          _r12 = _t40.__parent;
        }
        if (null !== _r12 && !n.has(_r12)) {
          var _t41 = $n.get(o);
          if (ki(_t41))
            return ((wn = _t41.getFormat()), void (An = _t41.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Dn;
    }
    function _o(t, n) {
      var o = Bn.get(t);
      var r = $n.get(t);
      (void 0 !== o && void 0 !== r) || e(61);
      var i = Jn || Kn.has(t) || Ln.has(t),
        s = ll(En, t);
      if (o === r && !i) {
        var _t42;
        if (Hr(o)) {
          var _n30 = s.__lexicalTextContent;
          ("string" != typeof _n30 && e(355, o.getType()),
            (_t42 = _n30),
            Fn(s));
        } else _t42 = o.getTextContent();
        return ((Mn += _t42), s);
      }
      if (
        (o !== r && i && nl(Hn, On, Rn, r, "updated"),
        Vn.$updateDOM(r, o, s, En))
      ) {
        var _o14 = ao(t, null);
        return (
          null === n && e(62),
          n.replaceChild(_o14, s),
          Gn(t, null),
          _o14
        );
      }
      if (Hr(o)) {
        Hr(r) || e(334, t);
        var _n31 = r.__indent;
        (Jn || _n31 !== o.__indent) && Zn(s, _n31);
        var _l6 = r.__format;
        (Jn || _l6 !== o.__format) && to(s, _l6);
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
                    !Jn &&
                    Math.abs(a) <= 1 &&
                    i >= kn &&
                    t.__first === n.__first &&
                    (0 !== a || !En._cloneNotNeeded.has(t.__key))
                  ) {
                    var _i10 = c.__lexicalTextContent,
                      _u3 = jn.get(t.__key);
                    if (
                      !Jn &&
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
                          var _t43 = $n.get(o);
                          if (void 0 === _t43) return null;
                          ((o = _t43.__prev), i++);
                        }
                        return i !== n || (null !== o && e.has(o)) ? null : r;
                      })(n, _u3);
                      if (null !== _s8) {
                        var _f2 = _u3.size;
                        if (0 === a) {
                          var _t44 = Tn(_s8, _f2);
                          var _o15 = _s8,
                            _a2 = 0;
                          for (; null !== _o15 && _a2 < _f2; ) {
                            var _t45 = $n.get(_o15);
                            if (void 0 === _t45) break;
                            var _e44 = In();
                            (_o(_o15, l),
                              ki(_t45) &&
                                null === wn &&
                                ((wn = _t45.getFormat()),
                                (An = _t45.getStyle()),
                                (Dn = _t45.__key)),
                              Pn(_e44),
                              (_o15 = _t45.__next),
                              _a2++);
                          }
                          var _d3 = "";
                          for (
                            _o15 = _s8, _a2 = 0;
                            null !== _o15 && _a2 < _f2;
                          ) {
                            var _t46 = $n.get(_o15);
                            if (void 0 === _t46) break;
                            var _n33 = void 0;
                            if (Hr(_t46)) {
                              var _r13 = En._keyToDOMMap.get(_o15),
                                _i11 = _r13 && _r13.__lexicalTextContent;
                              ("string" != typeof _i11 &&
                                e(352, _t46.getType()),
                                (_n33 = _i11));
                            } else _n33 = _t46.getTextContent();
                            ((_d3 += _n33),
                              _a2 < _f2 - 1 &&
                                Hr(_t46) &&
                                !_t46.isInline() &&
                                (_d3 += T),
                              (_o15 = _t46.__next),
                              _a2++);
                          }
                          var _h2 = c.__lexicalSlotTextLength || 0,
                            _g2 = _h2 > 0 ? _i10.slice(_h2) : _i10,
                            _p2 = _g2.slice(0, _g2.length - _t44) + _d3;
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
                            for (var _t47 = 0; _t47 < a - 1; _t47++) {
                              if (null === u) return !1;
                              var _t48 = Bn.get(u);
                              if (void 0 === _t48) return !1;
                              u = _t48.__prev;
                            }
                            if (null === u) return !1;
                            var f = $n.get(s),
                              d = Bn.get(u);
                            if (void 0 === f || void 0 === d) return !1;
                            if (f.__prev !== d.__prev) return !1;
                            var h = [];
                            var g = s;
                            for (var _t49 = 0; _t49 < l; _t49++) {
                              if (null === g) return !1;
                              h.push(g);
                              var _t50 = $n.get(g);
                              g = _t50 ? _t50.__next : null;
                            }
                            var p = [];
                            g = u;
                            for (var _t51 = 0; _t51 < a; _t51++) {
                              if (null === g) return !1;
                              p.push(g);
                              var _t52 = Bn.get(g);
                              g = _t52 ? _t52.__next : null;
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
                            for (var _t53 of m) {
                              var _e45 = In();
                              if ("reconcile" === _t53.kind)
                                _o(_t53.key, o.element);
                              else if ("destroy" === _t53.kind)
                                Gn(_t53.key, o.element);
                              else {
                                var _e46 = null;
                                for (
                                  var _n34 = _t53.nextIndex + 1;
                                  _n34 < l;
                                  _n34++
                                ) {
                                  var _t54 = En._keyToDOMMap.get(h[_n34]);
                                  if (void 0 !== _t54) {
                                    _e46 = _t54;
                                    break;
                                  }
                                }
                                ao(
                                  _t53.key,
                                  o.withBefore(_e46 != null ? _e46 : o.before),
                                );
                              }
                              if ("destroy" !== _t53.kind) {
                                var _e47 = $n.get(_t53.key);
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
                            for (var _t55 = 0; _t55 < l; _t55++) {
                              var _n35 = $n.get(h[_t55]);
                              if (void 0 === _n35) return !1;
                              var _o16 = void 0;
                              if (Hr(_n35)) {
                                var _r14 = En._keyToDOMMap.get(h[_t55]),
                                  _i12 = _r14 && _r14.__lexicalTextContent;
                                ("string" != typeof _i12 &&
                                  e(350, _n35.getType()),
                                  (_o16 = _i12));
                              } else _o16 = _n35.getTextContent();
                              ((v += _o16),
                                _t55 < l - 1 &&
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
                          var _t56 = c.__lexicalTextContent;
                          return (
                            "string" != typeof _t56 && e(353),
                            (Mn = r + _t56),
                            void po(n, c, _u3)
                          );
                        }
                      }
                    }
                    if (0 === a) {
                      var _n36 = t.__first,
                        _o17 = 0;
                      for (; null !== _n36; ) {
                        var _t57 = $n.get(_n36);
                        if (void 0 === _t57) break;
                        var _r15 = Jn || Kn.has(_n36) || Ln.has(_n36),
                          _i13 = In();
                        if (_r15) _o(_n36, l);
                        else {
                          var _o18 = void 0,
                            _r16 = void 0;
                          if (Hr(_t57)) {
                            _r16 = Wn.get(_n36);
                            var _i14 = _r16 && _r16.__lexicalTextContent;
                            ("string" != typeof _i14 && e(354, _t57.getType()),
                              (_o18 = _i14));
                          } else _o18 = _t57.getTextContent();
                          ((Mn += _o18), void 0 !== _r16 && Fn(_r16));
                        }
                        (ki(_t57)
                          ? null === wn &&
                            ((wn = _t57.getFormat()),
                            (An = _t57.getStyle()),
                            (Dn = _t57.__key))
                          : Hr(_t57) &&
                            _o17 < s - 1 &&
                            !_t57.isInline() &&
                            (Mn += T),
                          Pn(_i13),
                          (_n36 = _t57.__next),
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
                    var _e48 = t.__first,
                      _r17 = n.__first;
                    if (_e48 === _r17) _o(_e48, l);
                    else {
                      var _t58 = Co(_e48),
                        _n37 = ao(_r17, null);
                      try {
                        _t58.parentNode === l
                          ? l.replaceChild(_n37, _t58)
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
                            _r17 +
                            "}, old child: {tag: " +
                            _t58.tagName +
                            ", key: " +
                            _e48 +
                            "}.";
                          throw new Error(_i15);
                        }
                        throw o;
                      }
                      Gn(_e48, null);
                    }
                    var _i16 = $n.get(_r17);
                    ki(_i16) &&
                      null === wn &&
                      ((wn = _i16.getFormat()),
                      (An = _i16.getStyle()),
                      (Dn = _i16.__key));
                  } else {
                    var _r18 = Xc(t, Bn),
                      _c5 = Xc(n, $n);
                    if (
                      (_r18.length !== i && e(227),
                      _c5.length !== s && e(228),
                      0 === i)
                    )
                      0 !== s && uo(_c5, n, 0, s - 1, o);
                    else if (0 === s) {
                      if (0 !== i) {
                        var _t59 =
                          null == o.after &&
                          null == o.before &&
                          0 === io(n).size &&
                          null == o.element.__lexicalLineBreak;
                        (qn(_r18, 0, i - 1, _t59 ? null : l),
                          _t59 && (l.textContent = ""));
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
                          var _t60 = e[f],
                            _o19 = n[d],
                            _r19 = In();
                          if (_t60 === _o19)
                            ((u = mo(_o(_o19, i.element))), f++, d++);
                          else {
                            if ((void 0 === a && (a = xo(n, d)), void 0 === c))
                              c = xo(e, f);
                            else if (!c.has(_t60)) {
                              (f++, Pn(_r19));
                              continue;
                            }
                            if (!a.has(_t60)) {
                              var _e49 = Co(_t60);
                              (_e49.parentNode === i.element && (u = mo(_e49)),
                                Gn(_t60, i.element),
                                f++,
                                c["delete"](_t60),
                                Pn(_r19));
                              continue;
                            }
                            if (c.has(_o19)) {
                              var _t61 = ll(En, _o19);
                              (_t61 !== u &&
                                i
                                  .withBefore(u != null ? u : i.before)
                                  .insertChild(_t61),
                                (u = mo(_o(_o19, i.element))),
                                f++,
                                d++);
                            } else {
                              var _t62 = ao(
                                _o19,
                                i.withBefore(u != null ? u : i.before),
                              );
                              (null !== u &&
                                u.parentNode !== i.element &&
                                (u = mo(_t62)),
                                d++);
                            }
                          }
                          var _s9 = $n.get(_o19);
                          (null !== _s9 && ki(_s9)
                            ? null === wn &&
                              ((wn = _s9.getFormat()),
                              (An = _s9.getStyle()),
                              (Dn = _s9.__key))
                            : Hr(_s9) && d <= l && !_s9.isInline() && (Mn += T),
                            Pn(_r19));
                        }
                        var h = f > s,
                          g = d > l;
                        if (h && !g) {
                          var _e50 = n[l + 1],
                            _o20 =
                              void 0 === _e50 ? null : En.getElementByKey(_e50);
                          uo(
                            n,
                            t,
                            d,
                            l,
                            i.withBefore(_o20 != null ? _o20 : i.before),
                          );
                        } else g && !h && qn(e, f, s, i.element);
                      })(n, _r18, _c5, i, s, o);
                  }
                  ((c.__lexicalTextContent = Mn),
                    (c.__lexicalFirstTextKey = Dn),
                    (Mn = r + Mn));
                })(t, n, tc(n, o, En)),
                Sl(n) ||
                  (r &&
                    ((i = n),
                    null == wn ||
                      wn === i.__textFormat ||
                      Yn ||
                      i.setTextFormat(wn),
                    (function (t) {
                      null == An ||
                        An === t.__textStyle ||
                        Yn ||
                        t.setTextStyle(An);
                    })(n))));
            })(o, r, s, o !== r || Ln.has(t)),
            r.isInline() || (Qr(r) || go(0, r, s), ho(r, s)),
            "" !== _c4)
          ) {
            var _t63 = s.__lexicalTextContent || "";
            ((s.__lexicalTextContent = _c4 + _t63),
              (Mn = _n32 + _c4 + _t63),
              (s.__lexicalSlotTextLength = _c4.length));
          } else
            (io(r).size > 0 || io(o).size > 0) &&
              (s.__lexicalSlotTextLength = 0);
          if (Cn(r)) {
            var _t64 = r.getTextContent();
            ((s.__lexicalTextContent = _t64), (Mn = _n32 + _t64));
          }
        } else {
          var _t65 = s.__lexicalTextContent;
          ("string" != typeof _t65 && e(356, o.getType()), (Mn += _t65), Fn(s));
        }
        if (
          (Jn || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (eo(s, r), Qr(r) && !Jn)
        )
          for (var _t66 of r.getChildren())
            Hr(_t66) && eo(ll(En, _t66.getKey()), _t66);
      } else {
        var _e51 = r.getTextContent();
        if (Gr(r)) {
          var _e52 = r.decorate(En, bn);
          (null !== _e52 && yo(t, _e52),
            i && (io(r).size > 0 || io(o).size > 0) && co(o, r, s));
        }
        Mn += _e51;
      }
      if (!Yn && Qr(r)) {
        var _t67 = r.getLatest();
        if (_t67.__cachedText !== Mn) {
          var _e53 = _t67.getWritable();
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
      for (var _o21 = e; _o21 < t.length; _o21++) n.add(t[_o21]);
      return n;
    }
    function So(t, e, n, o, r, i) {
      ((Mn = ""),
        (wn = null),
        (An = null),
        (Dn = null),
        (Jn = 2 === o),
        (En = n),
        (bn = n._config),
        (Vn = n._config.dom || ga),
        (On = n._nodes),
        (Rn = En._listeners.mutation),
        (Ln = r),
        (Kn = i),
        (Bn = t._nodeMap),
        (zn = t),
        ($n = e._nodeMap),
        (Yn = e._readOnly),
        (Wn = qt(n._keyToDOMMap)),
        (jn = (function () {
          var t = new Map(),
            e = function e(_e55) {
              for (var _n38 of _e55) {
                var _e54 = $n.get(_n38);
                if (void 0 === _e54) continue;
                var _o22 = _e54.__parent;
                if (null === _o22) continue;
                var _r20 = t.get(_o22);
                (void 0 === _r20 && ((_r20 = new Set()), t.set(_o22, _r20)),
                  _r20.add(_n38));
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
        (Vn = ga),
        s
      );
    }
    function Co(t) {
      var n = Wn.get(t);
      return (void 0 === n && e(75, t), n);
    }
    function vo(t, n, o) {
      wa();
      var r = t.__key,
        i = t.getParent();
      if (null === i) return void (null !== ud(t) && e(367, r, String(ud(t))));
      var s = (function (t) {
        var e = Rf();
        if (!of(e) || !Hr(t)) return e;
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
      if (of(s) && n) {
        var _e56 = s.anchor,
          _n39 = s.focus;
        (_e56.key === r &&
          (zf(_e56, t, i, t.getPreviousSibling(), t.getNextSibling()),
          (l = !0)),
          _n39.key === r &&
            (zf(_n39, t, i, t.getPreviousSibling(), t.getNextSibling()),
            (l = !0)));
      } else sf(s) && n && t.isSelected() && t.selectPrevious();
      (od(t.getWritable(), n && !l && of(s) ? s : null),
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
        var _zc = zc(this),
          t = _zc.ownNodeType;
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
        var n = e["extends"] || Qc(this.constructor);
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
          t = null !== _e57.__parent ? _e57.__parent : ud(_e57);
        }
        return !1;
      };
      _proto7.isSelected = function isSelected(t) {
        var e = t || Rf();
        if (null == e) return !1;
        var n = (function (t, e) {
          var n = t.getNodes();
          if (n === t.getCachedNodes()) {
            var _t68 = oc.get(n);
            if (
              (null === _t68
                ? ((_t68 = new Set(
                    n.map(function (t) {
                      return t.__key;
                    }),
                  )),
                  oc.set(n, _t68))
                : void 0 === _t68 && oc.set(n, null),
              _t68)
            )
              return _t68.has(e);
          }
          return n.some(function (t) {
            return t.__key === e;
          });
        })(e, this.__key);
        if (!n || ki(this)) return n;
        if (
          of(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t69 = this.getParent();
          if (Gr(this) && this.isInline() && _t69) {
            var _n40 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t69.is(_n40.getNode()) &&
              _n40.offset === _t69.getChildrenSize() &&
              this.is(_t69.getLastChild())
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
          if (Sl(_n41) || null !== ud(t))
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
        return sd(this.getPreviousSibling(), "previous").reverse();
      };
      _proto7.getNextSibling = function getNextSibling() {
        var t = this.getLatest().__next;
        return null === t ? null : Ms(t);
      };
      _proto7.getNextSiblings = function getNextSiblings() {
        return sd(this.getNextSibling(), "next");
      };
      _proto7.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto7.isBefore = function isBefore(t) {
        var n = ah(this, t);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === sh(n)
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
          var _t70 =
            r && Hr(o) ? (e ? o.getFirstChild() : o.getLastChild()) : null;
          null !== _t70 && i++;
          var _n42 = _t70 || (e ? o.getNextSibling() : o.getPreviousSibling());
          ((r = null !== _n42), (o = _n42 || o.getParent()));
        }
        return e ? n : n.reverse();
      };
      _proto7.isDirty = function isDirty() {
        var t = Ia()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto7.getLatest = function getLatest() {
        if (No(this)) return this;
        var t = Ms(this.__key);
        return (null === t && e(442, this.__key, this.__type), t);
      };
      _proto7.getWritable = function getWritable() {
        if (No(this)) return this;
        (wa(), (ic = null));
        var t = Da(),
          n = Ia(),
          o = this.__key,
          r = n._cloneNotNeeded,
          i = r.get(o),
          s = t._selection;
        if ((null !== s && s.setCachedNodes(null), void 0 !== i))
          return (ks(i), i);
        var l = t._nodeMap,
          c = l.get(o);
        void 0 === c && e(442, o, this.__type);
        var a = fc(c);
        return (r.set(o, a), l.set(o, a), ks(a), a);
      };
      _proto7.getTextContent = function getTextContent() {
        return Nd(this);
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
        return { element: Zl(t).$createDOM(this, t) };
      };
      _proto7.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = (function (t, e) {
            var n = vc(Cc(t.constructor)),
              o = n.generated,
              r = n.isCompactDefault,
              i = null === o ? void 0 : e ? o.exportCompactJSON : o.exportJSON;
            return void 0 === i
              ? (function (t, e, n) {
                  var o = n ? { type: t.__type } : {};
                  return (
                    Hr(t) && (o.children = []),
                    (function (t, e, n, o) {
                      for (var _r21 = 0; _r21 < e.length; _r21++) {
                        var _i17 = e[_r21];
                        if (o && _i17.derived) continue;
                        var _s0 = void 0;
                        if ("ownField" === _i17.kind) {
                          var _e58 = Fc(t)[_i17.field];
                          _s0 =
                            void 0 === _i17.getterTable
                              ? _e58
                              : je(_i17.getterTable, _e58)
                                ? _i17.getterTable[_e58]
                                : void 0;
                        } else _s0 = _i17.getter.call(t);
                        ("ownField" === _i17.kind &&
                          void 0 !== _i17.when &&
                          ((!Rc(_i17, _s0) && _i17.when.call(t)) ||
                            (_s0 = void 0)),
                          (o && Rc(_i17, _s0)) || (n[_i17.key] = _s0));
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
        return Bc(gn(this, t), t);
      };
      bo.transform = function transform() {
        return null;
      };
      _proto7.remove = function remove(t) {
        vo(this, !0, t);
      };
      _proto7.replace = function replace(t, n) {
        wa();
        var o = Rf();
        (null !== o && (o = o.clone()), Tl(this, t));
        var r = this.getLatest(),
          i = this.__key,
          s = fd(r);
        null !== s && e(400, i, r.getType(), s.getKey(), s.getType());
        var l = t.__key,
          c = t.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent();
        od(c, of(o) ? o : null);
        var d = r.getPreviousSibling(),
          h = r.getNextSibling();
        (vo(r, !1, !0),
          ed(a, c, d && d.getWritable(), h && h.getWritable()),
          (a.__size = null !== f && f.is(a) ? u - 1 : u));
        var g = 0;
        if (
          (n &&
            ((Hr(this) && Hr(c)) || e(139),
            (g = c.getChildrenSize()),
            c.splice(g, 0, this.getChildren())),
          of(o))
        ) {
          Bs(o);
          for (var _t71 of [o.anchor, o.focus])
            _t71.key === i &&
              (n && "element" === _t71.type
                ? _t71.set(c.__key, g + _t71.offset, "element")
                : Xu(_t71, c));
        }
        return (Es() === i && bs(l), c);
      };
      _proto7.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        return rd(this, "next", t, e);
      };
      _proto7.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        return rd(this, "previous", t, e);
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
        return id(Wd(this, "previous"), t, e);
      };
      _proto7.selectNext = function selectNext(t, e) {
        return id(Wd(this, "next"), t, e);
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
        o = Ia()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function Ko(t) {
      var e = t;
      if (Os(e)) return;
      if ("" === e.__text && e.isSimpleText() && !e.isUnmergeable())
        return void e.remove();
      var n = Ia(),
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
        var _o23 = void 0,
          _r22 = void 0;
        if (
          (_n43 === _e59.getChildrenSize()
            ? ((_o23 = _e59.getChildAtIndex(_n43 - 1)), (_r22 = !0))
            : ((_o23 = _e59.getChildAtIndex(_n43)), (_r22 = !1)),
          ki(_o23))
        ) {
          t.set(_o23.__key, _r22 ? _o23.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Hr(_o23)) break;
        t.set(_o23.__key, _r22 ? _o23.getChildrenSize() : 0, "element", !0);
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
          !jc(_e60.isInline)
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
      for (var _ref37 of Yc(t)) {
        var _e62 = _ref37.ownNodeConfig;
        if (_e62 && void 0 !== _e62.children) return _e62.children;
      }
    }
    function Uo(t) {
      var e = $o.get(t);
      if (void 0 === e) {
        var _n45 = {},
          _o24 = {};
        var _r23 = !1;
        for (var _ref39 of Yc(t)) {
          var _e63 = _ref39.klass;
          var _i18 = _ref39.ownNodeConfig;
          _i18 &&
            (void 0 === _o24.inline &&
              void 0 !== _i18.inline &&
              ((_n45.inline = _i18.inline), (_o24.inline = _e63)),
            void 0 === _o24.children &&
              void 0 !== _i18.children &&
              ((_n45.children = _i18.children), (_o24.children = _e63)),
            _r23 ||
              void 0 === _i18.mergeAdjacent ||
              ((_r23 = !0),
              !1 !== _i18.mergeAdjacent &&
                ((_n45.mergeAdjacent = _i18.mergeAdjacent),
                (_o24.mergeAdjacent = _e63))));
        }
        var _i19 = (function (t) {
          var e = new Set(),
            n = Ac(t);
          for (var _t72 of Object.keys(n))
            !0 === n[_t72].derived && e.add(_t72);
          for (var _ref41 of Yc(t)) {
            var _n46 = _ref41.ownNodeConfig;
            {
              var _t73 = _n46 && _n46.stateConfigs;
              if (_t73)
                for (var _n47 of _t73) {
                  var _t74 = _n47 instanceof sn ? _n47 : _n47.stateConfig;
                  _t74.derived && e.add(_t74.key);
                }
            }
          }
          return e;
        })(t);
        (void 0 !== _o24.inline &&
          _o24.inline !== t &&
          void 0 !== Wo(t, _o24.inline) &&
          Wo(t, _o24.inline) !== _n45.inline &&
          (delete _n45.inline, delete _o24.inline),
          void 0 === _o24.mergeAdjacent ||
            _o24.mergeAdjacent === t ||
            (null ===
              (function (t, e, n) {
                var o = Ac(t);
                for (var _t75 of e.by)
                  if ("string" == typeof _t75) {
                    if (!(_t75 in o)) return { entry: _t75, reason: "unknown" };
                    if (n.has(_t75)) return { entry: _t75, reason: "derived" };
                  } else if (_t75.derived)
                    return { entry: String(_t75.key), reason: "derived-state" };
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
            (delete _n45.mergeAdjacent, delete _o24.mergeAdjacent),
          (e = Object.freeze(
            babelHelpers["extends"]({}, _n45, {
              declaredBy: Object.freeze(_o24),
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
          for (var _ref43 of Yc(t)) {
            var _n49 = _ref43.ownNodeConfig;
            var _o25 = _ref43.ownNodeType;
            if (
              void 0 !== _n49 &&
              "overflow" === _o25 &&
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
    function Jo(t) {
      if (ki(t) || la(t) || Vo(t)) return !0;
      try {
        return t.isInline();
      } catch (t) {
        return !0;
      }
    }
    function Yo(t) {
      return ki(t) || la(t) || (Gr(t) && Jo(t));
    }
    function Go(t, e) {
      if (Vo(e)) return !0;
      if ("inline" === t) return Jo(e);
      if ("block" === t) return !Jo(e);
      if (Jo(e)) return t.includes("inline");
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
        var _o26 = t;
        null !== _o26;
        _o26 = Hr(_o26)
          ? e
            ? _o26.getLastChild()
            : _o26.getFirstChild()
          : null
      )
        n.push(_o26.getKey());
      return n;
    }
    function Zo(t) {
      if ("text" === t.type) return { offset: t.offset, text: t.key };
      var e = t.getNode();
      if (!Hr(e)) return null;
      var n = Math.min(t.offset, e.getChildrenSize()),
        o = n > 0 ? e.getChildAtIndex(n - 1) : null,
        r = e.getChildAtIndex(n);
      if (null !== o && Yo(o)) return { after: !0, keys: [o.getKey()] };
      if (null !== r && Yo(r)) return { after: !1, keys: [r.getKey()] };
      var i = o,
        s = r;
      var l = qo(e);
      if ("inline" === l || (Array.isArray(l) && l.includes("inline"))) {
        for (; null !== i && tr(i); ) i = i.getPreviousSibling();
        for (; null !== s && tr(s); ) s = s.getNextSibling();
        null === i && null === s && ((i = o), (s = r));
      }
      return null !== i && Yo(i)
        ? { after: !0, keys: [i.getKey()] }
        : null !== s && Yo(s)
          ? { after: !1, keys: [s.getKey()] }
          : null !== s
            ? { after: !1, keys: Qo(s, !1) }
            : null !== i
              ? { after: !0, keys: Qo(i, !0) }
              : { inside: e.getKey() };
    }
    function tr(t) {
      if (!Hr(t) || Xi(t) || Jo(t)) return !1;
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
          var _t76 = this.pathByParent.get(n);
          (void 0 === _t76 &&
            ((_t76 = new Set()), this.pathByParent.set(n, _t76)),
            _t76.add(e));
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
        for (var _t77 of n) {
          var _n51 = Ms(_t77);
          null !== _n51 && _n51.getLatest().__parent === e && r.push(_n51);
        }
        return (this.childrenCache.set(e, { nodes: r, size: n.size }), r);
      };
      _proto8.addPathChain = function addPathChain(t) {
        for (var _e66 = t; null !== _e66; _e66 = _e66.getParent()) {
          var _t78 = _e66.getLatest().__parent,
            _n52 = null === _t78 ? void 0 : this.pathByParent.get(_t78);
          if (void 0 !== _n52 && _n52.has(_e66.getKey())) return;
          this.addPath(_e66);
        }
      };
      _proto8.repath = function repath() {
        for (var _ref45 of Array.from(this.pathByParent)) {
          var _t79 = _ref45[0];
          var _e67 = _ref45[1];
          {
            var _n53 = Ms(_t79);
            if (null === _n53 || !_n53.isAttached()) {
              this.pathByParent["delete"](_t79);
              for (var _t80 of _e67) {
                var _e68 = Ms(_t80);
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
          for (var _t81 of n) {
            var _e69 = Ms(_t81);
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
          var _o27 = this.substitutes.get(t.inside);
          return void 0 !== _o27 && e < 16 ? this.$resolve(_o27, e + 1) : null;
        }
        var n = t.keys,
          o = t.after;
        for (var _t82 = n.length - 1; _t82 >= 0; _t82--) {
          var _r24 = Ms(n[_t82]);
          if (
            null === _r24 ||
            !_r24.isAttached() ||
            null === _r24.getParent()
          ) {
            var _o28 = this.substitutes.get(n[_t82]);
            if (void 0 !== _o28 && e < 16) return this.$resolve(_o28, e + 1);
            continue;
          }
          var _i20 = _r24;
          for (var _e71 = 0; _e71 < _t82; _e71++) {
            var _t83 = _i20.getParent();
            if (
              null === _t83 ||
              Sl(_t83) ||
              null !== (o ? _i20.getNextSibling() : _i20.getPreviousSibling())
            )
              break;
            _i20 = _t83;
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
          var _o29 = i[_n55],
            _r25 = s[_n55];
          if (_o29 !== _r25 && JSON.stringify(_o29) !== JSON.stringify(_r25))
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
        var _t84 = n.getPreviousSibling();
        null !== _t84 && rr(_t84, n);
        _t84 = n.getPreviousSibling()
      )
        n = _t84;
      for (
        var _t85 = n.getNextSibling();
        null !== _t85 && rr(n, _t85);
        _t85 = n.getNextSibling()
      )
        ir(n, _t85, e);
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
          var _o30 = _n57.constructor;
          Uo(_o30).declaredBy.mergeAdjacent === _o30 &&
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
        (nr(_e73, _n58.content),
          (_n58.holder = _e73),
          i.push.apply(i, Array.from(_n58.content)),
          o.push(_e73),
          r.push(_e73));
      }
      var l = t.getParentOrThrow();
      n.written.add(l.getKey());
      var c = o.indexOf(t);
      var a = t;
      for (var _t86 = c - 1; _t86 >= 0; _t86--)
        (rd(a, "previous", o[_t86], !1), (a = o[_t86]));
      a = t;
      for (var _t87 = c + 1; _t87 < o.length; _t87++)
        (rd(a, "next", o[_t87], !1), (a = o[_t87]));
      for (var _t88 of o) (n.addPath(_t88), n.touched.add(_t88.getKey()));
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
            : Jo(n)
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
              : Jo(e)
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
          var _t89 = Cl(e);
          (rd(r[0], "previous", _t89, !1), nr(_t89, r), o.push(_t89), (r = []));
        }
      };
      for (var _o31 of t.getChildren())
        !Jo(_o31) || Vo(_o31)
          ? (i(), Hr(_o31) && dr(_o31, e, n))
          : r.push(_o31);
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
        var _t90 = o.getPreviousSibling();
        n(_t90);
        _t90 = o.getPreviousSibling()
      )
        o = _t90;
      var r = [o];
      for (var _t91 = o.getNextSibling(); n(_t91); _t91 = _t91.getNextSibling())
        r.push(_t91);
      var i = o.createParentElementNode();
      (rd(o, "previous", i, !1),
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
          (_n60.isInline !== _Ur4.prototype.isInline && !jc(_n60.isInline))),
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
        for (var _t92 of i) _t92.getLatest().__parent === r && hr(_t92, o);
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
                  var _c$content;
                  ("inline" !== a && "line" !== a) || c.content.push(sa());
                  var _t93 = _u4.getChildren();
                  (0 === _t93.length &&
                    l.push({
                      at: c.content.length,
                      paragraph: _u4,
                      segment: c,
                    }),
                    (_c$content = c.content).push.apply(
                      _c$content,
                      Array.from(_t93),
                    ),
                    (a = "line"));
                  continue;
                }
                var _d4 = Jo(_u4) ? "inline" : "block";
                ("inline" === _d4 && "line" === a && c.content.push(sa()),
                  c.content.push(_u4),
                  (a = _d4));
              }
              s.push(c);
              var u = cr(t, s, n);
              for (var _ref47 of l) {
                var _e75 = _ref47.paragraph;
                var _o32 = _ref47.segment;
                var _r26 = _ref47.at;
                {
                  var _i21 = _r26 > 0 ? _o32.content[_r26 - 1] : void 0,
                    _s1 = _o32.content[_r26];
                  n.substitutes.set(
                    _e75.getKey(),
                    void 0 !== _i21
                      ? { after: !0, keys: Qo(_i21, !0) }
                      : void 0 !== _s1
                        ? { after: !1, keys: Qo(_s1, !1) }
                        : { inside: (_o32.holder || t).getKey() },
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
              for (var _t94 = 0; _t94 < r.length; _t94++) {
                var _e76 = r[_t94],
                  _c6 = i[_t94];
                if ("lift" !== _c6) {
                  if (((l.hadChildren = !0), "keep" === _c6))
                    l.content.push(_e76);
                  else if ("flatten" === _c6) {
                    var _t95 = Gc(o);
                    (nr(_t95, _e76.getChildren()),
                      n.substitutes.set(_e76.getKey(), {
                        inside: _t95.getKey(),
                      }),
                      l.content.push(_t95));
                  } else {
                    var _n61 = [_e76];
                    for (
                      ;
                      Jo(_e76) &&
                      _t94 + 1 < r.length &&
                      "wrap" === i[_t94 + 1] &&
                      Jo(r[_t94 + 1]);
                    )
                      _n61.push(r[++_t94]);
                    var _s10 = Gc(o);
                    (nr(_s10, _n61), l.content.push(_s10));
                  }
                } else
                  (s.push(l, { lifted: _e76 }),
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
              o = (Sl(t) ? 1 : 0) + (Jo(t) ? 2 : 0);
            var r = gr.get(n);
            if (void 0 === r) {
              var _e77 = Ql().getEditorState()._nodeMap.get(t.getKey());
              r = void 0 === _e77 ? void 0 : gr.get(_e77);
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
      else for (var _t96 of i) lr(_t96, e, !0);
      return !1;
    }
    function xr(t) {
      return Vo(t) || (Jo(t) && !t.canBeEmpty());
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
      for (var _t97 of [n, o])
        null !== _t97 && (e.addPath(_t97), e.touched.add(_t97.getKey()));
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
        var _e78 = t.getFirstChild();
        null !== _e78;
        _e78 = _e78.getNextSibling()
      )
        if (!Tr(_e78) && !Go("block", _e78)) return !0;
      return !1;
    }
    function kr(t, e) {
      var n = Rf(),
        o = of(n)
          ? [n.anchor, n.focus].map(function (t) {
              return { anchor: Zo(t), point: t };
            })
          : [];
      e(t);
      for (var _e79 of t.written) {
        var _t98 = Ms(_e79);
        if (null !== _t98 && _t98.isAttached())
          for (
            var _e80 = _t98;
            null !== _e80 && !Qr(_e80);
            _e80 = _e80.getParent()
          )
            _e80.markDirty();
      }
      if (t.changed)
        for (var _ref49 of o) {
          var _e81 = _ref49.point;
          var _n63 = _ref49.anchor;
          {
            var _o33 = _n63 && t.$resolve(_n63);
            _o33 && _e81.set(_o33[0], _o33[1], _o33[2]);
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
              var t = Ra();
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
    function jr(t) {
      if (Sl(t) && !Er(Ia())) {
        var _e82 = null;
        for (var _n64 of t.getChildren())
          _e82 = _n64.isInline()
            ? (_e82 || _n64.replace(_n64.createParentElementNode())).append(
                _n64,
              )
            : null;
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
        return sd(this.getFirstChild(), "next");
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
        return 0 === this.getChildrenSize() && 0 === _d(this).length;
      };
      _proto9.isDirty = function isDirty() {
        var t = Ia()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto9.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto9.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e83 of _d(this)) {
          var _n65 = yd(this, _e83);
          if (Hr(_n65)) for (var _e84 of _n65.getAllTextNodes()) t.push(_e84);
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
          var _e85 = t.getFirstChild();
          if (null === _e85) break;
          t = _e85;
        }
        return t;
      };
      _proto9.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Hr(t); ) {
          var _e86 = t.getLastChild();
          if (null === _e86) break;
          t = _e86;
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
        var t = Nd(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o34 = 0; _o34 < n; _o34++) {
          var _r27 = e[_o34];
          ((t += _r27.getTextContent()),
            Hr(_r27) && _o34 !== n - 1 && !_r27.isInline() && (t += T));
        }
        return t;
      };
      _proto9.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n67 of pd(t).values()) {
            var _t99 = Ms(_n67);
            null !== _t99 && (e += _t99.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o35 = 0; _o35 < n; _o35++) {
          var _r28 = e[_o35];
          ((t += _r28.getTextContentSize()),
            Hr(_r28) && _o35 !== n - 1 && !_r28.isInline() && (t += 2));
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
          var _e87 = D[t];
          return 0 !== (this.getFormat() & _e87);
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
        wa();
        var n = Rf();
        var o = t,
          r = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t100 = this.getFirstChild();
            if (ki(_t100) || Hr(_t100)) return _t100.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t101 = this.getLastChild();
            if (ki(_t101) || Hr(_t101)) return _t101.select();
          }
        (void 0 === o && (o = i), void 0 === r && (r = i));
        var s = this.__key;
        return of(n)
          ? (n.anchor.set(s, o, "element"),
            n.focus.set(s, r, "element"),
            (n.dirty = !0),
            n)
          : Mf(s, o, s, r, "element", "element");
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
        for (var _t102 of o);
        var s = i.__key,
          l = [];
        var c = [],
          a = this.getChildAtIndex(t + n),
          u = null,
          f = r - n + o.length;
        if (0 !== t)
          if (t === r) u = this.getLastChild();
          else {
            var _e88 = this.getChildAtIndex(t);
            null !== _e88 && (u = _e88.getPreviousSibling());
          }
        n > 0 &&
          (c = (function (t, n, o, r) {
            var i = [];
            var s = n;
            for (var _t103 = 0; _t103 < o; _t103++) {
              null === s && e(100);
              var _t104 = s.getNextSibling();
              (i.push(s.getWritable()), (s = _t104));
            }
            var l = r && r.getWritable(),
              c = s && s.getWritable();
            return (
              Zf(t, l, c),
              (t.__size -= i.length),
              i.map(function (e) {
                return (
                  td(e, t),
                  (e.__prev = null),
                  (e.__next = null),
                  (e.__parent = null),
                  e.__key
                );
              })
            );
          })(i, null === u ? this.getFirstChild() : u.getNextSibling(), n, u));
        var d = o.length > 0 && null !== u ? u.getWritable() : null;
        for (var _t105 of o) {
          (null !== d &&
            _t105.is(d) &&
            ((u = d.getPreviousSibling()), (d = u && u.getWritable())),
            null !== a && _t105.is(a) && (a = a.getNextSibling()));
          var _n68 = _t105.getWritable();
          (_n68.__parent === s && f--, nd(_n68));
          var _o36 = _t105.__key;
          (ed(i, _n68, d, a && a.getWritable()),
            _t105.__key === s && e(76),
            l.push(_o36),
            (d = _n68));
        }
        if (((i.__size = f), c.length)) {
          var _t106 = Rf();
          if (of(_t106)) {
            var _e89 = new Set(c),
              _n69 = new Set(l);
            for (var _o37 of [_t106.anchor, _t106.focus])
              Jr(_o37, _e89, _n69) && zf(_o37, _o37.getNode(), this, u, a);
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
        if (Ul(e)) {
          var _t107 = this.getIndent();
          _t107 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t107 + "px"),
            e.setAttribute("data-lexical-indent", String(_t107)));
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
                  var t = Da();
                  if (!t._readOnly) {
                    var _e90 = Ra();
                    if (
                      null === _e90 ||
                      _e90._pendingEditorState !== t ||
                      0 !== _e90._dirtyType ||
                      !_e90._editorState._readOnly
                    )
                      return null !== ic && ic.editorState === t
                        ? ic.holds
                        : null;
                    t = _e90._editorState;
                  }
                  var e = rc.get(t);
                  return (void 0 === e && ((e = new Map()), rc.set(t, e)), e);
                })(),
              );
            for (
              var _e91 = t.getFirstChild();
              null !== _e91;
              _e91 = _e91.getNextSibling()
            )
              if (ki(_e91)) return !0;
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
          var n = tc(_this14, t, e);
          var o = n.element;
          (n.after && n.after.parentNode !== o && (n = n.withAfter(null)),
            n.before && n.before.parentNode !== o && (n = n.withBefore(null)));
          var r = n.getManagedLineBreak();
          r && n.insertManagedLineBreak("IMG" === r.nodeName);
          var i = n.getFirstChild();
          for (var _t108 of _this14.getChildrenKeys()) {
            var _r29 = e.getElementByKey(_t108);
            if (!_r29) continue;
            var _s11 = void 0,
              _l7 = i;
            for (; _l7 && !(_s11 = Ds(_l7, e)) && _c(_l7); )
              _l7 = _l7.nextSibling;
            (_l7 !== _r29 &&
              o.insertBefore(_r29, _s11 ? _l7 : i || n.getInsertionAnchor()),
              (i = _r29.nextSibling));
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
    function Jr(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t109 = o.__key;
        if (e.has(_t109) && !n.has(_t109)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _Yr = (function (_bo2) {
      function Yr(t) {
        var _this2;
        ((_this2 = _bo2.call(this, t) || this),
          (_this2.__slotHost = null),
          (_this2.__slots = null));
        return _this2;
      }
      babelHelpers.inheritsLoose(Yr, _bo2);
      var _proto0 = Yr.prototype;
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
      return Yr;
    })(_bo5);
    function Gr(t) {
      return t instanceof _Yr;
    }
    function qr(t) {
      var e = t.getLatest().__cachedText;
      return null === e || (!Ma() && 0 !== Ia()._dirtyType) ? null : e;
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
        for (var _t110 of o) Hr(_t110) || Gr(_t110) || e(282);
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
                      var _r30 = n.trim(),
                        _i22 = o.trim();
                      ("" !== _r30 && "" !== _i22 && (e[_r30] = _i22),
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
      for (var _e92 in r) (delete o[_e92], ti(t, _e92, r[_e92]));
      for (var _e93 in o) t.removeProperty(_e93);
    }
    var ni = Xe()({
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
      for (var _t111 in w) {
        var _o38 = w[_t111];
        if (((s = el(r, _t111)), void 0 !== s))
          if (n & _o38) {
            if (l && ("underline" === _t111 || "strikethrough" === _t111)) {
              e & _o38 && i.remove.apply(i, Array.from(s));
              continue;
            }
            (0 === (e & _o38) ||
              (c && "underline" === _t111) ||
              "strikethrough" === _t111) &&
              i.add.apply(i, Array.from(s));
          } else e & _o38 && i.remove.apply(i, Array.from(s));
      }
      tl(o, "class");
    }
    function si(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? v : ""),
        i = Ql(),
        s = Zl(i).$getDOMSlot(n, e, i),
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
            _t112 = _ref50[0],
            _e94 = _ref50[1],
            _n72 = _ref50[2];
          c.replaceData(_t112, _e94, _n72);
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
        n = Da(),
        o = n._textEdits || (n._textEdits = new WeakMap());
      var r = o.get(e);
      return (void 0 === r && ((r = []), o.set(e, r)), r);
    }
    var fi = null,
      di = null;
    function hi(t) {
      var e = Ia();
      e._recordTextEdits && ui(e).push(["splice", t.__key, 0, 0, t.__text, ""]);
    }
    function gi(t) {
      var e = Ia();
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
          var _t113 = n.firstChild;
          null == _t113 && e(48);
          var _i23 = Pl().createElement(u);
          return (li(_i23, this, 0, s, r, o), n.replaceChild(_i23, _t113), !1);
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
          Ul(n) || e(132),
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
            var n = Ia(),
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
        wa();
        var n = t,
          o = e;
        var r = Rf(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t114 = i.length;
          (void 0 === n && (n = _t114), void 0 === o && (o = _t114));
        } else ((n = 0), (o = 0));
        if (!of(r)) return Mf(s, n, s, o, "text", "text");
        {
          var _t115 = Es();
          ((_t115 !== r.anchor.key && _t115 !== r.focus.key) || bs(s),
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
        var c = Rf();
        if (o && of(c)) {
          var _e95 = t + s;
          c.setTextNodeRange(r, _e95, r, _e95);
        }
        var a = i.slice(0, l) + n + i.slice(l + e),
          u = Ia();
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
        wa();
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
        for (var _e96 = 0, _o39 = 0; _e96 < i && _o39 <= l; _o39++) {
          var _r31 = t[_o39];
          _r31 > _e96 && (s.push(n.slice(_e96, _r31)), (_e96 = _r31));
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
        var m = Rf();
        if (of(m)) {
          var _ref51 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t116 = _ref51[0],
            _e97 = _ref51[1];
          ("text" === _t116.type && _t116.key === o && (_ = _t116),
            "text" === _e97.type && _e97.key === o && (y = _e97));
        }
        if (e.isSegmented())
          ((f = Ni(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = Sn(e, f)),
            (p = !0));
        else {
          var _t117 = fi;
          fi = o;
          try {
            f = e.setTextContent(a);
          } finally {
            fi = _t117;
          }
        }
        var x = [f];
        for (var _t118 = 1; _t118 < c; _t118++) {
          var _n73 = Ni(s[_t118]);
          ((_n73.__format = d),
            (_n73.__style = h),
            (_n73.__detail = g),
            (_n73.__state = Sn(e, _n73)));
          var _i24 = _n73.__key;
          (r === o && bs(_i24), x.push(_n73));
        }
        !(function (t, e, n) {
          var o = Ia();
          if (!o._recordTextEdits) return;
          var r = o._editorState._nodeMap,
            i = Da(),
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
        for (var _t119 of x) {
          if (!_ && !y) break;
          var _e98 = v + _t119.getTextContentSize();
          if (
            (null !== _ &&
              null !== S &&
              S <= _e98 &&
              S >= v &&
              (_.set(_t119.getKey(), S - v, "text"), S < _e98 && (_ = null)),
            null !== y && null !== C && C <= _e98 && C >= v)
          ) {
            y.set(_t119.getKey(), C - v, "text");
            break;
          }
          v = _e98;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            (null !== e && ks(e), null !== n && ks(n));
          })(this);
          var _t120 = u.getWritable(),
            _e99 = this.getIndexWithinParent();
          (p
            ? (_t120.splice(_e99, 0, x), this.remove())
            : _t120.splice(_e99, 1, x),
            of(m) && Bf(m, u, _e99, c - 1));
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
        var l = Rf();
        if (of(l)) {
          var _e100 = l.anchor,
            _i25 = l.focus;
          (null !== _e100 && _e100.key === r && $f(_e100, n, o, t, s),
            null !== _i25 && _i25.key === r && $f(_i25, n, o, t, s));
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
        var f = Ia();
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
      if (!Ul(t)) return !1;
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
          for (var _t121 = 0; _t121 < o.length; _t121++) mi.set(o[_t121], r);
          return r;
        })(n)
      )
        return { node: Vf(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t122 = n,
          _e101 = !0;
        for (; null !== _t122 && null !== (_t122 = Ci(_t122, !1)); ) {
          var _n75 = _t122.textContent || "";
          if (_n75.length > 0) {
            (/[ \t\n]$/.test(_n75) && (o = o.slice(1)), (_e101 = !1));
            break;
          }
        }
        _e101 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t123 = n,
          _e102 = !0;
        for (; null !== _t123 && null !== (_t123 = Ci(_t123, !0)); )
          if (
            (_t123.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e102 = !1;
            break;
          }
        _e102 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: Ni(o) };
    }
    function Ci(t, e) {
      var n = t;
      for (;;) {
        var _t124 = void 0;
        for (; null === (_t124 = e ? n.nextSibling : n.previousSibling); ) {
          var _t125 = n.parentElement;
          if (null === _t125) return null;
          n = _t125;
        }
        if (((n = _t124), Ul(n))) {
          var _t126 = n.style.display;
          if (
            ("" === _t126 && !Yl(n)) ||
            ("" !== _t126 && !_t126.startsWith("inline"))
          )
            return null;
        }
        var _o40 = n;
        for (; null !== (_o40 = e ? n.firstChild : n.lastChild); ) n = _o40;
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
        ? (ki(s) || e(266, s.getType(), r), jd(s, n, i))
        : (Hr(s) || e(267, s.getType(), r), zi(s, t.offset, n));
    }
    function Oi(t, n) {
      var o = n.origin,
        r = n.direction,
        i = "next" === r;
      Rd(n)
        ? t.set(o.getKey(), n.offset, "text")
        : Ld(n)
          ? ki(o)
            ? t.set(o.getKey(), Ud(o, r), "text")
            : t.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((Kd(n) && Hr(o)) || e(268),
            t.set(o.getKey(), i ? 0 : o.getChildrenSize(), "element"));
    }
    function Mi(t) {
      var e = Rf(),
        n = of(e) ? e : wf();
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
        i = oh(o, r) <= 0 ? "next" : "previous";
      return eh(Qd(o, i), Qd(r, i));
    }
    function Di(t) {
      var e = t.direction,
        n = t.origin,
        o = Wd(n, Dd(e)).getNodeAtCaret();
      return o ? Wd(o, e) : Vd(n.getParentOrThrow(), e);
    }
    function Ii(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o41 = Kd(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o41;
        _o41 = _o41.getParentCaret(e)
      )
        n.push(Di(_o41));
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
      for (var _t127 of s.iterNodeCarets(o))
        if (Kd(_t127)) f.add(_t127.origin.getKey());
        else if (Ld(_t127)) {
          var _e103 = _t127.origin;
          (Hr(_e103) && !f.has(_e103.getKey())) || d.push(_e103);
        }
      var h = new Set();
      for (var _t128 of d) {
        var _e104 = _t128.getParent();
        (null === _e104 || f.has(_e104.getKey()) || h.add(_e104),
          gi(_t128),
          Ts(_t128));
      }
      for (var _t129 of h)
        !_t129.canBeEmpty() &&
          !Sl(_t129) &&
          _t129.isEmpty() &&
          _t129.isAttached() &&
          _t129.remove();
      for (var _t130 of s.getTextSlices()) {
        if (!_t130) continue;
        var _e105 = _t130.caret.origin,
          _n76 = _e105.getTextContentSize(),
          _o42 = Di(Wd(_e105, r)),
          _s12 = _e105.getMode();
        if (
          (Math.abs(_t130.distance) === _n76 && "removeEmptySlices" === i) ||
          ("token" === _s12 && 0 !== _t130.distance)
        )
          (gi(_e105), _o42.remove());
        else if (0 !== _t130.distance) {
          i = "removeEmptySlices";
          var _e106 = _t130.removeTextSlice();
          var _n77 = _t130.caret.origin;
          if ("segmented" === _s12) {
            var _t131 = _e106.origin,
              _n78 = Ni(_t131.getTextContent())
                .setStyle(_t131.getStyle())
                .setFormat(_t131.getFormat())
                .setDetail(_t131.getDetail());
            (xn(_t131, _n78),
              _o42.replaceOrInsert(_n78),
              (_e106 = jd(_n78, r, _e106.offset)));
          }
          (_n77.is(a[0].origin) && (a[0] = _e106),
            _n77.is(u[0].origin) && (u[0] = _e106.getFlipped()));
        }
      }
      var g = Ri(a),
        p = Ri(u),
        _ = (function (t, e, n) {
          var o = t && t.getParentAtCaret(),
            r = e && e.getParentAtCaret(),
            i = o && r && ah(o, r);
          if (!i || "branch" !== i.type) return null;
          var s = function s(t, e) {
              var o;
              for (
                var _r32 = t;
                _r32 && !_r32.is(i.commonAncestor);
                _r32 = _r32.getParent()
              ) {
                if (Sl(_r32)) return;
                (e && !n.has(_r32.__key)) || !Xl(_r32) || (o = _r32);
              }
              return o;
            },
            l = s(o, !1),
            c = l && s(r, !0);
          return l && c && 0 === _d(c).length ? [l, c] : null;
        })(g, p, f);
      if (_) {
        var _t132 = _[0],
          _e107 = _[1];
        Vd(_t132, "previous").splice(0, _e107.getChildren());
        var _n79 = _e107.getParent();
        for (_e107.remove(!0); _n79 && _n79.isEmpty(); ) {
          var _t133 = _n79;
          ((_n79 = _n79.getParent()), _t133.remove(!0));
        }
      } else if (p) {
        var _t134 = (function (t) {
            if (Kd(t)) {
              var _e109 = t.origin;
              if (Xl(_e109)) return _e109;
            } else {
              var _e110 = t.getParentAtCaret();
              if (_e110 && Xl(_e110)) return _e110;
            }
            return null;
          })(p),
          _e108 = _t134 && _t134.getParent(),
          _n80 = _t134 && _t134.getParents().findLast(xl);
        if (
          _t134 &&
          _e108 &&
          !Qr(_e108) &&
          _t134.isEmpty() &&
          f.has(_t134.getKey()) &&
          0 === _d(_t134).length &&
          (!_n80 || f.has(_n80.getKey()))
        ) {
          _t134.remove(!0);
          var _n81 = _e108;
          for (; _n81 && !Qr(_n81) && _n81.isEmpty(); ) {
            var _t135 = _n81.getParent();
            if (
              _t135 &&
              Qr(_t135) &&
              _t135.getChildrenSize() <= 1 &&
              _n81.canBeEmpty()
            )
              break;
            var _e111 = _n81;
            ((_n81 = _t135), _e111.remove(!0));
          }
        }
      }
      null !== Ks(l, c) || null === l || l.isAttached() || Ks(Ls(), null);
      var y = Ri([g, p].concat(Array.from(a), Array.from(u)));
      if (y) return th(Qd(y, t.direction));
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
          for (; Kd(e); ) {
            var _t136 = Yd(e);
            if (!Kd(_t136)) break;
            e = _t136;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (ki(e.origin)) return Rd(e) ? e : jd(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return Ld(o) && ki(o.origin) ? jd(o.origin, n, Dd(n)) : e;
    }
    function Ki(t) {
      return Rd(t) && t.offset !== Ud(t.origin, t.direction);
    }
    function Bi(t, e) {
      return t.direction === e ? t : eh(Qd(t.focus, e), Qd(t.anchor, e));
    }
    function zi(t, e, n) {
      var o = t.getChildrenSize(),
        r = (e > 0 ? Math.min(Math.ceil(e), o) : 0) - ("next" === n ? 1 : 0),
        i = r < 0 || r >= o ? null : t.getChildAtIndex(r);
      return null === i ? Vd(t, n) : Wd(i, n);
    }
    function $i(t) {
      var n = t.origin,
        o = t.offset,
        r = t.direction;
      if (o === Ud(n, r)) return t.getSiblingCaret();
      if (o === Ud(n, Dd(r))) return Di(t.getSiblingCaret());
      var _n$splitText = n.splitText(o),
        i = _n$splitText[0];
      return (ki(i) || e(281), Qd(Wd(i, "next"), r));
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
        s = e && i && Kf(e, i) ? n.getIndexWithinParent() : -1,
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
      i && e && e !== Rf() && Bf(e, i, s, c.length - 1);
      for (var _ref53 of l) {
        var _t137 = _ref53[0];
        var _e112 = _ref53[1];
        null !== _e112 && _t137.set(a.__key, _e112, "text");
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
      if (Rd(t)) return n(t);
      var s = t.getParentCaret(o);
      if (s) {
        var _n83 = s.origin;
        if (Kd(t)) {
          var _t138 = Di(s);
          if (i && _n83.isEmpty()) return (_n83.remove(), _t138);
          if (!_n83.canBeEmpty() || !r(_n83, "first")) return _t138;
        }
        var _o43 = sd((l = t).getNodeAtCaret(), l.direction);
        (_o43.length > 0 || (!i && _n83.canBeEmpty() && r(_n83, "last"))) &&
          s.insert(e(_n83).splice(0, 0, _o43));
      }
      var l;
      return s;
    }
    function Vi(t, n, o) {
      var r = Qd(n, "next");
      (Rd(r) &&
        (0 === r.offset
          ? (r = Wd(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = Wd(r.origin, "next"))),
        r.origin.is(t) &&
          (Ld(r) || e(342, t.getKey(), t.getType()), (r = Di(r))),
        (t.is(r.getNodeAtCaret()) || t.is(r.getFlipped().getNodeAtCaret())) &&
          t.remove(!0));
      var i =
        void 0 === o || void 0 === o.rootMode || "shadowRoot" === o.rootMode;
      for (
        var _t139 = r;
        _t139 &&
        ((r = _t139),
        !i || Rd(r) || !Or(Kd(r) ? r.origin : r.origin.getParent()));
        _t139 = Hi(_t139, o)
      );
      return (
        Rd(r) && e(283),
        r.insert(t.isInline() ? qi().append(t) : t),
        Qd(Wd(t.getLatest(), "next"), n.direction)
      );
    }
    function Ji(t, e) {
      var n = Bi(of(e) ? Ai(e) : e, "next"),
        o = hd(n.anchor.origin),
        r = hd(t.getLatest());
      if (null === o ? null !== r : !o.is(r)) return !1;
      var i = Li(Vd(t, "next")),
        s = Qd(Li(Vd(t, "previous")), "next");
      return oh(n.anchor, i) <= 0 && oh(n.focus, s) >= 0;
    }
    var _Yi = (function (_Ur2) {
      function Yi() {
        return _Ur2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Yi, _Ur2);
      var _proto11 = Yi.prototype;
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
        if (Ul(e)) {
          this.isEmpty() && e.append(Pl().createElement("br"));
          var _t140 = this.getFormatType();
          _t140 && (e.style.textAlign = _t140);
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
            _o44 = _n84 ? _n84.getFormat() : this.getTextFormat(),
            _r33 = _n84 ? _n84.getStyle() : this.getTextStyle();
          ((t && 0 === _o44) || (e.textFormat = _o44),
            (t && "" === _r33) || (e.textStyle = _r33));
        }
        return e;
      };
      _proto11.extractWithChild = function extractWithChild(t, e, n) {
        if (!of(e)) return !1;
        if (
          "" === this.getFormatType() &&
          0 === this.getIndent() &&
          "" === this.getStyle()
        )
          return !1;
        if (Ji(this, e)) {
          var _t141 = this.getTextContent();
          return "" !== _t141 && e.getTextContent() === _t141;
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
      return Yi;
    })(_Ur4);
    function Gi(t) {
      var e = qi();
      if ((gc(e, t), dc(t, e), "" === e.getFormatType())) {
        var _n85 = t.getAttribute("align");
        _n85 && _n85 && _n85 in D && e.setFormat(_n85);
      }
      return (hc(e, t), { node: e });
    }
    function qi() {
      return vl(new _Yi());
    }
    function Xi(t) {
      return t instanceof _Yi;
    }
    var Qi = Xe()({
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
      if (!Ul(n)) return !1;
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
      return Hl(e) && as(e);
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
      return t instanceof _ya;
    }
    function gs(t) {
      var e = t;
      for (; null != e; ) {
        var _t142 = ps(e);
        if (hs(_t142)) return _t142;
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
      return Hl(t) && 3 === t.nodeType;
    }
    function xs(t) {
      return Hl(t) && 9 === t.nodeType;
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
      (wa(), Aa());
      var o = Ia(),
        r = Da(),
        i = "" + is++;
      (r._nodeMap.set(i, t),
        Hr(t) ? o._dirtyElements.set(i, !0) : o._dirtyLeaves.add(i),
        o._cloneNotNeeded.set(i, t),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = i));
    }
    function Ts(t) {
      nd(null === t.getParent() ? t : t.getWritable());
    }
    var Ns = Ts;
    function ks(t) {
      (Aa(), No(t) && e(323, t.__key, t.__type));
      var n = null !== t.__parent ? t.__parent : ad(t) ? t.__slotHost : null,
        o = Da(),
        r = Ia(),
        i = o._nodeMap,
        s = r._dirtyElements;
      null !== n &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t143 = e.get(o);
            if (void 0 === _t143) break;
            (n.set(o, !1),
              (o =
                null !== _t143.__parent
                  ? _t143.__parent
                  : ad(_t143)
                    ? _t143.__slotHost
                    : null));
          }
        })(n, i, s);
      var l = t.__key;
      (0 === r._dirtyType && (r._dirtyType = 1),
        Hr(t) ? s.set(l, !0) : r._dirtyLeaves.add(l));
    }
    function bs(t) {
      wa();
      var e = Ia(),
        n = e._compositionKey;
      if (t !== n) {
        if (
          ((e._compositionKey = t),
          (e._compositionMergeHeld = null),
          null !== n)
        ) {
          var _t144 = Ms(n);
          null !== _t144 && _t144.getWritable();
        }
        if (null !== t) {
          var _e113 = Ms(t);
          null !== _e113 && _e113.getWritable();
        }
      }
    }
    function Es() {
      return Ma() ? null : Ia()._compositionKey;
    }
    function Os(t) {
      return (
        !g && (_ || x) && "" === t.__text && t.__key === Ia()._compositionKey
      );
    }
    function Ms(t, e) {
      var n = (e || Da())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function ws(t, e) {
      var n = Ds(t, Ia());
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
        var _t145 = ws(n, e);
        if (null !== _t145) return _t145;
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
      var n = uc(t.getEditorState()),
        o = [];
      for (var _t146 of e) {
        var _e114 = n.get(_t146);
        _e114 && o.push(_e114);
      }
      0 !== o.length &&
        t.update(
          function () {
            for (var _t147 of o)
              for (var _e115 of _t147.keys()) {
                var _t148 = Ms(_e115);
                _t148 && _t148.markDirty();
              }
          },
          null === t._pendingEditorState ? { tag: Oo } : void 0,
        );
    }
    function Ls() {
      return Da()._nodeMap.get("root");
    }
    function Ks(t, e) {
      if (
        !(
          Sl(t) &&
          t.isAttached() &&
          (Qr(t) ? 0 === t.getChildrenSize() : t.isEmpty()) &&
          (Qr(t) || (null !== e && Xl(e)))
        )
      )
        return null;
      var n = qi();
      return (t.append(n), n);
    }
    function Bs(t) {
      wa();
      var e = Da();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        of(t) && Ia()._slotsUsed && kf(t)),
        (e._selection = t));
    }
    function zs(t) {
      (wa(), xe(Ia(), t));
    }
    function $s(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t149 = Ds(n, e);
          if (void 0 !== _t149) return _t149;
          n = cl(n);
        }
        return null;
      })(t, Ia());
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
    function Js(t, e, n) {
      var o = El(_l(e));
      if (null === o) return;
      var r = Ll(o, e._rootElement),
        i = r.anchorNode;
      var s = r.anchorOffset,
        l = r.focusOffset;
      if (null !== i) {
        var _e116 = Vs(i);
        var _o45 = Is(i);
        if (null !== _e116 && ki(_o45)) {
          if ((_e116 === v || _e116 === N) && n) {
            var _t150 = n.length;
            ((_e116 = n), (s = _t150), (l = _t150));
          }
          null !== _e116 && Ys(_o45, _e116, s, l, t);
        }
      }
    }
    function Ys(t, e, n, o, r) {
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
          var _t151 = N;
          var _e117;
          for (; -1 !== (_e117 = _c7.indexOf(_t151)); )
            ((_c7 = _c7.slice(0, _e117) + _c7.slice(_e117 + _t151.length)),
              null !== n &&
                n > _e117 &&
                (n = Math.max(_e117, n - _t151.length)),
              null !== o &&
                o > _e117 &&
                (o = Math.max(_e117, o - _t151.length)));
        }
        var _a4 = i.getTextContent();
        if (r || _c7 !== _a4) {
          var _e118 = Rf();
          if ("" === _c7) {
            if (_s13 && !r && _l8) return void Gs(i, "", _e118);
            if ((bs(null), _ || g || x)) i.remove();
            else {
              var _t152 = Ia();
              (Gs(i, "", _e118),
                setTimeout(function () {
                  _t152.update(function () {
                    i.isAttached() && "" === i.getTextContent() && i.remove();
                  });
                }, 20));
            }
            return;
          }
          var _a5 = i.getParent(),
            _u5 = Lf(),
            _f5 = i.getTextContentSize(),
            _d5 = Es(),
            _h3 = i.getKey();
          if (
            (i.isToken() && !_s13) ||
            (null !== _d5 && _h3 === _d5 && !_s13) ||
            (of(_u5) &&
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
          if (!of(_e118) || null === n || null === o)
            return void Gs(i, _c7, _e118);
          if ((_e118.setTextNodeRange(i, n, i, o), i.isSegmented())) {
            var _t153 = Ni(i.getTextContent());
            (i.replace(_t153), (i = _t153));
          }
          Gs(i, _c7, _e118);
        }
      }
    }
    function Gs(t, e, n) {
      if ((t.setTextContent(e), of(n))) {
        var _e119 = t.getKey();
        var _o46 = !1;
        for (var _r34 of ["anchor", "focus"]) {
          var _i26 = n[_r34];
          "text" === _i26.type &&
            _i26.key === _e119 &&
            ((_i26.offset = Ud(t, _i26.offset, "clamp")), (_o46 = !0));
        }
        _o46 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
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
        var _t154 = e.getParent();
        if (null === _t154) return null;
        if (Qr(_t154)) return e;
        e = _t154;
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
        var _t155 = fh(r);
        return ((n[e] = _t155), _t155);
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
        var _o47 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o47.getTextContentSize())) {
          var _t156 = e ? _o47.getPreviousSibling() : _o47.getNextSibling();
          return null === _t156
            ? ol(
                _o47.getParentOrThrow(),
                e,
                _o47.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t156;
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
      return Ha(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
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
      return xs(t) ? t : Ul(t) ? t.ownerDocument : null;
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
      (wa(), Ia()._updateTags.add(t));
    }
    function hl(t) {
      (wa(), Ia()._deferred.push(t));
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
        if (null !== ud(e) && Hr(e)) return e;
        var _t157 = e.getParentOrThrow();
        if (Sl(_t157)) return _t157;
        e = _t157;
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
      var n = Ia(),
        o = t.getType(),
        r = ls(n, o);
      void 0 === r && e(200, t.constructor.name, o);
      var i = r.replace,
        s = r.replaceWithKlass;
      if (null !== i) {
        var _n87 = i(t),
          _r35 = _n87.constructor;
        return (
          null !== s
            ? _n87 instanceof s ||
              e(
                201,
                s.name,
                s.getType(),
                _r35.name,
                _r35.getType(),
                t.constructor.name,
                o,
              )
            : (_n87 instanceof t.constructor && _r35 !== t.constructor) ||
              e(202, _r35.name, _r35.getType(), t.constructor.name, o),
          _n87.__key === t.__key &&
            e(203, t.constructor.name, o, _r35.name, _r35.getType()),
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
          var _e120 = t.getParent();
          return !(Hr(_e120) && _e120.isShadowRoot());
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
      return Vl(t) && "host" in t;
    }
    var wl = [];
    function Al(t) {
      var e = t.getRootNode();
      if (e === t || !Ml(e)) return wl;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t158 = o.getRootNode();
        if (_t158 === o || !Ml(_t158)) break;
        (n.push(_t158), (o = _t158.host));
      }
      return n;
    }
    function* Dl(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t159 = (xs(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o48 = void 0;
        for (; (_o48 = _t159.nextNode()); )
          _o48.shadowRoot && e.push(_o48.shadowRoot);
      }
    }
    function Il(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function Pl() {
      var t = Ra();
      return Il(null !== t ? t._rootElement : null);
    }
    function Fl(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = Al(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e121 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e121) return _e121;
      } catch (t) {}
      try {
        var _e122 = o.apply(t, n)[0];
        if (void 0 !== _e122) return _e122;
      } catch (t) {}
      return null;
    }
    function Rl(t, e) {
      var n = Fl(t, e);
      if (null !== n) {
        var _t160 = Kl(n);
        if (null !== _t160) return _t160;
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
        var _t161 = e.shadowRoot.activeElement;
        if (null === _t161) break;
        e = _t161;
      }
      return e;
    }
    function jl(t) {
      var e = t.target;
      if (
        null !== e &&
        Ul(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e123 = t.composedPath();
        if (_e123.length > 0) return _e123[0];
      }
      return e;
    }
    function Ul(t) {
      return Hl(t) && 1 === t.nodeType;
    }
    function Hl(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function Vl(t) {
      return Hl(t) && 11 === t.nodeType;
    }
    var Jl =
      /^(a|abbr|acronym|b|bdi|bdo|big|cite|code|data|del|dfn|em|font|i|ins|kbd|label|mark|nobr|output|q|ruby|s|samp|small|span|strike|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Yl(t) {
      return (
        !(!Ul(t) || !t.style.display.startsWith("inline")) ||
        Jl.test(t.nodeName)
      );
    }
    var Gl =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function ql(t) {
      return (
        (!Ul(t) || !t.style.display.startsWith("inline")) && Gl.test(t.nodeName)
      );
    }
    function Xl(t) {
      if (Gr(t) && !t.isInline()) return !0;
      if (!Hr(t) || Sl(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || la(e) || ki(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Ql() {
      return Ia();
    }
    function Zl(t) {
      if (t === void 0) {
        t = Ql();
      }
      return t._config.dom || ga;
    }
    function tc(t, n, o) {
      if (o === void 0) {
        o = Ql();
      }
      var r = Zl(o).$getDOMSlot(t, n, o);
      return (Hr(t) && (ec(r) || e(344, t.getKey(), t.getType())), r);
    }
    function ec(t) {
      return t instanceof _ae;
    }
    function nc(t, e, n) {
      if (n === void 0) {
        n = Ql();
      }
      return Ss(tc(t, e, n).element);
    }
    var oc = new WeakMap(),
      rc = new WeakMap();
    var ic = null,
      sc = !1;
    function lc(t) {
      if (sc) return t();
      var e = xa;
      ((sc = !0),
        (ic =
          null === e || e._readOnly
            ? null
            : { editorState: e, holds: new Map() }));
      try {
        return t();
      } finally {
        ((sc = !1), (ic = null));
      }
    }
    var cc = new WeakMap(),
      ac = new Map();
    function uc(t) {
      if (!t._readOnly && t.isEmpty()) return ac;
      t._readOnly || e(192);
      var n = cc.get(t);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref56 of t._nodeMap) {
              var _n88 = _ref56[0];
              var _o49 = _ref56[1];
              {
                var _t162 = _o49.__type;
                var _r36 = e.get(_t162);
                (_r36 || ((_r36 = new Map()), e.set(_t162, _r36)),
                  _r36.set(_n88, _o49));
              }
            }
            return e;
          })(t)),
          cc.set(t, n)),
        n
      );
    }
    function fc(t) {
      var e = t.constructor.clone(t, rs);
      return (e.afterCloneFrom(t), e);
    }
    function dc(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t163 = parseInt(n, 10);
        if (Number.isFinite(_t163) && _t163 >= 0)
          return void e.setIndent(_t163);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function hc(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function gc(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function pc(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function _c(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function yc(t, e) {
      if (e === void 0) {
        e = Ql();
      }
      var n = e.isEditable(),
        o = n ? "true" : "false";
      (t.getAttribute("contenteditable") !== o && (t.contentEditable = o),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function mc(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (Ul(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== Ds(n, e)) return !1;
        n = cl(n);
      }
      return !1;
    }
    function xc(t, e) {
      return je(t, e) && t[e] !== _bo5[e];
    }
    var Sc = new WeakMap();
    function Cc(t) {
      var n = Sc.get(t);
      return void 0 !== n
        ? n
        : (function (t) {
            var n =
                null != t.prototype && B in t.prototype
                  ? t.prototype[B]()
                  : void 0,
              o = (function (t) {
                if (!(t === _bo5 || t.prototype instanceof _bo5)) {
                  var _n89 = "<unknown>",
                    _o50 = "<unknown>";
                  try {
                    _n89 = t.getType();
                  } catch (t) {}
                  try {
                    _ya.version && (_o50 = JSON.parse(_ya.version));
                  } catch (t) {}
                  e(290, t.name, _n89, _o50);
                }
                return t === _Yr || t === _Ur4 || t === _bo5;
              })(t),
              r = !o && xc(t, "getType") ? t.getType : void 0,
              i = r && !(Tc in r) ? r.call(t) : void 0;
            var s,
              l = i;
            if (n)
              if (i) s = n[i];
              else {
                for (var _ref58 of Object.entries(n)) {
                  var _t164 = _ref58[0];
                  var _e124 = _ref58[1];
                  ((l = _t164), (s = _e124));
                }
                if (!s)
                  for (var _t165 of Object.getOwnPropertySymbols(n)) {
                    var _e125 = n[_t165];
                    if (_e125) {
                      s = _e125;
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
            Sc.set(t, c);
            try {
              var _n90 = (function (t) {
                  var n = t.prototype,
                    o = new Map(),
                    _wc = wc(t),
                    r = _wc.fieldsBaseFirst;
                  for (var _ref60 of r) {
                    var _i28 = _ref60[0];
                    var _s14 = _ref60[1];
                    {
                      var _r38 = Pc(t, _i28, _s14);
                      if (null === _r38) continue;
                      if (Te(_r38)) {
                        var _n91 = _r38.field;
                        if (
                          ("__proto__" === _n91 && e(430, t.name, _i28),
                          void 0 !== _r38.setterTable)
                        ) {
                          var _n92 = _r38.setterTable,
                            _o51 = _s14.meta;
                          for (var _r39 of "enum" === _o51.kind
                            ? _o51.values
                            : [_s14.defaultValue])
                            je(_n92, String(_r39)) ||
                              e(431, t.name, _i28, JSON.stringify(_r39));
                        }
                        o.set(_i28, {
                          field: _n91,
                          key: _i28,
                          kind: "ownField",
                          schema: _s14,
                          setterTable: _r38.setterTable,
                        });
                        continue;
                      }
                      var _l9 = n[_r38];
                      ("function" != typeof _l9 && e(432, t.name, _i28, _r38),
                        o.set(_i28, {
                          key: _i28,
                          kind: "field",
                          schema: _s14,
                          setter: _l9,
                        }));
                    }
                  }
                  return 0 === o.size ? Nc : [].concat(Array.from(o.values()));
                })(t),
                _r37 = (function (t) {
                  var n = t.prototype,
                    o = new Map();
                  for (var _ref62 of wc(t).fieldsDerivedFirst) {
                    var _r40 = _ref62[0];
                    var _i29 = _ref62[1];
                    {
                      var _s15 = Ic(t, _r40, _i29);
                      if (null === _s15) continue;
                      if (Te(_s15)) {
                        var _l0 = _s15.field;
                        "__proto__" === _l0 && e(426, t.name, _r40);
                        var _c8 = _s15.when;
                        var _a7 = void 0;
                        if (void 0 !== _c8) {
                          var _o52 = n[_c8];
                          ("function" != typeof _o52 &&
                            e(427, t.name, _r40, _c8),
                            (_a7 = _o52));
                        }
                        o.set(_r40, {
                          defaultValue: _i29.defaultValue,
                          derived: null === _i29.setter,
                          field: _l0,
                          getterTable: _s15.getterTable,
                          isEqual: _i29.isEqual,
                          key: _r40,
                          kind: "ownField",
                          schema: _i29,
                          when: _a7,
                        });
                        continue;
                      }
                      var _l1 = n[_s15];
                      ("function" != typeof _l1 && e(428, t.name, _r40, _s15),
                        o.set(_r40, {
                          defaultValue: _i29.defaultValue,
                          derived: null === _i29.setter,
                          getter: _l1,
                          isEqual: _i29.isEqual,
                          key: _r40,
                          kind: "method",
                          schema: _i29,
                        }));
                    }
                  }
                  return 0 === o.size ? Dc : [].concat(Array.from(o.values()));
                })(t),
                _i27 = wc(t),
                _a6 = (function (t, e, n) {
                  var o,
                    r = t;
                  for (var _ref64 of Yc(t)) {
                    var _e126 = _ref64.klass;
                    var _n93 = _ref64.ownNodeConfig;
                    _n93 &&
                      void 0 !== _n93.generated &&
                      (void 0 === o
                        ? ((o = _n93.generated), (r = _e126))
                        : _n93.generated === o && (r = _e126));
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
                              _r41 = e.getters[_n94];
                            if (
                              _o53.kind !== _r41.kind ||
                              _o53.key !== _r41.key ||
                              _o53.schema !== _r41.schema ||
                              _o53.derived !== _r41.derived ||
                              _o53.isEqual !== _r41.isEqual ||
                              !Object.is(
                                _o53.defaultValue,
                                _r41.defaultValue,
                              ) ||
                              ("ownField" === _o53.kind &&
                                "ownField" === _r41.kind &&
                                (_o53.field !== _r41.field ||
                                  (void 0 === _o53.getterTable) !=
                                    (void 0 === _r41.getterTable)))
                            )
                              return !1;
                          }
                          for (var _n95 = 0; _n95 < t.setters.length; _n95++) {
                            var _o54 = t.setters[_n95],
                              _r42 = e.setters[_n95];
                            if (
                              _o54.kind !== _r42.kind ||
                              _o54.key !== _r42.key ||
                              _o54.schema !== _r42.schema ||
                              ("ownField" === _o54.kind &&
                                "ownField" === _r42.kind &&
                                (_o54.field !== _r42.field ||
                                  (void 0 === _o54.setterTable) !=
                                    (void 0 === _r42.setterTable)))
                            )
                              return !1;
                          }
                          return !0;
                        })(n, vc(Cc(r)))
                      ? o
                      : null;
                })(t, 0, { getters: _r37, setters: _n90 });
              ((c.compiled = {
                flatStates: _i27.flatStates,
                generated: null === _a6 ? null : _a6(_i27.fields),
                getters: _r37,
                isCompactDefault: Lc(_r37),
                setters: _n90,
              }),
                (function (t, e, n, o) {
                  if (!e && n) {
                    if (!xc(t, "getType")) {
                      var _e127 = t,
                        _o55 = function _o55() {
                          return this !== _e127 ? _bo5.getType.call(this) : n;
                        };
                      ((_o55[Tc] = !0), (t.getType = _o55));
                    }
                    if (
                      (xc(t, "clone") ||
                        (t.clone = function (e, n) {
                          os(e);
                          var o = new t();
                          return (n !== rs && o.afterCloneFrom(e), o);
                        }),
                      xc(t, "importJSON") ||
                        (t.importJSON =
                          (o && o.$importJSON) ||
                          (function (t) {
                            return function (e) {
                              var n = Gc(t);
                              return n.updateFromJSON ===
                                _bo5.prototype.updateFromJSON
                                ? (function (t, e) {
                                    return Bc(
                                      t.__state || void 0 !== e[L]
                                        ? gn(t, e)
                                        : t,
                                      e,
                                    );
                                  })(n, e)
                                : n.updateFromJSON(e);
                            };
                          })(t)),
                      !xc(t, "importDOM") && o)
                    ) {
                      var _e128 = o.importDOM;
                      _e128 &&
                        (t.importDOM = function () {
                          return _e128;
                        });
                    }
                    var _e129 = t.prototype;
                    je(_e129, "getTextContent") &&
                      !je(_e129, "getTextContentSize") &&
                      (t.prototype.getTextContentSize =
                        _bo5.prototype.getTextContentSize);
                  }
                })(t, o, l, s),
                (function (t) {
                  var _loop2 = function _loop2() {
                      var e = _ref66.klass;
                      var n = _ref66.ownNodeConfig;
                      {
                        var _t166 = e.prototype;
                        if (je(_t166, "afterCloneFrom")) return 0;
                        var _o56 = Jc(e);
                        if (0 === _o56.length) return 0;
                        var _r43 = Object.getPrototypeOf(_t166),
                          _i30 =
                            n && void 0 !== n.generated
                              ? vc(Cc(e)).generated
                              : null,
                          _s16 =
                            (null !== _i30 && _i30.afterCloneFrom) ||
                            function (t, e) {
                              var n = t,
                                r = e;
                              for (
                                var _t167 = 0;
                                _t167 < _o56.length;
                                _t167++
                              ) {
                                var _e130 = _o56[_t167];
                                n[_e130] = r[_e130];
                              }
                            };
                        ((_t166.afterCloneFrom = function (t) {
                          (_r43.afterCloneFrom.call(this, t), _s16(this, t));
                        }),
                          (_t166.afterCloneFrom[Hc] = !0));
                      }
                    },
                    _ret;
                  for (var _ref66 of Yc(t)) {
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
                      value: e.inline ? $c : Wc,
                      writable: !0,
                    });
                })(t, s));
            } catch (e) {
              throw (Sc["delete"](t), e);
            }
            return c;
          })(t);
    }
    function vc(t) {
      var n = t.compiled;
      return (void 0 === n && e(422, t.config.klass.name), n);
    }
    var Tc = Symbol("lexical.synthesizedGetType"),
      Nc = [];
    function kc(t, e, n, o) {
      var r = void 0 === n.method ? o : n.method,
        i = wc(t).declaredBy.get(e);
      if (void 0 === i) return n;
      var s = t.prototype,
        l = i.prototype;
      return bc(s, l, r) && bc(s, l, o) ? n : r;
    }
    function bc(t, e, n) {
      return t[n] === e[n];
    }
    function Ec(t) {
      return "set" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    function Oc(t) {
      return "get" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    var Mc = {
      declaredBy: new Map(),
      fields: new Map(),
      fieldsBaseFirst: [],
      fieldsDerivedFirst: [],
      flatStates: [],
    };
    function wc(t) {
      var e = Cc(t);
      return (
        void 0 === e.composed &&
          (e.composed = (function (t) {
            var e = [],
              n = [],
              o = [];
            for (var _ref68 of Yc(t)) {
              var _r44 = _ref68.klass;
              var _i31 = _ref68.ownNodeConfig;
              {
                var _t168 = _i31 && _i31.json;
                (n.push(_r44),
                  e.push(
                    _t168 && "node" === _t168.meta.kind
                      ? Object.entries(_t168.meta.fields)
                      : [],
                  ));
                var _s17 = [];
                if (_i31 && _i31.stateConfigs)
                  for (var _t169 of _i31.stateConfigs)
                    "stateConfig" in _t169 &&
                      _t169.flat &&
                      _s17.push(_t169.stateConfig);
                o.push(_s17);
              }
            }
            var r = new Map();
            for (var _t170 = 0; _t170 < e.length; _t170++)
              for (var _ref70 of e[_t170]) {
                var _n96 = _ref70[0];
                var _o57 = _ref70[1];
                r.has(_n96) || r.set(_n96, _o57);
              }
            var i = new Map(),
              s = new Map(),
              l = new Map();
            for (var _t171 = e.length - 1; _t171 >= 0; _t171--) {
              for (var _ref72 of e[_t171]) {
                var _o58 = _ref72[0];
                var _l10 = _ref72[1];
                {
                  var _e131 = r.get(_o58);
                  (void 0 === _e131 || i.has(_o58) || i.set(_o58, _e131),
                    void 0 === _e131 ||
                      _l10 !== _e131 ||
                      s.has(_o58) ||
                      s.set(_o58, n[_t171]));
                }
              }
              for (var _e132 of o[_t171])
                l.has(_e132.key) || l.set(_e132.key, _e132);
            }
            return 0 === r.size && 0 === l.size
              ? Mc
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
    function Ac(t) {
      var _wc2 = wc(t),
        e = _wc2.fieldsDerivedFirst,
        n = _wc2.flatStates,
        o = {};
      for (var _t172 of n) _t172.schema && (o[_t172.key] = _t172.schema);
      for (var _ref74 of e) {
        var _t173 = _ref74[0];
        var _n97 = _ref74[1];
        o[_t173] = _n97;
      }
      return o;
    }
    var Dc = [];
    function Ic(t, e, n) {
      var o = n.getter;
      if (null === o) return null;
      var r = void 0 === o ? Oc(e) : o;
      return Te(r) ? kc(t, e, r, Oc(e)) : r;
    }
    function Pc(t, e, n) {
      var o = n.setter;
      if (null === o) return null;
      var r = void 0 === o ? Ec(e) : o;
      return Te(r) ? kc(t, e, r, Ec(e)) : r;
    }
    function Fc(t) {
      return t;
    }
    function Rc(t, e) {
      var n = t.defaultValue,
        o = t.isEqual;
      return void 0 === e || e === n || (void 0 !== o && o(e, n));
    }
    function Lc(t) {
      var e;
      return function (n, o) {
        void 0 === e &&
          (e = new Map(
            t.map(function (t) {
              return [t.key, t];
            }),
          ));
        var r = e.get(n);
        return void 0 !== r && Rc(r, o);
      };
    }
    function Kc(t) {
      var e = t.setterTable,
        n = t.schema,
        o = n.defaultValue;
      return void 0 === e ? o : e[String(o)];
    }
    function Bc(t, e) {
      var n = Cc(t.constructor),
        _vc = vc(n),
        o = _vc.flatStates,
        r = _vc.generated,
        i = _vc.setters,
        s = (function (t, e, n) {
          var o = t;
          var _loop3 = function _loop3() {
            var r = n[_t174],
              i = e[r.key];
            if (void 0 !== i) {
              var _t175 = r.parse(i);
              o = cn(o, r, function () {
                return _t175;
              });
            }
          };
          for (var _t174 = 0; _t174 < n.length; _t174++) {
            _loop3();
          }
          return o;
        })(t, e, o);
      return null !== r && void 0 !== r.updateFromJSON
        ? r.updateFromJSON(s, e)
        : (function (t, e, n) {
            for (var _o59 = 0; _o59 < n.length; _o59++) {
              var _r45 = n[_o59],
                _i32 = _r45.schema(e[_r45.key]);
              "ownField" === _r45.kind
                ? (Fc(t)[_r45.field] =
                    void 0 === _r45.setterTable
                      ? _i32
                      : je(_r45.setterTable, _i32)
                        ? _r45.setterTable[_i32]
                        : Kc(_r45))
                : _r45.setter.call(t, _i32);
            }
            return t;
          })(s, e, i);
    }
    function zc(t) {
      return Cc(t).config;
    }
    function $c() {
      return !0;
    }
    function Wc() {
      return !1;
    }
    function jc(t) {
      return t === $c || t === Wc;
    }
    function Uc(t) {
      var e = [];
      for (var _n98 of [t.getter, t.setter])
        Te(_n98) &&
          "__proto__" !== _n98.field &&
          !e.includes(_n98.field) &&
          e.push(_n98.field);
      return e;
    }
    var Hc = "__lexicalSynthesizedAfterCloneFrom";
    function Vc(t) {
      var _wc3 = wc(t),
        e = _wc3.declaredBy,
        n = _wc3.fieldsBaseFirst,
        o = [];
      for (var _ref76 of n) {
        var _r46 = _ref76[0];
        var _i33 = _ref76[1];
        if (e.get(_r46) === t)
          for (var _t176 of Uc(_i33)) o.includes(_t176) || o.push(_t176);
      }
      return o;
    }
    function Jc(t) {
      var e = Vc(t);
      if (0 === e.length) return e;
      var n = new Set();
      for (var _ref78 of Yc(t)) {
        var _e133 = _ref78.klass;
        if (_e133 !== t) for (var _t177 of Vc(_e133)) n.add(_t177);
      }
      return 0 === n.size
        ? e
        : e.filter(function (t) {
            return !n.has(t);
          });
    }
    function* Yc(t) {
      for (var _e134 = t; _e134 && (_e134 === _bo5 || Eo(_e134.prototype)); ) {
        var _t178 = zc(_e134),
          _n99 = _t178.declaresOwnConfig;
        (yield _n99
          ? _t178
          : babelHelpers["extends"]({}, _t178, { ownNodeConfig: void 0 }),
          (_e134 =
            (_n99 && _t178.ownNodeConfig && _t178.ownNodeConfig["extends"]) ||
            Qc(_e134)));
      }
    }
    function Gc(t) {
      var e = Ql();
      wa();
      var n = e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t)),
        o = new n.klass();
      return null === n.replace ? o : vl(o);
    }
    var qc = function qc(t, e) {
      var n = t;
      for (; null != n && !Qr(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Xc(t, n) {
      var o = [];
      var r = t.__first;
      for (; null !== r; ) {
        var _t179 = null === n ? Ms(r) : n.get(r);
        (null == _t179 && e(174), o.push(r), (r = _t179.__next));
      }
      return o;
    }
    function Qc(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    function Zc(t) {
      return new _na(qt(t._nodeMap), null, t._slotsUsed);
    }
    function ta() {
      return new _na(new Map([["root", new _Xr()]]), null, !1);
    }
    function ea(t) {
      var n = t.constructor,
        o = ee(t);
      if (Hr(t)) {
        var _e135 = o.children,
          _n100 = t.getChildren();
        for (var _t180 = 0; _t180 < _n100.length; _t180++)
          _e135.push(ea(_n100[_t180]));
      }
      var r = _d(t);
      if (r.length > 0) {
        var _i34 = {};
        for (var _o60 of r) {
          var _r47 = yd(t, _o60);
          (null === _r47 && e(366, n.name, _o60), (_i34[_o60] = ea(_r47)));
        }
        o.$slots = _i34;
      }
      return o;
    }
    var _na = (function () {
      function na(t, e, n) {
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
      var _proto13 = na.prototype;
      _proto13.isEmpty = function isEmpty() {
        return this._nodeMap.size <= 1 && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return $a((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new na(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), (e._parsed = this._parsed), e);
      };
      _proto13.toJSON = function toJSON(t) {
        var _this15 = this;
        return Zt("boolean" == typeof t && t, function () {
          return $a(null, _this15, function () {
            return lc(function () {
              return { root: ea(Ls()) };
            });
          });
        });
      };
      return na;
    })();
    var _oa = (function (_Ur3) {
      function oa() {
        return _Ur3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(oa, _Ur3);
      var _proto14 = oa.prototype;
      _proto14.$config = function $config() {
        return this.config("artificial", { extends: _Ur4 });
      };
      _proto14.createDOM = function createDOM(t) {
        return Pl().createElement("div");
      };
      return oa;
    })(_Ur4);
    var _ra = (function (_bo4) {
      function ra() {
        return _bo4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(ra, _bo4);
      var _proto15 = ra.prototype;
      _proto15.$config = function $config() {
        return this.config("linebreak", {
          extends: _bo5,
          generated: Rr,
          importDOM: {
            br: function br(t) {
              return ca(t) || aa(t) ? null : { conversion: ia, priority: 0 };
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
      return ra;
    })(_bo5);
    function ia(t) {
      return { node: sa() };
    }
    function sa() {
      return vl(new _ra());
    }
    function la(t) {
      return t instanceof _ra;
    }
    function ca(t) {
      var e = t.parentElement;
      if (null !== e && ql(e)) {
        var _n101 = e.firstChild;
        if (_n101 === t || (_n101.nextSibling === t && ua(_n101))) {
          var _n102 = e.lastChild;
          if (_n102 === t || (_n102.previousSibling === t && ua(_n102)))
            return !0;
        }
      }
      return !1;
    }
    function aa(t) {
      var e = t.parentElement;
      if (null !== e && ql(e)) {
        var _n103 = e.firstChild;
        if (_n103 === t || (_n103.nextSibling === t && ua(_n103))) return !1;
        var _o61 = e.lastChild;
        if (_o61 === t || (_o61.previousSibling === t && ua(_o61))) return !0;
      }
      return !1;
    }
    function ua(t) {
      return ms(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function fa(t) {
      console.warn(t);
    }
    function da(t, e, n, o, r) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = ta()),
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
        null !== e && gu(t, e),
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
    function ha(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref80 of Yc(t)) {
        var _o62 = _ref80.klass;
        var _r48 = _ref80.ownNodeConfig;
        {
          var _t181 = _o62.transform;
          if (!n.has(_t181)) {
            n.add(_t181);
            var _r49 = _o62.transform();
            _r49 && e.add(_r49);
          }
          if (_r48) {
            var _t182 = _r48.$transform;
            _t182 && e.add(_t182);
          }
        }
      }
      return e;
    }
    var ga = {
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
    function pa(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function _a(t, e, n) {
      return (t.set(e, n), pa.bind(null, t, e));
    }
    var _ya = (function () {
      function ya(t, e, n, o, r, i, s, l, c) {
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
      var _proto16 = ya.prototype;
      _proto16.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto16.registerUpdateListener = function registerUpdateListener(t) {
        return _a(this._listeners.update, t);
      };
      _proto16.registerEditableListener = function registerEditableListener(t) {
        return _a(this._listeners.editable, t);
      };
      _proto16.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return _a(this._listeners.decorator, t);
      };
      _proto16.registerTextContentListener =
        function registerTextContentListener(t) {
          return _a(this._listeners.textcontent, t);
        };
      _proto16.registerRootListener = function registerRootListener(t) {
        var _this16 = this;
        var e = this._listeners.root;
        return Xa(_a(e, t, t(this._rootElement, null) || void 0), function () {
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
          o = uc(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t183 of o.keys()) r.set(_t183, "created");
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
          var _t184 = this.registerNodeTransformToKlass(r, e);
          o.push(_t184);
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
          var _o63 = el(this._config.theme, "root"),
            _r50 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            da(this, n, t, _r50, { preserveUpdateQueue: !0 }),
            null !== n &&
              (this._config.disableEvents ||
                (function (t) {
                  var n = tu.get(t);
                  if (void 0 === n) return void Ju();
                  var o = eu.get(n);
                  if (void 0 === o) return void Ju();
                  tu["delete"](t);
                  var r = ps(t);
                  hs(r)
                    ? ((function (t) {
                        if (null !== t._parentEditor) {
                          var _e136 = js(t),
                            _n104 = _e136[_e136.length - 1]._key;
                          ju.get(_n104) === t && ju["delete"](_n104);
                        } else ju["delete"](t._key);
                      })(r),
                      o.editors["delete"](r),
                      (o.hasShadowEditor = void 0),
                      (t.__lexicalEditor = null))
                    : r && e(198);
                  var i = $u(t);
                  for (var _t185 = 0; _t185 < i.length; _t185++) i[_t185]();
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
            var _e137 = pl(t),
              _n105 = t.style;
            ((_n105.userSelect = "text"),
              (_n105.whiteSpace = "pre-wrap"),
              (_n105.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e137),
              (this._dirtyType = 2),
              Se(this),
              this._updateTags.add(Oo),
              Wa(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  tu.set(t, n);
                  var o = eu.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    eu.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = $u(t);
                  r.push(nu.register(n));
                  var i = babelHelpers["extends"](
                    {
                      blur: Rt,
                      click: au,
                      compositionend: Du,
                      compositionstart: Eu,
                      copy: Ot,
                      cut: Mt,
                      dragend: Et,
                      dragover: bt,
                      dragstart: kt,
                      drop: Tt,
                      focus: Ft,
                      input: ku,
                      keydown: Iu,
                      paste: Z,
                      pointerdown: pu,
                    },
                    d && { beforeinput: Tu },
                    g && { keyup: Pu, mousedown: du },
                  );
                  var _loop4 = function _loop4() {
                    var n = _ref82[0];
                    var o = _ref82[1];
                    {
                      var _i35 = function _i35(r) {
                        Vu(r) ||
                          (Hu(r),
                          "blur" === n &&
                            (gu(e, t),
                            (e._inputState.isShiftKeyDown = !1),
                            (e._inputState.isInsertLineBreak = !1)),
                          (e.isEditable() || "click" === n || "copy" === n) &&
                            ("function" == typeof o ? o(r, e) : sl(e, o, r)));
                      };
                      r.push(Qa(t, n, _i35));
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
                        qa(e, function () {
                          var s = El(_l(e));
                          if ("mousedown" !== i.type) {
                            var _o64 =
                              c &&
                              s &&
                              of(Rf()) &&
                              Pf(Lf(), s, e, new Event("selectionchange"));
                            return (
                              _o64 && Bs(_o64),
                              yu(e, n, c && s ? Ll(s, t).focusNode : null)
                            );
                          }
                          var a = Df(s, e);
                          if (
                            i.defaultPrevented ||
                            (!i.shiftKey && a && !a.isCollapsed())
                          )
                            l();
                          else if (s && r.isSelectionChangeFromMouseDown) {
                            (Wu(e, s, new Event("selectionchange"), o),
                              yu(e, i, Ll(s, t).focusNode));
                            var _n106 = Rf();
                            of(_n106) &&
                              _n106.isCollapsed() &&
                              !_n106.is(Lf()) &&
                              cu(e, _n106);
                          }
                        }));
                    };
                  (r.push(
                    Za(
                      n,
                      { pointercancel: c, pointermove: c, pointerup: c },
                      !0,
                    ),
                    Qa(_l(e), "blur", l),
                    e.registerEditableListener(l),
                    Za(t, {
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
                          mc(jl(t), e)
                            ? null
                            : t;
                      },
                    }),
                    Qa(
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
                          return Xa(
                            Qa(
                              t,
                              "touchstart",
                              function (t) {
                                var e =
                                  1 === t.touches.length ? t.touches[0] : null;
                                n = e ? { x: e.clientX, y: e.clientY } : null;
                              },
                              o,
                            ),
                            Qa(
                              t,
                              "touchend",
                              function (t) {
                                var o = t.changedTouches[0];
                                (null !== n &&
                                  o &&
                                  0 === t.touches.length &&
                                  Math.abs(o.clientX - n.x) <= uu &&
                                  Math.abs(o.clientY - n.y) <= uu &&
                                  e(t),
                                  (n = null));
                              },
                              o,
                            ),
                          );
                        })(t, function (n) {
                          return (function (t, e, n) {
                            void 0 !== e._inputState.savedInputMode &&
                              (hu(t, e, n) ||
                                (Wl(n.ownerDocument) === n && n.blur(),
                                gu(e, n)));
                          })(n, e, t);
                        }),
                      ));
                })(t, this),
              null != _o63 &&
                (_t$classList = t.classList).add.apply(
                  _t$classList,
                  Array.from(_o63),
                ));
          } else ((this._window = null), this._updateTags.add(Oo), Wa(this));
          ja("root", this, !1, t, n);
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
          ((r = Zc(t)),
          (r._selection = t._selection ? t._selection.clone() : null)),
          xe(this));
        var i = this._pendingEditorState,
          s = void 0 !== e ? e.tag : null;
        (null === i ||
          i.isEmpty() ||
          (null != s && this._updateTags.add(s), Wa(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || t._slotsUsed),
          qa(
            this,
            function () {
              if (
                (s && _this17._updateTags.add(s),
                o && (n(38), Ls().append(qi())),
                t._parsed)
              )
                for (var _ref84 of r._nodeMap.entries()) {
                  var _t186 = _ref84[0];
                  var _e138 = _ref84[1];
                  Hr(_e138)
                    ? _this17._dirtyElements.set(_t186, !0)
                    : _this17._dirtyLeaves.add(_t186);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto16.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = ta(),
            r = xa,
            i = Ca,
            s = Sa,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Map()),
            (e._dirtyType = 0),
            (xa = o),
            (Ca = !1),
            (Sa = e),
            os(null));
          try {
            var _r51 = e._nodes;
            (za(t.root, _r51), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (xa = r),
              (Ca = i),
              (Sa = s));
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
          "force-commit" === e && (ba.has(this) || Wa(this)),
          ("pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
          ).read(n, { editor: this })
        );
      };
      _proto16.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Ga(t, e, n);
        })(this, t, e);
      };
      _proto16.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          qa(this, function () {
            var o = Rf(),
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
          ja("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return Pa();
            }));
      };
      _proto16.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON(te()) };
      };
      return ya;
    })();
    _ya.version = (function () {
      return Jt;
    })();
    function ma(t, e, n, o, r, i) {
      if (Hr(t)) {
        var _s18 = t.__first;
        for (; null !== _s18; ) {
          var _t187 = o.get(_s18);
          if (void 0 === _t187) break;
          var _l11 = Hr(_t187);
          (_t187.__parent !== e ||
            (_l11 && i.has(_s18)) ||
            ((_l11 || (cd(_t187) && null !== _t187.__slots)) &&
              ma(_t187, _s18, n, o, r, i),
            n.has(_s18) || i["delete"](_s18),
            r.push(_s18)),
            (_s18 = _t187.__next));
        }
      }
      for (var _s19 of cd(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t188 = o.get(_s19);
        void 0 !== _t188 &&
          ad(_t188) &&
          _t188.__slotHost === e &&
          ((Hr(_t188) || (cd(_t188) && null !== _t188.__slots)) &&
            ma(_t188, _s19, n, o, r, i),
          n.has(_s19) || i["delete"](_s19),
          r.push(_s19));
      }
    }
    var xa = null,
      Sa = null,
      Ca = !1,
      va = !1,
      Ta = !1;
    var Na = new Set(),
      ka = new Set(),
      ba = new Set();
    var Ea = 0;
    var Oa = { characterData: !0, childList: !0, subtree: !0 };
    function Ma() {
      return Ca || (null !== xa && xa._readOnly);
    }
    function wa() {
      Ca && e(13);
    }
    function Aa() {
      Ea > 99 && e(14);
    }
    function Da() {
      return (null === xa && e(195, Fa()), xa);
    }
    function Ia() {
      return (null === Sa && e(337, Fa()), Sa);
    }
    function Pa() {
      Ia()._dirtyType = 2;
    }
    function Fa() {
      var t = 0;
      var e = new Set(),
        n = _ya.version;
      if ("undefined" != typeof window)
        for (var _o65 of Dl(document)) {
          var _r52 = ps(_o65);
          if (hs(_r52)) t++;
          else if (_r52) {
            var _t189 = String(_r52.constructor.version || "<0.17.1");
            (_t189 === n &&
              (_t189 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t189));
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
    function Ra() {
      return Sa;
    }
    function La(t, e, n) {
      var o = e.__type,
        r = ss(t, o);
      var i = n.get(o);
      void 0 === i && ((i = Array.from(r.transforms)), n.set(o, i));
      var s = i.length;
      for (var _t190 = 0; _t190 < s && (i[_t190](e), e.isAttached()); _t190++);
    }
    function Ka(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Ba(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t191 of o) n.add(_t191);
    }
    function za(t, n) {
      var o = t.type,
        r = n.get(o);
      void 0 === r && e(17, o);
      var i = r.klass;
      t.type !== i.getType() && e(18, i.name);
      var s = i.importJSON(t),
        l = t.children;
      if (Hr(s) && Array.isArray(l))
        for (var _t192 = 0; _t192 < l.length; _t192++) {
          var _e139 = za(l[_t192], n);
          s.append(_e139);
        }
      var c = t.$slots;
      if (c) {
        cd(s) || e(379, i.name);
        for (var _t193 in c) bd(s, _t193, za(c[_t193], n));
      }
      return s;
    }
    function $a(t, e, n) {
      var o = xa,
        r = Ca,
        i = Sa;
      ((xa = e), (Ca = !0), (Sa = t));
      try {
        return n();
      } finally {
        ((xa = o), (Ca = r), (Sa = i));
      }
    }
    function Wa(e, n) {
      null !== e._pendingEditorState && Sa !== e && xe(e, !1, !0);
      var o = Ta;
      Ta = !0;
      try {
        var _o66 = (function (t) {
          if (ka.has(t)) return !1;
          ka.add(t);
          try {
            for (var _e140 = 0; null !== t._pendingEditorState; _e140++) {
              var _n107 = t._pendingEditorState._selection,
                _o67 = t._rootElement;
              if (!Ua(t, _n107)) return !1;
              var _r53 =
                (null === _n107 || of(_n107)) &&
                (t._headless || null === _o67 || !_o67.isConnected);
              if (_r53 || 100 === _e140)
                return (
                  (t._lastNotifiedSelection =
                    null === _n107 ? null : _n107.clone()),
                  !_r53
                );
              Ga(
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
            ka["delete"](t);
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
              Ja(t, t._deferred)
            );
          var i = t._editorState,
            s = i._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = xa,
            u = Ca,
            f = Sa,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !r && c && null !== h)
          ) {
            ((Sa = t), (xa = n), (Ca = !1), (t._updating = !0));
            try {
              var _e141 = t._dirtyType,
                _o68 = t._dirtyElements,
                _r54 = t._dirtyLeaves;
              (h.disconnect(), (g = So(i, n, t, _e141, _o68, _r54)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), va)) throw e;
              return (
                da(t, null, o, n),
                Se(t),
                (t._dirtyType = 2),
                (va = !0),
                Wa(t, i),
                void (va = !1)
              );
            } finally {
              (h.observe(o, Oa),
                (t._updating = d),
                (xa = a),
                (Ca = u),
                (Sa = f));
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
            ((Sa = t), (xa = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e142 = t._blockCursorElement;
                (null !== _e142 && bl(_e142, t, o), Uf(s, l, t, S, m, o));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  of(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains($l(e))
                ) {
                  var _r55 = n.anchor,
                    _i36 = _r55.getNode(),
                    _s20 = _r55.offset;
                  var _l12 = !1,
                    _c9 = null;
                  if (_s20 === _i36.getChildrenSize())
                    kl(_i36.getChildAtIndex(_s20 - 1)) && (_l12 = !0);
                  else {
                    var _e143 = _i36.getChildAtIndex(_s20);
                    null !== _e143 &&
                      kl(_e143) &&
                      ((_l12 = !0), (_c9 = t.getElementByKey(_e143.__key)));
                  }
                  if (_l12) {
                    var _n108 = tc(_i36, t.getElementByKey(_i36.__key), t),
                      _r56 = _n108.element;
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
                                var _t194 = fh(o);
                                o = e.blockCursor = _t194;
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
                      var _t195 =
                        null !== _n108.before &&
                        _n108.before.parentNode === _r56
                          ? _n108.before
                          : null;
                      _r56.insertBefore(o, _t195);
                    } else _r56.insertBefore(o, _c9);
                    return;
                  }
                }
                null !== o && bl(o, t, e);
              })(t, o, l);
            } finally {
              (null !== h && h.observe(o, Oa), (Sa = f), (xa = a));
            }
          }
          var C = ba.has(t);
          ba.add(t);
          try {
            null !== g &&
              (function (t, e, n, o, r) {
                var i = Array.from(t._listeners.mutation),
                  s = i.length;
                for (var _t196 = 0; _t196 < s; _t196++) {
                  var _i$_t = i[_t196],
                    _s21 = _i$_t[0],
                    _l13 = _i$_t[1];
                  for (var _t197 of _l13) {
                    var _i37 = e.get(_t197);
                    void 0 !== _i37 &&
                      _s21(_i37, {
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
              ja("decorator", t, !0, _o69)),
              (function (t, e, n) {
                if (0 === t._listeners.textcontent.size) return;
                var o = Fs(e),
                  r = Fs(n);
                o !== r && ja("textcontent", t, !0, r);
              })(t, e || i, n),
              ja("update", t, !0, {
                dirtyElements: _,
                dirtyLeaves: p,
                editorState: n,
                mutatedNodes: g,
                normalizedNodes: y,
                prevEditorState: e || i,
                tags: m,
              }));
          } finally {
            C || ba["delete"](t);
          }
          (d || Ja(t, x), Va(t));
        })(e, n),
          _o66 && e._onWarn(t(436)));
      } finally {
        Ta = o;
      }
    }
    function ja(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n109 = e._listeners[t],
          _r57 = Array.from(_n109);
        for (
          var _len8 = arguments.length,
            o = new Array(_len8 > 3 ? _len8 - 3 : 0),
            _key8 = 3;
          _key8 < _len8;
          _key8++
        ) {
          o[_key8 - 3] = arguments[_key8];
        }
        for (var _ref87 of _r57) {
          var _t198 = _ref87[0];
          var _e144 = _ref87[1];
          {
            _e144 && _e144();
            var _r58 = _t198.apply(void 0, Array.from(o)),
              _i38 = "function" == typeof _r58 ? _r58 : void 0;
            _n109.has(_t198) ? _n109.set(_t198, _i38) : _i38 && _i38();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function Ua(t, e) {
      var n = t._lastNotifiedSelection;
      return null === e ? null !== n : !e.is(n);
    }
    function Ha(t, e, n, o) {
      var r = js(t);
      var i;
      if (!Ta)
        for (var _t199 = 0; _t199 < r.length; _t199++)
          r[_t199]._updating || (r[_t199]._cascadeCount = 0);
      if (e === W) {
        if (Sa !== t || Ca) {
          var _r59 = !1;
          return (
            qa(t, function () {
              _r59 = Ha(t, e, n, o);
            }),
            _r59
          );
        }
        var _r60 = Da()._selection;
        t._lastNotifiedSelection = null === _r60 ? null : _r60.clone();
      }
      for (var _t200 = 4; _t200 >= 0; _t200--) {
        var _loop5 = function _loop5() {
            var l = r[_s22];
            if (_s22 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e145 = c[_t200];
              if (_e145.size > 0) {
                var _t201 = !1;
                if (
                  (qa(l, function () {
                    for (var _r61 of _e145)
                      if (_r61(n, o)) return void (_t201 = !0);
                  }),
                  _t201)
                )
                  return { v: _t201 };
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
            Ha(i, e, n, o);
          }),
        !1
      );
    }
    function Va(e) {
      var n = e._updates;
      if (0 === n.length) return void (e._cascadeCount = 0);
      if (
        ((function (t) {
          Na.has(t) ||
            (Na.add(t),
            setTimeout(function () {
              (Na["delete"](t), (t._cascadeCount = 0));
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
        var _t202 = o[0],
          _n110 = o[1];
        Ga(e, _t202, _n110);
      }
    }
    function Ja(t, e) {
      if ((t._deferred === e && (t._deferred = []), 0 !== e.length)) {
        var _n111 = t._updating;
        t._updating = !0;
        try {
          for (var _t203 = 0; _t203 < e.length; _t203++) e[_t203]();
        } finally {
          t._updating = _n111;
        }
      }
    }
    function Ya(t, n) {
      var o = t._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n112 = o.shift();
        if (_n112) {
          var _o70 = _n112[0],
            _i39 = _n112[1],
            _s23 = t._pendingEditorState;
          var _l14 = void 0;
          (void 0 !== _i39 &&
            ((_l14 = _i39.onUpdate),
            _i39.skipTransforms && (r = !0),
            _i39.discrete && (null === _s23 && e(191), (_s23._flushSync = !0)),
            _l14 && t._deferred.push(_l14),
            Ba(t, _i39.tag)),
            null == _s23 ? Ga(t, _o70, _i39) : _o70());
        }
      }
      return r;
    }
    function Ga(t, n, o, r) {
      if (r === void 0) {
        r = !1;
      }
      var i = t._updateTags;
      var s,
        l = !1,
        c = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        Ba(t, o.tag),
        (l = o.skipTransforms || !1),
        (c = o.discrete || !1)),
        s && t._deferred.push(s));
      var a = t._editorState;
      var u = t._pendingEditorState,
        f = !1;
      ((null === u || u._readOnly) &&
        ((u = t._pendingEditorState = Zc(u || a)), (f = !0)),
        (u._flushSync = c));
      var d = 0 === t._updates.length ? null : new Set(t._updates),
        h = xa,
        g = Ca,
        p = Sa,
        _ = t._updating,
        y = t._lastNotifiedSelection;
      ((xa = u), (Ca = !1), (t._updating = !0), (Sa = t));
      var m = t._headless || null === t.getRootElement();
      os(null);
      try {
        f &&
          (m
            ? null !== a._selection && (u._selection = a._selection.clone())
            : (u._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = El(_l(t));
                return of(n) || null == n ? Pf(n, o, t, e) : n.clone();
              })(t, (o && o.event) || null)));
        var _r62 = t._compositionKey;
        (n(),
          (l = Ya(t, l)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (of(o)) {
              var _t204 = o.anchor,
                _e146 = o.focus;
              var _r63;
              if (
                ("text" === _t204.type &&
                  ((_r63 = _t204.getNode()), _r63.selectionTransform(n, o)),
                "text" === _e146.type)
              ) {
                var _t205 = _e146.getNode();
                _r63 !== _t205 && _t205.selectionTransform(n, o);
              }
            }
          })(u, t),
          0 !== t._dirtyType &&
            (l
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t206 of n) {
                    var _e147 = o.get(_t206);
                    ki(_e147) &&
                      _e147.isAttached() &&
                      _e147.isSimpleText() &&
                      !_e147.isUnmergeable() &&
                      Ko(_e147);
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
                      for (var _t207 of l) {
                        var _o71 = r.get(_t207);
                        (ki(_o71) &&
                          _o71.isAttached() &&
                          _o71.isSimpleText() &&
                          !_o71.isUnmergeable() &&
                          Ko(_o71),
                          void 0 !== _o71 && Ka(_o71, i) && La(e, _o71, s),
                          n.add(_t207));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        Ea++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t208 of a) {
                      var _n113 = _t208[0],
                        _l15 = _t208[1];
                      if ((o.set(_n113, _l15), !_l15)) continue;
                      var _c0 = r.get(_n113);
                      void 0 !== _c0 && Ka(_c0, i) && La(e, _c0, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      Ea++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(u, t),
            Ya(t),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref89 of o) {
                var _t209 = _ref89[0];
                {
                  var _e148 = i.get(_t209);
                  void 0 !== _e148 &&
                    (_e148.isAttached() ||
                      (Hr(_e148) && ma(_e148, _t209, r, i, s, o),
                      r.has(_t209) || o["delete"](_t209),
                      s.push(_t209)));
                }
              }
              for (var _t210 of n) {
                var _e149 = i.get(_t210);
                void 0 === _e149 ||
                  _e149.isAttached() ||
                  (cd(_e149) &&
                    null !== _e149.__slots &&
                    ma(_e149, _t210, r, i, s, n),
                  r.has(_t210) || n["delete"](_t210),
                  s.push(_t210));
              }
              var l = Ia(),
                c = l._cloneNotNeeded;
              for (var _t211 of s) (i["delete"](_t211), c["delete"](_t211));
              var a = l._compositionKey;
              null === a || i.has(a) || (l._compositionKey = null);
            })(a, u, t._dirtyLeaves, t._dirtyElements)),
          _r62 !== t._compositionKey && (u._flushSync = !0));
        var _i40 = u._selection;
        if (of(_i40)) {
          t._slotsUsed && kf(_i40);
          var _n114 = u._nodeMap,
            _o72 = _i40.anchor.key,
            _r64 = _i40.focus.key;
          (void 0 !== _n114.get(_o72) && void 0 !== _n114.get(_r64)) || e(19);
        } else sf(_i40) && 0 === _i40._nodes.size && (u._selection = null);
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
          for (var _t212 of r) null !== e && e.has(_t212) && (r[i++] = _t212);
          r.length = i;
        })(t, d);
        var _n115 = null;
        try {
          e instanceof Error && t._onError(e);
        } catch (t) {
          _n115 = { error: t };
        }
        try {
          Wa(t);
        } catch (e) {
          if (
            (cs(function () {
              return Va(t);
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
        ((xa = h), (Ca = g), (Sa = p), (t._updating = _), (Ea = 0));
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
          ? ((u._flushSync = !1), Wa(t))
          : f &&
            cs(function () {
              Wa(t);
            })
        : ((u._flushSync = !1),
          f &&
            (i.clear(),
            (t._deferred = []),
            (t._pendingEditorState = null),
            (t._lastNotifiedSelection = y)));
    }
    function qa(t, e, n) {
      Sa === t && void 0 === n ? (Ma() ? Ga(t, e, n) : e()) : Ga(t, e, n);
    }
    function Xa() {
      for (
        var _len9 = arguments.length, t = new Array(_len9), _key9 = 0;
        _key9 < _len9;
        _key9++
      ) {
        t[_key9] = arguments[_key9];
      }
      return function () {
        for (var _e150 = t.length - 1; _e150 >= 0; _e150--) t[_e150]();
        t.length = 0;
      };
    }
    function Qa(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    function Za(t, e, n) {
      return Xa.apply(
        void 0,
        Array.from(
          Object.entries(e).map(function (_ref90) {
            var e = _ref90[0],
              o = _ref90[1];
            return Qa(t, e, o, n);
          }),
        ),
      );
    }
    var tu = new WeakMap(),
      eu = new WeakMap(),
      nu = Ht(function (t) {
        return (
          t.addEventListener("selectionchange", Uu),
          function () {
            return t.removeEventListener("selectionchange", Uu);
          }
        );
      });
    function ou(t, e, n, o, r, i) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = Ia();
      var u;
      if (void 0 !== i) u = i;
      else {
        var _t213 = El(_l(a));
        u = null !== _t213 ? Ll(_t213, a._rootElement) : null;
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
        ((r || !d) && null !== g && !c.isComposing() && f !== nc(c, g, a)) ||
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
    function ru(t, e) {
      return (
        ms(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function iu(t, e, n) {
      var _Ll = Ll(t, e._rootElement),
        o = _Ll.anchorNode,
        r = _Ll.anchorOffset,
        i = _Ll.focusNode,
        s = _Ll.focusOffset,
        l = e._inputState;
      if (l.isSelectionChangeFromDOMUpdate) {
        l.isSelectionChangeFromDOMUpdate = !1;
        var _t214 = l.selectionChangeFromDOMUpdatePoints;
        if (
          ((l.selectionChangeFromDOMUpdatePoints = null),
          ru(o, r) &&
            ru(i, s) &&
            !l.postDeleteSelectionToRestore &&
            (null === _t214 ||
              (_t214.anchorNode === o &&
                _t214.anchorOffset === r &&
                _t214.focusNode === i &&
                _t214.focusOffset === s)))
        )
          return;
      }
      qa(e, function () {
        if (!n) return void Bs(null);
        if (!ds(e, o, i)) return;
        var c = l.mouseDrag;
        !c || ("mousedown" === c.type && c.defaultPrevented) || yu(e, c, i);
        var a = _u.has(c);
        var u = Rf();
        if (l.postDeleteSelectionToRestore && of(u) && u.isCollapsed()) {
          var _t215 = u.anchor,
            _e151 = l.postDeleteSelectionToRestore.anchor;
          ((_t215.key === _e151.key && _t215.offset === _e151.offset + 1) ||
            (1 === _t215.offset &&
              _e151.getNode().is(_t215.getNode().getPreviousSibling()))) &&
            ((u = l.postDeleteSelectionToRestore.clone()), Bs(u));
        }
        if (((l.postDeleteSelectionToRestore = null), of(u))) {
          var _n116 = u.anchor;
          if (u.isCollapsed())
            ("Range" === t.type && o === i && (u.dirty = !0), cu(e, u));
          else {
            var _t216 = _n116.key,
              _e152 = u.focus,
              _o73 = _e152.key,
              _i41 = u.getNodes(),
              _l16 = _i41.length,
              _c1 = u.isBackward(),
              _ref91 = a ? [_n116.offset, _e152.offset] : [r, s],
              _f6 = _ref91[0],
              _d6 = _ref91[1],
              _h4 = _c1 ? _d6 : _f6,
              _g3 = _c1 ? _f6 : _d6,
              _p3 = _c1 ? _o73 : _t216,
              _2 = _c1 ? _t216 : _o73;
            var _y = C,
              _m = !1;
            for (var _t217 = 0; _t217 < _l16; _t217++) {
              var _e153 = _i41[_t217],
                _n117 = _e153.getTextContentSize();
              if (
                ki(_e153) &&
                0 !== _n117 &&
                !(
                  (0 === _t217 && _e153.__key === _p3 && _h4 === _n117) ||
                  (_t217 === _l16 - 1 && _e153.__key === _2 && 0 === _g3)
                ) &&
                ((_m = !0), (_y &= _e153.getFormat()), 0 === _y)
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
          (n || Ua(t, e)) && t.dispatchCommand(W);
        })(e, u, null !== u && ((u.dirty && !a) || !of(u)));
      });
    }
    function su(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function lu(t, e) {
      su(t, e.getFormat(), e.getStyle());
    }
    function cu(t, n) {
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
        ? su(n, l, c)
        : "text" === o.type
          ? (ki(r) || e(141), lu(n, r))
          : (t.isComposing() || "" !== Ls().getTextContent()) &&
            (Hr(r) || e(259), r.isEmpty() ? Ff(n, "") : su(n, n.format, ""));
    }
    function au(t, e) {
      qa(e, function () {
        var n = Rf(),
          o = El(_l(e)),
          r = Lf();
        if (o)
          if (of(n)) {
            var _t218 = n.anchor,
              _e154 = _t218.getNode();
            "element" === _t218.type &&
              0 === _t218.offset &&
              n.isCollapsed() &&
              !Qr(_e154) &&
              1 === Ls().getChildrenSize() &&
              _e154.getTopLevelElementOrThrow().isEmpty() &&
              null !== r &&
              n.is(r) &&
              (o.removeAllRanges(), (n.dirty = !0));
          } else if (
            "touch" === t.pointerType ||
            "pen" === t.pointerType ||
            (g && "mouse" !== e._inputState.lastPointerType)
          ) {
            var _n118 = Ll(o, e._rootElement).anchorNode;
            (Ul(_n118) || ms(_n118)) && Bs(Pf(r, o, e, t));
          }
        if (u && null !== o && 0 === o.rangeCount) {
          var _n119 = e._rootElement;
          if (null !== _n119 && t.target === _n119) {
            var _i42 = t.clientY;
            var _s24 = _n119.childNodes.length;
            for (var _t219 = 0; _t219 < _n119.childNodes.length; _t219++) {
              var _e155 = _n119.childNodes[_t219];
              if (Ul(_e155)) {
                var _n120 = _e155.getBoundingClientRect();
                if (_i42 <= (_n120.top + _n120.bottom) / 2) {
                  _s24 = _t219;
                  break;
                }
              }
            }
            o.setBaseAndExtent(_n119, _s24, _n119, _s24);
            var _l17 = Pf(r, o, e, t);
            null !== _l17 ? Bs(_l17) : o.removeAllRanges();
          }
        }
        sl(e, U, t);
      });
    }
    var uu = 10,
      fu =
        'input:not(:disabled),textarea:not(:disabled),select:not(:disabled),button:not(:disabled),a[href],area[href],label,summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable]:not([contenteditable="false"])';
    function du(t, e) {
      var n = e.getRootElement();
      null !== n &&
        (hu(t, e, n)
          ? (t.preventDefault(),
            Wl(n.ownerDocument) !== n &&
              (void 0 === e._inputState.savedInputMode &&
                (e._inputState.savedInputMode = n.getAttribute("inputmode")),
              n.setAttribute("inputmode", "none"),
              n.focus({ preventScroll: !0 })))
          : gu(e, n));
    }
    function hu(t, e, n) {
      if ("mouse" === e._inputState.lastPointerType) return !1;
      var o = jl(t);
      if (!Hl(o)) return !1;
      var r = !1;
      for (var _t220 = o; null !== _t220; _t220 = cl(_t220)) {
        if (_t220 === n) return r;
        if (1 === _t220.nodeType) {
          var _e156 = _t220;
          if (_e156.matches(fu)) return !1;
          "true" === _e156.getAttribute("data-lexical-decorator") && (r = !0);
        }
      }
      return !1;
    }
    function gu(t, e) {
      var n = t._inputState.savedInputMode;
      void 0 !== n &&
        ((t._inputState.savedInputMode = void 0),
        null === n
          ? e.removeAttribute("inputmode")
          : e.setAttribute("inputmode", n));
    }
    function pu(t, e) {
      var n = jl(t),
        o = t.pointerType;
      Hl(n) &&
        "touch" !== o &&
        "pen" !== o &&
        0 === t.button &&
        qa(e, function () {
          mc(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
        });
    }
    var _u = new WeakSet();
    function yu(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = Rf(),
        r = o && o.clone();
      !(function (t, e, n) {
        var o = Lf(),
          r = "mousedown" === e.type,
          i = r && !e.shiftKey,
          s = n && Is(n);
        Gr(s) &&
          (r
            ? i && s.isInline() && s.selectPrevious()
            : of(o) && Bs(o.clone()));
        var l = Rf(),
          c = l || (i ? wf() : of(o) ? o.clone() : null),
          a = t.getRootElement(),
          u = a && a.getRootNode();
        if (!of(c) || (i && !c.isCollapsed()) || (!xs(u) && !Ml(u))) return;
        var f = c.anchor,
          d = c.focus;
        if (!r && of(o)) {
          var _o$anchor = o.anchor,
            _t221 = _o$anchor.key,
            _e157 = _o$anchor.offset,
            _n121 = _o$anchor.type;
          f.set(_t221, _e157, _n121, !0);
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
          x = Hr(_) && !_.isInline() && (Qr(_) ? qc(d.getNode(), Of) : _);
        for (var _t222 of x ? Vd(x, "next") : [])
          m.push(Wd(_t222.origin, "previous"), _t222);
        var S = _l(t),
          C = S.document.createRange();
        var v = null;
        for (var _e158 of m) {
          var _n122 = _e158 ? y(_e158.origin, _e158.direction) : _;
          if (!Gr(_n122) || !_n122.isInline() || _n122 === v) continue;
          var _o74 = t.getElementByKey(_n122.getKey());
          if (!_o74) continue;
          C.selectNodeContents(_o74);
          var _r65 = C.getBoundingClientRect(),
            _s25 = _o74.getBoundingClientRect(),
            _ref92 = _r65.height > _s25.height ? _r65 : _s25,
            _a8 = _ref92.bottom,
            _u6 = _ref92.left,
            _p4 = _ref92.right,
            _m2 = _ref92.top;
          if (_e158 && (g < _m2 || g > _a8)) {
            v = _n122;
            continue;
          }
          var _x = "rtl" === S.getComputedStyle(cl(_o74) || _o74).direction,
            _T = 2 * h > _u6 + _p4 !== _x,
            _N = _T ? "next" : "previous",
            _k = _e158 && _e158.getNodeAtCaret(),
            _b = _k && t.getElementByKey(_k.getKey()),
            _E = _b ? _b.getClientRects() : [],
            _O = _E[_T ? 0 : _E.length - 1];
          if (
            !_e158 ||
            (_e158.direction === _N &&
              "none" === S.getComputedStyle(_o74).cssFloat &&
              (!_k ||
                la(_k) ||
                (_O &&
                  (_T === _x
                    ? 2 * _O.right > _u6 + _p4
                    : 2 * _O.left < _u6 + _p4))))
          ) {
            if (!_n122.is(y(rl(d, _T), _N))) {
              var _t223 = Wd(_n122, _N);
              (Oi(d, _t223), i && Oi(f, _t223));
            }
            return void (l || Bs(c));
          }
        }
        if (Gr(s) && !r) {
          var _e159 = S.document,
            _n123 =
              _e159.caretPositionFromPoint &&
              _e159.caretPositionFromPoint(h, g, {
                shadowRoots: Ml(u) ? [u] : [],
              }),
            _o75 = _n123 && Sf(_n123.offsetNode, _n123.offset, null, t);
          if (_o75) {
            var _o75$ = _o75[0],
              _t224 = _o75$.key,
              _e160 = _o75$.offset,
              _n124 = _o75$.type;
            d.set(_t224, _e160, _n124);
          }
        }
      })(t, e, n);
      var i = Rf(),
        s = t._inputState.mouseDrag;
      (s && i && !i.is(r) && _u.add(s),
        "mousedown" === e.type && of(i) && Ff(i, of(r) ? r.anchor.key : ""));
    }
    function mu(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function xu(t) {
      var e = Ia()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = Rf();
      if (!of(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!ki(r)) return;
      var i = o.anchor.offset;
      if (r.getTextContentSize() === i) {
        var _t225 = r.getNextSibling();
        if ("\n" === n) {
          if (g) return;
          if (la(_t225)) _t225.selectEnd();
          else if (!_t225) {
            var _t226 = qc(r, Of),
              _e161 = _t226 && _t226.getNextSibling();
            Hr(_e161) && _e161.selectStart();
          }
        } else
          "\t" === n
            ? es(_t225) && _t225.selectEnd()
            : ki(_t225) &&
              _t225.getTextContent()[0] === n &&
              _t225.select(1, 1);
      } else r.getTextContent()[i] === n && r.select(i + 1, i + 1);
    }
    function Su(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function Cu(t) {
      a &&
        !g &&
        y &&
        (Su(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return Su(t);
        }, 0)));
    }
    function vu(t, e) {
      var n = jl(t);
      if (Ul(n) && mc(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = Wl(o.ownerDocument);
      return null !== r && o.contains(r) && (mc(r, e) || as(o, r));
    }
    function Tu(t, e) {
      var n = t.inputType;
      "deleteCompositionText" === n ||
        (u && il(e)) ||
        ("insertCompositionText" !== n &&
          qa(
            e,
            function () {
              vu(t, e) || sl(e, H, t);
            },
            { event: t },
          ));
    }
    function Nu(t) {
      var _ref93;
      var n = t.inputType,
        o = mu(t),
        r = Ia(),
        i = r._inputState,
        s = Rf();
      if (
        "insertText" === n &&
        t.data &&
        i.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((Su(i), t.preventDefault(), of(s) && !s.isCollapsed())) {
          var _t227 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t227.key, _t227.offset, _t227.type),
            s.focus.set(_t227.key, _t227.offset, _t227.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t228 = Lf();
          if (!of(_t228)) return !0;
          Bs(_t228.clone());
        }
        if (of(s)) {
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
              (bs(null),
              (i.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                qa(r, function () {
                  bs(null);
                });
              }, 30),
              of(s))
            ) {
              var _t229 = s.anchor.getNode();
              (_t229.markDirty(), ki(_t229) || e(142), lu(s, _t229));
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
            var _e162 = s.anchor.getNode(),
              _l18 = _e162.getTextContent(),
              _c10 = _e162.canInsertTextAfter(),
              _a9 = 0 === s.anchor.offset && s.focus.offset === _l18.length;
            var _u7 = m && _n125 && !_a9 && _c10;
            if (
              (_u7 && s.isCollapsed() && (_u7 = !Gr(rl(s.anchor, !0))), !_u7)
            ) {
              sl(r, G, !0);
              var _t230 = Rf();
              m &&
                of(_t230) &&
                _t230.isCollapsed() &&
                ((i.postDeleteSelectionToRestore = _t230),
                setTimeout(function () {
                  return (i.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!of(s))
        return (
          ("historyUndo" !== n && "historyRedo" !== n) ||
            (t.preventDefault(), sl(r, "historyUndo" === n ? it : st)),
          !0
        );
      var l = t.data;
      null !== i.unprocessedBeforeInputData &&
        Js(!1, r, i.unprocessedBeforeInputData);
      var c = !1;
      if (
        (!s.dirty || null !== i.unprocessedBeforeInputData) &&
        s.isCollapsed() &&
        !Qr(s.anchor.getNode()) &&
        null !== o
      ) {
        var _s$anchor = s.anchor,
          _t231 = _s$anchor.key,
          _e163 = _s$anchor.offset,
          _i43 = _s$anchor.type,
          _l19 = r._slotsUsed && vf(s.anchor);
        s.applyDOMRange(o);
        var _a0 = n.endsWith("Forward");
        if (!1 !== _l19 && (_a0 || n.endsWith("Backward"))) {
          var _o76 = Gu(_t231, _e163, _i43),
            _r66 = s.anchor,
            _u8 = s.focus,
            _f7 = !Nf(vf(_r66), _l19) || !Nf(vf(_u8), _l19),
            _d7 =
              !_f7 &&
              null !== _l19 &&
              (_a0
                ? _r66.isBefore(_o76) || _u8.isBefore(_o76)
                : _o76.isBefore(_r66) || _o76.isBefore(_u8));
          (_f7 || _d7) &&
            (_r66.set(_t231, _e163, _i43),
            _u8.set(_t231, _e163, _i43),
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
          var _e164 = t.dataTransfer.getData("text/plain");
          (t.preventDefault(), s.insertRawText(_e164));
        } else
          null != l && ou(s, o, l, t.timeStamp, !0)
            ? (t.preventDefault(), sl(r, Q, l), xu(l))
            : (i.unprocessedBeforeInputData = l);
        return ((i.lastBeforeInputInsertTextTimeStamp = t.timeStamp), !0);
      }
      switch ((t.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          (sl(r, Q, t),
            xu(
              (_ref93 = t.dataTransfer
                ? t.dataTransfer.getData("text/plain")
                : null) != null
                ? _ref93
                : t.data,
            ));
          break;
        case "insertFromComposition": {
          i.compositionPhase = "idle";
          var _e165 = i.hadOrphanedCompositionEvents;
          i.hadOrphanedCompositionEvents = !1;
          var _n126 = r._compositionKey;
          (bs(null), _e165 || sl(r, Q, t), wu(_n126));
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
    function ku(t, e) {
      t.stopPropagation();
      var n = e._inputState;
      (Su(n),
        qa(
          e,
          function () {
            vu(t, e) || e.dispatchCommand(V, t);
          },
          { event: t },
        ),
        (n.unprocessedBeforeInputData = null));
    }
    function bu(t) {
      var e = Ia(),
        n = e._inputState,
        o = Rf(),
        r = t.data,
        i = mu(t);
      var s = !1,
        l = !1;
      if (null != r && of(o)) {
        var _c11 = El(_l(e)),
          _a1 = null !== _c11 ? Ll(_c11, e._rootElement) : null,
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
            ki(_h5) &&
            ys(_h5);
        if (!_f8 && !_g4 && ou(o, i, r, t.timeStamp, !1, _a1)) {
          if (((s = !0), "ending-firefox" === n.compositionPhase)) {
            var _t232 = Au(e, r);
            if (((n.compositionPhase = "idle"), _t232))
              return (dl(Fo), zs(), !0);
          }
          var _i44 = o.anchor.getNode();
          if (null === _c11 || null === _a1) return !0;
          var _f9 = o.isBackward(),
            _h6 = _f9 ? o.anchor.offset : o.focus.offset,
            _g5 = _f9 ? o.focus.offset : o.anchor.offset;
          (d &&
            !o.isCollapsed() &&
            ki(_i44) &&
            null !== _a1.anchorNode &&
            _i44.getTextContent().slice(0, _h6) +
              r +
              _i44.getTextContent().slice(_h6 + _g5) ===
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
          (Js(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (Au(e, r || void 0), dl(Fo), (n.compositionPhase = "idle"))),
        zs(l),
        !0
      );
    }
    function Eu(t, e) {
      sl(e, J, t);
    }
    function Ou(t) {
      var e = Ia(),
        n = e._inputState,
        o = Rf();
      if (of(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r67 = o.anchor,
          _i45 = o.anchor.getNode();
        if (
          (bs(_r67.key),
          dl(Po),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r67.type ||
            !o.isCollapsed() ||
            (!m &&
              (_i45.getFormat() !== o.format ||
                (ki(_i45) && _i45.getStyle() !== o.style))) ||
            (ki(_i45) &&
              (ys(_i45) ||
                (0 === _r67.offset && !_i45.canInsertTextBefore()) ||
                (_r67.offset === _i45.getTextContentSize() &&
                  !_i45.canInsertTextAfter()))))
        ) {
          g || (!_ && !x)
            ? sl(e, Q, N)
            : (function (t) {
                Zu(t, "", !0);
              })(o);
          var _t233 = Rf();
          of(_t233) && bs(_t233.anchor.key);
        }
      }
      return !0;
    }
    function Mu(t) {
      var e = Ia();
      return (
        (e._inputState.compositionPhase = "idle"),
        Au(e, t.data),
        dl(Fo),
        !0
      );
    }
    function wu(t) {
      var e = Ia()._inputState,
        n = e.composedSegmentedKey;
      if (((e.composedSegmentedKey = null), null === t || t !== n)) return;
      var o = Ms(t);
      if (!ki(o) || "text" === o.getType() || ys(o) || !o.isAttached()) return;
      var r = Rf(),
        i = of(r) && r.anchor.key === t ? r.anchor.offset : null,
        s = Ni(o.getTextContent());
      if (
        (s.setFormat(o.getFormat()),
        s.setStyle(o.getStyle()),
        o.replace(s),
        null !== i)
      ) {
        var _t234 = Math.min(i, s.getTextContentSize());
        s.select(_t234, _t234);
      }
    }
    function Au(t, e) {
      var n = t._compositionKey;
      if ((bs(null), null !== n && null != e)) {
        if ("" === e) {
          var _e166 = Ms(n),
            _o77 = t.getElementByKey(n),
            _r68 = null !== _o77 && ki(_e166) ? nc(_e166, _o77, t) : null;
          if (null !== _r68 && null !== _r68.nodeValue && ki(_e166)) {
            var _n127 = El(_l(t)),
              _o78 = _n127 && Ll(_n127, t._rootElement);
            var _i46 = null,
              _s26 = null;
            (null !== _o78 &&
              _o78.anchorNode === _r68 &&
              ((_i46 = _o78.anchorOffset), (_s26 = _o78.focusOffset)),
              Ys(_e166, _r68.nodeValue, _i46, _s26, !0));
          }
          return (wu(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e167 = Rf();
          if (of(_e167) || sf(_e167)) {
            if (of(_e167)) {
              var _t235 = _e167.focus;
              _e167.anchor.set(_t235.key, _t235.offset, _t235.type);
            }
            return (sl(t, gt, null), wu(n), !1);
          }
        }
        var _o79 = Ms(n);
        if (null !== _o79 && ki(_o79) && ys(_o79)) {
          _o79.markDirty();
          var _t236 = Rf(),
            _r69 = _o79.getTextContentSize(),
            _i47 =
              of(_t236) && _t236.anchor.key === n ? _t236.anchor.offset : _r69;
          return (_o79.select(_i47, _i47).insertText(e), !0);
        }
      }
      return (Js(!0, t, e), wu(n), !1);
    }
    function Du(t, e) {
      var n = e._inputState;
      u
        ? (n.compositionPhase = "ending-firefox")
        : ("" === t.data || g || (!_ && !x)) && sl(e, Y, t);
    }
    function Iu(t, e) {
      var n = e._inputState;
      (g &&
        (n.isShiftKeyDown =
          "Shift" === t.key ||
          (n.isShiftKeyDown && t.shiftKey && "Enter" === t.key)),
        (n.lastKeyDownTimeStamp = t.timeStamp),
        (n.lastKeyCode = t.key),
        "Backspace" !== t.key && Su(n),
        e.isComposing() ||
          (!g && (_ || x) && 229 === t.keyCode) ||
          sl(e, lt, t));
    }
    function Pu(t, e) {
      (t.shiftKey && "CapsLock" !== t.key) ||
        (e._inputState.isShiftKeyDown = !1);
    }
    var Fu = { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: "any" },
      Ru = { ctrlKey: !0 },
      Lu = { metaKey: !0 },
      Ku = { shiftKey: "any" },
      Bu = { altKey: "any", shiftKey: "any" };
    function zu(t) {
      var e = Ia();
      if (null == t.key) return !0;
      var n = e._keyDownShortcuts;
      null === n &&
        ((n = Ut(
          (function () {
            var t = function t(_t237, e, n) {
                return {
                  key: _t237,
                  modifiers: e,
                  onMatch: function onMatch(t, e) {
                    sl(e, n, t);
                  },
                };
              },
              e = function e(t, _e168, n, o) {
                return {
                  key: t,
                  modifiers: _e168,
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
                      of(o) ||
                      us(t) ||
                      (t.preventDefault(), sl(n, e, t));
                  },
                };
              };
            return [
              t("ArrowRight", Ku, ct),
              t("ArrowLeft", Ku, ut),
              t("ArrowUp", Bu, dt),
              t("ArrowDown", Bu, ht),
              n(babelHelpers["extends"]({}, Fu, { shiftKey: !0 }), !0),
              n(babelHelpers["extends"]({}, Fu, { shiftKey: !1 }), !1),
              t(" ", Fu, pt),
              {
                key: "Backspace",
                modifiers: Ku,
                onMatch: function onMatch(t, e) {
                  sl(e, _t, t) && Cu(e._inputState);
                },
              },
              t("Escape", Fu, yt),
              t("Delete", {}, mt),
              e("Backspace", zt, et, !0),
              e("Delete", zt, et, !1),
              e("b", Bt, ot, "bold"),
              e("u", Bt, ot, "underline"),
              e("i", Bt, ot, "italic"),
              t("Tab", Ku, xt),
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
                        modifiers: Ru,
                        onMatch: function onMatch(t, e) {
                          (t.preventDefault(), sl(e, q, !0));
                        },
                      },
                      t(
                        "ArrowLeft",
                        babelHelpers["extends"]({ metaKey: !0 }, Ku),
                        ft,
                      ),
                      t(
                        "ArrowRight",
                        babelHelpers["extends"]({ metaKey: !0 }, Ku),
                        at,
                      ),
                      e("h", Ru, G, !0),
                      e("d", Ru, G, !1),
                      e("Backspace", Lu, nt, !0),
                      e("Delete", Lu, nt, !1),
                      e("k", Ru, nt, !1),
                    ]
                  : [
                      t("Home", Ku, ft),
                      t("End", Ku, at),
                      e("y", Ru, st, void 0),
                    ],
              ),
              [
                {
                  key: "a",
                  modifiers: Bt,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), sl(e, wt, t) && Cu(e._inputState));
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
    function $u(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    function Wu(t, e, n, o) {
      if (void 0 !== o)
        for (var _t238 of o.editors)
          _t238._inputState.isSelectionChangeFromMouseDown = !1;
      var r = Ll(e, t._rootElement).anchorNode;
      (Ul(r) || ms(r)) && Bs(Pf(Lf(), e, t, n));
    }
    var ju = new Map();
    function Uu(t) {
      var e = t.target;
      if (Ul(e) && ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName))
        return;
      var n = Ol(e);
      if (null === n) return;
      var o = al(e);
      var r = null;
      var i = null !== o ? eu.get(o) : void 0;
      if (null !== o) {
        if (void 0 !== i) {
          var _t239 = i.editors;
          var _e169 = i.hasShadowEditor;
          if (void 0 === _e169) {
            _e169 = !1;
            for (var _n128 of _t239)
              if (
                null !== _n128._rootElement &&
                Ml(_n128._rootElement.getRootNode())
              ) {
                _e169 = !0;
                break;
              }
            i.hasShadowEditor = _e169;
          }
          if (_e169) {
            var _e170 = null;
            for (var _o80 of _t239) {
              var _t240 = _o80._rootElement;
              if (null === _t240) continue;
              var _i48 = Ll(n, _t240).anchorNode;
              if (null !== _i48 && gs(_i48) === _o80) {
                if (Ml(_t240.getRootNode())) {
                  r = _o80;
                  break;
                }
                null === _e170 && (_e170 = _o80);
              }
            }
            null === r && null !== _e170 && (r = _e170);
          } else {
            var _t241 = n.anchorNode;
            null === _t241 ||
              (Ul(_t241) && null !== _t241.shadowRoot) ||
              (r = gs(_t241));
          }
        }
        if (null === r) {
          var _t242 = Wl(o);
          r = null !== _t242 ? gs(_t242) : null;
        }
      }
      if (null === r) return;
      r._inputState.isSelectionChangeFromMouseDown &&
        qa(r, function () {
          return Wu(r, n, t, i);
        });
      var s = js(r),
        l = s[s.length - 1],
        c = l._key,
        a = ju.get(c),
        u = a || l;
      (u !== r && iu(n, u, !1),
        iu(n, r, !0),
        r !== l ? ju.set(c, r) : a && ju["delete"](c));
    }
    function Hu(t) {
      t._lexicalHandled = !0;
    }
    function Vu(t) {
      return !0 === t._lexicalHandled;
    }
    var Ju = z();
    var _Yu = (function () {
      function Yu(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto17 = Yu.prototype;
      _proto17.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto17.isBefore = function isBefore(t) {
        return this.key === t.key
          ? this.offset < t.offset
          : oh(Li(Ei(this, "next")), Li(Ei(t, "next"))) < 0;
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
          Ma() ||
            (Es() === i && bs(t),
            null !== r &&
              (r.setCachedNodes(null),
              of(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return Yu;
    })();
    function Gu(t, e, n) {
      return new _Yu(t, e, n);
    }
    function qu(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (ki(e)) {
        r = "text";
        var _t243 = e.getTextContentSize();
        o > _t243 && (o = _t243);
      } else if (!Hr(e)) {
        var _t244 = e.getNextSibling();
        if (ki(_t244)) ((n = _t244.__key), (o = 0), (r = "text"));
        else {
          var _t245 = e.getParent();
          _t245 && ((n = _t245.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function Xu(t, e) {
      if (Hr(e)) {
        var _n129 = e.getLastDescendant();
        Hr(_n129) || ki(_n129) ? qu(t, _n129) : qu(t, e);
      } else qu(t, e);
    }
    function Qu(t, e, n, o) {
      var r = t.getNode(),
        i = r.getChildAtIndex(t.offset),
        s = Ni();
      if ((s.setFormat(n), s.setStyle(o), Xi(i))) i.splice(0, 0, [s]);
      else if (null !== i) {
        var _t246 = Sl(r) ? qi().append(s) : s;
        i.insertBefore(_t246);
      } else if (Sl(r)) {
        var _t247 = r.getLastChild();
        Hr(_t247) && !_t247.isInline() && _t247.isEmpty()
          ? _t247.append(s)
          : r.append(qi().append(s));
      } else r.append(s);
      (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
    }
    function Zu(t, n, o) {
      var r = t.format,
        i = t.style;
      if (!t.isCollapsed()) {
        var _e171 = (t.focus.isBefore(t.anchor) ? t.focus : t.anchor).getNode();
        if (
          (ki(_e171) && ((r = _e171.getFormat()), (i = _e171.getStyle())),
          t.removeText(),
          (t.format = r),
          (t.style = i),
          "" === n && !o)
        )
          return;
        if (null === Es())
          return (
            "element" === t.anchor.type && Qu(t.anchor, t.focus, r, i),
            void tf(t, n, r, i)
          );
      }
      "element" === t.anchor.type && Qu(t.anchor, t.focus, r, i);
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
              (Ia()._inputState.composedSegmentedKey = s.getKey()));
          else {
            var _e172 = Ni(s.getTextContent());
            (_e172.setFormat(r),
              _e172.setStyle(i),
              _e172.setDetail(s.getDetail()),
              xn(s, _e172));
            var _n130 = Rf() === t;
            (s.replace(_e172),
              t.setTextNodeRange(_e172, l, _e172, l),
              _n130 && Rf() !== t && Bs(t));
          }
          return void (("" !== n || o) && Zu(t, n, o));
        }
        if ("" === n && !o) return;
        if (0 === l || l === a) {
          var _e173 = 0 === l,
            _a10 = _e173 ? "previous" : "next",
            _u9 = Wd(s, _a10).getNodeAtCaret();
          var _f0;
          ki(_u9) &&
          (_e173 ? _u9.canInsertTextAfter() : _u9.canInsertTextBefore()) &&
          !ys(_u9)
            ? (_f0 = _u9)
            : ((_f0 = Ni().setFormat(r).setStyle(i)),
              Wd(
                (_e173 ? c.canInsertTextBefore() : c.canInsertTextAfter())
                  ? s
                  : c,
                _a10,
              ).insert(_f0));
          var _d8 = _e173 ? void 0 : 0;
          return (_f0.select(_d8, _d8), void Zu(t, n, o));
        }
        var _e174 = Ni(n);
        return (
          _e174.setFormat(r),
          _e174.setStyle(i),
          gi(s),
          hi(_e174),
          s.replace(_e174),
          void _e174.select()
        );
      }
      if ("" === n && !o) return;
      var u = c.isInline() && 0 === l && !s.__prev,
        f = c.isInline() && l === a && !s.__next,
        d = s.getFormat() !== r || s.getStyle() !== i;
      if (u || f || d) {
        if ("" !== s.getTextContent() || u || f) return void tf(t, n, r, i);
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
    function tf(t, n, o, r) {
      var i = t.anchor.getNode();
      ki(i) || e(398);
      var s = t.anchor.offset,
        l = Ni(n).setFormat(o).setStyle(r);
      hi(l);
      var c = i.getParentOrThrow(),
        a = 0 === s,
        u = a || s === i.getTextContentSize();
      if (u && c.isInline() && !(a ? i.__prev : i.__next))
        Wd(c, a ? "previous" : "next").insert(l);
      else {
        var _t248 = u ? i : i.splitText(s)[0];
        a ? _t248.insertBefore(l, !1) : _t248.insertAfter(l, !1);
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
    var _ef = (function () {
      function ef(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto18 = ef.prototype;
      _proto18.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto18.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto18.is = function is(t) {
        if (!sf(t)) return !1;
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
        return new ef(new Set(this._nodes));
      };
      _proto18.extract = function extract() {
        return this.getNodes();
      };
      _proto18.insertRawText = function insertRawText(t) {};
      _proto18.insertText = function insertText() {};
      _proto18.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === ud(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (ki(o)) r = o.select();
        else {
          var _t249 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t249, _t249);
        }
        r.insertNodes(t);
        for (var _t250 = 0; _t250 < n; _t250++) e[_t250].remove();
      };
      _proto18.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t251 of e) {
          var _e175 = Ms(_t251);
          null !== _e175 && n.push(_e175);
        }
        return (Ma() || (this._cachedNodes = n), n);
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
          return null === ud(t);
        });
        if ((Rf() || Lf()) === this && t[0]) {
          var _e176 = Wd(t[0], "next");
          Mi(eh(_e176, _e176));
        }
        for (var _e177 of t) _e177.remove();
        nf();
      };
      return ef;
    })();
    function nf() {
      var t = Ls();
      if (0 === t.getChildrenSize() && null === gd(Rf())) {
        var _e178 = qi();
        (t.append(_e178), _e178.select());
      }
    }
    function of(t) {
      return t instanceof _rf;
    }
    var _rf = (function () {
      function rf(t, e, n, o) {
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
      var _proto19 = rf.prototype;
      _proto19.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto19.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto19.is = function is(t) {
        return (
          !!of(t) &&
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
            if (Kd(_n132)) {
              var _t252 = _n132.origin;
              0 === e.length ? r.add(_t252) : (i++, e.push(_t252));
            } else {
              var _t253 = _n132.origin;
              Hr(_t253) && 0 !== i ? i-- : e.push(_t253);
            }
          if (
            (o && e.push(o.caret.origin),
            Ld(t.focus) &&
              Hr(t.focus.origin) &&
              null === t.focus.getNodeAtCaret())
          )
            for (
              var _n133 = Vd(t.focus.origin, "previous");
              Kd(_n133) &&
              r.has(_n133.origin) &&
              !_n133.origin.isEmpty() &&
              _n133.origin.is(e[e.length - 1]);
              _n133 = Yd(_n133)
            )
              (r["delete"](_n133.origin), e.pop());
          for (; e.length > 1; ) {
            var _t254 = e[e.length - 1];
            if (!Hr(_t254) || i > 0 || _t254.isEmpty() || r.has(_t254)) break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n134 = Li(t.anchor),
              _o81 = Li(t.anchor.getFlipped()),
              _r70 = function _r70(t) {
                return Rd(t) ? t.origin : t.getNodeAtCaret();
              },
              _i49 =
                _r70(_n134) ||
                _r70(_o81) ||
                (t.anchor.getNodeAtCaret() ? _n134.origin : _o81.origin);
            e.push(_i49);
          }
          return e;
        })(Bi(Ai(this), "next"));
        return (Ma() || (this._cachedNodes = e), e);
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
        for (var _r71 = 0; _r71 < t.length; _r71++) {
          var _i50 = t[_r71];
          if (Hr(_i50) && !_i50.isInline()) {
            o || (n += "\n");
            var _t255 = "";
            for (var _e179 of _d(_i50)) {
              var _n135 = yd(_i50, _e179);
              null !== _n135 && (_t255 += _n135.getTextContent());
            }
            "" !== _t255 ? ((n += _t255), (o = !1)) : (o = !_i50.isEmpty());
          } else if (((o = !1), ki(_i50))) {
            var _t256 = Wi(e, _i50);
            n += _t256 ? _t256.getTextContent() : _i50.getTextContent();
          } else (Gr(_i50) || la(_i50)) && (n += _i50.getTextContent());
        }
        return n;
      };
      _proto19.applyDOMRange = function applyDOMRange(t) {
        var e = Ia(),
          n = e.getEditorState()._selection,
          o = Ef(
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
        return new rf(
          Gu(t.key, t.offset, t.type),
          Gu(e.key, e.offset, e.type),
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
        this.insertNodes(Vf(t));
      };
      _proto19.insertText = function insertText(t) {
        Zu(this, t, !1);
      };
      _proto19.removeText = function removeText() {
        var t = Rf() === this,
          e = this.anchor.key;
        (wi(this, Fi(Ai(this))),
          this.isCollapsed() && Ff(this, e),
          t && Rf() !== this && Bs(this));
      };
      _proto19.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        af(this, t, e);
      };
      _proto19.insertNodes = function insertNodes(t) {
        var _i51;
        if (0 === t.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if (
          "element" === this.anchor.type &&
          Hr(n) &&
          n.isShadowRoot() &&
          null !== ud(n)
        ) {
          var _n$getFirstChild;
          var _o82 =
            (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(qi()).getFirstChild();
          if (null !== _o82 && !Hr(_o82)) {
            var _t257 = qi();
            (_o82.insertBefore(_t257), (_o82 = _t257));
          }
          if (null !== _o82) {
            _o82.selectStart();
            var _n136 = Rf();
            return (of(_n136) || e(369), _n136.insertNodes(t));
          }
        }
        if ("element" === this.anchor.type && Or(n)) {
          var _e180 = Xf(t),
            _o83 = _e180.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _e180.getChildren()),
            void (null !== _o83 && _o83.selectEnd())
          );
        }
        var o = this.isBackward() ? this.focus : this.anchor;
        var r = o.getNode(),
          i = qc(r, Xl);
        var s = t[t.length - 1];
        if (Hr(i) && "__language" in i) {
          if ("__language" in t[0]) this.insertText(t[0].getTextContent());
          else {
            var _Yf = Yf(this),
              _e181 = _Yf[1];
            (i.splice(_e181, 0, t), s.selectEnd());
          }
          return;
        }
        if (
          !t.some(function (t) {
            return (Hr(t) || Gr(t)) && !t.isInline();
          })
        ) {
          Hr(i) || e(211, r.constructor.name, r.getType());
          var _Yf2 = Yf(this, !0),
            _n137 = _Yf2[0],
            _o84 = _Yf2[1];
          return (
            (Hr(_n137) ? _n137 : i).splice(_o84, 0, t),
            void s.selectEnd()
          );
        }
        if (null === i) {
          var _e182 = Xf(t),
            _n138 = _e182.getLastDescendant();
          var _o85 = Ei(this.anchor, "next");
          for (var _t258 of _e182.getChildren()) _o85 = Vi(_t258, _o85);
          return void (null !== _n138 && _n138.selectEnd());
        }
        if (
          Hr(i) &&
          (null !== ud(i) ||
            (!i.isParentRequired() && !Or(i.getParentOrThrow())))
        ) {
          var _Yf3 = Yf(this),
            _e183 = _Yf3[1],
            _n139 = Jf(t);
          i.splice(_e183, 0, _n139);
          var _o86 = _n139[_n139.length - 1];
          return void (void 0 !== _o86
            ? _o86.selectEnd()
            : i.select(_e183, _e183));
        }
        var l = Xf(t),
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
                var _t259 = e;
                null !== _t259 && !Xl(_t259) && !Sl(_t259);
                _t259 = _t259.getParent()
              ) {
                var _e184 = _t259.getPreviousSibling();
                if (null !== _e184) return _e184;
              }
              return null;
            })(t);
            return la(e) && la(e.getPreviousSibling());
          })(o),
          f = Hr(i) && i.isEmpty() ? null : this.insertParagraph();
        f && !i.isAttached() && ((r = this.anchor.getNode()), (i = qc(r, Xl)));
        var d = a[a.length - 1];
        var h = a[0];
        var g;
        ((g = h),
          u ||
            !Hr(g) ||
            !Xl(g) ||
            g.isEmpty() ||
            !Hr(i) ||
            (i.isEmpty() && !i.canMergeWhenEmpty()) ||
            (Hr(i) || e(211, r.constructor.name, r.getType()),
            (_i51 = i).append.apply(_i51, Array.from(h.getChildren())),
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
              for (var _t260 of i) s = s.insertAfter(_t260);
            })(i, h)));
        var p = qc(c, Xl),
          _ = c.selectEnd();
        (f &&
          (Hr(p) && (f.canMergeWhenEmpty() || Xl(d))
            ? (p.append.apply(p, Array.from(f.getChildren())), f.remove())
            : f.isEmpty() && f.remove()),
          Hr(i) && i.isEmpty() && i.remove());
        var y = Hr(i) ? i.getLastChild() : null;
        la(y) && p !== i && y.remove();
        var m = Li(Ei(_.anchor, "next"));
        (Oi(_.anchor, m), Oi(_.focus, m));
      };
      _proto19.insertParagraph = function insertParagraph() {
        this.isCollapsed() || this.removeText();
        var t = this.anchor.getNode();
        if ("element" === this.anchor.type && Or(t)) {
          var _e185 = qi();
          return (
            t.splice(this.anchor.offset, 0, [_e185]),
            _e185.select(),
            _e185
          );
        }
        var _Yf4 = Yf(this),
          n = _Yf4[1],
          o = qc(this.anchor.getNode(), Xl);
        if (null !== o && null !== ud(o)) return null;
        Hr(o) || e(213);
        var r = o.getChildAtIndex(n),
          i = r ? [r].concat(Array.from(r.getNextSiblings())) : [],
          s = o.insertNewAfter(this, !1);
        return s
          ? (s.append.apply(s, Array.from(i)), s.selectStart(), s)
          : null;
      };
      _proto19.insertLineBreak = function insertLineBreak(t) {
        var e = sa();
        if ((this.insertNodes([e]), t)) {
          var _t261 = e.getParentOrThrow(),
            _n140 = e.getIndexWithinParent();
          _t261.select(_n140, _n140);
        }
      };
      _proto19.extract = function extract() {
        var t = this.getNodes();
        if (this.isCollapsed()) return [].concat(Array.from(t));
        var e = this.isBackward(),
          n = Ai(this).getTextSlices(),
          o = [];
        for (var _e186 of t) {
          var _t262 = Wi(n, _e186),
            _r72 = _t262 ? ji(_t262, this) : _e186;
          null !== _r72 && o.push(_r72);
        }
        if (1 === t.length && 1 === o.length && ki(o[0])) {
          var _t263 = o[0],
            _ref94 = e ? [this.focus, this.anchor] : [this.anchor, this.focus],
            _n141 = _ref94[0],
            _r73 = _ref94[1];
          (_n141.set(_t263.getKey(), 0, "text"),
            _r73.set(_t263.getKey(), _t263.getTextContentSize(), "text"));
        }
        return o;
      };
      _proto19.modify = function modify(t, e, n) {
        if (Qf(this, t, e, n)) return;
        var o = "move" === t,
          r = Ia(),
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
          ("text" === this.focus.type && (u = ki(c) ? nc(c, a, r) : null),
          this.dirty)
        ) {
          var _t264 = ll(r, this.anchor.key);
          var _e187 = _t264;
          if ("text" === this.anchor.type) {
            var _n142 = this.anchor.getNode();
            _e187 = ki(_n142) ? nc(_n142, _t264, r) : null;
          }
          _e187 && u && Wf(i, _e187, this.anchor.offset, u, this.focus.offset);
        }
        if (
          "character" === n &&
          ki(c) &&
          c.isUnmergeable() &&
          (e
            ? 0 === this.focus.offset
            : this.focus.offset === c.getTextContentSize())
        ) {
          var _t265 = Wd(c, e ? "previous" : "next").getNodeAtCaret();
          if (ki(_t265)) {
            if (!o) {
              var _n143 = _t265.getTextContentSize();
              return (
                e
                  ? this.focus.set(_t265.__key, _n143 - 1, "text")
                  : this.focus.set(_t265.__key, 1, "text"),
                void (this.dirty = !0)
              );
            }
            {
              var _n144 = r.getElementByKey(_t265.getKey()),
                _o87 = _n144 ? nc(_t265, _n144, r) : null;
              if (_o87) {
                var _t266 = e ? _o87.length : 0;
                Wf(i, _o87, _t266, _o87, _t266);
              }
            }
          }
        }
        if ((hf(i, t, e ? "backward" : "forward", n, l), i.rangeCount > 0)) {
          var _t267 = Fl(i, r._rootElement),
            _n145 = _t267 || i.getRangeAt(0),
            _s27 = this.anchor.getNode(),
            _l20 = Qr(_s27) ? _s27 : ml(_s27);
          (this.applyDOMRange(_n145),
            (this.dirty = !0),
            o ||
              (gf(this, e, _l20),
              (_t267
                ? "backward" !== i.direction
                : i.anchorNode === _n145.startContainer &&
                  i.anchorOffset === _n145.startOffset) || df(this)));
        }
        "lineboundary" === n && Qf(this, t, e, n, "decorators");
      };
      _proto19.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Hr(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t268 = e.getParent(),
            _n146 =
              e.getNextSibling() ||
              (null === _t268 ? null : _t268.getNextSibling());
          if (Hr(_n146) && _n146.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto19.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e188 = this.anchor;
          var _n147 = _e188.getNode();
          if (this.forwardDeletion(_e188, _n147, t)) {
            var _t269 = Hr(_n147) ? _n147.getNextSibling() : null;
            if (
              !(
                Hr(_n147) &&
                _n147.isEmpty() &&
                Hr(_t269) &&
                _t269.isShadowRoot()
              )
            )
              return;
          }
          var _o88 = Ei(_e188, t ? "previous" : "next"),
            _r74 = Zd(_o88);
          if (
            _r74.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            if ("element" === _e188.type) {
              var _t270 = _o88.getNodeAtCaret();
              if (Hr(_t270) && kl(_t270)) {
                var _e189 = _t270.getParent();
                _t270.remove();
                var _n148 = Ks(_e189, _t270);
                return void (null !== _n148 && _n148.selectStart());
              }
            }
            var _t271 = { type: "initial" };
            for (var _e190 of _r74.iterNodeCarets("shadowRoot"))
              if (Kd(_e190)) {
                if (_e190.origin.isInline());
                else {
                  if (_e190.origin.isShadowRoot()) {
                    if ("merge-block" === _t271.type) break;
                    if (
                      Hr(_r74.anchor.origin) &&
                      _r74.anchor.origin.isEmpty()
                    ) {
                      var _t272 = Li(_e190);
                      (wi(this, eh(_t272, _t272)), _r74.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t271.type &&
                    "merge-block" !== _t271.type) ||
                    (_t271 = {
                      block: _t271.block,
                      caret: _e190,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t271.type) break;
                if (Ld(_e190)) {
                  if (Hr(_e190.origin)) {
                    if (_e190.origin.isInline()) {
                      if (!_e190.origin.isParentOf(_r74.anchor.origin)) break;
                    } else
                      _t271 = { block: _e190.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Gr(_e190.origin)) {
                    if (_e190.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t271.type &&
                      (_e190.origin.isKeyboardSelectable() ||
                        !_e190.origin.isInline()) &&
                      Hr(_r74.anchor.origin) &&
                      _r74.anchor.origin.isEmpty()
                    ) {
                      _r74.anchor.origin.remove();
                      var _t273 = Af();
                      (_t273.add(_e190.origin.getKey()), Bs(_t273));
                    } else {
                      var _t274 = _e190.origin,
                        _n149 = _t274.getParent();
                      _t274.remove();
                      var _o89 = Ks(_n149, _t274);
                      null !== _o89 && _o89.selectStart();
                    }
                    return;
                  }
                  if (la(_e190.origin)) return void _e190.origin.remove();
                  break;
                }
              }
            if ("merge-block" === _t271.type) {
              var _t275 = _t271,
                _e191 = _t275.caret,
                _n150 = _t275.block;
              if (_d(_n150).length > 0) return;
              return _e191.origin.isEmpty() &&
                !_n150.isEmpty() &&
                _e191.origin.getParent() === _n150.getParent()
                ? void _e191.origin.remove(!0)
                : (wi(
                    this,
                    eh(
                      !_e191.origin.isEmpty() && _n150.isEmpty()
                        ? Di(Wd(_n150, _e191.direction))
                        : _r74.anchor,
                      _e191,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t276 = _e188.getNode(); null !== _t276; ) {
              if (null !== ud(_t276)) return;
              if (Hr(_t276) && _t276.isShadowRoot()) break;
              _t276 = _t276.getParent();
            }
          }
          var _i52 = this.focus;
          if ((pf(this, t, "character"), this.isCollapsed())) {
            if (
              t &&
              0 === _e188.offset &&
              (function (t, e) {
                for (var _n151 = e; _n151; _n151 = _n151.getParent()) {
                  if (Hr(_n151)) {
                    if (_n151.collapseAtStart(t)) return !0;
                    if (Sl(_n151)) break;
                  }
                  if (_n151.getPreviousSibling()) break;
                }
                return !1;
              })(this, _e188.getNode())
            )
              return;
          } else {
            var _o90 = "text" === _i52.type ? _i52.getNode() : null;
            if (
              ((_n147 = "text" === _e188.type ? _e188.getNode() : null),
              null !== _o90 && _o90.isSegmented())
            ) {
              var _e192 = _i52.offset,
                _r75 = _o90.getTextContentSize();
              if (
                _o90.is(_n147) ||
                (t && _e192 !== _r75) ||
                (!t && 0 !== _e192)
              )
                return void xf(_o90, t, _e192);
            } else if (null !== _n147 && _n147.isSegmented()) {
              var _r76 = _e188.offset,
                _i53 = _n147.getTextContentSize();
              if (_n147.is(_o90) || (t && 0 !== _r76) || (!t && _r76 !== _i53))
                return void xf(_n147, t, _r76);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode();
              if (r === o.getNode() && "text" === n.type && "text" === o.type) {
                var _t277 = n.offset,
                  _s28 = o.offset,
                  _l21 = _t277 < _s28,
                  _c12 = _l21 ? _t277 : _s28,
                  _a11 = _l21 ? _s28 : _t277,
                  _u0 = _a11 - 1;
                _c12 !== _u0 &&
                  !Ws((i = r.getTextContent().slice(_c12, _a11))) &&
                  !mf(i) &&
                  (e ? o.set(o.key, _u0, o.type) : n.set(n.key, _u0, n.type));
              }
              var i;
            })(this, t);
          }
        }
        (e || ff(this),
          this.removeText(),
          t &&
            !e &&
            this.isCollapsed() &&
            "element" === this.anchor.type &&
            0 === this.anchor.offset &&
            nf());
      };
      _proto19.deleteLine = function deleteLine(t) {
        lf(this, t, "lineboundary");
      };
      _proto19.deleteWord = function deleteWord(t) {
        lf(this, t, "word");
      };
      _proto19.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (Ma() || (this._cachedIsBackward = e), e);
      };
      _proto19.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return rf;
    })();
    function sf(t) {
      return t instanceof _ef;
    }
    function lf(t, e, n) {
      var o = t.isCollapsed(),
        r = t.anchor,
        i = t.focus;
      var s = !1;
      if (o) {
        if ("word" === n && t.forwardDeletion(r, r.getNode(), e)) return;
        ((s = pf(t, e, n)),
          "lineboundary" === n &&
            (function (t) {
              for (var _e193 of Ai(t).iterNodeCarets("shadowRoot"))
                if (Ld(_e193) && la(_e193.origin))
                  return void Oi(t.focus, Di(_e193));
            })(t));
      }
      ("lineboundary" !== n ||
        t.isCollapsed() ||
        qc(r.getNode(), Xl) === qc(i.getNode(), Xl) ||
        i.set(r.key, r.offset, r.type),
        t.isCollapsed()
          ? s || t.deleteCharacter(e)
          : (o || ff(t), t.removeText()));
    }
    function cf(t, e) {
      if (sf(t)) {
        for (var _n152 of t.getNodes())
          ai(_n152) && _n152.setFormat(e(_n152.getFormat()));
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
          var _n153 = Wi(o, _a12);
          if (!l && _n153 && 0 === _n153.distance) {
            var _e194 = t.isBackward() ? t.focus : t.anchor;
            "text" === _e194.type && _e194.key === _a12.__key && (r = _e194);
          }
          if (((l = !0), _n153 && 0 === _n153.distance)) continue;
          var _u1 = e(_a12.getFormat()),
            _f1 = r ? _a12.getTextContentSize() : 0,
            _d9 = _n153 && !ys(_a12) ? ji(_n153, t) : _a12;
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
    function af(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && of(t) ? Cs(t.format, e, null) : n;
      cf(t, function (t) {
        return Cs(t, e, o);
      });
    }
    function uf(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function ff(t) {
      var e = Ls();
      !e.isEmpty() &&
        Ji(e, t) &&
        (t.anchor.set(e.getKey(), 0, "element"),
        t.focus.set(e.getKey(), e.getChildrenSize(), "element"));
    }
    function df(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        i = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, i, !0));
    }
    function hf(t, e, n, o, r) {
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
    function gf(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return gl(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var i = e ? r[0] : r[r.length - 1],
        s = Hr(i) ? i : i.getParentOrThrow();
      return (e ? s.selectStart() : s.selectEnd(), !0);
    }
    function pf(t, e, n) {
      if (Qf(t, "extend", e, n)) return !1;
      var o = Ia(),
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
          return null !== n && "text" === t.type && ki(e) ? nc(e, n, o) : n;
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
        (Wf(r, p, _, p, _),
        hf(r, "move", e ? "backward" : "forward", n, s),
        0 === r.rangeCount)
      )
        return !1;
      var y = Fl(r, s) || r.getRangeAt(0);
      var m = y.startContainer,
        x = y.startOffset;
      if ("lineboundary" === n && ms(m) && gs(m) === o) {
        var _t278 = $s(m);
        if (Gr(_t278) && _t278.isInline() && !_t278.isIsolated()) {
          var _n154 = o.getElementByKey(_t278.getKey());
          null !== _n154 &&
            _n154.contains(m) &&
            ((m = _n154), (x = e ? 0 : _n154.childNodes.length));
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
        var _n155 = Wd(u, e ? "previous" : "next").getNodeAtCaret();
        if (ki(_n155)) {
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
      var S = o._slotsUsed && Is(m),
        C = S ? hd(u) : null,
        v = S ? hd(S) : null;
      if (
        S &&
        !Nf(v, C) &&
        _f(t.focus, u, C, v, "deletion", function () {
          return !e;
        })
      )
        return !0;
      var _ref95 = e ? [m, x, f, d] : [f, d, m, x],
        T = _ref95[0],
        N = _ref95[1],
        k = _ref95[2],
        b = _ref95[3],
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
        !gf(t, e, E) && e && df(t),
        !1
      );
    }
    function _f(t, e, n, o, r, i) {
      var s =
        o &&
        (function (t, e) {
          for (var _n157 = fd(t); null !== _n157; ) {
            var _t279 = hd(_n157);
            if (Nf(_t279, e))
              return null !== _t279 || _n157.isAttached() ? _n157 : null;
            _n157 = _t279 && fd(_t279);
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
        var _e195 = s || n;
        if (!Hr(_e195))
          return (
            null !== _e195 &&
              (function (t, e, n) {
                Hr(e)
                  ? t.set(e.getKey(), n ? e.getChildrenSize() : 0, "element")
                  : t.set(e.getKey(), n ? e.getTextContentSize() : 0, "text");
              })(t, _e195, l),
            !0
          );
        ((a = _e195), (u = l ? _e195.getChildrenSize() : 0));
      } else
        ((a = c),
          (u = s.getIndexWithinParent() + (l === ("selection" === r) ? 1 : 0)));
      return (
        "deletion" === r
          ? (function (t, e, n, o) {
              for (;;) {
                var _r77 = e.getChildAtIndex(o ? n : n - 1);
                if (ki(_r77))
                  return void t.set(
                    _r77.getKey(),
                    o ? 0 : _r77.getTextContentSize(),
                    "text",
                  );
                if (!Hr(_r77) || Sl(_r77)) break;
                ((e = _r77), (n = o ? 0 : _r77.getChildrenSize()));
              }
              t.set(e.getKey(), n, "element");
            })(t, a, u, !l)
          : t.set(a.getKey(), u, "element"),
        !0
      );
    }
    function yf() {
      try {
        var _t280 = new RegExp("\\p{Emoji}", "u"),
          _e196 = _t280.test.bind(_t280);
        if (
          _e196("\u2764\ufe0f") &&
          _e196("#\ufe0f\u20e3") &&
          _e196("\u{1f44d}")
        )
          return _e196;
      } catch (t) {}
      return function () {
        return !1;
      };
    }
    var mf = yf();
    function xf(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        i = r.length;
      var s = 0,
        l = 0;
      for (var _t281 = 0; _t281 < i; _t281++) {
        var _o93 = _t281 === i - 1;
        if (
          ((l = s), (s += r[_t281].length), (e && s === n) || s > n || _o93)
        ) {
          (r.splice(_t281, 1), _o93 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function Sf(t, n, o, r) {
      var i,
        s = n,
        l = !1;
      if (Ul(t)) {
        var _c13 = !1;
        var _a13 = t.childNodes,
          _u10 = _a13.length,
          _f10 = r._blockCursorElement;
        (s === _u10 && _u10 > 0 && ((_c13 = !0), (s = _u10 - 1)),
          void 0 !== Ds(t, r) || mc(t, r) || (l = !0));
        var _d0 = _a13[s],
          _h7 = !1;
        if (_d0 === _f10) ((_d0 = _a13[s + 1]), (_h7 = !0));
        else if (null !== _f10) {
          var _e197 = _f10.parentNode;
          t === _e197 &&
            n > Array.prototype.indexOf.call(_e197.children, _f10) &&
            s--;
        }
        if (((i = $s(_d0)), ki(i))) s = Ud(i, _c13 ? "next" : "previous");
        else {
          var _a14 = $s(t);
          if (null === _a14) return null;
          if (Hr(_a14)) {
            var _u11$resolveChildInde;
            var _l22 = r.getElementByKey(_a14.getKey());
            null === _l22 && e(214);
            var _u11 = tc(_a14, _l22, r);
            ((_u11$resolveChildInde = _u11.resolveChildIndex(_a14, _l22, t, n)),
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
              var _t282 = _c13
                ? _f11.getLastDescendant()
                : _f11.getFirstDescendant();
              (null === _t282
                ? (_a14 = _f11)
                : ((_f11 = _t282),
                  (_a14 = Hr(_f11) ? _f11 : _f11.getParentOrThrow())),
                (s = 0));
            }
            ki(_f11)
              ? ((i = _f11),
                (_a14 = null),
                (s = Ud(_f11, _c13 ? "next" : "previous")))
              : _f11 !== _a14 &&
                _c13 &&
                !_h7 &&
                (Hr(_a14) || e(216),
                (s = Math.min(_a14.getChildrenSize(), s + 1)));
          } else {
            var _e198 = fd(_a14),
              _o94 = null !== _e198 ? _e198 : _a14,
              _i54 = _o94.getIndexWithinParent(),
              _l23 = r.getElementByKey(_a14.getKey());
            var _c14 = "after";
            if (null !== _l23 && $s(t) === _a14) {
              var _e199 = tc(_a14, _l23, r);
              _e199.element !== _l23
                ? (_c14 = _e199.resolveLeafPosition(_l23, t, n))
                : 0 === n && Gr(_a14) && (_c14 = "before");
            }
            ((s = "before" === _c14 ? _i54 : _i54 + 1),
              (_a14 = _o94.getParentOrThrow()));
          }
          if (Hr(_a14)) return [Gu(_a14.__key, s, "element"), l];
        }
      } else i = $s(t);
      return ki(i) ? [Gu(i.__key, Ud(i, s, "clamp"), "text"), l] : null;
    }
    function Cf(t, e, n) {
      var o = t.getNode();
      if (Os(o)) return;
      var r = 0 === t.offset;
      if (!r && t.offset !== o.getTextContent().length) return;
      var i = r ? "previous" : "next",
        s = Wd(o, i).getNodeAtCaret();
      if (r === e || !Hr(s) || !s.isInline() || (r && n)) {
        if (r && !e)
          ki(s) &&
            !o.isUnmergeable() &&
            t.set(s.__key, s.getTextContent().length, "text");
        else if (null === s && (n || (!r && e))) {
          var _e200 = o.getParent();
          if (
            Hr(_e200) &&
            _e200.isInline() &&
            (r ||
              (!_e200.canInsertTextAfter() && _e200.getTextContentSize() > 1))
          ) {
            var _n158 = Wd(_e200, i).getNodeAtCaret();
            ki(_n158) &&
              t.set(_n158.__key, r ? _n158.getTextContent().length : 0, "text");
          }
        }
      } else t.set(s.__key, r ? s.getChildrenSize() : 0, "element");
    }
    function vf(t) {
      var e = Ms(t.key);
      return null === e ? null : hd(e);
    }
    function Tf(t, e, n) {
      var o = vf(t),
        r = vf(e);
      return !Nf(o, r) && _f(e, Ms(t.key), o, r, "selection", n);
    }
    function Nf(t, e) {
      return null === t ? null === e : t.is(e);
    }
    function kf(t) {
      var e = Tf(t.anchor, t.focus, function () {
        return (
          1 !==
          (function (t, e) {
            var n = (function (t, e) {
              var n = new Map();
              for (
                var _e201 = null, _o95 = t;
                null !== _o95;
                _e201 = _o95, _o95 = rh(_o95)
              )
                n.set(_o95.getKey(), _e201);
              for (
                var _t283 = null, _o96 = e;
                null !== _o96;
                _t283 = _o96, _o96 = rh(_o96)
              ) {
                var _e202 = n.get(_o96.getKey());
                if (void 0 === _e202) continue;
                var _r78 = _o96.getLatest();
                return null === _e202
                  ? null === _t283
                    ? { commonAncestor: _r78, type: "same" }
                    : { b: _t283, commonAncestor: _r78, type: "ancestor" }
                  : null === _t283
                    ? { a: _e202, commonAncestor: _r78, type: "descendant" }
                    : {
                        a: _e202,
                        b: _t283,
                        commonAncestor: _r78,
                        type: "branch",
                      };
              }
              return null;
            })(t.origin, e.origin);
            if (null === n) return null;
            switch (n.type) {
              case "same":
                return ih(t, e);
              case "ancestor":
                return "child" === t.type && null === ud(n.b) ? -1 : 1;
              case "descendant":
                return "child" === e.type && null === ud(n.a) ? 1 : -1;
              case "branch": {
                var _t284 = ud(n.a) && n.a.getKey(),
                  _e203 = ud(n.b) && n.b.getKey();
                if (_t284 && _e203)
                  for (var _o97 of pd(n.commonAncestor).values())
                    if (_o97 === _t284 || _o97 === _e203)
                      return _o97 === _t284 ? -1 : 1;
                return _t284 ? -1 : _e203 ? 1 : n.a.isBefore(n.b) ? -1 : 1;
              }
            }
          })(Ei(t.anchor, "next"), Ei(t.focus, "next"))
        );
      });
      return (e && (t.dirty = !0), e);
    }
    function bf(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      var o = 0;
      for (
        var _t285 = n && n.previousSibling;
        _t285;
        _t285 = _t285.previousSibling
      )
        o++;
      return o;
    }
    function Ef(t, e, n, o, r, i) {
      if (null === t || null === n || !ds(r, t, n)) return null;
      var s = Sf(t, e, of(i) ? i.anchor : null, r);
      if (null === s) return null;
      var l = Sf(n, o, of(i) ? i.focus : null, r);
      if (null === l) return null;
      var c = s[0],
        a = s[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e204 = $s(t),
          _o98 = $s(n);
        if (Gr(_e204) && Gr(_o98)) return null;
      }
      var d =
        r._slotsUsed &&
        Tf(c, u, function () {
          return (function (t, e, n, o) {
            if (t === n) return o >= e;
            var r = t.compareDocumentPosition(n);
            return r & Node.DOCUMENT_POSITION_CONTAINED_BY
              ? bf(t, n) >= e
              : r & Node.DOCUMENT_POSITION_CONTAINS
                ? o > bf(n, t)
                : 0 !== (r & Node.DOCUMENT_POSITION_FOLLOWING);
          })(t, e, n, o);
        });
      return (
        (function (t, e) {
          if ("text" === t.type && "text" === e.type) {
            var _n159 = t.isBefore(e),
              _o99 = t.is(e);
            (Cf(t, _n159, _o99),
              Cf(e, !_n159, _o99),
              _o99 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function Of(t) {
      return Hr(t) && !t.isInline();
    }
    function Mf(t, e, n, o, r, i) {
      var s = Da(),
        l = new _rf(Gu(t, e, r), Gu(n, o, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function wf() {
      var t = Gu("root", 0, "element"),
        e = Gu("root", 0, "element");
      return new _rf(t, e, 0, "");
    }
    function Af() {
      return new _ef(new Set());
    }
    function Df(t, e) {
      return Pf(null, t, e, null);
    }
    var If = new Set([
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
    function Pf(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var i = o || r.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c = "keydown" === s && i,
        a = c && jl(c),
        u =
          c &&
          (c.ctrlKey || c.metaKey || If.has(c.key)) &&
          Hl(a) &&
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
      if (of(t) && !f) return t.clone();
      {
        if (null === e) return null;
        var _o100 = Ll(e, n._rootElement);
        if (
          ((d = _o100.anchorNode),
          (h = _o100.focusNode),
          (g = _o100.anchorOffset),
          (p = _o100.focusOffset),
          (l || u || void 0 === s) && of(t) && !ds(n, d, h))
        )
          return t.clone();
      }
      var _ = Ef(d, g, h, p, n, t);
      if (null === _) return null;
      var y = _[0],
        m = _[1],
        x = _[2],
        S = of(t) ? t : null,
        C = new _rf(y, m, S ? S.format : 0, S ? S.style : "");
      return (S && Ff(C, S.anchor.key), (C.dirty = x), C);
    }
    function Ff(t, e) {
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
    function Rf() {
      return Da()._selection;
    }
    function Lf() {
      return Ia()._editorState._selection;
    }
    function Kf(t, e) {
      var n = e.__key;
      return t.anchor.key === n || t.focus.key === n;
    }
    function Bf(t, e, n, o) {
      if (o === void 0) {
        o = 1;
      }
      if (Kf(t, e))
        for (var _r79 of [t.anchor, t.focus]) {
          _r79.key === e.__key &&
            ((n <= _r79.offset && o > 0) || (n < _r79.offset && o < 0)) &&
            _r79.set(e.__key, Math.max(0, _r79.offset + o), "element");
          var _t286 = _r79.getNode();
          if (Hr(_t286)) {
            var _e205 = _t286.getChildrenSize(),
              _n160 = _r79.offset >= _e205,
              _o101 = _t286.getChildAtIndex(_n160 ? _e205 - 1 : _r79.offset);
            ki(_o101) &&
              _r79.set(
                _o101.__key,
                _n160 ? _o101.getTextContentSize() : 0,
                "text",
              );
          }
        }
    }
    function zf(t, e, n, o, r) {
      var i = o || r;
      if (ki(i) || Hr(i)) {
        var _e206 = ki(i);
        t.set(
          i.__key,
          null === o ? 0 : _e206 ? i.getTextContentSize() : i.getChildrenSize(),
          _e206 ? "text" : "element",
        );
      } else {
        var _o102 = e.getIndexWithinParent();
        t.set(n.__key, -1 === _o102 ? n.getChildrenSize() : _o102, "element");
      }
    }
    function $f(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Wf(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function jf(t, e, n) {
      var o = ll(t, e.getKey());
      if (Hr(e)) {
        var _r80 = tc(e, o, t);
        return [_r80.element, n + _r80.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Uf(t, e, n, o, r, i) {
      var s = i.getRootNode(),
        l = xs(s) || Ml(s) ? Wl(s) : null;
      if ((r.has(Mo) && l !== i) || (null !== l && as(l, l))) return;
      var c = Ll(o, i);
      var a;
      if (!of(e))
        return void (
          null !== t &&
          ds(n, c.anchorNode, c.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _jf = jf(n, h, f.offset),
        p = _jf[0],
        _ = _jf[1],
        _jf2 = jf(n, g, d.offset),
        y = _jf2[0],
        m = _jf2[1],
        x = e.format,
        S = e.style,
        C = e.isCollapsed();
      var T = p,
        N = y,
        k = !1;
      if (
        ("text" === f.type
          ? ((T = ki(h) ? nc(h, p, n) : null),
            (k = h.getFormat() !== x || h.getStyle() !== S))
          : of(t) && "text" === t.anchor.type && (k = !0),
        "text" === d.type && (N = ki(g) ? nc(g, y, n) : null),
        null === T || null === N)
      )
        return;
      var b = C && ki(g) && Os(g) && ms(N) && N.nodeValue === v ? v.length : m;
      if (
        (C &&
          (null === t || k || (of(t) && (t.format !== x || t.style !== S))) &&
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
          var _t287 = null !== l ? gs(l) : null;
          (null !== _t287 && _t287 !== n) ||
            r.has(Io) ||
            i.focus({ preventScroll: !0 });
        }
        if ("element" !== f.type) return;
      }
      if (
        (Wf(o, T, _, N, b), u && e.isCollapsed() && null !== i && !r.has(Io))
      ) {
        var _t288 = $l(i);
        if (null === _t288 || !i.contains(_t288)) {
          var _t289 = Wl(i.ownerDocument),
            _e207 = null !== _t289 ? gs(_t289) : null;
          (null !== _e207 && _e207 !== n) || i.focus({ preventScroll: !0 });
        }
      }
      if (!r.has(Ao) && e.isCollapsed() && null !== i && i === $l(i)) {
        var _t290 =
          of(e) && "element" === e.anchor.type
            ? (function (t, e, n) {
                var o = e.childNodes[n];
                if (!Ul(o)) return o || null;
                var r = Ds(o, t),
                  i = void 0 !== r ? Ms(r) : null;
                return null === i || Hr(i) ? o : tc(i, o, t).element;
              })(n, T, _)
            : (void 0 === a && (a = Rl(o, i)), a);
        if (null !== _t290) {
          var _e208;
          if (ms(_t290)) {
            var _n161 = _t290.ownerDocument.createRange();
            (_n161.selectNode(_t290), (_e208 = _n161.getBoundingClientRect()));
          } else
            _e208 = Ul(_t290)
              ? _t290.getBoundingClientRect()
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
                })(_t290);
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
              var _t291 = e.left,
                _r81 = e.right,
                _s29 = Ul(o) ? o : cl(o);
              for (; null !== _s29 && n.contains(_s29); ) {
                var _e209 = fl(i, _s29, _t291, _r81);
                ((_t291 -= _e209),
                  (_r81 -= _e209),
                  (_s29 = _s29 === n ? null : cl(_s29)));
              }
            }
            var l = e.top,
              c = e.bottom,
              a = 0,
              u = 0,
              f = n;
            for (; null !== f; ) {
              var _e210 = f === r.body;
              if (_e210) {
                var _e211 = i.visualViewport;
                if (_e211) {
                  var _t292 = _e211.offsetTop;
                  ((a = _t292), (u = _t292 + _e211.height));
                } else ((a = 0), (u = _l(t).innerHeight));
                var _n162 = i.getComputedStyle(r.documentElement),
                  _o103 = parseFloat(_n162.scrollPaddingTop),
                  _s30 = parseFloat(_n162.scrollPaddingBottom);
                (isFinite(_o103) && (a += _o103),
                  isFinite(_s30) && (u -= _s30));
              } else {
                var _t293 = f === n ? s : f.getBoundingClientRect();
                ((a = _t293.top), (u = _t293.bottom));
              }
              var _o104 = 0;
              if (
                (l < a ? (_o104 = -(a - l)) : c > u && (_o104 = c - u),
                0 !== _o104)
              )
                if (_e210) i.scrollBy(0, _o104);
                else {
                  var _t294 = f.scrollTop;
                  f.scrollTop += _o104;
                  var _e212 = f.scrollTop - _t294;
                  ((l -= _e212), (c -= _e212));
                }
              if (_e210) break;
              f = cl(f);
            }
          })(n, _e208, i, T);
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
    function Hf(t, e) {
      for (var _n163 of t.split(/(\r?\n|\t)/))
        "\n" === _n163 || "\r\n" === _n163
          ? e.linebreak()
          : "\t" === _n163
            ? e.tab()
            : "" !== _n163 && e.text(_n163);
    }
    function Vf(t) {
      var e = [];
      return (
        Hf(t, {
          linebreak: function linebreak() {
            return e.push(sa());
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
    function Jf(t) {
      var e = [];
      for (var _n164 of t)
        la(_n164) ||
          ((!Hr(_n164) && !Gr(_n164)) || _n164.isInline()
            ? e.push(_n164)
            : Hr(_n164) &&
              e.push.apply(e, Array.from(Jf(_n164.getChildren()))));
      return e;
    }
    function Yf(t, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t;
      t.isCollapsed() || o.removeText();
      var r = Rf();
      (of(r) && (o = r), of(o) || e(161));
      var i = o.anchor;
      var s = i.getNode(),
        l = i.offset;
      for (; !Xl(s) && null === ud(s); ) {
        var _Gf;
        var _t295 = s;
        if (((_Gf = Gf(s, l, n)), (s = _Gf[0]), (l = _Gf[1]), _t295.is(s)))
          break;
      }
      return [s, l];
    }
    function Gf(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t.getParent();
      if (!o) {
        var _t296 = qi();
        return (Ls().append(_t296), _t296.select(), [Ls(), 0]);
      }
      if (ki(t)) {
        var _n165 = t.splitText(e);
        if (0 === _n165.length) return [o, t.getIndexWithinParent()];
        var _r82 = 0 === e ? 0 : 1;
        return [o, _n165[0].getIndexWithinParent() + _r82];
      }
      if (!Hr(t) || 0 === e) return [o, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _o105 = new _rf(
            Gu(t.__key, e, "element"),
            Gu(t.__key, e, "element"),
            0,
            "",
          ),
          _i55 = t.insertNewAfter(_o105);
        if (_i55)
          _i55.append.apply(_i55, [r].concat(Array.from(r.getNextSiblings())));
        else if (n) return [t, e];
      }
      return [o, t.getIndexWithinParent() + 1];
    }
    function qf(t) {
      return la(t) || yl(t) || ki(t) || t.isParentRequired();
    }
    function Xf(t) {
      var e = qi();
      var n = null;
      for (var _o106 = 0; _o106 < t.length; _o106++) {
        var _r83 = t[_o106];
        if (qf(_r83)) {
          if (null === n) {
            ((n = _r83.createParentElementNode()), e.append(n));
            var _i56 = t[_o106 + 1];
            if (la(_r83) && (void 0 === _i56 || !qf(_i56))) continue;
          }
          n.append(_r83);
        } else (e.append(_r83), (n = null));
      }
      return e;
    }
    function Qf(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref96 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e213 = _ref96[0],
          _o107 = _ref96[1];
        return (_o107.set(_e213.key, _e213.offset, _e213.type), !0);
      }
      var i = Ei(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === o,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === r,
        u = !1;
      if (!Ki(c)) {
        for (var _t297 of c) {
          a = !1;
          var _e214 = _t297.origin;
          if (Gr(_e214)) {
            if (_e214.isIsolated()) {
              u = !0;
              break;
            }
            if (((c = _t297), s && _e214.isInline())) continue;
          }
          break;
        }
        if (u) return !0;
        if (a)
          for (var _t298 of Zd(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Kd(_t298)) _t298.origin.isInline() || (c = _t298);
            else {
              if (Hr(_t298.origin)) continue;
              Gr(_t298.origin) && !_t298.origin.isInline() && (c = _t298);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && Gr(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t299 = Af();
        return (_t299.add(c.origin.getKey()), Bs(_t299), !0);
      }
      return ((c = Li(c)), l && Oi(t.anchor, c), Oi(t.focus, c), a || !s);
    }
    function Zf(t, e, n) {
      var o = null === e ? null : e.__key,
        r = null === n ? null : n.__key;
      (null === e ? (t.__first = r) : (e.__next = r),
        null === n ? (t.__last = o) : (n.__prev = o));
    }
    function td(t, e) {
      var n = Ia();
      if (
        (n._recordTextEdits && ui(n).push(["detach", t.__key, e.__key]),
        !n._recordNodeMoves)
      )
        return;
      var o = n._editorState._nodeMap;
      if (o.has(t.__key)) {
        var _e215 = Da(),
          _n166 = _e215._movedNodes || (_e215._movedNodes = new WeakMap());
        var _r84 = _n166.get(o);
        (void 0 === _r84 && ((_r84 = new Set()), _n166.set(o, _r84)),
          _r84.add(t.__key));
      }
    }
    function ed(t, e, n, o) {
      var r = e.__key;
      (null === n ? (t.__first = r) : (n.__next = r),
        null === o ? (t.__last = r) : (o.__prev = r),
        (e.__prev = null === n ? null : n.__key),
        (e.__next = null === o ? null : o.__key),
        (e.__parent = t.__key));
      var i = Ia();
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
    function nd(t) {
      null !== ud(t) && e(380, t.__key, String(ud(t)));
      var n = t.getParent();
      if (null !== n) {
        var _e216 = n.getWritable();
        td(t, _e216);
        var _o108 = t.getPreviousSibling(),
          _r85 = t.getNextSibling();
        (Zf(_e216, _o108 && _o108.getWritable(), _r85 && _r85.getWritable()),
          (t.__prev = null),
          (t.__next = null),
          (t.__parent = null),
          _e216.__size--);
      }
    }
    function od(t, e) {
      var n = e && t.getParent(),
        o = e && n && Kf(e, n) ? t.getIndexWithinParent() : -1,
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
        nd(t),
        e && n && -1 !== o && Bf(e, n, o, -1),
        e && (e._cachedIsBackward = null),
        r
      );
    }
    function rd(t, e, n, o) {
      wa();
      var r = "next" === e;
      Tl(t, n);
      var i = t.getWritable(),
        s = n.getWritable();
      t.getParentOrThrow();
      var l = Rf(),
        c = o && of(l) ? l : null,
        a = od(s, c),
        u = t.getParentOrThrow().getWritable(),
        f =
          c && ((r && null !== a && a.length > 0) || Kf(c, u))
            ? t.getIndexWithinParent() + (r ? 1 : 0)
            : -1,
        d = r ? t.getNextSibling() : t.getPreviousSibling(),
        h = d && d.getWritable();
      if (
        (ed(u, s, r ? i : h, r ? h : i),
        u.__size++,
        c && -1 !== f && (Bf(c, u, f), r && null !== a))
      )
        for (var _t300 of a) _t300.set(u.__key, f + 1, "element");
      return n;
    }
    function id(t, e, n) {
      wa();
      var o = t.origin,
        r = t.direction,
        i = "next" === r,
        s = fd(o);
      if (null !== s) return i ? s.selectNext(e, n) : s.selectPrevious(e, n);
      var l = t.getNodeAtCaret(),
        c = o.getParentOrThrow();
      if (null === l) return i ? c.select() : c.select(0, 0);
      if (Hr(l)) return i ? l.select(0, 0) : l.select();
      if (ki(l)) return l.select(e, n);
      var a = l.getIndexWithinParent() + (i ? 0 : 1);
      return c.select(a, a);
    }
    function sd(t, e) {
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
    var ld = new Map();
    function cd(t) {
      return Hr(t) || Gr(t);
    }
    function ad(t) {
      return Hr(t) || Gr(t);
    }
    function ud(t) {
      var e = t.getLatest();
      return ad(e) ? e.__slotHost : null;
    }
    function fd(t) {
      var n = ud(t);
      if (null === n) return null;
      var o = Ms(n);
      return (Hr(o) || Gr(o) || e(370), o);
    }
    function dd(t) {
      var e = fd(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref98 of pd(e)) {
        var _t301 = _ref98[0];
        var _o110 = _ref98[1];
        if (_o110 === n) return _t301;
      }
      return null;
    }
    function hd(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== ud(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function gd(t) {
      var _t$getNodes$;
      if (null === t) return null;
      var e = of(t)
        ? t.anchor.getNode()
        : (_t$getNodes$ = t.getNodes()[0]) != null
          ? _t$getNodes$
          : null;
      return null === e ? null : hd(e);
    }
    function pd(t) {
      var e = t.getLatest();
      return cd(e) && null !== e.__slots ? e.__slots : ld;
    }
    function _d(t) {
      return Array.from(pd(t).keys());
    }
    function yd(t, e) {
      var n = pd(t).get(e);
      return void 0 === n ? null : Ms(n);
    }
    var md = ["__proto__", "constructor", "prototype"],
      xd = Symbol("slotMapOwner");
    function Sd(t) {
      var e = t.__slots;
      return (
        (null !== e && e[xd] === t) ||
          ((e = new Map(e)), (e[xd] = t), (t.__slots = e)),
        e
      );
    }
    var Cd = new WeakMap(),
      vd = [];
    function Td(t) {
      for (var _ref100 of Yc(t)) {
        var _e217 = _ref100.ownNodeConfig;
        {
          var _t302 = _e217 && _e217.slots;
          if (_t302) return _t302;
        }
      }
      return vd;
    }
    function Nd(t) {
      var e = "";
      for (var _n167 of pd(t).values()) {
        var _t303 = Ms(_n167);
        null !== _t303 && (e += _t303.getTextContent());
      }
      return e;
    }
    function kd(t, e, n) {
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
    function bd(t, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        e(373, n);
      var r = t.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!Hr(o) && !Gr(o)) || o.isInline()) && e(374, o.__key);
      var i = t.getWritable(),
        s = Sd(i),
        l = s.get(n);
      void 0 !== l && Ed(l);
      var c = o.getWritable(),
        a = fd(c);
      if (null !== a) {
        var _t304 = dd(c);
        (null !== _t304 && Sd(a.getWritable())["delete"](_t304),
          (c.__slotHost = null));
      }
      return (
        nd(c),
        (c.__slotHost = i.__key),
        s.set(n, c.__key),
        (function (t) {
          var n = t.__slots;
          if (null === n || n.size < 2) return;
          var o = (function (t) {
            var n = Cd.get(t);
            if (void 0 === n) {
              var _o111 = Td(t),
                _r86 = new Map();
              for (var _n168 of _o111)
                (md.includes(_n168) && e(371, t.name, _n168),
                  _r86.has(_n168) && e(372, t.name, _n168),
                  _r86.set(_n168, _r86.size));
              ((n = _r86), Cd.set(t, n));
            }
            return n;
          })(t.constructor);
          var r = null,
            i = !0;
          for (var _t305 of n.keys()) {
            if (null !== r && kd(r, _t305, o) > 0) {
              i = !1;
              break;
            }
            r = _t305;
          }
          if (i) return;
          var s = Array.from(n).sort(function (_ref101, _ref102) {
            var t = _ref101[0];
            var e = _ref102[0];
            return kd(t, e, o);
          });
          n.clear();
          for (var _ref104 of s) {
            var _t306 = _ref104[0];
            var _e218 = _ref104[1];
            n.set(_t306, _e218);
          }
        })(i),
        (Ia()._slotsUsed = !0),
        (Da()._slotsUsed = !0),
        i
      );
    }
    function Ed(t) {
      var n = Ms(t);
      if (null === n) return;
      var o = n.getWritable();
      (ad(o) || e(377, t), (o.__slotHost = null), o.remove());
    }
    var Od = { next: "previous", previous: "next" };
    var _Md4 = (function () {
      function Md(t) {
        this.origin = t;
      }
      var _proto20 = Md.prototype;
      _proto20[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return nh({
            hasNext: Ld,
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
        return Wd(this.getNodeAtCaret(), this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return Wd(this.origin, this.direction);
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
          var _e219 = i.getAdjacentCaret();
          null !== _e219 && l.size < t;
          _e219 = _e219.getAdjacentCaret()
        ) {
          var _t307 = _e219.origin.getWritable();
          l.set(_t307.getKey(), _t307);
        }
        for (var _t308 of r) {
          if (l.size > 0) {
            var _n169 = i.getNodeAtCaret();
            if (_n169) {
              if (
                (l["delete"](_n169.getKey()),
                l["delete"](_t308.getKey()),
                _n169.is(_t308) || i.origin.is(_t308))
              );
              else {
                var _e220 = _t308.getParent();
                (_e220 && _e220.is(s) && _t308.remove(), _n169.replace(_t308));
              }
            } else null === _n169 && e(263, Array.from(l).join(" "));
          } else i.insert(_t308);
          i = Wd(_t308, this.direction);
        }
        for (var _t309 of l.values()) _t309.remove();
        return this;
      };
      return Md;
    })();
    var _wd3 = (function (_Md) {
      function wd() {
        var _this6;
        for (
          var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
          _key0 < _len0;
          _key0++
        ) {
          args[_key0] = arguments[_key0];
        }
        return (
          ((_this6 = _Md.call.apply(_Md, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(wd, _Md);
      var _proto21 = wd.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Vd(t, this.direction);
      };
      _proto21.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Wd(Id(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        var t = Dd(this.direction);
        return Wd(this.getNodeAtCaret(), t) || Vd(this.origin, t);
      };
      _proto21.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto21.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof wd &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return wd;
    })(_Md4);
    var Ad = { root: Qr, shadowRoot: Sl };
    function Dd(t) {
      return Od[t];
    }
    function Id(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || Ad[e](t) ? null : null === ud(t) ? t : null;
    }
    var _Pd3 = (function (_Md2) {
      function Pd() {
        var _this7;
        for (
          var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
          _key1 < _len1;
          _key1++
        ) {
          args[_key1] = arguments[_key1];
        }
        return (
          ((_this7 = _Md2.call.apply(_Md2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Pd, _Md2);
      var _proto22 = Pd.prototype;
      _proto22.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Wd(t, this.direction);
      };
      _proto22.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto22.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto22.getChildCaret = function getChildCaret() {
        return Hr(this.origin) ? Vd(this.origin, this.direction) : null;
      };
      _proto22.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Wd(Id(this.getParentAtCaret(), t), this.direction);
      };
      _proto22.getFlipped = function getFlipped() {
        var t = Dd(this.direction);
        return (
          Wd(this.getNodeAtCaret(), t) || Vd(this.origin.getParentOrThrow(), t)
        );
      };
      _proto22.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Pd &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto22.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Pd || t instanceof _Fd3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Pd;
    })(_Md4);
    var _Fd3 = (function (_Md3) {
      function Fd(t, e) {
        var _this8;
        ((_this8 = _Md3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(Fd, _Md3);
      var _proto23 = Fd.prototype;
      _proto23.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : jd(t, this.direction, this.offset);
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
        return Wd(Id(this.getParentAtCaret(), t), this.direction);
      };
      _proto23.getFlipped = function getFlipped() {
        return jd(this.origin, Dd(this.direction), this.offset);
      };
      _proto23.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Fd &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto23.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Pd3 || t instanceof Fd) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto23.getSiblingCaret = function getSiblingCaret() {
        return Wd(this.origin, this.direction);
      };
      return Fd;
    })(_Md4);
    function Rd(t) {
      return t instanceof _Fd3;
    }
    function Ld(t) {
      return t instanceof _Pd3;
    }
    function Kd(t) {
      return t instanceof _wd3;
    }
    var Bd = {
        next: (function (_Fd) {
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
              ((_this9 = _Fd.call.apply(_Fd, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _Fd);
          var _proto24 = _class.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_Fd3),
        previous: (function (_Fd2) {
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
              ((_this0 = _Fd2.call.apply(_Fd2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _Fd2);
          var _proto25 = _class3.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_Fd3),
      },
      zd = {
        next: (function (_Pd) {
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
              ((_this1 = _Pd.call.apply(_Pd, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Pd);
          var _proto26 = _class5.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Pd3),
        previous: (function (_Pd2) {
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
              ((_this10 = _Pd2.call.apply(_Pd2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Pd2);
          var _proto27 = _class7.prototype;
          _proto27.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto27.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Pd3),
      },
      $d = {
        next: (function (_wd) {
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
              ((_this11 = _wd.call.apply(_wd, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _wd);
          var _proto28 = _class9.prototype;
          _proto28.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto28.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_wd3),
        previous: (function (_wd2) {
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
              ((_this12 = _wd2.call.apply(_wd2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _wd2);
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
        })(_wd3),
      };
    function Wd(t, e) {
      return t ? new zd[e](t) : null;
    }
    function jd(t, e, n) {
      return t ? new Bd[e](t, Ud(t, n)) : null;
    }
    function Ud(t, e, o) {
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
    function Hd(t, e) {
      return new _qd(t, e);
    }
    function Vd(t, e) {
      return Hr(t) ? new $d[e](t) : null;
    }
    function Jd(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Yd(t) {
      return t && Jd(t.getAdjacentCaret());
    }
    var _Gd = (function () {
      function Gd(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto30 = Gd.prototype;
      _proto30.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Gd(t, e, this.direction);
      };
      _proto30.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto30.getTextSlices = function getTextSlices() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return Rd(t) && Rd(e) && t.isSameNodeCaret(e)
          ? [Hd(t, e.offset - t.offset), null]
          : [Rd(t) ? Xd(t, "anchor") : null, Rd(e) ? Xd(e, "focus") : null];
      };
      _proto30.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = Rd(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = Rd(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : Yd(e) || e.getParentCaret(t);
          };
        return nh({
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
      return Gd;
    })();
    var _qd = (function () {
      function qd(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto31 = qd.prototype;
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
        return jd(
          (function (t, e, n) {
            var o = t.getTextContent(),
              r = o.slice(0, e) + "" + o.slice(e + n);
            if (
              !Ia()._recordTextEdits ||
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
      return qd;
    })();
    function Xd(t, e) {
      var n = t.direction,
        o = t.origin;
      return Hd(t, Ud(o, "focus" === e ? Dd(n) : n) - t.offset);
    }
    function Qd(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function Zd(t) {
      return eh(t, Qd(Vd(Ls(), Dd(t.direction)), t.direction));
    }
    function th(t) {
      return eh(t, t);
    }
    function eh(t, n) {
      return (
        t.direction !== n.direction && e(265),
        new _Gd(t, n, t.direction)
      );
    }
    function nh(t) {
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
    function oh(t, n) {
      var o = ah(t.origin, n.origin);
      switch (
        (null === o && e(275, t.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same":
          return ih(t, n);
        case "ancestor":
          return "child" === t.type ? -1 : 1;
        case "descendant":
          return "child" === n.type ? 1 : -1;
        case "branch":
          return sh(o);
      }
    }
    function rh(t) {
      return t.getParent() || fd(t);
    }
    function ih(t, e) {
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
    function sh(t) {
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
    function lh(t, e) {
      return e.is(t);
    }
    function ch(t) {
      return Hr(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function ah(t, n) {
      if (t.is(n)) return { commonAncestor: t, type: "same" };
      var o = new Map();
      for (
        var _ch = ch(t), _e221 = _ch[0], _n170 = _ch[1];
        _e221;
        _n170 = _e221, _e221 = _e221.getParent()
      )
        o.set(_e221, _n170);
      for (
        var _ch2 = ch(n), _r87 = _ch2[0], _i57 = _ch2[1];
        _r87;
        _i57 = _r87, _r87 = _r87.getParent()
      ) {
        var _s31 = o.get(_r87);
        if (void 0 !== _s31)
          return null === _s31
            ? (lh(t, _r87) || e(276),
              { commonAncestor: _r87, type: "ancestor" })
            : null === _i57
              ? (lh(n, _r87) || e(277),
                { commonAncestor: _r87, type: "descendant" })
              : (((Hr(_s31) || lh(t, _s31)) &&
                  (Hr(_i57) || lh(n, _i57)) &&
                  _r87.is(_s31.getParent()) &&
                  _r87.is(_i57.getParent())) ||
                  e(278),
                { a: _s31, b: _i57, commonAncestor: _r87, type: "branch" });
      }
      return null;
    }
    var _uh = (function (_Error) {
      function uh(t, e, n) {
        var _this13;
        ((_this13 = _Error.call(this, e) || this),
          (_this13.name = "LexicalWarning"),
          (_this13.code = t),
          (_this13.data = n));
        return _this13;
      }
      babelHelpers.inheritsLoose(uh, _Error);
      return uh;
    })(babelHelpers.wrapNativeSuper(Error));
    function fh() {
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
            var _t310 = _ref107[0];
            e.push(_t310);
          }
      return e;
    }
    ((exports.$addUpdateTag = dl),
      (exports.$applyNodeReplacement = vl),
      (exports.$assumeActiveEditor = function (t) {
        (null !== Da() && null === Sa && (Sa = t), Sa !== t && n(378));
      }),
      (exports.$caretFromPoint = Ei),
      (exports.$caretRangeFromSelection = Ai),
      (exports.$cloneWithProperties = fc),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = fc(t))[To] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = oh),
      (exports.$copyNode = Cl),
      (exports.$create = Gc),
      (exports.$createChildrenArray = Xc),
      (exports.$createLineBreakNode = sa),
      (exports.$createNodeSelection = Af),
      (exports.$createParagraphNode = qi),
      (exports.$createPoint = Gu),
      (exports.$createRangeSelection = wf),
      (exports.$createRangeSelectionFromDom = Df),
      (exports.$createTabNode = ts),
      (exports.$createTextNode = Ni),
      (exports.$exportNodeJSON = ee),
      (exports.$extendCaretToRange = Zd),
      (exports.$findMatchingParent = qc),
      (exports.$flushSyncAfterUpdate = function () {
        var t = Da();
        (wa(), (t._flushSync = !0));
      }),
      (exports.$formatText = af),
      (exports.$fullReconcile = Pa),
      (exports.$generateNodesFromRawText = Vf),
      (exports.$getAdjacentChildCaret = Yd),
      (exports.$getAdjacentNode = rl),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = Yd(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = Yd(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = Qd),
      (exports.$getCaretRange = eh),
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
          : [uf(n), uf(o)];
      }),
      (exports.$getChildCaret = Vd),
      (exports.$getChildCaretAtIndex = zi),
      (exports.$getChildCaretOrSelf = Jd),
      (exports.$getCollapsedCaretRange = th),
      (exports.$getCommonAncestor = ah),
      (exports.$getCommonAncestorResultBranchOrder = sh),
      (exports.$getDOMSlot = tc),
      (exports.$getDOMTextNode = nc),
      (exports.$getDocument = Pl),
      (exports.$getEditor = Ql),
      (exports.$getEditorDOMRenderConfig = Zl),
      (exports.$getElementAndOffsetForPoint = jf),
      (exports.$getNearestNodeFromDOMNode = Is),
      (exports.$getNearestRootOrShadowRoot = ml),
      (exports.$getNodeByKey = Ms),
      (exports.$getNodeByKeyOrThrow = Nl),
      (exports.$getNodeFromDOMNode = ws),
      (exports.$getPreviousSelection = Lf),
      (exports.$getRoot = Ls),
      (exports.$getSelection = Rf),
      (exports.$getSelectionSlotFrame = gd),
      (exports.$getSiblingCaret = Wd),
      (exports.$getSlot = yd),
      (exports.$getSlotFrame = hd),
      (exports.$getSlotHost = fd),
      (exports.$getSlotNameWithinHost = dd),
      (exports.$getSlotNames = _d),
      (exports.$getState = ln),
      (exports.$getStateChange = function (t, e, n) {
        var o = ln(t, n, on),
          r = ln(e, n, on);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = Rf();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Ud),
      (exports.$getTextPointCaret = jd),
      (exports.$getTextPointCaretSlice = Hd),
      (exports.$getTextPointCaretSliceForNode = Wi),
      (exports.$getWritableNodeState = hn),
      (exports.$hasAncestor = gl),
      (exports.$hasUpdateTag = function (t) {
        return Ia()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = Vi),
      (exports.$insertNodes = function (t) {
        var e = Rf() || Lf();
        (null === e && (e = Ls().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockContainer = Or),
      (exports.$isBlockElementNode = Of),
      (exports.$isBlockFullySelected = Ji),
      (exports.$isChildCaret = Kd),
      (exports.$isCompactExport = te),
      (exports.$isDecoratorNode = Gr),
      (exports.$isEditorState = function (t) {
        return t instanceof _na;
      }),
      (exports.$isElementDOMSlot = ec),
      (exports.$isElementNode = Hr),
      (exports.$isEventFromEmbeddedInput = us),
      (exports.$isExtendableTextPointCaret = Ki),
      (exports.$isInlineElementOrDecoratorNode = yl),
      (exports.$isInlineFormattable = ai),
      (exports.$isLeafNode = function (t) {
        return ki(t) || la(t) || Gr(t);
      }),
      (exports.$isLexicalNode = Eo),
      (exports.$isLineBreakNode = la),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Md4;
      }),
      (exports.$isNodeSelection = sf),
      (exports.$isParagraphNode = Xi),
      (exports.$isRangeSelection = of),
      (exports.$isRootNode = Qr),
      (exports.$isRootOrShadowRoot = Sl),
      (exports.$isSelectionCapturedInDecoratorInput = as),
      (exports.$isShadowRootNode = xl),
      (exports.$isSiblingCaret = Ld),
      (exports.$isSlotChild = ad),
      (exports.$isSlotHost = cd),
      (exports.$isTabNode = es),
      (exports.$isTextNode = ki),
      (exports.$isTextPointCaret = Rd),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _qd;
      }),
      (exports.$isTokenOrSegmented = ys),
      (exports.$isTokenOrTab = _s),
      (exports.$markSlotEditable = yc),
      (exports.$needsBlockCursorBeside = kl),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Da();
        if (n._readOnly) {
          var _t311 = uc(n).get(e);
          return _t311 ? Array.from(_t311.values()) : [];
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
      (exports.$normalizeCaret = Li),
      (exports.$normalizeSelection__EXPERIMENTAL = Bo),
      (exports.$onUpdate = hl),
      (exports.$parseSerializedNode = function (t) {
        return za(t, Ia()._nodes);
      }),
      (exports.$removeFromParent = Ts),
      (exports.$removeSlot = function (t, e) {
        var n = t.getWritable();
        if (null === n.__slots) return n;
        var o = n.__slots.get(e);
        return (void 0 !== o && (Ed(o), Sd(n)["delete"](e)), n);
      }),
      (exports.$removeTextFromCaretRange = Fi),
      (exports.$rewindSiblingCaret = Di),
      (exports.$selectAll = function (t) {
        var e = Ls();
        if (of(t)) {
          var _e222 = t.anchor,
            _n173 = t.focus,
            _o112 = _e222.getNode();
          if (Qr(_o112))
            return (
              _e222.set(_o112.getKey(), 0, "element"),
              _n173.set(_o112.getKey(), _o112.getChildrenSize(), "element"),
              Zs(t, _o112),
              t
            );
          var _r88 = _o112.getTopLevelElementOrThrow(),
            _i58 = _r88.getParent();
          return null === _i58
            ? (Hr(_r88) &&
                (_e222.set(_r88.getKey(), 0, "element"),
                _n173.set(_r88.getKey(), _r88.getChildrenSize(), "element"),
                Zs(t, _r88)),
              t)
            : (_e222.set(_i58.getKey(), 0, "element"),
              _n173.set(_i58.getKey(), _i58.getChildrenSize(), "element"),
              Zs(t, _i58),
              t);
        }
        {
          var _t312 = e.select(0, e.getChildrenSize());
          return (Bs(Zs(_t312, e)), _t312);
        }
      }),
      (exports.$setCompositionKey = bs),
      (exports.$setDirectionFromDOM = hc),
      (exports.$setFormatFromDOM = gc),
      (exports.$setPointFromCaret = Oi),
      (exports.$setSelection = Bs),
      (exports.$setSelectionFromCaretRange = Mi),
      (exports.$setSlot = bd),
      (exports.$setState = cn),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref111 of Object.entries(e)) {
          var _t313 = _ref111[0];
          var _o113 = _ref111[1];
          "boolean" == typeof _o113 && n.push([_t313, _o113]);
        }
        0 !== n.length &&
          cf(t, function (t) {
            for (var _ref113 of n) {
              var _e223 = _ref113[0];
              var _o114 = _ref113[1];
              t = Cs(t, _e223, _o114 ? w[_e223] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = Hi),
      (exports.$splitNode = function (t, n) {
        var o = t.getChildAtIndex(n);
        (null == o && (o = t), Sl(t) && e(102));
        var _r91 = function r(t) {
            var n = t.getParentOrThrow(),
              i = Sl(n),
              s = t !== o || i ? Cl(t) : t;
            if (i)
              return ((Hr(t) && Hr(s)) || e(133), t.insertAfter(s), [t, s, s]);
            {
              var _r90 = _r91(n),
                _e224 = _r90[0],
                _o115 = _r90[1],
                _i59 = _r90[2],
                _l24 = t.getNextSiblings();
              return (
                _i59.append.apply(_i59, [s].concat(Array.from(_l24))),
                [_e224, _o115, s]
              );
            }
          },
          _r89 = _r91(o),
          i = _r89[0],
          s = _r89[1];
        return [i, s];
      }),
      (exports.$splitTextPointCaretSlice = ji),
      (exports.$updateDOMSelection = Uf),
      (exports.$updateRangeSelectionFromCaretRange = wi),
      (exports.$withCompactExport = Zt),
      (exports.ArtificialNode__DO_NOT_USE = _oa),
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
      (exports.COMPOSITION_END_COMMAND = Y),
      (exports.COMPOSITION_END_TAG = Fo),
      (exports.COMPOSITION_START_COMMAND = J),
      (exports.COMPOSITION_START_TAG = Po),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Q),
      (exports.CONTROL_OR_ALT = zt),
      (exports.CONTROL_OR_META = Bt),
      (exports.CONTROL_OR_OTHER_KEY = K),
      (exports.COPY_COMMAND = Ot),
      (exports.CUT_COMMAND = Mt),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = ga),
      (exports.DEFER_COMPOSITION_MERGE_TAG = wo),
      (exports.DELETE_CHARACTER_COMMAND = G),
      (exports.DELETE_LINE_COMMAND = nt),
      (exports.DELETE_WORD_COMMAND = et),
      (exports.DRAGEND_COMMAND = Et),
      (exports.DRAGOVER_COMMAND = bt),
      (exports.DRAGSTART_COMMAND = kt),
      (exports.DROP_COMMAND = Tt),
      (exports.DecoratorNode = _Yr),
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
      (exports.INTERNAL_$expandSelectionToWholeDocument = ff),
      (exports.INTERNAL_$isBlock = Xl),
      (exports.INTERNAL_$normalizeNodeStructure = function (t) {
        if (!Hr(t) || !t.isAttached()) return;
        var e = new _er();
        ((e.full = !0), (e.explicit = !0));
        var n = t.getParent();
        kr(e, function () {
          if (null === n || Sl(t)) return void mr(t, e);
          var o = n.getKey();
          (e.touched.add(t.getKey()), mr(t, e));
          for (var _t314 of Array.from(e.touched)) {
            var _n174 = Ms(_t314);
            null !== _n174 && _n174.getLatest().__parent === o && sr(_n174, e);
          }
        });
      }),
      (exports.INTERNAL_$recordTextMove = function (t, e, n, o) {
        var r = Ia();
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
        var n = Ia();
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
      (exports.INTERNAL_$withExportMemo = lc),
      (exports.INTERNAL_getActiveEditorState = function () {
        return xa;
      }),
      (exports.INTERNAL_isInlineContent = function (t) {
        return Jo(t);
      }),
      (exports.INTERNAL_isNodeStructureEnforced = Er),
      (exports.INTERNAL_registerNodeStructure = function (t) {
        var e = br || (br = new WeakMap());
        var n = e.get(t);
        if (void 0 === n) {
          var _o116 = [],
            _r92 = new Set(),
            _i60 = function _i60(t) {
              var e = t.__key;
              (_o116.push(e), _r92.add(e));
            },
            _s32 = new WeakSet([t.getEditorState()]);
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
                  var s = n ? Ql().getEditorState()._nodeMap : null,
                    l = [];
                  for (var _n175 of e ? [] : t) {
                    l.length = 0;
                    var _t315 = !1;
                    var _e225 = Ms(_n175);
                    if (
                      (Hr(_e225) &&
                        _e225.isShadowRoot() &&
                        r.wrapsAll.add(_n175),
                      null === s || null === _e225 || !vr(_e225, s.get(_n175)))
                    ) {
                      for (
                        var _n176 = _e225;
                        null !== _n176;
                        _n176 = _n176.getParent()
                      ) {
                        if (r.path.has(_n176.getKey())) {
                          _t315 = !0;
                          break;
                        }
                        l.push(_n176);
                      }
                      if (_t315) for (var _t316 of l) r.addPath(_t316);
                    }
                  }
                  ((t.length = 0),
                    (r.path.size > 1 || e || Nr(o)) &&
                      kr(r, function () {
                        mr(o, r);
                      }));
                })(_o116, t, !_s32.has(Ql().getEditorState())));
            },
            _a15 = t.registerUpdateListener(function (_ref114) {
              var t = _ref114.editorState,
                e = _ref114.dirtyElements,
                n = _ref114.dirtyLeaves;
              var o = t._nodeMap,
                i = function i(t) {
                  return !_r92.has(t) && o.has(t);
                };
              var l = !0;
              for (var _ref116 of e) {
                var _t317 = _ref116[0];
                var _n177 = _ref116[1];
                if (_n177 && "root" !== _t317 && i(_t317)) {
                  l = !1;
                  break;
                }
              }
              if (l)
                for (var _t318 of n)
                  if (i(_t318)) {
                    l = !1;
                    break;
                  }
              (_r92.clear(), l || _s32.add(t));
            }),
            _u12 = [],
            _f12 = [];
          for (var _ref118 of t._nodes) {
            var _e226 = _ref118[0];
            var _ref117$ = _ref118[1];
            var _n178 = _ref117$.klass;
            var _o117 = _ref117$.transforms;
            {
              var _t319 = "root" === _e226 ? _c15 : _i60;
              (_o117.add(_t319),
                _u12.push([_o117, _t319]),
                (_n178.prototype instanceof _Ur4 ||
                  _n178.prototype instanceof _Yr) &&
                  _f12.push(_e226));
            }
          }
          ((n = {
            dispose: function dispose() {
              _a15();
              for (var _ref120 of _u12) {
                var _t320 = _ref120[0];
                var _e227 = _ref120[1];
                _t320["delete"](_e227);
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
      (exports.LexicalWarning = _uh),
      (exports.LineBreakNode = _ra),
      (exports.MOVE_TO_END = at),
      (exports.MOVE_TO_START = ft),
      (exports.NODE_STATE_DIRECT = on),
      (exports.NODE_STATE_KEY = L),
      (exports.NODE_STATE_LATEST = rn),
      (exports.OUTDENT_CONTENT_COMMAND = vt),
      (exports.PASTE_COMMAND = Z),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Yi),
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
        var n = fh.apply(void 0, Array.from(e));
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
              var _r93 = e[_o119];
              void 0 !== _r93 && Ke(t, _r93) && n.push(t(_r93));
            }
            n.sort();
            var o = [];
            for (var _t321 = 0; _t321 < n.length; _t321++)
              (0 !== _t321 && n[_t321] === n[_t321 - 1]) || o.push(n[_t321]);
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
          o = Ra(),
          r = n.theme || {},
          i = void 0 === t ? o : n.parentEditor || null,
          s = n.disableEvents || !1,
          l = ta(),
          c = n.namespace || (null !== i ? i._config.namespace : Hs()),
          a = n.editorState,
          u = [_Xr, _pi2, _ra, _Zi, _Yi, _oa].concat(Array.from(n.nodes || [])),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var p;
        if (void 0 === t && null !== o) p = o._nodes;
        else {
          p = new Map();
          for (var _t322 = 0; _t322 < u.length; _t322++) {
            var _o122 = u[_t322],
              _r94 = null,
              _i61 = null;
            if (_o122 && "object" == typeof _o122) {
              var _t323 = _o122;
              ((_o122 = _t323.replace),
                (_r94 = _t323["with"]),
                (_i61 = _t323.withKlass || null));
            }
            if (
              "function" != typeof _o122 ||
              !_o122.prototype ||
              !(_o122 === _bo5 || _o122.prototype instanceof _bo5)
            ) {
              var _r95 = "<unknown>";
              try {
                _r95 = JSON.parse(Jt);
              } catch (_unused2) {}
              e(
                365,
                String(_t322 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o122
                  ? "" +
                      _o122.name +
                      ("function" == typeof _o122.getType
                        ? " (type " + String(_o122.getType()) + ")"
                        : "")
                  : String(_o122),
                String(_r95),
              );
            }
            zc(_o122);
            var _s33 = _o122.getType(),
              _l26 = ha(_o122);
            p.set(_s33, {
              exportDOM: h && h["export"] ? h["export"].get(_o122) : void 0,
              klass: _o122,
              replace: _r94,
              replaceWithKlass: _i61,
              sharedNodeState: un(u[_t322]),
              transforms: _l26,
            });
          }
        }
        var _ = new _ya(
          l,
          i,
          p,
          {
            disableEvents: s,
            dom: babelHelpers["extends"]({}, ga, t && t.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || fa,
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
            (t.registerCommand(H, Nu, 0),
              t.registerCommand(V, bu, 0),
              t.registerCommand(J, Ou, 0),
              t.registerCommand(Y, Mu, 0),
              t.registerCommand(lt, zu, 0));
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
      (exports.flipDirection = Dd),
      (exports.getActiveElement = $l),
      (exports.getActiveElementDeep = Wl),
      (exports.getComposedEventTarget = jl),
      (exports.getComposedSchemaFields = Ac),
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
      (exports.getDeclaredSlots = Td),
      (exports.getEditorPropertyFromDOMNode = ps),
      (exports.getNearestEditorFromDOMNode = gs),
      (exports.getParentElement = cl),
      (exports.getRegisteredNode = ls),
      (exports.getRegisteredNodeOrThrow = ss),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o123 of t) {
          var _zc2 = zc(_o123),
            _t324 = _zc2.ownNodeType;
          _t324 && (n.set(_t324, _o123), e.set(_t324, new Set()));
        }
        for (var _ref122 of n) {
          var _t325 = _ref122[0];
          var _o124 = _ref122[1];
          for (var _ref124 of Yc(_o124)) {
            var _n180 = _ref124.ownNodeType;
            {
              var _o125 = _n180 && e.get(_n180);
              _o125 && _o125.add(_t325);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = Il),
      (exports.getStaticNodeConfig = zc),
      (exports.getStyleObjectFromCSS = Zr),
      (exports.getTextDirection = function (t) {
        return O.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = ha),
      (exports.getterTableOf = Ne),
      (exports.isBlockDomNode = ql),
      (exports.isCurrentlyReadOnlyMode = Ma),
      (exports.isDOMCapturingSelection = mc),
      (exports.isDOMDocumentNode = xs),
      (exports.isDOMNode = Hl),
      (exports.isDOMShadowRoot = Ml),
      (exports.isDOMTextNode = ms),
      (exports.isDOMUnmanaged = _c),
      (exports.isDocumentFragment = Vl),
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
        return Ul(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = Ul),
      (exports.isHTMLTableCellElement = function (t) {
        return Ul(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return Ul(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Yl),
      (exports.isLastChildInBlockNode = aa),
      (exports.isLexicalEditor = hs),
      (exports.isModifierMatch = Xs),
      (exports.isOnlyChildInBlockNode = ca),
      (exports.isSchemaField = Te),
      (exports.isSelectionCapturedInDecoratorInput = fs),
      (exports.isSelectionWithinEditor = ds),
      (exports.iterStaticNodeConfigChain = Yc),
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
      (exports.makeStepwiseIterator = nh),
      (exports.mergeRegister = Xa),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = Ms(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Ql();
                }
                var o = yd(t, e);
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
      (exports.normalizeClassNames = fh),
      (exports.nullable = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e228 = e,
          n = _e228.defaultAsNull;
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
              for (var _t326 = 0; _t326 < n.length; _t326++) {
                var _n$_t = n[_t326],
                  _r96 = _n$_t[0],
                  _i62 = _n$_t[1];
                o[_r96] = _i62(e[_r96]);
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
        var _e229 = e,
          n = _e229.omitDefault;
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
      (exports.registerEventListener = Qa),
      (exports.registerEventListeners = Za),
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
        var n = fh.apply(void 0, Array.from(e));
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
        for (var _n181 in e) {
          var _o126 = e[_n181];
          null == _o126 ? t.removeProperty(_n181) : ti(t, _n181, _o126);
        }
      }),
      (exports.setDOMUnmanaged = pc),
      (exports.setNodeIndentFromDOM = dc),
      (exports.setterDefaultOf = Ee),
      (exports.setterTableOf = ke),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n182 in e)
          if (t[_n182] !== e[_n182]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = Hu),
      (exports.stringValue = Ve),
      (exports.toggleTextFormatType = Cs),
      (exports.tokenizeRawText = Hf),
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
