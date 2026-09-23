__d(
  "WAWebBizBroadcastProDeleteCustomAudienceMutation",
  [
    "WAWebBizBroadcastProDeleteCustomAudienceMutation.graphql",
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
          : (e = n("WAWebBizBroadcastProDeleteCustomAudienceMutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (n.type !== "success")
            throw r("err")("Failed to fetch access token");
          var a = n.token,
            i = yield o("WAWebRelayClient").commitMutation(
              s,
              { customAudienceId: e },
              {
                accessToken: { type: "FB", token: a.token, bp_id: a.bp_id },
                environmentType: "facebook",
              },
            );
          return (
            (i == null ||
            (t = i.delete_wa_marketing_messages_custom_audience) == null
              ? void 0
              : t.success) === !0
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.deleteCustomAudience = u;
  },
  98,
);
