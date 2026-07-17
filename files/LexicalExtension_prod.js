__d(
  "LexicalExtension.prod",
  ["Lexical", "LexicalUtils"],
  function $module_LexicalExtension_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _excluded = ["$initialEditorState", "onError", "onWarn"];
    var _require_Lexical;
    var n = Symbol["for"]("preact-signals");
    function i() {
      if (l > 1) return void l--;
      var e,
        t = !1;
      for (
        !(function () {
          var e = c;
          for (c = void 0; void 0 !== e; )
            (e.S.v === e.v && (e.S.i = e.i), (e = e.o));
        })();
        void 0 !== r;
      ) {
        var _n = r;
        for (r = void 0, d++; void 0 !== _n; ) {
          var _i = _n.u;
          if (((_n.u = void 0), (_n.f &= -3), !(8 & _n.f) && E(_n)))
            try {
              _n.c();
            } catch (n) {
              t || ((e = n), (t = !0));
            }
          _n = _i;
        }
      }
      if (((d = 0), l--, t)) throw e;
    }
    function o(e) {
      if (l > 0) return e();
      ((f = ++u), l++);
      try {
        return e();
      } finally {
        i();
      }
    }
    var s, r;
    function a(e) {
      var t = s;
      s = void 0;
      try {
        return e();
      } finally {
        s = t;
      }
    }
    var c,
      l = 0,
      d = 0,
      u = 0,
      f = 0,
      g = 0;
    function h(e) {
      if (void 0 === s) return;
      var t = e.n;
      return void 0 === t || t.t !== s
        ? ((t = {
            i: 0,
            S: e,
            p: s.s,
            n: void 0,
            t: s,
            e: void 0,
            x: void 0,
            r: t,
          }),
          void 0 !== s.s && (s.s.n = t),
          (s.s = t),
          (e.n = t),
          32 & s.f && e.S(t),
          t)
        : -1 === t.i
          ? ((t.i = 0),
            void 0 !== t.n &&
              ((t.n.p = t.p),
              void 0 !== t.p && (t.p.n = t.n),
              (t.p = s.s),
              (t.n = void 0),
              (s.s.n = t),
              (s.s = t)),
            t)
          : void 0;
    }
    function p(e, t) {
      ((this.v = e),
        (this.i = 0),
        (this.n = void 0),
        (this.t = void 0),
        (this.l = 0),
        (this.W = null == t ? void 0 : t.watched),
        (this.Z = null == t ? void 0 : t.unwatched),
        (this.name = null == t ? void 0 : t.name));
    }
    function m(e, t) {
      return new p(e, t);
    }
    function E(e) {
      for (var _t = e.s; void 0 !== _t; _t = _t.n)
        if (_t.S.i !== _t.i || !_t.S.h() || _t.S.i !== _t.i) return !0;
      return !1;
    }
    function x(e) {
      for (var _t2 = e.s; void 0 !== _t2; _t2 = _t2.n) {
        var _n2 = _t2.S.n;
        if (
          (void 0 !== _n2 && (_t2.r = _n2),
          (_t2.S.n = _t2),
          (_t2.i = -1),
          void 0 === _t2.n)
        ) {
          e.s = _t2;
          break;
        }
      }
    }
    function S(e) {
      var t,
        n = e.s;
      for (; void 0 !== n; ) {
        var _e2 = n.p;
        (-1 === n.i
          ? (n.S.U(n),
            void 0 !== _e2 && (_e2.n = n.n),
            void 0 !== n.n && (n.n.p = _e2))
          : (t = n),
          (n.S.n = n.r),
          void 0 !== n.r && (n.r = void 0),
          (n = _e2));
      }
      e.s = t;
    }
    function v(e, t) {
      (p.call(this, void 0),
        (this.x = e),
        (this.s = void 0),
        (this.g = g - 1),
        (this.f = 4),
        (this.W = null == t ? void 0 : t.watched),
        (this.Z = null == t ? void 0 : t.unwatched),
        (this.name = null == t ? void 0 : t.name));
    }
    function y(e, t) {
      return new v(e, t);
    }
    function N(e) {
      var t = e.m;
      if (((e.m = void 0), "function" == typeof t)) {
        l++;
        var _n3 = s;
        s = void 0;
        try {
          t();
        } catch (t) {
          throw ((e.f &= -2), (e.f |= 8), b(e), t);
        } finally {
          ((s = _n3), i());
        }
      }
    }
    function b(e) {
      for (var _t3 = e.s; void 0 !== _t3; _t3 = _t3.n) _t3.S.U(_t3);
      ((e.x = void 0), (e.s = void 0), N(e));
    }
    function C(e) {
      if (s !== this) throw new Error("Out-of-order effect");
      (S(this), (s = e), (this.f &= -2), 8 & this.f && b(this), i());
    }
    function R(e, t) {
      ((this.x = e),
        (this.m = void 0),
        (this.s = void 0),
        (this.u = void 0),
        (this.f = 32),
        (this.name = null == t ? void 0 : t.name));
    }
    function $(e, t) {
      var n = new R(e, t);
      try {
        n.c();
      } catch (e) {
        throw (n.d(), e);
      }
      var i = n.d.bind(n);
      return (
        (i[typeof Symbol === "function" ? Symbol.dispose : "@@dispose"] = i),
        i
      );
    }
    function O(e, t) {
      if (t === void 0) {
        t = {};
      }
      var n = {};
      for (var _i2 in e) {
        var _o = t[_i2],
          _s = m(void 0 === _o ? e[_i2] : _o);
        n[_i2] = _s;
      }
      return n;
    }
    ((p.prototype.brand = n),
      (p.prototype.h = function () {
        return !0;
      }),
      (p.prototype.S = function (e) {
        var _this = this;
        var t = this.t;
        t !== e &&
          void 0 === e.e &&
          ((e.x = t),
          (this.t = e),
          void 0 !== t
            ? (t.e = e)
            : a(function () {
                var e;
                null == (e = _this.W) || e.call(_this);
              }));
      }),
      (p.prototype.U = function (e) {
        var _this2 = this;
        if (void 0 !== this.t) {
          var _t4 = e.e,
            _n4 = e.x;
          (void 0 !== _t4 && ((_t4.x = _n4), (e.e = void 0)),
            void 0 !== _n4 && ((_n4.e = _t4), (e.x = void 0)),
            e === this.t &&
              ((this.t = _n4),
              void 0 === _n4 &&
                a(function () {
                  var e;
                  null == (e = _this2.Z) || e.call(_this2);
                })));
        }
      }),
      (p.prototype.subscribe = function (e) {
        var _this3 = this;
        return $(
          function () {
            var t = _this3.value,
              n = s;
            s = void 0;
            try {
              e(t);
            } finally {
              s = n;
            }
          },
          { name: "sub" },
        );
      }),
      (p.prototype.valueOf = function () {
        return this.value;
      }),
      (p.prototype.toString = function () {
        return this.value + "";
      }),
      (p.prototype.toJSON = function () {
        return this.value;
      }),
      (p.prototype.peek = function () {
        var e = s;
        s = void 0;
        try {
          return this.value;
        } finally {
          s = e;
        }
      }),
      Object.defineProperty(p.prototype, "value", {
        get: function get() {
          var e = h(this);
          return (void 0 !== e && (e.i = this.i), this.v);
        },
        set: function set(e) {
          if (e !== this.v) {
            if (d > 100) throw new Error("Cycle detected");
            (!(function (e) {
              0 !== l &&
                0 === d &&
                e.l !== f &&
                ((e.l = f), (c = { S: e, v: e.v, i: e.i, o: c }));
            })(this),
              (this.v = e),
              this.i++,
              g++,
              l++);
            try {
              for (var _e3 = this.t; void 0 !== _e3; _e3 = _e3.x) _e3.t.N();
            } finally {
              i();
            }
          }
        },
      }),
      (v.prototype = new p()),
      (v.prototype.h = function () {
        if (((this.f &= -3), 1 & this.f)) return !1;
        if (32 == (36 & this.f)) return !0;
        if (((this.f &= -5), this.g === g)) return !0;
        if (((this.g = g), (this.f |= 1), this.i > 0 && !E(this)))
          return ((this.f &= -2), !0);
        var e = s;
        try {
          (x(this), (s = this));
          var _e4 = this.x();
          (16 & this.f || this.v !== _e4 || 0 === this.i) &&
            ((this.v = _e4), (this.f &= -17), this.i++);
        } catch (e) {
          ((this.v = e), (this.f |= 16), this.i++);
        }
        return ((s = e), S(this), (this.f &= -2), !0);
      }),
      (v.prototype.S = function (e) {
        if (void 0 === this.t) {
          this.f |= 36;
          for (var _e5 = this.s; void 0 !== _e5; _e5 = _e5.n) _e5.S.S(_e5);
        }
        p.prototype.S.call(this, e);
      }),
      (v.prototype.U = function (e) {
        if (
          void 0 !== this.t &&
          (p.prototype.U.call(this, e), void 0 === this.t)
        ) {
          this.f &= -33;
          for (var _e6 = this.s; void 0 !== _e6; _e6 = _e6.n) _e6.S.U(_e6);
        }
      }),
      (v.prototype.N = function () {
        if (!(2 & this.f)) {
          this.f |= 6;
          for (var _e7 = this.t; void 0 !== _e7; _e7 = _e7.x) _e7.t.N();
        }
      }),
      Object.defineProperty(v.prototype, "value", {
        get: function get() {
          if (1 & this.f) throw new Error("Cycle detected");
          var e = h(this);
          if ((this.h(), void 0 !== e && (e.i = this.i), 16 & this.f))
            throw this.v;
          return this.v;
        },
      }),
      (R.prototype.c = function () {
        var e = this.S();
        try {
          if (8 & this.f) return;
          if (void 0 === this.x) return;
          var _e8 = this.x();
          "function" == typeof _e8 && (this.m = _e8);
        } finally {
          e();
        }
      }),
      (R.prototype.S = function () {
        if (1 & this.f) throw new Error("Cycle detected");
        ((this.f |= 1), (this.f &= -9), N(this), x(this), l++);
        var e = s;
        return ((s = this), C.bind(this, e));
      }),
      (R.prototype.N = function () {
        2 & this.f || ((this.f |= 2), (this.u = r), (r = this));
      }),
      (R.prototype.d = function () {
        ((this.f |= 8), 1 & this.f || b(this));
      }),
      (R.prototype.dispose = function () {
        this.d();
      }));
    var T = (_require_Lexical = require("Lexical")).defineExtension({
      build: function build(e, t, n) {
        return O(t);
      },
      config: _require_Lexical.safeCast({
        defaultSelection: "rootEnd",
        disabled: !1,
      }),
      name: "@lexical/extension/AutoFocus",
      register: function register(t, n, i) {
        var o = i.getOutput();
        return $(function () {
          return o.disabled.value
            ? void 0
            : t.registerRootListener(function (n) {
                t.focus(
                  function () {
                    var t =
                      null !== n
                        ? require("Lexical").getActiveElement(n)
                        : null;
                    null === n ||
                      (null !== t && n.contains(t)) ||
                      n.focus({ preventScroll: !0 });
                  },
                  { defaultSelection: o.defaultSelection.peek() },
                );
              });
        });
      },
    });
    function D() {
      var t = require("Lexical").$getRoot(),
        n = require("Lexical").$getSelection(),
        i = require("Lexical").$createParagraphNode();
      (t.clear(),
        t.append(i),
        null !== n && i.select(),
        require("Lexical").$isRangeSelection(n) && (n.format = 0));
    }
    function I(t, n) {
      if (n === void 0) {
        n = D;
      }
      return t.registerCommand(
        require("Lexical").CLEAR_EDITOR_COMMAND,
        function () {
          return (n(), !0);
        },
        require("Lexical").COMMAND_PRIORITY_EDITOR,
      );
    }
    var _ = _require_Lexical.defineExtension({
      build: function build(e, t, n) {
        return O(t);
      },
      config: _require_Lexical.safeCast({ $onClear: D }),
      name: "@lexical/extension/ClearEditor",
      register: function register(e, t, n) {
        var _n$getOutput = n.getOutput(),
          i = _n$getOutput.$onClear;
        return $(function () {
          return I(e, i.value);
        });
      },
    });
    function M(t) {
      return (
        !!require("Lexical").$isDecoratorNode(t) ||
        !(!require("Lexical").$isElementNode(t) || !t.isShadowRoot())
      );
    }
    function w(t, n, i, o) {
      return (
        !!t.isEditable() &&
        i.target === n &&
        t.read("latest", function () {
          var n = require("Lexical").$getRoot().getLastChild();
          if (null === n) return !1;
          var s = t.getElementByKey(n.getKey());
          return (
            null !== s &&
            !(i.clientY <= s.getBoundingClientRect().bottom) &&
            o(n)
          );
        })
      );
    }
    var A = _require_Lexical.defineExtension({
      build: function build(e, t) {
        return O(t);
      },
      config: _require_Lexical.safeCast({
        $shouldInsertAfter: M,
        disabled: !1,
      }),
      name: "@lexical/ClickAfterLastBlock",
      register: function register(t, n, i) {
        return $(function () {
          var n = i.getOutput();
          if (!n.disabled.value)
            return t.registerRootListener(function (i) {
              if (null === i) return;
              return require("Lexical").registerEventListeners(
                i,
                {
                  click: function click(o) {
                    w(t, i, o, n.$shouldInsertAfter.peek()) &&
                      (o.preventDefault(),
                      require("Lexical").stopLexicalPropagation(o),
                      t.update(function () {
                        var t = require("Lexical").$getRoot().getLastChild();
                        if (null === t) return;
                        if (!n.$shouldInsertAfter.peek()(t)) return;
                        var i = require("Lexical").$createParagraphNode();
                        (t.insertAfter(i), i.select());
                      }));
                  },
                  mousedown: function mousedown(e) {
                    w(t, i, e, n.$shouldInsertAfter.peek()) &&
                      e.preventDefault();
                  },
                },
                !0,
              );
            });
        });
      },
    });
    function F(t) {
      var n = new Set(),
        i = new Set();
      for (var _o2 of P(t)) {
        var _t5 = "function" == typeof _o2 ? _o2 : _o2.replace;
        (require("Lexical").getStaticNodeConfig(_t5),
          n.add(_t5.getType()),
          i.add(_t5));
      }
      return { nodes: i, types: n };
    }
    function P(e) {
      return ("function" == typeof e.nodes ? e.nodes() : e.nodes) || [];
    }
    var L = _require_Lexical.createState("format", {
      parse: function parse(e) {
        return "number" == typeof e ? e : 0;
      },
    });
    var _k = (function (_e$DecoratorNode) {
      function k() {
        return _e$DecoratorNode.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(k, _e$DecoratorNode);
      var _proto = k.prototype;
      _proto.$config = function $config() {
        return this.config("decorator-text", {
          extends: require("Lexical").DecoratorNode,
          stateConfigs: [{ flat: !0, stateConfig: L }],
        });
      };
      _proto.getFormat = function getFormat(t) {
        return require("Lexical").$getState(this, L, t);
      };
      _proto.getFormatFlags = function getFormatFlags(t, n) {
        return require("Lexical").toggleTextFormatType(this.getFormat(), t, n);
      };
      _proto.hasFormat = function hasFormat(t) {
        var n = require("Lexical").TEXT_TYPE_TO_FORMAT[t];
        return 0 !== (this.getFormat() & n);
      };
      _proto.setFormat = function setFormat(t) {
        return require("Lexical").$setState(this, L, t);
      };
      _proto.toggleFormat = function toggleFormat(t) {
        var n = this.getFormat(),
          i = require("Lexical").toggleTextFormatType(n, t, null);
        return this.setFormat(i);
      };
      _proto.isInline = function isInline() {
        return !0;
      };
      _proto.createDOM = function createDOM(t, n) {
        return require("Lexical").$getDocument().createElement("span");
      };
      return babelHelpers.createClass(k, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_require_Lexical.DecoratorNode);
    function K(e, t, n) {
      if (n === void 0) {
        n = j;
      }
      var i = t;
      for (var _ref2 of Object.entries(n)) {
        var _t6 = _ref2[0];
        var _o3 = _ref2[1];
        e.hasFormat(_o3) && (i = z(i, _t6));
      }
      return i;
    }
    var B = K;
    function z(e, t) {
      var n = e.ownerDocument.createElement(t);
      return (n.appendChild(e), n);
    }
    var j = {
        b: "bold",
        code: "code",
        em: "italic",
        i: "italic",
        mark: "highlight",
        s: "strikethrough",
        strong: "bold",
        sub: "subscript",
        sup: "superscript",
        u: "underline",
      },
      U = _require_Lexical.defineExtension({
        name: "@lexical/extension/DecoratorText",
        nodes: function nodes() {
          return [_k];
        },
      });
    function W(e, t) {
      var n;
      return m(e(), {
        unwatched: function unwatched() {
          n && (n(), (n = void 0));
        },
        watched: function watched() {
          ((this.value = e()), (n = t(this)));
        },
      });
    }
    var Y = _require_Lexical.defineExtension({
      build: function build(e) {
        return W(
          function () {
            return e.getEditorState();
          },
          function (t) {
            return e.registerUpdateListener(function (e) {
              t.value = e.editorState;
            });
          },
        );
      },
      name: "@lexical/extension/EditorState",
    });
    function H(e) {
      var n = new URL("https://lexical.dev/docs/error"),
        i = new URLSearchParams();
      i.append("code", e);
      for (
        var _len = arguments.length,
          t = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        t[_key - 1] = arguments[_key];
      }
      for (var _e9 of t) i.append("v", _e9);
      throw (
        (n.search = i.toString()),
        Error(
          "Minified Lexical error #" +
            e +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    var G;
    try {
      G = "0.47.0+prod.cjs";
    } catch (e) {}
    var V = G != null ? G : '"<unknown>+source"',
      Z = new Set(["__proto__", "constructor", "prototype"]);
    function J(e, t) {
      if (
        e &&
        t &&
        !Array.isArray(t) &&
        "object" == typeof e &&
        "object" == typeof t
      ) {
        var _n5 = e,
          _i3 = t;
        for (var _e0 in _i3)
          !Z.has(_e0) &&
            Object.prototype.hasOwnProperty.call(_i3, _e0) &&
            (_n5[_e0] = J(_n5[_e0], _i3[_e0]));
        return e;
      }
      return t;
    }
    var X = 0,
      q = 1,
      Q = 2,
      ee = 3,
      te = 4,
      ne = 5,
      ie = 6,
      oe = 7;
    function se(e) {
      return e.id === X;
    }
    function re(e) {
      return e.id === Q;
    }
    function ae(e) {
      return (
        (function (e) {
          return e.id === q;
        })(e) || H(305, String(e.id), String(q)),
        Object.assign(e, { id: Q })
      );
    }
    var ce = new Set();
    var _le = (function () {
      function le(e, t) {
        ((this.builder = e),
          (this.extension = t),
          (this.configs = new Set()),
          (this.state = { id: X }));
      }
      var _proto2 = le.prototype;
      _proto2.mergeConfigs = function mergeConfigs() {
        var t = this.extension.config || {};
        var n = this.extension.mergeConfig
          ? this.extension.mergeConfig.bind(this.extension)
          : require("Lexical").shallowMergeConfig;
        for (var _e1 of this.configs) t = n(t, _e1);
        return t;
      };
      _proto2.init = function init(e) {
        var t = this.state;
        re(t) || H(306, String(t.id));
        var n = {
            getDependency: this.getInitDependency.bind(this),
            getDirectDependentNames: this.getDirectDependentNames.bind(this),
            getPeer: this.getInitPeer.bind(this),
            getPeerNameSet: this.getPeerNameSet.bind(this),
          },
          i = babelHelpers["extends"]({}, n, {
            getDependency: this.getDependency.bind(this),
            getInitResult: this.getInitResult.bind(this),
            getPeer: this.getPeer.bind(this),
          }),
          o = (function (e, t, n) {
            return Object.assign(e, { config: t, id: ee, registerState: n });
          })(t, this.mergeConfigs(), n);
        var s;
        ((this.state = o),
          this.extension.init && (s = this.extension.init(e, o.config, n)),
          (this.state = (function (e, t, n) {
            return Object.assign(e, {
              id: te,
              initResult: t,
              registerState: n,
            });
          })(o, s, i)));
      };
      _proto2.build = function build(e) {
        var t = this.state;
        var n;
        (t.id !== te && H(307, String(t.id), String(ne)),
          this.extension.build &&
            (n = this.extension.build(e, t.config, t.registerState)));
        var i = babelHelpers["extends"]({}, t.registerState, {
          getOutput: function getOutput() {
            return n;
          },
          getSignal: this.getSignal.bind(this),
        });
        this.state = (function (e, t, n) {
          return Object.assign(e, { id: ne, output: t, registerState: n });
        })(t, n, i);
      };
      _proto2.register = function register(e, t) {
        var _this4 = this;
        this._signal = t;
        var n = this.state;
        n.id !== ne && H(308, String(n.id), String(ne));
        var i =
          this.extension.register &&
          this.extension.register(e, n.config, n.registerState);
        return (
          (this.state = (function (e) {
            return Object.assign(e, { id: ie });
          })(n)),
          function () {
            var e = _this4.state;
            (e.id !== oe && H(309, String(n.id), String(oe)),
              (_this4.state = (function (e) {
                return Object.assign(e, { id: ne });
              })(e)),
              i && i());
          }
        );
      };
      _proto2.afterRegistration = function afterRegistration(e) {
        var t = this.state;
        var n;
        return (
          t.id !== ie && H(310, String(t.id), String(ie)),
          this.extension.afterRegistration &&
            (n = this.extension.afterRegistration(
              e,
              t.config,
              t.registerState,
            )),
          (this.state = (function (e) {
            return Object.assign(e, { id: oe });
          })(t)),
          n
        );
      };
      _proto2.getSignal = function getSignal() {
        return (void 0 === this._signal && H(311), this._signal);
      };
      _proto2.getInitResult = function getInitResult() {
        void 0 === this.extension.init && H(312, this.extension.name);
        var e = this.state;
        return (
          (function (e) {
            return e.id >= te;
          })(e) || H(313, String(e.id), String(te)),
          e.initResult
        );
      };
      _proto2.getInitPeer = function getInitPeer(e) {
        var t = this.builder.extensionNameMap.get(e);
        return t ? t.getExtensionInitDependency() : void 0;
      };
      _proto2.getExtensionInitDependency =
        function getExtensionInitDependency() {
          var e = this.state;
          return (
            (function (e) {
              return e.id >= ee;
            })(e) || H(314, String(e.id), String(ee)),
            { config: e.config }
          );
        };
      _proto2.getPeer = function getPeer(e) {
        var t = this.builder.extensionNameMap.get(e);
        return t ? t.getExtensionDependency() : void 0;
      };
      _proto2.getInitDependency = function getInitDependency(e) {
        var t = this.builder.getExtensionRep(e);
        return (
          void 0 === t && H(315, this.extension.name, e.name),
          t.getExtensionInitDependency()
        );
      };
      _proto2.getDependency = function getDependency(e) {
        var t = this.builder.getExtensionRep(e);
        return (
          void 0 === t && H(315, this.extension.name, e.name),
          t.getExtensionDependency()
        );
      };
      _proto2.getState = function getState() {
        var e = this.state;
        return (
          (function (e) {
            return e.id >= oe;
          })(e) || H(316, String(e.id), String(oe)),
          e
        );
      };
      _proto2.getDirectDependentNames = function getDirectDependentNames() {
        return this.builder.incomingEdges.get(this.extension.name) || ce;
      };
      _proto2.getPeerNameSet = function getPeerNameSet() {
        var e = this._peerNameSet;
        return (
          e ||
            ((e = new Set(
              (this.extension.peerDependencies || []).map(function (_ref3) {
                var e = _ref3[0];
                return e;
              }),
            )),
            (this._peerNameSet = e)),
          e
        );
      };
      _proto2.getExtensionDependency = function getExtensionDependency() {
        if (!this._dependency) {
          var _e10 = this.state;
          ((function (e) {
            return e.id >= ne;
          })(_e10) || H(317, this.extension.name),
            (this._dependency = {
              config: _e10.config,
              init: _e10.initResult,
              output: _e10.output,
            }));
        }
        return this._dependency;
      };
      return le;
    })();
    var de = { tag: require("Lexical").HISTORY_MERGE_TAG };
    function ue() {
      var t = require("Lexical").$getRoot();
      t.isEmpty() && t.append(require("Lexical").$createParagraphNode());
    }
    var fe = require("Lexical").defineExtension({
        config: require("Lexical").safeCast({
          setOptions: de,
          updateOptions: de,
        }),
        init: function init(_ref4) {
          var _ref4$$initialEditorS = _ref4.$initialEditorState,
            e = _ref4$$initialEditorS === void 0 ? ue : _ref4$$initialEditorS;
          return { $initialEditorState: e, initialized: !1 };
        },
        afterRegistration: function afterRegistration(t, _ref5, o) {
          var n = _ref5.updateOptions,
            i = _ref5.setOptions;
          var s = o.getInitResult();
          if (!s.initialized) {
            s.initialized = !0;
            var _o4 = s.$initialEditorState;
            if (require("Lexical").$isEditorState(_o4))
              t.setEditorState(_o4, i);
            else if ("function" == typeof _o4)
              t.update(function () {
                _o4(t);
              }, n);
            else if (
              _o4 &&
              ("string" == typeof _o4 || "object" == typeof _o4)
            ) {
              var _e11 = t.parseEditorState(_o4);
              t.setEditorState(_e11, i);
            }
          }
          return function () {};
        },
        name: "@lexical/extension/InitialState",
        nodes: [
          require("Lexical").RootNode,
          require("Lexical").TextNode,
          require("Lexical").LineBreakNode,
          require("Lexical").TabNode,
          require("Lexical").ParagraphNode,
        ],
      }),
      ge = Symbol["for"]("@lexical/extension/LexicalBuilder");
    function he() {}
    function pe(e) {
      throw e;
    }
    function me(e) {
      return Array.isArray(e) ? e : [e];
    }
    var Ee = V;
    var _xe = (function () {
      function xe(e) {
        ((this.outgoingConfigEdges = new Map()),
          (this.incomingEdges = new Map()),
          (this.extensionNameMap = new Map()),
          (this.conflicts = new Map()),
          (this.PACKAGE_VERSION = Ee),
          (this.roots = e));
        for (var _t7 of e) this.addExtension(_t7);
      }
      xe.fromExtensions = function fromExtensions(e) {
        var t = [me(fe)];
        for (var _n6 of e) t.push(me(_n6));
        return new xe(t);
      };
      xe.maybeFromEditor = function maybeFromEditor(e) {
        var t = e[ge];
        return (
          t &&
            (t.PACKAGE_VERSION !== Ee && H(292, t.PACKAGE_VERSION, Ee),
            t instanceof xe || H(293)),
          t
        );
      };
      xe.fromEditor = function fromEditor(e) {
        var t = xe.maybeFromEditor(e);
        return (void 0 === t && H(294), t);
      };
      var _proto3 = xe.prototype;
      _proto3.constructEditor = function constructEditor() {
        var _Object$assign;
        var _this$buildCreateEdit = this.buildCreateEditorArgs(),
          t = _this$buildCreateEdit.$initialEditorState,
          n = _this$buildCreateEdit.onError,
          i = _this$buildCreateEdit.onWarn,
          o = babelHelpers.objectWithoutPropertiesLoose(
            _this$buildCreateEdit,
            _excluded,
          ),
          s = Object.assign(
            require("Lexical").createEditor(
              babelHelpers["extends"](
                {},
                o,
                n
                  ? {
                      onError: function onError(e) {
                        n(e, s);
                      },
                    }
                  : {},
                i
                  ? {
                      onWarn: function onWarn(e) {
                        i(e, s);
                      },
                    }
                  : {},
              ),
            ),
            ((_Object$assign = {}),
            (_Object$assign[ge] = this),
            _Object$assign),
          );
        for (var _e12 of this.sortedExtensionReps()) _e12.build(s);
        return s;
      };
      _proto3.buildEditor = function buildEditor() {
        var _Object$assign2;
        var t = he;
        function n() {
          try {
            t();
          } finally {
            t = he;
          }
        }
        var i = Object.assign(
          this.constructEditor(),
          ((_Object$assign2 = { dispose: n }),
          (_Object$assign2[
            typeof Symbol === "function" ? Symbol.dispose : "@@dispose"
          ] = n),
          _Object$assign2),
        );
        return (
          (t = require("Lexical").mergeRegister(
            this.registerEditor(i),
            function () {
              return i.setRootElement(null);
            },
          )),
          i
        );
      };
      _proto3.hasExtensionByName = function hasExtensionByName(e) {
        return this.extensionNameMap.has(e);
      };
      _proto3.getExtensionRep = function getExtensionRep(e) {
        var t = this.extensionNameMap.get(e.name);
        if (t) return (t.extension !== e && H(295, e.name), t);
      };
      _proto3.addEdge = function addEdge(e, t, n) {
        var i = this.outgoingConfigEdges.get(e);
        i ? i.set(t, n) : this.outgoingConfigEdges.set(e, new Map([[t, n]]));
        var o = this.incomingEdges.get(t);
        o ? o.add(e) : this.incomingEdges.set(t, new Set([e]));
      };
      _proto3.addExtension = function addExtension(e) {
        void 0 !== this._sortedExtensionReps && H(296);
        var t = me(e),
          n = t[0];
        "string" != typeof n.name && H(297, typeof n.name);
        var i = this.extensionNameMap.get(n.name);
        if ((void 0 !== i && i.extension !== n && H(298, n.name), !i)) {
          ((i = new _le(this, n)), this.extensionNameMap.set(n.name, i));
          var _e13 = this.conflicts.get(n.name);
          "string" == typeof _e13 && H(299, n.name, _e13);
          for (var _e14 of n.conflictsWith || [])
            (this.extensionNameMap.has(_e14) && H(299, n.name, _e14),
              this.conflicts.set(_e14, n.name));
          for (var _e15 of n.dependencies || []) {
            var _t8 = me(_e15);
            (this.addEdge(n.name, _t8[0].name, _t8.slice(1)),
              this.addExtension(_t8));
          }
          for (var _ref7 of n.peerDependencies || []) {
            var _e16 = _ref7[0];
            var _t9 = _ref7[1];
            this.addEdge(n.name, _e16, _t9 ? [_t9] : []);
          }
        }
      };
      _proto3.sortedExtensionReps = function sortedExtensionReps() {
        var _this5 = this;
        if (this._sortedExtensionReps) return this._sortedExtensionReps;
        var e = [],
          _t0 = function t(n, i) {
            var o = n.state;
            if (re(o)) return;
            var s = n.extension.name;
            var r;
            (se(o) || H(300, s, i || "[unknown]"),
              se((r = o)) || H(304, String(r.id), String(X)),
              (o = Object.assign(r, { id: q })),
              (n.state = o));
            var a = _this5.outgoingConfigEdges.get(s);
            if (a)
              for (var _e17 of a.keys()) {
                var _n7 = _this5.extensionNameMap.get(_e17);
                _n7 && _t0(_n7, s);
              }
            ((o = ae(o)), (n.state = o), e.push(n));
          };
        for (var _e18 of this.extensionNameMap.values())
          se(_e18.state) && _t0(_e18);
        for (var _t1 of e)
          for (var _ref9 of this.outgoingConfigEdges.get(_t1.extension.name) ||
            []) {
            var _e19 = _ref9[0];
            var _n8 = _ref9[1];
            if (_n8.length > 0) {
              var _t10 = this.extensionNameMap.get(_e19);
              if (_t10) for (var _e20 of _n8) _t10.configs.add(_e20);
            }
          }
        for (var _ref1 of this.roots) {
          var _e21 = _ref1[0];
          var _t11 = babelHelpers.arrayLikeToArray(_ref1).slice(1);
          if (_t11.length > 0) {
            var _n9 = this.extensionNameMap.get(_e21.name);
            void 0 === _n9 && H(301, _e21.name);
            for (var _e22 of _t11) _n9.configs.add(_e22);
          }
        }
        return ((this._sortedExtensionReps = e), this._sortedExtensionReps);
      };
      _proto3.registerEditor = function registerEditor(t) {
        var n = this.sortedExtensionReps(),
          i = new AbortController(),
          o = [
            function () {
              return i.abort();
            },
          ],
          s = i.signal;
        for (var _e23 of n) {
          var _n0 = _e23.register(t, s);
          _n0 && o.push(_n0);
        }
        for (var _e24 of n) {
          var _n1 = _e24.afterRegistration(t);
          _n1 && o.push(_n1);
        }
        return require("Lexical").mergeRegister.apply(require("Lexical"), o);
      };
      _proto3.buildCreateEditorArgs = function buildCreateEditorArgs() {
        var e = {},
          t = new Set(),
          n = new Map(),
          i = new Map(),
          o = {},
          s = {},
          r = this.sortedExtensionReps();
        for (var _a of r) {
          var _r = _a.extension;
          if (
            (void 0 !== _r.onError && (e.onError = _r.onError),
            void 0 !== _r.onWarn && (e.onWarn = _r.onWarn),
            void 0 !== _r.disableEvents && (e.disableEvents = _r.disableEvents),
            void 0 !== _r.parentEditor && (e.parentEditor = _r.parentEditor),
            void 0 !== _r.editable && (e.editable = _r.editable),
            void 0 !== _r.namespace && (e.namespace = _r.namespace),
            void 0 !== _r.$initialEditorState &&
              (e.$initialEditorState = _r.$initialEditorState),
            _r.nodes)
          )
            for (var _e25 of P(_r)) {
              if ("function" != typeof _e25) {
                var _t12 = n.get(_e25.replace);
                (_t12 &&
                  H(302, _r.name, _e25.replace.name, _t12.extension.name),
                  n.set(_e25.replace, _a));
              }
              t.add(_e25);
            }
          if (_r.html) {
            if (_r.html["export"])
              for (var _ref11 of _r.html["export"].entries()) {
                var _e26 = _ref11[0];
                var _t13 = _ref11[1];
                i.set(_e26, _t13);
              }
            _r.html["import"] && Object.assign(o, _r.html["import"]);
          }
          _r.theme && J(s, _r.theme);
        }
        (Object.keys(s).length > 0 && (e.theme = s),
          t.size && (e.nodes = [].concat(t)));
        var a = Object.keys(o).length > 0,
          c = i.size > 0;
        (a || c) &&
          ((e.html = {}),
          a && (e.html["import"] = o),
          c && (e.html["export"] = i));
        for (var _t14 of r) _t14.init(e);
        return (e.onError || (e.onError = pe), e);
      };
      return xe;
    })();
    function Se(e, t) {
      var n = _xe.fromEditor(e).getExtensionRep(t);
      return (void 0 === n && H(303, t.name), n.getExtensionDependency());
    }
    function ve(e, t) {
      var n = _xe.maybeFromEditor(e);
      if (!n) return;
      var i = n.extensionNameMap.get(t);
      return i ? i.getExtensionDependency() : void 0;
    }
    function ye(t) {
      return Se(require("Lexical").$getEditor(), t);
    }
    var Ne = new Set(),
      be = require("Lexical").defineExtension({
        build: function build(t, n, i) {
          var o = i.getDependency(Y).output,
            s = m({ watchedNodeKeys: new Map() }),
            r = W(
              function () {},
              function () {
                return $(function () {
                  var t = r.peek(),
                    n = s.value.watchedNodeKeys;
                  var i,
                    a = !1;
                  (o.value.read(function () {
                    if (require("Lexical").$getSelection())
                      for (var _ref13 of n.entries()) {
                        var _o5 = _ref13[0];
                        var _s2 = _ref13[1];
                        {
                          if (0 === _s2.size) {
                            n["delete"](_o5);
                            continue;
                          }
                          var _r2 = require("Lexical").$getNodeByKey(_o5),
                            _c = (_r2 && _r2.isSelected()) || !1;
                          ((a = a || _c !== (!!t && t.has(_o5))),
                            _c && ((i = i || new Set()), i.add(_o5)));
                        }
                      }
                  }),
                    (!a && i && t && i.size === t.size) || (r.value = i));
                });
              },
            );
          return {
            watchNodeKey: function watchNodeKey(e) {
              var t = y(function () {
                  return (r.value || Ne).has(e);
                }),
                _s$peek = s.peek(),
                n = _s$peek.watchedNodeKeys;
              var i = n.get(e);
              var o = void 0 !== i;
              return (
                (i = i || new Set()),
                i.add(t),
                o || (n.set(e, i), (s.value = { watchedNodeKeys: n })),
                t
              );
            },
          };
        },
        dependencies: [Y],
        name: "@lexical/extension/NodeSelection",
      }),
      Ce = require("Lexical").createCommand("INSERT_HORIZONTAL_RULE_COMMAND");
    var _Re = (function (_e$DecoratorNode2) {
      function Re() {
        return _e$DecoratorNode2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Re, _e$DecoratorNode2);
      Re.getType = function getType() {
        return "horizontalrule";
      };
      Re.clone = function clone(e) {
        return new Re(e.__key);
      };
      Re.importJSON = function importJSON(e) {
        return Oe().updateFromJSON(e);
      };
      Re.importDOM = function importDOM() {
        return {
          hr: function hr() {
            return { conversion: $e, priority: 0 };
          },
        };
      };
      var _proto4 = Re.prototype;
      _proto4.exportDOM = function exportDOM() {
        return {
          element: require("Lexical").$getDocument().createElement("hr"),
        };
      };
      _proto4.createDOM = function createDOM(t) {
        var n = require("Lexical").$getDocument().createElement("hr");
        return (require("Lexical").addClassNamesToElement(n, t.theme.hr), n);
      };
      _proto4.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto4.isInline = function isInline() {
        return !1;
      };
      _proto4.updateDOM = function updateDOM() {
        return !1;
      };
      return Re;
    })(require("Lexical").DecoratorNode);
    function $e() {
      return { node: Oe() };
    }
    function Oe() {
      return require("Lexical").$create(_Re);
    }
    function Te(e) {
      return e instanceof _Re;
    }
    var De = require("Lexical").defineExtension({
        dependencies: [Y, be],
        name: "@lexical/extension/HorizontalRule",
        nodes: function nodes() {
          return [_Re];
        },
        register: function register(n, i, s) {
          var _n$_config$theme$hrSe;
          var r = s.getDependency(be).output.watchNodeKey,
            a = m({ nodeSelections: new Map() }),
            c =
              (_n$_config$theme$hrSe = n._config.theme.hrSelected) != null
                ? _n$_config$theme$hrSe
                : "selected";
          return require("Lexical").mergeRegister(
            n.registerCommand(
              Ce,
              function (n) {
                var i = require("Lexical").$getSelection();
                if (!require("Lexical").$isRangeSelection(i)) return !1;
                if (null !== i.focus.getNode()) {
                  var _e27 = Oe();
                  require("LexicalUtils").$insertNodeToNearestRoot(_e27);
                }
                return !0;
              },
              require("Lexical").COMMAND_PRIORITY_EDITOR,
            ),
            n.registerCommand(
              require("Lexical").CLICK_COMMAND,
              function (t) {
                if (require("Lexical").isDOMNode(t.target)) {
                  var _n10 = require("Lexical").$getNodeFromDOMNode(t.target);
                  if (Te(_n10))
                    return (
                      (function (t, n) {
                        if (n === void 0) {
                          n = !1;
                        }
                        var i = require("Lexical").$getSelection(),
                          o = t.isSelected(),
                          s = t.getKey();
                        var r;
                        (n && require("Lexical").$isNodeSelection(i)
                          ? (r = i)
                          : ((r = require("Lexical").$createNodeSelection()),
                            require("Lexical").$setSelection(r)),
                          o ? r["delete"](s) : r.add(s));
                      })(_n10, t.shiftKey),
                      !0
                    );
                }
                return !1;
              },
              require("Lexical").COMMAND_PRIORITY_LOW,
            ),
            n.registerMutationListener(_Re, function (e, t) {
              o(function () {
                var t = !1;
                var _a$peek = a.peek(),
                  i = _a$peek.nodeSelections;
                for (var _ref15 of e.entries()) {
                  var _o6 = _ref15[0];
                  var _s3 = _ref15[1];
                  if ("destroyed" === _s3) (i["delete"](_o6), (t = !0));
                  else {
                    var _e28 = i.get(_o6),
                      _s4 = n.getElementByKey(_o6);
                    _e28
                      ? (_e28.domNode.value = _s4)
                      : ((t = !0),
                        i.set(_o6, {
                          domNode: m(_s4),
                          selectedSignal: r(_o6),
                        }));
                  }
                }
                t && (a.value = { nodeSelections: i });
              });
            }),
            $(function () {
              var t = [];
              var _loop = function _loop() {
                var n = _ref17.domNode;
                var i = _ref17.selectedSignal;
                t.push(
                  $(function () {
                    var t = n.value;
                    if (t) {
                      i.value
                        ? require("Lexical").addClassNamesToElement(t, c)
                        : require("Lexical").removeClassNamesFromElement(t, c);
                    }
                  }),
                );
              };
              for (var _ref17 of a.value.nodeSelections.values()) {
                _loop();
              }
              return require("Lexical").mergeRegister.apply(
                require("Lexical"),
                t,
              );
            }),
          );
        },
      }),
      Ie = require("Lexical").defineExtension({
        build: function build(e) {
          return { composingTextNode: m(null), compositionKey: m(null) };
        },
        name: "@lexical/extension/IME",
        register: function register(t, n, i) {
          var _i$getOutput = i.getOutput(),
            o = _i$getOutput.compositionKey,
            s = _i$getOutput.composingTextNode,
            r = t.registerCommand(
              require("Lexical").COMPOSITION_START_COMMAND,
              function () {
                var t = require("Lexical").$getSelection();
                return (
                  require("Lexical").$isRangeSelection(t) &&
                    (o.value = t.anchor.key),
                  !1
                );
              },
              require("Lexical").COMMAND_PRIORITY_BEFORE_EDITOR,
            ),
            a = $(function () {
              var n = o.value;
              s.value =
                null !== n
                  ? t.read("latest", function () {
                      var t = require("Lexical").$getNodeByKey(n);
                      return require("Lexical").$isTextNode(t) ? t : null;
                    })
                  : null;
            }),
            c = t.registerUpdateListener(function (_ref18) {
              var t = _ref18.tags,
                n = _ref18.editorState;
              t.has(require("Lexical").COMPOSITION_START_TAG) &&
                n.read(function () {
                  var t = require("Lexical").$getSelection();
                  if (!require("Lexical").$isRangeSelection(t)) return;
                  var n = t.anchor.getNode();
                  require("Lexical").$isTextNode(n) && (s.value = n);
                });
            }),
            l = t.registerRootListener(function (t) {
              if (null === t) return void (o.value = null);
              return require("Lexical").registerEventListener(
                t,
                "compositionend",
                function () {
                  o.value = null;
                },
              );
            });
          return require("Lexical").mergeRegister(r, a, c, l);
        },
      });
    var _e = require("Lexical").defineExtension({
        build: function build(e, t) {
          return O({ inheritEditableFromParent: t.inheritEditableFromParent });
        },
        config: require("Lexical").safeCast({
          $getParentEditor: function $getParentEditor() {
            var t = require("Lexical").$getEditor();
            return (_xe.fromEditor(t), t);
          },
          inheritEditableFromParent: !1,
        }),
        init: function init(e, t, n) {
          var i = t.$getParentEditor();
          ((e.parentEditor = i), (e.theme = e.theme || i._config.theme));
        },
        name: "@lexical/extension/NestedEditor",
        register: function register(e, t, n) {
          return $(function () {
            var t = e._parentEditor;
            if (t && n.getOutput().inheritEditableFromParent.value)
              return (
                e.setEditable(t.isEditable()),
                t.registerEditableListener(e.setEditable.bind(e))
              );
          });
        },
      }),
      Me = require("Lexical").defineExtension({
        config: require("Lexical").safeCast({
          attribute: "data-selected",
          nodes: [],
        }),
        init: function init(t, n) {
          var i = new Set(),
            o = require("Lexical").getRegisteredSubtypeMap(F(t).nodes);
          for (var _e29 of n.nodes) {
            var _t15 = _e29.getType(),
              _n11 = o.get(_t15);
            (void 0 === _n11 && H(339, _e29.name, _t15), i.add(_t15));
            for (var _e30 of _n11) i.add(_e30);
          }
          return { matchTypes: i };
        },
        mergeConfig: function mergeConfig(t, n) {
          return require("Lexical").shallowMergeConfig(
            t,
            babelHelpers["extends"](
              {},
              n,
              n.nodes && { nodes: [].concat(t.nodes, n.nodes) },
            ),
          );
        },
        name: "@lexical/extension/NodeSelectionDataSelected",
        register: function register(t, n, i) {
          var o = n.attribute,
            _i$getInitResult = i.getInitResult(),
            s = _i$getInitResult.matchTypes,
            r = new Map(),
            a = function a(n) {
              var i = new Set();
              n.read(function () {
                var t = require("Lexical").$getSelection();
                if (require("Lexical").$isNodeSelection(t))
                  for (var _e31 of t.getNodes())
                    s.has(_e31.getType()) && i.add(_e31.getKey());
              });
              for (var _ref20 of r) {
                var _e32 = _ref20[0];
                var _t16 = _ref20[1];
                i.has(_e32) || (_t16.removeAttribute(o), r["delete"](_e32));
              }
              for (var _e33 of i) {
                var _n12 = t.getElementByKey(_e33);
                null !== _n12 &&
                  (_n12.setAttribute(o, "true"), r.set(_e33, _n12));
              }
            };
          a(t.getEditorState());
          var c = t.registerUpdateListener(function (_ref21) {
            var e = _ref21.editorState;
            return a(e);
          });
          return function () {
            c();
            for (var _e34 of r.values()) _e34.removeAttribute(o);
            r.clear();
          };
        },
      });
    function we(t) {
      require("Lexical").$isElementNode(t) &&
        t.isInline() &&
        t.isEmpty() &&
        t.remove();
    }
    var Ae = require("Lexical").defineExtension({
        build: function build(e, t, n) {
          return O(t);
        },
        config: require("Lexical").safeCast({ disabled: !1 }),
        name: "@lexical/NormalizeInlineElements",
        register: function register(t, n, i) {
          var o = i.getOutput();
          return $(function () {
            if (!o.disabled.value) {
              var _n13 = [];
              var _loop2 = function _loop2() {
                var i = _ref23.klass;
                var o = _ref23.transforms;
                i.prototype instanceof require("Lexical").ElementNode &&
                  i.prototype.isInline !==
                    require("Lexical").ElementNode.prototype.isInline &&
                  (o.add(we),
                  _n13.push(function () {
                    return o["delete"](we);
                  }));
              };
              for (var _ref23 of t._nodes.values()) {
                _loop2();
              }
              return function () {
                return _n13.forEach(function (e) {
                  return e();
                });
              };
            }
          });
        },
      }),
      Fe = new Set([
        require("Lexical").SKIP_SELECTION_FOCUS_TAG,
        require("Lexical").SKIP_SCROLL_INTO_VIEW_TAG,
      ]);
    var Pe = require("Lexical").defineExtension({
      build: function build(e, t, n) {
        return O(t);
      },
      config: require("Lexical").safeCast({
        $fixFocusOverselection: function $fixFocusOverselection() {
          var t = require("Lexical").$getSelection();
          if (require("Lexical").$isRangeSelection(t) && !t.isCollapsed()) {
            var _n14 = require("Lexical").$getCaretRangeInDirection(
              require("Lexical").$caretRangeFromSelection(t),
              "next",
            );
            var _i4 = _n14.focus;
            for (
              require("Lexical").$isTextPointCaret(_i4) &&
                _n14.anchor.origin !== _i4.origin &&
                0 === _i4.offset &&
                (_i4 = require("Lexical").$rewindSiblingCaret(
                  _i4.getSiblingCaret(),
                )),
                require("Lexical").$isSiblingCaret(_i4) &&
                  _n14.anchor.origin !== _i4.origin &&
                  require("Lexical").$isLineBreakNode(_i4.origin) &&
                  (_i4 = require("Lexical").$rewindSiblingCaret(_i4));
              require("Lexical").$isChildCaret(_i4) &&
              _n14.anchor.origin !== _i4.origin;
            )
              _i4 = require("Lexical").$rewindSiblingCaret(
                require("Lexical").$getSiblingCaret(_i4.origin, "next"),
              );
            if (
              (require("Lexical").$isSiblingCaret(_i4) &&
                require("Lexical").$isElementNode(_i4.origin) &&
                (_i4 = require("Lexical")
                  .$normalizeCaret(
                    require("Lexical").$getChildCaret(_i4.origin, "previous"),
                  )
                  .getFlipped()),
              (_i4 = require("Lexical").$normalizeCaret(_i4)),
              !_i4.isSamePointCaret(_n14.focus))
            ) {
              var _t17 = require("Lexical").$setSelectionFromCaretRange(
                  require("Lexical").$getCaretRange(_n14.anchor, _i4),
                ),
                _o7 = require("Lexical").$getEditor().getRootElement(),
                _s5 =
                  _o7 &&
                  require("Lexical").getDOMSelection(
                    _o7.ownerDocument.defaultView,
                  );
              _s5 &&
                require("Lexical").$updateDOMSelection(
                  require("Lexical").$getPreviousSelection(),
                  _t17,
                  require("Lexical").$getEditor(),
                  _s5,
                  Fe,
                  _o7,
                );
            }
          }
        },
        dateNow: Date.now,
        disabled: !1,
        thresholdMsec: 100,
      }),
      name: "@lexical/NormalizeTripleClickSelection",
      register: function register(t, n, i) {
        return $(function () {
          var n = i.getOutput();
          if (!n.disabled.value)
            return t.registerRootListener(function (i) {
              if (!i) return;
              var o = 0;
              var s = function s(e) {
                if (e ? 3 === e.detail : o > 0) {
                  var _t18 = n.dateNow.peek()();
                  o =
                    (e && "mousedown" === e.type) ||
                    _t18 - o <= n.thresholdMsec.peek()
                      ? _t18
                      : 0;
                }
                return o;
              };
              return require("Lexical").mergeRegister(
                t.registerCommand(
                  require("Lexical").SELECTION_CHANGE_COMMAND,
                  function () {
                    return (
                      s(null) && ((o = 0), n.$fixFocusOverselection.peek()()),
                      !1
                    );
                  },
                  require("Lexical").COMMAND_PRIORITY_BEFORE_CRITICAL,
                ),
                require("Lexical").registerEventListeners(
                  i,
                  { mousedown: s, mouseup: s },
                  !0,
                ),
              );
            });
        });
      },
    });
    function Le(t) {
      var n = t.target;
      require("Lexical").isExactShortcutMatch(t, "a", {
        ctrlKey: !require("Lexical").IS_APPLE,
        metaKey: require("Lexical").IS_APPLE,
      }) &&
        require("Lexical").isHTMLElement(n) &&
        ("INPUT" === n.tagName || "TEXTAREA" === n.tagName) &&
        n.addEventListener(
          "keydown",
          require("Lexical").stopLexicalPropagation,
          { once: !0 },
        );
    }
    var ke = require("Lexical").defineExtension({
        build: function build(e, t, n) {
          return O(t);
        },
        config: require("Lexical").safeCast({ disabled: !1 }),
        name: "@lexical/extension/PreventSelectAll",
        register: function register(t, n, i) {
          var o = i.getOutput();
          return $(function () {
            if (!o.disabled.value)
              return t.registerRootListener(function (t) {
                if (t)
                  return require("Lexical").registerEventListener(
                    t,
                    "keydown",
                    Le,
                    !0,
                  );
              });
          });
        },
      }),
      Ke = require("Lexical").defineExtension({
        build: function build(e) {
          return W(
            function () {
              return e.getRootElement();
            },
            function (t) {
              return e.registerRootListener(function (e) {
                t.value = e;
              });
            },
          );
        },
        name: "@lexical/extension/RootElement",
      });
    var Be = require("Lexical").defineExtension({
        build: function build(e, t, n) {
          return O(t);
        },
        config: require("Lexical").safeCast({
          cascadeSelection: !1,
          disabled: !1,
        }),
        dependencies: [ke],
        name: "@lexical/extension/SelectBlock",
        register: function register(n, i, o) {
          var s = o.getOutput(),
            r = o.getDependency(ke).output;
          return require("Lexical").mergeRegister(
            $(function () {
              r.disabled.value = s.disabled.value;
            }),
            $(function () {
              if (!s.disabled.value)
                return n.registerCommand(
                  require("Lexical").SELECT_ALL_COMMAND,
                  function (i, o) {
                    if (o !== n) {
                      if (!s.cascadeSelection.peek()) return !1;
                      return (
                        !!o.read("pending", function () {
                          var n = require("Lexical").$getSelection();
                          return (
                            require("Lexical").$isRangeSelection(n) &&
                            require("LexicalUtils").$isBlockFullySelected(
                              require("Lexical").$getRoot(),
                              n,
                            )
                          );
                        }) && (require("Lexical").$selectAll(), !0)
                      );
                    }
                    var r = require("Lexical").$getSelection();
                    if (require("Lexical").$isNodeSelection(r)) {
                      var _t19 = r.getNodes(),
                        _n15 = _t19[0];
                      if (!_n15) return !1;
                      var _i5 = _n15.getTopLevelElement();
                      return (
                        !_i5 ||
                        require("Lexical").$isRootNode(_i5) ||
                        _i5.is(_n15) ||
                        (_t19.length > 1 &&
                          ((a = _i5),
                          !_t19.every(function (e) {
                            return a.is(e.getTopLevelElement());
                          })))
                          ? require("Lexical").$selectAll()
                          : require("Lexical").$isElementNode(_i5) &&
                            _i5.select(0, _i5.getChildrenSize()),
                        !0
                      );
                    }
                    var a;
                    if (!require("Lexical").$isRangeSelection(r)) return !1;
                    var c = r.anchor.getNode(),
                      l = c.getTopLevelElement();
                    if (
                      l &&
                      l.is(r.focus.getNode().getTopLevelElement()) &&
                      !require("LexicalUtils").$isBlockFullySelected(l, r)
                    )
                      return (l.select(0, l.getChildrenSize()), !0);
                    var d = require("Lexical").$getSlotFrame(c);
                    for (; null !== d; ) {
                      if (
                        require("Lexical").$isElementNode(d) &&
                        !require("LexicalUtils").$isBlockFullySelected(d, r)
                      )
                        return (d.select(0, d.getChildrenSize()), !0);
                      var _n16 = require("Lexical").$getSlotHost(d);
                      d =
                        null === _n16
                          ? null
                          : require("Lexical").$getSlotFrame(_n16);
                    }
                    return (
                      require("LexicalUtils").$isBlockFullySelected(
                        require("Lexical").$getRoot(),
                        r,
                      ) || require("Lexical").$selectAll(),
                      !0
                    );
                  },
                  require("Lexical").COMMAND_PRIORITY_LOW,
                );
            }),
          );
        },
      }),
      ze = require("Lexical").defineExtension({
        build: function build(e, t, n) {
          return O(t);
        },
        config: require("Lexical").safeCast({
          disabled: !1,
          onReposition: void 0,
        }),
        name: "@lexical/utils/SelectionAlwaysOnDisplay",
        register: function register(e, n, i) {
          var o = i.getOutput();
          return $(function () {
            if (!o.disabled.value)
              return require("LexicalUtils").selectionAlwaysOnDisplay(
                e,
                o.onReposition.value,
              );
          });
        },
      });
    function je(e) {
      return e.canIndent();
    }
    function Ue(n, i, o) {
      if (o === void 0) {
        o = je;
      }
      return require("Lexical").mergeRegister(
        n.registerCommand(
          require("Lexical").KEY_TAB_COMMAND,
          function (i) {
            var o = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(o)) return !1;
            i.preventDefault();
            var s = (function (n) {
              if (
                n.getNodes().filter(function (t) {
                  return (
                    require("Lexical").$isBlockElementNode(t) && t.canIndent()
                  );
                }).length > 0
              )
                return !0;
              var i = n.anchor,
                o = n.focus,
                s = o.isBefore(i) ? o : i,
                r = s.getNode(),
                a =
                  require("LexicalUtils").$getNearestBlockElementAncestorOrThrow(
                    r,
                  );
              if (a.canIndent()) {
                var _t20 = a.getKey();
                var _n17 = require("Lexical").$createRangeSelection();
                if (
                  (_n17.anchor.set(_t20, 0, "element"),
                  _n17.focus.set(_t20, 0, "element"),
                  (_n17 =
                    require("Lexical").$normalizeSelection__EXPERIMENTAL(_n17)),
                  _n17.anchor.is(s))
                )
                  return !0;
              }
              return !1;
            })(o)
              ? i.shiftKey
                ? require("Lexical").OUTDENT_CONTENT_COMMAND
                : require("Lexical").INDENT_CONTENT_COMMAND
              : require("Lexical").INSERT_TAB_COMMAND;
            return n.dispatchCommand(s, void 0);
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        n.registerCommand(
          require("Lexical").INDENT_CONTENT_COMMAND,
          function () {
            var n = "number" == typeof i ? i : i ? i.peek() : null,
              s = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(s)) return !1;
            var r = "function" == typeof o ? o : o.peek();
            return require("LexicalUtils").$handleIndentAndOutdent(
              function (e) {
                if (r(e)) {
                  var _t21 = e.getIndent() + 1;
                  (!n || _t21 < n) && e.setIndent(_t21);
                }
              },
            );
          },
          require("Lexical").COMMAND_PRIORITY_CRITICAL,
        ),
      );
    }
    var We = require("Lexical").defineExtension({
        build: function build(e, t, n) {
          return O(t);
        },
        config: require("Lexical").safeCast({
          $canIndent: je,
          disabled: !1,
          maxIndent: null,
        }),
        name: "@lexical/extension/TabIndentation",
        register: function register(e, t, n) {
          var _n$getOutput2 = n.getOutput(),
            i = _n$getOutput2.disabled,
            o = _n$getOutput2.maxIndent,
            s = _n$getOutput2.$canIndent;
          return $(function () {
            if (!i.value) return Ue(e, o, s);
          });
        },
      }),
      Ye = require("Lexical").defineExtension({
        build: function build(e) {
          return W(
            function () {
              return e.isEditable();
            },
            function (t) {
              return e.registerEditableListener(function (e) {
                t.value = e;
              });
            },
          );
        },
        name: "@lexical/extension/WatchEditable",
      });
    ((exports.configExtension = require("Lexical").configExtension),
      (exports.declarePeerDependency =
        require("Lexical").declarePeerDependency),
      (exports.defineExtension = require("Lexical").defineExtension),
      (exports.safeCast = require("Lexical").safeCast),
      (exports.shallowMergeConfig = require("Lexical").shallowMergeConfig),
      (exports.$applyFormatToDom = B),
      (exports.$createHorizontalRuleNode = Oe),
      (exports.$defaultShouldInsertAfter = M),
      (exports.$getExtensionDependency = ye),
      (exports.$getExtensionOutput = function (e) {
        return ye(e).output;
      }),
      (exports.$getPeerDependency = function (t) {
        return ve(require("Lexical").$getEditor(), t);
      }),
      (exports.$isDecoratorTextNode = function (e) {
        return e instanceof _k;
      }),
      (exports.$isHorizontalRuleNode = Te),
      (exports.AutoFocusExtension = T),
      (exports.ClearEditorExtension = _),
      (exports.ClickAfterLastBlockExtension = A),
      (exports.DecoratorTextExtension = U),
      (exports.DecoratorTextNode = _k),
      (exports.EditorStateExtension = Y),
      (exports.HorizontalRuleExtension = De),
      (exports.HorizontalRuleNode = _Re),
      (exports.IMEExtension = Ie),
      (exports.INSERT_HORIZONTAL_RULE_COMMAND = Ce),
      (exports.InitialStateExtension = fe),
      (exports.LexicalBuilder = _xe),
      (exports.NestedEditorExtension = _e),
      (exports.NodeSelectionDataSelectedExtension = Me),
      (exports.NodeSelectionExtension = be),
      (exports.NormalizeInlineElementsExtension = Ae),
      (exports.NormalizeTripleClickSelectionExtension = Pe),
      (exports.PreventSelectAllExtension = ke),
      (exports.RootElementExtension = Ke),
      (exports.SelectBlockExtension = Be),
      (exports.SelectionAlwaysOnDisplayExtension = ze),
      (exports.TabIndentationExtension = We),
      (exports.WatchEditableExtension = Ye),
      (exports.applyFormatFromStyle = function (e, t, n) {
        var i = t.fontWeight,
          o = t.textDecoration.split(" "),
          s = "700" === i || "bold" === i,
          r = o.includes("line-through"),
          a = "italic" === t.fontStyle,
          c = o.includes("underline"),
          l = t.verticalAlign;
        return (
          s && !e.hasFormat("bold") && e.toggleFormat("bold"),
          r && !e.hasFormat("strikethrough") && e.toggleFormat("strikethrough"),
          a && !e.hasFormat("italic") && e.toggleFormat("italic"),
          c && !e.hasFormat("underline") && e.toggleFormat("underline"),
          "sub" !== l ||
            e.hasFormat("subscript") ||
            e.toggleFormat("subscript"),
          "super" !== l ||
            e.hasFormat("superscript") ||
            e.toggleFormat("superscript"),
          n && !e.hasFormat(n) && e.toggleFormat(n),
          e
        );
      }),
      (exports.applyFormatToDom = K),
      (exports.batch = o),
      (exports.buildEditorFromExtensions = function () {
        for (
          var _len2 = arguments.length, e = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          e[_key2] = arguments[_key2];
        }
        return _xe.fromExtensions(e).buildEditor();
      }),
      (exports.computed = y),
      (exports.effect = $),
      (exports.getExtensionDependencyFromEditor = Se),
      (exports.getKnownTypesAndNodes = F),
      (exports.getPeerDependencyFromEditor = ve),
      (exports.getPeerDependencyFromEditorOrThrow = function (e, t) {
        var n = ve(e, t);
        return (void 0 === n && H(291, t), n);
      }),
      (exports.namedSignals = O),
      (exports.registerClearEditor = I),
      (exports.registerTabIndentation = Ue),
      (exports.signal = m),
      (exports.untracked = a),
      (exports.watchedSignal = W));
  },
  null,
);
