__d(
  "useWAWebSearchTheWebLogHFMSurfaced",
  ["WAWebSearchTheWebEventLogger", "react-compiler-runtime", "useVisibility"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.messageType,
        a = e.stwEntryPoint,
        i = e.stwFormat,
        l = e.stwInteraction,
        s;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l
        ? ((s = {
            onVisible: function () {
              return o("WAWebSearchTheWebEventLogger").logSTWEvent({
                stwEntryPoint: a,
                stwInteraction: l,
                stwFormat: i,
                messageType: n,
              });
            },
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s))
        : (s = t[4]);
      var u = r("useVisibility")(s),
        c = u[0];
      return c;
    }
    l.useWAWebSearchTheWebLogHFMSurfaced = e;
  },
  98,
);
