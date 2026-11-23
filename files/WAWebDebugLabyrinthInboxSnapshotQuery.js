__d(
  "WAWebDebugLabyrinthInboxSnapshotQuery",
  [
    "WABase64",
    "WAResultOrError",
    "WAWebDebugLabyrinthInboxSnapshotQuery.graphql",
    "WAWebDecodeLabyrinthEncryptedEntropy",
    "WAWebDecodeLabyrinthEncryptedEpochRootKey",
    "WAWebDecodeLabyrinthEncryptedMessagePayload",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthParseBinary",
    "WAWebLabyrinthParseEpochAnonId",
    "WAWebLabyrinthParseSealedThreadId",
    "WAWebRelayClient",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebDebugLabyrinthInboxSnapshotQuery.graphql"));
    function u(e) {
      var t = e == null ? void 0 : e.get_wa_mailbox;
      if (t == null) return null;
      var n = [];
      for (var r of (a = (i = t.threads) == null ? void 0 : i.nodes) != null
        ? a
        : []) {
        var a, i, l, s, u, d, m;
        if (r != null) {
          var p = [];
          for (var _ of (f = (g = r.messages) == null ? void 0 : g.edges) !=
          null
            ? f
            : []) {
            var f,
              g,
              h = _ == null ? void 0 : _.node;
            if (h != null) {
              var y = o(
                "WAWebLabyrinthParseEpochAnonId",
              ).parseLabyrinthEpochAnonId(h.epoch_anon_id);
              p.push({
                encryptedPayload: o(
                  "WAWebDecodeLabyrinthEncryptedMessagePayload",
                ).decodeLabyrinthEncryptedMessagePayload(h.encrypted_payload),
                encryptionVersion:
                  h.encryption_version == null
                    ? h.encryption_version
                    : o("WAWebLabyrinthOpaqueTypes").makeEncryptionVersion(
                        h.encryption_version,
                      ),
                epochAnonId: y.success ? y.value : null,
                messageId: o("WAWebLabyrinthOpaqueTypes").makeMessageId(h.id),
              });
            }
          }
          n.push({
            threadId: o("WAWebLabyrinthOpaqueTypes").makeServerThreadId(r.id),
            sealedThreadId: o(
              "WAWebLabyrinthParseSealedThreadId",
            ).parseLabyrinthSealedThreadId(
              (l = r.thread_id_seal) == null ? void 0 : l.sealed_thread_id,
            ),
            sealEpochEdges: ((s =
              (u = r.thread_id_seal) == null
                ? void 0
                : u.epoch_derivation_set) != null
              ? s
              : []
            ).map(c),
            messages: p,
            messageEpochEdges: ((d =
              (m = r.messages) == null ? void 0 : m.epoch_derivation_set) !=
            null
              ? d
              : []
            ).map(c),
          });
        }
      }
      return n;
    }
    function c(e) {
      r("vulture")("OvSabhMmHadAbj0u3yFKp8JtnjQ=");
      var t = e.backward_edge,
        n = e.forward_edge,
        a = e.from_epoch,
        i = e.to_epoch;
      return {
        backwardEdge:
          t == null
            ? t
            : o(
                "WAWebDecodeLabyrinthEncryptedEpochRootKey",
              ).decodeLabyrinthEncryptedEpochRootKey(t),
        forwardEdge:
          n == null
            ? null
            : {
                authPublicKey:
                  n.auth_public_key == null
                    ? o("WAResultOrError").makeResult(null)
                    : o("WAWebLabyrinthParseBinary").parseLabyrinthBinary(
                        n.auth_public_key,
                        o("WAWebLabyrinthOpaqueTypes")
                          .makeEpochStorageAuthPublicKey,
                      ),
                encryptedEntropy: o(
                  "WAWebDecodeLabyrinthEncryptedEntropy",
                ).decodeLabyrinthEncryptedEntropy(n.encrypted_entropy),
              },
        fromEpoch: d(a),
        toEpoch: d(i),
      };
    }
    function d(e) {
      return (
        r("vulture")("Jh77vxWtprak-WErPzQNL44tUUQ="),
        e == null
          ? null
          : {
              epochAnonId: o(
                "WAWebLabyrinthParseEpochAnonId",
              ).parseLabyrinthEpochAnonId(e.epoch_anon_id),
              serverEpochId:
                e.epoch_id == null
                  ? null
                  : o("WAWebLabyrinthOpaqueTypes").makeEpochId(e.epoch_id),
            }
      );
    }
    async function m(e) {
      var t = await o("WAWebRelayClient").fetchQuery(
        s,
        {
          clientSealToken: o("WABase64").encodeB64(e.clientSealToken),
          deviceId: e.deviceId,
          locallyAvailableEpochIds: [e.locallyAvailableEpochId],
          messageFirst: e.messageFirst,
          threadFirst: e.threadFirst,
        },
        { environment: e.environment, environmentType: "whatsapp_web" },
      );
      return u(t);
    }
    l.fetchLabyrinthInboxSnapshot = m;
  },
  98,
);
