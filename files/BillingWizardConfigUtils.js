__d(
  "BillingWizardConfigUtils",
  ["BillingWizardTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return babelHelpers.extends(
        {
          isConfigEntrypoint: !1,
          isRootConfig: !0,
          output: [],
          required: [],
          transitions: o("BillingWizardTypes").BASE_TRANSITIONS,
        },
        e,
      );
    }
    function s(e) {
      return {
        configAndStatesToPreload: e.configAndStatesToPreload,
        configPropsInitialization: e.configPropsInitialization,
        hostConfig: e.hostConfig,
        hostConfigEntryPoint: e.hostConfigEntryPoint.stateName,
        isConfigEntrypoint: !0,
        isRootConfig: !0,
        logging_context: e.logging_context,
        name: e.name,
        output: [],
        required: [],
        startState: new e.hostConfigEntryPoint.state({}),
        title: e.title,
        transitions: o("BillingWizardTypes").BASE_TRANSITIONS,
      };
    }
    function u(t) {
      var n;
      return (
        t.default != null ? (n = t.default) : (n = t),
        n.hostConfig != null ? s(n) : e(n)
      );
    }
    function c(e) {
      var t, n;
      return (
        e.default != null ? (n = e.default) : (n = e),
        babelHelpers.extends(
          {
            isConfigEntrypoint: !1,
            isRootConfig: !1,
            output: [],
            required: [],
            transitions: Array.from(
              new Set(
                [].concat(
                  o("BillingWizardTypes").BASE_TRANSITIONS,
                  (t = n.externalTransitions) != null ? t : [],
                ),
              ),
            ),
          },
          n,
        )
      );
    }
    ((l.buildConfigEntrypoint = s),
      (l.buildConfig = u),
      (l.buildSubConfig = c));
  },
  98,
);
