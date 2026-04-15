__d(
  "useWAWebPinsToResend",
  [
    "WAWebPinInChatCollection",
    "compactMap",
    "react-compiler-runtime",
    "useWAWebAggregatedView",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(5),
        n = o("useWAWebAggregatedView").useAggregatedView(
          o("WAWebPinInChatCollection").PinInChatCollection.byIsFailedByMe,
          !0,
        ),
        a;
      t[0] !== n
        ? ((a = function (t) {
            return n.get(o("WAWebPinInChatCollection").getPinInChatId(t));
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] !== e || t[3] !== a
        ? ((i = r("compactMap")(e, a)), (t[2] = e), (t[3] = a), (t[4] = i))
        : (i = t[4]);
      var l = i;
      return l;
    }
    l.default = e;
  },
  98,
);
