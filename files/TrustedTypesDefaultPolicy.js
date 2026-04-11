__d(
  "TrustedTypesDefaultPolicy",
  [
    "Env",
    "TrustedTypes",
    "TrustedTypesSecurityInfraLoggingDefaultPolicy_FOR_ROLLOUT_ONLY_DO_NOT_USE",
    "TrustedTypesUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    (e || (e = r("Env"))).defaultTrustedTypesPolicyName ===
      "security_infra_logging_FOR_ROLLOUT_ONLY_DO_NOT_USE" &&
      (o("TrustedTypesUtils").logInfo(
        "A default Trusted Types policy for rollout is in use. To view violations see project `saf_web_trusted_types_rollout` in LogView.",
      ),
      r("TrustedTypes").createDefaultPolicy(
        r(
          "TrustedTypesSecurityInfraLoggingDefaultPolicy_FOR_ROLLOUT_ONLY_DO_NOT_USE",
        ),
      ));
  },
  35,
);
