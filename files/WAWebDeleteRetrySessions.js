__d(
  "WAWebDeleteRetrySessions",
  [
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.reason === "registration_mismatch")
            return o("WAWebSignal").Session.deleteRemoteSession(e);
          var n = t.sessionScope;
          if (n !== o("WAWebSessionScope").SessionScope.DEFAULT) {
            var r =
              n === o("WAWebSessionScope").SessionScope.STATUS ? n : void 0;
            return o("WAWebSignal").Session.deleteRemoteSession(e, r);
          }
          var a = o("WAWebSignalCommonUtils").createSignalAddress(
              e,
              o("WAWebSessionScope").SessionScope.DEFAULT,
            ),
            i = o("WAWebSignalCommonUtils").createSignalAddress(
              e,
              o("WAWebSessionScope").SessionScope.PQ,
            );
          (yield o("WAWebSignal").Session.deleteRemoteSession(
            e,
            o("WAWebSessionScope").SessionScope.DEFAULT,
          ),
            i !== a &&
              (yield o("WAWebSignal").Session.deleteRemoteSession(
                e,
                o("WAWebSessionScope").SessionScope.PQ,
              )));
        })),
        s.apply(this, arguments)
      );
    }
    l.deleteRetrySessions = e;
  },
  98,
);
