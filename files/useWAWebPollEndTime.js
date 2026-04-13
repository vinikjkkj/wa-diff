__d(
  "useWAWebPollEndTime",
  [
    "WAWebCastToPollCreationMsg",
    "WAWebClock",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useReducer;
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [o("WAWebMsgGetters").getPollEndTime]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(
          e.id,
          r("WAWebCastToPollCreationMsg"),
          n,
        ),
        i = a[0],
        l = c(m, 0),
        s = l[1],
        d = i != null && i <= o("WAWebClock").Clock.getServerTimeMs(),
        p,
        _;
      (t[1] !== d || t[2] !== i
        ? ((p = function () {
            if (!(d || i == null)) {
              var e = i - o("WAWebClock").Clock.getServerTimeMs();
              if (e <= 0) {
                s();
                return;
              }
              var t = self.setTimeout(function () {
                s();
              }, e);
              return function () {
                self.clearTimeout(t);
              };
            }
          }),
          (_ = [i, d]),
          (t[1] = d),
          (t[2] = i),
          (t[3] = p),
          (t[4] = _))
        : ((p = t[3]), (_ = t[4])),
        u(p, _));
      var f;
      return (
        t[5] !== d || t[6] !== i
          ? ((f = { isPollEnded: d, pollEndTime: i }),
            (t[5] = d),
            (t[6] = i),
            (t[7] = f))
          : (f = t[7]),
        f
      );
    }
    function m(e) {
      return e + 1;
    }
    l.useWAWebPollEndTime = d;
  },
  98,
);
