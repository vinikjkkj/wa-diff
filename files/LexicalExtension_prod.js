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
      var t,
        e = !1;
      for (
        !(function () {
          var t = c;
          for (c = void 0; void 0 !== t; )
            (t.S.v === t.v && (t.S.i = t.i), (t = t.o));
        })();
        void 0 !== r;
      ) {
        var _n = r;
        for (r = void 0, l++; void 0 !== _n; ) {
          var _i = _n.u;
          if (((_n.u = void 0), (_n.f &= -3), !(8 & _n.f) && x(_n)))
            try {
              _n.c();
            } catch (n) {
              e || ((t = n), (e = !0));
            }
          _n = _i;
        }
      }
      if (((l = 0), d--, e)) throw t;
    }
    function o(t) {
      if (d > 0) return t();
      ((f = ++u), d++);
      try {
        return t();
      } finally {
        i();
      }
    }
    var s, r;
    function a(t) {
      var e = s;
      s = void 0;
      try {
        return t();
      } finally {
        s = e;
      }
    }
    var c,
      d = 0,
      l = 0,
      u = 0,
      f = 0,
      h = 0;
    function g(t) {
      if (void 0 === s) return;
      var e = t.n;
      return void 0 === e || e.t !== s
        ? ((e = {
            i: 0,
            S: t,
            p: s.s,
            n: void 0,
            t: s,
            e: void 0,
            x: void 0,
            r: e,
          }),
          void 0 !== s.s && (s.s.n = e),
          (s.s = e),
          (t.n = e),
          32 & s.f && t.S(e),
          e)
        : -1 === e.i
          ? ((e.i = 0),
            void 0 !== e.n &&
              ((e.n.p = e.p),
              void 0 !== e.p && (e.p.n = e.n),
              (e.p = s.s),
              (e.n = void 0),
              (s.s.n = e),
              (s.s = e)),
            e)
          : void 0;
    }
    function p(t, e) {
      ((this.v = t),
        (this.i = 0),
        (this.n = void 0),
        (this.t = void 0),
        (this.l = 0),
        (this.W = null == e ? void 0 : e.watched),
        (this.Z = null == e ? void 0 : e.unwatched),
        (this.name = null == e ? void 0 : e.name));
    }
    function m(t, e) {
      return new p(t, e);
    }
    function x(t) {
      for (var _e = t.s; void 0 !== _e; _e = _e.n)
        if (_e.S.i !== _e.i || !_e.S.h() || _e.S.i !== _e.i) return !0;
      return !1;
    }
    function E(t) {
      for (var _e2 = t.s; void 0 !== _e2; _e2 = _e2.n) {
        var _n2 = _e2.S.n;
        if (
          (void 0 !== _n2 && (_e2.r = _n2),
          (_e2.S.n = _e2),
          (_e2.i = -1),
          void 0 === _e2.n)
        ) {
          t.s = _e2;
          break;
        }
      }
    }
    function v(t) {
      var e,
        n = t.s;
      for (; void 0 !== n; ) {
        var _t = n.p;
        (-1 === n.i
          ? (n.S.U(n),
            void 0 !== _t && (_t.n = n.n),
            void 0 !== n.n && (n.n.p = _t))
          : (e = n),
          (n.S.n = n.r),
          void 0 !== n.r && (n.r = void 0),
          (n = _t));
      }
      t.s = e;
    }
    function S(t, e) {
      (p.call(this, void 0),
        (this.x = t),
        (this.s = void 0),
        (this.g = h - 1),
        (this.f = 4),
        (this.W = null == e ? void 0 : e.watched),
        (this.Z = null == e ? void 0 : e.unwatched),
        (this.name = null == e ? void 0 : e.name));
    }
    function y(t, e) {
      return new S(t, e);
    }
    function N(t) {
      var e = t.m;
      if (((t.m = void 0), "function" == typeof e)) {
        d++;
        var _n3 = s;
        s = void 0;
        try {
          e();
        } catch (e) {
          throw ((t.f &= -2), (t.f |= 8), b(t), e);
        } finally {
          ((s = _n3), i());
        }
      }
    }
    function b(t) {
      for (var _e3 = t.s; void 0 !== _e3; _e3 = _e3.n) _e3.S.U(_e3);
      ((t.x = void 0), (t.s = void 0), N(t));
    }
    function O(t) {
      if (s !== this) throw new Error("Out-of-order effect");
      (v(this), (s = t), (this.f &= -2), 8 & this.f && b(this), i());
    }
    function R(t, e) {
      ((this.x = t),
        (this.m = void 0),
        (this.s = void 0),
        (this.u = void 0),
        (this.f = 32),
        (this.name = null == e ? void 0 : e.name));
    }
    function C(t, e) {
      var n = new R(t, e);
      try {
        n.c();
      } catch (t) {
        throw (n.d(), t);
      }
      var i = n.d.bind(n);
      return (
        (i[typeof Symbol === "function" ? Symbol.dispose : "@@dispose"] = i),
        i
      );
    }
    function D(t, e) {
      if (e === void 0) {
        e = {};
      }
      var n = {};
      for (var _i2 in t) {
        var _o = e[_i2],
          _s = m(void 0 === _o ? t[_i2] : _o);
        n[_i2] = _s;
      }
      return n;
    }
    ((p.prototype.brand = n),
      (p.prototype.h = function () {
        return !0;
      }),
      (p.prototype.S = function (t) {
        var _this = this;
        var e = this.t;
        e !== t &&
          void 0 === t.e &&
          ((t.x = e),
          (this.t = t),
          void 0 !== e
            ? (e.e = t)
            : a(function () {
                var t;
                null == (t = _this.W) || t.call(_this);
              }));
      }),
      (p.prototype.U = function (t) {
        var _this2 = this;
        if (void 0 !== this.t) {
          var _e4 = t.e,
            _n4 = t.x;
          (void 0 !== _e4 && ((_e4.x = _n4), (t.e = void 0)),
            void 0 !== _n4 && ((_n4.e = _e4), (t.x = void 0)),
            t === this.t &&
              ((this.t = _n4),
              void 0 === _n4 &&
                a(function () {
                  var t;
                  null == (t = _this2.Z) || t.call(_this2);
                })));
        }
      }),
      (p.prototype.subscribe = function (t) {
        var _this3 = this;
        return C(
          function () {
            var e = _this3.value,
              n = s;
            s = void 0;
            try {
              t(e);
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
        var t = s;
        s = void 0;
        try {
          return this.value;
        } finally {
          s = t;
        }
      }),
      Object.defineProperty(p.prototype, "value", {
        get: function get() {
          var t = g(this);
          return (void 0 !== t && (t.i = this.i), this.v);
        },
        set: function set(t) {
          if (t !== this.v) {
            if (l > 100) throw new Error("Cycle detected");
            (!(function (t) {
              0 !== d &&
                0 === l &&
                t.l !== f &&
                ((t.l = f), (c = { S: t, v: t.v, i: t.i, o: c }));
            })(this),
              (this.v = t),
              this.i++,
              h++,
              d++);
            try {
              for (var _t2 = this.t; void 0 !== _t2; _t2 = _t2.x) _t2.t.N();
            } finally {
              i();
            }
          }
        },
      }),
      (S.prototype = new p()),
      (S.prototype.h = function () {
        if (((this.f &= -3), 1 & this.f)) return !1;
        if (32 == (36 & this.f)) return !0;
        if (((this.f &= -5), this.g === h)) return !0;
        if (((this.g = h), (this.f |= 1), this.i > 0 && !x(this)))
          return ((this.f &= -2), !0);
        var t = s;
        try {
          (E(this), (s = this));
          var _t3 = this.x();
          (16 & this.f || this.v !== _t3 || 0 === this.i) &&
            ((this.v = _t3), (this.f &= -17), this.i++);
        } catch (t) {
          ((this.v = t), (this.f |= 16), this.i++);
        }
        return ((s = t), v(this), (this.f &= -2), !0);
      }),
      (S.prototype.S = function (t) {
        if (void 0 === this.t) {
          this.f |= 36;
          for (var _t4 = this.s; void 0 !== _t4; _t4 = _t4.n) _t4.S.S(_t4);
        }
        p.prototype.S.call(this, t);
      }),
      (S.prototype.U = function (t) {
        if (
          void 0 !== this.t &&
          (p.prototype.U.call(this, t), void 0 === this.t)
        ) {
          this.f &= -33;
          for (var _t5 = this.s; void 0 !== _t5; _t5 = _t5.n) _t5.S.U(_t5);
        }
      }),
      (S.prototype.N = function () {
        if (!(2 & this.f)) {
          this.f |= 6;
          for (var _t6 = this.t; void 0 !== _t6; _t6 = _t6.x) _t6.t.N();
        }
      }),
      Object.defineProperty(S.prototype, "value", {
        get: function get() {
          if (1 & this.f) throw new Error("Cycle detected");
          var t = g(this);
          if ((this.h(), void 0 !== t && (t.i = this.i), 16 & this.f))
            throw this.v;
          return this.v;
        },
      }),
      (R.prototype.c = function () {
        var t = this.S();
        try {
          if (8 & this.f) return;
          if (void 0 === this.x) return;
          var _t7 = this.x();
          "function" == typeof _t7 && (this.m = _t7);
        } finally {
          t();
        }
      }),
      (R.prototype.S = function () {
        if (1 & this.f) throw new Error("Cycle detected");
        ((this.f |= 1), (this.f &= -9), N(this), E(this), d++);
        var t = s;
        return ((s = this), O.bind(this, t));
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
    var M = (_require_Lexical = require("Lexical")).defineExtension({
      build: function build(t, e, n) {
        return D(e);
      },
      config: _require_Lexical.safeCast({
        defaultSelection: "rootEnd",
        disabled: !1,
      }),
      name: "@lexical/extension/AutoFocus",
      register: function register(t, e, n) {
        var i = n.getOutput();
        return C(function () {
          return i.disabled.value
            ? void 0
            : t.registerRootListener(function (e) {
                t.focus(
                  function () {
                    var t = document.activeElement;
                    null === e ||
                      (null !== t && e.contains(t)) ||
                      e.focus({ preventScroll: !0 });
                  },
                  { defaultSelection: i.defaultSelection.peek() },
                );
              });
        });
      },
    });
    function w() {
      var e = require("Lexical").$getRoot(),
        n = require("Lexical").$getSelection(),
        i = require("Lexical").$createParagraphNode();
      (e.clear(),
        e.append(i),
        null !== n && i.select(),
        require("Lexical").$isRangeSelection(n) && (n.format = 0));
    }
    function _(e, n) {
      if (n === void 0) {
        n = w;
      }
      return e.registerCommand(
        require("Lexical").CLEAR_EDITOR_COMMAND,
        function (t) {
          return (e.update(n), !0);
        },
        require("Lexical").COMMAND_PRIORITY_EDITOR,
      );
    }
    var T = _require_Lexical.defineExtension({
      build: function build(t, e, n) {
        return D(e);
      },
      config: _require_Lexical.safeCast({ $onClear: w }),
      name: "@lexical/extension/ClearEditor",
      register: function register(t, e, n) {
        var _n$getOutput = n.getOutput(),
          i = _n$getOutput.$onClear;
        return C(function () {
          return _(t, i.value);
        });
      },
    });
    function I(t) {
      return ("function" == typeof t.nodes ? t.nodes() : t.nodes) || [];
    }
    var $ = _require_Lexical.createState("format", {
      parse: function parse(t) {
        return "number" == typeof t ? t : 0;
      },
    });
    var _A = (function (_t$DecoratorNode) {
      function A() {
        return _t$DecoratorNode.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(A, _t$DecoratorNode);
      var _proto = A.prototype;
      _proto.$config = function $config() {
        return this.config("decorator-text", {
          extends: require("Lexical").DecoratorNode,
          stateConfigs: [{ flat: !0, stateConfig: $ }],
        });
      };
      _proto.getFormat = function getFormat() {
        return require("Lexical").$getState(this, $);
      };
      _proto.getFormatFlags = function getFormatFlags(e, n) {
        return require("Lexical").toggleTextFormatType(this.getFormat(), e, n);
      };
      _proto.hasFormat = function hasFormat(e) {
        var n = require("Lexical").TEXT_TYPE_TO_FORMAT[e];
        return 0 !== (this.getFormat() & n);
      };
      _proto.setFormat = function setFormat(e) {
        return require("Lexical").$setState(this, $, e);
      };
      _proto.toggleFormat = function toggleFormat(e) {
        var n = this.getFormat(),
          i = require("Lexical").toggleTextFormatType(n, e, null);
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
    function F(t) {
      return t instanceof _A;
    }
    function P(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
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
        register: function register(e, n, i) {
          return e.registerCommand(
            require("Lexical").FORMAT_TEXT_COMMAND,
            function (e) {
              var n = require("Lexical").$getSelection();
              if (
                require("Lexical").$isNodeSelection(n) ||
                require("Lexical").$isRangeSelection(n)
              )
                for (var _t8 of n.getNodes()) F(_t8) && _t8.toggleFormat(e);
              return !1;
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          );
        },
      });
    function j(t, e) {
      var n;
      return m(t(), {
        unwatched: function unwatched() {
          n && (n(), (n = void 0));
        },
        watched: function watched() {
          ((this.value = t()), (n = e(this)));
        },
      });
    }
    var K = _require_Lexical.defineExtension({
      build: function build(t) {
        return j(
          function () {
            return t.getEditorState();
          },
          function (e) {
            return t.registerUpdateListener(function (t) {
              e.value = t.editorState;
            });
          },
        );
      },
      name: "@lexical/extension/EditorState",
    });
    function z(t) {
      var n = new URL("https://lexical.dev/docs/error"),
        i = new URLSearchParams();
      i.append("code", t);
      for (
        var _len = arguments.length,
          e = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        e[_key - 1] = arguments[_key];
      }
      for (var _t9 of e) i.append("v", _t9);
      throw (
        (n.search = i.toString()),
        Error(
          "Minified Lexical error #" +
            t +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    function U(t, e) {
      if (
        t &&
        e &&
        !Array.isArray(e) &&
        "object" == typeof t &&
        "object" == typeof e
      ) {
        var _n5 = t,
          _i3 = e;
        for (var _t0 in _i3) _n5[_t0] = U(_n5[_t0], _i3[_t0]);
        return t;
      }
      return e;
    }
    var B = 0,
      Y = 1,
      H = 2,
      W = 3,
      G = 4,
      Z = 5,
      V = 6,
      J = 7;
    function X(t) {
      return t.id === B;
    }
    function q(t) {
      return t.id === H;
    }
    function Q(t) {
      return (
        (function (t) {
          return t.id === Y;
        })(t) || z(305, String(t.id), String(Y)),
        Object.assign(t, { id: H })
      );
    }
    var tt = new Set();
    var _et = (function () {
      function et(t, e) {
        ((this.builder = t),
          (this.extension = e),
          (this.configs = new Set()),
          (this.state = { id: B }));
      }
      var _proto2 = et.prototype;
      _proto2.mergeConfigs = function mergeConfigs() {
        var e = this.extension.config || {};
        var n = this.extension.mergeConfig
          ? this.extension.mergeConfig.bind(this.extension)
          : require("Lexical").shallowMergeConfig;
        for (var _t1 of this.configs) e = n(e, _t1);
        return e;
      };
      _proto2.init = function init(t) {
        var e = this.state;
        q(e) || z(306, String(e.id));
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
          o = (function (t, e, n) {
            return Object.assign(t, { config: e, id: W, registerState: n });
          })(e, this.mergeConfigs(), n);
        var s;
        ((this.state = o),
          this.extension.init && (s = this.extension.init(t, o.config, n)),
          (this.state = (function (t, e, n) {
            return Object.assign(t, { id: G, initResult: e, registerState: n });
          })(o, s, i)));
      };
      _proto2.build = function build(t) {
        var e = this.state;
        var n;
        (e.id !== G && z(307, String(e.id), String(Z)),
          this.extension.build &&
            (n = this.extension.build(t, e.config, e.registerState)));
        var i = babelHelpers["extends"]({}, e.registerState, {
          getOutput: function getOutput() {
            return n;
          },
          getSignal: this.getSignal.bind(this),
        });
        this.state = (function (t, e, n) {
          return Object.assign(t, { id: Z, output: e, registerState: n });
        })(e, n, i);
      };
      _proto2.register = function register(t, e) {
        var _this4 = this;
        this._signal = e;
        var n = this.state;
        n.id !== Z && z(308, String(n.id), String(Z));
        var i =
          this.extension.register &&
          this.extension.register(t, n.config, n.registerState);
        return (
          (this.state = (function (t) {
            return Object.assign(t, { id: V });
          })(n)),
          function () {
            var t = _this4.state;
            (t.id !== J && z(309, String(n.id), String(J)),
              (_this4.state = (function (t) {
                return Object.assign(t, { id: Z });
              })(t)),
              i && i());
          }
        );
      };
      _proto2.afterRegistration = function afterRegistration(t) {
        var e = this.state;
        var n;
        return (
          e.id !== V && z(310, String(e.id), String(V)),
          this.extension.afterRegistration &&
            (n = this.extension.afterRegistration(
              t,
              e.config,
              e.registerState,
            )),
          (this.state = (function (t) {
            return Object.assign(t, { id: J });
          })(e)),
          n
        );
      };
      _proto2.getSignal = function getSignal() {
        return (void 0 === this._signal && z(311), this._signal);
      };
      _proto2.getInitResult = function getInitResult() {
        void 0 === this.extension.init && z(312, this.extension.name);
        var t = this.state;
        return (
          (function (t) {
            return t.id >= G;
          })(t) || z(313, String(t.id), String(G)),
          t.initResult
        );
      };
      _proto2.getInitPeer = function getInitPeer(t) {
        var e = this.builder.extensionNameMap.get(t);
        return e ? e.getExtensionInitDependency() : void 0;
      };
      _proto2.getExtensionInitDependency =
        function getExtensionInitDependency() {
          var t = this.state;
          return (
            (function (t) {
              return t.id >= W;
            })(t) || z(314, String(t.id), String(W)),
            { config: t.config }
          );
        };
      _proto2.getPeer = function getPeer(t) {
        var e = this.builder.extensionNameMap.get(t);
        return e ? e.getExtensionDependency() : void 0;
      };
      _proto2.getInitDependency = function getInitDependency(t) {
        var e = this.builder.getExtensionRep(t);
        return (
          void 0 === e && z(315, this.extension.name, t.name),
          e.getExtensionInitDependency()
        );
      };
      _proto2.getDependency = function getDependency(t) {
        var e = this.builder.getExtensionRep(t);
        return (
          void 0 === e && z(315, this.extension.name, t.name),
          e.getExtensionDependency()
        );
      };
      _proto2.getState = function getState() {
        var t = this.state;
        return (
          (function (t) {
            return t.id >= J;
          })(t) || z(316, String(t.id), String(J)),
          t
        );
      };
      _proto2.getDirectDependentNames = function getDirectDependentNames() {
        return this.builder.incomingEdges.get(this.extension.name) || tt;
      };
      _proto2.getPeerNameSet = function getPeerNameSet() {
        var t = this._peerNameSet;
        return (
          t ||
            ((t = new Set(
              (this.extension.peerDependencies || []).map(function (_ref) {
                var t = _ref[0];
                return t;
              }),
            )),
            (this._peerNameSet = t)),
          t
        );
      };
      _proto2.getExtensionDependency = function getExtensionDependency() {
        if (!this._dependency) {
          var _t10 = this.state;
          ((function (t) {
            return t.id >= Z;
          })(_t10) || z(317, this.extension.name),
            (this._dependency = {
              config: _t10.config,
              init: _t10.initResult,
              output: _t10.output,
            }));
        }
        return this._dependency;
      };
      return et;
    })();
    var nt = { tag: _require_Lexical.HISTORY_MERGE_TAG };
    function it() {
      var e = require("Lexical").$getRoot();
      e.isEmpty() && e.append(require("Lexical").$createParagraphNode());
    }
    var ot = _require_Lexical.defineExtension({
        config: _require_Lexical.safeCast({
          setOptions: nt,
          updateOptions: nt,
        }),
        init: function init(_ref2) {
          var _ref2$$initialEditorS = _ref2.$initialEditorState,
            t = _ref2$$initialEditorS === void 0 ? it : _ref2$$initialEditorS;
          return { $initialEditorState: t, initialized: !1 };
        },
        afterRegistration: function afterRegistration(e, _ref3, o) {
          var n = _ref3.updateOptions,
            i = _ref3.setOptions;
          var s = o.getInitResult();
          if (!s.initialized) {
            s.initialized = !0;
            var _o2 = s.$initialEditorState;
            if (require("Lexical").$isEditorState(_o2))
              e.setEditorState(_o2, i);
            else if ("function" == typeof _o2)
              e.update(function () {
                _o2(e);
              }, n);
            else if (
              _o2 &&
              ("string" == typeof _o2 || "object" == typeof _o2)
            ) {
              var _t11 = e.parseEditorState(_o2);
              e.setEditorState(_t11, i);
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
      st = Symbol["for"]("@lexical/extension/LexicalBuilder");
    function rt() {}
    function at(t) {
      throw t;
    }
    function ct(t) {
      return Array.isArray(t) ? t : [t];
    }
    var dt = "0.43.0+prod.cjs";
    var _lt = (function () {
      function lt(t) {
        ((this.outgoingConfigEdges = new Map()),
          (this.incomingEdges = new Map()),
          (this.extensionNameMap = new Map()),
          (this.conflicts = new Map()),
          (this.PACKAGE_VERSION = dt),
          (this.roots = t));
        for (var _e5 of t) this.addExtension(_e5);
      }
      lt.fromExtensions = function fromExtensions(t) {
        var e = [ct(ot)];
        for (var _n6 of t) e.push(ct(_n6));
        return new lt(e);
      };
      lt.maybeFromEditor = function maybeFromEditor(t) {
        var e = t[st];
        return (
          e &&
            (e.PACKAGE_VERSION !== dt && z(292, e.PACKAGE_VERSION, dt),
            e instanceof lt || z(293)),
          e
        );
      };
      lt.fromEditor = function fromEditor(t) {
        var e = lt.maybeFromEditor(t);
        return (void 0 === e && z(294), e);
      };
      var _proto3 = lt.prototype;
      _proto3.constructEditor = function constructEditor() {
        var _Object$assign;
        var _this$buildCreateEdit = this.buildCreateEditorArgs(),
          e = _this$buildCreateEdit.$initialEditorState,
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
                      onError: function onError(t) {
                        n(t, o);
                      },
                    }
                  : {},
              ),
            ),
            ((_Object$assign = {}),
            (_Object$assign[st] = this),
            _Object$assign),
          );
        for (var _t12 of this.sortedExtensionReps()) _t12.build(o);
        return o;
      };
      _proto3.buildEditor = function buildEditor() {
        var _Object$assign2;
        var e = rt;
        function n() {
          try {
            e();
          } finally {
            e = rt;
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
          (e = require("Lexical").mergeRegister(
            this.registerEditor(i),
            function () {
              return i.setRootElement(null);
            },
          )),
          i
        );
      };
      _proto3.hasExtensionByName = function hasExtensionByName(t) {
        return this.extensionNameMap.has(t);
      };
      _proto3.getExtensionRep = function getExtensionRep(t) {
        var e = this.extensionNameMap.get(t.name);
        if (e) return (e.extension !== t && z(295, t.name), e);
      };
      _proto3.addEdge = function addEdge(t, e, n) {
        var i = this.outgoingConfigEdges.get(t);
        i ? i.set(e, n) : this.outgoingConfigEdges.set(t, new Map([[e, n]]));
        var o = this.incomingEdges.get(e);
        o ? o.add(t) : this.incomingEdges.set(e, new Set([t]));
      };
      _proto3.addExtension = function addExtension(t) {
        void 0 !== this._sortedExtensionReps && z(296);
        var e = ct(t),
          n = e[0];
        "string" != typeof n.name && z(297, typeof n.name);
        var i = this.extensionNameMap.get(n.name);
        if ((void 0 !== i && i.extension !== n && z(298, n.name), !i)) {
          ((i = new _et(this, n)), this.extensionNameMap.set(n.name, i));
          var _t13 = this.conflicts.get(n.name);
          "string" == typeof _t13 && z(299, n.name, _t13);
          for (var _t14 of n.conflictsWith || [])
            (this.extensionNameMap.has(_t14) && z(299, n.name, _t14),
              this.conflicts.set(_t14, n.name));
          for (var _t15 of n.dependencies || []) {
            var _e6 = ct(_t15);
            (this.addEdge(n.name, _e6[0].name, _e6.slice(1)),
              this.addExtension(_e6));
          }
          for (var _ref5 of n.peerDependencies || []) {
            var _t16 = _ref5[0];
            var _e7 = _ref5[1];
            this.addEdge(n.name, _t16, _e7 ? [_e7] : []);
          }
        }
      };
      _proto3.sortedExtensionReps = function sortedExtensionReps() {
        var _this5 = this;
        if (this._sortedExtensionReps) return this._sortedExtensionReps;
        var t = [],
          _e8 = function e(n, i) {
            var o = n.state;
            if (q(o)) return;
            var s = n.extension.name;
            var r;
            (X(o) || z(300, s, i || "[unknown]"),
              X((r = o)) || z(304, String(r.id), String(B)),
              (o = Object.assign(r, { id: Y })),
              (n.state = o));
            var a = _this5.outgoingConfigEdges.get(s);
            if (a)
              for (var _t17 of a.keys()) {
                var _n7 = _this5.extensionNameMap.get(_t17);
                _n7 && _e8(_n7, s);
              }
            ((o = Q(o)), (n.state = o), t.push(n));
          };
        for (var _t18 of this.extensionNameMap.values())
          X(_t18.state) && _e8(_t18);
        for (var _e9 of t)
          for (var _ref7 of this.outgoingConfigEdges.get(_e9.extension.name) ||
            []) {
            var _t19 = _ref7[0];
            var _n8 = _ref7[1];
            if (_n8.length > 0) {
              var _e0 = this.extensionNameMap.get(_t19);
              if (_e0) for (var _t20 of _n8) _e0.configs.add(_t20);
            }
          }
        for (var _ref9 of this.roots) {
          var _t21 = _ref9[0];
          var _e1 = babelHelpers.arrayLikeToArray(_ref9).slice(1);
          if (_e1.length > 0) {
            var _n9 = this.extensionNameMap.get(_t21.name);
            void 0 === _n9 && z(301, _t21.name);
            for (var _t22 of _e1) _n9.configs.add(_t22);
          }
        }
        return ((this._sortedExtensionReps = t), this._sortedExtensionReps);
      };
      _proto3.registerEditor = function registerEditor(e) {
        var n = this.sortedExtensionReps(),
          i = new AbortController(),
          o = [
            function () {
              return i.abort();
            },
          ],
          s = i.signal;
        for (var _t23 of n) {
          var _n0 = _t23.register(e, s);
          _n0 && o.push(_n0);
        }
        for (var _t24 of n) {
          var _n1 = _t24.afterRegistration(e);
          _n1 && o.push(_n1);
        }
        return require("Lexical").mergeRegister.apply(require("Lexical"), o);
      };
      _proto3.buildCreateEditorArgs = function buildCreateEditorArgs() {
        var t = {},
          e = new Set(),
          n = new Map(),
          i = new Map(),
          o = {},
          s = {},
          r = this.sortedExtensionReps();
        for (var _a of r) {
          var _r = _a.extension;
          if (
            (void 0 !== _r.onError && (t.onError = _r.onError),
            void 0 !== _r.disableEvents && (t.disableEvents = _r.disableEvents),
            void 0 !== _r.parentEditor && (t.parentEditor = _r.parentEditor),
            void 0 !== _r.editable && (t.editable = _r.editable),
            void 0 !== _r.namespace && (t.namespace = _r.namespace),
            void 0 !== _r.$initialEditorState &&
              (t.$initialEditorState = _r.$initialEditorState),
            _r.nodes)
          )
            for (var _t25 of I(_r)) {
              if ("function" != typeof _t25) {
                var _e10 = n.get(_t25.replace);
                (_e10 &&
                  z(302, _r.name, _t25.replace.name, _e10.extension.name),
                  n.set(_t25.replace, _a));
              }
              e.add(_t25);
            }
          if (_r.html) {
            if (_r.html["export"])
              for (var _ref1 of _r.html["export"].entries()) {
                var _t26 = _ref1[0];
                var _e11 = _ref1[1];
                i.set(_t26, _e11);
              }
            _r.html["import"] && Object.assign(o, _r.html["import"]);
          }
          _r.theme && U(s, _r.theme);
        }
        (Object.keys(s).length > 0 && (t.theme = s),
          e.size && (t.nodes = [].concat(e)));
        var a = Object.keys(o).length > 0,
          c = i.size > 0;
        (a || c) &&
          ((t.html = {}),
          a && (t.html["import"] = o),
          c && (t.html["export"] = i));
        for (var _e12 of r) _e12.init(t);
        return (t.onError || (t.onError = at), t);
      };
      return lt;
    })();
    function ut(t, e) {
      var n = _lt.fromEditor(t).extensionNameMap.get(e);
      return n ? n.getExtensionDependency() : void 0;
    }
    var ft = new Set(),
      ht = _require_Lexical.defineExtension({
        build: function build(e, n, i) {
          var o = i.getDependency(K).output,
            s = m({ watchedNodeKeys: new Map() }),
            r = j(
              function () {},
              function () {
                return C(function () {
                  var e = r.peek(),
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
                          ((a = a || _c !== (!!e && e.has(_o3))),
                            _c && ((i = i || new Set()), i.add(_o3)));
                        }
                      }
                  }),
                    (!a && i && e && i.size === e.size) || (r.value = i));
                });
              },
            );
          return {
            watchNodeKey: function watchNodeKey(t) {
              var e = y(function () {
                  return (r.value || ft).has(t);
                }),
                _s$peek = s.peek(),
                n = _s$peek.watchedNodeKeys;
              var i = n.get(t);
              var o = void 0 !== i;
              return (
                (i = i || new Set()),
                i.add(e),
                o || (n.set(t, i), (s.value = { watchedNodeKeys: n })),
                e
              );
            },
          };
        },
        dependencies: [K],
        name: "@lexical/extension/NodeSelection",
      }),
      gt = _require_Lexical.createCommand("INSERT_HORIZONTAL_RULE_COMMAND");
    var _pt = (function (_t$DecoratorNode2) {
      function pt() {
        return _t$DecoratorNode2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(pt, _t$DecoratorNode2);
      pt.getType = function getType() {
        return "horizontalrule";
      };
      pt.clone = function clone(t) {
        return new pt(t.__key);
      };
      pt.importJSON = function importJSON(t) {
        return xt().updateFromJSON(t);
      };
      pt.importDOM = function importDOM() {
        return {
          hr: function hr() {
            return { conversion: mt, priority: 0 };
          },
        };
      };
      var _proto4 = pt.prototype;
      _proto4.exportDOM = function exportDOM() {
        return { element: document.createElement("hr") };
      };
      _proto4.createDOM = function createDOM(e) {
        var n = document.createElement("hr");
        return (require("Lexical").addClassNamesToElement(n, e.theme.hr), n);
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
      return pt;
    })(_require_Lexical.DecoratorNode);
    function mt() {
      return { node: xt() };
    }
    function xt() {
      return require("Lexical").$create(_pt);
    }
    function Et(t) {
      return t instanceof _pt;
    }
    var vt = _require_Lexical.defineExtension({
      dependencies: [K, ht],
      name: "@lexical/extension/HorizontalRule",
      nodes: function nodes() {
        return [_pt];
      },
      register: function register(n, i, s) {
        var _n$_config$theme$hrSe;
        var r = s.getDependency(ht).output.watchNodeKey,
          a = m({ nodeSelections: new Map() }),
          c =
            (_n$_config$theme$hrSe = n._config.theme.hrSelected) != null
              ? _n$_config$theme$hrSe
              : "selected";
        return require("Lexical").mergeRegister(
          n.registerCommand(
            gt,
            function (n) {
              var i = require("Lexical").$getSelection();
              if (!require("Lexical").$isRangeSelection(i)) return !1;
              if (null !== i.focus.getNode()) {
                var _t27 = xt();
                require("LexicalUtils").$insertNodeToNearestRoot(_t27);
              }
              return !0;
            },
            require("Lexical").COMMAND_PRIORITY_EDITOR,
          ),
          n.registerCommand(
            require("Lexical").CLICK_COMMAND,
            function (e) {
              if (require("Lexical").isDOMNode(e.target)) {
                var _n10 = require("Lexical").$getNodeFromDOMNode(e.target);
                if (Et(_n10))
                  return (
                    (function (e, n) {
                      if (n === void 0) {
                        n = !1;
                      }
                      var i = require("Lexical").$getSelection(),
                        o = e.isSelected(),
                        s = e.getKey();
                      var r;
                      (n && require("Lexical").$isNodeSelection(i)
                        ? (r = i)
                        : ((r = require("Lexical").$createNodeSelection()),
                          require("Lexical").$setSelection(r)),
                        o ? r["delete"](s) : r.add(s));
                    })(_n10, e.shiftKey),
                    !0
                  );
              }
              return !1;
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          n.registerMutationListener(_pt, function (t, e) {
            o(function () {
              var e = !1;
              var _a$peek = a.peek(),
                i = _a$peek.nodeSelections;
              for (var _ref13 of t.entries()) {
                var _o4 = _ref13[0];
                var _s3 = _ref13[1];
                if ("destroyed" === _s3) (i["delete"](_o4), (e = !0));
                else {
                  var _t28 = i.get(_o4),
                    _s4 = n.getElementByKey(_o4);
                  _t28
                    ? (_t28.domNode.value = _s4)
                    : ((e = !0),
                      i.set(_o4, { domNode: m(_s4), selectedSignal: r(_o4) }));
                }
              }
              e && (a.value = { nodeSelections: i });
            });
          }),
          C(function () {
            var e = [];
            var _loop = function _loop() {
              var n = _ref15.domNode;
              var i = _ref15.selectedSignal;
              e.push(
                C(function () {
                  var e = n.value;
                  if (e) {
                    i.value
                      ? require("Lexical").addClassNamesToElement(e, c)
                      : require("Lexical").removeClassNamesFromElement(e, c);
                  }
                }),
              );
            };
            for (var _ref15 of a.value.nodeSelections.values()) {
              _loop();
            }
            return require("Lexical").mergeRegister.apply(
              require("Lexical"),
              e,
            );
          }),
        );
      },
    });
    var St = _require_Lexical.defineExtension({
        build: function build(t, e) {
          return D({ inheritEditableFromParent: e.inheritEditableFromParent });
        },
        config: _require_Lexical.safeCast({
          $getParentEditor: function $getParentEditor() {
            var e = require("Lexical").$getEditor();
            return (_lt.fromEditor(e), e);
          },
          inheritEditableFromParent: !1,
        }),
        init: function init(t, e, n) {
          var i = e.$getParentEditor();
          ((t.parentEditor = i), (t.theme = t.theme || i._config.theme));
        },
        name: "@lexical/extension/NestedEditor",
        register: function register(t, e, n) {
          return C(function () {
            var e = t._parentEditor;
            if (e && n.getOutput().inheritEditableFromParent.value)
              return (
                t.setEditable(e.isEditable()),
                e.registerEditableListener(t.setEditable.bind(t))
              );
          });
        },
      }),
      yt = _require_Lexical.defineExtension({
        build: function build(t, e, n) {
          return D(e);
        },
        config: _require_Lexical.safeCast({
          disabled: !1,
          onReposition: void 0,
        }),
        name: "@lexical/utils/SelectionAlwaysOnDisplay",
        register: function register(t, n, i) {
          var o = i.getOutput();
          return C(function () {
            if (!o.disabled.value)
              return require("LexicalUtils").selectionAlwaysOnDisplay(
                t,
                o.onReposition.value,
              );
          });
        },
      });
    function Nt(t) {
      return t.canBeEmpty();
    }
    function bt(n, i, o) {
      if (o === void 0) {
        o = Nt;
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
                n.getNodes().filter(function (e) {
                  return (
                    require("Lexical").$isBlockElementNode(e) && e.canIndent()
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
                var _e13 = a.getKey();
                var _n11 = require("Lexical").$createRangeSelection();
                if (
                  (_n11.anchor.set(_e13, 0, "element"),
                  _n11.focus.set(_e13, 0, "element"),
                  (_n11 =
                    require("Lexical").$normalizeSelection__EXPERIMENTAL(_n11)),
                  _n11.anchor.is(s))
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
              function (t) {
                if (r(t)) {
                  var _e14 = t.getIndent() + 1;
                  (!n || _e14 < n) && t.setIndent(_e14);
                }
              },
            );
          },
          require("Lexical").COMMAND_PRIORITY_CRITICAL,
        ),
      );
    }
    var Ot = _require_Lexical.defineExtension({
      build: function build(t, e, n) {
        return D(e);
      },
      config: _require_Lexical.safeCast({
        $canIndent: Nt,
        disabled: !1,
        maxIndent: null,
      }),
      name: "@lexical/extension/TabIndentation",
      register: function register(t, e, n) {
        var _n$getOutput2 = n.getOutput(),
          i = _n$getOutput2.disabled,
          o = _n$getOutput2.maxIndent,
          s = _n$getOutput2.$canIndent;
        return C(function () {
          if (!i.value) return bt(t, o, s);
        });
      },
    });
    ((exports.configExtension = _require_Lexical.configExtension),
      (exports.declarePeerDependency = _require_Lexical.declarePeerDependency),
      (exports.defineExtension = _require_Lexical.defineExtension),
      (exports.safeCast = _require_Lexical.safeCast),
      (exports.shallowMergeConfig = _require_Lexical.shallowMergeConfig),
      (exports.$createHorizontalRuleNode = xt),
      (exports.$isDecoratorTextNode = F),
      (exports.$isHorizontalRuleNode = Et),
      (exports.AutoFocusExtension = M),
      (exports.ClearEditorExtension = T),
      (exports.DecoratorTextExtension = k),
      (exports.DecoratorTextNode = _A),
      (exports.EditorStateExtension = K),
      (exports.HorizontalRuleExtension = vt),
      (exports.HorizontalRuleNode = _pt),
      (exports.INSERT_HORIZONTAL_RULE_COMMAND = gt),
      (exports.InitialStateExtension = ot),
      (exports.LexicalBuilder = _lt),
      (exports.NestedEditorExtension = St),
      (exports.NodeSelectionExtension = ht),
      (exports.SelectionAlwaysOnDisplayExtension = yt),
      (exports.TabIndentationExtension = Ot),
      (exports.applyFormatFromStyle = function (t, e, n) {
        var i = e.fontWeight,
          o = e.textDecoration.split(" "),
          s = "700" === i || "bold" === i,
          r = o.includes("line-through"),
          a = "italic" === e.fontStyle,
          c = o.includes("underline"),
          d = e.verticalAlign;
        return (
          s && !t.hasFormat("bold") && t.toggleFormat("bold"),
          r && !t.hasFormat("strikethrough") && t.toggleFormat("strikethrough"),
          a && !t.hasFormat("italic") && t.toggleFormat("italic"),
          c && !t.hasFormat("underline") && t.toggleFormat("underline"),
          "sub" !== d ||
            t.hasFormat("subscript") ||
            t.toggleFormat("subscript"),
          "super" !== d ||
            t.hasFormat("superscript") ||
            t.toggleFormat("superscript"),
          n && !t.hasFormat(n) && t.toggleFormat(n),
          t
        );
      }),
      (exports.applyFormatToDom = function (t, e, n) {
        if (n === void 0) {
          n = L;
        }
        for (var _ref17 of Object.entries(n)) {
          var _i4 = _ref17[0];
          var _o5 = _ref17[1];
          t.hasFormat(_o5) && (e = P(e, _i4));
        }
        return e;
      }),
      (exports.batch = o),
      (exports.buildEditorFromExtensions = function () {
        for (
          var _len2 = arguments.length, t = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          t[_key2] = arguments[_key2];
        }
        return _lt.fromExtensions(t).buildEditor();
      }),
      (exports.computed = y),
      (exports.effect = C),
      (exports.getExtensionDependencyFromEditor = function (t, e) {
        var n = _lt.fromEditor(t).getExtensionRep(e);
        return (void 0 === n && z(303, e.name), n.getExtensionDependency());
      }),
      (exports.getKnownTypesAndNodes = function (t) {
        var e = new Set(),
          n = new Set();
        for (var _i5 of I(t)) {
          var _t29 = "function" == typeof _i5 ? _i5 : _i5.replace;
          (e.add(_t29.getType()), n.add(_t29));
        }
        return { nodes: n, types: e };
      }),
      (exports.getPeerDependencyFromEditor = ut),
      (exports.getPeerDependencyFromEditorOrThrow = function (t, e) {
        var n = ut(t, e);
        return (void 0 === n && z(291, e), n);
      }),
      (exports.namedSignals = D),
      (exports.registerClearEditor = _),
      (exports.registerTabIndentation = bt),
      (exports.signal = m),
      (exports.untracked = a),
      (exports.watchedSignal = j));
  },
  null,
);
