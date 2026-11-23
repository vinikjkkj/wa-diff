__d(
  "WAWebProcessMsgInfoForLid",
  [
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
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    async function _(t) {
      var n = t.chatWid,
        a = t.entryPoint,
        i = t.mapping,
        l = t.msgInfo,
        m = t.msgMeta;
      f({ chatWid: n, entryPoint: a, msgInfo: l });
      var p = null;
      if ((m == null ? void 0 : m.origin) === "ctwa") {
        if (!n.isLid())
          throw r("err")("received ctwa message but remote id is not Lid");
        p = n;
      } else if ((m == null ? void 0 : m.targetSenderJid) != null)
        p = o("WAWebLidMigrationUtils").toUserLidOrThrow(
          o("WAWebWidFactory").asUserWidOrThrow(l.chat),
        );
      else if (i == null) {
        var _ = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
          g =
            _ &&
            (l.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT ||
              l.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST ||
              l.type ===
                o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST) &&
            l.author.isLid() &&
            n.isLid(),
          h =
            r("justknobx")._("2459") &&
            (l.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT ||
              l.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST ||
              l.type ===
                o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST) &&
            l.author.isHosted() &&
            l.author.isHostedLid() &&
            n.isLid(),
          y =
            l.author.isFbidBot() &&
            o("WAWebBotUtils").isMaibaAiHubFbid(l.author) &&
            n.isLid(),
          C =
            l.author.isFbidBot() &&
            l.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
            n.isLid() &&
            o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled();
        if (((g = g || h || y || C), g))
          p = o("WAWebLidMigrationUtils").toUserLidOrThrow(n);
        else if (l.username != null || l.participantUsername != null) {
          var b = _
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
                  l.externalId,
                ),
                l.type,
                l.author.toLogString(),
                n.toLogString(),
              )
              .sendLogs(b),
            !_)
          )
            p = o("WAWebLidMigrationUtils").toUserLidOrThrow(n);
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
                  l.externalId,
                ),
              )
              .sendLogs("misssing-pn-lid-mapping-in-1-1-message"),
            r("err")(
              "findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message",
            )
          );
      } else if (i === "missing-peer-recipient-pn") {
        var v;
        if (
          (o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "findDestinationChatForSingleMapping: missing peer recipient pn in 1-1 message from device ",
                  "",
                ])),
              (v = l.author.device) != null ? v : 0,
            )
            .sendLogs("misssing-peer-recipient-pn-in-1-1-message"),
          n.isLid() &&
            o("WAWebApiContact").lidPnCache.getPhoneNumber(n) != null &&
            (p = n),
          p == null)
        ) {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "findDestinationChatForSingleMapping: missing peer recipient pn and local mapping, processing message anyway",
              ])),
          );
          return;
        }
      } else if (i === "missing-peer-recipient-lid") {
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
          (p = o("WAWebApiContact").lidPnCache.getCurrentLid(n)),
          p == null)
        )
          throw r("err")(
            "findDestinationChatForSingleMapping: missing peer recipient lid in 1-1 message",
          );
      } else p = i.lid;
      var S = await o("WAWebMessageProcessUtils").selectChatForOneOnOneMessage({
          lid: p,
        }),
        R = S.chatId;
      return R.isSameAccountAndAddressingMode(n)
        ? { accountLid: S.accountLid }
        : { newRemote: R, accountLid: S.accountLid };
    }
    function f(e) {
      var t = e.chatWid,
        n = e.entryPoint,
        r = e.msgInfo;
      n !== "reparse-futureproof-msg" &&
        n !== "pq-handle-message" &&
        !t.isLid() &&
        !t.isHostedLid() &&
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "findDestinationChatForSingleMapping: received PN-addressed 1:1 message ",
                " of type ",
                " in ",
                " from ",
                ", sender: ",
                ", entry point: ",
                "",
              ])),
            r.externalId,
            r.type,
            t.toLogString(),
            r.author.toLogString(),
            o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(
              r.externalId,
            ),
            n,
          )
          .sendLogs("pn-addressed-1-1-message");
    }
    async function g(e) {
      var t = e.deferredWrites,
        n = e.entryPoint,
        a = e.msgInfo,
        i = e.msgMeta,
        l = await o(
          "WAWebProcessPhoneNumberMapping",
        ).processPhoneNumberMappings(a, i, a.offline == null, t);
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
              (a.author = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                u.user,
                u.server,
                (c = a.author.device) != null
                  ? c
                  : o("WAJids").DEFAULT_DEVICE_ID,
              )));
          }
          return;
        }
        if (a.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST) {
          if (l.type !== "peer-broadcast")
            throw r("err")(
              "maybeProcessMsgInfoForLid: mappings type is not the expected peer-broadcast",
            );
          l.type;
          var d = l.mappings.map(async function (e, t) {
            var r = a.bclParticipants[t],
              l = await _({
                msgInfo: a,
                msgMeta: i,
                mapping: e,
                chatWid: r.wid,
                entryPoint: n,
              });
            (l == null ? void 0 : l.newRemote) != null &&
              ((r.preMatWid = r.wid),
              (r.wid = o("WAWebWidFactory").asUserWidOrThrow(l.newRemote)));
          });
          await Promise.all(d);
        } else {
          if (l.type !== "not-peer-broadcast")
            throw r("err")(
              "maybeProcessMsgInfoForLid: mappings type is not the expected not-peer-broadcast",
            );
          l.type;
          var m =
              a.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST,
            f = m ? a.author : a.chat;
          if (!f.isRegularUser()) return;
          var g = await _({
            msgInfo: a,
            msgMeta: i,
            mapping: l.mapping,
            chatWid: f,
            entryPoint: n,
          });
          if (g == null) return;
          var h = g.accountLid,
            y = g.newRemote;
          if ((h != null && (a.accountLid = h), y == null)) return;
          m
            ? ((a.preMatChat = a.author), (a.author = y))
            : ((a.preMatChat = f), (a.chat = y));
        }
      }
    }
    l.maybeProcessMsgInfoForLid = g;
  },
  98,
);
