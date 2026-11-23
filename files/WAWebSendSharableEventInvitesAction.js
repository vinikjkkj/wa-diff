__d(
  "WAWebSendSharableEventInvitesAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBroadcastListIdUtils",
    "WAWebBroadcastMsgDataUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebDBSharableEvent",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebLidMeUserForChat",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebSendBroadcastMsgAction",
    "WAWebSendMsgChatAction",
    "WAWebSharableEventInviteMsg",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "event_invitation",
      u = new Set();
    async function c(e, t, n) {
      if (t.length === 0) return null;
      var r = await o("WAWebDBSharableEvent").getSharableEvent(e);
      if (r == null) return null;
      var a = o("WAWebBroadcastListIdUtils").createBroadcastListJid(
        function (e) {
          return (
            u.has(e) ||
            o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(e),
            ) != null
          );
        },
      );
      u.add(a);
      var i = babelHelpers.extends(
        {},
        await o("WAWebBroadcastMsgDataUtils").createBroadcastMsgDataBase(a),
        await o(
          "WAWebSharableEventInviteMsg",
        ).buildSharableEventInviteMsgFields(r),
        m(n),
      );
      return o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction({
        contextSource: s,
        isParentHidden: !0,
        msgData: i,
        recipients: t,
      });
    }
    async function d(t, n) {
      var a = await o("WAWebDBSharableEvent").getSharableEvent(t);
      if (a == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][invite] chat invite not sent: no stored event eventId=",
                "",
              ])),
            t,
          ),
          null
        );
      var i = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(
          n,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        l = o("WAWebChatGetters").getIsGroup(n) ? i : void 0,
        s = babelHelpers.extends(
          {
            id: new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: n.id,
              id: await r("WAWebMsgKey").newId(),
              participant: l,
            }),
            t: o("WATimeUtils").unixTime(),
            from: i,
            to: n.id,
            author: l,
            isNewMsg: !0,
            local: !0,
            ack: o("WAWebAck").ACK.CLOCK,
          },
          await o(
            "WAWebSharableEventInviteMsg",
          ).buildSharableEventInviteMsgFields(a),
          o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(n),
        ),
        u = o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, s),
        c = u[1];
      return c;
    }
    function m(e) {
      var t,
        n = (t = e == null ? void 0 : e.trim()) != null ? t : "";
      return n === "" ? {} : { sharableEventInviteCaption: n };
    }
    ((l.sendSharableEventInvites = c), (l.sendSharableEventInviteToChat = d));
  },
  98,
);
