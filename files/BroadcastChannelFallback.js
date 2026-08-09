__d(
  "BroadcastChannelFallback",
  ["FBLogger", "WAMapWithDefault"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("WAMapWithDefault").MapWithDefault)(function () {
      return new Set();
    });
    function s(t, n) {
      e.get(t).add(n);
    }
    function u(t, n) {
      e.get(t).delete(n);
    }
    function c(t, n) {
      var o = e.get(t);
      (o.forEach(function (e) {
        return e(n);
      }),
        o.size === 0 &&
          r("FBLogger")("BroadcastChannelFallback").warn(
            "No listener for namespace",
            t,
          ));
    }
    ((l.registerBroadcastChannelFallbackListener = s),
      (l.unregisterBroadcastChannelFallbackListener = u),
      (l.handleBroadcastChannelFallbackMessage = c));
  },
  98,
);
