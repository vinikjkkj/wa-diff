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
    "WAWebGroupHistoryAgentBundleFilter",
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
      var n,
        r = t.metricReporter,
        a = t.msgProtobuf,
        i = t.msgRecord,
        l = t.scheduledMsgMetadata,
        m = i.data,
        C = m.id,
        v = m.to;
      return (
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendGroupMsg: queued ",
                "",
              ])),
            C,
          )
          .tags("messaging"),
        (n = r.sendPerfReporter) == null || n.startWaitingToEncryptStage(),
        o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
          v.toString(),
          async function () {
            var e, t, n, S, R, L, E;
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendGroupMsg: sending ",
                    "",
                  ])),
                C,
              )
              .tags("messaging"),
              (e = r.sendPerfReporter) == null || e.postWaitingToEncryptStage(),
              (t = r.sendPerfReporter) == null || t.startReadyToSendStage());
            var k = h(a),
              I = b(a),
              T = y(a),
              D = await o("WAWebGroupMsgSendUtils").getParticipantRecord(
                v.toString(),
              ),
              x = await o("WAWebGroupMsgSendUtils").getGroupData(
                v.toString(),
                D,
                i,
              );
            ((n = r.sendReporter) == null || n.setGroupData(x),
              (S = r.sendPerfReporter) == null || S.setGroupData(x));
            var $ =
                (R =
                  D == null
                    ? void 0
                    : D.participants.map(function (e) {
                        return o("WAWebWidFactory").createUserWidOrThrow(e);
                      })) != null
                  ? R
                  : [],
              P = await o("WAWebMsgRcatUtils").genContentBindingForMsg(m, $),
              N = !!x.isLidAddressingMode,
              M;
            if (x.isCag === !0) {
              var w,
                A = !!x.amIAdmin;
              o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: CAG ",
                      " ",
                    ])),
                  A ? "admin" : "non-admin",
                )
                .tags("messaging");
              var F =
                a == null ||
                (w = a.messageHistoryBundle) == null ||
                (w = w.messageHistoryMetadata) == null
                  ? void 0
                  : w.historyReceivers;
              if (F != null && F.length > 0) {
                var O = await o(
                    "WAWebApiParticipantStore",
                  ).getGroupSenderKeyListFromParticipantRecord(v, D),
                  B = function (t) {
                    return t.map(
                      o("WAWebLidMigrationUtils").toAddressingModeFactory(N),
                    );
                  },
                  W = await o(
                    "WAWebGroupHistorySendGroupMsgJobUtils",
                  ).getGroupSendListForGroupHistoryBundle(
                    F.map(o("WAWebWidFactory").createWid),
                    O,
                    { normalizeAddressingModeFn: B, isLidAddressingMode: N },
                  );
                M = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                  W,
                  x,
                );
              } else
                M = await o("WAWebSendGroupMsgJob").getCagMessageSendList({
                  editedMsgKey: I,
                  groupId: v,
                  isAdmin: A,
                  isLidAddressingMode: N,
                  keptMessageKey: T,
                  msgRecord: i,
                  participantRecord: D,
                  revokeMsgKey: k,
                });
            } else {
              var q;
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: ",
                      " group size: ",
                      "",
                    ])),
                  o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(x),
                  D == null ? void 0 : D.participants.length,
                )
                .tags("messaging");
              var U = await o("WAWebSendGroupMsgJob").getMessageSendList(
                v,
                D,
                k,
                I,
                N,
                a == null ||
                  (q = a.messageHistoryBundle) == null ||
                  (q = q.messageHistoryMetadata) == null
                  ? void 0
                  : q.historyReceivers,
              );
              M = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                U,
                x,
              );
            }
            var V = k != null ? g($, m.botGroupParticipants, x) : [],
              H = await p({
                groupData: x,
                isDirectSend:
                  M.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT,
                isRevoke: k != null,
                msgProtobuf: a,
              }),
              G = await _({
                groupData: x,
                historyAgentTargets: H,
                isRevoke: k != null,
                isSenderKeySend:
                  M.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.SKMSG,
                revokeAgentTargets: V,
              }),
              z =
                m.isGroupStatus === !0
                  ? o("WAWebStatusSessionGatingUtils").getStatusSessionScope()
                  : void 0,
              j =
                (x == null ? void 0 : x.isCapiGroup) === !0
                  ? o("WAWebE2EProtoGenerator").updateGroupMsgProtoWithCapiFlag(
                      a,
                    )
                  : a,
              K = o("WAWebGenerateBotGroupMetadata").addGroupAgentBotMetadata(
                o(
                  "WAWebRemoveQuotedAttachmentMediaFields",
                ).isGroupWithAgentParticipant(x)
                  ? o(
                      "WAWebRemoveQuotedAttachmentMediaFields",
                    ).removeQuotedAttachmentMediaFields(j)
                  : j,
                (L = x.groupAgentParticipants) != null ? L : [],
              );
            if (
              (await o(
                "WAWebGroupAgentRetryFanout",
              ).maybePersistOriginalBotGroupParticipants({
                groupAgentFanout: G,
                groupMsgProtobuf: K,
                isOpenBotGroup: x.isOpenBotGroup === !0,
                isRevoke: k != null,
                msgRecord: i,
              }),
              M.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT)
            ) {
              var Q,
                X,
                Y = await f({
                  historyAgentTargets: H,
                  isRevoke: k != null,
                  msg: m,
                  msgProtobuf: K,
                  revokeAgentTargets: V,
                }),
                J = Y[0],
                Z = Y[1],
                ee = H.length > 0 ? [] : M.deviceList;
              return (
                (Q = r.sendReporter) == null || Q.setDeviceCount(ee.length),
                (X = r.sendPerfReporter) == null || X.setIsDirectedMessage(!0),
                o("WAWebSendGroupDirectJob").encryptAndSendGroupDirectMsg({
                  ackParticipant: H[0],
                  additionalBotBody: J,
                  additionalBotShouldHaveIdentity: Z,
                  deviceList: ee,
                  groupData: x,
                  metricReporter: r,
                  msgProtobuf: K,
                  msgRecord: i,
                  scheduledMsgMetadata: l,
                  sessionScope: z,
                })
              );
            }
            var te = M,
              ne = te.senderKeyList;
            (E = r.sendReporter) == null ||
              E.setDeviceCount(ne.skList.length + ne.skDistribList.length);
            var re = await d.load(),
              oe = re.encryptAndSendSenderKeyMsg;
            return oe(i, K, ne, x, r, P, l, G, z);
          },
        )
      );
    }
    async function p(e) {
      var t,
        n = e.groupData,
        r = e.isDirectSend,
        a = e.isRevoke,
        i = e.msgProtobuf,
        l =
          (t = i.messageHistoryBundle) == null ||
          (t = t.messageHistoryMetadata) == null
            ? void 0
            : t.historyReceivers;
      if (
        a ||
        !r ||
        l == null ||
        !o("WAWebGroupHistoryAgentBundleFilter").isAgentHistoryBundle(
          l.map(o("WAWebWidFactory").createWid),
        )
      )
        return [];
      var s = await o(
          "WAWebGroupHistorySendGroupMsgJobUtils",
        ).loadAgentHistoryBundle(),
        u = s.getAgentHistoryBundleTargets;
      return u(l, n);
    }
    async function _(e) {
      var t = e.groupData,
        n = e.historyAgentTargets,
        r = e.isRevoke,
        a = e.isSenderKeySend,
        i = e.revokeAgentTargets;
      return r
        ? {
            configuredGroupAgentParticipants: i,
            resolvedGroupAgentParticipants: i,
          }
        : a
          ? o(
              "WAWebResolveGroupAgentParticipants",
            ).resolveGroupAgentFanoutForGroupSend(t)
          : {
              configuredGroupAgentParticipants: n,
              resolvedGroupAgentParticipants: n,
            };
    }
    async function f(e) {
      var t = e.historyAgentTargets,
        n = e.isRevoke,
        r = e.msg,
        a = e.msgProtobuf,
        i = e.revokeAgentTargets,
        l = t.length > 0;
      if (!n && !l) return [null, !1];
      var s = n ? i : t,
        u = await d.load(),
        c = u.createBotFanoutNode;
      return c({
        configuredGroupAgentParticipants: s,
        encMediaType: null,
        groupAgentParticipants: s,
        isAgentHistoryBundle: l,
        isOpenBotGroupSend: s.some(
          o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid,
        ),
        isScheduledMessage: !1,
        msg: r,
        msgProtobuf: a,
        shouldGateInvokedBot: !1,
      });
    }
    function g(e, t, n) {
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
    function h(e) {
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
    function y(e) {
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
    function C(e) {
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
    function b(e) {
      var t,
        n,
        r = e.protocolMessage,
        a = null;
      return (
        (r == null ? void 0 : r.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT &&
        r != null &&
        r.key
          ? (a = C(r.key))
          : ((t = e.secretEncryptedMessage) == null
              ? void 0
              : t.secretEncType) ===
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT &&
            ((n = e.secretEncryptedMessage) == null
              ? void 0
              : n.targetMessageKey) != null &&
            (a = C(e.secretEncryptedMessage.targetMessageKey)),
        a
      );
    }
    l.encryptAndSendGroupMsg = m;
  },
  98,
);
