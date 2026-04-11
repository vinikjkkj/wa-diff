__d(
  "WAWebCTWATrackingPayloadUtils",
  [
    "WATimeUtils",
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebConversionTupleCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
      (r("WAWebConversionTupleCollection").add(
        babelHelpers.extends({}, n, {
          id: t.id,
          timestamp: o("WATimeUtils").unixTime(),
        }),
        { merge: !0 },
      ),
        o(
          "WAWebCommonCTWAConsumerTransparency",
        ).handleConsumerTransparencyForNewMsg(
          t,
          n.conversionData,
          n.conversionSource,
        ));
    };
    l.handleChatConversationOpenedWithNewMessage = e;
  },
  98,
);
