__d(
  "WAWebRetryRequestChatResolution",
  [
    "WALogger",
    "WAWebAddonRetryRequestUtils",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebMsgKey",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebUserUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(t) {
      var n,
        a,
        i,
        l = f(t);
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "getActualChatInfo: retry request from ",
              ", target chat: ",
              ", type: ",
              `,
      participant: `,
              ", recipient: ",
              "",
            ])),
          t.from.toLogString(),
          (n = l) == null ? void 0 : n.toLogString(),
          t.type,
          (a = t.participant) == null ? void 0 : a.toLogString(),
          (i = t.recipient) == null ? void 0 : i.toLogString(),
        ),
        l == null)
      )
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "getActualChatInfo: no target chat found",
              ])),
          ),
          { error: "no_target_chat" }
        );
      if (
        ((l = o(
          "WAWebSimpleSignalPNToFBIDMigration",
        ).maybeReplaceFbidWithDeprecatedBotPn(l)),
        (l = o("WAWebMaibaWASSMigration").resolveMaibaAiHubFbidToLidOrChatId(
          l,
        )),
        l.isUser())
      ) {
        var d;
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "getActualChatInfo: this is a user chat",
            ])),
        );
        var m = new (r("WAWebMsgKey"))({
            fromMe: !0,
            remote: l,
            id: t.originalMsgId,
          }),
          p = [m, o("WAWebLidMigrationUtils").getAlternateMsgKey(m)].filter(
            Boolean,
          ),
          h;
        if (t.type === "retry") {
          var y = await _(p, t.originalMsgId);
          if (y == null)
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getActualChatInfo: could not find messages",
                  ])),
              ),
              { error: g(t) }
            );
          h = y;
        } else (t.type, (h = t.from));
        var C;
        if (t.from.isBot()) C = t.from;
        else {
          var b = o("WAWebWidFactory").asUserWidOrThrow(t.from);
          C = h.isLid()
            ? o("WAWebLidMigrationUtils").toLid(b)
            : o("WAWebLidMigrationUtils").toPn(b);
        }
        if (C == null) return { error: "empty_from_user" };
        var v = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
            C.user,
            C.server,
            (d = t.from.device) != null ? d : 0,
          ),
          S = await o("WAWebSchemaChat").getChatTable().get(h.toString()),
          R = S == null ? void 0 : S.lidOriginType,
          L =
            (S == null ? void 0 : S.accountLid) != null
              ? o("WAWebWidFactory").createWidFromWidLike(S.accountLid)
              : void 0;
        return { chat: h, from: v, lidOrigin: R, accountLid: L };
      }
      return { chat: l, from: t.from };
    }
    async function _(e, t) {
      var n,
        r = (
          await o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkGet(
              e.map(function (e) {
                return e.toString();
              }),
              !1,
            )
        ).filter(Boolean);
      if (
        (r.length > 1 &&
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "getActualChatInfo: multiple messages found",
              ])),
          ),
        r.length > 0)
      )
        return o("WAWebWidFactory").createWidFromWidLike(r[0].to);
      var a = await Promise.all(
        e.map(function (e) {
          return o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(e);
        }),
      );
      return (n = a.find(Boolean)) == null ? void 0 : n.msgData.id.remote;
    }
    function f(e) {
      var t = e.from,
        n = e.recipient;
      if (t.isBot() && n != null) return n;
      if (t.isUser()) {
        var r = o("WAWebWidFactory").asUserWidOrThrow(t);
        if (o("WAWebUserUtils").isMeAccount(r)) {
          if (!n) {
            var a;
            return (
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "getTargetChat: from is a peer device, but without recipient, isLid: ",
                    ", peer device: ",
                    ", retryCount: ",
                    ", hasKeyBundle: ",
                    "",
                  ])),
                t.isLid(),
                (a = t.device) != null ? a : "primary",
                e.retryCount,
                e.keyBundle != null,
              ),
              null
            );
          }
          return n;
        }
        return o("WAWebWidFactory").asUserWidOrThrow(r);
      }
      return t;
    }
    function g(e) {
      return e.from.isGroup()
        ? o("WAWebUserUtils").isMeAccount(e.participant)
          ? "did_not_find_group_message_from_self"
          : "did_not_find_group_message_from_remote"
        : e.from.isUser()
          ? o("WAWebUserUtils").isMeAccount(e.from)
            ? e.from.device === 0 || e.from.device == null
              ? "did_not_find_1on1_message_from_self_primary"
              : "did_not_find_1on1_message_from_self_companion"
            : "did_not_find_1on1_message_from_remote"
          : "did_not_find_message_other";
    }
    ((l.getActualChatInfo = p),
      (l.getTargetChat = f),
      (l.selectRetryErrorType = g));
  },
  98,
);
