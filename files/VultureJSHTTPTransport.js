__d(
  "VultureJSHTTPTransport",
  ["chunkArray", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "/vulture-hits/",
      s = 20;
    function u(t) {
      if (!r("justknobx")._("6705")) return !1;
      for (var n of r("chunkArray")(Array.from(new Set(t)), s)) {
        var o = new URLSearchParams(
          n.map(function (e, t) {
            return ["keys[" + t + "]", e];
          }),
        );
        c(e + "?" + o.toString());
      }
      return !0;
    }
    function c(e) {
      try {
        if (window.navigator.sendBeacon && window.navigator.sendBeacon(e))
          return;
      } catch (e) {}
      new Image().src = e;
    }
    l.sendVultureJSHits = u;
  },
  98,
);
