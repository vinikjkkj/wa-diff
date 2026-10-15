__d(
  "WAWebBizBroadcastProAudienceTableQuery",
  [
    "CometRelay",
    "WAWebBizBroadcastProAudienceTableData",
    "WAWebBizBroadcastProAudienceTableQuery.graphql",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProAudienceTableQuery.graphql")),
      m = [];
    function p(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = e.queryRef,
        a;
      t[0] !== n
        ? ((a = function (t) {
            return n(t != null ? t : m);
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== r || t[3] !== a
          ? ((i = u.jsx(_, { queryRef: r, children: a })),
            (t[2] = r),
            (t[3] = a),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    function _(e) {
      var t,
        n = o("react-compiler-runtime").c(5),
        r = e.children,
        a = e.queryRef,
        i = o("CometRelay").usePreloadedQuery(d, a),
        l =
          (t = i.viewer) == null ||
          (t = t.backing_waba) == null ||
          (t = t.wa_bb_pro_custom_audiences) == null
            ? void 0
            : t.edges,
        s;
      n[0] !== l
        ? ((s =
            l == null
              ? null
              : o(
                  "WAWebBizBroadcastProAudienceTableData",
                ).readProAudienceListItems(l.map(f))),
          (n[0] = l),
          (n[1] = s))
        : (s = n[1]);
      var u = s,
        c;
      return (
        n[2] !== u || n[3] !== r
          ? ((c = r(u)), (n[2] = u), (n[3] = r), (n[4] = c))
          : (c = n[4]),
        c
      );
    }
    function f(e) {
      return e == null ? void 0 : e.node;
    }
    ((l.proAudienceTableQuery = d),
      (l.WAWebBizBroadcastProAudienceTableQueryReader = p),
      (l.WAWebBizBroadcastProAudienceTableQueryNullableReader = _));
  },
  98,
);
