__d(
  "WAWebDeleteExpiredPinsAction",
  [
    "WAWebPinInChatCollection",
    "WAWebPinMessageAction",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
        yield o("WAWebPinMessageAction").seekAndDestroyExpiredPins(
          o("WAWebPinInChatCollection")
            .PinInChatCollection.byChatId(o("WAWebWidFactory").asChatWid(e))
            .toArray(),
        );
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    })();
    l.deleteExpiredPins = e;
  },
  98,
);
