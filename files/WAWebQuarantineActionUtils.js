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
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 5;
    function s() {
      if (o("WAWebABProps").getABPropConfigValue("defense_mode_available") < 1)
        return !1;
      var e = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
      return e.defenseMode === "on_standard";
    }
    var u = { type: "NoQuarantine" },
      c = { type: "QuarantineWithoutText" };
    function d(e) {
      return { type: "QuarantineWithText", text: e };
    }
    var m = {
      NoQuarantine: u,
      QuarantineWithoutText: c,
      QuarantineWithText: d,
    };
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              r("WAWebWid").isBot(e) ||
              o("WAWebBotUtils").isMetaAiBot(e)
            ) &&
            !(yield o("WAWebApiContact").isAddressBookContact(e.toJid()))
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return e.type === "QuarantineWithText" ? e.text : null;
    }
    function g(e) {
      return r("isStringNullOrEmpty")(e)
        ? m.QuarantineWithoutText
        : m.QuarantineWithText(e);
    }
    function h(e) {
      return e == null
        ? !1
        : e.jpegThumbnail != null ||
            e.thumbnailDirectPath != null ||
            e.mediaKey != null ||
            e.thumbnailSha256 != null;
    }
    function y(t, n) {
      return (
        n === void 0 && (n = 0),
        t == null ? !0 : n > e ? !1 : C(t.hydratedHsm, n + 1)
      );
    }
    function C(t, n) {
      if ((n === void 0 && (n = 0), t == null)) return !0;
      if (n > e) return !1;
      var r = n + 1;
      return !(
        !S(t.interactiveMessageTemplate, r) ||
        !b(t.fourRowTemplate, r) ||
        !v(t.hydratedFourRowTemplate, r) ||
        !v(t.hydratedTemplate, r)
      );
    }
    function b(t, n) {
      if ((n === void 0 && (n = 0), t == null)) return !0;
      if (
        n > e ||
        t.documentMessage != null ||
        t.imageMessage != null ||
        t.videoMessage != null ||
        t.locationMessage != null
      )
        return !1;
      var r = n + 1;
      if (
        !y(t.highlyStructuredMessage, r) ||
        !y(t.content, r) ||
        !y(t.footer, r)
      )
        return !1;
      var o = t.buttons;
      if (o != null) {
        for (var a of o) if (!R(a, r)) return !1;
      }
      return !0;
    }
    function v(t, n) {
      return (
        n === void 0 && (n = 0),
        t == null
          ? !0
          : !(
              n > e ||
              t.documentMessage != null ||
              t.imageMessage != null ||
              t.videoMessage != null ||
              t.locationMessage != null
            )
      );
    }
    function S(t, n) {
      var r;
      if ((n === void 0 && (n = 0), t == null)) return !0;
      if (n > e) return !1;
      var o = t.header;
      if (
        (o != null &&
          (o.documentMessage != null ||
            o.imageMessage != null ||
            o.jpegThumbnail != null ||
            o.videoMessage != null ||
            o.locationMessage != null ||
            o.productMessage != null)) ||
        t.shopStorefrontMessage != null ||
        t.collectionMessage != null
      )
        return !1;
      var a = (r = t.carouselMessage) == null ? void 0 : r.cards;
      if (a != null) {
        for (var i of a) if (!S(i, n + 1)) return !1;
      }
      return !0;
    }
    function R(t, n) {
      var r, o, a, i, l;
      if ((n === void 0 && (n = 0), t == null)) return !0;
      if (n > e) return !1;
      var s = n + 1;
      return !(
        !y((r = t.quickReplyButton) == null ? void 0 : r.displayText, s) ||
        !y((o = t.urlButton) == null ? void 0 : o.displayText, s) ||
        !y((a = t.urlButton) == null ? void 0 : a.url, s) ||
        !y((i = t.callButton) == null ? void 0 : i.displayText, s) ||
        !y((l = t.callButton) == null ? void 0 : l.phoneNumber, s)
      );
    }
    function L(e) {
      return (
        e.conversation == null &&
        e.extendedTextMessage == null &&
        e.imageMessage == null &&
        e.videoMessage == null &&
        e.audioMessage == null &&
        e.documentMessage == null &&
        e.stickerMessage == null &&
        e.ptvMessage == null &&
        e.viewOnceMessage == null &&
        e.viewOnceMessageV2 == null &&
        e.viewOnceMessageV2Extension == null &&
        e.protocolMessage == null &&
        e.reactionMessage == null &&
        e.encReactionMessage == null &&
        e.pollUpdateMessage == null &&
        e.keepInChatMessage == null &&
        e.pinInChatMessage == null &&
        e.albumMessage == null &&
        e.highlyStructuredMessage == null &&
        e.templateMessage == null &&
        e.interactiveMessage == null &&
        e.callLogMesssage == null &&
        e.contactMessage == null &&
        e.contactsArrayMessage == null &&
        e.locationMessage == null &&
        e.liveLocationMessage == null
      );
    }
    function E(e) {
      if (L(e)) return m.NoQuarantine;
      var t = e.extendedTextMessage;
      return t != null
        ? h(t)
          ? g(t.text)
          : m.NoQuarantine
        : e.imageMessage != null
          ? g(e.imageMessage.caption)
          : e.videoMessage != null
            ? g(e.videoMessage.caption)
            : e.documentMessage != null
              ? g(e.documentMessage.caption)
              : e.conversation != null ||
                  e.protocolMessage != null ||
                  e.reactionMessage != null ||
                  e.encReactionMessage != null ||
                  e.pollUpdateMessage != null ||
                  e.keepInChatMessage != null ||
                  e.pinInChatMessage != null ||
                  e.albumMessage != null
                ? m.NoQuarantine
                : e.highlyStructuredMessage != null ||
                    e.templateMessage != null ||
                    e.interactiveMessage != null
                  ? y(e.highlyStructuredMessage) &&
                    C(e.templateMessage) &&
                    S(e.interactiveMessage)
                    ? m.NoQuarantine
                    : m.QuarantineWithoutText
                  : e.callLogMesssage != null
                    ? m.NoQuarantine
                    : m.QuarantineWithoutText;
    }
    function k(e) {
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
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            e == null ||
            !o("WAWebABProps").getABPropConfigValue(
              "defense_mode_quarantine",
            ) ||
            !s() ||
            !(yield p(t))
          )
            return m.NoQuarantine;
          var n = E(e),
            r = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(e);
          if ((r == null ? void 0 : r.message) == null) return n;
          var a = r.message,
            i = E(a);
          return k(i) > k(n) ? i : n;
        })),
        T.apply(this, arguments)
      );
    }
    ((l.QuarantineAction = m),
      (l.maybeGetQuarantineText = f),
      (l.getQuarantineAction = I));
  },
  98,
);
