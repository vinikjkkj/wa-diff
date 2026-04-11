__d(
  "TrustedTypesWebWorkerScriptURLPolicy",
  ["TrustedTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        createScriptURL: function (t) {
          return t;
        },
      },
      s = r("TrustedTypes").createPolicy("web-worker-url", e),
      u = s;
    l.default = u;
  },
  98,
);
