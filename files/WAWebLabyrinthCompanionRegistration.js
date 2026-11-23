__d(
  "WAWebLabyrinthCompanionRegistration",
  [
    "WABase64",
    "WAResultOrError",
    "WAWebAddLabyrinthPeerDeviceJob",
    "WAWebCryptoCurve25519CalculateSignature",
    "WAWebFetchLabyrinthEpochChainJob",
    "WAWebLabyrinthDebugDeviceStateStore",
    "WAWebLabyrinthDebugHasBackup",
    "WAWebLabyrinthEnrollmentGQLFields",
    "WAWebLabyrinthLocalIdentity",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthReportedHistoryStart",
    "WAWebLabyrinthWasmPrepareAddPeerDevice",
    "WAWebSignalStoreApi",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("7031");
    }
    async function s(e) {
      var t = await d(e);
      if (!t.success) return t;
      var n = await m(t.value);
      if (!n.success) return n;
      var r = n.value,
        a = await o(
          "WAWebLabyrinthDebugDeviceStateStore",
        ).saveLabyrinthDebugBackup(p(t.value, r));
      return a.success
        ? (await o(
            "WAWebLabyrinthReportedHistoryStart",
          ).keepLabyrinthReportedHistoryStartFromPairing(
            t.value.reportedHistoryStartSec,
          ),
          o("WAResultOrError").makeResult(r))
        : o("WAResultOrError").makeError({
            error: a.error,
            kind: "persist-device-state-error",
            registeredDevice: r,
          });
    }
    async function u() {
      var e = o("WAWebLabyrinthLocalIdentity").getLabyrinthLocalIdentity();
      if (!e.success) return e;
      var t = await o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
        o("WAWebLabyrinthDebugHasBackup").hasBackup,
      );
      if (!t.success)
        return o("WAResultOrError").makeError({
          error: t.error,
          kind: "load-device-state-error",
        });
      if (t.value === !0)
        return o("WAResultOrError").makeError({ kind: "already-registered" });
      var n = await c();
      if (!n.success) return n;
      var r = await o(
        "WAWebFetchLabyrinthEpochChainJob",
      ).fetchLabyrinthEpochChain();
      if (!r.success)
        return o("WAResultOrError").makeError({
          error: r.error,
          kind: "fetch-epoch-chain-error",
        });
      var a = r.value.activeEpochId;
      return a == null
        ? o("WAResultOrError").makeError({ kind: "no-active-epoch" })
        : o("WAResultOrError").makeResult({
            activeEpochId: a,
            chain: r.value,
            identityKeyPair: n.value,
            localIdentity: e.value,
          });
    }
    async function c() {
      try {
        var e = await o(
          "WAWebSignalStoreApi",
        ).waSignalStore.getRegistrationInfo();
        return e == null
          ? o("WAResultOrError").makeError({
              error: r("err")("This browser has no WhatsApp identity key"),
              kind: "identity-key-error",
            })
          : o("WAResultOrError").makeResult(e.identityKeyPair);
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "identity-key-error",
        });
      }
    }
    async function d(e) {
      var t = _();
      if (!t.success) return t;
      var n = await u();
      if (!n.success) return n;
      var a = n.value,
        i = a.activeEpochId,
        l = a.chain,
        s = a.identityKeyPair,
        c = a.localIdentity,
        d = o("WAWebLabyrinthOpaqueTypes").makeCompanionIdentityPublicKey(
          s.pubKey,
        ),
        m = await o(
          "WAWebLabyrinthWasmPrepareAddPeerDevice",
        ).prepareAddPeerDeviceWasm({
          advSecret: e.advSecret,
          sealedPayload: e.sealedPayload,
          backupId: l.backupId,
          waCanonicalUserFbid: c.waCanonicalUserFbid,
          companionIdentityPublicKey: d,
          activeEpochId: i,
        });
      if (!m.success)
        return o("WAResultOrError").makeError({
          error: m.error,
          kind: "prepare-add-peer-device-error",
        });
      var p;
      try {
        p = await o(
          "WAWebCryptoCurve25519CalculateSignature",
        ).calculateSignature(s, m.value.companionDeviceBinding);
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "sign-binding-error",
        });
      }
      return o("WAResultOrError").makeResult({
        activeEpochId: i,
        bindingSignature: o(
          "WAWebLabyrinthOpaqueTypes",
        ).makeCompanionDeviceBindingSignature(p),
        enrollment: m.value.enrollment,
        identityPublicKey: d,
        localDeviceId: c.localDeviceId,
        localState: m.value.localState,
        ownerAccountId: c.ownerAccountId,
        reportedHistoryStartSec: m.value.reportedHistoryStartSec,
        serverDataId: m.value.serverDataId,
      });
    }
    async function m(e) {
      var t = _();
      if (!t.success) return t;
      if (!o("WAWebLabyrinthLocalIdentity").isCurrentLabyrinthIdentity(e))
        return o("WAResultOrError").makeError({
          kind: "local-account-changed",
        });
      var n = await o("WAWebAddLabyrinthPeerDeviceJob").addLabyrinthPeerDevice(
        babelHelpers.extends(
          {},
          o("WAWebLabyrinthEnrollmentGQLFields").enrollmentToGQLFields({
            activeEpochId: e.activeEpochId,
            enrollment: e.enrollment,
            localDeviceId: e.localDeviceId,
          }),
          {
            server_data_id: e.serverDataId,
            wa_identity_key_signature: o("WABase64").encodeB64(
              e.bindingSignature,
            ),
            wa_identity_public_key: o("WABase64").encodeB64(
              e.identityPublicKey,
            ),
          },
        ),
      );
      if (!n.success)
        return o("WAResultOrError").makeError({
          error: n.error,
          kind: "add-peer-device-error",
        });
      var r = n.value;
      return o("WAWebLabyrinthLocalIdentity").isCurrentLabyrinthIdentity(e)
        ? o("WAResultOrError").makeResult(r)
        : o("WAResultOrError").makeError({
            kind: "local-account-changed-after-registration",
            registeredDevice: r,
          });
    }
    function p(e, t) {
      var n = e.localDeviceId,
        r = e.localState;
      return {
        activeEpoch: r.currentEpoch,
        backupId: t.backupId,
        device: {
          ebDeviceId: t.ebDeviceId,
          epochStorageAuthPrivateKey: null,
          epochStoragePrivateKey: r.epochStoragePrivateKey,
          localDeviceId: n,
          mailboxRootSalt: r.mailboxRootSalt,
          orfClientState: r.orfClientState,
        },
        virtualDevice: null,
        waLabyrinthAccountId: null,
      };
    }
    function _() {
      return e()
        ? o("WAResultOrError").makeResult(void 0)
        : o("WAResultOrError").makeError({ kind: "onboarding-disabled" });
    }
    ((l.isLabyrinthCompanionOnboardingEnabled = e),
      (l.registerLabyrinthCompanion = s),
      (l.prepareLabyrinthCompanion = d),
      (l.enrolLabyrinthCompanion = m),
      (l.labyrinthCompanionBackup = p));
  },
  98,
);
