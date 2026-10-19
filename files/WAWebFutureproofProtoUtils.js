__d(
  "WAWebFutureproofProtoUtils",
  [
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebMessageAssociationGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebSoundStickerGating",
    "WAWebSpoilerGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.associatedChildMessage,
        r = e.audioStickerMessage,
        a = e.botForwardedMessage,
        i = e.botGroupParticipantMessage,
        l = e.botInvokeMessage,
        s = e.documentWithCaptionMessage,
        u = e.editedMessage,
        c = e.ephemeralMessage,
        d = e.groupMentionedMessage,
        m = e.newsletterAdminProfileMessage,
        p = e.newsletterScheduledMessage,
        _ = e.pollCreationMessageV4,
        f = e.pollCreationOptionImageMessage,
        g = e.questionMessage,
        h = e.questionReplyMessage,
        y = e.spoilerMessage,
        C = e.viewOnceMessage,
        b = e.viewOnceMessageV2,
        v = e.viewOnceMessageV2Extension;
      return i &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? i
        : d ||
            s ||
            C ||
            b ||
            v ||
            c ||
            u ||
            l ||
            _ ||
            f ||
            (n &&
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isFutureproofAssociatedChildEnabled()
              ? n
              : g ||
                h ||
                (y != null &&
                ((t = y.message) == null ? void 0 : t.spoilerMessage) == null &&
                o("WAWebSpoilerGating").isSpoilerReceiverEnabled()
                  ? y
                  : a &&
                      o(
                        "WAWebBotBaseGating",
                      ).isRichResponseForwardReceivingEnabled()
                    ? a
                    : m ||
                      (p &&
                      o(
                        "WAWebNewsletterGatingUtils",
                      ).isSchedulingUpdatesReceiverEnabled()
                        ? p
                        : r &&
                            o(
                              "WAWebSoundStickerGating",
                            ).isSoundStickerConsumptionEnabled()
                          ? r
                          : null)));
    }
    function s(e) {
      var t,
        n = e.associatedChildMessage,
        r = e.audioStickerMessage,
        a = e.botForwardedMessage,
        i = e.botGroupParticipantMessage,
        l = e.spoilerMessage;
      return (
        (i != null &&
          !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) ||
        (n != null &&
          !o(
            "WAWebMessageAssociationGatingUtils",
          ).isFutureproofAssociatedChildEnabled()) ||
        (l != null &&
          (!o("WAWebSpoilerGating").isSpoilerReceiverEnabled() ||
            ((t = l.message) == null ? void 0 : t.spoilerMessage) != null)) ||
        (r != null &&
          !o("WAWebSoundStickerGating").isSoundStickerConsumptionEnabled()) ||
        (a != null &&
          !o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled())
      );
    }
    ((l.maybeGetFutureproofMessage = e), (l.hasGatedOffFutureproofWrapper = s));
  },
  98,
);
