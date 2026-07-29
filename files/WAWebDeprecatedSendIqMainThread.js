__d(
  "WAWebDeprecatedSendIqMainThread",
  [
    "WADeprecatedSendIq",
    "WAWebCommsGating",
    "WAWebDeprecatedSendIqWorkerProxy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      deprecatedSendStanzaAndReturnAck: function (t, n) {
        return o("WAWebCommsGating").isCommsInWorker()
          ? o(
              "WAWebDeprecatedSendIqWorkerProxy",
            ).deprecatedSendStanzaAndReturnAck(t, n)
          : o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(t, n);
      },
    };
    l.deprecatedSendIqMainThread = e;
  },
  98,
);
