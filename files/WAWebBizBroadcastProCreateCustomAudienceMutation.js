__d(
  "WAWebBizBroadcastProCreateCustomAudienceMutation",
  [
    "WAWebBizBroadcastProCreateCustomAudienceMutation.graphql",
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
          : (e = n("WAWebBizBroadcastProCreateCustomAudienceMutation.graphql"));
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (i.type !== "success")
            throw r("err")("Failed to fetch access token");
          var l = i.token,
            u = yield o("WAWebRelayClient").commitMutation(
              s,
              { input: { subscriber_pool_id: e, name: t, phone_numbers: n } },
              {
                accessToken: { type: "FB", token: l.token, bp_id: l.bp_id },
                environmentType: "facebook",
              },
            ),
            c =
              u == null ||
              (a = u.create_wa_marketing_messages_custom_audience) == null
                ? void 0
                : a.custom_audience_id;
          if (c == null) throw r("err")("Failed to create custom audience");
          return c;
        })),
        c.apply(this, arguments)
      );
    }
    l.createCustomAudienceList = u;
  },
  98,
);
