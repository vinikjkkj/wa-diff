__d(
  "WAWebBizBroadcastProCampaignTableData",
  [
    "CometRelay",
    "WALogger",
    "WAWebBizBroadcastProCampaignListItemDerive",
    "WAWebBizBroadcastProCampaignTableData_campaign.graphql",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProCampaignTableData_campaign.graphql"));
    function c(e) {
      var t = [];
      for (var n of e)
        if (n != null) {
          var r = d(o("CometRelay").readInlineData(u, n));
          if (r != null) {
            var a = o(
              "WAWebBizBroadcastProCampaignListItemDerive",
            ).tryDeriveListItemFromProCampaign(r);
            a != null && t.push(a);
          }
        }
      return t;
    }
    function d(e) {
      var t = e.id;
      if (t == null) return null;
      try {
        return m(e);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Skipping malformed BB Pro campaign ",
                  "",
                ])),
              t,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("bb-pro-campaign-node-normalization-failed"),
          null
        );
      }
    }
    function m(e) {
      var t,
        n,
        r,
        a = e.id;
      if (a == null) return null;
      var i = e.broadcast_insights,
        l = o(
          "WAWebBizBroadcastProCampaignListItemDerive",
        ).requireProCampaignInsights(i, i == null ? void 0 : i.start_time),
        s = l.insights,
        u = l.startTime,
        c = e.delivery_status_info,
        d = s.template;
      return {
        id: a,
        campaign_name: e.campaign_name,
        delivery_status_info: c == null ? null : { status: c.status },
        broadcast_insights: {
          ads_amount_spent: s.ads_amount_spent,
          currency: s.currency,
          customer_list_name: s.customer_list_name,
          quick_reply_clicks:
            (t = s.quick_reply_clicks) == null
              ? void 0
              : t.map(function (e) {
                  return { count_data: p(e == null ? void 0 : e.count_data) };
                }),
          cta_url_clicks:
            (n = s.cta_url_clicks) == null
              ? void 0
              : n.map(function (e) {
                  return { count_data: p(e == null ? void 0 : e.count_data) };
                }),
          read: p(s.read),
          sent: p(s.sent),
          ads_delivered: p(s.ads_delivered),
          first_customer_reply: p(s.first_customer_reply),
          start_time: u,
          status: s.status,
          template:
            d == null
              ? null
              : {
                  element: d.element,
                  header_type:
                    d.header_type == null ? null : String(d.header_type),
                  hsm_components: ((r = d.hsm_components) != null ? r : []).map(
                    function (e) {
                      var t,
                        n = e.example;
                      return {
                        buttons: ((t = e.buttons) != null ? t : []).map(
                          function (e) {
                            return {
                              phone_number: e.phone_number,
                              text: e.text,
                              type: e.type == null ? null : String(e.type),
                              url: e.url,
                            };
                          },
                        ),
                        example:
                          n == null
                            ? null
                            : {
                                header_handle: n.header_handle,
                                header_url: n.header_url,
                              },
                        text: e.text,
                        type: e.type == null ? null : String(e.type),
                      };
                    },
                  ),
                },
        },
      };
    }
    function p(e) {
      return e == null ? null : { count: e.count };
    }
    ((l.deriveProCampaignListItems = c), (l.getProCampaignNode = d));
  },
  98,
);
