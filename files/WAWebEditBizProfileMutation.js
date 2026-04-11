__d(
  "WAWebEditBizProfileMutation",
  [
    "WAWebEditBizProfileMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebEditBizProfileMutation.graphql"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (n.type !== "success")
            throw r("err")("Failed to fetch access token");
          var a = n.token,
            i = yield o("WAWebRelayClient").commitMutation(
              s,
              { lid: e, input: t },
              {
                accessToken: { type: "FB", token: a.token, bp_id: a.bp_id },
                environmentType: "facebook",
              },
            );
          return i == null ? void 0 : i.edit_wa_web_biz_profile;
        })),
        c.apply(this, arguments)
      );
    }
    l.editBizProfile = u;
  },
  98,
);
