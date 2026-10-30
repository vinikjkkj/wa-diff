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
            n = e.mapping,
            a = e.msgInfo,
            i = e.msgMeta;
          h(a, t);
          var l = null;
          if ((i == null ? void 0 : i.origin) === "ctwa") {
            if (!t.isLid())
              throw r("err")("received ctwa message but remote id is not Lid");
            l = t;
          } else if ((i == null ? void 0 : i.targetSenderJid) != null)
            l = o("WAWebLidMigrationUtils").toUserLidOrThrow(
              o("WAWebWidFactory").asUserWidOrThrow(a.chat),
            );
          else if (n == null) {
            var p = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              _ =
                p &&
                (a.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT ||
                  a.type ===
                    o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST ||
                  a.type ===
                    o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST) &&
                a.author.isLid() &&
                t.isLid(),
              f =
                r("justknobx")._("2459") &&
                (a.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT ||
                  a.type ===
                    o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST ||
                  a.type ===
                    o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST) &&
                a.author.isHosted() &&
                a.author.isHostedLid() &&
                t.isLid(),
              g =
                a.author.isFbidBot() &&
                o("WAWebBotUtils").isMaibaAiHubFbid(a.author) &&
                t.isLid(),
              y =
                a.author.isFbidBot() &&
                a.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
                t.isLid() &&
                o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled();
            if (((_ = _ || f || g || y), _))
              l = o("WAWebLidMigrationUtils").toUserLidOrThrow(t);
            else if (a.username != null || a.participantUsername != null) {
              var C = p
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
                      a.externalId,
                    ),
                    a.type,
                    a.author.toLogString(),
                    t.toLogString(),
                  )
                  .sendLogs(C),
                !p)
              )
                l = o("WAWebLidMigrationUtils").toUserLidOrThrow(t);
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
                      a.externalId,
                    ),
                  )
                  .sendLogs("misssing-pn-lid-mapping-in-1-1-message"),
                r("err")(
                  "findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message",
                )
              );
          } else if (n === "missing-peer-recipient-pn") {
            var b;
            if (
              (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "findDestinationChatForSingleMapping: missing peer recipient pn in 1-1 message from device ",
                      "",
                    ])),
                  (b = a.author.device) != null ? b : 0,
                )
                .sendLogs("misssing-peer-recipient-pn-in-1-1-message"),
              t.isLid() &&
                o("WAWebApiContact").lidPnCache.getPhoneNumber(t) != null &&
                (l = t),
              l == null)
            ) {
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "findDestinationChatForSingleMapping: missing peer recipient pn and local mapping, processing message anyway",
                  ])),
              );
              return;
            }
          } else if (n === "missing-peer-recipient-lid") {
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
              (l = o("WAWebApiContact").lidPnCache.getCurrentLid(t)),
              l == null)
            )
              throw r("err")(
                "findDestinationChatForSingleMapping: missing peer recipient lid in 1-1 message",
              );
          } else l = n.lid;
          var v = yield o(
              "WAWebMessageProcessUtils",
            ).selectChatForOneOnOneMessage({ lid: l }),
            S = v.chatId;
          return S.isSameAccountAndAddressingMode(t)
            ? { accountLid: v.accountLid }
            : { newRemote: S, accountLid: v.accountLid };
        })),
        g.apply(this, arguments)
      );
    }
    function h(t, n) {
      !n.isLid() &&
        !n.isHostedLid() &&
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "findDestinationChatForSingleMapping: received PN-addressed 1:1 message ",
              " of type ",
              " in ",
              " from ",
              "",
            ])),
          t.externalId,
          t.type,
          n.toLogString(),
          t.author.toLogString(),
        );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgInfo,
            a = e.msgMeta,
            i = yield o(
              "WAWebProcessPhoneNumberMapping",
            ).processPhoneNumberMappings(t, a, t.offline == null);
          if (t.category !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer) {
            if (t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_STATUS) {
              var l = o("WAWebWidFactory").asUserWidOrThrow(t.author),
                s = o("WAWebWidFactory").asUserWidOrThrow(
                  o("WAWebLidStatusMigrationUtils").matWidConvert(l),
                );
              if (!l.equals(s)) {
                var u;
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "maybeProcessMsgInfoForLid: converting status message from ",
                      " to ",
                      "",
                    ])),
                  t.author.toLogString(),
                  s.toLogString(),
                ),
                  (t.author = o(
                    "WAWebWidFactory",
                  ).createDeviceWidFromUserAndDevice(
                    s.user,
                    s.server,
                    (u = t.author.device) != null
                      ? u
                      : o("WAJids").DEFAULT_DEVICE_ID,
                  )));
              }
              return;
            }
            if (
              t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
            ) {
              if (i.type !== "peer-broadcast")
                throw r("err")(
                  "maybeProcessMsgInfoForLid: mappings type is not the expected peer-broadcast",
                );
              i.type;
              var c = i.mappings.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, n) {
                      var r = t.bclParticipants[n],
                        i = yield f({
                          msgInfo: t,
                          msgMeta: a,
                          mapping: e,
                          chatWid: r.wid,
                        });
                      (i == null ? void 0 : i.newRemote) != null &&
                        ((r.preMatWid = r.wid),
                        (r.wid = o("WAWebWidFactory").asUserWidOrThrow(
                          i.newRemote,
                        )));
                    },
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
              yield (_ || (_ = n("Promise"))).all(c);
            } else {
              if (i.type !== "not-peer-broadcast")
                throw r("err")(
                  "maybeProcessMsgInfoForLid: mappings type is not the expected not-peer-broadcast",
                );
              i.type;
              var d =
                  t.type ===
                  o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST,
                m = d ? t.author : t.chat;
              if (!m.isRegularUser()) return;
              var g = yield f({
                msgInfo: t,
                msgMeta: a,
                mapping: i.mapping,
                chatWid: m,
              });
              if (g == null) return;
              var h = g.accountLid,
                y = g.newRemote;
              if ((h != null && (t.accountLid = h), y == null)) return;
              d
                ? ((t.preMatChat = t.author), (t.author = y))
                : ((t.preMatChat = m), (t.chat = y));
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
