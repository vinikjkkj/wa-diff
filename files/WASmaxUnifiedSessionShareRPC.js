__d(
  "WASmaxUnifiedSessionShareRPC",
  ["WAComms", "WASmaxJsx", "WAWap", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = u(e);
          yield o("WAComms").castSmaxStanza(t);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      var t = e.unifiedSessionId,
        n = o("WASmaxJsx").smax(
          "ib",
          null,
          o("WASmaxJsx").smax("unified_session", {
            id: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    ((l.sendShareRPC = e), (l.makeShareRequest = u));
  },
  98,
);
