__d(
  "WAWebSearchTheWebEventLogger",
  ["WAWebSTWGatingUtils", "WAWebSearchTheWebFunnelWamEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (o("WAWebSTWGatingUtils").isSearchTheWebEnabled()) {
        var t = e.messageType,
          n = e.stwEntryPoint,
          r = e.stwFormat,
          a = e.stwInteraction,
          i = e.stwLensApiErrorType;
        new (o("WAWebSearchTheWebFunnelWamEvent").SearchTheWebFunnelWamEvent)({
          stwEntryPoint: n,
          stwFormat: r,
          stwInteraction: a,
          imageSearchFailedErrorType: i,
          messageType: t,
        }).commit();
      }
    }
    l.logSTWEvent = e;
  },
  98,
);
