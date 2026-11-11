__d(
  "WAWebAeaKeyResponseRules",
  [
    "$InternalEnum",
    "WABinary",
    "WASmaxInPreKeysNonE2EEAttestationOrForceOverrideE2EEStateMixinGroup",
    "WAWebAeaAccountState",
    "WAWebCryptoCurve25519VerifySignature",
    "WAWebProtobufsAea.pb",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Uint8Array([6, 7]),
      s = 64,
      u = 32,
      c = n("$InternalEnum")({
        ATTESTATION_MISSING: "attestation_missing",
        DECODE_FAILED: "decode_failed",
        INVALID_ACCOUNT_TYPE: "invalid_account_type",
        KEY_ROTATION_REQUIRED: "key_rotation_required",
        MALFORMED_ATTESTATION: "malformed_attestation",
        PRIMARY_KEY_MISSING: "primary_key_missing",
        SIGNATURE_INVALID: "signature_invalid",
        STANZA_PROTOBUF_TYPE_MISMATCH: "stanza_protobuf_type_mismatch",
        UNRECOGNIZED_ACCOUNT_TYPE: "unrecognized_account_type",
      }),
      d = n("$InternalEnum")({
        VERIFIED: "verified",
        IMPLICIT_DOWNGRADE: "implicit_downgrade",
        BROKEN_ATTESTATION_FALLBACK: "broken_attestation_fallback",
        FORCE_OVERRIDE: "force_override",
      });
    function m(e) {
      if (e == null) return null;
      if (e.name === "ForceOverrideE2EEState")
        return { signedClaim: null, forceOverrideE2ee: !0 };
      var t = e.value;
      if (t == null) return k(c.MALFORMED_ATTESTATION);
      var n = (function (e) {
        return e === "hybrid_e2ee"
          ? o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
          : e === "non_e2ee"
            ? o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
            : null;
      })(String(t.nonE2eeAttestationAccountType));
      return {
        signedClaim: {
          claimedState: n,
          parsingFailure: n == null ? c.MALFORMED_ATTESTATION : void 0,
          payload: t.nonE2eeAttestationValueElementValue,
          signature: t.nonE2eeAttestationSignatureElementValue,
        },
        forceOverrideE2ee: !1,
      };
    }
    function p(e) {
      var t = e.node(),
        n = o(
          "WASmaxInPreKeysNonE2EEAttestationOrForceOverrideE2EEStateMixinGroup",
        ).parseNonE2EEAttestationOrForceOverrideE2EEStateMixinGroup(t);
      return _(n.success ? n.value : null, t);
    }
    function _(e, t) {
      return t == null
        ? m(e)
        : e == null
          ? C(t, "non_e2ee_attestation") || C(t, "force_override_e2ee_state")
            ? k(c.MALFORMED_ATTESTATION)
            : null
          : e.name === "ForceOverrideE2EEState" && C(t, "non_e2ee_attestation")
            ? k(c.MALFORMED_ATTESTATION)
            : m(e);
    }
    function f(e, t) {
      var n = e == null ? [] : y(e, "list"),
        r = n[0];
      return h(r, "user", t);
    }
    function g(e, t) {
      return h(e, "device", t);
    }
    function h(e, t, n) {
      var r = e == null ? [] : y(e, t);
      return r.length === n ? r : null;
    }
    function y(e, t) {
      var n = e.content;
      return Array.isArray(n)
        ? n.filter(function (e) {
            return e.tag === t;
          })
        : [];
    }
    function C(e, t) {
      var n = e.content;
      return (
        Array.isArray(n) &&
        n.some(function (e) {
          return e.tag === t;
        })
      );
    }
    function b(e, t) {
      var n,
        r,
        a,
        i = t.identityKey !== e.incomingIdentityKey,
        l = (n = e.evidence) == null ? void 0 : n.signedClaim,
        s =
          (r = l == null ? void 0 : l.claimedState) != null
            ? r
            : o("WAWebAeaAccountState").AeaAccountState.E2EE;
      if (
        !i &&
        (l == null ? void 0 : l.parsingFailure) == null &&
        t.accountState === s
      )
        return {
          decision: { kind: "unchanged" },
          keyChanged: i,
          verification: null,
        };
      var u = l == null ? null : v(l, e.incomingIdentityKeyBytes);
      return {
        decision:
          u == null
            ? R(
                ((a = e.evidence) == null ? void 0 : a.forceOverrideE2ee) ===
                  !0,
                t,
                i,
              )
            : S(u, t, i),
        keyChanged: i,
        verification: u,
      };
    }
    function v(t, n) {
      if (t.parsingFailure != null) return E(t.parsingFailure);
      if (t.signature.length !== s) return E(c.MALFORMED_ATTESTATION);
      var r;
      try {
        r = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsAea.pb").NonE2EEAttestationSpec,
          t.payload,
        );
      } catch (e) {
        return E(c.DECODE_FAILED);
      }
      var a = r.accountType;
      if (a == null) {
        var i;
        return E(
          t.payload.length > 0 &&
            ((i = r.$$unknownFieldCount) != null ? i : 0) === 0
            ? c.UNRECOGNIZED_ACCOUNT_TYPE
            : c.INVALID_ACCOUNT_TYPE,
        );
      }
      if (a === o("WAWebProtobufsAea.pb").NonE2EEAttestation$AccountType.E2EE)
        return E(c.INVALID_ACCOUNT_TYPE);
      var l = o("WAWebAeaAccountState").aeaAccountStateFromAttestation(a);
      if (l == null) return E(c.UNRECOGNIZED_ACCOUNT_TYPE);
      if (l !== t.claimedState) return E(c.STANZA_PROTOBUF_TYPE_MISMATCH);
      if (n == null || n.length !== u) return E(c.PRIMARY_KEY_MISSING);
      var d = o("WABinary").Binary.build(e, t.payload).readByteArrayView();
      try {
        if (
          !o("WAWebCryptoCurve25519VerifySignature").verifySignature(
            n.slice(),
            d,
            t.signature.slice(),
          )
        )
          return E(c.SIGNATURE_INVALID);
      } catch (e) {
        return E(c.SIGNATURE_INVALID);
      }
      return { verified: !0, accountState: l };
    }
    function S(e, t, n) {
      return e.verified
        ? n ||
          t.accountState === o("WAWebAeaAccountState").AeaAccountState.NOT_SET
          ? L(e.accountState, d.VERIFIED)
          : t.accountState === o("WAWebAeaAccountState").AeaAccountState.E2EE
            ? L(e.accountState, d.IMPLICIT_DOWNGRADE)
            : { kind: "reject", failure: c.KEY_ROTATION_REQUIRED }
        : n
          ? L(
              o("WAWebAeaAccountState").AeaAccountState.E2EE,
              d.BROKEN_ATTESTATION_FALLBACK,
              e.failure,
            )
          : { kind: "reject", failure: e.failure };
    }
    function R(e, t, n) {
      return n ||
        t.accountState === o("WAWebAeaAccountState").AeaAccountState.NOT_SET
        ? L(o("WAWebAeaAccountState").AeaAccountState.E2EE, d.VERIFIED)
        : e
          ? L(o("WAWebAeaAccountState").AeaAccountState.E2EE, d.FORCE_OVERRIDE)
          : { kind: "reject", failure: c.ATTESTATION_MISSING };
    }
    function L(e, t, n) {
      return (
        n === void 0 && (n = null),
        { kind: "store", accountState: e, reason: t, failure: n }
      );
    }
    function E(e) {
      return { verified: !1, failure: e };
    }
    function k(e) {
      return {
        signedClaim: {
          claimedState: null,
          parsingFailure: e,
          payload: new Uint8Array(0),
          signature: new Uint8Array(0),
        },
        forceOverrideE2ee: !1,
      };
    }
    ((l.AeaClaimFailure = c),
      (l.AeaStoreReason = d),
      (l.parseAeaEvidenceFromPrekey = m),
      (l.parseAeaEvidenceFromIdentity = p),
      (l.parseAeaEvidenceFromKeyNode = _),
      (l.getRawPrekeyUsers = f),
      (l.getRawPrekeyDevices = g),
      (l.evaluateAeaKeyResponse = b),
      (l.verifyAeaSignedClaim = v));
  },
  98,
);
