__d(
  "WAWebSendMsgCtwaAttributionNode",
  [
    "WASmaxOutMessagePublishCtwaAttributionMixin",
    "WAWebExternalCtxConfig",
    "WAWebExternalEntryPointPrefs",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (var t = e.getAllCMCs(), n = 0, r = 0; r < t.length; r++)
        for (var a = t[r].getModelsArray(), i = 0; i < a.length; i++) {
          var l = a[i];
          if (
            !o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(l.type) &&
            l.isSendFailure !== !0 &&
            (++n, n > 1)
          )
            return !0;
        }
      return !1;
    }
    function s(t, n) {
      var r = o("WAWebExternalCtxConfig").getFirstMessageLoggingOption();
      return r === "NEW_CHATS_OR_EXISTING_CHATS_WITH_PARTNER_LINKS"
        ? n != null || !e(t)
        : r === "ALL_CHATS"
          ? !0
          : r === "NEW_CHATS_ONLY"
            ? !e(t)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    r,
                );
              })();
    }
    function u(e) {
      if (e == null || !o("WAWebExternalCtxConfig").isCtxLoggingEnabled())
        return null;
      var t = o("WAWebExternalEntryPointPrefs").getExternalEntryPoint(e.id);
      if (t == null || !s(e, t.partnerName)) return null;
      var n = { lt: "WEB_" + t.deepLinkType };
      (t.authSuccess || (n.s = 0),
        t.partnerName != null && (n.p = t.partnerName));
      var r = new TextEncoder().encode(JSON.stringify(n));
      return o(
        "WASmaxOutMessagePublishCtwaAttributionMixin",
      ).makeCtwaAttributionCtwaAttribution({ ctwaAttributionElementValue: r });
    }
    l.getCtwaAttributionNode = u;
  },
  98,
);
