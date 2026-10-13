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

    function z(t) {
      return function () {};
    }
    function $(t) {
      return { type: t };
    }
    var W = $("SELECTION_CHANGE_COMMAND"),
      U = $("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      j = $("CLICK_COMMAND"),
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
      mt = $("KEY_ESCAPE_COMMAND"),
      yt = $("KEY_DELETE_COMMAND"),
      xt = $("KEY_TAB_COMMAND"),
      St = $("INSERT_TAB_COMMAND"),
      Ct = $("INDENT_CONTENT_COMMAND"),
      Tt = $("OUTDENT_CONTENT_COMMAND"),
      vt = $("DROP_COMMAND"),
      Nt = $("FORMAT_ELEMENT_COMMAND"),
      bt = $("DRAGSTART_COMMAND"),
      kt = $("DRAGOVER_COMMAND"),
      Et = $("DRAGEND_COMMAND"),
      Ot = $("COPY_COMMAND"),
      Mt = $("CUT_COMMAND"),
      wt = $("SELECT_ALL_COMMAND"),
      At = $("CLEAR_EDITOR_COMMAND"),
      Dt = $("CLEAR_HISTORY_COMMAND"),
      It = $("CAN_REDO_COMMAND"),
      Ft = $("CAN_UNDO_COMMAND"),
      Pt = $("FOCUS_COMMAND"),
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
        Ho(t) && !Array.isArray(n.children) && e(59, o.name),
        n
      );
    }
    function ne() {
      return Us()._blockCursorElement;
    }
    function oe(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var re = x || g || _;
    function ie() {
      var t = bs().createElement("img");
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
        var t = this.getManagedLineBreak();
        if (t) {
          var _e9 = this.element,
            _n0 = "IMG" === t.nodeName ? t.nextSibling : null;
          (_n0 && _e9.removeChild(_n0),
            _e9.removeChild(t),
            (_e9.__lexicalLineBreak = void 0));
        }
      };
      _proto5.insertManagedLineBreak = function insertManagedLineBreak(t) {
        var e = this.getManagedLineBreak();
        if (e) {
          if (t === ("IMG" === e.nodeName)) return;
          this.removeManagedLineBreak();
        }
        var n = this.element,
          o = this.before || this.getDecoratorBoundaryAnchor("trailing"),
          r = bs().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(r, o),
          t)
        ) {
          var _t1 = bs().createElement("img");
          (_t1.setAttribute("data-lexical-managed-linebreak", "true"),
            _t1.style.setProperty("display", "inline", "important"),
            _t1.style.setProperty("border", "0px", "important"),
            _t1.style.setProperty("margin", "0px", "important"),
            (_t1.alt = ""),
            n.insertBefore(_t1, r),
            (n.__lexicalLineBreak = _t1));
        } else n.__lexicalLineBreak = r;
      };
      _proto5.getFirstChildOffset = function getFirstChildOffset() {
        var t = this.getFirstChild(),
          e = this.getInsertionAnchor();
        var n = 0;
        for (
          var _o4 = this.element.firstChild;
          null !== _o4 && _o4 !== t && _o4 !== e;
          _o4 = _o4.nextSibling
        )
          n++;
        return n;
      };
      _proto5.resolveChildIndex = function resolveChildIndex(t, e, n, o) {
        if (n === this.element) {
          var _e0 = this.getFirstChildOffset(),
            _n1 = ne(),
            _r3 = this.element.childNodes,
            _i3 = Math.min(o, _r3.length);
          var _s2 = 0;
          for (var _t10 = _e0; _t10 < _i3; _t10++) _r3[_t10] !== _n1 && _s2++;
          return [t, Math.min(_s2, t.getChildrenSize())];
        }
        var r = ue(e, n);
        r.push(o);
        var i = ue(e, this.element);
        var s = t.getIndexWithinParent();
        for (var _t11 = 0; _t11 < i.length; _t11++) {
          var _e1 = r[_t11],
            _n10 = i[_t11];
          if (void 0 === _e1 || _e1 < _n10) break;
          if (_e1 > _n10) {
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
    function he(t) {
      de = t.timeStamp;
    }
    function ge(t, e, n) {
      var o = "BR" === t.nodeName,
        r = e.__lexicalLineBreak;
      return (
        (r && (t === r || (o && t.previousSibling === r))) ||
        (o && void 0 !== Ni(t, n))
      );
    }
    function pe(t, e, n) {
      var o = ys(ls(n)),
        r = o && Os(o, n._rootElement);
      var i = null,
        s = null;
      null !== r &&
        r.anchorNode === t &&
        ((i = r.anchorOffset), (s = r.focusOffset));
      var l = t.nodeValue;
      null !== l && Bi(e, l, i, s, !1);
    }
    function _e(t, e, n) {
      if (Ba(t)) {
        var _e11 = t.anchor.getNode();
        if (_e11.is(n) && t.format !== _e11.getFormat()) return !1;
      }
      return fi(e) && n.isAttached();
    }
    function me(t, e, n) {
      for (var _o5 = t; _o5 && !nl(_o5); _o5 = Zi(_o5)) {
        var _t13 = Ni(_o5, e);
        if (void 0 !== _t13) {
          var _e12 = Ci(_t13, n);
          if (_e12) return Jo(_e12) || !Ps(_o5) ? void 0 : [_o5, _e12];
        }
      }
    }
    function ye(t, e, n) {
      fe = !0;
      var o = performance.now() - de > 100;
      try {
        Kc(t, function () {
          var r =
              hu() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = hu();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            i = new Map(),
            s = t._editorState,
            l = t._blockCursorElement;
          var c = !1,
            a = "";
          for (var _n11 = 0; _n11 < e.length; _n11++) {
            var _f2 = e[_n11],
              _d = _f2.type,
              _h = _f2.target,
              _g = me(_h, t, s);
            if (!_g) continue;
            var _p = _g[0],
              _2 = _g[1];
            if ("characterData" === _d)
              o && xr(_2) && fi(_h) && _e(r, _h, _2) && pe(_h, _2, t);
            else if ("childList" === _d) {
              c = !0;
              var _e13 = _f2.addedNodes;
              for (var _n12 = 0; _n12 < _e13.length; _n12++) {
                var _o6 = _e13[_n12],
                  _r4 = Ti(_o6),
                  _i4 = _o6.parentNode;
                if (
                  !(
                    null == _i4 ||
                    _o6 === l ||
                    null !== _r4 ||
                    ge(_o6, _i4, t) ||
                    se(_o6) ||
                    (t._slotsUsed &&
                      Ps(_o6) &&
                      _o6.hasAttribute("data-lexical-slot")) ||
                    nl(_o6)
                  )
                ) {
                  if (u) {
                    var _t14 =
                      (Ps(_o6) ? _o6.innerText : null) || _o6.nodeValue;
                    _t14 && (a += _t14);
                  }
                  _i4.removeChild(_o6);
                }
              }
              var _n13 = _f2.removedNodes,
                _o7 = _n13.length;
              if (_o7 > 0) {
                var _e14 = 0;
                for (var _r5 = 0; _r5 < _o7; _r5++) {
                  var _o8 = _n13[_r5];
                  ge(_o8, _h, t) || l === _o8
                    ? (_h.appendChild(_o8), _e14++)
                    : se(_o8) && _e14++;
                }
                _o7 !== _e14 && i.set(_p, _2);
              }
            }
          }
          if (i.size > 0)
            for (var _ref10 of i) {
              var _e15 = _ref10[0];
              var _n14 = _ref10[1];
              _n14.reconcileObservedMutation(_e15, t);
            }
          var f = n.takeRecords();
          if (f.length > 0) {
            for (var _e16 = 0; _e16 < f.length; _e16++) {
              var _n15 = f[_e16],
                _o9 = _n15.addedNodes,
                _r6 = _n15.target;
              for (var _e17 = 0; _e17 < _o9.length; _e17++) {
                var _n16 = _o9[_e17],
                  _i5 = _n16.parentNode;
                null == _i5 ||
                  "BR" !== _n16.nodeName ||
                  ge(_n16, _r6, t) ||
                  _i5.removeChild(_n16);
              }
            }
            n.takeRecords();
          }
          null !== r && (c && wi(r), u && qi(t) && r.insertRawText(a));
        });
      } finally {
        fe = !1;
      }
    }
    function xe(t) {
      var e = t._observer;
      null !== e && ye(t, e.takeRecords(), e);
    }
    function Se(t) {
      (!(function (t) {
        0 === de && ls(t).addEventListener("textInput", he, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          ye(t, e, n);
        })));
    }
    function Ce(t, e, n) {
      var o = t.isEqual;
      return e === n || (void 0 !== o && o(e, n));
    }
    function Te(t, e) {
      return Ce(t, e, t.defaultValue);
    }
    function ve(t) {
      return "object" == typeof t && null !== t;
    }
    function Ne(t, n) {
      var o = Me(t, n).getter;
      return (
        (ve(o) && void 0 !== o.getterTable) || e(405, n),
        Oe(o.getterTable)
      );
    }
    function be(t, n) {
      var o = Me(t, n).setter;
      return (
        (ve(o) && void 0 !== o.setterTable) || e(406, n),
        Oe(o.setterTable)
      );
    }
    function ke(t, n, o) {
      var _Me = Me(t, n),
        r = _Me.meta;
      for (var _t15 = 0; ; )
        if ("aliased" === r.kind) {
          if (_t15 === o) return Oe(r.aliases);
          (_t15++, (r = r.inner.meta));
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
      (ve(r) && void 0 !== r.setterTable) || e(408, n);
      var i = String(o.defaultValue);
      return (Ue(r.setterTable, i) || e(409, n, i), r.setterTable[i]);
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
        i && Pe(s),
        Object.assign(t, { accepts: r, defaultValue: s, isEqual: o, meta: e })
      );
    }
    var Ae = new WeakSet();
    function De(t) {
      var e = t.accepts;
      return void 0 === e || Ae.has(e) ? void 0 : e;
    }
    var Ie = new WeakSet();
    function Fe(t) {
      return (null !== t && "object" == typeof t && Ie.add(t), t);
    }
    function Pe(t) {
      if (
        null !== t &&
        "object" == typeof t &&
        !Object.isFrozen(t) &&
        !Ie.has(t)
      ) {
        Object.freeze(t);
        for (var _e18 of Object.values(t)) Pe(_e18);
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
              return Te(t, o) && e !== t.defaultValue ? void 0 : { parsed: o };
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
            var _t16 = 1;
            for (var _o0 = 0; _o0 < n.length; _o0++)
              if (void 0 !== n[_o0]) {
                var _r7 = $e(e.item, n[_o0]);
                _r7 > _t16 && (_t16 = _r7);
              }
            return _t16 >= 3 ? 3 : _t16;
          }
          case "object": {
            var _t17 = e.fields;
            if (!je(n)) return 4;
            if (null == _t17) return 1;
            if (!o && He(n, _t17)) return 4;
            var _r8 = 1;
            for (var _e19 of Object.keys(n))
              if (Ue(_t17, _e19)) {
                var _o1 = $e(_t17[_e19], n[_e19]);
                _o1 > _r8 && (_r8 = _o1);
              }
            return _r8 >= 3 ? 3 : _r8;
          }
          case "union":
            return null == e.members ? 1 : We(e.members, n).fit;
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
      for (var _i6 = 0; _i6 < t.length; _i6++) {
        var _s3 = t[_i6],
          _l2 = $e(_s3, e),
          _c2 = _l2 < 3 && ze(_s3) ? 3 : _l2;
        if (_c2 < o && ((n = _s3), (o = _c2), (r = _l2), 1 === _c2)) break;
      }
      return { fit: r, member: n };
    }
    function Ue(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    function je(t) {
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
      for (var _n17 of Object.keys(t)) if (!Ue(e, _n17)) return !0;
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
      var _e20 = e,
        n = _e20.integer,
        o = _e20.clamp,
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
      var n = Fe(
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
        for (var _n18 = 0; _n18 < t.length; _n18++)
          if (!qe(t[_n18], e[_n18])) return !1;
        return !0;
      }
      if (!je(t) || !je(e)) return !1;
      var n = Object.keys(t);
      return (
        n.length === Object.keys(e).length &&
        n.every(function (n) {
          return Ue(e, n) && qe(t[n], e[n]);
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
        return "string" == typeof t && Ue(e, t);
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
      return en(0, t, {
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
    function tn(t, e) {
      return en(0, t, e);
    }
    function en(t, e, n) {
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
    var nn = "direct",
      on = "latest";
    var rn = function rn(t, e) {
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
        (this.unparse = (e.unparse || gn).bind(e)),
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
    function sn(t, e, n) {
      if (n === void 0) {
        n = on;
      }
      var o = (n === on ? t.getLatest() : t).__state;
      return o ? o.getValue(e) : e.defaultValue;
    }
    function ln(t, e, n) {
      var o;
      if ((xc(), "function" == typeof n)) {
        var _r9 = t.getLatest(),
          _i7 = sn(_r9, e);
        if (((o = n(_i7)), e.isEqual(_i7, o))) return _r9;
      } else o = n;
      var r = t.getWritable();
      return (fn(r).updateFromKnown(e, o), r);
    }
    function cn(t) {
      var e = new Map(),
        n = new Set();
      for (var _ref12 of wl("function" == typeof t ? t : t.replace)) {
        var _o10 = _ref12.ownNodeConfig;
        if (_o10 && _o10.stateConfigs)
          for (var _t18 of _o10.stateConfigs) {
            var _o11 = void 0;
            ("stateConfig" in _t18
              ? ((_o11 = _t18.stateConfig), _t18.flat && n.add(_o11.key))
              : (_o11 = _t18),
              e.set(_o11.key, _o11));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var an = new Set(["__proto__", "constructor", "prototype"]);
    var _un = (function () {
      function un(t, e, n, o, r) {
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
                    for (var _r0 in e) {
                      var _e21 = t.get(_r0);
                      (_e21 && n.has(_e21)) || o++;
                    }
                  return o;
                })(i, n, o);
        this.size = s;
      }
      var _proto6 = un.prototype;
      _proto6.getValue = function getValue(t) {
        var e = this.knownState.get(t);
        if (void 0 !== e) return e;
        this.sharedNodeState.sharedConfigMap.set(t.key, t);
        var n = t.defaultValue;
        if (this.unknownState && t.key in this.unknownState) {
          var _e22 = this.unknownState[t.key];
          (void 0 !== _e22 && (n = t.parse(_e22)), this.updateFromKnown(t, n));
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
          var _e23 = _ref14[0];
          var _n19 = _ref14[1];
          _e23.isEqual(_n19, _e23.defaultValue)
            ? delete t[_e23.key]
            : (t[_e23.key] = _e23.unparse(_n19));
        }
        for (var _n20 of this.sharedNodeState.flatKeys)
          _n20 in t && ((e[_n20] = t[_n20]), delete t[_n20]);
        return (hn(t) && (e[L] = t), e);
      };
      _proto6.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          o = new Map(this.knownState);
        return new un(
          t,
          e,
          (function (t, e, n) {
            var o;
            if (n)
              for (var _ref16 of Object.entries(n)) {
                var _r1 = _ref16[0];
                var _i8 = _ref16[1];
                {
                  if (an.has(_r1)) continue;
                  var _n21 = t.get(_r1);
                  _n21
                    ? e.has(_n21) || e.set(_n21, _n21.parse(_i8))
                    : ((o = o || {}), (o[_r1] = _i8));
                }
              }
            return o;
          })(e.sharedConfigMap, o, n),
          o,
          this.size,
        );
      };
      _proto6.resetOnCopyNode = function resetOnCopyNode() {
        for (var _t19 of this.knownState.keys())
          _t19.resetOnCopyNode && this.knownState.set(_t19, _t19.defaultValue);
        return this;
      };
      _proto6.updateFromKnown = function updateFromKnown(t, e) {
        var n = t.key;
        this.sharedNodeState.sharedConfigMap.set(n, t);
        var o = this.knownState,
          r = this.unknownState;
        (o.has(t) ||
          (r && n in r) ||
          (r && (delete r[n], (this.unknownState = hn(r))), this.size++),
          o.set(t, e));
      };
      _proto6.updateFromUnknown = function updateFromUnknown(t, e) {
        if (an.has(t)) return;
        var n = this.sharedNodeState.sharedConfigMap.get(t);
        n
          ? this.updateFromKnown(n, n.parse(e))
          : ((this.unknownState = this.unknownState || {}),
            t in this.unknownState || this.size++,
            (this.unknownState[t] = e));
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        var e = this.knownState;
        for (var _t20 of e.keys()) e.set(_t20, _t20.defaultValue);
        if (((this.size = e.size), (this.unknownState = void 0), t))
          for (var _ref18 of Object.entries(t)) {
            var _e24 = _ref18[0];
            var _n22 = _ref18[1];
            this.updateFromUnknown(_e24, _n22);
          }
      };
      return un;
    })();
    function fn(t) {
      var e = t.getWritable(),
        n = e.__state
          ? e.__state.getWritable(e)
          : new _un(
              e,
              (function (t) {
                return t.__state
                  ? t.__state.sharedNodeState
                  : ti(Us(), t.getType()).sharedNodeState;
              })(e),
            );
      return ((e.__state = n), n);
    }
    function dn(t, e) {
      var n = t.getWritable(),
        o = e[L];
      return ((n.__state || o) && fn(t).updateFromJSON(o), n);
    }
    function hn(t) {
      if (t) for (var _e25 in t) return t;
    }
    function gn(t) {
      return t;
    }
    function pn(t, e, n) {
      for (var _ref20 of e.knownState) {
        var _o12 = _ref20[0];
        var _r10 = _ref20[1];
        {
          if (t.has(_o12.key)) continue;
          t.add(_o12.key);
          var _e26 = n ? n.getValue(_o12) : _o12.defaultValue;
          if (_e26 !== _r10 && !_o12.isEqual(_e26, _r10)) return !0;
        }
      }
      return !1;
    }
    function _n(t, e, n) {
      var o = e.unknownState,
        r = n ? n.unknownState : void 0;
      if (o)
        for (var _ref22 of Object.entries(o)) {
          var _e27 = _ref22[0];
          var _n23 = _ref22[1];
          if (!t.has(_e27) && (t.add(_e27), _n23 !== (r ? r[_e27] : void 0)))
            return !0;
        }
      return !1;
    }
    function mn(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function yn(t) {
      return !Xo(t) && t.getTextContent !== _jo4.prototype.getTextContent;
    }
    var xn = Symbol["for"]("@lexical/CachedTextSize");
    function Sn(t, n) {
      return Ln.read(
        function () {
          var o = 0,
            r = t;
          for (var _t21 = 0; _t21 < n && null !== r; _t21++) {
            var _i9 = Rn.get(r);
            if ((void 0 === _i9 && e(345, r), Ho(_i9))) {
              var _s4 = Kn.get(r);
              if (void 0 !== _s4 && Ho(_s4) && _s4.__parent !== _i9.__parent)
                o += _i9.getTextContentSize();
              else {
                var _t22 = Bn.get(r),
                  _n24 = _t22 && _t22.__lexicalTextContent;
                ("string" != typeof _n24 && e(346, _i9.getType()),
                  (o += _n24.length));
              }
              _t21 < n - 1 && !_i9.isInline() && (o += 2);
            } else if (eo(_i9).size > 0) o += _i9.getTextContentSize();
            else {
              var _t23 = _i9[xn];
              (void 0 === _t23 && e(347, _i9.getType(), r), (o += _t23));
            }
            r = _i9.__next;
          }
          return o;
        },
        { editor: Nn },
      );
    }
    function Cn(t) {
      Ho(t) ||
        eo(t).size > 0 ||
        (void 0 === t[xn] &&
          (t[xn] = xr(t) ? t.__text.length : t.getTextContentSize()));
    }
    var Tn = 4;
    var vn,
      Nn,
      bn,
      kn = "",
      En = null,
      On = null,
      Mn = null;
    function wn() {
      return { firstTextKey: Mn, format: En, style: On };
    }
    function An(t) {
      null !== t.firstTextKey &&
        ((En = t.format), (On = t.style), (Mn = t.firstTextKey));
    }
    function Dn(t) {
      if (null !== Mn) return;
      var n = t.__lexicalFirstTextKey;
      if ((void 0 === n && e(348), null === n)) return;
      var o = Kn.get(n);
      xr(o) && ((En = o.getFormat()), (On = o.getStyle()), (Mn = n));
    }
    var In,
      Fn,
      Pn,
      Rn,
      Ln,
      Kn,
      Bn,
      zn,
      $n,
      Wn,
      Un = !1,
      jn = !1;
    function Hn(t, e) {
      var n = Rn.get(t),
        o = Kn.has(t);
      if (null !== e) {
        var _n25 = mo(t);
        _n25.parentNode === e && e.removeChild(_n25);
      }
      if (!o) {
        if ((Nn._keyToDOMMap["delete"](t), Ho(n))) {
          var _t24 = Il(n, Rn);
          Vn(_t24, 0, _t24.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t25 of eo(n).values()) {
            var _e28 = oo(_t25);
            (Hn(_t25, null), null !== _e28 && _e28.remove());
          }
          Yi($n, bn, In, n, "destroyed");
        }
      }
    }
    function Vn(t, e, n, o) {
      for (var _r11 = e; _r11 <= n; ++_r11) {
        var _e29 = t[_r11];
        void 0 !== _e29 && Hn(_e29, o);
      }
    }
    function Yn(t, e) {
      t.setProperty("text-align", e);
    }
    var Jn = "40px";
    function Gn(t, e) {
      var n = vn.theme.indent;
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
          : "calc(" + e + " * var(--lexical-indent-base-value, " + Jn + "))",
      ),
        Hi(t, "class"),
        Hi(t, "style"));
    }
    function qn(t, e) {
      var n = t.style;
      (0 === e
        ? Yn(n, "")
        : 1 === e
          ? Yn(n, "left")
          : 2 === e
            ? Yn(n, "center")
            : 3 === e
              ? Yn(n, "right")
              : 4 === e
                ? Yn(n, "justify")
                : 5 === e
                  ? Yn(n, "start")
                  : 6 === e && Yn(n, "end"),
        Hi(t, "style"));
    }
    function Xn(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (Xo(t)) return null;
        var n = t.getParent();
        return null === n || (fs(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function Qn(t) {
      var e = bs().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function Zn(t, e, n) {
      e || "false" === t.contentEditable
        ? ol(n, Nn)
        : n.removeAttribute("contenteditable");
    }
    function to(t, e, n) {
      var o = kn,
        r = wn();
      kn = "";
      var i = "";
      var s = Jo(t);
      for (var _ref24 of n) {
        var _o14 = _ref24[0];
        var _r12 = _ref24[1];
        {
          var _n26 = Qn(_o14);
          (Zn(e, s, _n26), e.appendChild(_n26), (kn = ""));
          var _l3 = wn();
          (io(_r12, Hs(t, _n26, Nn)), An(_l3), no(t, _o14, e, _n26), (i += kn));
        }
      }
      return (An(r), (kn = o), i);
    }
    function eo(t) {
      return Ku(t) && null !== t.__slots ? t.__slots : Lu;
    }
    function no(t, e, n, o) {
      var r = Wn.$getSlotTargetElement(t, e, n, Nn);
      null !== r &&
        (o.parentElement !== r && r.appendChild(o), (o.style.display = ""));
    }
    function oo(t) {
      var e = Bn.get(t);
      return void 0 !== e ? e.parentElement : null;
    }
    function ro(t, e, n) {
      var o = eo(t),
        r = eo(e);
      for (var _ref26 of o) {
        var _t26 = _ref26[0];
        var _e30 = _ref26[1];
        if (!r.has(_t26)) {
          var _t27 = oo(_e30);
          (Hn(_e30, null), null !== _t27 && _t27.remove());
        }
      }
      var i = kn,
        s = wn();
      var l = "",
        c = null;
      var a = Jo(e);
      for (var _ref28 of r) {
        var _t28 = _ref28[0];
        var _i0 = _ref28[1];
        {
          var _r13 = o.get(_t28);
          var _s5 = void 0 !== _r13 ? oo(_r13) : null;
          kn = "";
          var _u2 = wn();
          if (null === _s5) {
            _s5 = Qn(_t28);
            var _o15 = null;
            for (var _t29 of n.children)
              if (!_t29.hasAttribute("data-lexical-slot")) {
                _o15 = _t29;
                break;
              }
            (n.insertBefore(_s5, _o15), io(_i0, Hs(e, _s5, Nn)));
          } else
            _r13 === _i0
              ? fo(_i0, _s5)
              : (void 0 !== _r13 && Hn(_r13, _s5), io(_i0, Hs(e, _s5, Nn)));
          if (
            (An(_u2),
            Zn(n, a, _s5),
            no(e, _t28, n, _s5),
            (l += kn),
            _s5.parentElement === n)
          ) {
            var _t30 = null === c ? n.firstChild : c.nextSibling;
            (_t30 !== _s5 && n.insertBefore(_s5, _t30), (c = _s5));
          }
        }
      }
      return (An(s), (kn = i), l);
    }
    function io(t, n) {
      var o = Kn.get(t);
      if ((void 0 === o && e(60), null !== n)) {
        var _e31 = Rn.get(t);
        if (void 0 !== _e31) {
          var _r14 = Bn.get(t);
          if (void 0 !== _r14) {
            var _i1 = Bu(_e31) ? _e31.__slotHost : null,
              _s6 = Bu(o) ? o.__slotHost : null,
              _l4 = _e31.__parent !== o.__parent || _i1 !== _s6,
              _c3 = null !== _s6 && _r14.parentElement !== n.element;
            if (_l4 || _c3) return (n.insertChild(_r14), fo(t, n.element));
          }
        }
      }
      var r = Wn.$createDOM(o, Nn);
      if (
        ((function (t, e, n) {
          var o = n._keyToDOMMap;
          (vi(e, n, t), o.set(t, e));
        })(t, r, Nn),
        xr(o)
          ? r.setAttribute("data-lexical-text", "true")
          : Jo(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            el(r, { captureSelection: !0 })),
        Ho(o))
      ) {
        var _t31 = kn,
          _e32 = o.__indent,
          _n27 = o.__size;
        (Xn(r, o), 0 !== _e32 && Gn(r, _e32));
        var _i10 = eo(o),
          _s7 = _i10.size > 0 ? to(o, r, _i10) : "";
        if (0 === _n27)
          ((r.__lexicalTextContent = _s7),
            (r.__lexicalFirstTextKey = null),
            (kn += _s7),
            _i10.size > 0 && (r.__lexicalSlotTextLength = _s7.length));
        else {
          var _e33 = _n27 - 1;
          if ((so(Il(o, Kn), o, 0, _e33, Hs(o, r, Nn)), "" !== _s7)) {
            var _e34 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s7 + _e34), (kn = _t31 + _s7 + _e34));
          }
          _i10.size > 0 && (r.__lexicalSlotTextLength = _s7.length);
        }
        if (yn(o)) {
          var _e35 = o.getTextContent();
          ((r.__lexicalTextContent = _e35), (kn = _t31 + _e35));
        }
        var _l5 = o.__format;
        (0 !== _l5 && qn(r, _l5), o.isInline() || (ao(0, o, r), co(o, r)));
      } else {
        var _e36 = o.getTextContent();
        if (Jo(o)) {
          var _e37 = o.decorate(Nn, vn);
          (null !== _e37 && ho(t, _e37), (r.contentEditable = "false"));
          var _n28 = eo(o);
          _n28.size > 0 && to(o, r, _n28);
        }
        kn += _e36;
      }
      return (
        null !== n && n.insertChild(r),
        Wn.$decorateDOM(o, null, r, Nn),
        Cn(o),
        Yi($n, bn, In, o, "created"),
        r
      );
    }
    function so(t, n, o, r, i) {
      var s = kn,
        l = wn();
      ((kn = ""), (En = null), (On = null), (Mn = null));
      var c = o;
      for (; c <= r; ++c) {
        var _e38 = wn();
        io(t[c], i);
        var _n29 = Kn.get(t[c]);
        (null !== _n29 && xr(_n29)
          ? null === En &&
            ((En = _n29.getFormat()), (On = _n29.getStyle()), (Mn = _n29.__key))
          : Ho(_n29) && c < r && !_n29.isInline() && (kn += v),
          An(_e38));
      }
      var a = Nn._keyToDOMMap.get(n.__key);
      (void 0 === a && e(349, n.__key),
        (a.__lexicalTextContent = kn),
        (a.__lexicalFirstTextKey = Mn),
        (kn = s + kn),
        An(l));
    }
    function lo(t, e) {
      if (!t) return !1;
      var n = e.get(t);
      return Jo(n) && !n.isInline();
    }
    function co(t, e) {
      var n = Hs(t, e, Nn);
      (n.setDecoratorBoundaryAnchor("leading", lo(t.__first, Kn)),
        n.setDecoratorBoundaryAnchor("trailing", lo(t.__last, Kn)));
    }
    function ao(t, e, n) {
      var o = Hs(e, n, Nn),
        r = (function (t, e) {
          if (t) {
            var _n30 = t.__last;
            if (_n30) {
              var _t32 = e.get(_n30);
              if (_t32)
                return ql(_t32)
                  ? "line-break"
                  : Jo(_t32) && _t32.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, Kn);
      o.setManagedLineBreak(r);
    }
    function uo(t, e, n) {
      var o = e.__lexicalFirstTextKey;
      if (null != o) {
        var _e39 = t.__key;
        var _r15 = o;
        for (; null !== _r15; ) {
          var _t33 = Kn.get(_r15);
          if (void 0 === _t33) {
            _r15 = null;
            break;
          }
          if (_t33.__parent === _e39) break;
          _r15 = _t33.__parent;
        }
        if (null !== _r15 && !n.has(_r15)) {
          var _t34 = Kn.get(o);
          if (xr(_t34))
            return ((En = _t34.getFormat()), void (On = _t34.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Mn;
    }
    function fo(t, n) {
      var o = Rn.get(t);
      var r = Kn.get(t);
      (void 0 !== o && void 0 !== r) || e(61);
      var i = Un || Pn.has(t) || Fn.has(t),
        s = Qi(Nn, t);
      if (o === r && !i) {
        var _t35;
        if (Ho(o)) {
          var _n31 = s.__lexicalTextContent;
          ("string" != typeof _n31 && e(355, o.getType()),
            (_t35 = _n31),
            Dn(s));
        } else _t35 = o.getTextContent();
        return ((kn += _t35), s);
      }
      if (
        (o !== r && i && Yi($n, bn, In, r, "updated"),
        Wn.$updateDOM(r, o, s, Nn))
      ) {
        var _o16 = io(t, null);
        return (
          null === n && e(62),
          n.replaceChild(_o16, s),
          Hn(t, null),
          _o16
        );
      }
      if (Ho(o)) {
        Ho(r) || e(334, t);
        var _n32 = r.__indent;
        (Un || _n32 !== o.__indent) && Gn(s, _n32);
        var _l6 = r.__format;
        (Un || _l6 !== o.__format) && qn(s, _l6);
        var _c4 = i && (eo(r).size > 0 || eo(o).size > 0) ? ro(o, r, s) : "";
        if (i) {
          var _t36 = kn;
          if (
            ((function (t, n, o) {
              var r;
              ((En = null),
                (On = null),
                (Mn = null),
                (function (t, n, o) {
                  var r = kn,
                    i = t.__size,
                    s = n.__size;
                  kn = "";
                  var l = o.element,
                    c = Nn._keyToDOMMap.get(n.__key);
                  void 0 === c && e(351, n.__key);
                  var a = s - i;
                  if (
                    !Un &&
                    Math.abs(a) <= 1 &&
                    i >= Tn &&
                    t.__first === n.__first &&
                    (0 !== a || !Nn._cloneNotNeeded.has(t.__key))
                  ) {
                    var _i11 = c.__lexicalTextContent,
                      _u3 = zn.get(t.__key);
                    if (
                      !Un &&
                      !yn(n) &&
                      "string" == typeof _i11 &&
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
                          var _t37 = Kn.get(o);
                          if (void 0 === _t37) return null;
                          ((o = _t37.__prev), i++);
                        }
                        return i !== n || (null !== o && e.has(o)) ? null : r;
                      })(n, _u3);
                      if (null !== _s8) {
                        var _f3 = _u3.size;
                        if (0 === a) {
                          var _t38 = Sn(_s8, _f3);
                          var _o17 = _s8,
                            _a2 = 0;
                          for (; null !== _o17 && _a2 < _f3; ) {
                            var _t39 = Kn.get(_o17);
                            if (void 0 === _t39) break;
                            var _e40 = wn();
                            (fo(_o17, l),
                              xr(_t39) &&
                                null === En &&
                                ((En = _t39.getFormat()),
                                (On = _t39.getStyle()),
                                (Mn = _t39.__key)),
                              An(_e40),
                              (_o17 = _t39.__next),
                              _a2++);
                          }
                          var _d2 = "";
                          for (
                            _o17 = _s8, _a2 = 0;
                            null !== _o17 && _a2 < _f3;
                          ) {
                            var _t40 = Kn.get(_o17);
                            if (void 0 === _t40) break;
                            var _n33 = void 0;
                            if (Ho(_t40)) {
                              var _r16 = Nn._keyToDOMMap.get(_o17),
                                _i12 = _r16 && _r16.__lexicalTextContent;
                              ("string" != typeof _i12 &&
                                e(352, _t40.getType()),
                                (_n33 = _i12));
                            } else _n33 = _t40.getTextContent();
                            ((_d2 += _n33),
                              _a2 < _f3 - 1 &&
                                Ho(_t40) &&
                                !_t40.isInline() &&
                                (_d2 += v),
                              (_o17 = _t40.__next),
                              _a2++);
                          }
                          var _h2 = c.__lexicalSlotTextLength || 0,
                            _g2 = _h2 > 0 ? _i11.slice(_h2) : _i11,
                            _p2 = _g2.slice(0, _g2.length - _t38) + _d2;
                          return (
                            (c.__lexicalTextContent = _p2),
                            (kn = r + _p2),
                            void uo(n, c, _u3)
                          );
                        }
                        if (
                          (function (t, n, o, r, i, s, l, c) {
                            if (1 !== c && -1 !== c) return !1;
                            if (l !== (1 === c ? 2 : 1)) return !1;
                            var a = l - c;
                            var u = t.__last;
                            for (var _t41 = 0; _t41 < a - 1; _t41++) {
                              if (null === u) return !1;
                              var _t42 = Rn.get(u);
                              if (void 0 === _t42) return !1;
                              u = _t42.__prev;
                            }
                            if (null === u) return !1;
                            var f = Kn.get(s),
                              d = Rn.get(u);
                            if (void 0 === f || void 0 === d) return !1;
                            if (f.__prev !== d.__prev) return !1;
                            var h = [];
                            var g = s;
                            for (var _t43 = 0; _t43 < l; _t43++) {
                              if (null === g) return !1;
                              h.push(g);
                              var _t44 = Kn.get(g);
                              g = _t44 ? _t44.__next : null;
                            }
                            var p = [];
                            g = u;
                            for (var _t45 = 0; _t45 < a; _t45++) {
                              if (null === g) return !1;
                              p.push(g);
                              var _t46 = Rn.get(g);
                              g = _t46 ? _t46.__next : null;
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
                            var C = Sn(u, a);
                            for (var _t47 of y) {
                              var _e41 = wn();
                              if ("reconcile" === _t47.kind)
                                fo(_t47.key, o.element);
                              else if ("destroy" === _t47.kind)
                                Hn(_t47.key, o.element);
                              else {
                                var _e42 = null;
                                for (
                                  var _n34 = _t47.nextIndex + 1;
                                  _n34 < l;
                                  _n34++
                                ) {
                                  var _t48 = Nn._keyToDOMMap.get(h[_n34]);
                                  if (void 0 !== _t48) {
                                    _e42 = _t48;
                                    break;
                                  }
                                }
                                io(
                                  _t47.key,
                                  o.withBefore(_e42 != null ? _e42 : o.before),
                                );
                              }
                              if ("destroy" !== _t47.kind) {
                                var _e43 = Kn.get(_t47.key);
                                _e43 &&
                                  xr(_e43) &&
                                  null === En &&
                                  ((En = _e43.getFormat()),
                                  (On = _e43.getStyle()),
                                  (Mn = _e43.__key));
                              }
                              An(_e41);
                            }
                            var T = "";
                            for (var _t49 = 0; _t49 < l; _t49++) {
                              var _n35 = Kn.get(h[_t49]);
                              if (void 0 === _n35) return !1;
                              var _o18 = void 0;
                              if (Ho(_n35)) {
                                var _r17 = Nn._keyToDOMMap.get(h[_t49]),
                                  _i13 = _r17 && _r17.__lexicalTextContent;
                                ("string" != typeof _i13 &&
                                  e(350, _n35.getType()),
                                  (_o18 = _i13));
                              } else _o18 = _n35.getTextContent();
                              ((T += _o18),
                                _t49 < l - 1 &&
                                  Ho(_n35) &&
                                  !_n35.isInline() &&
                                  (T += v));
                            }
                            var N = r.__lexicalSlotTextLength || 0,
                              b = N > 0 ? i.slice(N) : i;
                            return (
                              (r.__lexicalTextContent =
                                b.slice(0, b.length - C) + T),
                              !0
                            );
                          })(t, 0, o, c, _i11, _s8, _f3, a)
                        ) {
                          var _t50 = c.__lexicalTextContent;
                          return (
                            "string" != typeof _t50 && e(353),
                            (kn = r + _t50),
                            void uo(n, c, _u3)
                          );
                        }
                      }
                    }
                    if (0 === a) {
                      var _n36 = t.__first,
                        _o19 = 0;
                      for (; null !== _n36; ) {
                        var _t51 = Kn.get(_n36);
                        if (void 0 === _t51) break;
                        var _r18 = Un || Pn.has(_n36) || Fn.has(_n36),
                          _i14 = wn();
                        if (_r18) fo(_n36, l);
                        else {
                          var _o20 = void 0,
                            _r19 = void 0;
                          if (Ho(_t51)) {
                            _r19 = Bn.get(_n36);
                            var _i15 = _r19 && _r19.__lexicalTextContent;
                            ("string" != typeof _i15 && e(354, _t51.getType()),
                              (_o20 = _i15));
                          } else _o20 = _t51.getTextContent();
                          ((kn += _o20), void 0 !== _r19 && Dn(_r19));
                        }
                        (xr(_t51)
                          ? null === En &&
                            ((En = _t51.getFormat()),
                            (On = _t51.getStyle()),
                            (Mn = _t51.__key))
                          : Ho(_t51) &&
                            _o19 < s - 1 &&
                            !_t51.isInline() &&
                            (kn += v),
                          An(_i14),
                          (_n36 = _t51.__next),
                          _o19++);
                      }
                      return (
                        (c.__lexicalTextContent = kn),
                        (c.__lexicalFirstTextKey = Mn),
                        void (kn = r + kn)
                      );
                    }
                  }
                  if (1 === i && 1 === s) {
                    var _e44 = t.__first,
                      _r20 = n.__first;
                    if (_e44 === _r20) fo(_e44, l);
                    else {
                      var _t52 = mo(_e44),
                        _n37 = io(_r20, null);
                      try {
                        _t52.parentNode === l
                          ? l.replaceChild(_n37, _t52)
                          : o.insertChild(_n37);
                      } catch (o) {
                        if ("object" == typeof o && null != o) {
                          var _i16 =
                            o.toString() +
                            " Parent: " +
                            l.tagName +
                            ", new child: {tag: " +
                            _n37.tagName +
                            " key: " +
                            _r20 +
                            "}, old child: {tag: " +
                            _t52.tagName +
                            ", key: " +
                            _e44 +
                            "}.";
                          throw new Error(_i16);
                        }
                        throw o;
                      }
                      Hn(_e44, null);
                    }
                    var _i17 = Kn.get(_r20);
                    xr(_i17) &&
                      null === En &&
                      ((En = _i17.getFormat()),
                      (On = _i17.getStyle()),
                      (Mn = _i17.__key));
                  } else {
                    var _r21 = Il(t, Rn),
                      _c5 = Il(n, Kn);
                    if (
                      (_r21.length !== i && e(227),
                      _c5.length !== s && e(228),
                      0 === i)
                    )
                      0 !== s && so(_c5, n, 0, s - 1, o);
                    else if (0 === s) {
                      if (0 !== i) {
                        var _t53 =
                          null == o.after &&
                          null == o.before &&
                          0 === eo(n).size &&
                          null == o.element.__lexicalLineBreak;
                        (Vn(_r21, 0, i - 1, _t53 ? null : l),
                          _t53 && (l.textContent = ""));
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
                          var _t54 = e[f],
                            _o21 = n[d],
                            _r22 = wn();
                          if (_t54 === _o21)
                            ((u = go(fo(_o21, i.element))), f++, d++);
                          else {
                            if ((void 0 === a && (a = po(n, d)), void 0 === c))
                              c = po(e, f);
                            else if (!c.has(_t54)) {
                              (f++, An(_r22));
                              continue;
                            }
                            if (!a.has(_t54)) {
                              var _e45 = mo(_t54);
                              (_e45.parentNode === i.element && (u = go(_e45)),
                                Hn(_t54, i.element),
                                f++,
                                c["delete"](_t54),
                                An(_r22));
                              continue;
                            }
                            if (c.has(_o21)) {
                              var _t55 = Qi(Nn, _o21);
                              (_t55 !== u &&
                                i
                                  .withBefore(u != null ? u : i.before)
                                  .insertChild(_t55),
                                (u = go(fo(_o21, i.element))),
                                f++,
                                d++);
                            } else
                              (io(_o21, i.withBefore(u != null ? u : i.before)),
                                d++);
                          }
                          var _s9 = Kn.get(_o21);
                          (null !== _s9 && xr(_s9)
                            ? null === En &&
                              ((En = _s9.getFormat()),
                              (On = _s9.getStyle()),
                              (Mn = _s9.__key))
                            : Ho(_s9) && d <= l && !_s9.isInline() && (kn += v),
                            An(_r22));
                        }
                        var h = f > s,
                          g = d > l;
                        if (h && !g) {
                          var _e46 = n[l + 1],
                            _o22 =
                              void 0 === _e46 ? null : Nn.getElementByKey(_e46);
                          so(
                            n,
                            t,
                            d,
                            l,
                            i.withBefore(_o22 != null ? _o22 : i.before),
                          );
                        } else g && !h && Vn(e, f, s, i.element);
                      })(n, _r21, _c5, i, s, o);
                  }
                  ((c.__lexicalTextContent = kn),
                    (c.__lexicalFirstTextKey = Mn),
                    (kn = r + kn));
                })(t, n, Hs(n, o, Nn)),
                fs(n) ||
                  ((r = n),
                  null == En ||
                    En === r.__textFormat ||
                    jn ||
                    r.setTextFormat(En),
                  (function (t) {
                    null == On ||
                      On === t.__textStyle ||
                      jn ||
                      t.setTextStyle(On);
                  })(n)));
            })(o, r, s),
            r.isInline() || (Xo(r) || ao(0, r, s), co(r, s)),
            "" !== _c4)
          ) {
            var _e47 = s.__lexicalTextContent || "";
            ((s.__lexicalTextContent = _c4 + _e47),
              (kn = _t36 + _c4 + _e47),
              (s.__lexicalSlotTextLength = _c4.length));
          } else
            (eo(r).size > 0 || eo(o).size > 0) &&
              (s.__lexicalSlotTextLength = 0);
          if (yn(r)) {
            var _e48 = r.getTextContent();
            ((s.__lexicalTextContent = _e48), (kn = _t36 + _e48));
          }
        } else {
          var _t56 = s.__lexicalTextContent;
          ("string" != typeof _t56 && e(356, o.getType()), (kn += _t56), Dn(s));
        }
        if (
          (Un || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (Xn(s, r), Xo(r) && !Un)
        )
          for (var _t57 of r.getChildren())
            Ho(_t57) && Xn(Qi(Nn, _t57.getKey()), _t57);
      } else {
        var _e49 = r.getTextContent();
        if (Jo(r)) {
          var _e50 = r.decorate(Nn, vn);
          (null !== _e50 && ho(t, _e50),
            i && (eo(r).size > 0 || eo(o).size > 0) && ro(o, r, s));
        }
        kn += _e49;
      }
      if (!jn && Xo(r)) {
        var _t58 = r.getLatest();
        if (_t58.__cachedText !== kn) {
          var _e51 = _t58.getWritable();
          ((_e51.__cachedText = kn), (r = _e51));
        }
      }
      return (Wn.$decorateDOM(r, o, s, Nn), Cn(r), s);
    }
    function ho(t, e) {
      var n = Nn._pendingDecorators;
      var o = Nn._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = ki(Nn);
      }
      n[t] = e;
    }
    function go(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === Nn._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function po(t, e) {
      var n = new Set();
      for (var _o23 = e; _o23 < t.length; _o23++) n.add(t[_o23]);
      return n;
    }
    function _o(t, e, n, o, r, i) {
      ((kn = ""),
        (En = null),
        (On = null),
        (Mn = null),
        (Un = 2 === o),
        (Nn = n),
        (vn = n._config),
        (Wn = n._config.dom || oc),
        (bn = n._nodes),
        (In = Nn._listeners.mutation),
        (Fn = r),
        (Pn = i),
        (Rn = t._nodeMap),
        (Ln = t),
        (Kn = e._nodeMap),
        (jn = e._readOnly),
        (Bn = qt(n._keyToDOMMap)),
        (zn = (function () {
          var t = new Map(),
            e = function e(_e53) {
              for (var _n38 of _e53) {
                var _e52 = Kn.get(_n38);
                if (void 0 === _e52) continue;
                var _o24 = _e52.__parent;
                if (null === _o24) continue;
                var _r23 = t.get(_o24);
                (void 0 === _r23 && ((_r23 = new Set()), t.set(_o24, _r23)),
                  _r23.add(_n38));
              }
            };
          return (e(Fn.keys()), e(Pn), t);
        })()));
      var s = new Map();
      return (
        ($n = s),
        fo("root", null),
        (Nn = void 0),
        (bn = void 0),
        (Fn = void 0),
        (Pn = void 0),
        (Rn = void 0),
        (Ln = void 0),
        (Kn = void 0),
        (vn = void 0),
        (Bn = void 0),
        (zn = void 0),
        ($n = void 0),
        (Wn = oc),
        s
      );
    }
    function mo(t) {
      var n = Bn.get(t);
      return (void 0 === n && e(75, t), n);
    }
    function yo(t, n, o) {
      xc();
      var r = t.__key,
        i = t.getParent();
      if (null === i) return void (null !== zu(t) && e(367, r, String(zu(t))));
      var s = (function (t) {
        var e = hu();
        if (!Ba(e) || !Ho(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          i = o.getNode();
        return (
          is(r, t) && n.set(t.__key, 0, "element"),
          is(i, t) && o.set(t.__key, 0, "element"),
          e
        );
      })(t);
      var l = !1;
      if (Ba(s) && n) {
        var _e54 = s.anchor,
          _n39 = s.focus;
        (_e54.key === r &&
          (mu(_e54, t, i, t.getPreviousSibling(), t.getNextSibling()),
          (l = !0)),
          _n39.key === r &&
            (mu(_n39, t, i, t.getPreviousSibling(), t.getNextSibling()),
            (l = !0)));
      } else $a(s) && n && t.isSelected() && t.selectPrevious();
      (Iu(t.getWritable(), n && !l && Ba(s) ? s : null),
        o || fs(i) || i.canBeEmpty() || !i.isEmpty() || yo(i, n),
        n && s && Xo(i) && i.isEmpty() && i.selectEnd());
    }
    var xo = Symbol["for"]("ephemeral");
    function So(t) {
      return t[xo] || !1;
    }
    var Co = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _To5 = (function () {
      function To(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", Co),
          Object.defineProperty(this, xn, Co),
          pi(this, t));
      }
      To.getType = function getType() {
        var _bl = bl(this),
          t = _bl.ownNodeType;
        return (void 0 === t && e(64, this.name), t);
      };
      To.clone = function clone(t) {
        e(65, this.name);
      };
      var _proto7 = To.prototype;
      _proto7.$config = function $config() {
        return {};
      };
      _proto7.config = function config(t, e) {
        var _ref29;
        var n = e["extends"] || Fl(this.constructor);
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
          var _e55 = Ci(t);
          if (null === _e55) break;
          t = null !== _e55.__parent ? _e55.__parent : zu(_e55);
        }
        return !1;
      };
      _proto7.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || hu();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (xr(this)) return n;
        if (
          Ba(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t59 = this.getParent();
          if (Jo(this) && this.isInline() && _t59) {
            var _n40 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t59.is(_n40.getNode()) &&
              _n40.offset === _t59.getChildrenSize() &&
              this.is(_t59.getLastChild())
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
        return null === t ? null : Ci(t);
      };
      _proto7.getParentOrThrow = function getParentOrThrow() {
        var t = this.getParent();
        return (null === t && e(66, this.__key), t);
      };
      _proto7.getTopLevelElement = function getTopLevelElement() {
        var t = this;
        for (; null !== t; ) {
          var _n41 = t.getParent();
          if (fs(_n41) || null !== zu(t))
            return (Ho(t) || (t === this && Jo(t)) || e(194), t);
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
        return null === t ? null : Ci(t);
      };
      _proto7.getPreviousSiblings = function getPreviousSiblings() {
        return Ru(this.getPreviousSibling(), "previous").reverse();
      };
      _proto7.getNextSibling = function getNextSibling() {
        var t = this.getLatest().__next;
        return null === t ? null : Ci(t);
      };
      _proto7.getNextSiblings = function getNextSiblings() {
        return Ru(this.getNextSibling(), "next");
      };
      _proto7.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto7.isBefore = function isBefore(t) {
        var n = Kf(this, t);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === Pf(n)
              : ("same" !== n.type && "ancestor" !== n.type && e(279), !1)))
        );
      };
      _proto7.isParentOf = function isParentOf(t) {
        return is(t, this);
      };
      _proto7.getNodesBetween = function getNodesBetween(t) {
        var e = this.isBefore(t),
          n = [];
        var o = this,
          r = !0,
          i = 0;
        for (; null !== o && ((r || 0 === i) && n.push(o), !o.is(t)); ) {
          !r && i > 0 && i--;
          var _t60 =
            r && Ho(o) ? (e ? o.getFirstChild() : o.getLastChild()) : null;
          null !== _t60 && i++;
          var _n42 = _t60 || (e ? o.getNextSibling() : o.getPreviousSibling());
          ((r = null !== _n42), (o = _n42 || o.getParent()));
        }
        return e ? n : n.reverse();
      };
      _proto7.isDirty = function isDirty() {
        var t = Tc()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto7.getLatest = function getLatest() {
        if (So(this)) return this;
        var t = Ci(this.__key);
        return (null === t && e(113), t);
      };
      _proto7.getWritable = function getWritable() {
        if (So(this)) return this;
        xc();
        var t = Cc(),
          n = Tc(),
          o = this.__key,
          r = n._cloneNotNeeded,
          i = r.get(o),
          s = t._selection;
        if ((null !== s && s.setCachedNodes(null), void 0 !== i))
          return (yi(i), i);
        var l = t._nodeMap,
          c = l.get(o);
        void 0 === c && e(113);
        var a = Xs(c);
        return (r.set(o, a), l.set(o, a), yi(a), a);
      };
      _proto7.getTextContent = function getTextContent() {
        return tf(this);
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
        return { element: js(t).$createDOM(this, t) };
      };
      _proto7.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = (function (t, e) {
            var n = cl(ll(t.constructor)),
              o = n.generated,
              r = n.isCompactDefault,
              i = null === o ? void 0 : e ? o.exportCompactJSON : o.exportJSON;
            return void 0 === i
              ? (function (t, e, n) {
                  var o = n ? { type: t.__type } : {};
                  return (
                    Ho(t) && (o.children = []),
                    (function (t, e, n, o) {
                      for (var _r24 = 0; _r24 < e.length; _r24++) {
                        var _i18 = e[_r24];
                        if (o && _i18.derived) continue;
                        var _s0 = void 0;
                        if ("ownField" === _i18.kind) {
                          var _e56 = Sl(t)[_i18.field];
                          _s0 =
                            void 0 === _i18.getterTable
                              ? _e56
                              : Ue(_i18.getterTable, _e56)
                                ? _i18.getterTable[_e56]
                                : void 0;
                        } else _s0 = _i18.getter.call(t);
                        ("ownField" === _i18.kind &&
                          void 0 !== _i18.when &&
                          ((!Cl(_i18, _s0) && _i18.when.call(t)) ||
                            (_s0 = void 0)),
                          (o && Cl(_i18, _s0)) || (n[_i18.key] = _s0));
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
      To.importJSON = function importJSON(t) {
        e(18, this.name);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return Nl(dn(this, t), t);
      };
      To.transform = function transform() {
        return null;
      };
      _proto7.remove = function remove(t) {
        yo(this, !0, t);
      };
      _proto7.replace = function replace(t, n) {
        xc();
        var o = hu();
        (null !== o && (o = o.clone()), gs(this, t));
        var r = this.getLatest(),
          i = this.__key,
          s = $u(r);
        null !== s && e(400, i, r.getType(), s.getKey(), s.getType());
        var l = t.__key,
          c = t.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent();
        Iu(c, Ba(o) ? o : null);
        var d = r.getPreviousSibling(),
          h = r.getNextSibling();
        (yo(r, !1, !0),
          Au(a, c, d && d.getWritable(), h && h.getWritable()),
          (a.__size = null !== f && f.is(a) ? u - 1 : u));
        var g = 0;
        if (
          (n &&
            ((Ho(this) && Ho(c)) || e(139),
            (g = c.getChildrenSize()),
            c.splice(g, 0, this.getChildren())),
          Ba(o))
        ) {
          wi(o);
          for (var _t61 of [o.anchor, o.focus])
            _t61.key === i &&
              (n && "element" === _t61.type
                ? _t61.set(c.__key, g + _t61.offset, "element")
                : Fa(_t61, c));
        }
        return (Si() === i && xi(l), c);
      };
      _proto7.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        return Fu(this, "next", t, e);
      };
      _proto7.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        return Fu(this, "previous", t, e);
      };
      _proto7.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto7.createParentElementNode = function createParentElementNode() {
        return jr();
      };
      _proto7.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto7.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto7.selectPrevious = function selectPrevious(t, e) {
        return Pu(xf(this, "previous"), t, e);
      };
      _proto7.selectNext = function selectNext(t, e) {
        return Pu(xf(this, "next"), t, e);
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
      return To;
    })();
    function vo(t) {
      return t instanceof _To5;
    }
    function No(t, e) {
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
              (t && pn(n, t, e)) ||
              (e && pn(n, e, t)) ||
              (t && _n(n, t, e)) ||
              (e && _n(n, e, t))
            );
          })(c, a))
      );
    }
    function bo(t, e) {
      var n = t.mergeWithSibling(e),
        o = Tc()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function ko(t) {
      var e,
        n,
        o = t;
      if ("" !== o.__text || !o.isSimpleText() || o.isUnmergeable()) {
        for (
          ;
          null !== (e = o.getPreviousSibling()) &&
          xr(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (No(e, o)) {
              o = bo(e, o);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = o.getNextSibling()) &&
          xr(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (No(o, n)) {
              o = bo(o, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else o.remove();
    }
    function Eo(t) {
      return (Oo(t.anchor), Oo(t.focus), t);
    }
    function Oo(t) {
      for (; "element" === t.type; ) {
        var _e57 = t.getNode(),
          _n43 = t.offset;
        var _o25 = void 0,
          _r25 = void 0;
        if (
          (_n43 === _e57.getChildrenSize()
            ? ((_o25 = _e57.getChildAtIndex(_n43 - 1)), (_r25 = !0))
            : ((_o25 = _e57.getChildAtIndex(_n43)), (_r25 = !1)),
          xr(_o25))
        ) {
          t.set(_o25.__key, _r25 ? _o25.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Ho(_o25)) break;
        t.set(_o25.__key, _r25 ? _o25.getChildrenSize() : 0, "element", !0);
      }
    }
    var Mo = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function wo(t, e) {
      if ("number" == typeof t) return Number.isFinite(t) ? t : e;
      if ("string" != typeof t || !Mo.test(t)) return e;
      var n = Number(t);
      return Number.isFinite(n) ? n : e;
    }
    function Ao(t, e, n, o, r) {
      var i = wo(t, e);
      return i >= n && i <= o && Number.isInteger(i) ? i : e;
    }
    var Do = function Do(t) {
      var e = Ne(t, "format"),
        n = be(t, "format"),
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
            (t.__indent = Ao(e.indent, 0, 0, Infinity)),
            (t.__textFormat = wo(e.textFormat, 0)));
          var s = e.textStyle;
          return ((t.__textStyle = "string" == typeof s ? s : ""), t);
        },
      };
    };
    function Io(t, e) {
      ((t.__detail = e.__detail),
        (t.__format = e.__format),
        (t.__mode = e.__mode),
        (t.__style = e.__style),
        (t.__text = e.__text));
    }
    var Fo = function Fo(t) {
        var e = Ne(t, "mode"),
          n = ke(t, "detail", 0),
          o = ke(t, "format", 0),
          r = be(t, "mode"),
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
            t.__detail = "string" == typeof s && s in n ? n[s] : wo(s, 0);
            var l = e.format;
            t.__format = "string" == typeof l && l in o ? o[l] : wo(l, 0);
            var c = e.mode;
            t.__mode = "string" == typeof c && c in r ? r[c] : i;
            var a = e.style;
            t.__style = "string" == typeof a ? a : "";
            var u = e.text;
            return ((t.__text = "string" == typeof u ? u : ""), t);
          },
          afterCloneFrom: Io,
        };
      },
      Po = function Po(t) {
        var e = Ne(t, "format"),
          n = be(t, "format"),
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
              (t.__indent = Ao(e.indent, 0, 0, Infinity)),
              (t.__textFormat = wo(e.textFormat, 0)));
            var s = e.textStyle;
            return ((t.__textStyle = "string" == typeof s ? s : ""), t);
          },
        };
      },
      Ro = function Ro() {
        return {
          exportJSON: function exportJSON(t) {
            return { type: t.__type, version: 1 };
          },
          exportCompactJSON: function exportCompactJSON(t) {
            return { type: t.__type };
          },
        };
      },
      Lo = function Lo(t) {
        var e = Ne(t, "mode"),
          n = ke(t, "format", 0);
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
            t.__format = "string" == typeof o && o in n ? n[o] : wo(o, 0);
            var r = e.style;
            return ((t.__style = "string" == typeof r ? r : ""), t);
          },
        };
      };
    function Ko() {
      return babelHelpers["extends"]({}, F, { 0: "" });
    }
    function Bo() {
      return babelHelpers["extends"]({}, D, { "": 0 });
    }
    var zo = Ko(),
      $o = Bo(),
      Wo = Xe()({
        direction: Ze(Ge([null, "ltr", "rtl"]), { field: "__dir" }),
        format: Ze(
          Ge(["", "left", "start", "center", "right", "end", "justify"]),
          {
            field: "__format",
            getter: "getFormatType",
            getterTable: zo,
            setter: "setFormat",
            setterTable: $o,
          },
        ),
        indent: Ze(Je(0, { integer: !0, min: 0 }), { field: "__indent" }),
        textFormat: tn(Je(), {
          getter: {
            field: "__textFormat",
            method: "getSerializedTextFormat",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textFormat" },
        }),
        textStyle: tn(Ve(), {
          getter: {
            field: "__textStyle",
            method: "getSerializedTextStyle",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textStyle" },
        }),
      });
    function Uo(t) {
      if (fs(t)) {
        var _e58 = null;
        for (var _n44 of t.getChildren())
          _e58 = _n44.isInline()
            ? (_e58 || _n44.replace(_n44.createParentElementNode())).append(
                _n44,
              )
            : null;
      }
    }
    var _jo4 = (function (_To) {
      function jo(t) {
        var _this;
        ((_this = _To.call(this, t) || this),
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
      babelHelpers.inheritsLoose(jo, _To);
      var _proto8 = jo.prototype;
      _proto8.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: Uo,
          extends: _To5,
          generated: Do,
          json: Wo,
        });
      };
      _proto8.afterCloneFrom = function afterCloneFrom(t) {
        (_To.prototype.afterCloneFrom.call(this, t),
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
        return Ru(this.getFirstChild(), "next");
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
        return 0 === this.getChildrenSize() && 0 === Vu(this).length;
      };
      _proto8.isDirty = function isDirty() {
        var t = Tc()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto8.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto8.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e59 of Vu(this)) {
          var _n45 = Yu(this, _e59);
          if (Ho(_n45)) for (var _e60 of _n45.getAllTextNodes()) t.push(_e60);
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((xr(e) && t.push(e), Ho(e)))
            for (var _n46 of e.getAllTextNodes()) t.push(_n46);
          e = e.getNextSibling();
        }
        return t;
      };
      _proto8.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Ho(t); ) {
          var _e61 = t.getFirstChild();
          if (null === _e61) break;
          t = _e61;
        }
        return t;
      };
      _proto8.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Ho(t); ) {
          var _e62 = t.getLastChild();
          if (null === _e62) break;
          t = _e62;
        }
        return t;
      };
      _proto8.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = t >= this.getChildrenSize(),
          n = e ? this.getLastChild() : this.getChildAtIndex(t);
        return (
          (Ho(n) && (e ? n.getLastDescendant() : n.getFirstDescendant())) || n
        );
      };
      _proto8.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : Ci(t);
      };
      _proto8.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var t = this.getFirstChild();
        return (null === t && e(45, this.__key), t);
      };
      _proto8.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : Ci(t);
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
        var t = tf(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o26 = 0; _o26 < n; _o26++) {
          var _r26 = e[_o26];
          ((t += _r26.getTextContent()),
            Ho(_r26) && _o26 !== n - 1 && !_r26.isInline() && (t += v));
        }
        return t;
      };
      _proto8.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n47 of Hu(t).values()) {
            var _t62 = Ci(_n47);
            null !== _t62 && (e += _t62.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o27 = 0; _o27 < n; _o27++) {
          var _r27 = e[_o27];
          ((t += _r27.getTextContentSize()),
            Ho(_r27) && _o27 !== n - 1 && !_r27.isInline() && (t += 2));
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
          var _e63 = D[t];
          return 0 !== (this.getFormat() & _e63);
        }
        return !1;
      };
      _proto8.hasTextFormat = function hasTextFormat(t) {
        var e = w[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto8.getFormatFlags = function getFormatFlags(t, e) {
        return gi(this.getLatest().__textFormat, t, e);
      };
      _proto8.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto8.select = function select(t, e) {
        xc();
        var n = hu();
        var o = t,
          r = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t63 = this.getFirstChild();
            if (xr(_t63) || Ho(_t63)) return _t63.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t64 = this.getLastChild();
            if (xr(_t64) || Ho(_t64)) return _t64.select();
          }
        (void 0 === o && (o = i), void 0 === r && (r = i));
        var s = this.__key;
        return Ba(n)
          ? (n.anchor.set(s, o, "element"),
            n.focus.set(s, r, "element"),
            (n.dirty = !0),
            n)
          : lu(s, o, s, r, "element", "element");
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
        So(this) && e(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          i = this.getWritable();
        t + n <= r || e(226, String(t), String(n), String(r));
        for (var _t65 of o);
        var s = i.__key,
          l = [];
        var c = [],
          a = this.getChildAtIndex(t + n),
          u = null,
          f = r - n + o.length;
        if (0 !== t)
          if (t === r) u = this.getLastChild();
          else {
            var _e64 = this.getChildAtIndex(t);
            null !== _e64 && (u = _e64.getPreviousSibling());
          }
        n > 0 &&
          (c = (function (t, n, o, r) {
            var i = [];
            var s = n;
            for (var _t66 = 0; _t66 < o; _t66++) {
              null === s && e(100);
              var _t67 = s.getNextSibling();
              (i.push(s.getWritable()), (s = _t67));
            }
            return (
              wu(t, r && r.getWritable(), s && s.getWritable()),
              (t.__size -= i.length),
              i.map(function (t) {
                return (
                  (t.__prev = null),
                  (t.__next = null),
                  (t.__parent = null),
                  t.__key
                );
              })
            );
          })(i, null === u ? this.getFirstChild() : u.getNextSibling(), n, u));
        var d = o.length > 0 && null !== u ? u.getWritable() : null;
        for (var _t68 of o) {
          (null !== d &&
            _t68.is(d) &&
            ((u = d.getPreviousSibling()), (d = u && u.getWritable())),
            null !== a && _t68.is(a) && (a = a.getNextSibling()));
          var _n48 = _t68.getWritable();
          (_n48.__parent === s && f--, Du(_n48));
          var _o28 = _t68.__key;
          (Au(i, _n48, d, a && a.getWritable()),
            _t68.__key === s && e(76),
            l.push(_o28),
            (d = _n48));
        }
        if (((i.__size = f), c.length)) {
          var _t69 = hu();
          if (Ba(_t69)) {
            var _e65 = new Set(c),
              _n49 = new Set(l);
            for (var _o29 of [_t69.anchor, _t69.focus])
              Vo(_o29, _e65, _n49) && mu(_o29, _o29.getNode(), this, u, a);
            0 !== f || this.canBeEmpty() || fs(this) || this.remove();
          }
        }
        return i;
      };
      _proto8.getDOMSlot = function getDOMSlot(t) {
        return new _ae(t);
      };
      _proto8.exportDOM = function exportDOM(t) {
        var _To$prototype$exportD = _To.prototype.exportDOM.call(this, t),
          e = _To$prototype$exportD.element;
        if (Ps(e)) {
          var _t70 = this.getIndent();
          _t70 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t70 + "px"),
            e.setAttribute("data-lexical-indent", String(_t70)));
          var _n50 = this.getDirection();
          _n50 && (e.dir = _n50);
        }
        return { element: e };
      };
      _proto8.shouldSerializeTextStyles = function shouldSerializeTextStyles() {
        if (fs(this)) return !1;
        for (
          var _t71 = this.getFirstChild();
          null !== _t71;
          _t71 = _t71.getNextSibling()
        )
          if (xr(_t71)) return !1;
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
        var n = Hs(this, t, e);
        var o = n.getFirstChild();
        for (
          var _t72 = this.getFirstChild();
          _t72;
          _t72 = _t72.getNextSibling()
        ) {
          var _r28 = e.getElementByKey(_t72.getKey());
          null !== _r28 &&
            (null == o
              ? (n.insertChild(_r28), (o = _r28))
              : o !== _r28 && n.replaceChild(_r28, o),
            (o = o.nextSibling));
        }
      };
      return jo;
    })(_To5);
    function Ho(t) {
      return t instanceof _jo4;
    }
    function Vo(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t73 = o.__key;
        if (e.has(_t73) && !n.has(_t73)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _Yo = (function (_To2) {
      function Yo(t) {
        var _this2;
        ((_this2 = _To2.call(this, t) || this),
          (_this2.__slotHost = null),
          (_this2.__slots = null));
        return _this2;
      }
      babelHelpers.inheritsLoose(Yo, _To2);
      var _proto9 = Yo.prototype;
      _proto9.afterCloneFrom = function afterCloneFrom(t) {
        (_To2.prototype.afterCloneFrom.call(this, t),
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
      return Yo;
    })(_To5);
    function Jo(t) {
      return t instanceof _Yo;
    }
    function Go(t) {
      var e = t.getLatest().__cachedText;
      return null === e || (!yc() && 0 !== Tc()._dirtyType) ? null : e;
    }
    var _qo = (function (_jo) {
      function qo() {
        var _this3;
        ((_this3 = _jo.call(this, "root") || this),
          (_this3.__cachedText = null));
        return _this3;
      }
      babelHelpers.inheritsLoose(qo, _jo);
      var _proto0 = qo.prototype;
      _proto0.$config = function $config() {
        return this.config("root", { extends: _jo4 });
      };
      _proto0.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        e(51);
      };
      _proto0.getTextContent = function getTextContent() {
        var t = Go(this);
        return null !== t ? t : _jo.prototype.getTextContent.call(this);
      };
      _proto0.getTextContentSize = function getTextContentSize() {
        var t = Go(this);
        return null !== t
          ? t.length
          : _jo.prototype.getTextContentSize.call(this);
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
        for (var _t74 of o) Ho(_t74) || Jo(_t74) || e(282);
        return _jo.prototype.splice.call(this, t, n, o);
      };
      qo.importJSON = function importJSON(t) {
        return Oi().updateFromJSON(t);
      };
      _proto0.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return qo;
    })(_jo4);
    function Xo(t) {
      return t instanceof _qo;
    }
    function Qo(t) {
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
                      var _r29 = n.trim(),
                        _i19 = o.trim();
                      ("" !== _r29 && "" !== _i19 && (e[_r29] = _i19),
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
    function Zo(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && "!important" === o.slice(r).toLowerCase()
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function tr(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = Qo(n),
        r = Qo(e);
      for (var _e66 in r) (delete o[_e66], Zo(t, _e66, r[_e66]));
      for (var _e67 in o) t.removeProperty(_e67);
    }
    var er = Xe()({
      detail: Ze(Qe(Je(), A), { field: "__detail" }),
      format: Ze(Qe(Je(), w), { field: "__format" }),
      mode: Ze(Ge(["normal", "token", "segmented"]), {
        field: "__mode",
        getterTable: R,
        setterTable: P,
      }),
      style: Ze(Ve(), { field: "__style" }),
      text: Ze(Ve(), {
        field: "__text",
        getter: "getTextContent",
        setter: "setTextContent",
      }),
    });
    function nr(t, e) {
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
    function or(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function rr(t, e, n, o, r) {
      var i = o.classList;
      var s = Vi(r, "base");
      (void 0 !== s && i.add.apply(i, Array.from(s)),
        (s = Vi(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, Array.from(s)))
          : c && i.remove.apply(i, Array.from(s)));
      for (var _t75 in w) {
        var _o30 = w[_t75];
        if (((s = Vi(r, _t75)), void 0 !== s))
          if (n & _o30) {
            if (l && ("underline" === _t75 || "strikethrough" === _t75)) {
              e & _o30 && i.remove.apply(i, Array.from(s));
              continue;
            }
            (0 === (e & _o30) ||
              (c && "underline" === _t75) ||
              "strikethrough" === _t75) &&
              i.add.apply(i, Array.from(s));
          } else e & _o30 && i.remove.apply(i, Array.from(s));
      }
      Hi(o, "class");
    }
    function ir(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? T : ""),
        i = Us(),
        s = js(i).$getDOMSlot(n, e, i),
        l = s.getFirstChild();
      if (null === l || l.nodeType !== Node.TEXT_NODE)
        return void s.insertChild(bs().createTextNode(r));
      var c = l,
        a = c.nodeValue;
      if (a !== r)
        if (o || u) {
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
            _t76 = _ref30[0],
            _e68 = _ref30[1],
            _n51 = _ref30[2];
          (0 !== _e68 && c.deleteData(_t76, _e68), c.insertData(_t76, _n51));
        } else c.nodeValue = r;
    }
    function sr(t, e, n, o, r, i) {
      ir(r, t, e);
      var s = i.theme.text;
      void 0 !== s && rr(0, 0, o, t, s);
    }
    function lr(t, e) {
      var n = bs().createElement(e);
      return (n.appendChild(t), n);
    }
    function cr(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _ar2 = (function (_To3) {
      function ar(t, e) {
        var _this4;
        if (t === void 0) {
          t = "";
        }
        ((_this4 = _To3.call(this, e) || this),
          (_this4.__text = t),
          (_this4.__format = 0),
          (_this4.__style = ""),
          (_this4.__mode = 0),
          (_this4.__detail = 0));
        return _this4;
      }
      babelHelpers.inheritsLoose(ar, _To3);
      var _proto1 = ar.prototype;
      _proto1.$config = function $config() {
        return this.config("text", {
          extends: _To5,
          generated: Fo,
          importDOM: {
            "#text": function text() {
              return { conversion: gr, priority: 0 };
            },
            b: function b() {
              return { conversion: fr, priority: 0 };
            },
            code: function code() {
              return { conversion: mr, priority: 0 };
            },
            em: function em() {
              return { conversion: mr, priority: 0 };
            },
            i: function i() {
              return { conversion: mr, priority: 0 };
            },
            mark: function mark() {
              return { conversion: mr, priority: 0 };
            },
            s: function s() {
              return { conversion: mr, priority: 0 };
            },
            span: function span() {
              return { conversion: ur, priority: 0 };
            },
            strong: function strong() {
              return { conversion: mr, priority: 0 };
            },
            sub: function sub() {
              return { conversion: mr, priority: 0 };
            },
            sup: function sup() {
              return { conversion: mr, priority: 0 };
            },
            u: function u() {
              return { conversion: mr, priority: 0 };
            },
          },
          json: er,
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
        return this.__key === Si();
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
        return gi(this.getLatest().__format, t, e);
      };
      _proto1.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto1.isInline = function isInline() {
        return !0;
      };
      _proto1.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = nr(0, n),
          r = or(0, n),
          i = null === o ? r : o,
          s = bs().createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== o && ((l = bs().createElement(r)), s.appendChild(l)),
          sr(l, this, 0, n, this.__text, t));
        var c = this.__style;
        return ("" !== c && tr(s.style, c), s);
      };
      _proto1.updateDOM = function updateDOM(t, n, o) {
        var r = this.__text,
          i = t.__format,
          s = this.__format,
          l = nr(0, i),
          c = nr(0, s),
          a = or(0, i),
          u = or(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _t77 = n.firstChild;
          null == _t77 && e(48);
          var _i20 = bs().createElement(u);
          return (sr(_i20, this, 0, s, r, o), n.replaceChild(_i20, _t77), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && e(49)),
          ir(r, f, this));
        var d = o.theme.text;
        void 0 !== d && i !== s && rr(0, i, s, f, d);
        var h = t.__style,
          g = this.__style;
        return (h !== g && (tr(n.style, g, h), Hi(n, "style")), !1);
      };
      _proto1.exportDOM = function exportDOM(t) {
        var _To3$prototype$export = _To3.prototype.exportDOM.call(this, t),
          n = _To3$prototype$export.element;
        return (
          Ps(n) || e(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = lr(n, "b")),
          this.hasFormat("italic") && (n = lr(n, "i")),
          this.hasFormat("strikethrough") && (n = lr(n, "s")),
          this.hasFormat("underline") && (n = lr(n, "u")),
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
        var e = gi(this.getFormat(), t, null);
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
        xc();
        var n = t,
          o = e;
        var r = hu(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t78 = i.length;
          (void 0 === n && (n = _t78), void 0 === o && (o = _t78));
        } else ((n = 0), (o = 0));
        if (!Ba(r)) return lu(s, n, s, o, "text", "text");
        {
          var _t79 = Si();
          ((_t79 !== r.anchor.key && _t79 !== r.focus.key) || xi(s),
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
        var c = hu();
        if (o && Ba(c)) {
          var _e69 = t + s;
          c.setTextNodeRange(r, _e69, r, _e69);
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
        xc();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = Si(),
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
        for (var _e70 = 0, _o31 = 0; _e70 < i && _o31 <= l; _o31++) {
          var _r30 = t[_o31];
          _r30 > _e70 && (s.push(n.slice(_e70, _r30)), (_e70 = _r30));
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
        var y = hu();
        if (Ba(y)) {
          var _ref31 = y.isBackward()
              ? [y.focus, y.anchor]
              : [y.anchor, y.focus],
            _t80 = _ref31[0],
            _e71 = _ref31[1];
          ("text" === _t80.type && _t80.key === o && (_ = _t80),
            "text" === _e71.type && _e71.key === o && (m = _e71));
        }
        e.isSegmented()
          ? ((f = yr(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = mn(e, f)),
            (p = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t81 = 1; _t81 < c; _t81++) {
          var _n52 = yr(s[_t81]);
          ((_n52.__format = d),
            (_n52.__style = h),
            (_n52.__detail = g),
            (_n52.__state = mn(e, _n52)));
          var _i21 = _n52.__key;
          (r === o && xi(_i21), x.push(_n52));
        }
        var S = _ ? _.offset : null,
          C = m ? m.offset : null;
        var T = 0;
        for (var _t82 of x) {
          if (!_ && !m) break;
          var _e72 = T + _t82.getTextContentSize();
          if (
            (null !== _ &&
              null !== S &&
              S <= _e72 &&
              S >= T &&
              (_.set(_t82.getKey(), S - T, "text"), S < _e72 && (_ = null)),
            null !== m && null !== C && C <= _e72 && C >= T)
          ) {
            m.set(_t82.getKey(), C - T, "text");
            break;
          }
          T = _e72;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            (null !== e && yi(e), null !== n && yi(n));
          })(this);
          var _t83 = u.getWritable(),
            _e73 = this.getIndexWithinParent();
          (p
            ? (_t83.splice(_e73, 0, x), this.remove())
            : _t83.splice(_e73, 1, x),
            Ba(y) && _u(y, u, _e73, c - 1));
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
        Si() === r && xi(o);
        var l = hu();
        if (Ba(l)) {
          var _e74 = l.anchor,
            _i22 = l.focus;
          (null !== _e74 && _e74.key === r && yu(_e74, n, o, t, s),
            null !== _i22 && _i22.key === r && yu(_i22, n, o, t, s));
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
      return babelHelpers.createClass(ar, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_To5);
    function ur(t) {
      return { forChild: Sr(t.style), node: null };
    }
    function fr(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Sr(e.style, n ? void 0 : "bold"), node: null };
    }
    var dr = new WeakMap();
    function hr(t) {
      if (!Ps(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function gr(t) {
      var n = t;
      null === t.parentElement && e(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = dr.get(n)) && !hr(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t84 = 0; _t84 < o.length; _t84++) dr.set(o[_t84], r);
          return r;
        })(n)
      )
        return { node: vu(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t85 = n,
          _e75 = !0;
        for (; null !== _t85 && null !== (_t85 = pr(_t85, !1)); ) {
          var _n53 = _t85.textContent || "";
          if (_n53.length > 0) {
            (/[ \t\n]$/.test(_n53) && (o = o.slice(1)), (_e75 = !1));
            break;
          }
        }
        _e75 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t86 = n,
          _e76 = !0;
        for (; null !== _t86 && null !== (_t86 = pr(_t86, !0)); )
          if (
            (_t86.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e76 = !1;
            break;
          }
        _e76 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: yr(o) };
    }
    function pr(t, e) {
      var n = t;
      for (;;) {
        var _t87 = void 0;
        for (; null === (_t87 = e ? n.nextSibling : n.previousSibling); ) {
          var _t88 = n.parentElement;
          if (null === _t88) return null;
          n = _t88;
        }
        if (((n = _t87), Ps(n))) {
          var _t89 = n.style.display;
          if (
            ("" === _t89 && !Bs(n)) ||
            ("" !== _t89 && !_t89.startsWith("inline"))
          )
            return null;
        }
        var _o32 = n;
        for (; null !== (_o32 = e ? n.firstChild : n.lastChild); ) n = _o32;
        if (fi(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var _r = {
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
    function mr(t) {
      var e = _r[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Sr(t.style, e), node: null };
    }
    function yr(t) {
      if (t === void 0) {
        t = "";
      }
      return hs(new _ar2(t));
    }
    function xr(t) {
      return t instanceof _ar2;
    }
    function Sr(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        i = o.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign,
        a = t.textTransform;
      return function (t) {
        return xr(t) || cr(t)
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
    function Cr(t, n) {
      var o = t.type,
        r = t.key,
        i = t.offset,
        s = ps(t.key);
      return "text" === o
        ? (xr(s) || e(266, s.getType(), r), Sf(s, n, i))
        : (Ho(s) || e(267, s.getType(), r), Fr(s, t.offset, n));
    }
    function Tr(t, n) {
      var o = n.origin,
        r = n.direction,
        i = "next" === r;
      hf(n)
        ? t.set(o.getKey(), n.offset, "text")
        : gf(n)
          ? xr(o)
            ? t.set(o.getKey(), Cf(o, r), "text")
            : t.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((pf(n) && Ho(o)) || e(268),
            t.set(o.getKey(), i ? 0 : o.getChildrenSize(), "element"));
    }
    function vr(t) {
      var e = hu(),
        n = Ba(e) ? e : cu();
      return (Nr(n, t), wi(n), n);
    }
    function Nr(t, e) {
      (Tr(t.anchor, e.anchor), Tr(t.focus, e.focus));
    }
    function br(t) {
      var e = t.anchor,
        n = t.focus,
        o = Cr(e, "next"),
        r = Cr(n, "next"),
        i = Ff(o, r) <= 0 ? "next" : "previous";
      return Df(Mf(o, i), Mf(r, i));
    }
    function kr(t) {
      var e = t.direction,
        n = t.origin,
        o = xf(n, af(e)).getNodeAtCaret();
      return o ? xf(o, e) : vf(n.getParentOrThrow(), e);
    }
    function Er(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o33 = pf(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o33;
        _o33 = _o33.getParentCaret(e)
      )
        n.push(kr(_o33));
      return n;
    }
    function Or(t) {
      return !!t && t.origin.isAttached();
    }
    function Mr(t, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (t.isCollapsed()) return t;
      var o = "root",
        r = "next";
      var i = n;
      var s = Ir(t, r);
      var l = s.anchor.origin;
      for (; null !== l && !fs(l); ) l = l.getParent();
      var c = Ho(l) ? l.getFirstChild() : null,
        a = Er(s.anchor, o),
        u = Er(s.focus.getFlipped(), o),
        f = new Set(),
        d = [];
      for (var _t90 of s.iterNodeCarets(o))
        if (pf(_t90)) f.add(_t90.origin.getKey());
        else if (gf(_t90)) {
          var _e77 = _t90.origin;
          (Ho(_e77) && !f.has(_e77.getKey())) || d.push(_e77);
        }
      var h = new Set();
      for (var _t91 of d) {
        var _e78 = _t91.getParent();
        (null === _e78 || f.has(_e78.getKey()) || h.add(_e78), _i(_t91));
      }
      for (var _t92 of h)
        !_t92.canBeEmpty() &&
          !fs(_t92) &&
          _t92.isEmpty() &&
          _t92.isAttached() &&
          _t92.remove();
      for (var _t93 of s.getTextSlices()) {
        if (!_t93) continue;
        var _e79 = _t93.caret.origin,
          _n54 = _e79.getTextContentSize(),
          _o34 = kr(xf(_e79, r)),
          _s1 = _e79.getMode();
        if (
          (Math.abs(_t93.distance) === _n54 && "removeEmptySlices" === i) ||
          ("token" === _s1 && 0 !== _t93.distance)
        )
          _o34.remove();
        else if (0 !== _t93.distance) {
          i = "removeEmptySlices";
          var _e80 = _t93.removeTextSlice();
          var _n55 = _t93.caret.origin;
          if ("segmented" === _s1) {
            var _t94 = _e80.origin,
              _n56 = yr(_t94.getTextContent())
                .setStyle(_t94.getStyle())
                .setFormat(_t94.getFormat());
            (_o34.replaceOrInsert(_n56), (_e80 = Sf(_n56, r, _e80.offset)));
          }
          (_n55.is(a[0].origin) && (a[0] = _e80),
            _n55.is(u[0].origin) && (u[0] = _e80.getFlipped()));
        }
      }
      var g = wr(a),
        p = wr(u),
        _ = (function (t, e, n) {
          var o = t && t.getParentAtCaret(),
            r = e && e.getParentAtCaret(),
            i = o && r && Kf(o, r);
          if (!i || "branch" !== i.type) return null;
          var s = function s(t, e) {
              var o;
              for (
                var _r31 = t;
                _r31 && !_r31.is(i.commonAncestor);
                _r31 = _r31.getParent()
              ) {
                if (fs(_r31)) return;
                (e && !n.has(_r31.__key)) || !Ws(_r31) || (o = _r31);
              }
              return o;
            },
            l = s(o, !1),
            c = l && s(r, !0);
          return l && c && 0 === Vu(c).length ? [l, c] : null;
        })(g, p, f);
      if (_) {
        var _t95 = _[0],
          _e81 = _[1];
        vf(_t95, "previous").splice(0, _e81.getChildren());
        var _n57 = _e81.getParent();
        for (_e81.remove(!0); _n57 && _n57.isEmpty(); ) {
          var _t96 = _n57;
          ((_n57 = _n57.getParent()), _t96.remove(!0));
        }
      } else if (p) {
        var _t97 = (function (t) {
            if (pf(t)) {
              var _e83 = t.origin;
              if (Ws(_e83)) return _e83;
            } else {
              var _e84 = t.getParentAtCaret();
              if (_e84 && Ws(_e84)) return _e84;
            }
            return null;
          })(p),
          _e82 = _t97 && _t97.getParent(),
          _n58 = _t97 && _t97.getParents().findLast(us);
        if (
          _t97 &&
          _e82 &&
          !Xo(_e82) &&
          _t97.isEmpty() &&
          f.has(_t97.getKey()) &&
          0 === Vu(_t97).length &&
          (!_n58 || f.has(_n58.getKey()))
        ) {
          _t97.remove(!0);
          var _n59 = _e82;
          for (; _n59 && !Xo(_n59) && _n59.isEmpty(); ) {
            var _t98 = _n59.getParent();
            if (
              _t98 &&
              Xo(_t98) &&
              _t98.getChildrenSize() <= 1 &&
              _n59.canBeEmpty()
            )
              break;
            var _e85 = _n59;
            ((_n59 = _t98), _e85.remove(!0));
          }
        }
      }
      null !== Mi(l, c) || null === l || l.isAttached() || Mi(Oi(), null);
      var m = wr([g, p].concat(Array.from(a), Array.from(u)));
      if (m) return Af(Mf(m, t.direction));
      e(
        269,
        JSON.stringify(
          a.map(function (t) {
            return t.origin.__key;
          }),
        ),
      );
    }
    function wr(t) {
      var e = t.find(Or);
      return e && Ar(e);
    }
    function Ar(t) {
      var e = (function (t) {
          var e = t;
          for (; pf(e); ) {
            var _t99 = bf(e);
            if (!pf(_t99)) break;
            e = _t99;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (xr(e.origin)) return hf(e) ? e : Sf(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return gf(o) && xr(o.origin) ? Sf(o.origin, n, af(n)) : e;
    }
    function Dr(t) {
      return hf(t) && t.offset !== Cf(t.origin, t.direction);
    }
    function Ir(t, e) {
      return t.direction === e ? t : Df(Mf(t.focus, e), Mf(t.anchor, e));
    }
    function Fr(t, e, n) {
      var o = t.getChildrenSize(),
        r = (e > 0 ? Math.min(Math.ceil(e), o) : 0) - ("next" === n ? 1 : 0),
        i = r < 0 || r >= o ? null : t.getChildAtIndex(r);
      return null === i ? vf(t, n) : xf(i, n);
    }
    function Pr(t) {
      var n = t.origin,
        o = t.offset,
        r = t.direction;
      if (o === Cf(n, r)) return t.getSiblingCaret();
      if (o === Cf(n, af(r))) return kr(t.getSiblingCaret());
      var _n$splitText = n.splitText(o),
        i = _n$splitText[0];
      return (xr(i) || e(281), Mf(xf(i, "next"), r));
    }
    function Rr(t, e) {
      for (var _n60 of t)
        if (null !== _n60 && _n60.caret.origin.is(e)) return _n60;
    }
    function Lr(t, e) {
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
        s = e && i && pu(e, i) ? n.getIndexWithinParent() : -1,
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
      i && e && e !== hu() && _u(e, i, s, c.length - 1);
      for (var _ref33 of l) {
        var _t100 = _ref33[0];
        var _e86 = _ref33[1];
        null !== _e86 && _t100.set(a.__key, _e86, "text");
      }
      return a;
    }
    function Kr(t, e) {
      return !0;
    }
    function Br(t, _temp) {
      var _ref34 = _temp === void 0 ? {} : _temp,
        _ref34$$copyElementNo = _ref34.$copyElementNode,
        e = _ref34$$copyElementNo === void 0 ? ds : _ref34$$copyElementNo,
        _ref34$$splitTextPoin = _ref34.$splitTextPointCaretNext,
        n = _ref34$$splitTextPoin === void 0 ? Pr : _ref34$$splitTextPoin,
        _ref34$rootMode = _ref34.rootMode,
        o = _ref34$rootMode === void 0 ? "shadowRoot" : _ref34$rootMode,
        _ref34$$shouldSplit = _ref34.$shouldSplit,
        r = _ref34$$shouldSplit === void 0 ? Kr : _ref34$$shouldSplit,
        _ref34$removeEmptyDes = _ref34.removeEmptyDestination,
        i = _ref34$removeEmptyDes === void 0 ? !1 : _ref34$removeEmptyDes;
      if (hf(t)) return n(t);
      var s = t.getParentCaret(o);
      if (s) {
        var _n61 = s.origin;
        if (pf(t)) {
          var _t101 = kr(s);
          if (i && _n61.isEmpty()) return (_n61.remove(), _t101);
          if (!_n61.canBeEmpty() || !r(_n61, "first")) return _t101;
        }
        var _o35 = Ru((l = t).getNodeAtCaret(), l.direction);
        (_o35.length > 0 || (!i && _n61.canBeEmpty() && r(_n61, "last"))) &&
          s.insert(e(_n61).splice(0, 0, _o35));
      }
      var l;
      return s;
    }
    function zr(t, n, o) {
      var r = Mf(n, "next");
      (hf(r) &&
        (0 === r.offset
          ? (r = xf(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = xf(r.origin, "next"))),
        r.origin.is(t) &&
          (gf(r) || e(342, t.getKey(), t.getType()), (r = kr(r))),
        (t.is(r.getNodeAtCaret()) || t.is(r.getFlipped().getNodeAtCaret())) &&
          t.remove(!0));
      for (var _t102 = r; _t102; _t102 = Br(_t102, o)) r = _t102;
      return (
        hf(r) && e(283),
        r.insert(t.isInline() ? jr().append(t) : t),
        Mf(xf(t.getLatest(), "next"), n.direction)
      );
    }
    function $r(t, e) {
      var n = Ir(Ba(e) ? br(e) : e, "next"),
        o = Uu(n.anchor.origin),
        r = Uu(t.getLatest());
      if (null === o ? null !== r : !o.is(r)) return !1;
      var i = Ar(vf(t, "next")),
        s = Mf(Ar(vf(t, "previous")), "next");
      return Ff(n.anchor, i) <= 0 && Ff(n.focus, s) >= 0;
    }
    var _Wr = (function (_jo2) {
      function Wr() {
        return _jo2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Wr, _jo2);
      var _proto10 = Wr.prototype;
      _proto10.$config = function $config() {
        return this.config("paragraph", {
          extends: _jo4,
          generated: Po,
          importDOM: {
            p: function p() {
              return { conversion: Ur, priority: 0 };
            },
          },
        });
      };
      _proto10.createDOM = function createDOM(t) {
        var _e$classList;
        var e = bs().createElement("p"),
          n = Vi(t.theme, "paragraph");
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
        var _jo2$prototype$export = _jo2.prototype.exportDOM.call(this, t),
          e = _jo2$prototype$export.element;
        if (Ps(e)) {
          this.isEmpty() && e.append(bs().createElement("br"));
          var _t103 = this.getFormatType();
          _t103 && (e.style.textAlign = _t103);
        }
        return { element: e };
      };
      _proto10.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = _jo2.prototype.exportJSON.call(this, t);
        if (void 0 === e.textFormat || void 0 === e.textStyle) {
          var _n62 = this.getChildren().find(xr),
            _o36 = _n62 ? _n62.getFormat() : this.getTextFormat(),
            _r32 = _n62 ? _n62.getStyle() : this.getTextStyle();
          ((t && 0 === _o36) || (e.textFormat = _o36),
            (t && "" === _r32) || (e.textStyle = _r32));
        }
        return e;
      };
      _proto10.extractWithChild = function extractWithChild(t, e, n) {
        if (!Ba(e)) return !1;
        if (
          "" === this.getFormatType() &&
          0 === this.getIndent() &&
          "" === this.getStyle()
        )
          return !1;
        if ($r(this, e)) {
          var _t104 = this.getTextContent();
          return "" !== _t104 && e.getTextContent() === _t104;
        }
        return !1;
      };
      _proto10.insertNewAfter = function insertNewAfter(t, e) {
        var n = jr();
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
            return xr(t) && !/\S/.test(t.getTextContent());
          })
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Wr;
    })(_jo4);
    function Ur(t) {
      var e = jr();
      if ((tl(e, t), Qs(t, e), "" === e.getFormatType())) {
        var _n63 = t.getAttribute("align");
        _n63 && _n63 && _n63 in D && e.setFormat(_n63);
      }
      return (Zs(e, t), { node: e });
    }
    function jr() {
      return hs(new _Wr());
    }
    function Hr(t) {
      return t instanceof _Wr;
    }
    var Vr = Xe()({
      detail: tn(Je(2), { getter: { field: "__detail" }, setter: null }),
      mode: tn(Ge(["normal"]), {
        getter: { field: "__mode", getterTable: { 0: "normal" } },
        setter: null,
      }),
      text: tn(Ve("\t"), {
        getter: { field: "__text", method: "getTextContent" },
        setter: null,
      }),
    });
    var _Yr = (function (_ar) {
      function Yr(t) {
        var _this5;
        if (t === void 0) {
          t = void 0;
        }
        ((_this5 = _ar.call(this, "\t", t) || this), (_this5.__detail = 2));
        return _this5;
      }
      babelHelpers.inheritsLoose(Yr, _ar);
      var _proto11 = Yr.prototype;
      _proto11.$config = function $config() {
        return this.config("tab", { extends: _ar2, generated: Lo, json: Vr });
      };
      _proto11.createDOM = function createDOM(t) {
        var _e$classList2;
        var e = _ar.prototype.createDOM.call(this, t),
          n = Vi(t.theme, "tab");
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
        return _ar.prototype.setTextContent.call(this, "\t");
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
      return Yr;
    })(_ar2);
    function Jr() {
      return hs(new _Yr());
    }
    function Gr(t) {
      return t instanceof _Yr;
    }
    var qr = null;
    function Xr(t) {
      qr = t;
    }
    var Qr = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var Zr = 1;
    function ti(t, n) {
      var o = ei(t, n);
      return (void 0 === o && e(30, n), o);
    }
    function ei(t, e) {
      return t._nodes.get(e);
    }
    var ni =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function oi(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return di(e) || Ss(e) ? Is(e) : null;
            })();
      if (!Ps(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = bi(n),
        r = n.nodeName;
      return (
        vo(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == ci(n)))
      );
    }
    var ri = oi;
    function ii(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        li(e) === t &&
        t.read("latest", function () {
          return !oi(e);
        })
      );
    }
    function si(t) {
      return t instanceof _sc;
    }
    function li(t) {
      var e = t;
      for (; null != e; ) {
        var _t105 = ci(e);
        if (si(_t105)) return _t105;
        e = Zi(e);
      }
      return null;
    }
    function ci(t) {
      return t ? t.__lexicalEditor : null;
    }
    function ai(t) {
      return Gr(t) || t.isToken();
    }
    function ui(t) {
      return ai(t) || t.isSegmented();
    }
    function fi(t) {
      return Rs(t) && 3 === t.nodeType;
    }
    function di(t) {
      return Rs(t) && 9 === t.nodeType;
    }
    function hi(t) {
      var e = t;
      for (; null != e; ) {
        if (fi(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function gi(t, e, n) {
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
    function pi(t, e) {
      var n = (function () {
        var t = qr;
        return ((qr = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (xc(), Sc());
      var o = Tc(),
        r = Cc(),
        i = "" + Zr++;
      (r._nodeMap.set(i, t),
        Ho(t) ? o._dirtyElements.set(i, !0) : o._dirtyLeaves.add(i),
        o._cloneNotNeeded.set(i, t),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = i));
    }
    function _i(t) {
      Du(null === t.getParent() ? t : t.getWritable());
    }
    var mi = _i;
    function yi(t) {
      (Sc(), So(t) && e(323, t.__key, t.__type));
      var n = null !== t.__parent ? t.__parent : Bu(t) ? t.__slotHost : null,
        o = Cc(),
        r = Tc(),
        i = o._nodeMap,
        s = r._dirtyElements;
      null !== n &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t106 = e.get(o);
            if (void 0 === _t106) break;
            (n.set(o, !1),
              (o =
                null !== _t106.__parent
                  ? _t106.__parent
                  : Bu(_t106)
                    ? _t106.__slotHost
                    : null));
          }
        })(n, i, s);
      var l = t.__key;
      (0 === r._dirtyType && (r._dirtyType = 1),
        Ho(t) ? s.set(l, !0) : r._dirtyLeaves.add(l));
    }
    function xi(t) {
      xc();
      var e = Tc(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t107 = Ci(n);
          null !== _t107 && _t107.getWritable();
        }
        if (null !== t) {
          var _e87 = Ci(t);
          null !== _e87 && _e87.getWritable();
        }
      }
    }
    function Si() {
      return yc() ? null : Tc()._compositionKey;
    }
    function Ci(t, e) {
      var n = (e || Cc())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function Ti(t, e) {
      var n = Ni(t, Tc());
      return void 0 !== n ? Ci(n, e) : null;
    }
    function vi(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function Ni(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function bi(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t108 = Ti(n, e);
        if (null !== _t108) return _t108;
        n = Zi(n);
      }
      return null;
    }
    function ki(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Ei(t) {
      return t.read(function () {
        return Oi().getTextContent();
      });
    }
    function Oi() {
      return Cc()._nodeMap.get("root");
    }
    function Mi(t, e) {
      if (
        !(
          fs(t) &&
          t.isAttached() &&
          (Xo(t) ? 0 === t.getChildrenSize() : t.isEmpty()) &&
          (Xo(t) || (null !== e && Ws(e)))
        )
      )
        return null;
      var n = jr();
      return (t.append(n), n);
    }
    function wi(t) {
      xc();
      var e = Cc();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        Ba(t) && Tc()._slotsUsed && ru(t)),
        (e._selection = t));
    }
    function Ai() {
      (xc(), xe(Tc()));
    }
    function Di(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t109 = Ni(n, e);
          if (void 0 !== _t109) return _t109;
          n = Zi(n);
        }
        return null;
      })(t, Tc());
      return null === e ? null : Ci(e);
    }
    function Ii(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Fi(t) {
      var e = [];
      for (var _n64 = t; null !== _n64; _n64 = _n64._parentEditor) e.push(_n64);
      return e;
    }
    var Pi = 0;
    function Ri() {
      return r
        ? Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substring(0, 5)
        : "s" + (++Pi).toString(36);
    }
    function Li(t) {
      return fi(t) ? t.nodeValue : null;
    }
    function Ki(t, e, n) {
      var o = ys(ls(e));
      if (null === o) return;
      var r = Os(o, e._rootElement),
        i = r.anchorNode;
      var s = r.anchorOffset,
        l = r.focusOffset;
      if (null !== i) {
        var _e88 = Li(i);
        var _o37 = bi(i);
        if (null !== _e88 && xr(_o37)) {
          if ((_e88 === T || _e88 === N) && n) {
            var _t110 = n.length;
            ((_e88 = n), (s = _t110), (l = _t110));
          }
          null !== _e88 && Bi(_o37, _e88, s, l, t);
        }
      }
    }
    function Bi(t, e, n, o, r) {
      var i = t;
      if (i.isAttached() && (r || !i.isDirty())) {
        var _s10 = i.isComposing();
        if (i.isToken() && _s10) return;
        var _l7 = e;
        if (
          (_s10 || r) &&
          (e.endsWith(T) && (_l7 = e.slice(0, -T.length)), r)
        ) {
          var _t111 = N;
          var _e89;
          for (; -1 !== (_e89 = _l7.indexOf(_t111)); )
            ((_l7 = _l7.slice(0, _e89) + _l7.slice(_e89 + _t111.length)),
              null !== n && n > _e89 && (n = Math.max(_e89, n - _t111.length)),
              null !== o && o > _e89 && (o = Math.max(_e89, o - _t111.length)));
        }
        var _c6 = i.getTextContent();
        if (r || _l7 !== _c6) {
          var _e90 = hu();
          if ("" === _l7) {
            if ((xi(null), _ || g || x)) i.remove();
            else {
              var _t112 = Tc();
              (zi(i, "", _e90),
                setTimeout(function () {
                  _t112.update(function () {
                    i.isAttached() && "" === i.getTextContent() && i.remove();
                  });
                }, 20));
            }
            return;
          }
          var _r33 = i.getParent(),
            _c7 = gu(),
            _a4 = i.getTextContentSize(),
            _u4 = Si(),
            _f5 = i.getKey();
          if (
            (i.isToken() && !_s10) ||
            (null !== _u4 && _f5 === _u4 && !_s10) ||
            (Ba(_c7) &&
              ((null !== _r33 &&
                !_r33.canInsertTextBefore() &&
                0 === _c7.anchor.offset) ||
                (_c7.anchor.key === t.__key &&
                  0 === _c7.anchor.offset &&
                  !i.canInsertTextBefore() &&
                  !_s10) ||
                (_c7.focus.key === t.__key &&
                  _c7.focus.offset === _a4 &&
                  !i.canInsertTextAfter() &&
                  !_s10)))
          )
            return void i.markDirty();
          if (!Ba(_e90) || null === n || null === o)
            return void zi(i, _l7, _e90);
          if ((_e90.setTextNodeRange(i, n, i, o), i.isSegmented())) {
            var _t113 = yr(i.getTextContent());
            (i.replace(_t113), (i = _t113));
          }
          zi(i, _l7, _e90);
        }
      }
    }
    function zi(t, e, n) {
      if ((t.setTextContent(e), Ba(n))) {
        var _e91 = t.getKey();
        var _o38 = !1;
        for (var _r34 of ["anchor", "focus"]) {
          var _i23 = n[_r34];
          "text" === _i23.type &&
            _i23.key === _e91 &&
            ((_i23.offset = Cf(t, _i23.offset, "clamp")), (_o38 = !0));
        }
        _o38 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function $i(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function Wi(t, e) {
      return (
        $i(t, e, "altKey") &&
        $i(t, e, "ctrlKey") &&
        $i(t, e, "shiftKey") &&
        $i(t, e, "metaKey")
      );
    }
    function Ui(t) {
      var e = t;
      for (; null !== e; ) {
        var _t114 = e.getParent();
        if (null === _t114) return null;
        if (Xo(_t114)) return e;
        e = _t114;
      }
      return null;
    }
    function ji(t, e) {
      var n = t.anchor,
        o = t.focus,
        r = n.key,
        i = n.offset,
        s = n.type,
        l = o.key,
        c = o.offset,
        a = o.type;
      if ((Eo(t), !Xo(e))) return t;
      var u = Ui(n.getNode());
      return (
        Ho(u) &&
          u.isShadowRoot() &&
          u.is(Ui(o.getNode())) &&
          (n.set(r, i, s), o.set(l, c, a)),
        t
      );
    }
    function Hi(t, e) {
      "" === t.getAttribute(e) && t.removeAttribute(e);
    }
    function Vi(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t115 = Bf(r);
        return ((n[e] = _t115), _t115);
      }
      return r;
    }
    function Yi(t, n, o, r, i) {
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
    function Ji(t, e, n) {
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
    function Gi(t, e) {
      var n = t.offset;
      if ("element" === t.type) return Ji(t.getNode(), e, n);
      {
        var _o39 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o39.getTextContentSize())) {
          var _t116 = e ? _o39.getPreviousSibling() : _o39.getNextSibling();
          return null === _t116
            ? Ji(
                _o39.getParentOrThrow(),
                e,
                _o39.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t116;
        }
      }
      return null;
    }
    function qi(t) {
      var e = ls(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Xi(t, e) {
      return Fc(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
    }
    function Qi(t, n) {
      var o = t._keyToDOMMap.get(n);
      return (void 0 === o && e(75, n), o);
    }
    function Zi(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return Ss(n) ? n.host : null;
    }
    function ts(t) {
      return di(t) ? t : Ps(t) ? t.ownerDocument : null;
    }
    function es(t, e) {
      var n = parseFloat(t);
      return isFinite(n) ? (t.endsWith("%") ? (n * e) / 100 : n) : 0;
    }
    function ns(t, e, n, o) {
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
        d = f + es(s.scrollPaddingLeft, r) * a,
        h = f + (r - es(s.scrollPaddingRight, r)) * a;
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
    function os(t) {
      (xc(), Tc()._updateTags.add(t));
    }
    function rs(t) {
      (xc(), Tc()._deferred.push(t));
    }
    function is(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function ss(t) {
      var e = ts(t);
      return e ? e.defaultView : null;
    }
    function ls(t) {
      var n = t._window;
      return (null === n && e(78), n);
    }
    function cs(t) {
      return (Ho(t) && t.isInline()) || (Jo(t) && t.isInline());
    }
    function as(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== zu(e) && Ho(e)) return e;
        var _t117 = e.getParentOrThrow();
        if (fs(_t117)) return _t117;
        e = _t117;
      }
      return e;
    }
    function us(t) {
      return Ho(t) && t.isShadowRoot();
    }
    function fs(t) {
      return Xo(t) || us(t);
    }
    function ds(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t, Qr);
      return (
        pi(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function hs(t) {
      var n = Tc(),
        o = t.getType(),
        r = ei(n, o);
      void 0 === r && e(200, t.constructor.name, o);
      var i = r.replace,
        s = r.replaceWithKlass;
      if (null !== i) {
        var _n65 = i(t),
          _r35 = _n65.constructor;
        return (
          null !== s
            ? _n65 instanceof s ||
              e(
                201,
                s.name,
                s.getType(),
                _r35.name,
                _r35.getType(),
                t.constructor.name,
                o,
              )
            : (_n65 instanceof t.constructor && _r35 !== t.constructor) ||
              e(202, _r35.name, _r35.getType(), t.constructor.name, o),
          _n65.__key === t.__key &&
            e(203, t.constructor.name, o, _r35.name, _r35.getType()),
          _n65
        );
      }
      return t;
    }
    function gs(t, n) {
      !Xo(t.getParent()) || Ho(n) || Jo(n) || e(99);
    }
    function ps(t) {
      var n = Ci(t);
      return (null === n && e(63, t), n);
    }
    function _s(t) {
      if (!t || t.isInline()) return !1;
      if (Jo(t)) return !0;
      if (Ho(t)) {
        if (t.isShadowRoot()) {
          var _e92 = t.getParent();
          return !(Ho(_e92) && _e92.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function ms(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function ys(t) {
      return r ? (t || window).getSelection() : null;
    }
    function xs(t) {
      var e = ss(t);
      return e ? e.getSelection() : null;
    }
    function Ss(t) {
      return Ls(t) && "host" in t;
    }
    var Cs = [];
    function Ts(t) {
      var e = t.getRootNode();
      if (e === t || !Ss(e)) return Cs;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t118 = o.getRootNode();
        if (_t118 === o || !Ss(_t118)) break;
        (n.push(_t118), (o = _t118.host));
      }
      return n;
    }
    function* vs(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t119 = (di(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o40 = void 0;
        for (; (_o40 = _t119.nextNode()); )
          _o40.shadowRoot && e.push(_o40.shadowRoot);
      }
    }
    function Ns(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function bs() {
      var t = bc();
      return Ns(null !== t ? t._rootElement : null);
    }
    function ks(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = Ts(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e93 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e93) return _e93;
      } catch (t) {}
      try {
        var _e94 = o.apply(t, n)[0];
        if (void 0 !== _e94) return _e94;
      } catch (t) {}
      return null;
    }
    function Es(t, e) {
      var n = ks(t, e);
      if (null !== n) {
        var _t120 = Ms(n);
        if (null !== _t120) return _t120;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function Os(t, e) {
      var n = ks(t, e);
      return null === n ? t : ws(n, As(t));
    }
    function Ms(t) {
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
    function ws(t, e) {
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
    function As(t) {
      return t.direction;
    }
    function Ds(t) {
      var e = t.getRootNode();
      return di(e) || Ss(e) ? e.activeElement : null;
    }
    function Is(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t121 = e.shadowRoot.activeElement;
        if (null === _t121) break;
        e = _t121;
      }
      return e;
    }
    function Fs(t) {
      var e = t.target;
      if (
        null !== e &&
        Ps(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e95 = t.composedPath();
        if (_e95.length > 0) return _e95[0];
      }
      return e;
    }
    function Ps(t) {
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
        !(!Ps(t) || !t.style.display.startsWith("inline")) ||
        Ks.test(t.nodeName)
      );
    }
    var zs =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function $s(t) {
      return (
        (!Ps(t) || !t.style.display.startsWith("inline")) && zs.test(t.nodeName)
      );
    }
    function Ws(t) {
      if (Jo(t) && !t.isInline()) return !0;
      if (!Ho(t) || fs(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || ql(e) || xr(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Us() {
      return Tc();
    }
    function js(t) {
      if (t === void 0) {
        t = Us();
      }
      return t._config.dom || oc;
    }
    function Hs(t, n, o) {
      if (o === void 0) {
        o = Us();
      }
      var r = js(o).$getDOMSlot(t, n, o);
      return (Ho(t) && (Vs(r) || e(344, t.getKey(), t.getType())), r);
    }
    function Vs(t) {
      return t instanceof _ae;
    }
    function Ys(t, e, n) {
      if (n === void 0) {
        n = Us();
      }
      return hi(Hs(t, e, n).element);
    }
    var Js = new WeakMap(),
      Gs = new Map();
    function qs(t) {
      if (!t._readOnly && t.isEmpty()) return Gs;
      t._readOnly || e(192);
      var n = Js.get(t);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref36 of t._nodeMap) {
              var _n66 = _ref36[0];
              var _o41 = _ref36[1];
              {
                var _t122 = _o41.__type;
                var _r36 = e.get(_t122);
                (_r36 || ((_r36 = new Map()), e.set(_t122, _r36)),
                  _r36.set(_n66, _o41));
              }
            }
            return e;
          })(t)),
          Js.set(t, n)),
        n
      );
    }
    function Xs(t) {
      var e = t.constructor.clone(t, Qr);
      return (e.afterCloneFrom(t), e);
    }
    function Qs(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t123 = parseInt(n, 10);
        if (Number.isFinite(_t123) && _t123 >= 0)
          return void e.setIndent(_t123);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function Zs(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function tl(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
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
    function ol(t, e) {
      if (e === void 0) {
        e = Us();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function rl(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (Ps(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== Ni(n, e)) return !1;
        n = Zi(n);
      }
      return !1;
    }
    function il(t, e) {
      return Ue(t, e) && t[e] !== _To5[e];
    }
    var sl = new WeakMap();
    function ll(t) {
      var n = sl.get(t);
      return void 0 !== n
        ? n
        : (function (t) {
            var n =
                null != t.prototype && B in t.prototype
                  ? t.prototype[B]()
                  : void 0,
              o = (function (t) {
                if (!(t === _To5 || t.prototype instanceof _To5)) {
                  var _n67 = "<unknown>",
                    _o42 = "<unknown>";
                  try {
                    _n67 = t.getType();
                  } catch (t) {}
                  try {
                    _sc.version && (_o42 = JSON.parse(_sc.version));
                  } catch (t) {}
                  e(290, t.name, _n67, _o42);
                }
                return t === _Yo || t === _jo4 || t === _To5;
              })(t),
              r = !o && il(t, "getType") ? t.getType : void 0,
              i = r && !(al in r) ? r.call(t) : void 0;
            var s,
              l = i;
            if (n)
              if (i) s = n[i];
              else {
                for (var _ref38 of Object.entries(n)) {
                  var _t124 = _ref38[0];
                  var _e96 = _ref38[1];
                  ((l = _t124), (s = _e96));
                }
                if (!s)
                  for (var _t125 of Object.getOwnPropertySymbols(n)) {
                    var _e97 = n[_t125];
                    if (_e97) {
                      s = _e97;
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
            sl.set(t, c);
            try {
              var _n68 = (function (t) {
                  var n = t.prototype,
                    o = new Map(),
                    _l8 = _l(t),
                    r = _l8.fieldsBaseFirst;
                  for (var _ref40 of r) {
                    var _i25 = _ref40[0];
                    var _s11 = _ref40[1];
                    {
                      var _r38 = xl(t, _i25, _s11);
                      if (null === _r38) continue;
                      if (ve(_r38)) {
                        var _n69 = _r38.field;
                        if (
                          ("__proto__" === _n69 && e(430, t.name, _i25),
                          void 0 !== _r38.setterTable)
                        ) {
                          var _n70 = _r38.setterTable,
                            _o43 = _s11.meta;
                          for (var _r39 of "enum" === _o43.kind
                            ? _o43.values
                            : [_s11.defaultValue])
                            Ue(_n70, String(_r39)) ||
                              e(431, t.name, _i25, JSON.stringify(_r39));
                        }
                        o.set(_i25, {
                          field: _n69,
                          key: _i25,
                          kind: "ownField",
                          schema: _s11,
                          setterTable: _r38.setterTable,
                        });
                        continue;
                      }
                      var _l9 = n[_r38];
                      ("function" != typeof _l9 && e(432, t.name, _i25, _r38),
                        o.set(_i25, {
                          key: _i25,
                          kind: "field",
                          schema: _s11,
                          setter: _l9,
                        }));
                    }
                  }
                  return 0 === o.size ? ul : [].concat(Array.from(o.values()));
                })(t),
                _r37 = (function (t) {
                  var n = t.prototype,
                    o = new Map();
                  for (var _ref42 of _l(t).fieldsDerivedFirst) {
                    var _r40 = _ref42[0];
                    var _i26 = _ref42[1];
                    {
                      var _s12 = yl(t, _r40, _i26);
                      if (null === _s12) continue;
                      if (ve(_s12)) {
                        var _l0 = _s12.field;
                        "__proto__" === _l0 && e(426, t.name, _r40);
                        var _c8 = _s12.when;
                        var _a6 = void 0;
                        if (void 0 !== _c8) {
                          var _o44 = n[_c8];
                          ("function" != typeof _o44 &&
                            e(427, t.name, _r40, _c8),
                            (_a6 = _o44));
                        }
                        o.set(_r40, {
                          defaultValue: _i26.defaultValue,
                          derived: null === _i26.setter,
                          field: _l0,
                          getterTable: _s12.getterTable,
                          isEqual: _i26.isEqual,
                          key: _r40,
                          kind: "ownField",
                          schema: _i26,
                          when: _a6,
                        });
                        continue;
                      }
                      var _l1 = n[_s12];
                      ("function" != typeof _l1 && e(428, t.name, _r40, _s12),
                        o.set(_r40, {
                          defaultValue: _i26.defaultValue,
                          derived: null === _i26.setter,
                          getter: _l1,
                          isEqual: _i26.isEqual,
                          key: _r40,
                          kind: "method",
                          schema: _i26,
                        }));
                    }
                  }
                  return 0 === o.size ? ml : [].concat(Array.from(o.values()));
                })(t),
                _i24 = _l(t),
                _a5 = (function (t, e, n) {
                  var o,
                    r = t;
                  for (var _ref44 of wl(t)) {
                    var _e98 = _ref44.klass;
                    var _n71 = _ref44.ownNodeConfig;
                    _n71 &&
                      void 0 !== _n71.generated &&
                      (void 0 === o
                        ? ((o = _n71.generated), (r = _e98))
                        : _n71.generated === o && (r = _e98));
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
                          for (var _n72 = 0; _n72 < t.getters.length; _n72++) {
                            var _o45 = t.getters[_n72],
                              _r41 = e.getters[_n72];
                            if (
                              _o45.kind !== _r41.kind ||
                              _o45.key !== _r41.key ||
                              _o45.schema !== _r41.schema ||
                              _o45.derived !== _r41.derived ||
                              _o45.isEqual !== _r41.isEqual ||
                              !Object.is(
                                _o45.defaultValue,
                                _r41.defaultValue,
                              ) ||
                              ("ownField" === _o45.kind &&
                                "ownField" === _r41.kind &&
                                (_o45.field !== _r41.field ||
                                  (void 0 === _o45.getterTable) !=
                                    (void 0 === _r41.getterTable)))
                            )
                              return !1;
                          }
                          for (var _n73 = 0; _n73 < t.setters.length; _n73++) {
                            var _o46 = t.setters[_n73],
                              _r42 = e.setters[_n73];
                            if (
                              _o46.kind !== _r42.kind ||
                              _o46.key !== _r42.key ||
                              _o46.schema !== _r42.schema ||
                              ("ownField" === _o46.kind &&
                                "ownField" === _r42.kind &&
                                (_o46.field !== _r42.field ||
                                  (void 0 === _o46.setterTable) !=
                                    (void 0 === _r42.setterTable)))
                            )
                              return !1;
                          }
                          return !0;
                        })(n, cl(ll(r)))
                      ? o
                      : null;
                })(t, 0, { getters: _r37, setters: _n68 });
              ((c.compiled = {
                flatStates: _i24.flatStates,
                generated: null === _a5 ? null : _a5(_i24.fields),
                getters: _r37,
                isCompactDefault: Tl(_r37),
                setters: _n68,
              }),
                (function (t, e, n, o) {
                  if (!e && n) {
                    if (!il(t, "getType")) {
                      var _e99 = t,
                        _o47 = function _o47() {
                          return this !== _e99 ? _To5.getType.call(this) : n;
                        };
                      ((_o47[al] = !0), (t.getType = _o47));
                    }
                    if (
                      (il(t, "clone") ||
                        (t.clone = function (e, n) {
                          Xr(e);
                          var o = new t();
                          return (n !== Qr && o.afterCloneFrom(e), o);
                        }),
                      il(t, "importJSON") ||
                        (t.importJSON =
                          (o && o.$importJSON) ||
                          (function (t) {
                            return function (e) {
                              var n = Al(t);
                              return n.updateFromJSON ===
                                _To5.prototype.updateFromJSON
                                ? (function (t, e) {
                                    return Nl(
                                      t.__state || void 0 !== e[L]
                                        ? dn(t, e)
                                        : t,
                                      e,
                                    );
                                  })(n, e)
                                : n.updateFromJSON(e);
                            };
                          })(t)),
                      !il(t, "importDOM") && o)
                    ) {
                      var _e100 = o.importDOM;
                      _e100 &&
                        (t.importDOM = function () {
                          return _e100;
                        });
                    }
                    var _e101 = t.prototype;
                    Ue(_e101, "getTextContent") &&
                      !Ue(_e101, "getTextContentSize") &&
                      (t.prototype.getTextContentSize =
                        _To5.prototype.getTextContentSize);
                  }
                })(t, o, l, s),
                (function (t) {
                  var _loop2 = function _loop2() {
                      var e = _ref46.klass;
                      var n = _ref46.ownNodeConfig;
                      {
                        var _t126 = e.prototype;
                        if (Ue(_t126, "afterCloneFrom")) return 0;
                        var _o48 = Ml(e);
                        if (0 === _o48.length) return 0;
                        var _r43 = Object.getPrototypeOf(_t126),
                          _i27 =
                            n && void 0 !== n.generated
                              ? cl(ll(e)).generated
                              : null,
                          _s13 =
                            (null !== _i27 && _i27.afterCloneFrom) ||
                            function (t, e) {
                              var n = t,
                                r = e;
                              for (
                                var _t127 = 0;
                                _t127 < _o48.length;
                                _t127++
                              ) {
                                var _e102 = _o48[_t127];
                                n[_e102] = r[_e102];
                              }
                            };
                        ((_t126.afterCloneFrom = function (t) {
                          (_r43.afterCloneFrom.call(this, t), _s13(this, t));
                        }),
                          (_t126.afterCloneFrom[El] = !0));
                      }
                    },
                    _ret;
                  for (var _ref46 of wl(t)) {
                    _ret = _loop2();
                    if (_ret === 0) continue;
                  }
                })(t));
            } catch (e) {
              throw (sl["delete"](t), e);
            }
            return c;
          })(t);
    }
    function cl(t) {
      var n = t.compiled;
      return (void 0 === n && e(422, t.config.klass.name), n);
    }
    var al = Symbol("lexical.synthesizedGetType"),
      ul = [];
    function fl(t, e, n, o) {
      var r = void 0 === n.method ? o : n.method,
        i = _l(t).declaredBy.get(e);
      if (void 0 === i) return n;
      var s = t.prototype,
        l = i.prototype;
      return dl(s, l, r) && dl(s, l, o) ? n : r;
    }
    function dl(t, e, n) {
      return t[n] === e[n];
    }
    function hl(t) {
      return "set" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    function gl(t) {
      return "get" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    var pl = {
      declaredBy: new Map(),
      fields: new Map(),
      fieldsBaseFirst: [],
      fieldsDerivedFirst: [],
      flatStates: [],
    };
    function _l(t) {
      var e = ll(t);
      return (
        void 0 === e.composed &&
          (e.composed = (function (t) {
            var e = [],
              n = [],
              o = [];
            for (var _ref48 of wl(t)) {
              var _r44 = _ref48.klass;
              var _i28 = _ref48.ownNodeConfig;
              {
                var _t128 = _i28 && _i28.json;
                (n.push(_r44),
                  e.push(
                    _t128 && "node" === _t128.meta.kind
                      ? Object.entries(_t128.meta.fields)
                      : [],
                  ));
                var _s14 = [];
                if (_i28 && _i28.stateConfigs)
                  for (var _t129 of _i28.stateConfigs)
                    "stateConfig" in _t129 &&
                      _t129.flat &&
                      _s14.push(_t129.stateConfig);
                o.push(_s14);
              }
            }
            var r = new Map();
            for (var _t130 = 0; _t130 < e.length; _t130++)
              for (var _ref50 of e[_t130]) {
                var _n74 = _ref50[0];
                var _o49 = _ref50[1];
                r.has(_n74) || r.set(_n74, _o49);
              }
            var i = new Map(),
              s = new Map(),
              l = new Map();
            for (var _t131 = e.length - 1; _t131 >= 0; _t131--) {
              for (var _ref52 of e[_t131]) {
                var _o50 = _ref52[0];
                var _l10 = _ref52[1];
                {
                  var _e103 = r.get(_o50);
                  (void 0 === _e103 || i.has(_o50) || i.set(_o50, _e103),
                    void 0 === _e103 ||
                      _l10 !== _e103 ||
                      s.has(_o50) ||
                      s.set(_o50, n[_t131]));
                }
              }
              for (var _e104 of o[_t131])
                l.has(_e104.key) || l.set(_e104.key, _e104);
            }
            return 0 === r.size && 0 === l.size
              ? pl
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
    var ml = [];
    function yl(t, e, n) {
      var o = n.getter;
      if (null === o) return null;
      var r = void 0 === o ? gl(e) : o;
      return ve(r) ? fl(t, e, r, gl(e)) : r;
    }
    function xl(t, e, n) {
      var o = n.setter;
      if (null === o) return null;
      var r = void 0 === o ? hl(e) : o;
      return ve(r) ? fl(t, e, r, hl(e)) : r;
    }
    function Sl(t) {
      return t;
    }
    function Cl(t, e) {
      var n = t.defaultValue,
        o = t.isEqual;
      return void 0 === e || e === n || (void 0 !== o && o(e, n));
    }
    function Tl(t) {
      var e;
      return function (n, o) {
        void 0 === e &&
          (e = new Map(
            t.map(function (t) {
              return [t.key, t];
            }),
          ));
        var r = e.get(n);
        return void 0 !== r && Cl(r, o);
      };
    }
    function vl(t) {
      var e = t.setterTable,
        n = t.schema,
        o = n.defaultValue;
      return void 0 === e ? o : e[String(o)];
    }
    function Nl(t, e) {
      var n = ll(t.constructor),
        _cl = cl(n),
        o = _cl.flatStates,
        r = _cl.generated,
        i = _cl.setters,
        s = (function (t, e, n) {
          var o = t;
          var _loop3 = function _loop3() {
            var r = n[_t132],
              i = e[r.key];
            if (void 0 !== i) {
              var _t133 = r.parse(i);
              o = ln(o, r, function () {
                return _t133;
              });
            }
          };
          for (var _t132 = 0; _t132 < n.length; _t132++) {
            _loop3();
          }
          return o;
        })(t, e, o);
      return null !== r && void 0 !== r.updateFromJSON
        ? r.updateFromJSON(s, e)
        : (function (t, e, n) {
            for (var _o51 = 0; _o51 < n.length; _o51++) {
              var _r45 = n[_o51],
                _i29 = _r45.schema(e[_r45.key]);
              "ownField" === _r45.kind
                ? (Sl(t)[_r45.field] =
                    void 0 === _r45.setterTable
                      ? _i29
                      : Ue(_r45.setterTable, _i29)
                        ? _r45.setterTable[_i29]
                        : vl(_r45))
                : _r45.setter.call(t, _i29);
            }
            return t;
          })(s, e, i);
    }
    function bl(t) {
      return ll(t).config;
    }
    function kl(t) {
      var e = [];
      for (var _n75 of [t.getter, t.setter])
        ve(_n75) &&
          "__proto__" !== _n75.field &&
          !e.includes(_n75.field) &&
          e.push(_n75.field);
      return e;
    }
    var El = "__lexicalSynthesizedAfterCloneFrom";
    function Ol(t) {
      var _l11 = _l(t),
        e = _l11.declaredBy,
        n = _l11.fieldsBaseFirst,
        o = [];
      for (var _ref54 of n) {
        var _r46 = _ref54[0];
        var _i30 = _ref54[1];
        if (e.get(_r46) === t)
          for (var _t134 of kl(_i30)) o.includes(_t134) || o.push(_t134);
      }
      return o;
    }
    function Ml(t) {
      var e = Ol(t);
      if (0 === e.length) return e;
      var n = new Set();
      for (var _ref56 of wl(t)) {
        var _e105 = _ref56.klass;
        if (_e105 !== t) for (var _t135 of Ol(_e105)) n.add(_t135);
      }
      return 0 === n.size
        ? e
        : e.filter(function (t) {
            return !n.has(t);
          });
    }
    function* wl(t) {
      for (var _e106 = t; _e106 && (_e106 === _To5 || vo(_e106.prototype)); ) {
        var _t136 = bl(_e106),
          _n76 = _t136.declaresOwnConfig;
        (yield _n76
          ? _t136
          : babelHelpers["extends"]({}, _t136, { ownNodeConfig: void 0 }),
          (_e106 =
            (_n76 && _t136.ownNodeConfig && _t136.ownNodeConfig["extends"]) ||
            Fl(_e106)));
      }
    }
    function Al(t) {
      var e = Us();
      xc();
      var n = e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t)),
        o = new n.klass();
      return null === n.replace ? o : hs(o);
    }
    var Dl = function Dl(t, e) {
      var n = t;
      for (; null != n && !Xo(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Il(t, n) {
      var o = [];
      var r = t.__first;
      for (; null !== r; ) {
        var _t137 = null === n ? Ci(r) : n.get(r);
        (null == _t137 && e(174), o.push(r), (r = _t137.__next));
      }
      return o;
    }
    function Fl(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    function Pl(t) {
      return new _Kl(qt(t._nodeMap), null, t._slotsUsed);
    }
    function Rl() {
      return new _Kl(new Map([["root", new _qo()]]), null, !1);
    }
    function Ll(t) {
      var n = t.constructor,
        o = ee(t);
      if (Ho(t)) {
        var _e107 = o.children,
          _n77 = t.getChildren();
        for (var _t138 = 0; _t138 < _n77.length; _t138++)
          _e107.push(Ll(_n77[_t138]));
      }
      var r = Vu(t);
      if (r.length > 0) {
        var _i31 = {};
        for (var _o52 of r) {
          var _r47 = Yu(t, _o52);
          (null === _r47 && e(366, n.name, _o52), (_i31[_o52] = Ll(_r47)));
        }
        o.$slots = _i31;
      }
      return o;
    }
    var _Kl = (function () {
      function Kl(t, e, n) {
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
      var _proto12 = Kl.prototype;
      _proto12.isEmpty = function isEmpty() {
        return this._nodeMap.size <= 1 && null === this._selection;
      };
      _proto12.read = function read(t, e) {
        return wc((e && e.editor) || null, this, t);
      };
      _proto12.clone = function clone(t) {
        var e = new Kl(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), (e._parsed = this._parsed), e);
      };
      _proto12.toJSON = function toJSON(t) {
        var _this14 = this;
        return Zt("boolean" == typeof t && t, function () {
          return wc(null, _this14, function () {
            return { root: Ll(Oi()) };
          });
        });
      };
      return Kl;
    })();
    var Bl = "history-merge",
      zl = "collaboration",
      $l = "skip-scroll-into-view",
      Wl = "skip-dom-selection",
      Ul = "skip-selection-focus",
      jl = "composition-start",
      Hl = "composition-end";
    var _Vl = (function (_jo3) {
      function Vl() {
        return _jo3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Vl, _jo3);
      var _proto13 = Vl.prototype;
      _proto13.$config = function $config() {
        return this.config("artificial", { extends: _jo4 });
      };
      _proto13.createDOM = function createDOM(t) {
        return bs().createElement("div");
      };
      return Vl;
    })(_jo4);
    var _Yl = (function (_To4) {
      function Yl() {
        return _To4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Yl, _To4);
      var _proto14 = Yl.prototype;
      _proto14.$config = function $config() {
        return this.config("linebreak", {
          extends: _To5,
          generated: Ro,
          importDOM: {
            br: function br(t) {
              return Xl(t) || Ql(t) ? null : { conversion: Jl, priority: 0 };
            },
          },
        });
      };
      _proto14.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto14.createDOM = function createDOM() {
        return bs().createElement("br");
      };
      _proto14.updateDOM = function updateDOM() {
        return !1;
      };
      _proto14.isInline = function isInline() {
        return !0;
      };
      return Yl;
    })(_To5);
    function Jl(t) {
      return { node: Gl() };
    }
    function Gl() {
      return hs(new _Yl());
    }
    function ql(t) {
      return t instanceof _Yl;
    }
    function Xl(t) {
      var e = t.parentElement;
      if (null !== e && $s(e)) {
        var _n78 = e.firstChild;
        if (_n78 === t || (_n78.nextSibling === t && Zl(_n78))) {
          var _n79 = e.lastChild;
          if (_n79 === t || (_n79.previousSibling === t && Zl(_n79))) return !0;
        }
      }
      return !1;
    }
    function Ql(t) {
      var e = t.parentElement;
      if (null !== e && $s(e)) {
        var _n80 = e.firstChild;
        if (_n80 === t || (_n80.nextSibling === t && Zl(_n80))) return !1;
        var _o53 = e.lastChild;
        if (_o53 === t || (_o53.previousSibling === t && Zl(_o53))) return !0;
      }
      return !1;
    }
    function Zl(t) {
      return fi(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function tc(t) {
      console.warn(t);
    }
    function ec(t, e, n, o, r) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = Rl()),
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
        null !== e && na(t, e),
        (t._inputState = {
          collapsedSelectionFormat: {
            format: 0,
            key: "root",
            offset: 0,
            style: "",
            timeStamp: 0,
          },
          composedSegmentedKey: null,
          compositionEndData: "",
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
          ((n.textContent = ""), i.set("root", n), vi(n, t, "root")));
    }
    function nc(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref58 of wl(t)) {
        var _o54 = _ref58.klass;
        var _r48 = _ref58.ownNodeConfig;
        {
          var _t139 = _o54.transform;
          if (!n.has(_t139)) {
            n.add(_t139);
            var _r49 = _o54.transform();
            _r49 && e.add(_r49);
          }
          if (_r48) {
            var _t140 = _r48.$transform;
            _t140 && e.add(_t140);
          }
        }
      }
      return e;
    }
    var oc = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = ei(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return Ho(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Ho(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function rc(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function ic(t, e, n) {
      return (t.set(e, n), rc.bind(null, t, e));
    }
    var _sc = (function () {
      function sc(t, e, n, o, r, i, s, l, c) {
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
          (this._key = Ri()),
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
            composedSegmentedKey: null,
            compositionEndData: "",
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
            postDeleteSelectionToRestore: null,
            savedInputMode: void 0,
            selectionChangeFromDOMUpdatePoints: null,
            unprocessedBeforeInputData: null,
          }),
          (this._lastNotifiedSelection = null));
      }
      var _proto15 = sc.prototype;
      _proto15.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto15.registerUpdateListener = function registerUpdateListener(t) {
        return ic(this._listeners.update, t);
      };
      _proto15.registerEditableListener = function registerEditableListener(t) {
        return ic(this._listeners.editable, t);
      };
      _proto15.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return ic(this._listeners.decorator, t);
      };
      _proto15.registerTextContentListener =
        function registerTextContentListener(t) {
          return ic(this._listeners.textcontent, t);
        };
      _proto15.registerRootListener = function registerRootListener(t) {
        var _this15 = this;
        var e = this._listeners.root;
        return Bc(ic(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var o = t.get(e);
            (o && o(), t.set(e, e.apply(void 0, Array.from(n)) || void 0));
          })(e, t, [null, _this15._rootElement]);
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
          o = qs(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t141 of o.keys()) r.set(_t141, "created");
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
          var _t142 = this.registerNodeTransformToKlass(r, e);
          o.push(_t142);
        }
        return (
          (function (t, e) {
            var n = qs(t.getEditorState()),
              o = [];
            for (var _t143 of e) {
              var _e108 = n.get(_t143);
              _e108 && o.push(_e108);
            }
            0 !== o.length &&
              t.update(
                function () {
                  for (var _t144 of o)
                    for (var _e109 of _t144.keys()) {
                      var _t145 = Ci(_e109);
                      _t145 && _t145.markDirty();
                    }
                },
                null === t._pendingEditorState ? { tag: Bl } : void 0,
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
        return Xi.apply(void 0, [this, t].concat(Array.from(e)));
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
          var _o55 = Vi(this._config.theme, "root"),
            _r50 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            ec(this, n, t, _r50, { preserveUpdateQueue: !0 }),
            null !== n &&
              (this._config.disableEvents ||
                (function (t) {
                  var n = Uc.get(t);
                  if (void 0 === n) return void wa();
                  var o = jc.get(n);
                  if (void 0 === o) return void wa();
                  Uc["delete"](t);
                  var r = ci(t);
                  si(r)
                    ? ((function (t) {
                        if (null !== t._parentEditor) {
                          var _e110 = Fi(t),
                            _n81 = _e110[_e110.length - 1]._key;
                          ka.get(_n81) === t && ka["delete"](_n81);
                        } else ka["delete"](t._key);
                      })(r),
                      o.editors["delete"](r),
                      (o.hasShadowEditor = void 0),
                      (t.__lexicalEditor = null))
                    : r && e(198);
                  var i = ba(t);
                  for (var _t146 = 0; _t146 < i.length; _t146++) i[_t146]();
                  t.__lexicalEventHandles = [];
                })(n),
              null != _o55 &&
                (_n$classList = n.classList).remove.apply(
                  _n$classList,
                  Array.from(_o55),
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e111 = ss(t),
              _n82 = t.style;
            ((_n82.userSelect = "text"),
              (_n82.whiteSpace = "pre-wrap"),
              (_n82.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e111),
              (this._dirtyType = 2),
              Se(this),
              this._updateTags.add(Bl),
              Ac(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  Uc.set(t, n);
                  var o = jc.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    jc.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = ba(t);
                  r.push(Hc.register(n));
                  var i = (function () {
                    if (void 0 !== Wc) return Wc;
                    var t = [
                      ["keydown", ya],
                      ["pointerdown", oa],
                      ["compositionstart", da],
                      ["compositionend", ma],
                      ["input", ua],
                      ["click", Xc],
                      ["cut", $c],
                      ["copy", $c],
                      ["dragstart", $c],
                      ["dragover", $c],
                      ["dragend", $c],
                      ["paste", $c],
                      ["focus", $c],
                      ["blur", $c],
                      ["drop", $c],
                    ];
                    return (
                      d &&
                        t.push([
                          "beforeinput",
                          function (t, e) {
                            return (function (t, e) {
                              var n = t.inputType;
                              "deleteCompositionText" === n ||
                                (u && qi(e)) ||
                                ("insertCompositionText" !== n &&
                                  Kc(
                                    e,
                                    function () {
                                      ca(t, e) || Xi(e, H, t);
                                    },
                                    { event: t },
                                  ));
                            })(t, e);
                          },
                        ]),
                      g &&
                        t.push(
                          [
                            "keyup",
                            function (t, e) {
                              return (function (t, e) {
                                (t.shiftKey && "CapsLock" !== t.key) ||
                                  (e._inputState.isShiftKeyDown = !1);
                              })(t, e);
                            },
                          ],
                          ["mousedown", ta],
                        ),
                      (Wc = t),
                      t
                    );
                  })();
                  var _loop4 = function _loop4() {
                    var _i$_n = i[_n83],
                      o = _i$_n[0],
                      s = _i$_n[1],
                      l =
                        "function" == typeof s
                          ? function (t) {
                              Ma(t) ||
                                (Oa(t),
                                (e.isEditable() || "click" === o) && s(t, e));
                            }
                          : function (n) {
                              if (Ma(n)) return;
                              Oa(n);
                              var r = e.isEditable();
                              switch (o) {
                                case "cut":
                                  return r && Xi(e, Mt, n);
                                case "copy":
                                  return Xi(e, Ot, n);
                                case "paste":
                                  return r && Xi(e, Z, n);
                                case "dragstart":
                                  return r && Xi(e, bt, n);
                                case "dragover":
                                  return r && Xi(e, kt, n);
                                case "dragend":
                                  return r && Xi(e, Et, n);
                                case "focus":
                                  return r && Xi(e, Pt, n);
                                case "blur":
                                  return (
                                    na(e, t),
                                    (e._inputState.isShiftKeyDown = !1),
                                    (e._inputState.isInsertLineBreak = !1),
                                    r && Xi(e, Rt, n)
                                  );
                                case "drop":
                                  return r && Xi(e, vt, n);
                              }
                            };
                    r.push(zc(t, o, l));
                  };
                  for (var _n83 = 0; _n83 < i.length; _n83++) {
                    _loop4();
                  }
                  g &&
                    r.push(
                      zc(
                        t,
                        "pointerdown",
                        function (t) {
                          e._inputState.lastPointerType = t.pointerType;
                        },
                        { capture: !0 },
                      ),
                      (function (t, e) {
                        var n = null;
                        var o = { capture: !0, passive: !0 };
                        return Bc(
                          zc(
                            t,
                            "touchstart",
                            function (t) {
                              var e =
                                1 === t.touches.length ? t.touches[0] : null;
                              n = e ? { x: e.clientX, y: e.clientY } : null;
                            },
                            o,
                          ),
                          zc(
                            t,
                            "touchend",
                            function (t) {
                              var o = t.changedTouches[0];
                              (null !== n &&
                                o &&
                                0 === t.touches.length &&
                                Math.abs(o.clientX - n.x) <= Qc &&
                                Math.abs(o.clientY - n.y) <= Qc &&
                                e(t),
                                (n = null));
                            },
                            o,
                          ),
                        );
                      })(t, function (n) {
                        return (function (t, e, n) {
                          void 0 !== e._inputState.savedInputMode &&
                            (ea(t, e, n) ||
                              (Is(n.ownerDocument) === n && n.blur(),
                              na(e, n)));
                        })(n, e, t);
                      }),
                    );
                })(t, this),
              null != _o55 &&
                (_t$classList = t.classList).add.apply(
                  _t$classList,
                  Array.from(_o55),
                ));
          } else ((this._window = null), this._updateTags.add(Bl), Ac(this));
          Dc("root", this, !1, t, n);
        }
      };
      _proto15.getElementByKey = function getElementByKey(t) {
        return this._keyToDOMMap.get(t) || null;
      };
      _proto15.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto15.setEditorState = function setEditorState(t, e) {
        var _this16 = this;
        var o = t.isEmpty();
        var r = t;
        (r._readOnly &&
          ((r = Pl(t)),
          (r._selection = t._selection ? t._selection.clone() : null)),
          xe(this));
        var i = this._pendingEditorState,
          s = void 0 !== e ? e.tag : null;
        (null === i ||
          i.isEmpty() ||
          (null != s && this._updateTags.add(s), Ac(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || t._slotsUsed),
          Kc(
            this,
            function () {
              if (
                (s && _this16._updateTags.add(s),
                o && (n(38), Oi().append(jr())),
                t._parsed)
              )
                for (var _ref60 of r._nodeMap.entries()) {
                  var _t147 = _ref60[0];
                  var _e112 = _ref60[1];
                  Ho(_e112)
                    ? _this16._dirtyElements.set(_t147, !0)
                    : _this16._dirtyLeaves.add(_t147);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto15.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = Rl(),
            r = cc,
            i = uc,
            s = ac,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Map()),
            (e._dirtyType = 0),
            (cc = o),
            (uc = !1),
            (ac = e),
            Xr(null));
          try {
            var _r51 = e._nodes;
            (Mc(t.root, _r51), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (cc = r),
              (uc = i),
              (ac = s));
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
        var _ref61 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref61[0],
          n = _ref61[1];
        return (
          "force-commit" === e && (pc.has(this) || Ac(this)),
          ("pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
          ).read(n, { editor: this })
        );
      };
      _proto15.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Lc(t, e, n);
        })(this, t, e);
      };
      _proto15.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          Kc(this, function () {
            var o = hu(),
              r = Oi();
            (null !== o
              ? o.dirty || wi(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              os("focus"),
              rs(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto15.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = ys(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto15.isEditable = function isEditable() {
        return this._editable;
      };
      _proto15.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          Dc("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return vc();
            }));
      };
      _proto15.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON(te()) };
      };
      return sc;
    })();
    _sc.version = (function () {
      return Yt;
    })();
    function lc(t, e, n, o, r, i) {
      if (Ho(t)) {
        var _s15 = t.__first;
        for (; null !== _s15; ) {
          var _t148 = o.get(_s15);
          if (void 0 === _t148) break;
          var _l12 = Ho(_t148);
          (_t148.__parent !== e ||
            (_l12 && i.has(_s15)) ||
            ((_l12 || (Ku(_t148) && null !== _t148.__slots)) &&
              lc(_t148, _s15, n, o, r, i),
            n.has(_s15) || i["delete"](_s15),
            r.push(_s15)),
            (_s15 = _t148.__next));
        }
      }
      for (var _s16 of Ku(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t149 = o.get(_s16);
        void 0 !== _t149 &&
          Bu(_t149) &&
          _t149.__slotHost === e &&
          ((Ho(_t149) || (Ku(_t149) && null !== _t149.__slots)) &&
            lc(_t149, _s16, n, o, r, i),
          n.has(_s16) || i["delete"](_s16),
          r.push(_s16));
      }
    }
    var cc = null,
      ac = null,
      uc = !1,
      fc = !1,
      dc = !1;
    var hc = new Set(),
      gc = new Set(),
      pc = new Set();
    var _c = 0;
    var mc = { characterData: !0, childList: !0, subtree: !0 };
    function yc() {
      return uc || (null !== cc && cc._readOnly);
    }
    function xc() {
      uc && e(13);
    }
    function Sc() {
      _c > 99 && e(14);
    }
    function Cc() {
      return (null === cc && e(195, Nc()), cc);
    }
    function Tc() {
      return (null === ac && e(337, Nc()), ac);
    }
    function vc() {
      Tc()._dirtyType = 2;
    }
    function Nc() {
      var t = 0;
      var e = new Set(),
        n = _sc.version;
      if ("undefined" != typeof window)
        for (var _o56 of vs(document)) {
          var _r52 = ci(_o56);
          if (si(_r52)) t++;
          else if (_r52) {
            var _t150 = String(_r52.constructor.version || "<0.17.1");
            (_t150 === n &&
              (_t150 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t150));
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
    function bc() {
      return ac;
    }
    function kc(t, e, n) {
      var o = e.__type,
        r = ti(t, o);
      var i = n.get(o);
      void 0 === i && ((i = Array.from(r.transforms)), n.set(o, i));
      var s = i.length;
      for (var _t151 = 0; _t151 < s && (i[_t151](e), e.isAttached()); _t151++);
    }
    function Ec(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Oc(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t152 of o) n.add(_t152);
    }
    function Mc(t, n) {
      var o = t.type,
        r = n.get(o);
      void 0 === r && e(17, o);
      var i = r.klass;
      t.type !== i.getType() && e(18, i.name);
      var s = i.importJSON(t),
        l = t.children;
      if (Ho(s) && Array.isArray(l))
        for (var _t153 = 0; _t153 < l.length; _t153++) {
          var _e113 = Mc(l[_t153], n);
          s.append(_e113);
        }
      var c = t.$slots;
      if (c) {
        Ku(s) || e(379, i.name);
        for (var _t154 in c) nf(s, _t154, Mc(c[_t154], n));
      }
      return s;
    }
    function wc(t, e, n) {
      var o = cc,
        r = uc,
        i = ac;
      ((cc = e), (uc = !0), (ac = t));
      try {
        return n();
      } finally {
        ((cc = o), (uc = r), (ac = i));
      }
    }
    function Ac(e, n) {
      var o = dc;
      dc = !0;
      try {
        var _o57 = (function (t) {
          if (gc.has(t)) return !1;
          gc.add(t);
          try {
            for (var _e114 = 0; null !== t._pendingEditorState; _e114++) {
              var _n84 = t._pendingEditorState._selection,
                _o58 = t._rootElement;
              if (!Ic(t, _n84)) return !1;
              var _r53 =
                (null === _n84 || Ba(_n84)) &&
                (t._headless || null === _o58 || !_o58.isConnected);
              if (_r53 || 100 === _e114)
                return (
                  (t._lastNotifiedSelection =
                    null === _n84 ? null : _n84.clone()),
                  !_r53
                );
              Lc(
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
            gc["delete"](t);
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
              Pc(e, e._deferred)
            );
          var s = e._editorState,
            l = s._selection,
            c = o._selection,
            a = 0 !== e._dirtyType,
            u = cc,
            f = uc,
            d = ac,
            h = e._updating,
            g = e._observer;
          var p = null;
          if (
            ((e._pendingEditorState = null),
            (e._editorState = o),
            !i && a && null !== g)
          ) {
            ((ac = e), (cc = o), (uc = !1), (e._updating = !0));
            try {
              var _t155 = e._dirtyType,
                _n85 = e._dirtyElements,
                _r54 = e._dirtyLeaves;
              (g.disconnect(), (p = _o(s, o, e, _t155, _n85, _r54)));
            } catch (t) {
              if ((t instanceof Error && e._onError(t), fc)) throw t;
              return (
                ec(e, null, r, o),
                Se(e),
                (e._dirtyType = 2),
                (fc = !0),
                Ac(e, s),
                void (fc = !1)
              );
            } finally {
              (g.observe(r, mc),
                (e._updating = h),
                (cc = u),
                (uc = f),
                (ac = d));
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
              for (i in o) r.has(i) || (o === n && (o = ki(t)), delete o[i]);
            })(e, o));
          var C = i ? null : ys(ls(e));
          if (
            e._editable &&
            null !== C &&
            (a || null === c || c.dirty || !c.is(l)) &&
            null !== r &&
            !x.has(Wl)
          ) {
            ((ac = e), (cc = o));
            try {
              if ((null !== g && g.disconnect(), a || null === c || c.dirty)) {
                var _t156 = e._blockCursorElement;
                (null !== _t156 && ms(_t156, e, r), Cu(l, c, e, C, x, r));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  Ba(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(Ds(e))
                ) {
                  var _r55 = n.anchor,
                    _i32 = _r55.getNode(),
                    _s17 = _r55.offset;
                  var _l13 = !1,
                    _c9 = null;
                  if (_s17 === _i32.getChildrenSize())
                    _s(_i32.getChildAtIndex(_s17 - 1)) && (_l13 = !0);
                  else {
                    var _e115 = _i32.getChildAtIndex(_s17);
                    null !== _e115 &&
                      _s(_e115) &&
                      ((_l13 = !0), (_c9 = t.getElementByKey(_e115.__key)));
                  }
                  if (_l13) {
                    var _n86 = Hs(
                      _i32,
                      t.getElementByKey(_i32.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = bs().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList2;
                              if ("string" == typeof o) {
                                var _t157 = Bf(o);
                                o = e.blockCursor = _t157;
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
                        ? _n86.appendChild(o)
                        : _n86.insertBefore(o, _c9))
                    );
                  }
                }
                null !== o && ms(o, t, e);
              })(e, r, c);
            } finally {
              (null !== g && g.observe(r, mc), (ac = d), (cc = u));
            }
          }
          var T = pc.has(e);
          pc.add(e);
          try {
            null !== p &&
              (function (t, e, n, o, r) {
                var i = Array.from(t._listeners.mutation),
                  s = i.length;
                for (var _t158 = 0; _t158 < s; _t158++) {
                  var _i$_t = i[_t158],
                    _s18 = _i$_t[0],
                    _l14 = _i$_t[1];
                  for (var _t159 of _l14) {
                    var _i33 = e.get(_t159);
                    void 0 !== _i33 &&
                      _s18(_i33, {
                        dirtyLeaves: o,
                        prevEditorState: r,
                        updateTags: n,
                      });
                  }
                }
              })(e, p, x, _, s);
            var _t160 = e._pendingDecorators;
            (null !== _t160 &&
              ((e._decorators = _t160),
              (e._pendingDecorators = null),
              Dc("decorator", e, !0, _t160)),
              (function (t, e, n) {
                var o = Ei(e),
                  r = Ei(n);
                o !== r && Dc("textcontent", t, !0, r);
              })(e, n || s, o),
              Dc("update", e, !0, {
                dirtyElements: m,
                dirtyLeaves: _,
                editorState: o,
                mutatedNodes: p,
                normalizedNodes: y,
                prevEditorState: n || s,
                tags: x,
              }));
          } finally {
            T || pc["delete"](e);
          }
          (h || Pc(e, S),
            (function (e) {
              var n = e._updates;
              if (0 === n.length) return void (e._cascadeCount = 0);
              if (
                ((function (t) {
                  hc.has(t) ||
                    (hc.add(t),
                    setTimeout(function () {
                      (hc["delete"](t), (t._cascadeCount = 0));
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
                var _t161 = o[0],
                  _n87 = o[1];
                Lc(e, _t161, _n87);
              }
            })(e));
        })(e, n),
          _o57 && e._onWarn(t(436)));
      } finally {
        dc = o;
      }
    }
    function Dc(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n88 = e._listeners[t],
          _r56 = Array.from(_n88);
        for (
          var _len8 = arguments.length,
            o = new Array(_len8 > 3 ? _len8 - 3 : 0),
            _key8 = 3;
          _key8 < _len8;
          _key8++
        ) {
          o[_key8 - 3] = arguments[_key8];
        }
        for (var _ref63 of _r56) {
          var _t162 = _ref63[0];
          var _e116 = _ref63[1];
          {
            _e116 && _e116();
            var _r57 = _t162.apply(void 0, Array.from(o)),
              _i34 = "function" == typeof _r57 ? _r57 : void 0;
            _n88.has(_t162) ? _n88.set(_t162, _i34) : _i34 && _i34();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function Ic(t, e) {
      var n = t._lastNotifiedSelection;
      return null === e ? null !== n : !e.is(n);
    }
    function Fc(t, e, n, o) {
      var r = Fi(t);
      var i;
      if (!dc)
        for (var _t163 = 0; _t163 < r.length; _t163++)
          r[_t163]._updating || (r[_t163]._cascadeCount = 0);
      if (e === W) {
        if (ac !== t || uc) {
          var _r58 = !1;
          return (
            Kc(t, function () {
              _r58 = Fc(t, e, n, o);
            }),
            _r58
          );
        }
        var _r59 = Cc()._selection;
        t._lastNotifiedSelection = null === _r59 ? null : _r59.clone();
      }
      for (var _t164 = 4; _t164 >= 0; _t164--) {
        var _loop5 = function _loop5() {
            var l = r[_s19];
            if (_s19 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e117 = c[_t164];
              if (_e117.size > 0) {
                var _t165 = !1;
                if (
                  (Kc(l, function () {
                    for (var _r60 of _e117)
                      if (_r60(n, o)) return void (_t165 = !0);
                  }),
                  _t165)
                )
                  return { v: _t165 };
              }
            }
          },
          _ret2;
        for (var _s19 = 0; _s19 < r.length; _s19++) {
          _ret2 = _loop5();
          if (_ret2 === 0) break;
          if (_ret2) return _ret2.v;
        }
      }
      return (
        i &&
          i.update(function () {
            Fc(i, e, n, o);
          }),
        !1
      );
    }
    function Pc(t, e) {
      if ((t._deferred === e && (t._deferred = []), 0 !== e.length)) {
        var _n89 = t._updating;
        t._updating = !0;
        try {
          for (var _t166 = 0; _t166 < e.length; _t166++) e[_t166]();
        } finally {
          t._updating = _n89;
        }
      }
    }
    function Rc(t, n) {
      var o = t._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n90 = o.shift();
        if (_n90) {
          var _o59 = _n90[0],
            _i35 = _n90[1],
            _s20 = t._pendingEditorState;
          var _l15 = void 0;
          (void 0 !== _i35 &&
            ((_l15 = _i35.onUpdate),
            _i35.skipTransforms && (r = !0),
            _i35.discrete && (null === _s20 && e(191), (_s20._flushSync = !0)),
            _l15 && t._deferred.push(_l15),
            Oc(t, _i35.tag)),
            null == _s20 ? Lc(t, _o59, _i35) : _o59());
        }
      }
      return r;
    }
    function Lc(t, n, o, r) {
      if (r === void 0) {
        r = !1;
      }
      var i = t._updateTags;
      var s,
        l = !1,
        c = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        Oc(t, o.tag),
        (l = o.skipTransforms || !1),
        (c = o.discrete || !1)),
        s && t._deferred.push(s));
      var a = t._editorState;
      var u = t._pendingEditorState,
        f = !1;
      ((null === u || u._readOnly) &&
        ((u = t._pendingEditorState = Pl(u || a)), (f = !0)),
        (u._flushSync = c));
      var d = cc,
        h = uc,
        g = ac,
        p = t._updating,
        _ = t._lastNotifiedSelection;
      ((cc = u), (uc = !1), (t._updating = !0), (ac = t));
      var m = t._headless || null === t.getRootElement();
      Xr(null);
      try {
        f &&
          (m
            ? null !== a._selection && (u._selection = a._selection.clone())
            : (u._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = ys(ls(t));
                return Ba(n) || null == n ? fu(n, o, t, e) : n.clone();
              })(t, (o && o.event) || null)));
        var _r61 = t._compositionKey;
        (n(),
          (l = Rc(t, l)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (Ba(o)) {
              var _t167 = o.anchor,
                _e118 = o.focus;
              var _r62;
              if (
                ("text" === _t167.type &&
                  ((_r62 = _t167.getNode()), _r62.selectionTransform(n, o)),
                "text" === _e118.type)
              ) {
                var _t168 = _e118.getNode();
                _r62 !== _t168 && _t168.selectionTransform(n, o);
              }
            }
          })(u, t),
          0 !== t._dirtyType &&
            (l
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t169 of n) {
                    var _e119 = o.get(_t169);
                    xr(_e119) &&
                      _e119.isAttached() &&
                      _e119.isSimpleText() &&
                      !_e119.isUnmergeable() &&
                      ko(_e119);
                  }
                })(u, t)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    i = Si(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t170 of l) {
                        var _o60 = r.get(_t170);
                        (xr(_o60) &&
                          _o60.isAttached() &&
                          _o60.isSimpleText() &&
                          !_o60.isUnmergeable() &&
                          ko(_o60),
                          void 0 !== _o60 && Ec(_o60, i) && kc(e, _o60, s),
                          n.add(_t170));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        _c++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t171 of a) {
                      var _n91 = _t171[0],
                        _l16 = _t171[1];
                      if ((o.set(_n91, _l16), !_l16)) continue;
                      var _c0 = r.get(_n91);
                      void 0 !== _c0 && Ec(_c0, i) && kc(e, _c0, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      _c++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(u, t),
            Rc(t),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref65 of o) {
                var _t172 = _ref65[0];
                {
                  var _e120 = i.get(_t172);
                  void 0 !== _e120 &&
                    (_e120.isAttached() ||
                      (Ho(_e120) && lc(_e120, _t172, r, i, s, o),
                      r.has(_t172) || o["delete"](_t172),
                      s.push(_t172)));
                }
              }
              for (var _t173 of n) {
                var _e121 = i.get(_t173);
                void 0 === _e121 ||
                  _e121.isAttached() ||
                  (Ku(_e121) &&
                    null !== _e121.__slots &&
                    lc(_e121, _t173, r, i, s, n),
                  r.has(_t173) || n["delete"](_t173),
                  s.push(_t173));
              }
              var l = Tc(),
                c = l._cloneNotNeeded;
              for (var _t174 of s) (i["delete"](_t174), c["delete"](_t174));
              var a = l._compositionKey;
              null === a || i.has(a) || (l._compositionKey = null);
            })(a, u, t._dirtyLeaves, t._dirtyElements)),
          _r61 !== t._compositionKey && (u._flushSync = !0));
        var _i36 = u._selection;
        if (Ba(_i36)) {
          t._slotsUsed && ru(_i36);
          var _n92 = u._nodeMap,
            _o61 = _i36.anchor.key,
            _r63 = _i36.focus.key;
          (void 0 !== _n92.get(_o61) && void 0 !== _n92.get(_r63)) || e(19);
        } else $a(_i36) && 0 === _i36._nodes.size && (u._selection = null);
      } catch (e) {
        (e instanceof Error && t._onError(e), (t._pendingEditorState = a));
        var _n93 = a._selection;
        return (
          (t._lastNotifiedSelection = null === _n93 ? null : _n93.clone()),
          (t._dirtyType = 2),
          t._cloneNotNeeded.clear(),
          (t._dirtyLeaves = new Set()),
          t._dirtyElements.clear(),
          void Ac(t)
        );
      } finally {
        ((cc = d), (uc = h), (ac = g), (t._updating = p), (_c = 0));
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
          ? ((u._flushSync = !1), Ac(t))
          : f &&
            ni(function () {
              Ac(t);
            })
        : ((u._flushSync = !1),
          f &&
            (i.clear(),
            (t._deferred = []),
            (t._pendingEditorState = null),
            (t._lastNotifiedSelection = _)));
    }
    function Kc(t, e, n) {
      ac === t && void 0 === n ? (yc() ? Lc(t, e, n) : e()) : Lc(t, e, n);
    }
    function Bc() {
      for (
        var _len9 = arguments.length, t = new Array(_len9), _key9 = 0;
        _key9 < _len9;
        _key9++
      ) {
        t[_key9] = arguments[_key9];
      }
      return function () {
        for (var _e122 = t.length - 1; _e122 >= 0; _e122--) t[_e122]();
        t.length = 0;
      };
    }
    function zc(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    var $c = Object.freeze({});
    var Wc;
    var Uc = new WeakMap(),
      jc = new WeakMap(),
      Hc = Ht(function (t) {
        return (
          t.addEventListener("selectionchange", Ea),
          function () {
            return t.removeEventListener("selectionchange", Ea);
          }
        );
      });
    function Vc(t, e, n, o, r, i) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = Tc();
      var u;
      if (void 0 !== i) u = i;
      else {
        var _t175 = ys(ls(a));
        u = null !== _t175 ? Os(_t175, a._rootElement) : null;
      }
      var f = null !== u ? u.anchorNode : null,
        h = s.key,
        g = a.getElementByKey(h),
        p = n.length;
      return (
        h !== l.key ||
        !xr(c) ||
        (((!r &&
          (!d || a._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (c.isDirty() && p < 2) ||
          Ii(n)) &&
          s.offset !== l.offset &&
          !c.isComposing()) ||
        ui(c) ||
        (c.isDirty() && p > 1) ||
        ((r || !d) && null !== g && !c.isComposing() && f !== Ys(c, g, a)) ||
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
            r = ai(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (xr(e) || (Ho(e) && e.isInline())) &&
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
    function Yc(t, e) {
      return (
        fi(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Jc(t, n, o) {
      var _Os = Os(t, n._rootElement),
        r = _Os.anchorNode,
        i = _Os.anchorOffset,
        s = _Os.focusNode,
        l = _Os.focusOffset,
        c = n._inputState;
      if (c.isSelectionChangeFromDOMUpdate) {
        c.isSelectionChangeFromDOMUpdate = !1;
        var _t176 = c.selectionChangeFromDOMUpdatePoints;
        if (
          ((c.selectionChangeFromDOMUpdatePoints = null),
          Yc(r, i) &&
            Yc(s, l) &&
            !c.postDeleteSelectionToRestore &&
            (null === _t176 ||
              (_t176.anchorNode === r &&
                _t176.anchorOffset === i &&
                _t176.focusNode === s &&
                _t176.focusOffset === l)))
        )
          return;
      }
      Kc(n, function () {
        if (!o) return void wi(null);
        if (!ii(n, r, s)) return;
        var a = hu();
        if (c.postDeleteSelectionToRestore && Ba(a) && a.isCollapsed()) {
          var _t177 = a.anchor,
            _e123 = c.postDeleteSelectionToRestore.anchor;
          ((_t177.key === _e123.key && _t177.offset === _e123.offset + 1) ||
            (1 === _t177.offset &&
              _e123.getNode().is(_t177.getNode().getPreviousSibling()))) &&
            ((a = c.postDeleteSelectionToRestore.clone()), wi(a));
        }
        if (((c.postDeleteSelectionToRestore = null), Ba(a))) {
          var _o62 = a.anchor,
            _u5 = _o62.getNode();
          if (a.isCollapsed()) {
            "Range" === t.type && r === s && (a.dirty = !0);
            var _i37 = ls(n).event,
              _l17 = _i37 ? _i37.timeStamp : performance.now(),
              _c$collapsedSelection = c.collapsedSelectionFormat,
              _f6 = _c$collapsedSelection.format,
              _d3 = _c$collapsedSelection.style,
              _h3 = _c$collapsedSelection.offset,
              _g3 = _c$collapsedSelection.key,
              _p3 = _c$collapsedSelection.timeStamp,
              _3 = Oi(),
              _m = !1 === n.isComposing() && "" === _3.getTextContent();
            if (_l17 < _p3 + 200 && _o62.offset === _h3 && _o62.key === _g3)
              Gc(a, _f6, _d3);
            else if ("text" === _o62.type) (xr(_u5) || e(141), qc(a, _u5));
            else if ("element" === _o62.type && !_m) {
              Ho(_u5) || e(259);
              var _t178 = _o62.getNode();
              _t178.isEmpty()
                ? (function (t, e) {
                    Gc(t, e.getTextFormat(), e.getTextStyle());
                  })(a, _t178)
                : Gc(a, a.format, "");
            }
          } else {
            var _t179 = _o62.key,
              _e124 = a.focus.key,
              _n94 = a.getNodes(),
              _r64 = _n94.length,
              _s21 = a.isBackward(),
              _c1 = _s21 ? l : i,
              _u6 = _s21 ? i : l,
              _f7 = _s21 ? _e124 : _t179,
              _d4 = _s21 ? _t179 : _e124;
            var _h4 = C,
              _g4 = !1;
            for (var _t180 = 0; _t180 < _r64; _t180++) {
              var _e125 = _n94[_t180],
                _o63 = _e125.getTextContentSize();
              if (
                xr(_e125) &&
                0 !== _o63 &&
                !(
                  (0 === _t180 && _e125.__key === _f7 && _c1 === _o63) ||
                  (_t180 === _r64 - 1 && _e125.__key === _d4 && 0 === _u6)
                ) &&
                ((_g4 = !0), (_h4 &= _e125.getFormat()), 0 === _h4)
              )
                break;
            }
            a.format = _g4 ? _h4 : 0;
          }
        }
        !(function (t, e, n) {
          if (n === void 0) {
            n = !1;
          }
          (n || Ic(t, e)) && t.dispatchCommand(W);
        })(n, a, null !== a && (a.dirty || !Ba(a)));
      });
    }
    function Gc(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function qc(t, e) {
      Gc(t, e.getFormat(), e.getStyle());
    }
    function Xc(t, e) {
      Kc(e, function () {
        var n = hu(),
          o = ys(ls(e)),
          r = gu();
        if (o)
          if (Ba(n)) {
            var _t181 = n.anchor,
              _e126 = _t181.getNode();
            "element" === _t181.type &&
              0 === _t181.offset &&
              n.isCollapsed() &&
              !Xo(_e126) &&
              1 === Oi().getChildrenSize() &&
              _e126.getTopLevelElementOrThrow().isEmpty() &&
              null !== r &&
              n.is(r) &&
              (o.removeAllRanges(), (n.dirty = !0));
          } else if (
            "touch" === t.pointerType ||
            "pen" === t.pointerType ||
            (g && "mouse" !== e._inputState.lastPointerType)
          ) {
            var _n95 = Os(o, e._rootElement).anchorNode;
            (Ps(_n95) || fi(_n95)) && wi(fu(r, o, e, t));
          }
        if (u && null !== o && 0 === o.rangeCount) {
          var _n96 = e._rootElement;
          if (null !== _n96 && t.target === _n96) {
            var _i38 = t.clientY;
            var _s22 = _n96.childNodes.length;
            for (var _t182 = 0; _t182 < _n96.childNodes.length; _t182++) {
              var _e127 = _n96.childNodes[_t182];
              if (Ps(_e127)) {
                var _n97 = _e127.getBoundingClientRect();
                if (_i38 <= (_n97.top + _n97.bottom) / 2) {
                  _s22 = _t182;
                  break;
                }
              }
            }
            o.setBaseAndExtent(_n96, _s22, _n96, _s22);
            var _l18 = fu(r, o, e, t);
            null !== _l18 ? wi(_l18) : o.removeAllRanges();
          }
        }
        Xi(e, j, t);
      });
    }
    var Qc = 10,
      Zc =
        'input:not(:disabled),textarea:not(:disabled),select:not(:disabled),button:not(:disabled),a[href],area[href],label,summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable]:not([contenteditable="false"])';
    function ta(t, e) {
      var n = e.getRootElement();
      null !== n &&
        (ea(t, e, n)
          ? (t.preventDefault(),
            Is(n.ownerDocument) !== n &&
              (void 0 === e._inputState.savedInputMode &&
                (e._inputState.savedInputMode = n.getAttribute("inputmode")),
              n.setAttribute("inputmode", "none"),
              n.focus({ preventScroll: !0 })))
          : na(e, n));
    }
    function ea(t, e, n) {
      if ("mouse" === e._inputState.lastPointerType) return !1;
      var o = Fs(t);
      if (!Rs(o)) return !1;
      var r = !1;
      for (var _t183 = o; null !== _t183; _t183 = Zi(_t183)) {
        if (_t183 === n) return r;
        if (1 === _t183.nodeType) {
          var _e128 = _t183;
          if (_e128.matches(Zc)) return !1;
          "true" === _e128.getAttribute("data-lexical-decorator") && (r = !0);
        }
      }
      return !1;
    }
    function na(t, e) {
      var n = t._inputState.savedInputMode;
      void 0 !== n &&
        ((t._inputState.savedInputMode = void 0),
        null === n
          ? e.removeAttribute("inputmode")
          : e.setAttribute("inputmode", n));
    }
    function oa(t, e) {
      var n = Fs(t),
        o = t.pointerType;
      Rs(n) &&
        "touch" !== o &&
        "pen" !== o &&
        0 === t.button &&
        Kc(e, function () {
          rl(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
        });
    }
    function ra(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function ia(t) {
      var e = Tc()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = hu();
      if (!Ba(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!xr(r)) return;
      var i = o.anchor.offset;
      if (r.getTextContentSize() === i) {
        var _t184 = r.getNextSibling();
        if ("\n" === n) {
          if (g) return;
          if (ql(_t184)) _t184.selectEnd();
          else if (!_t184) {
            var _t185 = Dl(r, su),
              _e129 = _t185 && _t185.getNextSibling();
            Ho(_e129) && _e129.selectStart();
          }
        } else
          "\t" === n
            ? Gr(_t184) && _t184.selectEnd()
            : xr(_t184) &&
              _t184.getTextContent()[0] === n &&
              _t184.select(1, 1);
      } else r.getTextContent()[i] === n && r.select(i + 1, i + 1);
    }
    function sa(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function la(t) {
      a &&
        !g &&
        m &&
        (sa(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return sa(t);
        }, 0)));
    }
    function ca(t, e) {
      var n = Fs(t);
      if (Ps(n) && rl(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = Is(o.ownerDocument);
      return null !== r && o.contains(r) && rl(r, e);
    }
    function aa(t) {
      var _ref66;
      var n = t.inputType,
        o = ra(t),
        r = Tc(),
        i = r._inputState,
        s = hu();
      if (
        "insertText" === n &&
        t.data &&
        i.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((sa(i), t.preventDefault(), Ba(s) && !s.isCollapsed())) {
          var _t186 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t186.key, _t186.offset, _t186.type),
            s.focus.set(_t186.key, _t186.offset, _t186.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t187 = gu();
          if (!Ba(_t187)) return !0;
          wi(_t187.clone());
        }
        if (Ba(s)) {
          var _n98 = s.anchor.key === s.focus.key;
          if (
            (function (t, e) {
              return (
                "MediaLast" === t.lastKeyCode && e < t.lastKeyDownTimeStamp + 30
              );
            })(i, t.timeStamp) &&
            r.isComposing() &&
            _n98
          ) {
            if (
              (xi(null),
              (i.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                Kc(r, function () {
                  xi(null);
                });
              }, 30),
              Ba(s))
            ) {
              var _t188 = s.anchor.getNode();
              (_t188.markDirty(), xr(_t188) || e(142), qc(s, _t188));
            }
          } else {
            if (
              (xi(null),
              g &&
                null !== o &&
                !o.collapsed &&
                (s.applyDOMRange(o), !s.isCollapsed()))
            )
              return (t.preventDefault(), s.removeText(), !0);
            t.preventDefault();
            var _e130 = s.anchor.getNode(),
              _l19 = _e130.getTextContent(),
              _c10 = _e130.canInsertTextAfter(),
              _a7 = 0 === s.anchor.offset && s.focus.offset === _l19.length;
            var _u7 = y && _n98 && !_a7 && _c10;
            if (
              (_u7 && s.isCollapsed() && (_u7 = !Jo(Gi(s.anchor, !0))), !_u7)
            ) {
              Xi(r, G, !0);
              var _t189 = hu();
              y &&
                Ba(_t189) &&
                _t189.isCollapsed() &&
                ((i.postDeleteSelectionToRestore = _t189),
                setTimeout(function () {
                  return (i.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!Ba(s))
        return (
          ("historyUndo" !== n && "historyRedo" !== n) ||
            (t.preventDefault(), Xi(r, "historyUndo" === n ? it : st)),
          !0
        );
      var l = t.data;
      (null !== i.unprocessedBeforeInputData &&
        Ki(!1, r, i.unprocessedBeforeInputData),
        (s.dirty && null === i.unprocessedBeforeInputData) ||
          !s.isCollapsed() ||
          Xo(s.anchor.getNode()) ||
          null === o ||
          s.applyDOMRange(o),
        (i.unprocessedBeforeInputData = null));
      var c = s.anchor,
        a = s.focus,
        u = c.getNode(),
        f = a.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === l) (t.preventDefault(), Xi(r, q, !1));
        else if (l === v) (t.preventDefault(), Xi(r, X));
        else if (null == l && t.dataTransfer) {
          var _e131 = t.dataTransfer.getData("text/plain");
          (t.preventDefault(), s.insertRawText(_e131));
        } else
          null != l && Vc(s, o, l, t.timeStamp, !0)
            ? (t.preventDefault(), Xi(r, Q, l), ia(l))
            : (i.unprocessedBeforeInputData = l);
        return ((i.lastBeforeInputInsertTextTimeStamp = t.timeStamp), !0);
      }
      switch ((t.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          (Xi(r, Q, t),
            ia(
              (_ref66 = t.dataTransfer
                ? t.dataTransfer.getData("text/plain")
                : null) != null
                ? _ref66
                : t.data,
            ));
          break;
        case "insertFromComposition": {
          var _e132 = i.hadOrphanedCompositionEvents;
          i.hadOrphanedCompositionEvents = !1;
          var _n99 = r._compositionKey;
          (xi(null), _e132 || Xi(r, Q, t), pa(_n99));
          break;
        }
        case "insertLineBreak":
          (xi(null), (i.isInsertLineBreak = !1), Xi(r, q, !1));
          break;
        case "insertParagraph":
          (xi(null),
            i.isInsertLineBreak
              ? ((i.isInsertLineBreak = !1), Xi(r, q, !1))
              : Xi(r, X));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Xi(r, Z, t);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Ho(t) || Ho(e) || !ai(t) || !ai(e);
          })(u, f) && Xi(r, tt, t);
          break;
        case "deleteByDrag":
          (os(Ul), Xi(r, tt, t));
          break;
        case "deleteByCut":
          Xi(r, tt, t);
          break;
        case "deleteContent":
          Xi(r, G, !1);
          break;
        case "deleteWordBackward":
          Xi(r, et, !0);
          break;
        case "deleteWordForward":
          Xi(r, et, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Xi(r, nt, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Xi(r, nt, !1);
          break;
        case "formatStrikeThrough":
          Xi(r, ot, "strikethrough");
          break;
        case "formatBold":
          Xi(r, ot, "bold");
          break;
        case "formatItalic":
          Xi(r, ot, "italic");
          break;
        case "formatUnderline":
          Xi(r, ot, "underline");
          break;
        case "historyUndo":
          Xi(r, it);
          break;
        case "historyRedo":
          Xi(r, st);
      }
      return !0;
    }
    function ua(t, e) {
      t.stopPropagation();
      var n = e._inputState;
      (sa(n),
        Kc(
          e,
          function () {
            ca(t, e) || e.dispatchCommand(V, t);
          },
          { event: t },
        ),
        (n.unprocessedBeforeInputData = null));
    }
    function fa(t) {
      var e = Tc(),
        n = e._inputState,
        o = hu(),
        r = t.data,
        i = ra(t);
      var s = !1;
      if (null != r && Ba(o)) {
        var _l20 = ys(ls(e)),
          _c11 = null !== _l20 ? Os(_l20, e._rootElement) : null,
          _a8 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            !e.isComposing();
        _a8 && (n.hadOrphanedCompositionEvents = !0);
        var _f8 = o.anchor.getNode(),
          _h5 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            e.isComposing() &&
            xr(_f8) &&
            ui(_f8);
        if (!_a8 && !_h5 && Vc(o, i, r, t.timeStamp, !1, _c11)) {
          if (((s = !0), "ending-firefox" === n.compositionPhase)) {
            var _t190 = _a(e, r);
            if (((n.compositionPhase = "idle"), _t190))
              return (os(Hl), Ai(), !0);
          }
          var _i39 = o.anchor.getNode();
          if (null === _l20 || null === _c11) return !0;
          var _a9 = o.isBackward(),
            _f9 = _a9 ? o.anchor.offset : o.focus.offset,
            _h6 = _a9 ? o.focus.offset : o.anchor.offset;
          (d &&
            !o.isCollapsed() &&
            xr(_i39) &&
            null !== _c11.anchorNode &&
            _i39.getTextContent().slice(0, _f9) +
              r +
              _i39.getTextContent().slice(_f9 + _h6) ===
              Li(_c11.anchorNode)) ||
            Xi(e, Q, r);
          var _g5 = r.length;
          (u &&
            _g5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _g5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            y && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), xi(null)));
        }
      }
      return (
        s ||
          (Ki(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (_a(e, r || void 0), os(Hl), (n.compositionPhase = "idle"))),
        Ai(),
        !0
      );
    }
    function da(t, e) {
      Xi(e, Y, t);
    }
    function ha(t) {
      var e = Tc(),
        n = e._inputState,
        o = hu();
      if (Ba(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r65 = o.anchor,
          _i40 = o.anchor.getNode();
        if (
          (xi(_r65.key),
          os(jl),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r65.type ||
            !o.isCollapsed() ||
            (!y &&
              (_i40.getFormat() !== o.format ||
                (xr(_i40) && _i40.getStyle() !== o.style))) ||
            (xr(_i40) &&
              (ui(_i40) ||
                (0 === _r65.offset && !_i40.canInsertTextBefore()) ||
                (_r65.offset === _i40.getTextContentSize() &&
                  !_i40.canInsertTextAfter()))))
        ) {
          Xi(e, Q, N);
          var _t191 = hu();
          Ba(_t191) && xi(_t191.anchor.key);
        }
      }
      return !0;
    }
    function ga(t) {
      var e = Tc();
      return (
        (e._inputState.compositionPhase = "idle"),
        _a(e, t.data),
        os(Hl),
        !0
      );
    }
    function pa(t) {
      var e = Tc()._inputState,
        n = e.composedSegmentedKey;
      if (((e.composedSegmentedKey = null), null === t || t !== n)) return;
      var o = Ci(t);
      if (!xr(o) || "text" === o.getType() || ui(o) || !o.isAttached()) return;
      var r = hu(),
        i = Ba(r) && r.anchor.key === t ? r.anchor.offset : null,
        s = yr(o.getTextContent());
      if (
        (s.setFormat(o.getFormat()),
        s.setStyle(o.getStyle()),
        o.replace(s),
        null !== i)
      ) {
        var _t192 = Math.min(i, s.getTextContentSize());
        s.select(_t192, _t192);
      }
    }
    function _a(t, e) {
      var n = t._compositionKey;
      if ((xi(null), null !== n && null != e)) {
        if ("" === e) {
          var _e133 = Ci(n),
            _o64 = t.getElementByKey(n),
            _r66 = null !== _o64 && xr(_e133) ? Ys(_e133, _o64, t) : null;
          if (null !== _r66 && null !== _r66.nodeValue && xr(_e133)) {
            var _n100 = ys(ls(t)),
              _o65 = _n100 && Os(_n100, t._rootElement);
            var _i41 = null,
              _s23 = null;
            (null !== _o65 &&
              _o65.anchorNode === _r66 &&
              ((_i41 = _o65.anchorOffset), (_s23 = _o65.focusOffset)),
              Bi(_e133, _r66.nodeValue, _i41, _s23, !0));
          }
          return (pa(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e134 = hu();
          if (Ba(_e134) || $a(_e134)) {
            if (Ba(_e134)) {
              var _t193 = _e134.focus;
              _e134.anchor.set(_t193.key, _t193.offset, _t193.type);
            }
            return (Xi(t, gt, null), pa(n), !1);
          }
        }
        var _o66 = Ci(n);
        if (null !== _o66 && xr(_o66) && ui(_o66)) {
          _o66.markDirty();
          var _t194 = hu(),
            _r67 = _o66.getTextContentSize(),
            _i42 =
              Ba(_t194) && _t194.anchor.key === n ? _t194.anchor.offset : _r67;
          return (_o66.select(_i42, _i42).insertText(e), !0);
        }
      }
      return (Ki(!0, t, e), pa(n), !1);
    }
    function ma(t, e) {
      var n = e._inputState;
      u
        ? (n.compositionPhase = "ending-firefox")
        : g || (!_ && !x)
          ? Xi(e, J, t)
          : ((n.compositionPhase = "ending-safari"),
            (n.compositionEndData = t.data));
    }
    function ya(t, e) {
      var n = e._inputState;
      (g &&
        (n.isShiftKeyDown =
          "Shift" === t.key ||
          (n.isShiftKeyDown && t.shiftKey && "CapsLock" !== t.key)),
        (n.lastKeyDownTimeStamp = t.timeStamp),
        (n.lastKeyCode = t.key),
        "Backspace" !== t.key && sa(n),
        e.isComposing() || Xi(e, lt, t));
    }
    var xa = { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: "any" },
      Sa = { ctrlKey: !0 },
      Ca = { metaKey: !0 },
      Ta = { shiftKey: "any" },
      va = { altKey: "any", shiftKey: "any" };
    function Na(t) {
      var e = Tc(),
        n = e._inputState;
      if (null == t.key) return !0;
      if ("ending-safari" === n.compositionPhase) {
        var _o67 = (function (t) {
          return "Backspace" === t.key;
        })(t);
        if (
          (_o67 &&
            Kc(e, function () {
              _a(e, n.compositionEndData);
            }),
          (n.compositionPhase = "idle"),
          (n.compositionEndData = ""),
          _o67)
        )
          return !0;
      }
      var o = e._keyDownShortcuts;
      null === o &&
        ((o = jt(
          (function () {
            var t = function t(_t195, e, n) {
                return {
                  key: _t195,
                  modifiers: e,
                  onMatch: function onMatch(t, e) {
                    Xi(e, n, t);
                  },
                };
              },
              e = function e(t, _e135, n, o) {
                return {
                  key: t,
                  modifiers: _e135,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Xi(e, n, o));
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
                      Xi(n, gt, t),
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
                    null === o || Ba(o) || (t.preventDefault(), Xi(n, e, t));
                  },
                };
              };
            return [
              t("ArrowRight", Ta, ct),
              t("ArrowLeft", Ta, ut),
              t("ArrowUp", va, dt),
              t("ArrowDown", va, ht),
              n(babelHelpers["extends"]({}, xa, { shiftKey: !0 }), !0),
              n(babelHelpers["extends"]({}, xa, { shiftKey: !1 }), !1),
              t(" ", xa, pt),
              {
                key: "Backspace",
                modifiers: Ta,
                onMatch: function onMatch(t, e) {
                  Xi(e, _t, t) && la(e._inputState);
                },
              },
              t("Escape", xa, mt),
              t("Delete", {}, yt),
              e("Backspace", zt, et, !0),
              e("Delete", zt, et, !1),
              e("b", Bt, ot, "bold"),
              e("u", Bt, ot, "underline"),
              e("i", Bt, ot, "italic"),
              t("Tab", Ta, xt),
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
                        modifiers: Sa,
                        onMatch: function onMatch(t, e) {
                          (t.preventDefault(), Xi(e, q, !0));
                        },
                      },
                      t(
                        "ArrowLeft",
                        babelHelpers["extends"]({ metaKey: !0 }, Ta),
                        ft,
                      ),
                      t(
                        "ArrowRight",
                        babelHelpers["extends"]({ metaKey: !0 }, Ta),
                        at,
                      ),
                      e("h", Sa, G, !0),
                      e("d", Sa, G, !1),
                      e("Backspace", Ca, nt, !0),
                      e("Delete", Ca, nt, !1),
                      e("k", Sa, nt, !1),
                    ]
                  : [
                      t("Home", Ta, ft),
                      t("End", Ta, at),
                      e("y", Sa, st, void 0),
                    ],
              ),
              [
                {
                  key: "a",
                  modifiers: Bt,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Xi(e, wt, t) && la(e._inputState));
                  },
                },
                o("c", Ot),
                o("x", Mt),
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
        })(t) && e.dispatchCommand(Lt, t),
        !0
      );
    }
    function ba(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var ka = new Map();
    function Ea(t) {
      var e = xs(t.target);
      if (null === e) return;
      var n = ts(t.target);
      var o = null,
        r = null;
      var i = null !== n ? jc.get(n) : void 0;
      if (null !== n) {
        if (void 0 !== i) {
          var _t196 = i.editors;
          var _n101 = i.hasShadowEditor;
          if (void 0 === _n101) {
            _n101 = !1;
            for (var _e136 of _t196)
              if (
                null !== _e136._rootElement &&
                Ss(_e136._rootElement.getRootNode())
              ) {
                _n101 = !0;
                break;
              }
            i.hasShadowEditor = _n101;
          }
          if (_n101) {
            var _n102 = null,
              _i43 = null;
            for (var _s24 of _t196) {
              var _t197 = _s24._rootElement;
              if (null === _t197) continue;
              var _l21 = Os(e, _t197).anchorNode;
              if (null !== _l21 && li(_l21) === _s24) {
                if (Ss(_t197.getRootNode())) {
                  ((o = _s24), (r = _l21));
                  break;
                }
                null === _n102 && ((_n102 = _s24), (_i43 = _l21));
              }
            }
            null === o && null !== _n102 && ((o = _n102), (r = _i43));
          } else {
            var _t198 = e.anchorNode;
            null === _t198 ||
              (Ps(_t198) && null !== _t198.shadowRoot) ||
              ((o = li(_t198)), null !== o && (r = _t198));
          }
        }
        if (null === o) {
          var _t199 = Is(n);
          o = null !== _t199 ? li(_t199) : null;
        }
      }
      if (null === o) return;
      if (o._inputState.isSelectionChangeFromMouseDown) {
        if (void 0 !== i)
          for (var _t200 of i.editors)
            _t200._inputState.isSelectionChangeFromMouseDown = !1;
        Kc(o, function () {
          var n = gu(),
            i = r != null ? r : Os(e, o._rootElement).anchorNode;
          (Ps(i) || fi(i)) && wi(fu(n, e, o, t));
        });
      }
      var s = Fi(o),
        l = s[s.length - 1],
        c = l._key,
        a = ka.get(c),
        u = a || l;
      (u !== o && Jc(e, u, !1),
        Jc(e, o, !0),
        o !== l ? ka.set(c, o) : a && ka["delete"](c));
    }
    function Oa(t) {
      t._lexicalHandled = !0;
    }
    function Ma(t) {
      return !0 === t._lexicalHandled;
    }
    var wa = z();
    var _Aa = (function () {
      function Aa(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto16 = Aa.prototype;
      _proto16.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto16.isBefore = function isBefore(t) {
        return this.key === t.key
          ? this.offset < t.offset
          : Ff(Ar(Cr(this, "next")), Ar(Cr(t, "next"))) < 0;
      };
      _proto16.getNode = function getNode() {
        var t = Ci(this.key);
        return (null === t && e(20), t);
      };
      _proto16.set = function set(t, e, n, o) {
        var r = this._selection,
          i = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          yc() ||
            (Si() === i && xi(t),
            null !== r &&
              (r.setCachedNodes(null),
              Ba(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return Aa;
    })();
    function Da(t, e, n) {
      return new _Aa(t, e, n);
    }
    function Ia(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (xr(e)) {
        r = "text";
        var _t201 = e.getTextContentSize();
        o > _t201 && (o = _t201);
      } else if (!Ho(e)) {
        var _t202 = e.getNextSibling();
        if (xr(_t202)) ((n = _t202.__key), (o = 0), (r = "text"));
        else {
          var _t203 = e.getParent();
          _t203 && ((n = _t203.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function Fa(t, e) {
      if (Ho(e)) {
        var _n103 = e.getLastDescendant();
        Ho(_n103) || xr(_n103) ? Ia(t, _n103) : Ia(t, e);
      } else Ia(t, e);
    }
    function Pa(t, e, n, o) {
      var r = t.getNode(),
        i = r.getChildAtIndex(t.offset),
        s = yr();
      if ((s.setFormat(n), s.setStyle(o), Hr(i))) i.splice(0, 0, [s]);
      else if (null !== i) {
        var _t204 = fs(r) ? jr().append(s) : s;
        i.insertBefore(_t204);
      } else if (fs(r)) {
        var _t205 = r.getLastChild();
        Ho(_t205) && !_t205.isInline() && _t205.isEmpty()
          ? _t205.append(s)
          : r.append(jr().append(s));
      } else r.append(s);
      (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
    }
    function Ra(t, n, o, r) {
      var i = t.anchor.getNode();
      xr(i) || e(398);
      var s = t.anchor.offset,
        l = yr(n).setFormat(o).setStyle(r),
        c = i.getParentOrThrow(),
        a = 0 === s,
        u = a || s === i.getTextContentSize();
      if (u && c.isInline() && !(a ? i.__prev : i.__next))
        xf(c, a ? "previous" : "next").insert(l);
      else {
        var _t206 = u ? i : i.splitText(s)[0];
        a ? _t206.insertBefore(l, !1) : _t206.insertAfter(l, !1);
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
    var _La = (function () {
      function La(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto17 = La.prototype;
      _proto17.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto17.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto17.is = function is(t) {
        if (!$a(t)) return !1;
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
        return new La(new Set(this._nodes));
      };
      _proto17.extract = function extract() {
        return this.getNodes();
      };
      _proto17.insertRawText = function insertRawText(t) {};
      _proto17.insertText = function insertText() {};
      _proto17.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === zu(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (xr(o)) r = o.select();
        else {
          var _t207 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t207, _t207);
        }
        r.insertNodes(t);
        for (var _t208 = 0; _t208 < n; _t208++) e[_t208].remove();
      };
      _proto17.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t209 of e) {
          var _e137 = Ci(_t209);
          null !== _e137 && n.push(_e137);
        }
        return (yc() || (this._cachedNodes = n), n);
      };
      _proto17.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n104 = 0; _n104 < t.length; _n104++)
          e += t[_n104].getTextContent();
        return e;
      };
      _proto17.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === zu(t);
        });
        if ((hu() || gu()) === this && t[0]) {
          var _e138 = xf(t[0], "next");
          vr(Df(_e138, _e138));
        }
        for (var _e139 of t) _e139.remove();
        Ka();
      };
      return La;
    })();
    function Ka() {
      var t = Oi();
      if (0 === t.getChildrenSize() && null === ju(hu())) {
        var _e140 = jr();
        (t.append(_e140), _e140.select());
      }
    }
    function Ba(t) {
      return t instanceof _za;
    }
    var _za = (function () {
      function za(t, e, n, o) {
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
      var _proto18 = za.prototype;
      _proto18.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto18.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto18.is = function is(t) {
        return (
          !!Ba(t) &&
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
          for (var _n105 of t)
            if (pf(_n105)) {
              var _t210 = _n105.origin;
              0 === e.length ? r.add(_t210) : (i++, e.push(_t210));
            } else {
              var _t211 = _n105.origin;
              Ho(_t211) && 0 !== i ? i-- : e.push(_t211);
            }
          if (
            (o && e.push(o.caret.origin),
            gf(t.focus) &&
              Ho(t.focus.origin) &&
              null === t.focus.getNodeAtCaret())
          )
            for (
              var _n106 = vf(t.focus.origin, "previous");
              pf(_n106) &&
              r.has(_n106.origin) &&
              !_n106.origin.isEmpty() &&
              _n106.origin.is(e[e.length - 1]);
              _n106 = bf(_n106)
            )
              (r["delete"](_n106.origin), e.pop());
          for (; e.length > 1; ) {
            var _t212 = e[e.length - 1];
            if (!Ho(_t212) || i > 0 || _t212.isEmpty() || r.has(_t212)) break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n107 = Ar(t.anchor),
              _o68 = Ar(t.anchor.getFlipped()),
              _r68 = function _r68(t) {
                return hf(t) ? t.origin : t.getNodeAtCaret();
              },
              _i44 =
                _r68(_n107) ||
                _r68(_o68) ||
                (t.anchor.getNodeAtCaret() ? _n107.origin : _o68.origin);
            e.push(_i44);
          }
          return e;
        })(Ir(br(this), "next"));
        return (yc() || (this._cachedNodes = e), e);
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
          e = br(this).getTextSlices();
        var n = "",
          o = !0;
        for (var _r69 = 0; _r69 < t.length; _r69++) {
          var _i45 = t[_r69];
          if (Ho(_i45) && !_i45.isInline()) {
            o || (n += "\n");
            var _t213 = "";
            for (var _e141 of Vu(_i45)) {
              var _n108 = Yu(_i45, _e141);
              null !== _n108 && (_t213 += _n108.getTextContent());
            }
            "" !== _t213 ? ((n += _t213), (o = !1)) : (o = !_i45.isEmpty());
          } else if (((o = !1), xr(_i45))) {
            var _t214 = Rr(e, _i45);
            n += _t214 ? _t214.getTextContent() : _i45.getTextContent();
          } else (Jo(_i45) || ql(_i45)) && (n += _i45.getTextContent());
        }
        return n;
      };
      _proto18.applyDOMRange = function applyDOMRange(t) {
        var e = Tc(),
          n = e.getEditorState()._selection,
          o = iu(
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
          Eo(this));
      };
      _proto18.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new za(
          Da(t.key, t.offset, t.type),
          Da(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto18.toggleFormat = function toggleFormat(t) {
        ((this.format = gi(this.format, t, null)), (this.dirty = !0));
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
        this.insertNodes(vu(t));
      };
      _proto18.insertText = function insertText(t) {
        var n = this.format,
          o = this.style;
        if (!this.isCollapsed()) {
          var _e142 = (
            this.focus.isBefore(this.anchor) ? this.focus : this.anchor
          ).getNode();
          if (
            (xr(_e142) && ((n = _e142.getFormat()), (o = _e142.getStyle())),
            this.removeText(),
            (this.format = n),
            (this.style = o),
            "" === t)
          )
            return;
          if (null === Si())
            return (
              "element" === this.anchor.type &&
                Pa(this.anchor, this.focus, n, o),
              void Ra(this, t, n, o)
            );
        }
        "element" === this.anchor.type && Pa(this.anchor, this.focus, n, o);
        var r = this.anchor.getNode();
        xr(r) || e(398);
        var i = this.anchor.offset,
          s = r.getParentOrThrow(),
          l = r.getTextContentSize();
        if (
          ui(r) ||
          (0 === i &&
            (!r.canInsertTextBefore() ||
              (!s.canInsertTextBefore() && !r.__prev))) ||
          (i === l &&
            (!r.canInsertTextAfter() || (!s.canInsertTextAfter() && !r.__next)))
        ) {
          if (r.isSegmented() && 0 !== i && i !== l) {
            if (null !== Si())
              (r.setMode("normal").setFormat(n).setStyle(o),
                (Tc()._inputState.composedSegmentedKey = r.getKey()));
            else {
              var _t215 = yr(r.getTextContent());
              (_t215.setFormat(n), _t215.setStyle(o));
              var _e143 = hu() === this;
              (r.replace(_t215),
                this.setTextNodeRange(_t215, i, _t215, i),
                _e143 && hu() !== this && wi(this));
            }
            return void ("" !== t && this.insertText(t));
          }
          if ("" === t) return;
          if (0 === i || i === l) {
            var _e144 = 0 === i,
              _l22 = _e144 ? "previous" : "next",
              _c12 = xf(r, _l22).getNodeAtCaret();
            var _a0;
            xr(_c12) &&
            (_e144 ? _c12.canInsertTextAfter() : _c12.canInsertTextBefore()) &&
            !ui(_c12)
              ? (_a0 = _c12)
              : ((_a0 = yr().setFormat(n).setStyle(o)),
                xf(
                  (_e144 ? s.canInsertTextBefore() : s.canInsertTextAfter())
                    ? r
                    : s,
                  _l22,
                ).insert(_a0));
            var _u8 = _e144 ? void 0 : 0;
            return (_a0.select(_u8, _u8), void this.insertText(t));
          }
          var _e145 = yr(t);
          return (
            _e145.setFormat(n),
            _e145.setStyle(o),
            r.replace(_e145),
            void _e145.select()
          );
        }
        if ("" === t) return;
        var c = s.isInline() && 0 === i && !r.__prev,
          a = s.isInline() && i === l && !r.__next,
          u = r.getFormat() !== n || r.getStyle() !== o;
        if (c || a || u) {
          if ("" !== r.getTextContent() || c || a)
            return void Ra(this, t, n, o);
          (r.setFormat(n), r.setStyle(o));
        }
        (r.spliceText(i, 0, t, !0),
          r.isComposing() &&
            "text" === this.anchor.type &&
            this.anchor.set(
              this.anchor.key,
              this.anchor.offset - t.length,
              this.anchor.type,
            ));
      };
      _proto18.removeText = function removeText() {
        var t = hu() === this,
          e = this.anchor.key;
        (Nr(this, Mr(br(this))),
          this.isCollapsed() && du(this, e),
          t && hu() !== this && wi(this));
      };
      _proto18.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        ja(this, t, e);
      };
      _proto18.insertNodes = function insertNodes(t) {
        var _i46;
        if (0 === t.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if (
          "element" === this.anchor.type &&
          Ho(n) &&
          n.isShadowRoot() &&
          null !== zu(n)
        ) {
          var _n$getFirstChild;
          var _o69 =
            (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(jr()).getFirstChild();
          if (null !== _o69 && !Ho(_o69)) {
            var _t216 = jr();
            (_o69.insertBefore(_t216), (_o69 = _t216));
          }
          if (null !== _o69) {
            _o69.selectStart();
            var _n109 = hu();
            return (Ba(_n109) || e(369), _n109.insertNodes(t));
          }
        }
        if ("element" === this.anchor.type && fs(n)) {
          var _e146 = Ou(t),
            _o70 = _e146.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _e146.getChildren()),
            void (null !== _o70 && _o70.selectEnd())
          );
        }
        var o = this.isBackward() ? this.focus : this.anchor;
        var r = o.getNode(),
          i = Dl(r, Ws);
        var s = t[t.length - 1];
        if (Ho(i) && "__language" in i) {
          if ("__language" in t[0]) this.insertText(t[0].getTextContent());
          else {
            var _bu = bu(this),
              _e147 = _bu[1];
            (i.splice(_e147, 0, t), s.selectEnd());
          }
          return;
        }
        if (
          !t.some(function (t) {
            return (Ho(t) || Jo(t)) && !t.isInline();
          })
        ) {
          Ho(i) || e(211, r.constructor.name, r.getType());
          var _bu2 = bu(this, !0),
            _n110 = _bu2[0],
            _o71 = _bu2[1];
          return (
            (Ho(_n110) ? _n110 : i).splice(_o71, 0, t),
            void s.selectEnd()
          );
        }
        if (null === i) {
          var _e148 = Ou(t),
            _n111 = _e148.getLastDescendant();
          var _o72 = Cr(this.anchor, "next");
          for (var _t217 of _e148.getChildren()) _o72 = zr(_t217, _o72);
          return void (null !== _n111 && _n111.selectEnd());
        }
        if (
          Ho(i) &&
          (null !== zu(i) ||
            (!i.isParentRequired() && !fs(i.getParentOrThrow())))
        ) {
          var _bu3 = bu(this),
            _e149 = _bu3[1],
            _n112 = Nu(t);
          i.splice(_e149, 0, _n112);
          var _o73 = _n112[_n112.length - 1];
          return void (void 0 !== _o73
            ? _o73.selectEnd()
            : i.select(_e149, _e149));
        }
        var l = Ou(t),
          c = l.getLastDescendant(),
          a = l.getChildren(),
          u = (function (t) {
            var e = (function (t) {
              var e = t.getNode();
              if (t.offset > 0)
                return "element" === t.type && Ho(e)
                  ? e.getChildAtIndex(t.offset - 1)
                  : null;
              for (
                var _t218 = e;
                null !== _t218 && !Ws(_t218) && !fs(_t218);
                _t218 = _t218.getParent()
              ) {
                var _e150 = _t218.getPreviousSibling();
                if (null !== _e150) return _e150;
              }
              return null;
            })(t);
            return ql(e) && ql(e.getPreviousSibling());
          })(o),
          f = Ho(i) && i.isEmpty() ? null : this.insertParagraph();
        f && !i.isAttached() && ((r = this.anchor.getNode()), (i = Dl(r, Ws)));
        var d = a[a.length - 1];
        var h = a[0];
        var g;
        ((g = h),
          u ||
            !Ho(g) ||
            !Ws(g) ||
            g.isEmpty() ||
            !Ho(i) ||
            (i.isEmpty() && !i.canMergeWhenEmpty()) ||
            (Ho(i) || e(211, r.constructor.name, r.getType()),
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
              for (var _t219 of i) s = s.insertAfter(_t219);
            })(i, h)));
        var p = Dl(c, Ws),
          _ = c.selectEnd();
        (f &&
          (Ho(p) && (f.canMergeWhenEmpty() || Ws(d))
            ? (p.append.apply(p, Array.from(f.getChildren())), f.remove())
            : f.isEmpty() && f.remove()),
          Ho(i) && i.isEmpty() && i.remove());
        var m = Ho(i) ? i.getLastChild() : null;
        ql(m) && p !== i && m.remove();
        var y = Ar(Cr(_.anchor, "next"));
        (Tr(_.anchor, y), Tr(_.focus, y));
      };
      _proto18.insertParagraph = function insertParagraph() {
        this.isCollapsed() || this.removeText();
        var t = this.anchor.getNode();
        if ("element" === this.anchor.type && fs(t)) {
          var _e151 = jr();
          return (
            t.splice(this.anchor.offset, 0, [_e151]),
            _e151.select(),
            _e151
          );
        }
        var _bu4 = bu(this),
          n = _bu4[1],
          o = Dl(this.anchor.getNode(), Ws);
        if (null !== o && null !== zu(o)) return null;
        Ho(o) || e(213);
        var r = o.getChildAtIndex(n),
          i = r ? [r].concat(Array.from(r.getNextSiblings())) : [],
          s = o.insertNewAfter(this, !1);
        return s
          ? (s.append.apply(s, Array.from(i)), s.selectStart(), s)
          : null;
      };
      _proto18.insertLineBreak = function insertLineBreak(t) {
        var e = Gl();
        if ((this.insertNodes([e]), t)) {
          var _t220 = e.getParentOrThrow(),
            _n113 = e.getIndexWithinParent();
          _t220.select(_n113, _n113);
        }
      };
      _proto18.extract = function extract() {
        var t = this.getNodes();
        if (this.isCollapsed()) return [].concat(Array.from(t));
        var e = this.isBackward(),
          n = br(this).getTextSlices(),
          o = [];
        for (var _e152 of t) {
          var _t221 = Rr(n, _e152),
            _r70 = _t221 ? Lr(_t221, this) : _e152;
          null !== _r70 && o.push(_r70);
        }
        if (1 === t.length && 1 === o.length && xr(o[0])) {
          var _t222 = o[0],
            _ref67 = e ? [this.focus, this.anchor] : [this.anchor, this.focus],
            _n114 = _ref67[0],
            _r71 = _ref67[1];
          (_n114.set(_t222.getKey(), 0, "text"),
            _r71.set(_t222.getKey(), _t222.getTextContentSize(), "text"));
        }
        return o;
      };
      _proto18.modify = function modify(t, e, n) {
        if (Mu(this, t, e, n)) return;
        var o = "move" === t,
          r = Tc(),
          i = ys(ls(r));
        if (!i) return;
        var s = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === s ||
          !Ho(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          ms(s, r, l);
        var a = Qi(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = xr(c) ? Ys(c, a, r) : null),
          this.dirty)
        ) {
          var _t223 = Qi(r, this.anchor.key);
          var _e153 = _t223;
          if ("text" === this.anchor.type) {
            var _n115 = this.anchor.getNode();
            _e153 = xr(_n115) ? Ys(_n115, _t223, r) : null;
          }
          _e153 && u && xu(i, _e153, this.anchor.offset, u, this.focus.offset);
        }
        if (
          "character" === n &&
          xr(c) &&
          c.isUnmergeable() &&
          (e
            ? 0 === this.focus.offset
            : this.focus.offset === c.getTextContentSize())
        ) {
          var _t224 = xf(c, e ? "previous" : "next").getNodeAtCaret();
          if (xr(_t224)) {
            if (!o) {
              var _n116 = _t224.getTextContentSize();
              return (
                e
                  ? this.focus.set(_t224.__key, _n116 - 1, "text")
                  : this.focus.set(_t224.__key, 1, "text"),
                void (this.dirty = !0)
              );
            }
            {
              var _n117 = r.getElementByKey(_t224.getKey()),
                _o74 = _n117 ? Ys(_t224, _n117, r) : null;
              if (_o74) {
                var _t225 = e ? _o74.length : 0;
                xu(i, _o74, _t225, _o74, _t225);
              }
            }
          }
        }
        if ((Ja(i, t, e ? "backward" : "forward", n, l), i.rangeCount > 0)) {
          var _t226 = ks(i, r._rootElement),
            _n118 = _t226 || i.getRangeAt(0),
            _s25 = this.anchor.getNode(),
            _l23 = Xo(_s25) ? _s25 : as(_s25);
          (this.applyDOMRange(_n118),
            (this.dirty = !0),
            o ||
              (Ga(this, e, _l23),
              (_t226
                ? "backward" !== i.direction
                : i.anchorNode === _n118.startContainer &&
                  i.anchorOffset === _n118.startOffset) || Ya(this)));
        }
        "lineboundary" === n && Mu(this, t, e, n, "decorators");
      };
      _proto18.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Ho(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t227 = e.getParent(),
            _n119 =
              e.getNextSibling() ||
              (null === _t227 ? null : _t227.getNextSibling());
          if (Ho(_n119) && _n119.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto18.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e154 = this.anchor;
          var _n120 = _e154.getNode();
          if (this.forwardDeletion(_e154, _n120, t)) {
            var _t228 = Ho(_n120) ? _n120.getNextSibling() : null;
            if (
              !(
                Ho(_n120) &&
                _n120.isEmpty() &&
                Ho(_t228) &&
                _t228.isShadowRoot()
              )
            )
              return;
          }
          var _o75 = Cr(_e154, t ? "previous" : "next"),
            _r72 = wf(_o75);
          if (
            _r72.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            if ("element" === _e154.type) {
              var _t229 = _o75.getNodeAtCaret();
              if (Ho(_t229) && _s(_t229)) {
                var _e155 = _t229.getParent();
                _t229.remove();
                var _n121 = Mi(_e155, _t229);
                return void (null !== _n121 && _n121.selectStart());
              }
            }
            var _t230 = { type: "initial" };
            for (var _e156 of _r72.iterNodeCarets("shadowRoot"))
              if (pf(_e156)) {
                if (_e156.origin.isInline());
                else {
                  if (_e156.origin.isShadowRoot()) {
                    if ("merge-block" === _t230.type) break;
                    if (
                      Ho(_r72.anchor.origin) &&
                      _r72.anchor.origin.isEmpty()
                    ) {
                      var _t231 = Ar(_e156);
                      (Nr(this, Df(_t231, _t231)), _r72.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t230.type &&
                    "merge-block" !== _t230.type) ||
                    (_t230 = {
                      block: _t230.block,
                      caret: _e156,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t230.type) break;
                if (gf(_e156)) {
                  if (Ho(_e156.origin)) {
                    if (_e156.origin.isInline()) {
                      if (!_e156.origin.isParentOf(_r72.anchor.origin)) break;
                    } else
                      _t230 = { block: _e156.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Jo(_e156.origin)) {
                    if (_e156.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t230.type &&
                      (_e156.origin.isKeyboardSelectable() ||
                        !_e156.origin.isInline()) &&
                      Ho(_r72.anchor.origin) &&
                      _r72.anchor.origin.isEmpty()
                    ) {
                      _r72.anchor.origin.remove();
                      var _t232 = au();
                      (_t232.add(_e156.origin.getKey()), wi(_t232));
                    } else {
                      var _t233 = _e156.origin,
                        _n122 = _t233.getParent();
                      _t233.remove();
                      var _o76 = Mi(_n122, _t233);
                      null !== _o76 && _o76.selectStart();
                    }
                    return;
                  }
                  if (ql(_e156.origin)) return void _e156.origin.remove();
                  break;
                }
              }
            if ("merge-block" === _t230.type) {
              var _t234 = _t230,
                _e157 = _t234.caret,
                _n123 = _t234.block;
              if (Vu(_n123).length > 0) return;
              return _e157.origin.isEmpty() &&
                !_n123.isEmpty() &&
                _e157.origin.getParent() === _n123.getParent()
                ? void _e157.origin.remove(!0)
                : (Nr(
                    this,
                    Df(
                      !_e157.origin.isEmpty() && _n123.isEmpty()
                        ? kr(xf(_n123, _e157.direction))
                        : _r72.anchor,
                      _e157,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t235 = _e154.getNode(); null !== _t235; ) {
              if (null !== zu(_t235)) return;
              if (Ho(_t235) && _t235.isShadowRoot()) break;
              _t235 = _t235.getParent();
            }
          }
          var _i47 = this.focus;
          if ((qa(this, t, "character"), this.isCollapsed())) {
            if (
              t &&
              0 === _e154.offset &&
              (function (t, e) {
                for (var _n124 = e; _n124; _n124 = _n124.getParent()) {
                  if (Ho(_n124)) {
                    if (_n124.collapseAtStart(t)) return !0;
                    if (fs(_n124)) break;
                  }
                  if (_n124.getPreviousSibling()) break;
                }
                return !1;
              })(this, _e154.getNode())
            )
              return;
          } else {
            var _o77 = "text" === _i47.type ? _i47.getNode() : null;
            if (
              ((_n120 = "text" === _e154.type ? _e154.getNode() : null),
              null !== _o77 && _o77.isSegmented())
            ) {
              var _e158 = _i47.offset,
                _r73 = _o77.getTextContentSize();
              if (
                _o77.is(_n120) ||
                (t && _e158 !== _r73) ||
                (!t && 0 !== _e158)
              )
                return void Za(_o77, t, _e158);
            } else if (null !== _n120 && _n120.isSegmented()) {
              var _r74 = _e154.offset,
                _i48 = _n120.getTextContentSize();
              if (_n120.is(_o77) || (t && 0 !== _r74) || (!t && _r74 !== _i48))
                return void Za(_n120, t, _r74);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode();
              if (r === o.getNode() && "text" === n.type && "text" === o.type) {
                var _t236 = n.offset,
                  _s26 = o.offset,
                  _l24 = _t236 < _s26,
                  _c13 = _l24 ? _t236 : _s26,
                  _a1 = _l24 ? _s26 : _t236,
                  _u9 = _a1 - 1;
                _c13 !== _u9 &&
                  !Ii((i = r.getTextContent().slice(_c13, _a1))) &&
                  !Qa(i) &&
                  (e ? o.set(o.key, _u9, o.type) : n.set(n.key, _u9, n.type));
              }
              var i;
            })(this, t);
          }
        }
        (e || Va(this),
          this.removeText(),
          t &&
            !e &&
            this.isCollapsed() &&
            "element" === this.anchor.type &&
            0 === this.anchor.offset &&
            Ka());
      };
      _proto18.deleteLine = function deleteLine(t) {
        var e = nu(this.anchor);
        if (null !== e && Jo($u(e)))
          return (
            this.isCollapsed() ||
              this.focus.set(
                this.anchor.key,
                this.anchor.offset,
                this.anchor.type,
              ),
            void this.deleteCharacter(t)
          );
        Wa(this, t, "lineboundary");
      };
      _proto18.deleteWord = function deleteWord(t) {
        Wa(this, t, "word");
      };
      _proto18.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (yc() || (this._cachedIsBackward = e), e);
      };
      _proto18.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return za;
    })();
    function $a(t) {
      return t instanceof _La;
    }
    function Wa(t, e, n) {
      var o = t.isCollapsed(),
        r = t.anchor,
        i = t.focus;
      if (o) {
        if ("word" === n && t.forwardDeletion(r, r.getNode(), e)) return;
        (qa(t, e, n),
          "lineboundary" === n &&
            (function (t) {
              for (var _e159 of br(t).iterNodeCarets("shadowRoot"))
                if (gf(_e159) && ql(_e159.origin))
                  return void Tr(t.focus, kr(_e159));
            })(t));
      }
      ("lineboundary" !== n ||
        t.isCollapsed() ||
        Dl(r.getNode(), Ws) === Dl(i.getNode(), Ws) ||
        i.set(r.key, r.offset, r.type),
        t.isCollapsed() ? t.deleteCharacter(e) : (o || Va(t), t.removeText()));
    }
    function Ua(t, e) {
      if ($a(t)) {
        for (var _n125 of t.getNodes())
          cr(_n125) && _n125.setFormat(e(_n125.getFormat()));
        return;
      }
      var n = t.isCollapsed() ? [] : t.getNodes(),
        o = n.length ? br(t).getTextSlices() : [];
      var r,
        i,
        s,
        l = !1,
        c = 0;
      for (var _a10 of n)
        if (xr(_a10)) {
          r && i && (r.set(i.__key, 0, "text"), (r = void 0));
          var _n126 = Rr(o, _a10);
          if (!l && _n126 && 0 === _n126.distance) {
            var _e160 = t.isBackward() ? t.focus : t.anchor;
            "text" === _e160.type && _e160.key === _a10.__key && (r = _e160);
          }
          if (((l = !0), _n126 && 0 === _n126.distance)) continue;
          var _u0 = e(_a10.getFormat()),
            _f0 = r ? _a10.getTextContentSize() : 0,
            _d5 = _n126 && !ui(_a10) ? Lr(_n126, t) : _a10;
          null !== _d5 &&
            (_d5.setFormat(_u0),
            void 0 === s &&
              ((s = _u0),
              (i = _d5),
              r &&
                _d5.getTextContentSize() !== _f0 &&
                (r.set(_d5.__key, 0, "text"), (r = void 0))),
            (c = _u0));
        } else
          Ho(_a10)
            ? _a10.setTextFormat(e(_a10.getTextFormat()))
            : cr(_a10) && _a10.setFormat(e(_a10.getFormat()));
      l
        ? void 0 !== s && (t.format = s | c)
        : (t.setFormat(e(t.format)), xi(null));
    }
    function ja(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && Ba(t) ? gi(t.format, e, null) : n;
      Ua(t, function (t) {
        return gi(t, e, o);
      });
    }
    function Ha(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function Va(t) {
      var e = Oi();
      !e.isEmpty() &&
        $r(e, t) &&
        (t.anchor.set(e.getKey(), 0, "element"),
        t.focus.set(e.getKey(), e.getChildrenSize(), "element"));
    }
    function Ya(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        i = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, i, !0));
    }
    function Ja(t, e, n, o, r) {
      var i = "character" === o ? Os(t, r) : null,
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
      var c = Os(t, r);
      c.focusNode === s && c.focusOffset === l && t.modify(e, n, o);
    }
    function Ga(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return is(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var i = e ? r[0] : r[r.length - 1],
        s = Ho(i) ? i : i.getParentOrThrow();
      return (e ? s.selectStart() : s.selectEnd(), !0);
    }
    function qa(t, e, n) {
      if (Mu(t, "extend", e, n)) return;
      var o = Tc(),
        r = ys(ls(o));
      if (!r || "function" != typeof r.modify) return;
      var i = o._blockCursorElement,
        s = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === s ||
        null === i ||
        !Ho(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        ms(i, o, s);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && xr(e) ? Ys(e, n, o) : n;
        },
        u = l.getNode(),
        f = a(l);
      if (null === f) return;
      var d = l.offset,
        h = t.isCollapsed(),
        g = t.focus,
        p = h ? f : a(g);
      if (null === p) return;
      var _ = g.offset;
      if (
        (xu(r, p, _, p, _),
        Ja(r, "move", e ? "backward" : "forward", n, s),
        0 === r.rangeCount)
      )
        return;
      var m = ks(r, s) || r.getRangeAt(0);
      var y = m.startContainer,
        x = m.startOffset;
      if ("lineboundary" === n && fi(y) && li(y) === o) {
        var _t237 = Di(y);
        if (Jo(_t237) && _t237.isInline() && !_t237.isIsolated()) {
          var _n127 = o.getElementByKey(_t237.getKey());
          null !== _n127 &&
            _n127.contains(y) &&
            ((y = _n127), (x = e ? 0 : _n127.childNodes.length));
        }
      }
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        xr(u) &&
        u.isUnmergeable() &&
        d === (e ? 0 : u.getTextContentSize())
      ) {
        var _n128 = xf(u, e ? "previous" : "next").getNodeAtCaret();
        if (xr(_n128)) {
          var _o78 = e ? _n128.getTextContentSize() - 1 : 1;
          return (t.focus.set(_n128.__key, _o78, "text"), void (t.dirty = !0));
        }
      }
      if (h && "character" === n && "text" === l.type) {
        var _n129 = e ? 0 : u.getTextContentSize(),
          _o79 = y === f ? x : d !== _n129 ? _n129 : -1;
        if (_o79 >= 0)
          return void (
            _o79 !== d && (t.focus.set(l.key, _o79, "text"), (t.dirty = !0))
          );
      }
      var _ref68 = e ? [y, x, f, d] : [f, d, y, x],
        S = _ref68[0],
        C = _ref68[1],
        T = _ref68[2],
        v = _ref68[3],
        N = Xo(u) ? u : as(u);
      (t.applyDOMRange({
        collapsed: !1,
        endContainer: T,
        endOffset: v,
        startContainer: S,
        startOffset: C,
      }),
        (t.dirty = !0),
        !Ga(t, e, N) && e && Ya(t));
    }
    function Xa() {
      try {
        var _t238 = new RegExp("\\p{Emoji}", "u"),
          _e161 = _t238.test.bind(_t238);
        if (
          _e161("\u2764\ufe0f") &&
          _e161("#\ufe0f\u20e3") &&
          _e161("\u{1f44d}")
        )
          return _e161;
      } catch (t) {}
      return function () {
        return !1;
      };
    }
    var Qa = Xa();
    function Za(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        i = r.length;
      var s = 0,
        l = 0;
      for (var _t239 = 0; _t239 < i; _t239++) {
        var _o80 = _t239 === i - 1;
        if (
          ((l = s), (s += r[_t239].length), (e && s === n) || s > n || _o80)
        ) {
          (r.splice(_t239, 1), _o80 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function tu(t, n, o, r) {
      var i,
        s = n,
        l = !1;
      if (Ps(t)) {
        var _c14 = !1;
        var _a11 = t.childNodes,
          _u1 = _a11.length,
          _f1 = r._blockCursorElement;
        (s === _u1 && _u1 > 0 && ((_c14 = !0), (s = _u1 - 1)),
          void 0 !== Ni(t, r) || rl(t, r) || (l = !0));
        var _d6 = _a11[s],
          _h7 = !1;
        if (_d6 === _f1) ((_d6 = _a11[s + 1]), (_h7 = !0));
        else if (null !== _f1) {
          var _e162 = _f1.parentNode;
          t === _e162 &&
            n > Array.prototype.indexOf.call(_e162.children, _f1) &&
            s--;
        }
        if (((i = Di(_d6)), xr(i))) s = Cf(i, _c14 ? "next" : "previous");
        else {
          var _a12 = Di(t);
          if (null === _a12) return null;
          if (Ho(_a12)) {
            var _u10$resolveChildInde;
            var _l25 = r.getElementByKey(_a12.getKey());
            null === _l25 && e(214);
            var _u10 = Hs(_a12, _l25, r);
            ((_u10$resolveChildInde = _u10.resolveChildIndex(_a12, _l25, t, n)),
              (_a12 = _u10$resolveChildInde[0]),
              (s = _u10$resolveChildInde[1]),
              Ho(_a12) || e(215),
              _c14 &&
                s >= _a12.getChildrenSize() &&
                (s = Math.max(0, _a12.getChildrenSize() - 1)));
            var _f10 = _a12.getChildAtIndex(s);
            if (
              Ho(_f10) &&
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
              var _t240 = _c14
                ? _f10.getLastDescendant()
                : _f10.getFirstDescendant();
              (null === _t240
                ? (_a12 = _f10)
                : ((_f10 = _t240),
                  (_a12 = Ho(_f10) ? _f10 : _f10.getParentOrThrow())),
                (s = 0));
            }
            xr(_f10)
              ? ((i = _f10),
                (_a12 = null),
                (s = Cf(_f10, _c14 ? "next" : "previous")))
              : _f10 !== _a12 &&
                _c14 &&
                !_h7 &&
                (Ho(_a12) || e(216),
                (s = Math.min(_a12.getChildrenSize(), s + 1)));
          } else {
            var _e163 = $u(_a12),
              _o81 = null !== _e163 ? _e163 : _a12,
              _i49 = _o81.getIndexWithinParent(),
              _l26 = r.getElementByKey(_a12.getKey());
            var _c15 = "after";
            if (null !== _l26 && Di(t) === _a12) {
              var _e164 = Hs(_a12, _l26, r);
              _e164.element !== _l26
                ? (_c15 = _e164.resolveLeafPosition(_l26, t, n))
                : 0 === n && Jo(_a12) && (_c15 = "before");
            }
            ((s = "before" === _c15 ? _i49 : _i49 + 1),
              (_a12 = _o81.getParentOrThrow()));
          }
          if (Ho(_a12)) return [Da(_a12.__key, s, "element"), l];
        }
      } else i = Di(t);
      return xr(i) ? [Da(i.__key, Cf(i, s, "clamp"), "text"), l] : null;
    }
    function eu(t, e, n) {
      var o = t.getNode(),
        r = 0 === t.offset;
      if (!r && t.offset !== o.getTextContent().length) return;
      var i = r ? "previous" : "next",
        s = xf(o, i).getNodeAtCaret();
      if (r === e || !Ho(s) || !s.isInline() || (r && n)) {
        if (r && !e)
          xr(s) &&
            !o.isUnmergeable() &&
            t.set(s.__key, s.getTextContent().length, "text");
        else if (null === s && (n || (!r && e))) {
          var _e165 = o.getParent();
          if (
            Ho(_e165) &&
            _e165.isInline() &&
            (r ||
              (!_e165.canInsertTextAfter() && _e165.getTextContentSize() > 1))
          ) {
            var _n130 = xf(_e165, i).getNodeAtCaret();
            xr(_n130) &&
              t.set(_n130.__key, r ? _n130.getTextContent().length : 0, "text");
          }
        }
      } else t.set(s.__key, r ? s.getChildrenSize() : 0, "element");
    }
    function nu(t) {
      var e = Ci(t.key);
      return null === e ? null : Uu(e);
    }
    function ou(t, e, n) {
      var o = nu(t),
        r = nu(e);
      if (o === r || (null !== o && null !== r && o.is(r))) return !1;
      var i = n(o, r);
      if (null !== o)
        return (
          Ho(o)
            ? e.set(o.getKey(), i ? o.getChildrenSize() : 0, "element")
            : e.set(o.getKey(), i ? o.getTextContentSize() : 0, "text"),
          !0
        );
      var s = $u(r);
      if (null === s) return !1;
      var l = s.getParent();
      if (null === l) return !1;
      var c = s.getIndexWithinParent();
      return (e.set(l.getKey(), i ? c + 1 : c, "element"), !0);
    }
    function ru(t) {
      var e = ou(t.anchor, t.focus, function (e, n) {
        return (function (t, e, n, o) {
          if (null !== n && null !== o) {
            var _t241 = $u(n),
              _e166 = $u(o);
            if (null !== _t241 && _t241.is(_e166)) {
              for (var _e167 of Hu(_t241).values()) {
                if (_e167 === n.getKey()) return !0;
                if (_e167 === o.getKey()) return !1;
              }
              return !0;
            }
            return null === _t241 || null === _e166 || _t241.isBefore(_e166);
          }
          if (null !== n) {
            var _t242 = $u(n),
              _o82 = Ci(e.key);
            return (
              null === _t242 ||
              null === _o82 ||
              !(!_t242.is(_o82) && !_t242.isParentOf(_o82)) ||
              _t242.isBefore(_o82)
            );
          }
          var r = $u(o),
            i = Ci(t.key);
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
    function iu(t, e, n, o, r, i) {
      if (null === t || null === n || !ii(r, t, n)) return null;
      var s = tu(t, e, Ba(i) ? i.anchor : null, r);
      if (null === s) return null;
      var l = tu(n, o, Ba(i) ? i.focus : null, r);
      if (null === l) return null;
      var c = s[0],
        a = s[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e168 = Di(t),
          _o83 = Di(n);
        if (Jo(_e168) && Jo(_o83)) return null;
      }
      var d =
        r._slotsUsed &&
        ou(c, u, function () {
          return (
            0 !==
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)
          );
        });
      return (
        (function (t, e) {
          if ("text" === t.type && "text" === e.type) {
            var _n131 = t.isBefore(e),
              _o84 = t.is(e);
            (eu(t, _n131, _o84),
              eu(e, !_n131, _o84),
              _o84 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function su(t) {
      return Ho(t) && !t.isInline();
    }
    function lu(t, e, n, o, r, i) {
      var s = Cc(),
        l = new _za(Da(t, e, r), Da(n, o, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function cu() {
      var t = Da("root", 0, "element"),
        e = Da("root", 0, "element");
      return new _za(t, e, 0, "");
    }
    function au() {
      return new _La(new Set());
    }
    var uu = new Set([
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "Backspace",
      "Delete",
      "Enter",
      "Tab",
    ]);
    function fu(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var i = o || r.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c = "keydown" === s && uu.has(i.key),
        a =
          !fe &&
          (l ||
            c ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && i && 3 === i.detail) ||
            "drop" === s ||
            void 0 === s);
      var u, f, d, h;
      if (Ba(t) && !a) return t.clone();
      {
        if (null === e) return null;
        var _o85 = Os(e, n._rootElement);
        if (
          ((u = _o85.anchorNode),
          (f = _o85.focusNode),
          (d = _o85.anchorOffset),
          (h = _o85.focusOffset),
          (l || c || void 0 === s) && Ba(t) && !ii(n, u, f))
        )
          return t.clone();
      }
      var g = iu(u, d, f, h, n, t);
      if (null === g) return null;
      var p = g[0],
        _ = g[1],
        m = g[2],
        y = Ba(t) ? t : null,
        x = new _za(p, _, y ? y.format : 0, y ? y.style : "");
      return (y && du(x, y.anchor.key), (x.dirty = m), x);
    }
    function du(t, e) {
      var n = t.anchor;
      if (n.key === e) return;
      var o = n.getNode();
      var r = 0,
        i = "";
      (xr(o)
        ? ((r = o.getFormat()), (i = o.getStyle()))
        : Ho(o) && ((r = o.getTextFormat()), (i = o.getTextStyle())),
        (t.format === r && t.style === i) ||
          ((t.format = r), (t.style = i), (t.dirty = !0)));
    }
    function hu() {
      return Cc()._selection;
    }
    function gu() {
      return Tc()._editorState._selection;
    }
    function pu(t, e) {
      var n = e.__key;
      return t.anchor.key === n || t.focus.key === n;
    }
    function _u(t, e, n, o) {
      if (o === void 0) {
        o = 1;
      }
      if (pu(t, e))
        for (var _r75 of [t.anchor, t.focus]) {
          _r75.key === e.__key &&
            ((n <= _r75.offset && o > 0) || (n < _r75.offset && o < 0)) &&
            _r75.set(e.__key, Math.max(0, _r75.offset + o), "element");
          var _t243 = _r75.getNode();
          if (Ho(_t243)) {
            var _e169 = _t243.getChildrenSize(),
              _n132 = _r75.offset >= _e169,
              _o86 = _t243.getChildAtIndex(_n132 ? _e169 - 1 : _r75.offset);
            xr(_o86) &&
              _r75.set(
                _o86.__key,
                _n132 ? _o86.getTextContentSize() : 0,
                "text",
              );
          }
        }
    }
    function mu(t, e, n, o, r) {
      var i = o || r;
      if (xr(i) || Ho(i)) {
        var _e170 = xr(i);
        t.set(
          i.__key,
          null === o ? 0 : _e170 ? i.getTextContentSize() : i.getChildrenSize(),
          _e170 ? "text" : "element",
        );
      } else {
        var _o87 = e.getIndexWithinParent();
        t.set(n.__key, -1 === _o87 ? n.getChildrenSize() : _o87, "element");
      }
    }
    function yu(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function xu(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function Su(t, e, n) {
      var o = Qi(t, e.getKey());
      if (Ho(e)) {
        var _r76 = Hs(e, o, t);
        return [_r76.element, n + _r76.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Cu(t, e, n, o, r, i) {
      var s = i.getRootNode(),
        l = di(s) || Ss(s) ? Is(s) : null;
      if ((r.has(zl) && l !== i) || (null !== l && oi(l, l))) return;
      var c = Os(o, i);
      var a;
      if (!Ba(e))
        return void (
          null !== t &&
          ii(n, c.anchorNode, c.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _Su = Su(n, h, f.offset),
        p = _Su[0],
        _ = _Su[1],
        _Su2 = Su(n, g, d.offset),
        m = _Su2[0],
        y = _Su2[1],
        x = e.format,
        S = e.style,
        C = e.isCollapsed();
      var T = p,
        v = m,
        N = !1;
      if (
        ("text" === f.type
          ? ((T = xr(h) ? Ys(h, p, n) : null),
            (N = h.getFormat() !== x || h.getStyle() !== S))
          : Ba(t) && "text" === t.anchor.type && (N = !0),
        "text" === d.type && (v = xr(g) ? Ys(g, m, n) : null),
        null !== T && null !== v)
      ) {
        if (
          (C &&
            (null === t || N || (Ba(t) && (t.format !== x || t.style !== S))) &&
            (function (t, e, n, o, r, i) {
              t._inputState.collapsedSelectionFormat = {
                format: e,
                key: r,
                offset: o,
                style: n,
                timeStamp: i,
              };
            })(n, x, S, _, f.key, performance.now()),
          ("Range" !== o.type || !C) &&
            c.anchorOffset === _ &&
            c.focusOffset === y &&
            c.anchorNode === T &&
            c.focusNode === v)
        ) {
          if (null === l || !i.contains(l)) {
            var _t244 = null !== l ? li(l) : null;
            (null !== _t244 && _t244 !== n) ||
              r.has(Ul) ||
              i.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          (xu(o, T, _, v, y), u && e.isCollapsed() && null !== i && !r.has(Ul))
        ) {
          var _t245 = Ds(i);
          if (null === _t245 || !i.contains(_t245)) {
            var _t246 = Is(i.ownerDocument),
              _e171 = null !== _t246 ? li(_t246) : null;
            (null !== _e171 && _e171 !== n) || i.focus({ preventScroll: !0 });
          }
        }
        if (!r.has($l) && e.isCollapsed() && null !== i && i === Ds(i)) {
          var _t247 =
            Ba(e) && "element" === e.anchor.type
              ? (function (t, e, n) {
                  var o = e.childNodes[n];
                  if (!Ps(o)) return o || null;
                  var r = Ni(o, t),
                    i = void 0 !== r ? Ci(r) : null;
                  return null === i || Ho(i) ? o : Hs(i, o, t).element;
                })(n, T, _)
              : (void 0 === a && (a = Es(o, i)), a);
          if (null !== _t247) {
            var _e172;
            if (fi(_t247)) {
              var _n133 = _t247.ownerDocument.createRange();
              (_n133.selectNode(_t247),
                (_e172 = _n133.getBoundingClientRect()));
            } else
              _e172 = Ps(_t247)
                ? _t247.getBoundingClientRect()
                : (function (t) {
                    var e = t.getBoundingClientRect(),
                      n = t.startContainer,
                      o = t.startOffset;
                    if (
                      !t.collapsed ||
                      0 !== e.width ||
                      0 !== e.height ||
                      !fi(n) ||
                      0 === n.length
                    )
                      return e;
                    var r = t.cloneRange();
                    return (
                      o > 0 ? r.setStart(n, o - 1) : r.setEnd(n, 1),
                      r.getBoundingClientRect()
                    );
                  })(_t247);
            !(function (t, e, n, o) {
              if (o === void 0) {
                o = null;
              }
              var r = ts(n),
                i = ss(r);
              if (null === r || null === i) return;
              var s = n.getBoundingClientRect();
              if (e.bottom < s.top) return;
              if (null !== o && e.height > 0) {
                var _t248 = e.left,
                  _r77 = e.right,
                  _s27 = Ps(o) ? o : Zi(o);
                for (; null !== _s27 && n.contains(_s27); ) {
                  var _e173 = ns(i, _s27, _t248, _r77);
                  ((_t248 -= _e173),
                    (_r77 -= _e173),
                    (_s27 = _s27 === n ? null : Zi(_s27)));
                }
              }
              var l = e.top,
                c = e.bottom,
                a = 0,
                u = 0,
                f = n;
              for (; null !== f; ) {
                var _e174 = f === r.body;
                if (_e174) {
                  var _e175 = i.visualViewport;
                  if (_e175) {
                    var _t249 = _e175.offsetTop;
                    ((a = _t249), (u = _t249 + _e175.height));
                  } else ((a = 0), (u = ls(t).innerHeight));
                  var _n134 = i.getComputedStyle(r.documentElement),
                    _o88 = parseFloat(_n134.scrollPaddingTop),
                    _s28 = parseFloat(_n134.scrollPaddingBottom);
                  (isFinite(_o88) && (a += _o88),
                    isFinite(_s28) && (u -= _s28));
                } else {
                  var _t250 = f === n ? s : f.getBoundingClientRect();
                  ((a = _t250.top), (u = _t250.bottom));
                }
                var _o89 = 0;
                if (
                  (l < a ? (_o89 = -(a - l)) : c > u && (_o89 = c - u),
                  0 !== _o89)
                )
                  if (_e174) i.scrollBy(0, _o89);
                  else {
                    var _t251 = f.scrollTop;
                    f.scrollTop += _o89;
                    var _e176 = f.scrollTop - _t251;
                    ((l -= _e176), (c -= _e176));
                  }
                if (_e174) break;
                f = Zi(f);
              }
            })(n, _e172, i, T);
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
        })(n, T, _, v, y);
      }
    }
    function Tu(t, e) {
      for (var _n135 of t.split(/(\r?\n|\t)/))
        "\n" === _n135 || "\r\n" === _n135
          ? e.linebreak()
          : "\t" === _n135
            ? e.tab()
            : "" !== _n135 && e.text(_n135);
    }
    function vu(t) {
      var e = [];
      return (
        Tu(t, {
          linebreak: function linebreak() {
            return e.push(Gl());
          },
          tab: function tab() {
            return e.push(Jr());
          },
          text: function text(t) {
            return e.push(yr(t));
          },
        }),
        e
      );
    }
    function Nu(t) {
      var e = [];
      for (var _n136 of t)
        ql(_n136) ||
          ((!Ho(_n136) && !Jo(_n136)) || _n136.isInline()
            ? e.push(_n136)
            : Ho(_n136) &&
              e.push.apply(e, Array.from(Nu(_n136.getChildren()))));
      return e;
    }
    function bu(t, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t;
      t.isCollapsed() || o.removeText();
      var r = hu();
      (Ba(r) && (o = r), Ba(o) || e(161));
      var i = o.anchor;
      var s = i.getNode(),
        l = i.offset;
      for (; !Ws(s) && null === zu(s); ) {
        var _ku;
        var _t252 = s;
        if (((_ku = ku(s, l, n)), (s = _ku[0]), (l = _ku[1]), _t252.is(s)))
          break;
      }
      return [s, l];
    }
    function ku(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t.getParent();
      if (!o) {
        var _t253 = jr();
        return (Oi().append(_t253), _t253.select(), [Oi(), 0]);
      }
      if (xr(t)) {
        var _n137 = t.splitText(e);
        if (0 === _n137.length) return [o, t.getIndexWithinParent()];
        var _r78 = 0 === e ? 0 : 1;
        return [o, _n137[0].getIndexWithinParent() + _r78];
      }
      if (!Ho(t) || 0 === e) return [o, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _o90 = new _za(
            Da(t.__key, e, "element"),
            Da(t.__key, e, "element"),
            0,
            "",
          ),
          _i50 = t.insertNewAfter(_o90);
        if (_i50)
          _i50.append.apply(_i50, [r].concat(Array.from(r.getNextSiblings())));
        else if (n) return [t, e];
      }
      return [o, t.getIndexWithinParent() + 1];
    }
    function Eu(t) {
      return ql(t) || cs(t) || xr(t) || t.isParentRequired();
    }
    function Ou(t) {
      var e = jr();
      var n = null;
      for (var _o91 = 0; _o91 < t.length; _o91++) {
        var _r79 = t[_o91];
        if (Eu(_r79)) {
          if (null === n) {
            ((n = _r79.createParentElementNode()), e.append(n));
            var _i51 = t[_o91 + 1];
            if (ql(_r79) && (void 0 === _i51 || !Eu(_i51))) continue;
          }
          n.append(_r79);
        } else (e.append(_r79), (n = null));
      }
      return e;
    }
    function Mu(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref69 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e177 = _ref69[0],
          _o92 = _ref69[1];
        return (_o92.set(_e177.key, _e177.offset, _e177.type), !0);
      }
      var i = Cr(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === o,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === r,
        u = !1;
      if (!Dr(c)) {
        for (var _t254 of c) {
          a = !1;
          var _e178 = _t254.origin;
          if (Jo(_e178)) {
            if (_e178.isIsolated()) {
              u = !0;
              break;
            }
            if (((c = _t254), s && _e178.isInline())) continue;
          }
          break;
        }
        if (u) return !0;
        if (a)
          for (var _t255 of wf(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (pf(_t255)) _t255.origin.isInline() || (c = _t255);
            else {
              if (Ho(_t255.origin)) continue;
              Jo(_t255.origin) && !_t255.origin.isInline() && (c = _t255);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && Jo(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t256 = au();
        return (_t256.add(c.origin.getKey()), wi(_t256), !0);
      }
      return ((c = Ar(c)), l && Tr(t.anchor, c), Tr(t.focus, c), a || !s);
    }
    function wu(t, e, n) {
      var o = null === e ? null : e.__key,
        r = null === n ? null : n.__key;
      (null === e ? (t.__first = r) : (e.__next = r),
        null === n ? (t.__last = o) : (n.__prev = o));
    }
    function Au(t, e, n, o) {
      var r = e.__key;
      (null === n ? (t.__first = r) : (n.__next = r),
        null === o ? (t.__last = r) : (o.__prev = r),
        (e.__prev = null === n ? null : n.__key),
        (e.__next = null === o ? null : o.__key),
        (e.__parent = t.__key));
    }
    function Du(t) {
      null !== zu(t) && e(380, t.__key, String(zu(t)));
      var n = t.getParent();
      if (null !== n) {
        var _e179 = n.getWritable(),
          _o93 = t.getPreviousSibling(),
          _r80 = t.getNextSibling();
        (wu(_e179, _o93 && _o93.getWritable(), _r80 && _r80.getWritable()),
          (t.__prev = null),
          (t.__next = null),
          (t.__parent = null),
          _e179.__size--);
      }
    }
    function Iu(t, e) {
      var n = e && t.getParent(),
        o = e && n && pu(e, n) ? t.getIndexWithinParent() : -1,
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
        Du(t),
        e && n && -1 !== o && _u(e, n, o, -1),
        e && (e._cachedIsBackward = null),
        r
      );
    }
    function Fu(t, e, n, o) {
      xc();
      var r = "next" === e;
      gs(t, n);
      var i = t.getWritable(),
        s = n.getWritable();
      t.getParentOrThrow();
      var l = hu(),
        c = o && Ba(l) ? l : null,
        a = Iu(s, c),
        u = t.getParentOrThrow().getWritable(),
        f =
          c && ((r && null !== a && a.length > 0) || pu(c, u))
            ? t.getIndexWithinParent() + (r ? 1 : 0)
            : -1,
        d = r ? t.getNextSibling() : t.getPreviousSibling(),
        h = d && d.getWritable();
      if (
        (Au(u, s, r ? i : h, r ? h : i),
        u.__size++,
        c && -1 !== f && (_u(c, u, f), r && null !== a))
      )
        for (var _t257 of a) _t257.set(u.__key, f + 1, "element");
      return n;
    }
    function Pu(t, e, n) {
      xc();
      var o = t.origin,
        r = t.direction,
        i = "next" === r,
        s = $u(o);
      if (null !== s) return i ? s.selectNext(e, n) : s.selectPrevious(e, n);
      var l = t.getNodeAtCaret(),
        c = o.getParentOrThrow();
      if (null === l) return i ? c.select() : c.select(0, 0);
      if (Ho(l)) return i ? l.select(0, 0) : l.select();
      if (xr(l)) return l.select(e, n);
      var a = l.getIndexWithinParent() + (i ? 0 : 1);
      return c.select(a, a);
    }
    function Ru(t, e) {
      var n = [];
      for (
        var _o94 = t;
        null !== _o94;
        _o94 = "next" === e ? _o94.getNextSibling() : _o94.getPreviousSibling()
      )
        n.push(_o94);
      return n;
    }
    var Lu = new Map();
    function Ku(t) {
      return Ho(t) || Jo(t);
    }
    function Bu(t) {
      return Ho(t) || Jo(t);
    }
    function zu(t) {
      var e = t.getLatest();
      return Bu(e) ? e.__slotHost : null;
    }
    function $u(t) {
      var n = zu(t);
      if (null === n) return null;
      var o = Ci(n);
      return (Ho(o) || Jo(o) || e(370), o);
    }
    function Wu(t) {
      var e = $u(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref71 of Hu(e)) {
        var _t258 = _ref71[0];
        var _o95 = _ref71[1];
        if (_o95 === n) return _t258;
      }
      return null;
    }
    function Uu(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== zu(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function ju(t) {
      var _t$getNodes$;
      if (null === t) return null;
      var e = Ba(t)
        ? t.anchor.getNode()
        : (_t$getNodes$ = t.getNodes()[0]) != null
          ? _t$getNodes$
          : null;
      return null === e ? null : Uu(e);
    }
    function Hu(t) {
      var e = t.getLatest();
      return Ku(e) && null !== e.__slots ? e.__slots : Lu;
    }
    function Vu(t) {
      return Array.from(Hu(t).keys());
    }
    function Yu(t, e) {
      var n = Hu(t).get(e);
      return void 0 === n ? null : Ci(n);
    }
    var Ju = ["__proto__", "constructor", "prototype"],
      Gu = Symbol("slotMapOwner");
    function qu(t) {
      var e = t.__slots;
      return (
        (null !== e && e[Gu] === t) ||
          ((e = new Map(e)), (e[Gu] = t), (t.__slots = e)),
        e
      );
    }
    var Xu = new WeakMap(),
      Qu = [];
    function Zu(t) {
      for (var _ref73 of wl(t)) {
        var _e180 = _ref73.ownNodeConfig;
        {
          var _t259 = _e180 && _e180.slots;
          if (_t259) return _t259;
        }
      }
      return Qu;
    }
    function tf(t) {
      var e = "";
      for (var _n138 of Hu(t).values()) {
        var _t260 = Ci(_n138);
        null !== _t260 && (e += _t260.getTextContent());
      }
      return e;
    }
    function ef(t, e, n) {
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
    function nf(t, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        e(373, n);
      var r = t.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!Ho(o) && !Jo(o)) || o.isInline()) && e(374, o.__key);
      var i = t.getWritable(),
        s = qu(i),
        l = s.get(n);
      void 0 !== l && of(l);
      var c = o.getWritable(),
        a = $u(c);
      if (null !== a) {
        var _t261 = Wu(c);
        (null !== _t261 && qu(a.getWritable())["delete"](_t261),
          (c.__slotHost = null));
      }
      return (
        Du(c),
        (c.__slotHost = i.__key),
        s.set(n, c.__key),
        (function (t) {
          var n = t.__slots;
          if (null === n || n.size < 2) return;
          var o = (function (t) {
            var n = Xu.get(t);
            if (void 0 === n) {
              var _o96 = Zu(t),
                _r81 = new Map();
              for (var _n139 of _o96)
                (Ju.includes(_n139) && e(371, t.name, _n139),
                  _r81.has(_n139) && e(372, t.name, _n139),
                  _r81.set(_n139, _r81.size));
              ((n = _r81), Xu.set(t, n));
            }
            return n;
          })(t.constructor);
          var r = null,
            i = !0;
          for (var _t262 of n.keys()) {
            if (null !== r && ef(r, _t262, o) > 0) {
              i = !1;
              break;
            }
            r = _t262;
          }
          if (i) return;
          var s = Array.from(n).sort(function (_ref74, _ref75) {
            var t = _ref74[0];
            var e = _ref75[0];
            return ef(t, e, o);
          });
          n.clear();
          for (var _ref77 of s) {
            var _t263 = _ref77[0];
            var _e181 = _ref77[1];
            n.set(_t263, _e181);
          }
        })(i),
        (Tc()._slotsUsed = !0),
        (Cc()._slotsUsed = !0),
        i
      );
    }
    function of(t) {
      var n = Ci(t);
      if (null === n) return;
      var o = n.getWritable();
      (Bu(o) || e(377, t), (o.__slotHost = null), o.remove());
    }
    var rf = { next: "previous", previous: "next" };
    var _sf4 = (function () {
      function sf(t) {
        this.origin = t;
      }
      var _proto19 = sf.prototype;
      _proto19[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return If({
            hasNext: gf,
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
        return xf(this.getNodeAtCaret(), this.direction);
      };
      _proto19.getSiblingCaret = function getSiblingCaret() {
        return xf(this.origin, this.direction);
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
          var _e182 = i.getAdjacentCaret();
          null !== _e182 && l.size < t;
          _e182 = _e182.getAdjacentCaret()
        ) {
          var _t264 = _e182.origin.getWritable();
          l.set(_t264.getKey(), _t264);
        }
        for (var _t265 of r) {
          if (l.size > 0) {
            var _n140 = i.getNodeAtCaret();
            if (_n140) {
              if (
                (l["delete"](_n140.getKey()),
                l["delete"](_t265.getKey()),
                _n140.is(_t265) || i.origin.is(_t265))
              );
              else {
                var _e183 = _t265.getParent();
                (_e183 && _e183.is(s) && _t265.remove(), _n140.replace(_t265));
              }
            } else null === _n140 && e(263, Array.from(l).join(" "));
          } else i.insert(_t265);
          i = xf(_t265, this.direction);
        }
        for (var _t266 of l.values()) _t266.remove();
        return this;
      };
      return sf;
    })();
    var _lf3 = (function (_sf) {
      function lf() {
        var _this6;
        for (
          var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
          _key0 < _len0;
          _key0++
        ) {
          args[_key0] = arguments[_key0];
        }
        return (
          ((_this6 = _sf.call.apply(_sf, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(lf, _sf);
      var _proto20 = lf.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : vf(t, this.direction);
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return xf(uf(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = af(this.direction);
        return xf(this.getNodeAtCaret(), t) || vf(this.origin, t);
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto20.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof lf &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return lf;
    })(_sf4);
    var cf = { root: Xo, shadowRoot: fs };
    function af(t) {
      return rf[t];
    }
    function uf(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || cf[e](t) ? null : null === zu(t) ? t : null;
    }
    var _ff3 = (function (_sf2) {
      function ff() {
        var _this7;
        for (
          var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
          _key1 < _len1;
          _key1++
        ) {
          args[_key1] = arguments[_key1];
        }
        return (
          ((_this7 = _sf2.call.apply(_sf2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(ff, _sf2);
      var _proto21 = ff.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : xf(t, this.direction);
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto21.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto21.getChildCaret = function getChildCaret() {
        return Ho(this.origin) ? vf(this.origin, this.direction) : null;
      };
      _proto21.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return xf(uf(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        var t = af(this.direction);
        return (
          xf(this.getNodeAtCaret(), t) || vf(this.origin.getParentOrThrow(), t)
        );
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof ff &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof ff || t instanceof _df3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return ff;
    })(_sf4);
    var _df3 = (function (_sf3) {
      function df(t, e) {
        var _this8;
        ((_this8 = _sf3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(df, _sf3);
      var _proto22 = df.prototype;
      _proto22.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Sf(t, this.direction, this.offset);
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
        return xf(uf(this.getParentAtCaret(), t), this.direction);
      };
      _proto22.getFlipped = function getFlipped() {
        return Sf(this.origin, af(this.direction), this.offset);
      };
      _proto22.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof df &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto22.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _ff3 || t instanceof df) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto22.getSiblingCaret = function getSiblingCaret() {
        return xf(this.origin, this.direction);
      };
      return df;
    })(_sf4);
    function hf(t) {
      return t instanceof _df3;
    }
    function gf(t) {
      return t instanceof _ff3;
    }
    function pf(t) {
      return t instanceof _lf3;
    }
    var _f = {
        next: (function (_df) {
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
              ((_this9 = _df.call.apply(_df, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _df);
          var _proto23 = _class.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_df3),
        previous: (function (_df2) {
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
              ((_this0 = _df2.call.apply(_df2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _df2);
          var _proto24 = _class3.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_df3),
      },
      mf = {
        next: (function (_ff) {
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
              ((_this1 = _ff.call.apply(_ff, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _ff);
          var _proto25 = _class5.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_ff3),
        previous: (function (_ff2) {
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
              ((_this10 = _ff2.call.apply(_ff2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _ff2);
          var _proto26 = _class7.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_ff3),
      },
      yf = {
        next: (function (_lf) {
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
              ((_this11 = _lf.call.apply(_lf, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _lf);
          var _proto27 = _class9.prototype;
          _proto27.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto27.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_lf3),
        previous: (function (_lf2) {
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
              ((_this12 = _lf2.call.apply(_lf2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _lf2);
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
        })(_lf3),
      };
    function xf(t, e) {
      return t ? new mf[e](t) : null;
    }
    function Sf(t, e, n) {
      return t ? new _f[e](t, Cf(t, n)) : null;
    }
    function Cf(t, e, o) {
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
    function Tf(t, e) {
      return new _Ef(t, e);
    }
    function vf(t, e) {
      return Ho(t) ? new yf[e](t) : null;
    }
    function Nf(t) {
      return (t && t.getChildCaret()) || t;
    }
    function bf(t) {
      return t && Nf(t.getAdjacentCaret());
    }
    var _kf = (function () {
      function kf(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto29 = kf.prototype;
      _proto29.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new kf(t, e, this.direction);
      };
      _proto29.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto29.getTextSlices = function getTextSlices() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return hf(t) && hf(e) && t.isSameNodeCaret(e)
          ? [Tf(t, e.offset - t.offset), null]
          : [hf(t) ? Of(t, "anchor") : null, hf(e) ? Of(e, "focus") : null];
      };
      _proto29.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = hf(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = hf(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : bf(e) || e.getParentCaret(t);
          };
        return If({
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
      return kf;
    })();
    var _Ef = (function () {
      function Ef(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto30 = Ef.prototype;
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
        return Sf(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return Ef;
    })();
    function Of(t, e) {
      var n = t.direction,
        o = t.origin;
      return Tf(t, Cf(o, "focus" === e ? af(n) : n) - t.offset);
    }
    function Mf(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function wf(t) {
      return Df(t, Mf(vf(Oi(), af(t.direction)), t.direction));
    }
    function Af(t) {
      return Df(t, t);
    }
    function Df(t, n) {
      return (
        t.direction !== n.direction && e(265),
        new _kf(t, n, t.direction)
      );
    }
    function If(t) {
      var _ref78;
      var e = t.initial,
        n = t.hasNext,
        o = t.step,
        r = t.map;
      var i = e;
      return (
        (_ref78 = {}),
        (_ref78[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref78.next = function next() {
          if (!n(i)) return { done: !0, value: void 0 };
          var t = { done: !1, value: r(i) };
          return ((i = o(i)), t);
        }),
        _ref78
      );
    }
    function Ff(t, n) {
      var o = Kf(t.origin, n.origin);
      switch (
        (null === o && e(275, t.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same": {
          var _e184 = "text" === t.type,
            _o97 = "text" === n.type;
          return _e184 && _o97
            ? (function (t, e) {
                return Math.sign(t - e);
              })(t.offset, n.offset)
            : t.type === n.type
              ? 0
              : _e184
                ? -1
                : _o97
                  ? 1
                  : "child" === t.type
                    ? -1
                    : 1;
        }
        case "ancestor":
          return "child" === t.type ? -1 : 1;
        case "descendant":
          return "child" === n.type ? 1 : -1;
        case "branch":
          return Pf(o);
      }
    }
    function Pf(t) {
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
    function Rf(t, e) {
      return e.is(t);
    }
    function Lf(t) {
      return Ho(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Kf(t, n) {
      if (t.is(n)) return { commonAncestor: t, type: "same" };
      var o = new Map();
      for (
        var _Lf = Lf(t), _e185 = _Lf[0], _n141 = _Lf[1];
        _e185;
        _n141 = _e185, _e185 = _e185.getParent()
      )
        o.set(_e185, _n141);
      for (
        var _Lf2 = Lf(n), _r82 = _Lf2[0], _i52 = _Lf2[1];
        _r82;
        _i52 = _r82, _r82 = _r82.getParent()
      ) {
        var _s29 = o.get(_r82);
        if (void 0 !== _s29)
          return null === _s29
            ? (Rf(t, _r82) || e(276),
              { commonAncestor: _r82, type: "ancestor" })
            : null === _i52
              ? (Rf(n, _r82) || e(277),
                { commonAncestor: _r82, type: "descendant" })
              : (((Ho(_s29) || Rf(t, _s29)) &&
                  (Ho(_i52) || Rf(n, _i52)) &&
                  _r82.is(_s29.getParent()) &&
                  _r82.is(_i52.getParent())) ||
                  e(278),
                { a: _s29, b: _i52, commonAncestor: _r82, type: "branch" });
      }
      return null;
    }
    function Bf() {
      var e = [];
      for (
        var _len16 = arguments.length, t = new Array(_len16), _key16 = 0;
        _key16 < _len16;
        _key16++
      ) {
        t[_key16] = arguments[_key16];
      }
      for (var _n142 of t)
        if (_n142 && "string" == typeof _n142)
          for (var _ref80 of _n142.matchAll(/\S+/g)) {
            var _t267 = _ref80[0];
            e.push(_t267);
          }
      return e;
    }
    ((exports.$addUpdateTag = os),
      (exports.$applyNodeReplacement = hs),
      (exports.$assumeActiveEditor = function (t) {
        (null !== Cc() && null === ac && (ac = t), ac !== t && n(378));
      }),
      (exports.$caretFromPoint = Cr),
      (exports.$caretRangeFromSelection = br),
      (exports.$cloneWithProperties = Xs),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Xs(t))[xo] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = Ff),
      (exports.$copyNode = ds),
      (exports.$create = Al),
      (exports.$createChildrenArray = Il),
      (exports.$createLineBreakNode = Gl),
      (exports.$createNodeSelection = au),
      (exports.$createParagraphNode = jr),
      (exports.$createPoint = Da),
      (exports.$createRangeSelection = cu),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return fu(null, t, e, null);
      }),
      (exports.$createTabNode = Jr),
      (exports.$createTextNode = yr),
      (exports.$exportNodeJSON = ee),
      (exports.$extendCaretToRange = wf),
      (exports.$findMatchingParent = Dl),
      (exports.$flushSyncAfterUpdate = function () {
        var t = Cc();
        (xc(), (t._flushSync = !0));
      }),
      (exports.$formatText = ja),
      (exports.$fullReconcile = vc),
      (exports.$generateNodesFromRawText = vu),
      (exports.$getAdjacentChildCaret = bf),
      (exports.$getAdjacentNode = Gi),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = bf(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = bf(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = Mf),
      (exports.$getCaretRange = Df),
      (exports.$getCaretRangeInDirection = Ir),
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
          : [Ha(n), Ha(o)];
      }),
      (exports.$getChildCaret = vf),
      (exports.$getChildCaretAtIndex = Fr),
      (exports.$getChildCaretOrSelf = Nf),
      (exports.$getCollapsedCaretRange = Af),
      (exports.$getCommonAncestor = Kf),
      (exports.$getCommonAncestorResultBranchOrder = Pf),
      (exports.$getDOMSlot = Hs),
      (exports.$getDOMTextNode = Ys),
      (exports.$getDocument = bs),
      (exports.$getEditor = Us),
      (exports.$getEditorDOMRenderConfig = js),
      (exports.$getNearestNodeFromDOMNode = bi),
      (exports.$getNearestRootOrShadowRoot = as),
      (exports.$getNodeByKey = Ci),
      (exports.$getNodeByKeyOrThrow = ps),
      (exports.$getNodeFromDOMNode = Ti),
      (exports.$getPreviousSelection = gu),
      (exports.$getRoot = Oi),
      (exports.$getSelection = hu),
      (exports.$getSelectionSlotFrame = ju),
      (exports.$getSiblingCaret = xf),
      (exports.$getSlot = Yu),
      (exports.$getSlotFrame = Uu),
      (exports.$getSlotHost = $u),
      (exports.$getSlotNameWithinHost = Wu),
      (exports.$getSlotNames = Vu),
      (exports.$getState = sn),
      (exports.$getStateChange = function (t, e, n) {
        var o = sn(t, n, nn),
          r = sn(e, n, nn);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = hu();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Cf),
      (exports.$getTextPointCaret = Sf),
      (exports.$getTextPointCaretSlice = Tf),
      (exports.$getTextPointCaretSliceForNode = Rr),
      (exports.$getWritableNodeState = fn),
      (exports.$hasAncestor = is),
      (exports.$hasUpdateTag = function (t) {
        return Tc()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = zr),
      (exports.$insertNodes = function (t) {
        var e = hu() || gu();
        (null === e && (e = Oi().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = su),
      (exports.$isBlockFullySelected = $r),
      (exports.$isChildCaret = pf),
      (exports.$isCompactExport = te),
      (exports.$isDecoratorNode = Jo),
      (exports.$isEditorState = function (t) {
        return t instanceof _Kl;
      }),
      (exports.$isElementDOMSlot = Vs),
      (exports.$isElementNode = Ho),
      (exports.$isExtendableTextPointCaret = Dr),
      (exports.$isInlineElementOrDecoratorNode = cs),
      (exports.$isInlineFormattable = cr),
      (exports.$isLeafNode = function (t) {
        return xr(t) || ql(t) || Jo(t);
      }),
      (exports.$isLexicalNode = vo),
      (exports.$isLineBreakNode = ql),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _sf4;
      }),
      (exports.$isNodeSelection = $a),
      (exports.$isParagraphNode = Hr),
      (exports.$isRangeSelection = Ba),
      (exports.$isRootNode = Xo),
      (exports.$isRootOrShadowRoot = fs),
      (exports.$isSelectionCapturedInDecoratorInput = oi),
      (exports.$isShadowRootNode = us),
      (exports.$isSiblingCaret = gf),
      (exports.$isSlotChild = Bu),
      (exports.$isSlotHost = Ku),
      (exports.$isTabNode = Gr),
      (exports.$isTextNode = xr),
      (exports.$isTextPointCaret = hf),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _Ef;
      }),
      (exports.$isTokenOrSegmented = ui),
      (exports.$isTokenOrTab = ai),
      (exports.$markSlotEditable = ol),
      (exports.$needsBlockCursorBeside = _s),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Cc();
        if (n._readOnly) {
          var _t268 = qs(n).get(e);
          return _t268 ? Array.from(_t268.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref82 of o) {
          var _n143 = _ref82[1];
          _n143 instanceof t &&
            _n143.__type === e &&
            _n143.isAttached() &&
            r.push(_n143);
        }
        return r;
      }),
      (exports.$normalizeCaret = Ar),
      (exports.$normalizeSelection__EXPERIMENTAL = Eo),
      (exports.$onUpdate = rs),
      (exports.$parseSerializedNode = function (t) {
        return Mc(t, Tc()._nodes);
      }),
      (exports.$removeFromParent = _i),
      (exports.$removeSlot = function (t, e) {
        var n = t.getWritable();
        if (null === n.__slots) return n;
        var o = n.__slots.get(e);
        return (void 0 !== o && (of(o), qu(n)["delete"](e)), n);
      }),
      (exports.$removeTextFromCaretRange = Mr),
      (exports.$rewindSiblingCaret = kr),
      (exports.$selectAll = function (t) {
        var e = Oi();
        if (Ba(t)) {
          var _e186 = t.anchor,
            _n144 = t.focus,
            _o98 = _e186.getNode();
          if (Xo(_o98))
            return (
              _e186.set(_o98.getKey(), 0, "element"),
              _n144.set(_o98.getKey(), _o98.getChildrenSize(), "element"),
              ji(t, _o98),
              t
            );
          var _r83 = _o98.getTopLevelElementOrThrow(),
            _i53 = _r83.getParent();
          return null === _i53
            ? (Ho(_r83) &&
                (_e186.set(_r83.getKey(), 0, "element"),
                _n144.set(_r83.getKey(), _r83.getChildrenSize(), "element"),
                ji(t, _r83)),
              t)
            : (_e186.set(_i53.getKey(), 0, "element"),
              _n144.set(_i53.getKey(), _i53.getChildrenSize(), "element"),
              ji(t, _i53),
              t);
        }
        {
          var _t269 = e.select(0, e.getChildrenSize());
          return (wi(ji(_t269, e)), _t269);
        }
      }),
      (exports.$setCompositionKey = xi),
      (exports.$setDirectionFromDOM = Zs),
      (exports.$setFormatFromDOM = tl),
      (exports.$setPointFromCaret = Tr),
      (exports.$setSelection = wi),
      (exports.$setSelectionFromCaretRange = vr),
      (exports.$setSlot = nf),
      (exports.$setState = ln),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref84 of Object.entries(e)) {
          var _t270 = _ref84[0];
          var _o99 = _ref84[1];
          "boolean" == typeof _o99 && n.push([_t270, _o99]);
        }
        0 !== n.length &&
          Ua(t, function (t) {
            for (var _ref86 of n) {
              var _e187 = _ref86[0];
              var _o100 = _ref86[1];
              t = gi(t, _e187, _o100 ? w[_e187] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = Br),
      (exports.$splitNode = function (t, n) {
        var o = t.getChildAtIndex(n);
        (null == o && (o = t), fs(t) && e(102));
        var _r86 = function r(t) {
            var n = t.getParentOrThrow(),
              i = fs(n),
              s = t !== o || i ? ds(t) : t;
            if (i)
              return ((Ho(t) && Ho(s)) || e(133), t.insertAfter(s), [t, s, s]);
            {
              var _r85 = _r86(n),
                _e188 = _r85[0],
                _o101 = _r85[1],
                _i54 = _r85[2],
                _l27 = t.getNextSiblings();
              return (
                _i54.append.apply(_i54, [s].concat(Array.from(_l27))),
                [_e188, _o101, s]
              );
            }
          },
          _r84 = _r86(o),
          i = _r84[0],
          s = _r84[1];
        return [i, s];
      }),
      (exports.$splitTextPointCaretSlice = Lr),
      (exports.$updateDOMSelection = Cu),
      (exports.$updateRangeSelectionFromCaretRange = Nr),
      (exports.$withCompactExport = Zt),
      (exports.ArtificialNode__DO_NOT_USE = _Vl),
      (exports.BEFORE_INPUT_COMMAND = H),
      (exports.BLUR_COMMAND = Rt),
      (exports.CAN_REDO_COMMAND = It),
      (exports.CAN_UNDO_COMMAND = Ft),
      (exports.CAN_USE_BEFORE_INPUT = d),
      (exports.CAN_USE_DOM = r),
      (exports.CLEAR_EDITOR_COMMAND = At),
      (exports.CLEAR_HISTORY_COMMAND = Dt),
      (exports.CLICK_COMMAND = j),
      (exports.COLLABORATION_TAG = zl),
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
      (exports.COMPOSITION_END_TAG = Hl),
      (exports.COMPOSITION_START_COMMAND = Y),
      (exports.COMPOSITION_START_TAG = jl),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Q),
      (exports.CONTROL_OR_ALT = zt),
      (exports.CONTROL_OR_META = Bt),
      (exports.CONTROL_OR_OTHER_KEY = K),
      (exports.COPY_COMMAND = Ot),
      (exports.CUT_COMMAND = Mt),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = oc),
      (exports.DELETE_CHARACTER_COMMAND = G),
      (exports.DELETE_LINE_COMMAND = nt),
      (exports.DELETE_WORD_COMMAND = et),
      (exports.DRAGEND_COMMAND = Et),
      (exports.DRAGOVER_COMMAND = kt),
      (exports.DRAGSTART_COMMAND = bt),
      (exports.DROP_COMMAND = vt),
      (exports.DecoratorNode = _Yo),
      (exports.ElementNode = _jo4),
      (exports.FOCUS_COMMAND = Pt),
      (exports.FORMAT_ELEMENT_COMMAND = Nt),
      (exports.FORMAT_TEXT_COMMAND = ot),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = Bl),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Ct),
      (exports.INPUT_COMMAND = V),
      (exports.INSERT_LINE_BREAK_COMMAND = q),
      (exports.INSERT_PARAGRAPH_COMMAND = X),
      (exports.INSERT_TAB_COMMAND = St),
      (exports.INTERNAL_$expandSelectionToWholeDocument = Va),
      (exports.INTERNAL_$isBlock = Ws),
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
      (exports.LineBreakNode = _Yl),
      (exports.MOVE_TO_END = at),
      (exports.MOVE_TO_START = ft),
      (exports.NODE_STATE_DIRECT = nn),
      (exports.NODE_STATE_KEY = L),
      (exports.NODE_STATE_LATEST = on),
      (exports.OUTDENT_CONTENT_COMMAND = Tt),
      (exports.PASTE_COMMAND = Z),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Wr),
      (exports.REDO_COMMAND = st),
      (exports.REMOVE_TEXT_COMMAND = tt),
      (exports.RootNode = _qo),
      (exports.SELECTION_CHANGE_COMMAND = W),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = U),
      (exports.SELECT_ALL_COMMAND = wt),
      (exports.SET_TEXT_FORMAT_COMMAND = rt),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = Wl),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = $l),
      (exports.SKIP_SELECTION_FOCUS_TAG = Ul),
      (exports.TEXT_TYPE_TO_FORMAT = w),
      (exports.TabNode = _Yr),
      (exports.TextNode = _ar2),
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
        var n = Bf.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, Array.from(n));
      }),
      (exports.aliasTableOf = ke),
      (exports.aliasedValue = Qe),
      (exports.arrayValue = function (t) {
        return we(
          function (e) {
            if (!Array.isArray(e)) return [];
            var n = new Array(e.length);
            for (var _o102 = 0; _o102 < e.length; _o102++)
              n[_o102] = t(e[_o102]);
            return n;
          },
          { item: t, kind: "array" },
          void 0,
          function (e, n) {
            if (!Array.isArray(e) || !Array.isArray(n) || e.length !== n.length)
              return !1;
            for (var _o103 = 0; _o103 < e.length; _o103++)
              if (!Ce(t, e[_o103], n[_o103])) return !1;
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
      (exports.createCommand = $),
      (exports.createEditor = function (t) {
        var n = t || {},
          o = bc(),
          r = n.theme || {},
          i = void 0 === t ? o : n.parentEditor || null,
          s = n.disableEvents || !1,
          l = Rl(),
          c = n.namespace || (null !== i ? i._config.namespace : Ri()),
          a = n.editorState,
          u = [_qo, _ar2, _Yl, _Yr, _Wr, _Vl].concat(Array.from(n.nodes || [])),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var p;
        if (void 0 === t && null !== o) p = o._nodes;
        else {
          p = new Map();
          for (var _t271 = 0; _t271 < u.length; _t271++) {
            var _o104 = u[_t271],
              _r87 = null,
              _i55 = null;
            if (_o104 && "object" == typeof _o104) {
              var _t272 = _o104;
              ((_o104 = _t272.replace),
                (_r87 = _t272["with"]),
                (_i55 = _t272.withKlass || null));
            }
            if (
              "function" != typeof _o104 ||
              !_o104.prototype ||
              !(_o104 === _To5 || _o104.prototype instanceof _To5)
            ) {
              var _r88 = "<unknown>";
              try {
                _r88 = JSON.parse(Yt);
              } catch (_unused2) {}
              e(
                365,
                String(_t271 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o104
                  ? "" +
                      _o104.name +
                      ("function" == typeof _o104.getType
                        ? " (type " + String(_o104.getType()) + ")"
                        : "")
                  : String(_o104),
                String(_r88),
              );
            }
            bl(_o104);
            var _s30 = _o104.getType(),
              _l28 = nc(_o104);
            p.set(_s30, {
              exportDOM: h && h["export"] ? h["export"].get(_o104) : void 0,
              klass: _o104,
              replace: _r87,
              replaceWithKlass: _i55,
              sharedNodeState: cn(u[_t271]),
              transforms: _l28,
            });
          }
        }
        var _ = new _sc(
          l,
          i,
          p,
          {
            disableEvents: s,
            dom: babelHelpers["extends"]({}, oc, t && t.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || tc,
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
            (t.registerCommand(H, aa, 0),
              t.registerCommand(V, fa, 0),
              t.registerCommand(Y, ha, 0),
              t.registerCommand(J, ga, 0),
              t.registerCommand(lt, Na, 0));
          })(_),
          _
        );
      }),
      (exports.createRefCountedRegistry = Ht),
      (exports.createSharedNodeState = cn),
      (exports.createState = function (t, e) {
        return new rn(t, e);
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
      (exports.findAllLexicalElementsDeep = vs),
      (exports.flipDirection = af),
      (exports.getActiveElement = Ds),
      (exports.getActiveElementDeep = Is),
      (exports.getComposedEventTarget = Fs),
      (exports.getComposedSchemaFields = function (t) {
        var _l29 = _l(t),
          e = _l29.fieldsDerivedFirst,
          n = _l29.flatStates,
          o = {};
        for (var _t273 of n) _t273.schema && (o[_t273.key] = _t273.schema);
        for (var _ref88 of e) {
          var _t274 = _ref88[0];
          var _n145 = _ref88[1];
          o[_t274] = _n145;
        }
        return o;
      }),
      (exports.getComposedStaticRange = ks),
      (exports.getDOMOwnerDocument = ts),
      (exports.getDOMSelection = ys),
      (exports.getDOMSelectionFromTarget = xs),
      (exports.getDOMSelectionPoints = Os),
      (exports.getDOMSelectionRange = Es),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _Ms;
        var n = ks(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_Ms = Ms(n)) != null
            ? _Ms
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: ws(n, As(t)), range: o };
      }),
      (exports.getDOMShadowRoots = Ts),
      (exports.getDOMTextNode = hi),
      (exports.getDeclaredSlots = Zu),
      (exports.getEditorPropertyFromDOMNode = ci),
      (exports.getNearestEditorFromDOMNode = li),
      (exports.getParentElement = Zi),
      (exports.getRegisteredNode = ei),
      (exports.getRegisteredNodeOrThrow = ti),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o105 of t) {
          var _bl2 = bl(_o105),
            _t275 = _bl2.ownNodeType;
          _t275 && (n.set(_t275, _o105), e.set(_t275, new Set()));
        }
        for (var _ref90 of n) {
          var _t276 = _ref90[0];
          var _o106 = _ref90[1];
          for (var _ref92 of wl(_o106)) {
            var _n146 = _ref92.ownNodeType;
            {
              var _o107 = _n146 && e.get(_n146);
              _o107 && _o107.add(_t276);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = Ns),
      (exports.getStaticNodeConfig = bl),
      (exports.getStyleObjectFromCSS = Qo),
      (exports.getTextDirection = function (t) {
        return O.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = nc),
      (exports.getterTableOf = Ne),
      (exports.isBlockDomNode = $s),
      (exports.isCurrentlyReadOnlyMode = yc),
      (exports.isDOMCapturingSelection = rl),
      (exports.isDOMDocumentNode = di),
      (exports.isDOMNode = Rs),
      (exports.isDOMShadowRoot = Ss),
      (exports.isDOMTextNode = fi),
      (exports.isDOMUnmanaged = nl),
      (exports.isDocumentFragment = Ls),
      (exports.isExactShortcutMatch = function (t, e, n) {
        if (!Wi(t, n)) return !1;
        if (t.key.toLowerCase() === e.toLowerCase()) return !0;
        if (e.length > 1) return !1;
        if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
        if (t.code.startsWith("Digit") && /^\d$/.test(e))
          return t.code === "Digit" + e;
        var o = "Key" + e.toUpperCase();
        return t.code === o;
      }),
      (exports.isHTMLAnchorElement = function (t) {
        return Ps(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = Ps),
      (exports.isHTMLTableCellElement = function (t) {
        return Ps(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return Ps(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Bs),
      (exports.isLastChildInBlockNode = Ql),
      (exports.isLexicalEditor = si),
      (exports.isModifierMatch = Wi),
      (exports.isOnlyChildInBlockNode = Xl),
      (exports.isSchemaField = ve),
      (exports.isSelectionCapturedInDecoratorInput = ri),
      (exports.isSelectionWithinEditor = ii),
      (exports.iterStaticNodeConfigChain = wl),
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
      (exports.makeStepwiseIterator = If),
      (exports.mergeRegister = Bc),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = Ci(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Us();
                }
                var o = Yu(t, e);
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
      (exports.normalizeClassNames = Bf),
      (exports.nullable = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e189 = e,
          n = _e189.defaultAsNull;
        return we(
          function (e) {
            if (null == e) return null;
            var o = t(e);
            return n && Te(t, o) ? null : o;
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
              for (var _t277 = 0; _t277 < n.length; _t277++) {
                var _n$_t = n[_t277],
                  _r89 = _n$_t[0],
                  _i56 = _n$_t[1];
                o[_r89] = _i56(e[_r89]);
              }
              return o;
            },
            { fields: e, kind: "object" },
            void 0,
            function (t, o) {
              return (
                je(t) &&
                je(o) &&
                !He(t, e) &&
                !He(o, e) &&
                n.every(function (_ref93) {
                  var e = _ref93[0],
                    n = _ref93[1];
                  return Ce(n, t[e], o[e]);
                })
              );
            },
            function (t) {
              return je(t) && !He(t, e);
            },
          );
        })(0, t);
      }),
      (exports.optional = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e190 = e,
          n = _e190.omitDefault;
        return we(
          function (e) {
            if (void 0 === e) return;
            var o = t(e);
            return n && Te(t, o) ? void 0 : o;
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
      (exports.registerEventListener = zc),
      (exports.registerEventListeners = function (t, e, n) {
        return Bc.apply(
          void 0,
          Array.from(
            Object.entries(e).map(function (_ref94) {
              var e = _ref94[0],
                o = _ref94[1];
              return zc(t, e, o, n);
            }),
          ),
        );
      }),
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
        var n = Bf.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(
            _t$classList3,
            Array.from(n),
          );
      }),
      (exports.removeFromParent = mi),
      (exports.resetRandomKey = function () {
        Zr = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = tr),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n147 in e) {
          var _o108 = e[_n147];
          null == _o108 ? t.removeProperty(_n147) : Zo(t, _n147, _o108);
        }
      }),
      (exports.setDOMUnmanaged = el),
      (exports.setNodeIndentFromDOM = Qs),
      (exports.setterDefaultOf = Ee),
      (exports.setterTableOf = be),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n148 in e)
          if (t[_n148] !== e[_n148]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = Oa),
      (exports.stringValue = Ve),
      (exports.toggleTextFormatType = gi),
      (exports.tokenizeRawText = Tu),
      (exports.transformValue = function (t, e, n) {
        if (n === void 0) {
          n = {};
        }
        return we(
          function (n) {
            return e(t(n));
          },
          { inner: t, kind: "transform" },
          Fe(e(t.defaultValue)),
          n.isEqual,
          function (e) {
            return Ke(t, e);
          },
        );
      }),
      (exports.unionValue = function (t) {
        var n =
          0 !== (arguments.length <= 1 ? 0 : arguments.length - 1)
            ? Fe(arguments.length <= 1 ? undefined : arguments[1])
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
      (exports.withAccessors = tn),
      (exports.withField = Ze));
  },
  null,
);
