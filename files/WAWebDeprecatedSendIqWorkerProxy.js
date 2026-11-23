__d(
  "WAWebDeprecatedSendIqWorkerProxy",
  ["WAWap", "WAWebBackendWorkerClient", "WAWebCommsWorkerReady"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      await o("WAWebCommsWorkerReady").waitForCommsWorker();
      var n = o("WAWap").encodeStanza(e),
        r = await o("WAWebBackendWorkerClient")
          .getBackendWorkerBridge()
          .then(function (e) {
            return e.sendAndReceive(
              "comms",
              "deprecatedSendStanzaAndReturnAck",
              { stanza: n, expectedAck: t },
              void 0,
              void 0,
              void 0,
              [n.buffer],
            );
          });
      return o("WAWap").decodeStanza(r, function (e) {
        return Promise.resolve(e);
      });
    }
    l.deprecatedSendStanzaAndReturnAck = e;
  },
  98,
);
