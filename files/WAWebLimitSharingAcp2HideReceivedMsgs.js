__d(
  "WAWebLimitSharingAcp2HideReceivedMsgs",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebCommonMsgUtils",
    "WAWebHandleMsgTypes",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgDataUtils",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new Set([
        (d = o("WAWebProtobufsE2E.pb")).Message$ProtocolMessage$Type
          .ACP2_SETTING,
        d.Message$ProtocolMessage$Type.LIMIT_SHARING,
        d.Message$ProtocolMessage$Type.REVOKE,
        d.Message$ProtocolMessage$Type.EPHEMERAL_SETTING,
        d.Message$ProtocolMessage$Type.EPHEMERAL_SYNC_RESPONSE,
      ]),
      p = new Set([
        o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT,
        o("WAWebHandleMsgTypes").MESSAGE_TYPE.GROUP,
      ]),
      _ = 5e3;
    async function f(t) {
      var n = t.messageType,
        r = t.msgs,
        a = t.proto;
      if (
        !p.has(n) ||
        r.length === 0 ||
        !o("WAWebLimitSharingGatingUtils").isAcp2Enabled() ||
        (a != null && v(a))
      )
        return r;
      var i = r[0].id.remote;
      if (!(await y(i))) return r;
      var l = S(r);
      return (
        l != null && (await R(i.toString(), l)),
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[acp2] hid ",
                " message(s) received in a restricted chat",
              ])),
            r.length,
          )
          .sendLogs("acp2-restricted-chat-msg-hidden", { sampling: 0.01 }),
        []
      );
    }
    async function g(e) {
      var t = e.chatWid,
        n = e.messageType,
        r = e.t;
      return !p.has(n) ||
        !o("WAWebLimitSharingGatingUtils").isAcp2Enabled() ||
        !(await y(t))
        ? !1
        : (await R(t.toString(), r),
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[acp2] hid a scheduled message received in a restricted chat",
                ])),
            )
            .sendLogs("acp2-restricted-chat-msg-hidden", { sampling: 0.01 }),
          !0);
    }
    async function h(e) {
      var t = e.chatWid,
        n = e.messageType;
      return !p.has(n) || !o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? !1
        : y(t);
    }
    async function y(e) {
      var t = e.toString(),
        n = await b(t),
        r = n
          ? o("WAWebLimitSharingProtoUtils").getPendingLimitSharingUpdate(t)
          : o("WAWebLimitSharingProtoUtils").getPendingAcp2Update(t);
      return (!n && r == null) ||
        !o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(e)
        ? !1
        : r == null
          ? !0
          : C(t, r);
    }
    async function C(e, t) {
      return (
        await o("WAPromiseTimeout")
          .promiseTimeout(t, _)
          .catch(function () {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[acp2] pending update wait timed out",
                ])),
            );
          }),
        b(e)
      );
    }
    async function b(e) {
      try {
        var t,
          n = await o("WAWebLimitSharingModelUtils").getChat(e);
        return (
          (n == null || (t = n.acp2Setting) == null ? void 0 : t.enabled) === !0
        );
      } catch (e) {
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[acp2] restriction check failed, keeping the message: ",
                "",
              ])),
            e,
          ),
          !1
        );
      }
    }
    function v(e) {
      var t,
        n,
        r,
        a,
        i,
        l =
          (t = (n = e.deviceSentMessage) == null ? void 0 : n.message) != null
            ? t
            : e;
      return [
        (r = l.protocolMessage) == null ? void 0 : r.type,
        (a = o(
          "WAWebParseLimitSharingHistorySyncProto",
        ).getAcp2EnvelopeFromProtobuf(l)) == null
          ? void 0
          : a.type,
        (i = o(
          "WAWebParseLimitSharingHistorySyncProto",
        ).getLimitSharingEnvelopeFromProtobuf(l)) == null
          ? void 0
          : i.type,
      ].some(function (e) {
        return e != null && m.has(e);
      });
    }
    function S(e) {
      var t = null;
      for (var n of e)
        o("WAWebMsgDataUtils").eventTypeFromMsgType(n) !==
          o("WAWebCommonMsgUtils").EventType.IGNORE &&
          n.t != null &&
          (t == null || n.t > t) &&
          (t = n.t);
      return t;
    }
    async function R(e, t) {
      var n = await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["chat"], async function (n) {
          var r = n[0],
            o = await r.get(e, !1);
          return o == null || (o.t != null && o.t >= t)
            ? !1
            : (await r.createOrMerge(e, { id: e, t }), !0);
        });
      n &&
        o("WAWebBackendApi").frontendFireAndForget("updateChatToLatest", {
          chatIdToLatestUpdates: [{ id: e, t }],
        });
    }
    ((l.hideMsgsReceivedInAcp2RestrictedChat = f),
      (l.hideScheduledMsgInAcp2RestrictedChat = g),
      (l.wouldHideMsgInAcp2RestrictedChat = h));
  },
  98,
);
