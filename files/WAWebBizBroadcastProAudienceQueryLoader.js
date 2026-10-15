__d(
  "WAWebBizBroadcastProAudienceQueryLoader",
  [
    "CometRelay",
    "WALogger",
    "WAWebBizBroadcastProAudienceQueryConstants",
    "WAWebBizBroadcastProAudienceTableQuery",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new WeakMap();
    function u(e) {
      return o("CometRelay").loadQuery(
        e,
        o("WAWebBizBroadcastProAudienceTableQuery").proAudienceTableQuery,
        {
          first: o("WAWebBizBroadcastProAudienceQueryConstants")
            .PRO_AUDIENCE_QUERY_PAGE_SIZE,
        },
        { fetchPolicy: "network-only" },
      );
    }
    function c(t) {
      var n = s.get(t);
      if (n != null) {
        n.hasTrailingRefresh = !0;
        return;
      }
      var r = { hasTrailingRefresh: !1 };
      s.set(t, r);
      var a = function () {
        return queueMicrotask(function () {
          (s.delete(t), r.hasTrailingRefresh && c(t));
        });
      };
      o("CometRelay")
        .fetchQuery(
          t,
          o("WAWebBizBroadcastProAudienceTableQuery").proAudienceTableQuery,
          {
            first: o("WAWebBizBroadcastProAudienceQueryConstants")
              .PRO_AUDIENCE_QUERY_PAGE_SIZE,
          },
          { fetchPolicy: "network-only" },
        )
        .subscribe({
          complete: a,
          error: function (n) {
            (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to refresh BB Pro audiences",
                  ])),
              )
              .catching(n)
              .sendLogs("bb-pro-audience-refresh-failed"),
              a());
          },
          unsubscribe: a,
        });
    }
    ((l.preloadProAudienceQuery = u), (l.refreshProAudienceQuery = c));
  },
  98,
);
