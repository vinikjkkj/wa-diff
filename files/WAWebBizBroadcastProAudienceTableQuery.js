__d(
  "WAWebBizBroadcastProAudienceTableQuery",
  [
    "CometRelay",
    "WAWebBizBroadcastProAudienceListItemDerive",
    "WAWebBizBroadcastProAudienceTableData",
    "WAWebBizBroadcastProAudienceTableQuery.graphql",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastProAudienceIngestion",
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
          : (e = n("WAWebBizBroadcastProAudienceTableQuery.graphql"));
    function m(e) {
      var t,
        n =
          (t = e.viewer) == null ||
          (t = t.backing_waba) == null ||
          (t = t.wa_bb_pro_custom_audiences) == null
            ? void 0
            : t.edges,
        r = new Map();
      for (var a of n != null ? n : []) {
        var i,
          l = a == null ? void 0 : a.node;
        if (
          (l == null ? void 0 : l.id) != null &&
          ((i = l.operation_status) == null ? void 0 : i.status_code) ===
            o("WAWebBizBroadcastProAudienceListItemDerive")
              .PRO_AUDIENCE_INGESTING_STATUS_CODE
        ) {
          var s;
          r.set(l.id, (s = l.subscriber_size) != null ? s : 0);
        }
      }
      return r;
    }
    function p(e) {
      var t,
        n =
          (t = e.viewer) == null ||
          (t = t.backing_waba) == null ||
          (t = t.wa_bb_pro_custom_audiences) == null
            ? void 0
            : t.edges,
        r = new Map();
      for (var o of n != null ? n : []) {
        var a = o == null ? void 0 : o.node;
        (a == null ? void 0 : a.id) != null && r.set(a.id, a.subscriber_size);
      }
      return r;
    }
    var _ = [];
    function f(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = e.queryRef,
        a;
      t[0] !== n
        ? ((a = function (t) {
            return n(t != null ? t : _);
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== r || t[3] !== a
          ? ((i = u.jsx(g, { queryRef: r, children: a })),
            (t[2] = r),
            (t[3] = a),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    function g(e) {
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
                ).readProAudienceListItems(l.map(h))),
          (n[0] = l),
          (n[1] = s))
        : (s = n[1]);
      var u = s,
        c = o(
          "useWAWebBizBroadcastProAudienceIngestion",
        ).useIngestionAdjustedProAudiences(u != null ? u : _),
        m = u == null ? null : c,
        p;
      return (
        n[2] !== r || n[3] !== m
          ? ((p = r(m)), (n[2] = r), (n[3] = m), (n[4] = p))
          : (p = n[4]),
        p
      );
    }
    function h(e) {
      return e == null ? void 0 : e.node;
    }
    ((l.proAudienceTableQuery = d),
      (l.getIngestingProAudienceTallies = m),
      (l.getProAudienceSubscriberSizes = p),
      (l.WAWebBizBroadcastProAudienceTableQueryReader = f),
      (l.WAWebBizBroadcastProAudienceTableQueryNullableReader = g));
  },
  98,
);
