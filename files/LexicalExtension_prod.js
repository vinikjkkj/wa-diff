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
    function o() {
      if (l > 1) return void l--;
      var e,
        t = !1;
      for (
        !(function () {
          var e = c;
          for (c = void 0; void 0 !== e; )
            (e.S.v === e.v && (e.S.i = e.i), (e = e.o));
        })();
        void 0 !== s;
      ) {
        var _n = s;
        for (s = void 0, d++; void 0 !== _n; ) {
          var _o = _n.u;
          if (((_n.u = void 0), (_n.f &= -3), !(8 & _n.f) && y(_n)))
            try {
              _n.c();
            } catch (n) {
              t || ((e = n), (t = !0));
            }
          _n = _o;
        }
      }
      if (((d = 0), l--, t)) throw e;
    }
    function i(e) {
      if (l > 0) return e();
      ((f = ++u), l++);
      try {
        return e();
      } finally {
        o();
      }
    }
    var r, s;
    function a(e) {
      var t = r;
      r = void 0;
      try {
        return e();
      } finally {
        r = t;
      }
    }
    var c,
      l = 0,
      d = 0,
      u = 0,
      f = 0,
      g = 0;
    function p(e) {
      if (void 0 === r) return;
      var t = e.n;
      return void 0 === t || t.t !== r
        ? ((t = {
            i: 0,
            S: e,
            p: r.s,
            n: void 0,
            t: r,
            e: void 0,
            x: void 0,
            r: t,
          }),
          void 0 !== r.s && (r.s.n = t),
          (r.s = t),
          (e.n = t),
          32 & r.f && e.S(t),
          t)
        : -1 === t.i
          ? ((t.i = 0),
            void 0 !== t.n &&
              ((t.n.p = t.p),
              void 0 !== t.p && (t.p.n = t.n),
              (t.p = r.s),
              (t.n = void 0),
              (r.s.n = t),
              (r.s = t)),
            t)
          : void 0;
    }
    function h(e, t) {
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
      return new h(e, t);
    }
    function y(e) {
      for (var _t = e.s; void 0 !== _t; _t = _t.n)
        if (_t.S.i !== _t.i || !_t.S.h() || _t.S.i !== _t.i) return !0;
      return !1;
    }
    function E(e) {
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
    function x(e) {
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
    function S(e, t) {
      (h.call(this, void 0),
        (this.x = e),
        (this.s = void 0),
        (this.g = g - 1),
        (this.f = 4),
        (this.W = null == t ? void 0 : t.watched),
        (this.Z = null == t ? void 0 : t.unwatched),
        (this.name = null == t ? void 0 : t.name));
    }
    function v(e, t) {
      return new S(e, t);
    }
    function b(e) {
      var t = e.m;
      if (((e.m = void 0), "function" == typeof t)) {
        l++;
        var _n3 = r;
        r = void 0;
        try {
          t();
        } catch (t) {
          throw ((e.f &= -2), (e.f |= 8), N(e), t);
        } finally {
          ((r = _n3), o());
        }
      }
    }
    function N(e) {
      for (var _t3 = e.s; void 0 !== _t3; _t3 = _t3.n) _t3.S.U(_t3);
      ((e.x = void 0), (e.s = void 0), b(e));
    }
    function _(e) {
      if (r !== this) throw new Error("Out-of-order effect");
      (x(this), (r = e), (this.f &= -2), 8 & this.f && N(this), o());
    }
    function R(e, t) {
      ((this.x = e),
        (this.m = void 0),
        (this.s = void 0),
        (this.u = void 0),
        (this.f = 32),
        (this.name = null == t ? void 0 : t.name));
    }
    function O(e, t) {
      var n = new R(e, t);
      try {
        n.c();
      } catch (e) {
        throw (n.d(), e);
      }
      var o = n.d.bind(n);
      return (
        (o[typeof Symbol === "function" ? Symbol.dispose : "@@dispose"] = o),
        o
      );
    }
    function $(e, t) {
      if (t === void 0) {
        t = {};
      }
      var n = {};
      for (var _o2 in e) {
        var _i = t[_o2],
          _r = m(void 0 === _i ? e[_o2] : _i);
        n[_o2] = _r;
      }
      return n;
    }
    ((h.prototype.brand = n),
      (h.prototype.h = function () {
        return !0;
      }),
      (h.prototype.S = function (e) {
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
      (h.prototype.U = function (e) {
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
      (h.prototype.subscribe = function (e) {
        var _this3 = this;
        return O(
          function () {
            var t = _this3.value,
              n = r;
            r = void 0;
            try {
              e(t);
            } finally {
              r = n;
            }
          },
          { name: "sub" },
        );
      }),
      (h.prototype.valueOf = function () {
        return this.value;
      }),
      (h.prototype.toString = function () {
        return this.value + "";
      }),
      (h.prototype.toJSON = function () {
        return this.value;
      }),
      (h.prototype.peek = function () {
        var e = r;
        r = void 0;
        try {
          return this.value;
        } finally {
          r = e;
        }
      }),
      Object.defineProperty(h.prototype, "value", {
        get: function get() {
          var e = p(this);
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
              o();
            }
          }
        },
      }),
      (S.prototype = new h()),
      (S.prototype.h = function () {
        if (((this.f &= -3), 1 & this.f)) return !1;
        if (32 == (36 & this.f)) return !0;
        if (((this.f &= -5), this.g === g)) return !0;
        if (((this.g = g), (this.f |= 1), this.i > 0 && !y(this)))
          return ((this.f &= -2), !0);
        var e = r;
        try {
          (E(this), (r = this));
          var _e4 = this.x();
          (16 & this.f || this.v !== _e4 || 0 === this.i) &&
            ((this.v = _e4), (this.f &= -17), this.i++);
        } catch (e) {
          ((this.v = e), (this.f |= 16), this.i++);
        }
        return ((r = e), x(this), (this.f &= -2), !0);
      }),
      (S.prototype.S = function (e) {
        if (void 0 === this.t) {
          this.f |= 36;
          for (var _e5 = this.s; void 0 !== _e5; _e5 = _e5.n) _e5.S.S(_e5);
        }
        h.prototype.S.call(this, e);
      }),
      (S.prototype.U = function (e) {
        if (
          void 0 !== this.t &&
          (h.prototype.U.call(this, e), void 0 === this.t)
        ) {
          this.f &= -33;
          for (var _e6 = this.s; void 0 !== _e6; _e6 = _e6.n) _e6.S.U(_e6);
        }
      }),
      (S.prototype.N = function () {
        if (!(2 & this.f)) {
          this.f |= 6;
          for (var _e7 = this.t; void 0 !== _e7; _e7 = _e7.x) _e7.t.N();
        }
      }),
      Object.defineProperty(S.prototype, "value", {
        get: function get() {
          if (1 & this.f) throw new Error("Cycle detected");
          var e = p(this);
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
        ((this.f |= 1), (this.f &= -9), b(this), E(this), l++);
        var e = r;
        return ((r = this), _.bind(this, e));
      }),
      (R.prototype.N = function () {
        2 & this.f || ((this.f |= 2), (this.u = s), (s = this));
      }),
      (R.prototype.d = function () {
        ((this.f |= 8), 1 & this.f || N(this));
      }),
      (R.prototype.dispose = function () {
        this.d();
      }));
    var C = {
      build: function build(e, t, n) {
        return $(t);
      },
      config: { defaultSelection: "rootEnd", disabled: !1 },
      name: "@lexical/extension/AutoFocus",
      register: function register(t, n, o) {
        var i = o.getOutput();
        return O(function () {
          return i.disabled.value
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
                  { defaultSelection: i.defaultSelection.peek() },
                );
              });
        });
      },
    };
    function A() {
      var t = require("Lexical").$getRoot(),
        n = require("Lexical").$getSelection(),
        o = require("Lexical").$createParagraphNode();
      (t.clear(),
        t.append(o),
        null !== n && o.select(),
        require("Lexical").$isRangeSelection(n) && (n.format = 0));
    }
    function M(t, n) {
      if (n === void 0) {
        n = A;
      }
      return t.registerCommand(
        require("Lexical").CLEAR_EDITOR_COMMAND,
        function () {
          return (n(), !0);
        },
        require("Lexical").COMMAND_PRIORITY_EDITOR,
      );
    }
    var T = {
      build: function build(e, t, n) {
        return $(t);
      },
      config: { $onClear: A },
      name: "@lexical/extension/ClearEditor",
      register: function register(e, t, n) {
        var _n$getOutput = n.getOutput(),
          o = _n$getOutput.$onClear;
        return O(function () {
          return M(e, o.value);
        });
      },
    };
    function w(t) {
      return (
        !!require("Lexical").$isDecoratorNode(t) ||
        !(!require("Lexical").$isElementNode(t) || !t.isShadowRoot())
      );
    }
    function D(t, n, o, i) {
      return (
        !!t.isEditable() &&
        o.target === n &&
        t.read("latest", function () {
          var n = require("Lexical").$getRoot().getLastChild();
          if (null === n) return !1;
          var r = t.getElementByKey(n.getKey());
          return (
            null !== r &&
            !(o.clientY <= r.getBoundingClientRect().bottom) &&
            i(n)
          );
        })
      );
    }
    var I = {
      build: function build(e, t) {
        return $(t);
      },
      config: { $shouldInsertAfter: w, disabled: !1 },
      name: "@lexical/ClickAfterLastBlock",
      register: function register(t, n, o) {
        return O(function () {
          var n = o.getOutput();
          if (!n.disabled.value)
            return t.registerRootListener(function (o) {
              if (null === o) return;
              return require("Lexical").registerEventListeners(
                o,
                {
                  click: function click(i) {
                    D(t, o, i, n.$shouldInsertAfter.peek()) &&
                      (i.preventDefault(),
                      require("Lexical").stopLexicalPropagation(i),
                      t.update(function () {
                        var t = require("Lexical").$getRoot().getLastChild();
                        if (null === t) return;
                        if (!n.$shouldInsertAfter.peek()(t)) return;
                        var o = require("Lexical").$createParagraphNode();
                        (t.insertAfter(o), o.select());
                      }));
                  },
                  mousedown: function mousedown(e) {
                    D(t, o, e, n.$shouldInsertAfter.peek()) &&
                      e.preventDefault();
                  },
                },
                !0,
              );
            });
        });
      },
    };
    function k(t) {
      var n = new Set(),
        o = new Set();
      for (var _i2 of F(t)) {
        var _t5 = "function" == typeof _i2 ? _i2 : _i2.replace;
        (require("Lexical").getStaticNodeConfig(_t5),
          n.add(_t5.getType()),
          o.add(_t5));
      }
      return { nodes: o, types: n };
    }
    function F(e) {
      return ("function" == typeof e.nodes ? e.nodes() : e.nodes) || [];
    }
    var L = (_require_Lexical = require("Lexical")).createState("format", {
      parse: function parse(e) {
        return "number" == typeof e ? e : 0;
      },
    });
    var _P = (function (_e$DecoratorNode) {
      function P() {
        return _e$DecoratorNode.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(P, _e$DecoratorNode);
      var _proto = P.prototype;
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
          o = require("Lexical").toggleTextFormatType(n, t, null);
        return this.setFormat(o);
      };
      _proto.isInline = function isInline() {
        return !0;
      };
      _proto.createDOM = function createDOM(t, n) {
        return require("Lexical").$getDocument().createElement("span");
      };
      return babelHelpers.createClass(P, [
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
        n = B;
      }
      var o = t;
      for (var _ref2 of Object.entries(n)) {
        var _t6 = _ref2[0];
        var _i3 = _ref2[1];
        e.hasFormat(_i3) && (o = j(o, _t6));
      }
      return o;
    }
    var z = K;
    function j(e, t) {
      var n = e.ownerDocument.createElement(t);
      return (n.appendChild(e), n);
    }
    var B = {
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
      H = {
        name: "@lexical/extension/DecoratorText",
        nodes: function nodes() {
          return [_P];
        },
      };
    function U(e, t) {
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
    var W = {
      build: function build(e) {
        return U(
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
    };
    function Y(e) {
      var n = new URL("https://lexical.dev/docs/error"),
        o = new URLSearchParams();
      o.append("code", e);
      for (
        var _len = arguments.length,
          t = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        t[_key - 1] = arguments[_key];
      }
      for (var _e9 of t) o.append("v", _e9);
      throw (
        (n.search = o.toString()),
        Error(
          "Minified Lexical error #" +
            e +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    function G() {
      var e;
      try {
        e = "0.50.0+prod.cjs";
      } catch (e) {}
      return e != null ? e : '"<unknown>+source"';
    }
    var V = G(),
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
          _o3 = t;
        for (var _e0 in _o3)
          !Z.has(_e0) &&
            Object.prototype.hasOwnProperty.call(_o3, _e0) &&
            (_n5[_e0] = J(_n5[_e0], _o3[_e0]));
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
      oe = 6,
      ie = 7;
    function re(e) {
      return e.id === X;
    }
    function se(e) {
      return e.id === Q;
    }
    function ae(e) {
      return (
        (function (e) {
          return e.id === q;
        })(e) || Y(305, String(e.id), String(q)),
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
        se(t) || Y(306, String(t.id));
        var n = {
            getDependency: this.getInitDependency.bind(this),
            getDirectDependentNames: this.getDirectDependentNames.bind(this),
            getPeer: this.getInitPeer.bind(this),
            getPeerNameSet: this.getPeerNameSet.bind(this),
          },
          o = babelHelpers["extends"]({}, n, {
            getDependency: this.getDependency.bind(this),
            getInitResult: this.getInitResult.bind(this),
            getPeer: this.getPeer.bind(this),
          }),
          i = (function (e, t, n) {
            return Object.assign(e, { config: t, id: ee, registerState: n });
          })(t, this.mergeConfigs(), n);
        var r;
        ((this.state = i),
          this.extension.init && (r = this.extension.init(e, i.config, n)),
          (this.state = (function (e, t, n) {
            return Object.assign(e, {
              id: te,
              initResult: t,
              registerState: n,
            });
          })(i, r, o)));
      };
      _proto2.build = function build(e) {
        var t = this.state;
        var n;
        (t.id !== te && Y(307, String(t.id), String(ne)),
          this.extension.build &&
            (n = this.extension.build(e, t.config, t.registerState)));
        var o = babelHelpers["extends"]({}, t.registerState, {
          getOutput: function getOutput() {
            return n;
          },
          getSignal: this.getSignal.bind(this),
        });
        this.state = (function (e, t, n) {
          return Object.assign(e, { id: ne, output: t, registerState: n });
        })(t, n, o);
      };
      _proto2.register = function register(e, t) {
        var _this4 = this;
        this._signal = t;
        var n = this.state;
        n.id !== ne && Y(308, String(n.id), String(ne));
        var o =
          this.extension.register &&
          this.extension.register(e, n.config, n.registerState);
        return (
          (this.state = (function (e) {
            return Object.assign(e, { id: oe });
          })(n)),
          function () {
            var e = _this4.state;
            (e.id !== ie && Y(309, String(n.id), String(ie)),
              (_this4.state = (function (e) {
                return Object.assign(e, { id: ne });
              })(e)),
              o && o());
          }
        );
      };
      _proto2.afterRegistration = function afterRegistration(e) {
        var t = this.state;
        var n;
        return (
          t.id !== oe && Y(310, String(t.id), String(oe)),
          this.extension.afterRegistration &&
            (n = this.extension.afterRegistration(
              e,
              t.config,
              t.registerState,
            )),
          (this.state = (function (e) {
            return Object.assign(e, { id: ie });
          })(t)),
          n
        );
      };
      _proto2.getSignal = function getSignal() {
        return (void 0 === this._signal && Y(311), this._signal);
      };
      _proto2.getInitResult = function getInitResult() {
        void 0 === this.extension.init && Y(312, this.extension.name);
        var e = this.state;
        return (
          (function (e) {
            return e.id >= te;
          })(e) || Y(313, String(e.id), String(te)),
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
            })(e) || Y(314, String(e.id), String(ee)),
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
          void 0 === t && Y(315, this.extension.name, e.name),
          t.getExtensionInitDependency()
        );
      };
      _proto2.getDependency = function getDependency(e) {
        var t = this.builder.getExtensionRep(e);
        return (
          void 0 === t && Y(315, this.extension.name, e.name),
          t.getExtensionDependency()
        );
      };
      _proto2.getState = function getState() {
        var e = this.state;
        return (
          (function (e) {
            return e.id >= ie;
          })(e) || Y(316, String(e.id), String(ie)),
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
          })(_e10) || Y(317, this.extension.name),
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
    var de = { tag: _require_Lexical.HISTORY_MERGE_TAG };
    function ue() {
      var t = require("Lexical").$getRoot();
      t.isEmpty() && t.append(require("Lexical").$createParagraphNode());
    }
    var fe = {
        config: { setOptions: de, updateOptions: de },
        init: function init(_ref4) {
          var _ref4$$initialEditorS = _ref4.$initialEditorState,
            e = _ref4$$initialEditorS === void 0 ? ue : _ref4$$initialEditorS;
          return { $initialEditorState: e, initialized: !1 };
        },
        afterRegistration: function afterRegistration(t, _ref5, i) {
          var n = _ref5.updateOptions,
            o = _ref5.setOptions;
          var r = i.getInitResult();
          if (!r.initialized) {
            r.initialized = !0;
            var _i4 = r.$initialEditorState;
            if (require("Lexical").$isEditorState(_i4))
              t.setEditorState(_i4, o);
            else if ("function" == typeof _i4)
              t.update(function () {
                _i4(t);
              }, n);
            else if (
              _i4 &&
              ("string" == typeof _i4 || "object" == typeof _i4)
            ) {
              var _e11 = t.parseEditorState(_i4);
              t.setEditorState(_e11, o);
            }
          }
          return function () {};
        },
        name: "@lexical/extension/InitialState",
        nodes: [
          _require_Lexical.RootNode,
          _require_Lexical.TextNode,
          _require_Lexical.LineBreakNode,
          _require_Lexical.TabNode,
          _require_Lexical.ParagraphNode,
        ],
      },
      ge = Symbol["for"]("@lexical/extension/LexicalBuilder");
    function pe() {}
    function he(e) {
      throw e;
    }
    function me(e) {
      return Array.isArray(e) ? e : [e];
    }
    var ye = V;
    var _Ee = (function () {
      function Ee(e) {
        ((this.outgoingConfigEdges = new Map()),
          (this.incomingEdges = new Map()),
          (this.extensionNameMap = new Map()),
          (this.conflicts = new Map()),
          (this.PACKAGE_VERSION = ye),
          (this.roots = e));
        for (var _t7 of e) this.addExtension(_t7);
      }
      Ee.fromExtensions = function fromExtensions(e) {
        var t = [me(fe)];
        for (var _n6 of e) t.push(me(_n6));
        return new Ee(t);
      };
      Ee.maybeFromEditor = function maybeFromEditor(e) {
        var t = e[ge];
        return (
          t &&
            (t.PACKAGE_VERSION !== ye && Y(292, t.PACKAGE_VERSION, ye),
            t instanceof Ee || Y(293)),
          t
        );
      };
      Ee.fromEditor = function fromEditor(e) {
        var t = Ee.maybeFromEditor(e);
        return (void 0 === t && Y(294), t);
      };
      var _proto3 = Ee.prototype;
      _proto3.constructEditor = function constructEditor() {
        var _Object$assign;
        var _this$buildCreateEdit = this.buildCreateEditorArgs(),
          t = _this$buildCreateEdit.$initialEditorState,
          n = _this$buildCreateEdit.onError,
          o = _this$buildCreateEdit.onWarn,
          i = babelHelpers.objectWithoutPropertiesLoose(
            _this$buildCreateEdit,
            _excluded,
          ),
          r = Object.assign(
            require("Lexical").createEditor(
              babelHelpers["extends"](
                {},
                i,
                n
                  ? {
                      onError: function onError(e) {
                        n(e, r);
                      },
                    }
                  : {},
                o
                  ? {
                      onWarn: function onWarn(e) {
                        o(e, r);
                      },
                    }
                  : {},
              ),
            ),
            ((_Object$assign = {}),
            (_Object$assign[ge] = this),
            _Object$assign),
          );
        for (var _e12 of this.sortedExtensionReps()) _e12.build(r);
        return r;
      };
      _proto3.buildEditor = function buildEditor() {
        var _Object$assign2;
        var t = pe;
        function n() {
          try {
            t();
          } finally {
            t = pe;
          }
        }
        var o = Object.assign(
          this.constructEditor(),
          ((_Object$assign2 = { dispose: n }),
          (_Object$assign2[
            typeof Symbol === "function" ? Symbol.dispose : "@@dispose"
          ] = n),
          _Object$assign2),
        );
        return (
          (t = require("Lexical").mergeRegister(
            this.registerEditor(o),
            function () {
              return o.setRootElement(null);
            },
          )),
          o
        );
      };
      _proto3.hasExtensionByName = function hasExtensionByName(e) {
        return this.extensionNameMap.has(e);
      };
      _proto3.getExtensionRep = function getExtensionRep(e) {
        var t = this.extensionNameMap.get(e.name);
        if (t) return (t.extension !== e && Y(295, e.name), t);
      };
      _proto3.addEdge = function addEdge(e, t, n) {
        var o = this.outgoingConfigEdges.get(e);
        if (o) {
          var _e13 = o.get(t);
          _e13 ? _e13.push.apply(_e13, n) : o.set(t, n);
        } else this.outgoingConfigEdges.set(e, new Map([[t, n]]));
        var i = this.incomingEdges.get(t);
        i ? i.add(e) : this.incomingEdges.set(t, new Set([e]));
      };
      _proto3.addExtension = function addExtension(e) {
        void 0 !== this._sortedExtensionReps && Y(296);
        var t = me(e),
          n = t[0];
        "string" != typeof n.name && Y(297, typeof n.name);
        var o = this.extensionNameMap.get(n.name);
        if ((void 0 !== o && o.extension !== n && Y(298, n.name), !o)) {
          ((o = new _le(this, n)), this.extensionNameMap.set(n.name, o));
          var _e14 = this.conflicts.get(n.name);
          "string" == typeof _e14 && Y(299, n.name, _e14);
          for (var _e15 of n.conflictsWith || [])
            (this.extensionNameMap.has(_e15) && Y(299, n.name, _e15),
              this.conflicts.set(_e15, n.name));
          for (var _e16 of n.dependencies || []) {
            var _t8 = me(_e16);
            (this.addEdge(n.name, _t8[0].name, _t8.slice(1)),
              this.addExtension(_t8));
          }
          for (var _ref7 of n.peerDependencies || []) {
            var _e17 = _ref7[0];
            var _t9 = _ref7[1];
            this.addEdge(n.name, _e17, _t9 ? [_t9] : []);
          }
        }
      };
      _proto3.sortedExtensionReps = function sortedExtensionReps() {
        var _this5 = this;
        if (this._sortedExtensionReps) return this._sortedExtensionReps;
        var e = [],
          _t0 = function t(n, o) {
            var i = n.state;
            if (se(i)) return;
            var r = n.extension.name;
            var s;
            (re(i) || Y(300, r, o || "[unknown]"),
              re((s = i)) || Y(304, String(s.id), String(X)),
              (i = Object.assign(s, { id: q })),
              (n.state = i));
            var a = _this5.outgoingConfigEdges.get(r);
            if (a)
              for (var _e18 of a.keys()) {
                var _n7 = _this5.extensionNameMap.get(_e18);
                _n7 && _t0(_n7, r);
              }
            ((i = ae(i)), (n.state = i), e.push(n));
          };
        for (var _e19 of this.extensionNameMap.values())
          re(_e19.state) && _t0(_e19);
        for (var _t1 of e)
          for (var _ref9 of this.outgoingConfigEdges.get(_t1.extension.name) ||
            []) {
            var _e20 = _ref9[0];
            var _n8 = _ref9[1];
            if (_n8.length > 0) {
              var _t10 = this.extensionNameMap.get(_e20);
              if (_t10) for (var _e21 of _n8) _t10.configs.add(_e21);
            }
          }
        for (var _ref1 of this.roots) {
          var _e22 = _ref1[0];
          var _t11 = babelHelpers.arrayLikeToArray(_ref1).slice(1);
          if (_t11.length > 0) {
            var _n9 = this.extensionNameMap.get(_e22.name);
            void 0 === _n9 && Y(301, _e22.name);
            for (var _e23 of _t11) _n9.configs.add(_e23);
          }
        }
        return ((this._sortedExtensionReps = e), this._sortedExtensionReps);
      };
      _proto3.registerEditor = function registerEditor(t) {
        var n = this.sortedExtensionReps(),
          o = new AbortController(),
          i = [
            function () {
              return o.abort();
            },
          ],
          r = o.signal;
        for (var _e24 of n) {
          var _n0 = _e24.register(t, r);
          _n0 && i.push(_n0);
        }
        for (var _e25 of n) {
          var _n1 = _e25.afterRegistration(t);
          _n1 && i.push(_n1);
        }
        return require("Lexical").mergeRegister.apply(require("Lexical"), i);
      };
      _proto3.buildCreateEditorArgs = function buildCreateEditorArgs() {
        var e = {},
          t = new Set(),
          n = new Map(),
          o = new Map(),
          i = {},
          r = {},
          s = this.sortedExtensionReps();
        for (var _a of s) {
          var _s = _a.extension;
          if (
            (void 0 !== _s.onError && (e.onError = _s.onError),
            void 0 !== _s.onWarn && (e.onWarn = _s.onWarn),
            void 0 !== _s.disableEvents && (e.disableEvents = _s.disableEvents),
            void 0 !== _s.parentEditor && (e.parentEditor = _s.parentEditor),
            void 0 !== _s.editable && (e.editable = _s.editable),
            void 0 !== _s.namespace && (e.namespace = _s.namespace),
            void 0 !== _s.$initialEditorState &&
              (e.$initialEditorState = _s.$initialEditorState),
            _s.nodes)
          )
            for (var _e26 of F(_s)) {
              if ("function" != typeof _e26) {
                var _t12 = n.get(_e26.replace);
                (_t12 &&
                  Y(302, _s.name, _e26.replace.name, _t12.extension.name),
                  n.set(_e26.replace, _a));
              }
              t.add(_e26);
            }
          if (_s.html) {
            if (_s.html["export"])
              for (var _ref11 of _s.html["export"].entries()) {
                var _e27 = _ref11[0];
                var _t13 = _ref11[1];
                o.set(_e27, _t13);
              }
            _s.html["import"] && Object.assign(i, _s.html["import"]);
          }
          _s.theme && J(r, _s.theme);
        }
        (Object.keys(r).length > 0 && (e.theme = r),
          t.size && (e.nodes = [].concat(t)));
        var a = Object.keys(i).length > 0,
          c = o.size > 0;
        (a || c) &&
          ((e.html = {}),
          a && (e.html["import"] = i),
          c && (e.html["export"] = o));
        for (var _t14 of s) _t14.init(e);
        return (e.onError || (e.onError = he), e);
      };
      return Ee;
    })();
    function xe(e, t) {
      var n = _Ee.fromEditor(e).getExtensionRep(t);
      return (void 0 === n && Y(303, t.name), n.getExtensionDependency());
    }
    function Se(e, t) {
      var n = _Ee.maybeFromEditor(e);
      if (!n) return;
      var o = n.extensionNameMap.get(t);
      return o ? o.getExtensionDependency() : void 0;
    }
    function ve(t) {
      return xe(require("Lexical").$getEditor(), t);
    }
    var be = {
      root: {
        children: [],
        direction: null,
        format: "",
        indent: 0,
        type: "root",
        version: 1,
      },
    };
    function Ne(t) {
      var n = t.exportJSON();
      (delete n.children, delete n.$slots);
      var o = {
        json: n,
        key: t.__key,
        next: t.__next,
        parent: t.__parent,
        prev: t.__prev,
      };
      require("Lexical").$isElementNode(t) &&
        ((o.first = t.__first), (o.last = t.__last), (o.size = t.__size));
      var i = t.__slotHost,
        r = t.__slots;
      return (
        null != r && (o.slots = [].concat(r)),
        null != i && (o.slotHost = i),
        o
      );
    }
    function _e(t) {
      var n = new Map(),
        o = [],
        i = t.map(function (t) {
          return t.read(function () {
            var i = [];
            for (var _e28 of t._nodeMap.values()) {
              var _t15 = n.get(_e28);
              (void 0 === _t15 &&
                ((_t15 = o.length), n.set(_e28, _t15), o.push(Ne(_e28))),
                i.push(_t15));
            }
            return {
              nodes: i,
              selection:
                ((r = t._selection),
                require("Lexical").$isRangeSelection(r)
                  ? {
                      anchor: {
                        key: r.anchor.key,
                        offset: r.anchor.offset,
                        type: r.anchor.type,
                      },
                      focus: {
                        key: r.focus.key,
                        offset: r.focus.offset,
                        type: r.focus.type,
                      },
                      format: r.format,
                      style: r.style,
                      type: "range",
                    }
                  : require("Lexical").$isNodeSelection(r)
                    ? { keys: [].concat(r._nodes), type: "node" }
                    : null),
            };
            var r;
          });
        });
      return { nodes: o, states: i };
    }
    function Re(e) {
      return null != e && "object" == typeof e;
    }
    function Oe(e) {
      return null == e || "string" == typeof e;
    }
    function $e(e) {
      if (!Re(e)) return !1;
      var t = e.first,
        n = e.json,
        o = e.key,
        i = e.last,
        r = e.next,
        s = e.parent,
        a = e.prev,
        c = e.size,
        l = e.slotHost,
        d = e.slots;
      return (
        Re(n) &&
        "string" == typeof n.type &&
        "string" == typeof o &&
        Oe(s) &&
        Oe(a) &&
        Oe(r) &&
        Oe(t) &&
        Oe(i) &&
        (void 0 === c || "number" == typeof c) &&
        Oe(l) &&
        (void 0 === d ||
          (Array.isArray(d) &&
            d.every(function (e) {
              return (
                Array.isArray(e) &&
                2 === e.length &&
                "string" == typeof e[0] &&
                "string" == typeof e[1]
              );
            })))
      );
    }
    function Ce(e) {
      return (
        Re(e) &&
        "string" == typeof e.key &&
        "number" == typeof e.offset &&
        ("text" === e.type || "element" === e.type)
      );
    }
    function Ae(e) {
      if (!Re(e)) return !1;
      var t = e.nodes,
        n = e.states;
      return (
        Array.isArray(t) &&
        Array.isArray(n) &&
        t.every($e) &&
        n.every(function (e) {
          return (
            Re(e) &&
            Array.isArray(e.nodes) &&
            e.nodes.every(function (e) {
              return "number" == typeof e && e >= 0 && e < t.length;
            }) &&
            (function (e) {
              return (
                null == e ||
                (!!Re(e) &&
                  ("node" === e.type
                    ? Array.isArray(e.keys) &&
                      e.keys.every(function (e) {
                        return "string" == typeof e;
                      })
                    : "range" === e.type &&
                      Ce(e.anchor) &&
                      Ce(e.focus) &&
                      "number" == typeof e.format &&
                      "string" == typeof e.style))
              );
            })(e.selection)
          );
        })
      );
    }
    function Me(t, n) {
      if ("root" !== t.type) return require("Lexical").$parseSerializedNode(t);
      var o;
      if (
        (n.parseEditorState({ root: t }, function () {
          o = require("Lexical").$getRoot();
        }),
        void 0 === o)
      )
        throw new Error("editorStateFamily: the root version did not parse");
      return o;
    }
    function Te(t, n) {
      var o = [],
        i = new Map();
      var r = !1,
        s = !1;
      var a = n.parseEditorState(be, function () {
        for (var _e29 of t.nodes) {
          var _t16 = null;
          try {
            _t16 = Me(_e29.json, n);
          } catch (e) {
            o.push(null);
            continue;
          }
          var _r2 = i.get(_e29.key);
          (void 0 === _r2 ? i.set(_e29.key, _t16.__key) : (_t16.__key = _r2),
            o.push(_t16));
        }
        var a = function a(e) {
          var _i$get;
          return null === e
            ? null
            : (_i$get = i.get(e)) != null
              ? _i$get
              : null;
        };
        for (var _ref13 of t.nodes.entries()) {
          var _n10 = _ref13[0];
          var _i5 = _ref13[1];
          {
            var _i5$first, _i5$last, _i5$size;
            var _t17 = o[_n10];
            if (null === _t17) continue;
            ((_t17.__parent = a(_i5.parent)),
              (_t17.__prev = a(_i5.prev)),
              (_t17.__next = a(_i5.next)),
              require("Lexical").$isElementNode(_t17) &&
                ((_t17.__first = a(
                  (_i5$first = _i5.first) != null ? _i5$first : null,
                )),
                (_t17.__last = a(
                  (_i5$last = _i5.last) != null ? _i5$last : null,
                )),
                (_t17.__size = (_i5$size = _i5.size) != null ? _i5$size : 0)));
            var _s2 = _t17;
            (void 0 !== _i5.slots &&
              ((r = !0),
              (_s2.__slots = new Map(
                _i5.slots.flatMap(function (_ref14) {
                  var e = _ref14[0],
                    t = _ref14[1];
                  var n = a(t);
                  return null === n ? [] : [[e, n]];
                }),
              ))),
              void 0 !== _i5.slotHost && (_s2.__slotHost = a(_i5.slotHost)));
          }
        }
        s = !0;
      });
      return s
        ? t.states.map(function (t) {
            var n = new Map();
            for (var _e30 of t.nodes) {
              var _t18 = o[_e30];
              if (null == _t18) return null;
              n.set(_t18.__key, _t18);
            }
            if (!n.has("root")) return null;
            var s = a.clone(
              (function (t, n) {
                if (null == t) return null;
                if ("node" === t.type) {
                  var _o4 = require("Lexical").$createNodeSelection();
                  for (var _e31 of t.keys) {
                    var _t19 = n.get(_e31);
                    if (void 0 === _t19) return null;
                    _o4._nodes.add(_t19);
                  }
                  return _o4;
                }
                var o = n.get(t.anchor.key),
                  i = n.get(t.focus.key);
                if (void 0 === o || void 0 === i) return null;
                var r = require("Lexical").$createRangeSelection();
                return (
                  (r.anchor.key = o),
                  (r.anchor.offset = t.anchor.offset),
                  (r.anchor.type = t.anchor.type),
                  (r.focus.key = i),
                  (r.focus.offset = t.focus.offset),
                  (r.focus.type = t.focus.type),
                  (r.format = t.format),
                  (r.style = t.style),
                  r
                );
              })(t.selection, i),
            );
            return ((s._nodeMap = n), (s._slotsUsed = r), (s._parsed = !1), s);
          })
        : t.states.map(function () {
            return null;
          });
    }
    var we = {
        build: function build(e) {
          return U(
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
      },
      De = {
        build: function build(e) {
          return U(
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
      };
    function Ie(e, t) {
      return (function (e, t) {
        var n = "lexicalHMR:" + encodeURIComponent(t);
        return void 0 !== e ? n + ":" + encodeURIComponent(e) : n;
      })("" === t ? void 0 : t, ke(e) ? e._config.namespace : "");
    }
    function ke(e) {
      var t = _Ee.maybeFromEditor(e);
      if (!t) return !1;
      for (var _n11 of t.extensionNameMap.values()) {
        var _t20 = _n11.extension.namespace;
        if (_t20 && _t20 === e._config.namespace) return !0;
      }
      return null !== e._parentEditor && ke(e._parentEditor);
    }
    function Fe(e, t) {
      return e.data[t];
    }
    function Le(e) {
      if (null == e || "object" != typeof e) return !1;
      var t = e,
        n = function n(e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        };
      return (
        n("editable") &&
        n("editorState") &&
        "boolean" == typeof t.editable &&
        (function (e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "function" == typeof e.toJSON &&
            "function" == typeof e.isEmpty
          );
        })(t.editorState)
      );
    }
    var Pe = {
        afterRegistration: function afterRegistration(t, _ref15, i) {
          var n = _ref15.hot,
            o = _ref15.id;
          if (!n) return function () {};
          var r = Ie(t, o),
            s = Se(t, "@lexical/history/History");
          var a = !1;
          var c = Fe(n, r);
          if (Le(c))
            try {
              t.setEditable(c.editable);
              var _n12 =
                "function" == typeof c.serialize ? c.serialize() : null;
              if (
                (function (e) {
                  if (null == e || "object" != typeof e) return !1;
                  var t = e.family,
                    n = e.history;
                  if (!Ae(t)) return !1;
                  if (null == n) return !0;
                  var o = function o(e) {
                      return (
                        "number" == typeof e && e >= 0 && e < t.states.length
                      );
                    },
                    i = n.current,
                    r = n.redoStack,
                    s = n.undoStack;
                  return (
                    (null === i || o(i)) &&
                    Array.isArray(r) &&
                    r.every(o) &&
                    Array.isArray(s) &&
                    s.every(o)
                  );
                })(_n12)
              ) {
                var _o5 = Te(_n12.family, t),
                  _i6 = _o5[0];
                null == _i6 ||
                  _i6.isEmpty() ||
                  ((_i6._parsed = !0),
                  t.setEditorState(_i6, {
                    tag: require("Lexical").HISTORY_MERGE_TAG,
                  }),
                  null != _n12.history &&
                    s &&
                    (s.output.historyState.value = (function (e, t, n) {
                      var o = function o(e) {
                          var o = t[e];
                          return null == o || o.isEmpty()
                            ? null
                            : { editor: n, editorState: o };
                        },
                        i = function i(e) {
                          return e.map(o).filter(function (e) {
                            return null !== e;
                          });
                        },
                        r = null === e.current ? null : o(e.current),
                        s = i(e.undoStack);
                      return {
                        current: r,
                        redoStack: i(e.redoStack),
                        undoStack: s,
                      };
                    })(_n12.history, _o5, t)),
                  (a = !0));
              } else;
            } catch (e) {}
          a && i.getInitResult().restoreCount.value++;
          var l = i.getDependency(W).output,
            d = i.getDependency(De).output,
            u = i.getDependency(we).output;
          var f = null;
          return O(function () {
            var _ref16;
            var e = l.value,
              o = d.value,
              i = null !== u.value,
              a = Fe(n, r);
            if (null !== f && f.editorState === e && f.editable === o)
              return void (Le(a) && a.owner === t && (a.mounted = i));
            f = { editable: o, editorState: e };
            var c = babelHelpers["extends"](
              {},
              (_ref16 = e.isEmpty() && Le(a) ? a : null) != null
                ? _ref16
                : {
                    editorState: e,
                    serialize: function serialize() {
                      return (function (e, t, n) {
                        var o = [t],
                          i = function i(t) {
                            return t.editor === e;
                          },
                          r = function r(e) {
                            return o.push(e.editorState) - 1;
                          },
                          s = function s(e) {
                            return e.filter(i).map(r);
                          },
                          a = n
                            ? {
                                current:
                                  n.current && i(n.current)
                                    ? r(n.current)
                                    : null,
                                redoStack: s(n.redoStack),
                                undoStack: s(n.undoStack),
                              }
                            : null;
                        return { family: _e(o), history: a };
                      })(t, e, s ? s.output.historyState.peek() : null);
                    },
                  },
              { editable: o, mounted: i, owner: t },
            );
            n.data[r] = c;
          });
        },
        build: function build(e, t, n) {
          return n.getInitResult();
        },
        config: { hot: null },
        dependencies: [W, we, De],
        init: function init() {
          return { restoreCount: m(0) };
        },
        name: "@lexical/extension/HMR",
      },
      Ke = new Set(),
      ze = {
        build: function build(t, n, o) {
          var i = o.getDependency(W).output,
            r = m({ watchedNodeKeys: new Map() }),
            s = U(
              function () {},
              function () {
                return O(function () {
                  var t = s.peek(),
                    n = r.value.watchedNodeKeys;
                  var o,
                    a = !1;
                  (i.value.read(function () {
                    if (require("Lexical").$getSelection())
                      for (var _ref18 of n.entries()) {
                        var _i7 = _ref18[0];
                        var _r3 = _ref18[1];
                        {
                          if (0 === _r3.size) {
                            n["delete"](_i7);
                            continue;
                          }
                          var _s3 = require("Lexical").$getNodeByKey(_i7),
                            _c = (_s3 && _s3.isSelected()) || !1;
                          ((a = a || _c !== (!!t && t.has(_i7))),
                            _c && ((o = o || new Set()), o.add(_i7)));
                        }
                      }
                  }),
                    (!a && o && t && o.size === t.size) || (s.value = o));
                });
              },
            );
          return {
            watchNodeKey: function watchNodeKey(e) {
              var t = v(function () {
                  return (s.value || Ke).has(e);
                }),
                _r$peek = r.peek(),
                n = _r$peek.watchedNodeKeys;
              var o = n.get(e);
              var i = void 0 !== o;
              return (
                (o = o || new Set()),
                o.add(t),
                i || (n.set(e, o), (r.value = { watchedNodeKeys: n })),
                t
              );
            },
          };
        },
        dependencies: [W],
        name: "@lexical/extension/NodeSelection",
      },
      je = _require_Lexical.createCommand("INSERT_HORIZONTAL_RULE_COMMAND");
    var _Be = (function (_e$DecoratorNode2) {
      function Be() {
        return _e$DecoratorNode2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Be, _e$DecoratorNode2);
      var _proto4 = Be.prototype;
      _proto4.$config = function $config() {
        return this.config("horizontalrule", {
          importDOM: {
            hr: function hr() {
              return { conversion: He, priority: 0 };
            },
          },
        });
      };
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
      return Be;
    })(_require_Lexical.DecoratorNode);
    function He() {
      return { node: Ue() };
    }
    function Ue() {
      return require("Lexical").$create(_Be);
    }
    function We(e) {
      return e instanceof _Be;
    }
    var Ye = {
        dependencies: [W, ze],
        name: "@lexical/extension/HorizontalRule",
        nodes: function nodes() {
          return [_Be];
        },
        register: function register(n, o, r) {
          var _n$_config$theme$hrSe;
          var s = r.getDependency(ze).output.watchNodeKey,
            a = m({ nodeSelections: new Map() }),
            c =
              (_n$_config$theme$hrSe = n._config.theme.hrSelected) != null
                ? _n$_config$theme$hrSe
                : "selected";
          return require("Lexical").mergeRegister(
            n.registerCommand(
              je,
              function (n) {
                var o = require("Lexical").$getSelection();
                if (!require("Lexical").$isRangeSelection(o)) return !1;
                if (null !== o.focus.getNode()) {
                  var _e32 = Ue();
                  require("LexicalUtils").$insertNodeToNearestRoot(_e32);
                }
                return !0;
              },
              require("Lexical").COMMAND_PRIORITY_EDITOR,
            ),
            n.registerCommand(
              require("Lexical").CLICK_COMMAND,
              function (t) {
                if (require("Lexical").isDOMNode(t.target)) {
                  var _n13 = require("Lexical").$getNodeFromDOMNode(t.target);
                  if (We(_n13))
                    return (
                      (function (t, n) {
                        if (n === void 0) {
                          n = !1;
                        }
                        var o = require("Lexical").$getSelection(),
                          i = t.isSelected(),
                          r = t.getKey();
                        var s;
                        (n && require("Lexical").$isNodeSelection(o)
                          ? (s = o)
                          : ((s = require("Lexical").$createNodeSelection()),
                            require("Lexical").$setSelection(s)),
                          i ? s["delete"](r) : s.add(r));
                      })(_n13, t.shiftKey),
                      !0
                    );
                }
                return !1;
              },
              require("Lexical").COMMAND_PRIORITY_LOW,
            ),
            n.registerMutationListener(_Be, function (e, t) {
              i(function () {
                var t = !1;
                var _a$peek = a.peek(),
                  o = _a$peek.nodeSelections;
                for (var _ref20 of e.entries()) {
                  var _i8 = _ref20[0];
                  var _r4 = _ref20[1];
                  if ("destroyed" === _r4) (o["delete"](_i8), (t = !0));
                  else {
                    var _e33 = o.get(_i8),
                      _r5 = n.getElementByKey(_i8);
                    _e33
                      ? (_e33.domNode.value = _r5)
                      : ((t = !0),
                        o.set(_i8, {
                          domNode: m(_r5),
                          selectedSignal: s(_i8),
                        }));
                  }
                }
                t && (a.value = { nodeSelections: o });
              });
            }),
            O(function () {
              var t = [];
              var _loop = function _loop() {
                var n = _ref22.domNode;
                var o = _ref22.selectedSignal;
                t.push(
                  O(function () {
                    var t = n.value;
                    if (t) {
                      o.value
                        ? require("Lexical").addClassNamesToElement(t, c)
                        : require("Lexical").removeClassNamesFromElement(t, c);
                    }
                  }),
                );
              };
              for (var _ref22 of a.value.nodeSelections.values()) {
                _loop();
              }
              return require("Lexical").mergeRegister.apply(
                require("Lexical"),
                t,
              );
            }),
          );
        },
      },
      Ge = {
        build: function build(e) {
          return { composingTextNode: m(null), compositionKey: m(null) };
        },
        name: "@lexical/extension/IME",
        register: function register(t, n, o) {
          var _o$getOutput = o.getOutput(),
            i = _o$getOutput.compositionKey,
            r = _o$getOutput.composingTextNode,
            s = t.registerCommand(
              require("Lexical").COMPOSITION_START_COMMAND,
              function () {
                var t = require("Lexical").$getSelection();
                return (
                  require("Lexical").$isRangeSelection(t) &&
                    (i.value = t.anchor.key),
                  !1
                );
              },
              require("Lexical").COMMAND_PRIORITY_BEFORE_EDITOR,
            ),
            a = O(function () {
              var n = i.value;
              r.value =
                null !== n
                  ? t.read("latest", function () {
                      var t = require("Lexical").$getNodeByKey(n);
                      return require("Lexical").$isTextNode(t) ? t : null;
                    })
                  : null;
            }),
            c = t.registerUpdateListener(function (_ref23) {
              var t = _ref23.tags,
                n = _ref23.editorState;
              t.has(require("Lexical").COMPOSITION_START_TAG) &&
                n.read(function () {
                  var t = require("Lexical").$getSelection();
                  if (!require("Lexical").$isRangeSelection(t)) return;
                  var n = t.anchor.getNode();
                  require("Lexical").$isTextNode(n) && (r.value = n);
                });
            }),
            l = t.registerRootListener(function (t) {
              if (null === t) return void (i.value = null);
              return require("Lexical").registerEventListener(
                t,
                "compositionend",
                function () {
                  i.value = null;
                },
              );
            });
          return require("Lexical").mergeRegister(s, a, c, l);
        },
      },
      Ve = [
        ["ctrlKey", "Ctrl"],
        ["altKey", "Alt"],
        ["shiftKey", "Shift"],
        ["metaKey", "Meta"],
      ],
      Ze = { " ": "Space" };
    function Je(e, t) {
      return babelHelpers["extends"]({}, e, t);
    }
    var Xe = Je(Ze, {
        Alt: "\u2325",
        ArrowDown: "\u2193",
        ArrowLeft: "\u2190",
        ArrowRight: "\u2192",
        ArrowUp: "\u2191",
        Backspace: "\u232b",
        CapsLock: "\u21ea",
        Ctrl: "\u2303",
        Delete: "\u2326",
        End: "\u2198",
        Enter: "\u21a9",
        Escape: "\u238b",
        Home: "\u2196",
        Meta: "\u2318",
        PageDown: "\u21df",
        PageUp: "\u21de",
        Shift: "\u21e7",
        Tab: "\u21e5",
      }),
      qe = Je(Xe, { Tab: "\u21e4" });
    function Qe(e) {
      return (function (e) {
        return Array.isArray(e);
      })(e)
        ? e
        : e
          ? [e]
          : [];
    }
    var et = {
      build: function build(e, t, n) {
        return $(t);
      },
      config: {
        disabled: !1,
        priority: _require_Lexical.COMMAND_PRIORITY_NORMAL,
        shortcuts: {},
      },
      mergeConfig: function mergeConfig(t, n) {
        var o = require("Lexical").shallowMergeConfig(t, n);
        return (
          (o.shortcuts = (function (e, t) {
            if (!t) return e;
            var n = babelHelpers["extends"]({}, t);
            for (var _ref25 of Object.entries(e)) {
              var _t21 = _ref25[0];
              var _o6 = _ref25[1];
              void 0 === n[_t21] && (n[_t21] = _o6);
            }
            return n;
          })(t.shortcuts, n.shortcuts)),
          o
        );
      },
      name: "@lexical/extension/KeyboardShortcuts",
      register: function register(t, n, o) {
        var _o$getOutput2 = o.getOutput(),
          i = _o$getOutput2.disabled,
          r = _o$getOutput2.priority,
          s = _o$getOutput2.shortcuts;
        return O(function () {
          if (!i.value) {
            var _n14 = [];
            for (var _e34 of Object.values(s.value))
              for (var _t22 of Qe(_e34)) _n14.push(_t22);
            return (function (t, n, o) {
              var i = require("Lexical").compileKeyboardShortcuts(n);
              return t.registerCommand(
                require("Lexical").KEY_DOWN_COMMAND,
                function (n, o) {
                  var r;
                  for (var _s4 of i.matches(n)) {
                    if (t !== o && !_s4.bubbleFromNestedEditors) continue;
                    if (
                      _s4.$disabled &&
                      (void 0 === r && (r = require("Lexical").$getSelection()),
                      _s4.$disabled(r, o))
                    )
                      continue;
                    var _i9 = o.dispatchCommand.bind(o, _s4.command, n);
                    if (
                      _s4.$dispatch
                        ? _s4.$dispatch(_s4.command, n, _i9, o)
                        : _i9()
                    )
                      return !0;
                  }
                  return !1;
                },
                o,
              );
            })(t, _n14, r.value);
          }
        });
      },
    };
    var tt = {
        build: function build(e, t) {
          return $({ inheritEditableFromParent: t.inheritEditableFromParent });
        },
        config: {
          $getParentEditor: function $getParentEditor() {
            var t = require("Lexical").$getEditor();
            return (_Ee.fromEditor(t), t);
          },
          inheritEditableFromParent: !1,
        },
        init: function init(e, t, n) {
          var o = t.$getParentEditor();
          ((e.parentEditor = o), (e.theme = e.theme || o._config.theme));
        },
        name: "@lexical/extension/NestedEditor",
        register: function register(e, t, n) {
          return O(function () {
            var t = e._parentEditor;
            if (t && n.getOutput().inheritEditableFromParent.value)
              return (
                e.setEditable(t.isEditable()),
                t.registerEditableListener(e.setEditable.bind(e))
              );
          });
        },
      },
      nt = {
        config: { attribute: "data-selected", nodes: [] },
        init: function init(t, n) {
          var o = new Set(),
            i = require("Lexical").getRegisteredSubtypeMap(k(t).nodes);
          for (var _e35 of n.nodes) {
            var _t23 = _e35.getType(),
              _n15 = i.get(_t23);
            (void 0 === _n15 && Y(339, _e35.name, _t23), o.add(_t23));
            for (var _e36 of _n15) o.add(_e36);
          }
          return { matchTypes: o };
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
        register: function register(t, n, o) {
          var i = n.attribute,
            _o$getInitResult = o.getInitResult(),
            r = _o$getInitResult.matchTypes,
            s = new Map(),
            a = function a(n) {
              var o = new Set();
              n.read(function () {
                var t = require("Lexical").$getSelection();
                if (require("Lexical").$isNodeSelection(t))
                  for (var _e37 of t.getNodes())
                    r.has(_e37.getType()) && o.add(_e37.getKey());
              });
              for (var _ref27 of s) {
                var _e38 = _ref27[0];
                var _t24 = _ref27[1];
                o.has(_e38) || (_t24.removeAttribute(i), s["delete"](_e38));
              }
              for (var _e39 of o) {
                var _n16 = t.getElementByKey(_e39);
                null !== _n16 &&
                  (_n16.setAttribute(i, "true"), s.set(_e39, _n16));
              }
            };
          a(t.getEditorState());
          var c = t.registerUpdateListener(function (_ref28) {
            var e = _ref28.editorState;
            return a(e);
          });
          return function () {
            c();
            for (var _e40 of s.values()) _e40.removeAttribute(i);
            s.clear();
          };
        },
      };
    function ot(t) {
      require("Lexical").$isElementNode(t) &&
        t.isInline() &&
        t.isEmpty() &&
        t.remove();
    }
    var it = {
        build: function build(e, t, n) {
          return $(t);
        },
        config: { disabled: !1 },
        name: "@lexical/NormalizeInlineElements",
        register: function register(t, n, o) {
          var i = o.getOutput();
          return O(function () {
            if (!i.disabled.value) {
              var _n17 = [];
              var _loop2 = function _loop2() {
                var o = _ref30.klass;
                var i = _ref30.transforms;
                o.prototype instanceof require("Lexical").ElementNode &&
                  o.prototype.isInline !==
                    require("Lexical").ElementNode.prototype.isInline &&
                  (i.add(ot),
                  _n17.push(function () {
                    return i["delete"](ot);
                  }));
              };
              for (var _ref30 of t._nodes.values()) {
                _loop2();
              }
              return function () {
                return _n17.forEach(function (e) {
                  return e();
                });
              };
            }
          });
        },
      },
      rt = new Set([
        _require_Lexical.SKIP_SELECTION_FOCUS_TAG,
        _require_Lexical.SKIP_SCROLL_INTO_VIEW_TAG,
      ]);
    var st = {
      build: function build(e, t, n) {
        return $(t);
      },
      config: {
        $fixFocusOverselection: function $fixFocusOverselection() {
          var t = require("Lexical").$getSelection();
          if (require("Lexical").$isRangeSelection(t) && !t.isCollapsed()) {
            var _n18 = require("Lexical").$getCaretRangeInDirection(
              require("Lexical").$caretRangeFromSelection(t),
              "next",
            );
            var _o7 = _n18.focus;
            for (
              require("Lexical").$isTextPointCaret(_o7) &&
                _n18.anchor.origin !== _o7.origin &&
                0 === _o7.offset &&
                (_o7 = require("Lexical").$rewindSiblingCaret(
                  _o7.getSiblingCaret(),
                )),
                require("Lexical").$isSiblingCaret(_o7) &&
                  _n18.anchor.origin !== _o7.origin &&
                  require("Lexical").$isLineBreakNode(_o7.origin) &&
                  (_o7 = require("Lexical").$rewindSiblingCaret(_o7));
              require("Lexical").$isChildCaret(_o7) &&
              _n18.anchor.origin !== _o7.origin;
            )
              _o7 = require("Lexical").$rewindSiblingCaret(
                require("Lexical").$getSiblingCaret(_o7.origin, "next"),
              );
            if (
              (require("Lexical").$isSiblingCaret(_o7) &&
                require("Lexical").$isElementNode(_o7.origin) &&
                (_o7 = require("Lexical")
                  .$normalizeCaret(
                    require("Lexical").$getChildCaret(_o7.origin, "previous"),
                  )
                  .getFlipped()),
              (_o7 = require("Lexical").$normalizeCaret(_o7)),
              !_o7.isSamePointCaret(_n18.focus))
            ) {
              var _t25 = require("Lexical").$setSelectionFromCaretRange(
                  require("Lexical").$getCaretRange(_n18.anchor, _o7),
                ),
                _i0 = require("Lexical").$getEditor().getRootElement(),
                _r6 =
                  _i0 &&
                  require("Lexical").getDOMSelection(
                    _i0.ownerDocument.defaultView,
                  );
              _r6 &&
                require("Lexical").$updateDOMSelection(
                  require("Lexical").$getPreviousSelection(),
                  _t25,
                  require("Lexical").$getEditor(),
                  _r6,
                  rt,
                  _i0,
                );
            }
          }
        },
        dateNow: function dateNow() {
          return Date.now();
        },
        disabled: !1,
        thresholdMsec: 100,
      },
      name: "@lexical/NormalizeTripleClickSelection",
      register: function register(t, n, o) {
        return O(function () {
          var n = o.getOutput();
          if (!n.disabled.value)
            return t.registerRootListener(function (o) {
              if (!o) return;
              var i = 0;
              var r = function r(e) {
                if (e ? e.detail > 2 : i > 0) {
                  var _t26 = n.dateNow.peek()();
                  i =
                    (e && "mousedown" === e.type) ||
                    _t26 - i <= n.thresholdMsec.peek()
                      ? _t26
                      : 0;
                }
                return i;
              };
              return require("Lexical").mergeRegister(
                t.registerCommand(
                  require("Lexical").SELECTION_CHANGE_COMMAND,
                  function () {
                    return (
                      r(null) && ((i = 0), n.$fixFocusOverselection.peek()()),
                      !1
                    );
                  },
                  require("Lexical").COMMAND_PRIORITY_BEFORE_CRITICAL,
                ),
                require("Lexical").registerEventListeners(
                  o,
                  { mousedown: r, mouseup: r },
                  !0,
                ),
              );
            });
        });
      },
    };
    function at(t) {
      var n = t.target;
      require("Lexical").isExactShortcutMatch(
        t,
        "a",
        require("Lexical").CONTROL_OR_META,
      ) &&
        require("Lexical").isHTMLElement(n) &&
        ("INPUT" === n.tagName || "TEXTAREA" === n.tagName) &&
        n.addEventListener(
          "keydown",
          require("Lexical").stopLexicalPropagation,
          { once: !0 },
        );
    }
    var ct = {
      build: function build(e, t, n) {
        return $(t);
      },
      config: { disabled: !1 },
      name: "@lexical/extension/PreventSelectAll",
      register: function register(t, n, o) {
        var i = o.getOutput();
        return O(function () {
          if (!i.disabled.value)
            return t.registerRootListener(function (t) {
              if (t)
                return require("Lexical").registerEventListener(
                  t,
                  "keydown",
                  at,
                  !0,
                );
            });
        });
      },
    };
    var lt = {
        build: function build(e, t, n) {
          return $(t);
        },
        config: { cascadeSelection: !1, disabled: !1 },
        dependencies: [ct],
        name: "@lexical/extension/SelectBlock",
        register: function register(t, n, o) {
          var i = o.getOutput(),
            r = o.getDependency(ct).output;
          return require("Lexical").mergeRegister(
            O(function () {
              r.disabled.value = i.disabled.value;
            }),
            O(function () {
              if (!i.disabled.value)
                return t.registerCommand(
                  require("Lexical").SELECT_ALL_COMMAND,
                  function (n, o) {
                    if (o !== t) {
                      if (!i.cascadeSelection.peek()) return !1;
                      return (
                        !!o.read("pending", function () {
                          var t = require("Lexical").$getSelection();
                          return (
                            require("Lexical").$isRangeSelection(t) &&
                            require("Lexical").$isBlockFullySelected(
                              require("Lexical").$getRoot(),
                              t,
                            )
                          );
                        }) && (require("Lexical").$selectAll(), !0)
                      );
                    }
                    var r = require("Lexical").$getSelection();
                    if (require("Lexical").$isNodeSelection(r)) {
                      var _t27 = r.getNodes(),
                        _n19 = _t27[0];
                      if (!_n19) return !1;
                      var _o8 = _n19.getTopLevelElement();
                      return (
                        !_o8 ||
                        require("Lexical").$isRootNode(_o8) ||
                        _o8.is(_n19) ||
                        (_t27.length > 1 &&
                          ((s = _o8),
                          !_t27.every(function (e) {
                            return s.is(e.getTopLevelElement());
                          })))
                          ? require("Lexical").$selectAll()
                          : require("Lexical").$isElementNode(_o8) &&
                            _o8.select(0, _o8.getChildrenSize()),
                        !0
                      );
                    }
                    var s;
                    if (!require("Lexical").$isRangeSelection(r)) return !1;
                    var a = r.anchor.getNode(),
                      c = a.getTopLevelElement();
                    if (
                      c &&
                      c.is(r.focus.getNode().getTopLevelElement()) &&
                      !require("Lexical").$isBlockFullySelected(c, r)
                    )
                      return (c.select(0, c.getChildrenSize()), !0);
                    var l = require("Lexical").$getSlotFrame(a);
                    for (; null !== l; ) {
                      if (
                        require("Lexical").$isElementNode(l) &&
                        !require("Lexical").$isBlockFullySelected(l, r)
                      )
                        return (l.select(0, l.getChildrenSize()), !0);
                      var _t28 = require("Lexical").$getSlotHost(l);
                      l =
                        null === _t28
                          ? null
                          : require("Lexical").$getSlotFrame(_t28);
                    }
                    return (
                      require("Lexical").$isBlockFullySelected(
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
      },
      dt = {
        build: function build(e, t, n) {
          return $(t);
        },
        config: { disabled: !1, onReposition: void 0 },
        name: "@lexical/utils/SelectionAlwaysOnDisplay",
        register: function register(e, n, o) {
          var i = o.getOutput();
          return O(function () {
            if (!i.disabled.value)
              return require("LexicalUtils").selectionAlwaysOnDisplay(
                e,
                i.onReposition.value,
              );
          });
        },
      };
    function ut(e) {
      return e.canIndent();
    }
    function ft(n, o, i) {
      if (i === void 0) {
        i = ut;
      }
      return require("Lexical").mergeRegister(
        n.registerCommand(
          require("Lexical").KEY_TAB_COMMAND,
          function (o) {
            var i = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(i)) return !1;
            o.preventDefault();
            var r = (function (n) {
              if (
                n.getNodes().filter(function (t) {
                  return (
                    require("Lexical").$isBlockElementNode(t) && t.canIndent()
                  );
                }).length > 0
              )
                return !0;
              var o = n.anchor,
                i = n.focus,
                r = i.isBefore(o) ? i : o,
                s = r.getNode(),
                a =
                  require("LexicalUtils").$getNearestBlockElementAncestorOrThrow(
                    s,
                  );
              if (a.canIndent()) {
                var _t29 = a.getKey();
                var _n20 = require("Lexical").$createRangeSelection();
                if (
                  (_n20.anchor.set(_t29, 0, "element"),
                  _n20.focus.set(_t29, 0, "element"),
                  (_n20 =
                    require("Lexical").$normalizeSelection__EXPERIMENTAL(_n20)),
                  _n20.anchor.is(r))
                )
                  return !0;
              }
              return !1;
            })(i)
              ? o.shiftKey
                ? require("Lexical").OUTDENT_CONTENT_COMMAND
                : require("Lexical").INDENT_CONTENT_COMMAND
              : require("Lexical").INSERT_TAB_COMMAND;
            return n.dispatchCommand(r);
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        n.registerCommand(
          require("Lexical").INDENT_CONTENT_COMMAND,
          function () {
            var n = "number" == typeof o ? o : o ? o.peek() : null,
              r = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(r)) return !1;
            var s = "function" == typeof i ? i : i.peek();
            return require("LexicalUtils").$handleIndentAndOutdent(
              function (e) {
                if (s(e)) {
                  var _t30 = e.getIndent() + 1;
                  (!n || _t30 < n) && e.setIndent(_t30);
                }
              },
            );
          },
          require("Lexical").COMMAND_PRIORITY_CRITICAL,
        ),
      );
    }
    var gt = {
      build: function build(e, t, n) {
        return $(t);
      },
      config: { $canIndent: ut, disabled: !1, maxIndent: null },
      name: "@lexical/extension/TabIndentation",
      register: function register(e, t, n) {
        var _n$getOutput2 = n.getOutput(),
          o = _n$getOutput2.disabled,
          i = _n$getOutput2.maxIndent,
          r = _n$getOutput2.$canIndent;
        return O(function () {
          if (!o.value) return ft(e, i, r);
        });
      },
    };
    ((exports.CONTROL_OR_ALT = _require_Lexical.CONTROL_OR_ALT),
      (exports.CONTROL_OR_META = _require_Lexical.CONTROL_OR_META),
      (exports.compileKeyboardShortcuts =
        _require_Lexical.compileKeyboardShortcuts),
      (exports.configExtension = _require_Lexical.configExtension),
      (exports.declarePeerDependency = _require_Lexical.declarePeerDependency),
      (exports.defineExtension = _require_Lexical.defineExtension),
      (exports.safeCast = _require_Lexical.safeCast),
      (exports.shallowMergeConfig = _require_Lexical.shallowMergeConfig),
      (exports.$applyFormatToDom = z),
      (exports.$createHorizontalRuleNode = Ue),
      (exports.$defaultShouldInsertAfter = w),
      (exports.$getExtensionDependency = ve),
      (exports.$getExtensionOutput = function (e) {
        return ve(e).output;
      }),
      (exports.$getPeerDependency = function (t) {
        return Se(require("Lexical").$getEditor(), t);
      }),
      (exports.$isDecoratorTextNode = function (e) {
        return e instanceof _P;
      }),
      (exports.$isHorizontalRuleNode = We),
      (exports.AutoFocusExtension = C),
      (exports.ClearEditorExtension = T),
      (exports.ClickAfterLastBlockExtension = I),
      (exports.DecoratorTextExtension = H),
      (exports.DecoratorTextNode = _P),
      (exports.EditorStateExtension = W),
      (exports.HMRExtension = Pe),
      (exports.HorizontalRuleExtension = Ye),
      (exports.HorizontalRuleNode = _Be),
      (exports.IMEExtension = Ge),
      (exports.INSERT_HORIZONTAL_RULE_COMMAND = je),
      (exports.InitialStateExtension = fe),
      (exports.KeyboardShortcutsExtension = et),
      (exports.LexicalBuilder = _Ee),
      (exports.NestedEditorExtension = tt),
      (exports.NodeSelectionDataSelectedExtension = nt),
      (exports.NodeSelectionExtension = ze),
      (exports.NormalizeInlineElementsExtension = it),
      (exports.NormalizeTripleClickSelectionExtension = st),
      (exports.PreventSelectAllExtension = ct),
      (exports.RootElementExtension = we),
      (exports.SelectBlockExtension = lt),
      (exports.SelectionAlwaysOnDisplayExtension = dt),
      (exports.TabIndentationExtension = gt),
      (exports.WatchEditableExtension = De),
      (exports.applyFormatFromStyle = function (e, t, n) {
        var o = t.fontWeight,
          i = t.textDecoration.split(" "),
          r = "700" === o || "bold" === o,
          s = i.includes("line-through"),
          a = "italic" === t.fontStyle,
          c = i.includes("underline"),
          l = t.verticalAlign;
        return (
          r && !e.hasFormat("bold") && e.toggleFormat("bold"),
          s && !e.hasFormat("strikethrough") && e.toggleFormat("strikethrough"),
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
      (exports.batch = i),
      (exports.buildEditorFromExtensions = function () {
        for (
          var _len2 = arguments.length, e = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          e[_key2] = arguments[_key2];
        }
        return _Ee.fromExtensions(e).buildEditor();
      }),
      (exports.computed = v),
      (exports.effect = O),
      (exports.formatKeyboardShortcut = function (t, n) {
        if (n === void 0) {
          n = {};
        }
        var _n21 = n,
          _n21$isApple = _n21.isApple,
          o =
            _n21$isApple === void 0
              ? require("Lexical").IS_APPLE
              : _n21$isApple,
          i = t.unshiftedKey,
          r = t.key,
          s = require("Lexical").keyboardEventMaskForPlatform(
            t.modifiers || {},
            o,
          ),
          a = [],
          c = o ? (!0 === s.shiftKey ? qe : Xe) : Ze;
        for (var _ref32 of Ve) {
          var _e41 = _ref32[0];
          var _t31 = _ref32[1];
          if (!0 === s[_e41]) {
            if (o && "shiftKey" === _e41 && i && 1 === r.length) continue;
            a.push(c[_t31] || _t31);
          }
        }
        return (
          a.push(
            c[r] ||
              (!o && !0 === s.shiftKey && i) ||
              (1 === r.length && r.toUpperCase()) ||
              r,
          ),
          a
        );
      }),
      (exports.getExtensionDependencyFromEditor = xe),
      (exports.getKnownTypesAndNodes = k),
      (exports.getPeerDependencyFromEditor = Se),
      (exports.getPeerDependencyFromEditorOrThrow = function (e, t) {
        var n = Se(e, t);
        return (void 0 === n && Y(291, t), n);
      }),
      (exports.namedSignals = $),
      (exports.registerClearEditor = M),
      (exports.registerTabIndentation = ft),
      (exports.signal = m),
      (exports.untracked = a),
      (exports.watchedSignal = U));
  },
  null,
);
