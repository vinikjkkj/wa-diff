__d(
  "WAWebParseForwardedNewsletterMessageInfo",
  [
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebDecodeJid",
    "WAWebProtobufsE2E.pb",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 256;
    function u(e) {
      var t = e.newsletterJid,
        n = e.newsletterName,
        r = e.profileName,
        a = e.serverMessageId,
        i = o("WAWebDecodeJid").strictDecodeJid(t);
      return {
        newsletterId:
          i != null ? o("WAWebWidFactory").asNewsletterWidOrThrow(i) : void 0,
        newsletterName: c(n),
        serverMessageId: a,
        profileName: c(r),
      };
    }
    function c(e) {
      return e != null
        ? Array.from(e.slice(0, s * 2))
            .slice(0, s)
            .join("")
        : void 0;
    }
    function d(t) {
      var n,
        r = t == null || (n = t.newsletter) == null ? void 0 : n.contentType;
      if (r == null) {
        var a;
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Did not receive content type from newsletter annotation",
                ])),
            )
            .tags("newsletter-logging")
            .sendLogs("Missing content type in newsletter annotation"),
          (t == null || (a = t.newsletter) == null
            ? void 0
            : a.serverMessageId) == null
            ? o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCard
            : o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterPostLinkCard
        );
      }
      return r ===
        o("WAWebProtobufsE2E.pb")
          .ContextInfo$ForwardedNewsletterMessageInfo$ContentType.LINK_CARD
        ? t.shouldSkipConfirmation === !0
          ? o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCardButton
          : o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCard
        : o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterPostLinkCard;
    }
    ((l.parseForwardedNewsletterMessageInfo = u),
      (l.getChatEntryPointFromNewsletterLinkAnnotation = d));
  },
  98,
);
