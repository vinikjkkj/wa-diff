__d(
  "WAWebDebugLabyrinth",
  [
    "JSResourceForInteraction",
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      C,
      b = 20,
      v = 20,
      S = 20,
      R = 20,
      L = 10 * 1e3,
      E = r("JSResourceForInteraction")("WAWebLabyrinthDebugAPI").__setRef(
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
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            r("vulture")("01YYXg_Gs6knOLlvQaP5wwr0PWs="),
            (C || (C = n("Promise"))).all(
              e.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e.messages,
                        r = e.sealedThreadId,
                        a = e.threadId;
                      return {
                        messages: yield x(
                          n,
                          t,
                          o("WAWebLabyrinthOpaqueTypes").makeThreadId(a),
                        ),
                        sealedThreadId: r,
                        threadId: a,
                      };
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            )
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, o) {
          return (
            r("vulture")("Etb9xWMPM2HcW4JuGa8CMk6hT8Y="),
            (C || (C = n("Promise"))).all(
              e.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      return babelHelpers.extends({}, e, {
                        messages: yield x(e.messages, t, o),
                      });
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            )
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          r("vulture")("Hy0JAUUJHvtWbCEsoGSDQdxhLsw=");
          var i = t.currentEpoch.epochAnonId,
            l = t.currentEpoch.epochRootKey;
          return (C || (C = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    r("vulture")("JXzjEqTI_c4_fwtr2ij-YXMMUbk=");
                    var t = null,
                      n = null;
                    try {
                      var u = e.encryptedPayload,
                        c = u.success ? r("nullthrows")(u.value) : null,
                        d = r("nullthrows")(e.encryptionVersion);
                      if (!u.success) throw u.error;
                      var m = r("nullthrows")(c);
                      t = d;
                      var p = yield o(
                        "WAWebLabyrinthWasmDecryptMessage",
                      ).decryptMessageWasm({
                        ciphertext: m,
                        encryptionVersion: d,
                        epochAnonId: i,
                        epochRootKey: l,
                        threadId: a,
                      });
                      if (!p.success)
                        throw (
                          (n = String(p.error)),
                          r("err")("decryptMessageWasm failed: " + n)
                        );
                      var _ = new TextDecoder().decode(p.value.plaintext);
                      return {
                        messageId: e.messageId,
                        decryptResult: o("WAResultOrError").makeResult(_),
                      };
                    } catch (i) {
                      var f = r("getErrorSafe")(i);
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
                            a,
                            String(n != null ? n : f.name),
                          )
                          .catching(f),
                        {
                          messageId: e.messageId,
                          decryptResult: o("WAResultOrError").makeError({
                            decryptError: f,
                            encryptionVersion:
                              t != null
                                ? t
                                : o(
                                    "WAWebLabyrinthOpaqueTypes",
                                  ).makeEncryptionVersion(0),
                          }),
                        }
                      );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          r("vulture")("iyMZoMzzc5_qKih7moHS5G3CXyw=");
          var a = Math.min(
              (t = e == null ? void 0 : e.messageFirst) != null ? t : b,
              S,
            ),
            i = Math.min(
              (n = e == null ? void 0 : e.threadFirst) != null ? n : v,
              R,
            ),
            l = yield o(
              "WAWebLabyrinthDebugDeviceStateUtils",
            ).requireDebugState(
              o("WAWebLabyrinthDebugLoadForMessageQueries")
                .loadForMessageQueries,
            ),
            s = yield o(
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
            var m = yield o(
                "WAWebDebugLabyrinthInboxSnapshotQuery",
              ).fetchLabyrinthInboxSnapshot({
                clientSealToken: s.value,
                deviceId: l.ebDeviceId,
                locallyAvailableEpochId: l.currentEpoch.serverEpochId,
                messageFirst: a,
                threadFirst: i,
              }),
              p = m == null ? null : yield k(m, l);
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
        })),
        N.apply(this, arguments)
      );
    }
    ((P.doc =
      "Fetches WA Labyrinth inbox snapshot threads/messages, logs the simplified response, and returns it."),
      (P.paramsToExecute = []));
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("ewebNK4YZkfBTN51q9P8GMyiMSg=");
          var t = o("WAWebLabyrinthOpaqueTypes").makeThreadId(
              r("nullthrows")(e.threadId),
            ),
            n = yield o(
              "WAWebLabyrinthDebugDeviceStateUtils",
            ).requireDebugState(
              o("WAWebLabyrinthDebugLoadForMessageQueries")
                .loadForMessageQueries,
            );
          try {
            var a = yield o(
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
            var i = yield o(
                "WAWebDebugLabyrinthRangeQuery",
              ).fetchLabyrinthRangeQuery({
                ebDeviceId: n.ebDeviceId,
                messageCount: e.numMessages,
                partialThreadId: a.value,
              }),
              l = i == null ? null : yield T(i, n, t);
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
        })),
        w.apply(this, arguments)
      );
    }
    ((M.doc =
      "Fetches WA Labyrinth messages for a plain thread id, internally maps it to partial_thread_id, logs the simplified response, and returns it. Do not pass snapshot.threadId. Example: Debug.labyrinthRangeQuery({threadId, numMessages: 10})"),
      (M.paramsToExecute = []));
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("c4ZqgTP7KpsNsb9J2K74Kboxpjk=");
          var t = o("WAWebLabyrinthOpaqueTypes").makeThreadId(
              r("nullthrows")(e.threadId),
            ),
            n = yield o(
              "WAWebLabyrinthDebugDeviceStateUtils",
            ).requireDebugState(
              o("WAWebLabyrinthDebugLoadForMessageQueries")
                .loadForMessageQueries,
            );
          try {
            var a = yield o(
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
            var i = yield o(
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
            var l = {
              messageKey: i.value.messageKey,
              partialThreadId: a.value,
            };
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
        })),
        F.apply(this, arguments)
      );
    }
    ((A.doc =
      "Given a plain threadId, returns ArrayBuffer partialThreadId and messageKey for CLI decrypt flow. Example: Debug.labyrinthDecryptFlowInputs({threadId})"),
      (A.paramsToExecute = []));
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            r("vulture")("359Yw8Iq_dc7qlV3mgHw8OZUxz0="),
            o("WAWebLabyrinthDebugAddDeviceController").addLabyrinthDebugDevice(
              r("nullthrows")(e == null ? void 0 : e.recoveryCode),
            )
          );
        })),
        B.apply(this, arguments)
      );
    }
    O.doc =
      "Add this Web client to an existing Labyrinth backup with a recovery code. The recovery code is not persisted or logged.";
    var W = null;
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("x7m9Ym8tiR_i6uyzAbcWF7kKJqQ=");
          var e = yield o(
            "WAWebSignalStoreApi",
          ).waSignalStore.getRegistrationInfo();
          return e == null
            ? null
            : o("WABase64").encodeB64(e.identityKeyPair.pubKey);
        })),
        U.apply(this, arguments)
      );
    }
    ((q.doc =
      "Return this browser's raw 32-byte WhatsApp identity public key in base64, the key a phone seals a companion's add-peer payload to."),
      (q.paramsToExecute = []));
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          r("vulture")("VVc1tZ_m-28t-nGQBtBNxD2kFiE=");
          var n = yield o(
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
            (W = {
              atMs: Date.now(),
              outcome: n.success ? "registered" : n.error.kind,
            }),
            n
          );
        })),
        H.apply(this, arguments)
      );
    }
    V.doc =
      "Join this browser to its Labyrinth backup as a companion with the add-peer payload a phone sealed and the pairing ADV secret, both base64, as pair-success would. The ADV secret is not persisted or logged. Example: Debug.labyrinthRegisterFromPayload(sealedB64, advSecretB64)";
    function G(e, t) {
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
    G.doc =
      "Hold an add-peer payload a phone sealed and the pairing ADV secret, both base64, as pair-success does. Holds nothing while onboarding is off. The next reconnect stores them, and the registration job joins this browser once it has its canonical user. Returns whether the payload was kept. Example: Debug.labyrinthInjectCapturedPayload(sealedB64, advSecretB64)";
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("skjTRT6PJ5A8MWE1XK9-21LQhxg=");
          var e = yield o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
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
            lastAttempt: W,
            onboarding: yield o(
              "WAWebLabyrinthCompanionOnboardingStatus",
            ).getLabyrinthCompanionOnboardingStatus(),
          };
        })),
        j.apply(this, arguments)
      );
    }
    ((z.doc =
      "Return non-secret companion onboarding status: the gate, this browser's stored Labyrinth device, the outcome of the last Debug.labyrinthRegisterFromPayload since the page loaded, the registration job's progress, and the check of the phone's companion test message after registration."),
      (z.paramsToExecute = []));
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            r("vulture")("SkBLwVZxKWoMSbUjGDIOk-Be1dY="),
            o(
              "WAWebLabyrinthDebugDeviceStatusController",
            ).getLabyrinthDebugDeviceStatus()
          );
        })),
        Q.apply(this, arguments)
      );
    }
    ((K.doc =
      "Return non-secret status for the persisted Labyrinth debug device."),
      (K.paramsToExecute = []));
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("963nt2hkFg-yeDiQBmfLI9Ji8XE=");
          var e = yield o(
            "WAWebLabyrinthDebugCreateBackupController",
          ).createLabyrinthDebugBackup();
          return e.success ? e.value : e;
        })),
        Y.apply(this, arguments)
      );
    }
    X.doc =
      "Create backup (native): generate Labyrinth backup data with Wasm and call wa_labyrinth_create_backup";
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("fTxo12WsTaJRyLcC-kBvhQNC7tY=");
          var e = yield o(
            "WAWebLabyrinthDebugRotateEpochController",
          ).rotateLabyrinthDebugEpoch();
          return e.success ? e.value : e;
        })),
        Z.apply(this, arguments)
      );
    }
    J.doc =
      "Rotate epoch (native): rotate the epoch of the backup created by a prior Debug.labyrinthCreateBackupNativeWasm() via wa_labyrinth_rotate_epoch. Only that client holds the virtual device the rotation needs.";
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("4NhERmqMYg2IwcG-2cHQGJVo2pg=");
          var t = yield o(
            "WAWebLabyrinthDebugEncryptAndUploadController",
          ).encryptAndUploadLabyrinthDebugMessages(e);
          return t.success ? t.value : t;
        })),
        te.apply(this, arguments)
      );
    }
    ee.doc =
      'Upload messages (native): encrypt one text message one or more times for a thread with Wasm and batch-upload it, with its sealed thread ID, through wa_labyrinth_upload_messages. Example: Debug.labyrinthEncryptAndUploadMessageNative({threadId, msg, repeat: 3, threadType: "ONE_TO_ONE"})';
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              e,
              "labyrinthRestoreDebugThread needs a chat JID",
            ),
            n = yield o("WAPromiseTimeout")
              .promiseTimeout(E.load(), L)
              .then(
                function (e) {
                  return o("WAResultOrError").makeResult(e);
                },
                function (e) {
                  return o("WAResultOrError").makeError(r("getErrorSafe")(e));
                },
              );
          return n.success
            ? yield n.value.restoreLabyrinthDebugThread(t)
            : o("WAResultOrError").makeError({
                kind: "load-debug-api-error",
                error: n.error,
              });
        })),
        re.apply(this, arguments)
      );
    }
    ne.doc =
      "Restore a chat from the Labyrinth backup as the debug drawer's Chat by JID does, decrypting each message under its own epoch, and load that code first if the drawer has not. Example: Debug.labyrinthRestoreDebugThread('123@lid')";
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebLabyrinthShadowScheduler",
          ).forceLabyrinthShadowRun({ reportedHistoryStartSec: ce(e) });
          return t != null ? t : "already-running";
        })),
        ae.apply(this, arguments)
      );
    }
    oe.doc =
      "Shadow test, forced: run now whatever the eligibility checks say, and return the run with its report. Compares this browser's Labyrinth messages with its local messages for up to 20 threads, from the reported history start (reportedHistoryDays ago, or backupFromSec in unix seconds; the stored start when both are omitted; at most 90 days), and reports, by message identity (thread, author, stanza id; never content), N messages overall, M restorable via Labyrinth, K via history sync, recall of local messages, and per chat which identities are only local or only in Labyrinth. Reads only: nothing is stored or uploaded, and only counts (no ids or content) go to the QPL event WHATSAPP_WEB.LABYRINTH_SHADOW_RUN. Example: await Debug.labyrinthShadowRun({reportedHistoryDays: 5})";
    function ie() {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return {
            eligibility: yield o(
              "WAWebLabyrinthShadowScheduler",
            ).getLabyrinthShadowEligibility(),
            lastRun: o(
              "WAWebLabyrinthShadowScheduler",
            ).getLastLabyrinthShadowRun(),
            reportedHistoryStartSec: o(
              "WAWebLabyrinthReportedHistoryStart",
            ).getLabyrinthReportedHistoryStartSec(),
          };
        })),
        le.apply(this, arguments)
      );
    }
    ie.doc =
      "Shadow test status: every eligibility check for an automatic run with its skip reason (null when it passes), the stored reported history start, and the last run of this session. Example: await Debug.labyrinthShadowStatus()";
    function se(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            ce(e),
            "Pass reportedHistoryDays or backupFromSec",
          );
          return (
            yield o(
              "WAWebLabyrinthReportedHistoryStart",
            ).saveLabyrinthReportedHistoryStart(t),
            o(
              "WAWebLabyrinthReportedHistoryStart",
            ).getLabyrinthReportedHistoryStartSec()
          );
        })),
        ue.apply(this, arguments)
      );
    }
    se.doc =
      "Shadow test: store the reported history start, as the primary would at pairing, so automatic runs become eligible and compare from it. Example: await Debug.labyrinthSetReportedHistoryStart({reportedHistoryDays: 5})";
    function ce(e) {
      var t = e == null ? void 0 : e.reportedHistoryDays;
      return t != null
        ? o("WATimeUtils").unixTime() - t * o("WATimeUtils").DAY_SECONDS
        : e == null
          ? void 0
          : e.backupFromSec;
    }
    var de = {
        labyrinthAddDevice: O,
        labyrinthCompanionIdentityKey: q,
        labyrinthCreateBackupNativeWasm: X,
        labyrinthDeviceStateStatus: K,
        labyrinthRotateEpochNativeWasm: J,
        labyrinthDecryptFlowInputs: A,
        labyrinthEncryptAndUploadMessageNative: ee,
        labyrinthInboxSnapshot: P,
        labyrinthInjectCapturedPayload: G,
        labyrinthOnboardingStatus: z,
        labyrinthRangeQuery: M,
        labyrinthRegisterFromPayload: V,
        labyrinthRestoreDebugThread: ne,
        labyrinthSetReportedHistoryStart: se,
        labyrinthShadowRun: oe,
        labyrinthShadowStatus: ie,
      },
      me = de;
    l.default = me;
  },
  98,
);
