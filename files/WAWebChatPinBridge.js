__d(
  "WAWebChatPinBridge",
  [
    "WAWebAuraGating",
    "WAWebPinChatLimits",
    "WAWebPinChatSync",
    "WAWebSyncdCoreApi",
    "WAWebSyncdWamAppState",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n, r) {
      var a = t !== 0,
        i = await o("WAWebPinChatSync").PinChatSync.getMutationsForPin(r, a, e);
      return (
        a || o("WAWebSyncdWamAppState").addUnsetActionCount(1),
        o("WAWebSyncdCoreApi")
          .lockForSync(["chat"], i, function (n) {
            var r = n[0];
            return r.merge(e.toString(), { pin: t });
          })
          .then(function () {
            return { status: 200 };
          })
      );
    }
    function s() {
      return o("WAWebPinChatSync")
        .PinChatSync.getLocalChatPins()
        .then(function (e) {
          return e.length;
        });
    }
    function u() {
      return o("WAWebPinChatSync")
        .PinChatSync.getLocalNewsletterPins()
        .then(function (e) {
          return e.length;
        });
    }
    function c(e) {
      return e.isNewsletter() ? u() : s();
    }
    function d(e) {
      var t;
      return e.isNewsletter()
        ? o("WAWebPinChatLimits").MAX_PINNED_NEWSLETTERS
        : (t = r("WAWebAuraGating").getPinnedChatsBenefitLimit()) != null
          ? t
          : o("WAWebPinChatLimits").MAX_PINNED_CHATS;
    }
    function m(e) {
      return e.isNewsletter()
        ? o("WAWebPinChatSync").PinChatSync.unpinAllNewsletters()
        : o("WAWebPinChatSync").PinChatSync.unpinAllChats();
    }
    ((l.setPin = e),
      (l.getNumNewslettersPinned = u),
      (l.getNumConversationsPinned = c),
      (l.getPinLimit = d),
      (l.unpinAllConversations = m));
  },
  98,
);
