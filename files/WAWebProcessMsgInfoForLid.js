__d(
  "WAWebProcessMsgInfoForLid",
  [
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
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t) {
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
                o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST) &&
            i.author.isLid() &&
            n.isLid(),
          g =
            r("justknobx")._("2459") &&
            (i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT ||
              i.type ===
                o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST ||
              i.type ===
                o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST) &&
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
      var y = await o("WAWebMessageProcessUtils").selectChatForOneOnOneMessage({
          lid: d,
          lidOrigin: m,
        }),
        C = y.chatId;
      return C.isSameAccountAndAddressingMode(n)
        ? { accountLid: y.accountLid }
        : { newRemote: C, accountLid: y.accountLid };
    }
    async function p(e) {
      var t = e.msgInfo,
        n = e.msgMeta,
        a = await o(
          "WAWebProcessPhoneNumberMapping",
        ).processPhoneNumberMappings(t, n, t.offline == null);
      if (t.category !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer) {
        if (
          t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS
        ) {
          var i = o("WAWebWidFactory").asUserWidOrThrow(t.author),
            l = o("WAWebWidFactory").asUserWidOrThrow(
              o("WAWebLidStatusMigrationUtils").matWidConvert(i),
            );
          if (!i.equals(l)) {
            var s;
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "maybeProcesMsgInfoForLid: converting status message from ",
                  " to ",
                  "",
                ])),
              t.author.toLogString(),
              l.toLogString(),
            ),
              (t.author = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                l.user,
                l.server,
                (s = t.author.device) != null
                  ? s
                  : o("WAJids").DEFAULT_DEVICE_ID,
              )));
          }
          return;
        }
        var u =
          o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated() ||
          t.author.isLid() ||
          t.chat.isLid();
        if (u)
          if (
            t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
          ) {
            if (a.type !== "peer-broadcast")
              throw r("err")(
                "maybeProcesMsgInfoForLid: mappings type is not the expected peer-broadcast",
              );
            a.type;
            var c = a.mappings.map(async function (e, r) {
              var a = t.bclParticipants[r],
                i = await m({
                  msgInfo: t,
                  msgMeta: n,
                  mapping: e,
                  chatWid: a.wid,
                });
              (i == null ? void 0 : i.newRemote) != null &&
                ((a.preMatWid = a.wid),
                (a.wid = o("WAWebWidFactory").asUserWidOrThrow(i.newRemote)));
            });
            await Promise.all(c);
          } else {
            if (a.type !== "not-peer-broadcast")
              throw r("err")(
                "maybeProcesMsgInfoForLid: mappings type is not the expected not-peer-broadcast",
              );
            a.type;
            var p =
                t.type ===
                o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST,
              _ = p ? t.author : t.chat;
            if (!_.isRegularUser()) return;
            var f = await m({
              msgInfo: t,
              msgMeta: n,
              mapping: a.mapping,
              chatWid: _,
            });
            if (f == null) return;
            var g = f.accountLid,
              h = f.newRemote;
            if ((g != null && (t.accountLid = g), h == null)) return;
            p
              ? ((t.preMatChat = t.author), (t.author = h))
              : ((t.preMatChat = _), (t.chat = h));
          }
      }
    }
    l.maybeProcesMsgInfoForLid = p;
  },
  98,
);
