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
    async function p(e) {
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
        !(await o("WAWebApiContact").isAddressBookContact(e.toJid()))
      );
    }
    function _(e) {
      return e.type === "QuarantineWithText" ? e.text : null;
    }
    function f(e) {
      return r("isStringNullOrEmpty")(e)
        ? m.QuarantineWithoutText
        : m.QuarantineWithText(e);
    }
    function g(e) {
      return e == null
        ? !1
        : e.jpegThumbnail != null ||
            e.thumbnailDirectPath != null ||
            e.mediaKey != null ||
            e.thumbnailSha256 != null;
    }
    function h(t, n) {
      return (
        n === void 0 && (n = 0),
        t == null ? !0 : n > e ? !1 : y(t.hydratedHsm, n + 1)
      );
    }
    function y(t, n) {
      if ((n === void 0 && (n = 0), t == null)) return !0;
      if (n > e) return !1;
      var r = n + 1;
      return !(
        !v(t.interactiveMessageTemplate, r) ||
        !C(t.fourRowTemplate, r) ||
        !b(t.hydratedFourRowTemplate, r) ||
        !b(t.hydratedTemplate, r)
      );
    }
    function C(t, n) {
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
        !h(t.highlyStructuredMessage, r) ||
        !h(t.content, r) ||
        !h(t.footer, r)
      )
        return !1;
      var o = t.buttons;
      if (o != null) {
        for (var a of o) if (!S(a, r)) return !1;
      }
      return !0;
    }
    function b(t, n) {
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
    function v(t, n) {
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
        for (var i of a) if (!v(i, n + 1)) return !1;
      }
      return !0;
    }
    function S(t, n) {
      var r, o, a, i, l;
      if ((n === void 0 && (n = 0), t == null)) return !0;
      if (n > e) return !1;
      var s = n + 1;
      return !(
        !h((r = t.quickReplyButton) == null ? void 0 : r.displayText, s) ||
        !h((o = t.urlButton) == null ? void 0 : o.displayText, s) ||
        !h((a = t.urlButton) == null ? void 0 : a.url, s) ||
        !h((i = t.callButton) == null ? void 0 : i.displayText, s) ||
        !h((l = t.callButton) == null ? void 0 : l.phoneNumber, s)
      );
    }
    function R(e) {
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
    function L(e) {
      if (R(e)) return m.NoQuarantine;
      var t = e.extendedTextMessage;
      return t != null
        ? g(t)
          ? f(t.text)
          : m.NoQuarantine
        : e.imageMessage != null
          ? f(e.imageMessage.caption)
          : e.videoMessage != null
            ? f(e.videoMessage.caption)
            : e.documentMessage != null
              ? f(e.documentMessage.caption)
              : E(e)
                ? m.NoQuarantine
                : e.highlyStructuredMessage != null ||
                    e.templateMessage != null ||
                    e.interactiveMessage != null
                  ? h(e.highlyStructuredMessage) &&
                    y(e.templateMessage) &&
                    v(e.interactiveMessage)
                    ? m.NoQuarantine
                    : m.QuarantineWithoutText
                  : e.callLogMesssage != null
                    ? m.NoQuarantine
                    : m.QuarantineWithoutText;
    }
    function E(e) {
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
    async function I(e, t) {
      if (
        e == null ||
        !o("WAWebABProps").getABPropConfigValue("defense_mode_quarantine") ||
        !s() ||
        !(await p(t))
      )
        return m.NoQuarantine;
      var n = L(e),
        r = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(e);
      if ((r == null ? void 0 : r.message) == null) return n;
      var a = r.message,
        i = L(a);
      return k(i) > k(n) ? i : n;
    }
    ((l.QuarantineAction = m),
      (l.maybeGetQuarantineText = _),
      (l.getQuarantineAction = I));
  },
  98,
);
