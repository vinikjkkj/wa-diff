__d(
  "WAWebBizBroadcastProAudienceTableQuery",
  [
    "CometRelay",
    "WAWebBizBroadcastProAudienceTableData",
    "WAWebBizBroadcastProAudienceTableQuery.graphql",
    "react",
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
      var t = e.children,
        n = e.queryRef;
      return u.jsx(_, {
        queryRef: n,
        children: function (n) {
          return t(n != null ? n : m);
        },
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t,
        n = e.children,
        r = e.queryRef,
        a = o("CometRelay").usePreloadedQuery(d, r),
        i =
          (t = a.viewer) == null ||
          (t = t.backing_waba) == null ||
          (t = t.wa_bb_pro_custom_audiences) == null
            ? void 0
            : t.edges,
        l = c(
          function () {
            return i == null
              ? null
              : o(
                  "WAWebBizBroadcastProAudienceTableData",
                ).readProAudienceListItems(
                  i.map(function (e) {
                    return e == null ? void 0 : e.node;
                  }),
                );
          },
          [i],
        );
      return n(l);
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.proAudienceTableQuery = d),
      (l.WAWebBizBroadcastProAudienceTableQueryReader = p),
      (l.WAWebBizBroadcastProAudienceTableQueryNullableReader = _));
  },
  98,
);
