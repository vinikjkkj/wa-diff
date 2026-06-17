__d(
  "WAWebDeleteExpiredPinsAction",
  [
    "WAWebPinInChatCollection",
    "WAWebPinMessageAction",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebPinMessageAction").seekAndDestroyExpiredPins(
            o("WAWebPinInChatCollection")
              .PinInChatCollection.byChatId(o("WAWebWidFactory").asChatWid(e))
              .toArray(),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.deleteExpiredPins = e;
  },
  98,
);
