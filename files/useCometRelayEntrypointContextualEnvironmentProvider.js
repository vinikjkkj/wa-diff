__d(
  "useCometRelayEntrypointContextualEnvironmentProvider",
  [
    "CometRelay",
    "RelayEnvironmentFactoryProvider",
    "createCometRelayBaseEntryPointEnvironmentProvider",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = o("CometRelay").useRelayEnvironment(),
        a = o("RelayEnvironmentFactoryProvider").useRelayEnvironmentFactory(),
        i = e || n,
        l;
      return (
        t[0] !== a || t[1] !== i
          ? ((l = r("createCometRelayBaseEntryPointEnvironmentProvider")(
              a,
              null,
              i,
            )),
            (t[0] = a),
            (t[1] = i),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    l.default = u;
  },
  98,
);
