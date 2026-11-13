__d(
  "WAWebSupportChatAuthRefreshMutation",
  [
    "WAWebRelayClient",
    "WAWebSupportChatAuthRefreshMutation.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = yield o("WAWebRelayClient").commitMutation(
              e !== void 0
                ? e
                : (e = n("WAWebSupportChatAuthRefreshMutation.graphql")),
              { input: t },
              { environmentType: "whatsapp_web" },
            ),
            l =
              i == null || (a = i.xwa_wa_support_chat_auth_refresh) == null
                ? void 0
                : a.status;
          if (l == null)
            throw r("err")(
              "xwa_wa_support_chat_auth_refresh returned no status",
            );
          return l;
        })),
        u.apply(this, arguments)
      );
    }
    l.refreshSupportChatAuthGraphQL = s;
  },
  98,
);
