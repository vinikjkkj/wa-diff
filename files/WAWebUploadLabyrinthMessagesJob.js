__d(
  "WAWebUploadLabyrinthMessagesJob",
  [
    "WAWebMexUploadLabyrinthMessagesJob",
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
      var t = o("WAWebMexUploadLabyrinthMessagesJob").wasmResultToMessageUpload(
        e,
      );
      return {
        encrypted_payload: t.encrypted_payload,
        offline_threading_id: t.offline_threading_id,
        operation_type: t.operation_type,
        orf_thread_id: t.orf_thread_id,
        thread_type: t.thread_type,
        timestamp: t.timestamp,
        value_secret_ref: t.value_secret_ref,
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
