__d(
  "WAWebDeprecatedSendIqWorkerCompatible",
  ["WAWebDeprecatedSendIqMainThread", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebDeprecatedSendIqMainThread").deprecatedSendIqMainThread;
    function s(t) {
      e = t;
    }
    function u(t, n) {
      return e.deprecatedSendStanzaAndReturnAck(t, n);
    }
    function c(t, n) {
      return e.deprecatedSendStanzaAndReturnAck(t, n).then(r("WAWebNoop"));
    }
    ((l.setInstance = s),
      (l.deprecatedSendStanzaAndReturnAck = u),
      (l.deprecatedSendStanzaAndWaitForAck = c));
  },
  98,
);
