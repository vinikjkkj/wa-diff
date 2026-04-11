__d(
  "createCometRelayBaseEntryPointEnvironmentProvider",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = function (a) {
        var o,
          i = (o = a == null ? void 0 : a.actorID) != null ? o : t;
        if (i == null) {
          if (n != null) return n;
          if (e.defaultEnvironment == null)
            throw r("err")("No default Relay environment found in factory");
          return e.defaultEnvironment;
        }
        return e.getForActorID(String(i), null, a);
      };
      return { getEnvironment: o };
    }
    l.default = e;
  },
  98,
);
