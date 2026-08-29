__d(
  "WAWebPostE2eMessageRecvMetric",
  [
    "WAWebBackendApi",
    "WAWebBackendJobsCommon",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2WamClassification",
    "WAWebE2eMessageRecvWamEvent",
    "WAWebGetMetricE2eDestination",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebHandleMsgCommon",
    "WAWebSessionScopeWamUtils",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.enc,
            n = e.error,
            r = e.from,
            a = e.msgBotInfo,
            i = e.msgInfo,
            l = e.msgMeta,
            s = l.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction,
            u = i.chat,
            c = new (o("WAWebE2eMessageRecvWamEvent").E2eMessageRecvWamEvent)({
              e2eCiphertextType: o(
                "WAWebBackendJobsCommon",
              ).getMetricE2eCiphertextType(t.e2eType),
              e2eCiphertextVersion: o("WAWebBackendJobsCommon")
                .CIPHERTEXT_VERSION,
              e2eFailureReason: n == null ? void 0 : n.e2eFailureReason,
              e2eSuccessful: !1,
              messageMediaType: o("WAWebBackendJobsCommon").getMetricMediaType({
                encMediaType: t.encMediaType,
                msgType: l.type,
                msgPollType: l.pollType,
              }),
              retryCount: t.retryCount,
              editType: o("WAWebBackendJobsCommon").getMetricEditType(i.edit),
              botType: o("WAWebWamMsgUtils").getWamBotType({
                chatId: u,
                bizBotType: a == null ? void 0 : a.bizBotType,
              }),
              sessionScope: o(
                "WAWebSessionScopeWamUtils",
              ).sessionScopeToWamType(
                o("WAWebSessionScopeWamUtils").getIncomingSkdmSessionScope({
                  from: r,
                  isGroupStatus: l.isGroupStatus,
                  isSkdm: l.isSkdm,
                  metaSessionScope: l.metaSessionScope,
                }),
              ),
            }),
            d = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(r);
          d != null && (c.e2eDestination = d);
          var m = o("WAWebCoexV2WamClassification").getRecvWamE2eClassification(
              i.author,
              r,
              i.metaFrom,
            ),
            p = m.e2eSenderType,
            _ = m.encryptionType;
          if (
            (p != null && (c.e2eSenderType = p),
            _ != null && (c.encryptionType = _),
            i.addressingMode != null &&
              (c.serverAddressingMode = o(
                "WAWebWamAddressingModeUtils",
              ).getWamAddressingModeFromString(i.addressingMode)),
            u.isGroup())
          ) {
            var f = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getGroupMetadata",
              { groupWid: u },
            );
            if (f != null) {
              c.isLid =
                (o("WAWebGroupMetadataGetters").getIsCag(f) && s) ||
                !!f.isLidAddressingMode;
              var g = o("WAWebGroupType").groupTypeToWamEnum(
                o("WAWebGroupMetadataGetters").getGroupType(f),
              );
              c.typeOfGroup = g;
              var h = o(
                "WAWebWamAddressingModeUtils",
              ).getAddressingModeMetricsFromGroupMetadata(f);
              h != null && (c.localAddressingMode = h);
            }
          } else
            u.isBroadcast()
              ? (c.isLid = i.author.isLid())
              : (c.isLid = u.isLid());
          return (
            i.author.isBot() &&
              !o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
                i.author,
                i.metaFrom,
              ) &&
              (i.chat.isBot()
                ? (c.agentEngagementType = o(
                    "WAWebWamEnumAgentEngagementEnumType",
                  ).AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT)
                : (c.agentEngagementType = o(
                    "WAWebWamEnumAgentEngagementEnumType",
                  ).AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED)),
            c
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield e(t);
          ((n.e2eSuccessful = !0), (n.weight = 1e3), n.commit());
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield e(t);
          ((n.e2eSuccessful = !1), (n.weight = 1), n.commit());
        })),
        m.apply(this, arguments)
      );
    }
    ((l.postSuccessE2eMessageRecvMetric = u),
      (l.postFailureE2eMessageRecvMetric = d));
  },
  98,
);
