__d(
  "WAWebCTWATrackingPayloadUtils",
  [
    "WATimeUtils",
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebConversionTupleCollection",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      (r("WAWebConversionTupleCollection").add(
        babelHelpers.extends({}, t, {
          id: e.id,
          timestamp: o("WATimeUtils").unixTime(),
          fromMe: !0,
        }),
        { merge: !0 },
      ),
        o(
          "WAWebCommonCTWAConsumerTransparency",
        ).handleConsumerTransparencyForNewMsg({
          chat: e,
          conversionData: t.conversionData,
          conversionSource: t.conversionSource,
        }));
    }
    l.handleChatConversationOpenedWithNewMessage = e;
  },
  98,
);
