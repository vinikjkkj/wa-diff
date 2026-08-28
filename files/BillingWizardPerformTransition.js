__d(
  "BillingWizardPerformTransition",
  [
    "BillingWizardConfigParser",
    "BillingWizardConfigParserUtils",
    "BillingWizardConfigUtils",
    "BillingWizardDisplayState",
    "BillingWizardInitUtils",
    "BillingWizardRootUPLogger",
    "Promise",
    "asyncToGeneratorRuntime",
    "buildInternalWizardBillingError",
    "interaction-tracing-metrics",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a, i) {
      return babelHelpers.extends({}, t.jumpTable, {
        BACK: (function () {
          var l = n("asyncToGeneratorRuntime").asyncToGenerator(function* (l) {
            var s,
              u = t.state,
              c = t.props;
            if (u instanceof o("BillingWizardDisplayState").DisplayState) {
              var d = yield u.onEnterInternal(c, a, i);
              c = d.newProps;
            }
            return (
              r("BillingWizardRootUPLogger").setWizardConfig(
                t.config.name,
                (s = t.config.logging_context) != null ? s : "billingdefault",
              ),
              (e || (e = n("Promise"))).resolve(
                babelHelpers.extends({}, t, {
                  direction: "BACKWARD",
                  props: babelHelpers.extends({}, c, {
                    status: l.props.status,
                  }),
                }),
              )
            );
          });
          function s(e) {
            return l.apply(this, arguments);
          }
          return s;
        })(),
      });
    }
    function u(e, t, n, r, o) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = e.props,
              u = e.jumpTable,
              c = e.config,
              d = e.state;
            if (d instanceof o("BillingWizardDisplayState").DisplayState) {
              var m,
                p = babelHelpers.extends(
                  { isTest: (m = l.isTest) != null ? m : !1 },
                  o("BillingWizardConfigParserUtils").combineProps(l, n),
                ),
                _ = yield d.onExitInternal(t, p, i),
                f = _.event,
                g = _.newProps,
                h = babelHelpers.extends({}, e, {
                  props:
                    f === "onClose"
                      ? babelHelpers.extends({ exitScreen: d.name }, g)
                      : g,
                });
              if (c.isConfigEntrypoint) {
                var y = c.hostConfigEntryPoint;
                if (
                  ((c = o("BillingWizardConfigUtils").buildConfig(
                    yield c.hostConfig.load(),
                  )),
                  c.isConfigEntrypoint)
                )
                  throw r("buildInternalWizardBillingError")(
                    "Config entrypoint cannot point to another config entrypoint in: " +
                      c.name,
                    "Invalid transition",
                  );
                ((d = c.states[y]),
                  (h = babelHelpers.extends({}, h, { config: c, state: d })));
              }
              var C = d.events,
                b = C[f];
              b === "STATUS" &&
                g.status == null &&
                f === "onDone" &&
                (b = "DONE");
              var v = s(h, a, i),
                S = babelHelpers.extends({}, h, { jumpTable: v }),
                R = yield o("BillingWizardConfigParser").followTransition(
                  c.name,
                  b,
                  c.states[b] != null
                    ? babelHelpers.extends({}, S, {
                        hasBack: !0,
                        state: c.states[b],
                      })
                    : null,
                  S,
                  u,
                  f,
                  a,
                  i,
                );
              return R != null
                ? (e.interactionUUID != null &&
                    R.state instanceof
                      o("BillingWizardDisplayState").DisplayState &&
                    o(
                      "interaction-tracing-metrics",
                    ).InteractionTracingMetricsCore.addAnnotation(
                      e.interactionUUID,
                      "to_page",
                      R.state.name,
                    ),
                  o("BillingWizardInitUtils").buildState(
                    babelHelpers.extends({}, R, {
                      interactionUUID: e.interactionUUID,
                    }),
                  ))
                : o("BillingWizardInitUtils").buildState(null);
            }
            throw r("buildInternalWizardBillingError")(
              "Hit invalid state in preformTransition - " +
                c.name +
                " - not a DisplayState",
              "Invalid transition",
            );
          },
        )),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
