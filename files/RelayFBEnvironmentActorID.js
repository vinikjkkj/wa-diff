__d(
  "RelayFBEnvironmentActorID",
  [
    "invariant",
    "react-compiler-runtime",
    "react-relay/relay-hooks/useRelayEnvironment",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = e.options;
      return (
        (t != null && t.actorID != null) ||
          s(
            0,
            47961,
            t == null ? "missing options" : "missing options.actorID",
            typeof e.configName == "string" ? e.configName : "<missing>",
          ),
        typeof t.actorID == "string" || s(0, void 0),
        t.actorID
      );
    }
    function u(e) {
      var t = e.options;
      return t == null || t.actorID == null
        ? null
        : (typeof t.actorID == "string" || s(0, 163031), t.actorID);
    }
    function c() {
      var t = o("react-compiler-runtime").c(2),
        n = r("react-relay/relay-hooks/useRelayEnvironment")(),
        a;
      return (
        t[0] !== n ? ((a = e(n)), (t[0] = n), (t[1] = a)) : (a = t[1]),
        a
      );
    }
    function d() {
      var e = o("react-compiler-runtime").c(2),
        t = r("react-relay/relay-hooks/useRelayEnvironment")(),
        n;
      return (
        e[0] !== t ? ((n = u(t)), (e[0] = t), (e[1] = n)) : (n = e[1]),
        n
      );
    }
    ((l.getActorID = e),
      (l.getActorIDNullable = u),
      (l.useActorID = c),
      (l.useActorIDNullable = d));
  },
  98,
);
