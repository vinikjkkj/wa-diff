__d(
  "WAWebBizBroadcastBusinessInfoContext.react",
  ["react", "react-compiler-runtime", "useWAWebBizBroadcastBusinessInfo"],
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
      var t,
        n,
        r,
        a,
        i,
        l,
        u,
        c,
        d = o("react-compiler-runtime").c(12),
        m = e.children,
        p = o(
          "useWAWebBizBroadcastBusinessInfo",
        ).useWAWebBizBroadcastBusinessInfo(),
        f = p.businessInfo,
        g = p.error,
        h = p.isLoading,
        y = p.refetch,
        C =
          (t = f == null || (n = f.ad_account) == null ? void 0 : n.id) != null
            ? t
            : null,
        b =
          (r = f == null || (a = f.business) == null ? void 0 : a.id) != null
            ? r
            : null,
        v =
          (i = f == null || (l = f.page) == null ? void 0 : l.id) != null
            ? i
            : null,
        S =
          (u =
            f == null || (c = f.business_payment_account) == null
              ? void 0
              : c.id) != null
            ? u
            : null,
        R;
      d[0] !== f ||
      d[1] !== g ||
      d[2] !== h ||
      d[3] !== y ||
      d[4] !== C ||
      d[5] !== b ||
      d[6] !== v ||
      d[7] !== S
        ? ((R = {
            adAccountId: C,
            businessId: b,
            businessInfo: f,
            error: g,
            isLoading: h,
            pageId: v,
            paymentAccountId: S,
            refetch: y,
          }),
          (d[0] = f),
          (d[1] = g),
          (d[2] = h),
          (d[3] = y),
          (d[4] = C),
          (d[5] = b),
          (d[6] = v),
          (d[7] = S),
          (d[8] = R))
        : (R = d[8]);
      var L = R,
        E;
      return (
        d[9] !== m || d[10] !== L
          ? ((E = s.jsx(_.Provider, { value: L, children: m })),
            (d[9] = m),
            (d[10] = L),
            (d[11] = E))
          : (E = d[11]),
        E
      );
    }
    ((l.useWAWebBizBroadcastBusinessInfoContext = f),
      (l.WAWebBizBroadcastBusinessInfoProvider = g));
  },
  98,
);
