__d(
  "WAWebMexUploadLabyrinthMessagesJob",
  [
    "WAWebMexClient",
    "WAWebMexUploadLabyrinthMessagesJobMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexUploadLabyrinthMessagesJobMutation.graphql"));
    function u(e) {
      return {
        encrypted_payload: e.encryptedPayload,
        offline_threading_id: e.offlineThreadingId,
        operation_type: "UPSERT",
        orf_thread_id: e.orfThreadId,
        thread_type: e.threadType,
        timestamp: e.timestamp,
        value_secret_ref: e.valueSecretRef,
      };
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = {
              device_id: t.deviceId,
              epoch_id: t.epochId,
              family_device_id: t.familyDeviceId,
              messages: e.map(u),
            },
            r = { input: n },
            a = yield o("WAWebMexClient").fetchQuery(s, r);
          return a;
        })),
        d.apply(this, arguments)
      );
    }
    l.mexUploadLabyrinthMessages = c;
  },
  98,
);
