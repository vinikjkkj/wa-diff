__d(
  "WAWebEncryptAndSendGroupMsg",
  [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebE2EProtoGenerator",
    "WAWebGenerateBotGroupMetadata",
    "WAWebGroupAgentRetryFanout",
    "WAWebGroupHistorySendGroupMsgJobUtils",
    "WAWebGroupMsgSendUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgRcatUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebRemoveQuotedAttachmentMediaFields",
    "WAWebResolveGroupAgentParticipants",
    "WAWebSendGroupDirectJob",
    "WAWebSendGroupMsgJob",
    "WAWebSendMsgQueueMap",
    "WAWebStatusSessionGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = r("requireDeferred")("WAWebSendGroupSkmsgJob").__setRef(
        "WAWebEncryptAndSendGroupMsg",
      );
    function m(t) {
      var r,
        a = t.metricReporter,
        i = t.msgProtobuf,
        l = t.msgRecord,
        m = t.scheduledMsgMetadata,
        g = l.data,
        y = g.id,
        C = g.to;
      return (
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendGroupMsg: queued ",
                "",
              ])),
            y,
          )
          .tags("messaging"),
        (r = a.sendPerfReporter) == null || r.startWaitingToEncryptStage(),
        o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
          C.toString(),
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e, t, n, r, b, v, S;
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendGroupMsg: sending ",
                    "",
                  ])),
                y,
              )
              .tags("messaging"),
              (e = a.sendPerfReporter) == null || e.postWaitingToEncryptStage(),
              (t = a.sendPerfReporter) == null || t.startReadyToSendStage());
            var R = _(i),
              L = h(i),
              E = f(i),
              k = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
                C.toString(),
              ),
              I = yield o("WAWebGroupMsgSendUtils").getGroupData(
                C.toString(),
                k,
                l,
              );
            ((n = a.sendReporter) == null || n.setGroupData(I),
              (r = a.sendPerfReporter) == null || r.setGroupData(I));
            var T =
                (b =
                  k == null
                    ? void 0
                    : k.participants.map(function (e) {
                        return o("WAWebWidFactory").createUserWidOrThrow(e);
                      })) != null
                  ? b
                  : [],
              D = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(g, T),
              x = !!I.isLidAddressingMode,
              $;
            if (I.isCag === !0) {
              var P,
                N = !!I.amIAdmin;
              o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: CAG ",
                      " ",
                    ])),
                  N ? "admin" : "non-admin",
                )
                .tags("messaging");
              var M =
                i == null ||
                (P = i.messageHistoryBundle) == null ||
                (P = P.messageHistoryMetadata) == null
                  ? void 0
                  : P.historyReceivers;
              if (M != null && M.length > 0) {
                var w = yield o(
                    "WAWebApiParticipantStore",
                  ).getGroupSenderKeyListFromParticipantRecord(C, k),
                  A = function (t) {
                    return t.map(
                      o("WAWebLidMigrationUtils").toAddressingModeFactory(x),
                    );
                  },
                  F = yield o(
                    "WAWebGroupHistorySendGroupMsgJobUtils",
                  ).getGroupSendListForGroupHistoryBundle(
                    M.map(o("WAWebWidFactory").createWid),
                    w,
                    { normalizeAddressingModeFn: A, isLidAddressingMode: x },
                  );
                $ = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                  F,
                  I,
                );
              } else
                $ = yield o("WAWebSendGroupMsgJob").getCagMessageSendList({
                  editedMsgKey: L,
                  groupId: C,
                  isAdmin: N,
                  isLidAddressingMode: x,
                  keptMessageKey: E,
                  msgRecord: l,
                  participantRecord: k,
                  revokeMsgKey: R,
                });
            } else {
              var O;
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: ",
                      " group size: ",
                      "",
                    ])),
                  o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(I),
                  k == null ? void 0 : k.participants.length,
                )
                .tags("messaging");
              var B = yield o("WAWebSendGroupMsgJob").getMessageSendList(
                C,
                k,
                R,
                L,
                x,
                i == null ||
                  (O = i.messageHistoryBundle) == null ||
                  (O = O.messageHistoryMetadata) == null
                  ? void 0
                  : O.historyReceivers,
              );
              $ = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                B,
                I,
              );
            }
            var W = R != null ? p(T, g.botGroupParticipants, I) : [],
              q;
            R != null
              ? (q = {
                  configuredGroupAgentParticipants: W,
                  resolvedGroupAgentParticipants: W,
                })
              : $.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.SKMSG
                ? (q = yield o(
                    "WAWebResolveGroupAgentParticipants",
                  ).resolveGroupAgentFanoutForGroupSend(I))
                : (q = {
                    configuredGroupAgentParticipants: [],
                    resolvedGroupAgentParticipants: [],
                  });
            var U =
                g.isGroupStatus === !0
                  ? o("WAWebStatusSessionGatingUtils").getStatusSessionScope()
                  : void 0,
              V =
                (I == null ? void 0 : I.isCapiGroup) === !0
                  ? o("WAWebE2EProtoGenerator").updateGroupMsgProtoWithCapiFlag(
                      i,
                    )
                  : i,
              H = o("WAWebGenerateBotGroupMetadata").addGroupAgentBotMetadata(
                o(
                  "WAWebRemoveQuotedAttachmentMediaFields",
                ).isGroupWithAgentParticipant(I)
                  ? o(
                      "WAWebRemoveQuotedAttachmentMediaFields",
                    ).removeQuotedAttachmentMediaFields(V)
                  : V,
                (v = I.groupAgentParticipants) != null ? v : [],
              );
            if (
              (yield o(
                "WAWebGroupAgentRetryFanout",
              ).maybePersistOriginalBotGroupParticipants({
                groupAgentFanout: q,
                groupMsgProtobuf: H,
                isOpenBotGroup: I.isOpenBotGroup === !0,
                isRevoke: R != null,
                msgRecord: l,
              }),
              $.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT)
            ) {
              var G,
                z,
                j = [null, !1];
              if (R != null) {
                var K = yield d.load(),
                  Q = K.createBotFanoutNode;
                j = yield Q({
                  configuredGroupAgentParticipants: W,
                  encMediaType: null,
                  groupAgentParticipants: W,
                  isOpenBotGroupSend: W.some(
                    o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid,
                  ),
                  isScheduledMessage: !1,
                  msg: g,
                  msgProtobuf: H,
                  shouldGateInvokedBot: !1,
                });
              }
              var X = j,
                Y = X[0],
                J = X[1],
                Z = $,
                ee = Z.deviceList;
              return (
                (G = a.sendReporter) == null || G.setDeviceCount(ee.length),
                (z = a.sendPerfReporter) == null || z.setIsDirectedMessage(!0),
                o("WAWebSendGroupDirectJob").encryptAndSendGroupDirectMsg({
                  additionalBotBody: Y,
                  additionalBotShouldHaveIdentity: J,
                  deviceList: ee,
                  groupData: I,
                  metricReporter: a,
                  msgProtobuf: H,
                  msgRecord: l,
                  scheduledMsgMetadata: m,
                  sessionScope: U,
                })
              );
            }
            var te = $,
              ne = te.senderKeyList;
            (S = a.sendReporter) == null ||
              S.setDeviceCount(ne.skList.length + ne.skDistribList.length);
            var re = yield d.load(),
              oe = re.encryptAndSendSenderKeyMsg;
            return oe(l, H, ne, I, a, D, m, q, U);
          }),
        )
      );
    }
    function p(e, t, n) {
      if (
        n.isCag === !0 ||
        (n.isAnnouncementGroup === !0 &&
          !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())
      )
        return [];
      var r = new Map();
      return (
        [].concat(e, t != null ? t : []).forEach(function (e) {
          e.isUser() &&
            o("WAWebBotGroupGatingUtils").isGroupRevokeAgentTarget(e) &&
            r.set(e.toString(), e);
        }),
        Array.from(r.values())
      );
    }
    function _(e) {
      var t = e.protocolMessage,
        n = null;
      if (
        (t == null ? void 0 : t.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE &&
        t != null &&
        t.key
      ) {
        var a = t.key,
          i = a.id,
          l = a.participant,
          s = a.remoteJid;
        !r("isStringNullOrEmpty")(s) &&
          !r("isStringNullOrEmpty")(i) &&
          !r("isStringNullOrEmpty")(l) &&
          (n = new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").createWid(s),
            fromMe: !0,
            id: i,
            participant: o("WAWebWidFactory").createWid(l),
          }));
      }
      return n;
    }
    function f(e) {
      var t = e.keepInChatMessage;
      if (t != null && t.key) {
        var n = t.key,
          a = n.id,
          i = n.participant,
          l = n.remoteJid;
        if (
          !r("isStringNullOrEmpty")(l) &&
          !r("isStringNullOrEmpty")(a) &&
          !r("isStringNullOrEmpty")(i)
        ) {
          var s = new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").createWid(l),
            fromMe: !0,
            id: a,
            participant: o("WAWebWidFactory").createWid(i),
          });
          return s;
        }
      }
      return null;
    }
    function g(e) {
      var t = e.id,
        n = e.participant,
        a = e.remoteJid;
      return r("isStringNullOrEmpty")(a) ||
        r("isStringNullOrEmpty")(t) ||
        r("isStringNullOrEmpty")(n)
        ? null
        : new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").createWid(a),
            fromMe: !0,
            id: t,
            participant: o("WAWebWidFactory").createWid(n),
          });
    }
    function h(e) {
      var t,
        n,
        r = e.protocolMessage,
        a = null;
      return (
        (r == null ? void 0 : r.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT &&
        r != null &&
        r.key
          ? (a = g(r.key))
          : ((t = e.secretEncryptedMessage) == null
              ? void 0
              : t.secretEncType) ===
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT &&
            ((n = e.secretEncryptedMessage) == null
              ? void 0
              : n.targetMessageKey) != null &&
            (a = g(e.secretEncryptedMessage.targetMessageKey)),
        a
      );
    }
    l.encryptAndSendGroupMsg = m;
  },
  98,
);
