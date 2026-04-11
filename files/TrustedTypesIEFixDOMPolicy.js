__d(
  "TrustedTypesIEFixDOMPolicy",
  ["TrustedTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        createHTML: function (t) {
          return t;
        },
      },
      s = r("TrustedTypes").createPolicy("dom-ie-fix", e),
      u = s;
    l.default = u;
  },
  98,
);
