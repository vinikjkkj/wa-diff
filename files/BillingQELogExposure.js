__d(
  "BillingQELogExposure",
  ["BillingQELogExposureMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("BillingQELogExposureMutation.graphql")),
      u = {};
    function c(e, t, n) {
      return function (r, o, a) {
        var i = t != null ? t : "";
        if (
          (u[i] == null && (u[i] = {}),
          u[i][r] == null && (u[i][r] = {}),
          u[i][r][o] !== !0)
        ) {
          u[i][r][o] = !0;
          var l;
          (e[r].params[o].launched === !0
            ? (l = {
                holdout_name: a,
                payment_legacy_account_id: i,
                type: e[r].type,
              })
            : (l = {
                param: o,
                payment_legacy_account_id: i,
                type: e[r].type,
                universe_name: r,
              }),
            n(
              { mutation: s, variables: { input: l } },
              { event_data: { param_name: o, universe_name: r } },
              !1,
            ).catch(function () {}));
        }
      };
    }
    ((l.logQEExposureMutation = s), (l.getLogQEExposure = c));
  },
  98,
);
