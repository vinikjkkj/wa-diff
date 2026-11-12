__d(
  "WAWebClientPayloadForLoginWorkerCompatible",
  ["WAWebClientPayload"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      e = t;
    }
    function u(t) {
      var n = t.passive,
        r = t.pull;
      return e != null
        ? e.buildClientPayloadForLogin({ passive: n, pull: r })
        : o("WAWebClientPayload").getClientPayloadForLogin({
            passive: n,
            pull: r,
          });
    }
    ((l.setInstance = s), (l.buildClientPayloadForLogin = u));
  },
  98,
);
