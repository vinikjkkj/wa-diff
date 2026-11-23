__d(
  "WAWebDebugLabyrinth",
  [
    "JSResourceForInteraction",
    "WABase64",
    "WALogger",
    "WAPromiseTimeout",
    "WAResultOrError",
    "WATimeUtils",
    "WAWebDebugLabyrinthInboxSnapshotQuery",
    "WAWebDebugLabyrinthRangeQuery",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
    "WAWebLabyrinthAddPeerPayloadCapture",
    "WAWebLabyrinthCompanionOnboardingStatus",
    "WAWebLabyrinthCompanionRegistration",
    "WAWebLabyrinthDebugAddDeviceController",
    "WAWebLabyrinthDebugCreateBackupController",
    "WAWebLabyrinthDebugDeviceStateStore",
    "WAWebLabyrinthDebugDeviceStateUtils",
    "WAWebLabyrinthDebugDeviceStatusController",
    "WAWebLabyrinthDebugEncryptAndUploadController",
    "WAWebLabyrinthDebugLoadForMessageQueries",
    "WAWebLabyrinthDebugLoadForStatus",
    "WAWebLabyrinthDebugRotateEpochController",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthPendingAddPeerPayload",
    "WAWebLabyrinthReportedHistoryStart",
    "WAWebLabyrinthShadowScheduler",
    "WAWebLabyrinthWasmComputeClientSealToken",
    "WAWebLabyrinthWasmDecryptMessage",
    "WAWebLabyrinthWasmDeriveMessageKey",
    "WAWebLabyrinthWasmOrfThreadId",
    "WAWebSignalStoreApi",
    "err",
    "getErrorSafe",
    "nullthrows",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C = 20,
      b = 20,
      v = 20,
      S = 20,
      R = 10 * 1e3,
      L = r("JSResourceForInteraction")("WAWebLabyrinthDebugAPI").__setRef(
        "WAWebDebugLabyrinth",
      );
    o("WAWebEBLabyrinthWaWasmReactorSingleton")
      .ebLabyrinthWaReactor()
      .catch(function (t) {
        (r("vulture")("NhUvyPvtvGMUtbtoT4pFTFCZ8gw="),
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] eager WA Wasm initialization failed",
                ])),
            )
            .catching(r("getErrorSafe")(t)));
      });
    async function E(e, t) {
      return (
        r("vulture")("01YYXg_Gs6knOLlvQaP5wwr0PWs="),
        Promise.all(
          e.map(async function (e) {
            var n = e.messages,
              r = e.sealedThreadId,
              a = e.threadId;
            return {
              messages: await I(
                n,
                t,
                o("WAWebLabyrinthOpaqueTypes").makeThreadId(a),
              ),
              sealedThreadId: r,
              threadId: a,
            };
          }),
        )
      );
    }
    async function k(e, t, n) {
      return (
        r("vulture")("Etb9xWMPM2HcW4JuGa8CMk6hT8Y="),
        Promise.all(
          e.map(async function (e) {
            return babelHelpers.extends({}, e, {
              messages: await I(e.messages, t, n),
            });
          }),
        )
      );
    }
    async function I(e, t, n) {
      r("vulture")("Hy0JAUUJHvtWbCEsoGSDQdxhLsw=");
      var a = t.currentEpoch.epochAnonId,
        i = t.currentEpoch.epochRootKey;
      return Promise.all(
        e.map(async function (e) {
          r("vulture")("JXzjEqTI_c4_fwtr2ij-YXMMUbk=");
          var t = null,
            l = null;
          try {
            var u = e.encryptedPayload,
              c = u.success ? r("nullthrows")(u.value) : null,
              d = r("nullthrows")(e.encryptionVersion);
            if (!u.success) throw u.error;
            var m = r("nullthrows")(c);
            t = d;
            var p = await o(
              "WAWebLabyrinthWasmDecryptMessage",
            ).decryptMessageWasm({
              ciphertext: m,
              encryptionVersion: d,
              epochAnonId: a,
              epochRootKey: i,
              threadId: n,
            });
            if (!p.success)
              throw (
                (l = String(p.error)),
                r("err")("decryptMessageWasm failed: " + l)
              );
            var _ = new TextDecoder().decode(p.value.plaintext);
            return {
              messageId: e.messageId,
              decryptResult: o("WAResultOrError").makeResult(_),
            };
          } catch (a) {
            var f = r("getErrorSafe")(a);
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[Debug][Labyrinth] message decrypt failed for message_id ",
                      "; thread_id ",
                      "; subtype ",
                      "",
                    ])),
                  e.messageId,
                  n,
                  String(l != null ? l : f.name),
                )
                .catching(f),
              {
                messageId: e.messageId,
                decryptResult: o("WAResultOrError").makeError({
                  decryptError: f,
                  encryptionVersion:
                    t != null
                      ? t
                      : o("WAWebLabyrinthOpaqueTypes").makeEncryptionVersion(0),
                }),
              }
            );
          }
        }),
      );
    }
    async function T(e) {
      var t, n;
      r("vulture")("iyMZoMzzc5_qKih7moHS5G3CXyw=");
      var a = Math.min(
          (t = e == null ? void 0 : e.messageFirst) != null ? t : C,
          v,
        ),
        i = Math.min(
          (n = e == null ? void 0 : e.threadFirst) != null ? n : b,
          S,
        ),
        l = await o("WAWebLabyrinthDebugDeviceStateUtils").requireDebugState(
          o("WAWebLabyrinthDebugLoadForMessageQueries").loadForMessageQueries,
        ),
        s = await o(
          "WAWebLabyrinthWasmComputeClientSealToken",
        ).computeClientSealTokenWasm({
          orfClientState: l.orfClientState,
          backupId: l.backupId,
        });
      if (!s.success)
        return (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] labyrinthInboxSnapshot client seal token failed",
              ])),
          ),
          null
        );
      try {
        var m = await o(
            "WAWebDebugLabyrinthInboxSnapshotQuery",
          ).fetchLabyrinthInboxSnapshot({
            clientSealToken: s.value,
            deviceId: l.ebDeviceId,
            locallyAvailableEpochId: l.currentEpoch.serverEpochId,
            messageFirst: a,
            threadFirst: i,
          }),
          p = m == null ? null : await E(m, l);
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] labyrinthInboxSnapshot GQL response",
              ])),
          ),
          p
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] labyrinthInboxSnapshot GQL failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          e
        );
      }
    }
    ((T.doc =
      "Fetches WA Labyrinth inbox snapshot threads/messages, logs the simplified response, and returns it."),
      (T.paramsToExecute = []));
    async function D(e) {
      r("vulture")("ewebNK4YZkfBTN51q9P8GMyiMSg=");
      var t = o("WAWebLabyrinthOpaqueTypes").makeThreadId(
          r("nullthrows")(e.threadId),
        ),
        n = await o("WAWebLabyrinthDebugDeviceStateUtils").requireDebugState(
          o("WAWebLabyrinthDebugLoadForMessageQueries").loadForMessageQueries,
        );
      try {
        var a = await o(
          "WAWebLabyrinthWasmOrfThreadId",
        ).labyrinthOrfThreadIdWasm({
          orfClientState: n.orfClientState,
          threadId: t,
        });
        if (!a.success)
          return (
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] labyrinthRangeQuery ORF thread id mapping failed",
                ])),
            ),
            null
          );
        var i = await o(
            "WAWebDebugLabyrinthRangeQuery",
          ).fetchLabyrinthRangeQuery({
            ebDeviceId: n.ebDeviceId,
            messageCount: e.numMessages,
            partialThreadId: a.value,
          }),
          l = i == null ? null : await k(i, n, t);
        return (
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] labyrinthRangeQuery GQL response",
              ])),
          ),
          l
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] labyrinthRangeQuery GQL failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          e
        );
      }
    }
    ((D.doc =
      "Fetches WA Labyrinth messages for a plain thread id, internally maps it to partial_thread_id, logs the simplified response, and returns it. Do not pass snapshot.threadId. Example: Debug.labyrinthRangeQuery({threadId, numMessages: 10})"),
      (D.paramsToExecute = []));
    async function x(e) {
      r("vulture")("c4ZqgTP7KpsNsb9J2K74Kboxpjk=");
      var t = o("WAWebLabyrinthOpaqueTypes").makeThreadId(
          r("nullthrows")(e.threadId),
        ),
        n = await o("WAWebLabyrinthDebugDeviceStateUtils").requireDebugState(
          o("WAWebLabyrinthDebugLoadForMessageQueries").loadForMessageQueries,
        );
      try {
        var a = await o(
          "WAWebLabyrinthWasmOrfThreadId",
        ).labyrinthOrfThreadIdWasm({
          orfClientState: n.orfClientState,
          threadId: t,
        });
        if (!a.success)
          return (
            o("WALogger").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] labyrinthDecryptFlowInputs ORF thread id mapping failed",
                ])),
            ),
            null
          );
        var i = await o(
          "WAWebLabyrinthWasmDeriveMessageKey",
        ).deriveMessageKeyWasm({
          epochAnonId: n.currentEpoch.epochAnonId,
          epochRootKey: n.currentEpoch.epochRootKey,
          threadId: t,
        });
        if (!i.success)
          return (
            o("WALogger").ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] labyrinthDecryptFlowInputs message key derivation failed",
                ])),
            ),
            null
          );
        var l = { messageKey: i.value.messageKey, partialThreadId: a.value };
        return (
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] labyrinthDecryptFlowInputs result",
              ])),
          ),
          l
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] labyrinthDecryptFlowInputs failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          e
        );
      }
    }
    ((x.doc =
      "Given a plain threadId, returns ArrayBuffer partialThreadId and messageKey for CLI decrypt flow. Example: Debug.labyrinthDecryptFlowInputs({threadId})"),
      (x.paramsToExecute = []));
    async function $(e) {
      return (
        r("vulture")("359Yw8Iq_dc7qlV3mgHw8OZUxz0="),
        o("WAWebLabyrinthDebugAddDeviceController").addLabyrinthDebugDevice(
          r("nullthrows")(e == null ? void 0 : e.recoveryCode),
        )
      );
    }
    $.doc =
      "Add this Web client to an existing Labyrinth backup with a recovery code. The recovery code is not persisted or logged.";
    var P = null;
    async function N() {
      r("vulture")("x7m9Ym8tiR_i6uyzAbcWF7kKJqQ=");
      var e = await o(
        "WAWebSignalStoreApi",
      ).waSignalStore.getRegistrationInfo();
      return e == null
        ? null
        : o("WABase64").encodeB64(e.identityKeyPair.pubKey);
    }
    ((N.doc =
      "Return this browser's raw 32-byte WhatsApp identity public key in base64, the key a phone seals a companion's add-peer payload to."),
      (N.paramsToExecute = []));
    async function M(e, t) {
      r("vulture")("VVc1tZ_m-28t-nGQBtBNxD2kFiE=");
      var n = await o(
        "WAWebLabyrinthCompanionRegistration",
      ).registerLabyrinthCompanion({
        advSecret: o("WAWebLabyrinthOpaqueTypes").makeAdvSecret(
          o("WABase64").decodeB64(r("nullthrows")(t)),
        ),
        sealedPayload: o(
          "WAWebLabyrinthOpaqueTypes",
        ).makeSealedAddPeerDevicePayload(
          o("WABase64").decodeB64(r("nullthrows")(e)),
        ),
      });
      return (
        (P = {
          atMs: Date.now(),
          outcome: n.success ? "registered" : n.error.kind,
        }),
        n
      );
    }
    M.doc =
      "Join this browser to its Labyrinth backup as a companion with the add-peer payload a phone sealed and the pairing ADV secret, both base64, as pair-success would. The ADV secret is not persisted or logged. Example: Debug.labyrinthRegisterFromPayload(sealedB64, advSecretB64)";
    function w(e, t) {
      return o(
        "WAWebLabyrinthCompanionRegistration",
      ).isLabyrinthCompanionOnboardingEnabled()
        ? (o("WAWebLabyrinthAddPeerPayloadCapture").captureAddPeerPayload(
            r("nullthrows")(t),
            o("WABase64").decodeB64(r("nullthrows")(e)),
          ),
          o("WAWebLabyrinthPendingAddPeerPayload").hasAddPeerPayload())
        : !1;
    }
    w.doc =
      "Hold an add-peer payload a phone sealed and the pairing ADV secret, both base64, as pair-success does. Holds nothing while onboarding is off. The next reconnect stores them, and the registration job joins this browser once it has its canonical user. Returns whether the payload was kept. Example: Debug.labyrinthInjectCapturedPayload(sealedB64, advSecretB64)";
    async function A() {
      r("vulture")("skjTRT6PJ5A8MWE1XK9-21LQhxg=");
      var e = await o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
          o("WAWebLabyrinthDebugLoadForStatus").loadForStatus,
        ),
        t = e.success ? e.value : null;
      return {
        onboardingEnabled: o(
          "WAWebLabyrinthCompanionRegistration",
        ).isLabyrinthCompanionOnboardingEnabled(),
        device:
          t == null
            ? null
            : {
                backupId: t.backupId,
                ebDeviceId: t.ebDeviceId,
                serverEpochId: t.activeServerEpochId,
              },
        lastAttempt: P,
        onboarding: await o(
          "WAWebLabyrinthCompanionOnboardingStatus",
        ).getLabyrinthCompanionOnboardingStatus(),
      };
    }
    ((A.doc =
      "Return non-secret companion onboarding status: the gate, this browser's stored Labyrinth device, the outcome of the last Debug.labyrinthRegisterFromPayload since the page loaded, the registration job's progress, and the check of the phone's companion test message after registration."),
      (A.paramsToExecute = []));
    async function F() {
      return (
        r("vulture")("SkBLwVZxKWoMSbUjGDIOk-Be1dY="),
        o(
          "WAWebLabyrinthDebugDeviceStatusController",
        ).getLabyrinthDebugDeviceStatus()
      );
    }
    ((F.doc =
      "Return non-secret status for the persisted Labyrinth debug device."),
      (F.paramsToExecute = []));
    async function O() {
      r("vulture")("963nt2hkFg-yeDiQBmfLI9Ji8XE=");
      var e = await o(
        "WAWebLabyrinthDebugCreateBackupController",
      ).createLabyrinthDebugBackup();
      return e.success ? e.value : e;
    }
    O.doc =
      "Create backup (native): generate Labyrinth backup data with Wasm and call wa_labyrinth_create_backup";
    async function B() {
      r("vulture")("fTxo12WsTaJRyLcC-kBvhQNC7tY=");
      var e = await o(
        "WAWebLabyrinthDebugRotateEpochController",
      ).rotateLabyrinthDebugEpoch();
      return e.success ? e.value : e;
    }
    B.doc =
      "Rotate epoch (native): rotate the epoch of the backup created by a prior Debug.labyrinthCreateBackupNativeWasm() via wa_labyrinth_rotate_epoch. Only that client holds the virtual device the rotation needs.";
    async function W(e) {
      r("vulture")("4NhERmqMYg2IwcG-2cHQGJVo2pg=");
      var t = await o(
        "WAWebLabyrinthDebugEncryptAndUploadController",
      ).encryptAndUploadLabyrinthDebugMessages(e);
      return t.success ? t.value : t;
    }
    W.doc =
      'Upload messages (native): encrypt one text message one or more times for a thread with Wasm and batch-upload it, with its sealed thread ID, through wa_labyrinth_upload_messages. Example: Debug.labyrinthEncryptAndUploadMessageNative({threadId, msg, repeat: 3, threadType: "ONE_TO_ONE"})';
    async function q(e) {
      var t = r("nullthrows")(
          e,
          "labyrinthRestoreDebugThread needs a chat JID",
        ),
        n = await o("WAPromiseTimeout")
          .promiseTimeout(L.load(), R)
          .then(
            function (e) {
              return o("WAResultOrError").makeResult(e);
            },
            function (e) {
              return o("WAResultOrError").makeError(r("getErrorSafe")(e));
            },
          );
      return n.success
        ? await n.value.restoreLabyrinthDebugThread(t)
        : o("WAResultOrError").makeError({
            kind: "load-debug-api-error",
            error: n.error,
          });
    }
    q.doc =
      "Restore a chat from the Labyrinth backup as the debug drawer's Chat by JID does, decrypting each message under its own epoch, and load that code first if the drawer has not. Example: Debug.labyrinthRestoreDebugThread('123@lid')";
    async function U(e) {
      var t = await o("WAWebLabyrinthShadowScheduler").forceLabyrinthShadowRun({
        reportedHistoryStartSec: G(e),
      });
      return t != null ? t : "already-running";
    }
    U.doc =
      "Shadow test, forced: run now whatever the eligibility checks say, and return the run with its report. Compares this browser's Labyrinth messages with its local messages for up to 20 threads, from the reported history start (reportedHistoryDays ago, or backupFromSec in unix seconds; the stored start when both are omitted; at most 90 days), and reports, by message identity (thread, author, stanza id; never content), N messages overall, M restorable via Labyrinth, K via history sync, recall of local messages, and per chat which identities are only local or only in Labyrinth. Reads only: nothing is stored or uploaded, and only counts (no ids or content) go to the QPL event WHATSAPP_WEB.LABYRINTH_SHADOW_RUN. Example: await Debug.labyrinthShadowRun({reportedHistoryDays: 5})";
    async function V() {
      return {
        eligibility: await o(
          "WAWebLabyrinthShadowScheduler",
        ).getLabyrinthShadowEligibility(),
        lastRun: o("WAWebLabyrinthShadowScheduler").getLastLabyrinthShadowRun(),
        reportedHistoryStartSec: o(
          "WAWebLabyrinthReportedHistoryStart",
        ).getLabyrinthReportedHistoryStartSec(),
      };
    }
    V.doc =
      "Shadow test status: every eligibility check for an automatic run with its skip reason (null when it passes), the stored reported history start, and the last run of this session. Example: await Debug.labyrinthShadowStatus()";
    async function H(e) {
      var t = r("nullthrows")(
        G(e),
        "Pass reportedHistoryDays or backupFromSec",
      );
      return (
        await o(
          "WAWebLabyrinthReportedHistoryStart",
        ).saveLabyrinthReportedHistoryStart(t),
        o(
          "WAWebLabyrinthReportedHistoryStart",
        ).getLabyrinthReportedHistoryStartSec()
      );
    }
    H.doc =
      "Shadow test: store the reported history start, as the primary would at pairing, so automatic runs become eligible and compare from it. Example: await Debug.labyrinthSetReportedHistoryStart({reportedHistoryDays: 5})";
    function G(e) {
      var t = e == null ? void 0 : e.reportedHistoryDays;
      return t != null
        ? o("WATimeUtils").unixTime() - t * o("WATimeUtils").DAY_SECONDS
        : e == null
          ? void 0
          : e.backupFromSec;
    }
    var z = {
        labyrinthAddDevice: $,
        labyrinthCompanionIdentityKey: N,
        labyrinthCreateBackupNativeWasm: O,
        labyrinthDeviceStateStatus: F,
        labyrinthRotateEpochNativeWasm: B,
        labyrinthDecryptFlowInputs: x,
        labyrinthEncryptAndUploadMessageNative: W,
        labyrinthInboxSnapshot: T,
        labyrinthInjectCapturedPayload: w,
        labyrinthOnboardingStatus: A,
        labyrinthRangeQuery: D,
        labyrinthRegisterFromPayload: M,
        labyrinthRestoreDebugThread: q,
        labyrinthSetReportedHistoryStart: H,
        labyrinthShadowRun: U,
        labyrinthShadowStatus: V,
      },
      j = z;
    l.default = j;
  },
  98,
);
