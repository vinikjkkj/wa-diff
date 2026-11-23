__d(
  "WAWebDeleteRetrySessions",
  ["WAWebSessionScope", "WAWebSignal", "WAWebSignalCommonUtils"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if (t.reason === "registration_mismatch")
        return o("WAWebSignal").Session.deleteRemoteSession(e);
      var n = t.sessionScope;
      if (n !== o("WAWebSessionScope").SessionScope.DEFAULT) {
        var r = n === o("WAWebSessionScope").SessionScope.STATUS ? n : void 0;
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
      (await o("WAWebSignal").Session.deleteRemoteSession(
        e,
        o("WAWebSessionScope").SessionScope.DEFAULT,
      ),
        i !== a &&
          (await o("WAWebSignal").Session.deleteRemoteSession(
            e,
            o("WAWebSessionScope").SessionScope.PQ,
          )));
    }
    l.deleteRetrySessions = e;
  },
  98,
);
