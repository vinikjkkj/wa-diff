__d(
  "WAWebChatPinBridge",
  [
    "WAWebAuraGating",
    "WAWebPinChatLimits",
    "WAWebPinChatSync",
    "WAWebSyncdCoreApi",
    "WAWebSyncdWamAppState",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e._lastPinTime,
            n = e.chatId,
            r = e.newPinTime,
            a = e.timestamp,
            i = r !== 0,
            l = yield o("WAWebPinChatSync").PinChatSync.getMutationsForPin(
              a,
              i,
              n,
            );
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
        })),
        s.apply(this, arguments)
      );
    }
    function u() {
      return o("WAWebPinChatSync")
        .PinChatSync.getLocalChatPins()
        .then(function (e) {
          return e.length;
        });
    }
    function c() {
      return o("WAWebPinChatSync")
        .PinChatSync.getLocalNewsletterPins()
        .then(function (e) {
          return e.length;
        });
    }
    function d(e) {
      return e.isNewsletter() ? c() : u();
    }
    function m(e) {
      var t;
      return e.isNewsletter()
        ? o("WAWebPinChatLimits").MAX_PINNED_NEWSLETTERS
        : (t = r("WAWebAuraGating").getPinnedChatsBenefitLimit()) != null
          ? t
          : o("WAWebPinChatLimits").MAX_PINNED_CHATS;
    }
    function p(e) {
      return e.isNewsletter()
        ? o("WAWebPinChatSync").PinChatSync.unpinAllNewsletters()
        : o("WAWebPinChatSync").PinChatSync.unpinAllChats();
    }
    ((l.setPin = e),
      (l.getNumNewslettersPinned = c),
      (l.getNumConversationsPinned = d),
      (l.getPinLimit = m),
      (l.unpinAllConversations = p));
  },
  98,
);
