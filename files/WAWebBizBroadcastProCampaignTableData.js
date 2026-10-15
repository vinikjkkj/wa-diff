__d(
  "WAWebBizBroadcastProCampaignTableData",
  [
    "CometRelay",
    "WALogger",
    "WAWebBizBroadcastProCampaignListItemDerive",
    "WAWebBizBroadcastProCampaignStatusRefreshQuery",
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
          var r = o("CometRelay").readInlineData(u, n),
            a = d(
              r,
              o(
                "WAWebBizBroadcastProCampaignStatusRefreshQuery",
              ).readProCampaignStatus(r),
            );
          if (a != null) {
            var i = o(
              "WAWebBizBroadcastProCampaignListItemDerive",
            ).tryDeriveListItemFromProCampaign(a);
            i != null && t.push(i);
          }
        }
      return t;
    }
    function d(e, t) {
      var n = e.id;
      if (n == null) return null;
      try {
        return m(e, t);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Skipping malformed BB Pro campaign ",
                  "",
                ])),
              n,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("bb-pro-campaign-node-normalization-failed"),
          null
        );
      }
    }
    function m(e, t) {
      var n,
        r,
        a,
        i,
        l = e.id;
      if (l == null) return null;
      var s = e.broadcast_insights,
        u = o(
          "WAWebBizBroadcastProCampaignListItemDerive",
        ).requireProCampaignInsights(s, s == null ? void 0 : s.start_time),
        c = u.insights,
        d = u.startTime,
        m = t.deliveryStatus,
        _ = c.template;
      return {
        id: l,
        campaign_name: e.campaign_name,
        bb_pro_display_status: t.displayStatus,
        bb_pro_can_stop: t.canStop,
        delivery_status_info:
          m == null && e.delivery_status_info == null
            ? null
            : {
                extra_data:
                  ((n = e.delivery_status_info) == null
                    ? void 0
                    : n.extra_data) == null
                    ? null
                    : {
                        template_id:
                          e.delivery_status_info.extra_data.template_id,
                      },
                status: m,
              },
        broadcast_insights: {
          ads_amount_spent: c.ads_amount_spent,
          bid_amount_long: c.bid_amount_long,
          currency: c.currency,
          custom_audience_id: c.custom_audience_id,
          customer_list_name: c.customer_list_name,
          lifetime_budget_long: c.lifetime_budget_long,
          quick_reply_clicks:
            (r = c.quick_reply_clicks) == null
              ? void 0
              : r.map(function (e) {
                  return { count_data: p(e == null ? void 0 : e.count_data) };
                }),
          cta_url_clicks:
            (a = c.cta_url_clicks) == null
              ? void 0
              : a.map(function (e) {
                  return { count_data: p(e == null ? void 0 : e.count_data) };
                }),
          read: p(c.read),
          sent: p(c.sent),
          ads_delivered: p(c.ads_delivered),
          first_customer_reply: p(c.first_customer_reply),
          read_rate: c.read_rate,
          reply_rate: c.reply_rate,
          start_time: d,
          template:
            _ == null
              ? null
              : {
                  element: _.element,
                  header_type:
                    _.header_type == null ? null : String(_.header_type),
                  hsm_components: ((i = _.hsm_components) != null ? i : []).map(
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
