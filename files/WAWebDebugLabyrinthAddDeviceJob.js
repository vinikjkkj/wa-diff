__d(
  "WAWebDebugLabyrinthAddDeviceJob",
  [
    "WAResultOrError",
    "WAWebDebugLabyrinthAddDeviceJobMutation.graphql",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebRelayClient",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebDebugLabyrinthAddDeviceJobMutation.graphql"));
    async function u(e) {
      var t = { input: e },
        n;
      try {
        n = await o("WAWebRelayClient").commitMutation(s, t, {
          environmentType: "whatsapp_web",
        });
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "network-error",
        });
      }
      if (n == null)
        return o("WAResultOrError").makeError({ kind: "empty-response" });
      var a = n.wa_labyrinth_add_device;
      if (a == null)
        return o("WAResultOrError").makeError({ kind: "unexpected-response" });
      var i = a.__typename;
      if (i === "WALabyrinthAddDeviceError")
        return o("WAResultOrError").makeError({
          errorCode: a.error_code,
          kind: "server-rejection",
          message: a.message,
        });
      if (
        i !== "WALabyrinthAddDeviceData" ||
        a.backup_id == null ||
        a.device_id == null
      )
        return o("WAResultOrError").makeError({ kind: "unexpected-response" });
      var l = a.backup_id,
        u = a.device_id;
      return o("WAResultOrError").makeResult({
        backupId: o("WAWebLabyrinthOpaqueTypes").makeBackupId(l),
        ebDeviceId: o("WAWebLabyrinthOpaqueTypes").makeEbDeviceId(u),
      });
    }
    l.addLabyrinthDevice = u;
  },
  98,
);
