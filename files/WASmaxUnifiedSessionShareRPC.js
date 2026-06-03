__d(
  "WASmaxUnifiedSessionShareRPC",
  ["WAComms", "WASmaxOutUnifiedSessionShareRequest", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WASmaxOutUnifiedSessionShareRequest").makeShareRequest(e);
          yield o("WAComms").castSmaxStanza(t);
        })),
        s.apply(this, arguments)
      );
    }
    l.sendShareRPC = e;
  },
  98,
);
