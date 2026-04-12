__d(
  "useWAWebSearchTheWebLogHFMSurfaced",
  ["WAWebSearchTheWebEventLogger", "useVisibility"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.messageType,
        n = e.stwEntryPoint,
        a = e.stwFormat,
        i = e.stwInteraction,
        l = r("useVisibility")({
          onVisible: function () {
            return o("WAWebSearchTheWebEventLogger").logSTWEvent({
              stwEntryPoint: n,
              stwInteraction: i,
              stwFormat: a,
              messageType: t,
            });
          },
        }),
        s = l[0];
      return s;
    }
    l.useWAWebSearchTheWebLogHFMSurfaced = e;
  },
  98,
);
