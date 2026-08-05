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
    "WAWebHandleMsgTypes.flow",
    "WAWebLid1X1MigrationGating",
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
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chatWid,
            a = t.mapping,
            i = t.msgInfo,
            l = t.msgMeta,
            m = null,
            p = l == null ? void 0 : l.origin,
            _ = p === "ctwa";
          if (_) {
            if (!n.isLid())
              throw r("err")("received ctwa message but remote id is not Lid");
            m = n;
          } else if ((l == null ? void 0 : l.targetSenderJid) != null)
            m = o("WAWebLidMigrationUtils").toUserLidOrThrow(
              o("WAWebWidFactory").asUserWidOrThrow(i.chat),
            );
          else if (a == null) {
            var f = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              g =
                f &&
                (i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT ||
                  i.type ===
                    o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST ||
                  i.type ===
                    o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                      .OTHER_BROADCAST) &&
                i.author.isLid() &&
                n.isLid(),
              h =
                r("justknobx")._("2459") &&
                (i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT ||
                  i.type ===
                    o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST ||
                  i.type ===
                    o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                      .OTHER_BROADCAST) &&
                i.author.isHosted() &&
                i.author.isHostedLid() &&
                n.isLid(),
              y =
                i.author.isFbidBot() &&
                o("WAWebBotUtils").isMaibaAiHubFbid(i.author) &&
                n.isLid(),
              C =
                i.author.isFbidBot() &&
                i.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
                n.isLid() &&
                o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled();
            if (((g = g || h || y || C), g))
              m = o("WAWebLidMigrationUtils").toUserLidOrThrow(n);
            else if (i.username != null || i.participantUsername != null) {
              var b = f
                ? "missing-pn-lid-mapping-in-1-1-message-with-username-UN-enabled"
                : "missing-pn-lid-mapping-in-1-1-message-with-username-UN-off";
              if (
                (o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
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
                    n.toLogString(),
                  )
                  .sendLogs(b),
                !f)
              )
                m = o("WAWebLidMigrationUtils").toUserLidOrThrow(n);
              else
                throw r("err")(
                  "findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message",
                );
            } else
              throw (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "findDestinationChatForSingleMapping: missing peer recipient pn in 1-1 message from device ",
                      "",
                    ])),
                  (v = i.author.device) != null ? v : 0,
                )
                .sendLogs("misssing-peer-recipient-pn-in-1-1-message"),
              n.isLid() &&
                o("WAWebApiContact").lidPnCache.getPhoneNumber(n) != null &&
                (m = n),
              m == null)
            ) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "findDestinationChatForSingleMapping: missing peer recipient pn and local mapping, processing message anyway",
                  ])),
              );
              return;
            }
          } else if (a === "missing-peer-recipient-lid") {
            if (
              (o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "findDestinationChatForSingleMapping: missing peer recipient lid in 1-1 message",
                    ])),
                )
                .sendLogs("misssing-peer-recipient-lid-in-1-1-message"),
              o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                "syncContactListJob",
                { contactIds: [n], shouldSyncDevice: !1, mode: "query" },
              ),
              (m = o("WAWebApiContact").lidPnCache.getCurrentLid(n)),
              m == null)
            )
              throw r("err")(
                "findDestinationChatForSingleMapping: missing peer recipient lid in 1-1 message",
              );
          } else m = a.lid;
          var S = yield o(
              "WAWebMessageProcessUtils",
            ).selectChatForOneOnOneMessage({ lid: m, lidOrigin: p }),
            R = S.chatId;
          return R.isSameAccountAndAddressingMode(n)
            ? { accountLid: S.accountLid }
            : { newRemote: R, accountLid: S.accountLid };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgInfo,
            a = e.msgMeta,
            i = yield o(
              "WAWebProcessPhoneNumberMapping",
            ).processPhoneNumberMappings(t, a, t.offline == null);
          if (t.category !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer) {
            if (
              t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS
            ) {
              var l = o("WAWebWidFactory").asUserWidOrThrow(t.author),
                s = o("WAWebWidFactory").asUserWidOrThrow(
                  o("WAWebLidStatusMigrationUtils").matWidConvert(l),
                );
              if (!l.equals(s)) {
                var u;
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
            var c =
              o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() ||
              t.author.isLid() ||
              t.chat.isLid();
            if (c)
              if (
                t.type ===
                o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
              ) {
                if (i.type !== "peer-broadcast")
                  throw r("err")(
                    "maybeProcessMsgInfoForLid: mappings type is not the expected peer-broadcast",
                  );
                i.type;
                var d = i.mappings.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e, n) {
                        var r = t.bclParticipants[n],
                          i = yield _({
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
                yield (p || (p = n("Promise"))).all(d);
              } else {
                if (i.type !== "not-peer-broadcast")
                  throw r("err")(
                    "maybeProcessMsgInfoForLid: mappings type is not the expected not-peer-broadcast",
                  );
                i.type;
                var f =
                    t.type ===
                    o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST,
                  g = f ? t.author : t.chat;
                if (!g.isRegularUser()) return;
                var h = yield _({
                  msgInfo: t,
                  msgMeta: a,
                  mapping: i.mapping,
                  chatWid: g,
                });
                if (h == null) return;
                var y = h.accountLid,
                  C = h.newRemote;
                if ((y != null && (t.accountLid = y), C == null)) return;
                f
                  ? ((t.preMatChat = t.author), (t.author = C))
                  : ((t.preMatChat = g), (t.chat = C));
              }
          }
        })),
        h.apply(this, arguments)
      );
    }
    l.maybeProcessMsgInfoForLid = g;
  },
  98,
);
