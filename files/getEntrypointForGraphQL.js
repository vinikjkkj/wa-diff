__d(
  "getEntrypointForGraphQL",
  ["BillingEntryPoint"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.keys(r("BillingEntryPoint"));
    function s(t) {
      var n,
        r = (n = t == null ? void 0 : t.toUpperCase()) != null ? n : "UNKNOWN",
        o = e.find(function (e) {
          return e === r;
        });
      return o != null ? o : "UNKNOWN";
    }
    l.default = s;
  },
  98,
);
