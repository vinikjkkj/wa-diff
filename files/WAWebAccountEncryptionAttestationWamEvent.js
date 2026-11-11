__d(
  "WAWebAccountEncryptionAttestationWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAeaChatEncryptionState",
    "WAWebWamEnumAeaEventType",
    "WAWebWamEnumAeaFailureReasonType",
    "WAWebWamEnumAeaStateUpdateReason",
    "WAWebWamEnumAeaStateUpdateSource",
    "WAWebWamEnumAttestationAccountTypeEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          AccountEncryptionAttestation: [
            8164,
            {
              advAccountType: [
                1,
                (s = o("WAWebWamEnumAttestationAccountTypeEnum"))
                  .ATTESTATION_ACCOUNT_TYPE_ENUM,
              ],
              aeaEventType: [2, o("WAWebWamEnumAeaEventType").AEA_EVENT_TYPE],
              aeaFailureReason: [
                3,
                o("WAWebWamEnumAeaFailureReasonType").AEA_FAILURE_REASON_TYPE,
              ],
              attestationAccountType: [4, s.ATTESTATION_ACCOUNT_TYPE_ENUM],
              cooldownState: [5, s.ATTESTATION_ACCOUNT_TYPE_ENUM],
              currentAttestationAccountType: [
                11,
                s.ATTESTATION_ACCOUNT_TYPE_ENUM,
              ],
              currentChatEncryptionState: [
                10,
                o("WAWebWamEnumAeaChatEncryptionState")
                  .AEA_CHAT_ENCRYPTION_STATE,
              ],
              dedupKey: [9, e.TYPES.INTEGER],
              gossipedState: [8, s.ATTESTATION_ACCOUNT_TYPE_ENUM],
              secondsRemaining: [6, e.TYPES.INTEGER],
              stateUpdateReason: [
                12,
                o("WAWebWamEnumAeaStateUpdateReason").AEA_STATE_UPDATE_REASON,
              ],
              stateUpdateRowCount: [13, e.TYPES.INTEGER],
              stateUpdateSource: [
                14,
                o("WAWebWamEnumAeaStateUpdateSource").AEA_STATE_UPDATE_SOURCE,
              ],
              usyncState: [7, s.ATTESTATION_ACCOUNT_TYPE_ENUM],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { AccountEncryptionAttestation: [] },
      );
    l.AccountEncryptionAttestationWamEvent = u;
  },
  98,
);
