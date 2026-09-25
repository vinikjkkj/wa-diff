__d(
  "WAWebFutureproofProtoUtils",
  [
    "WAWebBotBaseGating",
    "WAWebMessageAssociationGatingUtils",
    "WAWebNewsletterGatingUtils",
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
        c = e.newsletterScheduledMessage,
        d = e.pollCreationMessageV4,
        m = e.pollCreationOptionImageMessage,
        p = e.questionMessage,
        _ = e.questionReplyMessage,
        f = e.spoilerMessage,
        g = e.viewOnceMessage,
        h = e.viewOnceMessageV2,
        y = e.viewOnceMessageV2Extension;
      return (
        s ||
        a ||
        g ||
        h ||
        y ||
        l ||
        i ||
        r ||
        d ||
        m ||
        (t &&
        o(
          "WAWebMessageAssociationGatingUtils",
        ).isFutureproofAssociatedChildEnabled()
          ? t
          : p ||
            _ ||
            (f && o("WAWebSpoilerGating").isSpoilerReceiverEnabled()
              ? f
              : n &&
                  o(
                    "WAWebBotBaseGating",
                  ).isRichResponseForwardReceivingEnabled()
                ? n
                : u ||
                  (c &&
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).isSchedulingUpdatesReceiverEnabled()
                    ? c
                    : null)))
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
