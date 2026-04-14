__d(
  "useWAWebEventResponsesToResend",
  ["WAWebEventResponseCollection", "useWAWebAggregatedView"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("useWAWebAggregatedView").useAggregatedView(
        o("WAWebEventResponseCollection").EventResponseCollection
          .byIsFailedByMe,
        !0,
      );
      return t.filter(function (t) {
        var n = t.parentMsgKey;
        return e.some(function (e) {
          return e.equals(n);
        });
      });
    }
    l.default = e;
  },
  98,
);
