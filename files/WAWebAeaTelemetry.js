__d(
  "WAWebAeaTelemetry",
  [
    "WALogger",
    "WAWebAccountEncryptionAttestationWamEvent",
    "WAWebAeaAccountCategory",
    "WAWebAeaAccountState",
    "WAWebAeaKeyResponseRules",
    "WAWebCriticalEventWamEvent",
    "WAWebWamEnumAeaChatEncryptionState",
    "WAWebWamEnumAeaEventType",
    "WAWebWamEnumAeaFailureReasonType",
    "WAWebWamEnumAttestationAccountTypeEnum",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      var t = e.decision,
        n = e.keyChanged,
        r = e.verification;
      (r == null ? void 0 : r.verified) === !0
        ? k({
            aeaEventType: o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE
              .VERIFICATION_SUCCESS,
            attestationAccountType: I(r.accountState),
          })
        : (r == null ? void 0 : r.verified) === !1
          ? E(
              n
                ? o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE
                    .VERIFICATION_FAILED_KEY_CHANGE_FALLBACK
                : o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE
                    .VERIFICATION_FAILED,
              r.failure,
            )
          : t.kind === "reject" &&
            E(
              o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE.VERIFICATION_FAILED,
              t.failure,
            );
    }
    function p() {
      k({
        aeaEventType: o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE
          .STATE_ACCEPT_IMPLICIT_DOWNGRADE,
        attestationAccountType: I(
          o("WAWebAeaAccountState").AeaAccountState.E2EE,
        ),
      });
    }
    function _(e, t) {
      k({
        aeaEventType: o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE
          .RECEIVE_GOSSIP_MISMATCH,
        attestationAccountType: I(e),
        gossipedState: I(t),
      });
    }
    function f(e, t) {
      k({
        aeaEventType: o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE
          .ADV_STATE_CONFLICT,
        advAccountType: I(e),
        attestationAccountType: I(t),
      });
    }
    function g(e, t, n, r) {
      k({
        aeaEventType:
          e === o("WAWebAeaAccountState").AeaAccountState.E2EE
            ? o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE.AUTOMATIC_E2EE_UPDATE
            : o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE
                .AUTOMATIC_NON_E2EE_UPDATE,
        attestationAccountType: I(t),
        currentChatEncryptionState: T(r, n),
      });
    }
    function h(e, t, n) {
      k({
        aeaEventType: o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE.SEND_REJECT,
        attestationAccountType: I(e),
        currentChatEncryptionState: T(n, t),
      });
    }
    function y(e, t, n) {
      k({
        aeaEventType: o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE
          .USYNC_IGNORED_DURING_COOLDOWN,
        cooldownState: I(e),
        usyncState: I(t),
        secondsRemaining: n,
      });
    }
    function C(e) {
      k({
        aeaEventType: o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE
          .USYNC_AEA_THREAD_UPDATE,
        usyncState: I(e),
      });
    }
    function b() {
      k({
        aeaEventType: o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE
          .ATTESTATION_BACKFILL,
      });
    }
    function v(t, n, a) {
      try {
        new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
          name: "aea_consumer_backfill_exhausted",
          debug:
            "last_reason=" +
            t +
            " unconfirmed=" +
            String(n != null ? n : "none") +
            " left_unset=" +
            String(a != null ? a : "none"),
        }).commit();
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] failed to post backfill exhausted event",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("aea-wam-post-fail");
      }
    }
    function S(e) {
      try {
        new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
          name: "aea_consumer_backfill_failure",
          debug: e,
        }).commit();
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] failed to post backfill failure event",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("aea-wam-post-fail");
      }
    }
    function R(e, t) {
      var n = e.toString() + ":" + t;
      if (!L.has(n)) {
        L.add(n);
        try {
          new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
            name: "aea_wass_would_drop",
            debug: t,
          }).commit();
        } catch (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] failed to post WASS would-drop event",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("aea-wam-post-fail");
        }
      }
    }
    var L = new Set();
    function E(e, t) {
      var n = x(t);
      n != null && k({ aeaEventType: e, aeaFailureReason: n });
    }
    function k(e) {
      try {
        var t, n, a, i;
        (new (o(
          "WAWebAccountEncryptionAttestationWamEvent",
        ).AccountEncryptionAttestationWamEvent)(e).commit(),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] WAM committed event_type=",
                " attestation_account_type=",
                " adv_account_type=",
                " gossiped_state=",
                " failure_reason=",
                "",
              ])),
            e.aeaEventType,
            (t = e.attestationAccountType) != null ? t : "unset",
            (n = e.advAccountType) != null ? n : "unset",
            (a = e.gossipedState) != null ? a : "unset",
            (i = e.aeaFailureReason) != null ? i : "unset",
          ));
      } catch (e) {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] failed to post monitoring event",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("aea-wam-post-fail");
      }
    }
    function I(e) {
      return e === o("WAWebAeaAccountState").AeaAccountState.NOT_SET
        ? o("WAWebWamEnumAttestationAccountTypeEnum")
            .ATTESTATION_ACCOUNT_TYPE_ENUM.NOT_SET
        : e === o("WAWebAeaAccountState").AeaAccountState.E2EE
          ? o("WAWebWamEnumAttestationAccountTypeEnum")
              .ATTESTATION_ACCOUNT_TYPE_ENUM.E2EE
          : e === o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
            ? o("WAWebWamEnumAttestationAccountTypeEnum")
                .ATTESTATION_ACCOUNT_TYPE_ENUM.HYBRID_E2EE
            : e === o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
              ? o("WAWebWamEnumAttestationAccountTypeEnum")
                  .ATTESTATION_ACCOUNT_TYPE_ENUM.NON_E2EE
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function T(e, t) {
      return e === o("WAWebAeaAccountCategory").AeaAccountCategory.COEX ||
        e === o("WAWebAeaAccountCategory").AeaAccountCategory.ORDINARY
        ? D(t)
        : e === o("WAWebAeaAccountCategory").AeaAccountCategory.CAPI
          ? o("WAWebWamEnumAeaChatEncryptionState").AEA_CHAT_ENCRYPTION_STATE
              .CAPI
          : e === o("WAWebAeaAccountCategory").AeaAccountCategory.OTHER
            ? o("WAWebWamEnumAeaChatEncryptionState").AEA_CHAT_ENCRYPTION_STATE
                .BSP_MANAGED
            : e === o("WAWebAeaAccountCategory").AeaAccountCategory.BOT
              ? o("WAWebWamEnumAeaChatEncryptionState")
                  .AEA_CHAT_ENCRYPTION_STATE.BOT
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function D(e) {
      return e === o("WAWebAeaAccountState").AeaAccountState.NOT_SET
        ? o("WAWebWamEnumAeaChatEncryptionState").AEA_CHAT_ENCRYPTION_STATE
            .UNSET
        : e === o("WAWebAeaAccountState").AeaAccountState.E2EE
          ? o("WAWebWamEnumAeaChatEncryptionState").AEA_CHAT_ENCRYPTION_STATE
              .DEFAULT_E2EE
          : e === o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
            ? o("WAWebWamEnumAeaChatEncryptionState").AEA_CHAT_ENCRYPTION_STATE
                .COEX
            : e === o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
              ? o("WAWebWamEnumAeaChatEncryptionState")
                  .AEA_CHAT_ENCRYPTION_STATE.NON_E2EE
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function x(e) {
      return e ===
        o("WAWebAeaKeyResponseRules").AeaClaimFailure.ATTESTATION_MISSING
        ? o("WAWebWamEnumAeaFailureReasonType").AEA_FAILURE_REASON_TYPE
            .ATTESTATION_MISSING
        : e === o("WAWebAeaKeyResponseRules").AeaClaimFailure.DECODE_FAILED
          ? o("WAWebWamEnumAeaFailureReasonType").AEA_FAILURE_REASON_TYPE
              .DECODE_FAILED
          : e ===
              o("WAWebAeaKeyResponseRules").AeaClaimFailure.INVALID_ACCOUNT_TYPE
            ? o("WAWebWamEnumAeaFailureReasonType").AEA_FAILURE_REASON_TYPE
                .INVALID_ACCOUNT_TYPE
            : e ===
                o("WAWebAeaKeyResponseRules").AeaClaimFailure
                  .KEY_ROTATION_REQUIRED
              ? void 0
              : e ===
                  o("WAWebAeaKeyResponseRules").AeaClaimFailure
                    .MALFORMED_ATTESTATION
                ? o("WAWebWamEnumAeaFailureReasonType").AEA_FAILURE_REASON_TYPE
                    .MALFORMED_ATTESTATION
                : e ===
                    o("WAWebAeaKeyResponseRules").AeaClaimFailure
                      .PRIMARY_KEY_MISSING
                  ? o("WAWebWamEnumAeaFailureReasonType")
                      .AEA_FAILURE_REASON_TYPE.PRIMARY_KEY_MISSING
                  : e ===
                      o("WAWebAeaKeyResponseRules").AeaClaimFailure
                        .SIGNATURE_INVALID
                    ? o("WAWebWamEnumAeaFailureReasonType")
                        .AEA_FAILURE_REASON_TYPE.SIGNATURE_INVALID
                    : e ===
                        o("WAWebAeaKeyResponseRules").AeaClaimFailure
                          .STANZA_PROTOBUF_TYPE_MISMATCH
                      ? o("WAWebWamEnumAeaFailureReasonType")
                          .AEA_FAILURE_REASON_TYPE.STANZA_PROTOBUF_TYPE_MISMATCH
                      : e ===
                          o("WAWebAeaKeyResponseRules").AeaClaimFailure
                            .UNRECOGNIZED_ACCOUNT_TYPE
                        ? o("WAWebWamEnumAeaFailureReasonType")
                            .AEA_FAILURE_REASON_TYPE.UNRECOGNIZED_ACCOUNT_TYPE
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                e,
                            );
                          })();
    }
    ((l.reportAeaKeyResponseEvaluation = m),
      (l.reportAeaImplicitDowngrade = p),
      (l.reportAeaGossipMismatch = _),
      (l.reportAeaAdvConflict = f),
      (l.reportAeaAutomaticUpdate = g),
      (l.reportAeaSendReject = h),
      (l.reportAeaUnsignedUpdateIgnoredDuringCooldown = y),
      (l.reportAeaUnsignedThreadUpdate = C),
      (l.reportAeaBackfillComplete = b),
      (l.reportAeaBackfillExhausted = v),
      (l.reportAeaBackfillFailure = S),
      (l.reportAeaWassWouldDrop = R));
  },
  98,
);
