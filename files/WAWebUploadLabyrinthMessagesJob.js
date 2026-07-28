__d(
  "WAWebUploadLabyrinthMessagesJob",
  [
    "WABase64",
    "WAWebRelayClient",
    "WAWebUploadLabyrinthMessagesJobMutation.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebUploadLabyrinthMessagesJobMutation.graphql"));
    function u(e, t) {
      return {
        device_id: t.deviceId,
        epoch_id: t.epochId,
        family_device_id: t.familyDeviceId,
        messages: e.map(c),
      };
    }
    function c(e) {
      return {
        encrypted_payload: o("WABase64").encodeB64(e.encryptedPayload),
        offline_threading_id: e.offlineThreadingId,
        operation_type: "UPSERT",
        orf_thread_id: o("WABase64").encodeB64(e.orfThreadId),
        thread_type: e.threadType,
        timestamp: e.timestamp,
        value_secret_ref: e.valueSecretRef,
      };
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = { input: e },
            n = yield o("WAWebRelayClient").commitMutation(s, t, {
              environmentType: "whatsapp_web",
            });
          if (n == null)
            throw r("err")(
              "Native Labyrinth upload-messages GraphQL response was empty",
            );
          return n;
        })),
        m.apply(this, arguments)
      );
    }
    ((l.wasmResultsToUploadLabyrinthMessagesInput = u),
      (l.uploadLabyrinthMessages = d));
  },
  98,
);
