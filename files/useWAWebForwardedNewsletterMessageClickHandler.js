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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r = e.forwardedNewsletterMessageInfo,
        a = e.type;
      if (
        !o(
          "WAWebShowForwardedNewsletterMessageIndicator",
        ).showForwardedNewsletterMessageIndicator(r, a, t)
      )
        return null;
      var i = r.newsletterId,
        l = r.serverMessageId;
      if (i == null) return null;
      var s;
      n[0] !== e.id.remote || n[1] !== i || n[2] !== l
        ? ((s = function () {
            i === e.id.remote && l != null
              ? o("WAWebNewsletterOpenAtAction").openNewsletterAt({
                  newsletterJid: o("WAJids").toNewsletterJid(i.toJid()),
                  serverId: l,
                })
              : o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
                  identifier: i.toString(),
                  identifierType: o("WAWebNewsletterApiParse")
                    .NewsletterIdentifierType.Id,
                  type: "view",
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .ForwardedNewsletterMessage,
                  discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                    .CHAT_THREAD,
                  serverId: l,
                });
          }),
          (n[0] = e.id.remote),
          (n[1] = i),
          (n[2] = l),
          (n[3] = s))
        : (s = n[3]);
      var u = s;
      return u;
    }
    l.useForwardedNewsletterMessageClickHandler = e;
  },
  98,
);
