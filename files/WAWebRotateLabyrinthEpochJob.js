__d(
  "WAWebRotateLabyrinthEpochJob",
  [
    "WABase64",
    "WAWebLabyrinthDebugStateCache",
    "WAWebRelayClient",
    "WAWebRotateLabyrinthEpochJobMutation.graphql",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebRotateLabyrinthEpochJobMutation.graphql"));
    function u(e, t, n) {
      var a,
        i = new Map(
          n.map(function (e) {
            return [e.deviceId, e.devicePublicKey];
          }),
        ),
        l = t.memberEdges.map(function (e) {
          var n = i.get(e.deviceId);
          if (n == null)
            throw r("err")(
              "Native Labyrinth rotate-epoch: wasm edge for unknown device " +
                e.deviceId,
            );
          return {
            device_id: e.deviceId,
            encrypted_epoch_key: o("WABase64").encodeB64(e.encryptedEpochKey),
            device_pub: o("WABase64").encodeB64(n),
            device_epoch_hmac: o("WABase64").encodeB64(e.deviceEpochHmac),
            epoch_root_key_fingerprint: o("WABase64").encodeB64(
              t.epochRootKeyFingerprint,
            ),
          };
        });
      return {
        current_epoch_id: e,
        opener_device_id: r("nullthrows")(
          n[0],
          "Native Labyrinth rotate-epoch: needs at least one member",
        ).deviceId,
        epoch_anon_id: (a = o("WABase64")).encodeB64(t.newEpochAnonIdBytes),
        backward_edge: {
          encrypted_prev_epoch_anon_id: a.encodeB64(
            t.backwardEdge.encryptedPrevEpochAnonId,
          ),
          encrypted_prev_epoch_root_key: a.encodeB64(
            t.backwardEdge.encryptedPrevEpochRootKey,
          ),
          prev_epoch_root_key_fingerprint: a.encodeB64(
            t.backwardEdge.prevEpochRootKeyFingerprint,
          ),
        },
        epoch_device_list: l,
        epoch_root_key_fingerprint: a.encodeB64(t.epochRootKeyFingerprint),
      };
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = u(e, t, n),
            i = { input: a },
            l = yield o("WAWebRelayClient").commitMutation(s, i, {
              environmentType: "whatsapp_web",
            });
          if (l == null)
            throw r("err")(
              "Native Labyrinth rotate-epoch GraphQL response was empty",
            );
          return (m(t, l), l);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      var n = t.wa_labyrinth_rotate_epoch,
        r = o(
          "WAWebLabyrinthDebugStateCache",
        ).getLabyrinthDebugKeyMaterialCache();
      r == null ||
        (n == null ? void 0 : n.__typename) !== "WALabyrinthRotateEpochData" ||
        n.new_epoch_id == null ||
        o("WAWebLabyrinthDebugStateCache").setLabyrinthDebugKeyMaterialCache(
          babelHelpers.extends({}, r, {
            epochAnonId: o("WABase64").encodeB64(e.newEpochAnonIdBytes),
            epochFbid: e.newEpochFbid,
            epochId: n.new_epoch_id,
            epochRootKey: o("WABase64").encodeB64(e.newEpochRootKey),
          }),
        );
    }
    l.rotateLabyrinthEpoch = c;
  },
  98,
);
