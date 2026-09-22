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
          var t,
            n,
            a = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (a.type !== "success")
            throw r("err")("BB Pro campaign template token fetch failed");
          var i = yield o("WAWebRelayClient").fetchQuery(
              s,
              { campaignId: e },
              {
                accessToken: a.token,
                environmentType: "facebook",
                fetchPolicy: "network-only",
              },
            ),
            l = i == null ? void 0 : i.node;
          if (
            (l == null ? void 0 : l.campaignType) !==
            "XFBWhatsAppBusinessMMLiteCampaign"
          )
            return null;
          var u = (t = l.broadcast_insights) == null ? void 0 : t.template,
            c =
              u == null
                ? null
                : {
                    element: u.element,
                    header_type:
                      u.header_type == null ? null : String(u.header_type),
                    hsm_components: ((n = u.hsm_components) != null
                      ? n
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
          return o(
            "WAWebBizBroadcastProCampaignListItemDerive",
          ).getProCampaignMessageData(c);
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchBizBroadcastProCampaignMessageData = u;
  },
  98,
);
