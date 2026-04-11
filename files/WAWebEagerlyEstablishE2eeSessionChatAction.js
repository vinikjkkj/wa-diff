__d(
  "WAWebEagerlyEstablishE2eeSessionChatAction",
  ["WAWebChatEagerlyEstablishE2EeSessionBridge"],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(t) {
      var n = t.id.toString(),
        r = e.get(n);
      return (
        r ||
          ((r = o(
            "WAWebChatEagerlyEstablishE2EeSessionBridge",
          ).eagerlyEstablishE2EESession(t)),
          e.set(n, r)),
        r
      );
    }
    function u(t) {
      e.delete(t);
    }
    ((l.eagerlyEstablishE2EESession = s), (l.clearEagerE2EESessionCache = u));
  },
  98,
);
