__d(
  "WAWebChatPinBridge",
  [
    "WAWebPinChatLimits",
    "WAWebPinChatSync",
    "WAWebSyncdCoreApi",
    "WAWebSyncdWamAppState",
    "asyncToGeneratorRuntime",
    "cr:12224",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = t !== 0,
              i = yield o("WAWebPinChatSync").PinChatSync.getMutationsForPin(
                r,
                a,
                e,
              );
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
          },
        )),
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
        : (t =
              n("cr:12224") == null
                ? void 0
                : n("cr:12224").getPinnedChatsBenefitLimit()) != null
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
