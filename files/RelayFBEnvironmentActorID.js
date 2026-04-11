__d(
  "RelayFBEnvironmentActorID",
  [
    "invariant",
    "react-compiler-runtime",
    "react-relay/relay-hooks/useRelayEnvironment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("react-compiler-runtime").c;
    function s(e) {
      var t = e.options;
      return (
        (t != null && t.actorID != null) ||
          l(
            0,
            47961,
            t == null ? "missing options" : "missing options.actorID",
            typeof e.configName == "string" ? e.configName : "<missing>",
          ),
        typeof t.actorID == "string" || l(0, void 0),
        t.actorID
      );
    }
    function u() {
      var t = e(2),
        r = n("react-relay/relay-hooks/useRelayEnvironment")(),
        o;
      return (
        t[0] !== r ? ((o = s(r)), (t[0] = r), (t[1] = o)) : (o = t[1]),
        o
      );
    }
    a.exports = { getActorID: s, useActorID: u };
  },
  null,
);
