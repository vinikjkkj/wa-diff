__d(
  "WAWebDeleteExpiredPinsAction",
  ["WAWebPinInChatCollection", "WAWebPinMessageAction", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await o("WAWebPinMessageAction").seekAndDestroyExpiredPins(
        o("WAWebPinInChatCollection")
          .PinInChatCollection.byChatId(o("WAWebWidFactory").asChatWid(e))
          .toArray(),
      );
    }
    l.deleteExpiredPins = e;
  },
  98,
);
