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
    var _o = (function (_r$Component) {
      function o() {
        var _this;
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }
        return (
          ((_this =
            _r$Component.call.apply(_r$Component, [this].concat(args)) || this),
          (_this.state = { hasError: !1 }),
          babelHelpers.assertThisInitialized(_this)) ||
          babelHelpers.assertThisInitialized(_this)
        );
      }
      babelHelpers.inheritsLoose(o, _r$Component);
      o.getDerivedStateFromError = function getDerivedStateFromError() {
        return { hasError: !0 };
      };
      var _proto = o.prototype;
      _proto.componentDidCatch = function componentDidCatch(r, e) {
        this.props.onError(
          r instanceof Error ? r : new Error(String(r), { cause: r }),
          e,
        );
      };
      _proto.render = function render() {
        return this.state.hasError ? this.props.fallback : this.props.children;
      };
      return o;
    })(r.Component);
    exports.LexicalErrorBoundary = function (_ref) {
      var r = _ref.children,
        t = _ref.fallback,
        n = _ref.onError;
      return e.jsx(_o, {
        fallback:
          void 0 === t
            ? e.jsx("div", {
                style: {
                  border: "1px solid #f00",
                  color: "#f00",
                  padding: "8px",
                },
                children: "An error was thrown.",
              })
            : t,
        onError: n,
        children: r,
      });
    };
  },
  null,
);
