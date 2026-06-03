__d(
  "WAWebProcessMsgInfoForLid",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebApiContact",
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
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chatWid,
            a = t.mapping,
            i = t.msgInfo,
            l = t.msgMeta,
            d = null,
            m = l == null ? void 0 : l.origin,
            p = m === "ctwa";
          if (p) {
            if (!n.isLid())
              throw r("err")("received ctwa message but remote id is not Lid");
            d = n;
          } else if ((l == null ? void 0 : l.targetSenderJid) != null)
            d = o("WAWebLidMigrationUtils").toUserLidOrThrow(
              o("WAWebWidFactory").asUserWidOrThrow(i.chat),
            );
          else if (a == null) {
            var _ = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              f =
                _ &&
                (i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT ||
                  i.type ===
                    o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST ||
                  i.type ===
                    o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                      .OTHER_BROADCAST) &&
                i.author.isLid() &&
                n.isLid(),
              g =
                r("justknobx")._("2459") &&
                (i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT ||
                  i.type ===
                    o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST ||
                  i.type ===
                    o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                      .OTHER_BROADCAST) &&
                i.author.isHosted() &&
                i.author.isHostedLid() &&
                n.isLid();
            if (((f = f || g), f))
              d = o("WAWebLidMigrationUtils").toUserLidOrThrow(n);
            else
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
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
            var h;
            if (
              (o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "findDestinationChatForSingleMapping: missing peer recipient pn in 1-1 message from device ",
                      "",
                    ])),
                  (h = i.author.device) != null ? h : 0,
                )
                .sendLogs("misssing-peer-recipient-pn-in-1-1-message"),
              n.isLid() &&
                o("WAWebApiContact").lidPnCache.getPhoneNumber(n) != null &&
                (d = n),
              d == null)
            ) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "findDestinationChatForSingleMapping: missing peer recipient pn and local mapping, processing message anyway",
                  ])),
              );
              return;
            }
          } else if (a === "missing-peer-recipient-lid") {
            if (
              (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "findDestinationChatForSingleMapping: missing peer recipient lid in 1-1 message",
                    ])),
                )
                .sendLogs("misssing-peer-recipient-lid-in-1-1-message"),
              o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                "syncContactListJob",
                { contactIds: [n], shouldSyncDevice: !1, mode: "query" },
              ),
              (d = o("WAWebApiContact").lidPnCache.getCurrentLid(n)),
              d == null)
            )
              throw r("err")(
                "findDestinationChatForSingleMapping: missing peer recipient lid in 1-1 message",
              );
          } else d = a.lid;
          var y = yield o(
              "WAWebMessageProcessUtils",
            ).selectChatForOneOnOneMessage({ lid: d, lidOrigin: m }),
            C = y.chatId;
          return C.isSameAccountAndAddressingMode(n)
            ? { accountLid: y.accountLid }
            : { newRemote: C, accountLid: y.accountLid };
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "maybeProcesMsgInfoForLid: converting status message from ",
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
                    "maybeProcesMsgInfoForLid: mappings type is not the expected peer-broadcast",
                  );
                i.type;
                var _ = i.mappings.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e, n) {
                        var r = t.bclParticipants[n],
                          i = yield p({
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
                yield (m || (m = n("Promise"))).all(_);
              } else {
                if (i.type !== "not-peer-broadcast")
                  throw r("err")(
                    "maybeProcesMsgInfoForLid: mappings type is not the expected not-peer-broadcast",
                  );
                i.type;
                var f =
                    t.type ===
                    o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST,
                  g = f ? t.author : t.chat;
                if (!g.isRegularUser()) return;
                var h = yield p({
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
        g.apply(this, arguments)
      );
    }
    l.maybeProcesMsgInfoForLid = f;
  },
  98,
);
