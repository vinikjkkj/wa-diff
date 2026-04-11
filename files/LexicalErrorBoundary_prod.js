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
    var _s4 = (function (_r$Component) {
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
        var r = this.state.error;
        if (null !== r) {
          for (
            var e, t, _s = arguments.length, n = new Array(_s), i = 0;
            i < _s;
            i++
          )
            n[i] = arguments[i];
          (null === (e = (t = this.props).onReset) ||
            void 0 === e ||
            e.call(t, { args: n, reason: "imperative-api" }),
            this.setState(o));
        }
      };
      _proto.componentDidCatch = function componentDidCatch(r, e) {
        var t, o;
        null === (t = (o = this.props).onError) ||
          void 0 === t ||
          t.call(o, r, e);
      };
      _proto.componentDidUpdate = function componentDidUpdate(r, e) {
        var t = this.state.didCatch,
          _s2 = this.props.resetKeys;
        var n, i;
        t &&
          null !== e.error &&
          (function () {
            var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [];
            return (
              r.length !== e.length ||
              r.some(function (r, t) {
                return !Object.is(r, e[t]);
              })
            );
          })(r.resetKeys, _s2) &&
          (null === (n = (i = this.props).onReset) ||
            void 0 === n ||
            n.call(i, { next: _s2, prev: r.resetKeys, reason: "keys" }),
          this.setState(o));
      };
      _proto.render = function render() {
        var _this$props = this.props,
          e = _this$props.children,
          o = _this$props.fallbackRender,
          _s3 = _this$props.FallbackComponent,
          n = _this$props.fallback,
          _this$state = this.state,
          i = _this$state.didCatch,
          a = _this$state.error;
        var l = e;
        if (i) {
          var _e = { error: a, resetErrorBoundary: this.resetErrorBoundary };
          if ("function" == typeof o) l = o(_e);
          else if (_s3) l = r.createElement(_s3, _e);
          else {
            if (void 0 === n) throw a;
            l = n;
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
          l,
        );
      };
      return s;
    })(r.Component);
    exports.LexicalErrorBoundary = function (_ref) {
      var r = _ref.children,
        t = _ref.onError;
      return e.jsx(_s4, {
        fallback: e.jsx("div", {
          style: { border: "1px solid #f00", color: "#f00", padding: "8px" },
          children: "An error was thrown.",
        }),
        onError: t,
        children: r,
      });
    };
  },
  null,
);
