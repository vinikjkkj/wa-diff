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
    var _excluded = ["$initialEditorState", "onError"];
    var _require_Lexical;
    var n = Symbol["for"]("preact-signals");
    function i() {
      if (d > 1) return void d--;
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
        for (r = void 0, l++; void 0 !== _n; ) {
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
      if (((l = 0), d--, t)) throw e;
    }
    function o(e) {
      if (d > 0) return e();
      ((f = ++u), d++);
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
      d = 0,
      l = 0,
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
        var _e = n.p;
        (-1 === n.i
          ? (n.S.U(n),
            void 0 !== _e && (_e.n = n.n),
            void 0 !== n.n && (n.n.p = _e))
          : (t = n),
          (n.S.n = n.r),
          void 0 !== n.r && (n.r = void 0),
          (n = _e));
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
        d++;
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
    function O(e, t) {
      ((this.x = e),
        (this.m = void 0),
        (this.s = void 0),
        (this.u = void 0),
        (this.f = 32),
        (this.name = null == t ? void 0 : t.name));
    }
    function R(e, t) {
      var n = new O(e, t);
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
    function D(e, t) {
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
        return R(
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
            if (l > 100) throw new Error("Cycle detected");
            (!(function (e) {
              0 !== d &&
                0 === l &&
                e.l !== f &&
                ((e.l = f), (c = { S: e, v: e.v, i: e.i, o: c }));
            })(this),
              (this.v = e),
              this.i++,
              g++,
              d++);
            try {
              for (var _e2 = this.t; void 0 !== _e2; _e2 = _e2.x) _e2.t.N();
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
          var _e3 = this.x();
          (16 & this.f || this.v !== _e3 || 0 === this.i) &&
            ((this.v = _e3), (this.f &= -17), this.i++);
        } catch (e) {
          ((this.v = e), (this.f |= 16), this.i++);
        }
        return ((s = e), S(this), (this.f &= -2), !0);
      }),
      (v.prototype.S = function (e) {
        if (void 0 === this.t) {
          this.f |= 36;
          for (var _e4 = this.s; void 0 !== _e4; _e4 = _e4.n) _e4.S.S(_e4);
        }
        p.prototype.S.call(this, e);
      }),
      (v.prototype.U = function (e) {
        if (
          void 0 !== this.t &&
          (p.prototype.U.call(this, e), void 0 === this.t)
        ) {
          this.f &= -33;
          for (var _e5 = this.s; void 0 !== _e5; _e5 = _e5.n) _e5.S.U(_e5);
        }
      }),
      (v.prototype.N = function () {
        if (!(2 & this.f)) {
          this.f |= 6;
          for (var _e6 = this.t; void 0 !== _e6; _e6 = _e6.x) _e6.t.N();
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
      (O.prototype.c = function () {
        var e = this.S();
        try {
          if (8 & this.f) return;
          if (void 0 === this.x) return;
          var _e7 = this.x();
          "function" == typeof _e7 && (this.m = _e7);
        } finally {
          e();
        }
      }),
      (O.prototype.S = function () {
        if (1 & this.f) throw new Error("Cycle detected");
        ((this.f |= 1), (this.f &= -9), N(this), x(this), d++);
        var e = s;
        return ((s = this), C.bind(this, e));
      }),
      (O.prototype.N = function () {
        2 & this.f || ((this.f |= 2), (this.u = r), (r = this));
      }),
      (O.prototype.d = function () {
        ((this.f |= 8), 1 & this.f || b(this));
      }),
      (O.prototype.dispose = function () {
        this.d();
      }));
    var M = (_require_Lexical = require("Lexical")).defineExtension({
      build: function build(e, t, n) {
        return D(t);
      },
      config: _require_Lexical.safeCast({
        defaultSelection: "rootEnd",
        disabled: !1,
      }),
      name: "@lexical/extension/AutoFocus",
      register: function register(e, t, n) {
        var i = n.getOutput();
        return R(function () {
          return i.disabled.value
            ? void 0
            : e.registerRootListener(function (t) {
                e.focus(
                  function () {
                    var e = document.activeElement;
                    null === t ||
                      (null !== e && t.contains(e)) ||
                      t.focus({ preventScroll: !0 });
                  },
                  { defaultSelection: i.defaultSelection.peek() },
                );
              });
        });
      },
    });
    function _() {
      var t = require("Lexical").$getRoot(),
        n = require("Lexical").$getSelection(),
        i = require("Lexical").$createParagraphNode();
      (t.clear(),
        t.append(i),
        null !== n && i.select(),
        require("Lexical").$isRangeSelection(n) && (n.format = 0));
    }
    function w(t, n) {
      if (n === void 0) {
        n = _;
      }
      return t.registerCommand(
        require("Lexical").CLEAR_EDITOR_COMMAND,
        function (e) {
          return (t.update(n), !0);
        },
        require("Lexical").COMMAND_PRIORITY_EDITOR,
      );
    }
    var $ = _require_Lexical.defineExtension({
      build: function build(e, t, n) {
        return D(t);
      },
      config: _require_Lexical.safeCast({ $onClear: _ }),
      name: "@lexical/extension/ClearEditor",
      register: function register(e, t, n) {
        var _n$getOutput = n.getOutput(),
          i = _n$getOutput.$onClear;
        return R(function () {
          return w(e, i.value);
        });
      },
    });
    function I(e) {
      return ("function" == typeof e.nodes ? e.nodes() : e.nodes) || [];
    }
    var T = _require_Lexical.createState("format", {
      parse: function parse(e) {
        return "number" == typeof e ? e : 0;
      },
    });
    var _A = (function (_e$DecoratorNode) {
      function A() {
        return _e$DecoratorNode.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(A, _e$DecoratorNode);
      var _proto = A.prototype;
      _proto.$config = function $config() {
        return this.config("decorator-text", {
          extends: require("Lexical").DecoratorNode,
          stateConfigs: [{ flat: !0, stateConfig: T }],
        });
      };
      _proto.getFormat = function getFormat() {
        return require("Lexical").$getState(this, T);
      };
      _proto.getFormatFlags = function getFormatFlags(t, n) {
        return require("Lexical").toggleTextFormatType(this.getFormat(), t, n);
      };
      _proto.hasFormat = function hasFormat(t) {
        var n = require("Lexical").TEXT_TYPE_TO_FORMAT[t];
        return 0 !== (this.getFormat() & n);
      };
      _proto.setFormat = function setFormat(t) {
        return require("Lexical").$setState(this, T, t);
      };
      _proto.toggleFormat = function toggleFormat(t) {
        var n = this.getFormat(),
          i = require("Lexical").toggleTextFormatType(n, t, null);
        return this.setFormat(i);
      };
      _proto.isInline = function isInline() {
        return !0;
      };
      _proto.createDOM = function createDOM() {
        return document.createElement("span");
      };
      _proto.updateDOM = function updateDOM() {
        return !1;
      };
      return A;
    })(_require_Lexical.DecoratorNode);
    function F(e) {
      return e instanceof _A;
    }
    function P(e, t) {
      var n = document.createElement(t);
      return (n.appendChild(e), n);
    }
    var L = {
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
      k = _require_Lexical.defineExtension({
        name: "@lexical/extension/DecoratorText",
        nodes: function nodes() {
          return [_A];
        },
        register: function register(t, n, i) {
          return t.registerCommand(
            require("Lexical").FORMAT_TEXT_COMMAND,
            function (t) {
              var n = require("Lexical").$getSelection();
              if (
                require("Lexical").$isNodeSelection(n) ||
                require("Lexical").$isRangeSelection(n)
              )
                for (var _e8 of n.getNodes()) F(_e8) && _e8.toggleFormat(t);
              return !1;
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          );
        },
      });
    function z(e, t) {
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
    var K = _require_Lexical.defineExtension({
      build: function build(e) {
        return z(
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
    function j(e) {
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
    function U(e, t) {
      if (
        e &&
        t &&
        !Array.isArray(t) &&
        "object" == typeof e &&
        "object" == typeof t
      ) {
        var _n5 = e,
          _i3 = t;
        for (var _e0 in _i3) _n5[_e0] = U(_n5[_e0], _i3[_e0]);
        return e;
      }
      return t;
    }
    var B = 0,
      Y = 1,
      G = 2,
      H = 3,
      W = 4,
      V = 5,
      Z = 6,
      J = 7;
    function X(e) {
      return e.id === B;
    }
    function q(e) {
      return e.id === G;
    }
    function Q(e) {
      return (
        (function (e) {
          return e.id === Y;
        })(e) || j(305, String(e.id), String(Y)),
        Object.assign(e, { id: G })
      );
    }
    var ee = new Set();
    var _te = (function () {
      function te(e, t) {
        ((this.builder = e),
          (this.extension = t),
          (this.configs = new Set()),
          (this.state = { id: B }));
      }
      var _proto2 = te.prototype;
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
        q(t) || j(306, String(t.id));
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
            return Object.assign(e, { config: t, id: H, registerState: n });
          })(t, this.mergeConfigs(), n);
        var s;
        ((this.state = o),
          this.extension.init && (s = this.extension.init(e, o.config, n)),
          (this.state = (function (e, t, n) {
            return Object.assign(e, { id: W, initResult: t, registerState: n });
          })(o, s, i)));
      };
      _proto2.build = function build(e) {
        var t = this.state;
        var n;
        (t.id !== W && j(307, String(t.id), String(V)),
          this.extension.build &&
            (n = this.extension.build(e, t.config, t.registerState)));
        var i = babelHelpers["extends"]({}, t.registerState, {
          getOutput: function getOutput() {
            return n;
          },
          getSignal: this.getSignal.bind(this),
        });
        this.state = (function (e, t, n) {
          return Object.assign(e, { id: V, output: t, registerState: n });
        })(t, n, i);
      };
      _proto2.register = function register(e, t) {
        var _this4 = this;
        this._signal = t;
        var n = this.state;
        n.id !== V && j(308, String(n.id), String(V));
        var i =
          this.extension.register &&
          this.extension.register(e, n.config, n.registerState);
        return (
          (this.state = (function (e) {
            return Object.assign(e, { id: Z });
          })(n)),
          function () {
            var e = _this4.state;
            (e.id !== J && j(309, String(n.id), String(J)),
              (_this4.state = (function (e) {
                return Object.assign(e, { id: V });
              })(e)),
              i && i());
          }
        );
      };
      _proto2.afterRegistration = function afterRegistration(e) {
        var t = this.state;
        var n;
        return (
          t.id !== Z && j(310, String(t.id), String(Z)),
          this.extension.afterRegistration &&
            (n = this.extension.afterRegistration(
              e,
              t.config,
              t.registerState,
            )),
          (this.state = (function (e) {
            return Object.assign(e, { id: J });
          })(t)),
          n
        );
      };
      _proto2.getSignal = function getSignal() {
        return (void 0 === this._signal && j(311), this._signal);
      };
      _proto2.getInitResult = function getInitResult() {
        void 0 === this.extension.init && j(312, this.extension.name);
        var e = this.state;
        return (
          (function (e) {
            return e.id >= W;
          })(e) || j(313, String(e.id), String(W)),
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
              return e.id >= H;
            })(e) || j(314, String(e.id), String(H)),
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
          void 0 === t && j(315, this.extension.name, e.name),
          t.getExtensionInitDependency()
        );
      };
      _proto2.getDependency = function getDependency(e) {
        var t = this.builder.getExtensionRep(e);
        return (
          void 0 === t && j(315, this.extension.name, e.name),
          t.getExtensionDependency()
        );
      };
      _proto2.getState = function getState() {
        var e = this.state;
        return (
          (function (e) {
            return e.id >= J;
          })(e) || j(316, String(e.id), String(J)),
          e
        );
      };
      _proto2.getDirectDependentNames = function getDirectDependentNames() {
        return this.builder.incomingEdges.get(this.extension.name) || ee;
      };
      _proto2.getPeerNameSet = function getPeerNameSet() {
        var e = this._peerNameSet;
        return (
          e ||
            ((e = new Set(
              (this.extension.peerDependencies || []).map(function (_ref) {
                var e = _ref[0];
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
            return e.id >= V;
          })(_e10) || j(317, this.extension.name),
            (this._dependency = {
              config: _e10.config,
              init: _e10.initResult,
              output: _e10.output,
            }));
        }
        return this._dependency;
      };
      return te;
    })();
    var ne = { tag: _require_Lexical.HISTORY_MERGE_TAG };
    function ie() {
      var t = require("Lexical").$getRoot();
      t.isEmpty() && t.append(require("Lexical").$createParagraphNode());
    }
    var oe = _require_Lexical.defineExtension({
        config: _require_Lexical.safeCast({
          setOptions: ne,
          updateOptions: ne,
        }),
        init: function init(_ref2) {
          var _ref2$$initialEditorS = _ref2.$initialEditorState,
            e = _ref2$$initialEditorS === void 0 ? ie : _ref2$$initialEditorS;
          return { $initialEditorState: e, initialized: !1 };
        },
        afterRegistration: function afterRegistration(t, _ref3, o) {
          var n = _ref3.updateOptions,
            i = _ref3.setOptions;
          var s = o.getInitResult();
          if (!s.initialized) {
            s.initialized = !0;
            var _o2 = s.$initialEditorState;
            if (require("Lexical").$isEditorState(_o2))
              t.setEditorState(_o2, i);
            else if ("function" == typeof _o2)
              t.update(function () {
                _o2(t);
              }, n);
            else if (
              _o2 &&
              ("string" == typeof _o2 || "object" == typeof _o2)
            ) {
              var _e11 = t.parseEditorState(_o2);
              t.setEditorState(_e11, i);
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
      }),
      se = Symbol["for"]("@lexical/extension/LexicalBuilder");
    function re() {}
    function ae(e) {
      throw e;
    }
    function ce(e) {
      return Array.isArray(e) ? e : [e];
    }
    var de = "0.44.0+prod.cjs";
    var _le = (function () {
      function le(e) {
        ((this.outgoingConfigEdges = new Map()),
          (this.incomingEdges = new Map()),
          (this.extensionNameMap = new Map()),
          (this.conflicts = new Map()),
          (this.PACKAGE_VERSION = de),
          (this.roots = e));
        for (var _t5 of e) this.addExtension(_t5);
      }
      le.fromExtensions = function fromExtensions(e) {
        var t = [ce(oe)];
        for (var _n6 of e) t.push(ce(_n6));
        return new le(t);
      };
      le.maybeFromEditor = function maybeFromEditor(e) {
        var t = e[se];
        return (
          t &&
            (t.PACKAGE_VERSION !== de && j(292, t.PACKAGE_VERSION, de),
            t instanceof le || j(293)),
          t
        );
      };
      le.fromEditor = function fromEditor(e) {
        var t = le.maybeFromEditor(e);
        return (void 0 === t && j(294), t);
      };
      var _proto3 = le.prototype;
      _proto3.constructEditor = function constructEditor() {
        var _Object$assign;
        var _this$buildCreateEdit = this.buildCreateEditorArgs(),
          t = _this$buildCreateEdit.$initialEditorState,
          n = _this$buildCreateEdit.onError,
          i = babelHelpers.objectWithoutPropertiesLoose(
            _this$buildCreateEdit,
            _excluded,
          ),
          o = Object.assign(
            require("Lexical").createEditor(
              babelHelpers["extends"](
                {},
                i,
                n
                  ? {
                      onError: function onError(e) {
                        n(e, o);
                      },
                    }
                  : {},
              ),
            ),
            ((_Object$assign = {}),
            (_Object$assign[se] = this),
            _Object$assign),
          );
        for (var _e12 of this.sortedExtensionReps()) _e12.build(o);
        return o;
      };
      _proto3.buildEditor = function buildEditor() {
        var _Object$assign2;
        var t = re;
        function n() {
          try {
            t();
          } finally {
            t = re;
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
        if (t) return (t.extension !== e && j(295, e.name), t);
      };
      _proto3.addEdge = function addEdge(e, t, n) {
        var i = this.outgoingConfigEdges.get(e);
        i ? i.set(t, n) : this.outgoingConfigEdges.set(e, new Map([[t, n]]));
        var o = this.incomingEdges.get(t);
        o ? o.add(e) : this.incomingEdges.set(t, new Set([e]));
      };
      _proto3.addExtension = function addExtension(e) {
        void 0 !== this._sortedExtensionReps && j(296);
        var t = ce(e),
          n = t[0];
        "string" != typeof n.name && j(297, typeof n.name);
        var i = this.extensionNameMap.get(n.name);
        if ((void 0 !== i && i.extension !== n && j(298, n.name), !i)) {
          ((i = new _te(this, n)), this.extensionNameMap.set(n.name, i));
          var _e13 = this.conflicts.get(n.name);
          "string" == typeof _e13 && j(299, n.name, _e13);
          for (var _e14 of n.conflictsWith || [])
            (this.extensionNameMap.has(_e14) && j(299, n.name, _e14),
              this.conflicts.set(_e14, n.name));
          for (var _e15 of n.dependencies || []) {
            var _t6 = ce(_e15);
            (this.addEdge(n.name, _t6[0].name, _t6.slice(1)),
              this.addExtension(_t6));
          }
          for (var _ref5 of n.peerDependencies || []) {
            var _e16 = _ref5[0];
            var _t7 = _ref5[1];
            this.addEdge(n.name, _e16, _t7 ? [_t7] : []);
          }
        }
      };
      _proto3.sortedExtensionReps = function sortedExtensionReps() {
        var _this5 = this;
        if (this._sortedExtensionReps) return this._sortedExtensionReps;
        var e = [],
          _t8 = function t(n, i) {
            var o = n.state;
            if (q(o)) return;
            var s = n.extension.name;
            var r;
            (X(o) || j(300, s, i || "[unknown]"),
              X((r = o)) || j(304, String(r.id), String(B)),
              (o = Object.assign(r, { id: Y })),
              (n.state = o));
            var a = _this5.outgoingConfigEdges.get(s);
            if (a)
              for (var _e17 of a.keys()) {
                var _n7 = _this5.extensionNameMap.get(_e17);
                _n7 && _t8(_n7, s);
              }
            ((o = Q(o)), (n.state = o), e.push(n));
          };
        for (var _e18 of this.extensionNameMap.values())
          X(_e18.state) && _t8(_e18);
        for (var _t9 of e)
          for (var _ref7 of this.outgoingConfigEdges.get(_t9.extension.name) ||
            []) {
            var _e19 = _ref7[0];
            var _n8 = _ref7[1];
            if (_n8.length > 0) {
              var _t0 = this.extensionNameMap.get(_e19);
              if (_t0) for (var _e20 of _n8) _t0.configs.add(_e20);
            }
          }
        for (var _ref9 of this.roots) {
          var _e21 = _ref9[0];
          var _t1 = babelHelpers.arrayLikeToArray(_ref9).slice(1);
          if (_t1.length > 0) {
            var _n9 = this.extensionNameMap.get(_e21.name);
            void 0 === _n9 && j(301, _e21.name);
            for (var _e22 of _t1) _n9.configs.add(_e22);
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
            void 0 !== _r.disableEvents && (e.disableEvents = _r.disableEvents),
            void 0 !== _r.parentEditor && (e.parentEditor = _r.parentEditor),
            void 0 !== _r.editable && (e.editable = _r.editable),
            void 0 !== _r.namespace && (e.namespace = _r.namespace),
            void 0 !== _r.$initialEditorState &&
              (e.$initialEditorState = _r.$initialEditorState),
            _r.nodes)
          )
            for (var _e25 of I(_r)) {
              if ("function" != typeof _e25) {
                var _t10 = n.get(_e25.replace);
                (_t10 &&
                  j(302, _r.name, _e25.replace.name, _t10.extension.name),
                  n.set(_e25.replace, _a));
              }
              t.add(_e25);
            }
          if (_r.html) {
            if (_r.html["export"])
              for (var _ref1 of _r.html["export"].entries()) {
                var _e26 = _ref1[0];
                var _t11 = _ref1[1];
                i.set(_e26, _t11);
              }
            _r.html["import"] && Object.assign(o, _r.html["import"]);
          }
          _r.theme && U(s, _r.theme);
        }
        (Object.keys(s).length > 0 && (e.theme = s),
          t.size && (e.nodes = [].concat(t)));
        var a = Object.keys(o).length > 0,
          c = i.size > 0;
        (a || c) &&
          ((e.html = {}),
          a && (e.html["import"] = o),
          c && (e.html["export"] = i));
        for (var _t12 of r) _t12.init(e);
        return (e.onError || (e.onError = ae), e);
      };
      return le;
    })();
    function ue(e, t) {
      var n = _le.maybeFromEditor(e);
      if (!n) return;
      var i = n.extensionNameMap.get(t);
      return i ? i.getExtensionDependency() : void 0;
    }
    var fe = new Set(),
      ge = _require_Lexical.defineExtension({
        build: function build(t, n, i) {
          var o = i.getDependency(K).output,
            s = m({ watchedNodeKeys: new Map() }),
            r = z(
              function () {},
              function () {
                return R(function () {
                  var t = r.peek(),
                    n = s.value.watchedNodeKeys;
                  var i,
                    a = !1;
                  (o.value.read(function () {
                    if (require("Lexical").$getSelection())
                      for (var _ref11 of n.entries()) {
                        var _o3 = _ref11[0];
                        var _s2 = _ref11[1];
                        {
                          if (0 === _s2.size) {
                            n["delete"](_o3);
                            continue;
                          }
                          var _r2 = require("Lexical").$getNodeByKey(_o3),
                            _c = (_r2 && _r2.isSelected()) || !1;
                          ((a = a || _c !== (!!t && t.has(_o3))),
                            _c && ((i = i || new Set()), i.add(_o3)));
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
                  return (r.value || fe).has(e);
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
        dependencies: [K],
        name: "@lexical/extension/NodeSelection",
      }),
      he = _require_Lexical.createCommand("INSERT_HORIZONTAL_RULE_COMMAND");
    var _pe = (function (_e$DecoratorNode2) {
      function pe() {
        return _e$DecoratorNode2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(pe, _e$DecoratorNode2);
      pe.getType = function getType() {
        return "horizontalrule";
      };
      pe.clone = function clone(e) {
        return new pe(e.__key);
      };
      pe.importJSON = function importJSON(e) {
        return Ee().updateFromJSON(e);
      };
      pe.importDOM = function importDOM() {
        return {
          hr: function hr() {
            return { conversion: me, priority: 0 };
          },
        };
      };
      var _proto4 = pe.prototype;
      _proto4.exportDOM = function exportDOM() {
        return { element: document.createElement("hr") };
      };
      _proto4.createDOM = function createDOM(t) {
        var n = document.createElement("hr");
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
      return pe;
    })(_require_Lexical.DecoratorNode);
    function me() {
      return { node: Ee() };
    }
    function Ee() {
      return require("Lexical").$create(_pe);
    }
    function xe(e) {
      return e instanceof _pe;
    }
    var Se = _require_Lexical.defineExtension({
      dependencies: [K, ge],
      name: "@lexical/extension/HorizontalRule",
      nodes: function nodes() {
        return [_pe];
      },
      register: function register(n, i, s) {
        var _n$_config$theme$hrSe;
        var r = s.getDependency(ge).output.watchNodeKey,
          a = m({ nodeSelections: new Map() }),
          c =
            (_n$_config$theme$hrSe = n._config.theme.hrSelected) != null
              ? _n$_config$theme$hrSe
              : "selected";
        return require("Lexical").mergeRegister(
          n.registerCommand(
            he,
            function (n) {
              var i = require("Lexical").$getSelection();
              if (!require("Lexical").$isRangeSelection(i)) return !1;
              if (null !== i.focus.getNode()) {
                var _e27 = Ee();
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
                if (xe(_n10))
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
          n.registerMutationListener(_pe, function (e, t) {
            o(function () {
              var t = !1;
              var _a$peek = a.peek(),
                i = _a$peek.nodeSelections;
              for (var _ref13 of e.entries()) {
                var _o4 = _ref13[0];
                var _s3 = _ref13[1];
                if ("destroyed" === _s3) (i["delete"](_o4), (t = !0));
                else {
                  var _e28 = i.get(_o4),
                    _s4 = n.getElementByKey(_o4);
                  _e28
                    ? (_e28.domNode.value = _s4)
                    : ((t = !0),
                      i.set(_o4, { domNode: m(_s4), selectedSignal: r(_o4) }));
                }
              }
              t && (a.value = { nodeSelections: i });
            });
          }),
          R(function () {
            var t = [];
            var _loop = function _loop() {
              var n = _ref15.domNode;
              var i = _ref15.selectedSignal;
              t.push(
                R(function () {
                  var t = n.value;
                  if (t) {
                    i.value
                      ? require("Lexical").addClassNamesToElement(t, c)
                      : require("Lexical").removeClassNamesFromElement(t, c);
                  }
                }),
              );
            };
            for (var _ref15 of a.value.nodeSelections.values()) {
              _loop();
            }
            return require("Lexical").mergeRegister.apply(
              require("Lexical"),
              t,
            );
          }),
        );
      },
    });
    var ve = _require_Lexical.defineExtension({
      build: function build(e, t) {
        return D({ inheritEditableFromParent: t.inheritEditableFromParent });
      },
      config: _require_Lexical.safeCast({
        $getParentEditor: function $getParentEditor() {
          var t = require("Lexical").$getEditor();
          return (_le.fromEditor(t), t);
        },
        inheritEditableFromParent: !1,
      }),
      init: function init(e, t, n) {
        var i = t.$getParentEditor();
        ((e.parentEditor = i), (e.theme = e.theme || i._config.theme));
      },
      name: "@lexical/extension/NestedEditor",
      register: function register(e, t, n) {
        return R(function () {
          var t = e._parentEditor;
          if (t && n.getOutput().inheritEditableFromParent.value)
            return (
              e.setEditable(t.isEditable()),
              t.registerEditableListener(e.setEditable.bind(e))
            );
        });
      },
    });
    function ye(t) {
      require("Lexical").$isElementNode(t) &&
        t.isInline() &&
        t.isEmpty() &&
        t.remove();
    }
    var Ne = _require_Lexical.defineExtension({
        build: function build(e, t, n) {
          return D(t);
        },
        config: _require_Lexical.safeCast({ disabled: !1 }),
        name: "@lexical/NormalizeInlineElements",
        register: function register(t, n, i) {
          var o = i.getOutput();
          return R(function () {
            if (!o.disabled.value) {
              var _n11 = [];
              var _loop2 = function _loop2() {
                var i = _ref17.klass;
                var o = _ref17.transforms;
                i.prototype instanceof require("Lexical").ElementNode &&
                  i.prototype.isInline !==
                    require("Lexical").ElementNode.prototype.isInline &&
                  (o.add(ye),
                  _n11.push(function () {
                    return o["delete"](ye);
                  }));
              };
              for (var _ref17 of t._nodes.values()) {
                _loop2();
              }
              return function () {
                return _n11.forEach(function (e) {
                  return e();
                });
              };
            }
          });
        },
      }),
      be = new Set([
        _require_Lexical.SKIP_SELECTION_FOCUS_TAG,
        _require_Lexical.SKIP_SCROLL_INTO_VIEW_TAG,
      ]);
    var Ce = _require_Lexical.defineExtension({
        build: function build(e, t, n) {
          return D(t);
        },
        config: _require_Lexical.safeCast({
          $fixFocusOverselection: function $fixFocusOverselection() {
            var t = require("Lexical").$getSelection();
            if (require("Lexical").$isRangeSelection(t) && !t.isCollapsed()) {
              var _n12 = require("Lexical").$getCaretRangeInDirection(
                require("Lexical").$caretRangeFromSelection(t),
                "next",
              );
              var _i4 = _n12.focus;
              for (
                require("Lexical").$isTextPointCaret(_i4) &&
                  _n12.anchor.origin !== _i4.origin &&
                  0 === _i4.offset &&
                  (_i4 = require("Lexical").$rewindSiblingCaret(
                    _i4.getSiblingCaret(),
                  )),
                  require("Lexical").$isSiblingCaret(_i4) &&
                    _n12.anchor.origin !== _i4.origin &&
                    require("Lexical").$isLineBreakNode(_i4.origin) &&
                    (_i4 = require("Lexical").$rewindSiblingCaret(_i4));
                require("Lexical").$isChildCaret(_i4) &&
                _n12.anchor.origin !== _i4.origin;
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
                !_i4.isSamePointCaret(_n12.focus))
              ) {
                var _t13 = require("Lexical").$setSelectionFromCaretRange(
                    require("Lexical").$getCaretRange(_n12.anchor, _i4),
                  ),
                  _o5 = require("Lexical").$getEditor().getRootElement(),
                  _s5 =
                    _o5 &&
                    require("Lexical").getDOMSelection(
                      _o5.ownerDocument.defaultView,
                    );
                _s5 &&
                  require("Lexical").$updateDOMSelection(
                    require("Lexical").$getPreviousSelection(),
                    _t13,
                    require("Lexical").$getEditor(),
                    _s5,
                    be,
                    _o5,
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
          return R(function () {
            var n = i.getOutput();
            if (!n.disabled.value)
              return t.registerRootListener(function (i) {
                if (!i) return;
                var o = 0;
                var s = function s(e) {
                  if (e ? 3 === e.detail : o > 0) {
                    var _t14 = n.dateNow.peek()();
                    o =
                      (e && "mousedown" === e.type) ||
                      _t14 - o <= n.thresholdMsec.peek()
                        ? _t14
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
                  (function () {
                    var e = ["mouseup", "mousedown"];
                    return (
                      e.forEach(function (e) {
                        return i.addEventListener(e, s, !0);
                      }),
                      function () {
                        return e.forEach(function (e) {
                          return i.removeEventListener(e, s, !0);
                        });
                      }
                    );
                  })(),
                );
              });
          });
        },
      }),
      Oe = _require_Lexical.defineExtension({
        build: function build(e, t, n) {
          return D(t);
        },
        config: _require_Lexical.safeCast({
          disabled: !1,
          onReposition: void 0,
        }),
        name: "@lexical/utils/SelectionAlwaysOnDisplay",
        register: function register(e, n, i) {
          var o = i.getOutput();
          return R(function () {
            if (!o.disabled.value)
              return require("LexicalUtils").selectionAlwaysOnDisplay(
                e,
                o.onReposition.value,
              );
          });
        },
      });
    function Re(e) {
      return e.canIndent();
    }
    function De(n, i, o) {
      if (o === void 0) {
        o = Re;
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
                var _t15 = a.getKey();
                var _n13 = require("Lexical").$createRangeSelection();
                if (
                  (_n13.anchor.set(_t15, 0, "element"),
                  _n13.focus.set(_t15, 0, "element"),
                  (_n13 =
                    require("Lexical").$normalizeSelection__EXPERIMENTAL(_n13)),
                  _n13.anchor.is(s))
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
                  var _t16 = e.getIndent() + 1;
                  (!n || _t16 < n) && e.setIndent(_t16);
                }
              },
            );
          },
          require("Lexical").COMMAND_PRIORITY_CRITICAL,
        ),
      );
    }
    var Me = _require_Lexical.defineExtension({
      build: function build(e, t, n) {
        return D(t);
      },
      config: _require_Lexical.safeCast({
        $canIndent: Re,
        disabled: !1,
        maxIndent: null,
      }),
      name: "@lexical/extension/TabIndentation",
      register: function register(e, t, n) {
        var _n$getOutput2 = n.getOutput(),
          i = _n$getOutput2.disabled,
          o = _n$getOutput2.maxIndent,
          s = _n$getOutput2.$canIndent;
        return R(function () {
          if (!i.value) return De(e, o, s);
        });
      },
    });
    ((exports.configExtension = _require_Lexical.configExtension),
      (exports.declarePeerDependency = _require_Lexical.declarePeerDependency),
      (exports.defineExtension = _require_Lexical.defineExtension),
      (exports.safeCast = _require_Lexical.safeCast),
      (exports.shallowMergeConfig = _require_Lexical.shallowMergeConfig),
      (exports.$createHorizontalRuleNode = Ee),
      (exports.$isDecoratorTextNode = F),
      (exports.$isHorizontalRuleNode = xe),
      (exports.AutoFocusExtension = M),
      (exports.ClearEditorExtension = $),
      (exports.DecoratorTextExtension = k),
      (exports.DecoratorTextNode = _A),
      (exports.EditorStateExtension = K),
      (exports.HorizontalRuleExtension = Se),
      (exports.HorizontalRuleNode = _pe),
      (exports.INSERT_HORIZONTAL_RULE_COMMAND = he),
      (exports.InitialStateExtension = oe),
      (exports.LexicalBuilder = _le),
      (exports.NestedEditorExtension = ve),
      (exports.NodeSelectionExtension = ge),
      (exports.NormalizeInlineElementsExtension = Ne),
      (exports.NormalizeTripleClickSelectionExtension = Ce),
      (exports.SelectionAlwaysOnDisplayExtension = Oe),
      (exports.TabIndentationExtension = Me),
      (exports.applyFormatFromStyle = function (e, t, n) {
        var i = t.fontWeight,
          o = t.textDecoration.split(" "),
          s = "700" === i || "bold" === i,
          r = o.includes("line-through"),
          a = "italic" === t.fontStyle,
          c = o.includes("underline"),
          d = t.verticalAlign;
        return (
          s && !e.hasFormat("bold") && e.toggleFormat("bold"),
          r && !e.hasFormat("strikethrough") && e.toggleFormat("strikethrough"),
          a && !e.hasFormat("italic") && e.toggleFormat("italic"),
          c && !e.hasFormat("underline") && e.toggleFormat("underline"),
          "sub" !== d ||
            e.hasFormat("subscript") ||
            e.toggleFormat("subscript"),
          "super" !== d ||
            e.hasFormat("superscript") ||
            e.toggleFormat("superscript"),
          n && !e.hasFormat(n) && e.toggleFormat(n),
          e
        );
      }),
      (exports.applyFormatToDom = function (e, t, n) {
        if (n === void 0) {
          n = L;
        }
        for (var _ref19 of Object.entries(n)) {
          var _i5 = _ref19[0];
          var _o6 = _ref19[1];
          e.hasFormat(_o6) && (t = P(t, _i5));
        }
        return t;
      }),
      (exports.batch = o),
      (exports.buildEditorFromExtensions = function () {
        for (
          var _len2 = arguments.length, e = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          e[_key2] = arguments[_key2];
        }
        return _le.fromExtensions(e).buildEditor();
      }),
      (exports.computed = y),
      (exports.effect = R),
      (exports.getExtensionDependencyFromEditor = function (e, t) {
        var n = _le.fromEditor(e).getExtensionRep(t);
        return (void 0 === n && j(303, t.name), n.getExtensionDependency());
      }),
      (exports.getKnownTypesAndNodes = function (t) {
        var n = new Set(),
          i = new Set();
        for (var _o7 of I(t)) {
          var _t17 = "function" == typeof _o7 ? _o7 : _o7.replace;
          (require("Lexical").getStaticNodeConfig(_t17),
            n.add(_t17.getType()),
            i.add(_t17));
        }
        return { nodes: i, types: n };
      }),
      (exports.getPeerDependencyFromEditor = ue),
      (exports.getPeerDependencyFromEditorOrThrow = function (e, t) {
        var n = ue(e, t);
        return (void 0 === n && j(291, t), n);
      }),
      (exports.namedSignals = D),
      (exports.registerClearEditor = w),
      (exports.registerTabIndentation = De),
      (exports.signal = m),
      (exports.untracked = a),
      (exports.watchedSignal = z));
  },
  null,
);
