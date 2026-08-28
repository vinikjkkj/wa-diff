__d(
  "BillingWizardPreloadingUtilsUnrefactored",
  [
    "BillingAbstractUPLogger",
    "BillingError",
    "BillingWizardConfigUtils",
    "BillingWizardDecisionStateWithoutMutation",
    "BillingWizardDisplayState",
    "BillingWizardPreloadingUtilsHelpers",
    "BillingWizardRootUPLogger",
    "BillingWizardTypes",
    "Promise",
    "asyncToGeneratorRuntime",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(),
      u = 6,
      c = [];
    function d() {
      ((s = new Set()), (c = []));
    }
    function m(e, t, n, r, o) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = a.relay;
            if (!(e === null || i === 0 || s.has(e) || s.size > 100)) {
              s.add(e);
              var u = e.events,
                c = t;
              if (t.isConfigEntrypoint) {
                var d = o("BillingWizardConfigUtils").buildConfig(
                  yield t.hostConfig.load(),
                );
                if (!d.isConfigEntrypoint) {
                  var p = d.states[t.hostConfigEntryPoint];
                  p != null && ((u = p.events), (c = d));
                }
              }
              if (!c.isConfigEntrypoint) {
                var g = function* () {
                  var e = h[0],
                    t = h[1],
                    s = c.states[t];
                  if (s === void 0) return (f(a), 1);
                  s instanceof o("BillingWizardTypes").SubConfigState ||
                  s instanceof o("BillingWizardTypes").RootConfigState
                    ? s
                        .getConfig()
                        .load()
                        .then(function (e) {
                          var t;
                          e.default != null ? (t = e.default) : (t = e);
                          var r;
                          if (t.isRootConfig === !0)
                            r = o("BillingWizardConfigUtils").buildConfig(t);
                          else if (t.isRootConfig === !1)
                            r = o("BillingWizardConfigUtils").buildSubConfig(t);
                          else return;
                          var u = t.states[r.entryPoint];
                          ((u instanceof
                            o("BillingWizardDecisionStateWithoutMutation")
                              .DecisionStateWithoutMutation ||
                            u instanceof
                              o("BillingWizardDisplayState").DisplayState) &&
                            _(u, n, l, a),
                            m(u, r, n, a, i - 1),
                            m(s, c, n, a, i - 1));
                        })
                        .catch(function (e) {
                          if (e instanceof r("BillingError"))
                            (r("BillingWizardRootUPLogger").logDebugEvent(
                              "old_wizard_preloader_config_load_billing_error",
                            ),
                              a.gk.LOG_REFACTORED_PRELOADING_QUERY_ERRORS.getOrDefaultIfPromise() &&
                                r(
                                  "BillingWizardRootUPLogger",
                                ).logBillingPayloadError(
                                  e.type,
                                  e.errorPayload,
                                ));
                          else {
                            var t, n;
                            r("BillingWizardRootUPLogger").logDebugEvent(
                              "old_wizard_preloader_config_load_failure",
                              {
                                error_message:
                                  (t = e == null ? void 0 : e.message) != null
                                    ? t
                                    : "unknown error message",
                                error_name:
                                  (n = e == null ? void 0 : e.name) != null
                                    ? n
                                    : "unknown error name",
                              },
                            );
                          }
                        })
                    : s instanceof o("BillingWizardDisplayState").DisplayState
                      ? _(s, n, l, a)
                      : (s instanceof
                          o("BillingWizardDecisionStateWithoutMutation")
                            .DecisionStateWithoutMutation && _(s, n, l, a),
                        m(s, c, n, a, i - 1));
                };
                for (var h of Object.entries(u)) yield* g();
              }
            }
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e, t, a, i) {
      if (
        e instanceof
          o("BillingWizardDecisionStateWithoutMutation")
            .DecisionStateWithoutMutation ||
        e instanceof o("BillingWizardDisplayState").DisplayState
      ) {
        if (e.query != null && e.fetchPolicy !== "network-only") {
          var l = e.query,
            s = e.mapPropsToQuery(t, i),
            u = o(
              "BillingWizardPreloadingUtilsHelpers",
            ).arePreloadVariablesValid(s);
          if (u) {
            var d = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var t,
                    n =
                      (t = e == null ? void 0 : e.name) != null
                        ? t
                        : "state_unknown",
                    o = yield a.fetchQuery(
                      {
                        options: { fetchPolicy: "store-or-network" },
                        query: l,
                        queryName: r("BillingAbstractUPLogger")
                          .PRELOADED_QUERY_TARGET_NAME,
                        variables: s,
                      },
                      { event_data: { state_name: n } },
                      function () {
                        return { extra_data: { state_name: n } };
                      },
                      !1,
                    );
                  (i.preloadedStates.set(e.name, { results: o, variables: s }),
                    r("BillingWizardRootUPLogger").logDebugEvent(
                      "old_wizard_preloader_query_execution",
                      { state_name: e.name },
                    ));
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            c.push(d);
          }
        }
        e instanceof o("BillingWizardDisplayState").DisplayState && f(i);
      }
    }
    function f(t) {
      c.length > 0 &&
        ((e || (e = n("Promise")))
          .all(
            c.map(function (e) {
              return e();
            }),
          )
          .catch(function (e) {
            if (e instanceof r("BillingError"))
              (r("BillingWizardRootUPLogger").logDebugEvent(
                "old_wizard_preloader_query_execution_billing_error",
              ),
                t.gk.LOG_REFACTORED_PRELOADING_QUERY_ERRORS.getOrDefaultIfPromise() &&
                  r("BillingWizardRootUPLogger").logBillingPayloadError(
                    e.type,
                    e.errorPayload,
                  ));
            else {
              var n, o;
              r("BillingWizardRootUPLogger").logDebugEvent(
                "old_wizard_preloader_query_execution_failure",
                {
                  error_message:
                    (n = e == null ? void 0 : e.message) != null
                      ? n
                      : "unknown error message",
                  error_name:
                    (o = e == null ? void 0 : e.name) != null
                      ? o
                      : "unknown error name",
                },
              );
            }
          }),
        (c = []));
    }
    function g(e, t, n, o) {
      (d(), r("setTimeout")(function () {}, 250));
      var a = Date.now();
      m(e, t, n, o, u)
        .catch(function (e) {
          if (e instanceof r("BillingError"))
            (r("BillingWizardRootUPLogger").logDebugEvent(
              "old_wizard_preloader_overall_billing_error",
            ),
              o.gk.LOG_REFACTORED_PRELOADING_QUERY_ERRORS.getOrDefaultIfPromise() &&
                r("BillingWizardRootUPLogger").logBillingPayloadError(
                  e.type,
                  e.errorPayload,
                ));
          else {
            var t, n;
            r("BillingWizardRootUPLogger").logDebugEvent(
              "old_wizard_preloader_overall_failure",
              {
                error_message:
                  (t = e == null ? void 0 : e.message) != null
                    ? t
                    : "unknown error message",
                error_name:
                  (n = e == null ? void 0 : e.name) != null
                    ? n
                    : "unknown error name",
              },
            );
          }
        })
        .finally(function () {
          var t = Date.now(),
            n = t - a;
          r("BillingWizardRootUPLogger").logDebugEvent(
            "old_wizard_preloader_complete",
            { duration: String(n), state_name: e.name },
          );
        });
    }
    l.default = g;
  },
  98,
);
