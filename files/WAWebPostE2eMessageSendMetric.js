__d(
  "WAWebPostE2eMessageSendMetric",
  [
    "WAWebBackendJobsCommon",
    "WAWebE2eMessageSendWamEvent",
    "WAWebGetMetricE2eDestination",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumEditType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.to,
        n = e.retryCount,
        r = e.type,
        a = e.msg,
        i = e.editType,
        l = i === void 0 ? o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED : i,
        s = new (o("WAWebE2eMessageSendWamEvent").E2eMessageSendWamEvent)({
          e2eCiphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
          isLid: t.isLid(),
          retryCount: n,
          editType: l,
          botType: o("WAWebWamMsgUtils").getWamBotType(
            t,
            a == null ? void 0 : a.bizBotType,
          ),
        }),
        u = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(t);
      u != null && (s.e2eDestination = u);
      var c = o("WAWebWamMsgUtils").getWamE2eSenderType(t);
      return (
        c != null && (s.e2eReceiverDeviceType = c),
        t.isHosted() &&
          (s.encryptionType = o(
            "WAWebWamEnumEncryptionTypeCode",
          ).ENCRYPTION_TYPE_CODE.COEX),
        r != null &&
          (s.e2eCiphertextType = o(
            "WAWebBackendJobsCommon",
          ).getMetricE2eCiphertextType(r)),
        a &&
          ((s.messageMediaType = o("WAWebWamMsgUtils").getWamMediaType(a)),
          t.isBot() &&
            (a.id.remote.isBot()
              ? (s.agentEngagementType = o(
                  "WAWebWamEnumAgentEngagementEnumType",
                ).AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT)
              : (s.agentEngagementType = o(
                  "WAWebWamEnumAgentEngagementEnumType",
                ).AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED))),
        s
      );
    }
    function s(t) {
      var n = e(t);
      ((n.e2eSuccessful = !0), n.commit());
    }
    function u(t) {
      var n = e(t);
      ((n.e2eSuccessful = !1), (n.weight = 1), n.commit());
    }
    ((l.postSuccessDirectE2eMessageSendMetric = s),
      (l.postFailureDirectE2eMessageSendMetric = u));
  },
  98,
);
