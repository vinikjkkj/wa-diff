__d(
  "WASmaxPresenceAvailabilityRPC",
  [
    "WAComms",
    "WASmaxOutPresenceAvailabilityRequest",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WASmaxOutPresenceAvailabilityRequest",
          ).makeAvailabilityRequest(e);
          yield o("WAComms").castSmaxStanza(t);
        })),
        s.apply(this, arguments)
      );
    }
    l.sendAvailabilityRPC = e;
  },
  98,
);
