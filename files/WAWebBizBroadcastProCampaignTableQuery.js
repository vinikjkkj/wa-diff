__d(
  "WAWebBizBroadcastProCampaignTableQuery",
  [
    "CometRelay",
    "WAWebBizBroadcastProCampaignTableQuery.graphql",
    "WAWebBusinessBroadcastProHomeFlowBoundary",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastProCampaignTablePagination",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["queryRef"],
      s = ["backingWabaRef", "proHomeQueryRef", "queryRef"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useMemo,
      p = d.createContext(null),
      _ =
        u !== void 0
          ? u
          : (u = n("WAWebBizBroadcastProCampaignTableQuery.graphql"));
    function f(e) {
      var t,
        n,
        r = o("react-compiler-runtime").c(3),
        a = e.children,
        i = e.queryRef,
        l = o("CometRelay").usePreloadedQuery(_, i),
        s =
          (t = (n = l.viewer) == null ? void 0 : n.backing_waba) != null
            ? t
            : null,
        u;
      return (
        r[0] !== a || r[1] !== s
          ? ((u = a(s)), (r[0] = a), (r[1] = s), (r[2] = u))
          : (u = r[2]),
        u
      );
    }
    function g(t) {
      var n,
        r = o("react-compiler-runtime").c(8),
        a,
        i;
      r[0] !== t
        ? ((i = t.queryRef),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (r[0] = t),
          (r[1] = a),
          (r[2] = i))
        : ((a = r[1]), (i = r[2]));
      var l = o("CometRelay").usePreloadedQuery(_, i),
        s = (n = l.viewer) == null ? void 0 : n.backing_waba,
        u;
      return (
        r[3] !== s || r[4] !== a || r[5] !== l || r[6] !== i
          ? ((u = d.jsx(
              h,
              babelHelpers.extends({}, a, {
                backingWabaRef: s,
                proHomeQueryRef: l,
                queryRef: i,
              }),
            )),
            (r[3] = s),
            (r[4] = a),
            (r[5] = l),
            (r[6] = i),
            (r[7] = u))
          : (u = r[7]),
        u
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(14),
        n,
        r,
        a,
        i;
      t[0] !== e
        ? ((n = e.backingWabaRef),
          (a = e.proHomeQueryRef),
          (i = e.queryRef),
          (r = babelHelpers.objectWithoutPropertiesLoose(e, s)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = a),
          (t[4] = i))
        : ((n = t[1]), (r = t[2]), (a = t[3]), (i = t[4]));
      var l;
      t[5] !== n || t[6] !== i
        ? ((l = { fragmentRef: n, queryRef: i }),
          (t[5] = n),
          (t[6] = i),
          (t[7] = l))
        : (l = t[7]);
      var u = l,
        c;
      t[8] !== r || t[9] !== a
        ? ((c = d.jsx(
            o("WAWebBusinessBroadcastProHomeFlowBoundary")
              .WAWebBusinessBroadcastProHomeFlowBoundary,
            babelHelpers.extends({}, r, { proHomeQueryRef: a }),
          )),
          (t[8] = r),
          (t[9] = a),
          (t[10] = c))
        : (c = t[10]);
      var m;
      return (
        t[11] !== u || t[12] !== c
          ? ((m = d.jsx(p.Provider, { value: u, children: c })),
            (t[11] = u),
            (t[12] = c),
            (t[13] = m))
          : (m = t[13]),
        m
      );
    }
    ((l.useWAWebBizBroadcastProCampaignTablePagination = r(
      "useWAWebBizBroadcastProCampaignTablePagination",
    )),
      (l.ProCampaignTablePaginationContext = p),
      (l.proCampaignTableQuery = _),
      (l.WAWebBizBroadcastProCampaignTableQueryReader = f),
      (l.WAWebBizBroadcastProHomeQueryReader = g));
  },
  98,
);
