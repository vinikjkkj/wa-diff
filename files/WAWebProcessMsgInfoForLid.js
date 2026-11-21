__d(
  "WAWebProcessMsgInfoForLid",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebApiContact",
    "WAWebBotUtils",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebGetPlatformFromStanzaId",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes",
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebMessageProcessUtils",
    "WAWebProcessPhoneNumberMapping",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatWid,
            n = e.entryPoint,
            a = e.mapping,
            i = e.msgInfo,
            l = e.msgMeta;
          h({ chatWid: t, entryPoint: n, msgInfo: i });
          var p = null;
          if ((l == null ? void 0 : l.origin) === "ctwa") {
            if (!t.isLid())
              throw r("err")("received ctwa message but remote id is not Lid");
            p = t;
          } else if ((l == null ? void 0 : l.targetSenderJid) != null)
            p = o("WAWebLidMigrationUtils").toUserLidOrThrow(
              o("WAWebWidFactory").asUserWidOrThrow(i.chat),
            );
          else if (a == null) {
            var _ = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              f =
                _ &&
                (i.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT ||
                  i.type ===
                    o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST ||
                  i.type ===
                    o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST) &&
                i.author.isLid() &&
                t.isLid(),
              g =
                r("justknobx")._("2459") &&
                (i.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT ||
                  i.type ===
                    o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST ||
                  i.type ===
                    o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST) &&
                i.author.isHosted() &&
                i.author.isHostedLid() &&
                t.isLid(),
              y =
                i.author.isFbidBot() &&
                o("WAWebBotUtils").isMaibaAiHubFbid(i.author) &&
                t.isLid(),
              C =
                i.author.isFbidBot() &&
                i.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
                t.isLid() &&
                o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled();
            if (((f = f || g || y || C), f))
              p = o("WAWebLidMigrationUtils").toUserLidOrThrow(t);
            else if (i.username != null || i.participantUsername != null) {
              var b = _
                ? "missing-pn-lid-mapping-in-1-1-message-with-username-UN-enabled"
                : "missing-pn-lid-mapping-in-1-1-message-with-username-UN-off";
              if (
                (o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message with username, sender: ",
                        ", type: ",
                        ", author: ",
                        ", chatWid: ",
                        "",
                      ])),
                    o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(
                      i.externalId,
                    ),
                    i.type,
                    i.author.toLogString(),
                    t.toLogString(),
                  )
                  .sendLogs(b),
                !_)
              )
                p = o("WAWebLidMigrationUtils").toUserLidOrThrow(t);
              else
                throw r("err")(
                  "findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message",
                );
            } else
              throw (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message, sender: ",
                        "",
                      ])),
                    o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(
                      i.externalId,
                    ),
                  )
                  .sendLogs("misssing-pn-lid-mapping-in-1-1-message"),
                r("err")(
                  "findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message",
                )
              );
          } else if (a === "missing-peer-recipient-pn") {
            var v;
            if (
              (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "findDestinationChatForSingleMapping: missing peer recipient pn in 1-1 message from device ",
                      "",
                    ])),
                  (v = i.author.device) != null ? v : 0,
                )
                .sendLogs("misssing-peer-recipient-pn-in-1-1-message"),
              t.isLid() &&
                o("WAWebApiContact").lidPnCache.getPhoneNumber(t) != null &&
                (p = t),
              p == null)
            ) {
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "findDestinationChatForSingleMapping: missing peer recipient pn and local mapping, processing message anyway",
                  ])),
              );
              return;
            }
          } else if (a === "missing-peer-recipient-lid") {
            if (
              (o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "findDestinationChatForSingleMapping: missing peer recipient lid in 1-1 message",
                    ])),
                )
                .sendLogs("misssing-peer-recipient-lid-in-1-1-message"),
              o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                "syncContactListJob",
                { contactIds: [t], shouldSyncDevice: !1, mode: "query" },
              ),
              (p = o("WAWebApiContact").lidPnCache.getCurrentLid(t)),
              p == null)
            )
              throw r("err")(
                "findDestinationChatForSingleMapping: missing peer recipient lid in 1-1 message",
              );
          } else p = a.lid;
          var S = yield o(
              "WAWebMessageProcessUtils",
            ).selectChatForOneOnOneMessage({ lid: p }),
            R = S.chatId;
          return R.isSameAccountAndAddressingMode(t)
            ? { accountLid: S.accountLid }
            : { newRemote: R, accountLid: S.accountLid };
        })),
        g.apply(this, arguments)
      );
    }
    function h(t) {
      var n = t.chatWid,
        r = t.entryPoint,
        a = t.msgInfo;
      r !== "reparse-futureproof-msg" &&
        r !== "pq-handle-message" &&
        !n.isLid() &&
        !n.isHostedLid() &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "findDestinationChatForSingleMapping: received PN-addressed 1:1 message ",
                " of type ",
                " in ",
                " from ",
                ", sender: ",
                ", entry point: ",
                "",
              ])),
            a.externalId,
            a.type,
            n.toLogString(),
            a.author.toLogString(),
            o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(
              a.externalId,
            ),
            r,
          )
          .sendLogs("pn-addressed-1-1-message");
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deferredWrites,
            a = e.entryPoint,
            i = e.msgInfo,
            l = e.msgMeta,
            s = yield o(
              "WAWebProcessPhoneNumberMapping",
            ).processPhoneNumberMappings(i, l, i.offline == null, t);
          if (i.category !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer) {
            if (i.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_STATUS) {
              var u = o("WAWebWidFactory").asUserWidOrThrow(i.author),
                c = o("WAWebWidFactory").asUserWidOrThrow(
                  o("WAWebLidStatusMigrationUtils").matWidConvert(u),
                );
              if (!u.equals(c)) {
                var d;
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "maybeProcessMsgInfoForLid: converting status message from ",
                      " to ",
                      "",
                    ])),
                  i.author.toLogString(),
                  c.toLogString(),
                ),
                  (i.author = o(
                    "WAWebWidFactory",
                  ).createDeviceWidFromUserAndDevice(
                    c.user,
                    c.server,
                    (d = i.author.device) != null
                      ? d
                      : o("WAJids").DEFAULT_DEVICE_ID,
                  )));
              }
              return;
            }
            if (
              i.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
            ) {
              if (s.type !== "peer-broadcast")
                throw r("err")(
                  "maybeProcessMsgInfoForLid: mappings type is not the expected peer-broadcast",
                );
              s.type;
              var m = s.mappings.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, t) {
                      var n = i.bclParticipants[t],
                        r = yield f({
                          msgInfo: i,
                          msgMeta: l,
                          mapping: e,
                          chatWid: n.wid,
                          entryPoint: a,
                        });
                      (r == null ? void 0 : r.newRemote) != null &&
                        ((n.preMatWid = n.wid),
                        (n.wid = o("WAWebWidFactory").asUserWidOrThrow(
                          r.newRemote,
                        )));
                    },
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
              yield (_ || (_ = n("Promise"))).all(m);
            } else {
              if (s.type !== "not-peer-broadcast")
                throw r("err")(
                  "maybeProcessMsgInfoForLid: mappings type is not the expected not-peer-broadcast",
                );
              s.type;
              var g =
                  i.type ===
                  o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST,
                h = g ? i.author : i.chat;
              if (!h.isRegularUser()) return;
              var y = yield f({
                msgInfo: i,
                msgMeta: l,
                mapping: s.mapping,
                chatWid: h,
                entryPoint: a,
              });
              if (y == null) return;
              var C = y.accountLid,
                b = y.newRemote;
              if ((C != null && (i.accountLid = C), b == null)) return;
              g
                ? ((i.preMatChat = i.author), (i.author = b))
                : ((i.preMatChat = h), (i.chat = b));
            }
          }
        })),
        C.apply(this, arguments)
      );
    }
    l.maybeProcessMsgInfoForLid = y;
  },
  98,
);
