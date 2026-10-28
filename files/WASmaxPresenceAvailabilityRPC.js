__d(
  "WASmaxPresenceAvailabilityRPC",
  ["WAComms", "WASmaxAttrs", "WASmaxJsx", "WAWap", "asyncToGeneratorRuntime"],
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
      var t = e.presenceType,
        n = e.presenceName,
        r = o("WASmaxJsx").smax("presence", {
          type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          name: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
        });
      return r;
    }
    ((l.sendAvailabilityRPC = e), (l.makeAvailabilityRequest = u));
  },
  98,
);
