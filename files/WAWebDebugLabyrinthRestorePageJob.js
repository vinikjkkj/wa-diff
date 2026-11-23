__d(
  "WAWebDebugLabyrinthRestorePageJob",
  [
    "WABase64",
    "WAResultOrError",
    "WATimeUtils",
    "WAWebDebugLabyrinthRestorePageJobQuery.graphql",
    "WAWebDecodeLabyrinthEncryptedEntropy",
    "WAWebDecodeLabyrinthEncryptedEpochRootKey",
    "WAWebDecodeLabyrinthEncryptedMessagePayload",
    "WAWebGraphQLServerError",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthParseBinary",
    "WAWebLabyrinthParseEpochAnonId",
    "WAWebRelayClient",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 20,
      u = 1545011,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebDebugLabyrinthRestorePageJobQuery.graphql")),
      d = { epochEdges: [], messages: [], nextCursor: null };
    async function m(e) {
      var t = {
          after: e.after,
          device_id: e.ebDeviceId,
          locally_available_epoch_ids: [e.locallyAvailableEpochId],
          message_count: s,
          partial_thread_id: o("WABase64").encodeB64(e.partialThreadId),
        },
        n;
      try {
        n = await o("WAWebRelayClient").fetchQuery(c, t, {
          environment: e.environment,
          environmentType: "whatsapp_web",
          fetchPolicy: "network-only",
          networkCacheConfig: { force: !0 },
        });
      } catch (e) {
        return h(e)
          ? o("WAResultOrError").makeResult(d)
          : o("WAResultOrError").makeError({
              error: r("getErrorSafe")(e),
              kind: "network-error",
            });
      }
      return n == null
        ? o("WAResultOrError").makeError({ kind: "empty-response" })
        : p(n);
    }
    function p(e) {
      var t = e.get_WAMessagingViewerThreadByORF;
      if (t == null) return o("WAResultOrError").makeResult(d);
      var n = t.messages;
      if (n == null)
        return o("WAResultOrError").makeError({
          field: "messages",
          kind: "missing-page-field",
        });
      var r = n.page_info;
      if (r == null)
        return o("WAResultOrError").makeError({
          field: "pageInfo",
          kind: "missing-page-field",
        });
      var a = r.end_cursor,
        i = r.has_next_page;
      if (i == null)
        return o("WAResultOrError").makeError({
          field: "hasNextPage",
          kind: "missing-page-field",
        });
      if (i === !0 && a == null)
        return o("WAResultOrError").makeError({
          field: "endCursor",
          kind: "missing-page-field",
        });
      var l = [];
      for (var s of n.edges.entries()) {
        var u = s[0],
          c = s[1],
          m = _(c, u);
        if (!m.success) return m;
        l.push(m.value);
      }
      return o("WAResultOrError").makeResult({
        epochEdges: n.epoch_derivation_set.map(f),
        messages: l,
        nextCursor:
          i && a != null
            ? o("WAWebLabyrinthOpaqueTypes").makeRestoreCursor(a)
            : null,
      });
    }
    function _(e, t) {
      var n = e.node;
      if (n == null)
        return o("WAResultOrError").makeError({
          edgeIndex: t,
          field: "node",
          kind: "malformed-message",
        });
      if (n.encryption_version == null)
        return o("WAResultOrError").makeError({
          edgeIndex: t,
          field: "encryptionVersion",
          kind: "malformed-message",
        });
      if (n.id == null)
        return o("WAResultOrError").makeError({
          edgeIndex: t,
          field: "messageId",
          kind: "malformed-message",
        });
      var r = n.encryption_version,
        a = n.id,
        i = o("WAWebLabyrinthParseEpochAnonId").parseLabyrinthEpochAnonId(
          n.epoch_anon_id,
        );
      return o("WAResultOrError").makeResult({
        encryptedPayload: o(
          "WAWebDecodeLabyrinthEncryptedMessagePayload",
        ).decodeLabyrinthEncryptedMessagePayload(n.encrypted_payload),
        encryptionVersion: o("WAWebLabyrinthOpaqueTypes").makeEncryptionVersion(
          r,
        ),
        epochAnonId: i.success ? i.value : null,
        messageId: o("WAWebLabyrinthOpaqueTypes").makeMessageId(a),
        timestampMs: o("WATimeUtils").decimalStringToMillisTime(n.timestamp_ms),
      });
    }
    function f(e) {
      var t = e.backward_edge,
        n = e.forward_edge,
        r = e.from_epoch,
        a = e.to_epoch;
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
        fromEpoch: g(r),
        toEpoch: g(a),
      };
    }
    function g(e) {
      return e == null
        ? null
        : {
            epochAnonId: o(
              "WAWebLabyrinthParseEpochAnonId",
            ).parseLabyrinthEpochAnonId(e.epoch_anon_id),
            serverEpochId:
              e.epoch_id == null
                ? null
                : o("WAWebLabyrinthOpaqueTypes").makeEpochId(e.epoch_id),
          };
    }
    function h(e) {
      return (
        e instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
        e.source.errors.some(function (e) {
          var t = e.code;
          return t === u;
        })
      );
    }
    l.fetchLabyrinthRestorePage = m;
  },
  98,
);
