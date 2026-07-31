__d(
  "WAWebQuarantineActionUtils",
  [
    "WAWebABProps",
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
      u = 3,
      c = "wa_web_defense_mode_quarantine_extra_pn_check";
    function d() {
      var e = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
      return e.defenseMode === "on_standard";
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(c);
    }
    var p = { type: "NoQuarantine" },
      _ = { type: "QuarantineWithoutText" };
    function f(e) {
      return { type: "QuarantineWithText", text: e };
    }
    var g = {
      NoQuarantine: p,
      QuarantineWithoutText: _,
      QuarantineWithText: f,
    };
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            r("WAWebWid").isUser(e) &&
            !o("WAWebUserPrefsMeUser").isMeAccount(e) &&
            !(
              r("WAWebWid").isPSA(e) ||
              r("WAWebWid").isIAS(e) ||
              r("WAWebWid").isOfficialBizAccount(e) ||
              r("WAWebWid").isSupportAccount(e) ||
              r("WAWebWid").isCAPISupportAccount(e) ||
              r("WAWebWid").isAiHub(e) ||
              o("WAWebBotUtils").isMetaAiBot(e)
            ) &&
            !(yield o("WAWebApiContact").isAddressBookContact(
              o("WAWebWidToJid").widToUserJid(
                o("WAWebWidFactory").asUserWidOrThrow(e),
              ),
              m(),
            ))
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return e.type === "QuarantineWithText" ? e.text : null;
    }
    function b(e) {
      return r("isStringNullOrEmpty")(e)
        ? g.QuarantineWithoutText
        : g.QuarantineWithText(e);
    }
    function v(e) {
      return e == null
        ? !1
        : e.jpegThumbnail != null ||
            e.thumbnailDirectPath != null ||
            e.mediaKey != null ||
            e.thumbnailSha256 != null;
    }
    function S(e, t) {
      return (
        t === void 0 && (t = 0),
        e == null ? !0 : t > s ? !1 : R(e.hydratedHsm, t + 1)
      );
    }
    function R(e, t) {
      if ((t === void 0 && (t = 0), e == null)) return !0;
      if (t > s) return !1;
      var n = t + 1;
      return !(
        !k(e.interactiveMessageTemplate, n) ||
        !L(e.fourRowTemplate, n) ||
        !E(e.hydratedFourRowTemplate, n) ||
        !E(e.hydratedTemplate, n)
      );
    }
    function L(e, t) {
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
        !S(e.highlyStructuredMessage, n) ||
        !S(e.content, n) ||
        !S(e.footer, n)
      )
        return !1;
      var r = e.buttons;
      if (r != null) {
        for (var o of r) if (!I(o, n)) return !1;
      }
      return !0;
    }
    function E(e, t) {
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
    function k(e, t) {
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
        for (var a of o) if (!k(a, t + 1)) return !1;
      }
      return !0;
    }
    function I(e, t) {
      var n, r, o, a, i;
      if ((t === void 0 && (t = 0), e == null)) return !0;
      if (t > s) return !1;
      var l = t + 1;
      return !(
        !S((n = e.quickReplyButton) == null ? void 0 : n.displayText, l) ||
        !S((r = e.urlButton) == null ? void 0 : r.displayText, l) ||
        !S((o = e.urlButton) == null ? void 0 : o.url, l) ||
        !S((a = e.callButton) == null ? void 0 : a.displayText, l) ||
        !S((i = e.callButton) == null ? void 0 : i.phoneNumber, l)
      );
    }
    function T(t) {
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
    function D(e) {
      if (T(e)) return g.NoQuarantine;
      var t = e.extendedTextMessage;
      return t != null
        ? v(t)
          ? b(t.text)
          : g.NoQuarantine
        : e.imageMessage != null
          ? b(e.imageMessage.caption)
          : e.videoMessage != null
            ? b(e.videoMessage.caption)
            : e.documentMessage != null
              ? b(e.documentMessage.caption)
              : x(e)
                ? g.NoQuarantine
                : e.highlyStructuredMessage != null ||
                    e.templateMessage != null ||
                    e.interactiveMessage != null
                  ? S(e.highlyStructuredMessage) &&
                    R(e.templateMessage) &&
                    k(e.interactiveMessage)
                    ? g.NoQuarantine
                    : g.QuarantineWithoutText
                  : e.callLogMesssage != null
                    ? g.NoQuarantine
                    : g.QuarantineWithoutText;
    }
    function x(e) {
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
    function $(e) {
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
    function P(e, t) {
      return $(t) > $(e) ? t : e;
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (e == null || !d() || !(yield h(t))) return g.NoQuarantine;
          for (var r = D(e), a = e, i = 0; i < u; i++) {
            var l = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(
              a,
            );
            if ((l == null ? void 0 : l.message) == null) break;
            ((a = l.message), (r = P(r, D(a))));
          }
          return (
            (((n = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(
              a,
            )) == null
              ? void 0
              : n.message) != null ||
              o("WAWebFutureproofProtoUtils").hasGatedOffFutureproofWrapper(
                a,
              )) &&
              (r = P(r, g.QuarantineWithoutText)),
            r
          );
        })),
        M.apply(this, arguments)
      );
    }
    ((l.QuarantineAction = g),
      (l.maybeGetQuarantineText = C),
      (l.getQuarantineAction = N));
  },
  98,
);
