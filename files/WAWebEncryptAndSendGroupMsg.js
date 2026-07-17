__d(
  "WAWebEncryptAndSendGroupMsg",
  [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebE2EProtoGenerator",
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
            var e, t, n, r, y, C;
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
            var b = m(i),
              v = f(i),
              S = p(i),
              R = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
                h.toString(),
              ),
              L = yield o("WAWebGroupMsgSendUtils").getGroupData(
                h.toString(),
                R,
                l,
              );
            ((n = a.sendReporter) == null || n.setGroupData(L),
              (r = a.sendPerfReporter) == null || r.setGroupData(L));
            var E =
                (y =
                  R == null
                    ? void 0
                    : R.participants.map(function (e) {
                        return o("WAWebWidFactory").createUserWidOrThrow(e);
                      })) != null
                  ? y
                  : [],
              k = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(_, E),
              I = !!L.isLidAddressingMode,
              T;
            if (L.isCag === !0) {
              var D,
                x = !!L.amIAdmin;
              o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: CAG ",
                      " ",
                    ])),
                  x ? "admin" : "non-admin",
                )
                .tags("messaging");
              var $ =
                i == null ||
                (D = i.messageHistoryBundle) == null ||
                (D = D.messageHistoryMetadata) == null
                  ? void 0
                  : D.historyReceivers;
              if ($ != null && $.length > 0) {
                var P = yield o(
                    "WAWebApiParticipantStore",
                  ).getGroupSenderKeyListFromParticipantRecord(h, R),
                  N = function (t) {
                    return t.map(
                      o("WAWebLidMigrationUtils").toAddressingModeFactory(I),
                    );
                  },
                  M = yield o(
                    "WAWebGroupHistorySendGroupMsgJobUtils",
                  ).getGroupSendListForGroupHistoryBundle(
                    $.map(o("WAWebWidFactory").createWid),
                    P,
                    { normalizeAddressingModeFn: N, isLidAddressingMode: I },
                  );
                T = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                  M,
                  L,
                );
              } else
                T = yield o("WAWebSendGroupMsgJob").getCagMessageSendList(
                  l,
                  h,
                  b,
                  S,
                  v,
                  x,
                  R,
                  I,
                );
            } else {
              var w;
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: ",
                      " group size: ",
                      "",
                    ])),
                  o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(L),
                  R == null ? void 0 : R.participants.length,
                )
                .tags("messaging");
              var A = yield o("WAWebSendGroupMsgJob").getMessageSendList(
                h,
                R,
                b,
                v,
                I,
                i == null ||
                  (w = i.messageHistoryBundle) == null ||
                  (w = w.messageHistoryMetadata) == null
                  ? void 0
                  : w.historyReceivers,
              );
              T = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                A,
                L,
              );
            }
            var F =
              (L == null ? void 0 : L.isCapiGroup) === !0
                ? o("WAWebE2EProtoGenerator").updateGroupMsgProtoWithCapiFlag(i)
                : i;
            if (T.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT) {
              var O,
                B,
                W = T,
                q = W.deviceList;
              return (
                (O = a.sendReporter) == null || O.setDeviceCount(q.length),
                (B = a.sendPerfReporter) == null || B.setIsDirectedMessage(!0),
                o("WAWebSendGroupDirectJob").encryptAndSendGroupDirectMsg(
                  l,
                  F,
                  q,
                  L,
                  a,
                  d,
                )
              );
            }
            var U = T,
              V = U.senderKeyList;
            return (
              (C = a.sendReporter) == null ||
                C.setDeviceCount(V.skList.length + V.skDistribList.length),
              o("WAWebSendGroupSkmsgJob").encryptAndSendSenderKeyMsg(
                l,
                F,
                V,
                L,
                a,
                k,
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
