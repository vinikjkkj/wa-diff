__d(
  "useWAWebGalaxyFlowsData",
  ["WAWebContactGetters", "useWAWebContactValues"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("useWAWebContactValues").useContactValues(e.contact.id, [
          o("WAWebContactGetters").getVerifiedName,
        ]),
        n = t[0];
      return { businessName: n };
    }
    l.default = e;
  },
  98,
);
