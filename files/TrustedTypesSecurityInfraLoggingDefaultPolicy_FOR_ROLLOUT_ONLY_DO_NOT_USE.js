__d(
  "TrustedTypesSecurityInfraLoggingDefaultPolicy_FOR_ROLLOUT_ONLY_DO_NOT_USE",
  ["TrustedTypesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        name: "security_infra_logging_FOR_ROLLOUT_ONLY_DO_NOT_USE",
        policy: {
          createScriptURL: function (t, n) {
            return o("TrustedTypesUtils").noopAndLog(t);
          },
          createHTML: function (t, n) {
            return o("TrustedTypesUtils").noopAndLog(t);
          },
          createScript: function (t, n) {
            return o("TrustedTypesUtils").noopAndLog(t);
          },
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
