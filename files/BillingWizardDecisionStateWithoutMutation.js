__d(
  "BillingWizardDecisionStateWithoutMutation",
  [
    "BillingWizardDecisionState",
    "BillingWizardRootUPLogger",
    "Random",
    "asyncToGeneratorRuntime",
    "justknobx",
    "writePrefetchValidationDebugLogging",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.name = "placeholder"),
          (t.preload = !0),
          (t.preloadedQuery = null),
          (t.allowPreloading = !0),
          (t.query = null),
          (t.mapPropsToQuery = function (e) {
            return babelHelpers.extends({}, e);
          }),
          (t.fetchPolicy = "store-or-network"),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.onDecide = function (t, n) {
          var e = new Error("Failed to set onDecide");
          throw (e.stack, e);
        }),
        (a.maybePrefetchValidationDebugLogging = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, a) {
              try {
                var i = t.preloadedStates,
                  l = t.relay.fetchQuery;
                if (
                  r("justknobx")._("5030") &&
                  o("Random").intBetween(1, 100) < 5
                ) {
                  var s,
                    u = yield l(
                      {
                        query: n,
                        queryName: a,
                        variables: this.mapPropsToQuery(e, t),
                      },
                      {},
                      void 0,
                      !0,
                      void 0,
                      void 0,
                      "network-only",
                    );
                  r("writePrefetchValidationDebugLogging")(
                    this.name,
                    (s = i.get(this.name)) == null ? void 0 : s.results,
                    u,
                  );
                }
              } catch (e) {
                r("BillingWizardRootUPLogger").logDebugEvent(
                  "prefetch_validation_debug_logging_failure",
                  {
                    error_message: e instanceof Error ? e.message : String(e),
                    state_name: this.name,
                  },
                );
              }
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })(o("BillingWizardDecisionState").DecisionState);
    l.DecisionStateWithoutMutation = e;
  },
  98,
);
