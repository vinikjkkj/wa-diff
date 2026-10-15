__d(
  "WAWebEncryptAndSendGroupMsg",
  [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebDBUpdateMessageTable",
    "WAWebE2EProtoGenerator",
    "WAWebGenerateBotGroupMetadata",
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
    "WAWebSendMsgTypes",
    "WAWebStatusSessionGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = r("requireDeferred")("WAWebSendGroupSkmsgJob").__setRef(
        "WAWebEncryptAndSendGroupMsg",
      );
    function p(t) {
      var r,
        a = t.metricReporter,
        i = t.msgProtobuf,
        l = t.msgRecord,
        d = t.scheduledMsgMetadata,
        p = l.data,
        g = p.id,
        h = p.to;
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
          h.toString(),
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e, t, n, r, b, S, R;
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
            var L = y(i),
              E = v(i),
              k = C(i),
              I = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
                h.toString(),
              ),
              T = yield o("WAWebGroupMsgSendUtils").getGroupData(
                h.toString(),
                I,
                l,
              );
            ((n = a.sendReporter) == null || n.setGroupData(T),
              (r = a.sendPerfReporter) == null || r.setGroupData(T));
            var D =
                (b =
                  I == null
                    ? void 0
                    : I.participants.map(function (e) {
                        return o("WAWebWidFactory").createUserWidOrThrow(e);
                      })) != null
                  ? b
                  : [],
              x = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(p, D),
              $ = !!T.isLidAddressingMode,
              P;
            if (T.isCag === !0) {
              var N,
                M = !!T.amIAdmin;
              o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: CAG ",
                      " ",
                    ])),
                  M ? "admin" : "non-admin",
                )
                .tags("messaging");
              var w =
                i == null ||
                (N = i.messageHistoryBundle) == null ||
                (N = N.messageHistoryMetadata) == null
                  ? void 0
                  : N.historyReceivers;
              if (w != null && w.length > 0) {
                var A = yield o(
                    "WAWebApiParticipantStore",
                  ).getGroupSenderKeyListFromParticipantRecord(h, I),
                  F = function (t) {
                    return t.map(
                      o("WAWebLidMigrationUtils").toAddressingModeFactory($),
                    );
                  },
                  O = yield o(
                    "WAWebGroupHistorySendGroupMsgJobUtils",
                  ).getGroupSendListForGroupHistoryBundle(
                    w.map(o("WAWebWidFactory").createWid),
                    A,
                    { normalizeAddressingModeFn: F, isLidAddressingMode: $ },
                  );
                P = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                  O,
                  T,
                );
              } else
                P = yield o("WAWebSendGroupMsgJob").getCagMessageSendList({
                  editedMsgKey: E,
                  groupId: h,
                  isAdmin: M,
                  isLidAddressingMode: $,
                  keptMessageKey: k,
                  msgRecord: l,
                  participantRecord: I,
                  revokeMsgKey: L,
                });
            } else {
              var B;
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: ",
                      " group size: ",
                      "",
                    ])),
                  o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(T),
                  I == null ? void 0 : I.participants.length,
                )
                .tags("messaging");
              var W = yield o("WAWebSendGroupMsgJob").getMessageSendList(
                h,
                I,
                L,
                E,
                $,
                i == null ||
                  (B = i.messageHistoryBundle) == null ||
                  (B = B.messageHistoryMetadata) == null
                  ? void 0
                  : B.historyReceivers,
              );
              P = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                W,
                T,
              );
            }
            var q = L != null ? _(D, p.botGroupParticipants, T) : [],
              U;
            L != null
              ? (U = {
                  configuredGroupAgentParticipants: q,
                  resolvedGroupAgentParticipants: q,
                })
              : P.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.SKMSG
                ? (U = yield o(
                    "WAWebResolveGroupAgentParticipants",
                  ).resolveGroupAgentFanoutForGroupSend(T))
                : (U = {
                    configuredGroupAgentParticipants: [],
                    resolvedGroupAgentParticipants: [],
                  });
            var V =
                p.isGroupStatus === !0
                  ? o("WAWebStatusSessionGatingUtils").getStatusSessionScope()
                  : void 0,
              H =
                (T == null ? void 0 : T.isCapiGroup) === !0
                  ? o("WAWebE2EProtoGenerator").updateGroupMsgProtoWithCapiFlag(
                      i,
                    )
                  : i,
              G = o("WAWebGenerateBotGroupMetadata").addGroupAgentBotMetadata(
                o(
                  "WAWebRemoveQuotedAttachmentMediaFields",
                ).isGroupWithAgentParticipant(T)
                  ? o(
                      "WAWebRemoveQuotedAttachmentMediaFields",
                    ).removeQuotedAttachmentMediaFields(H)
                  : H,
                (S = T.groupAgentParticipants) != null ? S : [],
              );
            if (
              (yield f({
                groupAgentFanout: U,
                groupMsgProtobuf: G,
                isOpenBotGroup: T.isOpenBotGroup === !0,
                isRevoke: L != null,
                msgRecord: l,
              }),
              P.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT)
            ) {
              var z,
                j,
                K = [null, !1];
              if (L != null) {
                var Q = yield m.load(),
                  X = Q.createBotFanoutNode;
                K = yield X({
                  configuredGroupAgentParticipants: q,
                  encMediaType: null,
                  groupAgentParticipants: q,
                  isOpenBotGroupSend: q.some(
                    o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid,
                  ),
                  isScheduledMessage: !1,
                  msg: p,
                  msgProtobuf: G,
                  shouldGateInvokedBot: !1,
                });
              }
              var Y = K,
                J = Y[0],
                Z = Y[1],
                ee = P,
                te = ee.deviceList;
              return (
                (z = a.sendReporter) == null || z.setDeviceCount(te.length),
                (j = a.sendPerfReporter) == null || j.setIsDirectedMessage(!0),
                o("WAWebSendGroupDirectJob").encryptAndSendGroupDirectMsg({
                  additionalBotBody: J,
                  additionalBotShouldHaveIdentity: Z,
                  deviceList: te,
                  groupData: T,
                  metricReporter: a,
                  msgProtobuf: G,
                  msgRecord: l,
                  scheduledMsgMetadata: d,
                  sessionScope: V,
                })
              );
            }
            var ne = P,
              re = ne.senderKeyList;
            (R = a.sendReporter) == null ||
              R.setDeviceCount(re.skList.length + re.skDistribList.length);
            var oe = yield m.load(),
              ae = oe.encryptAndSendSenderKeyMsg;
            return ae(l, G, re, T, a, x, d, U, V);
          }),
        )
      );
    }
    function _(e, t, n) {
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupAgentFanout,
            n = e.groupMsgProtobuf,
            a = e.isOpenBotGroup,
            i = e.isRevoke,
            l = e.msgRecord;
          if (
            !(
              i ||
              l.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Message ||
              l.data.botGroupParticipants != null
            )
          ) {
            var s =
              a ||
              l.data.invokedBotWid != null ||
              t.configuredGroupAgentParticipants.length > 0;
            if (s) {
              var u = h(n, t.resolvedGroupAgentParticipants);
              try {
                yield o("WAWebDBUpdateMessageTable").updateMessageTable(
                  l.data.id,
                  { botGroupParticipants: u },
                );
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[encryptAndSendGroupMsg] failed to persist original agent targets",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("group-send-persist-original-agents-failed");
              }
              l.data.set({ botGroupParticipants: u });
            }
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n,
        r,
        a =
          (n =
            (r = e.messageContextInfo) == null ||
            (r = r.botMetadata) == null ||
            (r = r.botGroupMetadata) == null
              ? void 0
              : r.participantsMetadata) != null
            ? n
            : [],
        i = [
          o("WAWebBotUtils").META_BOT_FBID_WID,
          o("WAWebBotUtils").META_BOT_TEE_FBID_WID,
        ].concat(t);
      return a.flatMap(function (e) {
        var t = e.botFbid,
          n = i.find(function (e) {
            return e.toString() === (t != null ? t : "") + "@bot";
          });
        return n != null ? [n] : [];
      });
    }
    function y(e) {
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
    function C(e) {
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
    function b(e) {
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
    function v(e) {
      var t,
        n,
        r = e.protocolMessage,
        a = null;
      return (
        (r == null ? void 0 : r.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT &&
        r != null &&
        r.key
          ? (a = b(r.key))
          : ((t = e.secretEncryptedMessage) == null
              ? void 0
              : t.secretEncType) ===
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT &&
            ((n = e.secretEncryptedMessage) == null
              ? void 0
              : n.targetMessageKey) != null &&
            (a = b(e.secretEncryptedMessage.targetMessageKey)),
        a
      );
    }
    l.encryptAndSendGroupMsg = p;
  },
  98,
);
