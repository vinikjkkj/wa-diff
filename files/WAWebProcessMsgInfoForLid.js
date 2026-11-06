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
          var t = e.entryPoint,
            a = e.msgInfo,
            i = e.msgMeta,
            l = yield o(
              "WAWebProcessPhoneNumberMapping",
            ).processPhoneNumberMappings(a, i, a.offline == null);
          if (a.category !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer) {
            if (a.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_STATUS) {
              var s = o("WAWebWidFactory").asUserWidOrThrow(a.author),
                u = o("WAWebWidFactory").asUserWidOrThrow(
                  o("WAWebLidStatusMigrationUtils").matWidConvert(s),
                );
              if (!s.equals(u)) {
                var c;
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "maybeProcessMsgInfoForLid: converting status message from ",
                      " to ",
                      "",
                    ])),
                  a.author.toLogString(),
                  u.toLogString(),
                ),
                  (a.author = o(
                    "WAWebWidFactory",
                  ).createDeviceWidFromUserAndDevice(
                    u.user,
                    u.server,
                    (c = a.author.device) != null
                      ? c
                      : o("WAJids").DEFAULT_DEVICE_ID,
                  )));
              }
              return;
            }
            if (
              a.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
            ) {
              if (l.type !== "peer-broadcast")
                throw r("err")(
                  "maybeProcessMsgInfoForLid: mappings type is not the expected peer-broadcast",
                );
              l.type;
              var d = l.mappings.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, n) {
                      var r = a.bclParticipants[n],
                        l = yield f({
                          msgInfo: a,
                          msgMeta: i,
                          mapping: e,
                          chatWid: r.wid,
                          entryPoint: t,
                        });
                      (l == null ? void 0 : l.newRemote) != null &&
                        ((r.preMatWid = r.wid),
                        (r.wid = o("WAWebWidFactory").asUserWidOrThrow(
                          l.newRemote,
                        )));
                    },
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
              yield (_ || (_ = n("Promise"))).all(d);
            } else {
              if (l.type !== "not-peer-broadcast")
                throw r("err")(
                  "maybeProcessMsgInfoForLid: mappings type is not the expected not-peer-broadcast",
                );
              l.type;
              var m =
                  a.type ===
                  o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST,
                g = m ? a.author : a.chat;
              if (!g.isRegularUser()) return;
              var h = yield f({
                msgInfo: a,
                msgMeta: i,
                mapping: l.mapping,
                chatWid: g,
                entryPoint: t,
              });
              if (h == null) return;
              var y = h.accountLid,
                C = h.newRemote;
              if ((y != null && (a.accountLid = y), C == null)) return;
              m
                ? ((a.preMatChat = a.author), (a.author = C))
                : ((a.preMatChat = g), (a.chat = C));
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
