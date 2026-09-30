__d(
  "WAWebFutureproofProtoUtils",
  [
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebMessageAssociationGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebSpoilerGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.associatedChildMessage,
        n = e.botForwardedMessage,
        r = e.botGroupParticipantMessage,
        a = e.botInvokeMessage,
        i = e.documentWithCaptionMessage,
        l = e.editedMessage,
        s = e.ephemeralMessage,
        u = e.groupMentionedMessage,
        c = e.newsletterAdminProfileMessage,
        d = e.newsletterScheduledMessage,
        m = e.pollCreationMessageV4,
        p = e.pollCreationOptionImageMessage,
        _ = e.questionMessage,
        f = e.questionReplyMessage,
        g = e.spoilerMessage,
        h = e.viewOnceMessage,
        y = e.viewOnceMessageV2,
        C = e.viewOnceMessageV2Extension;
      return r &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? r
        : u ||
            i ||
            h ||
            y ||
            C ||
            s ||
            l ||
            a ||
            m ||
            p ||
            (t &&
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isFutureproofAssociatedChildEnabled()
              ? t
              : _ ||
                f ||
                (g && o("WAWebSpoilerGating").isSpoilerReceiverEnabled()
                  ? g
                  : n &&
                      o(
                        "WAWebBotBaseGating",
                      ).isRichResponseForwardReceivingEnabled()
                    ? n
                    : c ||
                      (d &&
                      o(
                        "WAWebNewsletterGatingUtils",
                      ).isSchedulingUpdatesReceiverEnabled()
                        ? d
                        : null)));
    }
    function s(e) {
      var t = e.associatedChildMessage,
        n = e.botForwardedMessage,
        r = e.botGroupParticipantMessage,
        a = e.spoilerMessage;
      return (
        (r != null &&
          !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) ||
        (t != null &&
          !o(
            "WAWebMessageAssociationGatingUtils",
          ).isFutureproofAssociatedChildEnabled()) ||
        (a != null && !o("WAWebSpoilerGating").isSpoilerReceiverEnabled()) ||
        (n != null &&
          !o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled())
      );
    }
    ((l.maybeGetFutureproofMessage = e), (l.hasGatedOffFutureproofWrapper = s));
  },
  98,
);
