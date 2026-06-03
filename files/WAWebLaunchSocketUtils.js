__d(
  "WAWebLaunchSocketUtils",
  [
    "Promise",
    "WAComms",
    "WAGzip",
    "WAWebCommsConfig",
    "WAWebCommsHandleStanza",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      (o("WAComms").stopComms(), u());
    }
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebCommsConfig").getCommsConfig(void 0);
          return (
            o("WAComms").startComms(
              r("WAWebCommsHandleStanza"),
              t,
              function (t) {
                return (e || (e = n("Promise"))).resolve(
                  o("WAGzip").inflate(t),
                );
              },
            ),
            yield o("WAComms").waitForConnection(),
            o("WAComms").startHandlingRequests()
          );
        })),
        c.apply(this, arguments)
      );
    }
    ((l.refreshQR = s), (l.startCommsAndHandleRequests = u));
  },
  98,
);
