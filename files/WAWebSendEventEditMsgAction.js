__d(
  "WAWebSendEventEditMsgAction",
  [
    "WATimeUtils",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebCreateEncryptedEventEditMsgData",
    "WAWebFrontendMsgGetters",
    "WAWebGenerateEventCallLink",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebViewMode.flow",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n,
        a = e.callType,
        i = e.description,
        l = e.endTime,
        u = e.isEventCanceled,
        c = e.location,
        d = e.name,
        m = e.startTime,
        p = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(
          o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage,
        ),
        _ = new (r("WAWebMsgKey"))({
          fromMe: !0,
          remote: t.id.remote,
          id: await r("WAWebMsgKey").newId(),
          participant: p,
        }),
        f = i == null ? void 0 : i.trim(),
        g = c == null ? void 0 : c.trim(),
        h = a == null ? void 0 : t.eventJoinLink;
      a != null &&
        (m !== t.eventStartTime ||
          !((n = t.eventJoinLink) != null && n.includes(a))) &&
        (h = await o("WAWebGenerateEventCallLink").createEventCallLink(m, a));
      var y = babelHelpers.extends(
          {},
          o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
            _,
            o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage,
          ),
          {
            id: _,
            t: o("WATimeUtils").unixTime(),
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            subtype: "event_edit_decrypted",
            kind: o("WAWebMsgType").MsgKind.ProtocolEventEdit,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            latestEditSenderTimestampMs: o(
              "WAWebAddOnParseWebMsgInfo",
            ).getIncreasingLatestSenderTimestampMs(
              t.unsafe().latestEditSenderTimestampMs,
            ),
            latestEditMsgKey: _,
            protocolMessageKey: t.id,
            editMsgType: o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
            eventName: d.trim(),
            eventStartTime: m,
            eventEndTime: l,
            isEventCanceled: u,
            eventLocation: s(g)
              ? void 0
              : { degreesLatitude: 0, degreesLongitude: 0, name: g },
            eventDescription: s(f) ? void 0 : f,
            eventJoinLink: h,
          },
        ),
        C = await o(
          "WAWebCreateEncryptedEventEditMsgData",
        ).createEncryptedEventEditMsgData(y, t),
        b = await o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(C);
      if (
        b.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK
      )
        throw r("err")("Failed to send event edit");
    }
    function s(e) {
      return e == null || e === "";
    }
    l.sendEventEditMessage = e;
  },
  98,
);
