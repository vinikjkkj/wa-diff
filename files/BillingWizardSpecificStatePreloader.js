__d(
  "BillingWizardSpecificStatePreloader",
  [
    "BillingAbstractUPLogger",
    "BillingError",
    "BillingWizardConfigUtils",
    "BillingWizardDecisionStateWithoutMutation",
    "BillingWizardDisplayState",
    "BillingWizardPreloadingUtilsHelpers",
    "BillingWizardRootUPLogger",
    "BillingWizardTypes",
    "JSResourceForInteraction",
    "Promise",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = new Map(),
      c = r("JSResourceForInteraction")("BillingWizardConsoleLog").__setRef(
        "BillingWizardSpecificStatePreloader",
      );
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            if (t.configAndStatesToPreload != null) {
              var c = t.configAndStatesToPreload[a];
              if (c != null) {
                var d = l.relay;
                yield (e || (e = n("Promise")))
                  .all(
                    c.map(
                      (function () {
                        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (t) {
                            var c = t.config,
                              m;
                            c instanceof o("BillingWizardTypes").RootConfigState
                              ? (m = yield o(
                                  "BillingWizardPreloadingUtilsHelpers",
                                ).loadConfigWithCache(c.getConfig(), s))
                              : (m = yield o(
                                  "BillingWizardPreloadingUtilsHelpers",
                                ).loadSubConfigWithCache(c.getConfig(), u));
                            var p;
                            m.default != null ? (p = m.default) : (p = m);
                            var _;
                            if (p.isRootConfig === !0)
                              _ = o("BillingWizardConfigUtils").buildConfig(p);
                            else if (p.isRootConfig === !1)
                              _ = o("BillingWizardConfigUtils").buildSubConfig(
                                p,
                              );
                            else return;
                            yield (e || (e = n("Promise")))
                              .all(
                                t.states.map(
                                  (function () {
                                    var e = n(
                                      "asyncToGeneratorRuntime",
                                    ).asyncToGenerator(function* (e) {
                                      var t = _.states[e];
                                      if (
                                        t != null &&
                                        (t instanceof
                                          o("BillingWizardDisplayState")
                                            .DisplayState ||
                                          t instanceof
                                            o(
                                              "BillingWizardDecisionStateWithoutMutation",
                                            ).DecisionStateWithoutMutation) &&
                                        t.query != null &&
                                        t.fetchPolicy !== "network-only"
                                      ) {
                                        var n = t.query,
                                          s = t.mapPropsToQuery(i, l),
                                          u = o(
                                            "BillingWizardPreloadingUtilsHelpers",
                                          ).arePreloadVariablesValid(s);
                                        u &&
                                          (yield d
                                            .fetchQuery(
                                              {
                                                options: {
                                                  fetchPolicy:
                                                    "store-or-network",
                                                },
                                                query: n,
                                                queryName: r(
                                                  "BillingAbstractUPLogger",
                                                ).PRELOADED_QUERY_TARGET_NAME,
                                                variables: s,
                                              },
                                              { event_data: { state_name: e } },
                                              function () {
                                                return {
                                                  extra_data: { state_name: e },
                                                };
                                              },
                                              !1,
                                            )
                                            .then(function (e) {
                                              l.preloadedStates.set(t.name, {
                                                results: e,
                                                variables: s,
                                              });
                                            })
                                            .catch(function (t) {
                                              if (
                                                t instanceof r("BillingError")
                                              )
                                                (r(
                                                  "BillingWizardRootUPLogger",
                                                ).logDebugEvent(
                                                  "fetch_specific_state_queries_billing_error",
                                                  {
                                                    config_name: c.name,
                                                    starting_state: a,
                                                    target_state: e,
                                                  },
                                                ),
                                                  l.gk.LOG_REFACTORED_PRELOADING_QUERY_ERRORS.getOrDefaultIfPromise() &&
                                                    r(
                                                      "BillingWizardRootUPLogger",
                                                    ).logBillingPayloadError(
                                                      t.type,
                                                      t.errorPayload,
                                                    ));
                                              else {
                                                var n,
                                                  o,
                                                  i = r("getErrorSafe")(t);
                                                r(
                                                  "BillingWizardRootUPLogger",
                                                ).logDebugEvent(
                                                  "fetch_specific_state_queries_failure",
                                                  {
                                                    config_name: c.name,
                                                    error_message:
                                                      (n = i.message) != null
                                                        ? n
                                                        : "unknown error message",
                                                    error_name:
                                                      (o = i.name) != null
                                                        ? o
                                                        : "unknown error name",
                                                    starting_state: a,
                                                    target_state: e,
                                                  },
                                                );
                                              }
                                            }));
                                      }
                                    });
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })(),
                                ),
                              )
                              .catch(function (e) {
                                var t,
                                  n,
                                  o = r("getErrorSafe")(e);
                                r("BillingWizardRootUPLogger").logDebugEvent(
                                  "fetch_specific_state_queries_failure",
                                  {
                                    config_name: c.name,
                                    error_message:
                                      (t = o.message) != null
                                        ? t
                                        : "unknown error message",
                                    error_name:
                                      (n = o.name) != null
                                        ? n
                                        : "unknown error name",
                                    starting_state: a,
                                  },
                                );
                              });
                          },
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })(),
                    ),
                  )
                  .catch(function (e) {
                    var n,
                      o,
                      i = r("getErrorSafe")(e);
                    r("BillingWizardRootUPLogger").logDebugEvent(
                      "fetch_specific_state_config_and_queries_failure",
                      {
                        config_name: t.name,
                        error_message:
                          (n = i.message) != null ? n : "unknown error message",
                        error_name:
                          (o = i.name) != null ? o : "unknown error name",
                        starting_state: a,
                      },
                    );
                  });
              }
            }
          },
        )),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
