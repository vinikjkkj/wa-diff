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
    var s = /^([^:]*):\/\/([^/?#]*)([^?#]*)/,
      u = /[?&]spec=[^&#]/,
      c = ["api-key", "oauth"];
    function d(e) {
      var t, n;
      if (!u.test(e.split("#")[0])) return null;
      var r = e.slice(0, Math.max(e.indexOf(":"), 0)).toLowerCase(),
        o = s.exec(e),
        a = o == null || (t = o[2]) == null ? void 0 : t.toLowerCase(),
        i = o == null ? void 0 : o[3];
      return (n = c.find(function (e) {
        return (
          r === e ||
          (r === "hatch" && a === "connect" && i === "/" + e) ||
          (r === "https" && a === "agent.meta.ai" && i === "/connect/" + e)
        );
      })) != null
        ? n
        : null;
    }
    ((i.hasHatchCustomConnectLinkShape = l),
      (i.getHatchCustomConnectLinkFlow = d));
  },
  66,
);
