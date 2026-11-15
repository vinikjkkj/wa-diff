__d(
  "WAWebAddLabyrinthPeerDeviceJob",
  [
    "WAResultOrError",
    "WAWebAddLabyrinthPeerDeviceJobMutation.graphql",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebAddLabyrinthPeerDeviceJobMutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = yield o("WAWebRelayClient").commitMutation(
              s,
              { input: e },
              { environmentType: "whatsapp_web" },
            );
          } catch (e) {
            return o("WAResultOrError").makeError({
              error: r("getErrorSafe")(e),
              kind: "network-error",
            });
          }
          if (t == null)
            return o("WAResultOrError").makeError({ kind: "empty-response" });
          var n = t.wa_labyrinth_add_peer_device;
          if (n == null)
            return o("WAResultOrError").makeError({
              kind: "unexpected-response",
            });
          var a = n.__typename;
          if (a === "WALabyrinthAddPeerDeviceError")
            return o("WAResultOrError").makeError({
              errorCode: n.error_code,
              kind: "server-rejection",
              message: n.message,
            });
          if (
            a !== "WALabyrinthAddPeerDeviceData" ||
            n.backup_id == null ||
            n.device_id == null
          )
            return o("WAResultOrError").makeError({
              kind: "unexpected-response",
            });
          var i = n.backup_id,
            l = n.device_id;
          return o("WAResultOrError").makeResult({
            backupId: o("WAWebLabyrinthOpaqueTypes").makeBackupId(i),
            ebDeviceId: o("WAWebLabyrinthOpaqueTypes").makeEbDeviceId(l),
          });
        })),
        c.apply(this, arguments)
      );
    }
    l.addLabyrinthPeerDevice = u;
  },
  98,
);
