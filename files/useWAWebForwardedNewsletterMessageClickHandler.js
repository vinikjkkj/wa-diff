__d(
  "useWAWebForwardedNewsletterMessageClickHandler",
  [
    "WAJids",
    "WAWebChatEntryPoint",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterExecApiCmd",
    "WAWebNewsletterOpenAtAction",
    "WAWebShowForwardedNewsletterMessageIndicator",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.forwardedNewsletterMessageInfo,
        r = e.type;
      if (
        !o(
          "WAWebShowForwardedNewsletterMessageIndicator",
        ).showForwardedNewsletterMessageIndicator(n, r, t)
      )
        return null;
      var a = n.newsletterId,
        i = n.serverMessageId;
      if (a == null) return null;
      var l = function () {
        a === e.id.remote && i != null
          ? o("WAWebNewsletterOpenAtAction").openNewsletterAt({
              newsletterJid: o("WAJids").toNewsletterJid(a.toJid()),
              serverId: i,
            })
          : o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
              identifier: a.toString(),
              identifierType: o("WAWebNewsletterApiParse")
                .NewsletterIdentifierType.Id,
              type: "view",
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .ForwardedNewsletterMessage,
              discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                .CHAT_THREAD,
              serverId: i,
            });
      };
      return l;
    }
    l.useForwardedNewsletterMessageClickHandler = e;
  },
  98,
);
