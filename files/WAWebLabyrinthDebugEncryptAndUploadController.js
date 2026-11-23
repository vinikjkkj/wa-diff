__d(
  "WAWebLabyrinthDebugEncryptAndUploadController",
  [
    "WABase64",
    "WALogger",
    "WAResultOrError",
    "WATimeUtils",
    "WAWebLabyrinthCanonicalUserFbid",
    "WAWebLabyrinthDebugDeviceStateUtils",
    "WAWebLabyrinthDebugLoadForEncryptAndUpload",
    "WAWebLabyrinthLocalDeviceId",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthWasmComputeClientSealToken",
    "WAWebLabyrinthWasmEncryptMessage",
    "WAWebLabyrinthWasmSealThreadId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUploadLabyrinthMessagesJob",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = "hello labyrinth";
    async function g(t) {
      var n = t.msg,
        a = t.repeat,
        i = a === void 0 ? 1 : a,
        l = t.threadId,
        g = t.threadType,
        C = g === void 0 ? "ONE_TO_ONE" : g,
        b = await o("WAWebLabyrinthDebugDeviceStateUtils").requireDebugState(
          o("WAWebLabyrinthDebugLoadForEncryptAndUpload")
            .loadForEncryptAndUpload,
        ),
        v = r("nullthrows")(o("WAWebLabyrinthLocalDeviceId").getLiveDeviceId()),
        S = b.backupId,
        R = b.currentEpoch.serverEpochId,
        L = o("WAWebLabyrinthOpaqueTypes").makeThreadId(r("nullthrows")(l)),
        E = o("WAWebLabyrinthOpaqueTypes").makeMessagePlaintextPayload(
          new TextEncoder().encode(n != null ? n : f).buffer,
        ),
        k = b.currentEpoch.epochRootKey,
        I = b.mailboxRootSalt,
        T = b.orfClientState,
        D = b.currentEpoch.epochAnonId,
        x = o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(),
        $ = Math.max(1, Math.floor(i)),
        P = await Promise.all(
          Array.from({ length: $ }, function () {
            var e = o("WAWebLabyrinthOpaqueTypes").makeStanzaId(
                r("nullthrows")(r("WAWebPonyfillsCryptoRandomUUID")()),
              ),
              t = o("WATimeUtils").millisTime();
            return o("WAWebLabyrinthWasmEncryptMessage").encryptMessageWasm({
              backupId: S,
              epochAnonId: D,
              epochId: R,
              epochRootKey: k,
              mailboxRootKey: I,
              orfClientState: T,
              plaintext: E,
              stanzaId: e,
              threadId: L,
              threadType: C,
              timestampMs: t,
              waCanonicalUserFbid: x,
            });
          }),
        ),
        N = [];
      for (var M of P.entries()) {
        var w = M[0],
          A = M[1];
        if (!A.success)
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] encryptMessageWasm failed",
                ])),
            ),
            A
          );
        N.push(A.value);
      }
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[Debug][Labyrinth] encryptMessageWasm success",
          ])),
      );
      var F = await y(b, L);
      if (!F.success)
        return (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] sealing the thread ID failed",
              ])),
          ),
          F
        );
      var O = { deviceId: v, epochId: R, familyDeviceId: v },
        B = h(N, O, F.value);
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[Debug][Labyrinth] start nativeUploadLabyrinthMessages GQL request",
          ])),
      );
      try {
        var W = await o(
            "WAWebUploadLabyrinthMessagesJob",
          ).uploadLabyrinthMessages(B),
          q = W.wa_labyrinth_upload_messages;
        e: {
          var U = q;
          if (
            ((typeof U == "object" && U !== null) || typeof U == "function") &&
            U.__typename === "WALabyrinthUploadMessagesData"
          ) {
            var V = U;
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request success",
                ])),
            );
            break e;
          }
          if (
            ((typeof U == "object" && U !== null) || typeof U == "function") &&
            U.__typename === "WALabyrinthUploadMessagesError"
          ) {
            var H = U;
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request failed",
                ])),
            );
            break e;
          }
          {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL response",
                ])),
            );
            break e;
          }
        }
        return o("WAResultOrError").makeResult(q);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          e
        );
      }
    }
    function h(e, t, n) {
      var r = o("WABase64").encodeB64(n.sealedThreadId);
      return {
        client_seal_token: o("WABase64").encodeB64(n.clientSealToken),
        device_id: t.deviceId,
        epoch_id: t.epochId,
        family_device_id: t.familyDeviceId,
        messages: e.map(function (e) {
          return {
            encrypted_payload: o("WABase64").encodeB64(e.encryptedPayload),
            offline_threading_id: e.offlineThreadingId,
            operation_type: "UPSERT",
            orf_thread_id: o("WABase64").encodeB64(e.orfThreadId),
            sealed_thread_id: r,
            thread_type: e.threadType,
            timestamp: String(e.timestamp),
            value_secret_ref: e.valueSecretRef,
          };
        }),
      };
    }
    async function y(e, t) {
      var n = await o(
        "WAWebLabyrinthWasmComputeClientSealToken",
      ).computeClientSealTokenWasm({
        orfClientState: e.orfClientState,
        backupId: e.backupId,
      });
      if (!n.success) return n;
      var r = await o("WAWebLabyrinthWasmSealThreadId").sealThreadIdWasm({
        epochRootKey: e.currentEpoch.epochRootKey,
        epochAnonId: e.currentEpoch.epochAnonId,
        backupId: e.backupId,
        threadId: t,
      });
      return r.success
        ? o("WAResultOrError").makeResult({
            clientSealToken: n.value,
            sealedThreadId: r.value,
          })
        : r;
    }
    l.encryptAndUploadLabyrinthDebugMessages = g;
  },
  98,
);
