__d(
  "WebSessionExtender",
  ["WebSession", "clearInterval", "cr:13141", "cr:913", "setInterval"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2e4,
      s = new Set(),
      u = null;
    function c(t, a) {
      (a === void 0 && (a = "extender"),
        s.add(t),
        u == null &&
          (o("WebSession").extend(Date.now() + e + 2e3),
          n("cr:13141") == null || n("cr:13141").extend(),
          (u = r("setInterval")(function () {
            (o("WebSession").extend(Date.now() + e + 2e3),
              n("cr:13141") == null || n("cr:13141").extend(),
              n("cr:913") &&
                new (n("cr:913"))()
                  .setClientTime(Date.now())
                  .setWebsessionID(o("WebSession").getId())
                  .setReason(a)
                  .log());
          }, e))));
    }
    function d(e) {
      s.delete(e);
      var t = s.size;
      t === 0 && u != null && (r("clearInterval")(u), (u = null));
    }
    ((l.subscribe = c), (l.unsubscribe = d));
  },
  98,
);
