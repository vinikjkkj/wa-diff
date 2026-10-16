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
      var t,
        n = e.associatedChildMessage,
        r = e.botForwardedMessage,
        a = e.botGroupParticipantMessage,
        i = e.botInvokeMessage,
        l = e.documentWithCaptionMessage,
        s = e.editedMessage,
        u = e.ephemeralMessage,
        c = e.groupMentionedMessage,
        d = e.newsletterAdminProfileMessage,
        m = e.newsletterScheduledMessage,
        p = e.pollCreationMessageV4,
        _ = e.pollCreationOptionImageMessage,
        f = e.questionMessage,
        g = e.questionReplyMessage,
        h = e.spoilerMessage,
        y = e.viewOnceMessage,
        C = e.viewOnceMessageV2,
        b = e.viewOnceMessageV2Extension;
      return a &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? a
        : c ||
            l ||
            y ||
            C ||
            b ||
            u ||
            s ||
            i ||
            p ||
            _ ||
            (n &&
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isFutureproofAssociatedChildEnabled()
              ? n
              : f ||
                g ||
                (h != null &&
                ((t = h.message) == null ? void 0 : t.spoilerMessage) == null &&
                o("WAWebSpoilerGating").isSpoilerReceiverEnabled()
                  ? h
                  : r &&
                      o(
                        "WAWebBotBaseGating",
                      ).isRichResponseForwardReceivingEnabled()
                    ? r
                    : d ||
                      (m &&
                      o(
                        "WAWebNewsletterGatingUtils",
                      ).isSchedulingUpdatesReceiverEnabled()
                        ? m
                        : null)));
    }
    function s(e) {
      var t,
        n = e.associatedChildMessage,
        r = e.botForwardedMessage,
        a = e.botGroupParticipantMessage,
        i = e.spoilerMessage;
      return (
        (a != null &&
          !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) ||
        (n != null &&
          !o(
            "WAWebMessageAssociationGatingUtils",
          ).isFutureproofAssociatedChildEnabled()) ||
        (i != null &&
          (!o("WAWebSpoilerGating").isSpoilerReceiverEnabled() ||
            ((t = i.message) == null ? void 0 : t.spoilerMessage) != null)) ||
        (r != null &&
          !o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled())
      );
    }
    ((l.maybeGetFutureproofMessage = e), (l.hasGatedOffFutureproofWrapper = s));
  },
  98,
);
