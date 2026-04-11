__d(
  "WASmaxPresenceSubscribeRPC",
  ["WAComms", "WASmaxOutPresenceSubscribeRequest", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WASmaxOutPresenceSubscribeRequest").makeSubscribeRequest(
            e,
          );
          yield o("WAComms").castSmaxStanza(t);
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSubscribeRPC = e;
  },
  98,
);
