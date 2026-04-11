__d(
  "WebBloksErrorBoundary",
  ["WebBloksErrorRoot", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = r("react")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.state = { error: null }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        (babelHelpers.inheritsLoose(t, e),
          (t.getDerivedStateFromError = function (t) {
            return { hasError: !0, error: t };
          }));
        var n = t.prototype;
        return (
          (n.componentDidCatch = function (t, n) {
            this.props.logger.mustfix(
              "Error rendering components: %s",
              t,
              n == null ? void 0 : n.componentStack,
            );
          }),
          (n.render = function () {
            var e = this.state.error;
            return e != null
              ? s.jsx(r("WebBloksErrorRoot"), { error: e })
              : this.props.children;
          }),
          t
        );
      })(s.Component);
    l.default = u;
  },
  98,
);
