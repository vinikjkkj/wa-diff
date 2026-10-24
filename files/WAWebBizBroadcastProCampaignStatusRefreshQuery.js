__d(
  "WAWebBizBroadcastProCampaignStatusRefreshQuery",
  [
    "CometRelay",
    "WAWebBizBroadcastProCampaignStatusRefreshQuery.graphql",
    "WAWebBizBroadcastProCampaignStatusRefreshQuery_campaign.graphql",
    "WAWebGraphQLServerError",
    "err",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizBroadcastProCampaignStatusRefreshQuery_campaign.graphql",
            )),
      c =
        s !== void 0
          ? s
          : (s = n("WAWebBizBroadcastProCampaignStatusRefreshQuery.graphql"));
    function d(e) {
      var t,
        n = o("CometRelay").readInlineData(u, e);
      return {
        canStop: n.bb_pro_can_stop,
        deliveryStatus:
          (t = n.delivery_status_info) == null ? void 0 : t.status,
        displayStatus: n.bb_pro_display_status,
      };
    }
    function m(e, t) {
      var n = o("relay-runtime").getRequest(c);
      return e
        .getNetwork()
        .execute(n.params, { campaignId: t }, { force: !0 })
        .map(function (n) {
          var r = Array.isArray(n) ? n : [n];
          for (var a of r)
            if (a.errors != null && a.errors.length > 0)
              throw new (o("WAWebGraphQLServerError").GraphQLServerError)({
                errors: a.errors.map(function (e) {
                  return { code: 0, message: e.message };
                }),
              });
          var i = r.map(function (e) {
            return e.data == null ? null : p(e.data, t);
          });
          return (
            i.some(function (e) {
              return e != null;
            }) &&
              o("CometRelay").commitLocalUpdate(e, function (e) {
                for (var t of i) t != null && g(e, t);
              }),
            n
          );
        });
    }
    function p(e, t) {
      if (!("node" in e))
        throw r("err")("Malformed BB Pro campaign refresh response");
      var n = e.node;
      if (n == null) return null;
      if (
        typeof n != "object" ||
        Array.isArray(n) ||
        !("id" in n) ||
        !("__typename" in n) ||
        !("bb_pro_can_stop" in n) ||
        !("bb_pro_display_status" in n) ||
        !("delivery_status_info" in n) ||
        !("broadcast_insights" in n)
      )
        throw r("err")("Malformed BB Pro campaign refresh response");
      var o = n.__typename;
      if (n.id !== t || o !== "XFBWhatsAppBusinessMMLiteCampaign")
        throw r("err")("Unexpected campaign in BB Pro refresh response");
      var a = n.bb_pro_can_stop,
        i = n.bb_pro_display_status;
      if (a != null && typeof a != "boolean")
        throw r("err")("Invalid can-stop value in BB Pro campaign refresh");
      if (i != null && typeof i != "string")
        throw r("err")("Invalid display status in BB Pro campaign refresh");
      return {
        campaignId: t,
        canStop: a,
        deliveredCount: f(n.broadcast_insights),
        deliveryStatus: _(n.delivery_status_info),
        displayStatus: i,
      };
    }
    function _(e) {
      if (e == null) return null;
      if (typeof e != "object" || Array.isArray(e) || !("status" in e))
        throw r("err")(
          "Invalid delivery information in BB Pro campaign refresh",
        );
      var t = e.status;
      if (t == null || typeof t == "string") return t;
      throw r("err")("Invalid delivery status in BB Pro campaign refresh");
    }
    function f(e) {
      if (e == null) return null;
      if (typeof e != "object" || Array.isArray(e) || !("ads_delivered" in e))
        throw r("err")("Invalid insights in BB Pro campaign refresh");
      var t = e.ads_delivered;
      if (t == null) return null;
      if (typeof t != "object" || Array.isArray(t) || !("count" in t))
        throw r("err")("Invalid delivered metric in BB Pro campaign refresh");
      var n = t.count;
      if (n == null || (typeof n == "number" && Number.isInteger(n) && n >= 0))
        return n;
      throw r("err")("Invalid delivered count in BB Pro campaign refresh");
    }
    function g(e, t) {
      var n,
        r,
        a = e.get(t.campaignId);
      if (a != null) {
        (a.setValue(t.canStop, "bb_pro_can_stop"),
          a.setValue(t.displayStatus, "bb_pro_display_status"));
        var i = a.getLinkedRecord("delivery_status_info");
        (i == null &&
          t.deliveryStatus != null &&
          ((i = e.create(
            o("relay-runtime").generateUniqueClientID(),
            "XFBBMCampaignDeliveryStatusInfo",
          )),
          a.setLinkedRecord(i, "delivery_status_info")),
          (n = i) == null || n.setValue(t.deliveryStatus, "status"));
        var l = a.getLinkedRecord("broadcast_insights");
        if (
          (l == null &&
            t.deliveredCount != null &&
            ((l = e.create(
              o("relay-runtime").generateUniqueClientID(),
              "WhatsAppBusinessMessagingBroadcastInsights",
            )),
            a.setLinkedRecord(l, "broadcast_insights")),
          l != null)
        ) {
          var s = l.getLinkedRecord("ads_delivered");
          (s == null &&
            t.deliveredCount != null &&
            ((s = e.create(
              o("relay-runtime").generateUniqueClientID(),
              "XFBWhatsAppBusinessMessagingMetricCountData",
            )),
            l.setLinkedRecord(s, "ads_delivered")),
            (r = s) == null || r.setValue(t.deliveredCount, "count"));
        }
      }
    }
    ((l.proCampaignStatusRefreshQuery = c),
      (l.readProCampaignStatus = d),
      (l.fetchProCampaignStatusRefresh = m));
  },
  98,
);
