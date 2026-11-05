__d(
  "WAWebHatchConnectLinkShape",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
      "api-key:",
      "oauth:",
      "hatch://connect/",
      "https://agent.meta.ai/connect/",
    ];
    function l(t) {
      var n = t.toLowerCase();
      return e.some(function (e) {
        return n.startsWith(e);
      });
    }
    i.hasHatchCustomConnectLinkShape = l;
  },
  66,
);
