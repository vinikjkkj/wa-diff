__d(
  "useWAWebPollEndTime",
  [
    "WAWebCastToPollCreationMsg",
    "WAWebClock",
    "WAWebMsgGetters",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useReducer;
    function d(e) {
      var t = o("useWAWebMsgValues").useMsgValues(
          e.id,
          r("WAWebCastToPollCreationMsg"),
          [o("WAWebMsgGetters").getPollEndTime],
        ),
        n = t[0],
        a = c(function (e) {
          return e + 1;
        }, 0),
        i = a[1],
        l = n != null && n <= o("WAWebClock").Clock.getServerTimeMs();
      return (
        u(
          function () {
            if (!(l || n == null)) {
              var e = n - o("WAWebClock").Clock.getServerTimeMs();
              if (e <= 0) {
                i();
                return;
              }
              var t = self.setTimeout(function () {
                i();
              }, e);
              return function () {
                self.clearTimeout(t);
              };
            }
          },
          [n, l],
        ),
        { isPollEnded: l, pollEndTime: n }
      );
    }
    l.useWAWebPollEndTime = d;
  },
  98,
);
