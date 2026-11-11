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
        _ = l.data,
        g = _.id,
        y = _.to;
      return (
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendGroupMsg: queued ",
                "",
              ])),
            g,
          )
          .tags("messaging"),
        (r = a.sendPerfReporter) == null || r.startWaitingToEncryptStage(),
        o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
          y.toString(),
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e, t, n, r, S, L, E;
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendGroupMsg: sending ",
                    "",
                  ])),
                g,
              )
              .tags("messaging"),
              (e = a.sendPerfReporter) == null || e.postWaitingToEncryptStage(),
              (t = a.sendPerfReporter) == null || t.startReadyToSendStage());
            var k = b(i),
              I = R(i),
              T = v(i),
              D = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
                y.toString(),
              ),
              x = yield o("WAWebGroupMsgSendUtils").getGroupData(
                y.toString(),
                D,
                l,
              );
            ((n = a.sendReporter) == null || n.setGroupData(x),
              (r = a.sendPerfReporter) == null || r.setGroupData(x));
            var $ =
                (S =
                  D == null
                    ? void 0
                    : D.participants.map(function (e) {
                        return o("WAWebWidFactory").createUserWidOrThrow(e);
                      })) != null
                  ? S
                  : [],
              P = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(_, $),
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
                i == null ||
                (w = i.messageHistoryBundle) == null ||
                (w = w.messageHistoryMetadata) == null
                  ? void 0
                  : w.historyReceivers;
              if (F != null && F.length > 0) {
                var O = yield o(
                    "WAWebApiParticipantStore",
                  ).getGroupSenderKeyListFromParticipantRecord(y, D),
                  B = function (t) {
                    return t.map(
                      o("WAWebLidMigrationUtils").toAddressingModeFactory(N),
                    );
                  },
                  W = yield o(
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
                M = yield o("WAWebSendGroupMsgJob").getCagMessageSendList({
                  editedMsgKey: I,
                  groupId: y,
                  isAdmin: A,
                  isLidAddressingMode: N,
                  keptMessageKey: T,
                  msgRecord: l,
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
              var U = yield o("WAWebSendGroupMsgJob").getMessageSendList(
                y,
                D,
                k,
                I,
                N,
                i == null ||
                  (q = i.messageHistoryBundle) == null ||
                  (q = q.messageHistoryMetadata) == null
                  ? void 0
                  : q.historyReceivers,
              );
              M = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                U,
                x,
              );
            }
            var V = k != null ? C($, _.botGroupParticipants, x) : [],
              H = yield p({
                groupData: x,
                isDirectSend:
                  M.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT,
                isRevoke: k != null,
                msgProtobuf: i,
              }),
              G = yield f({
                groupData: x,
                historyAgentTargets: H,
                isRevoke: k != null,
                isSenderKeySend:
                  M.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.SKMSG,
                revokeAgentTargets: V,
              }),
              z =
                _.isGroupStatus === !0
                  ? o("WAWebStatusSessionGatingUtils").getStatusSessionScope()
                  : void 0,
              j =
                (x == null ? void 0 : x.isCapiGroup) === !0
                  ? o("WAWebE2EProtoGenerator").updateGroupMsgProtoWithCapiFlag(
                      i,
                    )
                  : i,
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
              (yield o(
                "WAWebGroupAgentRetryFanout",
              ).maybePersistOriginalBotGroupParticipants({
                groupAgentFanout: G,
                groupMsgProtobuf: K,
                isOpenBotGroup: x.isOpenBotGroup === !0,
                isRevoke: k != null,
                msgRecord: l,
              }),
              M.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT)
            ) {
              var Q,
                X,
                Y = yield h({
                  historyAgentTargets: H,
                  isRevoke: k != null,
                  msg: _,
                  msgProtobuf: K,
                  revokeAgentTargets: V,
                }),
                J = Y[0],
                Z = Y[1],
                ee = H.length > 0 ? [] : M.deviceList;
              return (
                (Q = a.sendReporter) == null || Q.setDeviceCount(ee.length),
                (X = a.sendPerfReporter) == null || X.setIsDirectedMessage(!0),
                o("WAWebSendGroupDirectJob").encryptAndSendGroupDirectMsg({
                  ackParticipant: H[0],
                  additionalBotBody: J,
                  additionalBotShouldHaveIdentity: Z,
                  deviceList: ee,
                  groupData: x,
                  metricReporter: a,
                  msgProtobuf: K,
                  msgRecord: l,
                  scheduledMsgMetadata: m,
                  sessionScope: z,
                })
              );
            }
            var te = M,
              ne = te.senderKeyList;
            (E = a.sendReporter) == null ||
              E.setDeviceCount(ne.skList.length + ne.skDistribList.length);
            var re = yield d.load(),
              oe = re.encryptAndSendSenderKeyMsg;
            return oe(l, K, ne, x, a, P, m, G, z);
          }),
        )
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var s = yield o(
              "WAWebGroupHistorySendGroupMsgJobUtils",
            ).loadAgentHistoryBundle(),
            u = s.getAgentHistoryBundleTargets;
          return u(l, n);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.historyAgentTargets,
            n = e.isRevoke,
            r = e.msg,
            a = e.msgProtobuf,
            i = e.revokeAgentTargets,
            l = t.length > 0;
          if (!n && !l) return [null, !1];
          var s = n ? i : t,
            u = yield d.load(),
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
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
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
    function b(e) {
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
    function v(e) {
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
    function S(e) {
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
    function R(e) {
      var t,
        n,
        r = e.protocolMessage,
        a = null;
      return (
        (r == null ? void 0 : r.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT &&
        r != null &&
        r.key
          ? (a = S(r.key))
          : ((t = e.secretEncryptedMessage) == null
              ? void 0
              : t.secretEncType) ===
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT &&
            ((n = e.secretEncryptedMessage) == null
              ? void 0
              : n.targetMessageKey) != null &&
            (a = S(e.secretEncryptedMessage.targetMessageKey)),
        a
      );
    }
    l.encryptAndSendGroupMsg = m;
  },
  98,
);
