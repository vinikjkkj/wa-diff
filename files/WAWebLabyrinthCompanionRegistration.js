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
    "WAWebLabyrinthWasmPrepareAddPeerDevice",
    "WAWebSignalStoreApi",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("7031");
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield _(e);
          if (!t.success) return t;
          var n = yield g(t.value);
          if (!n.success) return n;
          var r = n.value,
            a = yield o(
              "WAWebLabyrinthDebugDeviceStateStore",
            ).saveLabyrinthDebugBackup(y(t.value, r));
          return a.success
            ? o("WAResultOrError").makeResult(r)
            : o("WAResultOrError").makeError({
                error: a.error,
                kind: "persist-device-state-error",
                registeredDevice: r,
              });
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebLabyrinthLocalIdentity").getLabyrinthLocalIdentity();
          if (!e.success) return e;
          var t = yield o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
            o("WAWebLabyrinthDebugHasBackup").hasBackup,
          );
          if (!t.success)
            return o("WAResultOrError").makeError({
              error: t.error,
              kind: "load-device-state-error",
            });
          if (t.value === !0)
            return o("WAResultOrError").makeError({
              kind: "already-registered",
            });
          var n = yield m();
          if (!n.success) return n;
          var r = yield o(
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
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o(
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = C();
          if (!t.success) return t;
          var n = yield c();
          if (!n.success) return n;
          var a = n.value,
            i = a.activeEpochId,
            l = a.chain,
            s = a.identityKeyPair,
            u = a.localIdentity,
            d = o("WAWebLabyrinthOpaqueTypes").makeCompanionIdentityPublicKey(
              s.pubKey,
            ),
            m = yield o(
              "WAWebLabyrinthWasmPrepareAddPeerDevice",
            ).prepareAddPeerDeviceWasm({
              advSecret: e.advSecret,
              sealedPayload: e.sealedPayload,
              backupId: l.backupId,
              waCanonicalUserFbid: u.waCanonicalUserFbid,
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
            p = yield o(
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
            localDeviceId: u.localDeviceId,
            localState: m.value.localState,
            ownerAccountId: u.ownerAccountId,
            serverDataId: m.value.serverDataId,
          });
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = C();
          if (!t.success) return t;
          if (!o("WAWebLabyrinthLocalIdentity").isCurrentLabyrinthIdentity(e))
            return o("WAResultOrError").makeError({
              kind: "local-account-changed",
            });
          var n = yield o(
            "WAWebAddLabyrinthPeerDeviceJob",
          ).addLabyrinthPeerDevice(
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
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
    function C() {
      return e()
        ? o("WAResultOrError").makeResult(void 0)
        : o("WAResultOrError").makeError({ kind: "onboarding-disabled" });
    }
    ((l.isLabyrinthCompanionOnboardingEnabled = e),
      (l.registerLabyrinthCompanion = s),
      (l.prepareLabyrinthCompanion = _),
      (l.enrolLabyrinthCompanion = g),
      (l.labyrinthCompanionBackup = y));
  },
  98,
);
