__d(
  "BillingWizardConfigParser",
  [
    "BillingWizardConfigParserUtils",
    "BillingWizardConfigUtils",
    "BillingWizardDecisionState",
    "BillingWizardDecisionStateWithoutMutation",
    "BillingWizardDisplayState",
    "BillingWizardInitUtils",
    "BillingWizardRootUPLogger",
    "BillingWizardTypes",
    "JSResourceForInteraction",
    "Promise",
    "RelayHooks",
    "asyncToGeneratorRuntime",
    "buildInternalWizardBillingError",
    "configCache",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useCallback,
      c = r("requireDeferred")("BillingWizardPerformTransition").__setRef(
        "BillingWizardConfigParser",
      ),
      d = r("requireDeferred")(
        "BillingWizardPreloadingUtilsUnrefactored",
      ).__setRef("BillingWizardConfigParser"),
      m = r("requireDeferred")("BillingWizardSpecificStatePreloader").__setRef(
        "BillingWizardConfigParser",
      ),
      p = r("JSResourceForInteraction")("BillingWizardConsoleLog").__setRef(
        "BillingWizardConfigParser",
      ),
      _ = !1;
    function f(t, r, a, i) {
      var l = o("react-compiler-runtime").c(1),
        s = o("RelayHooks").useRelayEnvironment(),
        u = function (t, n) {
          (o("configCache").setConfigCache(null), a(t, n));
        };
      if (r.preload) return null;
      var c;
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = o("configCache").getConfigCache()), (l[0] = c))
        : (c = l[0]);
      var d = c;
      if (d == null)
        throw (
          o("configCache").setConfigCache(
            o("BillingWizardConfigParserUtils")
              .buildInitState(t, r, u, i)
              .then(function (e) {
                return e;
              })
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      return o("BillingWizardInitUtils").buildState(
                        yield S(e, s, i),
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              )
              .then(h)
              .catch(g),
          ),
          o("configCache").getConfigCache()
        );
      if (d instanceof (e || (e = n("Promise"))) || d instanceof Error) throw d;
      return d;
    }
    function g(e) {
      throw (o("configCache").setConfigCache(e), e);
    }
    function h(e) {
      return (o("configCache").setConfigCache(e), e);
    }
    function y() {}
    function C() {
      _ = !0;
    }
    function b(e, t, n, r, o, a, i, l) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, o, a, i, l, s) {
            var u, c, d;
            if (
              t === "DONE" &&
              (i === "none" || i === "onSuccess" || i === "pass")
            ) {
              var m = {
                event_action: "execute",
                event_result: "exit",
                event_side: "client",
                flow_milestone: "Completed",
                target_name: "flow_completed",
              };
              r("BillingWizardRootUPLogger").logEvent(m);
            }
            if (t != null) {
              if (n != null) return S(n, l, s);
              if (a[t] != null) {
                var p,
                  _ = (p = yield a[t](o)) != null ? p : null;
                return t === "WIZARD" && _ != null ? S(_, l, s) : _;
              }
            } else {
              var f;
              switch (i) {
                case "onClose":
                  f = (u = yield a.EXIT(o)) != null ? u : null;
                  break;
                case "onBack":
                  f = (c = yield a.BACK(o)) != null ? c : null;
                  break;
                case "onDone":
                  f = (d = yield a.DONE(o)) != null ? d : null;
                  break;
                case "onWizard": {
                  var g = yield a.WIZARD(o);
                  if (g != null) return S(g, l, s);
                }
              }
              if (f !== void 0) return f;
            }
            throw r("buildInternalWizardBillingError")(
              "Hit invalid state in followTransition - " +
                e +
                " - no transition for: " +
                t +
                ", event: " +
                i,
              "Invalid transition",
            );
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      var a,
        i = e.props,
        l = e.state,
        s = n.gk,
        u = n.qe;
      if (
        (r("BillingWizardRootUPLogger").setWizardConfig(
          e.config.name,
          (a = e.config.logging_context) != null ? a : "billingdefault",
        ),
        o("BillingWizardConfigParserUtils").addLoggingMetaData(e),
        (i == null ? void 0 : i.paymentAccountID) != null &&
          u.updatePaymentAccountID(i.paymentAccountID),
        (i == null ? void 0 : i.paymentAccountID) != null &&
          s.updatePaymentAccountID(i.paymentAccountID),
        l instanceof o("BillingWizardDisplayState").DisplayState)
      )
        return R(e, t, n);
      if (l instanceof o("BillingWizardDecisionState").DecisionState)
        return E(e, t, n);
      if (
        l instanceof
        o("BillingWizardDecisionStateWithoutMutation")
          .DecisionStateWithoutMutation
      )
        return E(e, t, n);
      if (l instanceof o("BillingWizardTypes").RootConfigState)
        return I(e, t, n);
      if (l instanceof o("BillingWizardTypes").SubConfigState)
        return D(e, t, n);
      throw r("buildInternalWizardBillingError")(
        "Hit invalid state in followState in " + e.config.name,
        "Invalid transition",
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.props,
            i = e.state;
          if (i instanceof o("BillingWizardDisplayState").DisplayState) {
            var l = yield i.onEnterInternal(a, t, n),
              s = l.event,
              u = l.newProps;
            if (s != null) {
              var p,
                f = yield c.load(),
                g = yield f(e, s, u, t, n);
              return (p = g == null ? void 0 : g.internalState_DO_NOT_USE) !=
                null
                ? p
                : null;
            }
            return (
              _ ||
                i.setPreloadFuture(function (t) {
                  o("BillingWizardConfigParserUtils").shouldUseManualPreload(
                    e.config.name,
                  )
                    ? (r("BillingWizardRootUPLogger").logDebugEvent(
                        "unrefactored_wizard_preloader_with_manual_config_attempt",
                      ),
                      m.onReady(function (a) {
                        a(e.config, i.name, t, n)
                          .catch(function (e) {
                            o(
                              "BillingWizardConfigParserUtils",
                            ).handlePreloadingError(
                              n,
                              e,
                              "unrefactored_wizard_specific_preloader_with_manual_config_error",
                            );
                          })
                          .finally(function () {
                            (r("BillingWizardRootUPLogger").logDebugEvent(
                              "unrefactored_wizard_specific_preloader_with_manual_config_billing_complete",
                            ),
                              d.onReady(function (r) {
                                r(i, e.config, t, n);
                              }));
                          });
                      }))
                    : (r("BillingWizardRootUPLogger").logDebugEvent(
                        "unrefactored_wizard_preloader_attempt",
                      ),
                      d.onReady(function (r) {
                        r(i, e.config, t, n);
                      }));
                }),
              babelHelpers.extends({}, e, { direction: "FORWARD", props: u })
            );
          }
          throw r("buildInternalWizardBillingError")(
            "followDisplayState called with not a DisplayState in " +
              e.config.name,
            "Invalid transition",
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.config,
            i = e.jumpTable,
            l = e.props,
            s = e.state;
          if (
            (s instanceof o("BillingWizardDecisionState").DecisionState ||
              s instanceof
                o("BillingWizardDecisionStateWithoutMutation")
                  .DecisionStateWithoutMutation) &&
            !a.isConfigEntrypoint
          ) {
            var u = yield s.onDecide(l, n),
              c = u.event,
              d = u.newProps,
              m = babelHelpers.extends({}, e, { props: d }),
              p = s.events[c];
            return b(
              a.name,
              p,
              a.states[p] != null
                ? babelHelpers.extends({}, m, { state: a.states[p] })
                : null,
              m,
              i,
              c,
              t,
              n,
            );
          }
          throw r("buildInternalWizardBillingError")(
            a.isConfigEntrypoint
              ? "followDecisionState called while still in config entrypoint"
              : "followDecisionState called with not a DecisionState in " +
                  a.name,
            "Invalid transition",
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.config,
            i = e.jumpTable,
            l = e.props,
            s = e.state;
          if (
            s instanceof o("BillingWizardTypes").RootConfigState &&
            !a.isConfigEntrypoint
          ) {
            var u = yield s.getConfig(l).load(),
              c = o("BillingWizardConfigUtils").buildConfig(u);
            if (!c.isConfigEntrypoint) {
              var d;
              r("BillingWizardRootUPLogger").setWizardConfig(
                c.name,
                (d = c.logging_context) != null ? d : "billingdefault",
              );
              var m = o("BillingWizardInitUtils").findMissingRequiredProps(
                c.required,
                l,
              );
              if (m !== "")
                throw r("buildInternalWizardBillingError")(
                  "Missing Required Prop: " + m + " for: " + c.name,
                  "required props is missing or invalid",
                );
              var p = c.transitions.reduce(function (u, d) {
                if (s.events[d] != null) {
                  var m,
                    p = function (m) {
                      var u = s.events[d];
                      if (a.states[u] != null)
                        return S(
                          babelHelpers.extends({}, e, {
                            props: o(
                              "BillingWizardConfigParserUtils",
                            ).combineProps(l, m.props),
                            state: a.states[u],
                          }),
                          t,
                          n,
                        );
                      if (i[u] != null) return i[u](m);
                      throw r("buildInternalWizardBillingError")(
                        "Hit invalid state in jump from " +
                          c.name +
                          " - no transition for: " +
                          u,
                        "Invalid transition",
                      );
                    };
                  return babelHelpers.extends({}, u, ((m = {}), (m[d] = p), m));
                }
                return u;
              }, i);
              return (
                s.preserveBack ||
                  (p = babelHelpers.extends({}, p, { BACK: p.EXIT })),
                S(
                  babelHelpers.extends({}, e, {
                    config: c,
                    hasBack: s.preserveBack,
                    jumpTable: p,
                    state: c.states[c.entryPoint],
                  }),
                  t,
                  n,
                )
              );
            }
          }
          throw r("buildInternalWizardBillingError")(
            a.isConfigEntrypoint
              ? "followConfigState called while still in config entrypoint"
              : "followConfigState called with not a ConfigState in " +
                  e.config.name,
            "Invalid transition",
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.config,
            i = e.jumpTable,
            l = e.props,
            s = e.state;
          if (
            s instanceof o("BillingWizardTypes").SubConfigState &&
            !a.isConfigEntrypoint
          ) {
            var u,
              c = yield s.getConfig().load(),
              d = o("BillingWizardConfigUtils").buildSubConfig(c);
            r("BillingWizardRootUPLogger").setWizardConfig(
              d.name,
              (u = d.logging_context) != null ? u : "billingdefault",
            );
            var m = o("BillingWizardInitUtils").findMissingRequiredProps(
              d.required,
              l,
            );
            if (m !== "")
              throw r("buildInternalWizardBillingError")(
                "Missing Required Prop: " + m + " for sub config: " + d.name,
                "required props is missing or invalid",
              );
            var p = d.transitions.reduce(function (u, c) {
              if (s.events[c] != null) {
                var m,
                  p = function (m) {
                    var u = s.events[c];
                    if (a.states[u] != null)
                      return S(
                        babelHelpers.extends(
                          {},
                          e,
                          {
                            props: o(
                              "BillingWizardConfigParserUtils",
                            ).combineProps(l, m.props),
                            state: a.states[u],
                          },
                          m.jumpTable.BACK != null
                            ? {
                                jumpTable: babelHelpers.extends(
                                  {},
                                  e.jumpTable,
                                  { BACK: m.jumpTable.BACK },
                                ),
                              }
                            : {},
                        ),
                        t,
                        n,
                      );
                    if (i[u] != null) return i[u](m);
                    throw r("buildInternalWizardBillingError")(
                      "Hit invalid state in jump from sub config - " +
                        d.name +
                        " - no transition for: " +
                        u,
                      "Invalid transition",
                    );
                  };
                return babelHelpers.extends({}, u, ((m = {}), (m[c] = p), m));
              }
              return u;
            }, i);
            return S(
              babelHelpers.extends({}, e, {
                config: d,
                jumpTable: p,
                state: d.states[d.entryPoint],
              }),
              t,
              n,
            );
          }
          throw r("buildInternalWizardBillingError")(
            a.isConfigEntrypoint
              ? "followSubConfigState called while still in config entrypoint"
              : "followSubConfigState called with not a SubConfigState in " +
                  e.config.name,
            "Invalid transition",
          );
        })),
        x.apply(this, arguments)
      );
    }
    ((l.useConfig = f),
      (l.setTestExecution = C),
      (l.followTransition = b),
      (l.followState = S));
  },
  98,
);
