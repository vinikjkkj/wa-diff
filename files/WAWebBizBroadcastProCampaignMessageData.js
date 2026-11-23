__d(
  "WAWebBizBroadcastProCampaignMessageData",
  [
    "WAWebBizBroadcastProCampaignListItemDerive",
    "WAWebBizBroadcastProCampaignMessageDataQuery.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProCampaignMessageDataQuery.graphql"));
    async function u(e) {
      var t = await m(e, await d());
      return t == null
        ? null
        : o(
            "WAWebBizBroadcastProCampaignListItemDerive",
          ).getProCampaignMessageData(t.template);
    }
    async function c(e) {
      var t = await m(e, await d()),
        n = o(
          "WAWebBizBroadcastProCampaignListItemDerive",
        ).getProCampaignDuplicateMessageData(t == null ? void 0 : t.template),
        r = t == null ? void 0 : t.bidAmount,
        a = t == null ? void 0 : t.currency;
      return babelHelpers.extends(
        {},
        n,
        r != null && Number.isFinite(r) && r > 0 && a != null
          ? { maxBid: { cpmAmount: r, currency: a } }
          : {},
      );
    }
    async function d() {
      var e = await o("WAWebFetchAdAccountToken").fetchToken();
      if (e.type !== "success")
        throw r("err")("BB Pro campaign token fetch failed");
      return e.token;
    }
    async function m(e, t) {
      var n,
        r,
        a,
        i,
        l = await o("WAWebRelayClient").fetchQuery(
          s,
          { campaignId: e },
          {
            accessToken: t,
            environmentType: "facebook",
            fetchPolicy: "network-only",
          },
        ),
        u = l == null ? void 0 : l.node;
      if (
        (u == null ? void 0 : u.campaignType) !==
        "XFBWhatsAppBusinessMMLiteCampaign"
      )
        return null;
      var c = (n = u.broadcast_insights) == null ? void 0 : n.template,
        d =
          c == null
            ? null
            : {
                cta_url_link_tracking_opted_out:
                  c.cta_url_link_tracking_opted_out,
                element: c.element,
                header_type:
                  c.header_type == null ? null : String(c.header_type),
                hsm_components: ((r = c.hsm_components) != null ? r : []).map(
                  function (e) {
                    var t;
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
                        e.example == null
                          ? null
                          : {
                              header_handle: e.example.header_handle,
                              header_url: e.example.header_url,
                            },
                      text: e.text,
                      type: e.type == null ? null : String(e.type),
                    };
                  },
                ),
              };
      return {
        template: d,
        bidAmount:
          (a = u.broadcast_insights) == null ? void 0 : a.bid_amount_long,
        currency: (i = u.broadcast_insights) == null ? void 0 : i.currency,
      };
    }
    ((l.fetchBizBroadcastProCampaignMessageData = u),
      (l.fetchBizBroadcastProCampaignDuplicateData = c));
  },
  98,
);
