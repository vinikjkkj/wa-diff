__d(
  "WAWebBizBroadcastProCampaignTableQuery",
  [
    "CometRelay",
    "WAWebBizBroadcastProCampaignTableQuery.graphql",
    "WAWebBusinessBroadcastProHomeFlowBoundary",
    "react",
    "useWAWebBizBroadcastProCampaignTablePagination",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["queryRef"],
      s = ["backingWabaRef", "proHomeQueryRef", "queryRef"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useMemo,
      f = m.useState,
      g = d.createContext(null),
      h =
        u !== void 0
          ? u
          : (u = n("WAWebBizBroadcastProCampaignTableQuery.graphql"));
    function y(e) {
      var t,
        n,
        r = e.children,
        a = e.queryRef,
        i = o("CometRelay").usePreloadedQuery(h, a);
      return r(
        (t = (n = i.viewer) == null ? void 0 : n.backing_waba) != null
          ? t
          : null,
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(t) {
      var n,
        r = t.queryRef,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = o("CometRelay").usePreloadedQuery(h, r),
        l = (n = i.viewer) == null ? void 0 : n.backing_waba;
      return d.jsx(
        b,
        babelHelpers.extends({}, a, {
          backingWabaRef: l,
          proHomeQueryRef: i,
          queryRef: r,
        }),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.backingWabaRef,
        n = e.proHomeQueryRef,
        r = e.queryRef,
        a = babelHelpers.objectWithoutPropertiesLoose(e, s),
        i = f(null),
        l = i[0],
        u = i[1],
        c = _(
          function () {
            return { fragmentRef: t, queryRef: r };
          },
          [t, r],
        );
      return d.jsxs(g.Provider, {
        value: c,
        children: [
          t != null ? d.jsx(v, { fragmentRef: t, onResolve: u }) : null,
          d.jsx(
            o("WAWebBusinessBroadcastProHomeFlowBoundary")
              .WAWebBusinessBroadcastProHomeFlowBoundary,
            babelHelpers.extends({}, a, {
              isProCampaignListEmpty: l,
              proHomeQueryRef: n,
            }),
          ),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.fragmentRef,
        n = e.onResolve,
        o = r("useWAWebBizBroadcastProCampaignTablePagination")(t),
        a = o.campaigns,
        i = o.hasNext,
        l = a.length === 0 && !i;
      return (
        p(
          function () {
            n(l);
          },
          [l, n],
        ),
        null
      );
    }
    ((v.displayName = v.name + " [from " + i.id + "]"),
      (l.useWAWebBizBroadcastProCampaignTablePagination = r(
        "useWAWebBizBroadcastProCampaignTablePagination",
      )),
      (l.ProCampaignTablePaginationContext = g),
      (l.proCampaignTableQuery = h),
      (l.WAWebBizBroadcastProCampaignTableQueryReader = y),
      (l.WAWebBizBroadcastProHomeQueryReader = C));
  },
  98,
);
