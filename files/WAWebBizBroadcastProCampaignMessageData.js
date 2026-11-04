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
          var t = yield f(e, yield p());
          return o(
            "WAWebBizBroadcastProCampaignListItemDerive",
          ).getProCampaignDuplicateMessageData(t == null ? void 0 : t.template);
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
            a = yield o("WAWebRelayClient").fetchQuery(
              s,
              { campaignId: e },
              {
                accessToken: t,
                environmentType: "facebook",
                fetchPolicy: "network-only",
              },
            ),
            i = a == null ? void 0 : a.node;
          if (
            (i == null ? void 0 : i.campaignType) !==
            "XFBWhatsAppBusinessMMLiteCampaign"
          )
            return null;
          var l = (n = i.broadcast_insights) == null ? void 0 : n.template,
            u =
              l == null
                ? null
                : {
                    element: l.element,
                    header_type:
                      l.header_type == null ? null : String(l.header_type),
                    hsm_components: ((r = l.hsm_components) != null
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
          return { template: u };
        })),
        g.apply(this, arguments)
      );
    }
    ((l.fetchBizBroadcastProCampaignMessageData = u),
      (l.fetchBizBroadcastProCampaignDuplicateData = d));
  },
  98,
);
