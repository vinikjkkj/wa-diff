__d(
  "WAWebFutureproofProtoUtils",
  [
    "WAWebBotBaseGating",
    "WAWebMessageAssociationGatingUtils",
    "WAWebViewOnceGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.associatedChildMessage,
        n = e.botForwardedMessage,
        r = e.botInvokeMessage,
        a = e.documentWithCaptionMessage,
        i = e.editedMessage,
        l = e.ephemeralMessage,
        s = e.groupMentionedMessage,
        u = e.newsletterAdminProfileMessage,
        c = e.pollCreationMessageV4,
        d = e.pollCreationOptionImageMessage,
        m = e.questionMessage,
        p = e.questionReplyMessage,
        _ = e.viewOnceMessage,
        f = e.viewOnceMessageV2,
        g = e.viewOnceMessageV2Extension;
      if (s) return s;
      if (a) return a;
      if (_) return _;
      if (o("WAWebViewOnceGatingUtils").isViewOnceSunsetEnabled()) {
        if (f) return f;
        if (g && o("WAWebViewOnceGatingUtils").isReceivingViewOnceV2Enabled())
          return g;
      }
      return (
        l ||
        i ||
        r ||
        c ||
        d ||
        (t &&
        o(
          "WAWebMessageAssociationGatingUtils",
        ).isFutureproofAssociatedChildEnabled()
          ? t
          : m ||
            p ||
            (n &&
            o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled()
              ? n
              : u || null))
      );
    }
    l.maybeGetFutureproofMessage = e;
  },
  98,
);
