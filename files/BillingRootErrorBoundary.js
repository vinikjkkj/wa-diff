__d(
  "BillingRootErrorBoundary",
  ["BillingErrorUtils", "BillingWizardRootUPLogger", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.state = { error: null }),
            (t.onDismiss = function () {
              t.setState({ error: null });
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        (babelHelpers.inheritsLoose(t, e),
          (t.getDerivedStateFromError = function (t) {
            var e = o("BillingErrorUtils").buildBillingErrorFromError(
              "client side unknown error",
              { event_action: "unknown", event_side: "client_side" },
              { action: "unknown", document_name: "error_boundary" },
              t,
              "critical_error",
            );
            return { error: e };
          }));
        var n = t.prototype;
        return (
          (n.componentDidCatch = function (t) {
            var e = o("BillingErrorUtils").buildBillingErrorFromError(
              "client side unknown error",
              { event_action: "unknown", event_side: "client_side" },
              { action: "unknown", document_name: "error_boundary" },
              t,
              "critical_error",
            );
            r("BillingWizardRootUPLogger").logBillingPayloadError(
              e.type,
              e.errorPayload,
            );
          }),
          (n.render = function () {
            return this.state.error
              ? this.props.renderError({
                  error: this.state.error,
                  onDismiss: this.onDismiss,
                })
              : this.props.children;
          }),
          t
        );
      })(s.PureComponent);
    l.default = u;
  },
  98,
);
