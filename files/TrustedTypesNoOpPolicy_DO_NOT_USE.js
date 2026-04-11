__d(
  "TrustedTypesNoOpPolicy_DO_NOT_USE",
  ["TrustedTypes", "TrustedTypesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        createScriptURL: o("TrustedTypesUtils").noop,
        createHTML: o("TrustedTypesUtils").noop,
        createScript: o("TrustedTypesUtils").noop,
      },
      s = r("TrustedTypes").createPolicy("noop-do-not-use", e),
      u = s;
    l.default = u;
  },
  98,
);
