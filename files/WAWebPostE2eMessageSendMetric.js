__d(
  "WAWebPostE2eMessageSendMetric",
  [
    "WAWebBackendJobsCommon",
    "WAWebCoexV2BotWid",
    "WAWebE2eMessageSendWamEvent",
    "WAWebGetMetricE2eDestination",
    "WAWebSessionScopeWamUtils",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumE2eDeviceType",
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
        c = e.sessionScope,
        d = e.coexV2SelfHosted,
        m = new (o("WAWebE2eMessageSendWamEvent").E2eMessageSendWamEvent)({
          e2eCiphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
          isLid: t.isLid(),
          retryCount: n,
          editType: l,
          botType: o("WAWebWamMsgUtils").getWamBotType({
            chatId: t,
            bizBotType: a == null ? void 0 : a.bizBotType,
          }),
          sessionScope: o("WAWebSessionScopeWamUtils").sessionScopeToWamType(c),
        }),
        p = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(t);
      p != null && (m.e2eDestination = p);
      var _ = u(t, d);
      _ != null && (m.e2eReceiverDeviceType = _);
      var f = s(t, d);
      return (
        f != null && (m.encryptionType = f),
        r != null &&
          (m.e2eCiphertextType = o(
            "WAWebBackendJobsCommon",
          ).getMetricE2eCiphertextType(r)),
        a &&
          ((m.messageMediaType = o("WAWebWamMsgUtils").getWamMediaType(a)),
          t.isBot() &&
            (a.id.remote.isBot()
              ? (m.agentEngagementType = o(
                  "WAWebWamEnumAgentEngagementEnumType",
                ).AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT)
              : (m.agentEngagementType = o(
                  "WAWebWamEnumAgentEngagementEnumType",
                ).AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED))),
        m
      );
    }
    function s(e, t) {
      if (e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID))
        return t === !0
          ? o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE
              .SELF_COEX_V2
          : o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX_V2;
      if (e.isHosted())
        return o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX;
    }
    function u(e, t) {
      return e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)
        ? t === !0
          ? o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.MY_COEX_V2
          : o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.OTHER_COEX_V2
        : o("WAWebWamMsgUtils").getWamE2eSenderType(e);
    }
    function c(t) {
      var n = e(t);
      ((n.e2eSuccessful = !0), n.commit());
    }
    function d(t) {
      var n = e(t);
      ((n.e2eSuccessful = !1), (n.weight = 1), n.commit());
    }
    ((l.postSuccessDirectE2eMessageSendMetric = c),
      (l.postFailureDirectE2eMessageSendMetric = d));
  },
  98,
);
