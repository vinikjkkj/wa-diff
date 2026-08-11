__d(
  "WAWebDeprecatedSendIqWorkerProxy",
  [
    "Promise",
    "WAWap",
    "WAWebBackendWorkerClient",
    "WAWebCommsWorkerReady",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          yield o("WAWebCommsWorkerReady").waitForCommsWorker();
          var a = o("WAWap").encodeStanza(t),
            i = yield o("WAWebBackendWorkerClient")
              .getBackendWorkerBridge()
              .then(function (e) {
                return e.sendAndReceive(
                  "comms",
                  "deprecatedSendStanzaAndReturnAck",
                  { stanza: a, expectedAck: r },
                  void 0,
                  void 0,
                  void 0,
                  [a.buffer],
                );
              });
          return o("WAWap").decodeStanza(i, function (t) {
            return (e || (e = n("Promise"))).resolve(t);
          });
        })),
        u.apply(this, arguments)
      );
    }
    l.deprecatedSendStanzaAndReturnAck = s;
  },
  98,
);
