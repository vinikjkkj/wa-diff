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
    "WAWebSendGroupSkmsgJob",
    "WAWebSendMsgQueueMap",
    "WAWebSendMsgTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(t) {
      var r,
        a = t.metricReporter,
        i = t.msgProtobuf,
        l = t.msgRecord,
        d = t.scheduledMsgMetadata,
        m = l.data,
        f = m.id,
        g = m.to;
      return (
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendGroupMsg: queued ",
                "",
              ])),
            f,
          )
          .tags("messaging"),
        (r = a.sendPerfReporter) == null || r.startWaitingToEncryptStage(),
        o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
          g.toString(),
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e, t, n, r, C, v, S;
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendGroupMsg: sending ",
                    "",
                  ])),
                f,
              )
              .tags("messaging"),
              (e = a.sendPerfReporter) == null || e.postWaitingToEncryptStage(),
              (t = a.sendPerfReporter) == null || t.startReadyToSendStage());
            var R = h(i),
              L = b(i),
              E = y(i),
              k = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
                g.toString(),
              ),
              I = yield o("WAWebGroupMsgSendUtils").getGroupData(
                g.toString(),
                k,
                l,
              );
            ((n = a.sendReporter) == null || n.setGroupData(I),
              (r = a.sendPerfReporter) == null || r.setGroupData(I));
            var T =
                (C =
                  k == null
                    ? void 0
                    : k.participants.map(function (e) {
                        return o("WAWebWidFactory").createUserWidOrThrow(e);
                      })) != null
                  ? C
                  : [],
              D = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(m, T),
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
                  ).getGroupSenderKeyListFromParticipantRecord(g, k),
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
                  groupId: g,
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
                g,
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
            var W = R != null ? p(T, m.botGroupParticipants, I) : [],
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
                (I == null ? void 0 : I.isCapiGroup) === !0
                  ? o("WAWebE2EProtoGenerator").updateGroupMsgProtoWithCapiFlag(
                      i,
                    )
                  : i,
              V = o("WAWebGenerateBotGroupMetadata").addGroupAgentBotMetadata(
                o(
                  "WAWebRemoveQuotedAttachmentMediaFields",
                ).isGroupWithAgentParticipant(I)
                  ? o(
                      "WAWebRemoveQuotedAttachmentMediaFields",
                    ).removeQuotedAttachmentMediaFields(U)
                  : U,
                (v = I.groupAgentParticipants) != null ? v : [],
              );
            if (
              (yield _({
                groupAgentFanout: q,
                groupMsgProtobuf: V,
                isOpenBotGroup: I.isOpenBotGroup === !0,
                isRevoke: R != null,
                msgRecord: l,
              }),
              $.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT)
            ) {
              var H,
                G,
                z =
                  R != null
                    ? yield o("WAWebSendGroupSkmsgJob").createBotFanoutNode({
                        configuredGroupAgentParticipants: W,
                        encMediaType: null,
                        groupAgentParticipants: W,
                        isOpenBotGroupSend: W.some(
                          o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid,
                        ),
                        isScheduledMessage: !1,
                        msg: m,
                        msgProtobuf: V,
                        shouldGateInvokedBot: !1,
                      })
                    : [null, !1],
                j = z[0],
                K = z[1],
                Q = $,
                X = Q.deviceList;
              return (
                (H = a.sendReporter) == null || H.setDeviceCount(X.length),
                (G = a.sendPerfReporter) == null || G.setIsDirectedMessage(!0),
                o("WAWebSendGroupDirectJob").encryptAndSendGroupDirectMsg({
                  additionalBotBody: j,
                  additionalBotShouldHaveIdentity: K,
                  deviceList: X,
                  groupData: I,
                  metricReporter: a,
                  msgProtobuf: V,
                  msgRecord: l,
                  scheduledMsgMetadata: d,
                })
              );
            }
            var Y = $,
              J = Y.senderKeyList;
            return (
              (S = a.sendReporter) == null ||
                S.setDeviceCount(J.skList.length + J.skDistribList.length),
              o("WAWebSendGroupSkmsgJob").encryptAndSendSenderKeyMsg(
                l,
                V,
                J,
                I,
                a,
                D,
                d,
                q,
              )
            );
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
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              var u = g(n, t.resolvedGroupAgentParticipants);
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
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
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
