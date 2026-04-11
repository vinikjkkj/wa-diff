__d(
  "useWAWebEventResponsesToResend",
  [
    "WAWebEventResponseCollection",
    "react-compiler-runtime",
    "useWAWebAggregatedView",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(5),
        n = o("useWAWebAggregatedView").useAggregatedView(
          o("WAWebEventResponseCollection").EventResponseCollection
            .byIsFailedByMe,
          !0,
        ),
        r;
      if (t[0] !== n || t[1] !== e) {
        var a;
        (t[3] !== e
          ? ((a = function (n) {
              var t = n.parentMsgKey;
              return e.some(function (e) {
                return e.equals(t);
              });
            }),
            (t[3] = e),
            (t[4] = a))
          : (a = t[4]),
          (r = n.filter(a)),
          (t[0] = n),
          (t[1] = e),
          (t[2] = r));
      } else r = t[2];
      return r;
    }
    l.default = e;
  },
  98,
);
