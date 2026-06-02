__d(
  "WAWebSendEventCreationMsgAction",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebChatGetters",
    "WAWebGenerateEventCallLink",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.chat,
        n = e.eventCreationOpts,
        r = e.quotedMsg,
        a = await u({ eventCreationOpts: n, chat: t, quotedMsg: r });
      await o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, a);
    }
    function s(e) {
      return e == null || e === "";
    }
    async function u(e) {
      var t,
        n = e.chat,
        a = e.eventCreationOpts,
        i = e.quotedMsg,
        l = a.callType,
        u = a.description,
        c = a.endTime,
        d = a.extraGuestsAllowed,
        m = a.isScheduledCall,
        p = a.location,
        _ = a.name,
        f = a.requireApproval,
        g = a.startTime,
        h = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(
          n,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        y = o("WAWebChatGetters").getIsGroup(n) ? h : void 0,
        C = (t = i == null ? void 0 : i.msgContextInfo(n.id)) != null ? t : {},
        b = new (r("WAWebMsgKey"))({
          fromMe: !0,
          remote: n.id,
          id: await r("WAWebMsgKey").newId(),
          participant: y,
        }),
        v = u == null ? void 0 : u.trim(),
        S = p == null ? void 0 : p.trim();
      return babelHelpers.extends(
        {
          id: b,
          type: o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
          kind: o("WAWebMsgType").MsgKind.EventCreation,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          t: o("WATimeUtils").unixTime(),
          from: h,
          to: n.id,
          author: y,
          isNewMsg: !0,
          local: !0,
          ack: o("WAWebAck").ACK.CLOCK,
          messageSecret: self.crypto.getRandomValues(new Uint8Array(32)),
          eventName: _.trim(),
          isEventCanceled: !1,
          eventDescription: s(v) ? void 0 : v,
          eventStartTime: g,
          eventEndTime: c,
          eventLocation: s(S)
            ? void 0
            : { degreesLatitude: 0, degreesLongitude: 0, name: S },
          eventJoinLink:
            l != null
              ? await o("WAWebGenerateEventCallLink").createEventCallLink(
                  g,
                  l,
                  f,
                )
              : void 0,
          eventIsScheduledCall: m != null ? !!m : void 0,
          eventExtraGuestsAllowed: d != null ? !!d : void 0,
        },
        C,
        o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(n),
      );
    }
    l.sendEventCreationMessage = e;
  },
  98,
);
