__d(
  "WAWebLabyrinthDebugEncryptAndUploadController",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      f,
      g = "hello labyrinth";
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.msg,
            i = t.repeat,
            l = i === void 0 ? 1 : i,
            h = t.threadId,
            y = t.threadType,
            v = y === void 0 ? "ONE_TO_ONE" : y,
            S = yield o(
              "WAWebLabyrinthDebugDeviceStateUtils",
            ).requireDebugState(
              o("WAWebLabyrinthDebugLoadForEncryptAndUpload")
                .loadForEncryptAndUpload,
            ),
            R = r("nullthrows")(
              o("WAWebLabyrinthLocalDeviceId").getLiveDeviceId(),
            ),
            L = S.backupId,
            E = S.currentEpoch.serverEpochId,
            k = o("WAWebLabyrinthOpaqueTypes").makeThreadId(r("nullthrows")(h)),
            I = o("WAWebLabyrinthOpaqueTypes").makeMessagePlaintextPayload(
              new TextEncoder().encode(a != null ? a : g).buffer,
            ),
            T = S.currentEpoch.epochRootKey,
            D = S.mailboxRootSalt,
            x = S.orfClientState,
            $ = S.currentEpoch.epochAnonId,
            P = o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(),
            N = Math.max(1, Math.floor(l)),
            M = yield (f || (f = n("Promise"))).all(
              Array.from({ length: N }, function () {
                var e = o("WAWebLabyrinthOpaqueTypes").makeStanzaId(
                    r("nullthrows")(r("WAWebPonyfillsCryptoRandomUUID")()),
                  ),
                  t = o("WATimeUtils").millisTime();
                return o("WAWebLabyrinthWasmEncryptMessage").encryptMessageWasm(
                  {
                    backupId: L,
                    epochAnonId: $,
                    epochId: E,
                    epochRootKey: T,
                    mailboxRootKey: D,
                    orfClientState: x,
                    plaintext: I,
                    stanzaId: e,
                    threadId: k,
                    threadType: v,
                    timestampMs: t,
                    waCanonicalUserFbid: P,
                  },
                );
              }),
            ),
            w = [];
          for (var A of M.entries()) {
            var F = A[0],
              O = A[1];
            if (!O.success)
              return (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] encryptMessageWasm failed",
                    ])),
                ),
                O
              );
            w.push(O.value);
          }
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] encryptMessageWasm success",
              ])),
          );
          var B = yield b(S, k);
          if (!B.success)
            return (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[Debug][Labyrinth] sealing the thread ID failed",
                  ])),
              ),
              B
            );
          var W = { deviceId: R, epochId: E, familyDeviceId: R },
            q = C(w, W, B.value);
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] start nativeUploadLabyrinthMessages GQL request",
              ])),
          );
          try {
            var U = yield o(
                "WAWebUploadLabyrinthMessagesJob",
              ).uploadLabyrinthMessages(q),
              V = U.wa_labyrinth_upload_messages;
            e: {
              var H = V;
              if (
                ((typeof H == "object" && H !== null) ||
                  typeof H == "function") &&
                H.__typename === "WALabyrinthUploadMessagesData"
              ) {
                var G = H;
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request success",
                    ])),
                );
                break e;
              }
              if (
                ((typeof H == "object" && H !== null) ||
                  typeof H == "function") &&
                H.__typename === "WALabyrinthUploadMessagesError"
              ) {
                var z = H;
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
            return o("WAResultOrError").makeResult(V);
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
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
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
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebLabyrinthWasmComputeClientSealToken",
          ).computeClientSealTokenWasm({
            orfClientState: e.orfClientState,
            backupId: e.backupId,
          });
          if (!n.success) return n;
          var r = yield o("WAWebLabyrinthWasmSealThreadId").sealThreadIdWasm({
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
        })),
        v.apply(this, arguments)
      );
    }
    l.encryptAndUploadLabyrinthDebugMessages = h;
  },
  98,
);
