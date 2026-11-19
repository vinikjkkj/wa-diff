__d(
  "WAWebBizProfileFacebookConnectPageJob",
  [
    "WAWebBizProfileFacebookConnectPageJobConnectMutation.graphql",
    "WAWebBizProfileFacebookConnectPageJobProofMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i,
            l = yield o("WAWebRelayClient").commitMutation(
              e !== void 0
                ? e
                : (e = n(
                    "WAWebBizProfileFacebookConnectPageJobProofMutation.graphql",
                  )),
              { input: { identifier: { scope: "REQUEST" } } },
              { accessToken: t, environmentType: "facebook" },
            ),
            s =
              l == null || (a = l.xfb_wa_biz_account_nonce) == null
                ? void 0
                : a.detail;
          return {
            nonce: r("nullthrows")(s == null ? void 0 : s.nonce),
            requestId: r("nullthrows")(
              s == null || (i = s.request) == null ? void 0 : i.id,
            ),
          };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i,
            l = yield o("WAWebRelayClient").commitMutation(
              s !== void 0
                ? s
                : (s = n(
                    "WAWebBizProfileFacebookConnectPageJobConnectMutation.graphql",
                  )),
              { code: a.nonce, pageId: t, request: a.requestId },
              { accessToken: e, environmentType: "facebook" },
            );
          r("nullthrows")(
            l == null || (i = l.profile_whatsapp_business_connect) == null
              ? void 0
              : i.id,
            "Unexpected null: data?.profile_whatsapp_business_connect?.id",
          );
        })),
        m.apply(this, arguments)
      );
    }
    ((l.requestWhatsAppAccountProof = u),
      (l.connectFacebookPageToWhatsApp = d));
  },
  98,
);
