__d(
  "WAWebChatPinBridge",
  [
    "WAWebAuraGating",
    "WAWebPinChatLimits",
    "WAWebPinChatSync",
    "WAWebSyncdCoreApi",
    "WAWebSyncdWamAppState",
    "WAWebWorkFeature",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e._lastPinTime,
        n = e.chatId,
        r = e.newPinTime,
        a = e.timestamp,
        i = r !== 0,
        l = await o("WAWebPinChatSync").PinChatSync.getMutationsForPin(a, i, n);
      return (
        i || o("WAWebSyncdWamAppState").addUnsetActionCount(1),
        o("WAWebSyncdCoreApi")
          .lockForSync(["chat"], l, function (e) {
            var t = e[0];
            return t.merge(n.toString(), { pin: r });
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
        : o("WAWebWorkFeature").isWork()
          ? o("WAWebPinChatLimits").MAX_PINNED_CHATS_PREMIUM
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
