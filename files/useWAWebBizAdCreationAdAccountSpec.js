__d(
  "useWAWebBizAdCreationAdAccountSpec",
  [
    "CometRelay",
    "react-compiler-runtime",
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
        d = o("react-compiler-runtime").c(7),
        m = o("CometRelay").useFragment(s, e),
        p = String(
          (t = m.spec) == null || (t = t.ad_account) == null ? void 0 : t.id,
        ),
        _ = String(
          (n = m.spec) == null || (n = n.ad_account) == null
            ? void 0
            : n.legacyAccountID,
        ),
        f =
          (r =
            (a = m.spec) == null || (a = a.ad_account) == null
              ? void 0
              : a.currencyCodeEnum) != null
            ? r
            : "USD",
        g = String(
          (i = m.spec) == null ||
            (i = i.ad_account) == null ||
            (i = i.payment_account) == null
            ? void 0
            : i.id,
        ),
        h =
          (l =
            (u = m.spec) == null || (u = u.ad_account) == null
              ? void 0
              : u.canSeeSAFRV3) != null
            ? l
            : !1,
        y =
          (c = m.spec) == null || (c = c.ad_account) == null ? void 0 : c.name,
        C;
      return (
        d[0] !== h ||
        d[1] !== f ||
        d[2] !== p ||
        d[3] !== _ ||
        d[4] !== y ||
        d[5] !== g
          ? ((C = {
              canSeeSAFRV3: h,
              currency: f,
              id: p,
              legacyAccountID: _,
              name: y,
              paymentAccountID: g,
            }),
            (d[0] = h),
            (d[1] = f),
            (d[2] = p),
            (d[3] = _),
            (d[4] = y),
            (d[5] = g),
            (d[6] = C))
          : (C = d[6]),
        C
      );
    }
    l.default = u;
  },
  98,
);
