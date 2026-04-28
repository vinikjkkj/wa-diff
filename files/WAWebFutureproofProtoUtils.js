__d(
  "WAWebFutureproofProtoUtils",
  ["WAWebBotBaseGating", "WAWebMessageAssociationGatingUtils"],
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
      return (
        s ||
        a ||
        _ ||
        f ||
        g ||
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
