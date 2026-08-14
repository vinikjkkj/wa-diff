__d(
  "MWConditionallySetupEBStateDB",
  [
    "EBDB",
    "EBReadyNotifier",
    "ExecutionEnvironment",
    "MAWCurrentUser",
    "MAWIndexedDbMetadata",
    "MAWUnrecoverableDbErrors",
    "MessengerWebInitData",
    "ODS",
    "WAHex",
    "WAOdsEnums",
    "WormCallbacks",
    "asyncToGeneratorRuntime",
    "cr:39965",
    "cr:39966",
    "justknobx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            n("cr:39965") != null &&
            (s || (s = r("ExecutionEnvironment"))).isInBrowser
          ) {
            (o("WormCallbacks").setWormCallbacks({
              onEARInitError: function () {
                r("justknobx")._("5578") &&
                  o("MAWUnrecoverableDbErrors").setError(
                    new (o("MAWUnrecoverableDbErrors").EarInitError)(),
                  );
              },
            }),
              n("cr:39966") == null || n("cr:39966").setupMainWaLogger(),
              o("EBDB").makeEBDB(
                o("MAWIndexedDbMetadata").ebdbName(o("MAWCurrentUser").getID()),
                r("qpl")._(1056840657, "2716"),
                o("WAHex").parseHex(r("MessengerWebInitData").accountKeyV2),
                o("EBDB").EBDBEnvironment.UI,
                {
                  log: function (n) {
                    return (e || (e = o("ODS"))).bumpEntityKey(
                      3185,
                      o("WAOdsEnums").Entity.WORM,
                      n,
                    );
                  },
                },
              ));
            var a = yield n("cr:39965").makeReStorePersistence(t);
            return (o("EBReadyNotifier").markEBReady(), a);
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.conditionallyMakeEBStateDB = u;
  },
  98,
);
