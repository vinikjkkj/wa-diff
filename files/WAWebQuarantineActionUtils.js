__d(
  "WAWebQuarantineActionUtils",
  [
    "WAWebApiContact",
    "WAWebBotUtils",
    "WAWebFutureproofProtoUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "$$unknownFieldCount",
        "associatedChildMessage",
        "bcallMessage",
        "botForwardedMessage",
        "botInvokeMessage",
        "call",
        "chat",
        "deviceSentMessage",
        "documentWithCaptionMessage",
        "editedMessage",
        "ephemeralMessage",
        "fastRatchetKeySenderKeyDistributionMessage",
        "groupMentionedMessage",
        "groupRootKeyShare",
        "messageContextInfo",
        "messageHistoryBundle",
        "newsletterAdminProfileMessage",
        "placeholderMessage",
        "pollCreationMessageV4",
        "pollCreationOptionImageMessage",
        "questionMessage",
        "questionReplyMessage",
        "rootSecretDistributeMessage",
        "secretEncryptedMessage",
        "senderKeyDistributionMessage",
        "spoilerMessage",
        "stickerSyncRmrMessage",
        "viewOnceMessage",
        "viewOnceMessageV2",
        "viewOnceMessageV2Extension",
      ],
      s = 5,
      u = 3;
    function c() {
      var e = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
      return e.defenseMode === "on_standard";
    }
    var d = { type: "NoQuarantine" },
      m = { type: "QuarantineWithoutText" };
    function p(e) {
      return { type: "QuarantineWithText", text: e };
    }
    var _ = {
      NoQuarantine: d,
      QuarantineWithoutText: m,
      QuarantineWithText: p,
    };
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            r("WAWebWid").isUser(e) &&
            !o("WAWebUserPrefsMeUser").isMeAccount(e) &&
            !o("WAWebBotUtils").isMetaOperatedAccount(e) &&
            !(yield o("WAWebApiContact").isAddressBookContact(
              o("WAWebWidToJid").widToUserJid(
                o("WAWebWidFactory").asUserWidOrThrow(e),
              ),
            ))
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return e.type === "QuarantineWithText" ? e.text : null;
    }
    function y(e) {
      return r("isStringNullOrEmpty")(e)
        ? _.QuarantineWithoutText
        : _.QuarantineWithText(e);
    }
    function C(e) {
      var t;
      return e == null
        ? !1
        : e.jpegThumbnail != null ||
            e.thumbnailDirectPath != null ||
            e.mediaKey != null ||
            e.thumbnailSha256 != null ||
            ((t = e.contextInfo) == null || (t = t.externalAdReply) == null
              ? void 0
              : t.thumbnail) != null;
    }
    function b(e, t) {
      return (
        t === void 0 && (t = 0),
        e == null ? !0 : t > s ? !1 : v(e.hydratedHsm, t + 1)
      );
    }
    function v(e, t) {
      if ((t === void 0 && (t = 0), e == null)) return !0;
      if (t > s) return !1;
      var n = t + 1;
      return !(
        !L(e.interactiveMessageTemplate, n) ||
        !S(e.fourRowTemplate, n) ||
        !R(e.hydratedFourRowTemplate, n) ||
        !R(e.hydratedTemplate, n)
      );
    }
    function S(e, t) {
      if ((t === void 0 && (t = 0), e == null)) return !0;
      if (
        t > s ||
        e.documentMessage != null ||
        e.imageMessage != null ||
        e.videoMessage != null ||
        e.locationMessage != null
      )
        return !1;
      var n = t + 1;
      if (
        !b(e.highlyStructuredMessage, n) ||
        !b(e.content, n) ||
        !b(e.footer, n)
      )
        return !1;
      var r = e.buttons;
      if (r != null) {
        for (var o of r) if (!E(o, n)) return !1;
      }
      return !0;
    }
    function R(e, t) {
      return (
        t === void 0 && (t = 0),
        e == null
          ? !0
          : !(
              t > s ||
              e.documentMessage != null ||
              e.imageMessage != null ||
              e.videoMessage != null ||
              e.locationMessage != null
            )
      );
    }
    function L(e, t) {
      var n;
      if ((t === void 0 && (t = 0), e == null)) return !0;
      if (t > s) return !1;
      var r = e.header;
      if (
        (r != null &&
          (r.documentMessage != null ||
            r.imageMessage != null ||
            r.jpegThumbnail != null ||
            r.videoMessage != null ||
            r.locationMessage != null ||
            r.productMessage != null)) ||
        e.shopStorefrontMessage != null ||
        e.collectionMessage != null
      )
        return !1;
      var o = (n = e.carouselMessage) == null ? void 0 : n.cards;
      if (o != null) {
        for (var a of o) if (!L(a, t + 1)) return !1;
      }
      return !0;
    }
    function E(e, t) {
      var n, r, o, a, i;
      if ((t === void 0 && (t = 0), e == null)) return !0;
      if (t > s) return !1;
      var l = t + 1;
      return !(
        !b((n = e.quickReplyButton) == null ? void 0 : n.displayText, l) ||
        !b((r = e.urlButton) == null ? void 0 : r.displayText, l) ||
        !b((o = e.urlButton) == null ? void 0 : o.url, l) ||
        !b((a = e.callButton) == null ? void 0 : a.displayText, l) ||
        !b((i = e.callButton) == null ? void 0 : i.phoneNumber, l)
      );
    }
    function k(t) {
      var n = t.$$unknownFieldCount,
        r = t.associatedChildMessage,
        o = t.bcallMessage,
        a = t.botForwardedMessage,
        i = t.botInvokeMessage,
        l = t.call,
        s = t.chat,
        u = t.deviceSentMessage,
        c = t.documentWithCaptionMessage,
        d = t.editedMessage,
        m = t.ephemeralMessage,
        p = t.fastRatchetKeySenderKeyDistributionMessage,
        _ = t.groupMentionedMessage,
        f = t.groupRootKeyShare,
        g = t.messageContextInfo,
        h = t.messageHistoryBundle,
        y = t.newsletterAdminProfileMessage,
        C = t.placeholderMessage,
        b = t.pollCreationMessageV4,
        v = t.pollCreationOptionImageMessage,
        S = t.questionMessage,
        R = t.questionReplyMessage,
        L = t.rootSecretDistributeMessage,
        E = t.secretEncryptedMessage,
        k = t.senderKeyDistributionMessage,
        I = t.spoilerMessage,
        T = t.stickerSyncRmrMessage,
        D = t.viewOnceMessage,
        x = t.viewOnceMessageV2,
        $ = t.viewOnceMessageV2Extension,
        P = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return (
        (n != null ? n : 0) === 0 &&
        Object.values(P).every(function (e) {
          return e == null;
        })
      );
    }
    function I(e) {
      if (k(e)) return _.NoQuarantine;
      var t = e.extendedTextMessage;
      return t != null
        ? C(t)
          ? y(t.text)
          : _.NoQuarantine
        : e.imageMessage != null
          ? y(e.imageMessage.caption)
          : e.videoMessage != null
            ? y(e.videoMessage.caption)
            : e.documentMessage != null
              ? y(e.documentMessage.caption)
              : T(e)
                ? _.NoQuarantine
                : e.highlyStructuredMessage != null ||
                    e.templateMessage != null ||
                    e.interactiveMessage != null
                  ? b(e.highlyStructuredMessage) &&
                    v(e.templateMessage) &&
                    L(e.interactiveMessage)
                    ? _.NoQuarantine
                    : _.QuarantineWithoutText
                  : e.callLogMesssage != null
                    ? _.NoQuarantine
                    : _.QuarantineWithoutText;
    }
    function T(e) {
      return (
        e.conversation != null ||
        e.protocolMessage != null ||
        e.reactionMessage != null ||
        e.encReactionMessage != null ||
        e.pollUpdateMessage != null ||
        e.keepInChatMessage != null ||
        e.pinInChatMessage != null ||
        e.albumMessage != null
      );
    }
    function D(e) {
      switch (e.type) {
        case "NoQuarantine":
          return 0;
        case "QuarantineWithoutText":
          return 1;
        case "QuarantineWithText":
          return 2;
        default:
          return 0;
      }
    }
    function x(e, t) {
      return D(t) > D(e) ? t : e;
    }
    function $(e, t) {
      var n, r;
      t === void 0 && (t = 0);
      var a = I(e),
        i =
          (n = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(e)) ==
          null
            ? void 0
            : n.message,
        l = (r = e.protocolMessage) == null ? void 0 : r.editedMessage,
        s = o("WAWebFutureproofProtoUtils").hasGatedOffFutureproofWrapper(e);
      return t >= u && (i != null || l != null || s)
        ? x(a, _.QuarantineWithoutText)
        : (t >= u ||
            (i != null && (a = x(a, $(i, t + 1))),
            s && (a = x(a, _.QuarantineWithoutText)),
            l != null && (a = x(a, $(l, t + 1)))),
          a);
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return e == null || !c() || !(yield f(t)) ? _.NoQuarantine : $(e);
        })),
        N.apply(this, arguments)
      );
    }
    ((l.MESSAGE_MAX_INSPECTION_DEPTH = u),
      (l.QuarantineAction = _),
      (l.maybeGetQuarantineText = h),
      (l.getQuarantineAction = P));
  },
  98,
);
