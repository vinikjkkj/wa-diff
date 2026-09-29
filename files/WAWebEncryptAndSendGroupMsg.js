__d(
  "WAWebEncryptAndSendGroupMsg",
  [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebE2EProtoGenerator",
    "WAWebGenerateBotMetadata",
    "WAWebGroupHistorySendGroupMsgJobUtils",
    "WAWebGroupMsgSendUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgRcatUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendGroupDirectJob",
    "WAWebSendGroupMsgJob",
    "WAWebSendGroupSkmsgJob",
    "WAWebSendMsgQueueMap",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t) {
      var r,
        a = t.metricReporter,
        i = t.msgProtobuf,
        l = t.msgRecord,
        d = t.scheduledMsgMetadata,
        _ = l.data,
        g = _.id,
        h = _.to;
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
            var e, t, n, r, y, C, b;
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
            var v = m(i),
              S = f(i),
              R = p(i),
              L = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
                h.toString(),
              ),
              E = yield o("WAWebGroupMsgSendUtils").getGroupData(
                h.toString(),
                L,
                l,
              );
            ((n = a.sendReporter) == null || n.setGroupData(E),
              (r = a.sendPerfReporter) == null || r.setGroupData(E));
            var k =
                (y =
                  L == null
                    ? void 0
                    : L.participants.map(function (e) {
                        return o("WAWebWidFactory").createUserWidOrThrow(e);
                      })) != null
                  ? y
                  : [],
              I = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(_, k),
              T = !!E.isLidAddressingMode,
              D;
            if (E.isCag === !0) {
              var x,
                $ = !!E.amIAdmin;
              o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: CAG ",
                      " ",
                    ])),
                  $ ? "admin" : "non-admin",
                )
                .tags("messaging");
              var P =
                i == null ||
                (x = i.messageHistoryBundle) == null ||
                (x = x.messageHistoryMetadata) == null
                  ? void 0
                  : x.historyReceivers;
              if (P != null && P.length > 0) {
                var N = yield o(
                    "WAWebApiParticipantStore",
                  ).getGroupSenderKeyListFromParticipantRecord(h, L),
                  M = function (t) {
                    return t.map(
                      o("WAWebLidMigrationUtils").toAddressingModeFactory(T),
                    );
                  },
                  w = yield o(
                    "WAWebGroupHistorySendGroupMsgJobUtils",
                  ).getGroupSendListForGroupHistoryBundle(
                    P.map(o("WAWebWidFactory").createWid),
                    N,
                    { normalizeAddressingModeFn: M, isLidAddressingMode: T },
                  );
                D = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                  w,
                  E,
                );
              } else
                D = yield o("WAWebSendGroupMsgJob").getCagMessageSendList({
                  editedMsgKey: S,
                  groupId: h,
                  isAdmin: $,
                  isLidAddressingMode: T,
                  keptMessageKey: R,
                  msgRecord: l,
                  participantRecord: L,
                  revokeMsgKey: v,
                });
            } else {
              var A;
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: ",
                      " group size: ",
                      "",
                    ])),
                  o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(E),
                  L == null ? void 0 : L.participants.length,
                )
                .tags("messaging");
              var F = yield o("WAWebSendGroupMsgJob").getMessageSendList(
                h,
                L,
                v,
                S,
                T,
                i == null ||
                  (A = i.messageHistoryBundle) == null ||
                  (A = A.messageHistoryMetadata) == null
                  ? void 0
                  : A.historyReceivers,
              );
              D = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                F,
                E,
              );
            }
            var O =
                (E == null ? void 0 : E.isCapiGroup) === !0
                  ? o("WAWebE2EProtoGenerator").updateGroupMsgProtoWithCapiFlag(
                      i,
                    )
                  : i,
              B = o("WAWebGenerateBotMetadata").addGroupAgentBotMetadata(
                O,
                (C = E.groupAgentParticipants) != null ? C : [],
              );
            if (D.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT) {
              var W,
                q,
                U = D,
                V = U.deviceList;
              return (
                (W = a.sendReporter) == null || W.setDeviceCount(V.length),
                (q = a.sendPerfReporter) == null || q.setIsDirectedMessage(!0),
                o("WAWebSendGroupDirectJob").encryptAndSendGroupDirectMsg({
                  deviceList: V,
                  groupData: E,
                  metricReporter: a,
                  msgProtobuf: B,
                  msgRecord: l,
                  scheduledMsgMetadata: d,
                })
              );
            }
            var H = D,
              G = H.senderKeyList;
            return (
              (b = a.sendReporter) == null ||
                b.setDeviceCount(G.skList.length + G.skDistribList.length),
              o("WAWebSendGroupSkmsgJob").encryptAndSendSenderKeyMsg(
                l,
                B,
                G,
                E,
                a,
                I,
                d,
              )
            );
          }),
        )
      );
    }
    function m(e) {
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
    function p(e) {
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
    function _(e) {
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
    function f(e) {
      var t,
        n,
        r = e.protocolMessage,
        a = null;
      return (
        (r == null ? void 0 : r.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT &&
        r != null &&
        r.key
          ? (a = _(r.key))
          : ((t = e.secretEncryptedMessage) == null
              ? void 0
              : t.secretEncType) ===
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT &&
            ((n = e.secretEncryptedMessage) == null
              ? void 0
              : n.targetMessageKey) != null &&
            (a = _(e.secretEncryptedMessage.targetMessageKey)),
        a
      );
    }
    l.encryptAndSendGroupMsg = d;
  },
  98,
);
