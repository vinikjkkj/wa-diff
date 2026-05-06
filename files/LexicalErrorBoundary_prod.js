__d(
  "LexicalErrorBoundary.prod",
  ["react"],
  function $module_LexicalErrorBoundary_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_closure_react;
    var r =
        _require_closure_react || (_require_closure_react = require("react")),
      e = _require_closure_react;
    var t = r.createContext(null),
      o = { didCatch: !1, error: null };
    var _s3 = (function (_r$Component) {
      function s(r) {
        var _this;
        ((_this = _r$Component.call(this, r) || this),
          (_this.resetErrorBoundary = _this.resetErrorBoundary.bind(
            babelHelpers.assertThisInitialized(_this),
          )),
          (_this.state = o));
        return _this;
      }
      babelHelpers.inheritsLoose(s, _r$Component);
      s.getDerivedStateFromError = function getDerivedStateFromError(r) {
        return { didCatch: !0, error: r };
      };
      var _proto = s.prototype;
      _proto.resetErrorBoundary = function resetErrorBoundary() {
        var _this$props$onReset, _this$props;
        var e = this.state.error;
        for (
          var _len = arguments.length, r = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          r[_key] = arguments[_key];
        }
        null !== e &&
          ((_this$props$onReset = (_this$props = this.props).onReset) != null &&
            _this$props$onReset.call(_this$props, {
              args: r,
              reason: "imperative-api",
            }),
          this.setState(o));
      };
      _proto.componentDidCatch = function componentDidCatch(r, e) {
        var _this$props$onError, _this$props2;
        (_this$props$onError = (_this$props2 = this.props).onError) == null ||
          _this$props$onError.call(_this$props2, r, e);
      };
      _proto.componentDidUpdate = function componentDidUpdate(r, e) {
        var _this$props$onReset2, _this$props3;
        var t = this.state.didCatch,
          _s = this.props.resetKeys;
        t &&
          null !== e.error &&
          (function (r, e) {
            if (r === void 0) {
              r = [];
            }
            if (e === void 0) {
              e = [];
            }
            return (
              r.length !== e.length ||
              r.some(function (r, t) {
                return !Object.is(r, e[t]);
              })
            );
          })(r.resetKeys, _s) &&
          ((_this$props$onReset2 = (_this$props3 = this.props).onReset) !=
            null &&
            _this$props$onReset2.call(_this$props3, {
              next: _s,
              prev: r.resetKeys,
              reason: "keys",
            }),
          this.setState(o));
      };
      _proto.render = function render() {
        var _this$props4 = this.props,
          e = _this$props4.children,
          o = _this$props4.fallbackRender,
          _s2 = _this$props4.FallbackComponent,
          n = _this$props4.fallback,
          _this$state = this.state,
          i = _this$state.didCatch,
          a = _this$state.error;
        var c = e;
        if (i) {
          var _e = { error: a, resetErrorBoundary: this.resetErrorBoundary };
          if ("function" == typeof o) c = o(_e);
          else if (_s2) c = r.createElement(_s2, _e);
          else {
            if (void 0 === n) throw a;
            c = n;
          }
        }
        return r.createElement(
          t.Provider,
          {
            value: {
              didCatch: i,
              error: a,
              resetErrorBoundary: this.resetErrorBoundary,
            },
          },
          c,
        );
      };
      return s;
    })(r.Component);
    exports.LexicalErrorBoundary = function (_ref) {
      var t = _ref.children,
        o = _ref.onError;
      var n = r.useCallback(
        function (r, e) {
          o(r instanceof Error ? r : new Error(String(r), { cause: r }), e);
        },
        [o],
      );
      return e.jsx(_s3, {
        fallback: e.jsx("div", {
          style: { border: "1px solid #f00", color: "#f00", padding: "8px" },
          children: "An error was thrown.",
        }),
        onError: n,
        children: t,
      });
    };
  },
  null,
);
