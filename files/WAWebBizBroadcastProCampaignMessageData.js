__d(
  "WAWebBizBroadcastProCampaignMessageData",
  [
    "WAWebBizBroadcastProCampaignListItemDerive",
    "WAWebBizBroadcastProCampaignMessageDataQuery.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProCampaignMessageDataQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield f(e, yield p());
          return t == null
            ? null
            : o(
                "WAWebBizBroadcastProCampaignListItemDerive",
              ).getProCampaignMessageData(t.template);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield f(e, yield p()),
            n = o(
              "WAWebBizBroadcastProCampaignListItemDerive",
            ).getProCampaignDuplicateMessageData(
              t == null ? void 0 : t.template,
            ),
            r = t == null ? void 0 : t.bidAmount,
            a = t == null ? void 0 : t.currency;
          return babelHelpers.extends(
            {},
            n,
            r != null && Number.isFinite(r) && r > 0 && a != null
              ? { maxBid: { cpmAmount: r, currency: a } }
              : {},
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (e.type !== "success")
            throw r("err")("BB Pro campaign token fetch failed");
          return e.token;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a,
            i,
            l = yield o("WAWebRelayClient").fetchQuery(
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
                    hsm_components: ((r = c.hsm_components) != null
                      ? r
                      : []
                    ).map(function (e) {
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
                    }),
                  };
          return {
            template: d,
            bidAmount:
              (a = u.broadcast_insights) == null ? void 0 : a.bid_amount_long,
            currency: (i = u.broadcast_insights) == null ? void 0 : i.currency,
          };
        })),
        g.apply(this, arguments)
      );
    }
    ((l.fetchBizBroadcastProCampaignMessageData = u),
      (l.fetchBizBroadcastProCampaignDuplicateData = d));
  },
  98,
);
