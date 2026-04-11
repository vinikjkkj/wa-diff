__d(
  "getBillingQEUniverses",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return Object.keys(e)
        .filter(function (e) {
          return e !== "test";
        })
        .map(function (t) {
          return {
            holdout: e[t].holdout,
            params: Object.keys(e[t].params).filter(function (n) {
              var r;
              return (
                ((r = e[t].params[n]) == null ? void 0 : r.launched) !== !0
              );
            }),
            type: e[t].type,
            universe_name: t,
          };
        });
    }
    i.default = e;
  },
  66,
);
