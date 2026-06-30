__d(
  "WAWebFutureproofProtoUtils",
  [
    "WAWebBotBaseGating",
    "WAWebMessageAssociationGatingUtils",
    "WAWebSpoilerGating",
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
        _ = e.spoilerMessage,
        f = e.viewOnceMessage,
        g = e.viewOnceMessageV2,
        h = e.viewOnceMessageV2Extension;
      return (
        s ||
        a ||
        f ||
        g ||
        h ||
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
            (_ && o("WAWebSpoilerGating").isSpoilerReceiverEnabled()
              ? _
              : n &&
                  o(
                    "WAWebBotBaseGating",
                  ).isRichResponseForwardReceivingEnabled()
                ? n
                : u || null))
      );
    }
    function s(e) {
      var t = e.associatedChildMessage,
        n = e.botForwardedMessage,
        r = e.spoilerMessage;
      return (
        (t != null &&
          !o(
            "WAWebMessageAssociationGatingUtils",
          ).isFutureproofAssociatedChildEnabled()) ||
        (r != null && !o("WAWebSpoilerGating").isSpoilerReceiverEnabled()) ||
        (n != null &&
          !o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled())
      );
    }
    ((l.maybeGetFutureproofMessage = e), (l.hasGatedOffFutureproofWrapper = s));
  },
  98,
);
