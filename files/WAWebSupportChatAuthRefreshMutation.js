__d(
  "WAWebSupportChatAuthRefreshMutation",
  ["WAWebRelayClient", "WAWebSupportChatAuthRefreshMutation.graphql", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var a,
        i = await o("WAWebRelayClient").commitMutation(
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
        throw r("err")("xwa_wa_support_chat_auth_refresh returned no status");
      return l;
    }
    l.refreshSupportChatAuthGraphQL = s;
  },
  98,
);
