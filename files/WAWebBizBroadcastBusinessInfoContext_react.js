__d(
  "WAWebBizBroadcastBusinessInfoContext.react",
  ["react", "useWAWebBizBroadcastBusinessInfo"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = u.useMemo,
      p = {
        adAccountId: null,
        businessId: null,
        businessInfo: null,
        error: null,
        isLoading: !0,
        pageId: null,
        paymentAccountId: null,
        refetch: function () {},
      },
      _ = c(p);
    function f() {
      return d(_);
    }
    function g(e) {
      var t = e.children,
        n = o(
          "useWAWebBizBroadcastBusinessInfo",
        ).useWAWebBizBroadcastBusinessInfo(),
        r = n.businessInfo,
        a = n.error,
        i = n.isLoading,
        l = n.refetch,
        u = m(
          function () {
            var e, t, n, o, s, u, c, d;
            return {
              adAccountId:
                (e = r == null || (t = r.ad_account) == null ? void 0 : t.id) !=
                null
                  ? e
                  : null,
              businessId:
                (n = r == null || (o = r.business) == null ? void 0 : o.id) !=
                null
                  ? n
                  : null,
              businessInfo: r,
              error: a,
              isLoading: i,
              pageId:
                (s = r == null || (u = r.page) == null ? void 0 : u.id) != null
                  ? s
                  : null,
              paymentAccountId:
                (c =
                  r == null || (d = r.business_payment_account) == null
                    ? void 0
                    : d.id) != null
                  ? c
                  : null,
              refetch: l,
            };
          },
          [r, a, i, l],
        );
      return s.jsx(_.Provider, { value: u, children: t });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.useWAWebBizBroadcastBusinessInfoContext = f),
      (l.WAWebBizBroadcastBusinessInfoProvider = g));
  },
  98,
);
