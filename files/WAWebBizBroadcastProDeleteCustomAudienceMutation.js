__d(
  "WAWebBizBroadcastProDeleteCustomAudienceMutation",
  [
    "WAWebBizBroadcastProDeleteCustomAudienceMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProDeleteCustomAudienceMutation.graphql"));
    async function u(e) {
      var t,
        n = await o("WAWebFetchAdAccountToken").fetchToken();
      if (n.type !== "success") throw r("err")("Failed to fetch access token");
      var a = n.token,
        i = await o("WAWebRelayClient").commitMutation(
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
    }
    l.deleteCustomAudience = u;
  },
  98,
);
