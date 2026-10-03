__d(
  "WAWebBizBroadcastProAudienceTableData",
  [
    "CometRelay",
    "WAWebBizBroadcastProAudienceListItemDerive",
    "WAWebBizBroadcastProAudienceTableData_audience.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProAudienceTableData_audience.graphql"));
    function u(e) {
      return o(
        "WAWebBizBroadcastProAudienceListItemDerive",
      ).deriveProAudienceListItems(
        e.map(function (e) {
          var t;
          if (e == null) return null;
          var n = o("CometRelay").readInlineData(s, e);
          return {
            id: n.id,
            name: n.name,
            operation_status_code:
              (t = n.operation_status) == null ? void 0 : t.status_code,
            subscriber_size: n.subscriber_size,
          };
        }),
      );
    }
    l.readProAudienceListItems = u;
  },
  98,
);
