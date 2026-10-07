__d(
  "WAWebRemoveQuotedAttachmentMediaFields",
  [],
  function (t, n, r, o, a, i) {
    var e = [
        "acp2SettingMessage",
        "associatedChildMessage",
        "audioStickerMessage",
        "botForwardedMessage",
        "botGroupParticipantMessage",
        "botInvokeMessage",
        "botPlatformRegistrationSuccessMessage",
        "botTaskMessage",
        "documentWithCaptionMessage",
        "editedMessage",
        "ephemeralMessage",
        "eventCoverImage",
        "groupMentionedMessage",
        "groupStatusMentionMessage",
        "groupStatusMessage",
        "groupStatusMessageV2",
        "limitSharingMessage",
        "lottieStickerMessage",
        "newsletterAdminProfileMessage",
        "newsletterAdminProfileStatusMessage",
        "newsletterScheduledMessage",
        "pollCreationMessageV4",
        "pollCreationOptionImageMessage",
        "questionMessage",
        "questionReplyMessage",
        "spoilerMessage",
        "statusAddYours",
        "statusMentionMessage",
        "viewOnceMessage",
        "viewOnceMessageV2",
        "viewOnceMessageV2Extension",
      ],
      l = [
        "albumMessage",
        "audioMessage",
        "buttonsMessage",
        "buttonsResponseMessage",
        "call",
        "contactMessage",
        "contactsArrayMessage",
        "documentMessage",
        "eventInviteMessage",
        "eventMessage",
        "extendedTextMessage",
        "groupInviteMessage",
        "imageMessage",
        "instantImageMessage",
        "interactiveMessage",
        "interactiveResponseMessage",
        "listMessage",
        "listResponseMessage",
        "liveLocationMessage",
        "locationMessage",
        "messageHistoryBundle",
        "messageHistoryNotice",
        "musicMessage",
        "newsletterAdminInviteMessage",
        "newsletterFollowerInviteMessageV2",
        "orderMessage",
        "pollCreationMessage",
        "pollCreationMessageV2",
        "pollCreationMessageV3",
        "pollCreationMessageV5",
        "pollCreationMessageV6",
        "pollResultSnapshotMessage",
        "pollResultSnapshotMessageV3",
        "productMessage",
        "ptvMessage",
        "requestLocationMessage",
        "requestPhoneNumberMessage",
        "richResponseMessage",
        "splitPaymentMessage",
        "stickerMessage",
        "stickerPackMessage",
        "templateButtonReplyMessage",
        "templateMessage",
        "videoMessage",
      ],
      s = {
        directPath: null,
        fileEncSha256: null,
        mediaKey: null,
        mediaKeyTimestamp: null,
        url: null,
      },
      u = { thumbnailDirectPath: null, thumbnailEncSha256: null };
    function c(e) {
      var t;
      return (
        e.isOpenBotGroup === !0 ||
        e.isTeeBotGroup === !0 ||
        ((t = e.groupAgentParticipants) != null ? t : []).length > 0
      );
    }
    function d(e) {
      var t = m(e) ? p(e) : babelHelpers.extends({}, e);
      return (y(t, d), t);
    }
    function m(e) {
      return l.some(function (t) {
        var n;
        return (
          ((n = e[t]) == null || (n = n.contextInfo) == null
            ? void 0
            : n.quotedMessage) != null
        );
      });
    }
    function p(e) {
      var t = babelHelpers.extends({}, e, {
        albumMessage: _(e.albumMessage),
        audioMessage: _(e.audioMessage),
        buttonsMessage: _(e.buttonsMessage),
        buttonsResponseMessage: _(e.buttonsResponseMessage),
        call: _(e.call),
        contactMessage: _(e.contactMessage),
        contactsArrayMessage: _(e.contactsArrayMessage),
        documentMessage: _(e.documentMessage),
        eventInviteMessage: _(e.eventInviteMessage),
        eventMessage: _(e.eventMessage),
        extendedTextMessage: _(e.extendedTextMessage),
        groupInviteMessage: _(e.groupInviteMessage),
        imageMessage: _(e.imageMessage),
        instantImageMessage: _(e.instantImageMessage),
        interactiveMessage: _(e.interactiveMessage),
        interactiveResponseMessage: _(e.interactiveResponseMessage),
        listMessage: _(e.listMessage),
        listResponseMessage: _(e.listResponseMessage),
        liveLocationMessage: _(e.liveLocationMessage),
        locationMessage: _(e.locationMessage),
        messageHistoryBundle: _(e.messageHistoryBundle),
        messageHistoryNotice: _(e.messageHistoryNotice),
        musicMessage: _(e.musicMessage),
        newsletterAdminInviteMessage: _(e.newsletterAdminInviteMessage),
        newsletterFollowerInviteMessageV2: _(
          e.newsletterFollowerInviteMessageV2,
        ),
        orderMessage: _(e.orderMessage),
        pollCreationMessage: _(e.pollCreationMessage),
        pollCreationMessageV2: _(e.pollCreationMessageV2),
        pollCreationMessageV3: _(e.pollCreationMessageV3),
        pollCreationMessageV5: _(e.pollCreationMessageV5),
        pollCreationMessageV6: _(e.pollCreationMessageV6),
        pollResultSnapshotMessage: _(e.pollResultSnapshotMessage),
        pollResultSnapshotMessageV3: _(e.pollResultSnapshotMessageV3),
        productMessage: _(e.productMessage),
        ptvMessage: _(e.ptvMessage),
        requestLocationMessage: _(e.requestLocationMessage),
        requestPhoneNumberMessage: _(e.requestPhoneNumberMessage),
        richResponseMessage: _(e.richResponseMessage),
        splitPaymentMessage: _(e.splitPaymentMessage),
        stickerMessage: _(e.stickerMessage),
        stickerPackMessage: _(e.stickerPackMessage),
        templateButtonReplyMessage: _(e.templateButtonReplyMessage),
        templateMessage: _(e.templateMessage),
        videoMessage: _(e.videoMessage),
      });
      for (var n of l) t[n] == null && delete t[n];
      return t;
    }
    function _(e) {
      var t;
      return (e == null || (t = e.contextInfo) == null
        ? void 0
        : t.quotedMessage) == null
        ? e
        : babelHelpers.extends({}, e, { contextInfo: f(e.contextInfo) });
    }
    function f(e) {
      return (e == null ? void 0 : e.quotedMessage) == null
        ? e
        : babelHelpers.extends({}, e, { quotedMessage: g(e.quotedMessage) });
    }
    function g(e) {
      var t = babelHelpers.extends({}, e);
      return (
        e.imageMessage != null &&
          (t.imageMessage = babelHelpers.extends({}, e.imageMessage, s, u, {
            contextInfo: h(e.imageMessage.contextInfo),
          })),
        e.videoMessage != null &&
          (t.videoMessage = babelHelpers.extends({}, e.videoMessage, s, u, {
            contextInfo: h(e.videoMessage.contextInfo),
          })),
        e.ptvMessage != null &&
          (t.ptvMessage = babelHelpers.extends({}, e.ptvMessage, s, u, {
            contextInfo: h(e.ptvMessage.contextInfo),
          })),
        e.documentMessage != null &&
          (t.documentMessage = babelHelpers.extends(
            {},
            e.documentMessage,
            s,
            u,
            { contextInfo: h(e.documentMessage.contextInfo) },
          )),
        e.audioMessage != null &&
          (t.audioMessage = babelHelpers.extends({}, e.audioMessage, s, {
            contextInfo: h(e.audioMessage.contextInfo),
          })),
        e.stickerMessage != null &&
          (t.stickerMessage = babelHelpers.extends({}, e.stickerMessage, s, {
            contextInfo: h(e.stickerMessage.contextInfo),
          })),
        y(t, g),
        t
      );
    }
    function h(e) {
      return (e == null ? void 0 : e.mediaDomainInfo) == null
        ? e
        : babelHelpers.extends({}, e, { mediaDomainInfo: null });
    }
    function y(t, n) {
      for (var r of e) {
        var o = t[r],
          a = o == null ? void 0 : o.message;
        o != null &&
          a != null &&
          (t[r] = babelHelpers.extends({}, o, { message: n(a) }));
      }
    }
    ((i.FUTUREPROOF_WRAPPER_KEYS = e),
      (i.QUOTE_CARRIER_KEYS = l),
      (i.isGroupWithAgentParticipant = c),
      (i.removeQuotedAttachmentMediaFields = d));
  },
  66,
);
