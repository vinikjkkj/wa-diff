__d(
  "BillingGKLogExposure",
  ["BillingGKLogExposureMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("BillingGKLogExposureMutation.graphql")),
      u = {};
    function c(e, t, n) {
      return function (r) {
        if (
          !(t === null || t === "") &&
          (u[t] == null && (u[t] = {}), u[t][r] !== !0)
        ) {
          u[t][r] = !0;
          var o = { gk_name: r, payment_legacy_account_id: t, type: e[r].type };
          n(
            { mutation: s, variables: { input: o } },
            { event_data: { gk_name: r } },
            !1,
          ).catch(function () {});
        }
      };
    }
    ((l.logGKExposureMutation = s), (l.getLogGKExposure = c));
  },
  98,
);
