__d(
  "WMIRateLimitDb",
  [
    "MAWCurrentUser",
    "MAWIndexedDbMetadata",
    "MAWWormOdsLogger",
    "MessengerWebInitData",
    "WAHex",
    "WMIRateLimitSchema",
    "Worm",
    "WormEarAsync",
    "WormIDbDriverEarAsync",
    "memoizeWithArgs",
    "nullthrows",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = o("MAWCurrentUser").getID(),
        t = o("MAWIndexedDbMetadata").wmiRateLimitDbName(e),
        n = "wmi_rate_limit",
        a = r("qpl")._(1056840657, "2716"),
        i = r("nullthrows")(r("MessengerWebInitData").accountKeyV2),
        l = o("WAHex").parseHex(i),
        s = new (o("WormEarAsync").WormEarAsync)(
          o("WMIRateLimitSchema").schemaConfig,
          n,
          l,
        ),
        u = new (o("WormIDbDriverEarAsync").WormIDbDriverEarAsync)(
          t,
          n,
          o("WMIRateLimitSchema").schemaConfig,
          s,
          o("MAWWormOdsLogger").wormOdsWorkerLogger,
        ),
        c = new (o("Worm").WormDatabase)(u, a);
      return (await c.init(), c);
    }
    var s = r("memoizeWithArgs")(
      function () {
        return e();
      },
      function () {
        return "cache";
      },
    );
    l.getRateLimitDb = s;
  },
  98,
);
