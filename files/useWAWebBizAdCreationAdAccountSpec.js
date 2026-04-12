__d(
  "useWAWebBizAdCreationAdAccountSpec",
  [
    "CometRelay",
    "useWAWebBizAdCreationAdAccountSpec_boostedComponentWrapper.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "useWAWebBizAdCreationAdAccountSpec_boostedComponentWrapper.graphql",
            ));
    function u(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        u,
        c,
        d = o("CometRelay").useFragment(s, e),
        m = String(
          (t = d.spec) == null || (t = t.ad_account) == null ? void 0 : t.id,
        ),
        p = String(
          (n = d.spec) == null || (n = n.ad_account) == null
            ? void 0
            : n.legacyAccountID,
        ),
        _ = "USD",
        f =
          (r =
            (a = d.spec) == null || (a = a.ad_account) == null
              ? void 0
              : a.currencyCodeEnum) != null
            ? r
            : _,
        g = String(
          (i = d.spec) == null ||
            (i = i.ad_account) == null ||
            (i = i.payment_account) == null
            ? void 0
            : i.id,
        ),
        h =
          (l =
            (u = d.spec) == null || (u = u.ad_account) == null
              ? void 0
              : u.canSeeSAFRV3) != null
            ? l
            : !1,
        y =
          (c = d.spec) == null || (c = c.ad_account) == null ? void 0 : c.name;
      return {
        canSeeSAFRV3: h,
        currency: f,
        id: m,
        legacyAccountID: p,
        name: y,
        paymentAccountID: g,
      };
    }
    l.default = u;
  },
  98,
);
