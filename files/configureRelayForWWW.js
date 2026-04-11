__d(
  "configureRelayForWWW",
  [
    "FBLogger",
    "configureRelayFeatureFlagsForWWW",
    "configureRelayForFB",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s() {
      e ||
        ((e = !0),
        r("configureRelayForFB")(),
        r("configureRelayFeatureFlagsForWWW")(),
        o("relay-runtime").Observable.onUnhandledError(function (e, t) {
          var n = r("FBLogger")("relay");
          e instanceof Error
            ? (n.catching(e),
              t
                ? n.mustfix(
                    "An uncaught error was thrown inside `RelayObservable`.",
                  )
                : n.warn("An error was caught inside `RelayObservable`."))
            : t
              ? n.mustfix(
                  "An uncaught error was thrown inside `RelayObservable` but it was not an instance of `Error`. Please change your code so that it throws a bonafide `Error` object instead of `%s`.",
                  e,
                )
              : n.warn(
                  "An error was caught inside `RelayObservable` but it was not aninstance of `Error`. Please change your code so that it throws a bonafide `Error` object instead of `%s`.",
                  e,
                );
        }));
    }
    l.default = s;
  },
  98,
);
