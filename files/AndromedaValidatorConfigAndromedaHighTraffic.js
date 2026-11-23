__d(
  "AndromedaValidatorConfigAndromedaHighTraffic",
  ["AndromedaValidatorConfig", "ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !0;
    (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
      (s = Math.random() > 0.01);
    var u = new (r("AndromedaValidatorConfig"))({
      validationType: "AndromedaValidatorConfigAndromedaHighTraffic",
      logDataOnMismatch: !0,
      logActionsOnMismatch: !0,
      skipShadowValidation: s,
    });
    l.default = u;
  },
  98,
);
