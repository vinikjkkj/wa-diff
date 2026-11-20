__d(
  "WAWebFetchLabyrinthEpochDevicesJob",
  [
    "WAWebFetchLabyrinthEpochDevicesJobQuery.graphql",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthParseBinary",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebFetchLabyrinthEpochDevicesJobQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebRelayClient").fetchQuery(
              s,
              {},
              { environmentType: "whatsapp_web" },
            ),
            t = e == null ? void 0 : e.wa_labyrinth_fetch_epoch_devices;
          if (t == null)
            throw r("err")(
              "Labyrinth fetch-epoch-devices GraphQL response was empty",
            );
          var n = t.__typename;
          if (n === "WALabyrinthFetchEpochDevicesError")
            throw r("err")(
              "Labyrinth fetch-epoch-devices was refused: " +
                String(t.error_code) +
                " " +
                String(t.message),
            );
          if (n !== "WALabyrinthFetchEpochDevicesData")
            throw r("err")(
              "Labyrinth fetch-epoch-devices returned an unknown response type: " +
                String(n),
            );
          var a = t.epoch_id,
            i = t.devices;
          if (a == null || i == null)
            throw r("err")(
              "Labyrinth fetch-epoch-devices returned no membership",
            );
          return {
            epochId: o("WAWebLabyrinthOpaqueTypes").makeEpochId(a),
            devices: i.map(function (e) {
              var t, n, a;
              return {
                deviceId: (a = o("WAWebLabyrinthOpaqueTypes")).makeEbDeviceId(
                  (t = r("nullthrows"))(e.device_id),
                ),
                devicePublicKey: (n = o(
                  "WAWebLabyrinthParseBinary",
                )).parseLabyrinthBinary(
                  t(e.device_public_key),
                  a.makeDeviceKeyPublicKey,
                ),
                epochStoragePublicKey: n.parseLabyrinthBinary(
                  t(e.epoch_storage_public_key),
                  a.makeEpochStoragePublicKey,
                ),
                epochStoragePublicKeySig: n.parseLabyrinthBinary(
                  t(e.epoch_storage_public_key_sig),
                  a.makeEpochStorageKeySignature,
                ),
                deviceEpochHmac: n.parseLabyrinthBinary(
                  t(e.device_epoch_hmac),
                  a.makeDeviceEpochHmac,
                ),
              };
            }),
          };
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchLabyrinthEpochDevices = u;
  },
  98,
);
