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
      b = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      k =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
    function O(t, e) {
      return new RegExp("^[^" + t + "]*[" + e + "]");
    }
    var E = O(k, b),
      w = O(b, k),
      M = {
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
      bt = $("DRAGSTART_COMMAND"),
      kt = $("DRAGOVER_COMMAND"),
      Ot = $("DRAGEND_COMMAND"),
      Et = $("COPY_COMMAND"),
      wt = $("CUT_COMMAND"),
      Mt = $("SELECT_ALL_COMMAND"),
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
        t = "0.52.0+prod.cjs";
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
        Pr(t) && !Array.isArray(n.children) && e(59, o.name),
        n
      );
    }
    function ne() {
      return Pl()._blockCursorElement;
    }
    function oe(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var re = x || g || _;
    function ie() {
      var t = _l().createElement("img");
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
          r = _l().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          e.insertBefore(r, o),
          t)
        ) {
          var _t1 = _l().createElement("img");
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
      return kl(t) && t.hasAttribute("data-lexical-managed-linebreak");
    }
    function pe(t, e, n) {
      var o = al(Qs(n)),
        r = o && xl(o, n._rootElement);
      var i = null,
        s = null;
      null !== r &&
        r.anchorNode === t &&
        ((i = r.anchorOffset), (s = r.focusOffset));
      var l = t.nodeValue;
      null !== l && Ms(e, l, i, s, !1);
    }
    function _e(t, e, n) {
      if (zu(t)) {
        var _e11 = t.anchor.getNode();
        if (_e11.is(n) && t.format !== _e11.getFormat()) return !1;
      }
      return ts(e) && n.isAttached();
    }
    function ye(t, e, n) {
      for (var _o6 = t; _o6 && !Jl(_o6); _o6 = Us(_o6)) {
        var _t13 = gs(_o6, e);
        if (void 0 !== _t13) {
          var _e12 = fs(_t13, n);
          if (_e12) return Lr(_e12) || !kl(_o6) ? void 0 : [_o6, _e12];
        }
      }
    }
    function me(t, e, n, o) {
      fe = !0;
      var r =
        null === t._inputState.unprocessedBeforeInputData &&
        performance.now() - de > 100;
      try {
        Ia(t, function () {
          var i =
              xf() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = xf();
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
                ? ci(_p) && _p.isAttached() && _p.markDirty()
                : r && ci(_p) && ts(_d2) && _e(i, _d2, _p) && pe(_d2, _p, t);
            else {
              a = !0;
              for (var _e14 of _n10.addedNodes) {
                var _n11 = gs(_e14, t);
                if (
                  _e14 !== c &&
                  _e14.parentNode === _d2 &&
                  (_n11
                    ? t.getElementByKey(_n11) !== _e14
                    : !(
                        (t._slotsUsed &&
                          kl(_e14) &&
                          _e14.hasAttribute("data-lexical-slot")) ||
                        Jl(_e14)
                      ))
                ) {
                  if (u) {
                    var _t14 =
                      (kl(_e14) ? _e14.innerText : null) || _e14.nodeValue;
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
                gs(_n13, t) ||
                ge(_n13) ||
                _n13.remove();
          (n.takeRecords(),
            null !== i && (a && Cs(i), u && $s(t) && i.insertRawText(f)));
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
        Qs(t).addEventListener("textInput", he, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          me(t, e, n);
        })));
    }
    function Ce(t) {
      throw new Error(t);
    }
    function ve(t, e, n) {
      var o = t.isEqual;
      return e === n || (void 0 !== o && o(e, n));
    }
    function Te(t, e) {
      return ve(t, e, t.defaultValue);
    }
    function Ne(t) {
      return "object" == typeof t && null !== t;
    }
    function be(t, n) {
      var o = Me(t, n).getter;
      return (
        (Ne(o) && void 0 !== o.getterTable) || e(405, n),
        we(o.getterTable)
      );
    }
    function ke(t, n) {
      var o = Me(t, n).setter;
      return (
        (Ne(o) && void 0 !== o.setterTable) || e(406, n),
        we(o.setterTable)
      );
    }
    function Oe(t, n, o) {
      var _Me = Me(t, n),
        r = _Me.meta;
      for (var _t16 = 0; ; )
        if ("aliased" === r.kind) {
          if (_t16 === o) return we(r.aliases);
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
      (Ne(r) && void 0 !== r.setterTable) || e(408, n);
      var i = String(o.defaultValue);
      return (Ue(r.setterTable, i) || e(409, n, i), r.setterTable[i]);
    }
    function we(t) {
      return Object.assign(Object.create(null), t);
    }
    function Me(t, n) {
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
    var Pe = new WeakSet();
    function Fe(t) {
      return (null !== t && "object" == typeof t && Pe.add(t), t);
    }
    function Re(t) {
      if (
        null !== t &&
        "object" == typeof t &&
        !Object.isFrozen(t) &&
        !Pe.has(t)
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
              return Te(t, o) && e !== t.defaultValue ? void 0 : { parsed: o };
            })(t, e);
    }
    var ze = new WeakMap();
    function $e(t) {
      var e = ze.get(t);
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
                return $e(t);
              })
            );
          case "nullable":
          case "optional":
          case "transform":
          case "aliased":
            return null != e.inner && $e(e.inner);
          default:
            return !1;
        }
      })(t);
      return (ze.set(t, n), n);
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
              if (Ue(_t18, _e20)) {
                var _o9 = We(_t18[_e20], n[_e20]);
                _o9 > _r6 && (_r6 = _o9);
              }
            return _r6 >= 3 ? 3 : _r6;
          }
          case "union":
            return null == e.members ? 1 : je(e.members, n).fit;
          case "aliased":
          case "nullable":
          case "optional":
          case "transform":
            return ("aliased" === e.kind
              ? "string" == typeof n && null != e.aliases && Ue(e.aliases, n)
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
    function je(t, e) {
      var n,
        o = 4,
        r = 4;
      for (var _i4 = 0; _i4 < t.length; _i4++) {
        var _s3 = t[_i4],
          _l2 = We(_s3, e),
          _c2 = _l2 < 3 && $e(_s3) ? 3 : _l2;
        if (_c2 < o && ((n = _s3), (o = _c2), (r = _l2), 1 === _c2)) break;
      }
      return { fit: r, member: n };
    }
    function Ue(t, e) {
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
      for (var _n14 of Object.keys(t)) if (!Ue(e, _n14)) return !0;
      return !1;
    }
    function Je(t) {
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
    var Ye = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
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
      var n = Fe(
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
          return Ue(e, n) && Xe(t[n], e[n]);
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
        return "string" == typeof t && Ue(e, t);
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
      if (t === e) return !0;
      if (!Array.isArray(t) || !Array.isArray(e) || t.length !== e.length)
        return !1;
      for (var _n16 = 0; _n16 < t.length; _n16++)
        if (t[_n16] !== e[_n16]) return !1;
      return !0;
    }
    function en(t, e) {
      return on(
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
    function nn(t, e) {
      return on(0, t, { getter: e.getter, setter: e.setter }, !0 === e.derived);
    }
    function on(t, e, n, o) {
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
    var rn = "direct",
      sn = "latest";
    var ln = function ln(t, e) {
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
        (this.unparse = (e.unparse || yn).bind(e)),
        (this.isEqual = e.isEqual
          ? e.isEqual.bind(e)
          : void 0 !== n && void 0 !== n.isEqual
            ? function (t, e) {
                return ve(n, t, e);
              }
            : Object.is),
        (this.defaultValue =
          void 0 !== n ? n.defaultValue : this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function cn(t, e, n) {
      if (n === void 0) {
        n = sn;
      }
      var o = (n === sn ? t.getLatest() : t).__state;
      return o ? o.getValue(e) : e.defaultValue;
    }
    function an(t, e, n) {
      var o;
      if ((ga(), "function" == typeof n)) {
        var _r7 = t.getLatest(),
          _i5 = cn(_r7, e);
        if (((o = un(e, n(_i5))), e.isEqual(_i5, o))) return _r7;
      } else o = un(e, n);
      var r = t.getWritable();
      return (gn(r).updateFromKnown(e, o), r);
    }
    function un(t, e) {
      var n = t.schema;
      return void 0 !== n && "set" === n.meta.kind ? t.parse(e) : e;
    }
    function fn(t) {
      var e = new Map(),
        n = new Set();
      for (var _ref12 of bc("function" == typeof t ? t : t.replace)) {
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
    var dn = new Set(["__proto__", "constructor", "prototype"]);
    var _hn = (function () {
      function hn(t, e, n, o, r) {
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
      var _proto6 = hn.prototype;
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
          var _n17 = _ref14[1];
          _e24.isEqual(_n17, _e24.defaultValue)
            ? delete t[_e24.key]
            : (t[_e24.key] = _e24.unparse(_n17));
        }
        for (var _n18 of this.sharedNodeState.flatKeys)
          _n18 in t && ((e[_n18] = t[_n18]), delete t[_n18]);
        return (_n(t) && (e[L] = t), e);
      };
      _proto6.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          o = new Map(this.knownState);
        return new hn(
          t,
          e,
          (function (t, e, n) {
            var o;
            if (n)
              for (var _ref16 of Object.entries(n)) {
                var _r9 = _ref16[0];
                var _i6 = _ref16[1];
                {
                  if (dn.has(_r9)) continue;
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
        (o.has(t) ||
          (r && n in r) ||
          (r && (delete r[n], (this.unknownState = _n(r))), this.size++),
          o.set(t, e));
      };
      _proto6.updateFromUnknown = function updateFromUnknown(t, e) {
        if (dn.has(t)) return;
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
      return hn;
    })();
    function gn(t) {
      var e = t.getWritable(),
        n = e.__state
          ? e.__state.getWritable(e)
          : new _hn(
              e,
              (function (t) {
                return t.__state
                  ? t.__state.sharedNodeState
                  : ji(Pl(), t.getType()).sharedNodeState;
              })(e),
            );
      return ((e.__state = n), n);
    }
    function pn(t, e) {
      var n = t.getWritable(),
        o = e[L];
      return ((n.__state || o) && gn(t).updateFromJSON(o), n);
    }
    function _n(t) {
      if (t) for (var _e26 in t) return t;
    }
    function yn(t) {
      return t;
    }
    function mn(t, e, n) {
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
    function xn(t, e, n) {
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
    function Sn(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function Cn(t) {
      return !zr(t) && t.getTextContent !== _Ir4.prototype.getTextContent;
    }
    var vn = Symbol["for"]("@lexical/CachedTextSize");
    function Tn(t, n) {
      return zn.read(
        function () {
          var o = 0,
            r = t;
          for (var _t22 = 0; _t22 < n && null !== r; _t22++) {
            var _i7 = Bn.get(r);
            if ((void 0 === _i7 && e(345, r), Pr(_i7))) {
              var _s4 = $n.get(r);
              if (void 0 !== _s4 && Pr(_s4) && _s4.__parent !== _i7.__parent)
                o += _i7.getTextContentSize();
              else {
                var _t23 = Wn.get(r),
                  _n22 = _t23 && _t23.__lexicalTextContent;
                ("string" != typeof _n22 && e(346, _i7.getType()),
                  (o += _n22.length));
              }
              _t22 < n - 1 && !_i7.isInline() && (o += 2);
            } else if (ro(_i7).size > 0) o += _i7.getTextContentSize();
            else {
              var _t24 = _i7[vn];
              (void 0 === _t24 && e(347, _i7.getType(), r), (o += _t24));
            }
            r = _i7.__next;
          }
          return o;
        },
        { editor: On },
      );
    }
    function Nn(t) {
      Pr(t) ||
        ro(t).size > 0 ||
        (void 0 === t[vn] &&
          (t[vn] = ci(t) ? t.__text.length : t.getTextContentSize()));
    }
    var bn = 4;
    var kn,
      On,
      En,
      wn = "",
      Mn = null,
      An = null,
      Dn = null;
    function In() {
      return { firstTextKey: Dn, format: Mn, style: An };
    }
    function Pn(t) {
      null !== t.firstTextKey &&
        ((Mn = t.format), (An = t.style), (Dn = t.firstTextKey));
    }
    function Fn(t) {
      if (null !== Dn) return;
      var n = t.__lexicalFirstTextKey;
      if ((void 0 === n && e(348), null === n)) return;
      var o = $n.get(n);
      ci(o) && ((Mn = o.getFormat()), (An = o.getStyle()), (Dn = n));
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
        var _n23 = So(t);
        _n23.parentNode === e && e.removeChild(_n23);
      }
      if (!o) {
        if ((On._keyToDOMMap["delete"](t), Pr(n))) {
          var _t25 = Ec(n, Bn);
          Gn(_t25, 0, _t25.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t26 of ro(n).values()) {
            var _e29 = so(_t26);
            (Yn(_t26, null), null !== _e29 && _e29.remove());
          }
          Ks(Un, En, Rn, n, "destroyed");
        }
      }
    }
    function Gn(t, e, n, o) {
      for (var _r1 = e; _r1 <= n; ++_r1) {
        var _e30 = t[_r1];
        void 0 !== _e30 && Yn(_e30, o);
      }
    }
    function qn(t, e) {
      t.setProperty("text-align", e);
    }
    var Xn = "40px";
    function Qn(t, e) {
      var n = kn.theme.indent;
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
        Rs(t, "class"),
        Rs(t, "style"));
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
        Rs(t, "style"));
    }
    function to(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (zr(t)) return null;
        var n = t.getParent();
        return null === n || (nl(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function eo(t) {
      var e = _l().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function no(t, e, n) {
      e || "false" === t.contentEditable
        ? Yl(n, On)
        : n.removeAttribute("contenteditable");
    }
    function oo(t, e, n) {
      var o = wn,
        r = In();
      wn = "";
      var i = "";
      var s = Lr(t);
      for (var _ref24 of n) {
        var _o12 = _ref24[0];
        var _r10 = _ref24[1];
        {
          var _n24 = eo(_o12);
          (no(e, s, _n24), e.appendChild(_n24), (wn = ""));
          var _l3 = In();
          (co(_r10, Rl(t, _n24, On)), Pn(_l3), io(t, _o12, e, _n24), (i += wn));
        }
      }
      return (Pn(r), (wn = o), i);
    }
    function ro(t) {
      return Hf(t) && null !== t.__slots ? t.__slots : Uf;
    }
    function io(t, e, n, o) {
      var r = Hn.$getSlotTargetElement(t, e, n, On);
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
      for (var _ref26 of o) {
        var _t27 = _ref26[0];
        var _e31 = _ref26[1];
        if (!r.has(_t27)) {
          var _t28 = so(_e31);
          (Yn(_e31, null), null !== _t28 && _t28.remove());
        }
      }
      var i = wn,
        s = In();
      var l = "",
        c = null;
      var a = Lr(e);
      for (var _ref28 of r) {
        var _t29 = _ref28[0];
        var _i8 = _ref28[1];
        {
          var _r11 = o.get(_t29);
          var _s5 = void 0 !== _r11 ? so(_r11) : null;
          wn = "";
          var _u2 = In();
          if (null === _s5) {
            _s5 = eo(_t29);
            var _o13 = null;
            for (var _t30 of n.children)
              if (!_t30.hasAttribute("data-lexical-slot")) {
                _o13 = _t30;
                break;
              }
            (n.insertBefore(_s5, _o13), co(_i8, Rl(e, _s5, On)));
          } else
            _r11 === _i8
              ? po(_i8, _s5)
              : (void 0 !== _r11 && Yn(_r11, _s5), co(_i8, Rl(e, _s5, On)));
          if (
            (Pn(_u2),
            no(n, a, _s5),
            io(e, _t29, n, _s5),
            (l += wn),
            _s5.parentElement === n)
          ) {
            var _t31 = null === c ? n.firstChild : c.nextSibling;
            (_t31 !== _s5 && n.insertBefore(_s5, _t31), (c = _s5));
          }
        }
      }
      return (Pn(s), (wn = i), l);
    }
    function co(t, n) {
      var o = $n.get(t);
      if ((void 0 === o && e(60), null !== n)) {
        var _e32 = Bn.get(t);
        if (void 0 !== _e32) {
          var _r12 = Wn.get(t);
          if (void 0 !== _r12) {
            var _i9 = Vf(_e32) ? _e32.__slotHost : null,
              _s6 = Vf(o) ? o.__slotHost : null,
              _l4 = _e32.__parent !== o.__parent || _i9 !== _s6,
              _c3 = null !== _s6 && _r12.parentElement !== n.element;
            if (_l4 || _c3) return (n.insertChild(_r12), po(t, n.element));
          }
        }
      }
      var r = Hn.$createDOM(o, On);
      if (
        ((function (t, e, n) {
          var o = n._keyToDOMMap;
          (hs(e, n, t), o.set(t, e));
        })(t, r, On),
        ci(o)
          ? r.setAttribute("data-lexical-text", "true")
          : Lr(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            Vl(r, { captureSelection: !0 })),
        Pr(o))
      ) {
        var _t32 = wn,
          _e33 = o.__indent,
          _n25 = o.__size;
        (to(r, o), 0 !== _e33 && Qn(r, _e33));
        var _i0 = ro(o),
          _s7 = _i0.size > 0 ? oo(o, r, _i0) : "";
        if (0 === _n25)
          ((r.__lexicalTextContent = _s7),
            (r.__lexicalFirstTextKey = null),
            (wn += _s7),
            _i0.size > 0 && (r.__lexicalSlotTextLength = _s7.length));
        else {
          var _e34 = _n25 - 1;
          if ((ao(Ec(o, $n), o, 0, _e34, Rl(o, r, On)), "" !== _s7)) {
            var _e35 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s7 + _e35), (wn = _t32 + _s7 + _e35));
          }
          _i0.size > 0 && (r.__lexicalSlotTextLength = _s7.length);
        }
        if (Cn(o)) {
          var _e36 = o.getTextContent();
          ((r.__lexicalTextContent = _e36), (wn = _t32 + _e36));
        }
        var _l5 = o.__format;
        (0 !== _l5 && Zn(r, _l5), o.isInline() || (ho(0, o, r), fo(o, r)));
      } else {
        var _e37 = o.getTextContent();
        if (Lr(o)) {
          var _e38 = o.decorate(On, kn);
          (null !== _e38 && _o(t, _e38), (r.contentEditable = "false"));
          var _n26 = ro(o);
          _n26.size > 0 && oo(o, r, _n26);
        }
        wn += _e37;
      }
      return (
        null !== n && n.insertChild(r),
        Hn.$decorateDOM(o, null, r, On),
        Nn(o),
        Ks(Un, En, Rn, o, "created"),
        r
      );
    }
    function ao(t, n, o, r, i) {
      var s = wn,
        l = In();
      ((wn = ""), (Mn = null), (An = null), (Dn = null));
      var c = o;
      for (; c <= r; ++c) {
        var _e39 = In();
        co(t[c], i);
        var _n27 = $n.get(t[c]);
        (null !== _n27 && ci(_n27)
          ? null === Mn &&
            ((Mn = _n27.getFormat()), (An = _n27.getStyle()), (Dn = _n27.__key))
          : Pr(_n27) && c < r && !_n27.isInline() && (wn += T),
          Pn(_e39));
      }
      var a = On._keyToDOMMap.get(n.__key);
      (void 0 === a && e(349, n.__key),
        (a.__lexicalTextContent = wn),
        (a.__lexicalFirstTextKey = Dn),
        (wn = s + wn),
        Pn(l));
    }
    function uo(t) {
      return Lr(t) && !t.isInline();
    }
    function fo(t, e, n) {
      if (n === void 0) {
        n = Rl(t, e, On);
      }
      (n.setDecoratorBoundaryAnchor("leading", uo(t.getFirstChild())),
        n.setDecoratorBoundaryAnchor("trailing", uo(t.getLastChild())));
    }
    function ho(t, e, n) {
      var o = Rl(e, n, On),
        r = (function (t, e) {
          if (t) {
            var _n28 = t.__last;
            if (_n28) {
              var _t33 = e.get(_n28);
              if (_t33)
                return Hc(_t33)
                  ? "line-break"
                  : Lr(_t33) && _t33.isInline()
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
        var _e40 = t.__key;
        var _r13 = o;
        for (; null !== _r13; ) {
          var _t34 = $n.get(_r13);
          if (void 0 === _t34) {
            _r13 = null;
            break;
          }
          if (_t34.__parent === _e40) break;
          _r13 = _t34.__parent;
        }
        if (null !== _r13 && !n.has(_r13)) {
          var _t35 = $n.get(o);
          if (ci(_t35))
            return ((Mn = _t35.getFormat()), void (An = _t35.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Dn;
    }
    function po(t, n) {
      var o = Bn.get(t);
      var r = $n.get(t);
      (void 0 !== o && void 0 !== r) || e(61);
      var i = Vn || Kn.has(t) || Ln.has(t),
        s = js(On, t);
      if (o === r && !i) {
        var _t36;
        if (Pr(o)) {
          var _n29 = s.__lexicalTextContent;
          ("string" != typeof _n29 && e(355, o.getType()),
            (_t36 = _n29),
            Fn(s));
        } else _t36 = o.getTextContent();
        return ((wn += _t36), s);
      }
      if (
        (o !== r && i && Ks(Un, En, Rn, r, "updated"),
        Hn.$updateDOM(r, o, s, On))
      ) {
        var _o14 = co(t, null);
        return (
          null === n && e(62),
          n.replaceChild(_o14, s),
          Yn(t, null),
          _o14
        );
      }
      if (Pr(o)) {
        Pr(r) || e(334, t);
        var _n30 = r.__indent;
        (Vn || _n30 !== o.__indent) && Qn(s, _n30);
        var _l6 = r.__format;
        (Vn || _l6 !== o.__format) && Zn(s, _l6);
        var _c4 = i && (ro(r).size > 0 || ro(o).size > 0) ? lo(o, r, s) : "";
        if (i) {
          var _t37 = wn;
          if (
            ((function (t, n, o) {
              var r;
              ((Mn = null),
                (An = null),
                (Dn = null),
                (function (t, n, o) {
                  var r = wn,
                    i = t.__size,
                    s = n.__size;
                  wn = "";
                  var l = o.element,
                    c = On._keyToDOMMap.get(n.__key);
                  void 0 === c && e(351, n.__key);
                  var a = s - i;
                  if (
                    !Vn &&
                    Math.abs(a) <= 1 &&
                    i >= bn &&
                    t.__first === n.__first &&
                    (0 !== a || !On._cloneNotNeeded.has(t.__key))
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
                          var _t38 = $n.get(o);
                          if (void 0 === _t38) return null;
                          ((o = _t38.__prev), i++);
                        }
                        return i !== n || (null !== o && e.has(o)) ? null : r;
                      })(n, _u3);
                      if (null !== _s8) {
                        var _f2 = _u3.size;
                        if (0 === a) {
                          var _t39 = Tn(_s8, _f2);
                          var _o15 = _s8,
                            _a2 = 0;
                          for (; null !== _o15 && _a2 < _f2; ) {
                            var _t40 = $n.get(_o15);
                            if (void 0 === _t40) break;
                            var _e41 = In();
                            (po(_o15, l),
                              ci(_t40) &&
                                null === Mn &&
                                ((Mn = _t40.getFormat()),
                                (An = _t40.getStyle()),
                                (Dn = _t40.__key)),
                              Pn(_e41),
                              (_o15 = _t40.__next),
                              _a2++);
                          }
                          var _d3 = "";
                          for (
                            _o15 = _s8, _a2 = 0;
                            null !== _o15 && _a2 < _f2;
                          ) {
                            var _t41 = $n.get(_o15);
                            if (void 0 === _t41) break;
                            var _n31 = void 0;
                            if (Pr(_t41)) {
                              var _r14 = On._keyToDOMMap.get(_o15),
                                _i10 = _r14 && _r14.__lexicalTextContent;
                              ("string" != typeof _i10 &&
                                e(352, _t41.getType()),
                                (_n31 = _i10));
                            } else _n31 = _t41.getTextContent();
                            ((_d3 += _n31),
                              _a2 < _f2 - 1 &&
                                Pr(_t41) &&
                                !_t41.isInline() &&
                                (_d3 += T),
                              (_o15 = _t41.__next),
                              _a2++);
                          }
                          var _h2 = c.__lexicalSlotTextLength || 0,
                            _g2 = _h2 > 0 ? _i1.slice(_h2) : _i1,
                            _p2 = _g2.slice(0, _g2.length - _t39) + _d3;
                          return (
                            (c.__lexicalTextContent = _p2),
                            (wn = r + _p2),
                            void go(n, c, _u3)
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
                              var _t43 = Bn.get(u);
                              if (void 0 === _t43) return !1;
                              u = _t43.__prev;
                            }
                            if (null === u) return !1;
                            var f = $n.get(s),
                              d = Bn.get(u);
                            if (void 0 === f || void 0 === d) return !1;
                            if (f.__prev !== d.__prev) return !1;
                            var h = [];
                            var g = s;
                            for (var _t44 = 0; _t44 < l; _t44++) {
                              if (null === g) return !1;
                              h.push(g);
                              var _t45 = $n.get(g);
                              g = _t45 ? _t45.__next : null;
                            }
                            var p = [];
                            g = u;
                            for (var _t46 = 0; _t46 < a; _t46++) {
                              if (null === g) return !1;
                              p.push(g);
                              var _t47 = Bn.get(g);
                              g = _t47 ? _t47.__next : null;
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
                            for (var _t48 of m) {
                              var _e42 = In();
                              if ("reconcile" === _t48.kind)
                                po(_t48.key, o.element);
                              else if ("destroy" === _t48.kind)
                                Yn(_t48.key, o.element);
                              else {
                                var _e43 = null;
                                for (
                                  var _n32 = _t48.nextIndex + 1;
                                  _n32 < l;
                                  _n32++
                                ) {
                                  var _t49 = On._keyToDOMMap.get(h[_n32]);
                                  if (void 0 !== _t49) {
                                    _e43 = _t49;
                                    break;
                                  }
                                }
                                co(
                                  _t48.key,
                                  o.withBefore(_e43 != null ? _e43 : o.before),
                                );
                              }
                              if ("destroy" !== _t48.kind) {
                                var _e44 = $n.get(_t48.key);
                                _e44 &&
                                  ci(_e44) &&
                                  null === Mn &&
                                  ((Mn = _e44.getFormat()),
                                  (An = _e44.getStyle()),
                                  (Dn = _e44.__key));
                              }
                              Pn(_e42);
                            }
                            var v = "";
                            for (var _t50 = 0; _t50 < l; _t50++) {
                              var _n33 = $n.get(h[_t50]);
                              if (void 0 === _n33) return !1;
                              var _o16 = void 0;
                              if (Pr(_n33)) {
                                var _r15 = On._keyToDOMMap.get(h[_t50]),
                                  _i11 = _r15 && _r15.__lexicalTextContent;
                                ("string" != typeof _i11 &&
                                  e(350, _n33.getType()),
                                  (_o16 = _i11));
                              } else _o16 = _n33.getTextContent();
                              ((v += _o16),
                                _t50 < l - 1 &&
                                  Pr(_n33) &&
                                  !_n33.isInline() &&
                                  (v += T));
                            }
                            var N = r.__lexicalSlotTextLength || 0,
                              b = N > 0 ? i.slice(N) : i;
                            return (
                              (r.__lexicalTextContent =
                                b.slice(0, b.length - C) + v),
                              !0
                            );
                          })(t, 0, o, c, _i1, _s8, _f2, a)
                        ) {
                          var _t51 = c.__lexicalTextContent;
                          return (
                            "string" != typeof _t51 && e(353),
                            (wn = r + _t51),
                            void go(n, c, _u3)
                          );
                        }
                      }
                    }
                    if (0 === a) {
                      var _n34 = t.__first,
                        _o17 = 0;
                      for (; null !== _n34; ) {
                        var _t52 = $n.get(_n34);
                        if (void 0 === _t52) break;
                        var _r16 = Vn || Kn.has(_n34) || Ln.has(_n34),
                          _i12 = In();
                        if (_r16) po(_n34, l);
                        else {
                          var _o18 = void 0,
                            _r17 = void 0;
                          if (Pr(_t52)) {
                            _r17 = Wn.get(_n34);
                            var _i13 = _r17 && _r17.__lexicalTextContent;
                            ("string" != typeof _i13 && e(354, _t52.getType()),
                              (_o18 = _i13));
                          } else _o18 = _t52.getTextContent();
                          ((wn += _o18), void 0 !== _r17 && Fn(_r17));
                        }
                        (ci(_t52)
                          ? null === Mn &&
                            ((Mn = _t52.getFormat()),
                            (An = _t52.getStyle()),
                            (Dn = _t52.__key))
                          : Pr(_t52) &&
                            _o17 < s - 1 &&
                            !_t52.isInline() &&
                            (wn += T),
                          Pn(_i12),
                          (_n34 = _t52.__next),
                          _o17++);
                      }
                      return (
                        (c.__lexicalTextContent = wn),
                        (c.__lexicalFirstTextKey = Dn),
                        void (wn = r + wn)
                      );
                    }
                  }
                  if (1 === i && 1 === s) {
                    var _e45 = t.__first,
                      _r18 = n.__first;
                    if (_e45 === _r18) po(_e45, l);
                    else {
                      var _t53 = So(_e45),
                        _n35 = co(_r18, null);
                      try {
                        _t53.parentNode === l
                          ? l.replaceChild(_n35, _t53)
                          : o.insertChild(_n35);
                      } catch (o) {
                        if ("object" == typeof o && null != o) {
                          var _i14 =
                            o.toString() +
                            " Parent: " +
                            l.tagName +
                            ", new child: {tag: " +
                            _n35.tagName +
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
                      Yn(_e45, null);
                    }
                    var _i15 = $n.get(_r18);
                    ci(_i15) &&
                      null === Mn &&
                      ((Mn = _i15.getFormat()),
                      (An = _i15.getStyle()),
                      (Dn = _i15.__key));
                  } else {
                    var _r19 = Ec(t, Bn),
                      _c5 = Ec(n, $n);
                    if (
                      (_r19.length !== i && e(227),
                      _c5.length !== s && e(228),
                      0 === i)
                    )
                      0 !== s && ao(_c5, n, 0, s - 1, o);
                    else if (0 === s) {
                      if (0 !== i) {
                        var _t54 =
                          null == o.after &&
                          null == o.before &&
                          0 === ro(n).size &&
                          null == o.element.__lexicalLineBreak;
                        (Gn(_r19, 0, i - 1, _t54 ? null : l),
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
                            _r20 = In();
                          if (_t55 === _o19)
                            ((u = yo(po(_o19, i.element))), f++, d++);
                          else {
                            if ((void 0 === a && (a = mo(n, d)), void 0 === c))
                              c = mo(e, f);
                            else if (!c.has(_t55)) {
                              (f++, Pn(_r20));
                              continue;
                            }
                            if (!a.has(_t55)) {
                              var _e46 = So(_t55);
                              (_e46.parentNode === i.element && (u = yo(_e46)),
                                Yn(_t55, i.element),
                                f++,
                                c["delete"](_t55),
                                Pn(_r20));
                              continue;
                            }
                            if (c.has(_o19)) {
                              var _t56 = js(On, _o19);
                              (_t56 !== u &&
                                i
                                  .withBefore(u != null ? u : i.before)
                                  .insertChild(_t56),
                                (u = yo(po(_o19, i.element))),
                                f++,
                                d++);
                            } else
                              (co(_o19, i.withBefore(u != null ? u : i.before)),
                                d++);
                          }
                          var _s9 = $n.get(_o19);
                          (null !== _s9 && ci(_s9)
                            ? null === Mn &&
                              ((Mn = _s9.getFormat()),
                              (An = _s9.getStyle()),
                              (Dn = _s9.__key))
                            : Pr(_s9) && d <= l && !_s9.isInline() && (wn += T),
                            Pn(_r20));
                        }
                        var h = f > s,
                          g = d > l;
                        if (h && !g) {
                          var _e47 = n[l + 1],
                            _o20 =
                              void 0 === _e47 ? null : On.getElementByKey(_e47);
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
                  ((c.__lexicalTextContent = wn),
                    (c.__lexicalFirstTextKey = Dn),
                    (wn = r + wn));
                })(t, n, Rl(n, o, On)),
                nl(n) ||
                  ((r = n),
                  null == Mn ||
                    Mn === r.__textFormat ||
                    Jn ||
                    r.setTextFormat(Mn),
                  (function (t) {
                    null == An ||
                      An === t.__textStyle ||
                      Jn ||
                      t.setTextStyle(An);
                  })(n)));
            })(o, r, s),
            r.isInline() || (zr(r) || ho(0, r, s), fo(r, s)),
            "" !== _c4)
          ) {
            var _e48 = s.__lexicalTextContent || "";
            ((s.__lexicalTextContent = _c4 + _e48),
              (wn = _t37 + _c4 + _e48),
              (s.__lexicalSlotTextLength = _c4.length));
          } else
            (ro(r).size > 0 || ro(o).size > 0) &&
              (s.__lexicalSlotTextLength = 0);
          if (Cn(r)) {
            var _e49 = r.getTextContent();
            ((s.__lexicalTextContent = _e49), (wn = _t37 + _e49));
          }
        } else {
          var _t57 = s.__lexicalTextContent;
          ("string" != typeof _t57 && e(356, o.getType()), (wn += _t57), Fn(s));
        }
        if (
          (Vn || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (to(s, r), zr(r) && !Vn)
        )
          for (var _t58 of r.getChildren())
            Pr(_t58) && to(js(On, _t58.getKey()), _t58);
      } else {
        var _e50 = r.getTextContent();
        if (Lr(r)) {
          var _e51 = r.decorate(On, kn);
          (null !== _e51 && _o(t, _e51),
            i && (ro(r).size > 0 || ro(o).size > 0) && lo(o, r, s));
        }
        wn += _e50;
      }
      if (!Jn && zr(r)) {
        var _t59 = r.getLatest();
        if (_t59.__cachedText !== wn) {
          var _e52 = _t59.getWritable();
          ((_e52.__cachedText = wn), (r = _e52));
        }
      }
      return (Hn.$decorateDOM(r, o, s, On), Nn(r), s);
    }
    function _o(t, e) {
      var n = On._pendingDecorators;
      var o = On._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = _s(On);
      }
      n[t] = e;
    }
    function yo(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === On._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function mo(t, e) {
      var n = new Set();
      for (var _o21 = e; _o21 < t.length; _o21++) n.add(t[_o21]);
      return n;
    }
    function xo(t, e, n, o, r, i) {
      ((wn = ""),
        (Mn = null),
        (An = null),
        (Dn = null),
        (Vn = 2 === o),
        (On = n),
        (kn = n._config),
        (Hn = n._config.dom || Qc),
        (En = n._nodes),
        (Rn = On._listeners.mutation),
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
              for (var _n36 of _e54) {
                var _e53 = $n.get(_n36);
                if (void 0 === _e53) continue;
                var _o22 = _e53.__parent;
                if (null === _o22) continue;
                var _r21 = t.get(_o22);
                (void 0 === _r21 && ((_r21 = new Set()), t.set(_o22, _r21)),
                  _r21.add(_n36));
              }
            };
          return (e(Ln.keys()), e(Kn), t);
        })()));
      var s = new Map();
      return (
        (Un = s),
        po("root", null),
        (On = void 0),
        (En = void 0),
        (Ln = void 0),
        (Kn = void 0),
        (Bn = void 0),
        (zn = void 0),
        ($n = void 0),
        (kn = void 0),
        (Wn = void 0),
        (jn = void 0),
        (Un = void 0),
        (Hn = Qc),
        s
      );
    }
    function So(t) {
      var n = Wn.get(t);
      return (void 0 === n && e(75, t), n);
    }
    function Co(t, n, o) {
      ga();
      var r = t.__key,
        i = t.getParent();
      if (null === i) return void (null !== Jf(t) && e(367, r, String(Jf(t))));
      var s = (function (t) {
        var e = xf();
        if (!zu(e) || !Pr(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          i = o.getNode();
        return (
          qs(r, t) && n.set(t.__key, 0, "element"),
          qs(i, t) && o.set(t.__key, 0, "element"),
          e
        );
      })(t);
      var l = !1;
      if (zu(s) && n) {
        var _e55 = s.anchor,
          _n37 = s.focus;
        (_e55.key === r &&
          (Tf(_e55, t, i, t.getPreviousSibling(), t.getNextSibling()),
          (l = !0)),
          _n37.key === r &&
            (Tf(_n37, t, i, t.getPreviousSibling(), t.getNextSibling()),
            (l = !0)));
      } else Wu(s) && n && t.isSelected() && t.selectPrevious();
      (zf(t.getWritable(), n && !l && zu(s) ? s : null),
        o || nl(i) || i.canBeEmpty() || !i.isEmpty() || Co(i, n),
        n && s && zr(i) && i.isEmpty() && i.selectEnd());
    }
    var vo = Symbol["for"]("ephemeral");
    function To(t) {
      return t[vo] || !1;
    }
    var No = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _bo5 = (function () {
      function bo(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", No),
          Object.defineProperty(this, vn, No),
          rs(this, t));
      }
      bo.getType = function getType() {
        var _yc = yc(this),
          t = _yc.ownNodeType;
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
        var _ref29;
        var n = e["extends"] || wc(this.constructor);
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
          var _e56 = fs(t);
          if (null === _e56) break;
          t = null !== _e56.__parent ? _e56.__parent : Jf(_e56);
        }
        return !1;
      };
      _proto7.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || xf();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (ci(this)) return n;
        if (
          zu(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t60 = this.getParent();
          if (Lr(this) && this.isInline() && _t60) {
            var _n38 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t60.is(_n38.getNode()) &&
              _n38.offset === _t60.getChildrenSize() &&
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
        return null === t ? null : fs(t);
      };
      _proto7.getParentOrThrow = function getParentOrThrow() {
        var t = this.getParent();
        return (null === t && e(66, this.__key), t);
      };
      _proto7.getTopLevelElement = function getTopLevelElement() {
        var t = this;
        for (; null !== t; ) {
          var _n39 = t.getParent();
          if (nl(_n39) || null !== Jf(t))
            return (Pr(t) || (t === this && Lr(t)) || e(194), t);
          t = _n39;
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
        return null === t ? null : fs(t);
      };
      _proto7.getPreviousSiblings = function getPreviousSiblings() {
        return jf(this.getPreviousSibling(), "previous").reverse();
      };
      _proto7.getNextSibling = function getNextSibling() {
        var t = this.getLatest().__next;
        return null === t ? null : fs(t);
      };
      _proto7.getNextSiblings = function getNextSiblings() {
        return jf(this.getNextSibling(), "next");
      };
      _proto7.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto7.isBefore = function isBefore(t) {
        var n = Vd(this, t);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === jd(n)
              : ("same" !== n.type && "ancestor" !== n.type && e(279), !1)))
        );
      };
      _proto7.isParentOf = function isParentOf(t) {
        return qs(t, this);
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
            r && Pr(o) ? (e ? o.getFirstChild() : o.getLastChild()) : null;
          null !== _t61 && i++;
          var _n40 = _t61 || (e ? o.getNextSibling() : o.getPreviousSibling());
          ((r = null !== _n40), (o = _n40 || o.getParent()));
        }
        return e ? n : n.reverse();
      };
      _proto7.isDirty = function isDirty() {
        var t = ya()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto7.getLatest = function getLatest() {
        if (To(this)) return this;
        var t = fs(this.__key);
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
        if (To(this)) return this;
        ga();
        var t = _a(),
          e = ya(),
          n = this.__key,
          o = e._cloneNotNeeded,
          r = o.get(n),
          i = t._selection;
        if ((null !== i && i.setCachedNodes(null), void 0 !== r))
          return (ls(r), r);
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
        var c = Wl(l);
        return (o.set(n, c), s.set(n, c), ls(c), c);
      };
      _proto7.getTextContent = function getTextContent() {
        return ld(this);
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
        return { element: Fl(t).$createDOM(this, t) };
      };
      _proto7.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = (function (t, e) {
            var n = Zl(Ql(t.constructor)),
              o = n.generated,
              r = n.isCompactDefault,
              i = null === o ? void 0 : e ? o.exportCompactJSON : o.exportJSON;
            return void 0 === i
              ? (function (t, e, n) {
                  var o = n ? { type: t.__type } : {};
                  return (
                    Pr(t) && (o.children = []),
                    (function (t, e, n, o) {
                      for (var _r22 = 0; _r22 < e.length; _r22++) {
                        var _i16 = e[_r22];
                        if (o && _i16.derived) continue;
                        var _s0 = void 0;
                        if ("ownField" === _i16.kind) {
                          var _e57 = dc(t)[_i16.field];
                          _s0 =
                            void 0 === _i16.getterTable
                              ? _e57
                              : Ue(_i16.getterTable, _e57)
                                ? _i16.getterTable[_e57]
                                : void 0;
                        } else _s0 = _i16.getter.call(t);
                        ("ownField" === _i16.kind &&
                          void 0 !== _i16.when &&
                          ((!hc(_i16, _s0) && _i16.when.call(t)) ||
                            (_s0 = void 0)),
                          (o && hc(_i16, _s0)) || (n[_i16.key] = _s0));
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
        return _c(pn(this, t), t);
      };
      bo.transform = function transform() {
        return null;
      };
      _proto7.remove = function remove(t) {
        Co(this, !0, t);
      };
      _proto7.replace = function replace(t, n) {
        ga();
        var o = xf();
        (null !== o && (o = o.clone()), il(this, t));
        var r = this.getLatest(),
          i = this.__key,
          s = Yf(r);
        null !== s && e(400, i, r.getType(), s.getKey(), s.getType());
        var l = t.__key,
          c = t.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent();
        zf(c, zu(o) ? o : null);
        var d = r.getPreviousSibling(),
          h = r.getNextSibling();
        (Co(r, !1, !0),
          Kf(a, c, d && d.getWritable(), h && h.getWritable()),
          (a.__size = null !== f && f.is(a) ? u - 1 : u));
        var g = 0;
        if (
          (n &&
            ((Pr(this) && Pr(c)) || e(139),
            (g = c.getChildrenSize()),
            c.splice(g, 0, this.getChildren())),
          zu(o))
        ) {
          Cs(o);
          for (var _t62 of [o.anchor, o.focus])
            _t62.key === i &&
              (n && "element" === _t62.type
                ? _t62.set(c.__key, g + _t62.offset, "element")
                : Pu(_t62, c));
        }
        return (as() === i && cs(l), c);
      };
      _proto7.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        return $f(this, "next", t, e);
      };
      _proto7.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        return $f(this, "previous", t, e);
      };
      _proto7.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto7.createParentElementNode = function createParentElementNode() {
        return Ii();
      };
      _proto7.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto7.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto7.selectPrevious = function selectPrevious(t, e) {
        return Wf(bd(this, "previous"), t, e);
      };
      _proto7.selectNext = function selectNext(t, e) {
        return Wf(bd(this, "next"), t, e);
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
    function ko(t) {
      return t instanceof _bo5;
    }
    function Oo(t, e) {
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
              (t && mn(n, t, e)) ||
              (e && mn(n, e, t)) ||
              (t && xn(n, t, e)) ||
              (e && xn(n, e, t))
            );
          })(c, a))
      );
    }
    function Eo(t, e) {
      var n = t.mergeWithSibling(e),
        o = ya()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function wo(t) {
      var e,
        n,
        o = t;
      if (!us(o))
        if ("" !== o.__text || !o.isSimpleText() || o.isUnmergeable()) {
          for (
            ;
            null !== (e = o.getPreviousSibling()) &&
            ci(e) &&
            e.isSimpleText() &&
            !e.isUnmergeable() &&
            !us(e);
          ) {
            if ("" !== e.__text) {
              if (Oo(e, o)) {
                o = Eo(e, o);
                break;
              }
              break;
            }
            e.remove();
          }
          for (
            ;
            null !== (n = o.getNextSibling()) &&
            ci(n) &&
            n.isSimpleText() &&
            !n.isUnmergeable() &&
            !us(n);
          ) {
            if ("" !== n.__text) {
              if (Oo(o, n)) {
                o = Eo(o, n);
                break;
              }
              break;
            }
            n.remove();
          }
        } else o.remove();
    }
    function Mo(t) {
      return (Ao(t.anchor), Ao(t.focus), t);
    }
    function Ao(t) {
      for (; "element" === t.type; ) {
        var _e58 = t.getNode(),
          _n41 = t.offset;
        var _o23 = void 0,
          _r23 = void 0;
        if (
          (_n41 === _e58.getChildrenSize()
            ? ((_o23 = _e58.getChildAtIndex(_n41 - 1)), (_r23 = !0))
            : ((_o23 = _e58.getChildAtIndex(_n41)), (_r23 = !1)),
          ci(_o23))
        ) {
          t.set(_o23.__key, _r23 ? _o23.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Pr(_o23)) break;
        t.set(_o23.__key, _r23 ? _o23.getChildrenSize() : 0, "element", !0);
      }
    }
    var Do = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function Io(t, e) {
      if ("number" == typeof t) return Number.isFinite(t) ? t : e;
      if ("string" != typeof t || !Do.test(t)) return e;
      var n = Number(t);
      return Number.isFinite(n) ? n : e;
    }
    function Po(t, e, n, o, r) {
      var i = Io(t, e);
      return i >= n && i <= o && Number.isInteger(i) ? i : e;
    }
    var Fo = function Fo(t) {
      var e = be(t, "format"),
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
            (t.__indent = Po(e.indent, 0, 0, Infinity)),
            (t.__textFormat = Io(e.textFormat, 0)));
          var s = e.textStyle;
          return ((t.__textStyle = "string" == typeof s ? s : ""), t);
        },
      };
    };
    function Ro(t, e) {
      ((t.__detail = e.__detail),
        (t.__format = e.__format),
        (t.__mode = e.__mode),
        (t.__style = e.__style),
        (t.__text = e.__text));
    }
    var Lo = function Lo(t) {
        var e = be(t, "mode"),
          n = Oe(t, "detail", 0),
          o = Oe(t, "format", 0),
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
            t.__detail = "string" == typeof s && s in n ? n[s] : Io(s, 0);
            var l = e.format;
            t.__format = "string" == typeof l && l in o ? o[l] : Io(l, 0);
            var c = e.mode;
            t.__mode = "string" == typeof c && c in r ? r[c] : i;
            var a = e.style;
            t.__style = "string" == typeof a ? a : "";
            var u = e.text;
            return ((t.__text = "string" == typeof u ? u : ""), t);
          },
          afterCloneFrom: Ro,
        };
      },
      Ko = function Ko(t) {
        var e = be(t, "format"),
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
              (t.__indent = Po(e.indent, 0, 0, Infinity)),
              (t.__textFormat = Io(e.textFormat, 0)));
            var s = e.textStyle;
            return ((t.__textStyle = "string" == typeof s ? s : ""), t);
          },
        };
      },
      Bo = function Bo() {
        return {
          exportJSON: function exportJSON(t) {
            return { type: t.__type, version: 1 };
          },
          exportCompactJSON: function exportCompactJSON(t) {
            return { type: t.__type };
          },
        };
      },
      zo = function zo(t) {
        var e = be(t, "mode"),
          n = Oe(t, "format", 0);
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
            t.__format = "string" == typeof o && o in n ? n[o] : Io(o, 0);
            var r = e.style;
            return ((t.__style = "string" == typeof r ? r : ""), t);
          },
        };
      },
      $o = new WeakMap();
    function Wo(t, e) {
      for (
        var _n42 = t;
        null !== _n42 && _n42 !== e;
        _n42 = Object.getPrototypeOf(_n42)
      ) {
        var _e59 = _n42.prototype;
        if (
          void 0 !== _e59 &&
          Object.prototype.hasOwnProperty.call(_e59, "isInline") &&
          "function" == typeof _e59.isInline &&
          !Sc(_e59.isInline)
        )
          try {
            var _e60 = t.prototype.isInline.call(Object.create(t.prototype));
            return "boolean" == typeof _e60 ? _e60 : null;
          } catch (t) {
            return null;
          }
      }
    }
    function jo(t) {
      for (var _ref31 of bc(t)) {
        var _e61 = _ref31.ownNodeConfig;
        if (_e61 && void 0 !== _e61.children) return _e61.children;
      }
    }
    function Uo(t) {
      var e = $o.get(t);
      if (void 0 === e) {
        var _n43 = {},
          _o24 = {};
        var _r24 = !1;
        for (var _ref33 of bc(t)) {
          var _e62 = _ref33.klass;
          var _i17 = _ref33.ownNodeConfig;
          _i17 &&
            (void 0 === _o24.inline &&
              void 0 !== _i17.inline &&
              ((_n43.inline = _i17.inline), (_o24.inline = _e62)),
            void 0 === _o24.children &&
              void 0 !== _i17.children &&
              ((_n43.children = _i17.children), (_o24.children = _e62)),
            _r24 ||
              void 0 === _i17.mergeAdjacent ||
              ((_r24 = !0),
              !1 !== _i17.mergeAdjacent &&
                ((_n43.mergeAdjacent = _i17.mergeAdjacent),
                (_o24.mergeAdjacent = _e62))));
        }
        var _i18 = (function (t) {
          var e = new Set(),
            n = cc(t);
          for (var _t63 of Object.keys(n))
            !0 === n[_t63].derived && e.add(_t63);
          for (var _ref35 of bc(t)) {
            var _n44 = _ref35.ownNodeConfig;
            {
              var _t64 = _n44 && _n44.stateConfigs;
              if (_t64)
                for (var _n45 of _t64) {
                  var _t65 = _n45 instanceof ln ? _n45 : _n45.stateConfig;
                  _t65.derived && e.add(_t65.key);
                }
            }
          }
          return e;
        })(t);
        (void 0 !== _o24.inline &&
          _o24.inline !== t &&
          void 0 !== Wo(t, _o24.inline) &&
          Wo(t, _o24.inline) !== _n43.inline &&
          (delete _n43.inline, delete _o24.inline),
          void 0 === _o24.mergeAdjacent ||
            _o24.mergeAdjacent === t ||
            (null ===
              (function (t, e, n) {
                var o = cc(t);
                for (var _t66 of e.by)
                  if ("string" == typeof _t66) {
                    if (!(_t66 in o)) return { entry: _t66, reason: "unknown" };
                    if (n.has(_t66)) return { entry: _t66, reason: "derived" };
                  } else if (_t66.derived)
                    return { entry: String(_t66.key), reason: "derived-state" };
                return null;
              })(t, _n43.mergeAdjacent, _i18) &&
              null ===
                (function (t, e) {
                  if (!Array.isArray(e) || e.includes("inline")) return null;
                  for (var _n46 of e) {
                    if ("inline" === _n46) continue;
                    var _e63 = jo(_n46);
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
                      return _n46;
                  }
                  return null;
                })(t, _n43.children)) ||
            (delete _n43.mergeAdjacent, delete _o24.mergeAdjacent),
          (e = Object.freeze(
            babelHelpers["extends"]({}, _n43, {
              declaredBy: Object.freeze(_o24),
              derived: _i18,
              derivedNames: _i18,
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
          for (var _ref37 of bc(t)) {
            var _n47 = _ref37.ownNodeConfig;
            var _o25 = _ref37.ownNodeType;
            if (
              void 0 !== _n47 &&
              "overflow" === _o25 &&
              _n47["extends"] === _Ir4
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
      if (ci(t) || Hc(t) || Vo(t)) return !0;
      try {
        return t.isInline();
      } catch (t) {
        return !0;
      }
    }
    function Yo(t) {
      return ci(t) || Hc(t) || (Lr(t) && Jo(t));
    }
    function Go(t, e) {
      if (Vo(e)) return !0;
      if ("inline" === t) return Jo(e);
      if ("block" === t) return !Jo(e);
      if (Jo(e)) return t.includes("inline");
      for (var _n48 of t) if ("inline" !== _n48 && e instanceof _n48) return !0;
      return !1;
    }
    function qo(t) {
      return nl(t) ? "block" : Uo(t.constructor).children;
    }
    function Xo(t, e) {
      return (
        Pi(e) &&
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
        _o26 = Pr(_o26)
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
      if (!Pr(e)) return null;
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
      if (!Pr(t) || Pi(t) || Jo(t)) return !1;
      var _e64 = function e(t) {
        return t.getChildren().some(function (t) {
          return !Pr(t) || _e64(t);
        });
      };
      return !_e64(t);
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
          var _t67 = this.pathByParent.get(n);
          (void 0 === _t67 &&
            ((_t67 = new Set()), this.pathByParent.set(n, _t67)),
            _t67.add(e));
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
        for (var _t68 of n) {
          var _n49 = fs(_t68);
          null !== _n49 && _n49.getLatest().__parent === e && r.push(_n49);
        }
        return (this.childrenCache.set(e, { nodes: r, size: n.size }), r);
      };
      _proto8.addPathChain = function addPathChain(t) {
        for (var _e65 = t; null !== _e65; _e65 = _e65.getParent()) {
          var _t69 = _e65.getLatest().__parent,
            _n50 = null === _t69 ? void 0 : this.pathByParent.get(_t69);
          if (void 0 !== _n50 && _n50.has(_e65.getKey())) return;
          this.addPath(_e65);
        }
      };
      _proto8.repath = function repath() {
        for (var _ref39 of Array.from(this.pathByParent)) {
          var _t70 = _ref39[0];
          var _e66 = _ref39[1];
          {
            var _n51 = fs(_t70);
            if (null === _n51 || !_n51.isAttached()) {
              this.pathByParent["delete"](_t70);
              for (var _t71 of _e66) {
                var _e67 = fs(_t71);
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
          for (var _t72 of n) {
            var _e68 = fs(_t72);
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
          var _e69 = fs(t.text);
          return null !== _e69 && _e69.isAttached()
            ? [t.text, t.offset, "text"]
            : null;
        }
        if ("inside" in t) {
          var _n52 = fs(t.inside);
          if (null !== _n52 && _n52.isAttached())
            return [t.inside, 0, "element"];
          var _o27 = this.substitutes.get(t.inside);
          return void 0 !== _o27 && e < 16 ? this.$resolve(_o27, e + 1) : null;
        }
        var n = t.keys,
          o = t.after;
        for (var _t73 = n.length - 1; _t73 >= 0; _t73--) {
          var _r25 = fs(n[_t73]);
          if (
            null === _r25 ||
            !_r25.isAttached() ||
            null === _r25.getParent()
          ) {
            var _o28 = this.substitutes.get(n[_t73]);
            if (void 0 !== _o28 && e < 16) return this.$resolve(_o28, e + 1);
            continue;
          }
          var _i19 = _r25;
          for (var _e70 = 0; _e70 < _t73; _e70++) {
            var _t74 = _i19.getParent();
            if (
              null === _t74 ||
              nl(_t74) ||
              null !== (o ? _i19.getNextSibling() : _i19.getPreviousSibling())
            )
              break;
            _i19 = _t74;
          }
          return ci(_i19)
            ? [_i19.getKey(), o ? _i19.getTextContentSize() : 0, "text"]
            : [
                _i19.getParentOrThrow().getKey(),
                _i19.getIndexWithinParent() + (o ? 1 : 0),
                "element",
              ];
        }
        return null;
      };
      return er;
    })();
    function nr(t, e) {
      e.length > 0 && _Ir4.prototype.splice.call(t, t.getChildrenSize(), 0, e);
    }
    function or(t) {
      Co(t, !1, !0);
    }
    function rr(t, e) {
      if (t.constructor !== e.constructor || !Pr(t) || !Pr(e)) return !1;
      var n = t.constructor,
        o = Uo(n),
        r = o.mergeAdjacent;
      if (void 0 === r || o.declaredBy.mergeAdjacent !== n) return !1;
      var i, s;
      for (var _n53 of r.by)
        if ("string" == typeof _n53) {
          ((i = i || t.exportJSON()), (s = s || e.exportJSON()));
          var _o29 = i[_n53],
            _r26 = s[_n53];
          if (_o29 !== _r26 && JSON.stringify(_o29) !== JSON.stringify(_r26))
            return !1;
        } else if (!_n53.isEqual(cn(t, _n53), cn(e, _n53))) return !1;
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
      if (Pr(o) && rr(o, r)) return void ir(o, r, n);
      var i = t.INTERNAL_$afterStructureMerge;
      "function" == typeof i && (i.call(t, o, r), n.full || n.repath());
    }
    function sr(t, e) {
      var n = t;
      for (
        var _t75 = n.getPreviousSibling();
        null !== _t75 && rr(_t75, n);
        _t75 = n.getPreviousSibling()
      )
        n = _t75;
      for (
        var _t76 = n.getNextSibling();
        null !== _t76 && rr(n, _t76);
        _t76 = n.getNextSibling()
      )
        ir(n, _t76, e);
      return n;
    }
    function lr(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      if (n || e.full)
        for (var _n54 = t.getFirstChild(); null !== _n54; )
          _n54 = sr(_n54, e).getNextSibling();
      else
        for (var _n55 of e.$children(t)) {
          var _o30 = _n55.constructor;
          Uo(_o30).declaredBy.mergeAdjacent === _o30 &&
            _n55.getLatest().__parent === t.getKey() &&
            sr(_n55, e);
        }
    }
    function cr(t, e, n) {
      n.changed = !0;
      for (var _e71 of t.getChildren()) or(_e71);
      var o = [],
        r = [],
        i = [];
      var s = !1;
      for (var _n56 of e) {
        if ("lifted" in _n56) {
          o.push(_n56.lifted);
          continue;
        }
        if (!_n56.hadChildren) continue;
        var _e72 = void 0;
        if (s) {
          _e72 = ol(t);
          var _n57 = _e72.INTERNAL_$afterStructureSplit;
          "function" == typeof _n57 && _n57.call(_e72, t, i);
        } else ((s = !0), (_e72 = t));
        (nr(_e72, _n56.content),
          (_n56.holder = _e72),
          i.push.apply(i, Array.from(_n56.content)),
          o.push(_e72),
          r.push(_e72));
      }
      var l = t.getParentOrThrow();
      n.written.add(l.getKey());
      var c = o.indexOf(t);
      var a = t;
      for (var _t77 = c - 1; _t77 >= 0; _t77--)
        ($f(a, "previous", o[_t77], !1), (a = o[_t77]));
      a = t;
      for (var _t78 = c + 1; _t78 < o.length; _t78++)
        ($f(a, "next", o[_t78], !1), (a = o[_t78]));
      for (var _t79 of o) (n.addPath(_t79), n.touched.add(_t79.getKey()));
      return (
        -1 === c &&
          (o.length > 0 &&
            n.substitutes.set(t.getKey(), { after: !1, keys: Qo(o[0], !1) }),
          or(t)),
        r
      );
    }
    function ar(t, e, n) {
      var o = t.isInline();
      return n.map(function (t) {
        return Go(e, t)
          ? "keep"
          : !o && Xo(e, t)
            ? "join"
            : Jo(t)
              ? "keep"
              : "lift";
      });
    }
    function ur(t, e) {
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
    function fr(t, e, n) {
      var o = [];
      var r = [];
      var i = function i() {
        if (r.length > 0) {
          var _t80 = ol(e);
          ($f(r[0], "previous", _t80, !1), nr(_t80, r), o.push(_t80), (r = []));
        }
      };
      for (var _o31 of t.getChildren())
        !Jo(_o31) || Vo(_o31)
          ? (i(), Pr(_o31) && fr(_o31, e, n))
          : r.push(_o31);
      if ((i(), 0 === o.length)) return;
      ((n.changed = !0), n.written.add(t.getKey()));
      var s = qo(t);
      void 0 !== s &&
        o.some(function (t) {
          return !Go(s, t);
        }) &&
        _r(t, s, !0, n);
    }
    function dr(t, e) {
      var n = function n(t) {
        return null !== t && !Go("block", t);
      };
      if (!n(t)) return;
      var o = t;
      for (
        var _t81 = o.getPreviousSibling();
        n(_t81);
        _t81 = o.getPreviousSibling()
      )
        o = _t81;
      var r = [o];
      for (var _t82 = o.getNextSibling(); n(_t82); _t82 = _t82.getNextSibling())
        r.push(_t82);
      var i = o.createParentElementNode();
      ($f(o, "previous", i, !1),
        nr(i, r),
        (e.changed = !0),
        e.written.add(i.getKey()),
        e.addPath(i),
        e.touched.add(i.getKey()));
    }
    var hr = new WeakMap();
    function gr(t) {
      var e = pr.get(t);
      if (void 0 === e) {
        var _n58 = t.prototype;
        ((e =
          _n58.isShadowRoot !== _Ir4.prototype.isShadowRoot ||
          (_n58.isInline !== _Ir4.prototype.isInline && !Sc(_n58.isInline))),
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
        for (var _t83 of i) _t83.getLatest().__parent === r && dr(_t83, o);
        return null;
      }
      return "inline" === e || e.includes("inline")
        ? ar(t, e, i).every(function (t) {
            return "keep" === t;
          })
          ? null
          : (function (t, e, n) {
              var o = t.isInline(),
                r = t.getChildren(),
                i = ar(t, e, r);
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
                  (o && Pr(_u4) && fr(_u4, t, n),
                    s.push(c, { lifted: _u4 }),
                    (c = { content: [], hadChildren: !1, holder: null }),
                    (a = "none"));
                  continue;
                }
                if (((c.hadChildren = !0), "join" === _f3)) {
                  var _c$content;
                  ("inline" !== a && "line" !== a) || c.content.push(Uc());
                  var _t84 = _u4.getChildren();
                  (0 === _t84.length &&
                    l.push({
                      at: c.content.length,
                      paragraph: _u4,
                      segment: c,
                    }),
                    (_c$content = c.content).push.apply(
                      _c$content,
                      Array.from(_t84),
                    ),
                    (a = "line"));
                  continue;
                }
                var _d4 = Jo(_u4) ? "inline" : "block";
                ("inline" === _d4 && "line" === a && c.content.push(Uc()),
                  c.content.push(_u4),
                  (a = _d4));
              }
              s.push(c);
              var u = cr(t, s, n);
              for (var _ref41 of l) {
                var _e74 = _ref41.paragraph;
                var _o32 = _ref41.segment;
                var _r27 = _ref41.at;
                {
                  var _i20 = _r27 > 0 ? _o32.content[_r27 - 1] : void 0,
                    _s1 = _o32.content[_r27];
                  n.substitutes.set(
                    _e74.getKey(),
                    void 0 !== _i20
                      ? { after: !0, keys: Qo(_i20, !0) }
                      : void 0 !== _s1
                        ? { after: !1, keys: Qo(_s1, !1) }
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
              for (var _t85 = 0; _t85 < r.length; _t85++) {
                var _e75 = r[_t85],
                  _c6 = i[_t85];
                if ("lift" !== _c6) {
                  if (((l.hadChildren = !0), "keep" === _c6))
                    l.content.push(_e75);
                  else if ("flatten" === _c6) {
                    var _t86 = kc(o);
                    (nr(_t86, _e75.getChildren()),
                      n.substitutes.set(_e75.getKey(), {
                        inside: _t86.getKey(),
                      }),
                      l.content.push(_t86));
                  } else {
                    var _n59 = [_e75];
                    for (
                      ;
                      Jo(_e75) &&
                      _t85 + 1 < r.length &&
                      "wrap" === i[_t85 + 1] &&
                      Jo(r[_t85 + 1]);
                    )
                      _n59.push(r[++_t85]);
                    var _s10 = kc(o);
                    (nr(_s10, _n59), l.content.push(_s10));
                  }
                } else
                  (s.push(l, { lifted: _e75 }),
                    (l = { content: [], hadChildren: !1, holder: null }));
              }
              return (s.push(l), cr(t, s, n));
            })(t, e, o);
    }
    function yr(t, e) {
      var n = qo(t),
        o =
          void 0 !== n &&
          ((function (t, e) {
            if (zr(t) || !gr(t.constructor)) return e.full;
            var n = t.getLatest(),
              o = (nl(t) ? 1 : 0) + (Jo(t) ? 2 : 0);
            var r = hr.get(n);
            if (void 0 === r) {
              var _e76 = Pl().getEditorState()._nodeMap.get(t.getKey());
              r = void 0 === _e76 ? void 0 : hr.get(_e76);
            }
            return (hr.set(n, o), e.full || r !== o);
          })(t, e) ||
            ("block" === n && e.wrapsAll.has(t.getKey())));
      if (!e.full && !e.pathByParent.has(t.getKey())) {
        if (t.isEmpty() && !nl(t) && mr(t)) return (xr(t, e), !0);
        if (!o) return !1;
      }
      lr(t, e);
      var r = !1;
      for (var _n60 of e.$children(t))
        Pr(_n60) &&
          _n60.getLatest().__parent === t.getKey() &&
          yr(_n60, e) &&
          (r = !0);
      if (t.isEmpty() && !nl(t) && (mr(t) || (r && !t.canBeEmpty())))
        return (xr(t, e), !0);
      var i = void 0 === n ? null : _r(t, n, o, e);
      if (null === i) lr(t, e);
      else for (var _t87 of i) lr(_t87, e, !0);
      return !1;
    }
    function mr(t) {
      return Vo(t) || (Jo(t) && !t.canBeEmpty());
    }
    function xr(t, e) {
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
      for (var _t88 of [n, o])
        null !== _t88 && (e.addPath(_t88), e.touched.add(_t88.getKey()));
      ((e.changed = !0), e.written.add(r.getKey()));
    }
    var Sr = new WeakMap();
    function Cr(t, e) {
      if (void 0 === e || !Pr(t)) return !1;
      var n = t.constructor;
      if (
        e.constructor !== n ||
        !(function (t) {
          var e = Sr.get(t);
          return (
            void 0 === e &&
              ((e = !gr(t) && Uo(t).declaredBy.mergeAdjacent !== t),
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
      if (!Pr(t)) return !1;
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
        if (!vr(_e77) && !Go("block", _e77)) return !0;
      return !1;
    }
    function Nr(t, e) {
      var n = xf(),
        o = zu(n)
          ? [n.anchor, n.focus].map(function (t) {
              return { anchor: Zo(t), point: t };
            })
          : [];
      e(t);
      for (var _e78 of t.written) {
        var _t89 = fs(_e78);
        if (null !== _t89 && _t89.isAttached())
          for (
            var _e79 = _t89;
            null !== _e79 && !zr(_e79);
            _e79 = _e79.getParent()
          )
            _e79.markDirty();
      }
      if (t.changed)
        for (var _ref43 of o) {
          var _e80 = _ref43.point;
          var _n61 = _ref43.anchor;
          {
            var _o33 = _n61 && t.$resolve(_n61);
            _o33 && _e80.set(_o33[0], _o33[1], _o33[2]);
          }
        }
    }
    var br;
    function kr(t) {
      return void 0 !== br && br.has(t);
    }
    function Or() {
      return babelHelpers["extends"]({}, P, { 0: "" });
    }
    function Er() {
      return babelHelpers["extends"]({}, D, { "": 0 });
    }
    var wr = Or(),
      Mr = Er(),
      Ar = Qe()({
        direction: en(qe([null, "ltr", "rtl"]), { field: "__dir" }),
        format: en(
          qe(["", "left", "start", "center", "right", "end", "justify"]),
          {
            field: "__format",
            getter: "getFormatType",
            getterTable: wr,
            setter: "setFormat",
            setterTable: Mr,
          },
        ),
        indent: en(Ge(0, { integer: !0, min: 0 }), { field: "__indent" }),
        textFormat: nn(Ge(), {
          getter: {
            field: "__textFormat",
            method: "getSerializedTextFormat",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textFormat" },
        }),
        textStyle: nn(Je(), {
          getter: {
            field: "__textStyle",
            method: "getSerializedTextStyle",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textStyle" },
        }),
      });
    function Dr(t) {
      if (nl(t) && !kr(ya())) {
        var _e81 = null;
        for (var _n62 of t.getChildren())
          _e81 = _n62.isInline()
            ? (_e81 || _n62.replace(_n62.createParentElementNode())).append(
                _n62,
              )
            : null;
      }
    }
    var _Ir4 = (function (_bo) {
      function Ir(t) {
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
      babelHelpers.inheritsLoose(Ir, _bo);
      var _proto9 = Ir.prototype;
      _proto9.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: Dr,
          extends: _bo5,
          generated: Fo,
          json: Ar,
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
        return jf(this.getFirstChild(), "next");
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
        return 0 === this.getChildrenSize() && 0 === Zf(this).length;
      };
      _proto9.isDirty = function isDirty() {
        var t = ya()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto9.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto9.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e82 of Zf(this)) {
          var _n63 = td(this, _e82);
          if (Pr(_n63)) for (var _e83 of _n63.getAllTextNodes()) t.push(_e83);
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((ci(e) && t.push(e), Pr(e)))
            for (var _n64 of e.getAllTextNodes()) t.push(_n64);
          e = e.getNextSibling();
        }
        return t;
      };
      _proto9.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Pr(t); ) {
          var _e84 = t.getFirstChild();
          if (null === _e84) break;
          t = _e84;
        }
        return t;
      };
      _proto9.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Pr(t); ) {
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
          (Pr(n) && (e ? n.getLastDescendant() : n.getFirstDescendant())) || n
        );
      };
      _proto9.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : fs(t);
      };
      _proto9.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var t = this.getFirstChild();
        return (null === t && e(45, this.__key), t);
      };
      _proto9.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : fs(t);
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
        var t = ld(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o34 = 0; _o34 < n; _o34++) {
          var _r28 = e[_o34];
          ((t += _r28.getTextContent()),
            Pr(_r28) && _o34 !== n - 1 && !_r28.isInline() && (t += T));
        }
        return t;
      };
      _proto9.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n65 of Qf(t).values()) {
            var _t90 = fs(_n65);
            null !== _t90 && (e += _t90.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o35 = 0; _o35 < n; _o35++) {
          var _r29 = e[_o35];
          ((t += _r29.getTextContentSize()),
            Pr(_r29) && _o35 !== n - 1 && !_r29.isInline() && (t += 2));
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
        var e = M[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto9.getFormatFlags = function getFormatFlags(t, e) {
        return os(this.getLatest().__textFormat, t, e);
      };
      _proto9.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto9.select = function select(t, e) {
        ga();
        var n = xf();
        var o = t,
          r = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t91 = this.getFirstChild();
            if (ci(_t91) || Pr(_t91)) return _t91.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t92 = this.getLastChild();
            if (ci(_t92) || Pr(_t92)) return _t92.select();
          }
        (void 0 === o && (o = i), void 0 === r && (r = i));
        var s = this.__key;
        return zu(n)
          ? (n.anchor.set(s, o, "element"),
            n.focus.set(s, r, "element"),
            (n.dirty = !0),
            n)
          : df(s, o, s, r, "element", "element");
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
        for (var _t93 of o);
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
            for (var _t94 = 0; _t94 < o; _t94++) {
              null === s && e(100);
              var _t95 = s.getNextSibling();
              (i.push(s.getWritable()), (s = _t95));
            }
            return (
              Rf(t, r && r.getWritable(), s && s.getWritable()),
              (t.__size -= i.length),
              i.map(function (t) {
                return (
                  Lf(t),
                  (t.__prev = null),
                  (t.__next = null),
                  (t.__parent = null),
                  t.__key
                );
              })
            );
          })(i, null === u ? this.getFirstChild() : u.getNextSibling(), n, u));
        var d = o.length > 0 && null !== u ? u.getWritable() : null;
        for (var _t96 of o) {
          (null !== d &&
            _t96.is(d) &&
            ((u = d.getPreviousSibling()), (d = u && u.getWritable())),
            null !== a && _t96.is(a) && (a = a.getNextSibling()));
          var _n66 = _t96.getWritable();
          (_n66.__parent === s && f--, Bf(_n66));
          var _o36 = _t96.__key;
          (Kf(i, _n66, d, a && a.getWritable()),
            _t96.__key === s && e(76),
            l.push(_o36),
            (d = _n66));
        }
        if (((i.__size = f), c.length)) {
          var _t97 = xf();
          if (zu(_t97)) {
            var _e88 = new Set(c),
              _n67 = new Set(l);
            for (var _o37 of [_t97.anchor, _t97.focus])
              Fr(_o37, _e88, _n67) && Tf(_o37, _o37.getNode(), this, u, a);
            0 !== f || this.canBeEmpty() || nl(this) || this.remove();
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
        if (kl(e)) {
          var _t98 = this.getIndent();
          _t98 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t98 + "px"),
            e.setAttribute("data-lexical-indent", String(_t98)));
          var _n68 = this.getDirection();
          _n68 && (e.dir = _n68);
        }
        return { element: e };
      };
      _proto9.shouldSerializeTextStyles = function shouldSerializeTextStyles() {
        if (nl(this)) return !1;
        for (
          var _t99 = this.getFirstChild();
          null !== _t99;
          _t99 = _t99.getNextSibling()
        )
          if (ci(_t99)) return !1;
        return !0;
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
          var n = Rl(_this14, t, e);
          var o = n.element;
          (n.after && n.after.parentNode !== o && (n = n.withAfter(null)),
            n.before && n.before.parentNode !== o && (n = n.withBefore(null)));
          var r = n.getManagedLineBreak();
          r && n.insertManagedLineBreak("IMG" === r.nodeName);
          var i = n.getFirstChild();
          for (var _t100 of _this14.getChildrenKeys()) {
            var _r30 = e.getElementByKey(_t100);
            if (!_r30) continue;
            var _s11 = void 0,
              _l7 = i;
            for (; _l7 && !(_s11 = gs(_l7, e)) && Jl(_l7); )
              _l7 = _l7.nextSibling;
            (_l7 !== _r30 &&
              o.insertBefore(_r30, _s11 ? _l7 : i || n.getInsertionAnchor()),
              (i = _r30.nextSibling));
          }
          fo(_this14, t, n);
        });
      };
      return Ir;
    })(_bo5);
    function Pr(t) {
      return t instanceof _Ir4;
    }
    function Fr(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t101 = o.__key;
        if (e.has(_t101) && !n.has(_t101)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _Rr = (function (_bo2) {
      function Rr(t) {
        var _this2;
        ((_this2 = _bo2.call(this, t) || this),
          (_this2.__slotHost = null),
          (_this2.__slots = null));
        return _this2;
      }
      babelHelpers.inheritsLoose(Rr, _bo2);
      var _proto0 = Rr.prototype;
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
      return Rr;
    })(_bo5);
    function Lr(t) {
      return t instanceof _Rr;
    }
    function Kr(t) {
      var e = t.getLatest().__cachedText;
      return null === e || (!ha() && 0 !== ya()._dirtyType) ? null : e;
    }
    var _Br = (function (_Ir) {
      function Br() {
        var _this3;
        ((_this3 = _Ir.call(this, "root") || this),
          (_this3.__cachedText = null));
        return _this3;
      }
      babelHelpers.inheritsLoose(Br, _Ir);
      var _proto1 = Br.prototype;
      _proto1.$config = function $config() {
        return this.config("root", { extends: _Ir4 });
      };
      _proto1.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        e(51);
      };
      _proto1.getTextContent = function getTextContent() {
        var t = Kr(this);
        return null !== t ? t : _Ir.prototype.getTextContent.call(this);
      };
      _proto1.getTextContentSize = function getTextContentSize() {
        var t = Kr(this);
        return null !== t
          ? t.length
          : _Ir.prototype.getTextContentSize.call(this);
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
        for (var _t102 of o) Pr(_t102) || Lr(_t102) || e(282);
        return _Ir.prototype.splice.call(this, t, n, o);
      };
      Br.importJSON = function importJSON(t) {
        return xs().updateFromJSON(t);
      };
      _proto1.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return Br;
    })(_Ir4);
    function zr(t) {
      return t instanceof _Br;
    }
    function $r(t) {
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
    function Wr(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && "!important" === o.slice(r).toLowerCase()
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function jr(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = $r(n),
        r = $r(e);
      for (var _e89 in r) (delete o[_e89], Wr(t, _e89, r[_e89]));
      for (var _e90 in o) t.removeProperty(_e90);
    }
    var Ur = Qe()({
      detail: en(Ze(Ge(), A), { field: "__detail" }),
      format: en(Ze(Ge(), M), { field: "__format" }),
      mode: en(qe(["normal", "token", "segmented"]), {
        field: "__mode",
        getterTable: R,
        setterTable: F,
      }),
      style: en(Je(), { field: "__style" }),
      text: en(Je(), {
        field: "__text",
        getter: "getTextContent",
        setter: "setTextContent",
      }),
    });
    function Hr(t, e) {
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
    function Vr(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function Jr(t, e, n, o, r) {
      var i = o.classList;
      var s = Ls(r, "base");
      (void 0 !== s && i.add.apply(i, Array.from(s)),
        (s = Ls(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, Array.from(s)))
          : c && i.remove.apply(i, Array.from(s)));
      for (var _t103 in M) {
        var _o38 = M[_t103];
        if (((s = Ls(r, _t103)), void 0 !== s))
          if (n & _o38) {
            if (l && ("underline" === _t103 || "strikethrough" === _t103)) {
              e & _o38 && i.remove.apply(i, Array.from(s));
              continue;
            }
            (0 === (e & _o38) ||
              (c && "underline" === _t103) ||
              "strikethrough" === _t103) &&
              i.add.apply(i, Array.from(s));
          } else e & _o38 && i.remove.apply(i, Array.from(s));
      }
      Rs(o, "class");
    }
    function Yr(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? v : ""),
        i = Pl(),
        s = Fl(i).$getDOMSlot(n, e, i),
        l = s.getFirstChild();
      if (null === l || l.nodeType !== Node.TEXT_NODE)
        return void s.insertChild(_l().createTextNode(r));
      var c = l,
        a = c.nodeValue;
      if (a !== r)
        if (o || u || y) {
          var _ref44 = (function (t, e) {
              var n = t.length,
                o = e.length;
              var r = 0,
                i = 0;
              for (; r < n && r < o && t[r] === e[r]; ) r++;
              for (; i + r < n && i + r < o && t[n - i - 1] === e[o - i - 1]; )
                i++;
              return [r, n - r - i, e.slice(r, o - i)];
            })(a, r),
            _t104 = _ref44[0],
            _e91 = _ref44[1],
            _n69 = _ref44[2];
          c.replaceData(_t104, _e91, _n69);
        } else c.nodeValue = r;
    }
    function Gr(t, e, n, o, r, i) {
      Yr(r, t, e);
      var s = i.theme.text;
      void 0 !== s && Jr(0, 0, o, t, s);
    }
    function qr(t, e) {
      var n = _l().createElement(e);
      return (n.appendChild(t), n);
    }
    function Xr(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _Qr2 = (function (_bo3) {
      function Qr(t, e) {
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
      babelHelpers.inheritsLoose(Qr, _bo3);
      var _proto10 = Qr.prototype;
      _proto10.$config = function $config() {
        return this.config("text", {
          extends: _bo5,
          generated: Lo,
          importDOM: {
            "#text": function text() {
              return { conversion: oi, priority: 0 };
            },
            b: function b() {
              return { conversion: ti, priority: 0 };
            },
            code: function code() {
              return { conversion: si, priority: 0 };
            },
            em: function em() {
              return { conversion: si, priority: 0 };
            },
            i: function i() {
              return { conversion: si, priority: 0 };
            },
            mark: function mark() {
              return { conversion: si, priority: 0 };
            },
            s: function s() {
              return { conversion: si, priority: 0 };
            },
            span: function span() {
              return { conversion: Zr, priority: 0 };
            },
            strong: function strong() {
              return { conversion: si, priority: 0 };
            },
            sub: function sub() {
              return { conversion: si, priority: 0 };
            },
            sup: function sup() {
              return { conversion: si, priority: 0 };
            },
            u: function u() {
              return { conversion: si, priority: 0 };
            },
          },
          json: Ur,
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
        return this.__key === as();
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
        var e = M[t];
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
        return os(this.getLatest().__format, t, e);
      };
      _proto10.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto10.isInline = function isInline() {
        return !0;
      };
      _proto10.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = Hr(0, n),
          r = Vr(0, n),
          i = null === o ? r : o,
          s = _l().createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== o && ((l = _l().createElement(r)), s.appendChild(l)),
          Gr(l, this, 0, n, this.__text, t));
        var c = this.__style;
        return ("" !== c && jr(s.style, c), s);
      };
      _proto10.updateDOM = function updateDOM(t, n, o) {
        var r = this.__text,
          i = t.__format,
          s = this.__format,
          l = Hr(0, i),
          c = Hr(0, s),
          a = Vr(0, i),
          u = Vr(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _t105 = n.firstChild;
          null == _t105 && e(48);
          var _i22 = _l().createElement(u);
          return (Gr(_i22, this, 0, s, r, o), n.replaceChild(_i22, _t105), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && e(49)),
          Yr(r, f, this));
        var d = o.theme.text;
        void 0 !== d && i !== s && Jr(0, i, s, f, d);
        var h = t.__style,
          g = this.__style;
        return (h !== g && (jr(n.style, g, h), Rs(n, "style")), !1);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _bo3$prototype$export = _bo3.prototype.exportDOM.call(this, t),
          n = _bo3$prototype$export.element;
        return (
          kl(n) || e(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = qr(n, "b")),
          this.hasFormat("italic") && (n = qr(n, "i")),
          this.hasFormat("strikethrough") && (n = qr(n, "s")),
          this.hasFormat("underline") && (n = qr(n, "u")),
          { element: n }
        );
      };
      _proto10.selectionTransform = function selectionTransform(t, e) {};
      _proto10.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? M[t] : t), e);
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
        var e = os(this.getFormat(), t, null);
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
        return ((e.__text = t), e);
      };
      _proto10.select = function select(t, e) {
        ga();
        var n = t,
          o = e;
        var r = xf(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t106 = i.length;
          (void 0 === n && (n = _t106), void 0 === o && (o = _t106));
        } else ((n = 0), (o = 0));
        if (!zu(r)) return df(s, n, s, o, "text", "text");
        {
          var _t107 = as();
          ((_t107 !== r.anchor.key && _t107 !== r.focus.key) || cs(s),
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
        var c = xf();
        if (o && zu(c)) {
          var _e92 = t + s;
          c.setTextNodeRange(r, _e92, r, _e92);
        }
        var a = i.slice(0, l) + n + i.slice(l + e);
        return ((r.__text = a), r);
      };
      _proto10.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto10.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto10.splitText = function splitText() {
        ga();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = as(),
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
        for (var _e93 = 0, _o39 = 0; _e93 < i && _o39 <= l; _o39++) {
          var _r32 = t[_o39];
          _r32 > _e93 && (s.push(n.slice(_e93, _r32)), (_e93 = _r32));
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
        var m = xf();
        if (zu(m)) {
          var _ref45 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t108 = _ref45[0],
            _e94 = _ref45[1];
          ("text" === _t108.type && _t108.key === o && (_ = _t108),
            "text" === _e94.type && _e94.key === o && (y = _e94));
        }
        e.isSegmented()
          ? ((f = li(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = Sn(e, f)),
            (p = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t109 = 1; _t109 < c; _t109++) {
          var _n70 = li(s[_t109]);
          ((_n70.__format = d),
            (_n70.__style = h),
            (_n70.__detail = g),
            (_n70.__state = Sn(e, _n70)));
          var _i23 = _n70.__key;
          (r === o && cs(_i23), x.push(_n70));
        }
        var S = _ ? _.offset : null,
          C = y ? y.offset : null;
        var v = 0;
        for (var _t110 of x) {
          if (!_ && !y) break;
          var _e95 = v + _t110.getTextContentSize();
          if (
            (null !== _ &&
              null !== S &&
              S <= _e95 &&
              S >= v &&
              (_.set(_t110.getKey(), S - v, "text"), S < _e95 && (_ = null)),
            null !== y && null !== C && C <= _e95 && C >= v)
          ) {
            y.set(_t110.getKey(), C - v, "text");
            break;
          }
          v = _e95;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            (null !== e && ls(e), null !== n && ls(n));
          })(this);
          var _t111 = u.getWritable(),
            _e96 = this.getIndexWithinParent();
          (p
            ? (_t111.splice(_e96, 0, x), this.remove())
            : _t111.splice(_e96, 1, x),
            zu(m) && vf(m, u, _e96, c - 1));
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
        as() === r && cs(o);
        var l = xf();
        if (zu(l)) {
          var _e97 = l.anchor,
            _i24 = l.focus;
          (null !== _e97 && _e97.key === r && Nf(_e97, n, o, t, s),
            null !== _i24 && _i24.key === r && Nf(_i24, n, o, t, s));
        }
        var c = t.__text,
          a = n ? c + i : i + c;
        this.setTextContent(a);
        var u = this.getWritable();
        return (t.remove(), u);
      };
      _proto10.isTextEntity = function isTextEntity() {
        return !1;
      };
      return babelHelpers.createClass(Qr, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_bo5);
    function Zr(t) {
      return { forChild: ai(t.style), node: null };
    }
    function ti(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: ai(e.style, n ? void 0 : "bold"), node: null };
    }
    var ei = new WeakMap();
    function ni(t) {
      if (!kl(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function oi(t) {
      var n = t;
      null === t.parentElement && e(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = ei.get(n)) && !ni(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t112 = 0; _t112 < o.length; _t112++) ei.set(o[_t112], r);
          return r;
        })(n)
      )
        return { node: wf(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t113 = n,
          _e98 = !0;
        for (; null !== _t113 && null !== (_t113 = ri(_t113, !1)); ) {
          var _n71 = _t113.textContent || "";
          if (_n71.length > 0) {
            (/[ \t\n]$/.test(_n71) && (o = o.slice(1)), (_e98 = !1));
            break;
          }
        }
        _e98 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t114 = n,
          _e99 = !0;
        for (; null !== _t114 && null !== (_t114 = ri(_t114, !0)); )
          if (
            (_t114.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e99 = !1;
            break;
          }
        _e99 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: li(o) };
    }
    function ri(t, e) {
      var n = t;
      for (;;) {
        var _t115 = void 0;
        for (; null === (_t115 = e ? n.nextSibling : n.previousSibling); ) {
          var _t116 = n.parentElement;
          if (null === _t116) return null;
          n = _t116;
        }
        if (((n = _t115), kl(n))) {
          var _t117 = n.style.display;
          if (
            ("" === _t117 && !Ml(n)) ||
            ("" !== _t117 && !_t117.startsWith("inline"))
          )
            return null;
        }
        var _o40 = n;
        for (; null !== (_o40 = e ? n.firstChild : n.lastChild); ) n = _o40;
        if (ts(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var ii = {
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
    function si(t) {
      var e = ii[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: ai(t.style, e), node: null };
    }
    function li(t) {
      if (t === void 0) {
        t = "";
      }
      return rl(new _Qr2(t));
    }
    function ci(t) {
      return t instanceof _Qr2;
    }
    function ai(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        i = o.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign,
        a = t.textTransform;
      return function (t) {
        return ci(t) || Xr(t)
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
    function ui(t, n) {
      var o = t.type,
        r = t.key,
        i = t.offset,
        s = sl(t.key);
      return "text" === o
        ? (ci(s) || e(266, s.getType(), r), kd(s, n, i))
        : (Pr(s) || e(267, s.getType(), r), Ti(s, t.offset, n));
    }
    function fi(t, n) {
      var o = n.origin,
        r = n.direction,
        i = "next" === r;
      xd(n)
        ? t.set(o.getKey(), n.offset, "text")
        : Sd(n)
          ? ci(o)
            ? t.set(o.getKey(), Od(o, r), "text")
            : t.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((Cd(n) && Pr(o)) || e(268),
            t.set(o.getKey(), i ? 0 : o.getChildrenSize(), "element"));
    }
    function di(t) {
      var e = xf(),
        n = zu(e) ? e : hf();
      return (hi(n, t), Cs(n), n);
    }
    function hi(t, e) {
      (fi(t.anchor, e.anchor), fi(t.focus, e.focus));
    }
    function gi(t) {
      var e = t.anchor,
        n = t.focus,
        o = ui(e, "next"),
        r = ui(n, "next"),
        i = zd(o, r) <= 0 ? "next" : "previous";
      return Kd(Fd(o, i), Fd(r, i));
    }
    function pi(t) {
      var e = t.direction,
        n = t.origin,
        o = bd(n, pd(e)).getNodeAtCaret();
      return o ? bd(o, e) : wd(n.getParentOrThrow(), e);
    }
    function _i(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o41 = Cd(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o41;
        _o41 = _o41.getParentCaret(e)
      )
        n.push(pi(_o41));
      return n;
    }
    function yi(t) {
      return !!t && t.origin.isAttached();
    }
    function mi(t, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (t.isCollapsed()) return t;
      var o = "root",
        r = "next";
      var i = n;
      var s = vi(t, r);
      var l = s.anchor.origin;
      for (; null !== l && !nl(l); ) l = l.getParent();
      var c = Pr(l) ? l.getFirstChild() : null,
        a = _i(s.anchor, o),
        u = _i(s.focus.getFlipped(), o),
        f = new Set(),
        d = [];
      for (var _t118 of s.iterNodeCarets(o))
        if (Cd(_t118)) f.add(_t118.origin.getKey());
        else if (Sd(_t118)) {
          var _e100 = _t118.origin;
          (Pr(_e100) && !f.has(_e100.getKey())) || d.push(_e100);
        }
      var h = new Set();
      for (var _t119 of d) {
        var _e101 = _t119.getParent();
        (null === _e101 || f.has(_e101.getKey()) || h.add(_e101), is(_t119));
      }
      for (var _t120 of h)
        !_t120.canBeEmpty() &&
          !nl(_t120) &&
          _t120.isEmpty() &&
          _t120.isAttached() &&
          _t120.remove();
      for (var _t121 of s.getTextSlices()) {
        if (!_t121) continue;
        var _e102 = _t121.caret.origin,
          _n72 = _e102.getTextContentSize(),
          _o42 = pi(bd(_e102, r)),
          _s12 = _e102.getMode();
        if (
          (Math.abs(_t121.distance) === _n72 && "removeEmptySlices" === i) ||
          ("token" === _s12 && 0 !== _t121.distance)
        )
          _o42.remove();
        else if (0 !== _t121.distance) {
          i = "removeEmptySlices";
          var _e103 = _t121.removeTextSlice();
          var _n73 = _t121.caret.origin;
          if ("segmented" === _s12) {
            var _t122 = _e103.origin,
              _n74 = li(_t122.getTextContent())
                .setStyle(_t122.getStyle())
                .setFormat(_t122.getFormat());
            (_o42.replaceOrInsert(_n74), (_e103 = kd(_n74, r, _e103.offset)));
          }
          (_n73.is(a[0].origin) && (a[0] = _e103),
            _n73.is(u[0].origin) && (u[0] = _e103.getFlipped()));
        }
      }
      var g = xi(a),
        p = xi(u),
        _ = (function (t, e, n) {
          var o = t && t.getParentAtCaret(),
            r = e && e.getParentAtCaret(),
            i = o && r && Vd(o, r);
          if (!i || "branch" !== i.type) return null;
          var s = function s(t, e) {
              var o;
              for (
                var _r33 = t;
                _r33 && !_r33.is(i.commonAncestor);
                _r33 = _r33.getParent()
              ) {
                if (nl(_r33)) return;
                (e && !n.has(_r33.__key)) || !Il(_r33) || (o = _r33);
              }
              return o;
            },
            l = s(o, !1),
            c = l && s(r, !0);
          return l && c && 0 === Zf(c).length ? [l, c] : null;
        })(g, p, f);
      if (_) {
        var _t123 = _[0],
          _e104 = _[1];
        wd(_t123, "previous").splice(0, _e104.getChildren());
        var _n75 = _e104.getParent();
        for (_e104.remove(!0); _n75 && _n75.isEmpty(); ) {
          var _t124 = _n75;
          ((_n75 = _n75.getParent()), _t124.remove(!0));
        }
      } else if (p) {
        var _t125 = (function (t) {
            if (Cd(t)) {
              var _e106 = t.origin;
              if (Il(_e106)) return _e106;
            } else {
              var _e107 = t.getParentAtCaret();
              if (_e107 && Il(_e107)) return _e107;
            }
            return null;
          })(p),
          _e105 = _t125 && _t125.getParent(),
          _n76 = _t125 && _t125.getParents().findLast(el);
        if (
          _t125 &&
          _e105 &&
          !zr(_e105) &&
          _t125.isEmpty() &&
          f.has(_t125.getKey()) &&
          0 === Zf(_t125).length &&
          (!_n76 || f.has(_n76.getKey()))
        ) {
          _t125.remove(!0);
          var _n77 = _e105;
          for (; _n77 && !zr(_n77) && _n77.isEmpty(); ) {
            var _t126 = _n77.getParent();
            if (
              _t126 &&
              zr(_t126) &&
              _t126.getChildrenSize() <= 1 &&
              _n77.canBeEmpty()
            )
              break;
            var _e108 = _n77;
            ((_n77 = _t126), _e108.remove(!0));
          }
        }
      }
      null !== Ss(l, c) || null === l || l.isAttached() || Ss(xs(), null);
      var y = xi([g, p].concat(Array.from(a), Array.from(u)));
      if (y) return Ld(Fd(y, t.direction));
      e(
        269,
        JSON.stringify(
          a.map(function (t) {
            return t.origin.__key;
          }),
        ),
      );
    }
    function xi(t) {
      var e = t.find(yi);
      return e && Si(e);
    }
    function Si(t) {
      var e = (function (t) {
          var e = t;
          for (; Cd(e); ) {
            var _t127 = Ad(e);
            if (!Cd(_t127)) break;
            e = _t127;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (ci(e.origin)) return xd(e) ? e : kd(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return Sd(o) && ci(o.origin) ? kd(o.origin, n, pd(n)) : e;
    }
    function Ci(t) {
      return xd(t) && t.offset !== Od(t.origin, t.direction);
    }
    function vi(t, e) {
      return t.direction === e ? t : Kd(Fd(t.focus, e), Fd(t.anchor, e));
    }
    function Ti(t, e, n) {
      var o = t.getChildrenSize(),
        r = (e > 0 ? Math.min(Math.ceil(e), o) : 0) - ("next" === n ? 1 : 0),
        i = r < 0 || r >= o ? null : t.getChildAtIndex(r);
      return null === i ? wd(t, n) : bd(i, n);
    }
    function Ni(t) {
      var n = t.origin,
        o = t.offset,
        r = t.direction;
      if (o === Od(n, r)) return t.getSiblingCaret();
      if (o === Od(n, pd(r))) return pi(t.getSiblingCaret());
      var _n$splitText = n.splitText(o),
        i = _n$splitText[0];
      return (ci(i) || e(281), Fd(bd(i, "next"), r));
    }
    function bi(t, e) {
      for (var _n78 of t)
        if (null !== _n78 && _n78.caret.origin.is(e)) return _n78;
    }
    function ki(t, e) {
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
        s = e && i && Cf(e, i) ? n.getIndexWithinParent() : -1,
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
      i && e && e !== xf() && vf(e, i, s, c.length - 1);
      for (var _ref47 of l) {
        var _t128 = _ref47[0];
        var _e109 = _ref47[1];
        null !== _e109 && _t128.set(a.__key, _e109, "text");
      }
      return a;
    }
    function Oi(t, e) {
      return !0;
    }
    function Ei(t, _temp) {
      var _ref48 = _temp === void 0 ? {} : _temp,
        _ref48$$copyElementNo = _ref48.$copyElementNode,
        e = _ref48$$copyElementNo === void 0 ? ol : _ref48$$copyElementNo,
        _ref48$$splitTextPoin = _ref48.$splitTextPointCaretNext,
        n = _ref48$$splitTextPoin === void 0 ? Ni : _ref48$$splitTextPoin,
        _ref48$rootMode = _ref48.rootMode,
        o = _ref48$rootMode === void 0 ? "shadowRoot" : _ref48$rootMode,
        _ref48$$shouldSplit = _ref48.$shouldSplit,
        r = _ref48$$shouldSplit === void 0 ? Oi : _ref48$$shouldSplit,
        _ref48$removeEmptyDes = _ref48.removeEmptyDestination,
        i = _ref48$removeEmptyDes === void 0 ? !1 : _ref48$removeEmptyDes;
      if (xd(t)) return n(t);
      var s = t.getParentCaret(o);
      if (s) {
        var _n79 = s.origin;
        if (Cd(t)) {
          var _t129 = pi(s);
          if (i && _n79.isEmpty()) return (_n79.remove(), _t129);
          if (!_n79.canBeEmpty() || !r(_n79, "first")) return _t129;
        }
        var _o43 = jf((l = t).getNodeAtCaret(), l.direction);
        (_o43.length > 0 || (!i && _n79.canBeEmpty() && r(_n79, "last"))) &&
          s.insert(e(_n79).splice(0, 0, _o43));
      }
      var l;
      return s;
    }
    function wi(t, n, o) {
      var r = Fd(n, "next");
      (xd(r) &&
        (0 === r.offset
          ? (r = bd(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = bd(r.origin, "next"))),
        r.origin.is(t) &&
          (Sd(r) || e(342, t.getKey(), t.getType()), (r = pi(r))),
        (t.is(r.getNodeAtCaret()) || t.is(r.getFlipped().getNodeAtCaret())) &&
          t.remove(!0));
      for (var _t130 = r; _t130; _t130 = Ei(_t130, o)) r = _t130;
      return (
        xd(r) && e(283),
        r.insert(t.isInline() ? Ii().append(t) : t),
        Fd(bd(t.getLatest(), "next"), n.direction)
      );
    }
    function Mi(t, e) {
      var n = vi(zu(e) ? gi(e) : e, "next"),
        o = qf(n.anchor.origin),
        r = qf(t.getLatest());
      if (null === o ? null !== r : !o.is(r)) return !1;
      var i = Si(wd(t, "next")),
        s = Fd(Si(wd(t, "previous")), "next");
      return zd(n.anchor, i) <= 0 && zd(n.focus, s) >= 0;
    }
    var _Ai = (function (_Ir2) {
      function Ai() {
        return _Ir2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Ai, _Ir2);
      var _proto11 = Ai.prototype;
      _proto11.$config = function $config() {
        return this.config("paragraph", {
          children: "inline",
          extends: _Ir4,
          generated: Ko,
          importDOM: {
            p: function p() {
              return { conversion: Di, priority: 0 };
            },
          },
        });
      };
      _proto11.createDOM = function createDOM(t) {
        var _e$classList;
        var e = _l().createElement("p"),
          n = Ls(t.theme, "paragraph");
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
        var _Ir2$prototype$export = _Ir2.prototype.exportDOM.call(this, t),
          e = _Ir2$prototype$export.element;
        if (kl(e)) {
          this.isEmpty() && e.append(_l().createElement("br"));
          var _t131 = this.getFormatType();
          _t131 && (e.style.textAlign = _t131);
        }
        return { element: e };
      };
      _proto11.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = _Ir2.prototype.exportJSON.call(this, t);
        if (void 0 === e.textFormat || void 0 === e.textStyle) {
          var _n80 = this.getChildren().find(ci),
            _o44 = _n80 ? _n80.getFormat() : this.getTextFormat(),
            _r34 = _n80 ? _n80.getStyle() : this.getTextStyle();
          ((t && 0 === _o44) || (e.textFormat = _o44),
            (t && "" === _r34) || (e.textStyle = _r34));
        }
        return e;
      };
      _proto11.extractWithChild = function extractWithChild(t, e, n) {
        if (!zu(e)) return !1;
        if (
          "" === this.getFormatType() &&
          0 === this.getIndent() &&
          "" === this.getStyle()
        )
          return !1;
        if (Mi(this, e)) {
          var _t132 = this.getTextContent();
          return "" !== _t132 && e.getTextContent() === _t132;
        }
        return !1;
      };
      _proto11.insertNewAfter = function insertNewAfter(t, e) {
        var n = Ii();
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
            return ci(t) && !/\S/.test(t.getTextContent());
          })
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Ai;
    })(_Ir4);
    function Di(t) {
      var e = Ii();
      if ((Hl(e, t), jl(t, e), "" === e.getFormatType())) {
        var _n81 = t.getAttribute("align");
        _n81 && _n81 && _n81 in D && e.setFormat(_n81);
      }
      return (Ul(e, t), { node: e });
    }
    function Ii() {
      return rl(new _Ai());
    }
    function Pi(t) {
      return t instanceof _Ai;
    }
    var Fi = Qe()({
      detail: nn(Ge(2), { getter: { field: "__detail" }, setter: null }),
      mode: nn(qe(["normal"]), {
        getter: { field: "__mode", getterTable: { 0: "normal" } },
        setter: null,
      }),
      text: nn(Je("\t"), {
        getter: { field: "__text", method: "getTextContent" },
        setter: null,
      }),
    });
    var _Ri = (function (_Qr) {
      function Ri(t) {
        var _this5;
        if (t === void 0) {
          t = void 0;
        }
        ((_this5 = _Qr.call(this, "\t", t) || this), (_this5.__detail = 2));
        return _this5;
      }
      babelHelpers.inheritsLoose(Ri, _Qr);
      var _proto12 = Ri.prototype;
      _proto12.$config = function $config() {
        return this.config("tab", { extends: _Qr2, generated: zo, json: Fi });
      };
      _proto12.createDOM = function createDOM(t) {
        var _e$classList2;
        var e = _Qr.prototype.createDOM.call(this, t),
          n = Ls(t.theme, "tab");
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
        return _Qr.prototype.setTextContent.call(this, "\t");
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
      return Ri;
    })(_Qr2);
    function Li() {
      return rl(new _Ri());
    }
    function Ki(t) {
      return t instanceof _Ri;
    }
    var Bi = null;
    function zi(t) {
      Bi = t;
    }
    var $i = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var Wi = 1;
    function ji(t, n) {
      var o = Ui(t, n);
      return (void 0 === o && e(30, n), o);
    }
    function Ui(t, e) {
      return t._nodes.get(e);
    }
    var Hi =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Vi(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return es(e) || fl(e) ? Nl(e) : null;
            })();
      if (!kl(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = ps(n),
        r = n.nodeName;
      return (
        ko(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == Xi(n)))
      );
    }
    var Ji = Vi;
    function Yi(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        qi(e) === t &&
        t.read("latest", function () {
          return !Vi(e);
        })
      );
    }
    function Gi(t) {
      return t instanceof _ea;
    }
    function qi(t) {
      var e = t;
      for (; null != e; ) {
        var _t133 = Xi(e);
        if (Gi(_t133)) return _t133;
        e = Us(e);
      }
      return null;
    }
    function Xi(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Qi(t) {
      return Ki(t) || t.isToken();
    }
    function Zi(t) {
      return Qi(t) || t.isSegmented();
    }
    function ts(t) {
      return Ol(t) && 3 === t.nodeType;
    }
    function es(t) {
      return Ol(t) && 9 === t.nodeType;
    }
    function ns(t) {
      var e = t;
      for (; null != e; ) {
        if (ts(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function os(t, e, n) {
      var o = M[e];
      if (null !== n && (t & o) === (n & o)) return t;
      var r = t ^ o;
      return (
        "subscript" === e
          ? (r &= ~M.superscript)
          : "superscript" === e
            ? (r &= ~M.subscript)
            : "lowercase" === e
              ? ((r &= ~M.uppercase), (r &= ~M.capitalize))
              : "uppercase" === e
                ? ((r &= ~M.lowercase), (r &= ~M.capitalize))
                : "capitalize" === e &&
                  ((r &= ~M.lowercase), (r &= ~M.uppercase)),
        r
      );
    }
    function rs(t, e) {
      var n = (function () {
        var t = Bi;
        return ((Bi = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (ga(), pa());
      var o = ya(),
        r = _a(),
        i = "" + Wi++;
      (r._nodeMap.set(i, t),
        Pr(t) ? o._dirtyElements.set(i, !0) : o._dirtyLeaves.add(i),
        o._cloneNotNeeded.set(i, t),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = i));
    }
    function is(t) {
      Bf(null === t.getParent() ? t : t.getWritable());
    }
    var ss = is;
    function ls(t) {
      (pa(), To(t) && e(323, t.__key, t.__type));
      var n = null !== t.__parent ? t.__parent : Vf(t) ? t.__slotHost : null,
        o = _a(),
        r = ya(),
        i = o._nodeMap,
        s = r._dirtyElements;
      null !== n &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t134 = e.get(o);
            if (void 0 === _t134) break;
            (n.set(o, !1),
              (o =
                null !== _t134.__parent
                  ? _t134.__parent
                  : Vf(_t134)
                    ? _t134.__slotHost
                    : null));
          }
        })(n, i, s);
      var l = t.__key;
      (0 === r._dirtyType && (r._dirtyType = 1),
        Pr(t) ? s.set(l, !0) : r._dirtyLeaves.add(l));
    }
    function cs(t) {
      ga();
      var e = ya(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t135 = fs(n);
          null !== _t135 && _t135.getWritable();
        }
        if (null !== t) {
          var _e110 = fs(t);
          null !== _e110 && _e110.getWritable();
        }
      }
    }
    function as() {
      return ha() ? null : ya()._compositionKey;
    }
    function us(t) {
      return (
        !g && (_ || x) && "" === t.__text && t.__key === ya()._compositionKey
      );
    }
    function fs(t, e) {
      var n = (e || _a())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function ds(t, e) {
      var n = gs(t, ya());
      return void 0 !== n ? fs(n, e) : null;
    }
    function hs(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function gs(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function ps(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t136 = ds(n, e);
        if (null !== _t136) return _t136;
        n = Us(n);
      }
      return null;
    }
    function _s(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function ys(t) {
      return t.read(function () {
        return xs().getTextContent();
      });
    }
    function ms(t, e) {
      var n = $l(t.getEditorState()),
        o = [];
      for (var _t137 of e) {
        var _e111 = n.get(_t137);
        _e111 && o.push(_e111);
      }
      0 !== o.length &&
        t.update(
          function () {
            for (var _t138 of o)
              for (var _e112 of _t138.keys()) {
                var _t139 = fs(_e112);
                _t139 && _t139.markDirty();
              }
          },
          null === t._pendingEditorState ? { tag: Pc } : void 0,
        );
    }
    function xs() {
      return _a()._nodeMap.get("root");
    }
    function Ss(t, e) {
      if (
        !(
          nl(t) &&
          t.isAttached() &&
          (zr(t) ? 0 === t.getChildrenSize() : t.isEmpty()) &&
          (zr(t) || (null !== e && Il(e)))
        )
      )
        return null;
      var n = Ii();
      return (t.append(n), n);
    }
    function Cs(t) {
      ga();
      var e = _a();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        zu(t) && ya()._slotsUsed && cf(t)),
        (e._selection = t));
    }
    function vs(t) {
      (ga(), xe(ya(), t));
    }
    function Ts(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t140 = gs(n, e);
          if (void 0 !== _t140) return _t140;
          n = Us(n);
        }
        return null;
      })(t, ya());
      return null === e ? null : fs(e);
    }
    function Ns(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function bs(t) {
      var e = [];
      for (var _n82 = t; null !== _n82; _n82 = _n82._parentEditor) e.push(_n82);
      return e;
    }
    var ks = 0;
    function Os() {
      return r
        ? Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substring(0, 5)
        : "s" + (++ks).toString(36);
    }
    function Es(t) {
      return ts(t) ? t.nodeValue : null;
    }
    function ws(t, e, n) {
      var o = al(Qs(e));
      if (null === o) return;
      var r = xl(o, e._rootElement),
        i = r.anchorNode;
      var s = r.anchorOffset,
        l = r.focusOffset;
      if (null !== i) {
        var _e113 = Es(i);
        var _o45 = ps(i);
        if (null !== _e113 && ci(_o45)) {
          if ((_e113 === v || _e113 === N) && n) {
            var _t141 = n.length;
            ((_e113 = n), (s = _t141), (l = _t141));
          }
          null !== _e113 && Ms(_o45, _e113, s, l, t);
        }
      }
    }
    function Ms(t, e, n, o, r) {
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
          var _t142 = N;
          var _e114;
          for (; -1 !== (_e114 = _c7.indexOf(_t142)); )
            ((_c7 = _c7.slice(0, _e114) + _c7.slice(_e114 + _t142.length)),
              null !== n &&
                n > _e114 &&
                (n = Math.max(_e114, n - _t142.length)),
              null !== o &&
                o > _e114 &&
                (o = Math.max(_e114, o - _t142.length)));
        }
        var _a4 = i.getTextContent();
        if (r || _c7 !== _a4) {
          var _e115 = xf();
          if ("" === _c7) {
            if (_s13 && !r && _l8) return void As(i, "", _e115);
            if ((cs(null), _ || g || x)) i.remove();
            else {
              var _t143 = ya();
              (As(i, "", _e115),
                setTimeout(function () {
                  _t143.update(function () {
                    i.isAttached() && "" === i.getTextContent() && i.remove();
                  });
                }, 20));
            }
            return;
          }
          var _a5 = i.getParent(),
            _u5 = Sf(),
            _f5 = i.getTextContentSize(),
            _d5 = as(),
            _h3 = i.getKey();
          if (
            (i.isToken() && !_s13) ||
            (null !== _d5 && _h3 === _d5 && !_s13) ||
            (zu(_u5) &&
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
          if (!zu(_e115) || null === n || null === o)
            return void As(i, _c7, _e115);
          if ((_e115.setTextNodeRange(i, n, i, o), i.isSegmented())) {
            var _t144 = li(i.getTextContent());
            (i.replace(_t144), (i = _t144));
          }
          As(i, _c7, _e115);
        }
      }
    }
    function As(t, e, n) {
      if ((t.setTextContent(e), zu(n))) {
        var _e116 = t.getKey();
        var _o46 = !1;
        for (var _r35 of ["anchor", "focus"]) {
          var _i25 = n[_r35];
          "text" === _i25.type &&
            _i25.key === _e116 &&
            ((_i25.offset = Od(t, _i25.offset, "clamp")), (_o46 = !0));
        }
        _o46 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Ds(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function Is(t, e) {
      return (
        Ds(t, e, "altKey") &&
        Ds(t, e, "ctrlKey") &&
        Ds(t, e, "shiftKey") &&
        Ds(t, e, "metaKey")
      );
    }
    function Ps(t) {
      var e = t;
      for (; null !== e; ) {
        var _t145 = e.getParent();
        if (null === _t145) return null;
        if (zr(_t145)) return e;
        e = _t145;
      }
      return null;
    }
    function Fs(t, e) {
      var n = t.anchor,
        o = t.focus,
        r = n.key,
        i = n.offset,
        s = n.type,
        l = o.key,
        c = o.offset,
        a = o.type;
      if ((Mo(t), !zr(e))) return t;
      var u = Ps(n.getNode());
      return (
        Pr(u) &&
          u.isShadowRoot() &&
          u.is(Ps(o.getNode())) &&
          (n.set(r, i, s), o.set(l, c, a)),
        t
      );
    }
    function Rs(t, e) {
      "" === t.getAttribute(e) && t.removeAttribute(e);
    }
    function Ls(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t146 = Jd(r);
        return ((n[e] = _t146), _t146);
      }
      return r;
    }
    function Ks(t, n, o, r, i) {
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
    function Bs(t, e, n) {
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
    function zs(t, e) {
      var n = t.offset;
      if ("element" === t.type) return Bs(t.getNode(), e, n);
      {
        var _o47 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o47.getTextContentSize())) {
          var _t147 = e ? _o47.getPreviousSibling() : _o47.getNextSibling();
          return null === _t147
            ? Bs(
                _o47.getParentOrThrow(),
                e,
                _o47.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t147;
        }
      }
      return null;
    }
    function $s(t) {
      var e = Qs(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Ws(t, e) {
      return wa(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
    }
    function js(t, n) {
      var o = t._keyToDOMMap.get(n);
      return (void 0 === o && e(75, n), o);
    }
    function Us(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return fl(n) ? n.host : null;
    }
    function Hs(t) {
      return es(t) ? t : kl(t) ? t.ownerDocument : null;
    }
    function Vs(t, e) {
      var n = parseFloat(t);
      return isFinite(n) ? (t.endsWith("%") ? (n * e) / 100 : n) : 0;
    }
    function Js(t, e, n, o) {
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
        d = f + Vs(s.scrollPaddingLeft, r) * a,
        h = f + (r - Vs(s.scrollPaddingRight, r)) * a;
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
    function Ys(t) {
      (ga(), ya()._updateTags.add(t));
    }
    function Gs(t) {
      (ga(), ya()._deferred.push(t));
    }
    function qs(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Xs(t) {
      var e = Hs(t);
      return e ? e.defaultView : null;
    }
    function Qs(t) {
      var n = t._window;
      return (null === n && e(78), n);
    }
    function Zs(t) {
      return (Pr(t) && t.isInline()) || (Lr(t) && t.isInline());
    }
    function tl(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== Jf(e) && Pr(e)) return e;
        var _t148 = e.getParentOrThrow();
        if (nl(_t148)) return _t148;
        e = _t148;
      }
      return e;
    }
    function el(t) {
      return Pr(t) && t.isShadowRoot();
    }
    function nl(t) {
      return zr(t) || el(t);
    }
    function ol(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t, $i);
      return (
        rs(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function rl(t) {
      var n = ya(),
        o = t.getType(),
        r = Ui(n, o);
      void 0 === r && e(200, t.constructor.name, o);
      var i = r.replace,
        s = r.replaceWithKlass;
      if (null !== i) {
        var _n83 = i(t),
          _r36 = _n83.constructor;
        return (
          null !== s
            ? _n83 instanceof s ||
              e(
                201,
                s.name,
                s.getType(),
                _r36.name,
                _r36.getType(),
                t.constructor.name,
                o,
              )
            : (_n83 instanceof t.constructor && _r36 !== t.constructor) ||
              e(202, _r36.name, _r36.getType(), t.constructor.name, o),
          _n83.__key === t.__key &&
            e(203, t.constructor.name, o, _r36.name, _r36.getType()),
          _n83
        );
      }
      return t;
    }
    function il(t, n) {
      !zr(t.getParent()) || Pr(n) || Lr(n) || e(99);
    }
    function sl(t) {
      var n = fs(t);
      return (null === n && e(63, t), n);
    }
    function ll(t) {
      if (!t || t.isInline()) return !1;
      if (Lr(t)) return !0;
      if (Pr(t)) {
        if (t.isShadowRoot()) {
          var _e117 = t.getParent();
          return !(Pr(_e117) && _e117.isShadowRoot());
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
      return r ? (t || window).getSelection() : null;
    }
    function ul(t) {
      var e = Xs(t);
      return e ? e.getSelection() : null;
    }
    function fl(t) {
      return El(t) && "host" in t;
    }
    var dl = [];
    function hl(t) {
      var e = t.getRootNode();
      if (e === t || !fl(e)) return dl;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t149 = o.getRootNode();
        if (_t149 === o || !fl(_t149)) break;
        (n.push(_t149), (o = _t149.host));
      }
      return n;
    }
    function* gl(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t150 = (es(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o48 = void 0;
        for (; (_o48 = _t150.nextNode()); )
          _o48.shadowRoot && e.push(_o48.shadowRoot);
      }
    }
    function pl(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function _l() {
      var t = Sa();
      return pl(null !== t ? t._rootElement : null);
    }
    function yl(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = hl(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e118 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e118) return _e118;
      } catch (t) {}
      try {
        var _e119 = o.apply(t, n)[0];
        if (void 0 !== _e119) return _e119;
      } catch (t) {}
      return null;
    }
    function ml(t, e) {
      var n = yl(t, e);
      if (null !== n) {
        var _t151 = Sl(n);
        if (null !== _t151) return _t151;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function xl(t, e) {
      var n = yl(t, e);
      return null === n ? t : Cl(n, vl(t));
    }
    function Sl(t) {
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
    function Cl(t, e) {
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
    function vl(t) {
      return t.direction;
    }
    function Tl(t) {
      var e = t.getRootNode();
      return es(e) || fl(e) ? e.activeElement : null;
    }
    function Nl(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t152 = e.shadowRoot.activeElement;
        if (null === _t152) break;
        e = _t152;
      }
      return e;
    }
    function bl(t) {
      var e = t.target;
      if (
        null !== e &&
        kl(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e120 = t.composedPath();
        if (_e120.length > 0) return _e120[0];
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
    function El(t) {
      return Ol(t) && 11 === t.nodeType;
    }
    var wl =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Ml(t) {
      return (
        !(!kl(t) || !t.style.display.startsWith("inline")) ||
        wl.test(t.nodeName)
      );
    }
    var Al =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Dl(t) {
      return (
        (!kl(t) || !t.style.display.startsWith("inline")) && Al.test(t.nodeName)
      );
    }
    function Il(t) {
      if (Lr(t) && !t.isInline()) return !0;
      if (!Pr(t) || nl(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || Hc(e) || ci(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Pl() {
      return ya();
    }
    function Fl(t) {
      if (t === void 0) {
        t = Pl();
      }
      return t._config.dom || Qc;
    }
    function Rl(t, n, o) {
      if (o === void 0) {
        o = Pl();
      }
      var r = Fl(o).$getDOMSlot(t, n, o);
      return (Pr(t) && (Ll(r) || e(344, t.getKey(), t.getType())), r);
    }
    function Ll(t) {
      return t instanceof _ae;
    }
    function Kl(t, e, n) {
      if (n === void 0) {
        n = Pl();
      }
      return ns(Rl(t, e, n).element);
    }
    var Bl = new WeakMap(),
      zl = new Map();
    function $l(t) {
      if (!t._readOnly && t.isEmpty()) return zl;
      t._readOnly || e(192);
      var n = Bl.get(t);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref50 of t._nodeMap) {
              var _n84 = _ref50[0];
              var _o49 = _ref50[1];
              {
                var _t153 = _o49.__type;
                var _r37 = e.get(_t153);
                (_r37 || ((_r37 = new Map()), e.set(_t153, _r37)),
                  _r37.set(_n84, _o49));
              }
            }
            return e;
          })(t)),
          Bl.set(t, n)),
        n
      );
    }
    function Wl(t) {
      var e = t.constructor.clone(t, $i);
      return (e.afterCloneFrom(t), e);
    }
    function jl(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t154 = parseInt(n, 10);
        if (Number.isFinite(_t154) && _t154 >= 0)
          return void e.setIndent(_t154);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function Ul(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function Hl(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function Vl(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function Jl(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Yl(t, e) {
      if (e === void 0) {
        e = Pl();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function Gl(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (kl(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== gs(n, e)) return !1;
        n = Us(n);
      }
      return !1;
    }
    function ql(t, e) {
      return Ue(t, e) && t[e] !== _bo5[e];
    }
    var Xl = new WeakMap();
    function Ql(t) {
      var n = Xl.get(t);
      return void 0 !== n
        ? n
        : (function (t) {
            var n =
                null != t.prototype && B in t.prototype
                  ? t.prototype[B]()
                  : void 0,
              o = (function (t) {
                if (!(t === _bo5 || t.prototype instanceof _bo5)) {
                  var _n85 = "<unknown>",
                    _o50 = "<unknown>";
                  try {
                    _n85 = t.getType();
                  } catch (t) {}
                  try {
                    _ea.version && (_o50 = JSON.parse(_ea.version));
                  } catch (t) {}
                  e(290, t.name, _n85, _o50);
                }
                return t === _Rr || t === _Ir4 || t === _bo5;
              })(t),
              r = !o && ql(t, "getType") ? t.getType : void 0,
              i = r && !(tc in r) ? r.call(t) : void 0;
            var s,
              l = i;
            if (n)
              if (i) s = n[i];
              else {
                for (var _ref52 of Object.entries(n)) {
                  var _t155 = _ref52[0];
                  var _e121 = _ref52[1];
                  ((l = _t155), (s = _e121));
                }
                if (!s)
                  for (var _t156 of Object.getOwnPropertySymbols(n)) {
                    var _e122 = n[_t156];
                    if (_e122) {
                      s = _e122;
                      break;
                    }
                  }
              }
            var c = {
              compiled: void 0,
              composed: void 0,
              config: {
                declaresOwnConfig: Ue(t.prototype, B),
                klass: t,
                ownNodeConfig: s,
                ownNodeType: l,
              },
              ownFieldsValidated: !1,
            };
            Xl.set(t, c);
            try {
              var _n86 = (function (t) {
                  var n = t.prototype,
                    o = new Map(),
                    _lc = lc(t),
                    r = _lc.fieldsBaseFirst;
                  for (var _ref54 of r) {
                    var _i27 = _ref54[0];
                    var _s14 = _ref54[1];
                    {
                      var _r39 = fc(t, _i27, _s14);
                      if (null === _r39) continue;
                      if (Ne(_r39)) {
                        var _n87 = _r39.field;
                        if (
                          ("__proto__" === _n87 && e(430, t.name, _i27),
                          void 0 !== _r39.setterTable)
                        ) {
                          var _n88 = _r39.setterTable,
                            _o51 = _s14.meta;
                          for (var _r40 of "enum" === _o51.kind
                            ? _o51.values
                            : [_s14.defaultValue])
                            Ue(_n88, String(_r40)) ||
                              e(431, t.name, _i27, JSON.stringify(_r40));
                        }
                        o.set(_i27, {
                          field: _n87,
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
                  return 0 === o.size ? ec : [].concat(Array.from(o.values()));
                })(t),
                _r38 = (function (t) {
                  var n = t.prototype,
                    o = new Map();
                  for (var _ref56 of lc(t).fieldsDerivedFirst) {
                    var _r41 = _ref56[0];
                    var _i28 = _ref56[1];
                    {
                      var _s15 = uc(t, _r41, _i28);
                      if (null === _s15) continue;
                      if (Ne(_s15)) {
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
                  return 0 === o.size ? ac : [].concat(Array.from(o.values()));
                })(t),
                _i26 = lc(t),
                _a6 = (function (t, e, n) {
                  var o,
                    r = t;
                  for (var _ref58 of bc(t)) {
                    var _e123 = _ref58.klass;
                    var _n89 = _ref58.ownNodeConfig;
                    _n89 &&
                      void 0 !== _n89.generated &&
                      (void 0 === o
                        ? ((o = _n89.generated), (r = _e123))
                        : _n89.generated === o && (r = _e123));
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
                          for (var _n90 = 0; _n90 < t.getters.length; _n90++) {
                            var _o53 = t.getters[_n90],
                              _r42 = e.getters[_n90];
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
                          for (var _n91 = 0; _n91 < t.setters.length; _n91++) {
                            var _o54 = t.setters[_n91],
                              _r43 = e.setters[_n91];
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
                        })(n, Zl(Ql(r)))
                      ? o
                      : null;
                })(t, 0, { getters: _r38, setters: _n86 });
              ((c.compiled = {
                flatStates: _i26.flatStates,
                generated: null === _a6 ? null : _a6(_i26.fields),
                getters: _r38,
                isCompactDefault: gc(_r38),
                setters: _n86,
              }),
                (function (t, e, n, o) {
                  if (!e && n) {
                    if (!ql(t, "getType")) {
                      var _e124 = t,
                        _o55 = function _o55() {
                          return this !== _e124 ? _bo5.getType.call(this) : n;
                        };
                      ((_o55[tc] = !0), (t.getType = _o55));
                    }
                    if (
                      (ql(t, "clone") ||
                        (t.clone = function (e, n) {
                          zi(e);
                          var o = new t();
                          return (n !== $i && o.afterCloneFrom(e), o);
                        }),
                      ql(t, "importJSON") ||
                        (t.importJSON =
                          (o && o.$importJSON) ||
                          (function (t) {
                            return function (e) {
                              var n = kc(t);
                              return n.updateFromJSON ===
                                _bo5.prototype.updateFromJSON
                                ? (function (t, e) {
                                    return _c(
                                      t.__state || void 0 !== e[L]
                                        ? pn(t, e)
                                        : t,
                                      e,
                                    );
                                  })(n, e)
                                : n.updateFromJSON(e);
                            };
                          })(t)),
                      !ql(t, "importDOM") && o)
                    ) {
                      var _e125 = o.importDOM;
                      _e125 &&
                        (t.importDOM = function () {
                          return _e125;
                        });
                    }
                    var _e126 = t.prototype;
                    Ue(_e126, "getTextContent") &&
                      !Ue(_e126, "getTextContentSize") &&
                      (t.prototype.getTextContentSize =
                        _bo5.prototype.getTextContentSize);
                  }
                })(t, o, l, s),
                (function (t) {
                  var _loop2 = function _loop2() {
                      var e = _ref60.klass;
                      var n = _ref60.ownNodeConfig;
                      {
                        var _t157 = e.prototype;
                        if (Ue(_t157, "afterCloneFrom")) return 0;
                        var _o56 = Nc(e);
                        if (0 === _o56.length) return 0;
                        var _r44 = Object.getPrototypeOf(_t157),
                          _i29 =
                            n && void 0 !== n.generated
                              ? Zl(Ql(e)).generated
                              : null,
                          _s16 =
                            (null !== _i29 && _i29.afterCloneFrom) ||
                            function (t, e) {
                              var n = t,
                                r = e;
                              for (
                                var _t158 = 0;
                                _t158 < _o56.length;
                                _t158++
                              ) {
                                var _e127 = _o56[_t158];
                                n[_e127] = r[_e127];
                              }
                            };
                        ((_t157.afterCloneFrom = function (t) {
                          (_r44.afterCloneFrom.call(this, t), _s16(this, t));
                        }),
                          (_t157.afterCloneFrom[vc] = !0));
                      }
                    },
                    _ret;
                  for (var _ref60 of bc(t)) {
                    _ret = _loop2();
                    if (_ret === 0) continue;
                  }
                })(t),
                (function (t, e) {
                  e &&
                    void 0 !== e.inline &&
                    Ue(t.prototype, B) &&
                    !Object.prototype.hasOwnProperty.call(
                      t.prototype,
                      "isInline",
                    ) &&
                    Object.defineProperty(t.prototype, "isInline", {
                      configurable: !0,
                      value: e.inline ? mc : xc,
                      writable: !0,
                    });
                })(t, s));
            } catch (e) {
              throw (Xl["delete"](t), e);
            }
            return c;
          })(t);
    }
    function Zl(t) {
      var n = t.compiled;
      return (void 0 === n && e(422, t.config.klass.name), n);
    }
    var tc = Symbol("lexical.synthesizedGetType"),
      ec = [];
    function nc(t, e, n, o) {
      var r = void 0 === n.method ? o : n.method,
        i = lc(t).declaredBy.get(e);
      if (void 0 === i) return n;
      var s = t.prototype,
        l = i.prototype;
      return oc(s, l, r) && oc(s, l, o) ? n : r;
    }
    function oc(t, e, n) {
      return t[n] === e[n];
    }
    function rc(t) {
      return "set" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    function ic(t) {
      return "get" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    var sc = {
      declaredBy: new Map(),
      fields: new Map(),
      fieldsBaseFirst: [],
      fieldsDerivedFirst: [],
      flatStates: [],
    };
    function lc(t) {
      var e = Ql(t);
      return (
        void 0 === e.composed &&
          (e.composed = (function (t) {
            var e = [],
              n = [],
              o = [];
            for (var _ref62 of bc(t)) {
              var _r45 = _ref62.klass;
              var _i30 = _ref62.ownNodeConfig;
              {
                var _t159 = _i30 && _i30.json;
                (n.push(_r45),
                  e.push(
                    _t159 && "node" === _t159.meta.kind
                      ? Object.entries(_t159.meta.fields)
                      : [],
                  ));
                var _s17 = [];
                if (_i30 && _i30.stateConfigs)
                  for (var _t160 of _i30.stateConfigs)
                    "stateConfig" in _t160 &&
                      _t160.flat &&
                      _s17.push(_t160.stateConfig);
                o.push(_s17);
              }
            }
            var r = new Map();
            for (var _t161 = 0; _t161 < e.length; _t161++)
              for (var _ref64 of e[_t161]) {
                var _n92 = _ref64[0];
                var _o57 = _ref64[1];
                r.has(_n92) || r.set(_n92, _o57);
              }
            var i = new Map(),
              s = new Map(),
              l = new Map();
            for (var _t162 = e.length - 1; _t162 >= 0; _t162--) {
              for (var _ref66 of e[_t162]) {
                var _o58 = _ref66[0];
                var _l10 = _ref66[1];
                {
                  var _e128 = r.get(_o58);
                  (void 0 === _e128 || i.has(_o58) || i.set(_o58, _e128),
                    void 0 === _e128 ||
                      _l10 !== _e128 ||
                      s.has(_o58) ||
                      s.set(_o58, n[_t162]));
                }
              }
              for (var _e129 of o[_t162])
                l.has(_e129.key) || l.set(_e129.key, _e129);
            }
            return 0 === r.size && 0 === l.size
              ? sc
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
    function cc(t) {
      var _lc2 = lc(t),
        e = _lc2.fieldsDerivedFirst,
        n = _lc2.flatStates,
        o = {};
      for (var _t163 of n) _t163.schema && (o[_t163.key] = _t163.schema);
      for (var _ref68 of e) {
        var _t164 = _ref68[0];
        var _n93 = _ref68[1];
        o[_t164] = _n93;
      }
      return o;
    }
    var ac = [];
    function uc(t, e, n) {
      var o = n.getter;
      if (null === o) return null;
      var r = void 0 === o ? ic(e) : o;
      return Ne(r) ? nc(t, e, r, ic(e)) : r;
    }
    function fc(t, e, n) {
      var o = n.setter;
      if (null === o) return null;
      var r = void 0 === o ? rc(e) : o;
      return Ne(r) ? nc(t, e, r, rc(e)) : r;
    }
    function dc(t) {
      return t;
    }
    function hc(t, e) {
      var n = t.defaultValue,
        o = t.isEqual;
      return void 0 === e || e === n || (void 0 !== o && o(e, n));
    }
    function gc(t) {
      var e;
      return function (n, o) {
        void 0 === e &&
          (e = new Map(
            t.map(function (t) {
              return [t.key, t];
            }),
          ));
        var r = e.get(n);
        return void 0 !== r && hc(r, o);
      };
    }
    function pc(t) {
      var e = t.setterTable,
        n = t.schema,
        o = n.defaultValue;
      return void 0 === e ? o : e[String(o)];
    }
    function _c(t, e) {
      var n = Ql(t.constructor),
        _Zl = Zl(n),
        o = _Zl.flatStates,
        r = _Zl.generated,
        i = _Zl.setters,
        s = (function (t, e, n) {
          var o = t;
          var _loop3 = function _loop3() {
            var r = n[_t165],
              i = e[r.key];
            if (void 0 !== i) {
              var _t166 = r.parse(i);
              o = an(o, r, function () {
                return _t166;
              });
            }
          };
          for (var _t165 = 0; _t165 < n.length; _t165++) {
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
                ? (dc(t)[_r46.field] =
                    void 0 === _r46.setterTable
                      ? _i31
                      : Ue(_r46.setterTable, _i31)
                        ? _r46.setterTable[_i31]
                        : pc(_r46))
                : _r46.setter.call(t, _i31);
            }
            return t;
          })(s, e, i);
    }
    function yc(t) {
      return Ql(t).config;
    }
    function mc() {
      return !0;
    }
    function xc() {
      return !1;
    }
    function Sc(t) {
      return t === mc || t === xc;
    }
    function Cc(t) {
      var e = [];
      for (var _n94 of [t.getter, t.setter])
        Ne(_n94) &&
          "__proto__" !== _n94.field &&
          !e.includes(_n94.field) &&
          e.push(_n94.field);
      return e;
    }
    var vc = "__lexicalSynthesizedAfterCloneFrom";
    function Tc(t) {
      var _lc3 = lc(t),
        e = _lc3.declaredBy,
        n = _lc3.fieldsBaseFirst,
        o = [];
      for (var _ref70 of n) {
        var _r47 = _ref70[0];
        var _i32 = _ref70[1];
        if (e.get(_r47) === t)
          for (var _t167 of Cc(_i32)) o.includes(_t167) || o.push(_t167);
      }
      return o;
    }
    function Nc(t) {
      var e = Tc(t);
      if (0 === e.length) return e;
      var n = new Set();
      for (var _ref72 of bc(t)) {
        var _e130 = _ref72.klass;
        if (_e130 !== t) for (var _t168 of Tc(_e130)) n.add(_t168);
      }
      return 0 === n.size
        ? e
        : e.filter(function (t) {
            return !n.has(t);
          });
    }
    function* bc(t) {
      for (var _e131 = t; _e131 && (_e131 === _bo5 || ko(_e131.prototype)); ) {
        var _t169 = yc(_e131),
          _n95 = _t169.declaresOwnConfig;
        (yield _n95
          ? _t169
          : babelHelpers["extends"]({}, _t169, { ownNodeConfig: void 0 }),
          (_e131 =
            (_n95 && _t169.ownNodeConfig && _t169.ownNodeConfig["extends"]) ||
            wc(_e131)));
      }
    }
    function kc(t) {
      var e = Pl();
      ga();
      var n = e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t)),
        o = new n.klass();
      return null === n.replace ? o : rl(o);
    }
    var Oc = function Oc(t, e) {
      var n = t;
      for (; null != n && !zr(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Ec(t, n) {
      var o = [];
      var r = t.__first;
      for (; null !== r; ) {
        var _t170 = null === n ? fs(r) : n.get(r);
        (null == _t170 && e(174), o.push(r), (r = _t170.__next));
      }
      return o;
    }
    function wc(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    function Mc(t) {
      return new _Ic(qt(t._nodeMap), null, t._slotsUsed);
    }
    function Ac() {
      return new _Ic(new Map([["root", new _Br()]]), null, !1);
    }
    function Dc(t) {
      var n = t.constructor,
        o = ee(t);
      if (Pr(t)) {
        var _e132 = o.children,
          _n96 = t.getChildren();
        for (var _t171 = 0; _t171 < _n96.length; _t171++)
          _e132.push(Dc(_n96[_t171]));
      }
      var r = Zf(t);
      if (r.length > 0) {
        var _i33 = {};
        for (var _o60 of r) {
          var _r48 = td(t, _o60);
          (null === _r48 && e(366, n.name, _o60), (_i33[_o60] = Dc(_r48)));
        }
        o.$slots = _i33;
      }
      return o;
    }
    var _Ic = (function () {
      function Ic(t, e, n) {
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
      var _proto13 = Ic.prototype;
      _proto13.isEmpty = function isEmpty() {
        return this._nodeMap.size <= 1 && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return ba((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new Ic(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), (e._parsed = this._parsed), e);
      };
      _proto13.toJSON = function toJSON(t) {
        var _this15 = this;
        return Zt("boolean" == typeof t && t, function () {
          return ba(null, _this15, function () {
            return { root: Dc(xs()) };
          });
        });
      };
      return Ic;
    })();
    var Pc = "history-merge",
      Fc = "collaboration",
      Rc = "skip-scroll-into-view",
      Lc = "skip-dom-selection",
      Kc = "skip-selection-focus",
      Bc = "composition-start",
      zc = "composition-end";
    var _$c = (function (_Ir3) {
      function $c() {
        return _Ir3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose($c, _Ir3);
      var _proto14 = $c.prototype;
      _proto14.$config = function $config() {
        return this.config("artificial", { extends: _Ir4 });
      };
      _proto14.createDOM = function createDOM(t) {
        return _l().createElement("div");
      };
      return $c;
    })(_Ir4);
    var _Wc = (function (_bo4) {
      function Wc() {
        return _bo4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Wc, _bo4);
      var _proto15 = Wc.prototype;
      _proto15.$config = function $config() {
        return this.config("linebreak", {
          extends: _bo5,
          generated: Bo,
          importDOM: {
            br: function br(t) {
              return Vc(t) || Jc(t) ? null : { conversion: jc, priority: 0 };
            },
          },
        });
      };
      _proto15.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto15.createDOM = function createDOM() {
        return _l().createElement("br");
      };
      _proto15.updateDOM = function updateDOM() {
        return !1;
      };
      _proto15.isInline = function isInline() {
        return !0;
      };
      return Wc;
    })(_bo5);
    function jc(t) {
      return { node: Uc() };
    }
    function Uc() {
      return rl(new _Wc());
    }
    function Hc(t) {
      return t instanceof _Wc;
    }
    function Vc(t) {
      var e = t.parentElement;
      if (null !== e && Dl(e)) {
        var _n97 = e.firstChild;
        if (_n97 === t || (_n97.nextSibling === t && Yc(_n97))) {
          var _n98 = e.lastChild;
          if (_n98 === t || (_n98.previousSibling === t && Yc(_n98))) return !0;
        }
      }
      return !1;
    }
    function Jc(t) {
      var e = t.parentElement;
      if (null !== e && Dl(e)) {
        var _n99 = e.firstChild;
        if (_n99 === t || (_n99.nextSibling === t && Yc(_n99))) return !1;
        var _o61 = e.lastChild;
        if (_o61 === t || (_o61.previousSibling === t && Yc(_o61))) return !0;
      }
      return !1;
    }
    function Yc(t) {
      return ts(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function Gc(t) {
      console.warn(t);
    }
    function qc(t, e, n, o, r) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = Ac()),
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
        null !== e && Xa(t, e),
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
          ((n.textContent = ""), i.set("root", n), hs(n, t, "root")));
    }
    function Xc(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref74 of bc(t)) {
        var _o62 = _ref74.klass;
        var _r49 = _ref74.ownNodeConfig;
        {
          var _t172 = _o62.transform;
          if (!n.has(_t172)) {
            n.add(_t172);
            var _r50 = _o62.transform();
            _r50 && e.add(_r50);
          }
          if (_r49) {
            var _t173 = _r49.$transform;
            _t173 && e.add(_t173);
          }
        }
      }
      return e;
    }
    var Qc = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = Ui(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return Pr(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Pr(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function Zc(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function ta(t, e, n) {
      return (t.set(e, n), Zc.bind(null, t, e));
    }
    var _ea = (function () {
      function ea(t, e, n, o, r, i, s, l, c) {
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
          (this._key = Os()),
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
      var _proto16 = ea.prototype;
      _proto16.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto16.registerUpdateListener = function registerUpdateListener(t) {
        return ta(this._listeners.update, t);
      };
      _proto16.registerEditableListener = function registerEditableListener(t) {
        return ta(this._listeners.editable, t);
      };
      _proto16.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return ta(this._listeners.decorator, t);
      };
      _proto16.registerTextContentListener =
        function registerTextContentListener(t) {
          return ta(this._listeners.textcontent, t);
        };
      _proto16.registerRootListener = function registerRootListener(t) {
        var _this16 = this;
        var e = this._listeners.root;
        return Pa(ta(e, t, t(this._rootElement, null) || void 0), function () {
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
          o = $l(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t174 of o.keys()) r.set(_t174, "created");
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
          var _t175 = this.registerNodeTransformToKlass(r, e);
          o.push(_t175);
        }
        return (
          ms(
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
        return Ws.apply(void 0, [this, t].concat(Array.from(e)));
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
          var _o63 = Ls(this._config.theme, "root"),
            _r51 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            qc(this, n, t, _r51, { preserveUpdateQueue: !0 }),
            null !== n &&
              (this._config.disableEvents ||
                (function (t) {
                  var n = La.get(t);
                  if (void 0 === n) return void Mu();
                  var o = Ka.get(n);
                  if (void 0 === o) return void Mu();
                  La["delete"](t);
                  var r = Xi(t);
                  Gi(r)
                    ? ((function (t) {
                        if (null !== t._parentEditor) {
                          var _e133 = bs(t),
                            _n100 = _e133[_e133.length - 1]._key;
                          ku.get(_n100) === t && ku["delete"](_n100);
                        } else ku["delete"](t._key);
                      })(r),
                      o.editors["delete"](r),
                      (o.hasShadowEditor = void 0),
                      (t.__lexicalEditor = null))
                    : r && e(198);
                  var i = Nu(t);
                  for (var _t176 = 0; _t176 < i.length; _t176++) i[_t176]();
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
            var _e134 = Xs(t),
              _n101 = t.style;
            ((_n101.userSelect = "text"),
              (_n101.whiteSpace = "pre-wrap"),
              (_n101.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e134),
              (this._dirtyType = 2),
              Se(this),
              this._updateTags.add(Pc),
              ka(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  La.set(t, n);
                  var o = Ka.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    Ka.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = Nu(t);
                  r.push(Ba.register(n));
                  var i = babelHelpers["extends"](
                    {
                      blur: Rt,
                      click: Va,
                      compositionend: pu,
                      compositionstart: uu,
                      copy: Et,
                      cut: wt,
                      dragend: Ot,
                      dragover: kt,
                      dragstart: bt,
                      drop: Tt,
                      focus: Ft,
                      input: cu,
                      keydown: _u,
                      paste: Z,
                      pointerdown: Qa,
                    },
                    d && { beforeinput: su },
                    g && { keyup: yu, mousedown: Ga },
                  );
                  var _loop4 = function _loop4() {
                    var n = _ref76[0];
                    var o = _ref76[1];
                    {
                      var _i34 = function _i34(r) {
                        wu(r) ||
                          (Eu(r),
                          "blur" === n &&
                            (Xa(e, t),
                            (e._inputState.isShiftKeyDown = !1),
                            (e._inputState.isInsertLineBreak = !1)),
                          (e.isEditable() || "click" === n || "copy" === n) &&
                            ("function" == typeof o ? o(r, e) : Ws(e, o, r)));
                      };
                      r.push(Fa(t, n, _i34));
                    }
                  };
                  for (var _ref76 of Object.entries(i)) {
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
                        Ia(e, function () {
                          var s = al(Qs(e));
                          if ("mousedown" !== i.type) {
                            var _o64 =
                              c &&
                              s &&
                              zu(xf()) &&
                              yf(Sf(), s, e, new Event("selectionchange"));
                            return (
                              _o64 && Cs(_o64),
                              tu(e, n, c && s ? xl(s, t).focusNode : null)
                            );
                          }
                          var a = pf(s, e);
                          if (
                            i.defaultPrevented ||
                            (!i.shiftKey && a && !a.isCollapsed())
                          )
                            l();
                          else if (s && r.isSelectionChangeFromMouseDown) {
                            (bu(e, s, new Event("selectionchange"), o),
                              tu(e, i, xl(s, t).focusNode));
                            var _n102 = xf();
                            zu(_n102) &&
                              _n102.isCollapsed() &&
                              !_n102.is(Sf()) &&
                              Ha(e, _n102);
                          }
                        }));
                    };
                  (r.push(
                    Ra(
                      n,
                      { pointercancel: c, pointermove: c, pointerup: c },
                      !0,
                    ),
                    Fa(Qs(e), "blur", l),
                    e.registerEditableListener(l),
                    Ra(t, {
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
                          Gl(bl(t), e)
                            ? null
                            : t;
                      },
                    }),
                    Fa(
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
                          return Pa(
                            Fa(
                              t,
                              "touchstart",
                              function (t) {
                                var e =
                                  1 === t.touches.length ? t.touches[0] : null;
                                n = e ? { x: e.clientX, y: e.clientY } : null;
                              },
                              o,
                            ),
                            Fa(
                              t,
                              "touchend",
                              function (t) {
                                var o = t.changedTouches[0];
                                (null !== n &&
                                  o &&
                                  0 === t.touches.length &&
                                  Math.abs(o.clientX - n.x) <= Ja &&
                                  Math.abs(o.clientY - n.y) <= Ja &&
                                  e(t),
                                  (n = null));
                              },
                              o,
                            ),
                          );
                        })(t, function (n) {
                          return (function (t, e, n) {
                            void 0 !== e._inputState.savedInputMode &&
                              (qa(t, e, n) ||
                                (Nl(n.ownerDocument) === n && n.blur(),
                                Xa(e, n)));
                          })(n, e, t);
                        }),
                      ));
                })(t, this),
              null != _o63 &&
                (_t$classList = t.classList).add.apply(
                  _t$classList,
                  Array.from(_o63),
                ));
          } else ((this._window = null), this._updateTags.add(Pc), ka(this));
          Oa("root", this, !1, t, n);
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
          ((r = Mc(t)),
          (r._selection = t._selection ? t._selection.clone() : null)),
          xe(this));
        var i = this._pendingEditorState,
          s = void 0 !== e ? e.tag : null;
        (null === i ||
          i.isEmpty() ||
          (null != s && this._updateTags.add(s), ka(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || t._slotsUsed),
          Ia(
            this,
            function () {
              if (
                (s && _this17._updateTags.add(s),
                o && (n(38), xs().append(Ii())),
                t._parsed)
              )
                for (var _ref78 of r._nodeMap.entries()) {
                  var _t177 = _ref78[0];
                  var _e135 = _ref78[1];
                  Pr(_e135)
                    ? _this17._dirtyElements.set(_t177, !0)
                    : _this17._dirtyLeaves.add(_t177);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto16.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = Ac(),
            r = oa,
            i = ia,
            s = ra,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Map()),
            (e._dirtyType = 0),
            (oa = o),
            (ia = !1),
            (ra = e),
            zi(null));
          try {
            var _r52 = e._nodes;
            (Na(t.root, _r52), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (oa = r),
              (ia = i),
              (ra = s));
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
        var _ref79 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref79[0],
          n = _ref79[1];
        return (
          "force-commit" === e && (ua.has(this) || ka(this)),
          ("pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
          ).read(n, { editor: this })
        );
      };
      _proto16.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Da(t, e, n);
        })(this, t, e);
      };
      _proto16.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          Ia(this, function () {
            var o = xf(),
              r = xs();
            (null !== o
              ? o.dirty || Cs(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              Ys("focus"),
              Gs(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto16.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = al(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto16.isEditable = function isEditable() {
        return this._editable;
      };
      _proto16.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          Oa("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return ma();
            }));
      };
      _proto16.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON(te()) };
      };
      return ea;
    })();
    _ea.version = (function () {
      return Jt;
    })();
    function na(t, e, n, o, r, i) {
      if (Pr(t)) {
        var _s18 = t.__first;
        for (; null !== _s18; ) {
          var _t178 = o.get(_s18);
          if (void 0 === _t178) break;
          var _l11 = Pr(_t178);
          (_t178.__parent !== e ||
            (_l11 && i.has(_s18)) ||
            ((_l11 || (Hf(_t178) && null !== _t178.__slots)) &&
              na(_t178, _s18, n, o, r, i),
            n.has(_s18) || i["delete"](_s18),
            r.push(_s18)),
            (_s18 = _t178.__next));
        }
      }
      for (var _s19 of Hf(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t179 = o.get(_s19);
        void 0 !== _t179 &&
          Vf(_t179) &&
          _t179.__slotHost === e &&
          ((Pr(_t179) || (Hf(_t179) && null !== _t179.__slots)) &&
            na(_t179, _s19, n, o, r, i),
          n.has(_s19) || i["delete"](_s19),
          r.push(_s19));
      }
    }
    var oa = null,
      ra = null,
      ia = !1,
      sa = !1,
      la = !1;
    var ca = new Set(),
      aa = new Set(),
      ua = new Set();
    var fa = 0;
    var da = { characterData: !0, childList: !0, subtree: !0 };
    function ha() {
      return ia || (null !== oa && oa._readOnly);
    }
    function ga() {
      ia && e(13);
    }
    function pa() {
      fa > 99 && e(14);
    }
    function _a() {
      return (null === oa && e(195, xa()), oa);
    }
    function ya() {
      return (null === ra && e(337, xa()), ra);
    }
    function ma() {
      ya()._dirtyType = 2;
    }
    function xa() {
      var t = 0;
      var e = new Set(),
        n = _ea.version;
      if ("undefined" != typeof window)
        for (var _o65 of gl(document)) {
          var _r53 = Xi(_o65);
          if (Gi(_r53)) t++;
          else if (_r53) {
            var _t180 = String(_r53.constructor.version || "<0.17.1");
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
    function Sa() {
      return ra;
    }
    function Ca(t, e, n) {
      var o = e.__type,
        r = ji(t, o);
      var i = n.get(o);
      void 0 === i && ((i = Array.from(r.transforms)), n.set(o, i));
      var s = i.length;
      for (var _t181 = 0; _t181 < s && (i[_t181](e), e.isAttached()); _t181++);
    }
    function va(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Ta(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t182 of o) n.add(_t182);
    }
    function Na(t, n) {
      var o = t.type,
        r = n.get(o);
      void 0 === r && e(17, o);
      var i = r.klass;
      t.type !== i.getType() && e(18, i.name);
      var s = i.importJSON(t),
        l = t.children;
      if (Pr(s) && Array.isArray(l))
        for (var _t183 = 0; _t183 < l.length; _t183++) {
          var _e136 = Na(l[_t183], n);
          s.append(_e136);
        }
      var c = t.$slots;
      if (c) {
        Hf(s) || e(379, i.name);
        for (var _t184 in c) ad(s, _t184, Na(c[_t184], n));
      }
      return s;
    }
    function ba(t, e, n) {
      var o = oa,
        r = ia,
        i = ra;
      ((oa = e), (ia = !0), (ra = t));
      try {
        return n();
      } finally {
        ((oa = o), (ia = r), (ra = i));
      }
    }
    function ka(e, n) {
      null !== e._pendingEditorState && ra !== e && xe(e, !1, !0);
      var o = la;
      la = !0;
      try {
        var _o66 = (function (t) {
          if (aa.has(t)) return !1;
          aa.add(t);
          try {
            for (var _e137 = 0; null !== t._pendingEditorState; _e137++) {
              var _n103 = t._pendingEditorState._selection,
                _o67 = t._rootElement;
              if (!Ea(t, _n103)) return !1;
              var _r54 =
                (null === _n103 || zu(_n103)) &&
                (t._headless || null === _o67 || !_o67.isConnected);
              if (_r54 || 100 === _e137)
                return (
                  (t._lastNotifiedSelection =
                    null === _n103 ? null : _n103.clone()),
                  !_r54
                );
              Da(
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
            aa["delete"](t);
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
              Ma(e, e._deferred)
            );
          var s = e._editorState,
            l = s._selection,
            c = o._selection,
            a = 0 !== e._dirtyType,
            u = oa,
            f = ia,
            d = ra,
            h = e._updating,
            g = e._observer;
          var p = null;
          if (
            ((e._pendingEditorState = null),
            (e._editorState = o),
            !i && a && null !== g)
          ) {
            ((ra = e), (oa = o), (ia = !1), (e._updating = !0));
            try {
              var _t185 = e._dirtyType,
                _n104 = e._dirtyElements,
                _r55 = e._dirtyLeaves;
              (g.disconnect(), (p = xo(s, o, e, _t185, _n104, _r55)));
            } catch (t) {
              if ((t instanceof Error && e._onError(t), sa)) throw t;
              return (
                qc(e, null, r, o),
                Se(e),
                (e._dirtyType = 2),
                (sa = !0),
                ka(e, s),
                void (sa = !1)
              );
            } finally {
              (g.observe(r, da),
                (e._updating = h),
                (oa = u),
                (ia = f),
                (ra = d));
            }
          }
          o._readOnly || (o._readOnly = !0);
          var _ = e._dirtyLeaves,
            y = e._dirtyElements,
            m = e._normalizedNodes,
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
              for (i in o) r.has(i) || (o === n && (o = _s(t)), delete o[i]);
            })(e, o));
          var C = i ? null : al(Qs(e));
          if (
            e._editable &&
            null !== C &&
            (a || null === c || c.dirty || !c.is(l)) &&
            null !== r &&
            !x.has(Lc)
          ) {
            ((ra = e), (oa = o));
            try {
              if ((null !== g && g.disconnect(), a || null === c || c.dirty)) {
                var _t186 = e._blockCursorElement;
                (null !== _t186 && cl(_t186, e, r), Of(l, c, e, C, x, r));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  zu(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(Tl(e))
                ) {
                  var _r56 = n.anchor,
                    _i35 = _r56.getNode(),
                    _s20 = _r56.offset;
                  var _l12 = !1,
                    _c9 = null;
                  if (_s20 === _i35.getChildrenSize())
                    ll(_i35.getChildAtIndex(_s20 - 1)) && (_l12 = !0);
                  else {
                    var _e138 = _i35.getChildAtIndex(_s20);
                    null !== _e138 &&
                      ll(_e138) &&
                      ((_l12 = !0), (_c9 = t.getElementByKey(_e138.__key)));
                  }
                  if (_l12) {
                    var _n105 = Rl(
                      _i35,
                      t.getElementByKey(_i35.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = _l().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList2;
                              if ("string" == typeof o) {
                                var _t187 = Jd(o);
                                o = e.blockCursor = _t187;
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
                      void (null === _c9
                        ? _n105.appendChild(o)
                        : _n105.insertBefore(o, _c9))
                    );
                  }
                }
                null !== o && cl(o, t, e);
              })(e, r, c);
            } finally {
              (null !== g && g.observe(r, da), (ra = d), (oa = u));
            }
          }
          var v = ua.has(e);
          ua.add(e);
          try {
            null !== p &&
              (function (t, e, n, o, r) {
                var i = Array.from(t._listeners.mutation),
                  s = i.length;
                for (var _t188 = 0; _t188 < s; _t188++) {
                  var _i$_t = i[_t188],
                    _s21 = _i$_t[0],
                    _l13 = _i$_t[1];
                  for (var _t189 of _l13) {
                    var _i36 = e.get(_t189);
                    void 0 !== _i36 &&
                      _s21(_i36, {
                        dirtyLeaves: o,
                        prevEditorState: r,
                        updateTags: n,
                      });
                  }
                }
              })(e, p, x, _, s);
            var _t190 = e._pendingDecorators;
            (null !== _t190 &&
              ((e._decorators = _t190),
              (e._pendingDecorators = null),
              Oa("decorator", e, !0, _t190)),
              (function (t, e, n) {
                var o = ys(e),
                  r = ys(n);
                o !== r && Oa("textcontent", t, !0, r);
              })(e, n || s, o),
              Oa("update", e, !0, {
                dirtyElements: y,
                dirtyLeaves: _,
                editorState: o,
                mutatedNodes: p,
                normalizedNodes: m,
                prevEditorState: n || s,
                tags: x,
              }));
          } finally {
            v || ua["delete"](e);
          }
          (h || Ma(e, S),
            (function (e) {
              var n = e._updates;
              if (0 === n.length) return void (e._cascadeCount = 0);
              if (
                ((function (t) {
                  ca.has(t) ||
                    (ca.add(t),
                    setTimeout(function () {
                      (ca["delete"](t), (t._cascadeCount = 0));
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
                var _t191 = o[0],
                  _n106 = o[1];
                Da(e, _t191, _n106);
              }
            })(e));
        })(e, n),
          _o66 && e._onWarn(t(436)));
      } finally {
        la = o;
      }
    }
    function Oa(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n107 = e._listeners[t],
          _r57 = Array.from(_n107);
        for (
          var _len8 = arguments.length,
            o = new Array(_len8 > 3 ? _len8 - 3 : 0),
            _key8 = 3;
          _key8 < _len8;
          _key8++
        ) {
          o[_key8 - 3] = arguments[_key8];
        }
        for (var _ref81 of _r57) {
          var _t192 = _ref81[0];
          var _e139 = _ref81[1];
          {
            _e139 && _e139();
            var _r58 = _t192.apply(void 0, Array.from(o)),
              _i37 = "function" == typeof _r58 ? _r58 : void 0;
            _n107.has(_t192) ? _n107.set(_t192, _i37) : _i37 && _i37();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function Ea(t, e) {
      var n = t._lastNotifiedSelection;
      return null === e ? null !== n : !e.is(n);
    }
    function wa(t, e, n, o) {
      var r = bs(t);
      var i;
      if (!la)
        for (var _t193 = 0; _t193 < r.length; _t193++)
          r[_t193]._updating || (r[_t193]._cascadeCount = 0);
      if (e === W) {
        if (ra !== t || ia) {
          var _r59 = !1;
          return (
            Ia(t, function () {
              _r59 = wa(t, e, n, o);
            }),
            _r59
          );
        }
        var _r60 = _a()._selection;
        t._lastNotifiedSelection = null === _r60 ? null : _r60.clone();
      }
      for (var _t194 = 4; _t194 >= 0; _t194--) {
        var _loop5 = function _loop5() {
            var l = r[_s22];
            if (_s22 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e140 = c[_t194];
              if (_e140.size > 0) {
                var _t195 = !1;
                if (
                  (Ia(l, function () {
                    for (var _r61 of _e140)
                      if (_r61(n, o)) return void (_t195 = !0);
                  }),
                  _t195)
                )
                  return { v: _t195 };
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
            wa(i, e, n, o);
          }),
        !1
      );
    }
    function Ma(t, e) {
      if ((t._deferred === e && (t._deferred = []), 0 !== e.length)) {
        var _n108 = t._updating;
        t._updating = !0;
        try {
          for (var _t196 = 0; _t196 < e.length; _t196++) e[_t196]();
        } finally {
          t._updating = _n108;
        }
      }
    }
    function Aa(t, n) {
      var o = t._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n109 = o.shift();
        if (_n109) {
          var _o68 = _n109[0],
            _i38 = _n109[1],
            _s23 = t._pendingEditorState;
          var _l14 = void 0;
          (void 0 !== _i38 &&
            ((_l14 = _i38.onUpdate),
            _i38.skipTransforms && (r = !0),
            _i38.discrete && (null === _s23 && e(191), (_s23._flushSync = !0)),
            _l14 && t._deferred.push(_l14),
            Ta(t, _i38.tag)),
            null == _s23 ? Da(t, _o68, _i38) : _o68());
        }
      }
      return r;
    }
    function Da(t, n, o, r) {
      if (r === void 0) {
        r = !1;
      }
      var i = t._updateTags;
      var s,
        l = !1,
        c = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        Ta(t, o.tag),
        (l = o.skipTransforms || !1),
        (c = o.discrete || !1)),
        s && t._deferred.push(s));
      var a = t._editorState;
      var u = t._pendingEditorState,
        f = !1;
      ((null === u || u._readOnly) &&
        ((u = t._pendingEditorState = Mc(u || a)), (f = !0)),
        (u._flushSync = c));
      var d = oa,
        h = ia,
        g = ra,
        p = t._updating,
        _ = t._lastNotifiedSelection;
      ((oa = u), (ia = !1), (t._updating = !0), (ra = t));
      var y = t._headless || null === t.getRootElement();
      zi(null);
      try {
        f &&
          (y
            ? null !== a._selection && (u._selection = a._selection.clone())
            : (u._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = al(Qs(t));
                return zu(n) || null == n ? yf(n, o, t, e) : n.clone();
              })(t, (o && o.event) || null)));
        var _r62 = t._compositionKey;
        (n(),
          (l = Aa(t, l)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (zu(o)) {
              var _t197 = o.anchor,
                _e141 = o.focus;
              var _r63;
              if (
                ("text" === _t197.type &&
                  ((_r63 = _t197.getNode()), _r63.selectionTransform(n, o)),
                "text" === _e141.type)
              ) {
                var _t198 = _e141.getNode();
                _r63 !== _t198 && _t198.selectionTransform(n, o);
              }
            }
          })(u, t),
          0 !== t._dirtyType &&
            (l
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t199 of n) {
                    var _e142 = o.get(_t199);
                    ci(_e142) &&
                      _e142.isAttached() &&
                      _e142.isSimpleText() &&
                      !_e142.isUnmergeable() &&
                      wo(_e142);
                  }
                })(u, t)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    i = as(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t200 of l) {
                        var _o69 = r.get(_t200);
                        (ci(_o69) &&
                          _o69.isAttached() &&
                          _o69.isSimpleText() &&
                          !_o69.isUnmergeable() &&
                          wo(_o69),
                          void 0 !== _o69 && va(_o69, i) && Ca(e, _o69, s),
                          n.add(_t200));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        fa++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t201 of a) {
                      var _n110 = _t201[0],
                        _l15 = _t201[1];
                      if ((o.set(_n110, _l15), !_l15)) continue;
                      var _c0 = r.get(_n110);
                      void 0 !== _c0 && va(_c0, i) && Ca(e, _c0, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      fa++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(u, t),
            Aa(t),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref83 of o) {
                var _t202 = _ref83[0];
                {
                  var _e143 = i.get(_t202);
                  void 0 !== _e143 &&
                    (_e143.isAttached() ||
                      (Pr(_e143) && na(_e143, _t202, r, i, s, o),
                      r.has(_t202) || o["delete"](_t202),
                      s.push(_t202)));
                }
              }
              for (var _t203 of n) {
                var _e144 = i.get(_t203);
                void 0 === _e144 ||
                  _e144.isAttached() ||
                  (Hf(_e144) &&
                    null !== _e144.__slots &&
                    na(_e144, _t203, r, i, s, n),
                  r.has(_t203) || n["delete"](_t203),
                  s.push(_t203));
              }
              var l = ya(),
                c = l._cloneNotNeeded;
              for (var _t204 of s) (i["delete"](_t204), c["delete"](_t204));
              var a = l._compositionKey;
              null === a || i.has(a) || (l._compositionKey = null);
            })(a, u, t._dirtyLeaves, t._dirtyElements)),
          _r62 !== t._compositionKey && (u._flushSync = !0));
        var _i39 = u._selection;
        if (zu(_i39)) {
          t._slotsUsed && cf(_i39);
          var _n111 = u._nodeMap,
            _o70 = _i39.anchor.key,
            _r64 = _i39.focus.key;
          (void 0 !== _n111.get(_o70) && void 0 !== _n111.get(_r64)) || e(19);
        } else Wu(_i39) && 0 === _i39._nodes.size && (u._selection = null);
      } catch (e) {
        (e instanceof Error && t._onError(e), (t._pendingEditorState = a));
        var _n112 = a._selection;
        return (
          (t._lastNotifiedSelection = null === _n112 ? null : _n112.clone()),
          (t._dirtyType = 2),
          t._cloneNotNeeded.clear(),
          (t._dirtyLeaves = new Set()),
          t._dirtyElements.clear(),
          void ka(t)
        );
      } finally {
        ((oa = d), (ia = h), (ra = g), (t._updating = p), (fa = 0));
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
          ? ((u._flushSync = !1), ka(t))
          : f &&
            Hi(function () {
              ka(t);
            })
        : ((u._flushSync = !1),
          f &&
            (i.clear(),
            (t._deferred = []),
            (t._pendingEditorState = null),
            (t._lastNotifiedSelection = _)));
    }
    function Ia(t, e, n) {
      ra === t && void 0 === n ? (ha() ? Da(t, e, n) : e()) : Da(t, e, n);
    }
    function Pa() {
      for (
        var _len9 = arguments.length, t = new Array(_len9), _key9 = 0;
        _key9 < _len9;
        _key9++
      ) {
        t[_key9] = arguments[_key9];
      }
      return function () {
        for (var _e145 = t.length - 1; _e145 >= 0; _e145--) t[_e145]();
        t.length = 0;
      };
    }
    function Fa(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    function Ra(t, e, n) {
      return Pa.apply(
        void 0,
        Array.from(
          Object.entries(e).map(function (_ref84) {
            var e = _ref84[0],
              o = _ref84[1];
            return Fa(t, e, o, n);
          }),
        ),
      );
    }
    var La = new WeakMap(),
      Ka = new WeakMap(),
      Ba = Ht(function (t) {
        return (
          t.addEventListener("selectionchange", Ou),
          function () {
            return t.removeEventListener("selectionchange", Ou);
          }
        );
      });
    function za(t, e, n, o, r, i) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = ya();
      var u;
      if (void 0 !== i) u = i;
      else {
        var _t205 = al(Qs(a));
        u = null !== _t205 ? xl(_t205, a._rootElement) : null;
      }
      var f = null !== u ? u.anchorNode : null,
        h = s.key,
        g = a.getElementByKey(h),
        p = n.length;
      return (
        h !== l.key ||
        !ci(c) ||
        (((!r &&
          (!d || a._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (c.isDirty() && p < 2) ||
          Ns(n)) &&
          s.offset !== l.offset &&
          !c.isComposing()) ||
        Zi(c) ||
        (c.isDirty() && p > 1) ||
        ((r || !d) && null !== g && !c.isComposing() && f !== Kl(c, g, a)) ||
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
            r = Qi(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (ci(e) || (Pr(e) && e.isInline())) &&
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
    function $a(t, e) {
      return (
        ts(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Wa(t, e, n) {
      var _xl = xl(t, e._rootElement),
        o = _xl.anchorNode,
        r = _xl.anchorOffset,
        i = _xl.focusNode,
        s = _xl.focusOffset,
        l = e._inputState;
      if (l.isSelectionChangeFromDOMUpdate) {
        l.isSelectionChangeFromDOMUpdate = !1;
        var _t206 = l.selectionChangeFromDOMUpdatePoints;
        if (
          ((l.selectionChangeFromDOMUpdatePoints = null),
          $a(o, r) &&
            $a(i, s) &&
            !l.postDeleteSelectionToRestore &&
            (null === _t206 ||
              (_t206.anchorNode === o &&
                _t206.anchorOffset === r &&
                _t206.focusNode === i &&
                _t206.focusOffset === s)))
        )
          return;
      }
      Ia(e, function () {
        if (!n) return void Cs(null);
        if (!Yi(e, o, i)) return;
        var c = l.mouseDrag;
        !c || ("mousedown" === c.type && c.defaultPrevented) || tu(e, c, i);
        var a = Za.has(c);
        var u = xf();
        if (l.postDeleteSelectionToRestore && zu(u) && u.isCollapsed()) {
          var _t207 = u.anchor,
            _e146 = l.postDeleteSelectionToRestore.anchor;
          ((_t207.key === _e146.key && _t207.offset === _e146.offset + 1) ||
            (1 === _t207.offset &&
              _e146.getNode().is(_t207.getNode().getPreviousSibling()))) &&
            ((u = l.postDeleteSelectionToRestore.clone()), Cs(u));
        }
        if (((l.postDeleteSelectionToRestore = null), zu(u))) {
          var _n113 = u.anchor;
          if (u.isCollapsed())
            ("Range" === t.type && o === i && (u.dirty = !0), Ha(e, u));
          else {
            var _t208 = _n113.key,
              _e147 = u.focus,
              _o71 = _e147.key,
              _i40 = u.getNodes(),
              _l16 = _i40.length,
              _c1 = u.isBackward(),
              _ref85 = a ? [_n113.offset, _e147.offset] : [r, s],
              _f6 = _ref85[0],
              _d6 = _ref85[1],
              _h4 = _c1 ? _d6 : _f6,
              _g3 = _c1 ? _f6 : _d6,
              _p3 = _c1 ? _o71 : _t208,
              _2 = _c1 ? _t208 : _o71;
            var _y = C,
              _m = !1;
            for (var _t209 = 0; _t209 < _l16; _t209++) {
              var _e148 = _i40[_t209],
                _n114 = _e148.getTextContentSize();
              if (
                ci(_e148) &&
                0 !== _n114 &&
                !(
                  (0 === _t209 && _e148.__key === _p3 && _h4 === _n114) ||
                  (_t209 === _l16 - 1 && _e148.__key === _2 && 0 === _g3)
                ) &&
                ((_m = !0), (_y &= _e148.getFormat()), 0 === _y)
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
          (n || Ea(t, e)) && t.dispatchCommand(W);
        })(e, u, null !== u && ((u.dirty && !a) || !zu(u)));
      });
    }
    function ja(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function Ua(t, e) {
      ja(t, e.getFormat(), e.getStyle());
    }
    function Ha(t, n) {
      var o = n.anchor,
        r = o.getNode(),
        i = Qs(t).event,
        s = i ? i.timeStamp : performance.now(),
        _t$_inputState$collap = t._inputState.collapsedSelectionFormat,
        l = _t$_inputState$collap.format,
        c = _t$_inputState$collap.style,
        a = _t$_inputState$collap.offset,
        u = _t$_inputState$collap.key,
        f = _t$_inputState$collap.timeStamp;
      s < f + 200 && o.offset === a && o.key === u
        ? ja(n, l, c)
        : "text" === o.type
          ? (ci(r) || e(141), Ua(n, r))
          : (t.isComposing() || "" !== xs().getTextContent()) &&
            (Pr(r) || e(259), r.isEmpty() ? mf(n, "") : ja(n, n.format, ""));
    }
    function Va(t, e) {
      Ia(e, function () {
        var n = xf(),
          o = al(Qs(e)),
          r = Sf();
        if (o)
          if (zu(n)) {
            var _t210 = n.anchor,
              _e149 = _t210.getNode();
            "element" === _t210.type &&
              0 === _t210.offset &&
              n.isCollapsed() &&
              !zr(_e149) &&
              1 === xs().getChildrenSize() &&
              _e149.getTopLevelElementOrThrow().isEmpty() &&
              null !== r &&
              n.is(r) &&
              (o.removeAllRanges(), (n.dirty = !0));
          } else if (
            "touch" === t.pointerType ||
            "pen" === t.pointerType ||
            (g && "mouse" !== e._inputState.lastPointerType)
          ) {
            var _n115 = xl(o, e._rootElement).anchorNode;
            (kl(_n115) || ts(_n115)) && Cs(yf(r, o, e, t));
          }
        if (u && null !== o && 0 === o.rangeCount) {
          var _n116 = e._rootElement;
          if (null !== _n116 && t.target === _n116) {
            var _i41 = t.clientY;
            var _s24 = _n116.childNodes.length;
            for (var _t211 = 0; _t211 < _n116.childNodes.length; _t211++) {
              var _e150 = _n116.childNodes[_t211];
              if (kl(_e150)) {
                var _n117 = _e150.getBoundingClientRect();
                if (_i41 <= (_n117.top + _n117.bottom) / 2) {
                  _s24 = _t211;
                  break;
                }
              }
            }
            o.setBaseAndExtent(_n116, _s24, _n116, _s24);
            var _l17 = yf(r, o, e, t);
            null !== _l17 ? Cs(_l17) : o.removeAllRanges();
          }
        }
        Ws(e, U, t);
      });
    }
    var Ja = 10,
      Ya =
        'input:not(:disabled),textarea:not(:disabled),select:not(:disabled),button:not(:disabled),a[href],area[href],label,summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable]:not([contenteditable="false"])';
    function Ga(t, e) {
      var n = e.getRootElement();
      null !== n &&
        (qa(t, e, n)
          ? (t.preventDefault(),
            Nl(n.ownerDocument) !== n &&
              (void 0 === e._inputState.savedInputMode &&
                (e._inputState.savedInputMode = n.getAttribute("inputmode")),
              n.setAttribute("inputmode", "none"),
              n.focus({ preventScroll: !0 })))
          : Xa(e, n));
    }
    function qa(t, e, n) {
      if ("mouse" === e._inputState.lastPointerType) return !1;
      var o = bl(t);
      if (!Ol(o)) return !1;
      var r = !1;
      for (var _t212 = o; null !== _t212; _t212 = Us(_t212)) {
        if (_t212 === n) return r;
        if (1 === _t212.nodeType) {
          var _e151 = _t212;
          if (_e151.matches(Ya)) return !1;
          "true" === _e151.getAttribute("data-lexical-decorator") && (r = !0);
        }
      }
      return !1;
    }
    function Xa(t, e) {
      var n = t._inputState.savedInputMode;
      void 0 !== n &&
        ((t._inputState.savedInputMode = void 0),
        null === n
          ? e.removeAttribute("inputmode")
          : e.setAttribute("inputmode", n));
    }
    function Qa(t, e) {
      var n = bl(t),
        o = t.pointerType;
      Ol(n) &&
        "touch" !== o &&
        "pen" !== o &&
        0 === t.button &&
        Ia(e, function () {
          Gl(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
        });
    }
    var Za = new WeakSet();
    function tu(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = xf(),
        r = o && o.clone();
      !(function (t, e, n) {
        var o = Sf(),
          r = "mousedown" === e.type,
          i = r && !e.shiftKey,
          s = n && ps(n);
        Lr(s) &&
          (r
            ? i && s.isInline() && s.selectPrevious()
            : zu(o) && Cs(o.clone()));
        var l = xf(),
          c = l || (i ? hf() : zu(o) ? o.clone() : null),
          a = t.getRootElement(),
          u = a && a.getRootNode();
        if (!zu(c) || (i && !c.isCollapsed()) || (!es(u) && !fl(u))) return;
        var f = c.anchor,
          d = c.focus;
        if (!r && zu(o)) {
          var _o$anchor = o.anchor,
            _t213 = _o$anchor.key,
            _e152 = _o$anchor.offset,
            _n118 = _o$anchor.type;
          f.set(_t213, _e152, _n118, !0);
        }
        var h = e.clientX,
          g = e.clientY,
          p = u.elementFromPoint && u.elementFromPoint(h, g),
          _ = p && ps(p),
          y = function y(t, e) {
            return Pr(t)
              ? "next" === e
                ? t.getLastDescendant()
                : t.getFirstDescendant()
              : t;
          },
          m = [null],
          x = Pr(_) && !_.isInline() && (zr(_) ? Oc(d.getNode(), ff) : _);
        for (var _t214 of x ? wd(x, "next") : [])
          m.push(bd(_t214.origin, "previous"), _t214);
        var S = Qs(t),
          C = S.document.createRange();
        var v = null;
        for (var _e153 of m) {
          var _n119 = _e153 ? y(_e153.origin, _e153.direction) : _;
          if (!Lr(_n119) || !_n119.isInline() || _n119 === v) continue;
          var _o72 = t.getElementByKey(_n119.getKey());
          if (!_o72) continue;
          C.selectNodeContents(_o72);
          var _r65 = C.getBoundingClientRect(),
            _s25 = _o72.getBoundingClientRect(),
            _ref86 = _r65.height > _s25.height ? _r65 : _s25,
            _a8 = _ref86.bottom,
            _u6 = _ref86.left,
            _p4 = _ref86.right,
            _m2 = _ref86.top;
          if (_e153 && (g < _m2 || g > _a8)) {
            v = _n119;
            continue;
          }
          var _x = "rtl" === S.getComputedStyle(Us(_o72) || _o72).direction,
            _T = 2 * h > _u6 + _p4 !== _x,
            _N = _T ? "next" : "previous",
            _b = _e153 && _e153.getNodeAtCaret(),
            _k = _b && t.getElementByKey(_b.getKey()),
            _O = _k ? _k.getClientRects() : [],
            _E = _O[_T ? 0 : _O.length - 1];
          if (
            !_e153 ||
            (_e153.direction === _N &&
              "none" === S.getComputedStyle(_o72).cssFloat &&
              (!_b ||
                Hc(_b) ||
                (_E &&
                  (_T === _x
                    ? 2 * _E.right > _u6 + _p4
                    : 2 * _E.left < _u6 + _p4))))
          ) {
            if (!_n119.is(y(zs(d, _T), _N))) {
              var _t215 = bd(_n119, _N);
              (fi(d, _t215), i && fi(f, _t215));
            }
            return void (l || Cs(c));
          }
        }
        if (Lr(s) && !r) {
          var _e154 = S.document,
            _n120 =
              _e154.caretPositionFromPoint &&
              _e154.caretPositionFromPoint(h, g, {
                shadowRoots: fl(u) ? [u] : [],
              }),
            _o73 = _n120 && nf(_n120.offsetNode, _n120.offset, null, t);
          if (_o73) {
            var _o73$ = _o73[0],
              _t216 = _o73$.key,
              _e155 = _o73$.offset,
              _n121 = _o73$.type;
            d.set(_t216, _e155, _n121);
          }
        }
      })(t, e, n);
      var i = xf(),
        s = t._inputState.mouseDrag;
      (s && i && !i.is(r) && Za.add(s),
        "mousedown" === e.type && zu(i) && mf(i, zu(r) ? r.anchor.key : ""));
    }
    function eu(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function nu(t) {
      var e = ya()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = xf();
      if (!zu(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!ci(r)) return;
      var i = o.anchor.offset;
      if (r.getTextContentSize() === i) {
        var _t217 = r.getNextSibling();
        if ("\n" === n) {
          if (g) return;
          if (Hc(_t217)) _t217.selectEnd();
          else if (!_t217) {
            var _t218 = Oc(r, ff),
              _e156 = _t218 && _t218.getNextSibling();
            Pr(_e156) && _e156.selectStart();
          }
        } else
          "\t" === n
            ? Ki(_t217) && _t217.selectEnd()
            : ci(_t217) &&
              _t217.getTextContent()[0] === n &&
              _t217.select(1, 1);
      } else r.getTextContent()[i] === n && r.select(i + 1, i + 1);
    }
    function ou(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function ru(t) {
      a &&
        !g &&
        y &&
        (ou(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return ou(t);
        }, 0)));
    }
    function iu(t, e) {
      var n = bl(t);
      if (kl(n) && Gl(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = Nl(o.ownerDocument);
      return null !== r && o.contains(r) && Gl(r, e);
    }
    function su(t, e) {
      var n = t.inputType;
      "deleteCompositionText" === n ||
        (u && $s(e)) ||
        ("insertCompositionText" !== n &&
          Ia(
            e,
            function () {
              iu(t, e) || Ws(e, H, t);
            },
            { event: t },
          ));
    }
    function lu(t) {
      var _ref87;
      var n = t.inputType,
        o = eu(t),
        r = ya(),
        i = r._inputState,
        s = xf();
      if (
        "insertText" === n &&
        t.data &&
        i.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((ou(i), t.preventDefault(), zu(s) && !s.isCollapsed())) {
          var _t219 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t219.key, _t219.offset, _t219.type),
            s.focus.set(_t219.key, _t219.offset, _t219.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t220 = Sf();
          if (!zu(_t220)) return !0;
          Cs(_t220.clone());
        }
        if (zu(s)) {
          var _n122 = s.anchor.key === s.focus.key;
          if (
            (function (t, e) {
              return (
                "MediaLast" === t.lastKeyCode && e < t.lastKeyDownTimeStamp + 30
              );
            })(i, t.timeStamp) &&
            r.isComposing() &&
            _n122
          ) {
            if (
              (cs(null),
              (i.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                Ia(r, function () {
                  cs(null);
                });
              }, 30),
              zu(s))
            ) {
              var _t221 = s.anchor.getNode();
              (_t221.markDirty(), ci(_t221) || e(142), Ua(s, _t221));
            }
          } else {
            if (
              (cs(null),
              g &&
                null !== o &&
                !o.collapsed &&
                (s.applyDOMRange(o), !s.isCollapsed()))
            )
              return (t.preventDefault(), s.removeText(), !0);
            t.preventDefault();
            var _e157 = s.anchor.getNode(),
              _l18 = _e157.getTextContent(),
              _c10 = _e157.canInsertTextAfter(),
              _a9 = 0 === s.anchor.offset && s.focus.offset === _l18.length;
            var _u7 = m && _n122 && !_a9 && _c10;
            if (
              (_u7 && s.isCollapsed() && (_u7 = !Lr(zs(s.anchor, !0))), !_u7)
            ) {
              Ws(r, G, !0);
              var _t222 = xf();
              m &&
                zu(_t222) &&
                _t222.isCollapsed() &&
                ((i.postDeleteSelectionToRestore = _t222),
                setTimeout(function () {
                  return (i.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!zu(s))
        return (
          ("historyUndo" !== n && "historyRedo" !== n) ||
            (t.preventDefault(), Ws(r, "historyUndo" === n ? it : st)),
          !0
        );
      var l = t.data;
      null !== i.unprocessedBeforeInputData &&
        ws(!1, r, i.unprocessedBeforeInputData);
      var c = !1;
      if (
        (!s.dirty || null !== i.unprocessedBeforeInputData) &&
        s.isCollapsed() &&
        !zr(s.anchor.getNode()) &&
        null !== o
      ) {
        var _s$anchor = s.anchor,
          _t223 = _s$anchor.key,
          _e158 = _s$anchor.offset,
          _i42 = _s$anchor.type,
          _l19 = r._slotsUsed && rf(s.anchor);
        s.applyDOMRange(o);
        var _a0 = n.endsWith("Forward");
        if (!1 !== _l19 && (_a0 || n.endsWith("Backward"))) {
          var _o74 = Du(_t223, _e158, _i42),
            _r66 = s.anchor,
            _u8 = s.focus,
            _f7 = !lf(rf(_r66), _l19) || !lf(rf(_u8), _l19),
            _d7 =
              !_f7 &&
              null !== _l19 &&
              (_a0
                ? _r66.isBefore(_o74) || _u8.isBefore(_o74)
                : _o74.isBefore(_r66) || _o74.isBefore(_u8));
          (_f7 || _d7) &&
            (_r66.set(_t223, _e158, _i42),
            _u8.set(_t223, _e158, _i42),
            (c = _d7 && "deleteContentForward" === n));
        }
      }
      i.unprocessedBeforeInputData = null;
      var a = s.anchor,
        u = s.focus,
        f = a.getNode(),
        d = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === l) (t.preventDefault(), Ws(r, q, !1));
        else if (l === T) (t.preventDefault(), Ws(r, X));
        else if (null == l && t.dataTransfer) {
          var _e159 = t.dataTransfer.getData("text/plain");
          (t.preventDefault(), s.insertRawText(_e159));
        } else
          null != l && za(s, o, l, t.timeStamp, !0)
            ? (t.preventDefault(), Ws(r, Q, l), nu(l))
            : (i.unprocessedBeforeInputData = l);
        return ((i.lastBeforeInputInsertTextTimeStamp = t.timeStamp), !0);
      }
      switch ((t.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          (Ws(r, Q, t),
            nu(
              (_ref87 = t.dataTransfer
                ? t.dataTransfer.getData("text/plain")
                : null) != null
                ? _ref87
                : t.data,
            ));
          break;
        case "insertFromComposition": {
          i.compositionPhase = "idle";
          var _e160 = i.hadOrphanedCompositionEvents;
          i.hadOrphanedCompositionEvents = !1;
          var _n123 = r._compositionKey;
          (cs(null), _e160 || Ws(r, Q, t), hu(_n123));
          break;
        }
        case "insertLineBreak":
          (cs(null), (i.isInsertLineBreak = !1), Ws(r, q, !1));
          break;
        case "insertParagraph":
          (cs(null),
            i.isInsertLineBreak
              ? ((i.isInsertLineBreak = !1), Ws(r, q, !1))
              : Ws(r, X));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Ws(r, Z, t);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Pr(t) || Pr(e) || !Qi(t) || !Qi(e);
          })(f, d) && Ws(r, tt, t);
          break;
        case "deleteByDrag":
          (Ys(Kc), Ws(r, tt, t));
          break;
        case "deleteByCut":
          Ws(r, tt, t);
          break;
        case "deleteContent":
          Ws(r, G, !1);
          break;
        case "deleteWordBackward":
          Ws(r, et, !0);
          break;
        case "deleteWordForward":
          Ws(r, et, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Ws(r, nt, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Ws(r, c ? G : nt, !1);
          break;
        case "formatStrikeThrough":
          Ws(r, ot, "strikethrough");
          break;
        case "formatBold":
          Ws(r, ot, "bold");
          break;
        case "formatItalic":
          Ws(r, ot, "italic");
          break;
        case "formatUnderline":
          Ws(r, ot, "underline");
          break;
        case "historyUndo":
          Ws(r, it);
          break;
        case "historyRedo":
          Ws(r, st);
      }
      return !0;
    }
    function cu(t, e) {
      t.stopPropagation();
      var n = e._inputState;
      (ou(n),
        Ia(
          e,
          function () {
            iu(t, e) || e.dispatchCommand(V, t);
          },
          { event: t },
        ),
        (n.unprocessedBeforeInputData = null));
    }
    function au(t) {
      var e = ya(),
        n = e._inputState,
        o = xf(),
        r = t.data,
        i = eu(t);
      var s = !1,
        l = !1;
      if (null != r && zu(o)) {
        var _c11 = al(Qs(e)),
          _a1 = null !== _c11 ? xl(_c11, e._rootElement) : null,
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
            ci(_h5) &&
            Zi(_h5);
        if (!_f8 && !_g4 && za(o, i, r, t.timeStamp, !1, _a1)) {
          if (((s = !0), "ending-firefox" === n.compositionPhase)) {
            var _t224 = gu(e, r);
            if (((n.compositionPhase = "idle"), _t224))
              return (Ys(zc), vs(), !0);
          }
          var _i43 = o.anchor.getNode();
          if (null === _c11 || null === _a1) return !0;
          var _f9 = o.isBackward(),
            _h6 = _f9 ? o.anchor.offset : o.focus.offset,
            _g5 = _f9 ? o.focus.offset : o.anchor.offset;
          (d &&
            !o.isCollapsed() &&
            ci(_i43) &&
            null !== _a1.anchorNode &&
            _i43.getTextContent().slice(0, _h6) +
              r +
              _i43.getTextContent().slice(_h6 + _g5) ===
              Es(_a1.anchorNode)) ||
            (Ws(e, Q, r), (l = "insertText" === t.inputType));
          var _p5 = r.length;
          (u &&
            _p5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _p5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            m && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), cs(null)));
        }
      }
      return (
        s ||
          (ws(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (gu(e, r || void 0), Ys(zc), (n.compositionPhase = "idle"))),
        vs(l),
        !0
      );
    }
    function uu(t, e) {
      Ws(e, J, t);
    }
    function fu(t) {
      var e = ya(),
        n = e._inputState,
        o = xf();
      if (zu(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r67 = o.anchor,
          _i44 = o.anchor.getNode();
        if (
          (cs(_r67.key),
          Ys(Bc),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r67.type ||
            !o.isCollapsed() ||
            (!m &&
              (_i44.getFormat() !== o.format ||
                (ci(_i44) && _i44.getStyle() !== o.style))) ||
            (ci(_i44) &&
              (Zi(_i44) ||
                (0 === _r67.offset && !_i44.canInsertTextBefore()) ||
                (_r67.offset === _i44.getTextContentSize() &&
                  !_i44.canInsertTextAfter()))))
        ) {
          g || (!_ && !x)
            ? Ws(e, Q, N)
            : (function (t) {
                Ru(t, "", !0);
              })(o);
          var _t225 = xf();
          zu(_t225) && cs(_t225.anchor.key);
        }
      }
      return !0;
    }
    function du(t) {
      var e = ya();
      return (
        (e._inputState.compositionPhase = "idle"),
        gu(e, t.data),
        Ys(zc),
        !0
      );
    }
    function hu(t) {
      var e = ya()._inputState,
        n = e.composedSegmentedKey;
      if (((e.composedSegmentedKey = null), null === t || t !== n)) return;
      var o = fs(t);
      if (!ci(o) || "text" === o.getType() || Zi(o) || !o.isAttached()) return;
      var r = xf(),
        i = zu(r) && r.anchor.key === t ? r.anchor.offset : null,
        s = li(o.getTextContent());
      if (
        (s.setFormat(o.getFormat()),
        s.setStyle(o.getStyle()),
        o.replace(s),
        null !== i)
      ) {
        var _t226 = Math.min(i, s.getTextContentSize());
        s.select(_t226, _t226);
      }
    }
    function gu(t, e) {
      var n = t._compositionKey;
      if ((cs(null), null !== n && null != e)) {
        if ("" === e) {
          var _e161 = fs(n),
            _o75 = t.getElementByKey(n),
            _r68 = null !== _o75 && ci(_e161) ? Kl(_e161, _o75, t) : null;
          if (null !== _r68 && null !== _r68.nodeValue && ci(_e161)) {
            var _n124 = al(Qs(t)),
              _o76 = _n124 && xl(_n124, t._rootElement);
            var _i45 = null,
              _s26 = null;
            (null !== _o76 &&
              _o76.anchorNode === _r68 &&
              ((_i45 = _o76.anchorOffset), (_s26 = _o76.focusOffset)),
              Ms(_e161, _r68.nodeValue, _i45, _s26, !0));
          }
          return (hu(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e162 = xf();
          if (zu(_e162) || Wu(_e162)) {
            if (zu(_e162)) {
              var _t227 = _e162.focus;
              _e162.anchor.set(_t227.key, _t227.offset, _t227.type);
            }
            return (Ws(t, gt, null), hu(n), !1);
          }
        }
        var _o77 = fs(n);
        if (null !== _o77 && ci(_o77) && Zi(_o77)) {
          _o77.markDirty();
          var _t228 = xf(),
            _r69 = _o77.getTextContentSize(),
            _i46 =
              zu(_t228) && _t228.anchor.key === n ? _t228.anchor.offset : _r69;
          return (_o77.select(_i46, _i46).insertText(e), !0);
        }
      }
      return (ws(!0, t, e), hu(n), !1);
    }
    function pu(t, e) {
      var n = e._inputState;
      u
        ? (n.compositionPhase = "ending-firefox")
        : ("" === t.data || g || (!_ && !x)) && Ws(e, Y, t);
    }
    function _u(t, e) {
      var n = e._inputState;
      (g &&
        (n.isShiftKeyDown =
          "Shift" === t.key ||
          (n.isShiftKeyDown && t.shiftKey && "CapsLock" !== t.key)),
        (n.lastKeyDownTimeStamp = t.timeStamp),
        (n.lastKeyCode = t.key),
        "Backspace" !== t.key && ou(n),
        e.isComposing() ||
          (!g && (_ || x) && 229 === t.keyCode) ||
          Ws(e, lt, t));
    }
    function yu(t, e) {
      (t.shiftKey && "CapsLock" !== t.key) ||
        (e._inputState.isShiftKeyDown = !1);
    }
    var mu = { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: "any" },
      xu = { ctrlKey: !0 },
      Su = { metaKey: !0 },
      Cu = { shiftKey: "any" },
      vu = { altKey: "any", shiftKey: "any" };
    function Tu(t) {
      var e = ya();
      if (null == t.key) return !0;
      var n = e._keyDownShortcuts;
      null === n &&
        ((n = Ut(
          (function () {
            var t = function t(_t229, e, n) {
                return {
                  key: _t229,
                  modifiers: e,
                  onMatch: function onMatch(t, e) {
                    Ws(e, n, t);
                  },
                };
              },
              e = function e(t, _e163, n, o) {
                return {
                  key: t,
                  modifiers: _e163,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Ws(e, n, o));
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
                      Ws(n, gt, t),
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
                    null === o || zu(o) || (t.preventDefault(), Ws(n, e, t));
                  },
                };
              };
            return [
              t("ArrowRight", Cu, ct),
              t("ArrowLeft", Cu, ut),
              t("ArrowUp", vu, dt),
              t("ArrowDown", vu, ht),
              n(babelHelpers["extends"]({}, mu, { shiftKey: !0 }), !0),
              n(babelHelpers["extends"]({}, mu, { shiftKey: !1 }), !1),
              t(" ", mu, pt),
              {
                key: "Backspace",
                modifiers: Cu,
                onMatch: function onMatch(t, e) {
                  Ws(e, _t, t) && ru(e._inputState);
                },
              },
              t("Escape", mu, yt),
              t("Delete", {}, mt),
              e("Backspace", zt, et, !0),
              e("Delete", zt, et, !1),
              e("b", Bt, ot, "bold"),
              e("u", Bt, ot, "underline"),
              e("i", Bt, ot, "italic"),
              t("Tab", Cu, xt),
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
                        modifiers: xu,
                        onMatch: function onMatch(t, e) {
                          (t.preventDefault(), Ws(e, q, !0));
                        },
                      },
                      t(
                        "ArrowLeft",
                        babelHelpers["extends"]({ metaKey: !0 }, Cu),
                        ft,
                      ),
                      t(
                        "ArrowRight",
                        babelHelpers["extends"]({ metaKey: !0 }, Cu),
                        at,
                      ),
                      e("h", xu, G, !0),
                      e("d", xu, G, !1),
                      e("Backspace", Su, nt, !0),
                      e("Delete", Su, nt, !1),
                      e("k", xu, nt, !1),
                    ]
                  : [
                      t("Home", Cu, ft),
                      t("End", Cu, at),
                      e("y", xu, st, void 0),
                    ],
              ),
              [
                {
                  key: "a",
                  modifiers: Bt,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Ws(e, Mt, t) && ru(e._inputState));
                  },
                },
                o("c", Et),
                o("x", wt),
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
    function Nu(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    function bu(t, e, n, o) {
      if (void 0 !== o)
        for (var _t230 of o.editors)
          _t230._inputState.isSelectionChangeFromMouseDown = !1;
      var r = xl(e, t._rootElement).anchorNode;
      (kl(r) || ts(r)) && Cs(yf(Sf(), e, t, n));
    }
    var ku = new Map();
    function Ou(t) {
      var e = ul(t.target);
      if (null === e) return;
      var n = Hs(t.target);
      var o = null;
      var r = null !== n ? Ka.get(n) : void 0;
      if (null !== n) {
        if (void 0 !== r) {
          var _t231 = r.editors;
          var _n125 = r.hasShadowEditor;
          if (void 0 === _n125) {
            _n125 = !1;
            for (var _e164 of _t231)
              if (
                null !== _e164._rootElement &&
                fl(_e164._rootElement.getRootNode())
              ) {
                _n125 = !0;
                break;
              }
            r.hasShadowEditor = _n125;
          }
          if (_n125) {
            var _n126 = null;
            for (var _r70 of _t231) {
              var _t232 = _r70._rootElement;
              if (null === _t232) continue;
              var _i47 = xl(e, _t232).anchorNode;
              if (null !== _i47 && qi(_i47) === _r70) {
                if (fl(_t232.getRootNode())) {
                  o = _r70;
                  break;
                }
                null === _n126 && (_n126 = _r70);
              }
            }
            null === o && null !== _n126 && (o = _n126);
          } else {
            var _t233 = e.anchorNode;
            null === _t233 ||
              (kl(_t233) && null !== _t233.shadowRoot) ||
              (o = qi(_t233));
          }
        }
        if (null === o) {
          var _t234 = Nl(n);
          o = null !== _t234 ? qi(_t234) : null;
        }
      }
      if (null === o) return;
      o._inputState.isSelectionChangeFromMouseDown &&
        Ia(o, function () {
          return bu(o, e, t, r);
        });
      var i = bs(o),
        s = i[i.length - 1],
        l = s._key,
        c = ku.get(l),
        a = c || s;
      (a !== o && Wa(e, a, !1),
        Wa(e, o, !0),
        o !== s ? ku.set(l, o) : c && ku["delete"](l));
    }
    function Eu(t) {
      t._lexicalHandled = !0;
    }
    function wu(t) {
      return !0 === t._lexicalHandled;
    }
    var Mu = z();
    var _Au = (function () {
      function Au(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto17 = Au.prototype;
      _proto17.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto17.isBefore = function isBefore(t) {
        return this.key === t.key
          ? this.offset < t.offset
          : zd(Si(ui(this, "next")), Si(ui(t, "next"))) < 0;
      };
      _proto17.getNode = function getNode() {
        var t = fs(this.key);
        return (null === t && e(20), t);
      };
      _proto17.set = function set(t, e, n, o) {
        var r = this._selection,
          i = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          ha() ||
            (as() === i && cs(t),
            null !== r &&
              (r.setCachedNodes(null),
              zu(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return Au;
    })();
    function Du(t, e, n) {
      return new _Au(t, e, n);
    }
    function Iu(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (ci(e)) {
        r = "text";
        var _t235 = e.getTextContentSize();
        o > _t235 && (o = _t235);
      } else if (!Pr(e)) {
        var _t236 = e.getNextSibling();
        if (ci(_t236)) ((n = _t236.__key), (o = 0), (r = "text"));
        else {
          var _t237 = e.getParent();
          _t237 && ((n = _t237.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function Pu(t, e) {
      if (Pr(e)) {
        var _n127 = e.getLastDescendant();
        Pr(_n127) || ci(_n127) ? Iu(t, _n127) : Iu(t, e);
      } else Iu(t, e);
    }
    function Fu(t, e, n, o) {
      var r = t.getNode(),
        i = r.getChildAtIndex(t.offset),
        s = li();
      if ((s.setFormat(n), s.setStyle(o), Pi(i))) i.splice(0, 0, [s]);
      else if (null !== i) {
        var _t238 = nl(r) ? Ii().append(s) : s;
        i.insertBefore(_t238);
      } else if (nl(r)) {
        var _t239 = r.getLastChild();
        Pr(_t239) && !_t239.isInline() && _t239.isEmpty()
          ? _t239.append(s)
          : r.append(Ii().append(s));
      } else r.append(s);
      (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
    }
    function Ru(t, n, o) {
      var r = t.format,
        i = t.style;
      if (!t.isCollapsed()) {
        var _e165 = (t.focus.isBefore(t.anchor) ? t.focus : t.anchor).getNode();
        if (
          (ci(_e165) && ((r = _e165.getFormat()), (i = _e165.getStyle())),
          t.removeText(),
          (t.format = r),
          (t.style = i),
          "" === n && !o)
        )
          return;
        if (null === as())
          return (
            "element" === t.anchor.type && Fu(t.anchor, t.focus, r, i),
            void Lu(t, n, r, i)
          );
      }
      "element" === t.anchor.type && Fu(t.anchor, t.focus, r, i);
      var s = t.anchor.getNode();
      ci(s) || e(398);
      var l = t.anchor.offset,
        c = s.getParentOrThrow(),
        a = s.getTextContentSize();
      if (
        Zi(s) ||
        (0 === l &&
          (!s.canInsertTextBefore() ||
            (!c.canInsertTextBefore() && !s.__prev))) ||
        (l === a &&
          (!s.canInsertTextAfter() || (!c.canInsertTextAfter() && !s.__next)))
      ) {
        if (s.isSegmented() && 0 !== l && l !== a) {
          if (null !== as())
            (s.setMode("normal").setFormat(r).setStyle(i),
              (ya()._inputState.composedSegmentedKey = s.getKey()));
          else {
            var _e166 = li(s.getTextContent());
            (_e166.setFormat(r), _e166.setStyle(i));
            var _n128 = xf() === t;
            (s.replace(_e166),
              t.setTextNodeRange(_e166, l, _e166, l),
              _n128 && xf() !== t && Cs(t));
          }
          return void (("" !== n || o) && Ru(t, n, o));
        }
        if ("" === n && !o) return;
        if (0 === l || l === a) {
          var _e167 = 0 === l,
            _a10 = _e167 ? "previous" : "next",
            _u9 = bd(s, _a10).getNodeAtCaret();
          var _f0;
          ci(_u9) &&
          (_e167 ? _u9.canInsertTextAfter() : _u9.canInsertTextBefore()) &&
          !Zi(_u9)
            ? (_f0 = _u9)
            : ((_f0 = li().setFormat(r).setStyle(i)),
              bd(
                (_e167 ? c.canInsertTextBefore() : c.canInsertTextAfter())
                  ? s
                  : c,
                _a10,
              ).insert(_f0));
          var _d8 = _e167 ? void 0 : 0;
          return (_f0.select(_d8, _d8), void Ru(t, n, o));
        }
        var _e168 = li(n);
        return (
          _e168.setFormat(r),
          _e168.setStyle(i),
          s.replace(_e168),
          void _e168.select()
        );
      }
      if ("" === n && !o) return;
      var u = c.isInline() && 0 === l && !s.__prev,
        f = c.isInline() && l === a && !s.__next,
        d = s.getFormat() !== r || s.getStyle() !== i;
      if (u || f || d) {
        if ("" !== s.getTextContent() || u || f) return void Lu(t, n, r, i);
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
    function Lu(t, n, o, r) {
      var i = t.anchor.getNode();
      ci(i) || e(398);
      var s = t.anchor.offset,
        l = li(n).setFormat(o).setStyle(r),
        c = i.getParentOrThrow(),
        a = 0 === s,
        u = a || s === i.getTextContentSize();
      if (u && c.isInline() && !(a ? i.__prev : i.__next))
        bd(c, a ? "previous" : "next").insert(l);
      else {
        var _t240 = u ? i : i.splitText(s)[0];
        a ? _t240.insertBefore(l, !1) : _t240.insertAfter(l, !1);
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
    var _Ku = (function () {
      function Ku(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto18 = Ku.prototype;
      _proto18.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto18.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto18.is = function is(t) {
        if (!Wu(t)) return !1;
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
        return new Ku(new Set(this._nodes));
      };
      _proto18.extract = function extract() {
        return this.getNodes();
      };
      _proto18.insertRawText = function insertRawText(t) {};
      _proto18.insertText = function insertText() {};
      _proto18.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === Jf(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (ci(o)) r = o.select();
        else {
          var _t241 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t241, _t241);
        }
        r.insertNodes(t);
        for (var _t242 = 0; _t242 < n; _t242++) e[_t242].remove();
      };
      _proto18.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t243 of e) {
          var _e169 = fs(_t243);
          null !== _e169 && n.push(_e169);
        }
        return (ha() || (this._cachedNodes = n), n);
      };
      _proto18.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n129 = 0; _n129 < t.length; _n129++)
          e += t[_n129].getTextContent();
        return e;
      };
      _proto18.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === Jf(t);
        });
        if ((xf() || Sf()) === this && t[0]) {
          var _e170 = bd(t[0], "next");
          di(Kd(_e170, _e170));
        }
        for (var _e171 of t) _e171.remove();
        Bu();
      };
      return Ku;
    })();
    function Bu() {
      var t = xs();
      if (0 === t.getChildrenSize() && null === Xf(xf())) {
        var _e172 = Ii();
        (t.append(_e172), _e172.select());
      }
    }
    function zu(t) {
      return t instanceof _$u;
    }
    var _$u = (function () {
      function $u(t, e, n, o) {
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
      var _proto19 = $u.prototype;
      _proto19.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto19.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto19.is = function is(t) {
        return (
          !!zu(t) &&
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
          for (var _n130 of t)
            if (Cd(_n130)) {
              var _t244 = _n130.origin;
              0 === e.length ? r.add(_t244) : (i++, e.push(_t244));
            } else {
              var _t245 = _n130.origin;
              Pr(_t245) && 0 !== i ? i-- : e.push(_t245);
            }
          if (
            (o && e.push(o.caret.origin),
            Sd(t.focus) &&
              Pr(t.focus.origin) &&
              null === t.focus.getNodeAtCaret())
          )
            for (
              var _n131 = wd(t.focus.origin, "previous");
              Cd(_n131) &&
              r.has(_n131.origin) &&
              !_n131.origin.isEmpty() &&
              _n131.origin.is(e[e.length - 1]);
              _n131 = Ad(_n131)
            )
              (r["delete"](_n131.origin), e.pop());
          for (; e.length > 1; ) {
            var _t246 = e[e.length - 1];
            if (!Pr(_t246) || i > 0 || _t246.isEmpty() || r.has(_t246)) break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n132 = Si(t.anchor),
              _o78 = Si(t.anchor.getFlipped()),
              _r71 = function _r71(t) {
                return xd(t) ? t.origin : t.getNodeAtCaret();
              },
              _i48 =
                _r71(_n132) ||
                _r71(_o78) ||
                (t.anchor.getNodeAtCaret() ? _n132.origin : _o78.origin);
            e.push(_i48);
          }
          return e;
        })(vi(gi(this), "next"));
        return (ha() || (this._cachedNodes = e), e);
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
          e = gi(this).getTextSlices();
        var n = "",
          o = !0;
        for (var _r72 = 0; _r72 < t.length; _r72++) {
          var _i49 = t[_r72];
          if (Pr(_i49) && !_i49.isInline()) {
            o || (n += "\n");
            var _t247 = "";
            for (var _e173 of Zf(_i49)) {
              var _n133 = td(_i49, _e173);
              null !== _n133 && (_t247 += _n133.getTextContent());
            }
            "" !== _t247 ? ((n += _t247), (o = !1)) : (o = !_i49.isEmpty());
          } else if (((o = !1), ci(_i49))) {
            var _t248 = bi(e, _i49);
            n += _t248 ? _t248.getTextContent() : _i49.getTextContent();
          } else (Lr(_i49) || Hc(_i49)) && (n += _i49.getTextContent());
        }
        return n;
      };
      _proto19.applyDOMRange = function applyDOMRange(t) {
        var e = ya(),
          n = e.getEditorState()._selection,
          o = uf(
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
          Mo(this));
      };
      _proto19.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new $u(
          Du(t.key, t.offset, t.type),
          Du(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto19.toggleFormat = function toggleFormat(t) {
        ((this.format = os(this.format, t, null)), (this.dirty = !0));
      };
      _proto19.setFormat = function setFormat(t) {
        ((this.format = t), (this.dirty = !0));
      };
      _proto19.setStyle = function setStyle(t) {
        ((this.style = t), (this.dirty = !0));
      };
      _proto19.hasFormat = function hasFormat(t) {
        var e = M[t];
        return 0 !== (this.format & e);
      };
      _proto19.insertRawText = function insertRawText(t) {
        this.insertNodes(wf(t));
      };
      _proto19.insertText = function insertText(t) {
        Ru(this, t, !1);
      };
      _proto19.removeText = function removeText() {
        var t = xf() === this,
          e = this.anchor.key;
        (hi(this, mi(gi(this))),
          this.isCollapsed() && mf(this, e),
          t && xf() !== this && Cs(this));
      };
      _proto19.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        Hu(this, t, e);
      };
      _proto19.insertNodes = function insertNodes(t) {
        var _i50;
        if (0 === t.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if (
          "element" === this.anchor.type &&
          Pr(n) &&
          n.isShadowRoot() &&
          null !== Jf(n)
        ) {
          var _n$getFirstChild;
          var _o79 =
            (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(Ii()).getFirstChild();
          if (null !== _o79 && !Pr(_o79)) {
            var _t249 = Ii();
            (_o79.insertBefore(_t249), (_o79 = _t249));
          }
          if (null !== _o79) {
            _o79.selectStart();
            var _n134 = xf();
            return (zu(_n134) || e(369), _n134.insertNodes(t));
          }
        }
        if ("element" === this.anchor.type && nl(n)) {
          var _e174 = Pf(t),
            _o80 = _e174.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _e174.getChildren()),
            void (null !== _o80 && _o80.selectEnd())
          );
        }
        var o = this.isBackward() ? this.focus : this.anchor;
        var r = o.getNode(),
          i = Oc(r, Il);
        var s = t[t.length - 1];
        if (Pr(i) && "__language" in i) {
          if ("__language" in t[0]) this.insertText(t[0].getTextContent());
          else {
            var _Af = Af(this),
              _e175 = _Af[1];
            (i.splice(_e175, 0, t), s.selectEnd());
          }
          return;
        }
        if (
          !t.some(function (t) {
            return (Pr(t) || Lr(t)) && !t.isInline();
          })
        ) {
          Pr(i) || e(211, r.constructor.name, r.getType());
          var _Af2 = Af(this, !0),
            _n135 = _Af2[0],
            _o81 = _Af2[1];
          return (
            (Pr(_n135) ? _n135 : i).splice(_o81, 0, t),
            void s.selectEnd()
          );
        }
        if (null === i) {
          var _e176 = Pf(t),
            _n136 = _e176.getLastDescendant();
          var _o82 = ui(this.anchor, "next");
          for (var _t250 of _e176.getChildren()) _o82 = wi(_t250, _o82);
          return void (null !== _n136 && _n136.selectEnd());
        }
        if (
          Pr(i) &&
          (null !== Jf(i) ||
            (!i.isParentRequired() && !nl(i.getParentOrThrow())))
        ) {
          var _Af3 = Af(this),
            _e177 = _Af3[1],
            _n137 = Mf(t);
          i.splice(_e177, 0, _n137);
          var _o83 = _n137[_n137.length - 1];
          return void (void 0 !== _o83
            ? _o83.selectEnd()
            : i.select(_e177, _e177));
        }
        var l = Pf(t),
          c = l.getLastDescendant(),
          a = l.getChildren(),
          u = (function (t) {
            var e = (function (t) {
              var e = t.getNode();
              if (t.offset > 0)
                return "element" === t.type && Pr(e)
                  ? e.getChildAtIndex(t.offset - 1)
                  : null;
              for (
                var _t251 = e;
                null !== _t251 && !Il(_t251) && !nl(_t251);
                _t251 = _t251.getParent()
              ) {
                var _e178 = _t251.getPreviousSibling();
                if (null !== _e178) return _e178;
              }
              return null;
            })(t);
            return Hc(e) && Hc(e.getPreviousSibling());
          })(o),
          f = Pr(i) && i.isEmpty() ? null : this.insertParagraph();
        f && !i.isAttached() && ((r = this.anchor.getNode()), (i = Oc(r, Il)));
        var d = a[a.length - 1];
        var h = a[0];
        var g;
        ((g = h),
          u ||
            !Pr(g) ||
            !Il(g) ||
            g.isEmpty() ||
            !Pr(i) ||
            (i.isEmpty() && !i.canMergeWhenEmpty()) ||
            (Pr(i) || e(211, r.constructor.name, r.getType()),
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
              for (var _t252 of i) s = s.insertAfter(_t252);
            })(i, h)));
        var p = Oc(c, Il),
          _ = c.selectEnd();
        (f &&
          (Pr(p) && (f.canMergeWhenEmpty() || Il(d))
            ? (p.append.apply(p, Array.from(f.getChildren())), f.remove())
            : f.isEmpty() && f.remove()),
          Pr(i) && i.isEmpty() && i.remove());
        var y = Pr(i) ? i.getLastChild() : null;
        Hc(y) && p !== i && y.remove();
        var m = Si(ui(_.anchor, "next"));
        (fi(_.anchor, m), fi(_.focus, m));
      };
      _proto19.insertParagraph = function insertParagraph() {
        this.isCollapsed() || this.removeText();
        var t = this.anchor.getNode();
        if ("element" === this.anchor.type && nl(t)) {
          var _e179 = Ii();
          return (
            t.splice(this.anchor.offset, 0, [_e179]),
            _e179.select(),
            _e179
          );
        }
        var _Af4 = Af(this),
          n = _Af4[1],
          o = Oc(this.anchor.getNode(), Il);
        if (null !== o && null !== Jf(o)) return null;
        Pr(o) || e(213);
        var r = o.getChildAtIndex(n),
          i = r ? [r].concat(Array.from(r.getNextSiblings())) : [],
          s = o.insertNewAfter(this, !1);
        return s
          ? (s.append.apply(s, Array.from(i)), s.selectStart(), s)
          : null;
      };
      _proto19.insertLineBreak = function insertLineBreak(t) {
        var e = Uc();
        if ((this.insertNodes([e]), t)) {
          var _t253 = e.getParentOrThrow(),
            _n138 = e.getIndexWithinParent();
          _t253.select(_n138, _n138);
        }
      };
      _proto19.extract = function extract() {
        var t = this.getNodes();
        if (this.isCollapsed()) return [].concat(Array.from(t));
        var e = this.isBackward(),
          n = gi(this).getTextSlices(),
          o = [];
        for (var _e180 of t) {
          var _t254 = bi(n, _e180),
            _r73 = _t254 ? ki(_t254, this) : _e180;
          null !== _r73 && o.push(_r73);
        }
        if (1 === t.length && 1 === o.length && ci(o[0])) {
          var _t255 = o[0],
            _ref88 = e ? [this.focus, this.anchor] : [this.anchor, this.focus],
            _n139 = _ref88[0],
            _r74 = _ref88[1];
          (_n139.set(_t255.getKey(), 0, "text"),
            _r74.set(_t255.getKey(), _t255.getTextContentSize(), "text"));
        }
        return o;
      };
      _proto19.modify = function modify(t, e, n) {
        if (Ff(this, t, e, n)) return;
        var o = "move" === t,
          r = ya(),
          i = al(Qs(r));
        if (!i) return;
        var s = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === s ||
          !Pr(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          cl(s, r, l);
        var a = js(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = ci(c) ? Kl(c, a, r) : null),
          this.dirty)
        ) {
          var _t256 = js(r, this.anchor.key);
          var _e181 = _t256;
          if ("text" === this.anchor.type) {
            var _n140 = this.anchor.getNode();
            _e181 = ci(_n140) ? Kl(_n140, _t256, r) : null;
          }
          _e181 && u && bf(i, _e181, this.anchor.offset, u, this.focus.offset);
        }
        if (
          "character" === n &&
          ci(c) &&
          c.isUnmergeable() &&
          (e
            ? 0 === this.focus.offset
            : this.focus.offset === c.getTextContentSize())
        ) {
          var _t257 = bd(c, e ? "previous" : "next").getNodeAtCaret();
          if (ci(_t257)) {
            if (!o) {
              var _n141 = _t257.getTextContentSize();
              return (
                e
                  ? this.focus.set(_t257.__key, _n141 - 1, "text")
                  : this.focus.set(_t257.__key, 1, "text"),
                void (this.dirty = !0)
              );
            }
            {
              var _n142 = r.getElementByKey(_t257.getKey()),
                _o84 = _n142 ? Kl(_t257, _n142, r) : null;
              if (_o84) {
                var _t258 = e ? _o84.length : 0;
                bf(i, _o84, _t258, _o84, _t258);
              }
            }
          }
        }
        if ((Gu(i, t, e ? "backward" : "forward", n, l), i.rangeCount > 0)) {
          var _t259 = yl(i, r._rootElement),
            _n143 = _t259 || i.getRangeAt(0),
            _s27 = this.anchor.getNode(),
            _l20 = zr(_s27) ? _s27 : tl(_s27);
          (this.applyDOMRange(_n143),
            (this.dirty = !0),
            o ||
              (qu(this, e, _l20),
              (_t259
                ? "backward" !== i.direction
                : i.anchorNode === _n143.startContainer &&
                  i.anchorOffset === _n143.startOffset) || Yu(this)));
        }
        "lineboundary" === n && Ff(this, t, e, n, "decorators");
      };
      _proto19.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Pr(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t260 = e.getParent(),
            _n144 =
              e.getNextSibling() ||
              (null === _t260 ? null : _t260.getNextSibling());
          if (Pr(_n144) && _n144.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto19.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e182 = this.anchor;
          var _n145 = _e182.getNode();
          if (this.forwardDeletion(_e182, _n145, t)) {
            var _t261 = Pr(_n145) ? _n145.getNextSibling() : null;
            if (
              !(
                Pr(_n145) &&
                _n145.isEmpty() &&
                Pr(_t261) &&
                _t261.isShadowRoot()
              )
            )
              return;
          }
          var _o85 = ui(_e182, t ? "previous" : "next"),
            _r75 = Rd(_o85);
          if (
            _r75.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            if ("element" === _e182.type) {
              var _t262 = _o85.getNodeAtCaret();
              if (Pr(_t262) && ll(_t262)) {
                var _e183 = _t262.getParent();
                _t262.remove();
                var _n146 = Ss(_e183, _t262);
                return void (null !== _n146 && _n146.selectStart());
              }
            }
            var _t263 = { type: "initial" };
            for (var _e184 of _r75.iterNodeCarets("shadowRoot"))
              if (Cd(_e184)) {
                if (_e184.origin.isInline());
                else {
                  if (_e184.origin.isShadowRoot()) {
                    if ("merge-block" === _t263.type) break;
                    if (
                      Pr(_r75.anchor.origin) &&
                      _r75.anchor.origin.isEmpty()
                    ) {
                      var _t264 = Si(_e184);
                      (hi(this, Kd(_t264, _t264)), _r75.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t263.type &&
                    "merge-block" !== _t263.type) ||
                    (_t263 = {
                      block: _t263.block,
                      caret: _e184,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t263.type) break;
                if (Sd(_e184)) {
                  if (Pr(_e184.origin)) {
                    if (_e184.origin.isInline()) {
                      if (!_e184.origin.isParentOf(_r75.anchor.origin)) break;
                    } else
                      _t263 = { block: _e184.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Lr(_e184.origin)) {
                    if (_e184.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t263.type &&
                      (_e184.origin.isKeyboardSelectable() ||
                        !_e184.origin.isInline()) &&
                      Pr(_r75.anchor.origin) &&
                      _r75.anchor.origin.isEmpty()
                    ) {
                      _r75.anchor.origin.remove();
                      var _t265 = gf();
                      (_t265.add(_e184.origin.getKey()), Cs(_t265));
                    } else {
                      var _t266 = _e184.origin,
                        _n147 = _t266.getParent();
                      _t266.remove();
                      var _o86 = Ss(_n147, _t266);
                      null !== _o86 && _o86.selectStart();
                    }
                    return;
                  }
                  if (Hc(_e184.origin)) return void _e184.origin.remove();
                  break;
                }
              }
            if ("merge-block" === _t263.type) {
              var _t267 = _t263,
                _e185 = _t267.caret,
                _n148 = _t267.block;
              if (Zf(_n148).length > 0) return;
              return _e185.origin.isEmpty() &&
                !_n148.isEmpty() &&
                _e185.origin.getParent() === _n148.getParent()
                ? void _e185.origin.remove(!0)
                : (hi(
                    this,
                    Kd(
                      !_e185.origin.isEmpty() && _n148.isEmpty()
                        ? pi(bd(_n148, _e185.direction))
                        : _r75.anchor,
                      _e185,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t268 = _e182.getNode(); null !== _t268; ) {
              if (null !== Jf(_t268)) return;
              if (Pr(_t268) && _t268.isShadowRoot()) break;
              _t268 = _t268.getParent();
            }
          }
          var _i51 = this.focus;
          if ((Xu(this, t, "character"), this.isCollapsed())) {
            if (
              t &&
              0 === _e182.offset &&
              (function (t, e) {
                for (var _n149 = e; _n149; _n149 = _n149.getParent()) {
                  if (Pr(_n149)) {
                    if (_n149.collapseAtStart(t)) return !0;
                    if (nl(_n149)) break;
                  }
                  if (_n149.getPreviousSibling()) break;
                }
                return !1;
              })(this, _e182.getNode())
            )
              return;
          } else {
            var _o87 = "text" === _i51.type ? _i51.getNode() : null;
            if (
              ((_n145 = "text" === _e182.type ? _e182.getNode() : null),
              null !== _o87 && _o87.isSegmented())
            ) {
              var _e186 = _i51.offset,
                _r76 = _o87.getTextContentSize();
              if (
                _o87.is(_n145) ||
                (t && _e186 !== _r76) ||
                (!t && 0 !== _e186)
              )
                return void ef(_o87, t, _e186);
            } else if (null !== _n145 && _n145.isSegmented()) {
              var _r77 = _e182.offset,
                _i52 = _n145.getTextContentSize();
              if (_n145.is(_o87) || (t && 0 !== _r77) || (!t && _r77 !== _i52))
                return void ef(_n145, t, _r77);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode();
              if (r === o.getNode() && "text" === n.type && "text" === o.type) {
                var _t269 = n.offset,
                  _s28 = o.offset,
                  _l21 = _t269 < _s28,
                  _c12 = _l21 ? _t269 : _s28,
                  _a11 = _l21 ? _s28 : _t269,
                  _u0 = _a11 - 1;
                _c12 !== _u0 &&
                  !Ns((i = r.getTextContent().slice(_c12, _a11))) &&
                  !tf(i) &&
                  (e ? o.set(o.key, _u0, o.type) : n.set(n.key, _u0, n.type));
              }
              var i;
            })(this, t);
          }
        }
        (e || Ju(this),
          this.removeText(),
          t &&
            !e &&
            this.isCollapsed() &&
            "element" === this.anchor.type &&
            0 === this.anchor.offset &&
            Bu());
      };
      _proto19.deleteLine = function deleteLine(t) {
        ju(this, t, "lineboundary");
      };
      _proto19.deleteWord = function deleteWord(t) {
        ju(this, t, "word");
      };
      _proto19.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (ha() || (this._cachedIsBackward = e), e);
      };
      _proto19.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return $u;
    })();
    function Wu(t) {
      return t instanceof _Ku;
    }
    function ju(t, e, n) {
      var o = t.isCollapsed(),
        r = t.anchor,
        i = t.focus;
      var s = !1;
      if (o) {
        if ("word" === n && t.forwardDeletion(r, r.getNode(), e)) return;
        ((s = Xu(t, e, n)),
          "lineboundary" === n &&
            (function (t) {
              for (var _e187 of gi(t).iterNodeCarets("shadowRoot"))
                if (Sd(_e187) && Hc(_e187.origin))
                  return void fi(t.focus, pi(_e187));
            })(t));
      }
      ("lineboundary" !== n ||
        t.isCollapsed() ||
        Oc(r.getNode(), Il) === Oc(i.getNode(), Il) ||
        i.set(r.key, r.offset, r.type),
        t.isCollapsed()
          ? s || t.deleteCharacter(e)
          : (o || Ju(t), t.removeText()));
    }
    function Uu(t, e) {
      if (Wu(t)) {
        for (var _n150 of t.getNodes())
          Xr(_n150) && _n150.setFormat(e(_n150.getFormat()));
        return;
      }
      var n = t.isCollapsed() ? [] : t.getNodes(),
        o = n.length ? gi(t).getTextSlices() : [];
      var r,
        i,
        s,
        l = !1,
        c = 0;
      for (var _a12 of n)
        if (ci(_a12)) {
          r && i && (r.set(i.__key, 0, "text"), (r = void 0));
          var _n151 = bi(o, _a12);
          if (!l && _n151 && 0 === _n151.distance) {
            var _e188 = t.isBackward() ? t.focus : t.anchor;
            "text" === _e188.type && _e188.key === _a12.__key && (r = _e188);
          }
          if (((l = !0), _n151 && 0 === _n151.distance)) continue;
          var _u1 = e(_a12.getFormat()),
            _f1 = r ? _a12.getTextContentSize() : 0,
            _d9 = _n151 && !Zi(_a12) ? ki(_n151, t) : _a12;
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
          Pr(_a12)
            ? _a12.setTextFormat(e(_a12.getTextFormat()))
            : Xr(_a12) && _a12.setFormat(e(_a12.getFormat()));
      l
        ? void 0 !== s && (t.format = s | c)
        : (t.setFormat(e(t.format)), cs(null));
    }
    function Hu(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && zu(t) ? os(t.format, e, null) : n;
      Uu(t, function (t) {
        return os(t, e, o);
      });
    }
    function Vu(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function Ju(t) {
      var e = xs();
      !e.isEmpty() &&
        Mi(e, t) &&
        (t.anchor.set(e.getKey(), 0, "element"),
        t.focus.set(e.getKey(), e.getChildrenSize(), "element"));
    }
    function Yu(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        i = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, i, !0));
    }
    function Gu(t, e, n, o, r) {
      var i = "character" === o ? xl(t, r) : null,
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
      var c = xl(t, r);
      c.focusNode === s && c.focusOffset === l && t.modify(e, n, o);
    }
    function qu(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return qs(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var i = e ? r[0] : r[r.length - 1],
        s = Pr(i) ? i : i.getParentOrThrow();
      return (e ? s.selectStart() : s.selectEnd(), !0);
    }
    function Xu(t, e, n) {
      if (Ff(t, "extend", e, n)) return !1;
      var o = ya(),
        r = al(Qs(o));
      if (!r || "function" != typeof r.modify) return !1;
      var i = o._blockCursorElement,
        s = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === s ||
        null === i ||
        !Pr(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        cl(i, o, s);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && ci(e) ? Kl(e, n, o) : n;
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
        (bf(r, p, _, p, _),
        Gu(r, "move", e ? "backward" : "forward", n, s),
        0 === r.rangeCount)
      )
        return !1;
      var y = yl(r, s) || r.getRangeAt(0);
      var m = y.startContainer,
        x = y.startOffset;
      if ("lineboundary" === n && ts(m) && qi(m) === o) {
        var _t270 = Ts(m);
        if (Lr(_t270) && _t270.isInline() && !_t270.isIsolated()) {
          var _n152 = o.getElementByKey(_t270.getKey());
          null !== _n152 &&
            _n152.contains(m) &&
            ((m = _n152), (x = e ? 0 : _n152.childNodes.length));
        }
      }
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        ci(u) &&
        u.isUnmergeable() &&
        d === (e ? 0 : u.getTextContentSize())
      ) {
        var _n153 = bd(u, e ? "previous" : "next").getNodeAtCaret();
        if (ci(_n153)) {
          var _o88 = e ? _n153.getTextContentSize() - 1 : 1;
          return (t.focus.set(_n153.__key, _o88, "text"), (t.dirty = !0), !1);
        }
      }
      if (h && "character" === n && "text" === l.type) {
        var _n154 = e ? 0 : u.getTextContentSize(),
          _o89 = m === f ? x : d !== _n154 ? _n154 : -1;
        if (_o89 >= 0)
          return (
            _o89 !== d && (t.focus.set(l.key, _o89, "text"), (t.dirty = !0)),
            !1
          );
      }
      var S = o._slotsUsed && ps(m),
        C = S ? qf(u) : null,
        v = S ? qf(S) : null;
      if (
        S &&
        !lf(v, C) &&
        Qu(t.focus, u, C, v, "deletion", function () {
          return !e;
        })
      )
        return !0;
      var _ref89 = e ? [m, x, f, d] : [f, d, m, x],
        T = _ref89[0],
        N = _ref89[1],
        b = _ref89[2],
        k = _ref89[3],
        O = zr(u) ? u : tl(u);
      return (
        t.applyDOMRange({
          collapsed: !1,
          endContainer: b,
          endOffset: k,
          startContainer: T,
          startOffset: N,
        }),
        (t.dirty = !0),
        !qu(t, e, O) && e && Yu(t),
        !1
      );
    }
    function Qu(t, e, n, o, r, i) {
      var s =
        o &&
        (function (t, e) {
          for (var _n155 = Yf(t); null !== _n155; ) {
            var _t271 = qf(_n155);
            if (lf(_t271, e))
              return null !== _t271 || _n155.isAttached() ? _n155 : null;
            _n155 = _t271 && Yf(_t271);
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
        var _e189 = s || n;
        if (!Pr(_e189))
          return (
            null !== _e189 &&
              (function (t, e, n) {
                Pr(e)
                  ? t.set(e.getKey(), n ? e.getChildrenSize() : 0, "element")
                  : t.set(e.getKey(), n ? e.getTextContentSize() : 0, "text");
              })(t, _e189, l),
            !0
          );
        ((a = _e189), (u = l ? _e189.getChildrenSize() : 0));
      } else
        ((a = c),
          (u = s.getIndexWithinParent() + (l === ("selection" === r) ? 1 : 0)));
      return (
        "deletion" === r
          ? (function (t, e, n, o) {
              for (;;) {
                var _r78 = e.getChildAtIndex(o ? n : n - 1);
                if (ci(_r78))
                  return void t.set(
                    _r78.getKey(),
                    o ? 0 : _r78.getTextContentSize(),
                    "text",
                  );
                if (!Pr(_r78) || nl(_r78)) break;
                ((e = _r78), (n = o ? 0 : _r78.getChildrenSize()));
              }
              t.set(e.getKey(), n, "element");
            })(t, a, u, !l)
          : t.set(a.getKey(), u, "element"),
        !0
      );
    }
    function Zu() {
      try {
        var _t272 = new RegExp("\\p{Emoji}", "u"),
          _e190 = _t272.test.bind(_t272);
        if (
          _e190("\u2764\ufe0f") &&
          _e190("#\ufe0f\u20e3") &&
          _e190("\u{1f44d}")
        )
          return _e190;
      } catch (t) {}
      return function () {
        return !1;
      };
    }
    var tf = Zu();
    function ef(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        i = r.length;
      var s = 0,
        l = 0;
      for (var _t273 = 0; _t273 < i; _t273++) {
        var _o90 = _t273 === i - 1;
        if (
          ((l = s), (s += r[_t273].length), (e && s === n) || s > n || _o90)
        ) {
          (r.splice(_t273, 1), _o90 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function nf(t, n, o, r) {
      var i,
        s = n,
        l = !1;
      if (kl(t)) {
        var _c13 = !1;
        var _a13 = t.childNodes,
          _u10 = _a13.length,
          _f10 = r._blockCursorElement;
        (s === _u10 && _u10 > 0 && ((_c13 = !0), (s = _u10 - 1)),
          void 0 !== gs(t, r) || Gl(t, r) || (l = !0));
        var _d0 = _a13[s],
          _h7 = !1;
        if (_d0 === _f10) ((_d0 = _a13[s + 1]), (_h7 = !0));
        else if (null !== _f10) {
          var _e191 = _f10.parentNode;
          t === _e191 &&
            n > Array.prototype.indexOf.call(_e191.children, _f10) &&
            s--;
        }
        if (((i = Ts(_d0)), ci(i))) s = Od(i, _c13 ? "next" : "previous");
        else {
          var _a14 = Ts(t);
          if (null === _a14) return null;
          if (Pr(_a14)) {
            var _u11$resolveChildInde;
            var _l22 = r.getElementByKey(_a14.getKey());
            null === _l22 && e(214);
            var _u11 = Rl(_a14, _l22, r);
            ((_u11$resolveChildInde = _u11.resolveChildIndex(_a14, _l22, t, n)),
              (_a14 = _u11$resolveChildInde[0]),
              (s = _u11$resolveChildInde[1]),
              Pr(_a14) || e(215),
              _c13 &&
                s >= _a14.getChildrenSize() &&
                (s = Math.max(0, _a14.getChildrenSize() - 1)));
            var _f11 = _a14.getChildAtIndex(s);
            if (
              Pr(_f11) &&
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
              var _t274 = _c13
                ? _f11.getLastDescendant()
                : _f11.getFirstDescendant();
              (null === _t274
                ? (_a14 = _f11)
                : ((_f11 = _t274),
                  (_a14 = Pr(_f11) ? _f11 : _f11.getParentOrThrow())),
                (s = 0));
            }
            ci(_f11)
              ? ((i = _f11),
                (_a14 = null),
                (s = Od(_f11, _c13 ? "next" : "previous")))
              : _f11 !== _a14 &&
                _c13 &&
                !_h7 &&
                (Pr(_a14) || e(216),
                (s = Math.min(_a14.getChildrenSize(), s + 1)));
          } else {
            var _e192 = Yf(_a14),
              _o91 = null !== _e192 ? _e192 : _a14,
              _i53 = _o91.getIndexWithinParent(),
              _l23 = r.getElementByKey(_a14.getKey());
            var _c14 = "after";
            if (null !== _l23 && Ts(t) === _a14) {
              var _e193 = Rl(_a14, _l23, r);
              _e193.element !== _l23
                ? (_c14 = _e193.resolveLeafPosition(_l23, t, n))
                : 0 === n && Lr(_a14) && (_c14 = "before");
            }
            ((s = "before" === _c14 ? _i53 : _i53 + 1),
              (_a14 = _o91.getParentOrThrow()));
          }
          if (Pr(_a14)) return [Du(_a14.__key, s, "element"), l];
        }
      } else i = Ts(t);
      return ci(i) ? [Du(i.__key, Od(i, s, "clamp"), "text"), l] : null;
    }
    function of(t, e, n) {
      var o = t.getNode();
      if (us(o)) return;
      var r = 0 === t.offset;
      if (!r && t.offset !== o.getTextContent().length) return;
      var i = r ? "previous" : "next",
        s = bd(o, i).getNodeAtCaret();
      if (r === e || !Pr(s) || !s.isInline() || (r && n)) {
        if (r && !e)
          ci(s) &&
            !o.isUnmergeable() &&
            t.set(s.__key, s.getTextContent().length, "text");
        else if (null === s && (n || (!r && e))) {
          var _e194 = o.getParent();
          if (
            Pr(_e194) &&
            _e194.isInline() &&
            (r ||
              (!_e194.canInsertTextAfter() && _e194.getTextContentSize() > 1))
          ) {
            var _n156 = bd(_e194, i).getNodeAtCaret();
            ci(_n156) &&
              t.set(_n156.__key, r ? _n156.getTextContent().length : 0, "text");
          }
        }
      } else t.set(s.__key, r ? s.getChildrenSize() : 0, "element");
    }
    function rf(t) {
      var e = fs(t.key);
      return null === e ? null : qf(e);
    }
    function sf(t, e, n) {
      var o = rf(t),
        r = rf(e);
      return !lf(o, r) && Qu(e, fs(t.key), o, r, "selection", n);
    }
    function lf(t, e) {
      return null === t ? null === e : t.is(e);
    }
    function cf(t) {
      var e = sf(t.anchor, t.focus, function () {
        return (
          1 !==
          (function (t, e) {
            var n = (function (t, e) {
              var n = new Map();
              for (
                var _e195 = null, _o92 = t;
                null !== _o92;
                _e195 = _o92, _o92 = $d(_o92)
              )
                n.set(_o92.getKey(), _e195);
              for (
                var _t275 = null, _o93 = e;
                null !== _o93;
                _t275 = _o93, _o93 = $d(_o93)
              ) {
                var _e196 = n.get(_o93.getKey());
                if (void 0 === _e196) continue;
                var _r79 = _o93.getLatest();
                return null === _e196
                  ? null === _t275
                    ? { commonAncestor: _r79, type: "same" }
                    : { b: _t275, commonAncestor: _r79, type: "ancestor" }
                  : null === _t275
                    ? { a: _e196, commonAncestor: _r79, type: "descendant" }
                    : {
                        a: _e196,
                        b: _t275,
                        commonAncestor: _r79,
                        type: "branch",
                      };
              }
              return null;
            })(t.origin, e.origin);
            if (null === n) return null;
            switch (n.type) {
              case "same":
                return Wd(t, e);
              case "ancestor":
                return "child" === t.type && null === Jf(n.b) ? -1 : 1;
              case "descendant":
                return "child" === e.type && null === Jf(n.a) ? 1 : -1;
              case "branch": {
                var _t276 = Jf(n.a) && n.a.getKey(),
                  _e197 = Jf(n.b) && n.b.getKey();
                if (_t276 && _e197)
                  for (var _o94 of Qf(n.commonAncestor).values())
                    if (_o94 === _t276 || _o94 === _e197)
                      return _o94 === _t276 ? -1 : 1;
                return _t276 ? -1 : _e197 ? 1 : n.a.isBefore(n.b) ? -1 : 1;
              }
            }
          })(ui(t.anchor, "next"), ui(t.focus, "next"))
        );
      });
      return (e && (t.dirty = !0), e);
    }
    function af(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      var o = 0;
      for (
        var _t277 = n && n.previousSibling;
        _t277;
        _t277 = _t277.previousSibling
      )
        o++;
      return o;
    }
    function uf(t, e, n, o, r, i) {
      if (null === t || null === n || !Yi(r, t, n)) return null;
      var s = nf(t, e, zu(i) ? i.anchor : null, r);
      if (null === s) return null;
      var l = nf(n, o, zu(i) ? i.focus : null, r);
      if (null === l) return null;
      var c = s[0],
        a = s[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e198 = Ts(t),
          _o95 = Ts(n);
        if (Lr(_e198) && Lr(_o95)) return null;
      }
      var d =
        r._slotsUsed &&
        sf(c, u, function () {
          return (function (t, e, n, o) {
            if (t === n) return o >= e;
            var r = t.compareDocumentPosition(n);
            return r & Node.DOCUMENT_POSITION_CONTAINED_BY
              ? af(t, n) >= e
              : r & Node.DOCUMENT_POSITION_CONTAINS
                ? o > af(n, t)
                : 0 !== (r & Node.DOCUMENT_POSITION_FOLLOWING);
          })(t, e, n, o);
        });
      return (
        (function (t, e) {
          if ("text" === t.type && "text" === e.type) {
            var _n157 = t.isBefore(e),
              _o96 = t.is(e);
            (of(t, _n157, _o96),
              of(e, !_n157, _o96),
              _o96 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function ff(t) {
      return Pr(t) && !t.isInline();
    }
    function df(t, e, n, o, r, i) {
      var s = _a(),
        l = new _$u(Du(t, e, r), Du(n, o, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function hf() {
      var t = Du("root", 0, "element"),
        e = Du("root", 0, "element");
      return new _$u(t, e, 0, "");
    }
    function gf() {
      return new _Ku(new Set());
    }
    function pf(t, e) {
      return yf(null, t, e, null);
    }
    var _f = new Set([
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
    function yf(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var i = o || r.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c = "keydown" === s && i,
        a = c && bl(c),
        u =
          c &&
          (c.ctrlKey || c.metaKey || _f.has(c.key)) &&
          Ol(a) &&
          qi(a) === n,
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
      if (zu(t) && !f) return t.clone();
      {
        if (null === e) return null;
        var _o97 = xl(e, n._rootElement);
        if (
          ((d = _o97.anchorNode),
          (h = _o97.focusNode),
          (g = _o97.anchorOffset),
          (p = _o97.focusOffset),
          (l || u || void 0 === s) && zu(t) && !Yi(n, d, h))
        )
          return t.clone();
      }
      var _ = uf(d, g, h, p, n, t);
      if (null === _) return null;
      var y = _[0],
        m = _[1],
        x = _[2],
        S = zu(t) ? t : null,
        C = new _$u(y, m, S ? S.format : 0, S ? S.style : "");
      return (S && mf(C, S.anchor.key), (C.dirty = x), C);
    }
    function mf(t, e) {
      var n = t.anchor;
      if (n.key === e) return;
      var o = n.getNode();
      var r = 0,
        i = "";
      (ci(o)
        ? ((r = o.getFormat()), (i = o.getStyle()))
        : Pr(o) && ((r = o.getTextFormat()), (i = o.getTextStyle())),
        (t.format === r && t.style === i) ||
          ((t.format = r), (t.style = i), (t.dirty = !0)));
    }
    function xf() {
      return _a()._selection;
    }
    function Sf() {
      return ya()._editorState._selection;
    }
    function Cf(t, e) {
      var n = e.__key;
      return t.anchor.key === n || t.focus.key === n;
    }
    function vf(t, e, n, o) {
      if (o === void 0) {
        o = 1;
      }
      if (Cf(t, e))
        for (var _r80 of [t.anchor, t.focus]) {
          _r80.key === e.__key &&
            ((n <= _r80.offset && o > 0) || (n < _r80.offset && o < 0)) &&
            _r80.set(e.__key, Math.max(0, _r80.offset + o), "element");
          var _t278 = _r80.getNode();
          if (Pr(_t278)) {
            var _e199 = _t278.getChildrenSize(),
              _n158 = _r80.offset >= _e199,
              _o98 = _t278.getChildAtIndex(_n158 ? _e199 - 1 : _r80.offset);
            ci(_o98) &&
              _r80.set(
                _o98.__key,
                _n158 ? _o98.getTextContentSize() : 0,
                "text",
              );
          }
        }
    }
    function Tf(t, e, n, o, r) {
      var i = o || r;
      if (ci(i) || Pr(i)) {
        var _e200 = ci(i);
        t.set(
          i.__key,
          null === o ? 0 : _e200 ? i.getTextContentSize() : i.getChildrenSize(),
          _e200 ? "text" : "element",
        );
      } else {
        var _o99 = e.getIndexWithinParent();
        t.set(n.__key, -1 === _o99 ? n.getChildrenSize() : _o99, "element");
      }
    }
    function Nf(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function bf(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function kf(t, e, n) {
      var o = js(t, e.getKey());
      if (Pr(e)) {
        var _r81 = Rl(e, o, t);
        return [_r81.element, n + _r81.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Of(t, e, n, o, r, i) {
      var s = i.getRootNode(),
        l = es(s) || fl(s) ? Nl(s) : null;
      if ((r.has(Fc) && l !== i) || (null !== l && Vi(l, l))) return;
      var c = xl(o, i);
      var a;
      if (!zu(e))
        return void (
          null !== t &&
          Yi(n, c.anchorNode, c.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _kf = kf(n, h, f.offset),
        p = _kf[0],
        _ = _kf[1],
        _kf2 = kf(n, g, d.offset),
        y = _kf2[0],
        m = _kf2[1],
        x = e.format,
        S = e.style,
        C = e.isCollapsed();
      var T = p,
        N = y,
        b = !1;
      if (
        ("text" === f.type
          ? ((T = ci(h) ? Kl(h, p, n) : null),
            (b = h.getFormat() !== x || h.getStyle() !== S))
          : zu(t) && "text" === t.anchor.type && (b = !0),
        "text" === d.type && (N = ci(g) ? Kl(g, y, n) : null),
        null === T || null === N)
      )
        return;
      var k = C && ci(g) && us(g) && ts(N) && N.nodeValue === v ? v.length : m;
      if (
        (C &&
          (null === t || b || (zu(t) && (t.format !== x || t.style !== S))) &&
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
          c.anchorNode === T &&
          c.focusNode === N)
      ) {
        if (null === l || !i.contains(l)) {
          var _t279 = null !== l ? qi(l) : null;
          (null !== _t279 && _t279 !== n) ||
            r.has(Kc) ||
            i.focus({ preventScroll: !0 });
        }
        if ("element" !== f.type) return;
      }
      if (
        (bf(o, T, _, N, k), u && e.isCollapsed() && null !== i && !r.has(Kc))
      ) {
        var _t280 = Tl(i);
        if (null === _t280 || !i.contains(_t280)) {
          var _t281 = Nl(i.ownerDocument),
            _e201 = null !== _t281 ? qi(_t281) : null;
          (null !== _e201 && _e201 !== n) || i.focus({ preventScroll: !0 });
        }
      }
      if (!r.has(Rc) && e.isCollapsed() && null !== i && i === Tl(i)) {
        var _t282 =
          zu(e) && "element" === e.anchor.type
            ? (function (t, e, n) {
                var o = e.childNodes[n];
                if (!kl(o)) return o || null;
                var r = gs(o, t),
                  i = void 0 !== r ? fs(r) : null;
                return null === i || Pr(i) ? o : Rl(i, o, t).element;
              })(n, T, _)
            : (void 0 === a && (a = ml(o, i)), a);
        if (null !== _t282) {
          var _e202;
          if (ts(_t282)) {
            var _n159 = _t282.ownerDocument.createRange();
            (_n159.selectNode(_t282), (_e202 = _n159.getBoundingClientRect()));
          } else
            _e202 = kl(_t282)
              ? _t282.getBoundingClientRect()
              : (function (t) {
                  var e = t.getBoundingClientRect(),
                    n = t.startContainer,
                    o = t.startOffset;
                  if (
                    !t.collapsed ||
                    0 !== e.width ||
                    0 !== e.height ||
                    !ts(n) ||
                    0 === n.length
                  )
                    return e;
                  var r = t.cloneRange();
                  return (
                    o > 0 ? r.setStart(n, o - 1) : r.setEnd(n, 1),
                    r.getBoundingClientRect()
                  );
                })(_t282);
          !(function (t, e, n, o) {
            if (o === void 0) {
              o = null;
            }
            var r = Hs(n),
              i = Xs(r);
            if (null === r || null === i) return;
            var s = n.getBoundingClientRect();
            if (e.bottom < s.top) return;
            if (null !== o && e.height > 0) {
              var _t283 = e.left,
                _r82 = e.right,
                _s29 = kl(o) ? o : Us(o);
              for (; null !== _s29 && n.contains(_s29); ) {
                var _e203 = Js(i, _s29, _t283, _r82);
                ((_t283 -= _e203),
                  (_r82 -= _e203),
                  (_s29 = _s29 === n ? null : Us(_s29)));
              }
            }
            var l = e.top,
              c = e.bottom,
              a = 0,
              u = 0,
              f = n;
            for (; null !== f; ) {
              var _e204 = f === r.body;
              if (_e204) {
                var _e205 = i.visualViewport;
                if (_e205) {
                  var _t284 = _e205.offsetTop;
                  ((a = _t284), (u = _t284 + _e205.height));
                } else ((a = 0), (u = Qs(t).innerHeight));
                var _n160 = i.getComputedStyle(r.documentElement),
                  _o100 = parseFloat(_n160.scrollPaddingTop),
                  _s30 = parseFloat(_n160.scrollPaddingBottom);
                (isFinite(_o100) && (a += _o100),
                  isFinite(_s30) && (u -= _s30));
              } else {
                var _t285 = f === n ? s : f.getBoundingClientRect();
                ((a = _t285.top), (u = _t285.bottom));
              }
              var _o101 = 0;
              if (
                (l < a ? (_o101 = -(a - l)) : c > u && (_o101 = c - u),
                0 !== _o101)
              )
                if (_e204) i.scrollBy(0, _o101);
                else {
                  var _t286 = f.scrollTop;
                  f.scrollTop += _o101;
                  var _e206 = f.scrollTop - _t286;
                  ((l -= _e206), (c -= _e206));
                }
              if (_e204) break;
              f = Us(f);
            }
          })(n, _e202, i, T);
        }
      }
      !(function (t, e, n, o, r) {
        var i = t._inputState;
        ((i.isSelectionChangeFromDOMUpdate = !0),
          (i.selectionChangeFromDOMUpdatePoints =
            void 0 !== e && void 0 !== n && void 0 !== o && void 0 !== r
              ? { anchorNode: e, anchorOffset: n, focusNode: o, focusOffset: r }
              : null));
      })(n, T, _, N, k);
    }
    function Ef(t, e) {
      for (var _n161 of t.split(/(\r?\n|\t)/))
        "\n" === _n161 || "\r\n" === _n161
          ? e.linebreak()
          : "\t" === _n161
            ? e.tab()
            : "" !== _n161 && e.text(_n161);
    }
    function wf(t) {
      var e = [];
      return (
        Ef(t, {
          linebreak: function linebreak() {
            return e.push(Uc());
          },
          tab: function tab() {
            return e.push(Li());
          },
          text: function text(t) {
            return e.push(li(t));
          },
        }),
        e
      );
    }
    function Mf(t) {
      var e = [];
      for (var _n162 of t)
        Hc(_n162) ||
          ((!Pr(_n162) && !Lr(_n162)) || _n162.isInline()
            ? e.push(_n162)
            : Pr(_n162) &&
              e.push.apply(e, Array.from(Mf(_n162.getChildren()))));
      return e;
    }
    function Af(t, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t;
      t.isCollapsed() || o.removeText();
      var r = xf();
      (zu(r) && (o = r), zu(o) || e(161));
      var i = o.anchor;
      var s = i.getNode(),
        l = i.offset;
      for (; !Il(s) && null === Jf(s); ) {
        var _Df;
        var _t287 = s;
        if (((_Df = Df(s, l, n)), (s = _Df[0]), (l = _Df[1]), _t287.is(s)))
          break;
      }
      return [s, l];
    }
    function Df(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t.getParent();
      if (!o) {
        var _t288 = Ii();
        return (xs().append(_t288), _t288.select(), [xs(), 0]);
      }
      if (ci(t)) {
        var _n163 = t.splitText(e);
        if (0 === _n163.length) return [o, t.getIndexWithinParent()];
        var _r83 = 0 === e ? 0 : 1;
        return [o, _n163[0].getIndexWithinParent() + _r83];
      }
      if (!Pr(t) || 0 === e) return [o, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _o102 = new _$u(
            Du(t.__key, e, "element"),
            Du(t.__key, e, "element"),
            0,
            "",
          ),
          _i54 = t.insertNewAfter(_o102);
        if (_i54)
          _i54.append.apply(_i54, [r].concat(Array.from(r.getNextSiblings())));
        else if (n) return [t, e];
      }
      return [o, t.getIndexWithinParent() + 1];
    }
    function If(t) {
      return Hc(t) || Zs(t) || ci(t) || t.isParentRequired();
    }
    function Pf(t) {
      var e = Ii();
      var n = null;
      for (var _o103 = 0; _o103 < t.length; _o103++) {
        var _r84 = t[_o103];
        if (If(_r84)) {
          if (null === n) {
            ((n = _r84.createParentElementNode()), e.append(n));
            var _i55 = t[_o103 + 1];
            if (Hc(_r84) && (void 0 === _i55 || !If(_i55))) continue;
          }
          n.append(_r84);
        } else (e.append(_r84), (n = null));
      }
      return e;
    }
    function Ff(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref90 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e207 = _ref90[0],
          _o104 = _ref90[1];
        return (_o104.set(_e207.key, _e207.offset, _e207.type), !0);
      }
      var i = ui(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === o,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === r,
        u = !1;
      if (!Ci(c)) {
        for (var _t289 of c) {
          a = !1;
          var _e208 = _t289.origin;
          if (Lr(_e208)) {
            if (_e208.isIsolated()) {
              u = !0;
              break;
            }
            if (((c = _t289), s && _e208.isInline())) continue;
          }
          break;
        }
        if (u) return !0;
        if (a)
          for (var _t290 of Rd(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Cd(_t290)) _t290.origin.isInline() || (c = _t290);
            else {
              if (Pr(_t290.origin)) continue;
              Lr(_t290.origin) && !_t290.origin.isInline() && (c = _t290);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && Lr(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t291 = gf();
        return (_t291.add(c.origin.getKey()), Cs(_t291), !0);
      }
      return ((c = Si(c)), l && fi(t.anchor, c), fi(t.focus, c), a || !s);
    }
    function Rf(t, e, n) {
      var o = null === e ? null : e.__key,
        r = null === n ? null : n.__key;
      (null === e ? (t.__first = r) : (e.__next = r),
        null === n ? (t.__last = o) : (n.__prev = o));
    }
    function Lf(t) {
      var e = ya();
      if (!e._recordNodeMoves) return;
      var n = e._editorState._nodeMap;
      if (n.has(t.__key)) {
        var _e209 = _a(),
          _o105 = _e209._movedNodes || (_e209._movedNodes = new WeakMap());
        var _r85 = _o105.get(n);
        (void 0 === _r85 && ((_r85 = new Set()), _o105.set(n, _r85)),
          _r85.add(t.__key));
      }
    }
    function Kf(t, e, n, o) {
      var r = e.__key;
      (null === n ? (t.__first = r) : (n.__next = r),
        null === o ? (t.__last = r) : (o.__prev = r),
        (e.__prev = null === n ? null : n.__key),
        (e.__next = null === o ? null : o.__key),
        (e.__parent = t.__key));
    }
    function Bf(t) {
      null !== Jf(t) && e(380, t.__key, String(Jf(t)));
      var n = t.getParent();
      if (null !== n) {
        var _e210 = n.getWritable();
        Lf(t);
        var _o106 = t.getPreviousSibling(),
          _r86 = t.getNextSibling();
        (Rf(_e210, _o106 && _o106.getWritable(), _r86 && _r86.getWritable()),
          (t.__prev = null),
          (t.__next = null),
          (t.__parent = null),
          _e210.__size--);
      }
    }
    function zf(t, e) {
      var n = e && t.getParent(),
        o = e && n && Cf(e, n) ? t.getIndexWithinParent() : -1,
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
        Bf(t),
        e && n && -1 !== o && vf(e, n, o, -1),
        e && (e._cachedIsBackward = null),
        r
      );
    }
    function $f(t, e, n, o) {
      ga();
      var r = "next" === e;
      il(t, n);
      var i = t.getWritable(),
        s = n.getWritable();
      t.getParentOrThrow();
      var l = xf(),
        c = o && zu(l) ? l : null,
        a = zf(s, c),
        u = t.getParentOrThrow().getWritable(),
        f =
          c && ((r && null !== a && a.length > 0) || Cf(c, u))
            ? t.getIndexWithinParent() + (r ? 1 : 0)
            : -1,
        d = r ? t.getNextSibling() : t.getPreviousSibling(),
        h = d && d.getWritable();
      if (
        (Kf(u, s, r ? i : h, r ? h : i),
        u.__size++,
        c && -1 !== f && (vf(c, u, f), r && null !== a))
      )
        for (var _t292 of a) _t292.set(u.__key, f + 1, "element");
      return n;
    }
    function Wf(t, e, n) {
      ga();
      var o = t.origin,
        r = t.direction,
        i = "next" === r,
        s = Yf(o);
      if (null !== s) return i ? s.selectNext(e, n) : s.selectPrevious(e, n);
      var l = t.getNodeAtCaret(),
        c = o.getParentOrThrow();
      if (null === l) return i ? c.select() : c.select(0, 0);
      if (Pr(l)) return i ? l.select(0, 0) : l.select();
      if (ci(l)) return l.select(e, n);
      var a = l.getIndexWithinParent() + (i ? 0 : 1);
      return c.select(a, a);
    }
    function jf(t, e) {
      var n = [];
      for (
        var _o107 = t;
        null !== _o107;
        _o107 =
          "next" === e ? _o107.getNextSibling() : _o107.getPreviousSibling()
      )
        n.push(_o107);
      return n;
    }
    var Uf = new Map();
    function Hf(t) {
      return Pr(t) || Lr(t);
    }
    function Vf(t) {
      return Pr(t) || Lr(t);
    }
    function Jf(t) {
      var e = t.getLatest();
      return Vf(e) ? e.__slotHost : null;
    }
    function Yf(t) {
      var n = Jf(t);
      if (null === n) return null;
      var o = fs(n);
      return (Pr(o) || Lr(o) || e(370), o);
    }
    function Gf(t) {
      var e = Yf(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref92 of Qf(e)) {
        var _t293 = _ref92[0];
        var _o108 = _ref92[1];
        if (_o108 === n) return _t293;
      }
      return null;
    }
    function qf(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== Jf(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function Xf(t) {
      var _t$getNodes$;
      if (null === t) return null;
      var e = zu(t)
        ? t.anchor.getNode()
        : (_t$getNodes$ = t.getNodes()[0]) != null
          ? _t$getNodes$
          : null;
      return null === e ? null : qf(e);
    }
    function Qf(t) {
      var e = t.getLatest();
      return Hf(e) && null !== e.__slots ? e.__slots : Uf;
    }
    function Zf(t) {
      return Array.from(Qf(t).keys());
    }
    function td(t, e) {
      var n = Qf(t).get(e);
      return void 0 === n ? null : fs(n);
    }
    var ed = ["__proto__", "constructor", "prototype"],
      nd = Symbol("slotMapOwner");
    function od(t) {
      var e = t.__slots;
      return (
        (null !== e && e[nd] === t) ||
          ((e = new Map(e)), (e[nd] = t), (t.__slots = e)),
        e
      );
    }
    var rd = new WeakMap(),
      id = [];
    function sd(t) {
      for (var _ref94 of bc(t)) {
        var _e211 = _ref94.ownNodeConfig;
        {
          var _t294 = _e211 && _e211.slots;
          if (_t294) return _t294;
        }
      }
      return id;
    }
    function ld(t) {
      var e = "";
      for (var _n164 of Qf(t).values()) {
        var _t295 = fs(_n164);
        null !== _t295 && (e += _t295.getTextContent());
      }
      return e;
    }
    function cd(t, e, n) {
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
    function ad(t, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        e(373, n);
      var r = t.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!Pr(o) && !Lr(o)) || o.isInline()) && e(374, o.__key);
      var i = t.getWritable(),
        s = od(i),
        l = s.get(n);
      void 0 !== l && ud(l);
      var c = o.getWritable(),
        a = Yf(c);
      if (null !== a) {
        var _t296 = Gf(c);
        (null !== _t296 && od(a.getWritable())["delete"](_t296),
          (c.__slotHost = null));
      }
      return (
        Bf(c),
        (c.__slotHost = i.__key),
        s.set(n, c.__key),
        (function (t) {
          var n = t.__slots;
          if (null === n || n.size < 2) return;
          var o = (function (t) {
            var n = rd.get(t);
            if (void 0 === n) {
              var _o109 = sd(t),
                _r87 = new Map();
              for (var _n165 of _o109)
                (ed.includes(_n165) && e(371, t.name, _n165),
                  _r87.has(_n165) && e(372, t.name, _n165),
                  _r87.set(_n165, _r87.size));
              ((n = _r87), rd.set(t, n));
            }
            return n;
          })(t.constructor);
          var r = null,
            i = !0;
          for (var _t297 of n.keys()) {
            if (null !== r && cd(r, _t297, o) > 0) {
              i = !1;
              break;
            }
            r = _t297;
          }
          if (i) return;
          var s = Array.from(n).sort(function (_ref95, _ref96) {
            var t = _ref95[0];
            var e = _ref96[0];
            return cd(t, e, o);
          });
          n.clear();
          for (var _ref98 of s) {
            var _t298 = _ref98[0];
            var _e212 = _ref98[1];
            n.set(_t298, _e212);
          }
        })(i),
        (ya()._slotsUsed = !0),
        (_a()._slotsUsed = !0),
        i
      );
    }
    function ud(t) {
      var n = fs(t);
      if (null === n) return;
      var o = n.getWritable();
      (Vf(o) || e(377, t), (o.__slotHost = null), o.remove());
    }
    var fd = { next: "previous", previous: "next" };
    var _dd4 = (function () {
      function dd(t) {
        this.origin = t;
      }
      var _proto20 = dd.prototype;
      _proto20[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return Bd({
            hasNext: Sd,
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
        return bd(this.getNodeAtCaret(), this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return bd(this.origin, this.direction);
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
          var _e213 = i.getAdjacentCaret();
          null !== _e213 && l.size < t;
          _e213 = _e213.getAdjacentCaret()
        ) {
          var _t299 = _e213.origin.getWritable();
          l.set(_t299.getKey(), _t299);
        }
        for (var _t300 of r) {
          if (l.size > 0) {
            var _n166 = i.getNodeAtCaret();
            if (_n166) {
              if (
                (l["delete"](_n166.getKey()),
                l["delete"](_t300.getKey()),
                _n166.is(_t300) || i.origin.is(_t300))
              );
              else {
                var _e214 = _t300.getParent();
                (_e214 && _e214.is(s) && _t300.remove(), _n166.replace(_t300));
              }
            } else null === _n166 && e(263, Array.from(l).join(" "));
          } else i.insert(_t300);
          i = bd(_t300, this.direction);
        }
        for (var _t301 of l.values()) _t301.remove();
        return this;
      };
      return dd;
    })();
    var _hd3 = (function (_dd) {
      function hd() {
        var _this6;
        for (
          var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
          _key0 < _len0;
          _key0++
        ) {
          args[_key0] = arguments[_key0];
        }
        return (
          ((_this6 = _dd.call.apply(_dd, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(hd, _dd);
      var _proto21 = hd.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : wd(t, this.direction);
      };
      _proto21.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return bd(_d(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        var t = pd(this.direction);
        return bd(this.getNodeAtCaret(), t) || wd(this.origin, t);
      };
      _proto21.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto21.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof hd &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return hd;
    })(_dd4);
    var gd = { root: zr, shadowRoot: nl };
    function pd(t) {
      return fd[t];
    }
    function _d(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || gd[e](t) ? null : null === Jf(t) ? t : null;
    }
    var _yd3 = (function (_dd2) {
      function yd() {
        var _this7;
        for (
          var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
          _key1 < _len1;
          _key1++
        ) {
          args[_key1] = arguments[_key1];
        }
        return (
          ((_this7 = _dd2.call.apply(_dd2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(yd, _dd2);
      var _proto22 = yd.prototype;
      _proto22.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : bd(t, this.direction);
      };
      _proto22.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto22.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto22.getChildCaret = function getChildCaret() {
        return Pr(this.origin) ? wd(this.origin, this.direction) : null;
      };
      _proto22.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return bd(_d(this.getParentAtCaret(), t), this.direction);
      };
      _proto22.getFlipped = function getFlipped() {
        var t = pd(this.direction);
        return (
          bd(this.getNodeAtCaret(), t) || wd(this.origin.getParentOrThrow(), t)
        );
      };
      _proto22.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof yd &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto22.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof yd || t instanceof _md3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return yd;
    })(_dd4);
    var _md3 = (function (_dd3) {
      function md(t, e) {
        var _this8;
        ((_this8 = _dd3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(md, _dd3);
      var _proto23 = md.prototype;
      _proto23.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : kd(t, this.direction, this.offset);
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
        return bd(_d(this.getParentAtCaret(), t), this.direction);
      };
      _proto23.getFlipped = function getFlipped() {
        return kd(this.origin, pd(this.direction), this.offset);
      };
      _proto23.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof md &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto23.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _yd3 || t instanceof md) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto23.getSiblingCaret = function getSiblingCaret() {
        return bd(this.origin, this.direction);
      };
      return md;
    })(_dd4);
    function xd(t) {
      return t instanceof _md3;
    }
    function Sd(t) {
      return t instanceof _yd3;
    }
    function Cd(t) {
      return t instanceof _hd3;
    }
    var vd = {
        next: (function (_md) {
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
              ((_this9 = _md.call.apply(_md, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _md);
          var _proto24 = _class.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_md3),
        previous: (function (_md2) {
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
              ((_this0 = _md2.call.apply(_md2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _md2);
          var _proto25 = _class3.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_md3),
      },
      Td = {
        next: (function (_yd) {
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
              ((_this1 = _yd.call.apply(_yd, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _yd);
          var _proto26 = _class5.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_yd3),
        previous: (function (_yd2) {
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
              ((_this10 = _yd2.call.apply(_yd2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _yd2);
          var _proto27 = _class7.prototype;
          _proto27.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto27.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_yd3),
      },
      Nd = {
        next: (function (_hd) {
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
              ((_this11 = _hd.call.apply(_hd, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _hd);
          var _proto28 = _class9.prototype;
          _proto28.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto28.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_hd3),
        previous: (function (_hd2) {
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
              ((_this12 = _hd2.call.apply(_hd2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _hd2);
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
        })(_hd3),
      };
    function bd(t, e) {
      return t ? new Td[e](t) : null;
    }
    function kd(t, e, n) {
      return t ? new vd[e](t, Od(t, n)) : null;
    }
    function Od(t, e, o) {
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
    function Ed(t, e) {
      return new _Id(t, e);
    }
    function wd(t, e) {
      return Pr(t) ? new Nd[e](t) : null;
    }
    function Md(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Ad(t) {
      return t && Md(t.getAdjacentCaret());
    }
    var _Dd = (function () {
      function Dd(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto30 = Dd.prototype;
      _proto30.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Dd(t, e, this.direction);
      };
      _proto30.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto30.getTextSlices = function getTextSlices() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return xd(t) && xd(e) && t.isSameNodeCaret(e)
          ? [Ed(t, e.offset - t.offset), null]
          : [xd(t) ? Pd(t, "anchor") : null, xd(e) ? Pd(e, "focus") : null];
      };
      _proto30.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = xd(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = xd(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : Ad(e) || e.getParentCaret(t);
          };
        return Bd({
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
      return Dd;
    })();
    var _Id = (function () {
      function Id(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto31 = Id.prototype;
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
          o = _this$getSliceIndices2[1],
          r = t.getTextContent();
        return kd(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return Id;
    })();
    function Pd(t, e) {
      var n = t.direction,
        o = t.origin;
      return Ed(t, Od(o, "focus" === e ? pd(n) : n) - t.offset);
    }
    function Fd(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function Rd(t) {
      return Kd(t, Fd(wd(xs(), pd(t.direction)), t.direction));
    }
    function Ld(t) {
      return Kd(t, t);
    }
    function Kd(t, n) {
      return (
        t.direction !== n.direction && e(265),
        new _Dd(t, n, t.direction)
      );
    }
    function Bd(t) {
      var _ref99;
      var e = t.initial,
        n = t.hasNext,
        o = t.step,
        r = t.map;
      var i = e;
      return (
        (_ref99 = {}),
        (_ref99[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref99.next = function next() {
          if (!n(i)) return { done: !0, value: void 0 };
          var t = { done: !1, value: r(i) };
          return ((i = o(i)), t);
        }),
        _ref99
      );
    }
    function zd(t, n) {
      var o = Vd(t.origin, n.origin);
      switch (
        (null === o && e(275, t.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same":
          return Wd(t, n);
        case "ancestor":
          return "child" === t.type ? -1 : 1;
        case "descendant":
          return "child" === n.type ? 1 : -1;
        case "branch":
          return jd(o);
      }
    }
    function $d(t) {
      return t.getParent() || Yf(t);
    }
    function Wd(t, e) {
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
    function jd(t) {
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
    function Ud(t, e) {
      return e.is(t);
    }
    function Hd(t) {
      return Pr(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Vd(t, n) {
      if (t.is(n)) return { commonAncestor: t, type: "same" };
      var o = new Map();
      for (
        var _Hd = Hd(t), _e215 = _Hd[0], _n167 = _Hd[1];
        _e215;
        _n167 = _e215, _e215 = _e215.getParent()
      )
        o.set(_e215, _n167);
      for (
        var _Hd2 = Hd(n), _r88 = _Hd2[0], _i56 = _Hd2[1];
        _r88;
        _i56 = _r88, _r88 = _r88.getParent()
      ) {
        var _s31 = o.get(_r88);
        if (void 0 !== _s31)
          return null === _s31
            ? (Ud(t, _r88) || e(276),
              { commonAncestor: _r88, type: "ancestor" })
            : null === _i56
              ? (Ud(n, _r88) || e(277),
                { commonAncestor: _r88, type: "descendant" })
              : (((Pr(_s31) || Ud(t, _s31)) &&
                  (Pr(_i56) || Ud(n, _i56)) &&
                  _r88.is(_s31.getParent()) &&
                  _r88.is(_i56.getParent())) ||
                  e(278),
                { a: _s31, b: _i56, commonAncestor: _r88, type: "branch" });
      }
      return null;
    }
    function Jd() {
      var e = [];
      for (
        var _len16 = arguments.length, t = new Array(_len16), _key16 = 0;
        _key16 < _len16;
        _key16++
      ) {
        t[_key16] = arguments[_key16];
      }
      for (var _n168 of t)
        if (_n168 && "string" == typeof _n168)
          for (var _ref101 of _n168.matchAll(/\S+/g)) {
            var _t302 = _ref101[0];
            e.push(_t302);
          }
      return e;
    }
    ((exports.$addUpdateTag = Ys),
      (exports.$applyNodeReplacement = rl),
      (exports.$assumeActiveEditor = function (t) {
        (null !== _a() && null === ra && (ra = t), ra !== t && n(378));
      }),
      (exports.$caretFromPoint = ui),
      (exports.$caretRangeFromSelection = gi),
      (exports.$cloneWithProperties = Wl),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Wl(t))[vo] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = zd),
      (exports.$copyNode = ol),
      (exports.$create = kc),
      (exports.$createChildrenArray = Ec),
      (exports.$createLineBreakNode = Uc),
      (exports.$createNodeSelection = gf),
      (exports.$createParagraphNode = Ii),
      (exports.$createPoint = Du),
      (exports.$createRangeSelection = hf),
      (exports.$createRangeSelectionFromDom = pf),
      (exports.$createTabNode = Li),
      (exports.$createTextNode = li),
      (exports.$exportNodeJSON = ee),
      (exports.$extendCaretToRange = Rd),
      (exports.$findMatchingParent = Oc),
      (exports.$flushSyncAfterUpdate = function () {
        var t = _a();
        (ga(), (t._flushSync = !0));
      }),
      (exports.$formatText = Hu),
      (exports.$fullReconcile = ma),
      (exports.$generateNodesFromRawText = wf),
      (exports.$getAdjacentChildCaret = Ad),
      (exports.$getAdjacentNode = zs),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = Ad(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = Ad(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = Fd),
      (exports.$getCaretRange = Kd),
      (exports.$getCaretRangeInDirection = vi),
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
          : [Vu(n), Vu(o)];
      }),
      (exports.$getChildCaret = wd),
      (exports.$getChildCaretAtIndex = Ti),
      (exports.$getChildCaretOrSelf = Md),
      (exports.$getCollapsedCaretRange = Ld),
      (exports.$getCommonAncestor = Vd),
      (exports.$getCommonAncestorResultBranchOrder = jd),
      (exports.$getDOMSlot = Rl),
      (exports.$getDOMTextNode = Kl),
      (exports.$getDocument = _l),
      (exports.$getEditor = Pl),
      (exports.$getEditorDOMRenderConfig = Fl),
      (exports.$getElementAndOffsetForPoint = kf),
      (exports.$getNearestNodeFromDOMNode = ps),
      (exports.$getNearestRootOrShadowRoot = tl),
      (exports.$getNodeByKey = fs),
      (exports.$getNodeByKeyOrThrow = sl),
      (exports.$getNodeFromDOMNode = ds),
      (exports.$getPreviousSelection = Sf),
      (exports.$getRoot = xs),
      (exports.$getSelection = xf),
      (exports.$getSelectionSlotFrame = Xf),
      (exports.$getSiblingCaret = bd),
      (exports.$getSlot = td),
      (exports.$getSlotFrame = qf),
      (exports.$getSlotHost = Yf),
      (exports.$getSlotNameWithinHost = Gf),
      (exports.$getSlotNames = Zf),
      (exports.$getState = cn),
      (exports.$getStateChange = function (t, e, n) {
        var o = cn(t, n, rn),
          r = cn(e, n, rn);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = xf();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Od),
      (exports.$getTextPointCaret = kd),
      (exports.$getTextPointCaretSlice = Ed),
      (exports.$getTextPointCaretSliceForNode = bi),
      (exports.$getWritableNodeState = gn),
      (exports.$hasAncestor = qs),
      (exports.$hasUpdateTag = function (t) {
        return ya()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = wi),
      (exports.$insertNodes = function (t) {
        var e = xf() || Sf();
        (null === e && (e = xs().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = ff),
      (exports.$isBlockFullySelected = Mi),
      (exports.$isChildCaret = Cd),
      (exports.$isCompactExport = te),
      (exports.$isDecoratorNode = Lr),
      (exports.$isEditorState = function (t) {
        return t instanceof _Ic;
      }),
      (exports.$isElementDOMSlot = Ll),
      (exports.$isElementNode = Pr),
      (exports.$isExtendableTextPointCaret = Ci),
      (exports.$isInlineElementOrDecoratorNode = Zs),
      (exports.$isInlineFormattable = Xr),
      (exports.$isLeafNode = function (t) {
        return ci(t) || Hc(t) || Lr(t);
      }),
      (exports.$isLexicalNode = ko),
      (exports.$isLineBreakNode = Hc),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _dd4;
      }),
      (exports.$isNodeSelection = Wu),
      (exports.$isParagraphNode = Pi),
      (exports.$isRangeSelection = zu),
      (exports.$isRootNode = zr),
      (exports.$isRootOrShadowRoot = nl),
      (exports.$isSelectionCapturedInDecoratorInput = Vi),
      (exports.$isShadowRootNode = el),
      (exports.$isSiblingCaret = Sd),
      (exports.$isSlotChild = Vf),
      (exports.$isSlotHost = Hf),
      (exports.$isTabNode = Ki),
      (exports.$isTextNode = ci),
      (exports.$isTextPointCaret = xd),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _Id;
      }),
      (exports.$isTokenOrSegmented = Zi),
      (exports.$isTokenOrTab = Qi),
      (exports.$markSlotEditable = Yl),
      (exports.$needsBlockCursorBeside = ll),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = _a();
        if (n._readOnly) {
          var _t303 = $l(n).get(e);
          return _t303 ? Array.from(_t303.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref103 of o) {
          var _n169 = _ref103[1];
          _n169 instanceof t &&
            _n169.__type === e &&
            _n169.isAttached() &&
            r.push(_n169);
        }
        return r;
      }),
      (exports.$normalizeCaret = Si),
      (exports.$normalizeSelection__EXPERIMENTAL = Mo),
      (exports.$onUpdate = Gs),
      (exports.$parseSerializedNode = function (t) {
        return Na(t, ya()._nodes);
      }),
      (exports.$removeFromParent = is),
      (exports.$removeSlot = function (t, e) {
        var n = t.getWritable();
        if (null === n.__slots) return n;
        var o = n.__slots.get(e);
        return (void 0 !== o && (ud(o), od(n)["delete"](e)), n);
      }),
      (exports.$removeTextFromCaretRange = mi),
      (exports.$rewindSiblingCaret = pi),
      (exports.$selectAll = function (t) {
        var e = xs();
        if (zu(t)) {
          var _e216 = t.anchor,
            _n170 = t.focus,
            _o110 = _e216.getNode();
          if (zr(_o110))
            return (
              _e216.set(_o110.getKey(), 0, "element"),
              _n170.set(_o110.getKey(), _o110.getChildrenSize(), "element"),
              Fs(t, _o110),
              t
            );
          var _r89 = _o110.getTopLevelElementOrThrow(),
            _i57 = _r89.getParent();
          return null === _i57
            ? (Pr(_r89) &&
                (_e216.set(_r89.getKey(), 0, "element"),
                _n170.set(_r89.getKey(), _r89.getChildrenSize(), "element"),
                Fs(t, _r89)),
              t)
            : (_e216.set(_i57.getKey(), 0, "element"),
              _n170.set(_i57.getKey(), _i57.getChildrenSize(), "element"),
              Fs(t, _i57),
              t);
        }
        {
          var _t304 = e.select(0, e.getChildrenSize());
          return (Cs(Fs(_t304, e)), _t304);
        }
      }),
      (exports.$setCompositionKey = cs),
      (exports.$setDirectionFromDOM = Ul),
      (exports.$setFormatFromDOM = Hl),
      (exports.$setPointFromCaret = fi),
      (exports.$setSelection = Cs),
      (exports.$setSelectionFromCaretRange = di),
      (exports.$setSlot = ad),
      (exports.$setState = an),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref105 of Object.entries(e)) {
          var _t305 = _ref105[0];
          var _o111 = _ref105[1];
          "boolean" == typeof _o111 && n.push([_t305, _o111]);
        }
        0 !== n.length &&
          Uu(t, function (t) {
            for (var _ref107 of n) {
              var _e217 = _ref107[0];
              var _o112 = _ref107[1];
              t = os(t, _e217, _o112 ? M[_e217] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = Ei),
      (exports.$splitNode = function (t, n) {
        var o = t.getChildAtIndex(n);
        (null == o && (o = t), nl(t) && e(102));
        var _r92 = function r(t) {
            var n = t.getParentOrThrow(),
              i = nl(n),
              s = t !== o || i ? ol(t) : t;
            if (i)
              return ((Pr(t) && Pr(s)) || e(133), t.insertAfter(s), [t, s, s]);
            {
              var _r91 = _r92(n),
                _e218 = _r91[0],
                _o113 = _r91[1],
                _i58 = _r91[2],
                _l24 = t.getNextSiblings();
              return (
                _i58.append.apply(_i58, [s].concat(Array.from(_l24))),
                [_e218, _o113, s]
              );
            }
          },
          _r90 = _r92(o),
          i = _r90[0],
          s = _r90[1];
        return [i, s];
      }),
      (exports.$splitTextPointCaretSlice = ki),
      (exports.$updateDOMSelection = Of),
      (exports.$updateRangeSelectionFromCaretRange = hi),
      (exports.$withCompactExport = Zt),
      (exports.ArtificialNode__DO_NOT_USE = _$c),
      (exports.BEFORE_INPUT_COMMAND = H),
      (exports.BLUR_COMMAND = Rt),
      (exports.CAN_REDO_COMMAND = It),
      (exports.CAN_UNDO_COMMAND = Pt),
      (exports.CAN_USE_BEFORE_INPUT = d),
      (exports.CAN_USE_DOM = r),
      (exports.CLEAR_EDITOR_COMMAND = At),
      (exports.CLEAR_HISTORY_COMMAND = Dt),
      (exports.CLICK_COMMAND = U),
      (exports.COLLABORATION_TAG = Fc),
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
      (exports.COMPOSITION_END_TAG = zc),
      (exports.COMPOSITION_START_COMMAND = J),
      (exports.COMPOSITION_START_TAG = Bc),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Q),
      (exports.CONTROL_OR_ALT = zt),
      (exports.CONTROL_OR_META = Bt),
      (exports.CONTROL_OR_OTHER_KEY = K),
      (exports.COPY_COMMAND = Et),
      (exports.CUT_COMMAND = wt),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Qc),
      (exports.DELETE_CHARACTER_COMMAND = G),
      (exports.DELETE_LINE_COMMAND = nt),
      (exports.DELETE_WORD_COMMAND = et),
      (exports.DRAGEND_COMMAND = Ot),
      (exports.DRAGOVER_COMMAND = kt),
      (exports.DRAGSTART_COMMAND = bt),
      (exports.DROP_COMMAND = Tt),
      (exports.DecoratorNode = _Rr),
      (exports.ElementNode = _Ir4),
      (exports.FOCUS_COMMAND = Ft),
      (exports.FORMAT_ELEMENT_COMMAND = Nt),
      (exports.FORMAT_TEXT_COMMAND = ot),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = Pc),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Ct),
      (exports.INPUT_COMMAND = V),
      (exports.INSERT_LINE_BREAK_COMMAND = q),
      (exports.INSERT_PARAGRAPH_COMMAND = X),
      (exports.INSERT_TAB_COMMAND = St),
      (exports.INTERNAL_$expandSelectionToWholeDocument = Ju),
      (exports.INTERNAL_$isBlock = Il),
      (exports.INTERNAL_$normalizeNodeStructure = function (t) {
        if (!Pr(t) || !t.isAttached()) return;
        var e = new _er();
        e.full = !0;
        var n = t.getParent();
        Nr(e, function () {
          if (null === n || nl(t)) return void yr(t, e);
          var o = n.getKey();
          (e.touched.add(t.getKey()), yr(t, e));
          for (var _t306 of Array.from(e.touched)) {
            var _n171 = fs(_t306);
            null !== _n171 && _n171.getLatest().__parent === o && sr(_n171, e);
          }
        });
      }),
      (exports.INTERNAL_isNodeStructureEnforced = kr),
      (exports.INTERNAL_registerNodeStructure = function (t) {
        var e = br || (br = new WeakMap());
        var n = e.get(t);
        if (void 0 === n) {
          var _o114 = [],
            _r93 = new Set(),
            _i59 = function _i59(t) {
              var e = t.__key;
              (_o114.push(e), _r93.add(e));
            },
            _s32 = new WeakSet([t.getEditorState()]);
          var _l25 = !0;
          var _c15 = function _c15() {
              var t = _l25;
              ((_l25 = !1),
                (function (t, e, n) {
                  var o = xs();
                  if (0 === t.length && !e && !Tr(o)) return;
                  var r = new _er();
                  r.full = e;
                  var i = o.getKey();
                  (r.wrapsAll.add(i), r.path.add(i));
                  var s = n ? Pl().getEditorState()._nodeMap : null,
                    l = [];
                  for (var _n172 of e ? [] : t) {
                    l.length = 0;
                    var _t307 = !1;
                    var _e219 = fs(_n172);
                    if (
                      (Pr(_e219) &&
                        _e219.isShadowRoot() &&
                        r.wrapsAll.add(_n172),
                      null === s || null === _e219 || !Cr(_e219, s.get(_n172)))
                    ) {
                      for (
                        var _n173 = _e219;
                        null !== _n173;
                        _n173 = _n173.getParent()
                      ) {
                        if (r.path.has(_n173.getKey())) {
                          _t307 = !0;
                          break;
                        }
                        l.push(_n173);
                      }
                      if (_t307) for (var _t308 of l) r.addPath(_t308);
                    }
                  }
                  ((t.length = 0),
                    (r.path.size > 1 || e || Tr(o)) &&
                      Nr(r, function () {
                        yr(o, r);
                      }));
                })(_o114, t, !_s32.has(Pl().getEditorState())));
            },
            _a15 = t.registerUpdateListener(function (_ref108) {
              var t = _ref108.editorState,
                e = _ref108.dirtyElements,
                n = _ref108.dirtyLeaves;
              var o = t._nodeMap,
                i = function i(t) {
                  return !_r93.has(t) && o.has(t);
                };
              var l = !0;
              for (var _ref110 of e) {
                var _t309 = _ref110[0];
                var _n174 = _ref110[1];
                if (_n174 && "root" !== _t309 && i(_t309)) {
                  l = !1;
                  break;
                }
              }
              if (l)
                for (var _t310 of n)
                  if (i(_t310)) {
                    l = !1;
                    break;
                  }
              (_r93.clear(), l || _s32.add(t));
            }),
            _u12 = [],
            _f12 = [];
          for (var _ref112 of t._nodes) {
            var _e220 = _ref112[0];
            var _ref111$ = _ref112[1];
            var _n175 = _ref111$.klass;
            var _o115 = _ref111$.transforms;
            {
              var _t311 = "root" === _e220 ? _c15 : _i59;
              (_o115.add(_t311),
                _u12.push([_o115, _t311]),
                (_n175.prototype instanceof _Ir4 ||
                  _n175.prototype instanceof _Rr) &&
                  _f12.push(_e220));
            }
          }
          ((n = {
            dispose: function dispose() {
              _a15();
              for (var _ref114 of _u12) {
                var _t312 = _ref114[0];
                var _e221 = _ref114[1];
                _t312["delete"](_e221);
              }
            },
            refs: 0,
          }),
            e.set(t, n),
            ms(t, _f12));
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
      (exports.LineBreakNode = _Wc),
      (exports.MOVE_TO_END = at),
      (exports.MOVE_TO_START = ft),
      (exports.NODE_STATE_DIRECT = rn),
      (exports.NODE_STATE_KEY = L),
      (exports.NODE_STATE_LATEST = sn),
      (exports.OUTDENT_CONTENT_COMMAND = vt),
      (exports.PASTE_COMMAND = Z),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Ai),
      (exports.REDO_COMMAND = st),
      (exports.REMOVE_TEXT_COMMAND = tt),
      (exports.RootNode = _Br),
      (exports.SELECTION_CHANGE_COMMAND = W),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = j),
      (exports.SELECT_ALL_COMMAND = Mt),
      (exports.SET_TEXT_FORMAT_COMMAND = rt),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = Lc),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = Rc),
      (exports.SKIP_SELECTION_FOCUS_TAG = Kc),
      (exports.TEXT_TYPE_TO_FORMAT = M),
      (exports.TabNode = _Ri),
      (exports.TextNode = _Qr2),
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
        var n = Jd.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, Array.from(n));
      }),
      (exports.aliasTableOf = Oe),
      (exports.aliasedValue = Ze),
      (exports.arraySetValue = function (t) {
        return Ae(
          function (e) {
            if (!Array.isArray(e)) return Object.freeze([]);
            if (
              Object.isFrozen(e) &&
              (function (t, e) {
                for (var _n176 = 0; _n176 < e.length; _n176++) {
                  var _o116 = e[_n176];
                  if (
                    "string" != typeof _o116 ||
                    (_n176 > 0 && !(e[_n176 - 1] < _o116)) ||
                    !Be(t, _o116) ||
                    t(_o116) !== _o116
                  )
                    return !1;
                }
                return !0;
              })(t, e)
            )
              return e;
            var n = [];
            for (var _o117 = 0; _o117 < e.length; _o117++) {
              var _r94 = e[_o117];
              void 0 !== _r94 && Be(t, _r94) && n.push(t(_r94));
            }
            n.sort();
            var o = [];
            for (var _t313 = 0; _t313 < n.length; _t313++)
              (0 !== _t313 && n[_t313] === n[_t313 - 1]) || o.push(n[_t313]);
            return Object.freeze(o);
          },
          { item: t, kind: "set" },
          void 0,
          tn,
          function (t) {
            return Array.isArray(t);
          },
        );
      }),
      (exports.arrayValue = function (t) {
        return Ae(
          function (e) {
            if (!Array.isArray(e)) return [];
            var n = new Array(e.length);
            for (var _o118 = 0; _o118 < e.length; _o118++)
              n[_o118] = t(e[_o118]);
            return n;
          },
          { item: t, kind: "array" },
          void 0,
          function (e, n) {
            if (!Array.isArray(e) || !Array.isArray(n) || e.length !== n.length)
              return !1;
            for (var _o119 = 0; _o119 < e.length; _o119++)
              if (!ve(t, e[_o119], n[_o119])) return !1;
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
          o = Sa(),
          r = n.theme || {},
          i = void 0 === t ? o : n.parentEditor || null,
          s = n.disableEvents || !1,
          l = Ac(),
          c = n.namespace || (null !== i ? i._config.namespace : Os()),
          a = n.editorState,
          u = [_Br, _Qr2, _Wc, _Ri, _Ai, _$c].concat(Array.from(n.nodes || [])),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var p;
        if (void 0 === t && null !== o) p = o._nodes;
        else {
          p = new Map();
          for (var _t314 = 0; _t314 < u.length; _t314++) {
            var _o120 = u[_t314],
              _r95 = null,
              _i60 = null;
            if (_o120 && "object" == typeof _o120) {
              var _t315 = _o120;
              ((_o120 = _t315.replace),
                (_r95 = _t315["with"]),
                (_i60 = _t315.withKlass || null));
            }
            if (
              "function" != typeof _o120 ||
              !_o120.prototype ||
              !(_o120 === _bo5 || _o120.prototype instanceof _bo5)
            ) {
              var _r96 = "<unknown>";
              try {
                _r96 = JSON.parse(Jt);
              } catch (_unused2) {}
              e(
                365,
                String(_t314 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o120
                  ? "" +
                      _o120.name +
                      ("function" == typeof _o120.getType
                        ? " (type " + String(_o120.getType()) + ")"
                        : "")
                  : String(_o120),
                String(_r96),
              );
            }
            yc(_o120);
            var _s33 = _o120.getType(),
              _l26 = Xc(_o120);
            p.set(_s33, {
              exportDOM: h && h["export"] ? h["export"].get(_o120) : void 0,
              klass: _o120,
              replace: _r95,
              replaceWithKlass: _i60,
              sharedNodeState: fn(u[_t314]),
              transforms: _l26,
            });
          }
        }
        var _ = new _ea(
          l,
          i,
          p,
          {
            disableEvents: s,
            dom: babelHelpers["extends"]({}, Qc, t && t.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || Gc,
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
            (t.registerCommand(H, lu, 0),
              t.registerCommand(V, au, 0),
              t.registerCommand(J, fu, 0),
              t.registerCommand(Y, du, 0),
              t.registerCommand(lt, Tu, 0));
          })(_),
          _
        );
      }),
      (exports.createRefCountedRegistry = Ht),
      (exports.createSharedNodeState = fn),
      (exports.createState = function (t, e) {
        return new ln(t, e);
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
      (exports.findAllLexicalElementsDeep = gl),
      (exports.flipDirection = pd),
      (exports.getActiveElement = Tl),
      (exports.getActiveElementDeep = Nl),
      (exports.getComposedEventTarget = bl),
      (exports.getComposedSchemaFields = cc),
      (exports.getComposedStaticRange = yl),
      (exports.getDOMOwnerDocument = Hs),
      (exports.getDOMSelection = al),
      (exports.getDOMSelectionFromTarget = ul),
      (exports.getDOMSelectionPoints = xl),
      (exports.getDOMSelectionRange = ml),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _Sl;
        var n = yl(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_Sl = Sl(n)) != null
            ? _Sl
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: Cl(n, vl(t)), range: o };
      }),
      (exports.getDOMShadowRoots = hl),
      (exports.getDOMTextNode = ns),
      (exports.getDeclaredNodeStructure = function (t) {
        var _Uo = Uo(t),
          e = _Uo.derivedNames,
          n = babelHelpers.objectWithoutPropertiesLoose(_Uo, _excluded);
        return Object.freeze(
          babelHelpers["extends"]({}, n, { derived: new Set(e) }),
        );
      }),
      (exports.getDeclaredSlots = sd),
      (exports.getEditorPropertyFromDOMNode = Xi),
      (exports.getNearestEditorFromDOMNode = qi),
      (exports.getParentElement = Us),
      (exports.getRegisteredNode = Ui),
      (exports.getRegisteredNodeOrThrow = ji),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o121 of t) {
          var _yc2 = yc(_o121),
            _t316 = _yc2.ownNodeType;
          _t316 && (n.set(_t316, _o121), e.set(_t316, new Set()));
        }
        for (var _ref116 of n) {
          var _t317 = _ref116[0];
          var _o122 = _ref116[1];
          for (var _ref118 of bc(_o122)) {
            var _n177 = _ref118.ownNodeType;
            {
              var _o123 = _n177 && e.get(_n177);
              _o123 && _o123.add(_t317);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = pl),
      (exports.getStaticNodeConfig = yc),
      (exports.getStyleObjectFromCSS = $r),
      (exports.getTextDirection = function (t) {
        return E.test(t) ? "rtl" : w.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Xc),
      (exports.getterTableOf = be),
      (exports.isBlockDomNode = Dl),
      (exports.isCurrentlyReadOnlyMode = ha),
      (exports.isDOMCapturingSelection = Gl),
      (exports.isDOMDocumentNode = es),
      (exports.isDOMNode = Ol),
      (exports.isDOMShadowRoot = fl),
      (exports.isDOMTextNode = ts),
      (exports.isDOMUnmanaged = Jl),
      (exports.isDocumentFragment = El),
      (exports.isExactShortcutMatch = function (t, e, n) {
        if (!Is(t, n)) return !1;
        if (t.key.toLowerCase() === e.toLowerCase()) return !0;
        if (e.length > 1) return !1;
        if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
        if (t.code.startsWith("Digit") && /^\d$/.test(e))
          return t.code === "Digit" + e;
        var o = "Key" + e.toUpperCase();
        return t.code === o;
      }),
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
      (exports.isInlineDomNode = Ml),
      (exports.isLastChildInBlockNode = Jc),
      (exports.isLexicalEditor = Gi),
      (exports.isModifierMatch = Is),
      (exports.isOnlyChildInBlockNode = Vc),
      (exports.isSchemaField = Ne),
      (exports.isSelectionCapturedInDecoratorInput = Ji),
      (exports.isSelectionWithinEditor = Yi),
      (exports.iterStaticNodeConfigChain = bc),
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
      (exports.makeStepwiseIterator = Bd),
      (exports.mergeRegister = Pa),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = fs(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Pl();
                }
                var o = td(t, e);
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
      (exports.normalizeClassNames = Jd),
      (exports.nullable = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e222 = e,
          n = _e222.defaultAsNull;
        return Ae(
          function (e) {
            if (null == e) return null;
            var o = t(e);
            return n && Te(t, o) ? null : o;
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
              for (var _t318 = 0; _t318 < n.length; _t318++) {
                var _n$_t = n[_t318],
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
                He(t) &&
                He(o) &&
                !Ve(t, e) &&
                !Ve(o, e) &&
                n.every(function (_ref119) {
                  var e = _ref119[0],
                    n = _ref119[1];
                  return ve(n, t[e], o[e]);
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
        var _e223 = e,
          n = _e223.omitDefault;
        return Ae(
          function (e) {
            if (void 0 === e) return;
            var o = t(e);
            return n && Te(t, o) ? void 0 : o;
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
      (exports.registerEventListener = Fa),
      (exports.registerEventListeners = Ra),
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
        var n = Jd.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(
            _t$classList3,
            Array.from(n),
          );
      }),
      (exports.removeFromParent = ss),
      (exports.resetRandomKey = function () {
        Wi = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = jr),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n178 in e) {
          var _o124 = e[_n178];
          null == _o124 ? t.removeProperty(_n178) : Wr(t, _n178, _o124);
        }
      }),
      (exports.setDOMUnmanaged = Vl),
      (exports.setNodeIndentFromDOM = jl),
      (exports.setterDefaultOf = Ee),
      (exports.setterTableOf = ke),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n179 in e)
          if (t[_n179] !== e[_n179]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = Eu),
      (exports.stringValue = Je),
      (exports.toggleTextFormatType = os),
      (exports.tokenizeRawText = Ef),
      (exports.transformValue = function (t, e, n) {
        if (n === void 0) {
          n = {};
        }
        return Ae(
          function (n) {
            return e(t(n));
          },
          { inner: t, kind: "transform" },
          Fe(e(t.defaultValue)),
          n.isEqual,
          function (e) {
            return Be(t, e);
          },
        );
      }),
      (exports.unionValue = function (t) {
        var n =
          0 !== (arguments.length <= 1 ? 0 : arguments.length - 1)
            ? Fe(arguments.length <= 1 ? undefined : arguments[1])
            : t[0].defaultValue;
        return Ae(
          function (e) {
            if (void 0 === e) return n;
            var o = (function (e) {
              var n = (function (t, e) {
                return je(t, e).member;
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
      (exports.withAccessors = nn),
      (exports.withField = en));
  },
  null,
);
