__d(
  "WAWebEditBizProfileMutation",
  [
    "WAWebEditBizProfileMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebEditBizProfileMutation.graphql"));
    async function u(e, t) {
      var n = await o("WAWebFetchAdAccountToken").fetchToken();
      if (n.type !== "success") throw r("err")("Failed to fetch access token");
      var a = n.token,
        i = await o("WAWebRelayClient").commitMutation(
          s,
          { lid: e, input: t },
          {
            accessToken: { type: "FB", token: a.token, bp_id: a.bp_id },
            environmentType: "facebook",
          },
        );
      return i == null ? void 0 : i.edit_wa_web_biz_profile;
    }
    l.editBizProfile = u;
  },
  98,
);
