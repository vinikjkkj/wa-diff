__d(
  "WAWebDeleteExpiredPinsAction",
  ["WAWebPinInChatCollection", "WAWebPinMessageAction", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    var e = async function (t) {
      await o("WAWebPinMessageAction").seekAndDestroyExpiredPins(
        o("WAWebPinInChatCollection")
          .PinInChatCollection.byChatId(o("WAWebWidFactory").asChatWid(t))
          .toArray(),
      );
    };
    l.deleteExpiredPins = e;
  },
  98,
);
