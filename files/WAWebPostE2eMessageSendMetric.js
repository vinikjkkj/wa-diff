__d(
  "WAWebPostE2eMessageSendMetric",
  [
    "WAWebBackendJobsCommon",
    "WAWebE2eMessageSendWamEvent",
    "WAWebGetMetricE2eDestination",
    "WAWebSessionScopeWamUtils",
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
        s = e.sessionScope,
        u = new (o("WAWebE2eMessageSendWamEvent").E2eMessageSendWamEvent)({
          e2eCiphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
          isLid: t.isLid(),
          retryCount: n,
          editType: l,
          botType: o("WAWebWamMsgUtils").getWamBotType({
            chatId: t,
            bizBotType: a == null ? void 0 : a.bizBotType,
          }),
          sessionScope: o("WAWebSessionScopeWamUtils").sessionScopeToWamType(s),
        }),
        c = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(t);
      c != null && (u.e2eDestination = c);
      var d = o("WAWebWamMsgUtils").getWamE2eSenderType(t);
      return (
        d != null && (u.e2eReceiverDeviceType = d),
        t.isHosted() &&
          (u.encryptionType = o(
            "WAWebWamEnumEncryptionTypeCode",
          ).ENCRYPTION_TYPE_CODE.COEX),
        r != null &&
          (u.e2eCiphertextType = o(
            "WAWebBackendJobsCommon",
          ).getMetricE2eCiphertextType(r)),
        a &&
          ((u.messageMediaType = o("WAWebWamMsgUtils").getWamMediaType(a)),
          t.isBot() &&
            (a.id.remote.isBot()
              ? (u.agentEngagementType = o(
                  "WAWebWamEnumAgentEngagementEnumType",
                ).AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT)
              : (u.agentEngagementType = o(
                  "WAWebWamEnumAgentEngagementEnumType",
                ).AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED))),
        u
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
