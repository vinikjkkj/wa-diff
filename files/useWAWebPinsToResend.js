__d(
  "useWAWebPinsToResend",
  ["WAWebPinInChatCollection", "compactMap", "useWAWebAggregatedView"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("useWAWebAggregatedView").useAggregatedView(
          o("WAWebPinInChatCollection").PinInChatCollection.byIsFailedByMe,
          !0,
        ),
        n = r("compactMap")(e, function (e) {
          return t.get(o("WAWebPinInChatCollection").getPinInChatId(e));
        });
      return n;
    }
    l.default = e;
  },
  98,
);
