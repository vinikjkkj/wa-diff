__d(
  "RelayFBOperationLoader",
  ["Promise", "RelayFBModuleLoader"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        get: function (t) {
          return t == null || typeof t != "object"
            ? null
            : o("RelayFBModuleLoader").get(t);
        },
        load: function (r) {
          return r == null || typeof r != "object"
            ? (e || (e = n("Promise"))).resolve(null)
            : o("RelayFBModuleLoader").load(r);
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
