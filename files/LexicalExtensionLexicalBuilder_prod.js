__d(
  "LexicalExtensionLexicalBuilder.prod",
  [
    "Lexical",
    "LexicalExtensionConfig",
    "LexicalExtensionInitialStateExtension",
  ],
  function $module_LexicalExtensionLexicalBuilder_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _excluded = ["$initialEditorState", "onError", "onWarn"];
    function i(t) {
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
      for (var _t of e) i.append("v", _t);
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
    function s() {
      var t;
      try {
        t = "0.50.0+prod.cjs";
      } catch (t) {}
      return t != null ? t : '"<unknown>+source"';
    }
    var o = s(),
      r = new Set(["__proto__", "constructor", "prototype"]);
    function a(t, e) {
      if (
        t &&
        e &&
        !Array.isArray(e) &&
        "object" == typeof t &&
        "object" == typeof e
      ) {
        var _n = t,
          _i = e;
        for (var _t2 in _i)
          !r.has(_t2) &&
            Object.prototype.hasOwnProperty.call(_i, _t2) &&
            (_n[_t2] = a(_n[_t2], _i[_t2]));
        return t;
      }
      return e;
    }
    var c = 0,
      d = 1,
      g = 2,
      h = 3,
      f = 4,
      u = 5,
      l = 6,
      p = 7;
    function m(t) {
      return t.id === c;
    }
    function x(t) {
      return t.id === g;
    }
    function E(t) {
      return (
        (function (t) {
          return t.id === d;
        })(t) || i(305, String(t.id), String(d)),
        Object.assign(t, { id: g })
      );
    }
    var S = new Set();
    var _b = (function () {
      function b(t, e) {
        ((this.builder = t),
          (this.extension = e),
          (this.configs = new Set()),
          (this.state = { id: c }));
      }
      var _proto = b.prototype;
      _proto.mergeConfigs = function mergeConfigs() {
        var e = this.extension.config || {};
        var n = this.extension.mergeConfig
          ? this.extension.mergeConfig.bind(this.extension)
          : require("Lexical").shallowMergeConfig;
        for (var _t3 of this.configs) e = n(e, _t3);
        return e;
      };
      _proto.init = function init(t) {
        var e = this.state;
        x(e) || i(306, String(e.id));
        var n = {
            getDependency: this.getInitDependency.bind(this),
            getDirectDependentNames: this.getDirectDependentNames.bind(this),
            getPeer: this.getInitPeer.bind(this),
            getPeerNameSet: this.getPeerNameSet.bind(this),
          },
          s = babelHelpers["extends"]({}, n, {
            getDependency: this.getDependency.bind(this),
            getInitResult: this.getInitResult.bind(this),
            getPeer: this.getPeer.bind(this),
          }),
          o = (function (t, e, n) {
            return Object.assign(t, { config: e, id: h, registerState: n });
          })(e, this.mergeConfigs(), n);
        var r;
        ((this.state = o),
          this.extension.init && (r = this.extension.init(t, o.config, n)),
          (this.state = (function (t, e, n) {
            return Object.assign(t, { id: f, initResult: e, registerState: n });
          })(o, r, s)));
      };
      _proto.build = function build(t) {
        var e = this.state;
        var n;
        (e.id !== f && i(307, String(e.id), String(u)),
          this.extension.build &&
            (n = this.extension.build(t, e.config, e.registerState)));
        var s = babelHelpers["extends"]({}, e.registerState, {
          getOutput: function getOutput() {
            return n;
          },
          getSignal: this.getSignal.bind(this),
        });
        this.state = (function (t, e, n) {
          return Object.assign(t, { id: u, output: e, registerState: n });
        })(e, n, s);
      };
      _proto.register = function register(t, e) {
        var _this = this;
        this._signal = e;
        var n = this.state;
        n.id !== u && i(308, String(n.id), String(u));
        var s =
          this.extension.register &&
          this.extension.register(t, n.config, n.registerState);
        return (
          (this.state = (function (t) {
            return Object.assign(t, { id: l });
          })(n)),
          function () {
            var t = _this.state;
            (t.id !== p && i(309, String(n.id), String(p)),
              (_this.state = (function (t) {
                return Object.assign(t, { id: u });
              })(t)),
              s && s());
          }
        );
      };
      _proto.afterRegistration = function afterRegistration(t) {
        var e = this.state;
        var n;
        return (
          e.id !== l && i(310, String(e.id), String(l)),
          this.extension.afterRegistration &&
            (n = this.extension.afterRegistration(
              t,
              e.config,
              e.registerState,
            )),
          (this.state = (function (t) {
            return Object.assign(t, { id: p });
          })(e)),
          n
        );
      };
      _proto.getSignal = function getSignal() {
        return (void 0 === this._signal && i(311), this._signal);
      };
      _proto.getInitResult = function getInitResult() {
        void 0 === this.extension.init && i(312, this.extension.name);
        var t = this.state;
        return (
          (function (t) {
            return t.id >= f;
          })(t) || i(313, String(t.id), String(f)),
          t.initResult
        );
      };
      _proto.getInitPeer = function getInitPeer(t) {
        var e = this.builder.extensionNameMap.get(t);
        return e ? e.getExtensionInitDependency() : void 0;
      };
      _proto.getExtensionInitDependency =
        function getExtensionInitDependency() {
          var t = this.state;
          return (
            (function (t) {
              return t.id >= h;
            })(t) || i(314, String(t.id), String(h)),
            { config: t.config }
          );
        };
      _proto.getPeer = function getPeer(t) {
        var e = this.builder.extensionNameMap.get(t);
        return e ? e.getExtensionDependency() : void 0;
      };
      _proto.getInitDependency = function getInitDependency(t) {
        var e = this.builder.getExtensionRep(t);
        return (
          void 0 === e && i(315, this.extension.name, t.name),
          e.getExtensionInitDependency()
        );
      };
      _proto.getDependency = function getDependency(t) {
        var e = this.builder.getExtensionRep(t);
        return (
          void 0 === e && i(315, this.extension.name, t.name),
          e.getExtensionDependency()
        );
      };
      _proto.getState = function getState() {
        var t = this.state;
        return (
          (function (t) {
            return t.id >= p;
          })(t) || i(316, String(t.id), String(p)),
          t
        );
      };
      _proto.getDirectDependentNames = function getDirectDependentNames() {
        return this.builder.incomingEdges.get(this.extension.name) || S;
      };
      _proto.getPeerNameSet = function getPeerNameSet() {
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
      _proto.getExtensionDependency = function getExtensionDependency() {
        if (!this._dependency) {
          var _t4 = this.state;
          ((function (t) {
            return t.id >= u;
          })(_t4) || i(317, this.extension.name),
            (this._dependency = {
              config: _t4.config,
              init: _t4.initResult,
              output: _t4.output,
            }));
        }
        return this._dependency;
      };
      return b;
    })();
    var y = Symbol["for"]("LexicalExtensionLexicalBuilder");
    function R() {}
    function v(t) {
      throw t;
    }
    function N(t) {
      return Array.isArray(t) ? t : [t];
    }
    var w = o;
    var _2 = (function () {
      function _(t) {
        ((this.outgoingConfigEdges = new Map()),
          (this.incomingEdges = new Map()),
          (this.extensionNameMap = new Map()),
          (this.conflicts = new Map()),
          (this.PACKAGE_VERSION = w),
          (this.roots = t));
        for (var _e of t) this.addExtension(_e);
      }
      _.fromExtensions = function fromExtensions(t) {
        var e = [
          N(
            require("LexicalExtensionInitialStateExtension")
              .InitialStateExtension,
          ),
        ];
        for (var _n2 of t) e.push(N(_n2));
        return new _(e);
      };
      _.maybeFromEditor = function maybeFromEditor(t) {
        var e = t[y];
        return (
          e &&
            (e.PACKAGE_VERSION !== w && i(292, e.PACKAGE_VERSION, w),
            e instanceof _ || i(293)),
          e
        );
      };
      _.fromEditor = function fromEditor(t) {
        var e = _.maybeFromEditor(t);
        return (void 0 === e && i(294), e);
      };
      var _proto2 = _.prototype;
      _proto2.constructEditor = function constructEditor() {
        var _Object$assign;
        var _this$buildCreateEdit = this.buildCreateEditorArgs(),
          e = _this$buildCreateEdit.$initialEditorState,
          n = _this$buildCreateEdit.onError,
          i = _this$buildCreateEdit.onWarn,
          s = babelHelpers.objectWithoutPropertiesLoose(
            _this$buildCreateEdit,
            _excluded,
          ),
          o = Object.assign(
            require("Lexical").createEditor(
              babelHelpers["extends"](
                {},
                s,
                n
                  ? {
                      onError: function onError(t) {
                        n(t, o);
                      },
                    }
                  : {},
                i
                  ? {
                      onWarn: function onWarn(t) {
                        i(t, o);
                      },
                    }
                  : {},
              ),
            ),
            ((_Object$assign = {}), (_Object$assign[y] = this), _Object$assign),
          );
        for (var _t5 of this.sortedExtensionReps()) _t5.build(o);
        return o;
      };
      _proto2.buildEditor = function buildEditor() {
        var _Object$assign2;
        var e = R;
        function n() {
          try {
            e();
          } finally {
            e = R;
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
      _proto2.hasExtensionByName = function hasExtensionByName(t) {
        return this.extensionNameMap.has(t);
      };
      _proto2.getExtensionRep = function getExtensionRep(t) {
        var e = this.extensionNameMap.get(t.name);
        if (e) return (e.extension !== t && i(295, t.name), e);
      };
      _proto2.addEdge = function addEdge(t, e, n) {
        var i = this.outgoingConfigEdges.get(t);
        if (i) {
          var _t6 = i.get(e);
          _t6 ? _t6.push.apply(_t6, Array.from(n)) : i.set(e, n);
        } else this.outgoingConfigEdges.set(t, new Map([[e, n]]));
        var s = this.incomingEdges.get(e);
        s ? s.add(t) : this.incomingEdges.set(e, new Set([t]));
      };
      _proto2.addExtension = function addExtension(t) {
        void 0 !== this._sortedExtensionReps && i(296);
        var e = N(t),
          n = e[0];
        "string" != typeof n.name && i(297, typeof n.name);
        var s = this.extensionNameMap.get(n.name);
        if ((void 0 !== s && s.extension !== n && i(298, n.name), !s)) {
          ((s = new _b(this, n)), this.extensionNameMap.set(n.name, s));
          var _t7 = this.conflicts.get(n.name);
          "string" == typeof _t7 && i(299, n.name, _t7);
          for (var _t8 of n.conflictsWith || [])
            (this.extensionNameMap.has(_t8) && i(299, n.name, _t8),
              this.conflicts.set(_t8, n.name));
          for (var _t9 of n.dependencies || []) {
            var _e2 = N(_t9);
            (this.addEdge(n.name, _e2[0].name, _e2.slice(1)),
              this.addExtension(_e2));
          }
          for (var _ref3 of n.peerDependencies || []) {
            var _t0 = _ref3[0];
            var _e3 = _ref3[1];
            this.addEdge(n.name, _t0, _e3 ? [_e3] : []);
          }
        }
      };
      _proto2.sortedExtensionReps = function sortedExtensionReps() {
        var _this2 = this;
        if (this._sortedExtensionReps) return this._sortedExtensionReps;
        var t = [],
          _e4 = function e(n, s) {
            var o = n.state;
            if (x(o)) return;
            var r = n.extension.name;
            var a;
            (m(o) || i(300, r, s || "[unknown]"),
              m((a = o)) || i(304, String(a.id), String(c)),
              (o = Object.assign(a, { id: d })),
              (n.state = o));
            var g = _this2.outgoingConfigEdges.get(r);
            if (g)
              for (var _t1 of g.keys()) {
                var _n3 = _this2.extensionNameMap.get(_t1);
                _n3 && _e4(_n3, r);
              }
            ((o = E(o)), (n.state = o), t.push(n));
          };
        for (var _t10 of this.extensionNameMap.values())
          m(_t10.state) && _e4(_t10);
        for (var _e5 of t)
          for (var _ref5 of this.outgoingConfigEdges.get(_e5.extension.name) ||
            []) {
            var _t11 = _ref5[0];
            var _n4 = _ref5[1];
            if (_n4.length > 0) {
              var _e6 = this.extensionNameMap.get(_t11);
              if (_e6) for (var _t12 of _n4) _e6.configs.add(_t12);
            }
          }
        for (var _ref7 of this.roots) {
          var _t13 = _ref7[0];
          var _e7 = babelHelpers.arrayLikeToArray(_ref7).slice(1);
          if (_e7.length > 0) {
            var _n5 = this.extensionNameMap.get(_t13.name);
            void 0 === _n5 && i(301, _t13.name);
            for (var _t14 of _e7) _n5.configs.add(_t14);
          }
        }
        return ((this._sortedExtensionReps = t), this._sortedExtensionReps);
      };
      _proto2.registerEditor = function registerEditor(e) {
        var n = this.sortedExtensionReps(),
          i = new AbortController(),
          s = [
            function () {
              return i.abort();
            },
          ],
          o = i.signal;
        for (var _t15 of n) {
          var _n6 = _t15.register(e, o);
          _n6 && s.push(_n6);
        }
        for (var _t16 of n) {
          var _n7 = _t16.afterRegistration(e);
          _n7 && s.push(_n7);
        }
        return require("Lexical").mergeRegister.apply(
          require("Lexical"),
          Array.from(s),
        );
      };
      _proto2.buildCreateEditorArgs = function buildCreateEditorArgs() {
        var t = {},
          n = new Set(),
          s = new Map(),
          o = new Map(),
          r = {},
          c = {},
          d = this.sortedExtensionReps();
        for (var _g of d) {
          var _d = _g.extension;
          if (
            (void 0 !== _d.onError && (t.onError = _d.onError),
            void 0 !== _d.onWarn && (t.onWarn = _d.onWarn),
            void 0 !== _d.disableEvents && (t.disableEvents = _d.disableEvents),
            void 0 !== _d.parentEditor && (t.parentEditor = _d.parentEditor),
            void 0 !== _d.editable && (t.editable = _d.editable),
            void 0 !== _d.namespace && (t.namespace = _d.namespace),
            void 0 !== _d.$initialEditorState &&
              (t.$initialEditorState = _d.$initialEditorState),
            _d.nodes)
          )
            for (var _t17 of require("LexicalExtensionConfig").getNodeConfig(
              _d,
            )) {
              if ("function" != typeof _t17) {
                var _e8 = s.get(_t17.replace);
                (_e8 && i(302, _d.name, _t17.replace.name, _e8.extension.name),
                  s.set(_t17.replace, _g));
              }
              n.add(_t17);
            }
          if (_d.html) {
            if (_d.html["export"])
              for (var _ref9 of _d.html["export"].entries()) {
                var _t18 = _ref9[0];
                var _e9 = _ref9[1];
                o.set(_t18, _e9);
              }
            _d.html["import"] && Object.assign(r, _d.html["import"]);
          }
          _d.theme && a(c, _d.theme);
        }
        (Object.keys(c).length > 0 && (t.theme = c),
          n.size && (t.nodes = Array.from(n)));
        var g = Object.keys(r).length > 0,
          h = o.size > 0;
        (g || h) &&
          ((t.html = {}),
          g && (t.html["import"] = r),
          h && (t.html["export"] = o));
        for (var _e0 of d) _e0.init(t);
        return (t.onError || (t.onError = v), t);
      };
      return _;
    })();
    ((exports.LexicalBuilder = _2),
      (exports.buildEditorFromExtensions = function () {
        for (
          var _len2 = arguments.length, t = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          t[_key2] = arguments[_key2];
        }
        return _2.fromExtensions(t).buildEditor();
      }),
      (exports.builderSymbol = y));
  },
  null,
);
