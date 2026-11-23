__d(
  "WAWebBizBroadcastProAudienceStatusQuery",
  ["WAWebBizBroadcastProAudienceStatusQueryQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProAudienceStatusQueryQuery.graphql"));
    function u(e, t) {
      var n, r;
      return (n =
        (r = d(e, t)) == null || (r = r.operation_status) == null
          ? void 0
          : r.status_code) != null
        ? n
        : null;
    }
    function c(e, t) {
      var n, r;
      return (n = (r = d(e, t)) == null ? void 0 : r.subscriber_size) != null
        ? n
        : null;
    }
    function d(e, t) {
      var n,
        r,
        o =
          (n = e.viewer) == null ||
          (n = n.backing_waba) == null ||
          (n = n.wa_bb_pro_custom_audiences) == null
            ? void 0
            : n.edges;
      return o == null ||
        (r = o.find(function (e) {
          var n;
          return (e == null || (n = e.node) == null ? void 0 : n.id) === t;
        })) == null
        ? void 0
        : r.node;
    }
    ((l.proAudienceStatusQuery = s),
      (l.getProAudienceStatusCode = u),
      (l.getProAudienceStatusSubscriberSize = c));
  },
  98,
);
