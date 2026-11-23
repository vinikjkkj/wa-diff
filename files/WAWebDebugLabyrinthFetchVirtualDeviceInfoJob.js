__d(
  "WAWebDebugLabyrinthFetchVirtualDeviceInfoJob",
  [
    "WABase64",
    "WAResultOrError",
    "WAWebDebugLabyrinthFetchVirtualDeviceInfoJobQuery.graphql",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthParseEpochAnonId",
    "WAWebRelayClient",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "WAWebDebugLabyrinthFetchVirtualDeviceInfoJobQuery.graphql",
            ));
    async function u(e) {
      var t = { input: { virtual_device_id: o("WABase64").encodeB64(e) } },
        n;
      try {
        n = await o("WAWebRelayClient").fetchQuery(s, t, {
          environmentType: "whatsapp_web",
          fetchPolicy: "network-only",
          networkCacheConfig: { force: !0 },
        });
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "network-error",
        });
      }
      if (n == null)
        return o("WAResultOrError").makeError({ kind: "empty-response" });
      var a = n.wa_labyrinth_fetch_virtual_device_info;
      if (a == null)
        return o("WAResultOrError").makeError({ kind: "unexpected-response" });
      var i = a.__typename;
      if (i === "WALabyrinthFetchVirtualDeviceInfoError")
        return o("WAResultOrError").makeError({
          errorCode: a.error_code,
          kind: "server-rejection",
          message: a.message,
        });
      if (i !== "WALabyrinthFetchVirtualDeviceInfoData")
        return o("WAResultOrError").makeError({ kind: "unexpected-response" });
      var l = a.active_epoch_id,
        u = a.encrypted_secret_values,
        d = a.mailbox_id,
        m = a.sync_epochs,
        p = a.vd_base_epoch_id;
      if (u == null || u === "")
        return o("WAResultOrError").makeError({
          field: "encryptedSecretValues",
          kind: "missing-field",
        });
      if (l == null || l === "")
        return o("WAResultOrError").makeError({
          field: "activeEpochId",
          kind: "missing-field",
        });
      if (p == null || p === "")
        return o("WAResultOrError").makeError({
          field: "virtualDeviceBaseEpochId",
          kind: "missing-field",
        });
      if (m == null)
        return o("WAResultOrError").makeError({
          field: "syncEpochs",
          kind: "missing-field",
        });
      var _;
      try {
        _ = o("WAWebLabyrinthOpaqueTypes").makeEncryptedSecretValuesJson(
          new TextDecoder("utf-8", { fatal: !0 }).decode(
            o("WABase64").decodeB64(u),
          ),
        );
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "decode-error",
        });
      }
      var f = c(m);
      return f.success
        ? o("WAResultOrError").makeResult({
            activeEpochId: o("WAWebLabyrinthOpaqueTypes").makeEpochId(l),
            encryptedSecretValuesJson: _,
            waLabyrinthAccountId:
              d == null
                ? null
                : o("WAWebLabyrinthOpaqueTypes").makeWALabyrinthAccountId(d),
            syncEpochs: f.value,
            virtualDeviceBaseEpochId: o(
              "WAWebLabyrinthOpaqueTypes",
            ).makeEpochId(p),
          })
        : f;
    }
    function c(e) {
      var t = [];
      for (var n of e) {
        var a = n.encrypted_epoch_key,
          i = n.epoch_anon_id,
          l = n.epoch_id,
          s = n.next_epoch_id,
          u = n.sender_auth_pub_key,
          c = o("WAWebLabyrinthParseEpochAnonId").parseLabyrinthEpochAnonId(i);
        if (!c.success)
          return o("WAResultOrError").makeError({
            error: c.error,
            kind: "decode-error",
          });
        var d = c.value;
        if (l == null || l === "" || d == null || u == null || u === "")
          return o("WAResultOrError").makeError({
            field: "syncEpochs",
            kind: "missing-field",
          });
        try {
          t.push({
            epochId: o("WAWebLabyrinthOpaqueTypes").makeEpochId(l),
            epochAnonId: d,
            encryptedEpochKey:
              a == null
                ? null
                : o("WAWebLabyrinthOpaqueTypes").makeEncryptedEntropy(
                    o("WABase64").decodeB64(a),
                  ),
            senderAuthPubKey: o(
              "WAWebLabyrinthOpaqueTypes",
            ).makeEpochStorageAuthPublicKey(o("WABase64").decodeB64(u)),
            nextEpochId:
              s == null ? null : o("WAWebLabyrinthOpaqueTypes").makeEpochId(s),
          });
        } catch (e) {
          return o("WAResultOrError").makeError({
            error: r("getErrorSafe")(e),
            kind: "decode-error",
          });
        }
      }
      return o("WAResultOrError").makeResult(t);
    }
    l.fetchLabyrinthVirtualDeviceInfo = u;
  },
  98,
);
